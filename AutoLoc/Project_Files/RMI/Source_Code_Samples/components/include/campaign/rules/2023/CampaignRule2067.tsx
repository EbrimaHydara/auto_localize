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

export const CampaignRule2067 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2067</p>
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
            2023年11月1日（水）9:00～2023年11月30日（木）23:59
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ オプションサービス加入期間
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>Web　2023年11月1日（水）9:00～2023年11月30日（木）23:59</li>
            <li>
              店舗（楽天モバイルショップ）　2023年11月1日（水）開店～2023年11月30日（木）閉店
            </li>
          </CpnListMark2Normal>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ プラン利用開始期限
          </TxtEmp01>
          <p className={Utils['Mt-8']}>2023年11月30日（木）23:59まで</p>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】、【3】、【4】の条件をすべて満たした楽天会員の方
          </TxtEmp02>
          <TxtCap className={Utils['Mt-8']} as="p">
            <TxtEmp02>
              「※キャンペーン開始時点で「Rakuten最強プラン」をご利用中のお客さまに関しては、回線開通日から30日以内であれば、オプションサービス加入期間内に【4】の条件を満たすことで【2】、【3】の条件を満たさなくてもキャンペーン参加が可能です。」
            </TxtEmp02>
          </TxtCap>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>キャンペーンへのエントリー
          </CpnTitlelv1>
          <p>エントリー期間内に本キャンペーンページでエントリー</p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            「Rakuten最強プラン」へ、下記（1）～（3）いずれかの方法にてお申し込み
          </CpnTitlelv1>
          <CpnListOrderedLv2>
            <li>新規お申し込み</li>
            <li>他社からの乗り換え（MNP）でお申し込み</li>
            <li>
              楽天モバイル（ドコモ回線・au回線）の料金プランからプラン変更（移行）手続き後、お申し込み
            </li>
          </CpnListOrderedLv2>
          <CpnListMark1>
            <li>
              「Rakuten UN-LIMIT
              VII」から「Rakuten最強プラン」への移行は対象外となります。
            </li>
          </CpnListMark1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>「Rakuten最強プラン」利用開始
          </CpnTitlelv1>
          <p>【プラン利用開始日とは】</p>
          <CpnListMark2Normal>
            <li>
              新規お申し込みの場合　
              <TxtCap>
                ※（1）（2）のいずれか早い方がプラン利用開始日となります
              </TxtCap>
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
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【4】</span>
            楽天モバイルショップまたは楽天モバイルオンラインより持ち込みスマホあんしん保証
            に加入
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              製品によって、月額料金が異なります。詳しくは下記のURLをご確認ください。
            </li>
          </CpnListMark1>
          <CpnListMark2Normal>
            <li>
              持ち込みスマホあんしん保証の詳細は
              <LinkNormal href="/service/replacement-warranty-sim/?l-id=service_service-list_replacement-warranty-sim">
                こちら
              </LinkNormal>
            </li>
          </CpnListMark2Normal>
        </dd>
      </div>

      <div>
        <dt>キャンペーン特典　（楽天ポイント）</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            1,309ポイントプレゼント
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント付与日
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            2024年4月末日ごろに付与
          </TxtEmp01>
          <CpnListMark1>
            <li>
              オプションの加入期間内に「持ち込みスマホあんしん保証」に加入いただいた方には2024年4月末日ごろに1,309ポイント付与されます。
            </li>
            <li>楽天ポイントの付与は、楽天モバイルより行います</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ ポイント有効期間
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ポイント付与日を含めて6カ月
          </TxtEmp01>
          <CpnListMark1>
            <li>
              <LinkNormal href="https://ichiba.faq.rakuten.net/detail/000006532">
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
          <TxtEmp01 as="p">
            <TxtEmp02>
              以下の条件に当てはまる場合は、特典適用対象外となります
            </TxtEmp02>
          </TxtEmp01>
          <CpnListMark1>
            <li>
              当社の提供するサービスなどの料金のお支払いが、お支払い期限までに行われず、未納・未払いが発生した場合
            </li>
            <li>
              「持ち込みスマホあんしん保証1カ月利用料相当ポイント還元キャンペーン」の適用回数が、おひとり様1回を超える場合は対象外となります
            </li>
            <li>
              ご契約者 本人／利用者確認の不備や、MNPの手続きの不備等により
              <TxtEmp01>申し込みキャンセル</TxtEmp01>となった場合
            </li>
            <li>
              「Rakuten最強プラン」の利用開始がされなかった場合
              <CpnListMark2Normal>
                <li>
                  プラン利用開始の手続き方法につきましては、こちらのSIMカード版スタートガイドまたはeSIM版スタートガイドを参照ください
                </li>
              </CpnListMark2Normal>
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
        <dt>併用可能キャンペーン</dt>
        <dd>
          <TxtEmp02 as="p">以下のキャンペーンは併用可能となります。</TxtEmp02>
          <TxtEmp02 as="ul" className={Utils['Mt-8']}>
            <li>
              ・【楽天モバイル】Rakuten最強プラン紹介キャンペーン（キャンペーンコード：1784）
            </li>
            <li>
              ・【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えで6,000ポイントプレゼント
              （キャンペーンコード：2091）
            </li>
          </TxtEmp02>
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
            <li>記載の内容は2023年11月1日（水）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
