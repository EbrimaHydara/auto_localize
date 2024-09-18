import type { NextPage } from 'next'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { LabelList } from '@components/atoms/Label'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { anchorCallback } from '@components/utils/anchorCallback'
import {
  AccordionList,
  AccordionListEmp,
  AccordionEmpStep,
  AccordionEmpTxt,
} from '@components/atoms/AccordionList'
import { Tab } from '@components/atoms/Tab'
import { InfoboxBorder } from '@components/atoms/Infobox'
import {
  ButtonRegular,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import {
  IconChevronRight,
  IconNewTabLine,
  IconArrowDown,
} from '@components/icons'
import { MediaGrid, MediaImage, MediaGridHalf } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CampaignRule2142 } from '@components/include/campaign/rules/2023/CampaignRule2142'

const CpnLabelWrap = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 0;
  }
`
const CpnLabelPoint = styled.div`
  font-weight: bold;
  padding: 4px 0;
  font-size: ${props => props.theme.fonts.s};
  ${mixins.mq.MaxM} {
    width: 100%;
    font-size: 12px;
  }
`
const KvHeading = styled.div`
  ${mixins.mq.MinL} {
    background: #ffe600;
    display: flex;
    justify-content: center;
  }
`
const KvBnr = styled.div`
  ${mixins.mq.MinL} {
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
  }
`
const AnchorLink = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    margin-top: 40px;
  }
`
const Cta2col = styled.div`
  margin: 32px auto 0;
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const BorderBox = styled.div`
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  ${mixins.mq.MinL} {
    padding: 16px;
  }
`
const CpnCondition = styled.ul`
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const CpnConditionItem = styled.li`
  background-color: ${props => props.theme.colors.monotone97};
  width: 100%;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::after {
    content: '';
    position: absolute;
    background: url(${assets}img/common/icon-cpn-plus.svg) center top/contain
      no-repeat;
    width: 32px;
    height: 32px;
    z-index: 1;
    ${mixins.mq.MinL} {
      right: -28px;
      top: 50%;
      transform: translateY(-50%);
    }
    ${mixins.mq.MaxM} {
      left: 50%;
      bottom: -24px;
      transform: translateX(-50%);
    }
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  > h3 {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mixins.mq.MaxM} {
      height: auto;
      display: block;
    }
  }
`

const CpnConditionFlex = styled.div`
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    img {
      width: auto;
      max-width: 77px;
    }
  }
`
const Appeal = styled.div`
  background-color: ${props => props.theme.colors.pink5};
  padding: 0 16px 48px;
  ${mixins.mq.MaxM} {
    padding: 0 0 32px;
  }
`
const MnpFlow = styled.div`
  margin-top: 24px;
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.white};
`
const MnpFlowCol = styled.ul`
  display: flex;
  max-width: 666px;
  margin: 16px auto 0;
  position: relative;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    align-items: center;
  }
  > li {
    width: 100%;
    padding: 0 16px;
    text-align: center;
    position: relative;
    ${mixins.mq.MaxM} {
      padding: 16px 0;
    }
    &::after {
      position: absolute;
      content: '';
      ${mixins.mq.MinL} {
        top: 0;
        right: 0;
        height: 100%;
        border-right: 1px solid ${props => props.theme.colors.monotone88};
      }
      ${mixins.mq.MaxM} {
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors.monotone88};
      }
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    left: 50%;
    width: 31px;
    height: 32px;
    transform: translateX(-50%);
    background: url(${assets}img/campaign/new-application/icon-arrow.png) 0 0 /
      contain no-repeat;
  }
`
const MnpFlowLast = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 52px;
    flex-direction: column-reverse;
    align-items: center;
  }
`
const MnpFlowLabel = styled.p`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  padding: 2px 12px;
  font-size: ${props => props.theme.fonts.m};
`
const TxtCapCustom = styled(TxtCap)`
  color: ${props => props.theme.colors.black};
`
const TxtLargeEmp01 = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fonts.l};
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: ${props => props.theme.fonts.m};
  }
`
const TxtLargeEmp02 = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
  ${mixins.mq.MaxM} {
    font-size: 36px;
  }
`
const MnpAppeal = styled.div`
  margin-top: 24px;
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.pink5};
  ${mixins.mq.MaxM} {
    padding: 24px 8px;
  }
