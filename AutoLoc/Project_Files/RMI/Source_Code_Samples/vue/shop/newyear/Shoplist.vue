<template>
    <div>
        <transition-group name="shop-newyear-Search_Animation" class="shop-newyear-Search_Shoplist" tag="ul" mode="out-in">
            <li v-for="shopResult of shopResults" :key="shopResult.shopid">
                <h3 class="c-Txt_Normal"><a class="c-Link_Txt" :href="`${ path.shopUrl }${ shopResult.shopid }/`">{{ shopResult.shopname }}</a></h3>
                <div class="c-Table_Wrap">
                <table class="c-Table_Container shop-newyear-Search_Shoptable">
                    <tbody>
                    <tr>
                        <th>日付</th><th>12/28</th><th>12/29</th><th>12/30</th><th>12/31</th><th>1/1</th><th>1/2</th><th>1/3</th><th>1/4</th><th>1/5</th>
                    </tr>
                    <tr>
                        <th>営業</th>
                        <td :aria-label="isClosed(shopResult.dec28)">{{ shopResult.dec28 }}</td>
                        <td :aria-label="isClosed(shopResult.dec29)">{{ shopResult.dec29 }}</td>
                        <td :aria-label="isClosed(shopResult.dec30)">{{ shopResult.dec30 }}</td>
                        <td :aria-label="isClosed(shopResult.dec31)">{{ shopResult.dec31 }}</td>
                        <td :aria-label="isClosed(shopResult.jan1)">{{ shopResult.jan1 }}</td>
                        <td :aria-label="isClosed(shopResult.jan2)">{{ shopResult.jan2 }}</td>
                        <td :aria-label="isClosed(shopResult.jan3)">{{ shopResult.jan3 }}</td>
                        <td :aria-label="isClosed(shopResult.jan4)">{{ shopResult.jan4 }}</td>
                        <td :aria-label="isClosed(shopResult.jan5)">{{ shopResult.jan5 }}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'Shoplist',
    props: [
        'shopResults',
        'scroll'
    ],
    data () {
        return {
            path: {
                shopUrl : 'https://network.mobile.rakuten.co.jp/shop-detail/'
            }
        }
    },
    updated () {
        if( this.scroll ) {
            const element = document.getElementById('js-newyear-top');
            const rect = element.getBoundingClientRect();
            const position = rect.top + window.pageYOffset;
            console.log(position);
            document.documentElement.scrollTop = position;
        }
    },
    methods: {
        isClosed (closed) {
            return closed === '休業' ? 'closed': '';
        },
    }
}
</script>
