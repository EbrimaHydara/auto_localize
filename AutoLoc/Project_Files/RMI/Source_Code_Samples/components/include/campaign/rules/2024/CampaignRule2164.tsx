import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2164 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-8']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2164</p>
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
            2024年2月15日（木）09:00～2024年4月15日（月）20:59
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ プランのお申し込み期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            Web　2024年2月15日（木）09:00～2024年4月15日（月）20:59
          </p>
          <p className={Utils['Mt-8']}>
            店舗（楽天モバイルショップ）　2024年2月15日（木）09:00～2024年4月15日（月）20:59
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ プラン利用開始期限
          </TxtEmp01>
          <p className={Utils['Mt-8']}>2024年4月30日（月）23:59まで</p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】、【4】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            キャンペーンへのエントリー
          </CpnTitlelv1>

          <p>エントリー期間内に本キャンペーンページでエントリー</p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            「Rakuten最強プラン」の契約者である。またはエントリー時までに「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
          </CpnTitlelv1>
          <p>
            本キャンペーンへのエントリー時点で「Rakuten最強プラン」をお申し込みされていない場合は、楽天モバイルのWebサイトまたは店頭から下記（1）-（3）いずれかの方法でのお申し込みが必要です。既にお申し込みされている場合は、新たなお手続きは不要となります。
          </p>
          <CpnListOrderedLv2>
            <li>新規お申し込み</li>
            <li>他社からの乗り換え（MNP）でお申し込み</li>
            <li>
              楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
              <CpnListMark1>
                <li>
                  本キャンペーン期間中に「Rakuten最強プラン（データタイプ）」から
                  「Rakuten最強プラン」へプラン変更した場合は対象外です
                </li>
                <li>
                  本キャンペーン期間中に「Apple Watch
                  ファミリー共有」から「Rakuten最強プラン」へプラン変更した場合は対象外です
                </li>
                <li>
                  本キャンペーン期間中に「Rakuten最強プラン」から「Apple Watch
                  ファミリー共有」へプラン変更した場合は対象外です
                </li>
              </CpnListMark1>
            </li>
          </CpnListOrderedLv2>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            DAZN対象プランへお申し込み
          </CpnTitlelv1>
          <p>
            DAZN対象プラン（DAZN Standard月間プラン、DAZN
            Standard年間プラン（一括払い）、DAZN
            Standard年間プラン（月々払い））への会員登録をお申し込みいただいたお客様が対象となります
          </p>
          <CpnListMark1>
            <li>
              DAZN Global月間プラン、DAZN
              Baseball年間プラン（月々払い）へのお申し込みは特典適用対象外となります。
            </li>
            <li>本キャンペーン専用の申込ページよりDAZNにお申し込みください</li>
            <li>
              my
              楽天モバイルの連絡先メールアドレスと同じメールアドレスをDAZNの会員登録時にご使用ください
            </li>
          </CpnListMark1>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【4】</span>
            「Rakuten最強プラン」利用開始
          </CpnTitlelv1>
          <p className={Utils['Mt-8']}>【プラン利用開始日とは】</p>
          <CpnListMark2Normal>
            <li>
              新規お申し込みの場合　　※（1）（2）のいずれか早い方がプラン利用開始日となります
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
        </dd>
      </div>
      <div>
        <dt>
          キャンペーン特典
          <br />
          （楽天ポイント）
        </dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            毎月のDAZN
            Standard月間プラン利用に応じて最大3カ月間、月額利用料の20%にあたる763ポイントを毎月還元
            <br />
            DAZN
            Standard年間プラン（一括払い）申込の場合、年間利用料の20%にあたる5,818をポイントを一括還元
            <br />
            DAZN
            Standard年間プラン（月々払い）申込の場合、月額利用料の20%にあたる581ポイントを3カ月間毎月還元
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            キャンペーン条件【1】~【4】が確認された月から4か月後の末日ごろに付与
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）2月にすべての条件を達成した場合には、その4か月後である6月末日ごろにポイント付与となります
            </li>
            <li>楽天ポイントの付与は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>

          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ポイント有効期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>ポイント付与日を含めて6カ月</p>
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
              当社の提供するサービス、DAZNなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>DAZNへの加入が確認できない場合</li>
            <li>DAZN Global月間プランへの加入</li>
            <li>DAZN Baseball年間プラン（月々払い）への加入</li>
            <li>
              「楽天モバイル
              エンタメ祭キャンペーン」を経由したDAZNへのお申し込み回数が、おひとり様1契約1回を超える場合は対象外となります
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              「Rakuten最強プラン」の利用開始がされなかった場合
              <CpnListMark2Normal>
                <li>
                  プラン利用開始の手続き方法につきましては、
                  <LinkNormal href="/faq/detail/00001648/">
                    こちらのSIMカード版スタートガイドまたはeSIM版スタートガイド
                  </LinkNormal>
                  を参照ください"
                </li>
              </CpnListMark2Normal>
            </li>
            <li>
              エントリー後に「Rakuten最強プラン」の契約者変更（譲渡・承継）をした場合
            </li>
            <li>
              my
              楽天モバイルの連絡先メールアドレスとDAZN会員情報（メールアドレス）が一致しない場合
            </li>
            <li>本キャンペーン専用の申込ページ以外からDAZNに申し込んだ場合</li>
            <li>
              ポイント付与までにキャンペーンエントリー時点のmy
              楽天モバイルの連絡先メールアドレスを変更した場合
            </li>
            <li>
              ポイント付与までにキャンペーンエントリー時点のDAZN会員情報（メールアドレス）を変更した場合
            </li>
            <li>
              ポイント付与までにキャンペーンエントリー時点の楽天モバイルに連携している楽天IDを変更した場合
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
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーン終了後、条件または特典を変更して類似のキャンペーンが実施される場合があります。
            </li>
            <li>
              本キャンペーンの運営に関連して取得した応募者の個人情報は、応募条件を満たしていることの確認およびポイント付与を目的としてDAZN
              Japan Investment合同会社に取扱いを委託いたします。
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、特典ポイント進呈の対象外となる場合がございます
            </li>
            <TxtEmp02 as="li">
              「Rakuten最強プラン（データタイプ）」から
              「Rakuten最強プラン」へプラン変更した場合は対象外です
            </TxtEmp02>
            <li>「Apple Watch ファミリー共有」は対象外です</li>
            <li>記載の内容は2024年2月15日（木）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
