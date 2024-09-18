import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtNormal,
  TxtEmp02,
  TxtSize,
  TxtWeightNormal,
  AlphanumericNormal,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { LinkIconBefore, LinkNormal } from '@components/atoms/Link'
import {
  //ButtonSecondary,
  ButtonSecondaryLarge,
  ButtonRegular,
  ButtonSecondary,
} from '@components/atoms/Buttons'
import { ButtonLinkIconBefore } from '@components/atoms/ButtonLink'
//import { InfoboxWhite } from '@components/atoms/Infobox'
import {
  IconArrowDown,
  IconRankingLine,
  IconSlidersLine,
} from '@components/icons'
import { CardNormal } from '@components/atoms/Card'
import { anchorCallback } from '@components/utils/anchorCallback'
import { mixins } from '@components/utils/Mixins'
import { UlOnly } from '@components/atoms/List'
import { Modal } from '@components/atoms/Modal'
import { ButtonRadioNoborder } from '@components/atoms/ButtonRadioNoborder'
import { Checkbox } from '@components/atoms/Checkbox'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'
import { assets } from '@components/utils/assets'
import { ServiceTopCarouselData } from '@components/include/service/ServiceTopCarouselData'
import { PaymentGoogleBnr } from '@components/include/common/PaymentGoogleBnr'
import { KvCarousel } from '@components/include/common/KvCarousel'

const GrayBox = styled.div`
  margin-top: 40px;
  padding: 32px 0 48px;
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceFindUsed = styled.div`
  background-repeat: no-repeat;
  margin-top: 16px;
  text-align: center;
  border: 1px solid #e0e0e0;
  ${mixins.mq.MinL} {
    background-image: url(${assets}img/service/top/img-service-find_used-pc.png?yymmdd);
    height: 228px;
    width: 100%;
    background-position: top center;
    background-size: 100%;
  }
  ${mixins.mq.MaxM} {
    background-image: url(${assets}img/service/top/img-service-find_used-sp.png?yymmdd);
    background-size: 768px 520px;
    background-position: bottom -4px center;
    padding: 0 16px 166px;
    height: auto;
  }
`
const ListHorSimple = styled.ul`
  overflow: hidden;
  > li {
    float: left;
    margin: 0 24px 16px 0;
  }
`
const LatestCard = styled.div`
  padding: 32px 24px 24px;
  position: relative;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`
/* 復活する可能性があるのでコメントアウト
const Dialogue = styled.img`
  width: 400px;
  height: 46px;
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  ${mixins.mq.MaxM} {
    width: 360px;
    height: 40px;
    top: -20px;
  }
`
*/

const ListWrap = styled.div`
  padding: 40px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const FilterWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`
const ButtonLinkIconBeforePr8 = styled(ButtonLinkIconBefore)`
  > span {
    &:first-child {
      padding-right: 8px;
    }
  }
`
const SearchWrap = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.monotone75};
`
const ModalCheckboxList = styled.ul`
  width: 100%;
  ${mixins.mq.MaxS} {
    margin: 0 auto;
  }
  li {
    width: 100%;
    margin-top: 16px;

    ${mixins.mq.MaxM} {
      margin-top: 24px;
    }
    &:first-child {
      ${mixins.mq.MaxS} {
        margin-left: 0;
      }
    }

    > label {
      ${mixins.mq.MaxS} {
        display: flex;
      }
      > div {
        ${mixins.mq.MaxS} {
          width: 100%;
        }
      }
    }
  }
`
const StyledLi = styled.li`
  width: calc(25% - 8px) !important;
  display: inline-table;
  ${mixins.mq.MaxM} {
    width: calc(50% - 8px) !important;
    margin-top: 24px;
  }
`
const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.gap.l};
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
  }
  > li {
    position: relative;
    a {
      height: 100%;
    }
  }
`
const CardPrice = styled.div`
  margin-top: 3px;
`
const CardCap = styled(TxtCap)`
  margin-top: 8px;
  font-size: 13px;
  > .item:not(:first-child) {
    margin-top: 8px;
  }
`
const CardListEmp = styled.span`
  margin-right: 16px;
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`
const CardListEmpBlack = styled.span`
  margin-right: 16px;
  font-weight: bold;
  font-size: ${props => props.theme.fonts.s};
  color: ${props => props.theme.colors.black};
`
const TxtEmp = styled.span`
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`
const CardListLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 8px;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
  padding: 2px;
  width: fit-content;
  min-width: 68px;
  height: 24px;
  text-align: center;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid transparent;
  }
  &.recommend {
    background: ${props => props.theme.colors.pink10};
    color: ${props => props.theme.colors.pink100};
    &::before {
      border-top: 5px solid ${props => props.theme.colors.pink10};
    }
  }
  &.new,
  &.more {
    background: ${props => props.theme.colors.pink100};
    color: ${props => props.theme.colors.white};
    &::before {
      border-top: 5px solid ${props => props.theme.colors.pink100};
    }
  }
  &.long {
    padding-left: 14px;
    padding-right: 14px;
  }
`
const RankingList = styled.ul`
  --gap: ${props => props.theme.gap.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-top: var(--gap);
  ${mixins.mq.MaxM} {
    flex-direction: row;
    row-gap: 32px;
    margin-top: 32px;
  }
  > li {
    width: 100%;
    &:nth-child(1) {
      .rank {
        color: ${props => props.theme.colors.white};
        background-color: #ccbb1d;
      }
    }
    &:nth-child(2) {
      .rank {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.monotone75};
      }
    }
    &:nth-child(1),
    &:nth-child(2) {
      ${mixins.mq.MinL} {
        width: calc((100% - var(--gap)) / 2);
      }
    }
    &:nth-child(3) {
      .rank {
        color: ${props => props.theme.colors.white};
        background-color: #ca8a37;
      }
    }
    &:nth-child(4),
    &:nth-child(5) {
      .rank {
        color: ${props => props.theme.colors.lightBlack};
        background-color: ${props => props.theme.colors.monotone93};
      }
    }
    &:nth-child(n + 3) {
      ${mixins.mq.MinL} {
        width: calc((100% - (var(--gap) * 2)) / 3);
      }
    }
    picture {
      display: block;
      text-align: center;
    }
    > a {
      height: 100%;
    }
  }
  .rank {
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    > span {
      margin-right: 4px;
    }
  }
  .head {
    text-align: center;
    margin-bottom: 16px;
  }
`
const ServiceTopLatestLabel = styled.p`
  margin-top: 24px;
  padding: 7px 0;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  border-radius: 4px 4px 0 0;
  background: #fff200;
  ${mixins.mq.MaxM} {
    font-size: 14px;
  }
`

