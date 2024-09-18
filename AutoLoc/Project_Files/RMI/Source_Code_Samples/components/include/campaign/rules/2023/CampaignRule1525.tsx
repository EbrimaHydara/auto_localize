import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnListOrderedLv2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
type Props = {
  className?: string
}
export const CampaignRule1525: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1525</p>
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
          <TxtEmp01 as="p">■ お申し込み期間</TxtEmp01>
          <CpnListMark2Normal className={Utils['Mt-8']}>
            <li>
              Web 2022年7月1日（金）0:00～
              <TxtEmp02>2023年8月31日（木）23:59</TxtEmp02>
            </li>
            <li>
              店舗（楽天モバイルショップ）　2022年7月1日（金）開店～
              <TxtEmp02>2023年8月31日（木）閉店</TxtEmp02>
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              本キャンペーンの終了日が記載されていますが、2023年9月1日（金）00:00以降、初めてお申し込みの方は1カ月無料となります。詳細は2023年9月1日（金）00:00から開始する新キャンペーンをご確認ください。
            </li>
            <li>
              新キャンペーンの準備状況によっては、本キャンペーン終了日の記載に関わらず延長する場合があります。
            </li>
            <li>
              2023年8月1日（火）に、キャンペーンの終了日を、終了日未定から変更しました。
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記キャンペーン期間内に【1】及び【2】の条件を満たした楽天会員の方
          </TxtEmp02>
          <CpnListOrderedLv2>
            <TxtEmp01 as="li">
              「15分（標準）通話かけ放題」オプションに、はじめてのお申し込み
            </TxtEmp01>
            <TxtEmp01 as="li">
              「Rakuten最強プラン」ご利用中、または、キャンペーン期間中に「Rakuten最強プラン」へのお申し込み＆プラン利用開始
            </TxtEmp01>
          </CpnListOrderedLv2>
          <CpnListMark1>
            <li>
              本キャンペーン申し込み時点で「Rakuten最強プラン」の未契約者である場合は、下記(1)-(3)いずれかの方法で「お申し込み」いただく必要があります。
              <CpnListOrderedLv2>
                <li>新規お申し込み</li>
                <li>他社からの乗り換え（MNP）でお申し込み</li>
                <li>
                  楽天モバイル(ドコモ回線・au回線)の料金プランからプラン変更(移行)手続き後、お申し込み
                </li>
              </CpnListOrderedLv2>
            </li>
            <li>
              <del>
                本キャンペーン開始前に楽天モバイル(Rakuten UN-LIMIT
                VI)をご利用の場合、キャンペーン開始と同時に「Rakuten UN-LIMIT
                VII」プランに移行しております。
              </del>
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
          </CpnListMark1>
          <div className={Utils['Mt-16']}>
            <p>【プラン利用開始日とは】</p>
            <CpnListMark2Normal>
              <li>
                <p>
                  新規お申し込みの場合
                  ※（1）（2）のいずれか早い方がプラン利用開始日となります
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
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            「15分（標準）通話かけ放題」料金3カ月無料
          </TxtEmp01>
          <CpnListMark1>
            <li>
              オプション契約開始日から3カ月後の月末まで、オプション料金が無料となります。
              <br />
              例）2022年7月15日にオプション契約開始の場合、お申し込み3ヶ月後の10月末まで、オプション料金が無料となります。
            </li>
            <li>
              オプション契約開始日とは以下を指します
              <CpnListMark1 className={Utils['Mt-0']}>
                <li>プランと同時にご契約された場合：プラン利用開始日</li>
                <li>プランお申し込み後にご契約された場合：オプション契約日</li>
              </CpnListMark1>
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
            <TxtEmp02 as="li">
              2022年5月12日（木）23:59以前に、「10分（標準）通話かけ放題」を申込みされていた場合
            </TxtEmp02>
            <li>
              「15分（標準）通話かけ放題」オプションの申し込みがキャンセルとなった場合
            </li>
            <li>「Rakuten最強プラン」の利用開始がされなかった場合</li>
            <li>
              本キャンペーンの特典が適用されてから、3ヵ月間以上経過をしている場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反した場合</TxtEmp01>
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」をお申し込みした場合
            </TxtEmp02>
            <li>
              そのほか、
              <TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1 className={Utils['Mt-0']}>
            <li>本キャンペーンの特典は、おひとり様1回線のみ。</li>
            <TxtEmp02 as="li">
              <del>
                「Rakuten UN-LIMIT VI」から「Rakuten UN-LIMIT
                VII」へ移行された場合でも、2022年5月13日（金）以降、初めて「10分（標準）通話かけ放題」に加入した場合は、2022年7月1日（金）に「15分（標準）通話かけ放題」へ自動移行され、2022年7月1日（金）から月額料金が3カ月無料となります。
              </del>
            </TxtEmp02>
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
            <li>記載の内容は2023年8月1日（火）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
