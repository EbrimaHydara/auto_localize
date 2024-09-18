<template>
    <div>
        <div class="c-Theme-Light hikari-search-Layout">
            <div class="l-System_Container">
                <Search @submitSearch="apiSearch"></Search>
            </div>
        </div>
        <div class="l-System_Container">
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
        Store.actions.setStorage(searchWord);
    },
    pagerSearch: (currentPage) => {
        Store.actions.searchApi(Store.state.searchWord, Store.state.selectedCategory, currentPage, 10);
    },
    relationSearch: (word) => {
        const encodeWord = encodeURI(word);
        location.href = `/hikari/search/?q=${encodeWord}`;
    }
  },
  components: {
    Search,
    Result,
    Pager,
    ResultZero
  }
};
</script>
