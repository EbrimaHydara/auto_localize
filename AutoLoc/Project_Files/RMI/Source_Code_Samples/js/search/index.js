import Vue from 'vue';
import SearchResult from '../../vue/search/SearchResult.vue';
import * as Filters from '../../vue/search/filters';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(SearchResult)
}).$mount('#search-result');
