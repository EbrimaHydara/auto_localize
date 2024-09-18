import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02, TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2169 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-8']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2169</p>
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
          <p className={Utils['Mt-8']}>
            - Web　2024年1月17日（水）09:00～終了日未定
            <br />-
            店舗（楽天モバイルショップ）　2024年1月17日（水）開店～終了日未定
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ 製品のご購入期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            - Web　2024年1月17日（水）09:00～終了日未定
            <br />-
            店舗（楽天モバイルショップ）　2024年1月17日（水）開店～終了日未定
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
          </CpnTitlelv1>
          <CpnListOrderedLv2>
            <li>新規お申し込み</li>
            <li>他社からの乗り換え（MNP）でお申し込み</li>
            <li>
              楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
              <CpnListMark1>
                <li>
                  「Rakuten UN-LIMIT
                  VII」から「Rakuten最強プラン」への移行は対象外となります。
                </li>
                <TxtEmp02 as="li">
                  「Rakuten最強プラン（データタイプ）」は対象外です
                </TxtEmp02>
                <TxtEmp02 as="li">
                  「Rakuten最強プラン（データタイプ）」から
                  「Rakuten最強プラン」へプラン変更した場合は対象外です
                </TxtEmp02>
              </CpnListMark1>
            </li>
          </CpnListOrderedLv2>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            「Rakuten最強プラン」お申し込みと同時に対象製品を一括払いもしくは24回払いでご購入
          </CpnTitlelv1>
          <p className={Utils['Mt-8']}>対象製品</p>
          <CpnListMark2Normal>
            <li> iPhone 15 Pro Max</li>
            <li> iPhone 15 Pro</li>
            <li> iPhone 15 Plus</li>
            <li> iPhone 15</li>
            <li> iPhone 14 Plus</li>
            <li> iPhone 14</li>
            <li> iPhone 13</li>
            <li> iPhone SE（第3世代）</li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              2024年2月21日より対象製品をiPhone 14 128GBからiPhone 15 Pro
              Max、iPhone 15 Pro、iPhone 15 Plus、iPhone 15、iPhone 14
              Plus、iPhone 14、iPhone 13に変更しました。
            </li>
            <li>
              2024年3月27日より対象製品にiPhone SE（第3世代）を追加しました。
            </li>
            <li>
              「楽天モバイル買い替え超トクプログラム」利用でのご購入は対象外となります。
            </li>
          </CpnListMark1>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            「Rakuten最強プラン」利用開始
          </CpnTitlelv1>
          <p>【プラン利用開始日とは】</p>
          <CpnListMark2Normal>
            <li>
              新規お申し込みの場合　　※（1）（2）のいずれか早い方がプラン利用開始日となります
              <CpnListOrderedLv2>
                <li>当社に配送完了データが通知された日</li>
                <li>
                  プラン（SIMカード、eSIM）にて「楽天モバイル」の提供が開始された日
                </li>
              </CpnListOrderedLv2>
            </li>
            <li>
              他社から乗り換え（MNP）の場合
              <br />
              プラン（SIMカード、eSIM）にて「楽天モバイル」の提供が開始された日
            </li>
            <li>
              楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）した場合
              <br />
              プラン（SIMカード、eSIM）にて「楽天モバイル」の提供が開始された日
            </li>
          </CpnListMark2Normal>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            20,000円割引（税込）
          </TxtEmp01>
          <CpnListMark2Normal>
            <li> iPhone 15 Pro Max</li>
            <li> iPhone 15 Pro</li>
            <li> iPhone 15 Plus</li>
            <li> iPhone 15</li>
            <li> iPhone 14 Plus</li>
            <li> iPhone 14</li>
            <li> iPhone 13</li>
          </CpnListMark2Normal>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            10,000円割引（税込）
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>
              iPhone SE（第3世代）
              <br />
              <TxtCap className={Utils['Mt-8']}>
                ※iPhone
                SE（第3世代）64GBについては、2024年3月27日からの楽天モバイルの販売価格からの値引です。
              </TxtCap>
            </li>
          </CpnListMark2Normal>
        </dd>
      </div>
      <div>
        <dt>特典適用対象外</dt>
        <dd>
          <TxtEmp02 as="p">
            以下の条件に当てはまる場合は、特典適用対象外となります
          </TxtEmp02>
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
              「Rakuten最強プラン」の利用開始がされなかった場合
              <CpnListMark2Normal>
                <li>
                  プラン利用開始の手続き方法につきましては、こちらのSIMカード版スタートガイドまたはeSIM版スタートガイドを参照ください
                </li>
              </CpnListMark2Normal>
            </li>
            <li>
              当社または楽天グループ株式会社が定める規約などに違反した場合
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」をお申し込みした場合
            </TxtEmp02>
            <li>
              そのほか、当社が会員として不適格であると合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">以下のキャンペーンは併用可能となります。</TxtEmp02>
          <CpnListMark2Normal>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
            </li>
            <li>
              {' '}
              iPhone
              対象端末ポイントバックキャンペーン（キャンペーンコード：1819）
            </li>
            <li>
              {' '}
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）
            </li>
            <li>
              {' '}
              【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン（キャンペーンコード：2142）
            </li>
            <li>
              {' '}
              【ショップ限定】Rakuten最強プランをもう1回線お申し込みで3,000ポイント（キャンペーンコード：2227）
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）適用の場合、【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）、【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン（キャンペーンコード：2142）は適用されません。
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
          <CpnListMark2Normal>
            <li>
              Rakutenオリジナル製品
              1円キャンペーン（キャンペーンコード：1875）
            </li>
            <li>
              【Android対象製品限定】特価キャンペーン（キャンペーンコード：2178）
            </li>
          </CpnListMark2Normal>
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
              製品の台数には限りがございます。なくなり次第終了とさせていただく場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合、キャンペーンを終了とさせていただく場合があります
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」から
              「Rakuten最強プラン」へプラン変更した場合は対象外です
            </TxtEmp02>
            <li>記載の内容は2024年3月27日（水）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
