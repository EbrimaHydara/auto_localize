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
                @click="changeTab(type.name)">{{ displayName(type.name) }}</li>
      </ul>
    </div>

    <div class="accessory-apple-top-Layout_Item">
      <div class="l-System_Container">
        <div class="c-Data">
            <ProductFilter v-show="currentType === 'ケース'"></ProductFilter>
            <ProductSort v-show="currentType === 'ケース'"></ProductSort>
        </div>
        <div v-show="currentType==='ケース'"
            id="tab-content1"
            role="tabpanel"
            :aria-hidden="currentType !== 'ケース'"
            aria-labelledby="tab-menu1">
            <ProductList type="case"></ProductList>
        </div>
        <div v-show="currentType==='オーディオ'"
            id="tab-content2"
            role="tabpanel"
            :aria-hidden="currentType !== 'オーディオ'"
            aria-labelledby="tab-menu2">
            <ProductList type="audio"></ProductList>
        </div>
        <div v-show="currentType==='充電器'"
            id="tab-content3"
            role="tabpanel"
            :aria-hidden="currentType !== '充電器'"
            aria-labelledby="tab-menu3">
            <ProductList type="chargers"></ProductList>
        </div>
        <div v-show="currentType==='ケーブル'"
            id="tab-content4"
            role="tabpanel"
            :aria-hidden="currentType !== 'ケーブル'"
            aria-labelledby="tab-menu4">
            <ProductList type="cable"></ProductList>
        </div>
        <div v-show="currentType==='モバイルバッテリー'"
            id="tab-content5"
            role="tabpanel"
            :aria-hidden="currentType !== 'モバイルバッテリー'"
            aria-labelledby="tab-menu5">
            <ProductList type="battery"></ProductList>
        </div>
        <div v-show="currentType==='Watchアクセサリ'"
            id="tab-content6"
            role="tabpanel"
            :aria-hidden="currentType !== 'Watchアクセサリ'"
            aria-labelledby="tab-menu6">
            <ProductList type="watch"></ProductList>
        </div>
        <div v-show="currentType==='その他'"
            id="tab-content7"
            role="tabpanel"
            :aria-hidden="currentType !== 'その他'"
            aria-labelledby="tab-menu7">
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
            } else if (window.location.hash === '#cable') {
                this.changeTab('ケーブル');
            } else if (window.location.hash === '#other') {
                this.changeTab('その他');
            } else if (window.location.hash === '#audio') {
                this.changeTab('オーディオ');
            } else if (window.location.hash === '#watch') {
                this.changeTab('Watchアクセサリ');
            } else if (window.location.hash === '#battery') {
                this.changeTab('モバイルバッテリー');
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
                { name: 'ケース', ratId: 'product_accessory_apple_case' },
                { name: 'オーディオ', ratId: 'product_accessory_apple_audio' },
                { name: '充電器', ratId: 'product_accessory_apple_charger' },
                { name: 'ケーブル', ratId: 'product_accessory_apple_cable' },
                { name: 'モバイルバッテリー', ratId: 'product_accessory_apple_battery' },
                { name: 'Watchアクセサリ', ratId: 'product_accessory_apple_watch' },
                { name: 'その他', ratId: 'product_accessory_apple_other' },
            ]
        },
        displayName() {
            return (name) => {
                return name === 'その他' ? 'AirTag＆その他' : name
            }
        }
    }
}
</script>
