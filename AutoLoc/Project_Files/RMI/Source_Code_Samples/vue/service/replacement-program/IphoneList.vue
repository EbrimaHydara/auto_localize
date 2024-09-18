<template>
    <ul class="service-replacement-program-Card">
        <Product
            v-for="(device, i) in iphoneData"
            :key="i"
            :summary="device"
        />
    </ul>
</template>

<script>
import Product from './iphone/Product.vue'
import { device_iphone } from '../../../js/csv-data/device-iphone'

export default {
    name: 'IphoneList',
    components: { Product },
    data() {
        return {
            iphoneData: [],
        }
    },
    created() {
        this.iphoneData = device_iphone;
    }
}
</script>
