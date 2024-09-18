<template>
    <li v-if="isDisplay">
        <a :href="`${ path.sitepath }product/smartphone/${ summary.directory }/?l-id=service_replacement-program_product_smartphone_${ summary.directory }`" class="c-Card_Normal">
            <div>
                <ul class="service-replacement-program-Card_Label">
                    <li v-if="summary.new" class="service-replacement-program-Card_Label-new-sale">NEW</li>
                    <li v-if="summary.releasetext" class="service-replacement-program-Card_Label-basic">{{summary.releasetext}}</li>
                    <li v-if="summary.basictext" class="service-replacement-program-Card_Label-special">{{summary.basictext}}</li>
                </ul>
            </div>
            <template>
                <div class="service-replacement-program-Card_Product">
                    <figure class="u-Adjust_Align-left">
                        <img :src="`${ path.sitepath }assets/img/product/${ summary.directory }/pht-device-thumb.png?${summary.update.split('/').join('')}`" :alt="summary.product" height="130" loading="lazy">
                    </figure>
                    <div>
                        <p v-show="isBatterySort"
                            class="service-replacement-program-Card_Spec">
                            バッテリー容量：{{ summary.battery | addComma }}mAh
                        </p>
                        <p v-show="isDisplaySort"
                            class="service-replacement-program-Card_Spec">
                            画面サイズ：約{{ summary.display }}インチ
                        </p>
                        <p class="service-replacement-program-Card_Spec">
                            <span v-if="summary.release" v-show="isDateSort">
                                発売日：{{ summary.release | ymdJaJp }}
                            </span>
                        </p>
                        <h3 class="service-replacement-program-Card_Name">{{ summary.product }}</h3>
                        <dl class="u-Adjust_Mt-8 service-replacement-program-Card_Price-box">
                            <dt class="u-Adjust_Mr-8 c-Txt_Normal-s">製品価格</dt>
                            <dd>
                                <span v-if="summary.strikethrough">
                                    <span class="service-replacement-program-Card_Price-strikethrough service-replacement-program-Card_Price-font-normal">{{ summary.strikethrough | addComma }}</span>
                                    <span v-if="isIrregularNote(summary.directory)" class="service-replacement-program-Card_Price-strikethrough-yen">円<span class="c-Txt_Cap">※</span> <span class="c-Txt_Normal-s">→</span></span>
                                </span>
                                <span class="service-replacement-program-Card_Price-font-normal" :style="isPoint(summary.pointtotal)">{{ summary.price2 | addComma }}</span><span class="c-Txt_Normal-s">円</span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div v-if="summary.price2">
                    <template v-if="summary['replacement-flag']">
                        <div class="service-replacement-program-Card_Campaign">
                            <p class="u-Align_Ccc">さらにキャンペーンで</p>
                            <dl class="u-Adjust_Mt-16">
                                <div class="service-replacement-program-Card_Price-emp02 c-Txt_Normal-s">
                                    <dt>
                                        プランセット値引き<span class="c-Txt_Cap">※6</span>
                                    </dt>
                                    <dd>
                                        <span class="service-replacement-program-Card_Price-font c-Txt_Normal-m">-{{ summary.discountprice | addComma }}</span>円
                                    </dd>
                                </div>
                                <div class="service-replacement-program-Card_Price-emp02 c-Txt_Normal-s">
                                    <dt>
                                        <span v-if="summary.txt1">{{ summary.txt1 }}</span>{{ displayPointBackPointsmartphone }}ポイント還元<span class="c-Txt_Cap">※3,7</span>
                                    </dt>
                                    <dd>
                                        <span class="service-replacement-program-Card_Price-font c-Txt_Normal-m">-{{ displayPointBackPointsmartphone }}</span>pt
                                    </dd>
                                </div>
                            </dl>
                            <p class="service-replacement-program-Card_Campaign-total">
                                <span class="c-Txt_Normal">実質</span><span class="service-replacement-program-Card_Price-font">{{ displayNetpaymentsmartphone }}</span><span class="c-Txt_Normal">円</span>
                            </p>
                        </div>
                    </template>
                    <template v-else>
                        <div class="service-replacement-program-Card_Price-detail-48">
                            <p class="c-Txt_Emp-01 u-Adjust_Align-center c-Txt_Normal">48回払い<br><span class="c-Txt_Normal-s service-replacement-program-Card_Sub-title">（楽天モバイル買い替え超トクプログラム）<span class="c-Txt_Cap">{{ summary['replacement-48-note']}}</span></span></p>
                            <dl>
                                <dt>月々の支払分</dt>
                                <dd class="c-Txt_Normal"><span class="service-replacement-program-Card_Price-font service-replacement-program-Card_Price-detail-48-monthly">{{ displayPayment48 }}</span>円</dd>
                            </dl>
                            <dl>
                                <dt>25カ月目に返却した<br>場合の支払い総額</dt>
                                <dd class="c-Txt_Emp-02 c-Txt_Normal"><span class="service-replacement-program-Card_Price-font service-replacement-program-Card_Price-detail-48-upgrade">{{ displayPaymentUpgrade }}</span>円</dd>
                            </dl>
                        </div>
                        <div class="service-replacement-program-Card_Price-point">
                            <p class="c-Txt_Normal">
                                さらにキャンペーンで<br>
                                <span class="c-Txt_Emp-02">
                                    {{ summary.txt1 }}<span class="service-replacement-program-Card_Price-font">{{ displayPointBackPointsmartphone }}</span>{{ summary.txt2 }}<span class="c-Txt_Cap c-Txt_Emp-02">{{ summary['replacement-point-note']}}</span>
                                </span>
                            </p>
                        </div>
                    </template>
                </div>
                <div>
                    <p v-if="summary['card-note']" class="c-Txt_Cap">{{ summary['card-note'] }}</p>
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
            body.classList.add('service-replacement-program-Card_Win');
        }
        this.dir = this.getDir(this.urlParser());
    },
    computed: {
        isDisplay() {
            return this.summary['replacement-flag'].toString().trim() === '1' ? false : true;
        },
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
        limitedTimeNote () {
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
            return (+this.summary.price4 * 24).toLocaleString()
        },
        displayPointBackPointsmartphone() {
            return (+this.summary.pointtotal).toLocaleString()
        },
        displayNetpaymentsmartphone() {
            return (+this.summary.netpayment).toLocaleString()
        },
    },
    methods: {
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
