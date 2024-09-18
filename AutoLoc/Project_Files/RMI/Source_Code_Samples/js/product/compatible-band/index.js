import Vue from 'vue';
import BandList from "../../../vue/product/band/BandList.vue";

new Vue({
    render: h => h(BandList, {
        props: {
            bandType: 'compatible',
        }
    })
}).$mount('#compatible-band-list');

