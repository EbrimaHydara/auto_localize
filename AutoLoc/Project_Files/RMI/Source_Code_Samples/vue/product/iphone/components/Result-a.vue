<template>
<div id="js-result">
    <div class="product-iphone-Tradein_Resultwrap">
        <div class="u-Adjust_Align-center u-Adjust_Mt-32 c-Txt_Emp-02">
            <p class="c-Txt_Normal-s">{{ selectedCarrier }}</p>
            <p>Apple {{ selectedDevice }} {{ selectedMemory }}</p>
        </div>
        <div class="c-Table_Wrap u-Adjust_Mt-24">
            <table class="c-Table_Container product-iphone-Tradein_Table-pc">
                <tr>
                    <th>製品状態</th>
                    <td>良品</td>
                    <td>画面損傷品</td>
                    <td>外装損傷品</td>
                </tr>
                <tr v-for="(price, index) in priceList" :key="index">
                    <th>
                    下取り価格目安<br>
                    <span class="c-Txt_Weight-normal">（楽天キャッシュ
                    <button class="c-Tooltip product-iphone-Tradein_Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="楽天ペイなど、楽天のたくさんのサービスでご利用可能なオンライン電子マネーです。">
                        <span class="c-Icon_Stack c-Tooltip_Icon">
                            <span class="c-Icon_Sign-help-f c-Icon_Stack-icon-f"></span>
                            <span class="c-Icon_Sign-help-l c-Icon_Stack-icon-l"></span>
                        </span>
                    </button>）</span>
                    </th>
                    <td class="u-Adjust_Valign-middle u-Adjust_Align-right">
                        <span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.good_price | yenTtrim }}</span>円
                    </td>
                    <td class="u-Adjust_Valign-middle u-Adjust_Align-right">
                        <span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.fair_price | yenTtrim }}</span>円
                    </td>
                    <td class="u-Adjust_Valign-middle u-Adjust_Align-right">
                        <span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.poor_price | yenTtrim }}</span>円
                    </td>
                </tr>
            </table>

            <table class="c-Table_Container product-iphone-Tradein_Table-sp">
                <thead>
                    <tr>
                        <th>製品状態</th>
                        <th>
                        下取り価格目安<br>
                        <span class="c-Txt_Weight-normal">（楽天キャッシュ
                        <button class="c-Tooltip product-iphone-Tradein_Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="楽天ペイなど、楽天のたくさんのサービスでご利用可能なオンライン電子マネーです。">
                            <span class="c-Icon_Stack c-Tooltip_Icon">
                                <span class="c-Icon_Sign-help-f c-Icon_Stack-icon-f"></span>
                                <span class="c-Icon_Sign-help-l c-Icon_Stack-icon-l"></span>
                            </span>
                        </button>）</span>
                        </th>
                    </tr>
                </thead>
                <tbody v-for="(price, index) in priceList" :key="index">
                    <tr>
                        <td>良品</td>
                        <td class="u-Adjust_Align-right"><span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.good_price | yenTtrim }}</span>円</td>
                    </tr>
                    <tr>
                        <td>画面損傷品</td>
                        <td class="u-Adjust_Align-right"><span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.fair_price | yenTtrim }}</span>円</td>
                    </tr>
                    <tr>
                        <td>外装損傷品</td>
                        <td class="u-Adjust_Align-right"><span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.poor_price | yenTtrim }}</span>円</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="c-Txt_Cap u-Adjust_Mt-8">
            ※ {{ lastUpdate }}時点<br>
            ※ 製品の状態によっては下取り価格が下がる場合があります。<br>
            ※ 表示価格は税込です。<br>
            ※ <a href="https://cash.rakuten.co.jp/overview/" rel="noopener" target="_blank" class="c-Link_Txt-inline-icon">楽天キャッシュの詳細はこちら<span class="c-Icon_New-window-l"></span></a>をご覧ください。
        </p>

        <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
            <a
                :href="'/service/tradein/?l-id=product_' + deviceName + '_apply_service_tradein_a'"
                class="c-Btn_Primary-large"
            >
                <span>下取りのお申し込みに進む</span>
            </a>
            <a
                href="#"
                class="c-Btn_Regular u-Adjust_Mt-16"
                @click.prevent="priceReset()"
            ><span>他製品の下取り価格を確認する</span></a>
        </div>

    </div>
</div>
</template>

<script>
import {tooltip} from "../../../../js/common/component/tooltip";
export default {
    data() {
        return {
            result:''
        }
    },
    props: [
        'priceList',
        'selectedCarrier',
        'selectedDevice',
        'selectedMemory',
        'question',
        'lastUpdate',
        'tradeinOtherproduct',
        'deviceName',
    ],
    updated() {
        this.result.style.display = 'block';
    },
    methods: {
        priceReset() {
            const tradeintxt = document.getElementById('js-tradeintxt');
            tradeintxt.style.display = 'block';

            this.question.style.display = 'block';
            this.result.style.display = 'none';
            this.scrollTarget();
            this.tradeinOtherproduct.click();
        },
        scrollTarget() {
            const target = document.getElementById('js-content-top');
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const top =  rect.top + scrollTop;
            window.scrollTo(0, top);
        }
    },
    filters: {
        yenTtrim (value) {
            return value.split('¥')[1];
        }
    },
    mounted() {
      const tradeintxt = document.getElementById('js-tradeintxt');
      tradeintxt.style.display = 'none';

        this.$nextTick(() => {
            this.result = document.getElementById('js-result');
        });
        this.scrollTarget();
        tooltip();
    }
}
</script>
