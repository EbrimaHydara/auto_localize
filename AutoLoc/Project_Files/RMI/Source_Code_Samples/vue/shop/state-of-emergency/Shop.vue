<template>
    <div class="u-Adjust_Mb-40">
        <p class="c-Txt_Emp-02 u-Adjust_Mt-32 u-Adjust_Mb-8">
            <a :href="`${path.sitepath}shop-detail/${summary.ショップID}`">{{ summary.ショップ名 }}</a>
        </p>
        <dl class="c-List_Dl-origin u-Adjust_Mt-16">
            <div>
                <dt>営業変更期間</dt>
                <dd>{{ summary.営業変更期間 }}</dd>
            </div>
            <div>
                <dt>営業</dt>
                <dd v-html="summary.営業"></dd>
            </div>
        </dl>
    </div>
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
