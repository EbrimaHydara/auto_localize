import Vue from 'vue';
import IphoneStock from '../../../../vue/product/iphone/stock/IphoneStock.vue';
import WatchStock from '../../../../vue/product/iphone/stock/WatchStock.vue';
import PodsStock from '../../../../vue/product/iphone/stock/PodsStock.vue';

new Vue({
    render: h => h(IphoneStock)
}).$mount('#iphone-stock');


new Vue({
    render: h => h(WatchStock)
}).$mount('#watch-stock');


new Vue({
    render: h => h(PodsStock)
}).$mount('#pods-stock');
