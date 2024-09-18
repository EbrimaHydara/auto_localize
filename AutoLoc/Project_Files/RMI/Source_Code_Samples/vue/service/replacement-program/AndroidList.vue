<template>
    <div>
        <div class="c-Data">
            <ProductFilter :ratId="filterRatId"></ProductFilter>
            <ProductSort :ratIds="sortRatIds"></ProductSort>
        </div>
        <ProductList></ProductList>
    </div>
</template>

<script>
import ProductSort from './android/ProductSort.vue';
import ProductFilter from './android/ProductFilter.vue';
import ProductList from './android/ProductList.vue'

export default {
    name: 'AndroidList',
    components: {
        ProductSort,
        ProductFilter,
        ProductList
    },
    data() {
        return {
            path: {
                sitepath: '/',
                rootpath: '/',
                onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/'
            }
        }
    },
    computed: {
        sortRatIds() {
            return (
                [
                    { id: 'recommend', ratId: 'sort_smartphone_recommended' },
                    { id: 'dateDesc', ratId: 'sort_smartphone_newest' },
                    { id: 'priceAsc', ratId: 'sort_smartphone_cheap' },
                    { id: 'priceDesc', ratId: 'sort_smartphone_expensive' },
                    { id: 'batteryDesc', ratId: 'sort_smartphone_large_battery' },
                    { id: 'displayDesc', ratId: 'sort_smartphone_big_screen' },
                ]
            )
        },
        filterRatId() {
            return { id: 'all', ratId: 'sort_smartphone_brand' }
        },

    },
}
</script>
