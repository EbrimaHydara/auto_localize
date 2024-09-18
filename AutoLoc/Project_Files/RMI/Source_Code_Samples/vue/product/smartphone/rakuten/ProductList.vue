<template>
    <div>
        <template v-if="state.sorter === 'recommend'">
            <ul v-show="recommend3.length > 0"
                class="smartphone-top-Card">
                <template v-for="(device, index) in recommend3">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="recommend3.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>条件に該当する製品がありません。</p>
            </div>

        </template>

        <template v-else>
            <ul v-show="filtered.length > 0"
                class="smartphone-top-Card">
                <template v-for="(device, index) in filtered">
                    <Product :summary="device" :key="index"></Product>
                </template>
            </ul>
            <div v-show="filtered.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>条件に該当する製品がありません。</p>
            </div>
        </template>
    </div>
</template>


<script>
import 'whatwg-fetch';
import 'core-js/modules/es.promise';
import Product from '../Product.vue';
import {state, mutations} from '../Store.js';
import { device_rakuten } from '../../../../js/csv-data/device-rakuten';

export default {
    name: 'ProductList',
    components: {
        Product
    },
    data () {
        return {
            state: state,
            devices: []
        }
    },
    created () {
        this.devices = device_rakuten;
    },
    computed: {
        filtered () {
            let filteredData = this.devices;
            filteredData.forEach((data, index) => {
                data.index = index;
            });
            const blankExclusion = filteredData.filter(data => {
                return data.price1 != '';
            });

            switch (this.state.sorter) {
                case 'dateDesc':
                    filteredData = blankExclusion.sort((a, b) => {
                        let dateA = new Date(a.release);
                        let dateB = new Date(b.release);

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
                    filteredData = filteredData.sort((a, b) => {
                        if (a.battery === b.battery) {
                            return a.priority - b.priority;
                        } else {
                            return b.battery - a.battery;
                        }
                    });
                    break;
                case 'displayDesc':
                    filteredData = filteredData.sort((a, b) => {
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
        }
    },
}
</script>
