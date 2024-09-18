<template>
    <div>
        <ul class="c-Pager_Wrap u-Adjust_Mt-40">
            <template v-if="currentPage === 1">
                <li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-left"></span></span></li>
            </template>
            <template v-else>
                <li><a href="#" @click.prevent="pagerPrev()" class="c-Pager_Arrow"><span class="c-Icon_Chevron-left"></span></a></li>
            </template>
            <li v-for="n in page" :key="n.id" :aria-controls="init">
                <template v-if="n + count <= pageTotal">
                    <template v-if="n + count === currentPage">
                        <span class="c-Pager_Number hikari-search-Result_Pager" aria-current="true">{{ n + count }}</span>
                    </template>
                    <template v-else>
                        <a href="#" @click.prevent="pagerClick(n + count)" class="c-Pager_Number hikari-search-Result_Pager">{{ n + count }}</a>
                    </template>
                </template>
            </li>
            <template v-if="currentPage < pageTotal">
                <li><a href="#" @click.prevent="pagerNext()" class="c-Pager_Arrow"><span class="c-Icon_Chevron-right"></span></a></li>
            </template>
            <template v-else>
                <li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-right"></span></span></li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'page',
        'pageTotal',
        'init'
    ],
    data() {
        return {
            count: 0,
            currentPage: 1
        }
    },
    beforeUpdate: function() {
        if( this.init ) {
            this.count = 0;
            this.currentPage = 1;
        }
    },
    methods: {
        pagerClick: function(pageNum) {
            this.currentPage = Number(pageNum);
            this.$emit('pager', this.currentPage);
            if ( this.currentPage === 5 + this.count ) {
                this.count += + 2;
            } else if ( this.currentPage === 1 + this.count && this.currentPage !== 1 ) {
                this.count += - 2;
            }
        },
        pagerPrev: function() {
            this.currentPage = Number(this.currentPage - 1);
            this.$emit('pager', this.currentPage);
            if ( this.currentPage === 1 + this.count && this.currentPage !== 1 ) {
                this.count += - 2;
            }
        },
        pagerNext: function() {
            this.currentPage = Number(this.currentPage + 1);
            this.$emit('pager', this.currentPage);
            if ( this.currentPage === 5 + this.count ) {
                this.count += + 2;
            }
        }
    }
};
</script>
