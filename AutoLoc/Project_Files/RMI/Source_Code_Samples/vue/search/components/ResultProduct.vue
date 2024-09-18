<template>
    <div class="search-Product">
        <h2 class="c-Heading_Lv4">検索ワード関連製品　{{ productTotal }}件</h2>
        <ul class="search-Product_Result" v-for="product in products" :key="product.id">
            <li v-for="item in product" :key="item.id">
                <div><a :href="`${ path.sitedomain }${ item.url }?l-id=search_cat-${categorylid}_product`" @click="beacon(item.id)"><img :src="`${ path.sitedomain }${ item.img }`" alt=""></a></div>
                <div>
                    <p><a :href="`${ path.sitedomain }${ item.url }?l-id=search_cat-${categorylid}_product`" @click="beacon(item.id)">{{ item.title }}</a></p>
                    <p>{{ item.text }}</p>
                </div>
            </li>
        </ul>
        <div v-show="productTotal > 3" class="u-Adjust_Mt-24">
            <a href="#" class="c-Link_Txt-icon-front" v-if="isEnd()" @click.prevent="moreItem(currentPage += 1)">
                <span class="c-Icon_Chevron-right search-Product_More-icon"></span>次の3件を表示
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            next: true,
            path: {
                sitedomain : ''
            },
            categorylid: 'all',
        }
    },
    props: [
        'searchWord',
        'productTotal',
        'products'
    ],
    updated() {
        const lid_search = location.search.split('l-id=search_search_')[1];
        ( lid_search ) ? this.categorylid = lid_search : this.categorylid = 'all';
    },
    methods: {
        isEnd: function() {
            return this.next;
        },
        moreItem: function(pageNum) {
            const page = Math.ceil(this.productTotal / 3 - 1);
            if ( page < pageNum) {
                this.next = false
            }
            this.$emit('more', pageNum);
        },
        beacon: function(id) {
            as_beacon_detail(id);
        }
    }
};
</script>
