<template>
    <div>
        <div class="hikari-collaboration-search_Selectors">
            <div class="c-Form_Select">
                <select v-model="initialsOrder" @change="changeInitialsOrder">
                    <option v-for="(order, index) in initialOrders"
                            :key="index"
                            :value="order.value"
                            :label="order.name" />
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
            <div class="c-Form_Select">
                <select v-model="syllabary" @change="displayCompanys">
                    <option v-for="(syllabary, index) in syllabarys"
                            :key="index"
                            :value="syllabary">{{ syllabary ? syllabary:'事業者様名の頭文字を選択'}}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SyllabaryFilter',
    props: ['initialsOrders'],
    data () {
        return {
            syllabaryGroup:{
                a:["ア","イ","ウ","エ","オ"],
                ka:["カ","キ","ク","ケ","コ"],
                sa:["サ","シ","ス","セ","ソ"],
                ta:["タ","チ","ツ","テ","ト"],
                na:["ナ","ニ","ネ","ノ"],
                ha:["ハ","ヒ","フ","ヘ","ホ"],
                ma:["マ","ミ","ム","メ","モ"],
                ya:["ヤ","ユ","ヨ"],
                ra:["ラ","リ","ル","レ","ロ"],
                wa:["ワ"],
            },
            initialsOrder:'',
            syllabary:''
        }
    },
    computed: {
        initialOrders () {
            let prefs = this.initialsOrders
            prefs.unshift({
                name:'五十音順を選択',
                value:''
            })
            return prefs;
        },
        syllabarys() {
            let prefs = this.syllabaryGroup[this.initialsOrder]
            if(!prefs) {
                prefs = ['']
                return prefs
            }
            if(prefs[0]==='')return prefs
            prefs.unshift('');
            return prefs
        }
    },
    methods: {
        changeInitialsOrder(){
            this.syllabary =''
            this.$emit('changeSyllabary', this.syllabary)
        },
        displayCompanys() {
            this.$emit('changeSyllabary', this.syllabary)
        },
    }

}
</script>
