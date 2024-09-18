<template>
<div>
    <div class="product-iphone-Tradein" id="js-question">
        <div class="product-iphone-Tradein_Container">

            <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">1.購入したキャリアを選択</h3>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">※キャリア以外でご購入された製品はSIMフリーを選択してください。</p>
            <div class="c-Form_Select u-Adjust_Mt-16">
                <select
                    v-model="selectedCarrier"
                    @change="carrierSelect()"
                    data-ratid="iphone-se-3rd_tradein-03_a"
                    data-ratevent="click"
                    data-ratparam="all"
                >
                    <option value="">携帯電話会社を選択</option>
                    <option v-for="( carrier, index ) in carrierList" :key="index" :value="carrier">{{ carrier }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>

            <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">2. モデルを選択</h3>
            <div class="c-Form_Select u-Adjust_Mt-16">
                <select
                    v-model="selectedDevice"
                    @change="deviceSelect()"
                    class="product-iphone-Tradein_Select"
                    id="js-tradein-device"
                    disabled
                    data-ratid="iphone-se-3rd_tradein-04_a"
                    data-ratevent="click"
                    data-ratparam="all"
                >
                    <option value="">モデルを選択</option>
                    <option v-for="( device, index ) in deviceList" :key="index" :value="device">{{ device }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>

            <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">3. 容量を選択</h3>
            <div class="c-Form_Select u-Adjust_Mt-16">
                <select
                    v-model="selectedMemory"
                    @change="memorySelect()"
                    class="product-iphone-Tradein_Select"
                    id="js-tradein-memory"
                    disabled
                    data-ratid="iphone-se-3rd_tradein-05_a"
                    data-ratevent="click"
                    data-ratparam="all"
                >
                    <option value="">容量を選択</option>
                    <option v-for="( memory, index ) in memoryList" :key="index" :value="memory">{{ memory }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>

            <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
                <a href="#"
                    class="c-Btn_Secondly-large"
                    id="js-tradein-btn"
                    aria-disabled="true"
                    :style="{ pointerEvents: isPoiner }"
                    @click.prevent="priceSubmit()"
                    data-ratid="iphone-se-3rd_tradein-06_a"
                    data-ratevent="click"
                    data-ratparam="all"
                >
                    <span>下取り価格を見る</span>
                </a>
            </div>
        </div>
    </div>
    <template v-if="isActive">
        <Result
        :priceList="priceList"
        :selectedCarrier="selectedCarrier"
        :selectedDevice="selectedDevice"
        :selectedMemory="selectedMemory"
        :question="question"
        :lastUpdate="lastUpdate"
        :tradeinOtherproduct="tradeinOtherproduct"
        :deviceName="deviceName" />
    </template>
</div>
</template>

<script>
import axios from 'axios';
import Result from './components/Result-a.vue';

export default {
    name: 'PriceDetail',
    components: {
        Result
    },
    data () {
        return {
            carrierList: [
                '楽天モバイル','NTTドコモ','au','SoftBank','その他（SIMフリー）'
            ],
            deviceList: [],
            memoryList: [],
            priceList: [],
            defaultList: [],
            filtermemoryList: [],
            selectedCarrier: '',
            selectedDevice: '',
            selectedMemory: '',
            tradeinBtn: null,
            tradeinDevice: null,
            tradeinMemory: null,
            question: null,
            tradeinPricecheck: null,
            tradeinOtherproduct: null,
            result: '',
            isActive: false,
            isPoiner: 'none',
            lastUpdate: '',
            deviceName: '',
        }
    },
    created() {
        this.setJson();
    },
    methods: {
        async getJson() {
            const res = await axios.get('/assets/json/tradein-pricelist.json'); // このvueファイルはse3rdの_index.jsのみでの参照なので実質動いてない
            const data = res.status == 200 ? res.data : [];
            return data;
        },
        setJson() {
            const jsonData = this.getJson();
            jsonData
                .then(response => {
                    let deviceList = [];
                    let memoryList = [];
                    let defaultList = [];
                    this.lastUpdate = response[0].update;
                    response.forEach(elm => {
                        if (elm.device.indexOf('iPhone') > -1) {
                            defaultList.push(elm);
                            deviceList.push(elm.device);
                            memoryList.push(elm.memory);
                        }
                    });
                    this.deviceList = this.filterSet(deviceList);
                    this.memoryList = memoryList;
                    this.defaultList = defaultList;
                    this.selectList = [];
                })
                .catch(err => {
                    console.log(err);
                })
        },
        filterSet(arr) {
            return arr.filter((x, i, self) => {
                return self.indexOf(x) === i;
            // }).sort((a, b) => {
            //     return (a.toLowerCase() > b.toLowerCase()) ?  1 : (b.toLowerCase() > a.toLowerCase()) ? -1 : 0;
            });
        },
        carrierSelect() {
            this.isActive = false;
            let device_tmp = [];
            let filtermemoryList_tmp = [];
            this.selectedDevice = '';
            this.defaultList.forEach(elm => {
                if( elm.carrier === this.carrierFilter(this.selectedCarrier) ) {
                    device_tmp.push(elm.device);
                    filtermemoryList_tmp.push(elm);
                }
            });
            this.deviceList = this.filterSet(device_tmp);
            this.filtermemoryList = filtermemoryList_tmp;
            this.tradeinDevice.removeAttribute('disabled');
            this.selectedMemory = '';
            this.tradeinMemory.setAttribute('disabled', 'disabled');
            this.memoryList = [];
            this.allCheck();
        },
        carrierFilter(carrier) {
            const map = new Map([
                [ '楽天モバイル','Rakuten' ],
                [ 'NTTドコモ','docomo' ],
                [ 'au', 'au' ],
                [ 'SoftBank','Softbank'],
                [ 'その他（SIMフリー）','Generic' ],
            ]);
            const keys = map.keys();
            let carrierName = '';
            for( let key of keys ) {
                if ( carrier === key ) {
                    carrierName = map.get(key);
                }
            }
            return carrierName;
        },
        deviceSelect() {
            this.isActive = false;
            let memory_tmp = [];
            const memoryList = this.filtermemoryList;
            this.selectedMemory = '';
            memoryList.forEach(elm => {
                if( elm.device === this.selectedDevice ) {
                    memory_tmp.push(elm.memory);
                }
            });
            this.memoryList = memory_tmp;
            this.tradeinMemory.removeAttribute('disabled');
            this.allCheck();
        },
        memorySelect() {
            this.isActive = false;
            this.allCheck();
        },
        allCheck() {
            if (this.carrierFilter(this.selectedCarrier) && this.selectedDevice && this.selectedMemory) {
                this.tradeinBtn.setAttribute('aria-disabled', 'false');
                this.isPoiner = 'auto';
            } else {
                this.tradeinBtn.setAttribute('aria-disabled', 'true');
                this.isPoiner = 'none';
            }
        },
        priceSubmit() {
            let pricelist_tmp = [];
            this.priceList = [];
            this.defaultList.forEach(elm => {
                if(
                    elm.carrier === this.carrierFilter(this.selectedCarrier) &&
                    elm.device === this.selectedDevice &&
                    elm.memory === this.selectedMemory
                ) {
                    pricelist_tmp.good_price = elm.good_price;
                    pricelist_tmp.fair_price = elm.fair_price;
                    pricelist_tmp.poor_price = elm.poor_price;
                }
            });
            this.priceList.push(pricelist_tmp);
            this.question.style.display = 'none';
            this.isActive = true;
        }
    },
    computed: {
        path() {
            return {
                sitepath: '/',
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.tradeinBtn = document.getElementById('js-tradein-btn');
            this.tradeinDevice = document.getElementById('js-tradein-device');
            this.tradeinMemory = document.getElementById('js-tradein-memory');
            this.question = document.getElementById('js-question');
            this.tradeinPricecheck = document.getElementById('js-rat-tradein_pricecheck');
            this.tradeinOtherproduct = document.getElementById('js-rat-tradein_otherproduct');
            this.deviceName = location.pathname.split('/')[3];
            this.tradeinPricecheck.setAttribute('data-ratId', this.deviceName + '_tradein_pricecheck');
            this.tradeinOtherproduct.setAttribute('data-ratId', this.deviceName + '_tradein-07_a');
        });
    }
}
</script>
