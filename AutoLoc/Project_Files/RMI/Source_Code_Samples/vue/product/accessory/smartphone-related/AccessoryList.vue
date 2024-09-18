<template>
    <!-- <div class="js-Tab"> -->
    <div id="smartphone-related-scroll">
        <div class="accessory-top-Layout_Scroll accessory-top-Layout_Scroll-border">
            <ul class="accessory-top-List" role="tablist">
                <li v-for="(type, index) in accessoryTypes"
                    :key="index"
                    :id="`tab-menu${index + 1}`"
                    role="tab"
                    :aria-selected="isCurrent(type.name)"
                    :aria-controls="`tab-content${index + 1}`"
                    :data-ratId="type.ratId"
                    data-ratEvent="click"
                    data-ratParam="all"
                    @click="changeTab(type.name)">{{ type.name }}</li>
            </ul>
        </div>

        <div class="accessory-top-Layout_Item">
            <div class="l-System_Container">
                <div class="c-Data">
                    <ProductFilter
                        v-show="currentType === 'ケース' || currentType === 'フィルム'"
                        :ratId="getFilterRatId"></ProductFilter>
                    <ProductSort :ratIds="getSortRatIds"></ProductSort>
                </div>
                <div v-show="currentType==='ケース'"
                    id="tab-content2"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'ケース'"
                    aria-labelledby="tab-menu2">
                    <ProductList type="case"></ProductList>
                </div>
                <div v-show="currentType==='フィルム'"
                    id="tab-content3"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'フィルム'"
                    aria-labelledby="tab-menu3">
                    <ProductList type="film"></ProductList>
                </div>
                <div v-show="currentType==='充電器'"
                    id="tab-content4"
                    role="tabpanel"
                    :aria-hidden="currentType !== '充電器'"
                    aria-labelledby="tab-menu4">
                    <ProductList type="chargers"></ProductList>
                </div>
                <div v-show="currentType==='ケーブル'"
                    id="tab-content5"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'ケーブル'"
                    aria-labelledby="tab-menu5">
                    <ProductList type="cable"></ProductList>
                </div>
                <div v-show="currentType==='モバイルバッテリー'"
                    id="tab-content6"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'モバイルバッテリー'"
                    aria-labelledby="tab-menu6">
                    <ProductList type="battery"></ProductList>
                </div>
                <div v-show="currentType==='オーディオ'"
                    id="tab-content7"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'オーディオ'"
                    aria-labelledby="tab-menu7">
                    <ProductList type="audio"></ProductList>
                </div>
                <div v-show="currentType==='その他'"
                    id="tab-content9"
                    role="tabpanel"
                    :aria-hidden="currentType !== 'その他'"
                    aria-labelledby="tab-menu9">
                    <ProductList type="other"></ProductList>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ProductFilter from './ProductFilter.vue';
import ProductSort from './ProductSort.vue';
import ProductList from './ProductList.vue';
import {state, mutations} from './Store.js';

export default {
    name: 'AccessoryList',
    components: {
        ProductFilter,
        ProductSort,
        ProductList
    },
    data () {
        return {
            state: state,
            currentType: 'ケース',
        }
    },
    mounted () {
        if (window.location.hash) {
            if (window.location.hash === '#chargers') {
                this.changeTab('充電器');
            } else if (window.location.hash === '#film') {
                this.changeTab('フィルム');
            } else if (window.location.hash === '#other') {
                this.changeTab('その他');
            } else if (window.location.hash === '#cable') {
                this.changeTab('ケーブル');
            } else if (window.location.hash === '#battery') {
                this.changeTab('モバイルバッテリー');
            } else if (window.location.hash === '#case') {
                this.changeTab('ケース');
            }
        }
    },
    methods: {
        changeTab (type) {
            this.setType(type);
            this.clearFilter();
        },
        setType (type) {
            this.currentType = type;
        },
        isCurrent (type) {
            return this.currentType === type ? true : false;
        },
        clearFilter () {
            mutations.clearFilter();
        }
    },
    computed: {
        accessoryTypes() {
            return [
                {name:'ケース', ratId: 'product_accessory_case'},
                {name:'フィルム', ratId: 'product_accessory_film'},
                {name:'充電器', ratId: 'product_accessory_charger'},
                {name:'ケーブル', ratId: 'product_accessory_cable'},
                {name:'モバイルバッテリー', ratId: 'product_accessory_mobile-battery'},
                {name:'その他', ratId: 'product_accessory_other'},
            ]
        },
        getSortRatIds() {
            const ratIds = [
                {
                    name: 'ケース',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_case_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_case_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_case_expensive' },
                    ]
                },
                {
                    name: 'フィルム',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_film_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_film_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_film_expensive' },
                    ]
                },
                {
                    name: '充電器',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_charger_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_charger_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_charger_expensive' },
                    ]
                },
                {
                    name: 'ケーブル',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_cable_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_cable_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_cable_expensive' },
                    ]
                },
                {
                    name: 'モバイルバッテリー',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_battery_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_battery_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_battery_expensive' },
                    ]
                },
                {
                    name: 'その他',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_others_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_others_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_others_expensive' },
                    ]
                },
            ]

            return ratIds.filter(ratId => ratId.name === this.currentType)[0].list
        },
        getFilterRatId() {
            const ratIds = [
                { name: 'ケース', ratId: 'sort_accessory_case_select' },
                { name: 'フィルム', ratId: 'sort_accessory_film_select' },
                { name: '充電器', ratId: '' },
                { name: 'ケーブル', ratId: '' },
                { name: 'モバイルバッテリー', ratId: '' },
                { name: 'その他', ratId: '' },
            ]

            return ratIds.filter(ratId => ratId.name === this.currentType)[0].ratId
        },
    }
}
</script>
