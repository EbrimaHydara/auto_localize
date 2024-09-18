<template>
    <div>
        <div class="c-Data">
            <div class="c-Data_Sort">
                <button id="product-filter"
                        class="c-Data_Sort-btn"
                        :aria-expanded="isExpanded"
                        @click="expandList">
                    <span class="c-Icon_Sliders-l c-Data_Icon"></span><span>{{ getFilterLabel }}</span>
                </button>
                <ul class="c-Data_Sort-list smartphone-top-Layout_Filter-list"
                    tabindex="-1"
                    role="listbox"
                    :aria-activedescendant="activedescendant"
                    :data-ratid="ratId.ratId"
                    data-ratevent="click"
                    data-ratparam="all"
                    @keydown="traverseList"
                    @blur="hideList"
                    ref="list">
                    <li v-for="brand in brands"
                        role="option"
                        :aria-selected="getSelectedState(brand.id)"
                        :id="brand.id"
                        :key="brand.id"
                        :value="brand.id"
                        data-ratevent="click"
                        data-ratparam="all"
                        @click="selectList(brand.id)"
                        ref="listitem">{{ brand.text }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import {state, mutations} from './Store.js';

export default {
    name: 'ProductFilter',
    props: ['ratId'],
    data () {
        return {
            state: state,
            isExpanded: false,
            activedescendant: 'all',
            brands: [
                { id: 'all', text: 'すべて' },
                { id: 'AQUOS', text: 'AQUOS' },
                { id: 'Xiaomi', text: 'Xiaomi' },
                { id: 'OPPO', text: 'OPPO' },
                { id: 'Samsung', text: 'Samsung' },
                { id: 'Xperia', text: 'Xperia' },
            ]
        }
    },
    computed: {
        getFilterLabel () {
            let filter = this.brands.find((el) => {
                return el.id === mutations.getFilter();
            });
            let filterTxt = filter.text
            if(filter.id === 'all') return filterTxt = 'ブランドで絞り込む'
            return filterTxt;
        },
    },
    methods: {
        setupList () {
            let lenChoice = [];
            this.$refs.listitem.forEach((el) => {
                lenChoice.push(el.textContent.length);
            });
            this.$refs.list.style.width = (Math.max(...lenChoice) *16 + 32 + 2) + 'px';
        },
        selectList (brand) {
            mutations.setFilter(brand);
            this.isExpanded = false;
            this.activedescendant = brand;
        },
        expandList () {
            this.isExpanded = !this.isExpanded;
            this.$nextTick(() => {
                this.$refs.list.focus();
            });
        },
        hideList(e) {
            if (e.relatedTarget !== this.$refs.list) {
                this.isExpanded = false;
            }
        },
        traverseList (e) {
            let selected = null;
            let dest = null;
            switch (e.key) {
                case "Down": // IE/Edge specific value
                case "ArrowDown":
                    selected = this.$refs.list.querySelector('[aria-selected="true"]');
                    dest = selected.nextElementSibling;
                    if (dest !== null) {
                        dest.setAttribute('aria-selected', true);
                        selected.setAttribute('aria-selected', false);
                    }
                    break;
                case "Up": // IE/Edge specific value
                case "ArrowUp":
                    selected = this.$refs.list.querySelector('[aria-selected="true"]');
                    dest = selected.previousElementSibling;
                    if (dest !== null) {
                        dest.setAttribute('aria-selected', true);
                        selected.setAttribute('aria-selected', false);
                    }
                    break;
                case "Enter":
                case "Esc": // IE/Edge specific value
                case "Escape":
                    selected = this.$refs.list.querySelector('[aria-selected="true"]');
                    this.isExpanded = false;
                    this.activedescendant = selected.id;
                    mutations.setFilter(selected.id);
                    break;
            }
        },
        getSelectedState (id) {
            return id === mutations.getFilter() ? true : false;
        }
    },
    mounted () {
        this.setupList();
    }
}
</script>
