<template>
    <div>
        <form @submit.prevent="submitSearch">
            <div class="l-System_Container">
                <div class="c-Search_Container search-Layout_Input">
                    <input type="input" value="" placeholder="例：アイフォンを利用したい" v-bind:class="suggestItem.length > 0 && isSuggest && this.searchWord.length > 0? 'c-Search_Input search-Layout_Input-connect' : 'c-Search_Input'" v-model="searchWord" @input="suggestList" @blur="hideSuggestList">
                    <div class="c-Search_Btn" @click="submitSearch"><input type="submit" value="" class="c-Search_Submit"><span class="c-Icon_Search c-Search_Icon"></span></div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Store from "../Store.js";
export default {
    props: [
        'suggestItem',
        'isSuggest'
    ],
    data() {
        return {
            searchWord: ''
        }
    },
    created() {
        if( !location.search ) return;
        const query = location.search.split('&')[0].split('?q=')[1];
        this.searchWord = decodeURI(query);
        this.apiSearch();
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
        submitSearch() {
            const encodeWord = encodeURI(this.searchWord);
            const l_id = 'support_top2_search';
            const l_id_smart = 'support_top2_search_smart';
            const currentParameter = location.search;
            let urlParameter = '';
            if (currentParameter.indexOf(`l-id=${ l_id_smart }`) > -1) {
                urlParameter = '&l-id=support_top2_search_smart';
            }
            else if (currentParameter.indexOf(`l-id=${ l_id }`) > -1) {
                urlParameter = '&l-id=support_top2_search';
            }

            let items = [];

            for (let i = 0, len = this.suggestItem.length; i < len; i++) {
                items.push({"title": this.suggestItem[i].content});
            }
            
            if (window.localStorage) {
                const obj = [
                        "inquiry_input", {
                            "inquiry_to_smart_input": this.searchWord,
                            "inquiry_to_deepqa": this.searchWord,
                            "selected_smart_input_item": null,
                            "smart_input_items": items
                        }
                ];
                const txt = JSON.stringify(obj);
                sessionStorage.setItem("deepqa_analysis", txt);
            }

            location.href = `/search-b/?q=${encodeWord}${urlParameter}`;
        },
        apiSearch() {
            this.$emit('submitSearch', this.searchWord, '', 1);
        },
        suggestList: function() {
            this.$emit('inputSearch', this.searchWord);
        },
        hideSuggestList: function() {
            this.$emit('hideSuggestList', this);
        }
    }
};
</script>
