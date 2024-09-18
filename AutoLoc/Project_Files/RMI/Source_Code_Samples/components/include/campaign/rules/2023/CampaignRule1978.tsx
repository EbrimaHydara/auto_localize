import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02, TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
type Props = {
  className?: string
}
export const CampaignRule1978: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1978</p>
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
            <TxtEmp01 as="p">■ キャンペーン期間</TxtEmp01>
            <CpnListMark2Normal className={Utils['Mt-8']}>
              <li>2023年9月1日（金）0:00～2023年12月26日（火）23:59</li>
            </CpnListMark2Normal>
          </div>
          <div>
            <TxtEmp01 as="p">■ エントリー期間</TxtEmp01>
            <CpnListMark2Normal className={Utils['Mt-8']}>
              <li>2023年9月1日（金）0:00～2023年12月26日（火）23:59</li>
            </CpnListMark2Normal>
          </div>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnListMark1>
            <TxtEmp02 as="li">
              2023年8月31日23:59以前に「15分（標準）通話かけ放題」オプションを解約されている方が対象です。
            </TxtEmp02>
          </CpnListMark1>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【1】</span>キャンペーンへのエントリー
            </CpnTitlelv1>
            <p>エントリー期間内に本キャンペーンページでエントリー</p>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【2】</span>
              エントリー後、本キャンペーン開始以降に「15分（標準）通話かけ放題」をお申し込み
            </CpnTitlelv1>
          </div>
          <div className={Utils['Mt-16']}>
            <CpnTitlelv1 as="p">
              <span>【3】</span>
              「Rakuten最強プラン」ご利用中、または、キャンペーン期間中に「Rakuten最強プラン」へのお申し込み＆プラン利用開始
            </CpnTitlelv1>
            <CpnListMark1>
              <li>
                「Rakuten最強プラン」の未契約者である場合は、下記(1)-(3)いずれかの方法で「お申し込み」いただく必要があります。
              </li>
            </CpnListMark1>
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
            <CpnListMark2Normal>
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
        <dt>キャンペーン特典 （楽天ポイント）</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
            <TxtEmp01 className={Utils['Mt-8']}>
              15分（標準）通話かけ放題１カ月相当の1,100円分の楽天ポイントをプレゼント
            </TxtEmp01>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ ポイント付与日</TxtEmp01>
            <TxtEmp01 as="p" className={Utils['Mt-8']}>
              キャンペーン条件【1】～【3】が確認された月の翌々月末日ごろに付与
            </TxtEmp01>
            <CpnListMark1>
              <li>
                例）2023年9月にすべての条件を達成した場合には、その翌々月である2023年11月末日ごろにポイント付与となります
              </li>
              <li>楽天ポイントの付与は、楽天モバイルより行います</li>
              <li>権利の譲渡はできません</li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ ポイント有効期間</TxtEmp01>
            <div className={Utils['Mt-8']}>
              <TxtEmp01 as="p">ポイント付与日を含めて6カ月</TxtEmp01>
              <CpnListMark1>
                <li>
                  <LinkNormal
                    href="https://ichiba.faq.rakuten.net/detail/000006532"
                    target="_blank"
                    rel="noopener"
                  >
                    期間限定ポイントについて
                  </LinkNormal>
                </li>
                <li>
                  有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正などが生じた場合には返還されません
                </li>
              </CpnListMark1>
            </div>
          </div>
        </dd>
      </div>
      <div>
        <dt>特典適用対象外</dt>
        <dd>
          <TxtEmp01 as="p">
            以下の条件に当てはまる場合は、<TxtEmp02>特典適用対象外</TxtEmp02>
            となります
          </TxtEmp01>
          <CpnListMark1>
            <li>
              エントリー前に「15分（標準）通話かけ放題」をお申し込みした場合
            </li>
            <li>キャンペーンエントリー後に回線譲渡を行った場合</li>
            <li>
              本キャンペーン期間中に「15分（標準）通話かけ放題」の利用料金無料特典が適用中の場合
            </li>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>
              「Rakuten最強プラン」の利用開始がされなかった場合
              <CpnListMark2>
                <li>
                  プラン利用開始の手続き方法につきましては、こちらのSIMカード版スタートガイドまたはeSIM版スタートガイドを参照ください
                </li>
              </CpnListMark2>
            </li>
            <li>
              ポイント付与までに楽天会員から<TxtEmp01>退会</TxtEmp01>
              している場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>「Rakuten最強プラン（データタイプ）」をお申し込みした場合</li>
            <li>
              そのほか、<TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用不可キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            以下のキャンペーンは、<TxtEmp02>併用不可</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark2>
            <li>【15分（標準）通話かけ放題】料金1カ月無料特典（1977）</li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1 className={Utils['Mt-0']}>
            <li>
              本キャンペーン期間中に「15分（標準）通話かけ放題」の利用料金無料特典が付与される場合、本キャンペーンによるポイント付与特典はございません。あらかじめご了承ください
            </li>
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
