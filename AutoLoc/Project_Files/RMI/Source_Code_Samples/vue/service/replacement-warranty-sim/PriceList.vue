<template>
    <div>
        <div id="search-box" class="c-Theme-Light service-Search_Box">
            <form
                class="service-Search_Box-inner"
                @submit.prevent="searchReset"
            >
                <div class="service-Search_Box-inputarea">
                    <div class="service-Search_Box-keyword">
                        <label for="service-Search_Box-keyword" class="service-Search_Box-label">キーワードから探す</label>
                        <div class="service-Search_Box-keyword-input u-Adjust_Mt-16">
                            <input
                                id="service-Search_Box-keyword"
                                class="c-Form_Input"
                                v-model="keywordValue"
                                name="keyword"
                                placeholder="機種名またはメーカー名を入力"
                                ref="searchKeyword"
                                @input="filterdData($event)"
                                @keydown.enter="clickSearchIcon"
                                @blur="removeProhibition"
                                @focus="changeActive($event)"
                            >
                            <a
                                ref="searchIcon"
                                class="js-scroll"
                                :href="toggleLink ? '#search-box' : null"
                                :tabindex="toggleLink ? 0 : -1"
                                :aria-disabled="toggleLink ? null : 'true'"
                            >
                                <span class="c-Icon_Search" :style="toggleLink ? null : { color: '#9999e0' }"></span>
                            </a>
                        </div>
                    </div>
                    <div class="u-Adjust_Mt-24 service-Search_Box-manufacturer">
                        <label for="service-Search_Box-manufacturer" class="service-Search_Box-label">メーカーを絞り込む</label>
                        <div class="c-Form_Select u-Adjust_Mt-16">
                            <select
                                name="manufacturer"
                                id="service-Search_Box-manufacturer"
                                ref="searchManufacturer"
                                @change="filterdData($event)"
                                @focus="changeActive($event)"
                            >
                                <option value="all">すべて</option>
                                <option
                                    v-for="(oem, i) in oemList"
                                    :value="oem"
                                    :key="i"
                                >{{ oem }}</option>
                        </select>
                        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                        </div>
                    </div>
                </div>
                <button class="c-Btn_Regular" type="submit"><span>検索条件をリセット</span></button>
            </form>
        </div>
        <div class="l-System_Container u-Adjust_Mt-40">
            <template v-if="this.priceList.length === 0">
                <ResultNon />
            </template>
            <template v-else>
                <ResultSp :priceList="priceList" />
                <ResultPc :priceList="priceList" />
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import ResultNon from './components/ResultNon.vue';
import ResultPc from './components/ResultPc.vue';
import ResultSp from './components/ResultSp.vue';

export default {
    name: 'PriceList',
    components: {
        ResultNon,
        ResultPc,
        ResultSp,
    },
    data () {
        return {
            priceList: [],
            defaultPriceList: [],
            oemList: [],
            keywordValue: '',
            manufacturerValue: 'all',
            selectElm: '',
            canProhibition: false,
            activeType: '',
            timerId: '',
        }
    },
    created () {
        this.setJson();
    },
    computed: {
        toggleLink() {
            if (this.keywordValue.length > 0) {
                return true;
            } else {
                return false;
            }
        },
    },
    watch: {
        timerId(newVal, oldVal) {
            clearTimeout(oldVal);
        }
    },
    methods: {
        async getJson() {
            const res = await axios.get('/assets/json/replacement-warranty-sim-price-list.json');
            const data = res.status == 200 ? res.data : [];
            return data;
        },
        setJson() {
            const jsonData = this.getJson();

            jsonData
                .then(response => {
                    const sortedData = response
                    this.defaultPriceList = sortedData;
                    this.priceList = sortedData;
                    this.oemList = new Set(sortedData.map(item => item.oem));
                })
                .catch(err => {
                    console.log(err);
                })
        },
        searchReset() {
            if (this.canProhibition) {
                return;
            }

            this.priceList = this.defaultPriceList;
            this.keywordValue = '';
            this.manufacturerValue = 'all';
            this.selectElm.value = 'all';
        },
        filterdData(e) {
            switch (this.activeType) {
                case ('keyword'):
                    this.keywordValue = e.target.value;
                    break;
                case ('manufacturer'):
                    this.manufacturerValue = e.target.value;
                    break;
                default:
                    break; // do nothing
            }

            // 全検索
            if (this.manufacturerValue === 'all' && !this.keywordValue) {
                this.priceList = this.defaultPriceList;
                return;
            }

            this.priceList = this.keywordValue && this.manufacturerValue && this.manufacturerValue !== 'all' ? // キーワード & メーカーで検索
                                this.defaultPriceList
                                    .filter(item => {
                                        const toKtakanaOem = this.hiraganaToKatakana(item.oem.toLowerCase());
                                        const toKtakanaDevice = this.hiraganaToKatakana(item.device.toLowerCase());
                                        const toKtakanaKeyword = this.ZenkakuToHankaku(this.hiraganaToKatakana(this.keywordValue.toLowerCase()));

                                        return toKtakanaOem.indexOf(toKtakanaKeyword) !== -1 || toKtakanaDevice.indexOf(toKtakanaKeyword) !== -1;
                                    })
                                    .filter(item => {
                                        return item.oem === this.manufacturerValue;
                                    }) :
                                this.keywordValue ? // キーワードで検索
                                    this.defaultPriceList
                                        .filter(item => {
                                            const toKtakanaOem = this.hiraganaToKatakana(item.oem.toLowerCase());
                                            const toKtakanaDevice = this.hiraganaToKatakana(item.device.toLowerCase());
                                            const toKtakanaKeyword = this.ZenkakuToHankaku(this.hiraganaToKatakana(this.keywordValue.toLowerCase()));

                                            return toKtakanaOem.indexOf(toKtakanaKeyword) !== -1 || toKtakanaDevice.indexOf(toKtakanaKeyword) !== -1;
                                        }) : // メーカーで検索
                                this.defaultPriceList.filter(item => {
                                    return item.oem === this.manufacturerValue;
                                });
        },
        hiraganaToKatakana(str) {
            return str.replace(/[\u3041-\u3096]/g, (match) => {
                const chr = match.charCodeAt(0) + 0x60;
                return String.fromCharCode(chr);
            })
        },
        ZenkakuToHankaku(str) {
            return str.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, (match) => {
                return String.fromCharCode(match.charCodeAt(0) - 0xFEE0);
            });
        },
        clickSearchIcon() {
            this.canProhibition = true;
            this.$refs.searchIcon.click();
            this.timerId = setTimeout(() => this.$refs.searchKeyword.focus(), 300);
        },
        removeProhibition() {
            this.canProhibition = false;
        },
        changeActive(e) {
            this.activeType = e.target.name;
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.selectElm = document.getElementById('service-Search_Box-manufacturer');
        });
    }
}
</script>
