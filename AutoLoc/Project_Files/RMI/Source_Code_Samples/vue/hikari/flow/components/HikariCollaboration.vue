<template>
    <div id="flowA3" class="l-hikari-Section_Sub-short">
        <div class="l-System_Container">
            <h2 class="c-Heading_Lv2">光コラボを利用している方（事業者変更）</h2>
            <p class="u-Adjust_Mt-8">光コラボ（ドコモ光、SoftBank 光、OCN 光、ビッグローブ光、So-net 光 プラス、ぷらら光、＠nifty光、エキサイト光 など）を利用されている方が対象です。</p>
        </div>

        <AlertInfo
            controlId="accordion-content-hikari-collaboration"
            labelId="accordion-hikari-collaboration"
            btnLabel="「事業者変更承諾番号」の取得方法"
            dataRatid="rhk_flow_accordion_03"
            title="お申し込みの前に必ず「事業者変更承諾番号」を取得してください"
            :shadowRatElms="shadowRatElms"
        >
            <h4 class="c-Txt_Normal-l">「事業者変更承諾番号」とは</h4>
            <p class="u-Adjust_Mt-8">ご契約中の光コラボ（SoftBank 光、ドコモ光、OCN 光、ぷらら光、ビッグローブ光、So-net 光 プラスなど）から他社の光コラボに変更する際に必要な番号です。</p>
            <p class="u-Adjust_Mt-8">楽天ひかりに<span class="c-Txt_Emp-underline">お申し込みの前にお客様ご自身で</span>、ご契約中の光コラボ事業者へご連絡いただき、「事業者変更承諾番号」を取得してください。</p>
            <div class="u-Adjust_Mt-32">
                <p class="c-Txt_Emp c-Txt_Normal-m">お手続きに必要なもの</p>
                <p class="u-Adjust_Mt-8">一般的には下記の情報が必要です。</p>
                <ul class="c-List_Text-disc u-Adjust_Mt-8">
                    <li>契約者名</li>
                    <li>お客様ID（CAFもしくはCOP番号）<span class="c-Txt_Cap">※NTT西日本のみ</span></li>
                </ul>
            </div>
            <div class="u-Adjust_Mt-32 c-Infobox_Standing-warning">
                <p class="c-Txt_Emp c-Txt_Normal-m">注意事項</p>
                <div class="hikari-flow-Grid_Txt-first u-Adjust_Mt-8">
                    <div class="hikari-flow-Grid_Txt-first-txt">
                        <p class="hikari-flow-Txt_Warning">有効期限は15日間で、期限が残り4日以上あればお申し込み可能です。</p>
                        <p class="u-Adjust_Mt-8">4日未満の場合は、お客様ご自身で再度取得していただく必要があります。</p>

                        <p class="hikari-flow-Txt_Warning u-Adjust_Mt-16">事業者変更承諾番号は11桁の英数字の番号です</p>
                        <p class="u-Adjust_Mt-8">申し込み時に入力間違いがある場合、正しい番号の確認に時間を要するため、利用開始が遅れる可能性があります。</p>

                        <p class="hikari-flow-Txt_Warning hikari-flow-Util_Display-pc u-Adjust_Mt-16">契約中の光コラボ事業者と、楽天ひかりの契約は同一契約名義・同一設置先である必要があります</p>
                    </div>
                    <div class="hikari-flow-Grid_Txt-first-image">
                        <img src="/assets/img/hikari/flow/img-number.png?211207" alt="エリア番号1桁、承諾期限4桁、発行番号6桁からなる番号※エリア番号：F（東日本）もしくはT（西日本）">
                    </div>
                        <p class="hikari-flow-Txt_Warning hikari-flow-Util_Display-sp u-Adjust_Mt-16">契約中の光コラボ事業者と、楽天ひかりの契約は同一契約名義・同一設置先である必要があります</p>
                </div>
            </div>
            <div class="u-Adjust_Mt-32">
                <div class="hikari-flow-Grid_Txt-first">
                    <div class="hikari-flow-Grid_Txt-first-txt">
                        <p class="c-Txt_Emp c-Txt_Normal-m">お客様IDの取得（NTT西日本エリアのみ）</p>
                        <p class="u-Adjust_Mt-8">NTT西日本エリアのお客様はCAFか、COPから始まるお客様IDの取得も必要です。</p>
                        <a
                            href="#modal-hikari-collaboration"
                            class="js-Modal c-Link_Txt-icon-front u-Adjust_Mt-16"
                            data-ratid="rhk_flow_modal_02"
                            data-ratevent="click"
                            data-ratparam="all"
                            @click="clickShadowRat"
                        >
                            <span class="c-Icon_Zoom-in-l"></span>お住まいの地域がNTT東日本／西日本どちらのエリアか確認する
                        </a>
                        <Modal id="modal-hikari-collaboration" />
                    </div>
                    <div class="hikari-flow-Grid_Txt-first-image">
                        <img src="/assets/img/hikari/flow/img-caf.png?211207" alt="お客様IDの例">
                    </div>
                </div>
                <div class="u-Adjust_Mt-32">
                    <p class="c-Txt_Emp c-Txt_Normal-m">事業者変更承諾番号の主な問い合わせ先一覧</p>
                    <div class="c-Table_Wrap-scroll u-Adjust_Mt-16 js-scrollable scroll-hint js-scrollable">
                        <table class="c-Table_Container hikari-flow-Table">
                            <colgroup>
                                <col width="177">
                                <col width="265">
                                <col width="358">
                                <col width="235">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">サービス名</th>
                                    <th scope="col">運営会社</th>
                                    <th scope="col">取得連絡先</th>
                                    <th scope="col">受付時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ドコモ光</th>
                                    <td>株式会社NTTドコモ</td>
                                    <td>ドコモ携帯電話の場合 <a href="tel:151" :style="phoneStyleSM">151</a><br>
                                    一般電話などの場合 <a href="tel:0120-800-000" :style="phoneStyleSM">0120-800-000</a></td>
                                    <td>9:00～20:00（年中無休）</td>
                                </tr>
                                <tr>
                                    <th scope="row">SoftBank 光</th>
                                    <td>ソフトバンク株式会社</td>
                                    <td><a href="tel:0800-111-6710" :style="phoneStyleSM">0800-111-6710</a></td>
                                    <td>10:00～19:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">OCN 光</th>
                                    <td>エヌ・ティ・ティコミュニケーションズ株式会社</td>
                                    <td><a href="tel:0120-506-506" :style="phoneStyleSM">0120-506-506</a></td>
                                    <td>10:00〜18:00（日曜・祝日・年末年始を除く）</td>
                                </tr>
                                <tr>
                                    <th scope="row">ぷらら光</th>
                                    <td>株式会社NTTぷらら</td>
                                    <td>固定電話の場合 <a href="tel:009192-33" :style="phoneStyleSM">009192-33</a><br>
                                    ひかり電話の場合 <a href="tel:0120-971-391" :style="phoneStyleSM">0120-971-391</a><br>
                                    携帯電話の場合 <a href="tel:050-7560-0033" :style="phoneStyleSM">050-7560-0033</a></td>
                                    <td>10:00～19:00（年中無休）</td>
                                </tr>
                                <tr>
                                    <th scope="row">ビッグローブ光</th>
                                    <td>ビッグローブ株式会社</td>
                                    <td>固定電話の場合 <a href="tel:0120-907-505" :style="phoneStyleSM">0120-907-505</a><br>
                                    携帯電話・IP電話の場合 <a href="tel:03-6479-5716" :style="phoneStyleSM">03-6479-5716</a></td>
                                    <td>9:00～18:00（年中無休）</td>
                                </tr>
                                <tr>
                                    <th scope="row">So-net 光 プラス</th>
                                    <td>ソニーネットワークコミュニケーションズ株式会社</td>
                                    <td><a href="tel:0120-45-2522" :style="phoneStyleSM">0120-45-2522</a></td>
                                    <td>9:00～18:00（1月1日・2日を除く）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p class="c-Txt_Cap u-Adjust_Mt-8">※ 取得連絡先や受付時間が変更されている場合があります。詳しくは各事業者へお問い合わせください。</p>
                <p class="c-Txt_Cap">※ 2021年11月10日（水）現在 当社調べ</p>
            </div>
        </AlertInfo>

        <div class="l-System_Container">
            <ol class="c-Flow u-Adjust_Mt-32">
                <ListItem
                    title="1. お申し込み"
                    imgName="img01.png?211207"
                >
                    <p>Webフォームより楽天ひかりにお申し込みください。<br>
                    お申し込みの際に契約者情報、<span class="c-Txt_Emp-underline">事業者変更承諾番号</span>の入力が必要です。</p>
                    <p class="u-Adjust_Mt-24">
                        <a href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=mnocampaign" data-ratid="rhk_application_02" data-ratevent="click" data-ratparam="all" class="c-Btn_Primary"><span>楽天ひかりに申し込む</span></a>
                    </p>
                </ListItem>
                <ListItem
                    title="2. 確認のご連絡"
                    imgName="img02.png?211207"
                >
                    <p>楽天ひかり工事受付センターからお客様へメールにてご連絡いたします。</p>
                    <p class="c-Txt_Cap u-Adjust_Mt-8">※ お申し込み情報に不備がある場合は、電話連絡をさせていただきます。</p>
                </ListItem>
                <ListItem
                    title="3. インターネット接続の設定"
                    imgName="img04.png?211207"
                >
                    <p>あらかじめ郵送されている「アカウントのお知らせ」の内容に沿ってインターネット接続の設定をしてください。</p>
                    <p class="u-Adjust_Mt-24"><a href="/hikari/support/setting/router/?l-id=rhk_support_setting_router_02" data-ratid="rhk_support_setting_router_02" data-ratevent="click" data-ratparam="all" class="c-Link_Txt-inline">インターネット接続方法を見る<span class="c-Icon_Chevron-right"></span></a></p>
                </ListItem>
                <ListItem
                    title="4. ご利用開始"
                    imgName="img05.png?211207"
                >
                    <p>インターネット接続設定が完了しましたら、すぐに楽天ひかりの高速インターネットがご利用いただけます。</p>
                </ListItem>
            </ol>

            <EstimatedBox
                imgNamePc="img-opening-date-03-pc.png?220620"
                imgNameSp="img-opening-date-03-sp.png?220620"
            >
                <template v-slot:default>
                    開通までは約1カ月です。<br>
                    ただし、お住まいの環境により1カ月以上かかる場合があります。
                </template>
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
    props: ['phoneStyle', 'phoneStyleSM', 'shadowRatElms'],
    methods: {
        clickShadowRat(e) {
            const ratId = e.target.getAttribute('data-ratid')
            const targetRat = this.shadowRatElms.filter(shadowRat => shadowRat.attributes[0].value === ratId)
            targetRat[0].click()
        }
    },
    mounted() {
        modalApp()
        tab($('.g-hikari-Header_Modal').last())
    },
}
</script>
