<template>
    <div class="u-Adjust_Mt-48" id="js-newyear-top">
        <h2 class="c-Heading_Lv2">お探しのエリアを選択する</h2>
        <div class="u-Adjust_Mt-16 shop-newyear-Search_Select">
            <div class="c-Form_Select">
                <select v-model="selectPref" v-on:change="prefSelect()">
                    <option value="">都道府県を選択</option>
                    <option v-for="( pref, index ) in getPref" :key="index" :value="pref">{{ pref }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>

            <div class="c-Form_Select">
                <select v-model="selectCity" v-on:change="citySelect()">
                    <option value="">市区町村を選択</option>
                    <option v-for="( city, index ) in getCity" :key="index" :value="city">{{ city }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>

        <Shoplist :shopResults="shopResults" :scroll="scroll">
        </Shoplist>

        <ul v-if="pageTotal > 1" class="c-Pager_Wrap u-Adjust_Mt-40">
            <template v-if="currentPage === 1">
                <li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-left"></span></span></li>
            </template>
            <template v-else>
                <li><a href="#" @click.prevent="pagerPrev()" class="c-Pager_Arrow"><span class="c-Icon_Chevron-left"></span></a></li>
            </template>

            <template v-if="((pageTotal % 2 === 0) && (pageTotal < count + page))">
                <li v-for="n in page" :key="n.id" :aria-controls="init">
                    <template v-if="n - 1  + count <= pageTotal">
                        <template v-if="n - 1 + count === currentPage">
                            <span class="c-Pager_Number" aria-current="true">{{ n - 1 + count }}</span>
                        </template>
                        <template v-else>
                            <a href="#" @click.prevent="pagerClick(n - 1 + count)" class="c-Pager_Number">{{ n -1 + count }}</a>
                        </template>
                    </template>
                </li>
            </template>
            <template v-else>
                <li v-for="n in page" :key="n.id" :aria-controls="init">
                    <template v-if="n + count <= pageTotal">
                        <template v-if="n + count === currentPage">
                            <span class="c-Pager_Number" aria-current="true">{{ n + count }}</span>
                        </template>
                        <template v-else>
                            <a href="#" @click.prevent="pagerClick(n + count)" class="c-Pager_Number">{{ n + count }}</a>
                        </template>
                    </template>
                </li>
            </template>
            <template v-if="currentPage < pageTotal">
                <li><a href="#" @click.prevent="pagerNext()" class="c-Pager_Arrow"><span class="c-Icon_Chevron-right"></span></a></li>
            </template>
            <template v-else>
                <li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-right"></span></span></li>
            </template>
        </ul>
    </div>
</template>

<script>
import Shoplist from "./Shoplist.vue";
import 'whatwg-fetch';
import 'core-js/modules/es.promise';
import { shop_newyear as shopNewyear } from '../../../js/csv-data/shop-newyear'

export default {
    name: 'SearchNewyear',
    components: {
        Shoplist
    },
    data () {
        return {
            shopLists: [],
            shopResults: [],
            shopResultTmp: [],
            path: {
                shopUrl: 'https://network.mobile.rakuten.co.jp/shop-detail/'
            },
            pref: [
                "北海道",
                "青森県","岩手県","宮城県","秋田県","山形県","福島県",
                "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
                "新潟県","富山県","石川県","福井県","山梨県","長野県",
                "岐阜県","静岡県","愛知県","三重県",
                "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
                "鳥取県","島根県","岡山県","広島県","山口県",
                "徳島県","香川県","愛媛県","高知県",
                "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"
            ],
            city: [],
            selectPref: '',
            selectCity: '',
            prefResult: '',
            page: '',
            pageTotal: '',
            currentPage: 1,
            init: true,
            count: 0,
            scroll: false,
            pageUrl: '/shop/newyear/index.html',
        }
    },
    created () {
        const data = shopNewyear;
        this.pageTotal = Math.ceil( data.length / 10 );
        this.pageTotal > 4 ? this.page = 5 :this.page = this.pageTotal;
        this.shopLists = data.sort( this.compare );
        this.pageUrl = new URL(window.location.href);
        const searchParams = this.pageUrl.searchParams;
        const query_pref = searchParams.get('pref');
        const query_city = searchParams.get('city');

        if (searchParams && (query_pref  || query_city)) {
            if (query_pref) {
                this.selectPref = decodeURI(query_pref);
                this.prefSelect();
            }
            if (query_city) {
                this.selectCity = decodeURI(query_city);
                this.citySelect();
            }
        } else {
            this.shopResults = data.slice((this.currentPage - 1) * 10, this.currentPage * 10);
        }
    },
    computed: {
        getPref: {
            get: function () {
                return this.pref.filter( ( item ) => { return item; });
            },
            set: function ( value ) { this.pref = value; }
        },
        getCity: {
            get: function () {
                return this.city.filter( ( item ) => { return item; });
            },
            set: function ( value ) { this.city = value; }
        },
    },
    methods: {
        prefSelect: function() {
            const selectPref = this.selectPref;
            this.selectCity = ''
            let prefResult = '';
            if ( selectPref === '' ) {
                prefResult = this.shopLists;
            } else {
                prefResult = this.shopLists.filter ( function( value ) {
                    return value.prefectures === selectPref;
                });
            }
            this.prefResult = prefResult;
            this.currentPage = 1;
            this.count = 0;
            this.pageTotal = Math.ceil( prefResult.length / 10 );
            this.page = this.pageTotal > 4 ? 5 : this.pageTotal;

            this.shopResults = this.prefResult.slice ( ( this.currentPage - 1 ) * 10, this.currentPage * 10 );
            this.shopResultTmp = prefResult;
            this.setHistoryParam('pref', selectPref);

            let cityArry = [];
            this.shopResultTmp.filter( function ( value ) {
                cityArry.push(value.zip + value.city);
            });
            cityArry.sort( function ( a, b ) {
                 return ( a.zip < b.zip ? -1 : 1 );
            });

            let cityResult = cityArry.map( x => x.substr( 8 ) );
            cityResult = cityResult.filter ( function ( x, i, self ) {
                return self.indexOf(x) === i;
            });

            selectPref === '' ? this.city = [] : this.city = cityResult;
        },
        citySelect: function () {
            const selectCity = this.selectCity;
            const cityResult = this.shopResultTmp.filter( function( value ) {
                return value.city === selectCity;
            });
            this.shopResults = cityResult;
            this.currentPage = 1;
            this.pageTotal = 0;
            if ( this.selectCity === '' ) {
                this.prefSelect();
            }
            this.setHistoryParam('city', selectCity);
        },
        compare: function ( a, b ) {
            return parseInt((this.pref.indexOf(a.prefectures) + '' + a.zip.replace(/-|‐/g, '')), 10) - parseInt((this.pref.indexOf(b.prefectures) + '' + b.zip.replace(/-|‐/g, '')), 10);
        },
        pagerSearch: function ( currentPage ) {
            this.currentPage = currentPage;
            this.scroll = true;
            if ( this.selectPref === '' ) {
                this.shopResults = this.shopLists.slice((this.currentPage - 1) * 10, this.currentPage * 10);
            } else {
                this.shopResults = this.prefResult.slice((this.currentPage - 1) * 10, this.currentPage * 10);
            }
        },
        pagerClick: function ( pageNum ) {
            this.currentPage = Number( pageNum );
            if ( (this.currentPage === 5 + this.count) && (this.currentPage < this.pageTotal) ) {
                this.count += + 2;
            } else {
                if ((this.pageTotal % 2 === 0) && (this.pageTotal < this.count + this.page)) {
                    if ( this.currentPage === this.count && this.currentPage !== 1 ) {
                        this.count += - 2;
                    }
                } else {
                    if ( this.currentPage === 1 + this.count && this.currentPage !== 1 ) {
                        this.count += - 2;
                    }
                }
            }
            this.pagerSearch(this.currentPage);
        },
        pagerPrev: function () {
            this.currentPage = Number( this.currentPage - 1 );
            if ((this.pageTotal % 2 === 0) && (this.pageTotal < this.count + this.page)) {
                if ( this.currentPage === this.count && this.currentPage !== 1 ) {
                    this.count += - 2;
                }

            } else {
                if ( this.currentPage === 1 + this.count && this.currentPage !== 1 ) {
                    this.count += - 2;
                }
            }
            this.pagerSearch(this.currentPage);
        },
        pagerNext: function () {
            this.currentPage = Number( this.currentPage + 1 );
            if ( (this.currentPage === 5 + this.count) && (this.currentPage < this.pageTotal) ) {
                this.count += + 2;
            }
            this.pagerSearch(this.currentPage);
        },
        setHistoryParam(paramName, paramValue) {
            if (paramName === 'pref') this.pageUrl.searchParams.delete('city');
            this.pageUrl.searchParams.set(paramName, paramValue);
            history.pushState('', '', this.pageUrl.href);
        }
    }
}
</script>
