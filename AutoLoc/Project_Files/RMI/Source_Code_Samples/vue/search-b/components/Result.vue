<template>
  <div class="u-Adjust_Mt-24" id="js-result-top">
      <p>{{ text }}</p>
      <h2 class="c-Heading_Lv2 u-Adjust_Mt-8">検索結果　{{ itemTotal }}件</h2>
      <transition-group name="search-Vue_Animation" class="search-Result" tag="ul" mode="out-in">
        <li v-for="item of items" :key="item.id">
            <template v-if="item.ctg">
                <span class="search-Result_Label">
                    {{ item.ctg | displayCategory }}
                </span>
            </template>
            <template v-else>
                <span class="search-Result_Label">その他</span>
            </template>

            <span class="search-Result_Title">
                <a :href="modifyUrl(path.sitedomain + item.URL + urlParameter)" v-html="$options.filters.optimalTxt(item.question, searchWord, 100)" @click="clickSearchResult(item.URL)"></a>
            </span>
            <p class="u-Adjust_Mt-8" v-html="$options.filters.optimalTxt(item.answer, searchWord, 100)"></p>
        </li>
      </transition-group>
  </div>
</template>

<script>
import Store from "../Store.js";
export default {
    props: [
        'searchWord',
        'items',
        'itemTotal',
        'text'
    ],
    data() {
        return {
            scroll: false,
            path: {
                sitedomain : ''
            },
            urlParameter: '',
            fromSupport: false,
            state: Store.state,
        }
    },
    created() {
        this.isFromSupport();

        const item = sessionStorage.getItem("deepqa_analysis");
        if (item.length > 1) {
            const items = JSON.parse(item);
            Store.actions.sendAnalysisApi(items[0], items[1]);
            sessionStorage.setItem("deepqa_analysis", '');
        }
    },
    updated() {
        if( !this.scroll ) {
            this.scroll = true;
        } else {
            const element = document.getElementById('js-result-top');
            const rect = element.getBoundingClientRect();
            const position = rect.top + window.pageYOffset;
            document.documentElement.scrollTop = position;
        }
        let urls = [];
        const isSmart = location.search.indexOf('smart') > 0;

        for (let i = 0, len = this.items.length; i < len; i++) {
            urls.push({
                "url": this.items[i].URL,
                "title": this.items[i].question
            });
        }

        Store.actions.sendAnalysisApi("search", {
            "input_text": this.searchWord,
            "is_smart_input": isSmart,
            "answer_items": urls
        });
    },
    methods: {
        modifyUrl: function(target) {
            const slashIndex = target.lastIndexOf('/');
            const query = target.substring(slashIndex);
            const regexp = /\?/g;
            const count = query.match(regexp) ? query.match(regexp).length : 0;
            if (count == 2) {
                const paramIndex = target.lastIndexOf('?');
                const pre = target.slice(0, paramIndex);
                const post = target.slice(paramIndex + 1);
                const replaced = '&';
                return pre + replaced + post;
            } else {
                return target;
            }
        },
        isFromSupport: function() {
            const l_id = 'support_top2_search';
            const l_id_smart = 'support_top2_search_smart';
            const currentParameter = location.search;
            if (currentParameter.indexOf(`l-id=${ l_id_smart }`) > -1) {
                this.fromSupport = true;
                this.urlParameter = '?l-id=support_top2_search_smart';
            }
            else if (currentParameter.indexOf(`l-id=${ l_id }`) > -1) {
                this.fromSupport = true;
                this.urlParameter = '?l-id=support_top2_search';
            }
        },
        clickSearchResult: function(url) {            
            if (window.localStorage) {
                sessionStorage.setItem("deepqa_analysis_click_url", '["click_url", {"url": "' + url + '"}]');
            }
        }
    }
};
</script>
