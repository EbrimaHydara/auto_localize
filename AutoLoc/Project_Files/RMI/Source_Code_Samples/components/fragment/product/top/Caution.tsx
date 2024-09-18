import { Heading } from '@components/atoms/Heading'
import { TxtCap } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'

import Utils from '@styles/Utils.module.scss'

export const Caution = () => {
  return (
    <div className={Utils['Mt-64']}>
      <Heading level="3">注意事項</Heading>
      <div className={Utils['Mt-16']}>
        <Heading level="4" id="cautionCampaign">
          ■各種キャンペーンについて
        </Heading>
        <TxtCap as="ul" className={`${Utils['Mt-8']}`}>
          <li>
            *1「
            <LinkNormal href="/campaign/mnp/#campaign-rule2091">
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えで6,000ポイントプレゼント
            </LinkNormal>
            」適用時。
          </li>
          <li>
            *2「
            <LinkNormal href="/campaign/iphone-point/#campaign-rule1819">
              iPhone 対象端末ポイントバックキャンペーン
            </LinkNormal>
            」適用時。
          </li>
          <li>
            *3「
            <LinkNormal href="/campaign/start-point/#campaign-rule2006">
              Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン
            </LinkNormal>
            」適用時。
          </li>
        </TxtCap>
      </div>
    </div>
  )
}
