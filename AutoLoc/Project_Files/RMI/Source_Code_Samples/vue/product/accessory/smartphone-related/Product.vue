<template>
  <li class="c-Card_Normal">
    <div class="accessory-top-Card_Label">
        <span v-if="isNew"><div class="accessory-top-Card_Label-new-sale">NEW</div></span>
    </div>
    <figure>
      <a :href="`${path.sitepath}product/accessory/${summary.url}/?l-id=product_accessory_${summary.url}`">
        <img :src="`${path.sitepath}assets/img/accessory/${summary.url}/pht-accessory-00.png?${summary.update.split('/').join('')}`"
              :alt="summary.product">
      </a>
    </figure>
    <ul v-if="summary.colorcode" class="accessory-top-Card_Color">
        <li v-for="(color, index) in getColorcodeArray(summary.colorcode)"
            :key="index">
            <span :style="getColorChipStyle(color)"
                    :class="getColorChipClass(color)"></span>
        </li>
    </ul>
    <p v-if="isRselect"><img :src="`${path.sitepath}assets/img/common/logo-rselect.png?220408`" width="89" alt="R SELECT"></p>
    <h3 class="c-Heading_Lv3 accessory-top-Card_Name">{{ summary.product }}</h3>
    <div class="accessory-top-Card_Price">
      <p>
        <span v-if="summary.price_old"><span class="c-Txt_Alphanumeric-m accessory-top-Card_Price-borderdouble">{{ summary.price_old | addComma }}</span>円<span v-if="isShowPriceComma(detailDir)" class="c-Txt_Cap"> ※{{ findIndex }}</span>→</span>
        <span class="c-Txt_Alphanumeric-m">{{ summary.price | addComma }}</span>円
      </p>
      <!-- <p v-if="summary.product === 'Rakuten BIG スタンド機能付き手帳型ケース'">
        <span>ブラック/クリムゾンレッド </span><span class="c-Txt_Alphanumeric-m">{{ summary.price | addComma }}</span>円<br>
        <span>ホワイト </span><span class="c-Txt_Alphanumeric-m">2,610</span>円
      </p>
      <p v-else-if="summary.product !== 'Rakuten Mini ガラスフィルム 高光沢'">
        <span v-if="summary.price_old"><span class="c-Txt_Alphanumeric-m accessory-top-Card_Price-borderdouble">{{ summary.price_old | addComma }}</span>円<span v-if="isShowPriceComma(summary.url)" class="c-Txt_Cap"> ※1</span>→</span><span class="c-Txt_Alphanumeric-m">{{ summary.price | addComma }}</span>円
      </p>
      <p v-else-if="summary.product === 'Rakuten Mini ガラスフィルム 高光沢'">
        <span>ブラック </span><span class="c-Txt_Alphanumeric-m">880</span>円<br>
        <span>ホワイト </span><span class="c-Txt_Alphanumeric-m">440</span>円
      </p> -->
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
        onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/',
      },
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
        return color.toUpperCase() === '#FFFFFF' ? 'color-white': '';
    },
  },
  mounted() {
    // console.log(this.type);
    // if(this.annotation[this.type][0].length > 0){
    //   console.log(this.annotation[this.type][0]);
    //   console.log(this.annotation[this.type][1].length);
    // }
    // console.log(this.summary.update);
  }
}
</script>
