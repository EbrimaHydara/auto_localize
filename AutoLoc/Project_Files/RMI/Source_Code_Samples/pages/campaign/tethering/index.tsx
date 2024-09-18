import type { NextPage } from 'next'
import React, { useEffect, useContext, useRef, useState } from 'react'
import Head from 'next/head'
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
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import {
  IconArrowDown,
  IconChevronRight,
  IconSignInfoLine,
} from '@components/icons'
import { MediaGridHalf } from '@components/layout/Media'
import { LabelList } from '@components/atoms/Label'
import { anchorCallback } from '@components/utils/anchorCallback'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { CampaignRule2060 } from '@components/include/campaign/rules/2023/CampaignRule2060'
import { BannerHover } from '@components/atoms/Banner'

const Kv = styled.div`
  background: ${props => props.theme.colors.pink10};
  text-align: center;
`
const LabelListBox = styled.div`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  > ul {
    gap: 8px;
    > li {
      margin: 0;
    }
  }
`
const DescriptionListDefaultCustom = styled(DescriptionListDefault)`
  dt {
    display: flex;
    align-items: center;
  }
`
const CampaignList = styled.ul`
  display: grid;
  gap: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
  > li {
    border: 1px solid ${props => props.theme.colors.monotone75};
    background: ${props => props.theme.colors.monotone97};
    ${mixins.mq.MinL} {
      gap: 0;
      display: grid;
      grid-row: span 2;
      grid-template-rows: auto 1fr;
      grid-template-rows: subgrid;
    }
    & + li {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 36px;
        height: 36px;
        background: url(${assets}img/campaign/tethering/icon-plus.png) no-repeat;
        background-size: contain;
        top: -28px;
        left: 50%;
        transform: translateX(-50%);
        ${mixins.mq.MinL} {
          top: 50%;
          left: -28px;
          transform: translate(0, -50%);
        }
      }
    }
  }
`
const CampaignListTtl = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 22px 16px 24px;
  background: ${props => props.theme.colors.white};
  > div:first-child {
    flex-shrink: 0;
  }
  ${mixins.mq.MaxM} {
    gap: 16px;
    padding: 24px 16px;
  }
`
const CampaignListBody = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${mixins.mq.MaxM} {
    padding: 16px;
    min-height: 78px;
  }
`
const LinkIconBeforeCustom = styled(LinkIconBefore)`
  margin: 0 auto;
  width: fit-content;
`
const PointWrap = styled.div`
  position: relative;
  margin-top: 44px;
  ${IconArrowDown} {
    position: absolute;
    left: 50%;
    top: -39px;
    width: 32px;
    height: 32px;
    margin-left: -16px;
    color: ${props => props.theme.colors.pink100};
    font-size: 32px;
    text-align: center;
  }
`
const TetheringWrap = styled.div`
  margin-top: 40px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  display: flex;
  column-gap: 72px;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
    flex-flow: column;
  }
  > div:nth-child(2) {
    flex-shrink: 0;
  }
`
const TetheringWrapText = styled.div`
  padding: 26px 16px 26px 24px;
  ${mixins.mq.MaxM} {
    padding: 26px 16px;
  }
`
const TetheringIconBefore = styled.div`
  display: table;
  > span {
    display: table-cell;
    padding-right: 8px;
    vertical-align: middle;
    font-size: 30px;
  }
  ${mixins.mq.MaxM} {
    margin: auto;
  }
`
const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 40px 0;
  }
`
const MediaGridHalfCustom = styled(MediaGridHalf)`
  ${mixins.mq.MaxM} {
    > div:last-child {
      margin-top: 16px;
    }
  }
`
const InfoboxBorderCustom = styled(InfoboxBorder)`
  background-color: ${props => props.theme.colors.white};
`
const RecommendFlex = styled.div`
  display: flex;
  gap: 10px 10px;
  align-items: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    padding: 8px 0;
  }
  > div:nth-child(2) {
    flex-shrink: 0;
  }
`
const StepFlowWrap = styled.ol`
  li + li {
    margin-top: 8px;
  }
`
const StepFlowItem = styled.li`
  display: grid;
  grid-template-columns: 50px 80px 1fr;
  grid-template-areas: 'num icon text';
  align-items: center;
  border: 1px solid ${props => props.theme.colors.monotone75};
  padding: 18px 16px 18px 114px;
  .num {
    grid-area: num;
  }
  .icon {
    grid-area: icon;
  }
  .text {
    grid-area: text;
  }
  ${mixins.mq.MaxM} {
    grid-template-columns: 34px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
      'num icon'
      'text text';
    padding: 18px 22px;
    row-gap: 8px;
    align-items: flex-start;
    .icon {
      margin: auto;
      padding-right: 34px;
    }
  }
