<template>
  <div class="u-Adjust_Pb-40">

    <div id="certified">
      <div v-if="current_status === 'product'">
        <div class="product-certified-product-Select_Initial u-Adjust_Pb-32">

          <div class="l-System_Container">
            <div class="product-certified-product-Select_Initial-inner">
              <h2 class="c-Heading_Lv2 u-Adjust_Align-center">選択肢から選んで調べる</h2>
              <div class="product-certified-product-Select_Initial-icon"><img src="/assets/img/product/byod/icon-select.png" alt=""></div>
              <p class="c-Txt_Emp-01 u-Adjust_Align-center u-Adjust_Mt-16">製品の種類を選択してください。</p>
              <ul class="product-certified-product-Select_List u-Adjust_Pt-8 u-Adjust_Align-left">
                <li v-for="item in product_list" class="u-Adjust_Pt-16" :key="item">
                  <label class="c-Form_Radioblock">
                    <input type="radio" name="btn-product">
                    <span class="c-Form_Radioblock-wrap product-certified-product-Select_Radio product-certified-product-Button_New" data-ratid="product_byod-label-series" data-ratevent="click" data-ratparam="all" v-on:click="goStatus('series', item)">
                      <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">{{ item }}</span>
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            <div class="u-Adjust_Mt-8">
              <p class="c-Txt_Cap">
                ※楽天モバイルに対応しているソフトウェア（SW）バージョンやOSバージョンをご確認いただけます。<br>
                ※楽天モバイルで購入された製品以外は動作保証の対象外となります。また、ご利用いただける機能であっても、OSやソフトウェアの更新等により、機能のご利用が制限される場合があります。ご利用はお客様ご自身の判断でお願いします。<br>
                ※楽天回線対応製品であっても、海外で購入された場合、ご利用いただけない可能性があります。<br>
                ※他社でご購入いただいた製品の設定や操作方法については、お客さまご自身でご確認いただくか、製品購入事業者までお問い合わせください。楽天モバイルでは、ご質問対応などのアフターサービスを提供できません。<br>
                ※「Rakuten Link」は、楽天回線対応製品であってもOSがAndroid 9以下またはiOS 14.3以下の場合動作保証対象外です。お手元の製品のOSバージョンをAndroid 10以降またはiOS 14.4以降にアップデートいただくか、対応OSを搭載している製品をご利用ください。<br>
                ※法人のお客様向け通話・メッセージアプリ「Rakuten Link Office」は、楽天回線対応製品であってもOSがAndroid 9以下の場合ご利用いただけません。お手元の製品のOSバージョンをAndroid 10以降またはiOS 14.5以降（推奨）にアップデートいただくか、対応OSを搭載している製品をご利用ください。<br>
                ※他社でご購入いただいた製品をご利用の場合は、ご利用前に技術基準適合証明などを受けているかをご確認ください。「技適マーク」が付いていない製品のご利用は、電波法違反になるため、当社ネットワークへの接続をお断りする可能性があります。
                </p>
            </div>
          </div>
        </div>
        <div class="l-System_Container u-Adjust_Align-center u-Adjust_Pb-40">
          <p class="u-Adjust_Mt-40">楽天モバイルで販売中の製品は、Rakuten最強プランのすべての機能をご利用いただけます。</p>
          <div class="product-certified-product-Button u-Adjust_Mt-24"><a href="/product/?l-id=product_byod_product" class="c-Btn_Secondly-large">楽天モバイルで販売中の製品を見る</a></div>
        </div>
      </div>
      <div v-if="current_status === 'series'">
        <div class="product-certified-product-Select u-Adjust_Pb-32">
          <div class="l-System_Container">
            <p><a href="#" class="c-Link_Txt-inline" v-on:click="goStatus('product', '')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
            <h2 class="c-Heading_Lv2 u-Adjust_Align-center u-Adjust_Mt-16" v-if="current_product === 'Apple'">どのシリーズのAppleをお使いですか？</h2>
            <h2 class="c-Heading_Lv2 u-Adjust_Align-center u-Adjust_Mt-16" v-else>どのメーカーの{{ current_product }}をお使いですか？</h2>
            <ul class="product-certified-product-Select_List-device u-Adjust_Pt-8">
              <li v-for="item in series_list" class="u-Adjust_Pt-16" :key="item">
                <label class="c-Form_Radioblock">
                  <input type="radio" name="btn-series">
                  <span class="c-Form_Radioblock-wrap product-certified-product-Select_Radio" data-ratid="product_byod-label-career" data-ratevent="click" data-ratparam="all" v-on:click="goStatus('career', item)">
                    <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">{{ item }}</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="current_status === 'career'">
        <div class="product-certified-product-Select u-Adjust_Pb-32">
          <div class="l-System_Container">
            <p><a href="#" class="c-Link_Txt-inline" v-on:click="goStatus('series', '')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
            <h2 class="c-Heading_Lv2 u-Adjust_Align-center u-Adjust_Pt-32">お使いの{{ current_product }}はどちらで購入しましたか？</h2>
            <p class="u-Adjust_Align-center u-Adjust_Pt-16" v-if="current_product === 'Apple'">シリーズ：{{ current_series }}</p>
            <p class="u-Adjust_Align-center u-Adjust_Pt-16" v-else>メーカー：{{ current_series }}</p>
            <ul class="product-certified-product-Select_List u-Adjust_Pt-16">
              <li v-for="item in career_list" class="u-Adjust_Pt-16" :key="item">
                <label class="c-Form_Radioblock">
                  <input type="radio" name="btn-career">
                  <span class="c-Form_Radioblock-wrap product-certified-product-Select_Radio" data-ratid="product_byod-label-device" data-ratevent="click" data-ratparam="all" v-on:click="goStatus('device', item)">
                    <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">{{ item }}</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="current_status === 'device'">
        <div class="product-certified-product-Select u-Adjust_Pb-32">
          <div class="l-System_Container">
            <p><a href="#" class="c-Link_Txt-inline" v-on:click="goStatus('career', '')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
            <h2 class="c-Heading_Lv2 u-Adjust_Align-center u-Adjust_Pt-32">ご利用機種を選択してください。</h2>
            <p class="u-Adjust_Align-center u-Adjust_Mt-16" v-if="current_product === 'Apple'">シリーズ：{{ current_series }}</p>
            <p class="u-Adjust_Align-center u-Adjust_Mt-16" v-else>メーカー：{{ current_series }}</p>
            <p class="u-Adjust_Align-center">購入元：{{ current_career }}</p>
            <ul class="product-certified-product-Select_List u-Adjust_Pt-16">
              <li v-for="item in device_list" class="u-Adjust_Mt-16" :key="item">
                <label class="c-Form_Radioblock">
                  <input type="radio" name="btn-device">
                  <span class="c-Form_Radioblock-wrap product-certified-product-Select_Radio" data-ratid="product_byod-label-result" data-ratevent="click" data-ratparam="all" v-on:click="goStatus('result', item)">
                    <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">{{ item }}</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="current_status === 'result'">
        <div v-if="current_result === 'unsupported'">
          <div class="product-certified-product-Result">
            <div class="l-System_Container">
              <p class="c-Heading_Lv3 u-Adjust_Align-center">この製品は一部の機能がご利用いただけますが、<br>楽天モバイルで販売中の製品のご購入をおすすめします。</p>
              <div class="product-certified-product-Result_Main u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/product/certified-product/result-unsupported-230511.png" width="282" height="226" alt="この製品は一部の機能がご利用いただけますが、楽天モバイルで販売中の製品のご購入をおすすめします。"></div>

              <div class="product-certified-product-Result_Device u-Adjust_Mt-32">
                <div class="product-certified-product-Result_Device-image"><img v-bind:src="current_device_url"></div>
                <div class="product-certified-product-Result_Device-text">
                  <div class="c-Txt_Emp-01">{{ result["機種名"] }}</div>
                  <div>{{ current_series }}</div>
                  <div>{{ current_career }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="l-System_Container u-Adjust_Pt-64 u-Adjust_Pb-64">
            <div class="product-certified-product-Result_Remark">
              <h3 class="c-Heading_Lv4">ご利用可能な機能</h3>
              <ul class="product-certified-product-Result_Remark-items">
                <li
                  v-for="item in remark_items"
                  :key="item.type"
                  class="product-certified-product-Result_Remark-item"
                >
                  <span
                    class="product-certified-product-Result_Remark-icon"
                    :class="`--${item.type}`"
                  ></span>
                  {{ item.label }}
                </li>
              </ul>
            </div>
            <ul class="product-certified-product-Result_Check-list">
              <li v-if="check_list[0] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[0]"><span>4Gデータ通信</span></li>
              <li v-if="check_list[8] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[8]"><span>5Gデータ通信</span></li>
              <li v-if="check_list[1] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[1]"><span>通話</span></li>
              <li v-if="check_list[2] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[2]"><span>SMS</span></li>
              <!-- <li v-if="check_list[3] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[3]"><span>SMS（パートナー回線)</span></li> -->
              <li v-if="check_list[4] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[4]"><span>{{ apn_text }}</span>
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="海外ではAPN自動設定はご利用いただけません。" v-if="apn_text === 'APN自動設定　国内'">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></li>
              <li v-if="check_list[6] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[6]"><span>ETWS
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="緊急地震速報、津波警報の受信などの機能です。">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></span>
              </li>
              <li v-if="check_list[7] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[7]"><span>110/119通話などでの高精度な位置情報測位</span></li>
              <li v-if="check_list[9] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[9]"><span>{{ dual_text }}</span></li>
            </ul>
            <div class="u-Adjust_Pt-16">
              <p class="u-Adjust_Pt-8">確認済OS/SWバージョン：{{ result["確認済OS/SWバージョン"] }}</p>
              <p v-if="result_model.length > 0" class="u-Adjust_Mt-8">動作確認済モデル番号：{{ result_model }}</p>
            </div>

            <div class="u-Adjust_Mt-24" v-if="is_iphone12 || is_iphone8 || is_iphone6">
                <ul class="c-List_Text-disc" v-if="is_iphone12">
                    <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                </ul>
                <div v-if="is_iphone8 || is_iphone6">
                    <ul class="c-List_Text-disc" v-if="is_iphone8">
                        <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                        <li>iOS 14.4以降ならびにキャリア設定が最新バージョンへアップデートされたiPhoneのモデル(iPhone 12 Pro、 iPhone 12 Pro Max、iPhone 12、iPhone 12 miniを除く)では、楽天回線エリアとパートナー回線エリアのネットワークエリア の間で自動的に切り替えることはできません。楽天回線エリアでもパートナー回線エリアのデータ容量5GB/月を消費する場合があります。</li>
                    </ul>
                    <ul class="c-List_Text-disc" v-if="is_iphone6">
                        <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                        <li>iOS 14.4以降ならびにキャリア設定が最新バージョンへアップデートされたiPhoneのモデル(iPhone 12 Pro、 iPhone 12 Pro Max、iPhone 12、iPhone 12 miniを除く)では、楽天回線エリアとパートナー回線エリアのネットワークエリア の間で自動的に切り替えることはできません。楽天回線エリアでもパートナー回線エリアのデータ容量5GB/月を消費する場合があります。</li>
                        <li>iOS 14.4/14.4.1/14.4.2のバージョンでご利用になる場合、110/118/119への緊急通話で高精度な位置情報測位の正確性が低下します。iOS14.5にアップデートすることで高精度な位置情報測位に対応いたします。</li>
                    </ul>
                    <p class="u-Adjust_Mt-16">
                        <a href="https://r10.to/hyPWlY" class="c-Link_Txt-inline">
                        接続回線の切り替え方法を見る<span class="c-Icon_Chevron-right"></span>
                        </a>
                    </p>
                </div>
            </div>

            <div class="c-Infobox_Standing-warning u-Adjust_Mt-24" v-if="is_ios14_3">
                <h2 class="product-certified-product-Warning_Title"><span class="c-Icon_Sign-warning-l product-certified-product-Warning_Icon"></span><span>楽天回線を「副回線」としてご利用設定される方へのお願い</span></h2>
                <p class="c-Txt_Emp-02 u-Adjust_Mt-16">
                以下の事象が発生する場合は、iOS14.4以降の最新バージョンへアップデートいただくことで解消されます。
                </p>
                <div class="c-Infobox_Standing-white u-Adjust_Mt-24">
                <ul class="c-List_Text-disc">
                    <li>iOS 14.3のiPhone12シリーズ（iPhone 12/iPhone 12 Pro/iPhone 12 Pro Max/ iPhone 12 mini ）で、モバイル通信設定にて、楽天モバイル（楽天回線）を副回線として「オンにせずご利用になっている」場合、データ通信ができなくなる</li>
                </ul>
                <p class="u-Adjust_Mt-24">
                    <a href="/guide/iphone/ios-troubleshooting/" class="c-Link_Txt-inline">
                    詳細はこちら<span class="c-Icon_Chevron-right"></span>
                    </a>
                </p>
                </div>
            </div>

            <div class="u-Adjust_Mt-24" v-if="is_link_true">
                <h2 class="c-Txt_Emp-02">Rakuten LinkアプリiOS版の仕様変更について</h2>
                <h3 class="c-Txt_Emp-01 u-Adjust_Mt-8">音声通話着信について</h3>
                <p class="u-Adjust_Mt-8">Rakuten Linkアプリを利用していない相手からの電話（固定電話や、OS標準の電話アプリなど）を着信する場合 、現在はお客様のRakuten Linkアプリに着信いたしますが、仕様変更後はiOS標準の電話アプリに着信するようになります。</p>
                <h3 class="c-Txt_Emp-01 u-Adjust_Mt-8">SMS送受信について</h3>
                <p class="u-Adjust_Mt-8">Rakuten Linkアプリを利用していない相手（OS標準のメッセージアプリなど）とSMSの送受信をする場合、現在は、お客様のRakuten LinkアプリでのSMS送受信が可能ですが、仕様変更後はiOS標準のメッセージアプリでのみSMS送受信が可能です。</p>
                <h3 class="u-Adjust_Mt-8">【仕様変更日時】</h3>
                <p class="u-Adjust_Mt-8">2021年6月15日（火）以降順次予定</p>
                <p class="c-Txt_Cap u-Adjust_Mt-8">※iOS標準アプリを用いたSMS送信は有料になります。詳しくは以下をご確認ください。</p>
                <p class="u-Adjust_Mt-16">
                    <a href="https://network.mobile.rakuten.co.jp/information/news/service/647/" class="c-Link_Txt-inline">
                    詳細を見る<span class="c-Icon_Chevron-right"></span>
                    </a>
                </p>
            </div>

            <ul class="c-List_Text-disc u-Adjust_Mt-40">
              <li v-if="is_plus_F_FS030W">
                「FS030W_3.3.5」以降のソフトウェアにアップデートするためには、富士ソフト様での対応が必要となります。詳細は以下のページをご確認ください。<br>
                <a href="https://www.fsi.co.jp/mobile/plusF/news/21051701.html" target="_blank" rel="noopener noreferrer">https://www.fsi.co.jp/mobile/plusF/news/21051701.html</a>
              </li>
              <li v-if="is_um340R">当社の動作保証対象外となります。またご利用いただける機能であっても、OSやソフトウェアの更新等により、機能のご利用が制限される場合があります。ご利用はお客様ご自身の判断でお願いします。<br>※パートナー回線はご利用できません。
              </li>
              <li v-else>当社の動作保証対象外となります。またご利用いただける機能であっても、OSやソフトウェアの更新等により、機能のご利用が制限される場合があります。ご利用はお客様ご自身の判断でお願いします。</li>
              <li>他社でご購入いただいた製品の設定や操作方法については、お客さまご自身でご確認いただくか、 製品購入事業者までお問い合わせください。楽天モバイルでは、ご質問対応などのアフターサービスを提供できません。</li>
            </ul>

            <div class="product-certified-product-Button u-Adjust_Mt-24 u-Adjust_Align-center" v-if="result['初期設定方法を見る'] !== ''"><a v-bind:href="`${result['初期設定方法を見る']}`" class="c-Btn_Primary-large">初期設定方法を見る</a></div>

            <p class="u-Adjust_Mt-40">楽天モバイルで販売中の製品は、Rakuten最強プランのすべての機能をご利用いただけます。</p>
            <div class="product-certified-product-Button u-Adjust_Mt-16 u-Adjust_Align-center"><a href="/product/?l-id=product_byod_product" class="c-Btn_Secondly-large">楽天モバイルで販売中の製品を見る</a></div>

          </div>
        </div>
        <div v-if="current_result === 'support'">
          <div class="product-certified-product-Result">
            <div class="l-System_Container">
              <p v-if="!is_unsupported" class="c-Heading_Lv3 u-Adjust_Align-center">この製品は楽天回線対応製品です。</p>
              <div class="product-certified-product-Result_Main product-certified-product-Hero_Show-pc u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/product/certified-product/result-support-230511.png" width="296" height="226" alt="この製品は楽天回線対応製品です。"></div>
              <div class="product-certified-product-Result_Main product-certified-product-Hero_Show-sp u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/product/certified-product/result-support-230511.png" width="224" height="171" alt="この製品は楽天回線対応製品です。"></div>

              <div class="product-certified-product-Result_Device u-Adjust_Mt-32">
                <div class="product-certified-product-Result_Device-image"><img v-bind:src="current_device_url"></div>
                <div class="product-certified-product-Result_Device-text">
                  <div class="c-Txt_Emp-01" v-if="result['機種名'] !== ''">{{ result["機種名"] }}</div>
                  <div>{{ current_series }}</div>
                  <div>{{ current_career }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="l-System_Container u-Adjust_Pt-64 u-Adjust_Pb-64">
            <div class="product-certified-product-Result_Remark">
              <h3 class="c-Heading_Lv4">ご利用可能な機能</h3>
              <ul class="product-certified-product-Result_Remark-items">
                <li
                  v-for="item in remark_items"
                  :key="item.type"
                  class="product-certified-product-Result_Remark-item"
                >
                  <span
                    class="product-certified-product-Result_Remark-icon"
                    :class="`--${item.type}`"
                  ></span>
                  {{ item.label }}
                </li>
              </ul>
            </div>
            <ul class="product-certified-product-Result_Check-list">
              <li v-if="check_list[0] !== 'none'" class="product-certified-product-Result_Check-support"><span>4Gデータ通信</span></li>
              <li v-if="check_list[8] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[8]"><span>5Gデータ通信</span></li>
              <li v-if="check_list[1] !== 'none'" class="product-certified-product-Result_Check-support"><span>通話</span></li>
              <li v-if="check_list[2] !== 'none'" class="product-certified-product-Result_Check-support"><span>SMS</span></li>
              <!-- <li v-if="check_list[3] !== 'none'" class="product-certified-product-Result_Check-support"><span>SMS（パートナー回線)</span></li> -->
              <li v-if="check_list[4] !== 'none'" class="product-certified-product-Result_Check-support"><span class="u-Adjust_Pl-16">{{ apn_text }}</span>
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="海外ではAPN自動設定はご利用いただけません。" v-if="apn_text === 'APN自動設定　国内'">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></li>
              <li v-if="check_list[6] !== 'none'" class="product-certified-product-Result_Check-support"><span>ETWS
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="緊急地震速報、津波警報の受信などの機能です。">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></span>
              </li>
              <li v-if="check_list[7] !== 'none'" class="product-certified-product-Result_Check-support"><span>110/119通話などでの高精度な位置情報測位</span></li>
              <li v-if="check_list[9] !== 'none'" class="product-certified-product-Result_Check-support"><span>{{ dual_text }}</span></li>
            </ul>

            <p class="u-Adjust_Mt-24">確認済OS/SWバージョン：{{ result["確認済OS/SWバージョン"] }}</p>
            <p v-if="result_model.length > 0" class="u-Adjust_Mt-8">動作確認済モデル番号：{{ result_model }}</p>
            <p v-if="result['機種名'] === 'Redmi Note 10T'" class="u-Adjust_Mt-8 c-Txt_Cap">※動作確認は現時点ではnanoSIMで実施しております。</p>
            <p v-if="result['機種名'] === 'Google Pixel 6'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 6a'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 6 Pro'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 7'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 7a'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 7 Pro'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 8'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>
            <p v-if="result['機種名'] === 'Google Pixel 8 Pro'" class="u-Adjust_Mt-8 c-Txt_Cap">※<a href="/information/news/product/2399/" class="c-Link_Txt-inline">一部のGoogle Pixel製品において楽天モバイルネットワークに接続しづらくなる事象について</a></p>

            <div class="u-Adjust_Mt-24" v-if="is_iphone12 || is_iphone8 || is_iphone6 || is_iphoneX">
                <ul class="c-List_Text-disc" v-if="is_iphone12">
                    <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                </ul>
                <div v-if="is_iphone8 || is_iphone6 || is_iphoneX">
                    <ul class="c-List_Text-disc" v-if="is_iphone8">
                        <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                        <li>iOS 14.4以降ならびにキャリア設定が最新バージョンへアップデートされたiPhoneのモデル(iPhone 12 Pro、 iPhone 12 Pro Max、iPhone 12、iPhone 12 miniを除く)では、楽天回線エリアとパートナー回線エリアのネットワークエリア の間で自動的に切り替えることはできません。楽天回線エリアでもパートナー回線エリアのデータ容量5GB/月を消費する場合があります。</li>
                    </ul>
                    <div v-if="is_iphoneX">
                        <ul class="c-List_Text-disc">
                            <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                            <li>iOS 14.4以降ならびにキャリア設定が最新バージョンへアップデートされたiPhoneのモデル(iPhone 12 Pro、 iPhone 12 Pro Max、iPhone 12、iPhone 12
                            miniを除く)では、楽天回線エリアとパートナー回線エリアのネットワークエリア の間で自動的に切り替えることはできません。楽天回線エリアでもパートナー回線エリアのデータ容量5GB/月を消費する場合があります。
                            </li>
                        </ul>
                        <p class="c-Txt_Cap u-Adjust_Mt-16">※ iPhone XはデュアルSIM非対応のため、デュアルSIM情報の記載を削除しました。 （2023年9月）</p>
                    </div>

                    <ul class="c-List_Text-disc" v-if="is_iphone6">
                        <li>楽天モバイルのご利用にあたり、iOS 14.4以降ならびにキャリア設定の最新バージョンへのアップデートをお願いいたします。</li>
                        <li>iOS 14.4以降ならびにキャリア設定が最新バージョンへアップデートされたiPhoneのモデル(iPhone 12 Pro、 iPhone 12 Pro Max、iPhone 12、iPhone 12 miniを除く)では、楽天回線エリアとパートナー回線エリアのネットワークエリア の間で自動的に切り替えることはできません。楽天回線エリアでもパートナー回線エリアのデータ容量5GB/月を消費する場合があります。</li>
                        <li>iOS 14.4/14.4.1/14.4.2のバージョンでご利用になる場合、110/118/119への緊急通話で高精度な位置情報測位の正確性が低下します。iOS14.5にアップデートすることで高精度な位置情報測位に対応いたします。</li>
                    </ul>
                    <p class="u-Adjust_Mt-16">
                        <a href="https://r10.to/hyPWlY" class="c-Link_Txt-inline">
                        接続回線の切り替え方法を見る<span class="c-Icon_Chevron-right"></span>
                        </a>
                    </p>
                </div>
            </div>

            <div class="c-Infobox_Standing-warning u-Adjust_Mt-24" v-if="is_ios14_3">
                <h2 class="product-certified-product-Warning_Title"><span class="c-Icon_Sign-warning-l product-certified-product-Warning_Icon"></span><span>楽天回線を「副回線」としてご利用設定される方へのお願い</span></h2>
                <p class="c-Txt_Emp-02 u-Adjust_Mt-16">
                以下の事象が発生する場合は、iOS14.4以降の最新バージョンへアップデートいただくことで解消されます。
                </p>
                <div class="c-Infobox_Standing-white u-Adjust_Mt-24">
                <ul class="c-List_Text-disc">
                    <li>iOS 14.3のiPhone12シリーズ（iPhone 12/iPhone 12 Pro/iPhone 12 Pro Max/ iPhone 12 mini ）で、モバイル通信設定にて、楽天モバイル（楽天回線）を副回線として「オンにせずご利用になっている」場合、データ通信ができなくなる</li>
                </ul>
                <p class="u-Adjust_Mt-24">
                    <a href="/guide/iphone/ios-troubleshooting/" class="c-Link_Txt-inline">
                    詳細はこちら<span class="c-Icon_Chevron-right"></span>
                    </a>
                </p>
                </div>
            </div>


            <div class="u-Adjust_Mt-40" v-if="is_link_true">
                <h2 class="c-Txt_Emp-02">Rakuten LinkアプリiOS版の仕様変更について</h2>
                <h3 class="c-Txt_Emp-01 u-Adjust_Mt-16">音声通話着信について</h3>
                <p class="u-Adjust_Mt-8">Rakuten Linkアプリを利用していない相手からの電話（固定電話や、OS標準の電話アプリなど）を着信する場合 、現在はお客様のRakuten Linkアプリに着信いたしますが、仕様変更後はiOS標準の電話アプリに着信するようになります。</p>
                <h3 class="c-Txt_Emp-01 u-Adjust_Mt-16">SMS送受信について</h3>
                <p class="u-Adjust_Mt-8">Rakuten Linkアプリを利用していない相手（OS標準のメッセージアプリなど）とSMSの送受信をする場合、現在は、お客様のRakuten LinkアプリでのSMS送受信が可能ですが、仕様変更後はiOS標準のメッセージアプリでのみSMS送受信が可能です。</p>
                <h3 class="u-Adjust_Mt-16">【仕様変更日時】</h3>
                <p class="u-Adjust_Mt-8">2021年6月15日（火）以降順次予定</p>
                <p class="c-Txt_Cap u-Adjust_Mt-16">※iOS標準アプリを用いたSMS送信は有料になります。詳しくは以下をご確認ください。</p>
                <p class="u-Adjust_Mt-8">
                    <a href="https://network.mobile.rakuten.co.jp/information/news/service/647/" class="c-Link_Txt-inline">
                    詳細を見る<span class="c-Icon_Chevron-right"></span>
                    </a>
                </p>
            </div>

            <div v-if="!is_appleWatch">
              <div class="product-certified-product-Button u-Adjust_Mt-24 u-Adjust_Align-center"><a href="/guide/application/?lid-r=product_byod_guide_application" class="c-Btn_Primary-large">Rakuten最強プランを申し込む</a></div>
              <div class="product-certified-product-Button u-Adjust_Mt-16 u-Adjust_Align-center" v-if="result['初期設定方法を見る'] !== ''"><a v-bind:href="`${result['初期設定方法を見る']}`" class="c-Btn_Regular-large">初期設定方法を確認する</a></div>
            </div>
            <div class="u-Adjust_Mt-40" v-else>
              <p>楽天回線でApple watchを使用するには、楽天回線を利用しているiPhoneと「<a href="https://network.mobile.rakuten.co.jp/service/number-share/" class="c-Link_Txt-inline">電話番号シェアサービス</a>」への加入が必要です。</p>
              <div class="product-certified-product-Button u-Adjust_Mt-24 u-Adjust_Align-center"><a href="https://network.mobile.rakuten.co.jp/product/iphone/" class="c-Btn_Regular-large">楽天モバイルで販売中のiPhoneを見る</a></div>
              <div class="product-certified-product-Button u-Adjust_Mt-16 u-Adjust_Align-center"><a href="/guide/application/?lid-r=product_byod_guide_application" class="c-Btn_Primary-large">Rakuten最強プランを申し込む</a></div>
              <p class="u-Adjust_Mt-40">Apple Watchを使用するには、お持ちのiPhoneとペアリングする必要があります。</p>
               <div class="product-certified-product-Button u-Adjust_Mt-24 u-Adjust_Align-center" v-if="result['初期設定方法を見る'] !== ''"><a v-bind:href="`${result['初期設定方法を見る']}`" class="c-Btn_Regular-large">初期設定方法を確認する</a></div>
            </div>

          </div>
        </div>
        <div v-if="current_result === 'disabled'">

          <div class="product-certified-product-Result">
            <div class="l-System_Container">
              <p class="c-Heading_Lv3 u-Adjust_Align-center">この製品はご利用いただけません。<br>楽天モバイルで販売中の製品のご購入をおすすめします。</p>
              <div class="product-certified-product-Result_Main u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/product/certified-product/result-disabled-230511.png" width="267" height="226" alt="この製品はご利用いただけません。楽天モバイルで販売中の製品のご購入をおすすめします。"></div>

              <div class="product-certified-product-Result_Device u-Adjust_Mt-32">
                <div class="product-certified-product-Result_Device-image"><img v-bind:src="current_device_url"></div>
                <div class="product-certified-product-Result_Device-text">
                  <div class="c-Txt_Emp-01" v-if="result['機種名'] !== ''">{{ result["機種名"] }}</div>
                  <div>{{ current_series }}</div>
                  <div>{{ current_career }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="l-System_Container u-Adjust_Pt-64 u-Adjust_Pb-64">
            <div class="product-certified-product-Result_Remark">
              <h3 class="c-Heading_Lv4">ご利用可能な機能</h3>
              <ul class="product-certified-product-Result_Remark-items">
                <li
                  v-for="item in remark_items"
                  :key="item.type"
                  class="product-certified-product-Result_Remark-item"
                >
                  <span
                    class="product-certified-product-Result_Remark-icon"
                    :class="`--${item.type}`"
                  ></span>
                  {{ item.label }}
                </li>
              </ul>
            </div>
            <ul class="product-certified-product-Result_Check-list">
              <li v-if="check_list[0] !== 'none'" class="product-certified-product-Result_Check-disabled"><span>4Gデータ通信</span></li>
              <li v-if="check_list[8] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[8]"><span>5Gデータ通信</span></li>
              <li v-if="check_list[1] !== 'none'" class="product-certified-product-Result_Check-disabled"><span>通話</span></li>
              <li v-if="check_list[2] !== 'none'" class="product-certified-product-Result_Check-disabled"><span>SMS</span></li>
              <!-- <li class="product-certified-product-Result_Check-disabled"><span>SMS（パートナー回線)</span></li> -->
              <li v-if="check_list[4] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[4]"><span class="u-Adjust_Pl-16">{{ apn_text }}</span>
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="海外ではAPN自動設定はご利用いただけません。" v-if="apn_text === 'APN自動設定　国内'">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></li>
              <li v-if="check_list[6] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[6]"><span>ETWS
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="緊急地震速報、津波警報の受信などの機能です。">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></span>
              </li>
              <li v-if="check_list[7] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[7]"><span>110/119通話などでの高精度な位置情報測位</span></li>
              <li v-if="check_list[9] !== 'none'" class="product-certified-product-Result_Check-disabled"><span>{{ dual_text }}</span></li>
            </ul>

            <p class="u-Adjust_Mt-24">確認済OS/SWバージョン：{{ result["確認済OS/SWバージョン"] }}</p>
            <p v-if="result_model.length > 0" class="u-Adjust_Mt-8">動作確認済モデル番号：{{ result_model }}</p>
            <p v-if="result['機種名'] === 'Redmi Note 10T'" class="u-Adjust_Mt-8 c-Txt_Cap">※動作確認は現時点ではnanoSIMで実施しております。</p>

            <p class="u-Adjust_Mt-40">楽天モバイルで販売中の製品は、Rakuten最強プランのすべての機能をご利用いただけます。</p>
            <div class="product-certified-product-Button u-Adjust_Mt-16 u-Adjust_Align-center"><a href="/product/?l-id=product_byod_product" class="c-Btn_Secondly-large">楽天モバイルで販売中の製品を見る</a></div>

          </div>
        </div>
        <div v-if="current_result === 'unknown'">
          <div class="product-certified-product-Result">
            <div class="l-System_Container">
              <p v-if="current_product === 'Apple'" class="c-Heading_Lv3 u-Adjust_Align-center">このiPhoneは動作確認中です。</p>
              <p v-else class="c-Heading_Lv3 u-Adjust_Align-center">この{{ current_product }}は動作確認中です。</p>
              <div class="product-certified-product-Result_Main u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/product/certified-product/result-unknown.png?211014"></div>
              <div class="product-certified-product-Result_Device u-Adjust_Mt-32">
                <div class="product-certified-product-Result_Device-image"><img v-bind:src="current_device_url"></div>
                <div class="product-certified-product-Result_Device-text">
                  <div class="c-Txt_Emp-01" v-if="result['機種名'] !== ''">{{ result["機種名"] }}</div>
                  <div>{{ current_series }}</div>
                  <div>{{ current_career }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="l-System_Container u-Adjust_Pt-64 u-Adjust_Pb-64">
            <div class="product-certified-product-Result_Remark">
              <h3 class="c-Heading_Lv4">ご利用可能な機能</h3>
              <ul class="product-certified-product-Result_Remark-items">
                <li
                  v-for="item in remark_items"
                  :key="item.type"
                  class="product-certified-product-Result_Remark-item"
                >
                  <span
                    class="product-certified-product-Result_Remark-icon"
                    :class="`--${item.type}`"
                  ></span>
                  {{ item.label }}
                </li>
              </ul>
            </div>
            <ul class="product-certified-product-Result_Check-list">
              <li class="product-certified-product-Result_Check-unknown"><span>4Gデータ通信</span></li>
              <li v-if="check_list[8] !== 'none'" :class="'product-certified-product-Result_Check-' + check_list[8]"><span>5Gデータ通信</span></li>
              <li class="product-certified-product-Result_Check-unknown"><span>通話</span></li>
              <li class="product-certified-product-Result_Check-unknown"><span>SMS</span></li>
              <!-- <li class="product-certified-product-Result_Check-unknown"><span>SMS（パートナー回線)</span></li> -->
              <li class="product-certified-product-Result_Check-unknown"><span>{{ apn_text }}</span>
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="海外ではAPN自動設定はご利用いただけません。" v-if="apn_text === 'APN自動設定　国内'">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></li>
              <li class="product-certified-product-Result_Check-unknown"><span>ETWS
                <button class="c-Tooltip js-Tooltip-inline" data-tippy-theme="default" data-tippy-content="緊急地震速報、津波警報の受信などの機能です。">
                  <span class="c-Icon_Stack c-Tooltip_Icon">
                    <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                    <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                  </span>
                </button></span>
              </li>
              <li class="product-certified-product-Result_Check-unknown"><span>110/119通話などでの高精度な位置情報測位</span></li>
              <li v-if="check_list[9] !== 'none'" class="product-certified-product-Result_Check-unknown"><span>{{ dual_text }}</span></li>
            </ul>

            <p class="u-Adjust_Mt-40">今すぐRakuten最強プランのすべての機能をご利用いただくためには、楽天モバイル公式スマートフォンをご購入・ご準備ください。</p>
            <div class="product-certified-product-Button u-Adjust_Mt-16 u-Adjust_Align-center"><a href="/product/?l-id=product_byod_product" class="c-Btn_Secondly-large">楽天モバイル公式スマホを見る</a></div>

          </div>
        </div>
        <div class="l-System_Container">
          <p class="u-Adjust_Mt-24"><a href="#" class="c-Link_Txt-inline" data-ratid="product_byod-label-product" data-ratevent="click" data-ratparam="all" v-on:click="goStatus('product', '')"><span class="c-Icon_Chevron-left"></span>ご利用製品の選択に戻る</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tooltip} from "../../../js/common/component/tooltip";
