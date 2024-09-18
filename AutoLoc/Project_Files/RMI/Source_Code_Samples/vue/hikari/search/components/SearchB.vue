<template>
    <div>
        <form @submit.prevent="submitSearch">
            <div class="c-Search_Container">
                <input type="input" value="" placeholder="キーワードを入力" class="c-Search_Input" v-model="searchWord">
                <div class="c-Search_Btn" @click.prevent="submitSearch"><input type="submit" value="" class="c-Search_Submit"><span class="c-Icon_Search c-Search_Icon"></span></div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchWord: '',
            selectedCategory: ['hikari', 'hikari-faq'],
            currentPage: 1
        }
    },
    created() {
        if( !location.search ) return;
        const query = location.search.split('&')[0].split('?q=')[1];
        this.searchWord = decodeURI(query);
        this.apiSearch();
    },
    methods: {
        submitSearch() {
            const encodeWord = encodeURI(this.searchWord);
            location.href = `/hikari/search/index.html?q=${encodeWord}`;
        },
        apiSearch() {
            const optCtg = this.selectedCategory;
            this.$emit('submitSearch', this.searchWord, optCtg, this.currentPage);
        }
    }
};
</script>
