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
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import {
  AccordionList,
  AccordionListEmp,
  AccordionEmpStep,
  AccordionEmpTxt,
} from '@components/atoms/AccordionList'
import { Tab } from '@components/atoms/Tab'
import {
  ButtonRegular,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { IconArrowDown, IconArrowUp, IconChevronRight } from '@components/icons'
import { MediaGrid, MediaGridHalf, MediaImage } from '@components/layout/Media'
import { LabelList } from '@components/atoms/Label'
import { anchorCallback } from '@components/utils/anchorCallback'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { CampaignRule2067 } from '@components/include/campaign/rules/2023/CampaignRule2067'

const Kv = styled.div`
  background: #dff0ec;
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
const CustomDescriptionListDefault = styled(DescriptionListDefault)`
  dt {
    display: flex;
    align-items: center;
  }
`
const AnchorArea = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    margin-top: 40px;
  }
`
const CampaignList = styled.ul`
  display: grid;
  gap: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 20px;
  }
  > li {
    border: 1px solid ${props => props.theme.colors.monotone75};
    background: ${props => props.theme.colors.monotone97};
    ${mixins.mq.MinL} {
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
        background: url(${assets}img/campaign/replacement-warranty-sim//icon-plus.png)
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
  gap: 16px;
  align-items: center;
  padding: 22px 16px 24px 20px;
  background: ${props => props.theme.colors.white};
  > div:first-child {
    flex-shrink: 0;
  }
`
const CustomUlOnly = styled(UlOnly)`
  > li {
    margin-top: 4px;
  }
`
const CustomAccordionEmpStep = styled(AccordionEmpStep)`
  font-size: 26px;
  line-height: 1.16;
  ${mixins.mq.MaxM} {
    font-size: ${props => props.theme.fonts.base};
  }
`
const CampaignListBody = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 16px 20px;
`
const GrayBox = styled.div`
  padding: 48px 0;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 32px 0;
  }
`
const InsuranceWrap = styled.div`
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`
const InsuranceFlex = styled.div`
  display: flex;
  gap: 16px 24px;
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    flex-flow: column;
  }
`
const FlexFlowbtn = styled.div`
  display: flex;
  gap: 16px 24px;
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    flex-flow: column;
  }
`
const CustomButtonPrimaryWrap = styled.div`
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    text-align: center;
    margin-top: 16px;
  }
  > a {
    ${mixins.mq.MinL} {
      max-width: 412px;
    }
  }
`
const CustomMediaGrid = styled(MediaGrid)`
  align-items: center;