`
const OverWriteRexCeb = styled.div`
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-enabled
    a.rex-button.RexButton {
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    min-width: 160px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
    font-weight: 700;
    max-width: 310px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    &[aria-disabled='true']:hover {
      cursor: default;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${props => props.theme.colors.pink_80};
      border: 1px solid ${props => props.theme.colors.pink_80};
      color: ${props => props.theme.colors.white};
    }
    &:focus {
      outline: 2px ${props => props.theme.colors.linkBlue} solid;
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props => props.theme.colors.pink_60};
      border: 1px solid ${props => props.theme.colors.pink_60};
      color: ${props => props.theme.colors.white};
      outline: 0;
      box-shadow: none;
    }
    ${mixins.mq.MinL} {
      max-width: 500px !important;
    }
  }
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-enabled
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-success
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-applied
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-already_applied_text
    a.rex-button.RexButton {
    font-size: 18px;
    padding: 16px;
    width: 100%;
    max-width: 500px;
  }
`
const OverWriteRexCebCta = styled(OverWriteRexCeb)`
  .campaign-Rexoverwrite {
    .InfoText {
      color: white;
      .InfoIcon svg {
        fill: white;
      }
    }
  }
`
const FloatingContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);
  &[aria-expanded='false'] {
    bottom: -325px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`

interface CtaBottomFixedProps {
  scrollTrigger: React.RefObject<HTMLDivElement>
}

