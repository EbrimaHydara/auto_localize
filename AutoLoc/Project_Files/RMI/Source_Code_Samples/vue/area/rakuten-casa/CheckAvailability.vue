<template>
  <div id="envcheck">
    <div v-if="current_status === 'rmContract'" class="area-casa-envcheck-Hero_Wrapper">
      <div class="area-casa-envcheck-Hero">
        <div class="area-casa-envcheck-Hero_Inner">
          <div class="l-System_Container">
            <h1 class="c-Heading_Lv1">Rakuten Casaを利用できるか<br>確認する</h1>
            <p class="u-Adjust_Pt-16">Rakuten Casaをご利用予定の通信環境で、<br>本製品を利用できるかご確認ください。</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="l-System_Container u-Adjust_Pt-32 u-Adjust_Pb-24">
        <h1 class="c-Heading_Lv1">Rakuten Casaを利用できるか確認する</h1>
      </div>
    </div>
    <div v-if="current_status === 'rmContract'">
      <div class="area-casa-envcheck-Select">
        <div class="l-System_Container">
          <h3 class="c-Heading_Lv3 area-casa-envcheck-Select_Question">楽天モバイル（楽天回線）を契約し、楽天回線対応製品をご利用ですか？</h3>
          <ul class="area-casa-envcheck-Select_List-yesno u-Adjust_Pt-8">
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_rm_contract === 'yes'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('connectionType', 'rmContract'); addFlag('rm_contract', 'yes');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">はい</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_rm_contract === 'no'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('unavailable', 'rmContract'); addFlag('rm_contract', 'no');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">いいえ</span>
                </span>
              </label>
            </li>
          </ul>
          <div class="area-casa-envcheck-Select_Note u-Adjust_Mt-24">
            <span>※</span><a href="/product/certified-products/" target="_blank">楽天回線対応製品一覧
            <span class="c-Icon_New-window-l"></span></a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="current_status === 'connectionType'">
      <div class="area-casa-envcheck-Select">
        <div class="l-System_Container">
          <h3 class="c-Heading_Lv3 area-casa-envcheck-Select_Question"><span v-if="current_contract_type === 'personal'">ご自宅</span><span v-else>Rakuten Casa設置予定場所</span>で利用しているインターネット回線を選択してください。</h3>
          <h4 class="area-casa-envcheck-Select_Heading-darkblue c-Heading_Lv4 u-Adjust_Mt-24">光コラボレーションモデル事業者（NTT）</h4>
          <ul class="area-casa-envcheck-Select_List-multiple">
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'rakuten-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'rakuten-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">楽天ひかり</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'flets-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'flets-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">フレッツ光ネクスト</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'docomo-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'docomo-hikari')">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">ドコモ光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'softbank-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'softbank-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">SoftBank光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'biglobe-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'biglobe-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">ビッグローブ光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'ocn-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'ocn-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">OCN光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'plala-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'plala-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">ぷらら光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'sonet-hikari-plus'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'sonet-hikari-plus');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">So-net光プラス</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'other-collaborating-operator'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('routerType', 'connectionType'); addFlag('connection_type', 'collaborating-operator'); addFlag('connection_name', 'other-collaborating-operator');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">そのほかの光コラボレーション</span>
                </span>
              </label>
            </li>
          </ul>
          <h4 class="area-casa-envcheck-Select_Heading-darkblue c-Heading_Lv4 u-Adjust_Mt-40">そのほか</h4>
          <ul class="area-casa-envcheck-Select_List-multiple">
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'jcom-net'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('available', 'connectionType'); addFlag('connection_type', 'supporting-operator'); addFlag('connection_name', 'jcom-net');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">J:COM NET</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'au-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('available', 'connectionType'); addFlag('connection_type', 'supporting-operator'); addFlag('connection_name', 'au-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">auひかり</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_name === 'nuro-hikari'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('available', 'connectionType'); addFlag('connection_type', 'supporting-operator'); addFlag('connection_name', 'nuro-hikari');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">NURO光</span>
                </span>
              </label>
            </li>
            <li class="u-Adjust_Pt-16">
              <label class="c-Form_Radioblock">
                <input type="radio" name="rm_contract" :checked="current_connection_type === 'other'">
                <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('unavailable', 'connectionType'); addFlag('connection_type', 'other');">
                  <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">そのほか</span>
                </span>
              </label>
            </li>
          </ul>
          <p class="u-Adjust_Mt-48">
            <a v-if="current_contract_type === 'corporate'" href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('contractType', 'connectionType')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a>
            <a v-else href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('rmContract', 'connectionType')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="current_status === 'routerType'">
      <div class="area-casa-envcheck-Select">
        <div class="l-System_Container">
          <h3 v-if="current_contract_type === 'personal'" class="c-Heading_Lv3 area-casa-envcheck-Select_Question">ご自宅で利用しているインターネット回線を使い、<br class="area-casa-envcheck-Select_Pc-break">以下のサイトにアクセスできますか？</h3>
          <h3 v-else class="c-Heading_Lv3 area-casa-envcheck-Select_Question">Rakuten Casa設置予定場所で利用している<br class="area-casa-envcheck-Select_Pc-break">インターネット回線を使い、以下のサイトにアクセスできますか？</h3>
          <div class="area-casa-envcheck-Select_Bg-white u-Adjust_Mt-24">
            <p class="area-casa-envcheck-Select_Pc-center">Rakuten Casaをご利用いただくには、IPv6対応ルーターが必要になります。<br>ご利用予定の通信環境で以下のサイトにアクセスすると、IPv6対応ルーターを使用されているかご確認いただけます。</p>
            <div class="u-Adjust_Mt-16">
              <ul class="area-casa-envcheck-Select_Btn">
                <li>
                  <a href="https://flets-east.jp/" target="_blank" class="c-Btn_Secondly-auto"><span class="u-Adjust_Pr-8">NTT東日本をご利用の方</span><span class="c-Icon_New-window-l"></span></a>
                </li>
                <li>
                  <a href="https://flets-west.jp/" target="_blank" class="c-Btn_Secondly-auto"><span class="u-Adjust_Pr-8">NTT西日本をご利用の方</span><span class="c-Icon_New-window-l"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="area-casa-envcheck-Select_Arrow">
            <ul class="area-casa-envcheck-Select_List-yesno">
              <li class="u-Adjust_Pt-16">
                <label class="c-Form_Radioblock">
                  <input type="radio" name="router_type" :checked="current_router_type === 'ipv6-supported'">
                  <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('available', 'routerType'); addFlag('router_type', 'ipv6-supported');">
                    <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">はい（サイトが表示された）</span>
                  </span>
                </label>
              </li>
              <li class="u-Adjust_Pt-16">
                <label class="c-Form_Radioblock">
                  <input type="radio" name="router_type" :checked="current_router_type === 'ipv6-unsupported'">
                  <span class="c-Form_Radioblock-wrap area-casa-envcheck-Select_Radio" v-on:click="goStatus('unavailable', 'routerType'); addFlag('router_type', 'ipv6-unsupported');">
                    <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label">いいえ（サイトが表示されなかった）</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <p class="u-Adjust_Mt-48"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('connectionType', 'routerType')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
        </div>
      </div>
    </div>
    <div v-if="current_status === 'available'">
      <div class="area-casa-envcheck-Result">
        <div class="l-System_Container">
          <div v-if="conditionAnd(current_connection_type === 'supporting-operator', previous_status === 'connectionType')">
            <p class="c-Heading_Lv3 area-casa-envcheck-Result_Heading">ご利用の通信環境でRakuten Casaをご利用いただけます。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/area/rakuten-casa/network-environment-check/result-available.png?20201013" width="260" height="160"></div>
            <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
              <a v-if="current_contract_type === 'personal'" class="c-Btn_Primary-large" href="/area/rakuten-casa/checklist-private/index.html?l-id=casa_check_onboarding"><span>Rakuten Casaを申し込む</span></a>
              <a v-else class="c-Btn_Primary-large" href="/area/rakuten-casa/business-application-conditions/?l-id=casa_check_input"><span>Rakuten Casaを申し込む</span></a>
            </div>
            <div class="area-casa-envcheck-Result_Bg-white u-Adjust_Mt-32">
              <p class="area-casa-envcheck-Result_Pc-center c-Heading_Lv4">Rakuten Casaをご利用いただくには</p>
              <p class="area-casa-envcheck-Result_Pc-center u-Adjust_Mt-16"><span class="c-Txt_Emp-01">IPSecパススルー機能を有しているルーター</span>が必要になります。<br class="area-casa-envcheck-Result_Sp-break">ご準備のうえRakuten Casaのお申し込み手続きをお願いいたします。</p>
            </div>
            <p class="u-Adjust_Mt-32"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('connectionType', 'available')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
          </div>
          <div v-if="conditionAnd(current_router_type === 'ipv6-supported', previous_status === 'routerType')">
            <p class="c-Heading_Lv3 area-casa-envcheck-Result_Heading">ご利用の通信環境でRakuten Casaをご利用いただけます。</p>
            <p class="area-casa-envcheck-Result_Pc-center c-Txt_Emp-01 u-Adjust_Mt-16">Rakuten Casaをご利用いただくには、IPv6ブリッジ機能（IPv6プロトコルを透過する機能、または同等の機能）、VPN（IPSec IKE）パススルー機能が必要になります。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/area/rakuten-casa/network-environment-check/result-available.png?20201013" width="260" height="160"></div>
            <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
              <a v-if="current_contract_type === 'personal'" class="c-Btn_Primary-large" href="/area/rakuten-casa/checklist-private/index.html?l-id=casa_check_onboarding"><span>Rakuten Casaを申し込む</span></a>
              <a v-else class="c-Btn_Primary-large" href="/area/rakuten-casa/business-application-conditions/?l-id=casa_check_input"><span>Rakuten Casaを申し込む</span></a>
            </div>
            <div class="area-casa-envcheck-Result_Bg-white u-Adjust_Mt-32">
              <p class="area-casa-envcheck-Result_Pc-center c-Heading_Lv4">ルーターについて</p>
              <ul class="c-List_Text-disc u-Adjust_Mt-16">
                <li>IPv6対応ルーターは、IPv6ブリッジ機能（IPv6プロトコルを透過する機能、または同等の機能）を有効にしてください。</li>
                <li>ルーターの機能や設定方法に関しては、各製造元にお問い合わせください。</li>
              </ul>
              <div class="area-casa-envcheck-Select_Note-flex u-Adjust_Pl-16">
                <ul>
                  <li><a href="https://www.buffalo.jp/support/other/network-ipv6.html#a01" target="_blank">バッファロー<span class="c-Icon_New-window-l"></span></a></li>
                  <li><a href="https://www.aterm.jp/product/atermstation/topics/warpstar/ipv6.html" target="_blank">NEC<span class="c-Icon_New-window-l"></span></a></li>
                  <li><a href="https://www.iodata.jp/pio/io/network/ipv6.htm" target="_blank">IO-DATA<span class="c-Icon_New-window-l"></span></a></li>
                  <li><a href="https://www.elecom.co.jp/support/list/network/ipv6/" target="_blank">ELECOM<span class="c-Icon_New-window-l"></span></a></li>
                  <li><a href="https://www.tp-link.com/jp/support/faq/2383/" target="_blank">TP-Link<span class="c-Icon_New-window-l"></span></a></li>
                </ul>
              </div>
              <p class="area-casa-envcheck-Select_Note u-Adjust_Mt-8 u-Adjust_Pl-16">※上記製造元以外でもIPv6（IPoE）対応及び、IPv6ブリッジ機能、VPN（IPSec IKE）パススルー機能を有しているルーターをご使用であれば、Rakuten Casaをご利用いただけます。</p>
              <ul class="c-List_Text-disc u-Adjust_Mt-16">
                <li>マンション等の集合住宅側から提供されているインターネット回線をご利用の方は、IPv6への対応等に関して、各管理会社等にご確認ください。</li>
              </ul>
            </div>
            <p class="u-Adjust_Mt-32"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('routerType', 'available')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="current_status === 'unavailable'">
      <div class="area-casa-envcheck-Result">
        <div class="l-System_Container">
          <div v-if="conditionAnd(current_rm_contract === 'no', previous_status === 'rmContract')">
            <p class="c-Heading_Lv3 area-casa-envcheck-Result_Heading">Rakuten Casaのご利用には、<br>楽天回線のご契約と、楽天回線対応製品が必要です。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/area/rakuten-casa/network-environment-check/result-unavailable.png?20201013" width="260" height="160"></div>
            <div class="area-casa-envcheck-Result_Bg-white u-Adjust_Mt-32">
              <p class="c-Heading_Lv4 area-casa-envcheck-Result_Pc-center">まずは楽天回線のお申し込みをお願いいたします。</p>
              <div class="u-Adjust_Mt-16 u-Adjust_Align-center">
                <a class="c-Btn_Primary-large" href="/guide/application/"><span>楽天回線を申し込む</span></a>
              </div>
              <p class="area-casa-envcheck-Result_Pc-center u-Adjust_Mt-24">※Rakuten Casaをご利用いただくには<span class="c-Txt_Emp-01">楽天回線対応製品のご利用</span>が必要となりますので、ご注意ください。</p>
              <div class="area-casa-envcheck-Result_Pc-center u-Adjust_Mt-8">
                <a class="c-Link_Txt-inline" href="/product/certified-products/" target="_blank">楽天回線対応製品一覧<span class="c-Icon_New-window-l"></span></a>
              </div>
            </div>
            <p class="u-Adjust_Mt-32"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('rmContract', 'unavailable')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
          </div>
          <div v-if="conditionAnd(current_connection_type === 'other', previous_status === 'connectionType')">
            <p class="c-Heading_Lv3 area-casa-envcheck-Result_Heading">Rakuten Casaのご利用には、<br>楽天モバイルが指定するインターネット回線のご契約が必要です。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/area/rakuten-casa/network-environment-check/result-unavailable.png?20201013" width="260" height="160"></div>
            <div class="area-casa-envcheck-Result_Bg-white u-Adjust_Mt-32">
              <p class="area-casa-envcheck-Result_Pc-center c-Heading_Lv4">楽天モバイルが指定するインターネット回線をご確認ください。</p>
              <div class="u-Adjust_Align-center u-Adjust_Mt-16">
                <a class="c-Btn_Regular-large" href="/area/rakuten-casa/broadband/" target="_blank">指定インターネット回線一覧<span class="c-Icon_New-window-l"></span></a>
              </div>
              <ul class="c-List_Text-disc u-Adjust_Mt-24">
                <li>マンション等の集合住宅側から提供されているインターネット回線をご利用の方は、各管理会社等にご確認ください。</li>
                <li>ご利用中のインターネット回線が「指定インターネット回線一覧」に無い場合は、いずれかのインターネット回線のご契約をご検討ください。</li>
              </ul>
            </div>
            <p class="u-Adjust_Mt-48"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('connectionType', 'unavailable')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
          </div>
          <div v-if="conditionAnd(current_router_type === 'ipv6-unsupported', previous_status === 'routerType')">
            <p class="c-Heading_Lv3 area-casa-envcheck-Result_Heading">お客様の現在の通信環境では<br>Rakuten Casaをご利用いただけません。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-24"><img src="/assets/img/area/rakuten-casa/network-environment-check/result-unavailable.png?20201013" width="260" height="160"></div>
            <div class="area-casa-envcheck-Result_Bg-white u-Adjust_Mt-32">
              <p class="area-casa-envcheck-Result_Pc-center c-Heading_Lv4">Rakuten Casaをご利用いただくには</p>
              <p class="u-Adjust_Mt-16"><span class="c-Txt_Emp-01">ひかり電話（ホームゲートウェイ／ひかり電話ルーター）</span>をご利用いただくか、<span class="c-Txt_Emp-01">IPv6（IPoE）対応およびIPv6ブリッジ機能など<span class="area-casa-envcheck-Result_Emp-exp">※</span>を有しているルーター</span>が必要になります。</p>
              <p>ご準備のうえRakuten Casaのお申し込み手続きをお願いいたします。</p>
              <p class="u-Adjust_Mt-24">※IPv6対応ルーターには、IPv6ブリッジ機能（IPv6プロトコルを透過する機能、または同等の機能）、VPN（IPSec IKE）パススルー機能が必要になります。</p>
            </div>
            <ul class="c-List_Text-disc u-Adjust_Mt-32">
              <li>ルーターの機能や設定方法に関しては、各製造元にお問い合わせください。</li>
            </ul>
            <div class="area-casa-envcheck-Select_Note-flex u-Adjust_Pl-16">
              <ul>
                <li><a href="https://www.buffalo.jp/support/other/network-ipv6.html#a01" target="_blank">バッファロー<span class="c-Icon_New-window-l"></span></a></li>
                <li><a href="https://www.aterm.jp/product/atermstation/topics/warpstar/ipv6.html" target="_blank">NEC<span class="c-Icon_New-window-l"></span></a></li>
                <li><a href="https://www.iodata.jp/pio/io/network/ipv6.htm" target="_blank">IO-DATA<span class="c-Icon_New-window-l"></span></a></li>
                <li><a href="https://www.elecom.co.jp/support/list/network/ipv6/" target="_blank">ELECOM<span class="c-Icon_New-window-l"></span></a></li>
                <li><a href="https://www.tp-link.com/jp/support/faq/2383/" target="_blank">TP-Link<span class="c-Icon_New-window-l"></span></a></li>
              </ul>
            </div>
            <p class="area-casa-envcheck-Select_Note u-Adjust_Mt-8 u-Adjust_Pl-16">※上記製造元以外でもIPv6（IPoE）対応及び、IPv6ブリッジ機能、VPN（IPSec IKE）パススルー機能を有しているルーターをご使用であれば、Rakuten Casaをご利用いただけます。</p>
            <ul class="c-List_Text-disc u-Adjust_Mt-16">
              <li>マンション等の集合住宅側から提供されているインターネット回線をご利用の方は、IPv6への対応等に関して、各管理会社等にご確認ください。</li>
            </ul>
            <p class="u-Adjust_Mt-48"><a href="#" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline" v-on:click="goStatus('routerType', 'unavailable')"><span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="l-System_Container u-Adjust_Pb-64">
      <p class="u-Adjust_Mt-16"><a href="/area/rakuten-casa/" class="area-casa-envcheck-Select_Link-back c-Link_Txt-inline"><span class="c-Icon_Chevron-left"></span>Rakuten Casaの詳細に戻る</a></p>
    </div>
  </div>
