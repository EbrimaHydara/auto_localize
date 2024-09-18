<template>
    <div class="support-Search_Suggest">
        <ul class="support-Search_Suggest-list">
            <li v-for="(item, index) of suggestItem" :key="item.id">
                <p>
                    <a :href="`/hikari/search/?q=${ encodeURI(item.text) }&l-id=rhk_support_search_smart`" @click="clickSmartInput(index, item.text)">{{ item.text }}</a>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import Store from "../Store.js";
export default {
    props: [
        'suggestItem',
        'searchWord'
    ],
    data() {
        return {
            path: {
                sitedomain : ''
            }
        }
    },
    methods: {
        clickSmartInput: function(id, content) {
            let items = [];
            let word = this.searchWord;

            for (let i = 0, len = this.suggestItem.length; i < len; i++) {
                items.push({"title": this.suggestItem[i].text});
            }

            if (window.localStorage) {
                const obj = [
                        "inquiry_input", {
                                "inquiry_to_smart_input": word,
                                "inquiry_to_deepqa": content,
                                "selected_smart_input_item": id,
                                "smart_input_items": items
                        }
                ];
                const txt = JSON.stringify(obj);
                sessionStorage.setItem("deepqa_analysis", txt);
            }
        }
    }
};
</script>
