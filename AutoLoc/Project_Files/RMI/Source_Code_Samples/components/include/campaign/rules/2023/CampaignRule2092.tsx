import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

type Props = {
  className?: string
}
export const CampaignRule2092: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2092</p>
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
          <TxtEmp01 as="p">■ キャンペーン期間</TxtEmp01>
          <p className={Utils['Mt-8']}>
            2023年12月1日（金）9:00～2024年2月29日（木）23:59
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ エントリー期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            2023年12月1日（金）9:00～2024年2月29日（木）23:59
          </p>
          <CpnListMark1>
            <li>
              2024年2月21日（水）に、キャンペーンの終了日を、終了日未定から変更しました
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>キャンペーンへのエントリー
          </CpnTitlelv1>
          <p>
            エントリー期間内に本キャンペーンページで申し込みをするパックを選択してエントリー
          </p>
          <CpnListMark2Normal>
            <li>
              パックは下記の3種類から選択いただけます
              <CpnListOrderedLv2>
                <li>
                  ライトパック：「故障紛失保証 with AppleCare Services &
                  iCloud+」または「スマホ交換保証プラス」または「持ち込みスマホあんしん保証」と「ノートン™
                  モバイル セキュリティ」
                </li>
                <li>
                  スタンダードパック(A)：「ノートン™ モバイル
                  セキュリティ」と「15分（標準）通話かけ放題」
                </li>
                <li>
                  スタンダードパック(B)：「故障紛失保証 with AppleCare Services
                  &
                  iCloud+」または「スマホ交換保証プラス」または「持ち込みスマホあんしん保証」と「ノートン™
                  モバイル セキュリティ」と「15分（標準）通話かけ放題」
                </li>
              </CpnListOrderedLv2>
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>エントリーはおひとり様1回限り</li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            エントリー後、キャンペーン期間中にエントリーしたパックのオプションサービスをお申し込み＆利用開始
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            月末日時点でエントリーしたパックに含まれるオプションサービスを全てご契約中
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              エントリーいただいた月を1カ月目として、10カ月目まで毎月月末時点でのオプションサービスの利用状況を確認させていただきます
            </li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>キャンペーン特典　（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            毎月100ポイントプレゼント
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ 特典付与の対象期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            エントリーいただいた月を1カ月目として10カ月目まで
          </TxtEmp01>
          <CpnListMark1>
            <li>ただし【3】の条件を満たしていない月の付与はございません</li>
            <li>
              一度オプションサービスを解約された後に、再契約された場合でも、【3】の条件を満たした場合は対象になります（また、再契約時にオプションサービスの紐づく回線が契約開始時とは異なっていても問題ございません）
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            エントリーいただいた月を1カ月目として10カ月目までで、キャンペーン条件【3】が確認された月の翌々月末日ごろに付与
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）2023年12月にエントリーかつ【2】【3】の条件を達成した場合には、その翌々月である2024年2月末日ごろが初回のポイント付与となります。
            </li>
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
            <TxtEmp02>
              以下の条件に当てはまる場合は、特典適用対象外となります
            </TxtEmp02>
          </TxtEmp01>
          <CpnListMark1>
            <li>
              エントリー前にいずれかのパックに該当するオプションサービスをお申し込み＆利用開始いただいている場合
            </li>
            <li>
              条件【1】～【3】の達成が同一の楽天IDで行われなかった場合（例1：【1】のエントリー後に回線譲渡を行い、回線譲渡先で【2】【3】の条件を満たした場合。例2：一度オプションサービスを解約した後に異なる楽天IDにて再契約があった場合）
            </li>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>
              「【ショップ限定】オプションサービスまとめて申し込みキャンペーン」の適用回数が、おひとり様1契約1回を超える場合は対象外となります
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              お申し込みいただいたオプションサービスの利用開始がされなかった場合
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
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">以下のキャンペーンは併用可能となります。</TxtEmp02>
          <CpnListMark2>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
            </li>
            <li>
              iPhone
              対象端末ポイントバックキャンペーン（キャンペーンコード：1819）
            </li>
            <li>
              「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン（キャンペーンコード：2006）
            </li>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              一部のオプションサービスは回線の解約時に自動解約されてしまう場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合があります
            </li>
            <li>記載の内容は2024年2月21日（水）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
