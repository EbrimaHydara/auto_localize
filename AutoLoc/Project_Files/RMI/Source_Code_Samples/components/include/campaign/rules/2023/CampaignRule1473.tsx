import { CpnListMark1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule1473 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1473</p>
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
            <TxtEmp01>■ お申し込み期間</TxtEmp01>
            <br />
            - Web　2022年3月25日（金）9:00～2022年6月30日（木）23:59
            <br />-
            店舗（楽天モバイルショップ）　2022年3月25日（金）開店～2022年6月30日（木）閉店
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記キャンペーン期間内に以下条件を満たした楽天会員の方
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            【1】「電話番号シェアサービス」オプションに、お申し込み
          </TxtEmp01>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">
            月額利用料金550円（税込）が利用開始日から3カ月（90日間）無料
          </TxtEmp01>
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
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>
              そのほか、<TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と判断した場合
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
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合、キャンペーンを終了とさせていただく場合があります
            </li>
            <li>記載の内容は2022年3月25日（金）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
