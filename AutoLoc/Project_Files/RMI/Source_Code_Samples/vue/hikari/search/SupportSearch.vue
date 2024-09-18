<template>
    <div>
        <div class="hikari-support-top-Search_Layout">
            <div class="hikari-support-top-Search_Layout-grid1">
                <img src="/assets/img/support/search.png" alt="">
            </div>
            <div class="hikari-support-top-Search_Layout-grid2">
                <h2 class="c-Heading_Lv2 u-Adjust_Align-center">お困りごとは何ですか？</h2>
                <p class="u-Adjust_Mt-16 u-Adjust_Align-center">キーワードを入力して、知りたいことや困っていることの解決方法を検索できます。</p>

                <form @submit.prevent="formSearch(searchWord)" class="support-Search_Layout-search u-Adjust_Mt-16">
                    <div class="c-Search_Container support-Search_Layout-input">
                        <input type="input" value="" placeholder="例：工事、ひかり電話、パスワード" v-bind:class="state.suggestItem.length > 0 && this.isSuggest && this.searchWord.length > 0 ? 'c-Search_Input support-Search_Input support-Search_Input-connect' : 'c-Search_Input support-Search_Input'" autocomplete="off" v-model="searchWord" @input="suggestList" @blur="hideSuggestList" aria-label="検索ボックス">
                        <div class="c-Search_Btn support-Search_Button" @click.prevent="formSearch(searchWord)"><input type="submit" value="" class="c-Search_Submit support-Search_Submit"><span class="c-Icon_Search c-Search_Icon support-Search_Icon"></span></div>
                    </div>
                </form>
                <SuggestSupport
                    v-show="state.suggestItem.length > 0 && this.isSuggest && this.searchWord.length > 0"
                    :suggestItem="state.suggestItem"
                    :searchWord="this.searchWord">
                </SuggestSupport>
                <div class="support-Search_Layout-words">
                    <p class="support-Search_Layout-wordstxt c-Txt_Emp-01 u-Adjust_Align-center u-Adjust_Mt-32">よくあるお困りごと</p>
                    <ul v-if="isRegistered" class="support-Search_Wordslist u-Adjust_Mt-8">
                        <li v-for="(item, i) in state.registeredUserHighFrequencyList" :key="i">
                            <a class="c-Link_Txt" href="#" @click.prevent="recommendSearch(item.input_text)">{{item.input_text}}</a>
                        </li>
                    </ul>
                    <ul v-if="!isRegistered" class="support-Search_Wordslist u-Adjust_Mt-8">
                        <li v-for="(item, i) in state.nonregisteredUserHighFrequencyList" :key="i">
                            <a class="c-Link_Txt" href="#" @click.prevent="recommendSearch(item.input_text)">{{item.input_text}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hikari-support-top-Search_Layout-grid3">
                <img src="/assets/img/support/solution.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Store from "./Store.js";
import SuggestSupport from "./components/SuggestSupport.vue";

export default {
  data() {
      return {
          searchWord: '',
          state: Store.state,
          isSuggest: false,
      }
  },
  props: ['isRegistered'],
  created () {

    const usertype_registered = this.isRegistered? 'registered_user' : 'non_registered_user';
      Store.actions.highFrequencyApi(usertype_registered);
  },
  methods: {
      recommendSearch: function(word) {

          if (window.localStorage) {
              const obj = [
                  "inquiry_input", {
                      "inquiry_to_smart_input": null,
                      "inquiry_to_deepqa": word,
                      "selected_smart_input_item": null,
                      "smart_input_items": null
                  }
              ];
              const txt = JSON.stringify(obj);
              sessionStorage.setItem("deepqa_analysis", txt);
          }

          this.apiSearch(word);
      },
      formSearch: function(word) {
          let items = [];

          for (let i = 0, len = this.state.suggestItem.length; i < len; i++) {
              items.push({"title": this.state.suggestItem[i].content});
          }

          if (window.localStorage) {
              const obj = [
                  "inquiry_input", {
                      "inquiry_to_smart_input": word,
                      "inquiry_to_deepqa": word,
                      "selected_smart_input_item": null,
                      "smart_input_items": items
                  }
              ];
              const txt = JSON.stringify(obj);
              sessionStorage.setItem("deepqa_analysis", txt);
          }
          this.apiSearch(word);
      },
      apiSearch: function(word) {
          const l_id = 'rhk_support_search';
          if ( word.length > 0 ) {
              const encodeWord = encodeURI(word);
              location.href = `/hikari/search/?q=${ encodeWord }&l-id=${ l_id }`;
          }
      },
      suggestList: function() {
            if (this.searchWord.length > 1) {
                this.isSuggest = true;
                Store.actions.suggestApi(this.searchWord, {
                    use_input_suggestions: true,
                    limit: 5,
                    categories: [],
                });
          }
      },
      hideSuggestList: function() {
          let self = this;
          setTimeout(function(){
              self.isSuggest = false;
          }, 200);
      }
  },
  components: {
      SuggestSupport
  }
};
</script>
