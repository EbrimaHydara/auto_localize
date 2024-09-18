<template>
    <div>
        <div class="shop-Search_Selectors">
            <div class="c-Form_Select">
                <select v-model="prefecture" v-on:change="changeUrlParam();setDefaultValue();">
                    <option v-for="(prefecture, index) in prefectures"
                            :key="index"
                            :value="prefecture">{{ prefecture ? prefecture : '都道府県を選択'}}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
            <div class="c-Form_Select">
                <select v-model="city" v-on:change="changeUrlParam">
                    <option v-for="(city, index) in cities"
                            :key="index"
                            :value="city">{{ city ? city : '市区町村を選択'}}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>
        <div id="modal-search" style="display:none;">
            <ul class="shop-Search_Service-list">
                <li v-for="(service, index) in services"
                    :key=index>
                    <label class="c-Form_Checkboxblock">
                        <input type="checkbox"
                                v-model="selectedServices"
                                :value="service">
                        <span class="c-Form_Checkboxblock-wrap">
                            <span class="c-Icon_Check"></span><span class="c-Form_Checkboxblock-label">{{service.name}}</span>
                        </span>
                    </label>
                </li>
            </ul>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <button @click="setFilter"
                        type="button"
                        class="c-Btn_Secondly-half js-Modal_Close">検索する</button>
            </div>
        </div>
    </div>
</template>


<script>
import {state, mutations} from './Store.js';

export default {
    name: 'ShopFilter',
    props: ['shops', 'availableServices'],
    data () {
        return {
            path: {
                sitepath: '/'
            },
            state: state,
            selectedServices: []
        }
    },
    computed: {
        services () {
            const result = this.availableServices.map(function(item) {
                item.code = parseInt(item.code, 10);
                return item;
            });
            return result;
        },
        checkNoAvailableService () {
            return this.availableServices.length === 0 ? true : false;
        },
        prefectures () {
            let prefs = this.shops.map(function(item) {
                return item.location.prefecture;
            }).filter(function(item, i, array) {
                return array.indexOf(item) === i;
            });
            prefs.splice(0, 0, '');
            return prefs;
        },
        prefecture: {
            get () {
                return mutations.getPrefecture();
            },
            set (value) {
                mutations.setPrefecture(value);
                mutations.setCity('');
                mutations.setCurrentPage(1);
            }
        },
        cities () {
            let selectedPref = this.prefecture;
            let cts = [''];
            this.shops.forEach(function(item) {
                if (item.location.prefecture === selectedPref && cts.indexOf(item.location.city) < 0) {
                    cts.push(item.location.city);
                }
            });
            return cts;
        },
        city : {
            get () {
                return mutations.getCity();
            },
            set (value) {
                mutations.setCity(value);
                mutations.setCurrentPage(1);
            }
        },
        selectedServicesLabel () {
            let labels = mutations.getFilters().map((label) => {
                return label.name;
            });
            return labels.join(' / ');
        }
    },
    methods: {
        setFilter () {
            mutations.setFilters(this.selectedServices);
            mutations.setCurrentPage(1);
            mutations.setPages();
        },
        restoreFilters () {
            this.selectedServices = mutations.getFilters();
        },
        changeUrlParam () {
            const selectBox = document.querySelectorAll('select');
            window.location.search = `prefecture=${selectBox[0].value}&city=${selectBox[1].value}`;
        },
        setDefaultValue() {
            const selectBox = document.querySelectorAll('select');
            window.location.search = `prefecture=${selectBox[0].value}&city=`;
            selectBox[1].value = '市区町村を選択';
        }
    }
}
</script>
