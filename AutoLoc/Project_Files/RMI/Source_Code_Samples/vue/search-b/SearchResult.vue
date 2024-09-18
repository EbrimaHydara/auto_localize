<template>
    <div>
        <div class="l-System_Container">
            <h1 class="c-Heading_Lv1 u-Adjust_Mt-32">「{{ state.searchWord }}」の検索結果</h1>
        </div>
        <div class="search-Layout">
            <Search
                @submitSearch="apiSearch"
                @inputSearch="suggestList"
                @hideSuggestList="hideSuggestList"
                :suggestItem="state.suggestItem"
                :isSuggest="this.isSuggest">
            </Search>
            <div class="l-System_Container">
                <Suggest
                    v-show="state.suggestItem.length > 0 && this.isSuggest && this.searchWord.length > 0"
                    :suggestItem="state.suggestItem"
                    :searchWord="this.searchWord">
                </Suggest>
            </div>
        </div>
        <div class="l-System_Container">
            <Result
                v-show="state.itemTotal > 0"
                :searchWord="state.searchWord"
                :items="state.items"
                :itemTotal="state.itemTotal"
                :text="state.text">
            </Result>
            <ResultZero
                v-show="state.itemTotal === 0"
                @search="relationSearch"
                :text="state.text">
            </ResultZero>
        </div>
    </div>
</template>

<script>
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";
import ResultZero from "./components/ResultZero.vue";
import Suggest from "./components/Suggest.vue";
import Store from "./Store.js";

export default {
  data() {
    return {
      state: Store.state,
      searchWord: '',
      isSuggest: false,
    }
  },
  methods: {
    apiSearch: (searchWord, selectedCategory, currentPage) => {
        Store.actions.searchApi(searchWord, selectedCategory, currentPage, 10);
    },
    pagerSearch: (currentPage) => {
        Store.actions.searchApi(Store.state.searchWord, Store.state.selectedCategory, currentPage, 10);
    },
    moreSearch: (currentPage) => {
    },
    relationSearch: (word) => {
        const encodeWord = encodeURI(word);
        location.href = `/search-b/?q=${encodeWord}`;
    },
    suggestList: function(word) {
        this.searchWord = word;
        if ( this.searchWord.length > 1 ) {
            this.isSuggest = true;
            Store.actions.suggestApi(this.searchWord);
        }
    },
    hideSuggestList: function() {
        let self = this;
        setTimeout(function(){
            self.isSuggest = false;
        }, 200);
    }
  },
  computed: {
    isResultProductShow() {
    }
  },
  components: {
    Search,
    Result,
    ResultZero,
    Suggest
  }
};
</script>
