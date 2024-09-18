<template>
<div>
    <div class="c-Table_Wrap u-Adjust_Mt-24" id="js-content-top">
        <table :class="`c-Table_Container ${namespace}-Tradein_ResultTable`">
            <thead>
                <tr>
                    <th>製品状態<br><a :href="`/service/tradein/?l-id=product_smartphone_${directory}_criteria_service_tradein`" class="c-Link_Txt c-Txt_Weight-normal">査定基準を見る</a></th>
                    <th>下取り価格目安<br><span class="c-Txt_Weight-normal">（楽天キャッシュ
                    <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="楽天ペイなど、楽天のたくさんのサービスでご利用可能なオンライン電子マネーです。" style="vertical-align: text-bottom;">
                        <span class="c-Icon_Stack c-Tooltip_Icon">
                            <span class="c-Icon_Sign-help-f c-Icon_Stack-icon-f"></span>
                            <span class="c-Icon_Sign-help-l c-Icon_Stack-icon-l"></span>
                        </span>
                    </button>）</span></th>
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
                    <td>外装損傷・機能不具合品</td>
                    <td class="u-Adjust_Align-right"><span class="c-Txt_Normal-l c-Txt_Emp-01">{{ price.poor_price | yenTtrim }}</span>円</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="c-Txt_Cap u-Adjust_Mt-8">
        ※ {{ lastUpdate }}時点 ※ 製品の状態によっては下取り価格が下がる場合があります。 査定結果に変更がある場合でも、お申し込み後にキャンセルを行うことはできません。再査定や写真による結果のご提供はできませんので、あらかじめご了承ください。※ 査定後の価格が0円の場合は下取り不成立とし、ご送付いただいた製品は返送いたします。※ 価格が「-」と表示されるものは下取り対象外となります。
    </p>
</div>
</template>

<script>
import {tooltip} from "../../../../../js/common/component/tooltip";
export default {
    data() {
        return {
            namespace: 'product-detail-b',
        }
    },
    props: [
        'directory',
        'priceList',
        'selectedCarrier',
        'selectedMaker',
        'selectedDevice',
        'selectedMemory',
        'lastUpdate'
    ],
    filters: {
        yenTtrim (value) {
            const price = value.split('¥')[1];
            return (price === 0 || price.trim() === '-') ? '-' : price
        }
    },
    mounted() {
        tooltip();
    }
}
</script>
