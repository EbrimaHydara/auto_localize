<template>
    <li class="area-city-Shop_List-item">
        <div>
            <p v-if="getLabelOpen(summary.start_date)"><span class="c-Txt_Emp-02">{{ getLabelOpen(summary.start_date) }}</span></p>
            <p class="c-Txt_Emp-02 u-Adjust_Mt-8">
                <a v-if="directory2" class="c-Link_Txt" :href="`${path.sitepath}shop-detail/${summary.code}/?l-id=area_city_${directory1}_${directory2}_shop-detail_${summary.code}`">{{ summary.name }}</a>
                <a v-else class="c-Link_Txt" :href="`${path.sitepath}shop-detail/${summary.code}/?l-id=area_prefecture_${directory1}_shop-detail_${summary.code}`">{{ summary.name }}</a>
            </p>
        </div>
        <div>
            <div v-if="summary.reservation_info.link_url">
                <a v-if="directory2"
                    :href="`${summary.reservation_info.link_url}&scid=area_city_${directory1}_${directory2}_web-reserve_${summary.code}`"
                    :data-ratid="`area_city_${directory1}_${directory2}_web-reserve_${summary.code}`"
                    data-ratevent="click"
                    data-ratparam="all"
                    class="c-Btn_Secondly area-city-Shop_List-item-btn"><span>Webで予約する</span></a>
                <a v-else
                :href="`${summary.reservation_info.link_url}&scid=area_prefecture_${directory1}_web-reserve_${summary.code}`"
                    :data-ratid="`area_prefecture_${directory1}_web-reserve_${summary.code}`"
                    data-ratevent="click"
                    data-ratparam="all"
                    class="c-Btn_Secondly area-city-Shop_List-item-btn"><span>Webで予約する</span></a>
            </div>
        </div>
    </li>
</template>


<script>
export default {
  name: 'Shop',
  props: ['summary', 'directory1', 'directory2'],
  data () {
    return {
        path: {
            sitepath: '/'
        }
    }
  },
  methods: {
    getLabelOpen (value) {
        let startDate = new Date(value);
        let today = new Date();
        let term = new Date(value);
        term.setDate(term.getDate() + 14);

        if (startDate > today) {
            return `${this.formatDate(value)}オープン予定`;
        } else if (today <= term) {
            return `${this.formatDate(value)}オープン`;
        } else {
            return false;
        }
    },
    formatDate (value) {
        const date = new Date(value);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
  }
}
</script>
