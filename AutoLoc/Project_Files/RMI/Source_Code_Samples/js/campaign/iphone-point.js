import Vue from 'vue';
import ProductList from '../../vue/campaign/iphone-point/Simulation.vue';
import { toggleStickeyBottom } from "../common/helpers/util-scroll";

new Vue({
    render: h => h(ProductList)
}).$mount('#simulation');

window.addEventListener('DOMContentLoaded', () => {
    const ctaTarget = document.getElementById('js-cta-target');
    const ctaTrigger = document.getElementById('js-cta-trigger');

    toggleStickeyBottom(ctaTarget, ctaTrigger);
});
