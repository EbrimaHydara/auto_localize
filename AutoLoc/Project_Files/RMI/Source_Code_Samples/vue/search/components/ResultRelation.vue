<template>
    <div>
        <div v-if="relationWords !== null" class="search-Layout_Words">
            <p class="search-Layout_Words-txt c-Txt_Emp-01">関連ワード</p>
            <ul class="search-Layout_Words-list">
                <li v-for="item of relationWords" :key="item.id">
                    <a href="#" @click.prevent="relationSearch(item.value)" class="c-Link_Txt-icon">{{ item.value }}<span class="c-Icon_Chevron-right"></span></a>
                </li>
            </ul>
        </div>

        <div v-show="itemTotal === 0">
            <div v-if="suggestions !== null" class="search-Layout_Words">
                <p class="search-Layout_Words-txt c-Txt_Emp-01">もしかして</p>
                <ul class="search-Layout_Words-list">
                    <li v-for="item of suggestions" :key="item.id">
                        <a href="#" @click.prevent="relationSearch(item)" class="c-Link_Txt-icon">{{ item }}<span class="c-Icon_Chevron-right"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'relationWords',
        'suggestions',
        'itemTotal'
    ],
    methods: {
        relationSearch: function(word) {
            this.$emit('search', word);
        }
    }
};
</script>
