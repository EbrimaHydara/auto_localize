<template>
  <div class="top-Carousel_Product-inner-box">
  <a :href="linkPath" class="c-Card_Normal top-Carousel_Item top-Carousel_Item-iphone">
    <div class="top-Carousel_Flex-column">
    <div class="top-Carousel_Flex">
      <div class="top-Carousel_Img-iphone">
        <img
          :src="imgPath"
          :alt="imgAlt"
          loading="lazy"
        >
      </div>
      <div class="top-Carousel_Txt-iphone">
        <p v-if="is5g" class="top-Carousel_5G">
          <img src="/assets/img/common/icon-5g.png" alt="5G">
        </p>
        <div v-if="isPreOrder" class="top-Carousel_Label-preorder">予約注文受付中</div>
        <div class="top-Carousel_Txt-iphone-name">
            <div v-if="isNew" class="top-Carousel_Label-new-iphone"><span>NEW</span></div>
            <div v-if="isDiscount" class="top-Carousel_Label-discount"><span>{{ nonetext(summary) }}</span></div>
            <p class="c-Txt_Emp-02" v-if="isCpnSubject || isSubCpnSubject">キャンペーン特価<span style="font-size: 12px">*6</span></p>
            <p class="top-Carousel_Name-m" v-html="displayDeviceName"></p>
        </div>

        <div v-if="isPayment" class="top-Carousel_Iphone-price top-Utility_Show-pc">
          <dl class="top-Carousel_Iphone-price-detail-48">
            <dt class="c-Txt_Emp-01">48回払い<span v-if="isPayment48Txt">（{{ summary['payment48-text'] }}） {{displayPayment48Note}}</span></dt>
            <dd class="c-Txt_Emp-01">月々<br><span class="top-Carousel_Iphone-price-font top-Carousel_Iphone-price-detail-48-monthly">{{displayPayment48}}</span>円～</dd>
          </dl>
          <dl class="top-Carousel_Iphone-price-detail-1">
            <dt class="c-Txt_Emp-01">一括払い</dt>
            <dd v-if="isDiscount">
              <span>
                <del>{{displayDiscount}}円</del>
                <span v-if="isDiscountNote">{{ summary['double-price-txt'] }}</span>
              </span>
              →{{displayPaymentAll}}円～
            </dd>
            <dd v-else>{{displayPaymentAll}}円～</dd>
          </dl>
        </div>
        <template v-if="isFreeCpn">
            <div class="top-Carousel_Iphone-price-point" v-html="displayFreeCpn"></div>
        </template>
        <template v-else>
            <div v-if="isPointBackPointIphone" class="top-Carousel_Iphone-price-point top-Utility_Show-pc">
            <p>
                {{ summary['top-carousel-iphone-pre-text'] }}{{ summary['top-carousel-iphone-pre-text2'] }}<br>{{ summary['top-carousel-pointback-txt2'] }}<span>{{ displayPointBackPointIphone }}</span><span>{{ summary['top-carousel-pointback-txt3'] }}</span><span>{{ summary['top-carousel-note2'] }}</span>
            </p>
            </div>
        </template>
      </div>
    </div>
    <div v-if="isPayment" class="top-Carousel_Iphone-price top-Utility_Show-sp">
      <dl class="top-Carousel_Iphone-price-detail-48">
        <dt class="c-Txt_Emp-01">48回払い<span v-if="isPayment48Txt">（{{ summary['payment48-text'] }}） {{displayPayment48Note}}</span></dt>
        <dd class="c-Txt_Emp-01">月々<br><span class="top-Carousel_Iphone-price-font top-Carousel_Iphone-price-detail-48-monthly">{{displayPayment48}}</span>円～</dd>
      </dl>
      <dl class="top-Carousel_Iphone-price-detail-1">
        <dt class="c-Txt_Emp-01">一括払い</dt>
        <dd v-if="isDiscount">
          <span>
            <del>
              {{displayDiscount}}円
              <span v-if="isDiscountNote">{{ summary['double-price-txt'] }}</span>
            </del>
            </span>
          →{{displayPaymentAll}}円～
        </dd>
        <dd v-else>{{displayPaymentAll}}円～</dd>
      </dl>
    </div>
    <div v-if="isPointBackPointIphone" class="top-Carousel_Iphone-price-point top-Utility_Show-sp">
    <p>
        {{ summary['top-carousel-iphone-pre-text'] }}{{ summary['top-carousel-iphone-pre-text2'] }}<br>{{ summary['top-carousel-pointback-txt2'] }}<span>{{ displayPointBackPointIphone }}</span><span>{{ summary['top-carousel-pointback-txt3'] }}</span><span>{{ summary['top-carousel-note2'] }}</span>
    </p>
    </div>

    <div v-if="isPayment">
      <p v-if="isCpnSubject" class="c-Txt_Cap upgrade-program-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      <p v-else-if="isSubCpnSubject" class="c-Txt_Cap upgrade-program-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。 *楽天モバイルでの「iPhone対象機種特価キャンペーン」適用時の販売価格（販売期間：2022年7月22日～2022年10月25日）</p>
      <p v-else-if="isPriceVersion14" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      <p v-else-if="isPriceVersion14Plus" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      <p v-else-if="isPriceVersion14Pro" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      <p v-else-if="isDiscount" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      <p v-else class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
    </div>
  </div>
  </a>
