<template>
    <div>
        <ShopFilter :shops="shops"></ShopFilter>
        <h2 class="c-Heading_Lv2 u-Adjust_Mt-48">取り扱いショップ一覧</h2>
        <ShopList :shops="shops"></ShopList>
    </div>
</template>


<script>
import ShopFilter from './ShopFilter.vue';
import ShopList from './ShopList.vue';

export default {
    name: 'ShopResult',
    components: {
        ShopFilter,
        ShopList
    },
    data () {
        return {
            shops: [],
        }
    },
    created () {
        this.getData()
            .then(data => {
              this.shops = this.sortData(data);
            })
            .catch(err => {
              // TODO: error handling.
              console.log(err);
            });
    },
    methods: {
        getData: async function () {
            $.ajaxSetup({ cache: false });
            const shopMasterEP = 'https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops';
            // const shopMasterEP = 'http://stg-shopmaster.rakuten-mobile.rocks/shopmaster-public/v1/shops';
            const shopDealingIn = '/assets/json/shop-iphone.json';
            const rawData = await $.getJSON(shopMasterEP);
            const shopDealingInData = await $.getJSON(shopDealingIn);
            let data = rawData.filter(elem => this.filterPublication(elem));
            data = data.reduce(function(filtered, elem) {
                const target = shopDealingInData.find((shop) => {
                    return (shop['Shop ID'] === elem.code && shop['店舗一覧ページ_掲出タイミング'] !== '');
                });
                if (target) {
                    elem.shopReservationUrl = target['来店予約トップURL'];
                    elem.shopReservationText = target['店舗一覧ページ_来店予約リンクボタン中の文言'];
                    elem.dealStartDate = target['取り扱い状況'];
                    elem.notes = target['店舗一覧ページ_注釈の文言'];
                    filtered.push(elem);
                }
                return filtered;
            }, []);

            return data;
        },
        filterPublication (value) {
            let today = new Date();
            const publicationStartDatetime = value.announcement_info.publication_start_datetime.replace(/-/g, '/');
            const termStart = new Date(publicationStartDatetime);
            if (termStart <= today) {
                if (typeof value.announcement_info.publication_end_datetime !== 'undefined') {
                    const publicationEndDatetime = value.announcement_info.publication_end_datetime.replace(/-/g, '/');
                    const termEnd = new Date(publicationEndDatetime);
                    return today <= termEnd ? true : false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        sortData (data) {
            const prefList = ["北海道",
                "青森県","岩手県","宮城県","秋田県","山形県","福島県",
                "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
                "新潟県","富山県","石川県","福井県","山梨県","長野県",
                "岐阜県","静岡県","愛知県","三重県",
                "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
                "鳥取県","島根県","岡山県","広島県","山口県",
                "徳島県","香川県","愛媛県","高知県",
                "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"
            ];
            return data.sort(function(a, b) {
                return parseInt((prefList.indexOf(a.location.prefecture) + '' + a.location.zip_code.replace(/-|‐/g, '')), 10) - parseInt((prefList.indexOf(b.location.prefecture) + '' + b.location.zip_code.replace(/-|‐/g, '')), 10);
            });
        }
    }
}
</script>
