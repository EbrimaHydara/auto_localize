<template>
  <div class="u-Adjust_Mt-24">
      <h2 class="c-Heading_Lv2">{{ searchWord }} の検索結果　{{ itemTotal }}件</h2>
      <transition-group name="search-Vue_Animation" class="support-Search_Result" tag="ul" mode="out-in">
        <li v-for="item of items" :key="item.id">
            <template v-if="item.ctg">
                <span class="support-Search_Result-label" v-for="ctg of item.ctg" :key="ctg.id">
                    {{ ctg | displayCategory }}
                </span>
            </template>
            <span class="support-Search_Result-title"><a :href="`${ path.sitedomain }${ item.url }`" @click="beacon(item.id)" v-html="$options.filters.optimalTxt(item.title, searchWord, 60)"></a></span>
            <p class="u-Adjust_Mt-8" v-html="$options.filters.optimalTxt(item.text, searchWord, 60)"></p>
        </li>
      </transition-group>
  </div>
</template>

<script>
export default {
    props: [
        'searchWord',
        'items',
        'itemTotal'
    ],
    data() {
        return {
            scroll: false,
            path: {
                sitedomain : ''
            }
        }
    },
    updated() {
        let itemId = [];
        for( let item of this.items ) {
            itemId.push(item.id);
        }
        console.log('検索ワード:' + this.searchWord);
        console.log('アイテムIDの配列:');
        console.log(itemId);

        as_beacon_search_default(this.searchWord, itemId);
    },
    methods: {
        beacon: function(id) {
            as_beacon_detail(id);
        }
    }
};
</script>
