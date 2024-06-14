<template>
    <div class="area-city-Nav">
        <PrefFilter :initialsOrders="initialsOrders" @changePref="changePref" />
        <ul class="area-city-Nav_List u-Adjust_Mt-24">
            <li v-for="(city, index) in citys" :key="index">
                <a :href="city['URL']" class="c-Link_Txt-inline">
                    {{ city["都市名"]}}<span class="c-Icon_Chevron-right"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import PrefFilter from './PrefFilter.vue'

export default {
    name : 'SearchList',
    components: {
        PrefFilter,
    },
    data () {
        return{
            orders: [],
            initialsOrders: [],
            cityList:[]
        }
    },
    created () {
        this.getData()
            .then(data => {
                this.orders = data
                this.initialsOrders = this.initialsyOrder(data)
            });
    },
    computed: {
        citys() {
            return this.cityList
        }
    },
    methods: {
        getData: async function () {
            const cityMaster = '/assets/json/area-city-nav.json';
            const rawData = await $.getJSON(cityMaster);
            return rawData
        },
        initialsyOrder () {
            return [
                {name:'北海道',value:'0'},
                {name:'青森県',value:'1'},
                {name:'岩手県',value:'2'},
                {name:'宮城県',value:'3'},
                {name:'秋田県',value:'4'},
                {name:'山形県',value:'5'},
                {name:'福島県',value:'6'},
                {name:'茨城県',value:'7'},
                {name:'栃木県',value:'8'},
                {name:'群馬県',value:'9'},
                {name:'埼玉県',value:'10'},
                {name:'千葉県',value:'11'},
                {name:'東京都',value:'12'},
                {name:'神奈川県',value:'13'},
                {name:'新潟県',value:'14'},
                {name:'富山県',value:'15'},
                {name:'石川県',value:'16'},
                {name:'福井県',value:'17'},
                {name:'山梨県',value:'18'},
                {name:'長野県',value:'19'},
                {name:'岐阜県',value:'20'},
                {name:'静岡県',value:'21'},
                {name:'愛知県',value:'22'},
                {name:'三重県',value:'23'},
                {name:'滋賀県',value:'24'},
                {name:'京都府',value:'25'},
                {name:'大阪府',value:'26'},
                {name:'兵庫県',value:'27'},
                {name:'奈良県',value:'28'},
                {name:'和歌山県',value:'29'},
                {name:'鳥取県',value:'30'},
                {name:'島根県',value:'31'},
                {name:'岡山県',value:'32'},
                {name:'広島県',value:'33'},
                {name:'山口県',value:'34'},
                {name:'徳島県',value:'35'},
                {name:'香川県',value:'36'},
                {name:'愛媛県',value:'37'},
                {name:'高知県',value:'38'},
                {name:'福岡県',value:'39'},
                {name:'佐賀県',value:'40'},
                {name:'長崎県',value:'41'},
                {name:'熊本県',value:'42'},
                {name:'大分県',value:'43'},
                {name:'宮崎県',value:'44'},
                {name:'鹿児島県',value:'45'},
                {name:'沖縄県',value:'46'},
            ];
        },
        changePref(pref) {
            if(!pref) {
                this.cityList = []
                return
            }
            this.cityList = this.orders.filter((order) => order["都道府県"] === pref)
        },
    }

}
</script>
