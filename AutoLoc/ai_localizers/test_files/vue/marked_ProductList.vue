<template>
    <div>
        <template v-if="state.sorter === 'recommend' && state.filters === 'all'">
            <p class="u-Adjust_Mt-24">{t('プレミアム スタイル')}</p>
            <h2 class="c-Heading_Lv3 u-Adjust_Mt-8">{t('心を満たすクオリティー')}</h2>
            <ul v-show="recommend1.length > 0"
                class="smartphone-top-Card"
                :class="labelClass(recommend1)">
                <template v-for="(device, index) in recommend1">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="recommend1.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>{t('条件に該当する製品がありません。')}</p>
            </div>

            <p class="u-Adjust_Mt-48">{t('ニュースタンダード')}</p>
            <h2 class="c-Heading_Lv3 u-Adjust_Mt-8">{t('挑戦的で新しい')}</h2>
            <ul v-show="recommend3.length > 0"
                class="smartphone-top-Card"
                :class="labelClass(recommend3)">
                <template v-for="(device, index) in recommend3">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="recommend3.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>{t('条件に該当する製品がありません。')}</p>
            </div>

            <p class="u-Adjust_Mt-48">{t('コンフォートスタイル')}</p>
            <h2 class="c-Heading_Lv3 u-Adjust_Mt-8">{t('手放せない使いやすさ')}</h2>
            <ul v-show="recommend2.length > 0"
                class="smartphone-top-Card"
                :class="labelClass(recommend2)">
                <template v-for="(device, index) in recommend2">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="recommend2.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>{t('条件に該当する製品がありません。')}</p>
            </div>

        </template>

        <template v-else>
            <ul v-show="filtered.length > 0"
                class="smartphone-top-Card"
                :class="labelClass(filtered)">
                <template v-for="(device, index) in filtered">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="filtered.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>{t('条件に該当する製品がありません。')}</p>
            </div>
        </template>
    </div>
</template>


<script>
import 'whatwg-fetch';
import 'core-js/modules/es.promise';
import Product from './Product.vue';
import {state, mutations} from './Store.js';
import { device_top } from '../../../js/csv-data/device-top';

export default {
    name: 'ProductList',
    components: {
        Product
    },
    data () {
        return {
            state: state,
            devices: [],
            hasLabel: false
        }
    },
    created () {
        this.devices = device_top;
    },
    computed: {
        filtered () {
            let filteredData = this.devices;
            filteredData.forEach((data, index) => {
                data.index = index;
            });
            if (this.state.filters !== 'all') {
                filteredData = filteredData.filter(item => {
                    return ((!this.state.filters || item.brand === this.state.filters ) && item.brand.includes(this.state.filters))
                });
            }

            const blankExclusion = filteredData.filter(data => {
                return data.price1 != '';
            });

            switch (this.state.sorter) {
                case 'dateDesc':

                    filteredData = blankExclusion.sort((a, b) => {

                        let dateA = a.release ? new Date(a.release) : null;
                        let dateB = b.release ? new Date(b.release) : null;

                        if (dateA === null && a.product === 'Xperia 5 V') return -1;
                        if (dateB === null && b.product === 'Xperia 5 V') return 1;

                        if (a.release === b.release) {
                            return a.priority - b.priority;
                        } else {
                            return dateB - dateA;
                        }
                    });
                    break;
                case 'priceAsc':
                    filteredData = blankExclusion.sort((a, b) => {
                        if (a.price2 === b.price2) {
                            return a.priority - b.priority;
                        } else {
                            return a.price2 - b.price2;
                        }
                    });
                    break;
                case 'priceDesc':
                    filteredData = blankExclusion.sort((a, b) => {
                        if (a.price2 === b.price2) {
                            return a.priority - b.priority;
                        } else {
                            return b.price2 - a.price2;
                        }
                    });
                    break;
                case 'batteryDesc':
                    filteredData = blankExclusion.sort((a, b) => {
                        if (a.battery === b.battery) {
                            return a.priority - b.priority;
                        } else {
                            return b.battery - a.battery;
                        }
                    });
                    break;
                case 'displayDesc':
                    filteredData = blankExclusion.sort((a, b) => {
                        if (a.display === b.display) {
                            return a.priority - b.priority;
                        } else {
                            return b.display - a.display;
                        }
                    });
                    break;
                default:
                    return filteredData;
            }
            return filteredData;
        },
        recommend1 () {
            return this.devices.filter(item => item.style.substring(0, 1) === '1')
                                .sort((a, b) => {
                                    return a.priority - b.priority;
                                });
        },
        recommend2 () {
            return this.devices.filter(item => item.style.substring(0, 1) === '2')
                                .sort((a, b) => {
                                    return a.priority - b.priority;
                                });
        },
        recommend3 () {
            return this.devices.filter(item => item.style.substring(0, 1) === '3')
                                .sort((a, b) => {
                                    return a.priority - b.priority;
                                });
        },
        labelClass () {
            return (data) => [{'smartphone-top-Card_Grid': this.hasLabelForData(data)}]
        },
    },
    methods: {
        hasLabelForData(data) {
            return data.some( item => item.new || item.releasetext || item.basictext);
        }
    }
}
</script>