<template>
    <label :class="`c-Form_Checkbox ${namespace}_Show-icon-wrapper`">
        <input type="checkbox" name="trigger" :id="id" value="" v-model="checked">
        <span class="c-Icon_Check"></span>
        <span :class="`${namespace}_Show-icon-img`">
            <img :src="iconPath" width="32" height="32" alt="">
        </span>
        <span :class="`${namespace}_Show-icon-content`">
            <span :class="`${namespace}_Show-icon-sub`">{{ serviceType }}</span>
            <span class="c-Txt_Cap">{{ recoveryAreaCsvData[0].chargeDate }}</span>
        </span>
    </label>
</template>

<script>
export default {
    props: [
        'namespace',
        'id',
        'iconPath',
        'serviceType',
        'recoveryAreaCsvData',
        'isChecked',
    ],
    data() {
        return {
            checked: this.isChecked ?? false,
        }
    },
}
</script>
