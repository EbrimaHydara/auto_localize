import Vue from 'vue';

export const state = Vue.observable({
        sorter: 'dateDesc',
        filters: []
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
    clearFilter () {
        state.filters = [
            {key: 'device', value: ''}
        ];
    }
};
