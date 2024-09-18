<template>
    <div>
        <div class="u-Adjust_Mt-16">
            <p>{{ text }}</p>
            <h2 class="c-Heading_Lv2 u-Adjust_Mt-48">検索のヒント</h2>
            <ul class="c-List_Text-disc u-Adjust_Mt-16">
                <li>質問に誤字・脱字がないか確認してください。</li>
                <li>別の質問を試してみてください。</li>
                <li>より一般的な言葉を使ってみてください。</li>
            </ul>
        </div>

        <div>
            <div v-show="popularWords !== null">
                <h2 class="c-Heading_Lv2 u-Adjust_Mt-48">よく検索されているワード</h2>
                <ul class="u-Adjust_Mt-16">
                    <li v-for="item of popularWords" :key="item.id" class="u-Adjust_Mt-16">
                        <a href="#" @click="relationSearch(item)" class="c-Link_Txt-icon">{{ item }}<span class="c-Icon_Chevron-right"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Store from "../Store.js";
export default {
    props: [,
        'text'
    ],
    data() {
        return {
            popularWords: [
                'iPhoneは利用できますか',
                'iPhoneが接続できない',
                '初期設定方法を確認したい',
                '支払い方法の確認',
                'APN設定をしたい',
                'ポイントを利用したい',
            ]
        }
    },
    created() {
        const item = sessionStorage.getItem("deepqa_analysis");
        if (item.length > 1) {
            const items = JSON.parse(item);
            Store.actions.sendAnalysisApi(items[0], items[1]);
            sessionStorage.setItem("deepqa_analysis", '');
        }
    },
    methods: {
        relationSearch: function(word) {
            
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
            
            this.$emit('search', word);
        }
    }
};
</script>
