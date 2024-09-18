import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'

const WeightNormalPink = styled.li`
  color: ${props => props.theme.colors.primary};
`

type Props = {
  className?: string
}
export const CampaignRule2265: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2265</p>
          <CpnListMark1>
            <li>
              本プログラムに関してお問い合わせの際は、上記「キャンペーンコード」をお伝えください
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>期間</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ エントリー期間</TxtEmp01>
            2024年3月12日（火）9:00～終了日未定
          </div>
        </dd>
      </div>
      <div>
        <dt>適用条件</dt>
        <dd>
          <div>
            <TxtEmp02 as="p">
              上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした楽天会員の方
            </TxtEmp02>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【1】</span>「Rakuten最強プラン」をご利用中の方
              </CpnTitlelv1>
              <p className={Utils['Mt-8']}>
                本プログラム開始時点で「Rakuten最強プラン」を未契約の方は、以下(ⅰ)(ⅱ)にて対象となります。
              </p>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                (ⅰ)「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
              </TxtEmp01>
              <CpnListOrderedLv2>
                <li>新規お申し込み</li>
                <li>他社からの乗り換え（MNP）でお申し込み</li>
                <li>
                  楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
                </li>
              </CpnListOrderedLv2>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                (ⅱ)「Rakuten最強プラン」利用開始
              </TxtEmp01>
              <p className={Utils['Mt-8']}>【プラン利用開始日とは】</p>
              <CpnListMark2Normal>
                <li>
                  新規お申し込みの場合※（1）（2）のいずれか早い方がプラン利用開始日となります
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
            </div>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【2】</span>
                本プログラムへのエントリー（おひとり様1度のみ）
              </CpnTitlelv1>
              <p>エントリー期間内に本ページでエントリー</p>
              <CpnListMark1>
                <li>
                  「Rakuten最強プラン」を利用されている＜22歳以下のお客様ご自身＞の楽天IDでのエントリーが必要です
                </li>
                <li>
                  エントリーした月からポイント付与対象となります。（「Rakuten最強プラン」のご利用開始前のエントリーでも適用可）
                </li>
              </CpnListMark1>
            </div>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【3】</span>
                <s>22歳以下のお客様</s>
                13歳以上22歳以下のお客様
              </CpnTitlelv1>
              <p>
                23歳の誕生月前月までが対象となります
                <br />
                例）3/15で23歳になる場合、3月はポイント付与の対象外
              </p>
              <CpnListMark1>
                <TxtEmp02 as="li">
                12歳以下のお客様は、2024年5月2日より「最強こどもプログラム」の対象に変更いたします
                <br />
                「最強こどもプログラム」開始前までに「最強青春プログラム」にエントリー済みの方は、自動的に「最強こどもプログラム」の対象になります。詳しくはキャンペーンページをご確認ください
                </TxtEmp02>
                <TxtEmp02 as="li">
                「最強こどもプログラム」にエントリー済みの方は、13歳になる月から自動的に「最強青春プログラム」の対象になります。改めてのエントリーは不要です
                </TxtEmp02>
              </CpnListMark1>
            </div>
          </div>
        </dd>
      </div>
      <div>
        <dt>特典 （楽天ポイント）</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
            <TxtEmp01 as="p">
              <span>毎月 110ポイント還元</span>
            </TxtEmp01>
            <CpnListMark1>
              <li>複数回線契約している場合も、110ポイントの還元となります</li>
              <li>
                一度エントリーすると、適用条件を満たす限り特典が付与され続けます
              </li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ ポイント付与日</TxtEmp01>
            <TxtEmp01 as="p">
              <span>
                【1】、【2】、【3】が確認された月の翌々月末日ごろに付与
              </span>
            </TxtEmp01>
            <CpnListMark1>
              <li>
                例）3月にすべての条件を達成した場合には、その翌々月である5月末日ごろにポイント付与となります
              </li>
              <li>楽天ポイントの付与は、楽天モバイルより行います</li>
              <li>権利の譲渡はできません</li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ ポイント有効期間</TxtEmp01>
            <TxtEmp01 as="p">
              <span>ポイント付与日を含めて6カ月</span>
            </TxtEmp01>
            <CpnListMark1>
              <li>
                <LinkNormal
                  href="https://ichiba.faq.rakuten.net/detail/000006532"
                  target="_blank"
                >
                  期間限定ポイントについて
                </LinkNormal>
              </li>
              <li>
                有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正などが生じた場合には返還されません
              </li>
            </CpnListMark1>
          </div>
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
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              「Rakuten最強プラン」の利用開始がされなかった場合
              <br />
              -プラン利用開始の手続き方法につきましては、
              <LinkNormal href="/faq/detail/00001648/">
                こちらのSIMカード版スタートガイドまたはeSIM版スタートガイド
              </LinkNormal>
              を参照ください
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
        <dt>併用不可キャンペーン</dt>
        <dd>
        <TxtEmp01>以下のプログラムは <TxtEmp02>併用不可</TxtEmp02>となります。以下記載のプログラム以外は併用可能となります</TxtEmp01>
              <CpnListMark2Normal>
                <li>
                最強こどもプログラム（2335）
                </li>
              </CpnListMark2Normal>

          <CpnListMark1>
            <li>
              最強こどもプログラムと本プログラムを申し込みした場合、13歳以上のお客様は本プログラムが適用され、最強こどもプログラムは対象外となります
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本プログラムは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本プログラムの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本プログラムの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合があります。
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」は対象外です
            </TxtEmp02>
            <TxtEmp02 as="li">
              「Apple Watch ファミリー共有」は対象外です
            </TxtEmp02>
            <li>
              「Rakuten最強プラン」に連携している楽天IDが変更となる場合は、再度本プログラムのエントリーが必要です
            </li>
            <li>記載の内容は2024年5月2日（木）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