const ButtonSecondaryCustom = styled(ButtonSecondary)`
  min-width: 160px;
`

const Service: NextPage = () => {
  const pagetitle = 'オプションサービス'
  const directories = [{ path: '/service/', label: '' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const [filterDeviceState, updateFilterDeviceState] = useState('')
  // const [filterDataSate, updateFilterDataState] = useState('')
  const [filterPlanState, updateFilterPlanState] = useState('')
  const [filterDataPlanState, updateFilterDataPlanState] = useState('')
  const initArr = useMemo(
    () => [
      'call',
      'warranty',
      'security',
      'support',
      'data',
      'disaster',
      'global',
      'iupg',
      'tradein',
      'shop',
    ],
    [],
  )
  const [filterCategoryState, updateFilterCategoryState] = useState(initArr)
  const [checkState1, updateCheckState1] = useState(true)
  const [checkState2, updateCheckState2] = useState(true)
  const [checkState3, updateCheckState3] = useState(true)
  const [checkState4, updateCheckState4] = useState(true)
  const [checkState5, updateCheckState5] = useState(true)
  const [checkState6, updateCheckState6] = useState(true)
  const [checkState7, updateCheckState7] = useState(true)
  const [checkState8, updateCheckState8] = useState(true)
  const [checkState9, updateCheckState9] = useState(true)
  const [checkState10, updateCheckState10] = useState(true)
  const checkStateArr = useMemo(
    () => [
      checkState1,
      checkState2,
      checkState3,
      checkState4,
      checkState5,
      checkState6,
      checkState7,
      checkState8,
      checkState9,
      checkState10,
    ],
    [
      checkState1,
      checkState2,
      checkState3,
      checkState4,
      checkState5,
      checkState6,
      checkState7,
      checkState8,
      checkState9,
      checkState10,
    ],
  )
  const [filterDeviceShadowState, updateFilterDeviceShadowState] = useState('')
  const [filterPlanShadowState, updateFilterPlanShadowState] = useState('')
  const [filterDataPlanShadowState, updateFilterDataPlanShadowState] =
    useState('')
  const [itemLengthState, updateItemLengthState] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ])

  const getCategoryArr = useCallback(() => {
    const tempArr: string[] = []
    checkStateArr.forEach((elem, i) => {
      if (elem === true) {
        tempArr.push(initArr[i])
      }
    })
    return tempArr
  }, [checkStateArr, initArr])

  const getDispFlag = useCallback(
    (category: string, plan: string, device: string[], dataPlan: string) => {
      let categoryFlag = false
      let planFlag = false
      let deviceFlag = false
      let dataPlanFlag = false
      if (filterCategoryState.indexOf(category) > -1) {
        categoryFlag = true
      }
      if (
        filterPlanShadowState === '' ||
        filterPlanShadowState === 'all' ||
        filterPlanShadowState === plan
      ) {
        planFlag = true
      }
      if (
        filterDataPlanShadowState === '' ||
        filterDataPlanShadowState === 'all' ||
        filterDataPlanShadowState === dataPlan
      ) {
        dataPlanFlag = true
      }
      if (
        filterDeviceShadowState === 'all' ||
        filterDeviceShadowState === '' ||
        device.indexOf(filterDeviceShadowState) > -1
      ) {
        deviceFlag = true
      }
      if (categoryFlag && planFlag && deviceFlag && dataPlanFlag) {
        return true
      } else {
        return false
      }
    },
    [
      filterCategoryState,
      filterPlanShadowState,
      filterDataPlanShadowState,
      filterDeviceShadowState,
    ],
  )

  const getItemLengthFlagImmediate = useCallback(
    (targetArr: ServiceItem[]) => {
      // console.log(checkStateArr)
      const getDispFlagImmediate = (
        category: string,
        plan: string,
        device: string[],
        dataPlan: string,
      ) => {
        let categoryFlag = false
        let planFlag = false
        let deviceFlag = false
        let dataPlanFlag = false
        if (getCategoryArr().indexOf(category) > -1) {
          categoryFlag = true
        }
        if (
          filterPlanState === '' ||
          filterPlanState === 'all' ||
          filterPlanState === plan
        ) {
          planFlag = true
        }
        if (
          filterDeviceState === '' ||
          filterDeviceState === 'all' ||
          device.indexOf(filterDeviceState) > -1
        ) {
          deviceFlag = true
        }
        if (
          filterDataPlanState === '' ||
          filterDataPlanState === 'all' ||
          filterDataPlanState === dataPlan
        ) {
          dataPlanFlag = true
        }
        if (categoryFlag && planFlag && deviceFlag && dataPlanFlag) {
          return true
        } else {
          return false
        }
      }
      const tempArr: number[] = []
      targetArr.forEach(elem => {
        if (
          getDispFlagImmediate(
            elem.category,
            elem.plan,
            elem.deviceTypes,
            elem.dataPlan,
          )
        ) {
          tempArr.push(0)
        }
      })
      return tempArr.length ? true : false
    },
    [filterPlanState, filterDeviceState, filterDataPlanState, getCategoryArr],
  )

  const putonBubble = useCallback((bubble: Bubble) => {
    const { text, className } = { ...bubble }
    return <CardListLabel className={className}>{text}</CardListLabel>
  }, [])

  const outputCardCap = useCallback((text: (string | JSX.Element)[]) => {
    return (
      <CardCap as="div">
        {text.map((item: string | JSX.Element, i: number) => {
          return (
            <p key={i} className="item">
              {item}
            </p>
          )
        })}
      </CardCap>
    )
  }, [])

  const outputCardList = useCallback(
    (arr: ServiceItem[]) => {
      return arr.map((arr: ServiceItem) => {
        return (
          getDispFlag(
            arr.category,
            arr.plan,
            arr.deviceTypes,
            arr.dataPlan,
          ) && (
            <li key={arr.path}>
              {arr.bubble && putonBubble(arr.bubble)}
              <CardNormal href={`/service/${arr.path}`}>
                <Heading level="4">{arr.title}</Heading>
                <div>
                  <CardPrice className={Utils['Align-right']}>
                    <CardListEmp>{arr.emp}</CardListEmp>
                    {arr.price}
                  </CardPrice>
                  {arr.cap && outputCardCap(arr.cap)}
                </div>
              </CardNormal>
            </li>
          )
        )
      })
    },
    [getDispFlag, putonBubble, outputCardCap],
  )

  type Bubble = {
    text: string
    className: string
  }

  type Ranking = {
    title: string | JSX.Element
    directory: string
    lid: string
    img: string
    text: string[]
    cap?: (string | JSX.Element)[]
  }

  type ServiceItem = {
    category: string
    title: string
    path: string
    emp?: string
    price: string | JSX.Element
    cap?: (string | JSX.Element)[]
    bubble?: Bubble
    deviceTypes: string[]
    plan: string
    dataPlan: string
    charge?: boolean
    iphone?: string
    android?: string
    wifi?: boolean
  }

  const ranking: Ranking[] = [
    {
      title: '15分（標準）通話かけ放題',
      directory: 'standard-free-call',
      lid: 'standard-free-call-2',
      img: 'standard-free-call',
      text: [
        'OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。',
      ],
      cap: [
        <TxtEmp02>
          <TxtWeightNormal>※</TxtWeightNormal>
          10分かけ放題オプションは2022年7月1日に15分かけ放題オプションに生まれ変わりました。10分かけ放題をご契約中のお客様も、7月1日に自動的に15分かけ放題にアップグレードされます。
        </TxtEmp02>,
      ],
    },
    {
      title: (
        <>
          データチャージ
          <br />
          （海外ローミング）
        </>
      ),
      directory: 'data-charge',
      lid: 'data-charge',
      img: 'data-charge',
      text: [
        '海外ローミングエリアで消費するデータ容量を、必要な分だけいつでもチャージできます。',
      ],
    },
    {
      title: '選べる電話番号サービス',
      directory: 'select-number',
      lid: 'select-number',
      img: 'select-number',
      text: [
        '電話番号の下4桁を好きな番号にできます。好きな電話番号が出てくるまで、何度でも検索可能！',
      ],
      cap: [
        '※ ご希望に添えない場合がございます。あらかじめご了承ください。',
        <TxtEmp02>
          <TxtWeightNormal>※</TxtWeightNormal>{' '}
          通話プラン新規電話番号でお申し込み時
        </TxtEmp02>,
      ],
    },
    {
      title: (
        <>
          ノートンモバイル
          <br />
          セキュリティ
        </>
      ),
      directory: 'norton-mobile-security',
      lid: 'norton-mobile-security',
      img: 'norton-mobile-security',
      text: [
        'ウイルス対策やWeb保護、Wi-Fiセキュリティなどの機能で、スマホを保護します。',
      ],
    },
    {
      title: (
        <>
          故障紛失保証 with
          <br />
          AppleCare Services &amp;
          <br />
          iCloud+
        </>
      ),
      directory: 'iphone/applecare-icloud',
      lid: 'iphone_applecare-icloud',
      img: 'applecare-icloud',
      text: [
        'もしもの時の修理サービスとサポート、盗難や紛失に対する保証をAppleから直接受けられ、さらに「iCloud+ 50GBストレージ付き」もご利用いただけます。',
      ],
      cap: [
        <>
          ※ 楽天モバイルで購入されたiPhoneが対象です。
          <TxtEmp02>楽天モバイル以外で購入されたiPhoneは対象外です。</TxtEmp02>
        </>,
        <TxtEmp02>
          <TxtWeightNormal>※</TxtWeightNormal>{' '}
          iPhone購入時（新規・機種変更）のみお申し込み可能です。
        </TxtEmp02>,
      ],
    },
  ]

  const call: ServiceItem[] = [
    {
      category: 'call',
      title: '15分（標準）通話かけ放題',
      path: 'standard-free-call/?l-id=service_service_standard-free-call-3',
      emp: '1ヶ月無料※',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,100
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: [
        'OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSが送信し放題',
        '※かけ放題の初回お申し込み時。条件あり。',
      ],
      bubble: { text: 'NEW', className: 'new' },
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '選べる電話番号サービス',
      path: 'select-number/?l-id=service_service-list_select-number',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,100
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円
        </>
      ),
      cap: ['お好きな電話番号の下4桁が選べる'],
      deviceTypes: ['iphone', 'android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'call',
      title: '楽メール',
      path: 'rakumail/?l-id=service_service-list_rakumail',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: [
        '楽天モバイルのドメイン（@rakumail.jp）でメールアドレスの設定、利用が可能',
      ],
      bubble: { text: 'NEW', className: 'new' },
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '楽メール持ち運び',
      path: 'rakumail-portability/?l-id=service_service-list_rakumail-portability',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                330
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: [
        '楽天モバイル（楽天回線）を解約、譲渡もしくは、MNP転出後も引き続き、「楽メール」をご利用いただけるオプションサービス',
      ],
      bubble: { text: 'NEW', className: 'new' },
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '留守番電話',
      path: 'voice-mail/?l-id=service_service-list_voice-mail',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['電話に出られない時に、伝言を預かり後で再生'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '着信転送',
      path: 'call-forwarding/?l-id=service_service-list_call-forwarding',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: [
        'かかってきた電話を、登録済みの別の電話へ転送',
        '※転送中は通話料発生（22円／30秒）',
      ],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '割込通話/通話保留',
      path: 'call-waiting/?l-id=service_service-list_call-waiting',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['通話中の割り込み通話や保留通話が可能'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '発信者番号非通知',
      path: 'caller-id/?l-id=service_service-list_caller-id',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['電話をかけたときに、電話番号を相手に通知しない機能'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '特番通話',
      path: 'special-number-service/?l-id=service_service-list_special-number-service',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['110番（警察）や#4桁特番などの特番通話を利用できる'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: '着信SMS通知',
      path: 'sms-notification-of-incoming-calls/?l-id=service_service-list_sms-notification-of-incoming-calls',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['電源OFF時や通話中などで応答できなかった着信をSMSで通知'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: 'Rakuten Link',
      path: 'rakuten-link/?l-id=service_service-list_rakuten-link',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['Rakuten Link同士なら通話・メッセージ無料！'],
      iphone: 'iphone',
      android: 'android',
      wifi: false,
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'call',
      title: 'SMS',
      path: 'sms/?l-id=service_service-list_sms',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['電話番号同士で文字メッセージのやりとりができる'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
  ]
  const warranty: ServiceItem[] = [
    {
      category: 'warranty',
      title: '故障紛失保証 with AppleCare Services & iCloud+',
      path: 'iphone/applecare-icloud/?l-id=service_service-list_applecare-icloud',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,100
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円～
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,650
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: [
        'もしもの時の修理サービスとサポート、盗難や紛失に対する保証をAppleから直接受けられ、さらに「iCloud+ 50GBストレージ付き」もご利用いただけます。',
      ],
      bubble: { text: 'NEW', className: 'new' },
      deviceTypes: ['iphone'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'warranty',
      title: 'スマホ交換保証プラス',
      path: 'replacement-warranty-plus/?l-id=service_service-list_replacement-warranty-plus',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                715
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['故障・紛失時に新品同等の同一機種に交換！'],
      bubble: { text: 'オススメ', className: 'recommend' },
      deviceTypes: ['android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'warranty',
      title: '持ち込みスマホあんしん保証',
      path: 'replacement-warranty-sim/?l-id=service_service-list_replacement-warranty-sim',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                715
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円～
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,309
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['すでにお持ちの楽天回線対応製品の故障・破損・水没を保証'],
      bubble: { text: 'オススメ', className: 'recommend' },
      deviceTypes: ['iphone', 'android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'warranty',
      title: 'あんしん保証with AppleCare Services for Apple Watch',
      path: 'applewatch-care/?l-id=service_service-list_applewatch-care',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                280
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円～
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                650
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: [
        'Apple Watchの修理や製品サポートをApple 公式のサービス同等の内容でご利用いただけます。',
      ],
      bubble: { text: 'オススメ', className: 'recommend' },
      deviceTypes: ['apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
  ]
  const security: ServiceItem[] = [
    {
      category: 'security',
      title: 'ノートンモバイルセキュリティ',
      path: 'norton-mobile-security/?l-id=service_service-list_norton-mobile-security',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                220
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['スマホをさまざまなリスクから守ります'],
      iphone: 'iphone',
      android: 'android',
      wifi: false,
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'security',
      title: 'あんしんコントロール by i-フィルター',
      path: 'i-filter/?l-id=service_service-list_i-filter',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                330
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['お子さまのスマホ利用を見守る、あんしんサービス'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
  ]
  const support: ServiceItem[] = [
    {
      category: 'support',
      title: 'スマホ操作遠隔サポート',
      path: 'remote-support-for-device-operation/?l-id=service_service-list_remote-support-for-device-operation',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                550
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['専任オペレータが電話で問題解決をサポート！'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
  ]
  const data: ServiceItem[] = [
    {
      category: 'data',
      title: '電話番号シェアサービス',
      path: 'number-share/?l-id=service_service-list_number-share',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                550
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: [
        'iPhoneが手元になくても、Apple Watchだけで音声通話・データ通信が利用可能',
      ],
      deviceTypes: ['iphone', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'data',
      title: '楽天モバイルWiFi by エコネクト',
      path: 'rakutenmobile-wifi/?l-id=service_service-list_rakutenmobile-wifi',
      emp: '1カ月無料',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                398
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['街中でも高速インターネットが利用可能'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'data',
      title: 'テザリング',
      path: 'tethering/?l-id=service_service-list_tethering',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['スマホを介して外部機器をインターネット接続'],
      deviceTypes: ['iphone', 'android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'data_type',
    },
  ]
  const disaster: ServiceItem[] = [
    {
      category: 'disaster',
      title: '緊急速報メール',
      path: 'emergency-alert-mail/?l-id=service_service-list_emergency-alert-mail',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['「緊急地震速報」や「災害・避難情報」をメールでお知らせ'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'data_type',
    },
    {
      category: 'disaster',
      title: '災害用伝言板',
      path: 'disaster_board/?l-id=service_service-list_disaster_board',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['災害時の安否確認手段として利用可能'],
      bubble: { text: 'NEW', className: 'new' },
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'data_type',
    },
  ]
  const global: ServiceItem[] = [
    {
      category: 'global',
      title: '国際通話かけ放題',
      path: 'international-unlimited-talk/?l-id=service_service-list_international-unlimited-talk',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                980
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['海外65指定の国と地域への通話がかけ放題'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'global',
      title: '国際通話',
      path: 'international-call/?l-id=service_service-list_international-call',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['手続きなしで国際通話が利用可能'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'global',
      title: '海外ローミング（データ通信）',
      path: 'international-roaming/?l-id=service_service-list_international-roaming',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['海外指定73の国と地域で、定額料金でデータ通信が可能'],
      deviceTypes: ['iphone', 'android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'data_type',
    },
    {
      category: 'global',
      title: '国際SMS',
      path: 'international-sms/?l-id=service_service-list_international-sms',
      emp: 'プラン料金に含む',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['海外の現地ケータイ電話番号宛に、文字メッセージの送信が可能'],
      deviceTypes: ['iphone', 'android', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'plan',
      dataPlan: 'no_data_type',
    },
    {
      category: 'data',
      title: 'データチャージ（海外ローミング）',
      path: 'data-charge/?l-id=service_service-list_data-charge',
      price: (
        <>
          1GBあたり
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                500
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円
        </>
      ),
      cap: [
        '海外ローミングエリアで消費するデータ容量を、必要な分だけいつでもチャージできます。',
      ],
      deviceTypes: ['iphone', 'android', 'wifi'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'no_data_type',
    },
  ]
  const iupg: ServiceItem[] = [
    {
      category: 'iupg',
      title: '楽天モバイル買い替え超トクプログラム',
      path: 'replacement-program/?l-id=service_service-list_replacement-program',
      price: (
        <>
          <CardListEmpBlack> プログラム利用料金</CardListEmpBlack>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: [
        '48回払いで購入した製品の24回分の支払い完了で、残りの支払いが不要＆新しい製品へ機種変更が可能。',
        <>
          <TxtEmp>※毎月製品代が発生します（楽天カード48回払い）</TxtEmp>
          <br />
          ※返却時、事務手数料3,300円。当社指定基準を満たさない場合、故障費用22,000円が別途発生。または返却不可となる場合あり。
        </>,
      ],
      deviceTypes: ['iphone'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
      bubble: { text: 'NEW', className: 'new' },
    },
  ]
  const tradein: ServiceItem[] = [
    {
      category: 'tradein',
      title: 'スマホ下取りサービス',
      path: 'tradein/?l-id=service_service-list_tradein',
      price: (
        <>
          <TxtEmp01>
            <TxtSize size="l">無料</TxtSize>
          </TxtEmp01>
        </>
      ),
      cap: ['簡単査定でお使いのスマホを高額下取り！'],
      bubble: { text: 'オススメ', className: 'recommend' },
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
  ]
  const shop: ServiceItem[] = [
    {
      category: 'shop',
      title: 'あんしん操作サポート',
      path: 'shop-support-for-device-operation/?l-id=service_service-list_shop-support-for-device-operation',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                550
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円/月
        </>
      ),
      cap: ['操作に関するお困りごとに対面でお答え'],
      deviceTypes: ['iphone', 'android', 'wifi', 'apple-watch'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'shop',
      title: 'データ移行サポート',
      path: 'shop-support-for-oneshot-operation/?l-id=service_service-list_shop-support-for-oneshot-operation',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,100
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円～
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                2,200
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円／回
        </>
      ),
      cap: ['必要なときにだけお支払い'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'shop',
      title: '保護フィルム貼り付け',
      path: 'shop-support-for-protective-film/?l-id=service_service-list_shop-support-for-protective-film',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                1,100
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円／回
        </>
      ),
      cap: ['店頭でご購入いただいた保護フィルムの貼り付け'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
    {
      category: 'shop',
      title: 'ガラスコーティング',
      path: 'shop-support-for-glass-coating/?l-id=service_service-list_shop-support-for-glass-coating',
      price: (
        <>
          <TxtEmp01>
            <AlphanumericNormal>
              <TxtSize size="ll" className={Utils['Weight-bold']}>
                4,400
              </TxtSize>
            </AlphanumericNormal>
          </TxtEmp01>
          円／回
        </>
      ),
      cap: ['お客様の端末にガラスコーティングを施工'],
      deviceTypes: ['iphone', 'android'], // 'iphone' | 'android' | 'wifi' | 'apple-watch'
      plan: 'noplan',
      dataPlan: 'data_type',
    },
  ]

  const [filterModalFlag, setFilterModalFlag] = useState(false)
  const handleFilterModal = () => setFilterModalFlag(!filterModalFlag)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの安心・便利なサービスや機能をご紹介します。目的やご利用方法に合わせてお選び下さい"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額は特に断りがない限り税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            オプションサービス
          </Heading>
          <p className={Utils['Mt-24']}>
            安心・便利な機能が勢揃い！モバイル生活がさらに充実。
          </p>
        </SystemContainer>
        <KvCarousel
          className={Utils['Mt-24']}
          secondary={true}
          bnrs={ServiceTopCarouselData}
        />
        <SystemContainer>
          <ListHorSimple className={Utils['Mt-24']}>
            <li>
              <LinkIconBefore
                href="#service-ranking"
                onClick={e => anchorCallback(e, 'service-ranking')}
              >
                <IconArrowDown />
                オプションサービスの人気ランキング
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#service-list"
                onClick={e => anchorCallback(e, 'service-list')}
              >
                <IconArrowDown />
                サービス一覧
              </LinkIconBefore>
            </li>
          </ListHorSimple>
        </SystemContainer>
        <GrayBox className={Utils['Mt-40']}>
          <SystemContainer>
            <div
              data-ratid="service_scroll-01_recommend"
              data-ratevent="appear"
            ></div>
            <Heading level="2">おすすめオプションサービス</Heading>

            <ServiceTopLatestLabel>
              はじめてのお申し込みで
              <TxtEmp02>
                <TxtSize size="m">1カ月無料！</TxtSize>
              </TxtEmp02>
            </ServiceTopLatestLabel>
            <LatestCard>
              {/* 元に戻す可能性がありそうなのでコメントアウトしておく}
              <Dialogue
                src={`${assets}img/fee/un-limit/img-call-eyecatching-pc-230301.png`}
                alt="よりクリアで快適な通話にこだわるなら"
              />
          {*/}
              <MediaGrid>
                <MediaImage>
                  <img
                    src={`${assets}img/service/top/img-04-220701.png?220701`}
                    alt="15分（標準）通話かけ放題"
                  />
                </MediaImage>
                <div>
                  <Heading level="3" className={Utils['Mt-8']}>
                    15分（標準）通話かけ放題
                  </Heading>
                  <p className={Utils['Mt-16']}>
                    OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。「15分（標準）通話かけ放題」にはじめてお申し込みの場合、オプション料金が1カ月無料※でご利用いただけます。
                  </p>
                  <TxtCap className={Utils['Mt-8']} as="p">
                    ※一部対象外番号あり。条件あり。
                  </TxtCap>
                  <div className={Utils['Mt-24']}>
                    <ButtonRegular
                      as="a"
                      href="/service/standard-free-call/?l-id=service_service_standard-free-call"
                    >
                      詳細はこちら
                    </ButtonRegular>
                  </div>
                </div>
              </MediaGrid>
            </LatestCard>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <Heading
            level="2"
            as="h2"
            id="service-ranking"
            className={Utils['Mt-48']}
            ratId="service_scroll-02_ranking"
            ratEvent="appear"
          >
            オプションサービスの人気ランキング
          </Heading>
          <p className={Utils['Mt-16']}>
            プラン申し込みや製品購入時にあわせてお申し込みできるオプションサービスの人気ランキングを紹介します。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※集計期間：2023年10月～2024年3月　楽天モバイルのWebサイトからお申し込みした方を対象に算出（当社調べ）
          </TxtCap>
          <div>
            <RankingList>
              {ranking.map((elem, i) => {
                return (
                  <li key={i}>
                    <CardNormal
                      href={`/service/${elem.directory}/?l-id=service_service_${elem.lid}`}
                    >
                      <div className="head">
                        <span className="rank">
                          <IconRankingLine />
                          {i + 1}位
                        </span>
                        <Heading level="3" className={Utils['Mt-8']}>
                          {elem.title}
                        </Heading>
                      </div>
                      <picture>
                        <source
                          media="(max-width: 768px)"
                          srcSet={`${assets}img/service/top/img-${elem.img}-sp.png?240415`}
                        />
                        <img
                          src={`${assets}img/service/top/img-${elem.img}.png?240415`}
                          width="472"
                          alt=""
                        />
                      </picture>
                      <p className={Utils['Mt-16']}>{elem.text[0]}</p>
                      {elem.cap && (
                        <div className={Utils['Mt-8']}>
                          {elem.cap.map((e, i) => {
                            return (
                              <TxtCap as="p" key={i}>
                                {e}
                              </TxtCap>
                            )
                          })}
                        </div>
                      )}
                    </CardNormal>
                  </li>
                )
              })}
            </RankingList>
          </div>
          <ServiceFindUsed className={Utils['Mt-48']}>
            <TxtEmp02 className={Utils['Mt-16']} as="p">
              ＼ スマホ生活をより快適に！ ／
            </TxtEmp02>
            <TxtEmp01 className={Utils['Mt-8']} as="p">
              <TxtSize size="l">オプションサービス診断</TxtSize>
            </TxtEmp01>
            <TxtNormal className={Utils['Mt-8']} as="p">
              質問にYesかNoで答えるだけ！あなたの性格からみた、
              <br className={Utils['Disp-pc']} />
              最適なオプションサービスがわかっちゃう！
            </TxtNormal>
            <div className={Utils['Mt-8']}>
              <ButtonSecondaryLarge
                as="a"
                href="/service/check/?l-id=service_service_check"
              >
                今すぐ診断する
              </ButtonSecondaryLarge>
            </div>
          </ServiceFindUsed>
        </SystemContainer>
        <SystemContainer className={Utils['Mt-40']}>
          <ServiceGlobalBnr lid="service" />
        </SystemContainer>
        <ListWrap className={Utils['Mt-64']}>
          <SystemContainer>
            <Heading
              level="2"
              id="service-list"
              ratId="service_scroll-03_list"
              ratEvent="appear"
            >
              サービス一覧
            </Heading>
            <SearchWrap>
              <Heading as="h3" level="4">
                対象機種・カテゴリで絞り込む
              </Heading>
              <p className={Utils['Mt-8']}>
                ご利用の機種や目的にあったカテゴリを選択してください。対象のサービスを表示します。
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※「プラン料金に含む」に該当するサービスは、無料のサービスとなっており、別途料金は発生しません。
              </TxtCap>
              <FilterWrapper>
                <ButtonLinkIconBeforePr8 onClick={() => handleFilterModal()}>
                  <IconSlidersLine />
                  <span>対象機種・カテゴリを選択する</span>
                </ButtonLinkIconBeforePr8>
              </FilterWrapper>
            </SearchWrap>
            {itemLengthState[0] && (
              <Heading
                level="3"
                className={`${Utils['Mt-56']} ${Utils['Mb-16']}`}
                ratId="service_scroll-04_call"
                ratEvent="appear"
              >
                通話・SMS・メール
              </Heading>
            )}
            <CardList>{call && outputCardList(call)}</CardList>

            {itemLengthState[1] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-05_warranty"
                ratEvent="appear"
              >
                保証
              </Heading>
            )}
            <CardList>{warranty && outputCardList(warranty)}</CardList>

            {itemLengthState[2] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-06_security"
                ratEvent="appear"
              >
                セキュリティ
              </Heading>
            )}
            <CardList>{security && outputCardList(security)}</CardList>

            {itemLengthState[3] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-07_support"
                ratEvent="appear"
              >
                サポート
              </Heading>
            )}
            <CardList>{support && outputCardList(support)}</CardList>

            {itemLengthState[4] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-08_data"
                ratEvent="appear"
              >
                データ通信
              </Heading>
            )}
            <CardList>{data && outputCardList(data)}</CardList>

            {itemLengthState[5] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-13_disaster"
                ratEvent="appear"
              >
                災害関連
              </Heading>
            )}
            <CardList>{disaster && outputCardList(disaster)}</CardList>

            {itemLengthState[6] && (
              <>
                <Heading
                  level="3"
                  className={`${Utils['Mt-40']}`}
                  ratId="service_scroll-09_overseas"
                  ratEvent="appear"
                >
                  海外／国際サービス
                </Heading>
                <TxtCap as="p" className={`${Utils['Mb-16']}`}>
                  ※海外／国際サービスはすべて不課税です。
                </TxtCap>
              </>
            )}
            <CardList>{global && outputCardList(global)}</CardList>

            {itemLengthState[7] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-14_iupg"
                ratEvent="appear"
              >
                製品購入サポート
              </Heading>
            )}
            <CardList>{iupg && outputCardList(iupg)}</CardList>

            {itemLengthState[8] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-10_tradein"
                ratEvent="appear"
              >
                下取り
              </Heading>
            )}
            <CardList>{tradein && outputCardList(tradein)}</CardList>

            {itemLengthState[9] && (
              <Heading
                level="3"
                className={`${Utils['Mt-40']} ${Utils['Mb-16']}`}
                ratId="service_scroll-11_shop"
                ratEvent="appear"
              >
                ショップサポート
              </Heading>
            )}
            <CardList>{shop && outputCardList(shop)}</CardList>

            {itemLengthState.every(elem => elem === false) && (
              <p className={Utils['Pt-24']}>絞り込み結果は、0件です。</p>
            )}
            <Heading
              level="2"
              className={Utils['Mt-64']}
              ratId="service_scroll-12_old"
              ratEvent="appear"
            >
              旧サービス
            </Heading>
            <UlOnly className={Utils['Mt-24']}>
              <li>
                <LinkNormal href="/service/iphone/applecare/">
                  故障紛失保証 with AppleCare Services
                </LinkNormal>
                （新規お申し込みは終了しました。）
              </li>
              <li>
                <LinkNormal href="/service/mcafee-mobile-security/">
                  マカフィー® モバイル セキュリティ Android版
                </LinkNormal>
                （新規お申し込みは終了しました。）
              </li>
              <li>
                <LinkNormal href="/service/10min-standard-free-call/">
                  10分（標準）通話かけ放題
                </LinkNormal>
                （新規お申し込みは終了しました。）
              </li>
            </UlOnly>
          </SystemContainer>
        </ListWrap>
        <SystemContainer className={Utils['Mt-48']}>
          <PaymentGoogleBnr lid="service_campaign_payment-google" lazy={true} />
        </SystemContainer>

        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
      <Modal switchFlag={setFilterModalFlag} flag={filterModalFlag}>
        <div>
          <Heading level="4">対象機種を選択する</Heading>
          <ListHorSimple className={Utils['Mt-16']}>
            <ButtonRadioNoborder
              as="li"
              onChangeCheck={e => e && updateFilterDeviceState(e)}
              select={[
                {
                  defaultChecked: true,
                  inputName: 'device',
                  name: 'device',
                  text: 'すべて',
                  value: 'all',
                },
                {
                  inputName: 'device',
                  name: 'device',
                  text: 'iPhone・iPad',
                  value: 'iphone',
                },
                {
                  inputName: 'device',
                  name: 'device',
                  text: 'Android',
                  value: 'android',
                },
                {
                  inputName: 'device',
                  name: 'device',
                  text: 'Wi-Fi',
                  value: 'wifi',
                },
                {
                  inputName: 'device',
                  name: 'device',
                  text: 'Apple Watch',
                  value: 'apple-watch',
                },
              ]}
            />
          </ListHorSimple>
          {/* <p>{filterDeviceState}</p> */}
        </div>

        <div>
          <Heading level="4" className={Utils['Mt-32']}>
            Rakuten最強プランの料金に含むかを選択する
          </Heading>
          <ListHorSimple className={Utils['Mt-16']}>
            <ButtonRadioNoborder
              as="li"
              onChangeCheck={e => e && updateFilterPlanState(e)}
              select={[
                {
                  defaultChecked: true,
                  inputName: 'plan',
                  name: 'plan',
                  text: 'すべて',
                  value: 'all',
                },
                {
                  inputName: 'plan',
                  name: 'plan',
                  text: 'プランに含まれている',
                  value: 'plan',
                },
                {
                  inputName: 'plan',
                  name: 'plan',
                  text: 'プランに含まれていない',
                  value: 'noplan',
                },
              ]}
            />
          </ListHorSimple>
          {/* <p>{filterPlanState}</p> */}
        </div>

        <div>
          <Heading level="4" className={Utils['Mt-32']}>
            Rakuten最強プラン（データタイプ）対象かを選択する
          </Heading>
          <ListHorSimple className={Utils['Mt-16']}>
            <ButtonRadioNoborder
              as="li"
              onChangeCheck={e => e && updateFilterDataPlanState(e)}
              select={[
                {
                  defaultChecked: true,
                  inputName: 'data_plan',
                  name: 'data_plan',
                  text: 'すべて',
                  value: 'all',
                },
                {
                  inputName: 'data_plan',
                  name: 'data_plan',
                  text: 'データタイプ対象',
                  value: 'data_type',
                },
                {
                  inputName: 'data_plan',
                  name: 'data_plan',
                  text: 'データタイプ対象外',
                  value: 'no_data_type',
                },
              ]}
            />
          </ListHorSimple>
          {/* <p>{filterDataSate}</p> */}
        </div>

        <div>
          <Heading level="4" className={Utils['Mt-32']}>
            カテゴリを選択する
          </Heading>

          <ModalCheckboxList>
            <li>
              <Checkbox
                checked={checkState1}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState1(e)
                  }
                }}
                text="通話・SMS・メール"
                value="call"
              />
            </li>
            <StyledLi>
              <Checkbox
                checked={checkState2}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState2(e)
                  }
                }}
                text="保証"
                value="warranty"
              />
            </StyledLi>
            <StyledLi>
              <Checkbox
                checked={checkState3}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState3(e)
                  }
                }}
                text="セキュリティ"
                value="security"
              />
            </StyledLi>
            <StyledLi>
              <Checkbox
                checked={checkState4}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState4(e)
                  }
                }}
                text="サポート"
                value="support"
              />
            </StyledLi>
            <StyledLi>
              <Checkbox
                checked={checkState5}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState5(e)
                  }
                }}
                text="データ通信"
                value="data"
              />
            </StyledLi>
            <StyledLi>
              <Checkbox
                checked={checkState6}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState6(e)
                  }
                }}
                text="災害関連"
                value="disaster"
              />
            </StyledLi>
            <StyledLi>
              <Checkbox
                checked={checkState7}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState7(e)
                  }
                }}
                text="海外"
                value="global"
              />
            </StyledLi>
            <li>
              <Checkbox
                checked={checkState8}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState8(e)
                  }
                }}
                text="製品購入サポート"
                value="iupg"
              />
            </li>
            <li>
              <Checkbox
                checked={checkState9}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState9(e)
                  }
                }}
                text="下取り"
                value="tradein"
              />
            </li>
            <li>
              <Checkbox
                checked={checkState10}
                inputName="category"
                onChangeCheck={e => {
                  if (typeof e !== 'undefined') {
                    updateCheckState10(e)
                  }
                }}
                text="ショップサポート"
                value="shop"
              />
            </li>
          </ModalCheckboxList>
        </div>

        <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
          <ButtonSecondaryCustom
            data-ratid="service_category-button"
            data-ratevent="click"
            data-ratparam="all"
            onClick={() => {
              updateFilterPlanShadowState(filterPlanState)
              updateFilterDeviceShadowState(filterDeviceState)
              updateFilterDataPlanShadowState(filterDataPlanState)
              // updateFilterDataState(filterDataSate)
              updateFilterCategoryState(getCategoryArr())
              const tempArr = [
                getItemLengthFlagImmediate(call),
                getItemLengthFlagImmediate(warranty),
                getItemLengthFlagImmediate(security),
                getItemLengthFlagImmediate(support),
                getItemLengthFlagImmediate(data),
                getItemLengthFlagImmediate(disaster),
                getItemLengthFlagImmediate(global),
                getItemLengthFlagImmediate(iupg),
                getItemLengthFlagImmediate(tradein),
                getItemLengthFlagImmediate(shop),
              ]
              updateItemLengthState(tempArr)
              handleFilterModal()
            }}
          >
            絞り込む
          </ButtonSecondaryCustom>
        </div>
      </Modal>
    </>
  )
}

export default Service
