import {
  CpnListMark1,
  CpnListMark2Normal,
  CpnTitlelv1,
  CpnListOrderedLv2,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02, TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule1976 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>1976</p>
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
          <TxtEmp02 as="p">
            2024年2月8日（木）9:00に、製品のご購入期間の終了日時を追記いたしました
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ 製品のご購入期間
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>Web　2023年10月20日（金）9:00～2024年2月21日（水）23:59　</li>
            <li>店舗（楽天モバイルショップ）　2023年10月20日（金）開店～2024年2月21日（水）閉店</li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>楽天モバイル公式 楽天市場店での購入は対象外となります</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ご購入製品の受け取り期限
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            対象製品ご購入申し込み後～2024年3月21日（木）23:59まで
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■「Apple Watch
            ファミリー共有」の申し込み期限
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>Web　対象製品ご購入申し込み後～2024年3月21日（木）23:59まで</li>
            <li>
              店舗（楽天モバイルショップ）　対象製品ご購入申し込み後～2024年3月21日（木）閉店まで
            </li>
          </CpnListMark2Normal>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <TxtCap className={Utils['Mt-8']} as="p">
            <TxtEmp02>
              ※ 特典はおひとり様1回のみ。「Apple Watch
              ファミリー共有」を初めてお申し込みいただいた場合のみ適用となります
            </TxtEmp02>
          </TxtCap>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>対象製品いずれかをご購入　
          </CpnTitlelv1>
          <p>
            製品のご購入期間中に楽天モバイルオンライン(Web)、もしくは楽天モバイルショップで以下いずれかを購入(楽天モバイル公式
            楽天市場店は対象外)
          </p>
          <CpnListMark2Normal>
            <li>Apple Watch Series 9</li>
            <li>Apple Watch Ultra 2</li>
            <li>Apple Watch SE（第2世代）</li>
            <li>Apple Watch Series 8</li>
            <li>Apple Watch Ultra</li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              購入申し込みを中止、もしくはキャンセルした場合は特典適用の対象外となります
            </li>
            <li>
              製品が受け取り期限内にお手元に届いた時点で、【1】の条件達成となります
            </li>
            <li>
              回線と同時購入をされた場合には、回線の利用が確認されるまで購入が完了とみなされないためご注意ください
            </li>
            <li>
              予約販売の製品は配送にお時間をいただき、受け取り期限を超過してしまう場合がございます。その際は本キャンペーンの特典適用対象外となりますので、あらかじめご了承ください。
            </li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>「Apple Watch
            ファミリー共有」へ、下記（1）（2）いずれかの方法にてお申し込み
          </CpnTitlelv1>
          <CpnListOrderedLv2>
            <li>新規お申し込み</li>
            <li>他社からの乗り換え（MNP）でお申し込み</li>
          </CpnListOrderedLv2>
          <CpnListMark1>
            <li>
              楽天モバイル（旧FREETEL）通話SIMからの乗り換え（MNP）、DMMモバイル通話SIMからの乗り換え（MNP）の場合は対象です
            </li>
            <li>
              <TxtEmp02>
                楽天モバイル（ドコモ回線・au回線）のメンバーズステーションよりプラン変更（移行）した場合、およびRakuten最強プランからプラン変更手続きの場合は対象外です
              </TxtEmp02>
            </li>
          </CpnListMark1>
          <p>【Apple Watch ファミリー共有のお申し込み方法】</p>
          <p>
            下記URLの「Apple Watch ファミリー共有のお申し込み方法」をご確認ください
          </p>
          <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/">
            https://network.mobile.rakuten.co.jp/guide/flow/application/apple-watch-family-sharing/
          </LinkNormal>
          <CpnListMark1>
            <li>
              対象製品購入時の楽天IDと同じ楽天IDで「Apple Watch
              ファミリー共有」をお申し込みいただく必要があります
            </li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>キャンペーン特典 （Apple Watch用お買いものパンダバンド）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            Apple Watch用お買いものパンダバンドをプレゼント
          </TxtEmp01>
          <CpnListMark1>
            <li>
              38mm・40mm・41mmのケースに対応します。対応外のケースサイズをご購入された場合にも、景品は発送させていただきます
            </li>
            <li>バンドは手首が130mm〜200mmの方にフィットします</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            景品の発送日
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            キャンペーン条件達成から3ヶ月前後で発送（初回発送は2024年1月末となります）
          </p>
          <CpnListMark1>
            <TxtEmp02 as="li">
              景品は先着順でなくなり次第終了とさせていただきます
            </TxtEmp02>
            <TxtEmp02 as="li">
              店舗（楽天モバイルショップ）でキャンペーン条件を達成された場合でも、景品は別途発送いたします
            </TxtEmp02>
            <li>発送状況により、配送が遅れる場合がございます</li>
            <li>配送先は日本国内に限らせていただきます</li>
            <li>
              景品は対象製品をご購入された際に楽天モバイルにご登録いただいた氏名、住所に発送いたします
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
            <li>
              「先着500名限定！Apple Watch用お買いものパンダバンド
              プレゼントキャンペーン​」の適用回数が、おひとり様につき1回を超える場合
            </li>
            <li>
              楽天モバイルショップ、楽天モバイルオンライン以外で購入した場合　(楽天モバイル公式
              楽天市場店でのご購入は対象外)
            </li>
            <li>
              楽天モバイル（ドコモ回線・au回線）のメンバーズステーションよりプラン変更（移行）した場合、Rakuten最強プランからプラン変更手続きの場合
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              景品進呈までに楽天会員から<TxtEmp01>退会</TxtEmp01>している場合
            </li>
            <li>
              当社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>
              そのほか、<TxtEmp01>当社が会員として不適格である</TxtEmp01>
              と合理的に判断した場合
            </li>
            <li>
              楽天モバイルオンライン（Web）で製品をご購入し、製品がお手元に届くまでにご注文をキャンセルされた場合
            </li>
            <li>
              対象製品購入時の楽天IDと「Apple Watch
              ファミリー共有」申込時の楽天IDが異なる場合
              <br />
              (お申し込み後、ポイント付与が行われるまでに楽天IDを変更された場合は対象外となります)
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本キャンペーン対象有無のお知らせは景品の到着をもって代えさせていただきます
            </li>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります
            </li>
            <li>
              景品の数には限りがございます。先着順で景品がなくなり次第終了とさせていただく場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合、キャンペーンを終了とさせていただく場合があります
            </li>
            <li>記載の内容は2024年2月8日（木）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
