<template>
    <!-- <div class="js-Tab"> -->
    <div id="apple-accessory-scroll">
        <div class="accessory-apple-top-Layout_Scroll accessory-apple-top-Layout_Scroll-border">
        <ul class="accessory-apple-top-List" role="tablist">
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

        <div class="accessory-apple-top-Layout_Item">
        <div class="l-System_Container">
            <div class="c-Data">
                <ProductFilter
                    v-show="currentType === 'ケース' || currentType === 'フィルム'"
                    :ratId="getFilterRatId"></ProductFilter>
                <ProductSort :ratIds="getSortRatIds"></ProductSort>
            </div>
            <div v-show="currentType==='ケース'"
                id="tab-content1"
                role="tabpanel"
                :aria-hidden="currentType !== 'ケース'"
                aria-labelledby="tab-menu1">
                <ProductList type="case"></ProductList>
            </div>
            <div v-show="currentType==='フィルム'"
                id="tab-content2"
                role="tabpanel"
                :aria-hidden="currentType !== 'フィルム'"
                aria-labelledby="tab-menu2">
                <ProductList type="film"></ProductList>
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
            if (window.location.hash === '#film') {
                this.changeTab('フィルム');
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
                { name: 'ケース', ratId: 'product_accessory_apple-related_case', },
                { name: 'フィルム', ratId: 'product_accessory_apple-related_film', }
            ]
        },
        getSortRatIds() {
            const ratIds = [
                {
                    name: 'ケース',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_apple_case_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_apple_case_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_apple_case_expensive' },
                    ]
                },
                {
                    name: 'フィルム',
                    list: [
                        { id: 'dateDesc', ratId: 'sort_accessory_apple_film_newest' },
                        { id: 'priceAsc', ratId: 'sort_accessory_apple_film_cheap' },
                        { id: 'priceDesc', ratId: 'sort_accessory_apple_film_expensive' },
                    ]
                },
            ]

            return ratIds.filter(ratId => ratId.name === this.currentType)[0].list
        },
        getFilterRatId() {
            const ratIds = [
                { name: 'ケース', ratId: 'sort_accessory_apple_case_select' },
                { name: 'フィルム', ratId: 'sort_accessory_apple_film_select' },
            ]

            return ratIds.filter(ratId => ratId.name === this.currentType)[0].ratId
        },
    }
}
</script>
