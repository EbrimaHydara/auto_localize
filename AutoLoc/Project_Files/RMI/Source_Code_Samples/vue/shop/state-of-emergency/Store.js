import Vue from 'vue';

export const state = Vue.observable({
        prefecture: '',
        city: '',
        filters: [],
        pages: [],
        pageTotal: 0,
        currentPage: 1
});

export const mutations = {
    setPrefecture (selected) {
        state.prefecture = selected;
    },
    getPrefecture () {
        return state.prefecture;
    },
    setCity (selected) {
        state.city = selected;
    },
    getCity () {
        return state.city;
    },
    setFilters (selected) {
        state.filters = selected;
    },
    getFilters () {
        return state.filters;
    },
    setCurrentPage (value) {
        state.currentPage = value;
    },
    getCurrentPage () {
        return state.currentPage;
    },
    setPages () {
        let ary = [];
        let min = 0;
        let max = 0;

        if (state.currentPage + 2 > state.pageTotal) {
            max = state.pageTotal;
        } else {
            if (state.pageTotal < 5) {
                max = state.pageTotal;
            } else {
                if (state.currentPage + 2 <= 5) {
                    max = 5;
                } else {
                    max = state.currentPage + 2;
                }
            }
        }

        if (state.currentPage - 2 > 1) {
            if (state.pageTotal < 7) {
                min = 1;
            } else {
                min = state.currentPage - 2;
            }
        } else {
            min = 1;
        }

        for (var i = min; i <= max; i++) {
            ary.push(i);
        }
        state.pages = ary;
    },
    getPages () {
        return state.pages;
    },
    setPageTotal (value) {
        state.pageTotal = value;
    },
    getPageTotal () {
        return state.pageTotal;
    }
};
