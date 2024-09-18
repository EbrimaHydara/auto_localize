<template>
    <div class="top-Carousel_Product-inner-box">
        <a :href="`${path.sitepath}product/smartphone/${summary.directory}/?l-id=top_p-carousel_product_${summary.directory}`"
            class="c-Card_Normal top-Carousel_Item">
            <div class="top-smartphone-Card_Label-area">
                <ul class="top-smartphone-Card_Label">
                    <li v-show="summary.new" class="top-smartphone-Card_Label-new-sale">NEW</li>
                    <li v-show="summary.releasetext" class="top-smartphone-Card_Label-basic">{{ summary.releasetext }}</li>
                    <li v-show="summary.basictext" class="top-smartphone-Card_Label-special">{{ summary.basictext }}</li>
                </ul>
            </div>
            <div :class="['top-smartphone-Card_Product', { 'top-smartphone-Card_Product-mt': !isLebel(summary) }]">
                <figure>
                    <img :src="`${path.sitepath}assets/img/product/${summary.directory}/pht-device-thumb.png?${summary.update.split('/').join('')}`" :alt="summary.product" height="130" loading="lazy">
                </figure>
                <div>
                    <h3 class="top-smartphone-Card_Name">{{ summary.product }}</h3>
                    <dl v-if="!summary['replacement-flag']" class="u-Adjust_Mt-8 top-smartphone-Card_Price-box">
                        <dt class="u-Adjust_Mr-8 c-Txt_Normal-s">製品価格</dt>
                        <dd>
                            <span v-if="summary.strikethrough">
                                <span class="top-smartphone-Card_Price-strikethrough top-smartphone-Card_Price-font-normal">{{ summary.strikethrough | addComma }}</span>
                                <span v-if="isIrregularNote(summary.directory)" class="top-smartphone-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                            </span>
                            <span class="top-smartphone-Card_Price-font-normal">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                        </dd>
                    </dl>

                </div>
            </div>
            <div v-if="summary.price2">
                <template v-if="summary['replacement-flag']">
                    <div class="top-smartphone-Card_Price-detail-48-simple">
                        <dl>
                            <dt class="c-Txt_Emp-01 c-Txt_Normal">48回払い</dt>
                            <dd><span class="top-smartphone-Card_Price-font top-smartphone-Card_Price-detail-48-monthly">{{ displayPayment48 }}</span>円/月</dd>
                        </dl>
                    </div>
                    <div class="top-smartphone-Card_Campaign">
                        <template v-if="summary.directory === 'rakuten-hand-5g'">
                            <dl>
                                <div class="c-Txt_Normal-s">
                                    <dt>
                                        製品価格
                                    </dt>
                                    <dd>
                                        <span v-if="summary.strikethrough">
                                            <span class="top-smartphone-Card_Price-strikethrough top-smartphone-Card_Price-font top-smartphone-Card_Price-font-product">{{ summary.strikethrough | addComma }}</span>
                                            <span v-if="isIrregularNote(summary.directory)" class="top-smartphone-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                                        </span>
                                        <span class="top-smartphone-Card_Price-font top-smartphone-Card_Price-font-product">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                                    </dd>
                                </div>
                                <div class="c-Txt_Normal-s">
                                    <dt>
                                        プランセット値引き<span class="c-Txt_Cap">*8</span>
                                    </dt>
                                    <dd class="c-Txt_Emp-02">
                                        <span class="top-smartphone-Card_Price-font c-Txt_Normal-m">-{{ summary.discountprice |
                                            addComma }}</span>円
                                    </dd>
                                </div>
                            </dl>
                            <p class="top-smartphone-Card_Campaign-total">
                                <span class="top-smartphone-Card_Price-font">{{ displayNetpaymentsmartphone }}</span><span class="c-Txt_Normal">円</span>
                            </p>
                        </template>
                        <template v-else>
                            <dl>
                                <div class="c-Txt_Normal-s">
                                    <dt>
                                        製品価格
                                    </dt>
                                    <dd>
                                        <span v-if="summary.strikethrough">
                                            <span class="top-smartphone-Card_Price-strikethrough top-smartphone-Card_Price-font top-smartphone-Card_Price-font-product">{{ summary.strikethrough | addComma }}</span>
                                            <span v-if="isIrregularNote(summary.directory)" class="top-smartphone-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                                        </span>
                                        <span class="top-smartphone-Card_Price-font top-smartphone-Card_Price-font-product">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                                    </dd>
                                </div>
                                <div class="c-Txt_Normal-s">
                                    <dt>
                                        <span v-if="summary.txt1">{{ summary.txt1 }}</span>{{ displayPointBackPointsmartphone
                                        }}ポイント還元<span class="c-Txt_Cap">*2</span>
                                    </dt>
                                    <dd class="c-Txt_Emp-02">
                                        <span class="top-smartphone-Card_Price-font c-Txt_Normal-m">-{{ displayPointBackPointsmartphone }}</span>pt
                                    </dd>
                                </div>
                            </dl>
                            <p class="top-smartphone-Card_Campaign-total">
                                <span class="c-Txt_Normal">実質</span><span class="top-smartphone-Card_Price-font">{{ displayNetpaymentsmartphone }}</span><span class="c-Txt_Normal">円</span>
                            </p>
                        </template>
                    </div>
                </template>
                <template v-else>
                    <div class="top-smartphone-Card_Price-detail-48">
                        <p class="c-Txt_Emp-01 u-Adjust_Align-center c-Txt_Normal">48回払い<br><span
                                class="c-Txt_Normal-s top-smartphone-Card_Price-detail-48-letter-spacing">（楽天モバイル買い替え超トクプログラム）<span class="c-Txt_Cap">{{ summary['top-carousel-48-note'] }}</span></span></p>
                        <dl>
                            <dt>月々の支払分</dt>
                            <dd><span class="top-smartphone-Card_Price-font top-smartphone-Card_Price-detail-48-monthly">{{ displayPayment48 }}</span>円</dd>
                        </dl>
                        <dl>
                            <dt>25カ月目に返却した<br>場合の支払い総額</dt>
                            <dd class="c-Txt_Emp-02"><span
                                    class="top-smartphone-Card_Price-font top-smartphone-Card_Price-detail-48-upgrade">{{ displayPaymentUpgrade }}</span>円</dd>
                        </dl>
                    </div>
                    <div class="top-smartphone-Card_Price-point">
                        <p class="c-Txt_Normal">
                            さらにキャンペーンで<br>
                            <span class="c-Txt_Emp-02">
                                {{ summary.txt1 }}<span class="top-smartphone-Card_Price-font">{{displayPointBackPointsmartphone }}</span>{{ summary.txt2 }}<span class="c-Txt_Cap c-Txt_Emp-02">{{ summary['top-carousel-point-note']}}</span>
                            </span>
                        </p>
                    </div>
                </template>
            </div>
            <div>
                <p v-if="summary['card-note']" class="c-Txt_Cap">{{ summary['card-note'] }}</p>
            </div>
        </a>
    </div>
