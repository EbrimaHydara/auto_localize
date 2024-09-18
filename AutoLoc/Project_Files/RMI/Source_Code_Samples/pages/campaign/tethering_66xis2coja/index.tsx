import type { NextPage } from 'next'
import React, { useEffect, useContext } from 'react'
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
  IconGiftLine,
  IconSignWarningLine,
} from '@components/icons'
import { MediaGridHalf } from '@components/layout/Media'
import { LabelList } from '@components/atoms/Label'
import { anchorCallback } from '@components/utils/anchorCallback'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { CampaignRule2242 } from '@components/include/campaign/rules/2023/CampaignRule2242'

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
const CampaignList = styled.ul`
  display: grid;
  gap: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
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
        background: url(${assets}img/campaign/tethering_66xis2coja/icon-plus.png)
          no-repeat;
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
  justify-content: center;
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
    font: 32px var(--rex-icon);
    text-align: center;
  }
`
const TetheringWrapText = styled.div`
  display: flex;
  gap: 50px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    img {
      width: 100%;
    }
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
  gap: 32px;
  align-items: center;
  div {
    &:first-child {
      max-width: 288px;
      width: 100%;
    }
    &:last-child {
      img {
        width: 136px;
      }
    }
  }
  ${mixins.mq.MaxM} {
    flex-flow: column;
    padding: 8px 0;
    div {
      &:last-child {
        img {
          width: 100%;
        }
      }
    }
  }
`
const StepFlowWrap = styled.ol`
  li {
    background-color: white;
    + li {
      margin-top: 8px;
    }
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

const TxtWarning = styled.div`
  background-color: #fef0dd;
  color: ${props => props.theme.colors.warningText};
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    &:first-child {
      margin-right: 4px;
      font-size: 16px;
    }
    &:last-child {
      text-align: left;
    }
  }
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`

const CustomHeading2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  span {
    &:first-child {
      color: ${props => props.theme.colors.primary};
      margin-right: 8px;
      font-size: 46px;
    }
  }
`
const IconWifi = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 4px;
`
const CampaignTethering66xis2coja: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'エントリー＆テザリング利用で300ポイントプレゼント！'
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
    window.rexButtons = {language: 'ja', buttons: [{"code":"/rmobile/tethering300/240325","theme":"red","wide":true,"showCelebration":false,"alreadyAppliedText":"エントリー済みです","ids":["rex-ceb-01"]}]}
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
        description="エントリー＆テザリング利用で300ポイントプレゼント！キャンペーンの開始時点で楽天モバイル（Rakuten最強プラン）ご利用中の方が対象です"
        noindex={true}
        ogp_img="https://network.mobile.rakuten.co.jp/assets/img/campaign/tethering_66xis2coja/ogp-300.png"
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
                srcSet={`${assets}img/campaign/tethering_66xis2coja/kv-sp.png`}
                width="834"
                height="734"
              />
              <img
                src={`${assets}img/campaign/tethering_66xis2coja/kv-pc.png`}
                width="1440"
                height="300"
                alt="【本キャンペーンのご案内を受け取った方限定】エントリー＆テザリング利用で300ポイントプレゼント！"
              />
            </picture>
          </h1>
        </Kv>

        <SystemContainer>
          <TxtCap as="ul" className={`${Utils['Mt-16']} ${Utils['Mt-pc-8']}`}>
            <li>
              ※キャンペーンの開始時点で「Rakuten最強プラン」をご利用中の方が対象です
            </li>
            <li>※「Rakuten最強プラン（データタイプ）」は対象外です</li>
          </TxtCap>

          <TxtEmp02
            as="p"
            className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
          >
            <TxtSize size="m">
              本キャンペーンは2024年4月30日をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>

          <TxtWarning className={Utils['Mt-24']}>
            <IconSignWarningLine />
            <p>
              本キャンペーンは、ご案内を受け取った方限定です。
              <br className={Utils['Show-xxo']} />
              ご案内のない方は対象外となりますのでご了承ください。
            </p>
          </TxtWarning>

          <p
            className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
            data-ratid="campaign_tethering-300_scroll-01_flow"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <TxtEmp01>【キャンペーン期間】</TxtEmp01>{' '}
            2024年4月1日（月）10:00～2024年4月30日（火）23:59
          </p>

          <OverWriteRexCeb
            className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
          >
            <TxtCap
              as="ul"
              className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
            >
              <li>
                ※本キャンペーンにエントリーされた場合は、テザリング利用情報の取得・利用に同意したものとします
              </li>
            </TxtCap>
          </OverWriteRexCeb>

          <div className={`${Utils['Align-center']} ${Utils['Mt-48']}`}>
            <CustomHeading2>
              <IconGiftLine /> キャンペーン達成条件
            </CustomHeading2>
            <p className={Utils['Mt-16']}>
              本キャンペーンには達成条件が設定されています。詳細は
              <LinkNormal
                href="#campaign-rule2242"
                data-ratid="campaign_tethering-300_rule"
                data-ratevent="click"
                data-ratparam="all"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2242')
                }
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </p>
          </div>

          <CampaignList className={Utils['Mt-40']}>
            <li>
              <CampaignListTtl>
                <div>
                  <img
                    src={`${assets}img/campaign/tethering_66xis2coja/icon-campaign-01.png`}
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
                <TxtCap>
                  ※本キャンペーンにエントリーされた場合は、テザリング利用情報の取得・利用に同意したものとします
                </TxtCap>
              </CampaignListBody>
            </li>
            <li>
              <CampaignListTtl>
                <div>
                  <img
                    src={`${assets}img/campaign/tethering_66xis2coja/icon-campaign-02.png`}
                    alt=""
                    width="47"
                    height="47"
                    loading="lazy"
                  />
                </div>
                <Heading level="4" as="h3">
                  期間中にテザリングで
                  <br />
                  データ通信を利用
                </Heading>
              </CampaignListTtl>
              <CampaignListBody>
                <div>
                  <TxtEmp01>【データ通信利用期間】</TxtEmp01>
                  エントリー月の月初から月末まで
                </div>
                <LinkIconBeforeCustom
                  href="#tethering"
                  data-ratid="campaign_tethering-300_about"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'tethering')
                  }
                  className={Utils['Mt-8']}
                >
                  <IconArrowDown />
                  テザリングとは？
                </LinkIconBeforeCustom>
              </CampaignListBody>
            </li>
          </CampaignList>
          <PointWrap>
            <IconArrowDown />
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/tethering_66xis2coja/img-300point-sp.png`}
                width="802"
                height="374"
              />
              <img
                src={`${assets}img/campaign/tethering_66xis2coja/img-300point-pc.png`}
                width="1032"
                height="160"
                alt="300ポイントプレゼント！"
                loading="lazy"
              />
            </picture>
          </PointWrap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※条件を達成した翌々月末頃に付与日を含めて6カ月の期間限定ポイントをプレゼント
          </TxtCap>
        </SystemContainer>

        <GrayBox className={`${Utils['Mt-40']} ${Utils['Mt-pc-56']}`}>
          <SystemContainer>
            <CustomHeading2
              id="tethering"
              className={Utils['Align-center']}
              data-ratid="campaign_tethering-300_scroll-02_about"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <IconWifi
                src={`${assets}img/campaign/tethering_66xis2coja/icon-wifi.png`}
                width="46"
                height="46"
                alt=""
              />
              テザリングとは？
            </CustomHeading2>
            <TetheringWrapText className={Utils['Mt-16']}>
              <div>
                <p>
                  <TxtEmp02>
                    テザリングとはスマートフォンの電波を使って、パソコンやタブレットをインターネットに接続する機能です。
                  </TxtEmp02>
                  <br className={Utils['Show-oox']} />
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
              </div>
              <img
                src={`${assets}img/campaign/tethering_66xis2coja/img-01.png`}
                width="180"
                height="120"
                alt=""
                loading="lazy"
              />
            </TetheringWrapText>

            <Heading
              level="3"
              className={`${Utils['Mt-48']} ${Utils['Align-center']}`}
            >
              おすすめポイント
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
                      です。ご自身のスマートフォンの電波を使用するため、フリーWi-Fiと比較して
                      <TxtEmp02>セキュリティ面で安心</TxtEmp02>
                      です。
                    </TxtSize>
                  </div>
                  <div className={Utils['Align-center']}>
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/img-02.png`}
                      width="169"
                      height="114"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </RecommendFlex>
              </InfoboxBorderCustom>
              <InfoboxBorderCustom>
                <RecommendFlex>
                  <div>
                    <TxtEmp01 as="p" className={Utils['Align-ccl']}>
                      モバイルWi-Fiの通信費を節約できる！
                    </TxtEmp01>
                    <TxtSize size="s" as="p" className={Utils['Mt-8']}>
                      お使いのスマートフォンのテザリングを利用することで、
                      <TxtEmp02>モバイルWi-Fiの代わり</TxtEmp02>
                      になります。楽天モバイルであれば別途お申し込み不要でテザリングが利用可能。モバイルWi-Fiにかかっている
                      <TxtEmp02>通信費の節約が可能</TxtEmp02>
                      です。
                    </TxtSize>
                  </div>
                  <div className={Utils['Align-center']}>
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/img-03.png`}
                      width="169"
                      height="114"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </RecommendFlex>
              </InfoboxBorderCustom>
            </MediaGridHalfCustom>
            <div
              className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
            >
              <LinkIconAfter href="/service/tethering/?l-id=campaign_tethering_66xis2coja_service_tethering">
                テザリングを詳しくみる
                <IconChevronRight />
              </LinkIconAfter>
            </div>
            <div className={Utils['Mt-48']}>
              <div className={Utils['Align-center']}>
                <Heading
                  level="3"
                  ratId="campaign_tethering-300_scroll-03_step"
                  ratEvent="appear"
                >
                  利用設定！簡単ステップ
                </Heading>
                <p className={Utils['Mt-16']}>
                  設定方法がiPhoneとAndroidでは異なります。詳しい設定方法はそれぞれご確認の上ご利用ください。
                </p>
              </div>
              <StepFlowWrap
                className={`${Utils['Mt-16']} ${Utils['Mt-pc-40']}`}
              >
                <StepFlowItem>
                  <div className="num">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-01.png`}
                      width="38"
                      height="50"
                      alt="STEP1"
                      loading="lazy"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-01-02.png`}
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
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-02.png`}
                      width="38"
                      height="50"
                      alt="STEP1"
                      loading="lazy"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-02-02.png`}
                      width="64"
                      height="64"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <ul className="text">
                    <li>
                      <TxtSize size="m">
                        <TxtEmp01>iPhoneの場合</TxtEmp01>
                        <br className={Utils['Show-oox']} />
                        「インターネット共有」を選択
                      </TxtSize>
                      <br className={Utils['Show-oox']} />
                      <LinkIconAfter
                        href="/guide/tethering/?l-id=campaign_tethering_66xis2coja_guide_tethering#tab-menu1"
                        className={`${Utils['Ml-0']} ${Utils['Ml-pc-16']}`}
                      >
                        iPhoneの設定方法を詳しくみる
                        <IconChevronRight />
                      </LinkIconAfter>
                    </li>
                    <li className={Utils['Mt-8']}>
                      <TxtSize size="m">
                        <TxtEmp01>Androidの場合</TxtEmp01>
                        <br className={Utils['Show-oox']} />
                        「アクセスポイント」を選択
                      </TxtSize>
                      <br className={Utils['Show-oox']} />
                      <LinkIconAfter
                        href="/guide/tethering/?l-id=campaign_tethering_66xis2coja_guide_tethering#tab-menu2"
                        className={`${Utils['Ml-0']} ${Utils['Ml-pc-16']}`}
                      >
                        Androidの設定方法を詳しくみる
                        <IconChevronRight />
                      </LinkIconAfter>
                    </li>
                  </ul>
                </StepFlowItem>
                <StepFlowItem>
                  <div className="num">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-03.png`}
                      width="38"
                      height="50"
                      alt="STEP1"
                      loading="lazy"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-03-02.png`}
                      width="64"
                      height="64"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <TxtSize size="m" as="p" className="text">
                    接続したい機器のWi-Fiからお使いのスマートフォンを選んでパスワードを入力
                  </TxtSize>
                </StepFlowItem>
                <StepFlowItem>
                  <div className="num">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-04.png`}
                      width="38"
                      height="50"
                      alt="STEP1"
                      loading="lazy"
                    />
                  </div>
                  <div className="icon">
                    <img
                      src={`${assets}img/campaign/tethering_66xis2coja/icon-step-flow-04-02.png`}
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
        </GrayBox>

        <GrayBox className={Utils['Mt-0']}>
          <SystemContainer>
            <Heading
              level="2"
              id="campaign-rule2242"
              className={Utils['Align-center']}
            >
              テザリング利用で300ポイントプレゼントキャンペーン
            </Heading>
            <TxtEmp02
              as="p"
              className={`${Utils['Align-center']} ${Utils['Mt-24']} ${Utils['Mb-24']}`}
            >
              <TxtSize size="m">
                本キャンペーンは2024年4月30日をもちまして終了いたしました。
                <br />
                このページに掲載されている情報は、キャンペーン終了時点のものです。
              </TxtSize>
            </TxtEmp02>
            <CampaignRule2242 point={300} />
          </SystemContainer>
        </GrayBox>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignTethering66xis2coja
