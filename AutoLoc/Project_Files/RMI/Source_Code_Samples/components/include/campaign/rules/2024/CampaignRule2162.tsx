import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
  CpnListMark2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2162 = () => {
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
          <TxtEmp01 as="p">■ エントリー期間</TxtEmp01>
          <p className={Utils['Mt-8']}>
            Web: 2023年12月5日（火）9:00～<del>2024年5月31日（金）23:59</del>{' '}
            終了日未定 <br />
            ショップ: 2023年12月5日（火）開店～
            <del>2024年5月31日（金）閉店</del> 終了日未定
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ プランお申し込み、プラン利用開始期限
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
            被紹介者様が紹介者（楽天従業員）から送られるキャンペーンURLから紹介ログイン(お申し込み前にログインを忘れた場合、お申し込み日含めて7日以内のログイン、ただし2024年1月23日以降のお申し込みのみ適用)
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            「Rakuten最強プラン」または「楽天最強プラン（データタイプ）」へお申し込み
          </CpnTitlelv1>
          <p>下記（1）～（3）いずれかの方法にてお申し込み</p>
          <CpnListOrderedLv2>
            <li>新規お申し込み</li>
            <li>他社からの乗り換え（MNP）でお申し込み</li>
            <li>
              楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
              <CpnListMark1>
                <li>
                  「Rakuten UN-LIMIT
                  VII」から「Rakuten最強プラン」への移行は対象外となります。
                </li>
                <li>
                  キャンペーンURLから紹介ログインを行わないお申し込みは特典付与の対象になりません。
                </li>
                <li>
                  「Rakuten最強プラン（データタイプ）」から
                  「Rakuten最強プラン」へプラン変更した場合は対象外です。
                </li>
              </CpnListMark1>
            </li>
          </CpnListOrderedLv2>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            「Rakuten最強プラン」または「Rakuten最強プラン（データタイプ）」の利用開始
          </CpnTitlelv1>
          <p>【プラン利用開始日とは】</p>
          <CpnListMark2Normal>
            <li>
              新規お申し込みの場合　※（1）（2）のいずれか早い方がプラン利用開始日となります
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
          <TxtCap as="p" className={Utils['Mt-8']}>
            <TxtEmp02>
              ※
              2024年6月1日（土）0:00以降のお申し込みについての特典はおひとり様最大5回線まで
            </TxtEmp02>
          </TxtCap>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp02 as="p">
            他社からの乗り換え（MNP）<TxtEmp01>でお申し込みの場合</TxtEmp01>
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            14,000ポイント
          </TxtEmp01>
          <ul>
            <li>ポイント進呈初月：4,000ポイント</li>
            <li>ポイント進呈初月の翌月：5,000ポイント</li>
            <li>ポイント進呈初月の翌々月：5,000ポイント</li>
          </ul>
          <CpnListMark1>
            <li>
              <TxtEmp02>
                楽天モバイル公式 楽天市場店にて6,000円OFFクーポンを使用された方
              </TxtEmp02>
              は以下の特典となります。
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            8,000ポイント
          </TxtEmp01>
          <ul>
            <li>ポイント進呈初月：2,000ポイント</li>
            <li>ポイント進呈初月の翌月：3,000ポイント</li>
            <li>ポイント進呈初月の翌々月：3,000ポイント</li>
          </ul>
          <TxtEmp02 as="p" className={Utils['Mt-16']}>
            新規お申し込み、もしくは楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後
            <TxtEmp01>、お申し込みの場合</TxtEmp01>
          </TxtEmp02>
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
        <dt>ポイント進呈日</dt>
        <dd>
          <TxtEmp01 as="p">＜紹介された方（被紹介者様）＞</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            紹介された方（被紹介者様）が紹介ログインした月の、4カ月後から6カ月後の3カ月間にわたり進呈
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）紹介された方（被紹介者様）の紹介ログインが2月に確認できた場合には、その4カ月後である6月末日ごろに1回目のポイント進呈となり、7月末日ごろに2回目の進呈、
              <br />
              8月末日ごろに3回目の進呈となります
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント有効期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ポイント進呈日を含めて6カ月
          </TxtEmp01>
          <CpnListMark1>
            <li>
              <LinkNormal href="https://ichiba.faq.rakuten.net/detail/000006532">
                期間限定ポイントについて
              </LinkNormal>
            </li>
            <li>
              有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正等が生じた場合には返還されません
            </li>
            <li>
              1カ月に利用できるポイント上限は会員ランクによって異なります。
              <LinkNormal
                href="https://point.rakuten.co.jp/guidance/usemethod/"
                target="_blank"
                rel="noopener"
              >
                こちら
              </LinkNormal>
              をご確認ください
            </li>
            <li>
              <LinkNormal href="https://point.rakuten.co.jp/" target="_blank">
                PointClubページ
              </LinkNormal>
              では、あなたの会員ランク情報を確認できます。
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            紹介された方（被紹介者様）は、以下のキャンペーンが
            <TxtEmp02>併用可能</TxtEmp02>となります。
            <TxtEmp02>以下記載のキャンペーン以外は併用不可</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark2>
            <li>
              楽天モバイル公式 楽天市場店
              対象Android製品とRakuten最強プランセットご注文で6,000円OFFクーポン（キャンペーンコード：1833）
            </li>
            <li>
              楽天モバイル公式 楽天市場店
              対象Apple製品とRakuten最強プランセットご注文で6,000円OFFクーポン（キャンペーンコード：1834）
              <CpnListMark1>
                <li>
                  上記キャンペーンのいずれかを適用し、他社からの乗り換え（MNP）でお申し込みの場合は本キャンペーンの特典は8,000ポイントとなります
                </li>
              </CpnListMark1>
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を一括払いもしくは24回払いのご購入で20,000円割引キャンペーン（キャンペーンコード：2169）
            </li>
            <li>
              Rakuten最強プランご契約とiPhone対象製品を買い替え超トクプログラム利用のご購入でポイントバックキャンペーン（キャンペーンコード：2231）
            </li>
            <li>
              【15分（標準）通話かけ放題】料金1カ月無料特典（キャンペーンコード：1977）
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>併用不可・対象外キャンペーン</dt>
        <dd>
          <TxtEmp01 as="p">
            紹介された方（被紹介者様）は、以下のキャンペーンが
            <TxtEmp02>併用不可</TxtEmp02>となります
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            お申し込み回線毎で本キャンペーン条件を満たす前、または満たした後に、以下のキャンペーンの条件を満たした場合には、
            <TxtEmp02>以下のキャンペーンのみが優先的に適用</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark2>
            <li>
              Rakutenオリジナル製品 1円キャンペーン（キャンペーンコード：1875）
            </li>
            <li>
              <s>
                【楽天カード会員様限定】楽天モバイル初めてお申し込みで20,000ポイントプレゼント（キャンペーンコード：2155）
              </s>
              <CpnListMark1>
                <li>
                  2024年1月9日（火）9:59に上記（キャンペーンコード：2155）は終了しました
                </li>
              </CpnListMark1>
            </li>
            <li>
              【楽天カード会員様限定】楽天モバイル初めてお申し込みで20,000ポイントプレゼント（キャンペーンコード：2217）
            </li>
            <li>
              【Android対象製品限定】特価キャンペーン（キャンペーンコード：2178）
            </li>
          </CpnListMark2>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            本キャンペーンを適用した場合、以下のキャンペーン特典は
            <TxtEmp02 as="span">対象外</TxtEmp02>
            となります
          </TxtEmp01>
          <CpnListMark2>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント（キャンペーンコード：2091）
            </li>
            <li>
              【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン（キャンペーンコード：2142）
            </li>
            <li>
              iPhone
              対象端末ポイントバックキャンペーン（キャンペーンコード：1819）
            </li>
            <li>
              「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン（キャンペーンコード：2006）
            </li>
          </CpnListMark2>
          <CpnListMark1>
            <li>
              新規お申し込み、もしくは楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込みの場合、上記2キャンペーン（キャンペーンコード：1819、2006）は本キャンペーンと併用可能となります
            </li>
          </CpnListMark1>
          <CpnListMark2>
            <li>リワード広告キャンペーン （キャンペーンコード：1755）</li>
          </CpnListMark2>
          <CpnListMark1>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>紹介する方（ご紹介者様）に併用不可キャンペーンはありません</li>
          </CpnListMark1>
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
              紹介者から送られた紹介URLからログインをせずにお申し込みした場合​
            </li>
            <li>
              紹介者から送られた紹介URLへのログインがお申し込み後から8日以上経過している場合（後ログインが可能な2024年1月23日以降のお申し込みについて）
            </li>
            <li>紹介者（楽天従業員）と被紹介者様が同一人物の場合​​</li>

            <li>
              楽天モバイルショップ、楽天モバイルオンライン、楽天モバイル公式楽天市場店以外で契約した場合​
            </li>
            <li>被紹介者様が楽天従業員である場合</li>
            <li>
              間接的な紹介行為を行った場合（第三者に自分の専用URLを渡し、第三者がそれらを利用したお申し込み促進を行った場合）​​
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
            ■ 法令制限による場合
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>
              特典総額が景品表示法・電気通信事業法の範囲内に制限される場合
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              紹介された方（被紹介者様）が「Rakuten最強プラン」お申し込みと同時にWi-Fiルーターをご購入する場合
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
            <li>
              ご契約者
              本人／利用者確認の不備や、MNPの手続きの不備等により申し込みキャンセルとなった場合
            </li>
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
              紹介された方（被紹介者様）が複数の方から紹介を受けた場合、最も早く紹介ログインがあった紹介者のURLが特典対象となります
            </li>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）とは異なり、
              <TxtEmp02>
                2回線目以降の契約または再契約の方の場合でも特典付与の対象
              </TxtEmp02>
              となります。
            </li>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）とは異なり、
              <TxtEmp02>
                「Rakuten Link」を10秒間以上通話を行わなくても特典付与対象
              </TxtEmp02>
              になります。
            </li>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）とは異なり、
              <TxtEmp02>
                「Rakuten最強プラン（データタイプ）」をご契約した場合でも特典付与対象
              </TxtEmp02>
              になります。
            </li>
            <li>
              【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）とは異なり、被紹介者様が
              <TxtEmp02>
                「Rakuten Turbo」をご契約した場合でも特典付与対象
              </TxtEmp02>
              になります。
              <br />
              Rakuten Turboお申し込みについては下記ルールをご参照ください。
            </li>
            <li>
              1つの楽天IDで契約できる回線は最大10回線となります。
              こちらは本キャンペーンではなく、楽天モバイルの仕組みとなります。​
            </li>
            <li>
              製品の台数には限りがございます。なくなり次第終了とさせていただく場合があります​​
            </li>
            <li>
              「Rakuten最強プラン（データタイプ）」から
              「Rakuten最強プラン」へプラン変更した場合は対象外です
            </li>
            <li>記載の内容は2024年5月21日（火）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
