<template>
    <div id="flowA2" class="l-hikari-Section_Sub-short">
        <div class="l-System_Container">
            <h2 class="c-Heading_Lv2">フレッツ光を利用している方（転用）</h2>
            <p class="u-Adjust_Mt-8">フレッツ光といずれかのプロバイダーを利用されている方が対象です。</p>
        </div>

        <AlertInfo
            controlId="accordion-content-flets-hikari"
            labelId="accordion-flets-hikari"
            btnLabel="「転用承諾番号」の取得方法"
            dataRatid="rhk_flow_accordion_02"
            title="お申し込みの前に必ず「転用承諾番号」を取得してください"
            :shadowRatElms="shadowRatElms"
        >
            <h4 class="c-Txt_Normal-l">「転用承諾番号」とは</h4>
            <p class="u-Adjust_Mt-8">フレッツ光をご利用中のお客様が光コラボ に切り替える際に必要な番号です。</p>
            <p class="u-Adjust_Mt-8">楽天ひかりに<span class="c-Txt_Emp-underline">お申し込みの前にお客様ご自身で</span>、NTT東日本・NTT西日本の下記窓口へご連絡いただき、「転用承諾番号」を取得してください。
            <div class="u-Adjust_Mt-32">
                <p class="c-Txt_Emp c-Txt_Normal-m">お手続きに必要なもの</p>
                <ul class="c-List_Text-disc u-Adjust_Mt-8">
                    <li>お客様ID（CAFもしくはCOP番号）、またはひかり電話番号</li>
                    <li>契約者名</li>
                    <li>設置先住所</li>
                    <li>支払い方法</li>
                </ul>
            </div>
            <div class="u-Adjust_Mt-32 c-Infobox_Standing-warning">
                <p class="c-Txt_Emp c-Txt_Normal-m">注意事項</p>
                <div class="hikari-flow-Grid_Txt-first u-Adjust_Mt-8">
                    <div class="hikari-flow-Grid_Txt-first-txt">
                        <p class="hikari-flow-Txt_Warning">有効期限は15日間で、期限が残り4日以上あればお申し込み可能です</p>
                        <p class="u-Adjust_Mt-8">4日未満の場合は、お客様ご自身で再度取得していただく必要があります。</p>

                        <p class="hikari-flow-Txt_Warning u-Adjust_Mt-16">転用承諾番号は11桁の英数字の番号です</p>
                        <p class="u-Adjust_Mt-8">申し込み時に入力間違いがある場合、正しい番号の確認に時間を要するため、利用開始が遅れる可能性があります。</p>
                    </div>
                    <div class="hikari-flow-Grid_Txt-first-image">
                        <img src="/assets/img/hikari/flow/img-number-diversion.png?210527" alt="固定英字1桁、有効期限4桁、発行番号6桁からなる番号※固定英字：E（東日本）もしくはW（西日本）">
                    </div>
                </div>
            </div>
            <div class="u-Adjust_Mt-32">
                <p class="c-Txt_Emp c-Txt_Normal-m">転用承諾番号の窓口</p>
                <div class="u-Adjust_Mt-16">
                    <a
                        href="#flets-hikari"
                        class="js-Modal c-Link_Txt-icon-front"
                        data-ratid="rhk_flow_modal_01"
                        data-ratevent="click"
                        data-ratparam="all"
                        @click="clickShadowRat"
                    >
                        <span class="c-Icon_Zoom-in-l"></span>お住まいの地域がNTT東日本／西日本どちらのエリアか確認する
                    </a>
                    <Modal id="flets-hikari" />
                </div>
                <div class="u-Adjust_Mt-32">
                    <div class="l-Media_Grid-half">
                        <div class="c-Infobox_Standing-white">
                            <h2 class="c-Heading_Lv3 u-Adjust_Align-center">NTT東日本</h2>
                            <div class="l-hikari-Section_Sub-content-middle">
                                <p class="c-Txt_Emp">電話</p>
                                <p><a href="tel:0120-140-202" :style="phoneStyle">0120-140-202</a></p>
                                <p class="c-Txt_Cap">受付時間 9:00〜17:00<br>土日・祝日も受付（年末年始を除く）</p>
                                <p class="c-Txt_Emp u-Adjust_Mt-16">Web</p>
                                <p class="u-Adjust_Mt-8">
                                    <a
                                        class="c-Btn_Regular hikari-flow_Btn"
                                        href="https://flets.com/app4/input/index/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-ratid="rhk_flets.com_01"
                                        data-ratevent="click"
                                        data-ratparam="all"
                                    >
                                        <span>光コラボレーション（転用）のお手続き<span class="c-Icon_New-window-l u-Adjust_Ml-8"></span></span>
                                    </a>
                                </p>
                                <p class="c-Txt_Cap u-Adjust_Mt-8">受付時間 8:30～22:00<br>土日・祝日も受付（年末年始を除く）</p>
                            </div>
                        </div>

                        <div class="c-Infobox_Standing-white">
                            <h2 class="c-Heading_Lv3 u-Adjust_Align-center">NTT西日本</h2>
                            <div class="l-hikari-Section_Sub-content-middle">
                                <p class="c-Txt_Emp">電話</p>
                                <p><a href="tel:0120-553-104" :style="phoneStyle">0120-553-104</a></p>
                                <p class="c-Txt_Cap">受付時間 9:00〜17:00<br>土日・祝日も受付（年末年始を除く）</p>
                                <p class="c-Txt_Emp u-Adjust_Mt-16">Web</p>
                                <p class="u-Adjust_Mt-8">
                                    <a
                                        class="c-Btn_Regular hikari-flow-Btn"
                                        href="https://flets-w.com/collabo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-ratid="rhk_flets-w.com_01"
                                        data-ratevent="click"
                                        data-ratparam="all"
                                    >
                                        <span>光コラボレーションモデルをご検討・ご利用中のお客様<span class="c-Icon_New-window-l u-Adjust_Ml-8"></span></span>
                                    </a>
                                </p>
                                <p class="c-Txt_Cap u-Adjust_Mt-8">受付時間 8:30～22:00<br>土日・祝日も受付（年末年始を除く）</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AlertInfo>

        <div class="l-System_Container">
            <ol class="c-hikari-Flow u-Adjust_Mt-32">
                <ListItem
                    title="1. お申し込み"
                    imgName="img01.png"
                >
                    <p>Webフォームより楽天ひかりにお申し込みください。<br>
                    お申し込みの際に契約者情報、<span class="c-Txt_Emp-underline">転用承諾番号</span>の入力が必要です。</p>
                    <p class="u-Adjust_Mt-24">
                        <a href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=mnocampaign" class="c-Btn_Primary-half" @click="clickAppModalRat"><span>楽天ひかりに申し込む</span></a>
                    </p>
                </ListItem>
                <ListItem
                    title="2. 確認のご連絡"
                    imgName="img02.png"
                >
                    <p>楽天ひかり工事受付センターからお客様へメールにてご連絡いたします。</p>
                    <p class="c-Txt_Cap u-Adjust_Mt-8">※ お申し込み情報に不備がある場合は、電話連絡をさせていただきます。</p>
                </ListItem>
                <ListItem
                    title="3. インターネット接続の設定"
                    imgName="img04.png"
                >
                    <p>あらかじめ郵送されている「アカウントのお知らせ」の内容に沿ってインターネット接続の設定をしてください。</p>
                    <p class="u-Adjust_Mt-24"><a href="/hikari/support/setting/router/?l-id=rhk_support_setting_router_01" data-ratid="rhk_support_setting_router_01" data-ratevent="click" data-ratparam="all" class="c-Btn_Regular-half"><span>インターネット接続方法を見る</span></a></p>
                </ListItem>
                <ListItem
                    title="4. ご利用開始"
                    imgName="img05.png?210527"
                >
                    <p>インターネット接続設定が完了しましたら、すぐに楽天ひかりの高速インターネットがご利用いただけます。</p>
                </ListItem>
            </ol>

            <EstimatedBox
                imgNamePc="img-opening-date-03-pc.png?220620"
                imgNameSp="img-opening-date-03-sp.png?220620"
            >
                <template v-slot:default>お申し込み日によって、開通日が異なります。<br>
                毎月1〜5日にお申し込みの場合、翌月1日開通。毎月6日〜15日にお申し込みの場合、翌月10日開通。毎月16日〜25日にお申し込みの場合、翌月20日開通。毎月26日〜31日にお申し込みの場合、翌々月1日開通です。</template>
                <template v-slot:cap>※ 地域によらず、お住まいの住居環境により、記載よりお時間をいただく場合がございます。<br>
                ※ 開通日を変更したい場合は、お申し込み後、楽天ひかり工事受付センターに電話にてご連絡ください。変更日の目安は、ご連絡をいただいてから10営業日（土日祝を除く）後になります。</template>
            </EstimatedBox>
        </div>
    </div>
</template>

<script>
import AlertInfo from './ui/AlertInfo.vue';
import ListItem from './ui/ListItem.vue';
import EstimatedBox from './ui/EstimatedBox.vue';
import Modal from './ui/Modaal.vue';
import { modalApp } from "../../../../js/hikari/common/modalapp";
import { tab } from "../../../../js/common/component/tab";

export default {
    components: {
        AlertInfo,
        ListItem,
        EstimatedBox,
        Modal,
    },
    props: ['phoneStyle', 'shadowRatElms'],
    methods: {
        clickShadowRat(e) {
            const ratId = e.target.getAttribute('data-ratid')
            const targetRat = this.shadowRatElms.filter(shadowRat => shadowRat.attributes[0].value === ratId)
            targetRat[0].click()
        },
        clickAppModalRat() {
            const target = document.getElementById('flow-app-modal-trigger')
            console.log(target)
            target.click()
        }
    },
    mounted() {
        modalApp($('#flow'))
        tab($('.g-hikari-Header_Modal').last())
    },
}
</script>
