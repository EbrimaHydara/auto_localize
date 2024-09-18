<template>
    <div>
        <div :class="`c-Theme-Light ${namespace}-Layout_Container-list`">
            <h3 class="c-Heading_Lv4">製品の種類</h3>
            <div :class="`u-Adjust_Mt-16 ${namespace}-Layout_Radio`">
                <label v-for="(product, index) in productType" :key="index" class="c-Form_Radio">
                    <input type="radio" name="benefit" :value="product" v-model="selectedProductType"
                        @change="productTypeSelect()">
                    <span class="c-Form_Radio-icon"></span>
                    <span class="c-Form_Radio-label">{{ product }}</span>
                </label>
            </div>
            <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">ブランド・シリーズ</h3>
            <div class="c-Form_Select u-Adjust_Mt-16">
                <select v-model="selectedBrand" @change="brandSelect()" :disabled="isProductTypeSelect()">
                    <option value="">ブランド・シリーズ</option>
                    <option v-for="( brand, index ) in brandList" :key="index" :value="brand">{{ brand }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>
        <div class="u-Adjust_Mt-40">
            <template v-if="bandType === 'frequency'">
                <FrequencyResultSp ref="frequencyResultSp" :productList="productList"
                    :frequencyBandList="frequencyBandList" />
                <FrequencyResultPc :productList="productList" :frequencyBandList="frequencyBandList" />
                <template v-if="frequencyAnnotation.length > 0">
                    <ul v-for="( annotation ) in frequencyAnnotation" class="u-Adjust_Mt-16">
                        <li class="c-Txt_Cap">{{ annotation }}</li>
                    </ul>
                </template>
            </template>
            <template v-if="bandType === 'compatible'">
                <CompatibleResultSp :productList="productList" :compatibleBandList="compatibleBandList" />
                <CompatibleResultPc :productList="productList" :compatibleBandList="compatibleBandList" />
                <template v-if="compatibleAnnotation.length > 0">
                    <ul v-for="( annotation ) in compatibleAnnotation" class="u-Adjust_Mt-16">
                        <li class="c-Txt_Cap">{{ annotation }}</li>
                    </ul>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import FrequencyResultSp from './frequency/ResultSp.vue';
import FrequencyResultPc from './frequency/ResultPc.vue';
import CompatibleResultSp from './compatible/ResultSp.vue';
import CompatibleResultPc from './compatible/ResultPc.vue';

export default {
    name: 'BandList',
    components: {
        FrequencyResultSp,
        FrequencyResultPc,
        CompatibleResultSp,
        CompatibleResultPc
    },
    props: ['bandType'],
    data() {
        return {
            namespace: 'product-band',
            productType: [
                'iPhone', 'Android', 'Wi-Fiルーター'
            ],
            frequencyBandList: {
                '5G': {
                    bandName: [
                        '5G/700MHz/バンドn28',
                        '5G/1.7GHz/バンドn3',
                        '5G/3.7GHz/バンドn77',
                        '5G/3.5GHz/バンドn78',
                        '5G/4.5GHz/バンドn79',
                        '5G/28GHz/バンドn257'
                    ],
                    frequency: [
                        '700MHz',
                        '1.7GHz',
                        '3.7GHz',
                        '3.5GHz',
                        '4.5GHz',
                        '28GHz'
                    ],
                    band: [
                        'バンドn28',
                        'バンドn3',
                        'バンドn77',
                        'バンドn78',
                        'バンドn79',
                        'バンドn257'
                    ]
                },
                'LTE': {
                    bandName: [
                        'LTE/700MHz/バンド28',
                        'LTE/800MHz/バンド18/26',
                        'LTE/800MHz/バンド19',
                        'LTE/900MHz/バンド8',
                        'LTE/1.5GHz/バンド11',
                        'LTE/1.5GHz/バンド21',
                        'LTE/1.7GHz/バンド3',
                        'LTE/2.0GHz/バンド1',
                        'LTE/3.5GHz/バンド42'
                    ],
                    frequency: [
                        '700MHz',
                        '800MHz',
                        '',
                        '900MHz',
                        '1.5GHz',
                        '',
                        '1.7GHz',
                        '2.0GHz',
                        '3.5GHz'
                    ],
                    band: [
                        'バンド28',
                        'バンド18/26',
                        'バンド19',
                        'バンド8',
                        'バンド11',
                        'バンド21',
                        'バンド3',
                        'バンド1',
                        'バンド42'
                    ]
                },
                '3G': {
                    bandName: [
                        '3G/800MHz/バンドVI/XIX',
                        '3G/900MHz/バンドVIII',
                        '3G/1.5GHz/バンドXI',
                        '3G/1.7GHz/バンドIX',
                        '3G/2.0GHz/バンドI',
                    ],
                    frequency: [
                        '800MHz',
                        '900MHz',
                        '1.5GHz',
                        '1.7GHz',
                        '2.0GHz',
                    ],
                    band: [
                        'バンドVI/XIX',
                        'バンドVIII',
                        'バンドXI',
                        'バンドIX',
                        'バンドI'
                    ]
                },
            },
            compatibleBandList: {
                'docomo': {
                    data: ['docomo(データ通信)'],
                    call: ['docomo(通話)'],
                },
                'au': {
                    data: ['au(データ通信)'],
                    call: ['au(通話)']
                },
                'softbank': {
                    data: ['softbank(データ通信)'],
                    call: ['softbank(通話)'],
                },
            },
            brandList: {
                'iPhone': [
                    'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone SE'
                ],
                'Android': [
                    'AQUOS', 'Samsung', 'OPPO', 'Rakuten', 'Xiaomi', 'Xperia'
                ],
                'Wi-Fiルーター': [
                    'Rakuten', 'Aterm'
                ]
            },
            productList: [],
            defaultBrandList: [],
            defaultList: [],
            selectedProductType: '',
            selectedBrand: '',
            frequencyAnnotation: [],
            compatibleAnnotation: []
        }
    },
    created() {
        this.setJson();
    },
    methods: {
        isProductTypeSelect() {
            return (this.selectedProductType === '') ? true : false;
        },
        async getJson() {
            const res = await axios.get('/assets/json/band.json');
            const data = res.status == 200 ? res.data : [];
            return data;
        },
        setJson() {
            const jsonData = this.getJson();
            jsonData
                .then(response => {
                    response.forEach(elm => {
                        if (this.bandType === 'frequency' && elm['周波数帯注釈'] !== '') {
                            this.frequencyAnnotation.push(elm['周波数帯注釈']);
                        }
                        if (this.bandType === 'compatible' && elm['他社回線注釈'] !== '') {
                            this.compatibleAnnotation.push(elm['他社回線注釈']);
                        }
                    });
                    this.defaultBrandList = this.brandList;
                    this.defaultList = response;
                    this.productList = response;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        productTypeSelect() {
            if (this.bandType === 'frequency' && window.innerWidth < 769) {
                this.$refs.frequencyResultSp.resetAccordion();
            }
            if (this.selectedProductType !== '') {
                this.brandList = this.defaultBrandList[this.selectedProductType];
            } else {
                this.brandList = this.defaultBrandList;
            }
            this.resultShow(true);
        },
        brandSelect() {
            if (this.bandType === 'frequency' && window.innerWidth < 768) {
                this.$refs.frequencyResultSp.resetAccordion();
            }
            this.resultShow(false);
        },
        resultShow(isProductType) {
            let productList_tmp = [];
            this.productList = [];
            const productType = this.productType;
            if (isProductType) this.selectedBrand = "";

            if (this.selectedProductType !== '' && this.selectedBrand === '') {
                this.defaultList.forEach(elm => {
                    if (elm['製品の種類'] === this.selectedProductType) {
                        productList_tmp.push(elm);
                    }
                });
            }

            if (this.selectedProductType !== '' && this.selectedBrand !== '') {
                this.defaultList.forEach(elm => {
                    if (elm['製品の種類'] === this.selectedProductType && elm['ブランド・シリーズ'] === this.selectedBrand) {
                        productList_tmp.push(elm);
                    }
                });
            }

            const productList_tmp1 = productList_tmp.sort(function (a, b) {
                return productType.indexOf(a['製品の種類']) - productType.indexOf(b['製品の種類']);
            });

            this.productList = productList_tmp1;

            if (this.productList.length == 0) {
                this.selectedBrand = '';
            }
        }
    }
}
</script>
