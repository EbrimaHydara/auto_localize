import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnListMark2,
  CpnTitlelv1,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

// ルールを更新する場合はこちらも→ campaign-rule-2091.ejs
export const CampaignRule2091 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2091</p>
          <CpnListMark1>
            <li>
              本キャンペーンに関してお問い合わせの際は、上記「キャンペーンコード」をお伝えください
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン期間</dt>
        <dd>
          <TxtEmp01 as="p">■ プランのお申し込み期間</TxtEmp01>
          <CpnListMark2Normal>
            <li>Web　2023年11月1日（水）0:00～終了日未定</li>
            <li>
              店舗（楽天モバイルショップ）　2023年11月1日（水）開店～終了日未定
            </li>
          </CpnListMark2Normal>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ プラン利用開始期限
          </TxtEmp01>
          <p className={Utils['Mt-8']}>プランのお申し込みの翌月末日23:59まで</p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■「Rakuten Link」利用期限
          </TxtEmp01>
          <p className={Utils['Mt-8']}>プランのお申し込みの翌月末日23:59まで</p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnListMark1>
            <li>
              特典はおひとり様1度のみ。楽天回線を初めてお申し込みいただいた場合に適用となります。
            </li>
          </CpnListMark1>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            「Rakuten最強プラン」へ、他社からの乗り換え（MNP）でお申し込み
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              楽天モバイル（ドコモ回線・au回線）のメンバーズステーションよりプラン変更（移行）した場合は対象外となります
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
          </CpnListMark1>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>「Rakuten最強プラン」利用開始
          </CpnTitlelv1>
          <p>【プラン利用開始日とは】</p>
          <CpnListMark2Normal>
            <li>
              他社から乗り換え（MNP）の場合
              <br />
              プラン（SIMカード、eSIM）にて「楽天モバイル」の提供が開始された日
            </li>
          </CpnListMark2Normal>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>「Rakuten Link」のご利用
          </CpnTitlelv1>
          <p className={Utils['Mt-16']}>
            「Rakuten最強プラン」をお申し込みした回線で「Rakuten
            Link」を用いた発信で10秒以上の通話
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            【Rakuten Link アプリご利用方法】
          </TxtEmp01>
          <p>
            Rakuten Linkページの「
            <LinkNormal href="https://service.link.link/guide/">
              使い方
            </LinkNormal>
            」をご確認ください
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            【Rakuten Link利用履歴の確認方法】
          </TxtEmp01>
          <p>
            「
            <LinkNormal href="https://network.mobile.rakuten.co.jp/faq/detail/00001919/">
              キャンペーンにおけるRakuten Linkの利用について
            </LinkNormal>
            」をご確認ください
          </p>
          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              電話の発信時、（0570）などの他社接続サービス、♯ダイヤル番号、プレフィックス番号を付けて発信した場合は、特典対象外となります
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>

          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              2024年3月15日（金）9:00以降に「Rakuten最強プラン」のお申し込みをされた方の特典は6,000ポイントに変更となります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            6,000ポイントプレゼント
            <br />
            ポイント付与1回目：2,000ポイント
            <br />
            ポイント付与2回目：2,000ポイント
            <br />
            ポイント付与3回目：2,000ポイント
          </TxtEmp01>

          <CpnListMark1 className={Utils['Mt-16']}>
            <li>
              2024年2月1日（木）0:00から2024年3月15日（金）8:59までの間に「Rakuten最強プラン」のお申し込みをされた方の特典は13,000ポイントとなります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            13,000ポイントプレゼント
            <br />
            ポイント付与1回目：4,000ポイント
            <br />
            ポイント付与2回目：4,000ポイント
            <br />
            ポイント付与3回目：5,000ポイント
          </TxtEmp01>

          <CpnListMark1 className={Utils['Mt-16']}>
            <li>
              2024年1月31日（水）23:59以前に「Rakuten最強プラン」のお申し込みをされた方の特典は6,000ポイントとなります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            6,000ポイントプレゼント
            <br />
            ポイント付与1回目：2,000ポイント
            <br />
            ポイント付与2回目：2,000ポイント
            <br />
            ポイント付与3回目：2,000ポイント
          </TxtEmp01>

          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            &lt;楽天モバイル公式
            楽天市場店にて6,000円OFFクーポンを使用された方&gt;
          </TxtEmp01>
          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              2024年3月15日（金）9:00以降に楽天モバイル公式
              楽天市場店にて注文をおこなった方は特典が6,000ポイントとなります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            6,000ポイントプレゼント
            <br />
            ポイント付与1回目：2,000ポイント
            <br />
            ポイント付与2回目：2,000ポイント
            <br />
            ポイント付与3回目：2,000ポイント
          </TxtEmp01>

          <CpnListMark1 className={Utils['Mt-16']}>
            <li>
              2024年2月1日（木）0:00から2024年3月15日（金）8:59の間に楽天モバイル公式
              楽天市場店にて注文をおこなった方は特典が7,000ポイントとなります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            7,000ポイントプレゼント
            <br />
            ポイント付与1回目：2,000ポイント
            <br />
            ポイント付与2回目：2,000ポイント
            <br />
            ポイント付与3回目：3,000ポイント
          </TxtEmp01>

          <CpnListMark1 className={Utils['Mt-16']}>
            <li>
              2024年1月31日（水）23:59以前に楽天モバイル公式
              楽天市場店にて注文をおこなった方は特典が6,000ポイントとなります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            6,000ポイントプレゼント
            <br />
            ポイント付与1回目：2,000ポイント
            <br />
            ポイント付与2回目：2,000ポイント
            <br />
            ポイント付与3回目：2,000ポイント
          </TxtEmp01>

          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            「Rakuten最強プラン」の利用開始および「Rakuten
            Link」の利用が確認された月の翌々月末日ごろから3カ月間にわたり付与
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）6月にすべての条件を達成した場合には、その翌々月である8月末日ごろに1回目のポイント付与となり、9月末日ごろに2回目の付与、10月末日ごろに3回目の付与となります
            </li>
            <li>楽天ポイントの付与は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ポイント有効期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ポイント付与日から3カ月後月末まで有効
          </TxtEmp01>
          <CpnListMark1>
            <li>
              <LinkNormal href="https://ichiba.faq.rakuten.net/detail/000006532">
                期間限定ポイントについて
              </LinkNormal>
            </li>
            <li>
              有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正などが生じた場合には返還されません
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>特典適用対象外</dt>
        <dd>
          <TxtEmp01 as="p">
            以下の条件に当てはまる場合は、
            <TxtEmp02>特典適用対象外</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark1>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>
              「【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント」の適用回数が、おひとり様1契約1回を超える場合は対象外となります
            </li>
            <li>
              楽天モバイルショップ、楽天モバイルオンライン、楽天モバイル公式
              楽天市場店以外で購入した場合
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              「Rakuten最強プラン」の利用開始がされなかった場合
              <CpnListMark2Normal>
                <li>
                  プラン利用開始の手続き方法につきましては、
                  <LinkNormal href="/faq/detail/00001648/">こちら</LinkNormal>
                  のSIMカード版スタートガイドまたはeSIM版スタートガイドを参照ください
                </li>
              </CpnListMark2Normal>
            </li>
            <li>
              期限までに「<TxtEmp01>Rakuten Link</TxtEmp01>
              」を利用されなかった場合
            </li>
            <li>
              楽天モバイル公式 楽天市場店でRakuten WiFi Pocket
              2Cを楽天回線プラン（Rakuten最強プラン）セットでご注文した場合
            </li>
            <li>
              楽天モバイルショップ、楽天モバイルオンラインで
              <del>Rakuten Hand 5Gまたは</del>Rakuten WiFi Pocket
              2Cを「Rakuten最強プラン」ご契約と同時に購入した場合
            </li>
            <li>
              ポイント付与までに楽天会員から<TxtEmp01>退会</TxtEmp01>
              している場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」をお申し込みした場合
            </TxtEmp02>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」のご契約が過去にある場合
            </TxtEmp02>
            <li>
              そのほか、<TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">
            以下のキャンペーンは併用可能となります。以下記載のキャンペーン以外は併用不可となります
          </TxtEmp02>
          <CpnListMark2>
            <li>
              楽天モバイル公式 楽天市場店
              対象Android製品とRakuten最強プランセットご注文で6,000円OFFクーポン（キャンペーンコード：1833）
            </li>
            <li>
              楽天モバイル公式 楽天市場店
              対象Apple製品とRakuten最強プランセットご注文で6,000円OFFクーポン（キャンペーンコード：1834）
              <CpnListMark1>
                <li>
                  <s>
                    2024年2月1日（木）0:00以降に上記2キャンペーンを適用した場合、本キャンペーンの特典は7,000ポイントとなります
                  </s>
                </li>
              </CpnListMark1>
            </li>
            <li>
              iPhone
              対象端末ポイントバックキャンペーン（キャンペーンコード：1819）
            </li>
            <li>
              「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン（キャンペーンコード：2006）
              <br />
              ※　キャンペーンコード：1819・2006は2024年3月15日（金）9:00以降は併用可能となります
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を一括払いもしくは24回払いのご購入で割引キャンペーン（キャンペーンコード：2169）
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を買い替え超トクプログラム利用のご購入でポイントバックキャンペーン（キャンペーンコード：2231）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>併用不可キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            以下のキャンペーンは、<TxtEmp02>併用不可</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark2>
            <li>
              Rakutenオリジナル製品 1円キャンペーン（キャンペーンコード：1875）
              <br />
              ※　キャンペーン名を「Rakuten Hand 5G/Rakuten WiFi Pocket
              1円キャンペーン」から「Rakutenオリジナル製品
              1円キャンペーン」に変更しました。{' '}
            </li>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン（キャンペーンコード：2142）
            </li>
            <li>
              {' '}
              新規ご契約・プラン変更（移行）の方対象！Rakuten最強プランご契約とiPhone
              対象製品ご購入でさらに2,000ポイントバックキャンペーン（キャンペーンコード：2144）
            </li>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
            </li>
            <li>
              <s>
                iPhone
                対象端末ポイントバックキャンペーン（キャンペーンコード：1819）
              </s>
            </li>
            <li>
              <s>
                「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン（キャンペーンコード：2006）
              </s>
              <br />
              ※　キャンペーンコード：1819・2006は2024年3月15日（金）9:00以降は併用可能となります
            </li>
            <li>
              【Android対象製品限定】特価キャンペーン（キャンペーンコード：2178）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合がございます
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
            <li>記載の内容は2024年3月27日（水）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
