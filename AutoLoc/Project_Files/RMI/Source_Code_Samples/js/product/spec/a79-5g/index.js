import Vue from 'vue';
import SpecDtList from '../../../../vue/product/smartphone/spec/SpecDtList.vue';
import { spec_oppo_a79_5g as csvData } from '../../../csv-data/spec-oppo-a79-5g.js';

new Vue({
    render: h => h(SpecDtList, {
        props: {
            isSpecPage: window.location.pathname.includes('/spec.html'),
            specCsvData: csvData[0],
        }
    })
}).$mount('#js-spec-list');
