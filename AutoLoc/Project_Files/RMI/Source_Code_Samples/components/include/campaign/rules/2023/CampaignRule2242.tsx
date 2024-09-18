import { CpnListMark1, CpnTitlelv1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2242 = ({ point }: { point: number }) => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2242</p>
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
          <TxtEmp01 as="p">■ エントリー期間</TxtEmp01>
          <p className={Utils['Mt-8']}>
            　　2024年4月1日（月）10:00～2024年4月30日（火）23:59　
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ データ利用期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            　　2024年4月1日（月）10:00～2024年4月30日（火）23:59　
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】、の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>キャンペーンへのエントリー
          </CpnTitlelv1>
          <p>　エントリー期間内に本キャンペーンページでエントリー</p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            本キャンペーンの開始時点で「Rakuten最強プラン」ご利用中
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              本キャンペーン開始後（2024年4月1日（月）
              10:00以降）に[Rakuten最強プラン]を契約された回線は、本キャンペーン対象外になります
            </li>
            <li>「Rakuten最強プラン（データタイプ）」は特典適用対象外です</li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>データ利用期間中にテザリングを利用する
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              おひとり様1回限りとなります（エントリーした楽天IDに紐づく回線が複数ある場合は、本キャンペーン期間中にテザリングを利用した最初の回線のみポイント付与の対象となります。）
            </li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>キャンペーン特典　（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            {point}ポイントプレゼント
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            2024年6月末日ごろに付与予定
          </TxtEmp01>
          <CpnListMark1>
            <li>楽天ポイントの付与は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント有効期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ポイント付与日を含めて6カ月
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
          <TxtEmp02 as="p">
            以下の条件に当てはまる場合は、特典適用対象外となります
          </TxtEmp02>
          <CpnListMark1>
            <li>
              <TxtEmp01>
                楽天モバイルから本キャンペーンの案内を直接受け取っていない場合
              </TxtEmp01>
            </li>
            <li>
              <TxtEmp01>案内</TxtEmp01>
              は楽天IDに連携されているメールアドレス・ご契約中の電話番号（SMS）宛てにお送りしています
            </li>
            <li>
              案内を受け取ったメールアドレスや電話番号に紐づく楽天IDとは異なる楽天IDでエントリーした場合
            </li>
            <li>本キャンペーン開始後に新規に契約された回線の場合</li>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
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
              そのほか、<TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              　本キャンペーンの達成者への連絡は、ポイント付与をもって代えさせて頂きます。
            </li>
            <li>
              　本キャンペーンにエントリーされた場合は、テザリング利用情報の取得・利用に同意することと見なします。
            </li>
            <li>
              　本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              　本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              　本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合がございます
            </li>
            <li>
              　
              <TxtEmp01>
                「Rakuten最強プラン（データタイプ）」から「Rakuten最強プラン」へプラン変更した回線は特典適用対象外です
              </TxtEmp01>
            </li>
            <li>　記載の内容は2024年4月1日（月）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
