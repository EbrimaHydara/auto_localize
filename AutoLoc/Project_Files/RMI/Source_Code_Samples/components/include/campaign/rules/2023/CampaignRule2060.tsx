import { CpnListMark1, CpnTitlelv1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2060 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2060</p>
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
            2023年12月1日（金）10:00～2023年12月26日（火）23:59　（先着1万名に到達次第、受付終了となります）
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ データ利用期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            2023年12月1日（金）0:00～2023年12月31日（日）23:59
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】、【4】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>キャンペーンへのエントリー
          </CpnTitlelv1>
          <p>エントリー期間内に本キャンペーンページでエントリー</p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            本キャンペーンの開始時点で「Rakuten最強プラン」ご利用中
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              本キャンペーン開始後（2023年12月1日（金）
              10:00以降）に[Rakuten最強プラン]を契約された回線は、本キャンペーン対象外になります
            </li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>データ利用期間中にテザリングを利用する
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【4】</span>
            データ利用期間中に3GB（テザリング利用量を含む）を超過するデータ利用を行う
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              my
              楽天モバイルで表示されるデータ利用量は概算となり、実際のデータ利用量と異なる場合があります
            </li>
            <li>
              月を跨いでデータ通信を行った場合、当該通信は翌月分のデータ利用量として算定いたします。また、当月末日のデータ通信の一部は翌月分のデータ利用量として算定される場合がございます
            </li>
            <li>
              リチャージ分（1GBあたり500円でのデータチャージ）はキャンペーン対象となるデータ利用に加算されません
            </li>
            <li>
              「Rakuten最強プラン」のデータ利用量のみ対象となり、楽天モバイル（ドコモ回線・au回線）でのデータ利用は対象外となります
            </li>
            <li>おひとり様1回限りとなります</li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>キャンペーン特典　（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            200ポイントプレゼント
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            2024年2月末日ごろに付与予定
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
          <TxtEmp01 as="p">
            以下の条件に当てはまる場合は、
            <TxtEmp02>特典適用対象外</TxtEmp02>
            となります
          </TxtEmp01>
          <CpnListMark1>
            <li>
              本キャンペーン開始後（2023年12月1日（金）
              10:00以降）に新規に契約された回線の場合
            </li>
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
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」をお申し込みした場合
            </TxtEmp02>
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
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
            <li>記載の内容は2023年12月1日（金）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