</template>

<script>
import {tooltip} from "../../../js/common/component/tooltip";
import 'core-js/modules/es.promise';

export default {
    name: 'checkAvailability',
    data () {
        return {
            current_status: "rmContract",
            previous_status: "",
            current_contract_type: "",
            current_rm_contract: "",
            current_connection_type: "",
            current_connection_name: "",
            current_router_type: "",
        }
    },
    created () {
        let vue = this;

        window.onpopstate = function(e) {

            if(e.state) {
                vue.goStatus(e.state.status, true);
            }
        };

        history.pushState({status: this.current_status}, null, null);
    },
    updated () {
      const targetEnvcheck = document.getElementById("envcheck");
      const rect = targetEnvcheck.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const myTop = rect.top + scrollTop;

      if (rect.top < 0) {
          window.scroll({
              top: myTop,
          });
      }

      tooltip();

      let event;
      if (typeof(window.Event) === 'function') {
        event = new Event('SINGLE_PAGE_APPLICATION_LOAD');
        document.dispatchEvent(event);
      } else {
        try {
          event = document.createEvent('Event');
          event.initEvent('SINGLE_PAGE_APPLICATION_LOAD', true, true);
          document.dispatchEvent(event);
        } catch (e) {}
      }

    },
    methods: {
        conditionOr: function (condA, condB) {
            if (condA || condB) {
                return true;
            } else {
                return false;
            }
        },
        conditionAnd: function (condA, condB) {
            if (condA && condB) {
                return true;
            } else {
                return false;
            }
        },
        goStatus: function (status, prev) {
            this.current_status = status;
            this.previous_status = prev;
            event.preventDefault();
        },
        addFlag: function (key, value) {
            const keyMod = 'current_' + key;
            this[keyMod] = value;
        },
    }
}
</script>
