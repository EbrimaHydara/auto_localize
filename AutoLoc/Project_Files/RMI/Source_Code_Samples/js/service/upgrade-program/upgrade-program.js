import Vue from 'vue';
import  ProductList from '../../../vue/service/upgrade-program/ProductList.vue';
import * as Filters from '../../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(ProductList)
}).$mount('#product-list');
