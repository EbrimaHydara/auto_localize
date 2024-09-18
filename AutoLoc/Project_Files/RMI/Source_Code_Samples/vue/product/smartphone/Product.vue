<template>
    <li>
        <a :href="`${ path.sitepath }product/smartphone/${ summary.directory }/?l-id=product_${dir}_${ summary.directory }`" class="c-Card_Normal">
            <div>
                <ul class="smartphone-top-Card_Label">
                    <li v-show="summary.new" class="smartphone-top-Card_Label-new-sale">NEW</li>
                    <li v-show="summary.releasetext" class="smartphone-top-Card_Label-basic">{{summary.releasetext}}</li>
                    <li v-show="summary.basictext" class="smartphone-top-Card_Label-special">{{summary.basictext}}</li>
                </ul>
            </div>
            <template v-if="summary.directory === 'rakuten-hand-5g'">
                <div class="smartphone-top-Card_Product-rakuten">
                    <figure :data-flag="is5g">
                        <img :src="`${ path.sitepath }assets/img/product/${ summary.directory }/pht-device-thumb.png?${summary.update.split('/').join('')}`" :alt="summary.product" height="230" loading="lazy">
                    </figure>
                    <ul class="smartphone-top-Card_Color">
                        <li v-for="(color, index) in getColorcodeArray(summary.colorcode)"
                            :key="index">
                            <span :style="getColorChipStyle(color)"
                                    :class="getColorChipClass(color)"></span>
                        </li>
                    </ul>
                    <h3 class="u-Adjust_Mt-16 smartphone-top-Card_Name">{{ summary.product }}</h3>
                    <p v-show="isBatterySort"
                        class="smartphone-top-Card_Spec">
                        バッテリー容量：{{ summary.battery }}mAh
                    </p>
                    <p v-show="isDisplaySort"
                        class="smartphone-top-Card_Spec">
                        画面サイズ：約{{ summary.display }}インチ
                    </p>
                    <p class="smartphone-top-Card_Spec">
                        <span v-if="summary.release" v-show="isDateSort">
                            発売日：{{ summary.release }}
                        </span>
                    </p>
                    <div>
                        <dl>
                            <div class="smartphone-top-Card_Rakuten-price">
                                <dt class="c-Txt_Normal-s">製品価格</dt>
                                <dd>
                                    <span v-if="summary.strikethrough">
                                        <span><span class="smartphone-top-Card_Price-font smartphone-top-Card_Price-strikethrough">{{ summary.strikethrough | addComma }}</span><span class="smartphone-top-Card_Price-strikethrough-yen"></span></span>
                                        <span v-if="isIrregularNote(summary.directory)" class="c-Txt_Cap">※</span> →
                                    </span>
                                    <span class="smartphone-top-Card_Price-font" :style="isPoint(summary.pointtotal)">{{ summary.price2 | addComma }}</span>円
                                </dd>
                            </div>
                            <div class="c-Txt_Normal-s smartphone-top-Card_Rakuten-price c-Txt_Emp-02">
                                <dt>
                                    プランセット値引き<span class="c-Txt_Cap c-Txt_Emp-02">{{ summary['discount-note'] }}</span>
                                </dt>
                                <dd>
                                    <span class="smartphone-top-Card_Price-font c-Txt_Normal-m">-{{ summary.discountprice | addComma }}</span>円
                                </dd>
                            </div>
                        </dl>
                        <div class="smartphone-top-Card_Price-total">
                            <p class="smartphone-top-Card_Price-total-emp"><span class="smartphone-top-Card_Price-font">1</span>円</p>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div>
                    <div class="smartphone-top-Card_Product">
                        <figure class="u-Adjust_Align-left">
                            <img :src="`${ path.sitepath }assets/img/product/${ summary.directory }/pht-device-thumb.png?${summary.update.split('/').join('')}`" :alt="summary.product" height="130" loading="lazy">
                        </figure>
                        <div>
                            <p v-show="isBatterySort"
                                class="smartphone-top-Card_Spec">
                                バッテリー容量：{{ summary.battery }}mAh
                            </p>
                            <p v-show="isDisplaySort"
                                class="smartphone-top-Card_Spec">
                                画面サイズ：約{{ summary.display }}インチ
                            </p>
                            <p class="smartphone-top-Card_Spec">
                                <span v-if="summary.release" v-show="isDateSort">
                                    {{ displayRelease }}発売
                                </span>
                            </p>
                            <h3 class="smartphone-top-Card_Name">{{ summary.product }}</h3>
                            <dl v-if="!summary['replacement-flag']" class="u-Adjust_Mt-8 smartphone-top-Card_Price-box">
                                <dt class="u-Adjust_Mr-8 c-Txt_Normal-s">製品価格</dt>
                                <dd>
                                    <span v-if="summary.strikethrough">
                                        <span class="smartphone-top-Card_Price-strikethrough smartphone-top-Card_Price-font-normal">{{ summary.strikethrough | addComma }}</span>
                                        <span v-if="isIrregularNote(summary.directory)" class="smartphone-top-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                                    </span>
                                    <span class="smartphone-top-Card_Price-font-normal" :style="isPoint(summary.pointtotal)">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                                </dd>
                            </dl>

                        </div>
                    </div>
                    <div v-if="summary.price2">
                        <template v-if="summary['replacement-flag']">
                            <div class="smartphone-top-Card_Price-detail-48-simple">
                                <dl>
                                    <dt>48回払い</dt>
                                    <dd class="c-Txt_Normal"><span class="smartphone-top-Card_Price-font smartphone-top-Card_Price-detail-48-monthly">{{ displayPayment48 }}</span>円</dd>
                                </dl>
                            </div>
                            <div class="smartphone-top-Card_Campaign">
                                <dl>
                                    <div class="smartphone-top-Card_Price-emp02 c-Txt_Normal-s">
                                        <dt class="">製品価格</dt>
                                        <dd>
                                            <span v-if="summary.strikethrough">
                                                <span class="smartphone-top-Card_Price-strikethrough smartphone-top-Card_Price-font smartphone-top-Card_Price-font-product">{{ summary.strikethrough | addComma }}</span>
                                                <span v-if="isIrregularNote(summary.directory)" class="smartphone-top-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                                            </span>
                                            <span class="smartphone-top-Card_Price-font smartphone-top-Card_Price-font-product" :style="isPoint(summary.pointtotal)">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                                        </dd>
                                    </div>
                                    <div class="smartphone-top-Card_Price-emp02 c-Txt_Normal-s">
                                        <dt>
                                            <span v-if="summary.txt1">{{ summary.txt1 }}</span>{{ displayPointBackPointsmartphone }}ポイント還元<span class="c-Txt_Cap">※3</span>
                                        </dt>
                                        <dd class="c-Txt_Emp-02">
                                            <span class="smartphone-top-Card_Price-font c-Txt_Normal-m">-{{ displayPointBackPointsmartphone }}</span>pt
                                        </dd>
                                    </div>
                                </dl>
                                <p class="smartphone-top-Card_Campaign-total">
                                    <span class="c-Txt_Normal">実質</span><span class="smartphone-top-Card_Price-font">{{ displayNetpaymentsmartphone }}</span><span class="c-Txt_Normal">円</span>
                                </p>
                            </div>
                        </template>
                        <template v-else>
                            <div class="smartphone-top-Card_Price-detail-48">
                                <p class="c-Txt_Emp-01 u-Adjust_Align-center c-Txt_Normal">48回払い<br><span class="c-Txt_Normal-s smartphone-top-Card_Sub-title">（楽天モバイル買い替え超トクプログラム）<span class="c-Txt_Cap">{{ summary['android-48-note']}}</span></span></p>
                                <dl>
                                    <dt>月々の支払分</dt>
                                    <dd class="c-Txt_Normal"><span class="smartphone-top-Card_Price-font smartphone-top-Card_Price-detail-48-monthly">{{ displayPayment48 }}</span>円</dd>
                                </dl>
                                <dl>
                                    <dt>25カ月目に返却した<br>場合の支払い総額</dt>
                                    <dd class="c-Txt_Emp-02 c-Txt_Normal"><span class="smartphone-top-Card_Price-font smartphone-top-Card_Price-detail-48-upgrade">{{ displayPaymentUpgrade }}</span>円</dd>
                                </dl>
                            </div>
                            <div class="smartphone-top-Card_Price-point">
                                <p class="c-Txt_Normal">
                                    さらにキャンペーンで<br>
                                    <span class="c-Txt_Emp-02">
                                        {{ summary.txt1 }}<span class="smartphone-top-Card_Price-font">{{ displayPointBackPointsmartphone }}</span>{{ summary.txt2 }}<span class="c-Txt_Cap c-Txt_Emp-02">{{ summary['android-point-note']}}</span>
                                    </span>
                                </p>
                            </div>
                        </template>
                    </div>
                    <div>
                        <p v-if="summary['card-note']" class="c-Txt_Cap">{{ summary['card-note'] }}</p>
                    </div>
                </div>
            </template>
        </a>
    </li>
