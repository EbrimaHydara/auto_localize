import {
  CpnTitlelv1,
  CpnListMark1,
  CpnListMark2,
  CpnListMark2Normal,
  CpnListOrderedLv2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule1819 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1819</p>
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
          <p>
            <TxtEmp01>■ プランのお申し込み期間</TxtEmp01>
            <br />
            - Web　2023年2月15日(水)07:00～終了日未定
            <br />-
            店舗（楽天モバイルショップ）　2023年2月15日（水）開店～終了日未定
          </p>
          <p>
            <TxtEmp01>■ 製品のご購入期間</TxtEmp01>
            <br />
            - Web　2023年2月15日(水)07:00～終了日未定
            <br />-
            店舗（楽天モバイルショップ）　2023年2月15日（水）開店～終了日未定
          </p>
          <p>
            <TxtEmp01>■ プラン利用開始期限</TxtEmp01>
            <br />
            製品到着または店頭で購入した日の翌月末日23:59まで
          </p>
          <p>
            <TxtEmp01>■ 「Rakuten Link」利用期限</TxtEmp01>
            <br />
            製品到着または店頭で購入した日の翌月末日23:59まで
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】、【4】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnListMark1>
            <li>
              特典はおひとり様1度のみ。楽天回線を初めてお申し込みいただいた場合に適用となります。
            </li>
          </CpnListMark1>
          <div>
            <CpnTitlelv1 as="p">
              <span>【1】</span>
              「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
            </CpnTitlelv1>
            <CpnListOrderedLv2>
              <li>新規お申し込み</li>
              <li>他社からの乗り換え（MNP）でお申し込み</li>
              <li>
                楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
              </li>
            </CpnListOrderedLv2>
            <CpnListMark1>
              <li>
                「Rakuten UN-LIMIT
                VII」から「Rakuten最強プラン」への移行は対象外となります。
              </li>
              <TxtEmp02 as="li">
                「Rakuten最強プラン（データタイプ）」は対象外です
              </TxtEmp02>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【2】</span>
              「Rakuten最強プラン」お申し込みと同時に対象製品いずれかをご購入
            </CpnTitlelv1>
            <CpnListMark2Normal>
              <li>iPhone 15 Pro Max</li>
              <li>iPhone 15 Pro</li>
              <li>iPhone 15 Plus</li>
              <li>iPhone 15</li>
              <li>iPhone 14 Plus</li>
              <li>iPhone 14</li>
              <li>iPhone SE（第3世代）</li>
              <li>iPhone 13</li>
              <li>
                <del>iPhone 14 Pro Max</del>
              </li>
              <li>
                <del>iPhone 14 Pro</del>
              </li>
              <li>
                <del>iPhone 13 mini</del>
              </li>
              <li>
                <s>iPhone 13 Pro Max</s>
              </li>
              <li>
                <s>iPhone 13 Pro</s>
              </li>
              <li>
                <s>iPhone 12</s>
              </li>
            </CpnListMark2Normal>
            <CpnListMark1>
              <li>
                2023年3月24日よりiPhone 13 Pro Max、iPhone 13 Pro、iPhone
                12は対象外となりました。
              </li>
              <li>
                2023年9月15日よりiPhone 15 Pro Max、iPhone 15 Pro、iPhone 15
                Plus、iPhone 15を追加しました。
              </li>
              <li>
                2023年11月24日9:00よりiPhone 13 miniは対象外となりました。
              </li>
              <li>
                2024年1月17日9:00よりiPhone 14 Pro Max、iPhone 14
                Proは対象外となりました。
              </li>
              <TxtEmp02 as="li">
                在庫が少ない製品もございます。あらかじめご了承ください。
              </TxtEmp02>
              <TxtEmp02 as="li">
                「Rakuten最強プラン」お申し込みから6か月後末日までに製品の到着を確認できない場合、キャンペーン適用対象外とさせていただきます。
              </TxtEmp02>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【3】</span>
              製品到着※または店頭で購入した日の翌月末日23:59までに「Rakuten最強プラン」の利用開始
            </CpnTitlelv1>
            <CpnListMark1>
              <li>当社に配送完了データが通知された日</li>
            </CpnListMark1>
            <TxtEmp01 as="p">【プラン利用開始日とは】</TxtEmp01>
            <CpnListMark2Normal>
              <li>
                <p>
                  新規お申し込みの場合　※（1）（2）のいずれか早い方がプラン利用開始日となります
                </p>
                <CpnListOrderedLv2>
                  <li>当社に配送完了データが通知された日</li>
                  <li>
                    プラン（SIMカード、eSIM）にて楽天モバイルの電波が利用できるようになった日
                  </li>
                </CpnListOrderedLv2>
              </li>
              <li className={Utils['Mt-16']}>
                <p>他社から乗り換え（MNP）の場合</p>
                <p>
                  プラン（SIMカード、eSIM）にて楽天モバイルの電波が利用できるようになった日
                </p>
              </li>
              <li className={Utils['Mt-16']}>
                <p>
                  楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）した場合
                </p>
                <p>
                  プラン（SIMカード、eSIM）にて楽天モバイルの電波が利用できるようになった日
                </p>
              </li>
            </CpnListMark2Normal>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【4】</span>
              製品到着※または店頭で購入した日の翌月末日23:59までに「Rakuten
              Link」のご利用
            </CpnTitlelv1>
            <CpnListMark1>
              <li>当社に配送完了データが通知された日</li>
            </CpnListMark1>
            <p className={Utils['Mt-8']}>
              「Rakuten最強プラン」をお申し込みした回線で「Rakuten
              Link」を用いた発信で10秒以上の通話
            </p>
            <div className={Utils['Mt-16']}>
              <TxtEmp02 as="p" className={Utils['Mb-8']}>
                【Rakuten Link アプリご利用方法】
              </TxtEmp02>
              <p>
                下記URLの「Rakuten Linkのご利用方法」をご確認ください
                <br />
                <a href="https://network.mobile.rakuten.co.jp/guide/rakuten-link/">
                  https://network.mobile.rakuten.co.jp/guide/rakuten-link/
                </a>
              </p>
              <CpnListMark2Normal>
                <li>通話方法：『電話をかける』の項目をご確認ください</li>
              </CpnListMark2Normal>
            </div>
            <div className={Utils['Mt-16']}>
              <TxtEmp02 as="p" className={Utils['Mb-8']}>
                【Rakuten Link利用履歴の確認方法】
              </TxtEmp02>
              <p>
                下記URLの「キャンペーンにおけるRakuten
                Linkの利用について」をご確認ください
                <br />
                <a href="https://network.mobile.rakuten.co.jp/faq/detail/00001919/">
                  https://network.mobile.rakuten.co.jp/faq/detail/00001919/
                </a>
              </p>
              <CpnListMark2Normal>
                <li>
                  電話の発信時、（0570）（0180）などの他社接続サービス、♯ダイヤル番号、プレフィックス番号を付けて発信した場合は、特典対象外となります
                </li>
              </CpnListMark2Normal>
            </div>
          </div>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <div>
            <TxtEmp01 as="p" className={Utils['Mb-8']}>
              ■ 特典内容
            </TxtEmp01>
            <TxtEmp01 as="p">6,000ポイントプレゼント</TxtEmp01>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p" className={Utils['Mb-8']}>
              ■ ポイント付与日
            </TxtEmp01>
            <TxtEmp01 as="p">
              「Rakuten最強プラン」のプラン利用開始および「Rakuten
              Link」の利用が確認された月の翌々月末日ごろに付与
            </TxtEmp01>
            <CpnListMark1>
              <li>
                例）2月にすべての条件を達成した場合には、その翌々月である4月末日ごろにポイント付与となります
              </li>
              <li>楽天ポイントの付与は、楽天モバイルより行います</li>
              <li>権利の譲渡はできません</li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p" className={Utils['Mb-8']}>
              ■ ポイント有効期間
            </TxtEmp01>
            <TxtEmp01 as="p">ポイント付与日を含めて6カ月</TxtEmp01>
            <CpnListMark1>
              <li>
                <a href="https://ichiba.faq.rakuten.net/detail/000006532">
                  期間限定ポイントについて
                </a>
              </li>
              <li>
                有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正などが生じた場合には返還されません。
              </li>
            </CpnListMark1>
          </div>
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
              楽天モバイルショップ、楽天モバイルオンライン以外で購入した場合
            </li>
            <li>
              ご契約者
              本人／利用者確認の不備や、MNPの手続きの不備等により申し込みキャンセルとなった場合
            </li>
            <li>
              <CpnListMark2>
                <li>
                  プラン利用開始の手続き方法につきましては、
                  <a href="https://network.mobile.rakuten.co.jp/faq/detail/00001648/">
                    こちらのSIMカード版スタートガイドまたはeSIM版スタートガイド
                  </a>
                  を参照ください
                </li>
              </CpnListMark2>
            </li>
            <li>
              期限までに
              <TxtEmp01 as="span">「Rakuten Link」を利用されなかった</TxtEmp01>
              場合
            </li>
            <li>
              ポイント付与までに楽天会員から<TxtEmp01 as="span">退会</TxtEmp01>
              している場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01 as="span">規約などに違反</TxtEmp01>した場合
            </li>
            <li>
              そのほか、
              <TxtEmp01 as="span">当社が会員として不適格である</TxtEmp01>
              と判断した場合
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」をお申し込みした場合
            </TxtEmp02>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」のご契約が過去にある場合
            </TxtEmp02>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">
            以下のキャンペーンは併用可能となります。以下記載のキャンペーン以外は併用不可となります。
          </TxtEmp02>
          <CpnListMark2>
            <li>
              <del>
                【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
              </del>
            </li>
            <li>
              楽天モバイル買い替え超トクプログラムを利用してiPhone購入&iPhone下取りで5,000ポイント還元！キャンペーン
              （キャンペーンコード：1899）
            </li>
            <li>
              iPhone購入＆対象のiPhone下取りで、5,000ポイント還元キャンペーン
              （キャンペーンコード：2004）
            </li>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント
              （キャンペーンコード：2091）
            </li>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン（キャンペーンコード：2142）
            </li>
            <li>
              新規ご契約・プラン変更（移行）の方対象！Rakuten最強プランご契約とiPhone
              対象製品ご購入でさらに2,000ポイントバックキャンペーン（キャンペーンコード：2144）
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を一括払いもしくは24回払いのご購入で割引キャンペーン（キャンペーンコード：2169）
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を買い替え超トクプログラム利用のご購入でポイントバックキャンペーン（キャンペーンコード：2231）
            </li>
          </CpnListMark2>
          <CpnListMark1>
            <li>
              2024年2月1日0:00より、【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）、【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）は併用不可となりました
            </li>
            <li>
              2024年3月15日9:00より、【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）は併用可能となりました
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用不可キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            以下のキャンペーンは、<TxtEmp02 as="span">併用不可</TxtEmp02>
            となります
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ・以下のキャンペーン特典が適用となっている場合、本キャンペーンは対象外になります。
          </TxtEmp01>
          <CpnListMark2>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
            </li>
            <li>
              Rakutenオリジナル製品
              1円キャンペーン（キャンペーンコード：1875）
            </li>
            <li>
              「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン（キャンペーンコード：2006）
            </li>
            <li>
              <del>
                【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント
                （キャンペーンコード：2091）
              </del>
            </li>
            <li>
              【Android対象製品限定】特価キャンペーン（キャンペーンコード：2178）
            </li>
          </CpnListMark2>
          <CpnListMark1>
            <li>
              2024年2月1日0:00より、【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）、【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）は併用不可となりました
            </li>
            <li>
              2024年3月15日9:00より、【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）は併用可能となりました
            </li>
          </CpnListMark1>

          <TxtEmp01 as="p">
            ・本キャンペーン特典が適用となっている場合、以下キャンペーンは対象外になります。
          </TxtEmp01>
          <CpnListMark2>
            <li>
              持ち込みスマホあんしん保証１カ月利用料相当ポイント還元キャンペーン（キャンペーンコード：2067）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1 className={Utils['Mt-0']}>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              製品の台数には限りがございます。なくなり次第終了とさせていただく場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合、キャンペーンを終了とさせていただく場合があります
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
