<template>
    <div>
        <div v-show="filtered.length > 0">

            <ul class="shop-Shoplist">
                <template v-for="(shop, index) in filtered">
                    <Shop v-if="isShow(index)" :summary="shop" :key="index">
                    </Shop>
                </template>
            </ul>

            <ul class="c-Pager_Wrap">
                <li>
                    <span
                        v-if="currentPage === 1"
                        class="c-Pager_Arrow"
                        aria-disabled="true"
                    >
                        <span class="c-Icon_Chevron-left"></span>
                    </span>
                    <a
                        v-else
                        @click="movePage(currentPage - 1)"
                        class="c-Pager_Arrow"
                    >
                        <span class="c-Icon_Chevron-left"></span>
                    </a>
                </li>
                <li v-for="n in pageNum" :key="n">
                    <span
                        v-if="currentPage === n"
                        class="c-Pager_Number"
                        aria-current="true"
                        >{{ n }}</span
                    >
                    <a v-else @click="movePage(n)" class="c-Pager_Number">{{
                        n
                    }}</a>
                </li>
                <li>
                    <span
                        v-if="currentPage === pageTotal"
                        class="c-Pager_Arrow"
                        aria-disabled="true"
                    >
                        <span class="c-Icon_Chevron-right"></span>
                    </span>
                    <a
                        v-else
                        @click="movePage(currentPage + 1)"
                        class="c-Pager_Arrow"
                    >
                        <span class="c-Icon_Chevron-right"></span>
                    </a>
                </li>
            </ul>
        </div>

        <div v-show="filtered.length === 0" class="shop-Shoplist_Noresult">
            <p class="c-Txt_Emp-01">ただいま、準備中でございます。</p>
        </div>
    </div>
</template>

<script>
import "core-js/modules/es.promise";
import Shop from "./Shop.vue";
import { state, mutations } from "./Store.js";

export default {
    name: "ShopList",
    components: {
        Shop
    },
    props: ["shops"],
    data() {
        return {
            perPage: 10
        };
    },
    mounted() {
        if (window.location.search) {
            let params = window.location.search
                .split("?")[1]
                .split("&")
                .map(p => p.split("="))
                .reduce((obj, e) => ({ ...obj, [e[0]]: e[1] }), {});
            if (params.prefecture) {
                mutations.setPrefecture(decodeURIComponent(params.prefecture));
                if (params.city) {
                    mutations.setCity(decodeURIComponent(params.city));
                }
            } else {
                mutations.setPrefecture("");
                mutations.setCity("");
            }
        } else {
            mutations.setPrefecture("");
            mutations.setCity("");
        }
    },
    updated() {
        if (!this.scroll) {
            this.scroll = true;
        } else {
            const element = document.getElementById("js-result-top");
            const rect = element.getBoundingClientRect();
            const position = rect.top + window.pageYOffset;
            document.documentElement.scrollTop = position;
        }
    },
    computed: {
        filtered() {
            let filteredData = this.shops;

            if (mutations.getPrefecture()) {
                filteredData = filteredData.filter(shop => {
                    return (
                        shop.location.prefecture === mutations.getPrefecture()
                    );
                });
            }

            if (mutations.getCity()) {
                filteredData = filteredData.filter(shop => {
                    return shop.location.city === mutations.getCity();
                });
            }

            filteredData = filteredData.filter(shop => {
                let services = shop.supported_features.services;
                return mutations.getFilters().every(filter => {
                    return services.includes(filter.code);
                });
            });

            mutations.setPageTotal(
                Math.ceil(filteredData.length / this.perPage)
            );
            mutations.setPages();

            return filteredData;
        },
        pageNum() {
            return mutations.getPages();
            // return Math.ceil(this.filtered.length / this.perPage);
        },
        currentPage() {
            return mutations.getCurrentPage();
        },
        pageTotal() {
            return mutations.getPageTotal();
        }
    },
    methods: {
        movePage(num) {
            mutations.setCurrentPage(num);
        },
        isShow(index) {
            return index >= (mutations.getCurrentPage() - 1) * this.perPage &&
                index < mutations.getCurrentPage() * this.perPage
                ? true
                : false;
        }
    }
};
</script>
