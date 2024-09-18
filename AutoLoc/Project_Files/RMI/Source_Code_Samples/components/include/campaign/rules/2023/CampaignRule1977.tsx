import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02, TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
type Props = {
  className?: string
}
export const CampaignRule1977: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1977</p>
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
          <div>
            <TxtEmp01 as="p">■ お申し込み期間</TxtEmp01>
            <CpnListMark2Normal className={Utils['Mt-8']}>
              <li>Web　2023年9月1日（金）0:00～終了日未定</li>
              <li>
                店舗（楽天モバイルショップ）　2023年9月1日（金）開店～終了日未定
              </li>
            </CpnListMark2Normal>
          </div>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記キャンペーン期間内に【1】及び【2】の条件を満たした楽天会員の方
          </TxtEmp02>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【1】</span>
              「15分（標準）通話かけ放題」オプションに、はじめてのお申し込み
            </CpnTitlelv1>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【2】</span>
              「Rakuten最強プラン」ご利用中、または、キャンペーン期間中に「Rakuten最強プラン」へのお申し込み＆プラン利用開始
            </CpnTitlelv1>
            <p>
              「Rakuten最強プラン」の未契約者である場合は、下記(1)-(3)いずれかの方法で「お申し込み」いただく必要があります。
            </p>
            <CpnListOrderedLv2>
              <li>新規お申し込み</li>
              <li>他社からの乗り換え（MNP）でお申し込み</li>
              <li>
                楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
              </li>
            </CpnListOrderedLv2>
            <CpnListMark1>
              <li>「Rakuten最強プラン（データタイプ）」は対象外です</li>
            </CpnListMark1>
            <p className={Utils['Mt-8']}>【プラン利用開始日とは】</p>
            <CpnListMark2Normal className={Utils['Mt-8']}>
              <li>
                <p>
                  新規お申し込みの場合　　
                  <TxtCap>
                    ※（1）（2）のいずれか早い方がプラン利用開始日となります
                  </TxtCap>
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
          <div>
            <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
            <div className={Utils['Mt-8']}>
              <TxtEmp01 as="p">
                「15分（標準）通話かけ放題」料金1カ月無料
              </TxtEmp01>
              <CpnListMark1>
                <li>
                  オプション契約開始日から1カ月後の月末まで、オプション料金が無料となります。
                  <p>
                    例）2023年9月15日にオプション契約開始の場合、お申し込み1カ月後の10月末まで、オプション料金が無料となります。
                  </p>
                </li>
                <li>オプション契約開始日とは以下を指します</li>
              </CpnListMark1>
              <CpnListMark2>
                <li>プランと同時にご契約された場合：プラン利用開始日</li>
                <li>プランお申し込み後にご契約された場合：オプション契約日</li>
              </CpnListMark2>
            </div>
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
              「15分（標準）通話かけ放題」オプションの申し込みがキャンセルとなった場合
            </li>
            <li>「Rakuten最強プラン」の利用開始がされなかった場合</li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>「Rakuten最強プラン（データタイプ）」をお申し込みした場合</li>
            <li>
              そのほか、
              <TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用不可キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            以下のキャンペーンは、
            <TxtEmp02>併用不可</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark2>
            <li>
              【再申し込み者様限定】15分（標準）通話かけ放題を再申し込みで1,100ポイントプレゼント（1978）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1 className={Utils['Mt-0']}>
            <li>本キャンペーンの特典は、おひとり様1回限り</li>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合がございます
            </li>
            <li>「Rakuten最強プラン（データタイプ）」は対象外です</li>
            <li>記載の内容は2023年9月1日（金）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
