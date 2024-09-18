<template>
    <div>
        <template v-if="state.sorter === 'recommend' && state.filters === 'all'">
            <ul v-show="recommend.length > 0"
                class="service-replacement-program-Card"
                :class="labelClass(recommend)">
                <Product
                    v-for="device in recommend"
                    :summary="device"
                    :key="device"
                />
            </ul>
            <div v-show="recommend.length === 0"
                class="u-Adjust_Mt-32 u-Adjust_Mb-32">
                <p>条件に該当する製品がありません。</p>
            </div>
        </template>

        <template v-else>
            <ul v-show="filtered.length > 0"
                class="service-replacement-program-Card"
                :class="labelClass(filtered)">
                <Product
                    v-for="device in filtered"
                    :summary="device"
                    :key="device"
                />
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
import Product from './Product.vue';
import {state} from './Store.js';
import { device_top } from '../../../../js/csv-data/device-top';

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
        recommend () {
            return this.devices.sort((a, b) => a.priority - b.priority);
        },
        labelClass () {
            return (data) => [{'service-replacement-program-Card_Grid': this.hasLabelForData(data)}]
        },
    },
    methods: {
        hasLabelForData(data) {
            return data.some( item => item.new || item.releasetext || item.basictext);
        },
    }
}
</script>
