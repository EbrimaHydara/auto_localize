import { CpnListMark1, CpnTitlelv1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { IconNewTabLine } from '@components/icons'
import Utils from '@styles/Utils.module.scss'

type Props = {
  className?: string
}
export const CampaignRule2244: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>施策コード</dt>
        <dd>
          <p>2244</p>
          <CpnListMark1>
            <li>
              本施策に関してお問い合わせの際は、上記「施策コード」をお伝えください
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>実施期間</dt>
        <dd>
          <TxtEmp01 as="p">■ 来店予約期間</TxtEmp01>
          <p className={Utils['Mt-8']}>
            店舗：2024年3月28日（木）9:00～2024年5月31日（金）23:59
          </p>
          <CpnListMark1>
            <TxtEmp02 as="li">
              2024年5月8日（水）に終了日を記載しました。
            </TxtEmp02>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>■ 来店およびご来店アンケート回答期限</TxtEmp01>
          <p className={Utils['Mt-8']}>
            2024年6月14日（金）閉店
          </p>
          <CpnListMark1>
            <TxtEmp02 as="li">
            2024年5月8日（水）に追記しました。
            </TxtEmp02>
            <TxtEmp02 as="li">
            来店予約日を2024年6月15日（土）以降で選択すると対象外となります。
            </TxtEmp02>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>進呈条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>楽天モバイルショップへの来店予約（平日を選択）
          </CpnTitlelv1>
          <p>
            お近くの楽天モバイルショップは
            <LinkNormal href="/shop/?l-id=shop_weekday-reservation_shop_03">
              こちら
            </LinkNormal>
            から
          </p>
          <CpnListMark1>
            <li>
              土日祝を除く、平日を来店予定日に指定した方が対象です。（国民の祝日は
              <LinkIconAfter
                href="https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html
                <IconNewTabLine />
              </LinkIconAfter>
              からご確認ください。）
            </li>
            <li>
              来店予約時に楽天会員IDのログインが必要です。この際ログインいただいた楽天会員ポイント口座へポイント進呈を行います。
            </li>
            <li>
              楽天会員ログインが確認できない場合、ポイント進呈対象外になります。
            </li>
            <li>
              予約がキャンセルになった場合、ポイント進呈対象外となります。
            </li>
            <li>
              実施期間中に複数回予約された場合は、予約日が早い方が進呈対象となります。
            </li>
            <li>一部のショップでは、来店予約いただけません。</li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            ご来店アンケートに回答
          </CpnTitlelv1>
          <p>来店時に、ご来店アンケートへの回答をお願いいたします。</p>
        </dd>
      </div>

      <div>
        <dt>特典内容（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            100ポイント
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ポイント進呈日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            【1】【2】の条件達成が確認できた月の翌々月末日ごろに進呈
          </TxtEmp01>
          <CpnListMark1>
            <li>
              例）3月にすべての条件を達成した場合には、その翌々月である5月末日ごろにポイント進呈となります
            </li>
            <li>楽天ポイントの進呈は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ポイント有効期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ポイント進呈日を含めて6カ月
          </TxtEmp01>
          <CpnListMark1>
            <li>
              期間限定ポイントについて（
              <LinkIconAfter
                href="https://ichiba.faq.rakuten.net/detail/000006532"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ichiba.faq.rakuten.net/detail/000006532
                <IconNewTabLine />
              </LinkIconAfter>
              ）
            </li>
            <li>
              有効期限までにポイントを利用いただいた場合でも、有効期限以降にキャンセルや金額修正などが生じた場合には返還されません
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>おひとり様1回限りご参加いただけます。</li>
            <li>
              ポイントは来店予約時にログインした楽天会員ポイント口座へ進呈いたします。
            </li>
            <li>
              獲得したポイントは、楽天ポイントの履歴画面でご確認ください。
            </li>
            <li>
              以下の条件に当てはまる場合は、ポイント進呈対象外となります。
              <ul>
                <li>・ポイント進呈までに楽天会員から退会している場合</li>
                <li>
                  ・当社または楽天グループ株式会社が定める規約などに違反した場合
                </li>
                <li>・そのほか、当社が会員として不適格であると判断した場合</li>
              </ul>
            </li>
            <li>
              本施策は予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください。
            </li>
            <li>記載の内容は2024年5月8日（水）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
