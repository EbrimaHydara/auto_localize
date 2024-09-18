<template>
    <div id="flowA1" class="l-hikari-Section_Sub-short l-System_Container">
        <h2 class="c-Heading_Lv2">新規契約の方</h2>

        <div class="l-hikari-Section_Sub-content-middle">
            <p>以下のいずれかに当てはまる方が対象です。</p>
            <ul class="c-List_Text-disc u-Adjust_Mt-8">
                <li>その他の光回線（auひかり、NURO 光、J:COM光、eo光、コミュファ光 、ケーブルテレビインターネット、電力系光回線 等）を利用している</li>
                <li>ポケットWi-Fiやテザリングを利用している</li>
                <li>ADSL回線を利用している</li>
                <li>インターネット回線を利用していない</li>
            </ul>

            <ol class="c-hikari-Flow u-Adjust_Mt-32">
                <ListItem
                    title="1. お申し込み"
                    imgName="img01.png"
                >
                    <p>Webフォームより楽天ひかりをお申し込みください。</p>
                    <p class="u-Adjust_Mt-24">
                        <a href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=mnocampaign" class="c-Btn_Primary-half" @click="clickAppModalRat"><span>楽天ひかりに申し込む</span></a>
                    </p>
                </ListItem>
                <ListItem
                    title="2. 工事日程などのご連絡"
                    imgName="img02.png"
                >
                    <p>お申し込みから1～3日後、楽天工事受付センターからお客様へ、回線調査結果や開通工事の日程などについて確認のご連絡をいたします。</p>
                    <ul class="c-List_Cap u-Adjust_Mt-8">
                        <li><span>※</span>地域によらず、お住まいの住居環境により、記載よりお時間をいただく場合がございます。</li>
                    </ul>
                    <div class="c-Infobox_Standing-warning l-hikari-Section_Sub-content-middle">
                        <p class="hikari-flow-Txt_Warning">事前に建物管理者様の承諾が必要です</p>
                        <p class="u-Adjust_Mt-16">新規で光回線を敷設する方は開通工事が必要です。設置場所の状況により、壁に1cmほどの穴をあける可能性があります。<br>建物所有者様（管理会社等）に、事前にご承諾いただいてください。</p>
                    </div>
                </ListItem>
                <ListItem
                    title="3. 開通工事"
                    imgName="img03.png"
                >
                    <dl>
                        <dt class="c-Txt_Emp">工事が必要な場合</dt>
                        <dd class="u-Adjust_Mt-8">
                            <p>NTT東日本・NTT西日本の作業員がお伺いいたします。</p>
                            <p class="u-Adjust_Mt-16">工事に際してのお願い</p>
                            <ul class="c-List_Text-disc u-Adjust_Mt-8">
                                <li>工事の際は立ち会いをお願いします。</li>
                                <li>事前に電源タップの確保をお願いします。</li>
                            </ul>
                        </dd>
                        <dt class="c-Txt_Emp u-Adjust_Mt-32">工事が不要な場合</dt>
                        <dd class="u-Adjust_Mt-8">
                            お住まいの集合住宅がフレッツ光導入済みで光回線の引き込み工事が不要な場合はお客様ご自身で機器の設定をしてください。
                            <p class="u-Adjust_Mt-16"><a href="/hikari/flow/construction/?l-id=rhk_flow_construction_01" data-ratid="rhk_flow_construction_01" data-ratevent="click" data-ratparam="all" class="c-Btn_Regular-half"><span>開通工事を見る</span></a></p>
                        </dd>
                    </dl>
                </ListItem>
                <ListItem
                    title="4. インターネット接続の設定"
                    imgName="img04.png"
                >
                    <p>工事が完了しましたら、あらかじめ郵送されているアカウントのお知らせの内容に沿ってインターネット接続の設定をしてください。</p>
                    <p class="u-Adjust_Mt-24"><a href="/hikari/support/setting/router/?l-id=rhk_support_setting_router_03" data-ratid="rhk_support_setting_router_03" data-ratevent="click" data-ratparam="all" class="c-Btn_Regular-half"><span>インターネット接続方法を見る</span></a></p>
                </ListItem>
                <ListItem
                    title="5. ご利用開始"
                    imgName="img05.png?210527"
                >
                    <p>インターネット接続設定が完了しましたら、すぐに楽天ひかりの高速インターネットがご利用いただけます。</p>
                </ListItem>
            </ol>
        </div>
        <EstimatedBox
            imgNamePc="img-opening-date-01-pc.png?210527"
            imgNameSp="img-opening-date-01-sp.png?210527"
        >
            <template v-slot:default>楽天ひかりにお申し込みいただいた日から約1カ月後に開通します。</template>
            <template v-slot:cap>※ 地域によらず、お住まいの住居環境により、記載よりお時間をいただく場合がございます。</template>
        </EstimatedBox>
    </div>
</template>

<script>
import ListItem from './ui/ListItem.vue';
import EstimatedBox from './ui/EstimatedBox.vue';
import { modalApp } from "../../../../js/hikari/common/modalapp";
import { tab } from "../../../../js/common/component/tab";

export default {
    components: {
        ListItem,
        EstimatedBox,
    },
    methods: {
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
