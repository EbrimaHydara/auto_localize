<template>
    <div>
        <ul v-show="filtered.length > 0"
            class="accessory-top-Card">
            <template v-for="(accessory, index) in filtered">
                <Product :summary="accessory" :key="index"></Product>
            </template>
        </ul>
        <div v-show="filtered.length === 0"
            class="u-Adjust_Mt-32 u-Adjust_Mb-32">
            <p>条件に該当する製品がありません。</p>
        </div>
    </div>
</template>


<script>
import 'whatwg-fetch';
import 'core-js/modules/es.promise';
import Product from './Product.vue';
import {state, mutations} from './Store.js';

export default {
    name: 'ProductList',
    components: {
        Product
    },
    props: ['type'],
    data () {
        return {
            state: state,
            accessories: []
        }
    },
    created () {
        this.getData()
            .then(data => {
                this.accessories = data;
                this.setIndex();
            })
            .catch(err => {
              // TODO: error handling.
              console.log(err);
            });
    },
    computed: {
        filtered () {
            let filteredData = this.accessories;
            // 終売のアイテムを取り除く
            filteredData = filteredData.filter(item => {
                if (!item.eol) {
                    return item;
                }
            });
            this.state.filters.forEach(filter => {
                if (filter.key === 'device') {
                    if (filter.value) {
                        filteredData = filteredData.filter(item => {
                            if (item.device) {
                                return item.device.indexOf(filter.value) !== -1
                            }
                        });
                    }
                }
                if (filter.key === 'price') {
                    if (filter.value) {
                        filteredData = filteredData.filter(item => item.price < filter.value);
                    } else {
                        filteredData = filteredData;
                    }
                }
            });
            switch (this.state.sorter) {
                case 'dateDesc':
                    filteredData = filteredData.sort((a, b) => {
                        return new Date(b.index) - new Date(a.index);
                    });
                    break;
                case 'priceAsc':
                    filteredData = filteredData.sort((a, b) => {
                        return a.price - b.price;
                    });
                    break;
                case 'priceDesc':
                    filteredData = filteredData.sort((a, b) => {
                        return b.price - a.price;
                    });
                    break;
                default:
                    return filteredData;
            }
            return filteredData;
        }
    },
    methods: {
        getData: async function () {
            const res = await fetch('/assets/json/accessory-' + this.type + '.json');
            const data = res.ok ? await res.json() : [];

            return data;
        },
        setIndex () {
            this.accessories.forEach((data, index) => {
                data.index = index;
            });

        }
    }
}
</script>
