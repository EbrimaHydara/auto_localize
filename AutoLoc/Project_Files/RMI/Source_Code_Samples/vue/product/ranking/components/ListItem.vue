<template>
  <li>
    <a :href="linkPath" class="product-ranking-Card c-Card_Normal">
      <div class="product-ranking-Card_Img">
        <div class="product-ranking-Card_Label">
          <span v-if="isNew">NEW</span>
        </div>

        <figure>
          <img
            :src="imgPath"
            alt=""
            width="160"
          >
        </figure>
      </div>

      <div class="product-ranking-Card_Data">
        <div class="product-ranking-Card_Data-label">
          <RankLabel :ranking="deviceThisMonth(selectDeviceName)" />
          <RankTrend
            v-if="isTrend"
            :rankingThisMonth="deviceThisMonth(selectDeviceName)"
            :rankingLastMonth="deviceLastMonth(selectDeviceName)"
          />

        </div>
        <!-- For debug
        <p>先月{{ summary['rank-last-month'] }}位</p>
        <p>今月{{ summary['rank-this-month'] }}位</p>
        <p class="c-Txt_Emp-02">先月{{ summary['rank-add-last-month'] }}位</p>
        <p class="c-Txt_Emp-02">今月{{ summary['rank-add-this-month'] }}位</p>
        -->

        <h2 class="c-Heading_Lv2 u-Adjust_Mt-8">{{ summary.product }}</h2>
        <div class="product-ranking-Card_Data-sub">
          <div>{{ summary.manufacturer }}</div>
          <div class="u-Adjust_Ml-16 c-Txt_Cap">発売日:{{ displayRereaseDate }}</div>
        </div>

        <div class="product-ranking-Card_Data-price">
          <!-- Appleの場合 -->
          <template v-if="isApple">


            <dl class="product-ranking-Card_Data-price-item">
              <dt>48回払い（税込）</dt>
              <dd class="c-Txt_Emp-01">月々<span class="product-ranking-Card_Price-num">{{ displayPayment48 }}</span>円～</dd>
            </dl>
            <p
              v-if="isPayment48Note"
              class="product-ranking-Card_Data-price-item-cap"
            >
              {{ summary['payment48-text'] }}{{ summary['ranking-iphone-note1'] }}
            </p>

            <dl class="product-ranking-Card_Data-price-item">
              <dt>一括払い（税込）</dt>
              <dd v-if="isDiscount">
                <del>
                  {{ displayDiscount }}
                </del>円～<span v-if="isDiscountpriceCap">{{ summary['double-price-txt'] }}</span>→
                <span class="c-Txt_Normal c-Txt_Emp-01">{{ displayPayment1 }}</span>
                円～
              </dd>
              <dd v-else><span class="c-Txt_Normal c-Txt_Emp-01">{{ displayPayment1 }}</span>円～</dd>

            </dl>
          </template>

          <!-- Rakutenオリジナル・Androidの場合 -->
          <template v-else>
            <template v-if="!summary['replacement-flag'] && summary['product'] !== 'Rakuten Hand 5G'">
              <dl class="product-ranking-Card_Data-price-item">
                <dt>48回払い（税込）</dt>
                <dd class="c-Txt_Emp-01">月々<span class="product-ranking-Card_Price-num">{{ displayPaymentPrice }}</span>円</dd>
              </dl>
              <p class="product-ranking-Card_Data-price-item-cap">
                {{ summary['ranking-payment48-text'] }}{{ summary['ranking-payment48-note'] }}
              </p>
              <dl class="product-ranking-Card_Data-price-item">
                <dt>一括払い（税込）</dt>
                <dd v-if="summary['strikethrough']">
                <dd v-if="isDiscount">
                  <span class="c-Txt_Normal c-Txt_Emp-01">{{ displayPrice }}</span>
                  円
                </dd>
                <dd v-else><span class="c-Txt_Normal c-Txt_Emp-01">{{ displayPrice }}</span>円</dd>
              </dl>
            </template>
            <template v-else>
              <dl class="product-ranking-Card_Data-price-item">
              <dt>製品価格（税込）</dt>
              <dd class="c-Txt_Emp-01">
                <span v-if="isCancellation" class="c-Txt_Normal-s" style="font-weight: 400;">
                <span style="text-decoration: line-through;">{{ displayCancellationPrice }}円</span>
                <span v-if="isOppoReno7">※</span><span v-if="isGalaxyA235G">※</span><span v-if="isRedmiNote11Pro5G">※</span>→
                </span>
                <span class="product-ranking-Card_Price-num">{{ displayPrice }}</span>円
              </dd>
              </dl>
            </template>

            <DiscountListItem
              v-if="isDiscountprice"
              :discountPrice="dispkaydiscountPrice"
              :rankingDiscountNote="summary['ranking-discount-note']"
              :mnp="summary.mnp"
            />

            <PointBackListItem
              v-if="isPointBack1"
              :point="displayPointBackPoint1"
              :preText="summary['pointback-pre-text1']"
              :postText="summary['pointback-post-text1']"
              :note="summary['ranking-note1']"
            />

            <!-- <PointBackListItem
              v-if="isPointBack2"
              :point="displayPointBackPoint2"
              :preText="summary['pointback-pre-text2']"
              :postText="summary['pointback-post-text2']"
              :note="summary['ranking-note2']"
            /> -->
          </template>

          <div class="product-ranking-Card_Data-price-result">
            <!-- Appleの場合(計算結果) -->
            <div
              v-if="isApple"
              class="c-Txt_Emp-02"
            >
              {{ summary['top-carousel-iphone-pre-text'] }}
            {{ summary['top-carousel-iphone-pre-text2'] }}{{ summary['top-carousel-pointback-txt2'] }}<span class="product-ranking-Card_Price-num">{{ displayPointBackPointIphone }}</span>{{ summary['ranking-pointback-text3'] }}{{ summary['ranking-iphone-note2'] }}
            </div>

            <!-- Rakutenオリジナル・Androidの場合(計算結果) -->
            <div
              v-else
              class="c-Txt_Normal-s c-Txt_Emp-02"
            >
              <template v-if="!summary['replacement-flag'] && summary['product'] !== 'Rakuten Hand 5G' && summary['product'] !== 'Galaxy A23 5G' && summary['product'] !== 'AQUOS wish3' && summary['product'] !== 'Xperia 10 V' && summary['product'] !== 'OPPO Reno9 A' && summary['product'] !== 'AQUOS sense8'">
                {{ summary['ranking-pointback-text1'] }}{{ summary['ranking-pointback-text2'] }}<span class="product-ranking-Card_Price-num">{{ displayCancellationPrice }}</span>{{ summary['ranking-pointback-text3'] }}{{ summary['ranking-iphone-note2'] }}
              </template>
              <template v-else>
                <template v-if="summary['product'] === 'Rakuten Hand 5G'">
                  <span class="product-ranking-Card_Price-num">{{ displayResultPrice }}</span>円
                </template>
                <template v-else>
                  <template v-if="summary['product'] === 'Galaxy A23 5G' || summary['product'] === 'AQUOS wish3' || summary['product'] === 'Xperia 10 V' || summary['product'] === 'OPPO Reno9 A' || summary['product'] === 'AQUOS sense8'">
                  値引き後価格<span class="product-ranking-Card_Price-num">{{ displayResultPrice }}</span>円
                  </template>
                  <template v-else>
                    実質<span class="product-ranking-Card_Price-num">{{ displayResultPrice }}</span>円
                  </template>
                </template>
              </template>
            </div>
            <!-- <div
              v-if="isPointBack3"
              class="c-Txt_Normal-s c-Txt_Emp-02"
            >
              {{ summary['pointback-pre-text3'] }}<span class="product-ranking-Card_Price-num">{{ displayPointBackPoint3 }}</span>ポイント{{ summary['pointback-post-text3'] }}{{ summary['ranking-note3'] }}
            </div> -->
          </div>
        </div>
      </div>

      <div class="product-ranking-Card_Feature">
        <h4 class="c-Heading_Lv4">特長</h4>

        <ul class="c-List_Text-disc">
          <li class="u-Adjust_Mt-8" v-html="displayFeature1"></li>
          <li class="u-Adjust_Mt-8" v-html="displayFeature2"></li>
          <li class="u-Adjust_Mt-8" v-html="displayFeature3"></li>
        </ul>

        <div class="u-Adjust_Mt-16">
          <p
            v-for="(note, i) in noteList"
            :key="i"
            class="c-Txt_Cap"
          >
            {{ note.trim() }}
          </p>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import PointBackListItem from './PointBackListItem.vue';
