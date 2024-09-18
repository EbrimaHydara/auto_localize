import Vue from 'vue';
import HeaderSearch from '../../../vue/hikari/search/HeaderSearch.vue';
import HeaderSearchIcon from '../../../vue/hikari/search/HeaderSearchIcon.vue';
import * as Filters from '../../../vue/hikari/search/filters';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(HeaderSearch)
}).$mount('#header-search');

new Vue({
    render: h => h(HeaderSearchIcon)
}).$mount('#header-search-icon');
