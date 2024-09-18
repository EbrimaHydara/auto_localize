<template>
    <div>
        <div>
            <div v-show="popularWords.length > 0" class="u-Adjust_Mt-24">
                <h2 class="c-Heading_Lv4">よく検索されるワード</h2>
                <div class="g-HeaderV2_Search-popular-words">
                    <p v-for="(item, index) in popularWords" :key="`popularWords-${index}`">
                        <button class="g-HeaderV2_Search-btn-link" @click="relationSearch(item.input_text, `${LID.HIGH_FREQUENCY}${index + 1}`)">{{ item.input_text }}</button>
                    </p>
                </div>
            </div>
        </div>

        <div v-show="historyWords !== null" class="g-HeaderV2_Search-container">
            <h2 class="c-Heading_Lv4">検索履歴</h2>
            <p v-for="(item, index) in historyWords" :key="`history-${index}`" class="u-Adjust_Mt-16">
                <button class="g-HeaderV2_Search-btn-link" @click="relationSearch(item, `${LID.HISTORY}${index + 1}`)">{{ item }}</button>
            </p>
        </div>

        <div v-if="suggestBnr.length > 0" class="u-Adjust_Mt-24">
            <div class="g-HeaderV2_Search-bnr-wrapper">
                <a v-for="(item, index) in suggestBnr.slice(0, 3)" :key="`suggestBnr-${index}`" :href="item.url" @mousedown.prevent="suggestItemClickHandler($event, { is_smart_ad: true })"><img :src="item.img" :alt="item.title"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'popularWords',
        'historyWords',
        'suggestBnr',
        'LID'
    ],
    methods: {
        relationSearch: function(word, lid) {
            this.$emit('search', {word:word, lid:lid});
        },
        suggestItemClickHandler: async function (e, item) {
            const props = {e: e, item: item}
            this.$emit('clickResult', props)
        }
    }
};
</script>
