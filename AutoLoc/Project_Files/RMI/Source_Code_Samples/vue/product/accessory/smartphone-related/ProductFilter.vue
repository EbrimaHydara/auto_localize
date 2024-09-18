<template>
    <div>
        <a @click="restoreFilters"
            href="#modal-search"
            class="c-Data_Filter js-Modal">
            <span class="c-Icon_Sliders-l c-Data_Icon"></span>
            <span>対応機種で絞り込み</span>
        </a>

        <div id="modal-search" style="display:none;">
            <form>
                <div class="c-Form_Select">
                    <select ref="device"
                            name=""
                            id=""
                            v-model="selectedDevice">
                        <option v-for="(device, index) in devices"
                                :key="index"
                                :value="getDeviceValue(device)">{{ device }}</option>
                    </select>
                    <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                </div>
                <!-- <div class="c-Form_Select">
                    <select ref="price"
                            name=""
                            id=""
                            v-model="selectedPrice">
                        <option v-for="(price, index) in prices"
                                :key="index"
                                :value="getPriceValue(price)">{{ price }}以下</option>
                    </select>
                    <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                </div> -->

                <!-- <ul class="accessory-top-Search_Item">
                <li>
                    <label class="c-Form_Checkboxblock">
                    <input type="checkbox" name="" id="" value="">
                    <div class="c-Form_Checkboxblock-wrap">
                        <span class="c-Icon_Check"></span><span class="c-Form_Checkboxblock-label">オンライン在庫あり</span>
                    </div>
                    </label>
                </li>
                </ul> -->
                <div class="accessory-top-Search_Submit">
                <button @click="setFilter"
                        type="button"
                        class="c-Btn_Secondly js-Modal_Close"
                        :data-ratid="ratId"
                        data-ratevent="click"
                        data-ratparam="all">絞り込む</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import {state, mutations} from './Store.js';
import {device_top} from '../../../../js/csv-data/device-top';


export default {
    name: 'ProductFilter',
    props: ['ratId'],
    data () {
        return {
            state: state,
            selectedPrice: '',
            prices: ['価格', 1000, 2000, 3000, 4000],
            selectedDevice: '',
            devices: ['対応機種']
        }
    },
    created () {
        const dataAndroid = device_top;
        const data = [...dataAndroid];
        this.devices = [...this.devices, ...data.map(item => item.product)];
    },
    methods: {
        getDeviceValue (device) {
            return (device === '対応機種') ? '' : device;
        },
        getPriceValue (price) {
            return (price === '価格') ? '' : price;
        },
        setFilter () {
            let filters = [];

            filters.push({key: 'device', value: this.$refs.device.value});
            // filters.push({key: 'price', value: this.$refs.price.value});
            mutations.setFilter(filters);
        },
        restoreFilters() {
            this.state.filters.forEach(filter => {
                if (filter.key === 'device') {
                    this.selectedDevice = filter.value;
                }
                if (filter.key === 'price') {
                    this.selectedPrice = filter.value;
                }
            })
        }
    }
}
</script>
