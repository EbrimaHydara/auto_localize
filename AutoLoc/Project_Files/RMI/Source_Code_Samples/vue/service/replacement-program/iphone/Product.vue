<template>
    <li v-if="summary['upgrade-program-pointback-num'] > 0">
        <a :href="linkPath" class="c-Card_Normal">
            <div>
                <ul class="c-Label_List service-replacement-program-Card_Label">
                    <li v-if="isPreOrder" class="c-Label_Normal service-replacement-program-Card_Label-new-sale">予約注文受付中</li>
                    <li v-if="isNew" class="c-Label_Normal service-replacement-program-Card_Label-new-sale">NEW</li>
                    <li v-if="isDiscount" class="c-Label_Normal service-replacement-program-Card_Label-discount"><span>{{ summary.discount_text }}</span></li>
                </ul>
            </div>
            <div class="service-replacement-program-Card_Product">
                <figure class="u-Adjust_Align-left">
                    <img :src="imgPath" :alt="imgAlt" height="130" loading="lazy">
                </figure>
                <div>
                    <h3 class="c-Heading_Lv3 service-replacement-program-Card_Name">{{ summary.product }}</h3>
                    <dl class="u-Adjust_Mt-8 service-replacement-program-Card_Price-box">
                        <dt v-if ="isCpnSubject || isSubCpnSubject" class="u-Adjust_Mr-8 c-Txt_Normal-s c-Txt_Emp-02">キャンペーン特価※3</dt>
                        <dt v-else class="u-Adjust_Mr-8 c-Txt_Normal-s">製品価格</dt>
                        <dd>
                            <p v-if="isDiscount">
                                <span class="service-replacement-program-Card_Price-strikethrough">{{ displayDiscount }}</span><span class="service-replacement-program-Card_Price-strikethrough-yen">円</span>
                                <span class="c-Txt_Cap">※ →</span>
                            </p>
                            <p v-else
                            class="service-replacement-program-Card_Price-font-normal">
                                {{displayPaymentAll}}<span class="c-Txt_Normal-s">円〜</span>
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>

            <ul class="c-Label_List service-replacement-program-Card_Tips">
                <li v-for="(capacity, index) in getCapacityArray(summary.capacity)"
                    :key="index"
                    class="c-Label_Normal"
                >{{getCapacityStyle (capacity)}}
                </li>
            </ul>

            <div class="service-replacement-program-Card_Price">
                <!-- <div v-if="isPayment" class="service-replacement-program-Card_Price-detail-1">
                    <span v-if="isCpnSubject || isSubCpnSubject" class="c-Txt_Emp-02">キャンペーン特価<span style="font-size: 12px">※3</span></span>
                    <span v-else>製品価格</span>
                    <p v-if="isDiscount">
                        <span>
                        <del>
                            {{displayDiscount}}
                            円<span v-if="isDelPriceCap">{{summary['double-price-txt']}}</span>
                        </del>
                        →
                        </span>
                        <span class="service-replacement-program-Card_Price-detail-1-bulk">{{displayPaymentAll}}</span>円～
                    </p>
                    <p v-else><span class="service-replacement-program-Card_Price-detail-1-bulk">{{displayPaymentAll}}</span>円～</p>
                </div> -->

                <div v-if="isPayment" class="service-replacement-program-Card_Price-detail-48">
                    <p class="c-Txt_Emp-01 u-Adjust_Align-center c-Txt_Normal">
                        48回払い<br><span v-if="isPayment48Txt" class="c-Txt_Normal-s service-replacement-program-Card_Sub-title">（{{ summary['payment48-text'] }}）<span class="c-Txt_Cap">{{displayPayment48Note}}</span></span></p>
                    <dl>
                        <dt>月々の支払分</dt>
                        <dd><span class="service-replacement-program-Card_Price-font service-replacement-program-Card_Price-detail-48-monthly">{{displayPayment48}}</span>円～</dd>
                    </dl>
                    <dl>
                        <dt>25カ月目に返却した<br>場合の支払い総額</dt>
                        <dd class="c-Txt_Emp-02"><span class="service-replacement-program-Card_Price-font service-replacement-program-Card_Price-detail-48-upgrade">{{displayPaymentUpgrade}}</span>円～</dd>
                    </dl>
                </div>

                <template v-if="isFreeCpn">
                    <div class="service-replacement-program-Card_Price-point" v-html="displayFreeCpn"></div>
                </template>
                <template v-else>
                    <div v-if="isPointBackPointIphone" class="service-replacement-program-Card_Price-point">
                        <p class="c-Txt_Normal">
                            {{ summary['top-carousel-iphone-pre-text'] }}
                            {{ summary['top-carousel-iphone-pre-text2'] }}
                            <br>
                            <span class="c-Txt_Emp-02">
                                {{ summary['top-carousel-pointback-txt2'] }}<span class="service-replacement-program-Card_Price-font">{{ displayPointBackPointIphone }}</span>{{ summary['top-carousel-pointback-txt3'] }} <span class="c-Txt_Cap c-Txt_Emp-02">{{ summary['upgrade-program-pointback-note'] }}</span>
                            </span>
                        </p>
                    </div>
                </template>

            </div>

            <div v-if="isPayment">
                <p v-if="isCpnSubject" class="c-Txt_Cap service-replacement-program-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
                <p v-else-if="isSubCpnSubject" class="c-Txt_Cap service-replacement-program-Card_Price-cap">iPhone対象機種特価キャンペーン適用。48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。 *楽天モバイルでの「iPhone対象機種特価キャンペーン」適用時の販売価格（販売期間：2022年7月22日～2022年10月25日）</p>
                <p v-else-if="isPriceVersion14" class="c-Txt_Cap service-replacement-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
                <p v-else-if="isPriceVersion14Plus" class="c-Txt_Cap service-replacement-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
                <p v-else-if="isPriceVersion14Pro" class="c-Txt_Cap service-replacement-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
                <p v-else-if="isDiscount" class="c-Txt_Cap service-replacement-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
                <p v-else class="c-Txt_Cap service-replacement-program-Card_Price-cap">48回払いは楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。</p>
            </div>
        </a>
    </li>
</template>

<script>

export default {
    name: 'Product',
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

            return iphoneImgName ? `${this.path.sitepath}assets/img/service/replacement-program/thumb-product-iphone-top-${iphoneImgName}.png${param}` : ''
        },
        imgAlt() {
            let iphoneAltTxt = this.summary.alt && this.summary.alt.trim() !== '' ? this.summary.alt : '';
            return iphoneAltTxt
        },
        linkPath() {
            return this.summary.directory? `${this.path.sitepath}product/iphone/${this.summary.directory.trim()}/?l-id=service_replacement-program_product_iphone_${this.summary.directory.trim()}`
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
            const cpnSubject = ['iPhone 13 Pro Max', 'iPhone 13 Pro Max', 'iPhone 13 Pro','iPhone SE（第3世代）', 'iPhone 13', 'iPhone 13 mini','iPhone 12', 'iPhone 12 mini']
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
        isDelPriceCap() {
            return this.summary['double-price-txt'];
        }
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