const CampaignTethering: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    'テザリングを使ってポイントGET！エントリー＆条件達成で200ポイントプレゼント'
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
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
  const scrollTrigger = useRef<HTMLDivElement>(null)

  const labelArgs = {
    item: [
      { text: 'ご契約者様対象', isEmp: false, isBold: false },
      { text: 'エントリー必要', isEmp: false, isBold: false },
    ],
  }

  useEffect(() => {
    const scriptLoad1 = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      const scriptFunction = document.createTextNode(`
    window.rexButtons = {language: 'ja', buttons: [{"code":"/rmobile/tethering/231117","theme":"red","wide":true,"showCelebration":false,"alreadyAppliedText":"エントリー済みです","ids":["rex-ceb-01","rex-ceb-02"]}]}
      `)
      script.appendChild(scriptFunction)
      document.body.appendChild(script)
    }

    const scriptLoad2 = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.defer = true
      script.src =
        'https://cdn.rex.contents.rakuten.co.jp/rex-ceb/5.0.0/static/js/main.js'
      document.body.appendChild(script)
    }

    scriptLoad1()
    scriptLoad2()
  }, [])

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
        let wrapperHeight = 200
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
        <OverWriteRexCebCta className={Utils['Align-center']}>
          <div id="rex-ceb-02" className="campaign-Rexoverwrite"></div>
          <TxtCap
            as="ul"
            className={`${Utils['Color-white']} ${Utils['Mt-16']}`}
          >
            <li>
              ※本キャンペーンにエントリーされた場合は、テザリング利用情報の取得・利用に同意されたとみなします
            </li>
            <li>※先着1万名に到達次第、受付終了となります</li>
          </TxtCap>
        </OverWriteRexCebCta>
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
      <Head>
        <link
          rel="dns-prefetch"
          href="https://cdn.rex.contents.rakuten.co.jp"
        />
      </Head>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="テザリングを使ってポイントGET！エントリー＆条件達成で200ポイントプレゼント!キャンペーンの開始時点で楽天モバイル（Rakuten最強プラン）ご利用中の方が対象です"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <SystemContainer>
          <LabelListBox>
            <LabelList {...labelArgs} />
            <TxtCap as="p">
              ポイント：付与日を含めて6カ月の期間限定ポイント
            </TxtCap>
          </LabelListBox>
        </SystemContainer>

        <Kv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/tethering/kv-sp.png`}
                width="834"
                height="734"
              />
              <img
                src={`${assets}img/campaign/tethering/kv-pc.png`}
                width="1440"
                height="300"
                alt="テザリングを使ってポイントGET！エントリー＆条件達成で200ポイントプレゼント"
              />
            </picture>
          </h1>
        </Kv>

        <SystemContainer>
          <TxtCap as="ul" className={`${Utils['Mt-16']} ${Utils['Mt-pc-8']}`}>
            <li>
              ※キャンペーンの開始時点「Rakuten最強プラン」ご利用中の方が対象です
            </li>
          </TxtCap>

          <div className={Utils['Align-center']}>
            <TxtEmp02 as="p" className={Utils['Mt-24']}>
              <TxtSize size="m">
                本キャンペーンは2023年12月26日をもちまして終了いたしました
                <br />
                このページに掲載されている情報は、キャンペーン終了時点のものです
              </TxtSize>
            </TxtEmp02>
          </div>

          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <Heading level="2">キャンペーン達成条件</Heading>
            <p className={Utils['Mt-16']}>
              本キャンペーンには達成条件が設定されています。詳細は
              <LinkNormal
                href="#campaign-rule2060"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2060')
                }
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </p>
          </div>

          <DescriptionListDefaultCustom
            className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
          >
            <div>
              <dt>キャンペーン期間</dt>
              <dd>
                2023年12月1日（金）10:00～12月26日（火）23:59 <TxtCap>※</TxtCap>
              </dd>
            </div>
            <div>
              <dt>データ通信利用期間</dt>
              <dd>エントリー月の月初から月末まで</dd>
            </div>
          </DescriptionListDefaultCustom>
          <TxtCap as="ul" className={Utils['Mt-8']}>
            <li>※先着1万名に到達次第、受付終了</li>
          </TxtCap>

          <CampaignList className={Utils['Mt-40']}>
            <li>
              <CampaignListTtl>
                <div>
                  <img
                    src={`${assets}img/campaign/tethering/icon-campaign-01.png`}
                    alt=""
                    width="47"
                    height="47"
                    loading="lazy"
                  />
                </div>
                <Heading level="4" as="h3">
                  本ページからエントリー
                </Heading>
              </CampaignListTtl>
              <CampaignListBody>
                <p>
                  <TxtEmp01>【キャンペーン期間】</TxtEmp01>
                  2023年12月1日（金）10:00～12月26日（火）23:59{' '}
                  <TxtCap>※</TxtCap>
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※先着1万名に到達次第、受付終了
                </TxtCap>
              </CampaignListBody>
            </li>
            <li>
              <CampaignListTtl>
                <div>
                  <img
                    src={`${assets}img/campaign/tethering/icon-campaign-02.png`}
                    alt=""
                    width="47"
                    height="47"
                    loading="lazy"
                  />
                </div>
                <Heading level="4" as="h3">
                  期間中にデータ通信を
                  <br />
                  使ったテザリング接続利用
                </Heading>
              </CampaignListTtl>
              <CampaignListBody>
                <LinkIconBeforeCustom
                  href="#tethering"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'tethering')
                  }
                >
                  <IconArrowDown />
                  テザリングとは？
                </LinkIconBeforeCustom>
              </CampaignListBody>
            </li>
            <li>
              <CampaignListTtl>
                <div>
                  <img
                    src={`${assets}img/campaign/tethering/icon-campaign-03.png`}
                    alt=""
                    width="47"
                    height="47"
                    loading="lazy"
                  />
                </div>
                <Heading level="4" as="h3">
                  期間中に通常のデータ通信を含む3GB超過利用
                </Heading>
              </CampaignListTtl>
              <CampaignListBody>
                <LinkIconAfter href="/guide/data-traffic/?l-id=campaign_tethering_guide_data-traffic_con3_1#confirm1">
                  データ利用量の確認方法はこちら
                  <IconChevronRight />
                </LinkIconAfter>
              </CampaignListBody>
            </li>
          </CampaignList>
          <PointWrap>
            <IconArrowDown />
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/tethering/img-200point-sp.png`}
                width="802"
                height="374"
              />
              <img
                src={`${assets}img/campaign/tethering/img-200point-pc.png`}
                width="1032"
                height="160"
                alt="先着1万名様 200ポイントプレゼント"
                loading="lazy"
              />
            </picture>
          </PointWrap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※条件を達成した翌々月末頃に付与日を含めて6カ月の期間限定ポイントをプレゼント
          </TxtCap>
          {/*
          <OverWriteRexCeb
            className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
          >
            <div id="rex-ceb-01" className="campaign-Rexoverwrite"></div>
            <TxtCap
              as="ul"
              className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
            >
              <li>
                ※本キャンペーンにエントリーされた場合は、テザリング利用情報の取得・利用に同意されたとみなします
              </li>
              <li>※先着1万名に到達次第、受付終了となります</li>
            </TxtCap>
          </OverWriteRexCeb> */}

          <TetheringWrap id="tethering" ref={scrollTrigger}>
            <TetheringWrapText>
              <TetheringIconBefore>
                <IconSignInfoLine />
                <Heading level="3">テザリングとは？</Heading>
              </TetheringIconBefore>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-pc-16']}`}>
                <TxtEmp02>
                  テザリングはスマホの電波を使って、パソコンやタブレットをインターネットに接続する機能です。
                </TxtEmp02>
                別途お申し込み不要でご利用いただけます。
              </p>
              <TxtCap
                as="ul"
                className={`${Utils['Mt-8']} ${Utils['Mt-pc-16']}`}
              >
                <li>
                  ※機種によってはテザリング機能がない場合もあります。お使いのスマートフォンの仕様をご確認ください
                </li>
                <li>※ゲーム内課金、コンテンツ利用料等別</li>
              </TxtCap>
            </TetheringWrapText>
            <div>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/tethering/img-01-sp.png`}
                  width="800"
                  height="504"
                />
                <img
                  src={`${assets}img/campaign/tethering/img-01-pc.png`}
                  width="300"
                  height="200"
                  alt=""
                  loading="lazy"
                />
              </picture>
            </div>
          </TetheringWrap>
        </SystemContainer>

        <GrayBox className={`${Utils['Mt-40']} ${Utils['Mt-pc-56']}`}>
          <SystemContainer>
            <Heading level="2" id="recommend" className={Utils['Align-center']}>
              テザリングのおすすめ理由
            </Heading>
            <MediaGridHalfCustom
              className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
            >
              <InfoboxBorderCustom>
                <RecommendFlex>
                  <div>
                    <TxtEmp01 as="p" className={Utils['Align-ccl']}>
                      外出先でもどこでも接続できる！
                    </TxtEmp01>
                    <TxtSize size="s" as="p" className={Utils['Mt-8']}>
                      テザリング機能を活用すれば、
                      <TxtEmp02>
                        外出先でもPC等にインターネットの接続ができ便利
                      </TxtEmp02>
                      です。ご自身のスマホの電波を使用するため、フリーWi-Fiと比較して
                      <TxtEmp02>セキュリティ面で安心</TxtEmp02>
                      です。
                    </TxtSize>
                  </div>
                  <div className={Utils['Align-center']}>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/tethering/img-02-sp.png`}
                        width="622"
                        height="418"
                      />
                      <img
                        src={`${assets}img/campaign/tethering/img-02-pc.png`}
                        width="169"
                        height="114"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </RecommendFlex>
              </InfoboxBorderCustom>
              <InfoboxBorderCustom>
                <RecommendFlex>
                  <div>
                    <TxtEmp01 as="p" className={Utils['Align-ccl']}>
                      固定費の節約になる！
                    </TxtEmp01>
                    <TxtSize size="s" as="p" className={Utils['Mt-8']}>
                      お使いのスマートフォンのテザリングを利用することで、
                      <TxtEmp02>モバイルWi-Fiの代わり</TxtEmp02>
                      になります。楽天モバイルであれば別途お申込み不要でテザリングが利用可能。モバイルWi-Fiにかかっている
                      <TxtEmp02>固定費の節約が可能</TxtEmp02>
                      です。
                    </TxtSize>
                  </div>
                  <div className={Utils['Align-center']}>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/tethering/img-03-sp.png`}
                        width="622"
                        height="418"
                      />
                      <img
                        src={`${assets}img/campaign/tethering/img-03-pc.png`}
                        width="169"
                        height="114"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </RecommendFlex>
              </InfoboxBorderCustom>
            </MediaGridHalfCustom>
            <div
              className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
            >
              <LinkIconAfter href="/service/tethering/?l-id=campaign_tethering_service_tethering">
                テザリングを詳しくみる
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <div className={`${Utils['Mt-32']} ${Utils['Mt-pc-56']}`}>
            <div className={Utils['Align-center']}>
              <Heading level="2">
                テザリング利用設定！
                <br className={Utils['Show-oox']} />
                簡単ステップ
              </Heading>
              <p className={Utils['Mt-16']}>
                設定方法がAndroidとiPhoneでは異なります。詳しい設定方法はそれぞれご確認の上ご利用ください。
              </p>
            </div>
            <StepFlowWrap className={`${Utils['Mt-16']} ${Utils['Mt-pc-40']}`}>
              <StepFlowItem>
                <div className="num">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-01.png`}
                    width="38"
                    height="50"
                    alt="STEP1"
                    loading="lazy"
                  />
                </div>
                <div className="icon">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-01-02.png`}
                    width="64"
                    height="64"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <TxtSize size="m" as="p" className="text">
                  「設定」からすすむ
                </TxtSize>
              </StepFlowItem>
              <StepFlowItem>
                <div className="num">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-02.png`}
                    width="38"
                    height="50"
                    alt="STEP1"
                    loading="lazy"
                  />
                </div>
                <div className="icon">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-02-02.png`}
                    width="64"
                    height="64"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <ul className="text">
                  <li>
                    <TxtSize size="m">
                      <TxtEmp01>Androidの場合</TxtEmp01>
                      <br className={Utils['Show-oox']} />
                      「アクセスポイント」を選択
                    </TxtSize>
                    <br className={Utils['Show-oox']} />
                    <LinkIconAfter
                      href="/guide/tethering/?l-id=campaign_tethering_guide_tethering#tab-menu2"
                      className={`${Utils['Ml-0']} ${Utils['Ml-pc-16']}`}
                    >
                      Androidの設定方法を詳しくみる
                      <IconChevronRight />
                    </LinkIconAfter>
                  </li>
                  <li className={Utils['Mt-8']}>
                    <TxtSize size="m">
                      <TxtEmp01>iPhoneの場合</TxtEmp01>
                      <br className={Utils['Show-oox']} />
                      「インターネット共有」を選択
                    </TxtSize>
                    <br className={Utils['Show-oox']} />
                    <LinkIconAfter
                      href="/guide/tethering/?l-id=campaign_tethering_guide_tethering#tab-menu1"
                      className={`${Utils['Ml-0']} ${Utils['Ml-pc-16']}`}
                    >
                      iPhoneの設定方法を詳しくみる
                      <IconChevronRight />
                    </LinkIconAfter>
                  </li>
                </ul>
              </StepFlowItem>
              <StepFlowItem>
                <div className="num">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-03.png`}
                    width="38"
                    height="50"
                    alt="STEP1"
                    loading="lazy"
                  />
                </div>
                <div className="icon">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-03-02.png`}
                    width="64"
                    height="64"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <TxtSize size="m" as="p" className="text">
                  接続したい機器のWi-Fiからお使いのスマホを選んでパスワードを入力
                </TxtSize>
              </StepFlowItem>
              <StepFlowItem>
                <div className="num">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-04.png`}
                    width="38"
                    height="50"
                    alt="STEP1"
                    loading="lazy"
                  />
                </div>
                <div className="icon">
                  <img
                    src={`${assets}img/campaign/tethering/icon-step-flow-04-02.png`}
                    width="64"
                    height="64"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <TxtSize size="m" as="p" className="text">
                  テザリングのご利用開始
                </TxtSize>
              </StepFlowItem>
            </StepFlowWrap>
          </div>
        </SystemContainer>

        <GrayBox className={`${Utils['Mt-32']} ${Utils['Mt-pc-56']}`}>
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']}>
              おトクな
              <br className={Utils['Show-oox']} />
              おすすめコンテンツ
            </Heading>
            <MediaGridHalf
              className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
            >
              <div>
                <BannerHover href="/campaign/digital-contents/?l-id=campaign_tethering_campaign_digital-contents">
                  <img
                    src={`${assets}img/campaign/tethering/bnr-nba-504-158.png`}
                    width="504"
                    height="158"
                    alt="楽天モバイルならNBA＆パ・リーグの試合が観られる！楽天マガジン＆楽天ミュージックは初回90日無料で雑誌読み放題、音楽聴き放題！"
                    loading="lazy"
                  />
                </BannerHover>
              </div>
              <div>
                <BannerHover href="/campaign/youtubepremium/?l-id=campaign_tethering_campaign_youtubepremium">
                  <img
                    src={`${assets}img/campaign/tethering/bnr-youtube-504-158.png`}
                    width="504"
                    height="158"
                    alt="Rakuten Mobile 楽天モバイルご契約者様対象　YouTube Premium 初回3カ月無料"
                    loading="lazy"
                  />
                </BannerHover>
              </div>
            </MediaGridHalf>
          </SystemContainer>
        </GrayBox>

        <div className={Utils['Align-center']}>
          <TxtEmp02 as="p" className={Utils['Mt-24']}>
            <TxtSize size="m">
              本キャンペーンは2023年12月26日をもちまして終了いたしました
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです
            </TxtSize>
          </TxtEmp02>
        </div>

        <div className={Utils['Mt-32']}>
          <SystemContainer>
            <Heading level="2" id="campaign-rule2060">
              テザリング利用で200ポイントプレゼントキャンペーン
            </Heading>
            <CampaignRule2060 />
          </SystemContainer>
        </div>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignTethering
