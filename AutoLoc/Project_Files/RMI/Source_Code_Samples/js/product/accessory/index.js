import Vue from 'vue';
import Carousel from './carousel.js';
import * as Filters from '../../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});
