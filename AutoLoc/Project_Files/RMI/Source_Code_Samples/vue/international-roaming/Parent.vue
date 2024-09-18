<template>
    <div>
        <CountryList :country-data="roamingData" @countryChange="selectCountry"></CountryList>
        <SelectMobile :mobileData="targetMobiles" @selectMobile="selectMobile" @selectMaker="selectMaker"></SelectMobile>
        <div class="u-Adjust_Mt-64 u-Adjust_Align-center">
            <button
                class="c-Btn_Primary-large"
                :aria-disabled="selectedCountry && selectedMobile ? false : true"
                :aria-current="isPressed ? true : false"
                @click="checkUtilizationSituation"
            >
                <span>利用可否・料金を確認する</span>
            </button>
        </div>
        <template v-if="isPressed && selectedCountry && selectedMobile">
            <div class="c-Theme-Borderbox u-Adjust_Mt-64">
                <template v-if="isSupported">
                    <h2 class="c-Heading_Lv2">選択された国の対応状況</h2>
                    <p class="u-Adjust_Mt-16">海外ローミング（データ通信）は海外ローミングエリア2GBの高速データ容量を消費します。</p>

                    <dl class="c-Dl_Origin u-Adjust_Mt-16">
                        <div>
                            <dt>渡航先</dt>
                            <dd>{{ selectedCountry[0].detail.Country_JP }}</dd>
                        </div>
                        <div>
                            <dt>選択した製品</dt>
                            <dd>{{ selectedMobile }}</dd>
                        </div>
                    </dl>
                    <p v-if="isRemarkTarget(selectedCountry[0].detail.Country_JP, selectedMobile)" class="c-Txt_Cap u-Adjust_Mt-8">※T-mobileの通信事情により、一部地域で接続できない場合があります。</p>

                    <div class="c-Accordion u-Adjust_Mt-32">
                        <button type="button" id="accordion-1" class="c-Accordion_Trigger js-Accordion_Trigger" aria-expanded="true" aria-controls="accordion-content-1"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>データ通信</button>
                        <div id="accordion-content-1" class="c-Accordion_Panel js-Accordion_Panel" role="Region" aria-labelledby="accordion-1" aria-hidden="false">
                            <p class="c-Txt_Cap">
                                ※現地事業者の通信事情により一部地域で接続できない場合があります。<br>
                                お客様が渡航先の通信事業者の通信事情により本サービスをご利用いただけない場合があっても、当社は一切の責任を負いません。
                            </p>
                            <p class="c-Txt_Cap">※事業者名はご利用のデバイスによって表示が異なります。</p>
                            <div class="c-Table u-Adjust_Mt-16">
                                <div class="c-Table_Wrap-scroll js-Scrollable scroll-hint">
                                <table class="c-Table_Container roaming-Layout_Table roaming-Layout_Table-scroll">
                                    <colgroup>
                                        <col width="20%">
                                        <col width="20%">
                                        <col width="20%">
                                        <col width="20%">
                                        <col width="20%">
                                    </colgroup>
                                    <tr>
                                        <th scope="col">事業者名</th>
                                        <th scope="col">2G</th>
                                        <th scope="col">3G</th>
                                        <th scope="col">4G</th>
                                        <th scope="col">5G</th>
                                    </tr>
                                    <tr v-for="(country, countryKey) in selectedCountry" :key="countryKey">
                                        <td>
                                            {{ country.detail.Network_Display_Name_on_Handset }}
                                            <span class="c-Txt_Cap" v-if="isIndia()">※5</span>
                                        </td>
                                        <td v-if="country.detail[selectedMobile].split('/')[2] >= 1" class="roaming-Layout_Txt-emp">
                                            <span>2GBまで</span>
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                            <span class="c-Txt_Normal-s c-Txt_Weight-normal">※1</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                        </td>
                                        <td v-if="country.detail[selectedMobile].split('/')[1] >= 1" class="roaming-Layout_Txt-emp">
                                            <span>2GBまで</span>
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                            <span class="c-Txt_Normal-s c-Txt_Weight-normal">※1</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                        </td>
                                        <td v-if="country.detail[selectedMobile].split('/')[0] >= 1" class="roaming-Layout_Txt-emp">
                                            <span>2GBまで</span>
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                            <span class="c-Txt_Normal-s c-Txt_Weight-normal">※1</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                        </td>
                                        <td v-if="country.detail[selectedMobile].split('/')[7] >= 1" class="roaming-Layout_Txt-emp">
                                            <span>2GBまで</span>
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                            <span class="c-Txt_Normal-s c-Txt_Weight-normal">※1</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            </div>
                            <p class="c-Txt_Cap u-Adjust_Mt-16">※1 「Rakuten最強プラン」プラン料金に含む。2GB超過後は、海外ローミングエリアでの通信速度が最大128kbpsに制限されます。 データ容量を追加したい場合は、my 楽天モバイルから500円（不課税）／1GBでデータチャージ可能です。</p>
                            <p class="c-Txt_Cap" v-if="isIndia()">※5 一部の州・連邦直轄領では、現地事業者の通信事情によりご利用いただけない地域がございます</p>
                        </div>
                    </div>
                    <div class="c-Accordion">
                        <button type="button" id="accordion-2" class="c-Accordion_Trigger js-Accordion_Trigger" aria-expanded="false" aria-controls="accordion-content-2"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>Rakuten Linkアプリ同士の国際通話・国際SMS</button>
                        <div id="accordion-content-2" class="c-Accordion_Panel js-Accordion_Panel" role="Region" aria-labelledby="accordion-2" aria-hidden="true">
                            <p>自分も相手もRakuten Linkアプリを使用している場合</p>
                            <div class="c-Table u-Adjust_Mt-16">
                                <div class="c-Table_Wrap-scroll js-Scrollable scroll-hint">
                                <table class="c-Table_Container roaming-Layout_Table roaming-Layout_Table-scroll">
                                    <tr>
                                        <th rowspan="2" colspan="2"></th>
                                        <th scope="col">国際通話</th>
                                        <th scope="col">国際SMS</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" class="roaming-Layout_Txt-emp roaming-Layout_Th-emp">
                                            Rakuten Link<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">円（不課税）／30秒</span>
                                        </th>
                                        <th scope="col" class="roaming-Layout_Txt-emp roaming-Layout_Th-emp">
                                            Rakuten Link<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">円（不課税）／70文字（全角半角問わず）</span>
                                        </th>
                                    </tr>
                                    <tr v-for="(country, countryKey) in selectedCountry" :key="countryKey">
                                        <td v-if="countryKey == 0" :rowspan="selectedCountry.length">事業者名</td>
                                        <td>
                                            {{ country.detail.Network_Display_Name_on_Handset }}
                                            <span class="c-Txt_Cap" v-if="isIndia()">※5</span>
                                        </td>
                                        <td colspan="2">{{ country.detail[selectedMobile].split('/')[0] >= 1 || country.detail[selectedMobile].split('/')[1]  >= 1 || country.detail[selectedMobile].split('/')[2]  >= 1 || country.detail[selectedMobile].split('/')[7]  >= 1? '対応' : '非対応' }}</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2">利用料金</td>
                                        <td>発信 / 送信料金</td>
                                        <td v-if="isLinkPrice()" class="roaming-Layout_Txt-emp">
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                        </td>
                                        <td v-else>非対応</td>
                                        <td v-if="isLinkPrice()" class="roaming-Layout_Txt-emp">
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                        </td>
                                        <td v-else>非対応</td>
                                    </tr>
                                    <tr>
                                        <td>着信 / 受信料金</td>
                                        <td v-if="isLinkPrice()" class="roaming-Layout_Txt-emp">
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                        </td>
                                        <td v-else>非対応</td>
                                        <td v-if="isLinkPrice()" class="roaming-Layout_Txt-emp">
                                            <span class="c-Txt_Normal-l">0</span>
                                            <span class="c-Txt_Normal-m">円</span>
                                        </td>
                                        <td v-else>非対応</td>
                                    </tr>
                                </table>
                                </div>
                                <p class="c-Txt_Cap u-Adjust_Mt-16" v-if="isIndia()">※5 一部の州・連邦直轄領では、現地事業者の通信事情によりご利用いただけない地域がございます</p>
                            </div>
                        </div>
                    </div>
                    <div class="c-Accordion">
                        <button type="button" id="accordion-3" class="c-Accordion_Trigger js-Accordion_Trigger" aria-expanded="false" aria-controls="accordion-content-3"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>Rakuten Linkアプリ以外との国際通話・国際SMS</button>
                        <div id="accordion-content-3" class="c-Accordion_Panel js-Accordion_Panel" role="Region" aria-labelledby="accordion-3" aria-hidden="true">
                            <p>自分はRakuten Linkアプリ、または通常のアプリを使用し、相手がRakuten Link以外を使用している場合</p>
                            <h3 class="c-Heading_Lv4 u-Adjust_Mt-16">国際通話</h3>
                            <div class="c-Table u-Adjust_Mt-16">
                                <div class="c-Table_Wrap-scroll js-Scrollable scroll-hint">
                                <table class="c-Table_Container roaming-Layout_Table roaming-Layout_Table-scroll">
                                    <colgroup>
                                        <col width="15%">
                                        <col width="15%">
                                        <col width="20%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <th colspan="3" rowspan="2"></th>
                                        <th scope="col" colspan="2">国際通話</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" class="roaming-Layout_Txt-emp roaming-Layout_Th-emp">
                                            Rakuten Link<br>
                                            <span class="c-Txt_Weight-normal c-Txt_Normal-s roaming-Layout_Word-keep">円（不課税）／30秒</span>
                                        </th>
                                        <th scope="col">
                                            OS標準のアプリ<br>
                                            <span class="c-Txt_Weight-normal c-Txt_Normal-s roaming-Layout_Word-keep">円（不課税）／1分</span>
                                        </th>
                                    </tr>
                                    <tr v-for="(country, countryKey) in selectedCountry" :key="countryKey">
                                        <td v-if="countryKey == 0" :rowspan="selectedCountry.length">事業者名</td>
                                        <td colspan="2">
                                            {{ country.detail.Network_Display_Name_on_Handset }}
                                            <span class="c-Txt_Cap" v-if="isIndia()">※{{ 6 + countryKey }}</span>
                                        </td>
                                        <td v-if="country.detail[selectedMobile].split('/')[0] >= 1 || country.detail[selectedMobile].split('/')[1] >= 1 || country.detail[selectedMobile].split('/')[2] >= 1 || country.detail[selectedMobile].split('/')[7] >= 1">
                                            対応
                                            <span class="c-Txt_Cap" v-if="isIos('support')">※2</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                        </td>
                                        <td>
                                            {{ country.detail[selectedMobile].split('/')[3] >= 1 ? '対応' : '非対応' }}
                                            <span v-if="isTmobileRule(country)&&!isVolteRule(country)" class="c-Txt_Cap">※9</span>
                                            <span v-else-if="!isTmobileRule(country)&&isVolteRule(country)" class="c-Txt_Cap">※10</span>
                                            <span v-else-if="isTmobileRule(country)&&isVolteRule(country)" class="c-Txt_Cap">※9,10</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4">利用料金</td>
                                        <td rowspan="3">発信料金</td>
                                        <td>海外から現地の電話番号へかける</td>
                                        <td>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else >{{ convertSelectedCountryAllData("Link_Call_Local (30 sec)") }}円</span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(3,"Native_Call_Local (min)") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>海外から日本の電話番号へかける</td>
                                        <td>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else class="c-Txt_Normal-l roaming-Layout_Txt-emp" >{{ convertSelectedCountryAllData("Link_Call_Japan_Free") }}<span class="c-Txt_Normal-m">円</span></span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(3,"Native_Call_Japan (min)") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>海外からその他の国の電話番号へかける</td>
                                            <td>
                                                <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                                <span v-else><a href="/guide/international-call/overseas/">国・地域別従量課金</a></span>
                                            </td>
                                        <td>
                                            {{ convertSelectedCountry(3,"Native_Call_RoW (min)") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">着信料金</td>
                                        <td v-if="isIos()">
                                            利用不可
                                            <span class="c-Txt_Cap">※3</span>
                                        </td>
                                        <td v-else>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else class="c-Txt_Normal-l roaming-Layout_Txt-emp" >{{ convertSelectedCountryAllData("Link_Call_MT_Free") }}<span class="c-Txt_Normal-m">円</span></span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(3,"Native_Call_MT (min)") }}
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            </div>

                            <h3 class="c-Heading_Lv4 u-Adjust_Mt-16">国際SMS</h3>
                            <div class="c-Table u-Adjust_Mt-16 u-Adjust_Mb-16">
                                <div class="c-Table_Wrap-scroll js-Scrollable scroll-hint">
                                <table class="c-Table_Container roaming-Layout_Table roaming-Layout_Table-scroll">
                                    <colgroup>
                                        <col width="15%">
                                        <col width="15%">
                                        <col width="20%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <th colspan="3" rowspan="2"></th>
                                        <th scope="col" colspan="2">国際SMS</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" class="roaming-Layout_Txt-emp roaming-Layout_Th-emp">
                                            Rakuten Link<br>
                                            <span class="c-Txt_Weight-normal c-Txt_Normal-s roaming-Layout_Word-keep">円（不課税）／70文字（全角半角問わず）</span>
                                        </th>
                                        <th scope="col">
                                            OS標準のアプリ<br>
                                            <span class="c-Txt_Weight-normal c-Txt_Normal-s roaming-Layout_Word-keep">円（不課税）／全角70文字・半角160字</span>
                                        </th>
                                    </tr>
                                    <tr v-for="(country, countryKey) in selectedCountry" :key="countryKey">
                                        <td v-if="countryKey == 0" :rowspan="selectedCountry.length" class="roaming-Layout_Word-keep">事業者名</td>
                                        <td colspan="2">
                                            {{ country.detail.Network_Display_Name_on_Handset }}
                                            <span class="c-Txt_Cap" v-if="isIndia()">※{{ 6 + countryKey }}</span>
                                        </td>
                                        <td v-if="!isIos() && (country.detail[selectedMobile].split('/')[0] >= 1 || country.detail[selectedMobile].split('/')[1]  >= 1 || country.detail[selectedMobile].split('/')[2]  >= 1 || country.detail[selectedMobile].split('/')[7]  >= 1)">
                                            対応
                                        </td>
                                        <td v-else>
                                            非対応
                                            <span v-if="isIos()" class="c-Txt_Cap">※4</span>
                                        </td>
                                        <td  v-if="country.detail[selectedMobile].split('/')[4] == 1 ">
                                            対応
                                            <span v-if="isVolteRuleSMS(country)" class="c-Txt_Cap">※10</span>
                                        </td>
                                        <td v-else>
                                            非対応
                                            <span class="c-Txt_Cap" v-if="country.detail[selectedMobile].split('/')[4] == 0 && country.detail[selectedMobile].split('/')[5] >= 1">※8</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4">利用料金</td>
                                        <td rowspan="3" class="roaming-Layout_Word-keep">送信料金</td>
                                        <td>海外から日本の電話番号へ送信する</td>
                                        <td v-if="isIos()">
                                            利用不可
                                        </td>
                                        <td v-else>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else class="c-Txt_Normal-l roaming-Layout_Txt-emp" >{{ convertSelectedCountryAllData('Link_SMS_Japan_Free') }}<span class="c-Txt_Normal-m">円</span></span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(4,"Native_SMS_Japan") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>海外から海外の対象国と地域の電話番号へ送信する</td>
                                        <td v-if="isIos()">
                                            利用不可
                                        </td>
                                        <td v-else>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else class="c-Txt_Normal-l roaming-Layout_Txt-emp" >{{ convertSelectedCountryAllData("Link_SMS_66_Free") }}<span class="c-Txt_Normal-m">円</span></span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(4,"Native_SMS_66") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>海外からその他の国の電話番号へ送信する</td>
                                        <td v-if="isIos()">
                                            利用不可
                                        </td>
                                        <td v-else>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else >{{ convertSelectedCountryAllData("Link_SMS_RoW_100 JPY") }}円</span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(4,"Native_SMS_Japan") }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">受信料金</td>
                                        <td v-if="isIos()">
                                            利用不可
                                        </td>
                                        <td v-else>
                                            <span v-if="convertSelectedCountryAllData() == false">非対応</span>
                                            <span v-else class="c-Txt_Normal-l roaming-Layout_Txt-emp" >{{ convertSelectedCountryAllData("Link_SMS_MT_Free") }}<span class="c-Txt_Normal-m">円</span></span>
                                        </td>
                                        <td>
                                            {{ convertSelectedCountry(5,"Native_SMS_MT") }}
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            </div>
                            <p class="c-Txt_Cap" v-if="isIosSupport == true">※2 通信相手がRakuten Linkアプリをご利用ではない場合、Rakuten Linkアプリで国際通話を着信することはできません。</p>
                            <p class="c-Txt_Cap" v-if="isIos()">※3 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten Linkアプリ以外からの国際通話をiOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。</p>
                            <p class="c-Txt_Cap" v-if="isIos()">※4 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten Linkアプリ以外の宛先に国際SMSを送ることができません。国際SMSをご利用の際は、iOS標準のメッセージアプリをご利用ください。</p>
                            <p class="c-Txt_Cap" v-if="isIos()">※4 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten Linkアプリ以外からの国際SMSをiOS標準のメッセージアプリに受信致します</p>
                            <p class="c-Txt_Cap" v-if="isIndia()">※6 通常のアプリをご利用になる場合、Gujarat、Karnataka、Kerala、Maharashtra/Goa、Mumbai、Punjab、Rajasthan、Tamil Nadu、Uttar Pradesh Westの地域でご利用いただけます。</p>
                            <p class="c-Txt_Cap" v-if="isIndia()">※7 通常のアプリをご利用になる場合、Delhi、Mumbai、Rajasthanの地域でご利用いただけます</p>
                            <p class="c-Txt_Cap" v-if="convertSelectedCountryForSupportIphone()">※8 通常のアプリを利用した国際SMSの受信は無料でご利用いただけます。</p>
                            <p class="c-Txt_Cap" v-if="getIsTmobileNote()">※9 T-Mobileのネットワーク通信事情により、OS標準の電話アプリによる国際通話をご利用いただけない場合があります。Rakuten Linkアプリをご利用ください。</p>
                            <p class="c-Txt_Cap" v-if="getIsVolte() || getIsVolteSMS()">※10 VoLTE海外ローミングにも対応しております。詳細は<a href="/faq/detail/10000402/" class="c-Link_Txt">VoLTE海外ローミングとは何か知りたい</a>でご確認ください。</p>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="roaming-Layout_Nonsupported">
                        <div class="roaming-Layout_Nonsupported-text">選択した渡航先では、利用できません。</div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios';

