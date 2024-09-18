import Vue from 'vue';
import SpecDtList from '../../../../vue/product/smartphone/spec/SpecDtList.vue';
import { spec_aquos_wish3 as csvData } from '../../../csv-data/spec-aquos-wish3';

new Vue({
    render: h => h(SpecDtList, {
        props: {
            isSpecPage: window.location.pathname.includes('/spec.html'),
            specCsvData: csvData[0],
        }
    })
}).$mount('#js-spec-list');
