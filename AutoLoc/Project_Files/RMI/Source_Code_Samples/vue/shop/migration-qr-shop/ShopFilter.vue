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
    </div>
</template>


<script>
import {state, mutations} from './Store.js';

export default {
    name: 'ShopFilter',
    props: ['shops'],
    data () {
        return {
            path: {
                sitepath: '/'
            },
            state: state
        }
    },
    computed: {
        prefectures () {
            let prefs = this.shops.map(function(item) {
                return item.都道府県;
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
                if (item.都道府県 === selectedPref && cts.indexOf(item.市区町村) < 0) {
                    cts.push(item.市区町村);
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
        }
    },
    methods: {
        setFilter () {
            mutations.setCurrentPage(1);
            mutations.setPages();
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