import RankLabel from './RankLabel.vue';
import RankTrend from './RankTrend.vue';
import DiscountListItem from './DiscountListItem.vue';


export default {
  components: {
    PointBackListItem,
    RankLabel,
    RankTrend,
    DiscountListItem
  },
  name: 'ListItem',
  props: [ 'summary', 'selectDeviceName' ],
  data() {
    return {
      isNew: false,
      isTrend: true,
      path: {
        sitepath: '/',
        rootpath: '/',
        onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/',
      },
    }
  },
  methods: {
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
    deviceThisMonth(selectDeviceName) {
        return ( selectDeviceName === 'both') ? this.summary['rank-this-month'] : this.summary['rank-add-this-month'];
    },
    deviceLastMonth(selectDeviceName) {
        return ( selectDeviceName === 'both') ? this.summary['rank-last-month'] : this.summary['rank-add-last-month'];
    }
  },
  computed: {
    isApple() {
      return this.summary.manufacturer && this.summary.manufacturer.trim() === 'Apple'
    },
    isRakuten() {
      return this.summary.manufacturer && this.summary.manufacturer.trim() === 'Rakuten Mobile'
    },
    isPointBack1() {
      return this.summary.point1 && this.summary.point1.trim() !== ''
    },
    // isPointBack2() {
    //   return this.summary.point2 && this.summary.point2.trim() !== ''
    // },
    // isPointBack3() {
    //   return this.summary.point3 && this.summary.point3.trim() !== ''
    // },
    isCancellation() {
      return this.summary.strikethrough && this.summary.strikethrough.trim() !== ''
    },
    isOppoReno7() {
      return this.summary.product.trim() === 'OPPO Reno7 A'
    },
    isRedmiNote11Pro5G(){
        return this.summary.product.trim() === 'Redmi Note 11 Pro 5G'
    },
    isGalaxyA235G() {
      return this.summary.product.trim() === 'Galaxy A23 5G'
    },
    isAQUOSsense6s() {
        return this.summary.product.trim() === 'AQUOS sense6s'
    },
    isPayment48Note() {
      return this.summary['payment48-text'] && this.summary['payment48-text'].trim() !== ''
    },
    isDiscount() {
      // MEMO: csv入稿の際に、discount_textがない場合があるので注意(23年1月27時点でiphone 14が該当しており、ロジックを修正)
      return  this.summary['discount_text'] !== '' || this.summary['discount'] !== ''
    },
    isDiscountprice() {
      return this.summary.discountprice && this.summary.discountprice.trim() !== ''
    },
    isDiscountpriceCap() {
      return this.summary['double-price-txt'] && this.summary['double-price-txt'].trim() !== ''
    },
    displayRereaseDate() {
      const splitDate = this.summary.release.split('/');
      return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日`
    },
    displayPayment48() {
      return (+this.summary.payment48).toLocaleString()
    },
    displayPayment1() {
      return (+this.summary.payment1).toLocaleString()
    },

    displayPointBackPoint1() {
      return (+this.summary.point1).toLocaleString()
    },
    displayPointBackPoint2() {
      return (+this.summary.point2).toLocaleString()
    },
    displayPointBackPoint3() {
      return (+this.summary.point3).toLocaleString()
    },
    displayPointBackPointIphone() {
      return (+this.summary['top-carousel-pointback-num']).toLocaleString()
    },
    dispkaydiscountPrice() {
      return (+this.summary.discountprice).toLocaleString()
    },
    displayPrice() {
      return (+this.summary.price2).toLocaleString()
    },
    displayPaymentPrice() {
      return (+this.summary.price4).toLocaleString()
    },
    displayPointTotal() {
      return (+this.summary.price4).toLocaleString()
    },
    displayCancellationPrice() {
      return (+this.summary.pointtotal).toLocaleString()
    },
    displayResultPrice() {
      const originalPrice = this.summary.price2 || 0;
      const point1 = this.summary.point1 || 0;
      const point2 = this.summary.point2 || 0;
      const discountprice = this.summary.discountprice || 0;

      const resultPrice = originalPrice - point1 - point2 - discountprice;
      return resultPrice > 0 ? resultPrice.toLocaleString() : '0'
    },
    displayDiscount() {
      console.log(+this.summary.discount)
      return (+this.summary.discount).toLocaleString()
    },
    displayStrikethroughPrice() {
      return (+this.summary.strikethrough).toLocaleString()
    },

    displayFeature1() {
      return this.brInlistTransform(this.summary.feature1)
    },
    displayFeature2() {
      return this.brInlistTransform(this.summary.feature2)
    },
    displayFeature3() {
      return this.brInlistTransform(this.summary.feature3)
    },

    noteList() {
      return this.summary.note.split('\n')
    },

    imgPath() {
      const iphoneImgName = this.summary.directory.split('-').join('').trim();
      const param = this.summary.update && this.summary.update.trim() !== '' ? `?${this.summary.update.trim()}` : '';

      return this.isApple
        ? `${this.path.sitepath}assets/img/product/iphone/top/thumb-product-iphone-top-${iphoneImgName}.png${param}`
        : `${this.path.sitepath}assets/img/product/${this.summary.directory.trim()}/pht-device-thumb.png${param}`
    },
    linkPath() {
      return this.isApple
        ? `${this.path.sitepath}product/iphone/${this.summary.directory.trim()}/?l-id=product_ranking_iphone_${this.summary.directory.trim()}`
        : this.isRakuten
        ? `${this.path.sitepath}product/smartphone/${this.summary.directory.trim()}/?l-id=product_ranking_rakuten_${this.summary.directory.trim()}`
        : `${this.path.sitepath}product/smartphone/${this.summary.directory.trim()}/?l-id=product_ranking_smartphone_${this.summary.directory.trim()}`
    },
  },
  created() {
        if (this.summary['rank-last-month'].trim() === '') {
            this.isNew = true
            this.isTrend = false
        } else {
            this.isNew = false
            this.isTrend = true
        }
  },
  updated() {
        // 新規ランクイン製品のセットアップ
        if ( this.selectDeviceName === 'Android' || this.selectDeviceName === 'iPhone' ) {
            console.log('Android');
            if (this.summary['rank-add-last-month'].trim() === '') {
                this.isNew = true
                this.isTrend = false
            } else {
                this.isNew = false
                this.isTrend = true
            }
        } else {
            console.log('総合');
            if (this.summary['rank-last-month'].trim() === '') {
                this.isNew = true
                this.isTrend = false
            } else {
                this.isNew = false
                this.isTrend = true
            }
        }
    },
    isCpnSubject() {
        const cpnSubject = ['iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini', 'iPhone SE（第3世代）', 'iPhone 12', 'iPhone 12 mini']
        for( let i = 0; i < cpnSubject.length; i++ ) {
            if( this.summary.product == cpnSubject[i] ) {
                return true;
            }
        }
    }
}
</script>
