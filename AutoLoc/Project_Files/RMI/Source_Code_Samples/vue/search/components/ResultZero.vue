<template>
    <div>
        <div class="u-Adjust_Mt-40">
            <h2 class="c-Heading_Lv4">”{{ searchWord }}” に一致するページは見つかりませんでした。</h2>
            <p class="u-Adjust_Mt-32 c-Txt_Emp-01">検索のヒント</p>
            <ul class="c-List_Text-disc u-Adjust_Mt-16">
                <li>キーワードに誤字・脱字がないか確認してください。</li>
                <li>別のキーワードを試してみてください。</li>
                <li>より一般的な言葉を使ってみてください。</li>
            </ul>
        </div>

        <div class="search-Result_Container">
            <div v-show="popularWords !== null">
                <h2 class="c-Heading_Lv4">よく検索されているワード</h2>
                <ul class="search-Layout_Words-list u-Adjust_Mt-24">
                    <li v-for="item of popularWords" :key="item.id">
                        <a href="#" @click.prevent="relationSearch(item.keyword)" class="c-Link_Txt-icon">{{ item.keyword }}<span class="c-Icon_Chevron-right"></span></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="search-Result_Container" v-show="relationContents !== undefined">
            <h2 class="c-Heading_Lv4">おすすめ</h2>
            <ul class="search-Product_Result">
                <li v-for="contents of relationContents" :key="contents.id">
                    <div><img :src="contents.image_url" alt=""></div>
                    <div>
                        <p><a :href="contents.url">{{ contents.title }}</a></p>
                        <p>{{ contents.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'searchWord',
        'relationContents',
        'popularWords'
    ],
    data() {
        return {
            path: {
                sitedomain : ''
            }
        }
    },
    methods: {
        relationSearch: function(word) {
            this.$emit('search', word);
        }
    }
};
</script>
