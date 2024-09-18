import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListMark2Normal,
  CpnListMark2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2162turbo = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2162</p>
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
            Web：2023年12月5日（火）09:00～<del>2024年5月31日（金）23:59</del>{' '}
            終了日未定
            <br />
            ショップ：2023年12月5日（火）開店～
            <del>2024年5月31日（金）閉店</del> 終了日未定
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■
            プランお申し込み、プラン課金開始期限(お申し込み前にログインを忘れた場合、お申し込み日含めて7日以内のログイン)
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            紹介された方（被紹介者様）が受信したメッセージに記載のURL（メールは「キャンペーンに参加する＞リンク」）をクリックして楽天IDでログイン（以下、「紹介ログイン」といいます）した日の翌々月末日23:59までです。
          </p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン適用条件</dt>
        <dd>
          <TxtEmp01 as="p">
            上記各項目の期間内に【1】、【2】、【3】の条件をすべて満たした方
          </TxtEmp01>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            被紹介者様が紹介者（楽天従業員）から送られるキャンペーンURLから紹介ログイン(お申し込み前にログインを忘れた場合、お申し込み日含めて7日以内のログイン)
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            「Rakuten Turbo」と「Rakuten Turbo 5G」の同時申し込み
            <br />
            本ルール内では、Rakuten Turboはプラン名、Rakuten Turbo
            5Gは製品名のことを指します
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            「Rakuten
            Turbo」の利用開始日または製品の受け取り日の、いずれか早い日を1日目として9日経過
          </CpnTitlelv1>

          <CpnListMark1>
            <li>
              製品の受け取り日とは当社に配送完了データが通知された日、または店舗で受け取った日です
            </li>
            <li className={Utils['Color-primary']}>
              <TxtEmp02 as="span">特典はおひとり様1度のみ。</TxtEmp02>
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            7,000ポイント
          </TxtEmp01>
          <ul>
            <li>ポイント進呈初月：2,000ポイント</li>
            <li>ポイント進呈初月の翌月：2,000ポイント</li>
            <li>ポイント進呈初月の翌々月：3,000ポイント</li>
          </ul>
        </dd>
      </div>
      <div>
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">
            被紹介者様は、以下のキャンペーンが併用可能となります。以下記載のキャンペーン以外は併用不可となります
          </TxtEmp02>
          <CpnListMark2>
            <li>
              <del>
                Rakuten Turbo プラン料金1年間月額1,980円キャンペーン（1894）
              </del>
              <CpnListMark1>
                <li>
                  2024年2月20日（火）23:59に上記（キャンペーンコード：1894）は終了しました
                </li>
              </CpnListMark1>
            </li>
            <li>
              Rakuten
              Turbo月額プラン料金6か月間無料キャンペーン（キャンペーンコード：2130）
            </li>
            <li>
              Rakuten
              Turbo＆楽天モバイルご利用で20,000ポイントプレゼントキャンペーン（1895）
            </li>
            <li>
              Rakuten
              Turboお申し込みと楽天市場で対象ジャンルの商品購入（1円以上）で20,000ポイント還元​キャンペーン（2038）
              <CpnListMark1>
                <li>
                  SPU特設 Rakuten
                  Turboを初めてお申し込みで1,000ポイントプレゼントキャンペーン（1919）
                </li>
              </CpnListMark1>
            </li>
            <li>
              【ダイヤモンド会員様限定】Rakuten
              Turboをお申し込みで1,200ポイントプレゼントキャンペーン（1947）
            </li>
            <li>
              スタート1000 Rakuten
              Turboを初めてご利用で1,000ポイントGET!（1950）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>特典適用対象外</dt>
        <dd>
          <TxtEmp02 as="p">
            以下の条件に当てはまる場合は、特典適用対象外となります
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ キャンペーン期間・条件による場合
          </TxtEmp01>
          <CpnListMark1>
            <li>
              ポイント進呈までに「Rakuten Turbo」の解約手続きを行なった場合
            </li>
            <li>
              紹介者から送られた紹介URLからログインをせずにお申し込みした場合​
            </li>
            <li>
              紹介者から送られた紹介URLへのログインがお申し込み後から8日以上経過している場合
            </li>
            <li>紹介者（楽天従業員）と被紹介者様が同一人物の場合​​</li>
            <li>
              楽天モバイルショップ、楽天モバイルオンライン以外で契約した場合
            </li>
            <li>被紹介者様が楽天従業員である場合</li>
            <li>
              間接的な紹介行為を行った場合（第三者に自分の紹介コード、または専用URLを渡し、第三者がそれらを利用したお申し込み促進を行った場合）​
            </li>
            <li>紹介行為において不正の疑いがある場合​</li>
            <li>
              「Rakuten最強プラン」または「Rakuten最強プラン（データタイプ）」の利用開始がされなかった場合​​
              <CpnListMark2Normal>
                <li>
                  プラン利用開始の手続き方法につきましては、
                  <LinkNormal href="/faq/detail/00001648/">こちら</LinkNormal>
                  のSIMカード版スタートガイドまたはeSIM版スタートガイドを参照ください
                </li>
              </CpnListMark2Normal>
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ 未納・未払い・キャンセル・退会による場合
          </TxtEmp01>
          <CpnListMark1>
            <li>
              当社の提供するサービス等の料金のお支払いを、お支払い期限までに行わず、未納・未払いが発生した場合
            </li>
            <li>ポイント進呈までに楽天会員から退会している場合</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ 弊社規定・判断基準による場合
          </TxtEmp01>
          <CpnListMark1>
            <li>
              紹介ログインした楽天IDと楽天モバイルにご登録の楽天IDが同一でない場合
            </li>
            <li>当社または楽天グループ株式会社が定める規約等に違反した場合</li>
            <li>
              そのほか、当社が会員として不適格であると合理的に判断した場合
            </li>
            <li>不正利用であると運営側が判断した場合</li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください​
            </li>
            <li>権利の譲渡はできません</li>
            <li>楽天ポイントの進呈は、楽天モバイルより行います</li>
            <li>
              お申し込み後、利用の実態がないと判断できる場合等を含めて、不正と運営側が判断した場合は、ポイント進呈の対象外とさせて頂く場合があります
            </li>
            <li>
              不正の内容によっては、今後楽天ポイント進呈の停止をさせて頂く場合があります
            </li>
            <li>
              ポイント進呈後に不正と判断した場合には、当該ポイントの無効化、口座の凍結もしくは当該ポイント相当分を何らかの手段にてご請求等をする場合があります
            </li>
            <li>
              ポイントを進呈後はポイント口座の当該ポイントを利用停止する場合があります
            </li>
            <li>
              進呈ポイントを既に利用済みの場合、当該ポイント分の金額を楽天モバイルに登録している決済手段により引き落としする場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送等の不正利用、不正転売等の違反が見つかった場合、キャンペーンを終了する場合があります
            </li>
            <li>
              紹介する方（ご紹介者様）から紹介された方（被紹介者様）の個人情報（契約状況等）をお問い合わせいただいてもお答えできませんのでご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります​​
            </li>
            <li>
              1つの楽天IDで契約できるRakuten Turbo回線は最大5回線となります。
              こちらは本キャンペーンではなく、Rakuten
              Turboの仕組みとなります。​（ただし本キャンペーンの特典はおひとり様一度のみです。）
            </li>
            <li>
              製品の台数には限りがございます。なくなり次第終了とさせていただく場合があります​
            </li>
            <li>記載の内容は2024年5月21日（火）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
