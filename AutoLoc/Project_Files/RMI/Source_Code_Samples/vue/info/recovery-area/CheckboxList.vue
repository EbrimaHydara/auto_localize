<template>
    <div :class="`${namespace}_Show-iconbox`">
        <p v-if="!isSp || isShow" :class="`${namespace}_Show-iconbox-sub`">表示アイコン</p>
        <div :class="`${namespace}_Show-icon`">
            <Checkbox
                :namespace="namespace"
                :id="'toggle-charge'"
                :iconPath="'/assets/img/info/recovery-area/icon-charge.png'"
                :serviceType="'充電サービス'"
                :recoveryAreaCsvData="recoveryAreaCsvData"
                :isChecked="true"
            ></Checkbox>
            <Checkbox
                :namespace="namespace"
                :id="'toggle-base'"
                :iconPath="'/assets/img/info/recovery-area/icon-base.png'"
                :serviceType="'移動基地局'"
                :recoveryAreaCsvData="recoveryAreaCsvData"
                :isChecked="true"
            ></Checkbox>
            <Checkbox
                :namespace="namespace"
                :id="'toggle-wifi'"
                :iconPath="'/assets/img/info/recovery-area/icon-wifi.png'"
                :serviceType="'Wi-Fiスポット'"
                :recoveryAreaCsvData="recoveryAreaCsvData"
                :isChecked="true"
            ></Checkbox>
        </div>
    </div>
</template>

<script>
import Checkbox from './Checkbox.vue';
export default {
    props: [
        'namespace',
        'isShow',
        'isSp',
        'recoveryAreaCsvData',
    ],
    components: {
        Checkbox,
    }
}
</script>
