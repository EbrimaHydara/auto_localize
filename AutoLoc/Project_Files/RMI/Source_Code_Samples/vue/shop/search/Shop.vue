<template>
    <li class="shop-Shoplist_Shop">
        <div>
            <p v-if="getLabelOpen(summary.start_date)"><span class="c-Txt_Emp-02">{{ getLabelOpen(summary.start_date) }}</span></p>
            <p class="c-Txt_Emp-02 u-Adjust_Mt-8">
                <a class="c-Link_Txt" :href="`${path.sitepath}shop-detail/${summary.code}`">{{ summary.name }}</a>
            </p>
            <p class="c-Txt_Normal-s u-Adjust_Mt-8">{{ summary.location.prefecture }}{{ summary.location.city }}{{ summary.location.address }} {{ summary.location.building_name }}</p>
        </div>
        <div>
            <a v-if="summary.reservation_info.link_url"
                :href="summary.reservation_info.link_url"
                class="c-Btn_Secondly shop-Shoplist_Shop-btn"><span>Webで予約する</span></a>
        </div>
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
