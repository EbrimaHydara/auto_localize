import styled from 'styled-components'
import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnTitlelv1,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02, TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

const TxtStrikethrough = styled.span`
  text-decoration-line: line-through;
`

export const CampaignRule2178 = () => {
  return (
    <>
      <TxtCap as="ul" className={Utils['Mt-8']}>
        <TxtEmp02 as="li">
          ※不正利用、不正転売などの目的で本キャンペーンを適用、またはそのおそれがあると当社がみなした場合はお申し込みをキャンセルさせていただきます。
        </TxtEmp02>
        <TxtEmp02 as="li">
          ※おひとり様につき、Xperia 10 V、Galaxy A23 5G、AQUOS wish3、OPPO Reno9
          A、AQUOS sense8を合計で1点までの適用となります
        </TxtEmp02>
      </TxtCap>
      <DescriptionListDefault className={Utils['Mt-24']}>
        <div>
          <dt>キャンペーンコード</dt>
          <dd>
            <p>2178</p>
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
              <li>Web　2024年2月16日（金）09:00～終了日未定</li>
              <li>
                店舗（楽天モバイルショップ）　2024年2月16日（金）開店～終了日未定
              </li>
            </CpnListMark2Normal>
            <TxtEmp01 as="p" className={Utils['Mt-16']}>
              ■ 製品のご購入期間
            </TxtEmp01>
            <CpnListMark2Normal>
              <li>Web　2024年2月16日（金）09:00～終了日未定</li>
              <li>
                店舗（楽天モバイルショップ）　2024年2月16日（金）開店～終了日未定
              </li>
            </CpnListMark2Normal>
          </dd>
        </div>
        <div>
          <dt>キャンペーン条件</dt>
          <dd>
            <TxtEmp01 as="p">
              上記各項目の期間内に【1】、【2】の条件をすべて満たした楽天会員の方
            </TxtEmp01>
            <TxtCap className={Utils['Mt-8']} as="p">
              <TxtEmp02>
                ※おひとり様につき、Xperia 10 V、Galaxy A23 5G、AQUOS wish3、OPPO
                Reno9 Aを合計で1点までの適用となります
              </TxtEmp02>
            </TxtCap>
            <CpnTitlelv1 className={Utils['Mt-16']}>
              <span>【1】</span>
              「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
            </CpnTitlelv1>
            <p>（1）新規お申し込み</p>
            <p>
              （2）他社からの乗り換え（MNP）でお申し込み
              <br />
              <span className={Utils['Pl-16']}>
                ※おひとり様につき、Xperia 10 V、Galaxy A23 5G、AQUOS wish3、OPPO
                Reno9 A、AQUOS sense8を合計で1点までの適用となります
              </span>
            </p>
            <p>
              （3）楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
            </p>
            <p className={Utils['Pl-16']}>
              ※「Rakuten UN-LIMIT
              VII」から「Rakuten最強プラン」への移行は対象外となります。
              <br />
              ※一度に複数製品のお申し込みをされた場合、キャンペーンは1製品にしか適用されません
              <br />
              ※「Rakuten最強プラン（データタイプ）」は対象外です
            </p>
            <CpnTitlelv1 className={Utils['Mt-16']}>
              <span>【2】</span>
              「Rakuten最強プラン」お申し込みと同時に対象製品いずれかをご購入
            </CpnTitlelv1>
            <CpnListMark2Normal>
              <li>Xperia 10 V</li>
            </CpnListMark2Normal>
            <p>本体価格から26,930円割引（税込）</p>
            <CpnListMark2Normal>
              <li>
                <TxtStrikethrough>Galaxy A23 5G</TxtStrikethrough>
              </li>
              <li>AQUOS wish3</li>
              <li>OPPO Reno9 A</li>
              <li>AQUOS sense8</li>
            </CpnListMark2Normal>
            <p>本体価格から20,000円割引（税込）</p>
            <CpnListMark1>
              <li>2024年03月01日09:00にOPPO Reno9 Aを追加しました</li>
              <li>2024年5月22日09:00にAQUOS sense8を追加しました</li>
              <li>2024年5月22日08:59にGalaxy A23は販売終了しました</li>
            </CpnListMark1>
            <TxtEmp02 as="p" className={Utils['Mt-8']}>
              本キャンペーン適用で、お申し込み画面にて上記割引が適用された金額が表示されます
            </TxtEmp02>
          </dd>
        </div>
        <div>
          <dt>特典適用対象外</dt>
          <dd>
            <TxtEmp01 as="p">
              以下の条件に当てはまる場合は、
              <TxtEmp02>特典適用対象外</TxtEmp02>
              となります
            </TxtEmp01>
            <CpnListMark1>
              <li>
                当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
              </li>
              <TxtEmp02 as="li">
                2024年2月16日（金）09:00以降、「【Android対象製品限定】特価キャンペーン」を適用した購入で、おひとり様につきXperia
                10 V、Galaxy A23 5G、AQUOS wish3、OPPO Reno9 A、AQUOS
                sense8が1点を超える場合は対象外となります
              </TxtEmp02>
              <li>
                楽天モバイルショップ、楽天モバイルオンライン以外で購入した場合
              </li>
              <li>
                ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
                <TxtEmp01 as="span">申し込みキャンセル</TxtEmp01>となった場合
              </li>
              <li>
                当社または楽天グループ株式会社が定める
                <TxtEmp01 as="span">規約などに違反</TxtEmp01>した場合
              </li>
              <li>
                不正利用、不正転売などの目的で本キャンペーンを適用、又はそのおそれがあると当社がみなした場合
              </li>
              <li>
                そのほか、当社が会員として不適格である と合理的に判断した場合
              </li>
              <li>「Rakuten最強プラン（データタイプ）」をお申し込みした場合</li>
            </CpnListMark1>
          </dd>
        </div>
        <div>
          <dt>併用可能キャンペーン</dt>
          <dd>
            <TxtEmp02>
              本キャンペーンとその他のキャンペーンは併用不可となります。
            </TxtEmp02>
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
                本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法上の範囲内に制限される場合があります
              </li>
              <li>
                製品の台数には限りがございます。なくなり次第終了とさせていただく場合があります
              </li>
              <li>
                本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合、キャンペーンを終了とさせていただく場合があります
              </li>
              <li>「Rakuten最強プラン（データタイプ）」は対象外です</li>
              <li>記載の内容は2024年5月22日（水）時点の情報となります</li>
            </CpnListMark1>
          </dd>
        </div>
      </DescriptionListDefault>
    </>
  )
}
