<template>
    <div>
        <ul v-show="filtered.length > 0"
            class="accessory-top-Card">
            <template v-for="(accessory, index) in filtered">
                <Product :type="type" :annotation="annotations" :summary="accessory" :key="index"></Product>
            </template>
        </ul>
        <!-- ここでv-forして注意文言を出したい？ -->
        <div v-show="filtered.length > 0">
            <p v-for="(annotation, index) in annotations[type][1]" class="c-Txt_Cap" :key="index">※{{index+1}} {{annotation}}</p>
        </div>
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
            accessories: [],
            annotations: {
                case: [[],[]],
                audio: [[],[]],
                film: [[],[]],
                chargers: [[],[]],
                battery: [[],[]],
                cable: [[],[]],
                other: [[],[]],
            },
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
                const eolItem = item.eol.trim();
                if (!eolItem) {
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
            // console.log(this.accessories);
            const type = this.type;
            this.accessories.forEach((data, index) => {
                data.index = index;
                const eolItem = data.eol.trim();
                if (!eolItem && data.price_old_period) {
                    this.annotations[type][0].unshift(data.url);
                    this.annotations[type][1].unshift(data.price_old_period);
                }
            });
            // console.log(this.annotations[type][0]);
            // console.log(this.annotations[type][1]);
        }
    },
    mounted() {
        window.onload = ()=>{
            // urlのパラメータ取得して
            // 値が一致したら指定位置にスクロール
            //apple-accessory-scroll
            let urlParam = location.search.substring(1);
            let parameter = "l-id=product_accessory_smartphone-related-";
            let paramnames = [
                    "case",
                    "film",
                    "chargers",
                    "cable",
                    "battery",
                    "other",
            ];
            // ここにカテゴリー追加しても動かないです。smartphone-related/index.ejsに vue rendering area とコメントがあるので検索してその上に空divがあるのでそこに追加

            for (let i = 0; i < paramnames.length; i++) {
                if (urlParam === parameter+paramnames[i]) {
                    document.getElementById("smartphone-related-scroll").scrollIntoView(true);
                }
            }

            let urlHash = location.hash;
            let wideSize = window.outerWidth;
            if(urlHash === "#other" && wideSize <= 768){
                document.getElementsByClassName("accessory-top-Layout_Scroll")[0].scrollLeft += 999;
            }
        }
    }
}
</script>
