<template>
    <div class="u-Adjust_Mb-40">
        <p class="c-Txt_Emp-02 u-Adjust_Mt-32 u-Adjust_Mb-8"><a :href="`${path.sitepath}shop-detail/${summary.code}`">{{ summary.name }}</a></p>
        <dl class="c-List_Dl-origin">
            <div>
                <dt>住所</dt>
                <dd>{{ summary.location.prefecture }}{{ summary.location.city }}{{ summary.location.address }} {{ summary.location.building_name }}</dd>
            </div>
            <div>
                <dt>営業時間</dt>
                <dd v-if="summary.holiday_timings.open_time">
                    平日　{{ summary.regular_timings.open_time }}~{{ summary.regular_timings.end_time }}<br>
                    土日祝　{{ summary.holiday_timings.open_time }}~{{ summary.holiday_timings.end_time }}
                </dd>
                <dd v-else>{{ summary.regular_timings.open_time }}~{{ summary.regular_timings.end_time }}</dd>
            </div>
            <div v-if="summary.shopReservationText">
                <dt>取り扱い開始日</dt>
                <dd>{{ summary.dealStartDate }}</dd>
            </div>
            <div v-else>
                <dt>取り扱い開始日・予約方法</dt>
                <dd v-html="getNotes"></dd>
            </div>
        </dl>
        <div v-if="summary.shopReservationText"
            class="u-Adjust_Align-center u-Adjust_Mt-24">
            <a :href="summary.shopReservationUrl"
                class="c-Btn_Primary-half">{{ summary.shopReservationText }}
            </a>
        </div>
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
  computed: {
      getNotes () {
          return this.summary.notes.replace(/\r?\n/g, '<br>');
      }
  },
  methods: {
  }
}
</script>
