import {
  CpnListMark1,
  CpnListMark2,
  CpnTitlelv1,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

type Props = {
  className?: string
}
export const CampaignRule2222: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2222</p>
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
            <TxtEmp01 as="p">■ 「Apple Watch ファミリー共有」のお申し込み期間</TxtEmp01>
            <TxtEmp02 as="p">※景品がなくなり次第終了いたします</TxtEmp02>
            <p className={Utils['Mt-8']}>
              Web 2024年3月22日（金）9:00～終了日未定
            </p>
            <p className={Utils['Mt-8']}>
              店舗（楽天モバイルショップ） 2024年3月22日（金）開店～終了日未定
            </p>
          </div>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <div>
            <TxtEmp02 as="p">
              上記期間内に【1】、【2】の条件を満たした楽天会員の方
            </TxtEmp02>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【1】</span>「Apple Watch
                ファミリー共有」へ、下記（1）～（2）いずれかの方法にてお申し込み
              </CpnTitlelv1>

              <p>
                　（1）新規お申し込み
                <br />
                　（2）他社からの乗り換え（MNP）でお申し込み
              </p>

              <CpnListMark1>
                <li>
                  楽天モバイル（旧FREETEL）通話SIM、およびDMMモバイル通話SIMからの乗り換え（MNP）の場合は対象です
                </li>
                <li>
                  <TxtEmp02>
                    楽天モバイル（ドコモ回線・au回線）のメンバーズステーションよりプラン変更（移行）した場合は対象外です
                  </TxtEmp02>
                </li>
                <li>
                  <TxtEmp02>
                    「Rakuten最強プラン」からプラン変更した場合は対象外です
                  </TxtEmp02>
                </li>
                <li>
                  <TxtEmp02>
                    景品の進呈までに「Apple Watch
                    ファミリー共有」をお申し込みいただいた回線を譲渡した場合、プラン変更した場合、解約した場合は対象外です
                  </TxtEmp02>
                </li>
              </CpnListMark1>

              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                【「Apple Watch ファミリー共有」のお申し込み方法】
              </TxtEmp01>
              <p>
                下記URLより、『「Apple Watch
                ファミリー共有」のお申し込み方法』手順1から11をご確認ください
              </p>
              <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/">
                https://network.mobile.rakuten.co.jp/guide/flow/application/apple-watch-family-sharing/
              </LinkNormal>
            </div>
            <div className={Utils['Mt-16']}>
              <TxtEmp01 as="p">
                <span>【2】</span>
                「Apple Watch ファミリー共有」のご利用開始
              </TxtEmp01>
              <p>
                「Apple Watch
                ファミリー共有」のお申し込み後、楽天回線の開通設定に進み、開通を完了させてください
              </p>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                【「Apple Watch ファミリー共有」のご利用方法】
              </TxtEmp01>
              <p>
                下記URLより、『「Apple Watch
                ファミリー共有」のお申し込み方法』手順12から14をご確認ください
              </p>
              <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/">
                https://network.mobile.rakuten.co.jp/guide/flow/application/apple-watch-family-sharing/
              </LinkNormal>
            </div>
          </div>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
            <TxtEmp01 as="p">
              <span>Apple Watch用お買いものパンダバンド</span>
            </TxtEmp01>
            <CpnListMark1>
              <li>38mm、40mm、41mmのケースに対応します</li>
              <li>バンドは手首が130mm～200mmの方にフィットします</li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">【景品の発送について】</TxtEmp01>
            <p>
              キャンペーン条件の達成から
              <TxtEmp01>2カ月</TxtEmp01>
              前後で発送いたします
            </p>
            <CpnListMark1>
              <li>景品は先着順でなくなり次第終了といたします</li>
              <li>
                店舗（楽天モバイルショップ）でキャンペーン条件を達成した場合でも、景品は発送いたします
              </li>
              <li>配送状況により、お届けが遅れる場合がございます</li>
              <li>配送先は日本国内に限ります</li>
              <li>
                <TxtEmp02>
                  景品は進呈時点で楽天モバイルにご登録いただいているご住所、ご氏名宛てに発送いたします
                </TxtEmp02>
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
              『「Apple Watch ファミリー共有」をお申し込みで先着500名様にApple
              Watch用お買いものパンダバンドプレゼントキャンペーン』の適用回数が、おひとり様1回を超える場合は対象外となります
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              <TxtEmp02>景品の進呈までに楽天会員から退会している場合</TxtEmp02>
            </li>
            <li>
              <TxtEmp02>
                景品の進呈までに「Apple Watch
                ファミリー共有」をお申し込みいただいた回線を譲渡した場合、プラン変更した場合、解約した場合
              </TxtEmp02>
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
          <TxtEmp02 as="p">
            以下のキャンペーンは併用可能となります。以下記載のキャンペーン以外は併用不可となります
          </TxtEmp02>

          <CpnListMark2>
            <li>
              先着500名限定！Apple
              Watch用お買いものパンダバンドプレゼントキャンペーン（キャンペーンコード：1976）
            </li>
          </CpnListMark2>
        </dd>
      </div>

      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、景品進呈の対象外となる場合がございます
            </li>
            <li>記載の内容は2024年3月22日（金）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