`
const CustomInfoboxBorder = styled(InfoboxBorder)`
  position: relative;
  margin-top: 50px;
  &::before {
    position: absolute;
    content: '';
    width: 70px;
    height: 18px;
    background: url(${assets}img/campaign/replacement-warranty-sim/icon-polygon.png)
      no-repeat;
    background-size: contain;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
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
const FlowRexCeb = styled.div`
  ${mixins.mq.MinL} {
    div {
      text-align: left;
    }
  }
`

const CampaignReplacementWarrantySim: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '持ち込みスマホあんしん保証1カ月利用料相当ポイント還元キャンペーン'
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
      { text: 'エントリー必要', isEmp: false, isBold: true },
      { text: 'プランのみ申込可', isEmp: false, isBold: true },
    ],
  }

  const scriptLoad1 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    const scriptFunction = document.createTextNode(`
window.rexButtons = {language: 'ja', buttons: [{"code":"/rmobile/replacementwarranty/231005","theme":"red","wide":true,"showCelebration":false,"alreadyAppliedText":"エントリー済みです","ids":["rex-ceb-01","rex-ceb-02","rex-ceb-03"]}]}
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

  useEffect(() => {
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
        description="プランのお申し込みと、「持ち込みスマホあんしん保証」のオプションサービス加入で1,309円相当分をポイント還元！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <SystemContainer>
          <LabelListBox>
            <LabelList {...labelArgs} />
            <TxtSize as="p" size="s">
              <TxtEmp01>
                ポイント：付与日を含めて6カ月の期間限定ポイント
              </TxtEmp01>
            </TxtSize>
          </LabelListBox>
        </SystemContainer>

        <Kv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/replacement-warranty-sim/kv-sp.png`}
                width="834"
                height="1023"
              />
              <img
                src={`${assets}img/campaign/replacement-warranty-sim/kv-pc.png`}
                width="1040"
                height="300"
                alt="持ち込みスマホあんしん保証 プランお申し込み＆オプション(月額最大1,309円)加入で※2 1,309ポイント還元 実質1カ月無料※1 ※プラン契約者でも開通から30日以内は対象、他条件あり。"
              />
            </picture>
          </h1>
        </Kv>

        <SystemContainer>
          <TxtCap as="ul" className={Utils['Mt-8']}>
            <li>
              ※1
              1回限り、要エントリー等条件あり。期間限定ポイントを2024年4月末日ごろに進呈。ポイントは付与日を含めて6カ月の期間限定ポイント。
            </li>
            <li>
              ※2
              保証対象製品をお持ちの方が対象。オプションに加入できるのは、SIMのみでプランお申し込み時、もしくは回線開通日から30日以内。
            </li>
            <li>
              ※「実質価格」とは、キャンペーンの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。詳しくは
              <LinkNormal
                href="#campaign-rule2067"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2067')
                }
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </li>
          </TxtCap>
          <div className={Utils['Align-center']}>
          <TxtEmp02 as="p" className={Utils['Mt-24']}>
            <TxtSize size="m">
              本キャンペーンは2023年11月30日（木）をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>
          <LinkIconAfter href="/campaign/?l-id=end_campaign" className={Utils['Align-center']}>
            開催中のキャンペーンを見る
            <IconChevronRight className={Utils['Ml-16']} />
          </LinkIconAfter>
          </div>

          <CustomDescriptionListDefault
            className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
          >
            <div>
              <dt>エントリー期間</dt>
              <dd>2023年11月1日（水）9:00～2023年11月30日（木）23:59</dd>
            </div>
            <div>
              <dt>オプションの加入期間</dt>
              <dd>
                Web：2023年11月1日（水）9:00～2023年11月30日（木）23:59
                <br />
                ショップ：2023年11月1日（水）開店～2023年11月30日（木）閉店
              </dd>
            </div>
          </CustomDescriptionListDefault>
  {/*
          <OverWriteRexCeb
            className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
          >
            <div id="rex-ceb-01" className="campaign-Rexoverwrite"></div>
          </OverWriteRexCeb>
  */}
          <AnchorArea>
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
                href="#insurance"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'insurance')
                }
              >
                <IconArrowDown />
                持ち込みスマホあんしん保証とは
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#campaign-flow"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-flow')
                }
              >
                <IconArrowDown />
                キャンペーンの流れ
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#faq"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'faq')
                }
              >
                <IconArrowDown />
                よくあるご質問
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#campaign-rule2067"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2067')
                }
              >
                <IconArrowDown />
                キャンペーンルール
              </LinkIconBefore>
            </li>
          </AnchorArea>

          <section className={Utils['Mt-64']}>
            <div className={Utils['Align-center']}>
              <Heading level="2" id="conditions">
                キャンペーンの達成条件
              </Heading>
              <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
                本キャンペーンには達成条件が設定されています。詳細は
                <LinkNormal
                  href="#campaign-rule2067"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-rule2067')
                  }
                >
                  キャンペーンルール
                </LinkNormal>
                をご確認ください。
              </p>
            </div>
            <CampaignList className={Utils['Mt-16']}>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/replacement-warranty-sim/icon-campaign-01.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    このページから
                    <br />
                    エントリー
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <p>期間内であれば順序は問いません。</p>
                </CampaignListBody>
              </li>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/replacement-warranty-sim/icon-campaign-02.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    プランをご契約中
                    <br />
                    または新規お申し込み
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <p>
                    期限までに、開通手続きをしてプランのご利用を開始してください。
                  </p>
                </CampaignListBody>
              </li>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/replacement-warranty-sim/icon-campaign-03.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    <TxtEmp02>
                      持ち込みスマホあんしん
                      <br className={Utils['Show-oxx']} />
                      保証
                    </TxtEmp02>
                    に加入
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <TxtCap as="p">
                    ※
                    <LinkNormal href="/service/replacement-warranty-sim/price-list/?l-id=campaign_replacement-warranty-sim_service_replacement-warranty-sim_price-list_1">
                      保証対象製品
                    </LinkNormal>
                    をお持ちの方が対象となります。
                    <br />
                    ※回線開通日から30日以内にオンラインで加入手続きと保証対象製品を登録してください。登録はオプション加入期間内に完了してください。
                  </TxtCap>
                </CampaignListBody>
              </li>
            </CampaignList>
          </section>
        </SystemContainer>

        <GrayBox className={`${Utils['Mt-64']} ${Utils['Mt-pc-72']}`}>
          <SystemContainer>
            <InsuranceWrap>
              <Heading
                level="3"
                id="insurance"
                className={Utils['Align-center']}
              >
                持ち込みスマホあんしん保証とは
              </Heading>
              <InsuranceFlex>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/campaign/replacement-warranty-sim/icon-insurance.png`}
                    alt=""
                    width={368}
                    height={195}
                  />
                </div>
                <div>
                  <p>
                    すでにお持ちの楽天回線対応製品の故障・破損・水没を保証するサービス
                  </p>
                  <div className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
                    <TxtSize size="m" className={Utils['Weight-bold']}>
                      <AlphanumericSize size="m">715</AlphanumericSize>円～
                      <AlphanumericSize size="m">1,309</AlphanumericSize>円／月
                    </TxtSize>
                  </div>
                  <TxtCap as="ul" className={Utils['Mt-8']}>
                    <li>
                      ※
                      <LinkNormal href="/service/replacement-warranty-sim/price-list/?l-id=campaign_replacement-warranty-sim_service_replacement-warranty-sim_price-list_2">
                        保証対象製品
                      </LinkNormal>
                      をお持ちの方が対象となります。
                    </li>
                    <li>
                      ※加入できるのは、SIMのみでプランお申し込み時、もしくは回線開通日から30日以内。
                    </li>
                    <li>※表記の金額はすべて税込です。</li>
                  </TxtCap>
                </div>
              </InsuranceFlex>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <ButtonRegularLarge
                  as="a"
                  href="/service/replacement-warranty-sim/?l-id=campaign_replacement-warranty-sim_service_replacement-warranty-sim"
                >
                  サービス詳細を見る
                </ButtonRegularLarge>
              </div>
            </InsuranceWrap>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <div className={Utils['Mt-64']}>
            <Heading
              level="2"
              id="campaign-flow"
              className={Utils['Align-center']}
            >
              キャンペーンの流れ
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={'新規お申し込みの方'}
              id1="tab1"
              id2="tab2"
              content1={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP1</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          キャンペーンへのエントリー
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <MediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-01.png`}
                          width="311"
                          height="175"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>【エントリー期間】</TxtEmp01>
                          <br />
                          2023年11月1日（水）9:00～2023年11月30日（木）23:59
                        </p>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          <TxtEmp02>
                            ※期間内であれば、STEP 1の順序は問いません。
                          </TxtEmp02>
                        </TxtCap>
  {/*
                        <OverWriteRexCeb className={Utils['Mt-24']}>
                          <FlowRexCeb
                            id="rex-ceb-02"
                            className="campaign-Rexoverwrite"
                          ></FlowRexCeb>
                        </OverWriteRexCeb>
  */}
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>
                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP2</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          楽天モバイルのお申し込み
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <MediaGrid>
                      <div>
                        <MediaImage>
                          <p
                            className={`${Utils['Align-left']} ${Utils['Show-oox']}`}
                          >
                            エントリー期間前にプラン申し込みした方も、キャンペーン対象になります。
                          </p>
                          <img
                            src={`${assets}img/campaign/replacement-warranty-sim/img-flow-02.png`}
                            width="311"
                            height="185"
                            alt=""
                          />
                        </MediaImage>
                      </div>
                      <div>
                        <p className={Utils['Show-xxo']}>
                          エントリー期間前にプラン申し込みした方も、キャンペーン対象になります。
                        </p>
                        <Heading
                          level="4"
                          className={`${Utils['Mt-0']} ${Utils['Mt-pc-16']}`}
                        >
                          お申し込みに必要なもの
                        </Heading>
                        <CustomUlOnly className={Utils['Mt-16']}>
                          <li>
                            <LinkIconAfter href="/guide/verify/?l-id=campaign_replacement-warranty-sim_guide_verify">
                              本人確認書類
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                          <li>楽天ID、パスワード</li>
                          <li>
                            <LinkIconAfter href="/guide/payment/?l-id=campaign_replacement-warranty-sim_guide_payment">
                              クレジットカード、銀行口座情報
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                        </CustomUlOnly>
                        <TxtCap as="ul" className={Utils['Mt-8']}>
                          <li>
                            ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                            <LinkNormal href="/guide/mnp/?l-id=campaign_replacement-warranty-sim_guide_mnp">
                              こちら
                            </LinkNormal>
                            からご確認ください。
                          </li>
                          <li>
                            ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、ご来店ください。
                          </li>
                          <li>
                            <LinkNormal href="/flow/for-minors/?l-id=campaign_replacement-warranty-sim_flow_for-minors">
                              ※未成年の方のお申し込み方法はこちら
                            </LinkNormal>
                          </li>
                        </TxtCap>
                      </div>
                    </MediaGrid>
                    <MediaGridHalf
                      className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
                    >
                      <InfoboxBorder>
                        <Heading level="4" className={Utils['Align-center']}>
                          Webからお申し込み
                        </Heading>
                        <div
                          className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                        >
                          <ButtonPrimaryLarge
                            as="a"
                            href="/guide/application/?l-id=campaign_replacement-warranty-sim_guide_application"
                          >
                            Rakuten最強プランに
                            <br className={Utils['Show-oxx']} />
                            申し込む
                          </ButtonPrimaryLarge>
                        </div>
                        <AnchorArea className={Utils['Mt-24']}>
                          <li>
                            <LinkIconAfter href="/fee/saikyo-plan/?l-id=campaign_replacement-warranty-sim_fee_saikyo-plan">
                              プラン詳細
                              <IconChevronRight />
                            </LinkIconAfter>
                          </li>
                          <li>
                            <LinkIconAfter href="/guide/flow/application/?l-id=campaign_replacement-warranty-sim_guide_flow_application">
                              お申し込み方法
                              <IconChevronRight />
                            </LinkIconAfter>
                          </li>
                        </AnchorArea>
                      </InfoboxBorder>
                      <InfoboxBorder>
                        <Heading level="4" className={Utils['Align-center']}>
                          ショップでお申し込み
                        </Heading>
                        <div
                          className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                        >
                          <ButtonSecondaryLarge
                            as="a"
                            href="/shop/?l-id=campaign_replacement-warranty-sim_shop"
                          >
                            お近くのショップを探す
                          </ButtonSecondaryLarge>
                        </div>
                      </InfoboxBorder>
                    </MediaGridHalf>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP3</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          持ち込みスマホあんしん保証に加入する
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <MediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-03.png`}
                          width="311"
                          height="165"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          オプション加入期間内にプラン申し込みと同時に加入してください。
                          <TxtCap>※</TxtCap>
                        </p>
                        <TxtCap as="ul" className={Utils['Mt-8']}>
                          <li>
                            ※
                            <LinkNormal href="/service/replacement-warranty-sim/price-list/?l-id=campaign_replacement-warranty-sim_service_replacement-warranty-sim_price-list_3">
                              保証対象製品
                            </LinkNormal>
                            をお持ちの方が対象となります。
                          </li>
                          <li>
                            ※プラン申し込み後でも「my
                            楽天モバイル」より加入いただけます。回線開通日から30日以内にオンラインで加入手続きと保証対象製品を登録してください。オプションの加入期間内に登録を完了した方がポイント付与対象となります。
                          </li>
                        </TxtCap>
                        <p className={Utils['Mt-16']}>
                          <TxtEmp01>【オプションの加入期間】</TxtEmp01>
                          <br />
                          Web：2023年11月1日（水）9:00～2023年11月30日（木）23:59
                          <br />
                          ショップ：2023年11月1日（水）開店～2023年11月30日（木）閉店
                        </p>
                        <CustomButtonPrimaryWrap>
                          <ButtonPrimaryLarge
                            as="a"
                            href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                          >
                            オプションお申し込みはこちら
                          </ButtonPrimaryLarge>
                        </CustomButtonPrimaryWrap>
                        <FlexFlowbtn>
                          <ButtonRegular
                            as="a"
                            href="/guide/replacement-warranty-sim/application/?l-id=campaign_replacement-warranty-sim_guide_replacement-warranty-sim_application_1"
                          >
                            お申し込み方法を見る
                          </ButtonRegular>
                          <ButtonRegular
                            as="a"
                            href="/guide/replacement-warranty-sim/?l-id=campaign_replacement-warranty-sim_guide_replacement-warranty-sim_1"
                          >
                            ご利用方法を見る
                          </ButtonRegular>
                        </FlexFlowbtn>
                        <p className={Utils['Mt-16']}>
                          <LinkIconBefore
                            href="#insurance"
                            onClick={(
                              e: React.MouseEvent<HTMLElement, MouseEvent>,
                            ) => anchorCallback(e, 'insurance')}
                          >
                            <IconArrowUp />
                            持ち込みスマホあんしん保証とは
                          </LinkIconBefore>
                        </p>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP4</CustomAccordionEmpStep>
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
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-04.png`}
                          width="311"
                          height="171"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>【期限】</TxtEmp01>
                          <br />
                          2023年11月30日（木）23:59まで
                        </p>
                        <div className={Utils['Mt-24']}>
                          <ButtonRegular
                            as="a"
                            href="/faq/detail/00001648/?l-id=campaign_replacement-warranty-sim_faq_detail_00001648"
                          >
                            プラン利用開始手順
                          </ButtonRegular>
                        </div>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <CustomInfoboxBorder>
                    <CustomMediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-05.png`}
                          width="304"
                          height="144"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <TxtSize as="p" size="ll">
                          <TxtEmp02>1,309円相当のポイント還元！</TxtEmp02>
                        </TxtSize>
                        <TxtCap className={Utils['Mt-8']}>
                          ※ポイントは付与日を含めて6カ月の期間限定ポイントとなります。
                        </TxtCap>
                      </div>
                    </CustomMediaGrid>
                  </CustomInfoboxBorder>
                </>
              }
              heading2={'プランご契約中の方'}
              content2={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP1</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          キャンペーンへのエントリー
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <MediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-01.png`}
                          width="304"
                          height="151"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>【エントリー期間】</TxtEmp01>
                          <br />
                          2023年11月1日（水）9:00～2023年11月30日（木）23:59
                        </p>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          <TxtEmp02>
                            ※期間内であれば、STEP 1、2の順序は問いません。
                          </TxtEmp02>
                        </TxtCap>
  {/*
                        <OverWriteRexCeb
                          className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                        >
                          <FlowRexCeb
                            id="rex-ceb-03"
                            className="campaign-Rexoverwrite"
                          ></FlowRexCeb>
                        </OverWriteRexCeb>
  */}
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP2</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          持ち込みスマホあんしん保証に加入する
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <MediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-03.png`}
                          width="304"
                          height="134"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          オプション加入期間内に加入してください。
                          <TxtCap>※</TxtCap>
                        </p>
                        <TxtCap as="ul" className={Utils['Mt-8']}>
                          <li>
                            ※
                            <LinkNormal href="/service/replacement-warranty-sim/price-list/?l-id=campaign_replacement-warranty-sim_service_replacement-warranty-sim_price-list_4">
                              保証対象製品
                            </LinkNormal>
                            をお持ちの方が対象となります。
                          </li>
                          <li>
                            ※「my
                            楽天モバイル」より加入いただけます。回線開通日から30日以内にオンラインで加入手続きと保証対象製品を登録してください。オプションの加入期間内に登録を完了した方がポイント付与対象となります。
                          </li>
                        </TxtCap>
                        <p className={Utils['Mt-16']}>
                          <TxtEmp01>【オプションの加入期間】</TxtEmp01>
                          <br />
                          Web：2023年11月1日（水）9:00～2023年11月30日（木）23:59
                          <br />
                          ショップ：2023年11月1日（水）開店～2023年11月30日（木）閉店
                        </p>
                        <CustomButtonPrimaryWrap>
                          <ButtonPrimaryLarge
                            as="a"
                            href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                          >
                            オプションお申し込みはこちら
                          </ButtonPrimaryLarge>
                        </CustomButtonPrimaryWrap>
                        <FlexFlowbtn>
                          <ButtonRegular
                            as="a"
                            href="/guide/replacement-warranty-sim/application/?l-id=campaign_replacement-warranty-sim_guide_replacement-warranty-sim_application_2"
                          >
                            お申し込み方法を見る
                          </ButtonRegular>
                          <ButtonRegular
                            as="a"
                            href="/guide/replacement-warranty-sim/?l-id=campaign_replacement-warranty-sim_guide_replacement-warranty-sim_2"
                          >
                            ご利用方法を見る
                          </ButtonRegular>
                        </FlexFlowbtn>
                        <p className={Utils['Mt-16']}>
                          <LinkIconBefore
                            href="#insurance"
                            onClick={(
                              e: React.MouseEvent<HTMLElement, MouseEvent>,
                            ) => anchorCallback(e, 'insurance')}
                          >
                            <IconArrowUp />
                            持ち込みスマホあんしん保証とは
                          </LinkIconBefore>
                        </p>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <CustomInfoboxBorder>
                    <CustomMediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/replacement-warranty-sim/img-flow-05.png`}
                          width="304"
                          height="144"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <TxtSize as="p" size="ll">
                          <TxtEmp02>1,309円相当のポイント還元！</TxtEmp02>
                        </TxtSize>
                        <TxtCap className={Utils['Mt-8']}>
                          ※ポイントは付与日を含めて6カ月の期間限定ポイントとなります。
                        </TxtCap>
                      </div>
                    </CustomMediaGrid>
                  </CustomInfoboxBorder>
                </>
              }
            />
          </div>

          <div className={Utils['Mt-64']}>
            <Heading level="2" id="faq" className={Utils['Align-center']}>
              よくあるご質問
            </Heading>
            <AccordionList
              text={'エントリーされているか、どこで確認できますか？'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                エントリーされた場合、本キャンペーンページのエントリーボタンが「エントリー済みです」と表示されます。
                <br />
                また、楽天PointClubの「
                <LinkNormal href="https://oubo.rakuten.co.jp/list">
                  キャンペーンエントリー履歴
                </LinkNormal>
                」から確認することができます。
              </p>
            </AccordionList>
            <AccordionList
              text={
                ' キャンペーン期間内に楽天モバイルに申し込みができているか、確認方法はありますか？'
              }
              isOpened={false}
            >
              <p>
                以下2種類の方法があります。
                <br />
                ①お申し込み完了メールを確認する
                <br />
                ②「
                <LinkNormal href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile">
                  my 楽天モバイル
                </LinkNormal>
                」の申し込み履歴から確認する
                <br />
                詳しい手順は
                <LinkNormal href="/faq/detail/00001827/?l-id=campaign_replacement-warranty-sim_faq_detail_00001827">
                  こちら
                </LinkNormal>
                からもご確認いただけます。
              </p>
            </AccordionList>
            <AccordionList
              text={'ポイントの付与はいつになりますか？'}
              isOpened={false}
            >
              <p>
                2024年4月末日ごろに楽天モバイルにご登録の楽天IDにポイントを付与いたします。
                <br />
                付与されたポイントは楽天PointClubの「
                <LinkNormal href="https://point.rakuten.co.jp/history/">
                  ポイント実績
                </LinkNormal>
                」から確認することができます。
              </p>
            </AccordionList>
          </div>


          <div className={Utils['Mt-64']}>
          <div className={Utils['Align-center']}>
          <TxtEmp02 as="p" className={Utils['Mt-24']}>
            <TxtSize size="m">
              本キャンペーンは2023年11月30日（木）をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>
          <LinkIconAfter href="/campaign/?l-id=end_campaign">
            開催中のキャンペーンを見る
            <IconChevronRight className={Utils['Ml-16']} />
          </LinkIconAfter>
          </div>

            <Heading level="2" id="campaign-rule2067" className={Utils['Mt-24']}>
              持ち込みスマホあんしん保証1カ月利用料相当ポイント還元キャンペーン
            </Heading>
            <CampaignRule2067 />
          </div>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignReplacementWarrantySim
