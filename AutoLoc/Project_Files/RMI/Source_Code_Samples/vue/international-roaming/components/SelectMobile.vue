<template>
    <div class="u-Adjust_Mt-32">
        <h2 class="c-Heading_Lv2">製品メーカーを選択する</h2>
        <div class="roaming-Form_Select c-Form_Select u-Adjust_Mt-24">
            <select @change="selectMaker">
                <option value="" selected>メーカーを選択</option>
                <option v-for="(mobiles, maker, i) in mobileData" :key="i" :value="maker">{{ maker }}</option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>
        <h2 class="c-Heading_Lv2 u-Adjust_Mt-32">製品を選択する</h2>
        <div class="roaming-Form_Select c-Form_Select u-Adjust_Mt-24">
            <select @change="selectMobile" v-model="selectedMobile">
                <option value="" selected>製品を選択</option>
                <option v-for="(mobile, i) in mobilesForMaker" :key="i" :value="mobile.value">{{ mobile.name }}</option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>
        <p v-if="isSelectedRakuten" class="u-Adjust_Mt-16">お客様のIMEI情報は、端末の「設定」→「端末情報」→「IMEI」からご確認いただけます。</p>
    </div>
</template>

<script>
export default {
    name: 'SelectMobile',
    props: {
        mobileData: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    data () {
        return {
            selectedMaker: null,
            selectedMobile: '',
            mobilesForMaker: this.getAllMobiles(this.mobileData),
            isSelectedRakuten: false,
        }
    },
    methods: {
        getAllMobiles: function (data) {
            if (!data) return;

            let arr = [];

            Object.keys(data).forEach((key, i) => {
                const mapped = data[key].map(val => {
                    return {
                        name: val,
                        value: `${key}/${val}`
                    };
                });

                arr = arr.concat(mapped);
            });

            return arr;
        },
        getMobilesForMaker: function (maker) {
            const mapped = this.mobileData[maker].map(val => {
                return {
                    name: val,
                    value: `${maker}/${val}`
                };
            });

            return mapped;
        },
        selectMaker: function (e) {
            this.mobilesForMaker = e.target.value ? this.getMobilesForMaker(e.target.value) : this.getAllMobiles(this.mobileData);
            this.selectedMobile = '';
            this.$emit('selectMaker');

            if (e.target.value === 'Rakuten') {
                this.isSelectedRakuten = true;
            }
            else {
                this.isSelectedRakuten = false;
            }
        },
        selectMobile: function (e) {
            this.$emit('selectMobile', e.target.value);

            if (e.target.value.indexOf('Rakuten') === 0) {
                this.isSelectedRakuten = true;
            }
            else {
                this.isSelectedRakuten = false;
            }
        }
    }
}
</script>
