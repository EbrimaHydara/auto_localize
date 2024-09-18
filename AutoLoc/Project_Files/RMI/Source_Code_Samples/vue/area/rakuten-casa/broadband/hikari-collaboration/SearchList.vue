<template>
    <div>
        <SyllabaryFilter :initialsOrders="initialsOrders" @changeSyllabary="changeSyllabary" />
        <ul class="c-List_Text-disc hikari-collaboration-Utility_Mb-107">
            <li v-for="(company, index) in companys" :key="index">
                {{ company["事業者名"]}}
            </li>
        </ul>
    </div>
</template>

<script>
import SyllabaryFilter from './SyllabaryFilter.vue'

export default {
    name : 'HikariResult',
    components: {
        SyllabaryFilter,
    },
    data () {
        return{
            orders: [],
            initialsOrders: [],
            companyList:[]
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
        companys() {
            return this.companyList
        }
    },
    methods: {
        getData: async function () {
            const hikariMasterEP = '/assets/json/area-hikaricollabration.json';
            const rawData = await $.getJSON(hikariMasterEP);
            return rawData
        },
        initialsyOrder () {
            return [
                {name:'ア行',value:'a'},
                {name:'カ行',value:'ka'},
                {name:'サ行',value:'sa'},
                {name:'タ行',value:'ta'},
                {name:'ナ行',value:'na'},
                {name:'ハ行',value:'ha'},
                {name:'マ行',value:'ma'},
                {name:'ヤ行',value:'ya'},
                {name:'ラ行',value:'ra'},
                {name:'ワ行',value:'wa'},
            ];
        },
        changeSyllabary(syllabary) {
            if(!syllabary) {
                this.companyList = []
                return
            }
            this.companyList = this.orders.filter((order) => order["索引"] === syllabary)
        },
    }



}
</script>
