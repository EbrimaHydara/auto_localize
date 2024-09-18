import Vue from 'vue';
import AccessoryList from '../../../../vue/product/accessory/apple-related/AccessoryList.vue';
import * as Filters from '../../../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(AccessoryList)
}).$mount('#accessorylist');
