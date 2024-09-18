<template>
    <div>
        <div v-if="relatedWords.length > 0" class="u-Adjust_Mt-24 ">
            <span class="u-Adjust_Mr-8">関連ワード：</span>
            <span class="g-HeaderV2_Search-related-words u-Adjust_Mr-16" v-for="(item, index) in relatedWords" :key="`relatedWords-${ index }`">
                <a href="#" @click.prevent="relationSearch(item.keyword, `${ LID.RELATED_WORD }${ index + 1 }`)">{{ item.keyword }}</a>
            </span>
        </div>

            <ul v-if="suggestItem.length > 0" class="g-HeaderV2_Search-suggest-list">
                <li><h4 class="c-Heading_Lv4">検索結果</h4></li>
                <li v-for="(item, index) in suggestItem" :key="`suggestItem-${index}`">
                    <p class="g-HeaderV2_Search-clamp-secondline">
                        <span class="g-HeaderV2_Search-label" v-for="ctg of item.categories" :key="`suggestList-${index}`">
                            {{ ctg | displayCategory }}
                        </span>
                        <a :href="`${path.sitedomain}${item.url.includes('?') ? item.url + '&' : item.url + '?'}l-id=${LID.SUGGEST_ITEM}`" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_input: true })">{{ item.title }}</a>
                    </p>
                    <p class="g-HeaderV2_Search-clamp-secondline">{{ item.description }}</p>
                </li>

            </ul>
        <div v-if="suggestProduct.length > 0" class="g-HeaderV2_Search-container">

            <ul v-if="childSuggestProduct.length <= 3" class="g-HeaderV2_Search-suggest-product">
                <li v-for="(item, index) in suggestProduct.slice(0, 3)" :key="`suggestProduct-${ index }`">
                    <div><a :href="`${ path.sitedomain }${ item.url }`" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })"><img :src="`${ path.sitedomain }${ item.img }`" width="300" alt=""></a></div>
                    <div>
                         <p class="g-HeaderV2_Search-clamp-secondline"><a :href="`${ path.sitedomain }${ item.url }`" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })">{{ item.title }}</a></p>
                         <p class="g-HeaderV2_Search-clamp-secondline">{{ item.description }}</p>
                    </div>
                </li>
            </ul>
            <ul v-if="childSuggestProduct.length > 3" class="g-HeaderV2_Search-suggest-product">
                <li v-for="(item, index) in childSuggestProduct" :key="`childSuggestProduct-${ index }`">
                    <div><a :href="`${ path.sitedomain }${ item.url }`" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })"><img :src="`${ path.sitedomain }${ item.img }`" width="300" alt=""></a></div>
                    <div>
                         <p class="g-HeaderV2_Search-clamp-secondline"><a :href="`${ path.sitedomain }${ item.url }`" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })">{{ item.title }}</a></p>
                         <p class="g-HeaderV2_Search-clamp-secondline">{{ item.description }}</p>
                    </div>
                </li>
            </ul>
            <div v-if="suggestProduct.length > 3 && suggestProduct.length - childSuggestProduct.length > 0" class="js-Readmore u-Adjust_Mt-24">
                <div class="c-Readmore_Trigger">
                    <button class="js-Readmore_Trigger" @click="readMore()"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>次の3件を表示</button>
                </div>
            </div>
        </div>
        <div v-if="suggestBnr.length > 0" class="g-HeaderV2_Search-container">
            <div class="g-HeaderV2_Search-bnr-wrapper">
                <a :href="suggestBnr[0].url" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })"><img :src="suggestBnr[0].img" :alt="suggestBnr[0].title"></a>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '../Store';
export default {
    props: [
        'suggestItem',
        'suggestProduct',
        '_suggestProduct',
        'suggestBnr',
        'relatedWords',
        'LID'
    ],
    data() {
        return {
            path: {
                sitedomain : ''
            },
            counter: 1,
            childSuggestProduct: this.$props._suggestProduct,
        }
    },
    watch: {
        _suggestProduct: {
            immediate: true,
            handler(value) {
                this.counter = 1;
                this.childSuggestProduct = value;
            }
        }
    },
    methods: {
        relationSearch: function(word, lid) {
            const encodeWord = encodeURI(word);
            const lidQuery = lid ? `&l-id=${lid}` : '';
            Store.actions.setDeepqaAnalysisItem({
                input_text: word,
                from_related_word: true,
            });
            location.href = `/search/?q=${encodeWord}${lidQuery}`;
        },
        readMore: function() {
            this.counter++;
            this.childSuggestProduct = this.suggestProduct.slice(0, this.counter * 3);
        },
        suggestItemClickHandler: async function (e, item) {
            const props = {e: e, item: item}
            this.$emit('clickResult', props)
        }
    }
};
</script>
