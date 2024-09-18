<template>
    <div>
        <div class="support-Search_Layout">
            <div class="support-Search_Layout-grid1">
                <img src="/assets/img/support/search.png" alt="">
            </div>
            <div class="support-Search_Layout-grid2">
                <form @submit.prevent="apiSearch(searchWord)" class="support-Search_Layout-search">
                    <div class="c-Search_Container support-Search_Layout-input">
                        <input type="input" value="" placeholder="キーワードを入力" class="c-Search_Input support-Search_Input" autocomplete="off" v-model="searchWord" aria-label="検索ボックス">
                        <div class="c-Search_Btn support-Search_Button" @click.prevent="apiSearch(searchWord)"><input type="submit" value="" class="c-Search_Submit support-Search_Submit"><span class="c-Icon_Search c-Search_Icon support-Search_Icon"></span></div>
                    </div>
                </form>
                <div class="support-Search_Layout-words">
                    <p class="support-Search_Layout-wordstxt c-Txt_Emp-01 u-Adjust_Align-center u-Adjust_Mt-16">よく検索されているワード</p>
                    <ul class="support-Search_Wordslist u-Adjust_Mt-8">
                        <li v-for="(word, i) in searchWords" :key="i">
                            <a href="#" @click.prevent="apiSearch(word)">{{word}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="support-Search_Layout-grid3">
                <img src="/assets/img/support/solution.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Store from "./Store.js";

export default {
  data() {
    return {
        searchWord: '',
        selectedCategory: ['faq'],
        currentPage: 1,
    }
  },
  computed: {
    searchWords() {
      return ['初期設定', 'iPhone', 'ポイント', 'Rakuten Link', '請求金額']
    }
  },
  methods: {
    apiSearch: function(word) {
        const l_id = 'support_top_search';
        if ( word.length > 0 ) {
            const encodeWord = encodeURI(word);
            location.href = `/search/?q=${ encodeWord }&opt_ctg=faq&l-id=${ l_id }`;
        }
    },
  },
};
</script>