</template>


<script>
import {state, mutations} from './Store.js';

export default {
    name: 'Product',
    props: ['summary'],
    data () {
        return {
            path: {
                sitepath: '/',
                rootpath: '/',
                onboardingpath: 'https://onboarding.mobile.rakuten.co.jp/'
            },
            dir: '',
            state: state
        }
    },
    created() {
        const ua = window.navigator.userAgent.toLowerCase();
        if(ua.indexOf("windows nt") !== -1 ) {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('smartphone-top-Card_Win');
        }
        this.dir = this.getDir(this.urlParser());
    },
    computed: {
        isBatterySort () {
            return mutations.getSorter() === 'batteryDesc' ? true : false;
        },
        isDisplaySort () {
            return mutations.getSorter() === 'displayDesc' ? true : false;
        },
        isDateSort () {
            return mutations.getSorter() === 'dateDesc' ? true : false;
        },
        is5g () {
            return this.summary['flag-5g'].toString().trim() === '1' ? '5g' : null;
        },
        isIrregularNote () {
            return (directory) => {
                const irregularList = [
                    'xperia-10m3-lite',
                    'xperia-5m4',
                    'galaxy-z-flip4',
                    'reno7-a',
                    'redmi-note-11-pro-5g',
                    'aquos-sense6s'
                ];

                return irregularList.includes(directory);
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
        getColorcodeArray (colorcode) {
            return colorcode.split('/');
        },
        getColorChipStyle (color) {
            return `background: ${ color };`;
        },
        getColorChipClass (color) {
            return color.toUpperCase() === '#FFFFFF' || color.toUpperCase() === '#F5F5F5' ? 'color-white': '';
        },
        isPoint (point) {
            if(!point) return `font-size:26px;`;
        },
        urlParser () {
            const url = window.location.pathname;
            const arr = url.split('/');
            return arr[arr.length - 2];
        },
        getDir (elem) {
            if (elem === 'rakuten') {
                return 'rakuten';
            } else {
                return 'top';
            }
        }
    }
}
</script>
