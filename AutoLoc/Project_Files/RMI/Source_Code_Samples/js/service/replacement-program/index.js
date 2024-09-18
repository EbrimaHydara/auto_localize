import Vue from 'vue';
import  IphoneList from '../../../vue/service/replacement-program/IphoneList.vue';
import  AndroidList from '../../../vue/service/replacement-program/AndroidList.vue';

import * as Filters from '../../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(IphoneList)
}).$mount('#iphpone-list');

new Vue({
    render: h => h(AndroidList)
}).$mount('#android-list');