`
const MnpAppealBox = styled.div`
  max-width: 968px;
  margin: 8px auto 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
  }
`
const MnpAppealItem = styled.div`
  width: 326px;
  height: 100px;
  padding: 12px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  gap: 0 8px;
  justify-content: center;
  align-items: center;
  ${mixins.mq.MaxM} {
    width: 287px;
    margin-inline: auto;
  }
`

const MnpAppealImg = styled.div`
  grid-area: 1 / 2 / 3 / 3;
`

const StepLastBox = styled(InfoboxBorder)`
  margin-top: 50px;
  position: relative;
  > div {
    display: flex;
    align-items: center;
    ${mixins.mq.MaxM} {
      display: block;
    }
  }
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -32px;
    width: 70px;
    height: 18px;
    background-color: ${props => props.theme.colors.primary};
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`
const FloatingContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);
  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
  ${Cta2col} {
    justify-content: center;
  }
`
const CustomAccordionListEmp = styled(AccordionListEmp)`
  > button {
    text-align: center;
    ${mixins.mq.MaxM} {
      text-align: left;
    }
  }
`

const CampaignNewApplication: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '初めてお申し込みで2,000ポイント還元！'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'キャンペーン・特典',
      url: '/campaign/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const directories = [
    {
      label: 'キャンペーン・特典',
      path: '/campaign/',
    },
  ]

  const labelArgs = {
    item: [
      { text: '初めて申込限定', isEmp: false },
      { text: 'Rakuten Link利用必要', isEmp: false },
    ],
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  interface CtaBottomFixedProps {
    scrollTrigger: React.RefObject<HTMLDivElement>
  }

  const CtaBottomFixed = ({ scrollTrigger }: CtaBottomFixedProps) => {
    const { isExpanded } = JudgeTrigger(scrollTrigger)
    const wrapperElem = useRef<HTMLDivElement>(null)
    const adjustPadding = (wrapperHeight: number, target: HTMLElement) => {
      target.style.paddingBottom = `${wrapperHeight}px`
    }
    useEffect(() => {
      const footerElem = document.getElementById('g-footer')
      if (footerElem && wrapperElem.current) {
        const e = wrapperElem.current
        let wrapperHeight = 100
        setTimeout(() => {
          wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        }, 500)
        window.addEventListener('resize', () => {
          wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        })
      }
    }, [])
    return (
      <FloatingContainer aria-expanded={isExpanded} ref={wrapperElem}>
        <Cta2col className={Utils['Mt-0']}>
          <ButtonPrimaryLarge
            as="a"
            href="/guide/application/?lid-r=campaign_new-application_guide_application_top_0"
          >
            新規お申し込み
          </ButtonPrimaryLarge>
          <ButtonSecondaryLarge
            as="a"
            href="/shop/?l-id=campaign_new-application_shop_top_0"
          >
            お近くのショップを探す
          </ButtonSecondaryLarge>
        </Cta2col>
      </FloatingContainer>
    )
  }

  const JudgeTrigger = (refTrigger: React.RefObject<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState(false)
    useEffect(() => {
      const fixedBottomBtn = (trigger: HTMLDivElement | null) => {
        let scrollY = window.scrollY
        if (!trigger) {
          return
        }
        const triggerRect = trigger.getBoundingClientRect()
        const triggerY = scrollY + triggerRect.top

        if (scrollY > triggerY) {
          setIsExpanded(true)
        } else {
          setIsExpanded(false)
        }
      }
      window.addEventListener('scroll', () =>
        fixedBottomBtn(refTrigger.current),
      )
    }, [refTrigger])
    return {
      isExpanded,
    }
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルへ初めてのお申し込みで2,000ポイント還元キャンペーン開催中！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <CpnLabelWrap>
            <LabelList {...labelArgs} />
            <CpnLabelPoint>
              ポイント：付与日を含めて3カ月の期間限定ポイント
            </CpnLabelPoint>
          </CpnLabelWrap>
        </SystemContainer>
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/new-application/kv-sp-231207.png`}
                width="750"
                height="480"
              />
              <img
                src={`${assets}img/campaign/new-application/kv-pc-231207.png`}
                width="1440"
                height="230"
                alt={`楽天モバイルへ初めてお申し込みで2,000ポイントプレゼント!`}
              />
            </picture>
          </h1>
        </KvHeading>
        <KvBnr>
          <BannerHover href="/campaign/mnp/?l-id=campaign_new-application_campaign_mnp">
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/new-application/kv-bnr-sp-231227.png`}
                width="100%"
              />
              <img
                src={`${assets}img/campaign/new-application/kv-bnr-pc-231227.png`}
                width="1032"
                height="70"
                alt="電話番号そのまま他社から乗り換えの場合は6,000ポイント"
                loading="lazy"
              />
            </picture>
          </BannerHover>
        </KvBnr>

        <SystemContainer>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※「Rakuten最強プラン」利用開始及びRakuten
            Linkの利用が確認された月の翌々月末日ごろから5カ月にわたって400ポイントずつ付与。ポイント有効期間は
            <TxtEmp02 as="span">ポイント付与日から3カ月後月末まで</TxtEmp02>
            <br />
            ※対象プラン、Rakuten Link利用等条件あり
          </TxtCap>
          <div className={Utils['Align-center']}>
            <p className={Utils['Mt-32']}>
              <TxtEmp01>【キャンペーン期間】</TxtEmp01>
              <br />
              Web&emsp;2023年11月21日（火）9:00 ～ 終了日未定
              <br />
              店舗&emsp;2023年11月21日（火）開店～終了日未定
            </p>
          </div>
          <Cta2col className={Utils['Mt-32']}>
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application/?lid-r=campaign_new-application_guide_application_top_01"
            >
              新規お申し込み
            </ButtonPrimaryLarge>
            <ButtonSecondaryLarge
              href="/shop/?l-id=campaign_new-application_shop_top_01"
              as="a"
            >
              お近くのショップを探す
            </ButtonSecondaryLarge>
          </Cta2col>
          <TxtCap
            className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
            as="p"
          >
            ※楽天モバイル（ドコモ・au回線）からのプラン変更（移行）は
            <LinkNormal href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_new-application_ms_top&mno_migration=1">
              こちら
            </LinkNormal>
          </TxtCap>
          <nav>
            <AnchorLink>
              <li>
                <LinkIconBefore
                  href="#conditions"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'conditions')
                  }
                >
                  <IconArrowDown />
                  キャンペーンの達成条件
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#flow"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'flow')
                  }
                >
                  <IconArrowDown />
                  キャンペーンの流れ
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#campaign-rule2142"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-rule2142')
                  }
                >
                  <IconArrowDown />
                  キャンペーンルール
                </LinkIconBefore>
              </li>
            </AnchorLink>
          </nav>
          <div ref={scrollTrigger} />

          <BorderBox className={Utils['Mt-48']}>
            <Heading
              level="2"
              className={Utils['Align-center']}
              id="conditions"
            >
              キャンペーンの達成条件
            </Heading>
            <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              詳細は
              <LinkNormal
                href="#campaign-rule2142"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2142')
                }
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </p>

            <CpnCondition className={Utils['Mt-16']}>
              <CpnConditionItem>
                <Heading level="4" as="h3" className={Utils['Align-center']}>
                  初めてのお申し込み
                </Heading>
                <CpnConditionFlex>
                  <MediaImage
                    className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/icon-application-sp.png`}
                        width="77"
                        height="80"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/icon-application.png`}
                        width="272"
                        height="88"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <p className={Utils['Mt-8']}>
                    2回線目以降のお申し込みは対象外となります。
                  </p>
                </CpnConditionFlex>
              </CpnConditionItem>
              <CpnConditionItem>
                <Heading level="4" as="h3" className={Utils['Align-center']}>
                  プランの利用開始
                </Heading>
                <CpnConditionFlex>
                  <MediaImage
                    className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/icon-plan-start-sp.png`}
                        width="77"
                        height="80"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/icon-plan-start.png`}
                        width="272"
                        height="88"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <p className={Utils['Mt-8']}>
                    【期限】お申し込みの翌月末日23:59まで
                  </p>
                </CpnConditionFlex>
              </CpnConditionItem>
              <CpnConditionItem>
                <Heading level="4" as="h3" className={Utils['Align-center']}>
                  Rakuten Linkで
                  <br />
                  10秒以上通話
                </Heading>
                <CpnConditionFlex>
                  <MediaImage
                    className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/icon-link-sp.png`}
                        width="77"
                        height="80"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/icon-link.png`}
                        width="272"
                        height="88"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <p className={Utils['Mt-8']}>
                    【期限】お申し込みの翌月末日23:59まで
                  </p>
                </CpnConditionFlex>
              </CpnConditionItem>
            </CpnCondition>

            <Heading
              level="3"
              className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
            >
              キャンペーンの達成状況はこちらで確認
            </Heading>

            <CustomAccordionListEmp
              text={
                <>
                  <AccordionEmpTxt>
                    達成状況の確認方法とポイント付与時期
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <Heading level="4">達成状況の確認方法</Heading>
              <ol className={Utils['Mt-16']}>
                <li>
                  <TxtEmp01>
                    1. 「
                    <LinkNormal href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=campaign_new-application_my-rakuten-mobile_accordion">
                      my 楽天モバイル
                    </LinkNormal>
                    」にアクセス
                  </TxtEmp01>
                </li>
                <li className={Utils['Mt-32']}>
                  <TxtEmp01>2. 右上のメニューから「利用状況」を選択</TxtEmp01>
                  <MediaImage
                    className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
                  >
                    <img
                      src={`${assets}img/campaign/common/img-cap01-230601-0000.png`}
                      width="300"
                      alt=""
                      loading="lazy"
                    />
                  </MediaImage>
                </li>
                <li className={Utils['Mt-32']}>
                  <TxtEmp01>
                    3. 「通話」タブを選択して
                    <TxtEmp02>Rakuten Linkでの10秒以上の発信通話履歴</TxtEmp02>
                    があることを確認してください
                  </TxtEmp01>
                  <MediaImage
                    className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
                  >
                    <img
                      src={`${assets}img/campaign/common/img-cap02.png?220720`}
                      width="300"
                      alt=""
                      loading="lazy"
                    />
                  </MediaImage>
                </li>
              </ol>
            </CustomAccordionListEmp>
          </BorderBox>
        </SystemContainer>

        <Appeal className={Utils['Mt-48']}>
          <SystemContainer>
            <section className={Utils['Pt-40']}>
              <MnpFlow>
                <h3 className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                  <img
                    src={`${assets}img/campaign/new-application/mnp-flow-02.png`}
                    width="362"
                    height="93"
                    alt="楽天モバイルならサクッとWeb申し込み!"
                    loading="lazy"
                  />
                </h3>
                <MnpFlowCol>
                  <li>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/mnp-flow-02-1-sp.png`}
                        width="558"
                        height="349"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/mnp-flow-02-1-pc.png`}
                        width="301"
                        height="175"
                        alt="スキマ時間にその場で完了"
                        loading="lazy"
                      />
                    </picture>
                    <p className={Utils['Mt-16']}>
                      ショップの営業時間や次の予定を
                      <br />
                      気にせず<TxtEmp01>好きな時間にその場でOK！</TxtEmp01>
                    </p>
                  </li>
                  <li>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/mnp-flow-02-2-sp.png`}
                        width="597"
                        height="349"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/mnp-flow-02-2-pc.png`}
                        width="298"
                        height="175"
                        alt="面倒な手続きをシンプルに"
                        loading="lazy"
                      />
                    </picture>
                    <p className={Utils['Mt-16']}>
                      <TxtEmp01>他グループサービスで提出済みの書類</TxtEmp01>を
                      <br />
                      利用できたり、楽チン便利！<TxtCapCustom>*1</TxtCapCustom>
                    </p>
                  </li>
                </MnpFlowCol>
                <MnpFlowLast>
                  <div>
                    <img
                      src={`${assets}img/campaign/new-application/mnp-flow-03.png`}
                      width="287"
                      height="185"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className={Utils['Align-ccl']}>
                    <MnpFlowLabel>申し込み完了後も</MnpFlowLabel>
                    <TxtEmp01 as="p" className={Utils['Mt-8']}>
                      eSIM対応スマホをお持ちなら
                    </TxtEmp01>
                    <p>
                      <TxtLargeEmp02>最短3分で</TxtLargeEmp02>
                      <TxtLargeEmp01>すぐ使える！</TxtLargeEmp01>
                      <TxtCapCustom>*2</TxtCapCustom>
                    </p>
                    <p>
                      eSIMならSIMカードの到着を待つ必要なし！
                      <br className={Utils['Show-xxo']} />
                      Webでダウンロードするだけ
                    </p>
                  </div>
                </MnpFlowLast>
                <MnpAppeal>
                  <h3
                    className={`${Utils['Align-center']} ${Utils['Px-sp-32']}`}
                  >
                    <img
                      src={`${assets}img/campaign/new-application/mnp-flow-04.png`}
                      width="270"
                      height="63"
                      alt="＼革新的な契約体験をご提供！／そんな楽天モバイルは"
                      loading="lazy"
                    />
                  </h3>
                  <MnpAppealBox>
                    <MnpAppealItem>
                      <div>
                        <TxtSize size="m" as="p">
                          <TxtEmp02>Web契約でNo.1</TxtEmp02>
                        </TxtSize>
                        <TxtSize size="s" as="p">
                          <TxtEmp01>
                            Web契約利用者が
                            <br />
                            最も選んだ携帯電話会社
                          </TxtEmp01>
                          <TxtCapCustom>※</TxtCapCustom>
                        </TxtSize>
                      </div>
                      <MnpAppealImg>
                        <img
                          src={`${assets}img/campaign/new-application/mnp-flow-04-1.png`}
                          width="76"
                          height="76"
                          alt=""
                          loading="lazy"
                        />
                      </MnpAppealImg>
                    </MnpAppealItem>
                    <MnpAppealItem>
                      <TxtEmp01 as="p">
                        ショップもWebも
                        <br />
                        契約事務手数料
                      </TxtEmp01>
                      <div>
                        <img
                          src={`${assets}img/campaign/new-application/mnp-flow-04-2.png`}
                          width="65"
                          height="50"
                          alt="0円"
                          loading="lazy"
                        />
                      </div>
                    </MnpAppealItem>
                  </MnpAppealBox>
                  <TxtCap
                    as="p"
                    className={`${Utils['Align-llc']} ${Utils['Mt-8']}`}
                  >
                    ※ MMD研究所調べ / 2022年3月21日時点 /
                    2021年8月～半年間にメイン通信サービスの新規・MNPのWeb契約をした人を対象
                    / n=1,260
                  </TxtCap>
                </MnpAppeal>
              </MnpFlow>
              <MnpFlow>
                <div className={Utils['Align-center']}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/new-application/mnp-flow-05-sp.png`}
                      width="522"
                      height="771"
                    />
                    <img
                      src={`${assets}img/campaign/new-application/mnp-flow-05-pc.png`}
                      width="814"
                      height="163"
                      alt="さらに!いずれかのアプリ(楽天市場,楽天カード,楽天ペイ)をお持ちならプランのみの申し込みがもっとかんたん"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                  <ButtonRegular
                    as="a"
                    href="/guide/flow/application/group/?l-id=campaign_new-application_guide_application-group"
                  >
                    グループアプリ経由での申し込み方法を見る
                  </ButtonRegular>
                </div>
              </MnpFlow>
              <TxtCap as="p" className={Utils['Mt-24']}>
                *1
                楽天銀行・楽天証券・楽天生命のいずれかをご契約されている場合。条件あり。
                <LinkNormal href="/guide/verify/group-kyc/?l-id=campaign_new-application_guide_verify-group-kyc">
                  詳しくはこちら
                </LinkNormal>
                <br />
                *2
                eSIM対応製品でeSIMをご利用の場合。審査状況により変動。アプリ最新版利用時
              </TxtCap>
            </section>
          </SystemContainer>
        </Appeal>

        <SystemContainer>
          <section className={Utils['Mt-48']}>
            <Heading level="2" className={Utils['Align-center']} id="flow">
              <TxtSize size="xl">2,000</TxtSize>ポイント獲得の流れ
            </Heading>

            <AccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP1</AccordionEmpStep>
                  <AccordionEmpTxt>楽天モバイル対応製品の確認</AccordionEmpTxt>
                  <TxtCap className={Utils['Ml-8']}>
                    <TxtEmp02>※お持ちの製品で乗り換えの場合</TxtEmp02>
                  </TxtCap>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/new-application/img-flow-device-sp.png`}
                      width="622"
                      height="358"
                    />
                    <img
                      src={`${assets}img/campaign/new-application/img-flow-device-pc.png`}
                      width="304"
                      height="230"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <p>お持ちの製品の対応状況を下記ページでご確認ください</p>
                  <div className={Utils['Mt-24']}>
                    <ButtonRegular
                      as="a"
                      href="/product/byod/?l-id=campaign_new-application_product_byod"
                    >
                      ご利用製品の対応状況確認
                    </ButtonRegular>
                  </div>
                </div>
              </MediaGrid>
              <InfoboxBorder className={Utils['Mt-16']}>
                <MediaGrid>
                  <MediaImage>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/new-application/img-flow-sim-rock-sp.png`}
                        width="281"
                        height="240"
                      />
                      <img
                        src={`${assets}img/campaign/new-application/img-flow-sim-rock-pc.png`}
                        width="304"
                        height="174"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <div>
                    <Heading level="4">SIMロック解除の手続きを行う</Heading>
                    <p className={Utils['Mt-16']}>
                      他の携帯電話会社でご利用されていた製品は、MNP転入前にSIMロック解除が必要な場合があります。詳しくは、ご購入元の携帯電話会社のWebサイトをご確認ください。
                    </p>
                    <TxtCap as="p">
                      ※楽天モバイル（ドコモ回線/au回線）からプラン変更（移行）のお客様は、SIMロック解除手続き不要です。
                    </TxtCap>
                    <UlOnly className={Utils['Mt-16']}>
                      <li>
                        <LinkIconAfter
                          href="https://www.docomo.ne.jp/support/unlock_simcard/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          docomo SIMロック解除手続き
                          <IconNewTabLine />
                        </LinkIconAfter>
                      </li>
                      <li>
                        <LinkIconAfter
                          href="https://www.au.com/support/service/mobile/procedure/simcard/unlock/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          au SIMロック解除手続き
                          <IconNewTabLine />
                        </LinkIconAfter>
                      </li>
                      <li>
                        <LinkIconAfter
                          href="https://www.softbank.jp/mobile/support/usim/unlock_procedure/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ソフトバンク SIMロック解除手続き
                          <IconNewTabLine />
                        </LinkIconAfter>
                      </li>
                    </UlOnly>
                  </div>
                </MediaGrid>
              </InfoboxBorder>
            </AccordionListEmp>

            <AccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP2</AccordionEmpStep>
                  <AccordionEmpTxt>楽天モバイルのお申し込み</AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <Tab
                className={Utils['Mt-24']}
                heading1={'Web'}
                id1="tab1"
                id2="tab2"
                content1={
                  <>
                    <MediaGrid className={Utils['Mt-24']}>
                      <MediaImage>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${assets}img/campaign/new-application/img-flow-apply-document-sp.png`}
                            width="467"
                            height="227"
                          />
                          <img
                            src={`${assets}img/campaign/new-application/img-flow-apply-document-pc.png`}
                            width="280"
                            height="180"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </MediaImage>
                      <div>
                        <Heading level="4">お申し込みに必要なもの</Heading>
                        <UlOnly className={Utils['Mt-16']}>
                          <li>
                            <LinkIconAfter href="/guide/verify/?l-id=campaign_new-application_guide_verify">
                              本人確認書類
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                          <li>楽天会員ID、パスワード</li>
                          <li>
                            <LinkIconAfter href="/guide/payment/?l-id=campaign_new-application_guide_payment">
                              クレジットカード、銀行口座情報
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                        </UlOnly>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          ※
                          <LinkNormal href="/flow/for-minors/?l-id=campaign_new-application_flow_for-minors">
                            未成年の方のお申し込み方法はこちら
                          </LinkNormal>
                          <br />
                          ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                          <LinkNormal href="/guide/mnp/?l-id=campaign_new-application_guide_mnp#carrier">
                            こちら
                          </LinkNormal>
                          からご確認ください。
                          <br />
                          ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、ご来店ください。
                        </TxtCap>
                      </div>
                    </MediaGrid>
                  </>
                }
                heading2={'ショップ'}
                content2={
                  <>
                    <MediaGrid className={Utils['Mt-24']}>
                      <MediaImage>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${assets}img/campaign/new-application/img-flow-shop-sp.png`}
                            width="559"
                            height="274"
                          />
                          <img
                            src={`${assets}img/campaign/new-application/img-flow-shop-pc.png`}
                            width="284"
                            height="165"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </MediaImage>
                      <div>
                        <ButtonRegular
                          as="a"
                          href="/shop/?l-id=campaign_new-application_shop02"
                        >
                          お近くのショップを探す
                        </ButtonRegular>
                      </div>
                    </MediaGrid>
                    <InfoboxBorder className={Utils['Mt-16']}>
                      <MediaGrid>
                        <MediaImage>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${assets}img/campaign/new-application/img-flow-apply-document-sp.png`}
                              width="467"
                              height="227"
                            />
                            <img
                              src={`${assets}img/campaign/new-application/img-flow-apply-document-pc.png`}
                              width="280"
                              height="180"
                              alt=""
                              loading="lazy"
                            />
                          </picture>
                        </MediaImage>
                        <div>
                          <Heading level="4">お申し込みに必要なもの</Heading>
                          <UlOnly className={Utils['Mt-16']}>
                            <li>
                              <LinkIconAfter href="/guide/verify/?l-id=campaign_new-application_guide_verify">
                                本人確認書類
                                <IconChevronRight className={Utils['Ml-16']} />
                              </LinkIconAfter>
                            </li>
                            <li>楽天会員ID、パスワード</li>
                            <li>
                              <LinkIconAfter href="/guide/payment/?l-id=campaign_new-application_guide_payment">
                                クレジットカード、銀行口座情報
                                <IconChevronRight className={Utils['Ml-16']} />
                              </LinkIconAfter>
                            </li>
                            <li>
                              ご契約者名義の
                              <LinkNormal href="/guide/mnp/?l-id=campaign_new-application_guide_mnp">
                                MNP予約番号
                              </LinkNormal>
                              （他社から乗り換えの場合）
                            </li>
                          </UlOnly>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            <LinkNormal href="/flow/for-minors/?l-id=campaign_new-application_flow_for-minors">
                              ※未成年の方のお申し込み方法はこちら
                            </LinkNormal>
                          </TxtCap>
                        </div>
                      </MediaGrid>
                    </InfoboxBorder>
                  </>
                }
              />
            </AccordionListEmp>

            <AccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP3</AccordionEmpStep>
                  <AccordionEmpTxt>
                    「Rakuten最強プラン」利用開始
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/new-application/img-flow-plan-start-sp.png`}
                      width="467"
                      height="227"
                    />
                    <img
                      src={`${assets}img/campaign/new-application/img-flow-plan-start-pc.png`}
                      width="304"
                      height="135"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <p>
                    <TxtEmp01>期限</TxtEmp01>
                    ：プランお申し込みの翌月末日23:59まで
                  </p>
                  <div className={Utils['Mt-16']}>
                    <ButtonRegular
                      as="a"
                      href="/faq/detail/00001648/?l-id=campaign_new-application_faq_detail_00001648"
                    >
                      プラン利用開始手順
                    </ButtonRegular>
                  </div>
                </div>
              </MediaGrid>
            </AccordionListEmp>

            <AccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP4</AccordionEmpStep>
                  <AccordionEmpTxt>
                    Rakuten Linkアプリから発信で10秒以上通話
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/new-application/img-flow-link-sp.png`}
                      width="622"
                      height="283"
                    />
                    <img
                      src={`${assets}img/campaign/new-application/img-flow-link-pc.png`}
                      width="304"
                      height="141"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <p>
                    <TxtEmp01>期限</TxtEmp01>
                    ：プランお申し込みの翌月末日23:59まで
                  </p>
                  <TxtCap as="p" className={Utils['Mt-16']}>
                    ※電話の発信時、（0570）などから始まる他社接続サービス、一部特番（188）への通話は特典対象外
                  </TxtCap>
                  <div className={Utils['Mt-16']}>
                    <LinkIconAfter href="/service/rakuten-link/?l-id=campaign_byod_service_rakuten-linkk">
                      Rakuten Linkアプリの詳細
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </div>
              </MediaGrid>
            </AccordionListEmp>

            <StepLastBox>
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/new-application/img-flow-rpoint-sp.png`}
                      width="608"
                      height="300"
                    />
                    <img
                      src={`${assets}img/campaign/new-application/img-flow-rpoint-pc.png`}
                      width="304"
                      height="150"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <Heading level="4">
                    <TxtEmp02>2,000円相当のポイント獲得！</TxtEmp02>
                  </Heading>
                  <p className={Utils['Mt-8']}>
                    「Rakuten最強プラン」利用開始及びRakuten
                    Linkの利用が確認された月の翌々月末日ごろから5カ月にわたり、400ポイントずつ付与いたします。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※ポイント有効期間はポイント付与日から3カ月後月末まで
                  </TxtCap>
                </div>
              </MediaGrid>
            </StepLastBox>

            <Cta2col className={`${Utils['Mt-pc-80']} ${Utils['Mt-sp-32']}`}>
              <ButtonPrimaryLarge
                as="a"
                href="/guide/application/?lid-r=campaign_new-application_guide_application_top_02"
              >
                新規お申し込み
              </ButtonPrimaryLarge>
              <ButtonSecondaryLarge
                href="/shop/?l-id=campaign_new-application_shop_top_02"
                as="a"
              >
                お近くのショップを探す
              </ButtonSecondaryLarge>
            </Cta2col>
            <TxtCap
              className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
              as="p"
            >
              ※楽天モバイル（ドコモ・au回線）からのプラン変更（移行）は
              <LinkNormal href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_new-application_ms_bottom&mno_migration=1">
                こちら
              </LinkNormal>
            </TxtCap>
          </section>
          <section className={Utils['Mt-48']}>
            <Heading level="3" className={Utils['Align-center']}>
              ＼製品購入でさらにおトク！／
            </Heading>
            <MediaGridHalf
              className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
            >
              <div>
                <BannerHover href="/campaign/iphone-point/?l-id=campaign_new-application_campaign_iphone-point">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/bnr/bnr-iphone-point-343-108-240517.png`}
                      width="343"
                      height="108"
                    />
                    <img
                      src={`${assets}img/bnr/bnr-iphone-point-504-158-240517.png`}
                      width="504"
                      height="158"
                      alt="対象iPhoneを一括または24回払いで購入＆楽天モバイルへ初めて申し込み＆他社から電話番号そのまま乗り換えで最大32,000円相当おトク！"
                      loading="lazy"
                    />
                  </picture>
                </BannerHover>
              </div>
              <div>
                <BannerHover href="/campaign/start-point/?l-id=campaign_new-application_campaign_start-point">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/bnr/bnr-start-point-343-108-240522.png`}
                      width="343"
                      height="108"
                    />
                    <img
                      src={`${assets}img/bnr/bnr-start-point-504-158-240522.png`}
                      width="504"
                      height="158"
                      alt="楽天モバイルへ初めてお申し込み＋他社から電話番号そのまま乗り換え＋対象のAndroid製品をご購入いただくと最大12,000ポイント還元！他社から乗り換え以外の方でも最大8,000ポイント還元中！"
                      loading="lazy"
                    />
                  </picture>
                </BannerHover>
              </div>
            </MediaGridHalf>
          </section>
          <section className={Utils['Mt-48']}>
            <Heading level="2">よくあるご質問</Heading>
            <AccordionList
              text={'キャンペーン対象になるためのエントリーは必要ですか'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                本キャンペーンにエントリーは必要ございません。
                <br />
                参加条件を満たしていればキャンペーンの対象となります。
              </p>
            </AccordionList>
            <AccordionList
              text={'キャンペーン適用条件を満たしているか確認できますか'}
              isOpened={false}
            >
              <p>
                <LinkNormal href="/faq/detail/00001802/?l-id=campaign_new-application_faq_detail_00001802">
                  こちら
                </LinkNormal>
                に記載の手順でご確認ください。
              </p>
            </AccordionList>
          </section>

          <section className={Utils['Mt-48']}>
            <CommonSaikyo />
          </section>
          <section className={`${Utils['Mt-40']} ${Utils['Pb-24']}`}>
            <BnrCampaignRecommend />
          </section>
          <section className={Utils['Mt-56']}>
            <Heading level="2" id="campaign-rule2142">
              【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン
            </Heading>
            <CampaignRule2142 />
          </section>
        </SystemContainer>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignNewApplication
