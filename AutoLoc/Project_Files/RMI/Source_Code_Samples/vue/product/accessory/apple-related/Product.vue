<template>
  <li class="c-Card_Normal">
    <div class="accessory-apple-top-Card_Label">
        <span v-if="isNew"><div class="accessory-apple-top-Card_Label-new-sale">NEW</div></span>
    </div>
    <figure>
      <a :href="`${path.sitepath}product/accessory/${detailDir}/?l-id=product_accessory_${detailDir}`">
        <img :src="`${path.sitepath}assets/img/accessory/${detailDir}/pht-accessory-00.png?210929`"
              :alt="summary.product">
      </a>
    </figure>
    <ul v-if="summary.colorcode" class="accessory-apple-top-Card_Color">
        <li v-for="(color, index) in getColorcodeArray(summary.colorcode)"
            :key="index">
            <span :style="getColorChipStyle(color)"
                    :class="getColorChipClass(color)"></span>
        </li>
    </ul>
    <h3 class="c-Heading_Lv3 accessory-apple-top-Card_Name">{{ summary.product }}</h3>
    <div class="accessory-apple-top-Card_Price">
      <p>
        <span v-if="summary.price_old"><span class="c-Txt_Alphanumeric-m accessory-apple-top-Card_Price-borderdouble">{{ summary.price_old | addComma }}</span>円<span v-if="isShowPriceComma(detailDir)" class="c-Txt_Cap"> ※{{ findIndex }}</span>→</span>
        <span class="c-Txt_Alphanumeric-m">{{ summary.price | addComma }}</span>円
      </p>
    </div>
  </li>
</template>


<script>
export default {
  name: 'Product',
  props: ['summary', 'annotation', 'type'],
  data () {
    return {
      path: {
        sitepath: '/',
        rootpath: '/',
        onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/'
      }
    }
  },
  computed: {
    isNew () {
        let today = new Date();
        let term = new Date(this.summary.release);
        term.setMonth(term.getMonth() + 2);
        return today <= term ? true: false;
    },
    isRselect() {
        return this.summary.rselect.toUpperCase() === 'TRUE' ? true: false;
    },
    detailDir() {
        let url = this.summary.url.split('/').filter(elem => elem !== '');
        return url[url.length - 1];
    },
    isShowPriceComma() {
      return (productId) => {
        const items = this.annotation[this.type][0];
        return items.includes(productId);
      }
    },
    findIndex() {
      return this.annotation[this.type][0].indexOf(this.summary.url)+1;
    }
  },
  methods: {
    getColorcodeArray (colorcode) {
        return colorcode.split('/');
    },
    getColorChipStyle (color) {
        return `background: ${ color };`;
    },
    getColorChipClass (color) {
        const colorWhite = ['#FFFFFF', '#F0EBE2', '#FAFAFF'];
        return colorWhite.indexOf(color.toUpperCase()) !== -1 ? 'color-white': '';
    }
  },
  mounted() {
    console.log(this.summary.update)
  }
}
</script>