import 'core-js/modules/es.promise';

export default {
    name: 'CertifiedProducts',
    data () {
        return {
            current_status: "product",
            current_product: "",
            current_series: "",
            current_career: "",
            current_device: "",
            current_device_url: "",
            current_result: "",
            result: "",
            result_model: "",
            product_list: ['Apple', 'Androidスマートフォン', 'タブレット', 'モバイルルーター', 'PC'],
            series_list: [],
            career_list: [],
            device_list: [],
            base: {},
            check_list: [],
            is_ios14: false,
            is_ios14_3: false,
            is_iphone12: false,
            is_iphoneX: false,
            is_iphone8: false,
            is_iphone6: false,
            is_appleWatch: false,
            is_link_true: false,
            is_valid_parameters: true,
            is_plus_F_FS030W: false,
            is_unsupported: false,
            is_um340R: false,
            path: {
              sitepath: '/',
              apn_text: 'APN自動設定　海外／国内',
              dual_text: '',
            },
            remark_items: [
              {
                type: 'support',
                label: '利用可',
              },
              {
                type: 'disabled',
                label: '利用不可',
              },
              {
                type: 'unknown',
                label: '未確認',
              },
            ],
            linksHasRat: [],
        }
    },
    created () {
        let vue = this;

        window.onpopstate = function(e) {

            if(e.state) {
                vue.goStatus(e.state.status, e.state.item, true);
            }
        };

        history.pushState({status: this.current_status, item: ""}, null, null);
        this.getData()
            .then(data => {

              const that = this;
              this.base.series_list = {};
              this.base.series = {};

              for (let i = 0, len = this.product_list.length; i < len; i++) {
                  setData(data, this.product_list[i], this);
              }

              function setData(data, product, target) {
                  let series_list = [];
                  let series = {};

                  for (let i = 0, len = data.length; i < len; i++) {
                      for(let key in data[i]){
                          data[i][key.replace(/\r?\n?/g,'')] = data[i][key].replace(/\r?\n?/g,'');
                      }

                      if (data[i]["種別"] === product) {

                          if (series_list.indexOf(data[i]["シリーズ名"]) === -1) {
                              series_list.push(data[i]["シリーズ名"]);

                              series[data[i]["シリーズ名"]] = {};
                              series[data[i]["シリーズ名"]].career_list = [];
                              series[data[i]["シリーズ名"]].career = {};
                          }

                          if (series[data[i]["シリーズ名"]].career_list.indexOf(data[i]["キャリア"]) === -1) {
                              series[data[i]["シリーズ名"]].career_list.push(data[i]["キャリア"]);
                              series[data[i]["シリーズ名"]].career[data[i]["キャリア"]] = {};
                              series[data[i]["シリーズ名"]].career[data[i]["キャリア"]].device_list = [];
                              series[data[i]["シリーズ名"]].career[data[i]["キャリア"]].device = {};
                          }

                          series[data[i]["シリーズ名"]].career[data[i]["キャリア"]].device_list.push(data[i]["機種名"]);
                          series[data[i]["シリーズ名"]].career[data[i]["キャリア"]].device[data[i]["機種名"]] = data[i];
                      }
                  }

                  series_list = series_list.sort(function(a,b){
                      a = a.toString().toLowerCase();
                      b = b.toString().toLowerCase();
                      if (a === 'iphone') {
                          return -1;
                      }
                      else if (b === 'iphone') {
                          return 1;
                      }
                      else if (a === 'その他') {
                          return 1;
                      }
                      else if (b === 'その他') {
                          return -1;
                      }
                      else if (a < b) {
                          return -1;
                      }
                      else if (a > b) {
                          return 1;
                      }
                      return 0;
                  });

                  target.base.series_list[product] = series_list;
                  target.base.series[product] = series;
              }

              setTimeout(function(){
                  const my_parameter = location.search;
                  let my_parameters = my_parameter.slice(1).split('&');

                  for (let i = 0, len = my_parameters.length; i < len; i++) {
                      let my_selector = my_parameters[i].split('=');
                      switch (my_selector[0]) {
                          case "device":
                              that.goStatus('series', decodeURI(my_selector[1]), true);
                              break;
                          case "brand":
                              that.goStatus('career', decodeURI(my_selector[1]), true);
                              break;
                          case "career":
                              that.goStatus('device', decodeURI(my_selector[1]), true);
                              break;
                          case "product":
                              that.goStatus('result', decodeURI(my_selector[1]), true);
                              break;
                      }
                      if (!that.is_valid_parameters) {
                          that.goStatus('product', '');
                          break;
                      }
                  }
              }, 0);
            })
            .catch(err => {
              // TODO: error handling.
              console.log(err);
            });

        setTimeout(function(){
            $('#inputDefalut').on('keyup change', function(){
                if ($(this).val().length > 0) {
                    $('#sendDefault').css('background-color', "#ff008c");
                }
                else {
                    $('#sendDefault').css('background-color', "#ccc");
                }
            });

            $('#formDefault').on('submit', function(e){
                e.preventDefault();
                let devicename = $('#inputDefalut').val();
                if (devicename.length === 0) {
                    return false;
                }

                location.href = '#openchatbot&initMessage=' + devicename + '&showInitMessage';

                $(function(){
                    $('.chat_body').show();
                    $('#formDefault').hide();
                    $('.wc-message-pane').slideDown(400, function(){
                        $('html,body').animate({scrollTop:$('#BotChatGoesHere').offset().top - 8}, 400);
                    });
                });
            });
        }, 0);
    },
    updated () {
      const targetRadio = document.getElementsByTagName("radio");

      for (let i = 0, len = targetRadio.length; i < len; i++) {
        targetRadio[i].checked = "false";
      }

      // const targetCertified = document.getElementById("certified");
      // const rect = targetCertified.getBoundingClientRect();
      // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // const myTop = rect.top + scrollTop;

      // if (rect.top < 0) {
      //     window.scroll({
      //         top: myTop,
      //     });
      // }

      this.dynamicRatBind(document.querySelectorAll('#certified [data-ratid]'));

      setTimeout(function(){
          $('html,body').animate({scrollTop:$('#certified').offset().top - 8}, 400);
      }, 0);

      tooltip();

      // let event;
      // if (typeof(window.Event) === 'function') {
      //   event = new Event('SINGLE_PAGE_APPLICATION_LOAD');
      //   document.dispatchEvent(event);
      // } else {
      //   try {
      //     event = document.createEvent('Event');
      //     event.initEvent('SINGLE_PAGE_APPLICATION_LOAD', true, true);
      //     document.dispatchEvent(event);
      //   } catch (e) {}
      // }

      if (this.current_status === 'product') {
          document.getElementById('section-hero-initial').style.display = 'block';
          document.getElementById('section-hero-second').style.display = 'none';
          document.getElementById('area-chatbot').style.display = 'block';
      }
      else {
          document.getElementById('section-hero-initial').style.display = 'none';
          document.getElementById('section-hero-second').style.display = 'block';
          document.getElementById('area-chatbot').style.display = 'none';
      }

    },
    methods: {
        dynamicRatBind(target) {
          this.linksHasRat = target;
          this.linksHasRat.forEach(link => {
            const targetDOM = RAT.$Selector(link);
            RAT.bind(targetDOM);
          });
        },
        getData: async function () {
            const res = await jQuery.ajax({
              url: '/assets/json/product-certified.json',
              cache: false,
              success: function (data) {
                  return data;
              }
            });
            return res;
        },
        goStatus: function (status, item, is_skip) {

            if ((!is_skip && !(item === "")) || status === 'product') {
                history.pushState({status: status, item: item}, null, '/product/byod/');
            }
            else if (status === 'result') {
                history.pushState({status: status, item: item}, null, null);
            }

            this.current_status = status;

            if(typeof event !== 'undefined') {
                event.preventDefault();
            }

            if (status === 'series') {
                if (item !== '') {
                    this.current_product = item;
                }
                if (this.product_list.indexOf(this.current_product) > -1) {
                    this.series_list = this.base.series_list[this.current_product];
                }
                else {
                    this.is_valid_parameters = false;
                }
            }
            else if (status === 'career') {
                if (item !== '') {
                    this.current_series = item;
                }
                if (this.series_list.indexOf(this.current_series) > -1) {
                    this.career_list = this.base.series[this.current_product][this.current_series].career_list;
                }
                else {
                    this.is_valid_parameters = false;
                }
            }
            else if (status === 'device') {
                if (item !== '') {
                    this.current_career = item;
                }
                if (this.career_list.indexOf(this.current_career) > -1) {
                    this.device_list = this.base.series[this.current_product][this.current_series].career[this.current_career].device_list;

                    if (this.device_list[0] === "") {
                        this.goStatus('result', '');
                    }
                }
                else {
                    this.is_valid_parameters = false;
                }
            }
            else if (status === 'result') {
                let num_supported = 0;
                let num_unsupported = 0;

                this.current_device = item;

                this.is_ios14 = false;
                this.is_ios14_3 = false;
                this.is_iphone12 = false;
                this.is_iphone8 = false;
                this.is_iphoneX = false;
                this.is_iphone6 = false;
                this.is_appleWatch = false;
                this.is_link_true = false;
                this.result_model = "";
                this.is_unsupported = false;
                this.is_um340R = false;

                if (this.device_list.indexOf(this.current_device) > -1) {
                    this.result = this.base.series[this.current_product][this.current_series].career[this.current_career].device[this.current_device];
                }
                else {
                    this.is_valid_parameters = false;
                    return;
                }

                if (this.result["製品画像URL"] === "") {
                    this.current_device_url = '/assets/img/product/certified-product/img-device.png?211014';
                }
                else {
                    this.current_device_url = this.result["製品画像URL"];
                }

                this.current_result = 'support';
                if (this.result['4Gデータ通信（楽天回線／KDDI回線）'] === '') {
                    for (let i = 0; i < 10; i++) {
                        this.check_list[i] = 'unknown';
                    }
                    if (this.result['5Gデータ通信'] === '-') {
                      this.check_list[8] = 'none';
                    }
                    this.current_result = 'unknown';
                }
                else {
                  if (this.result['4Gデータ通信（楽天回線／KDDI回線）'] === '〇') {
                      this.check_list[0] = 'support';
                      num_supported++;
                  }
                  else if (this.result['4Gデータ通信（楽天回線／KDDI回線）'] === '-') {
                      this.check_list[0] = 'none';
                  }
                  else {
                      this.check_list[0] = 'disabled';
                      num_unsupported++;
                  }
                  if (this.result['通話（楽天回線／KDDI回線）'] === '〇') {
                      this.check_list[1] = 'support';
                      num_supported++;
                  }
                  else if (this.result['通話（楽天回線／KDDI回線）'] === '-') {
                      this.check_list[1] = 'none';
                  }
                  else {
                      this.check_list[1] = 'disabled';
                      num_unsupported++;
                  }
                  /*
                  if(this.check_list[0] === 'disabled' && this.check_list[1] === 'disabled') {
                      this.result['SMS（楽天回線)'] = '×';
                      this.result['SMS（KDDI回線)'] = '×';
                  }
                  */
                  if (this.result['SMS'] === '〇') {
                     this.check_list[2] = 'support';
                      num_supported++;
                  }
                  else if (this.result['SMS'] === '-') {
                     this.check_list[2] = 'none';
                  }
                  else {
                      this.check_list[2] = 'disabled';
                      num_unsupported++;
                  }
                  // if (this.result['SMS（KDDI回線)'] === '〇') {
                  //     this.check_list[3] = 'support';
                  //     num_supported++;
                  // }
                  // else if (this.result['SMS（KDDI回線)'] === '-') {
                  //     this.check_list[3] = 'none';
                  // }
                  // else {
                  //     this.check_list[3] = 'disabled';
                  //     num_unsupported++;
                  // }
                  this.apn_text = 'APN自動設定　海外／国内';
                  if (this.result['APN自動設定海外／国内'] === '〇') {
                      this.check_list[4] = 'support';
                      num_supported++;
                  }
                  else if (this.result['APN自動設定海外／国内'] === '〇(海外非サポート) ') {
                      this.check_list[4] = 'support';
                      this.apn_text = 'APN自動設定　国内';
                      num_supported++;
                  }
                  else if (this.result['APN自動設定海外／国内'] === '-') {
                      this.check_list[4] = 'none';
                  }
                  else if (
                    this.result['APN自動設定海外／国内'] === '△' ||
                    this.result['APN自動設定海外／国内'] === '一部〇の可能性あり'
                  ) {
                      this.check_list[4] = 'unknown';
                      num_unsupported++;
                  }
                  else {
                      this.check_list[4] = 'disabled';
                      num_unsupported++;
                  }
                  // if (this.result['接続先回線切替'] === '〇') {
                  //     this.check_list[5] = 'support';
                  //     num_supported++;
                  // }
                  // else if (this.result['接続先回線切替'] === '-') {
                  //     this.check_list[5] = 'none';
                  // }
                  // else {
                  //     this.check_list[5] = 'disabled';
                  //     num_unsupported++;
                  // }
                  if (this.result['ETWS'] === '〇') {
                      this.check_list[6] = 'support';
                      num_supported++;
                  }
                  else if (this.result['ETWS'] === '-') {
                      this.check_list[6] = 'none';
                  }
                  else if (
                    this.result['ETWS'] === '△' ||
                    this.result['ETWS'] === '一部〇の可能性あり'
                  ) {
                      this.check_list[6] = 'unknown';
                      num_unsupported++;
                  }
                  else {
                      this.check_list[6] = 'disabled';
                      num_unsupported++;
                  }
                  if (this.result['緊急呼時の高精度な位置情報測位'] === '〇') {
                      this.check_list[7] = 'support';
                      num_supported++;
                  }
                  else if (this.result['緊急呼時の高精度な位置情報測位'] === '-') {
                      this.check_list[7] = 'none';
                  }
                  else if (
                    this.result['緊急呼時の高精度な位置情報測位'] === '△' ||
                    this.result['緊急呼時の高精度な位置情報測位'] === '一部〇の可能性あり'
                  ) {
                      this.check_list[7] = 'unknown';
                      num_unsupported++;
                  }
                  else {
                      this.check_list[7] = 'disabled';
                      num_unsupported++;
                  }
                  if (this.result['5Gデータ通信'] === '〇') {
                      this.check_list[8] = 'support';
                      num_supported++;
                  }
                  else if (this.result['5Gデータ通信'] === '-') {
                      this.check_list[8] = 'none';
                  }
                  else {
                      this.check_list[8] = 'disabled';
                      num_unsupported++;
                  }
                  if (this.result['デュアルSIM'] !== '') {
                      this.check_list[9] = 'support';
                      this.dual_text = this.result['デュアルSIM'];
                  }
                  else {
                      this.check_list[9] = 'none';
                      this.dual_text = '';
                  }
                  }
                  if (this.result['機種名'] === "iPhone SE (第2世代)") {
                      this.is_ios14 = true;
                  }
                  if (this.result['機種名'] === "Google Pixel 6a") {
                      this.apn_text = 'APN自動設定　海外／国内';
                  }

                  if (num_supported === 0) {
                      this.current_result = 'disabled';
                  }
                  else if (num_unsupported > 0) {
                      this.current_result = 'unsupported';
                  }
                  else {
                      if (this.result['対応製品'] === "△") {
                          this.current_result = 'unsupported';
                      }
                      else if (this.result['対応製品'] === "×") {
                          this.is_unsupported = true;
                      }
                  }

                  if (this.result['初期設定方法を見る'].indexOf('#') > 0) {
                      let link_url = this.result['初期設定方法を見る'].split('#');
                      this.result['初期設定方法を見る'] = link_url[0] + "?l-id=product_byod_guide_setting#" + link_url[1];
                  }
                  else if (this.result['初期設定方法を見る'].length > 0) {
                      this.result['初期設定方法を見る'] += "?l-id=product_byod_guide_setting";
                  }

                  if (this.result['初期設定方法を見る'] === 'https://network.mobile.rakuten.co.jp/guide/setting/ios/') {

                      switch (this.current_career) {
                          case '楽天モバイル（楽天回線）':
                          case 'NTTドコモ':
                          case 'au':
                          case 'ソフトバンク':
                          case 'その他（SIMフリースマホ）':
                              switch (this.result['機種名']) {
                                  case "iPhone 12":
                                  case "iPhone 12 Pro":
                                  case "iPhone 12 mini":
                                  case "iPhone 12 Pro Max":
                                  case "iPhone SE (第2世代)":
                                  case "iPhone 11":
                                  case "iPhone 11 Pro":
                                  case "iPhone 11 Pro Max":
                                  case "iPhone XS":
                                  case "iPhone XS Max":
                                  case "iPhone XR":
                                  case "iPhone X":
                                  case "iPhone 8":
                                  case "iPhone 8 Plus":
                                  case "iPhone 7":
                                  case "iPhone 7 Plus":
                                  case "iPhone 6s":
                                  case "iPhone 6s Plus":
                                  case "iPhone SE (第1世代)":
                                      this.is_link_true = true;
                                      break;
                              }

                              if (this.result['動作確認済モデル番号'].length > 0) {
                                  this.result_model = this.result['動作確認済モデル番号'];
                              }
                              break;
                      }

                      switch (this.current_career) {
                          case '楽天モバイル（楽天回線）':
                              switch (this.result['機種名']) {
                                  case "iPhone 12":
                                  case "iPhone 12 Pro":
                                  case "iPhone 12 mini":
                                  case "iPhone 12 Pro Max":
                                      this.is_ios14_3 = true;
                                      break;
                              }
                              break;
                          case 'その他（SIMフリースマホ）':
                              switch (this.result['機種名']) {
                                  case "iPhone 12":
                                  case "iPhone 12 Pro":
                                  case "iPhone 12 mini":
                                  case "iPhone 12 Pro Max":
                                      this.is_ios14_3 = true;
                                      break;
                              }
                              break;
                          case 'NTTドコモ':
                              switch (this.result['機種名']) {
                                  case "iPhone 12":
                                  case "iPhone 12 Pro Max":
                                  case "iPhone 12 mini":
                                      this.is_ios14_3 = true;
                                      break;
                              }
                              break;
                          case 'au':
                              switch (this.result['機種名']) {
                                  case "iPhone 12 Pro":
                                      this.is_ios14_3 = true;
                                      break;
                              }
                              break;
                      }
                  }
                  switch (this.result['機種名']) {
                      case "iPhone 12":
                      case "iPhone 12 Pro":
                      case "iPhone 12 mini":
                      case "iPhone 12 Pro Max":
                          this.is_iphone12 = true;
                          break;
                      case "iPhone SE (第2世代)":
                      case "iPhone 11":
                      case "iPhone 11 Pro":
                      case "iPhone 11 Pro Max":
                      case "iPhone XS":
                      case "iPhone XS Max":
                      case "iPhone XR":
                      case "iPhone X":
                          this.is_iphoneX = true;
                          break;
                      case "iPhone 8":
                      case "iPhone 8 Plus":
                          this.is_iphone8 = true;
                          break;
                      case "iPhone 7":
                      case "iPhone 7 Plus":
                      case "iPhone 6s":
                      case "iPhone 6s Plus":
                      case "iPhone SE (第1世代)":
                          this.is_iphone6 = true;
                          break;
                  }
                }

                if (this.result['機種名'] === "uM340R") {
                  this.is_um340R = true;
                }

                if(this.result['シリーズ名'] === "Apple Watch"){
                  this.is_appleWatch = true;
                }

                if (item === '+F FS030W') {
                    this.is_plus_F_FS030W = true;
                } else {
                    this.is_plus_F_FS030W = false;
                }
            }
        },
}

</script>
