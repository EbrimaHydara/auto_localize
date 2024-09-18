import { CpnListMark1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2113 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2113</p>
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
          <TxtEmp01 as="p">■ 電話番号シェアサービスのお申し込み期間</TxtEmp01>
          <p className={Utils['Mt-8']}>2023年12月14日（木）9:00～終了日未定</p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記期間内に以下の条件を満たした楽天会員の方
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            【1】「電話番号シェアサービス」オプションにお申し込み
          </TxtEmp01>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ 特典内容
          </TxtEmp01>
          <TxtEmp01>1,650ポイントプレゼント</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01>
            「電話番号シェアサービス」へのご加入が確認された月の翌々月末日ごろに付与
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）12月にすべての条件を達成した場合には、その翌々月である2月末日ごろにポイント付与となります
            </li>
            <li>楽天ポイントの付与は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ ポイント有効期間
          </TxtEmp01>
          <TxtEmp01>ポイント付与日を含めて6カ月</TxtEmp01>
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
            <TxtEmp02>
              以下の条件に当てはまる場合は、特典適用対象外となります
            </TxtEmp02>
          </TxtEmp01>
          <CpnListMark1>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>
              「電話番号シェアサービス
              3カ月利用料相当ポイント還元キャンペーン」の適用回数が、おひとり様1回を超える場合は対象外となります
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              ポイント付与までに楽天会員から<TxtEmp01>退会</TxtEmp01>
              している場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>
              そのほか、<TxtEmp01>当社が会員として不適格</TxtEmp01>
              であると合理的に判断した場合
            </li>
          </CpnListMark1>
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
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、キャンペーンを終了とさせていただく場合があります
            </li>
            <li>記載の内容は2023年12月14日（木）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