import CountryList from './components/CountryList.vue';
import SelectMobile from './components/SelectMobile.vue';
import {accordion} from "../../js/common/component/accordion";
import ScrollHint from 'scroll-hint';

export default {
    name: 'Parent',
    components: {
        CountryList,
        SelectMobile
    },
    data () {
        return {
            // 国名はエクセルファイル内のMNOシートからRegion列を選択し重複の削除で取得
            targetRegions: [ '北米','アジア','ヨーロッパ','オセアニア','中東','中南米','アフリカ'],

            // 対象機種はエクセルファイル内のFE用データシートから機種列を参照
            targetMobiles: {
                'SHARP': ['SH-RM12 Sense3 lite', 'SH-RM11 Sense3 plus', 'SH-M05', 'SH-M06', 'SH-M07', 'SH-M08', 'SH-M09', 'SH-M10', 'AQUOS R5G', 'AQUOS sense4 lite', 'AQUOS sense4 plus', 'AQUOS zero6', 'AQUOS sense6', 'AQUOS sense5G', 'AQUOS wish', 'AQUOS sense4', 'AQUOS sense6s', 'AQUOS sense7'],
                'FUJITSU': ['Arrows RX'],
                'SONY': ['Xperia Ace', 'Xperia 10 III Lite', 'Xperia 10 IV', 'Xperia 5 IV'],
                'OPPO': ['A5','A55s 5G','A73', 'AX7', 'Find X', 'R17 PRO', 'Reno 10x Zoom', 'Reno A', 'Reno3 A', 'Reno5 A', 'Reno7 A'],
                'Samsung': ['Galaxy A7', 'Galaxy Note 10＋', 'Galaxy S10', 'Galaxy Z Flip4', 'Galaxy A23 5G', 'Galaxy S23'],
                'Huawei': ['nova 5T', 'P 30 lite', 'nova lite 3'],
                'Rakuten': [
                    'Rakuten Mini 製造番号（IMEI）351676110356708以前の製品',
                    'Rakuten Mini 製造番号（IMEI）351676110356716～351676110680487の製品',
                    'Rakuten Mini 製造番号（IMEI）351676110682491以降の製品',
                    'Rakuten BIG',
                    'Rakuten BIG s',
                    'Rakuten Hand',
                    'Rakuten Hand 5G',
                    'Rakuten WiFi Pocket',
                    'Rakuten WiFi Pocket 2B',
                    'Rakuten WiFi Pocket 2C'
                ],
                'Xiaomi': [
                    'Redmi Note 11 Pro 5G'
                ],
                'Apple': ['iPhone 6s', 'iPhone 6s Plus', 'iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 12', 'iPhone 12 mini', 'iPhone SE', 'iPhone SE（第2世代）', 'iPhone SE（第3世代）',  'iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14'],
                'Google':[
                    'Pixel 4',
                    'Pixel 4a',
                    'Pixel 4a 5G',
                    'Pixel 5',
                    'Pixel 5a',
                    'Pixel 6',
                    'Pixel 6 Pro',
                ]
            },

            roamingData: {},
            selectedCountry: null,
            selectedMobile: null,
            selectedMobileData: null,
            mapParameter: null,
            isPressed: false,
            isSupported: false,
            isIosSupport: false,
            isTmobileNote: false,
            isVolte: false,
            isVolteSMS: false,
            $target: null,
        }
    },
    created () {
        const jsonData = this.getJson();
        this.$target = $("#roamingSupportAreaCheckWrap")

        jsonData
            .then(response => {
                const baseObject = this.createBaseObject();
                this.roamingData = this.createRoamingData(response, baseObject);
            })
            .catch(err => {
              console.log(err);
            });
    },
    updated() {
        new ScrollHint('.js-Scrollable', {
            i18n: {
                scrollable: 'スクロール\nできます'
            }
        });
        if (this.$target) {
            accordion(this.$target);
        }
    },
    methods: {
        getRegionID: function (Region) {
            let response;

            switch (Region) {
                case 'ヨーロッパ':
                    response = 'europe';
                    break;
                case '中東':
                    response = 'middle_east';
                    break;
                case 'アフリカ':
                    response = 'africa';
                    break;
                case '中南米':
                    response = 'latin_america';
                    break;
                case 'アジア':
                    response = 'asia';
                    break;
                case 'オセアニア':
                    response = 'oceania';
                    break;
                case '北米':
                    response = 'north_america';
                    break;
            }

            return response;
        },
        createBaseObject: function () {
            const object = {};
            this.targetRegions.forEach(Region => {
                const RegionID = this.getRegionID(Region);
                object[RegionID] = {
                    name: Region,
                    countries: []
                }
            });
            return object;
        },
        getCountryData: function (data) {
            const object = {
                country_name : '',
                detail : {}
            };
            Object.keys(data).forEach(key => {
                if (key == 'Region') {
                    return;
                }
                if (key == 'Country_EN') {
                     object.country_name = data[key];
                } else {
                    object.detail[key] = data[key];
                }
            });
            return object;
        },

        createRoamingData: function (jsonData, object) {
            jsonData.forEach(data => {
                const countryData = this.getCountryData(data);
                const RegionID = this.getRegionID(data.Region);
                object[RegionID].countries.push(countryData);
            });
            return object;
        },
        getJson: async function () {
            const res = await axios.get('/assets/json/roaming-area.json');
            const data = res.status == 200 ? res.data : [];
            return data;
        },
        restState: function () {
            this.isPressed = false;
            this.isSupported = false;
            this.isIosSupport = false;
        },
        resetData: function () {
            this.selectedMobile = null;
            this.selectedMobileData = null;
            this.mapParameter = null;
        },
        selectCountry: function (val, id) {
            this.restState();
            const items = this.roamingData[val].countries;
            const filterItems = items.filter(function(data) {
                return data.country_name === id;
            });
            this.selectedCountry = filterItems;
        },
        selectMobile: function (val) {
            this.restState();
            this.selectedMobile = val;
        },
        selectMaker: function () {
            this.restState();
            this.resetData();
        },
        checkUtilizationSituation: function () {
            this.isPressed = true;
            const currentCountry = this.selectedCountry;
            let support = [];
            this.isTmobileNote = false
            this.isVolte = false
            this.isVolteSMS = false

            currentCountry.forEach(data => {
                const split = data.detail[this.selectedMobile].split('/');

                this.selectedMobileData = {
                    '4g': split[0],
                    '3g': split[1],
                };


                ( data.detail.VCS_Launched === 'NO' ) ? support.push('0') : support.push('1');

                if( split[0] === '' || undefined && split[1] === '' || undefined ) {
                    support.push('0');
                } else {
                    support.push(split[0]);
                    support.push(split[1]);
                }
            });

            const supportFilter = support.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });

            const supported = supportFilter.join("");
            ( supported === '0' ) ? this.isSupported = false : this.isSupported = true;

        },
        isLinkPrice: function() {
            let price = [];
            this.selectedCountry.forEach(data => {
                price.push(data.detail[this.selectedMobile].split('/')[0]);
                price.push(data.detail[this.selectedMobile].split('/')[1]);
                price.push(data.detail[this.selectedMobile].split('/')[2]);
                price.push(data.detail[this.selectedMobile].split('/')[7]);
            });

            const priceFilter = price.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });

            if( priceFilter.length === 1) {
                return ( priceFilter[0] === '0' ) ? false : true;
            } else {
                return true;
            }
        },
        isIndia: function() {
           return ( this.selectedCountry[0].country_name == 'India' ) ? true : false;
        },
        isUs: function() {
           return ( this.selectedCountry[0].country_name == 'Alaska' || this.selectedCountry[0].country_name == 'Hawaii' || this.selectedCountry[0].country_name == 'Puerto Rico' || this.selectedCountry[0].country_name == 'US Virgin Islands' || this.selectedCountry[0].country_name == 'United States' ) ? true : false;
        },
        isIos: function(flag) {
            const mobileMaker = this.selectedMobile.split('/')[0];
            if( mobileMaker === 'Apple' ) {
                if ( flag === 'support' ) this.isIosSupport = true;
                return true;
            } else {
                return false;
            }
        },
        isOsSupport: function() {
            let os = [];
            this.selectedCountry.forEach(data => {
               os.push(data.detail.VCS_Launched);
            });
            return ( os.includes('NO') ) ? true : false;
        },
        isAllSupport: function() {
            let os = [];
            this.selectedCountry.forEach(data => {
               os.push(data.detail.VCS_Launched);
            });
            const osFilter = os.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            if( osFilter.length === 1) {
                return ( osFilter[0] === 'NO' ) ? false : true;
            } else {
                return true;
            }
        },
        convertSelectedCountry(num,price) {
            const isSupportInfo = this.selectedCountry.find((country) => {
                return country.detail[this.selectedMobile].split('/')[num] >= 1;
            })
            return isSupportInfo ? `${isSupportInfo.detail[price]}円` : "非対応";
        },
        convertSelectedCountryAllData(price) {
            const isSupportInfo = this.selectedCountry.find((country) => {
                return country.detail[this.selectedMobile].split('/')[0] >= 1 || country.detail[this.selectedMobile].split('/')[1] >= 1 || country.detail[this.selectedMobile].split('/')[2] >= 1 || country.detail[this.selectedMobile].split('/')[7] >= 1;
            })
            if(isSupportInfo){
                return isSupportInfo.detail[price];
            }else{
                return false;
            }
        },
        convertSelectedCountry(num,price) {
            const isSupportInfo = this.selectedCountry.find((country) => {
                return country.detail[this.selectedMobile].split('/')[num] >= 1;
            })
            return isSupportInfo ? `${isSupportInfo.detail[price]}円` : "非対応";
        },
        convertSelectedCountryForSupportIphone() {
            const isSupportInfo = this.selectedCountry.find((country) => {
                return country.detail[this.selectedMobile].split('/')[4] == 0 && country.detail[this.selectedMobile].split('/')[5] >= 1;
            })
            return (isSupportInfo);
        },
        isTmobileRule(country) {
            if (
                this.getIsTmobileNoteFlg(country) &&
                !this.isIos() &&
                !this.isIndia()
            ) {
                this.isTmobileNote = true
                return true
            } else {
                return false
            }
        },
        isVolteRule(country) {
            if (
                this.getIsVolteFlg(country) &&
                !this.isIndia()
            ) {
                this.isVolte = true
                return true
            } else {
                return false
            }
        },
        isVolteRuleSMS(country) {
            if (
                this.getIsVolteSMSFlg(country) &&
                !this.isIndia()
            ) {
                this.isVolteSMS = true
                return true
            } else {
                return false
            }
        },
        getIsTmobileNoteFlg(country) {
            this.isTmobileNoteFlg = false
            const split = country.detail[this.selectedMobile].split('/');
            if( split[3] >= 1 && split[2] == 0 && country.detail.Network_Display_Name_on_Handset === 'T-Mobile / 310260' ) {
                return true
            } else {
                return false
            }
        },
        getIsVolteFlg(country) {
            this.isVolteFlg = false
            const split = country.detail[this.selectedMobile].split('/');
            if( split[6] >= 1 && split[3] >= 1 ) {
                return true
            } else {
                return false
            }
        },
        getIsVolteSMSFlg(country) {
            this.isVolteSMSFlg = false
            const split = country.detail[this.selectedMobile].split('/');
            if( split[6] >= 1 && split[4] >= 1) {
                return true
            } else {
                return false
            }
        },
        getIsTmobileNote() {
            return this.isTmobileNote
        },
        getIsVolte() {
            return this.isVolte
        },
        getIsVolteSMS() {
            return this.isVolteSMS
        },
        isRemarkTarget(selectedCountry, selectedMobile) {
            const countries = ['アメリカ（本土）', 'アラスカ', 'ハワイ', 'プエルトリコ', '米領バージン諸島']
            const mobiles = ['Rakuten/Rakuten WiFi Pocket', 'Rakuten/Rakuten WiFi Pocket 2B', 'Rakuten/Rakuten WiFi Pocket 2C']
            return countries.includes(selectedCountry) && mobiles.includes(selectedMobile)
        },
    },
}
</script>
