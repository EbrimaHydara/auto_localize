import { assets } from '@components/utils/assets'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { ThemeContext } from 'styled-components'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import Utils from '@styles/Utils.module.scss'
import { TxtCap } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'

const Block = styled.div`
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.monotone88};

  // karteでstyled-componentsが使えないので
  .karte-buttonSecondaryLarge {
    text-align: center;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    a {
      display: inline-block;
      width: 100%;
      position: relative;
      text-align: center;
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.fonts.base};
      font-weight: bold;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      line-height: 1.4;
      border-radius: 50px;
      box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
      ${mixins.mq.MinL} {
        width: auto;
      }
      background-color: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.pink20};
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
      }
      &:focus {
        outline: 2px ${props => props.theme.colors.linkBlue} solid;
        outline-offset: 2px;
      }
      &:active {
        background-color: ${props => props.theme.colors.pink40};
        outline: 0;
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        box-shadow: none;
      }
      min-width: 160px;
      ${mixins.mq.MaxM} {
        max-width: 500px;
      }
      font-size: 18px;
      padding: 16px 24px;
      max-width: 500px;
      width: 100%;
      line-height: 1.4;
      span.text-sub {
        display: block;
      }
      ${mixins.mq.MinL} {
        width: 100%;
      }
    }
  }
`
const Caption = styled(TxtCap)`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0 16px;
  margin-top: 16px;
  ${mixins.mq.MaxM} {
    align-items: center;
    flex-direction: column;
  }
`

type Saikyo = {
  className?: string
  cta?: boolean
  lid?: string
  ratId?: string
  ratEvent?: 'click' | 'appear'
}

