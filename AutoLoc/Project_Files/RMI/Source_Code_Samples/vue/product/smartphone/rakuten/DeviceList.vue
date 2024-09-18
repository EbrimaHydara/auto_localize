<template>
    <div class="smartphone-top-Layout_Item">
        <div class="l-System_Container">
            <div class="c-Data">
                <ProductSort :ratIds="ratIds"></ProductSort>
            </div>
            <ProductList></ProductList>
        </div>
    </div>
</template>


<script>
import ProductSort from '../ProductSort.vue';
import ProductList from './ProductList.vue';
import store from '../Store.js';

export default {
    name: 'deviceList',
    components: {
        ProductSort,
        ProductList
    },
    data () {
        return {
            path: {
                sitepath: '/',
                rootpath: '/',
                onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/'
            }
        }
    },
    computed: {
        ratIds() {
            return (
                [
                    { id: 'recommend', ratId: 'sort_rakuten_recommended' },
                    { id: 'dateDesc', ratId: 'sort_rakuten_newest' },
                    { id: 'priceAsc', ratId: 'sort_rakuten_cheap' },
                    { id: 'priceDesc', ratId: 'sort_rakuten_expensive' },
                    { id: 'batteryDesc', ratId: 'sort_rakuten_large_battery' },
                    { id: 'displayDesc', ratId: 'sort_rakuten_big_screen' },
                ]
            )
        },
    },
}
</script>