</div>
</template>

<script>

export default {
  name: 'ListItem',
  props: [ 'summary' ],
  data() {
    return {
      isNew: false,
      isPreOrder: false,
      path: {
        sitepath: '/',
      },
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
        if( color.toUpperCase() ===  '#FFFFFF' ||
            color.toUpperCase() ===  '#F3F3F3' ||
            color.toUpperCase() ===  '#F5F5F7' ||
            color.toUpperCase() ===  '#E3E4DF' ||
            color.toUpperCase() ===  '#F1F2ED' ||
            color.toUpperCase() ===  '#FAF6F2') {
            return 'color-white';
        } else {
            return '';
        }
    },
    getCapacityArray (capacities) {
        return capacities.split('/');
    },
    getCapacityStyle (capacity) {
      const capacityNum = parseInt(capacity)
      if(capacityNum >= 1024) {
        const capacityTB = parseInt(capacityNum / 1024)
        return `${ capacityTB }TB`
      } else {
        return `${ capacity }GB`;
      }
    },
    brInlistTransform(text) {
      if (/\n/.test(text)) {
        const textList = text
          .trim()
          .split('\n')
          .map(textItem => this.noteInlistTransform(textItem));

        return textList.join('<br>')
      } else {
        return this.noteInlistTransform(text.trim())
      }
    },
    noteInlistTransform(text) {
      const trimText = text.trim();

      if (/^※/.test(trimText)) {
        return `<span class="c-Txt_Cap u-Adjust_Ml-0" style="display: block";>${trimText}</span>`
      } else {
        return trimText.replace('※', '<small>※</small>')
      }
    },
    nonetext(sammary) {
        const cpnSubject = ['iphone-13', 'iphone-13-mini','iphone-12']
        if (cpnSubject.some((v) => v === sammary.directory)) {
            return ''
        }
        return sammary.discount_text
    }
  },
  computed: {
    displayDeviceName() {
      const iphoneDeviceName = this.summary.product;
      let isGenerationTxt = iphoneDeviceName.search('（');
      if(isGenerationTxt === -1) {
        return iphoneDeviceName
      } else {
        const iphoneDeviceNameArray = iphoneDeviceName.split(/\s/);
        let secondGeneration = '';
        const arrayLast = iphoneDeviceNameArray.length -1;
        for (let index = 0; index < arrayLast +1 ; index++) {
          if(index == arrayLast) {
            secondGeneration = secondGeneration + '<span class="top-Carousel_Iphone-heading-se">'+iphoneDeviceNameArray[index]+'</span>';
            break;
          }
          secondGeneration = secondGeneration + iphoneDeviceNameArray[index] + ' ';
        }
        return secondGeneration;
      }
    },
    imgPath() {
      const iphoneImgName = this.summary.directory.replace( /iphone/g, 'iPhone').replace(/pro/g, 'Pro').replace(/max/g, 'Max').replace(/plus/g, 'Plus').split('-').join('_').trim();
      const param = this.summary.update && this.summary.update.trim() !== '' ? `?${this.summary.update.trim()}` : '';

      return iphoneImgName ? `${this.path.sitepath}assets/img/top/product/${iphoneImgName}.png${param}` : ''
    },
    imgAlt() {
      let iphoneAltTxt = this.summary.alt && this.summary.alt.trim() !== '' ? this.summary.alt : '';
      return iphoneAltTxt
    },
    linkPath() {
      return this.summary.directory? `${this.path.sitepath}product/iphone/${this.summary.directory.trim()}/?l-id=top_p-carousel_product_iphone_${this.summary.directory.trim()}`
        : ''
    },
    is5g() {
      return this.summary['flag-5g'] && this.summary['flag-5g'].trim() !== ''
    },
    isPayment48Txt() {
      return this.summary['payment48-text'] && this.summary['payment48-text'].trim() !== ''
    },
    displayPayment48Note() {
      return this.summary['top-carousel-note1'].trim()
    },
    displayPayment48() {
      return (+this.summary.payment48).toLocaleString()
    },
    displayPaymentAll() {
      return (+this.summary.payment1).toLocaleString()
    },
    displayDiscount() {
      return (+this.summary.discount).toLocaleString()
    },
    isPointBackPointIphone() {
      return (+this.summary['top-carousel-pointback-num']) && this.summary['top-carousel-pointback-num'].trim() !== ''
    },
    isPayment() {
      return this.summary['payment48']!== '' && this.summary['payment1'] !== ''
    },
    displayPointBackPointIphone() {
      return (+this.summary['top-carousel-pointback-num']).toLocaleString()
    },
    isDiscount() {
      return this.summary['discount_text']!== '' && this.summary['discount'] !== ''
    },
    isDiscountNote() {
      return this.summary['double-price-txt'] && this.summary['double-price-txt'].trim()
    },
    isFreeCpn() {
        return this.summary['free_cpn']!== ''
    },
    displayFreeCpn() {
        return this.summary['free_cpn'].trim()
    },
    isCpnSubject() {
        const cpnSubject = ['iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone SE（第3世代）', 'iPhone 13', 'iPhone 13 mini','iPhone 12', 'iPhone 12 mini']
        for( let i = 0; i < cpnSubject.length; i++ ) {
            if( this.summary.product == cpnSubject[i] ) {
                return true;
            }
        }
    },
    isSubCpnSubject () {
        const cpnSubject = []
        for( let i = 0; i < cpnSubject.length; i++ ) {
            if( this.summary.product == cpnSubject[i] ) {
                return true;
            }
        }
    },
    isPriceVersion14() {
        console.log(this.summary);
        if( this.summary.product == 'iPhone 14' ) {
            return true;
        }
    },
    isPriceVersion14Plus() {
        console.log(this.summary.product);
        if( this.summary.product == 'iPhone 14 Plus' ) {
            return true;
        }
    },
    isPriceVersion14Pro() { // Pro, Pro Max
        console.log(this.summary.product);
        if( this.summary.product.includes('iPhone 14 Pro') ) {
            return true;
        }
    },
  },
  created() {
    // NEWマーク
    if (this.summary.new.trim() === '1') {
      this.isNew = true
    }
    // iphone13発売予約
    if (this.summary.new.trim() === '2') {
      this.isPreOrder = true
    }
  }
}
</script>
