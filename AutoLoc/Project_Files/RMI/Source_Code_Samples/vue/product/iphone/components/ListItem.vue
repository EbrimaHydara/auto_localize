<template>
  <li>
    <a :href="linkPath" class="c-Card_Normal">
      <div class="iphone-top-Card_Label">
        <div v-if="isPreOrder" class="iphone-top-Card_Label-new-sale">予約注文受付中</div>
        <div v-if="isNew" class="iphone-top-Card_Label-new-sale">NEW</div>
        <div v-if="isDiscount" class="iphone-top-Card_Label-discount"><span>{{ summary.discount_text }}</span></div>
      </div>

      <figure v-if="isIcon5g" data-flag="5g">
        <img
          :src="imgPath"
          :alt="imgAlt"
        >
      </figure>
      <figure v-else>
        <img
          :src="imgPath"
          :alt="imgAlt"
        >
      </figure>
      <ul class="iphone-top-Card_Color">
        <li v-for="(color, index) in getColorcodeArray(summary.colorcode)"
            :key="index">
            <span :style="getColorChipStyle(color)"
                    :class="getColorChipClass(color)"></span>
        </li>
      </ul>
      <h2 class="c-Heading_Lv3 iphone-top-Card_Name">{{ summary.product }}</h2>
      <ul class="c-Label_List iphone-top-Card_Tips">
        <li v-for="(capacity, index) in getCapacityArray(summary.capacity)"
            :key="index"
            class="c-Label_Normal"
        >{{getCapacityStyle (capacity)}}
        </li>
      </ul>
      <div class="iphone-top-Card_Price">
        <div v-if="isPayment" class="iphone-top-Card_Price-detail-1">
            <span v-if="isCpnSubject || isSubCpnSubject" class="c-Txt_Emp-02">キャンペーン特価※3</span>
            <span v-else>製品価格</span>
            <p v-if="isDiscount"><span><del>{{displayDiscount}}円</del><span class="c-Txt_Cap">{{summary['double-price-txt']}}</span>→</span><span class="iphone-top-Card_Price-detail-1-bulk">{{displayPaymentAll}}</span>円～</p>
            <p v-else><span class="iphone-top-Card_Price-detail-1-bulk">{{displayPaymentAll}}</span>円～</p>
        </div>

        <div v-if="isPayment" class="iphone-top-Card_Price-detail-48">
          <div class="iphone-top-Card-Theme-Light">
            <p class="c-Txt_Emp-01 u-Adjust_Align-center">48回払い<span v-if="isPayment48Txt">（{{ summary['payment48-text'] }}）利用<span class="c-Txt_Cap">{{displayPayment48Note}}</span></span></p>
            <dl>
              <dt>月々のお支払い</dt>
              <dd><span class="iphone-top-Card_Price-font iphone-top-Card_Price-detail-48-monthly">{{displayPayment48}}</span>円～</dd>
            </dl>
            <dl>
              <dt>25カ月目に返却した場合の支払い総額</dt>
              <dd class="c-Txt_Emp-02"><span class="iphone-top-Card_Price-font iphone-top-Card_Price-detail-48-upgrade">{{displayPaymentUpgrade}}</span>円～</dd>
            </dl>
          </div>
        </div>


        <template v-if="isFreeCpn">
            <div class="iphone-top-Card_Price-total" v-html="displayFreeCpn"></div>
        </template>
        <template v-else>
            <div v-if="isPointBackPointIphone" class="iphone-top-Card_Price-total">
            <p>
            {{ summary['top-carousel-iphone-pre-text'] }}
            {{ summary['top-carousel-iphone-pre-text2'] }}
            <br>{{ summary['top-carousel-pointback-txt2'] }}<span>{{ displayPointBackPointIphone }}</span>{{ summary['top-carousel-pointback-txt3'] }} {{ summary['iphone-top-card-Price-detail-note1'] }}
            </p>
            </div>
        </template>

      </div>
      <div v-if="isPayment">
        <p v-if="isCpnSubject" class="c-Txt_Cap iphone-top-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
        <p v-else-if="isSubCpnSubject" class="c-Txt_Cap iphone-top-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。 *楽天モバイルでの「iPhone対象機種特価キャンペーン」適用時の販売価格（販売期間：2022年7月22日～2022年10月25日）</p>
        <p v-else-if="isPriceVersion14" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
        <p v-else-if="isPriceVersion14Plus" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
        <p v-else-if="isPriceVersion14Pro" class="c-Txt_Cap upgrade-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
        <p v-else class="c-Txt_Cap iphone-top-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
      </div>
    </a>
  </li>
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
    }
  },
  computed: {
    imgPath() {
      const iphoneImgName = this.summary.directory.split('-').join('').trim();
      const param = this.summary.update && this.summary.update.trim() !== '' ? `?${this.summary.update.trim()}` : '';

      return iphoneImgName ? `${this.path.sitepath}assets/img/product/iphone/top/thumb-product-iphone-top-${iphoneImgName}.png${param}` : ''
    },
    imgAlt() {
      let iphoneAltTxt = this.summary.alt && this.summary.alt.trim() !== '' ? this.summary.alt : '';
      return iphoneAltTxt
    },
    linkPath() {
      return this.summary.directory? `${this.path.sitepath}product/iphone/${this.summary.directory.trim()}/?l-id=product_iphone_${this.summary.directory.trim()}`
        : ''
    },
    isPayment48Txt() {
      return this.summary['payment48-text'] && this.summary['payment48-text'].trim() !== ''
    },
    displayPayment48Note() {
      return this.summary['payment48-note'].trim()
    },
    displayPayment48() {
      return (+this.summary.payment48).toLocaleString()
    },
    displayPaymentUpgrade() {
      return (+this.summary.payment48 * 24).toLocaleString()
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
    isIcon5g() {
      return this.summary['flag-5g'] == 1
    },
    displayPointBackPointIphone() {
      return (+this.summary['top-carousel-pointback-num']).toLocaleString()
    },
    isDiscount() {
    //   return this.summary['discount_text']!== '' && this.summary['discount'] !== ''
      return this.summary['discount'] !== ''
    },
    displayPointBackIphonePreTxt2() {
      return (this.summary['pointback-iphone-pre-text2'])
    },
    isFreeCpn() {
        return this.summary['free_cpn']!== ''
    },
    displayFreeCpn() {
        return this.summary['free_cpn'].trim()
    },
    isCpnSubject() {
        const cpnSubject = ['iPhone 13 Pro Max', 'iPhone 13 Pro' , 'iPhone SE（第3世代）' , 'iPhone 13', 'iPhone 13 mini','iPhone 12', 'iPhone 12 mini']
        for( let i = 0; i < cpnSubject.length; i++ ) {
            if( this.summary.product == cpnSubject[i] ) {
                return true;
            }
        }
    },
    isSubCpnSubject() {
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
