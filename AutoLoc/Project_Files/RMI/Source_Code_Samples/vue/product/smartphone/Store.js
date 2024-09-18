import Vue from 'vue';

export const state = Vue.observable({
        sorter: 'recommend',
        filters: 'all',
});

export const mutations = {
    setSorter (selected) {
        state.sorter = selected;
    },
    getSorter () {
        return state.sorter;
    },
    setFilter (selected) {
        state.filters = selected;
    },
    getFilter () {
        return state.filters;
    },
};