</template>

<script>

export default {
    name: 'ListItem',
    props: ['summary'],
    data() {
        return {
            isNew: false,
            isPreOrder: false,
            path: {
                sitepath: '/',
            },
        }
    },
    computed: {
        is5g() {
            return this.summary['flag-5g'].toString().trim() === '1' ? '5g' : null;
        },
        isIrregularNote() {
            return (directory) => {
                const irregularList = [
                    'xperia-10m3-lite',
                    'xperia-5m4',
                    'galaxy-z-flip4',
                    'reno7-a',
                    'redmi-note-11-pro-5g',
                    'aquos-sense6s',
                    'galaxy-a23-5g'
                ];

                return irregularList.includes(directory);
            }
        },
        limitedTimeNote() {
            return (directory) => {
                const noteMap = new Map([
                    ['aquos-sense6', '2022年7月29日～2022年11月28日'],
                    ['xperia-10m3-lite', '2022年7月1日～2022年11月28日'],
                    ['xperia-10m4', '2023年1月20日～2023年3月27日'],
                    ['xperia-5m4', '2022年10月21日～2023年4月19日'],
                    ['reno7-a', '2023年1月20日～2023年5月15日'],
                    ['redmi-note-11-pro-5g', '2022年11月29日～2023年7月3日'],
                ]);

                return noteMap.get(directory);
            }
        },
        displayPayment48() {
            return (+this.summary.price4).toLocaleString()
        },
        displayPaymentUpgrade() {
            return (+this.summary['replacement-price']).toLocaleString()
        },
        displayPointBackPointsmartphone() {
            return (+this.summary.pointtotal).toLocaleString()
        },
        displayNetpaymentsmartphone() {
            return (+this.summary.netpayment).toLocaleString()
        },
        displayRelease() {
            let dt = new Date(this.summary.release);
            let y = dt.getFullYear();
            let m = dt.getMonth() + 1;
            let d = dt.getDate();
            const releaseDate = y + '年' + m + '月' + d + '日';
            return releaseDate
        }
    },
    methods: {
        getColorcodeArray(colorcode) {
            return colorcode.split('/');
        },
        getColorChipStyle(color) {
            return `background: ${color};`;
        },
        getColorChipClass(color) {
            return color.toUpperCase() === '#FFFFFF' || color.toUpperCase() === '#F5F5F5' ? 'color-white' : '';
        },
        urlParser() {
            const url = window.location.pathname;
            const arr = url.split('/');
            return arr[arr.length - 2];
        },
        getDir(elem) {
            if (elem === 'rakuten') {
                return 'rakuten';
            } else {
                return 'top';
            }
        },
        isLebel(elem) {
            console.log(elem.product, 'elm')
            console.log(elem?.new !== '' || elem?.releasetext !== '' || elem?.basictext !== '', 'elm par')
            return elem?.new !== '' || elem?.releasetext !== '' || elem?.basictext !== '';
        }
    },
}
</script>
