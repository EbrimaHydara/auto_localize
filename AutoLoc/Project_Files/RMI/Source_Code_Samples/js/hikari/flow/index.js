import Vue from 'vue';
import FlowSituation from '../../../vue/hikari/flow/FlowSituation.vue';
import { shopSearch } from './component/shop-search';

new Vue({
    render: h => h(FlowSituation)
}).$mount('#hikari-flow-Situation');

shopSearch();
