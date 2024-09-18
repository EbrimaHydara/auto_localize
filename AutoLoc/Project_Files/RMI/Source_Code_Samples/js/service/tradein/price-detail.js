import Vue from 'vue';
import PriceDetail from "../../../vue/service/tradein/PriceDetail.vue";
import { tradein_pricelist } from '../../csv-data/tradein-pricelist';

new Vue({
    render: h => h(PriceDetail)
}).$mount('#tradein-plice-detail');

const lastupdate = tradein_pricelist[0].update;
$('#lastupdate').text(lastupdate);
