<template>
    <div>
        <div class="c-Form_Select">
            <select v-model="pref" @change="displayPrefs">
                <option value>都道府県を選択</option>
                <option v-for="(order, index) in initialOrders"
                            :key="index"
                            :value="order.name">{{ order.name }}</option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrefFilter',
    props: ['initialsOrders'],
    data () {
        return {
            pref:''
        }
    },
    computed: {
        initialOrders () {
            let prefs = this.initialsOrders
            return prefs;
        },
    },
    methods: {
        displayPrefs() {
            this.$emit('changePref', this.pref)
        },
    }

}
</script>
