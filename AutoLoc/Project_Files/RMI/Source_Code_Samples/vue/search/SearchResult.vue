<template>
    <div>
        <div class="search-Layout">
            <Search @submitSearch="apiSearch"></Search>
            <div class="l-System_Container">
                <ResultRelation
                    @search="relationSearch"
                    :relationWords="state.relationWords"
                    :itemTotal="state.itemTotal"
                    :suggestions="state.suggestions">
                </ResultRelation>
            </div>
        </div>
        <div class="l-System_Container">
            <ResultProduct
                v-show="isResultProductShow && state.productTotal > 0"
                @more="moreSearch"
                :searchWord="state.searchWord"
                :productTotal="state.productTotal"
                :products="state.products">
            </ResultProduct>
            <Result
                v-show="state.itemTotal > 0"
                :searchWord="state.searchWord"
                :items="state.items"
                :itemTotal="state.itemTotal">
            </Result>
            <Pager
                v-show="state.itemTotal > 0"
                @pager="pagerSearch"
                :page="state.page"
                :pageTotal="state.pageTotal">
            </Pager>
            <ResultZero
                v-show="state.itemTotal === 0"
                @search="relationSearch"
                :searchWord="state.searchWord"
                :popularWords="state.popularWords"
                :relationContents="state.relationContents">
            </ResultZero>
        </div>
    </div>
</template>

<script>
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";
import Pager from "./components/Pager.vue";
import ResultZero from "./components/ResultZero.vue";
import ResultRelation from "./components/ResultRelation.vue";
import ResultProduct from "./components/ResultProduct.vue";
import Store from "./Store.js";

export default {
  data() {
    return {
      state: Store.state
    }
  },
  methods: {
    apiSearch: (searchWord, selectedCategory, currentPage) => {
        Store.actions.searchApi(searchWord, selectedCategory, currentPage, 10);
        Store.actions.searchProductApi(searchWord, currentPage);
        Store.actions.setStorage(searchWord);
    },
    pagerSearch: (currentPage) => {
        Store.actions.searchApi(Store.state.searchWord, Store.state.selectedCategory, currentPage, 10);
    },
    moreSearch: (currentPage) => {
      Store.actions.searchProductApi(Store.state.searchWord, currentPage);
    },
    relationSearch: (word) => {
        const encodeWord = encodeURI(word);
        location.href = `/search/?q=${encodeWord}&opt_ctg=`;
    }
  },
  computed: {
    isResultProductShow() {
      return !this.state.selectedCategory || this.state.selectedCategory[0] === 'product' ? true : false;
    }
  },
  components: {
    Search,
    Result,
    Pager,
    ResultZero,
    ResultRelation,
    ResultProduct
  }
};
</script>
