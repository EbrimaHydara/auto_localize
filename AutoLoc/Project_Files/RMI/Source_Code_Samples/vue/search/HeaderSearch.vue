<template>
    <div class="g-HeaderV2_Search-contents">
        <form @submit.prevent="submitSearch">
            <div class="g-HeaderV2_Search-box">
                <input type="text" placeholder="キーワードを入力" v-model="searchWord" @input="onInput" autocomplete="off" value="" class="g-HeaderV2_Search-input" aria-label="検索ボックス">
                <span class="g-HeaderV2_Search-btn" @click.prevent="submitSearch">
                    <span class="c-Icon_Search g-HeaderV2_Search-btn-icon"></span>
                    <input type="submit" value="" class="g-HeaderV2_Search-btn-submit">
                </span>
            </div>
        </form>
        <Initial
            v-show="this.searchWord.length === 0"
            @search="relationSearch"
            :popularWords="state.popularWords"
            :suggestBnr="state.recommendContents"
            :historyWords="state.historyWords"
            :LID="LID"
            @clickResult="suggestItemClickHandler">
        </Initial>
        <Suggest
            v-show="this.searchWord.length > 1"
            :suggestItem="state.suggestItem"
            :suggestProduct="state.recommendItems"
            :_suggestProduct="this.$data._suggestProduct"
            :suggestBnr="state.recommendContents"
            :relatedWords="state.relatedWords"
            :LID="LID"
            @clickResult="suggestItemClickHandler">
        </Suggest>
    </div>
</template>

<script>
import Initial from "./components/Initial.vue";
import Suggest from "./components/Suggest.vue";
import Store from "./Store.js";

export default {
    data() {
        return {
            searchWord: '',
            state: Store.state,
            _suggestProduct: [],
            LID: {
                HIGH_FREQUENCY: 'snavi_mno_frequency_',
                HISTORY: 'snavi_mno_history_',
                SUGGEST_ITEM: 'support_top2_search',
                RELATED_WORD: 'snavi_mno_related_word_',
            },
            SCOPE: 'mno_whole_site',
            sessionId: Store.actions.manageSessionId(),
        }
    },
    methods: {
        submitSearch: function () {
            if (!this.searchWord) return;
            const encodeWord = encodeURI(this.searchWord);
            Store.actions.setDeepqaAnalysisItem({
              input_text: this.searchWord,
              sent_from_deepqa: true,
            })
            location.href = `/search/?q=${encodeWord}&l-id=support_top2_search`;
        },
        relationSearch: (emitInfo) => {
            const encodeWord = encodeURI(emitInfo.word);
            location.href = `/search/?q=${encodeWord}&l-id=${emitInfo.lid}`;
        },
        suggestList: function() {
            if ( this.searchWord.length > 1 ) {
                Store.actions.suggestApi(this.searchWord);
            }
        },
        onInput: function() {
            const SCOPE = this.SCOPE;
            if ( this.searchWord.length > 1 ) {
                (async () => {
                    this.$data._suggestProduct = [];
                    const apiData = await Promise.all([
                        Store.actions.relatedWordsApi(this.searchWord),
                        Store.actions.recommendItemApi(this.searchWord)
                    ]);
                    const suggestItem = apiData[0].quick_links;
                    const suggestBnr = apiData[1].contents.slice(0, 1);
                    const suggestProduct =apiData[1].items;
                    Store.actions.sendAnalysisApi({
                        name: 'impression',
                        data: {
                            input_text: this.searchWord,
                            smart_input_items: suggestItem,
                            campaign_items: suggestBnr,
                            product_items: suggestProduct,
                            scope: SCOPE,
                        },
                        session_id: this.sessionId,
                        ua: window.navigator.userAgent,
                    });
                })();
            } else if( this.searchWord.length === 0 ) {
                (async () => {
                    const apiData = await Store.actions.recommendItemApi('');
                    const suggestBnr = apiData.contents;
                    Store.actions.sendAnalysisApi({
                        name: 'impression',
                        data: {
                            input_text: '',
                            smart_input_items: [],
                            campaign_items: suggestBnr,
                            product_items: [],
                            scope: SCOPE,
                        },
                        session_id: this.sessionId,
                        ua: window.navigator.userAgent,
                    });
                })();
            }
        },
        suggestItemClickHandler: async function (props) {
            const { e, item } = props
            const SCOPE = this.SCOPE;
            const elm = e.currentTarget;
            if (e.button > 1) return // except for left/middle click
            await Store.actions
                .sendAnalysisApi({
                    name: 'click_url',
                    data: {
                        input_text: this.searchWord || '',
                        is_smart_input: item.is_smart_input || false,
                        is_smart_ad: item.is_smart_ad || false,
                        from_related_word: false,
                        from_suggestion: false,
                        sent_from_deepqa: true,
                        scope: SCOPE,
                        url: elm.href,
                    },
                    session_id: this.sessionId,
                    ua: window.navigator.userAgent,
                })
                .catch(err => console.log(err));
            const _item = JSON.parse(sessionStorage.getItem('deeppa_analysis') || '{}');
            const requiredData = {
              referrer: window.location.href,
              scope: SCOPE,
              sent_from_deepqa: true,
            };
            let payload = { ..._item, ...requiredData };
            Store.actions.setDeepqaAnalysisItem(payload);
            const isOpenTargetByKeyboard = () => {
                let isTarget = false
                if (/Macintosh/.test(window.navigator.userAgent) && e.metaKey) isTarget = true
                if (/Windows/.test(window.navigator.userAgent) && e.ctrlKey) isTarget = true
                return isTarget
            }
            if (e.button === 0 && !isOpenTargetByKeyboard()) window.location.href = elm.href
        },
    },
    components: {
        Initial,
        Suggest
    }
}
</script>
