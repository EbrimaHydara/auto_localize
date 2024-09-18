import Vue from 'vue';
import DeviceList from '../../vue/product/smartphone/rakuten/DeviceList.vue';
import * as Filters from '../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(DeviceList)
}).$mount('#devicelist');