export const CommonSaikyo = ({
  className,
  cta = true,
  lid = 'plan_include_fee_saikyo-plan',
  ratId,
  ratEvent,
}: Saikyo) => {
  const theme = useContext(ThemeContext)
  const ratParam = ratId && 'all'
  return (
    <Block
      className={className}
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
    >
      <picture>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${assets}img/inc/saikyo/plan-saikyo-sp-240502.png`}
          width="750"
          height="1924"
        />
        <img
          src={`${assets}img/inc/saikyo/plan-saikyo-pc-240502.png`}
          width="1032"
          height="753"
          alt="Rakuten最強プラン"
          loading="lazy"
        />
      </picture>
      {cta && (
        <BtnWrapper>
          <ButtonPrimaryLarge as="a" href={`/fee/saikyo-plan/?l-id=${lid}`}>
            料金プランの詳細を見る
          </ButtonPrimaryLarge>
          <ButtonSecondaryLarge
            as="a"
            href="/fee/simulation/?l-id=plan_include_fee_un-limit-simulation"
          >
            料金シミュレーションをする
          </ButtonSecondaryLarge>
        </BtnWrapper>
      )}
      <div className="karte-uservoice-saikyo"></div>

      <Caption as="p" className={Utils['Mt-24']}>
        <span className={Utils['Show-xxo']}>
          *製品代、オプション料は別費用 *1
          Opensignal社データ（2023年8月時点）の当社分析に基づく。30府県で「一貫した品質」のRank1を獲得。
          <LinkNormal href="/#opensignal">詳細はこちら</LinkNormal>
          *2 公平なサービス提供または環境により速度低下する場合あり *3
          期間限定ポイント。全ての条件を満たしたことが確認された月の翌々月末日ごろに付与
          *4 一部対象外番号あり。アプリ未使用時30秒22円 *5
          毎月の獲得上限ポイントは2,000ポイント。期間限定ポイント。
          <LinkNormal href="/campaign/spu/">SPUの詳細はこちら</LinkNormal>
          *6
          各キャンペーンは予告なく変更・終了する場合あり。その他一部条件あり。
          <LinkNormal href="/campaign/digital-contents/">
            詳細はこちら
          </LinkNormal>{' '}
          *7 通話料等別。2GB超過後は最大128kbps。
          <LinkNormal href="/service/global/overseas/#accordion-1">
            対象エリア
          </LinkNormal>
          及び条件は変更する場合あり
        </span>
        <span className={Utils['Show-oox']}>
          *製品代、オプション料は別費用 *1
          公平なサービス提供または環境により速度低下する場合あり *2
          期間限定ポイント。全ての条件を満たしたことが確認された月の翌々月末日ごろに付与
          *3 一部対象外番号あり。アプリ未使用時30秒22円 *4
          毎月の獲得上限ポイントは2,000ポイント。期間限定ポイント。
          <LinkNormal href="/campaign/spu/">SPUの詳細はこちら</LinkNormal>
          *5
          各キャンペーンは予告なく変更・終了する場合あり。その他一部条件あり。
          <LinkNormal href="/campaign/digital-contents/">
            詳細はこちら
          </LinkNormal>{' '}
          *6 通話料等別。2GB超過後は最大128kbps。
          <LinkNormal href="/service/global/overseas/#accordion-1">
            対象エリア
          </LinkNormal>
          及び条件は変更する場合あり
        </span>
      </Caption>
    </Block>
  )
}

export const CommonSaikyoEn = ({
  className,
  cta = true,
  lid = 'plan-en_include_fee_saikyo-plan_en',
  ratId,
  ratEvent,
}: Saikyo) => {
  const theme = useContext(ThemeContext)
  const ratParam = ratId && 'all'
  return (
    <Block
      className={className}
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
    >
      <picture>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${assets}img/inc/saikyo/plan-saikyo-en-sp-240430.png`}
          width="750"
          height="1924"
        />
        <img
          src={`${assets}img/inc/saikyo/plan-saikyo-en-pc-240430.png`}
          width="1032"
          height="753"
          alt="Rakuten SAIKYO Plan"
          loading="lazy"
        />
      </picture>
      {cta && (
        <BtnWrapper>
          <ButtonPrimaryLarge as="a" href={`/fee/saikyo-plan/en/?l-id=${lid}`}>
            See Price Plan Details
          </ButtonPrimaryLarge>
          <ButtonSecondaryLarge
            as="a"
            href="/fee/simulation/?l-id=plan-en_include_simulation_fee_simulation"
          >
            Simulate Your Price
          </ButtonSecondaryLarge>
        </BtnWrapper>
      )}
      <Caption as="p" className={Utils['Mt-24']}>
        <span className={Utils['Show-xxo']}>
          *Product and additional option fees are billed separately. **1
          Analysis based on Opensignal data as of August 2023. Achieved Rank 1
          for "consistent quality" across 30 prefectures.{' '}
          <LinkNormal href="/fee/saikyo-plan/en/?l-id=plan-en_include_fee_saikyo-plan_en#opensignal">
            Click here for more details.
          </LinkNormal>{' '}
          **2 Speed may be restricted due to fair service provision or network
          environment.​ **3 Points are rewarded as time-limited points after
          conditions are met, around two months in. **4 Some numbers excluded.
          ¥22/30s without Rakuten Link app.​ **5 The maximum monthly point
          earning is 2,000 as time-limited points.{' '}
          <LinkNormal href="/campaign/spu/?l-id=plan-en_include_campaign_spu">
            Click here for more details on SPU.
          </LinkNormal>{' '}
          **6 Campaigns can change or conclude without prior notice. Other
          conditions apply.{' '}
          <LinkNormal href="/campaign/digital-contents/?l-id=plan-en_include_campaign_digital-contents">
            Click here for more details.
          </LinkNormal>{' '}
          **7 Excludes call charges and related fees. Speeds are capped at 128
          kbps after 2GB.{' '}
          <LinkNormal href="/service/global/overseas/en/?l-id=plan-en_include_service_global_overseas_en#accordion-1">
            Coverage areas
          </LinkNormal>{' '}
          and conditions are subject to change.
        </span>
        <span className={Utils['Show-oox']}>
          *Product and additional option fees are billed separately. **1 Speed
          may be restricted due to fair service provision or network
          environment.​ **2 Points are rewarded as time-limited points after
          conditions are met, around two months in. **3 Some numbers excluded.
          ¥22/30s without Rakuten Link app.​ **4 The maximum monthly point
          earning is 2,000 as time-limited points.{' '}
          <LinkNormal href="/campaign/spu/?l-id=plan-en_include_campaign_spu">
            Click here for more details on SPU.
          </LinkNormal>{' '}
          **5 Campaigns can change or conclude without prior notice. Other
          conditions apply.{' '}
          <LinkNormal href="/campaign/digital-contents/?l-id=plan-en_include_campaign_digital-contents">
            Click here for more details.
          </LinkNormal>{' '}
          **6 Excludes call charges and related fees. Speeds are capped at 128
          kbps after 2GB.{' '}
          <LinkNormal href="/service/global/overseas/en/?l-id=plan-en_include_service_global_overseas_en#accordion-1">
            Coverage areas
          </LinkNormal>{' '}
          and conditions are subject to change.
        </span>
      </Caption>
    </Block>
  )
}
