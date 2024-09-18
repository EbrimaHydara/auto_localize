<template>
    <li>
        <a :href="`${path.sitepath}shop-detail/${summary.TMCode}`" class="c-Link_Txt-inline">{{ summary.店舗名 }}<span class="c-Icon_Chevron-right"></span></a>
    </li>
</template>


<script>
export default {
  name: 'Shop',
  props: ['summary'],
  data () {
    return {
        path: {
            sitepath: '/'
        }
    }
  },
}
</script>
