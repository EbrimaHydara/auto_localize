<template>
    <div>
        <form @submit.prevent="submitSearch">
            <div class="l-System_Container">
                <div class="c-Search_Container search-Layout_Input">
                    <input type="input" value="" placeholder="検索" class="c-Search_Input" v-model="searchWord">
                    <div class="c-Search_Btn" @click.prevent="submitSearch"><input type="submit" value="" class="c-Search_Submit"><span class="c-Icon_Search c-Search_Icon"></span></div>
                </div>
            </div>
            <div ref="tab_wrapper" class="search-Layout_Search">
                <div class="search-Tab" v-bind:alia-hidden="isLoad? 'true' : 'false'">
                    <div class="search-Tab_Wrapper">
                        <ul class="search-Tab_Items" role="tablist">
                            <li v-for="(val, index) in visibleArr" ref="tab_items" class="search-Tab_Item" :id="`tab-menu${index+1}`" role="tab" :aria-selected="switchSelected(index+1)" :aria-controls="`tab-content${index+1}`" :data-val="valArr[index]" @click="handleClick(index+1, $event)">{{val}}</li>
                        </ul>
                        <dl ref="tab_extra_wrapper" class="search-Tab_Extra" v-bind:alia-hidden="isAllVisible? 'false' : 'true'">
                            <dt ref="tab_extra" v-bind:class="isHoldExtra? 'search-Tab_Extra-active' : ''">その他<span class="c-Icon_Chevron-right c-Readmore_Arrow"></span></dt>
                            <dd v-bind:alia-hidden="isHoverExtra? 'false' : 'true'">
                                <ul class="search-Tab_Extra-items" role="tablist">
                                    <li v-for="(val, index) in hiddenArr" ref="tab_extra_items" class="search-Tab_Extra-item" :id="`tab-menu${index+threshold+1}`" role="tab" :aria-selected="switchSelected(index+threshold+1)" :aria-controls="`tab-content${index+threshold+1}`" :data-val="valArr[index+threshold]" @click="handleClick(index+threshold+1, $event)">{{val}}</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchWord: '',
            selectedCategory: '',
            currentPage: 1,
            tabArr: ['すべて', 'よくあるご質問', '料金プラン', '製品', '通信・エリア', '店舗', 'オプションサービス', 'キャンペーン・特典', 'お客様サポート'],
            valArr: ['', 'faq', 'fee', 'product', 'area', 'shop-detail', 'service', 'campaign', ['guide', 'support']],
            visibleArr: [],
            hiddenArr: [],
            isAllVisible: true,
            isLoad: true,
            isHoverExtra: false,
            isHoldExtra: false,
            threshold: 0,
            selected: 0,
        }
    },
    created() {
        if( !location.search ) return;
        const query = location.search.split('&')[0].split('?q=')[1];
        const category = location.search.split('&')[1].split('opt_ctg=')[1];
        this.searchWord = decodeURI(query);
        // console.log(this.searchWord);
        this.selectedCategory = category;
        this.apiSearch();
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize)
        this.hoverExtra();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        hoverExtra() {
            let data = this;
            this.$refs.tab_extra_wrapper.addEventListener("mouseover", function(){
                data.isHoverExtra = true;
            });
            this.$refs.tab_extra_wrapper.addEventListener("mouseout", function(){
                data.isHoverExtra = false;
            });
        },
        submitSearch() {
            const encodeWord = encodeURI(this.searchWord);
            let lid = this.selectedCategory;
            // console.log(encodeWord);
            // console.log(this.selectedCategory);
            if (!lid) {
                lid = 'all';
            }
            location.href = `/search/?q=${encodeWord}&opt_ctg=${this.selectedCategory}&l-id=search_search_${lid}`;
        },
        apiSearch() {
            let optCtg = this.selectedCategory.split(',');
            this.$emit('submitSearch', this.searchWord, optCtg, this.currentPage);
        },
        onResize(event) {
            this.isLoad = true;
            this.isAllVisible = true;
            this.visibleArr = this.tabArr;
            const valArrForSelected = this.valArr.map(val => Array.isArray(val) ? val.join() : val);
            this.selected = valArrForSelected.indexOf(this.selectedCategory) + 1;
            let item_len = this.tabArr.length;
            let data = this;

            setTimeout(function(){
                let wrapperWidth = data.$refs.tab_wrapper.offsetWidth - 32;
                let extraWidth = data.$refs.tab_extra.offsetWidth;
                let tabsWidth = 0;
                data.threshold = item_len;

                for (let i = 0; i < item_len; i++) {
                    let tabWidth = data.$refs.tab_items[i].offsetWidth;
                    tabsWidth += tabWidth;
                    if (wrapperWidth < tabsWidth) {
                        data.threshold = i;
                        tabsWidth -= tabWidth;
                        break;
                    }
                }
                if (wrapperWidth < tabsWidth + extraWidth) {
                    data.threshold--;
                }

                if (data.threshold === item_len) {
                    data.isAllVisible = false;
                }
                else {
                    data.visibleArr = data.tabArr.slice(0, data.threshold);
                    data.hiddenArr = data.tabArr.slice(data.threshold);
                }
                if (data.selected > data.threshold) {
                    data.isHoldExtra = true;
                }
                else {
                    data.isHoldExtra = false;
                }
                data.isLoad = false;
            }, 0)
        },
        handleClick(index, event) {
            this.selected = index
            console.log(index)
            console.log(this.searchWord)
            console.log(event.target)
            this.selectedCategory = event.target.dataset.val
            console.log(this.selectedCategory)
            this.submitSearch(this.searchWord)
        },
        switchSelected(index) {
            return index === this.selected ? true : false
        }
    }
};
</script>
