<template>
    <div>
        <ShopList :shops="shops" :pref="pref" :city="city" :directory1="directory1" :directory2="directory2"></ShopList>
    </div>
</template>


<script>
import ShopList from './ShopList.vue';

export default {
    name: 'ShopResult',
    components: {
        ShopList
    },
    props: ['pref', 'city', 'directory1', 'directory2'],
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
            const shopMasterEP = 'https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops';
            // const shopMasterEP = '/assets/json/shop_dummy.json';
            // const shopMasterEP = '/assets/json/shop_dummy2.json';
            // const shopMasterEP = '/assets/json/shop_dummy20230227.json';
            const rawData = await $.getJSON(shopMasterEP);
            const data = rawData.filter(elem => this.filterPublication(elem));
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
