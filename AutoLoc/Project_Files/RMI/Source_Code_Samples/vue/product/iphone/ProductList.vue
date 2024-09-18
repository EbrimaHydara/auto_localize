<template>
  <ul class="iphone-top-Card">
    <ListItem
      v-for="(device, i) in productData"
      :key="i"
      :summary="device"
    />
  </ul>
</template>

<script>
import axios from 'axios'
import ListItem from './components/ListItem.vue'
import { device_iphone } from '../../../js/csv-data/device-iphone'

export default {
  components: { ListItem },
  data() {
    return {
      productData: [],
    }
  },
  created() {
    this.productData = device_iphone
  }
}
</script>
