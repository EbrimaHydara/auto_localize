<template>
    <div>
        <div class="c-Data">
            <div class="c-Data_Sort">
                <button id="product-sorter"
                        class="c-Data_Sort-btn"
                        aria-haspopup="listbox"
                        aria-labelledby="product-sorter"
                        :aria-expanded="isExpanded"
                        @click="expandList">
                    <span class="c-Icon_Change-order-l c-Data_Icon"></span><span>{{ getSorterLabel }}</span>
                </button>
                <ul class="c-Data_Sort-list"
                    tabindex="-1"
                    role="listbox"
                    :aria-activedescendant="activedescendant"
                    @keydown="traverseList"
                    @blur="hideList"
                    ref="list">
                    <li v-for="sorter in sorters"
                        role="option"
                        :aria-selected="getSelectedState(sorter.id)"
                        :id="sorter.id"
                        :key="sorter.id"
                        :value="sorter.id"
                        :data-ratid="getSelectedRatId(sorter.id)"
                        data-ratevent="click"
                        data-ratparam="all"
                        @click="selectList(sorter.id)"
                        ref="listitem">{{ sorter.text }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import {state, mutations} from './Store.js';

export default {
    name: 'ProductSort',
    props: ['ratIds'],
    data () {
        return {
            state: state,
            sorters: [
            { id: 'recommend', text: 'オススメ順' },
            { id: 'dateDesc', text: '新しい順' },
            { id: 'priceAsc', text: '価格の安い順' },
            { id: 'priceDesc', text: '価格の高い順' },
            { id: 'batteryDesc', text: 'バッテリー容量の大きい順' },
            { id: 'displayDesc', text: '画面サイズの大きい順' }
            ],
            isExpanded: false,
            activedescendant: 'recommend'
        }
    },
    computed: {
        getSorterLabel () {
            let sorter = this.sorters.find((el) => {
                return el.id === mutations.getSorter();
            });
            return sorter.text;
        },
        getSelectedRatId() {
            return (id) => {
                return this.ratIds && this.ratIds.filter(ratId => ratId.id === id)[0].ratId;
            }
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
        expandList () {
            this.isExpanded = !this.isExpanded;
            this.$nextTick(() => {
                this.$refs.list.focus();
            });
        },
        hideList (e) {
            if (e.relatedTarget !== this.$refs.list) {
                this.isExpanded = false;
            }
        },
        selectList (sorter) {
            mutations.setSorter(sorter);
            this.isExpanded = false;
            this.activedescendant = sorter;
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
                    mutations.setSorter(selected.id);
                    break;
            }
        },
        getSelectedState (id) {
            return id === mutations.getSorter() ? true : false;
        }
    },
    mounted () {
        this.setupList();
    }
}
</script>
