import type { NextPage } from 'next'
import React, { useContext, useEffect, useRef } from 'react'
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
import { AccordionList } from '@components/atoms/AccordionList'
import {
  ButtonRegular,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
  ButtonPrimary,
  ButtonSecondary,
} from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { BannerHover } from '@components/atoms/Banner'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CampaignRule2091 } from '@components/include/campaign/rules/2023/CampaignRule2091'
import { CustomCtaBottomFixed } from '@components/include/common/CustomCtaBottomFixed'
import {
  CampaignMnpAnchorList,
  CampaignMnpAnchorProps,
} from '@components/fragment/campaign/mnp/Anchor'
import { Divider } from '@components/atoms/Divider'
import {
  CpnStepListProps,
  CampaignMnpStepListList,
} from '@components/fragment/campaign/mnp/StepList'
import { IconChevronRight } from '@components/icons'

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
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.primary} 0,
      ${props => props.theme.colors.primary} 229px,
      #fffee8 230px,
      #fffee8 300px
    );
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`
const Col2 = styled.div`
  display: flex;
  gap: 16px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    align-items: center;
  }
`
const Cta2col = styled(Col2)`
  justify-content: center;
  ${ButtonPrimary}, ${ButtonSecondary} {
    max-width: 400px;
    width: 100%;
  }
`
const Appeal = styled.div`
  background-color: ${props => props.theme.colors.pink5};
  padding: 0 16px 32px;
  ${mixins.mq.MaxM} {
    padding: 0 0 32px;
  }
`
const HeadingCustom = styled(Heading)`
  position: relative;
  top: -20px;
  margin-bottom: -20px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`
const TxtAppeal = styled.p`
  margin-top: 24px;
  background-color: ${props => props.theme.colors.white};
  padding: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 8px;
`
const MnpFlow = styled.div`
  margin-top: 24px;
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.white};
`
const MnpFlowHead = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    width: 32px;
    height: 16px;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
    background-color: ${props => props.theme.colors.monotone75};
  }
  &::after {
    background-color: ${props => props.theme.colors.white};
    width: 30px;
    height: 16px;
    bottom: -15px;
  }
`
const MnpFlowCol = styled.ul`
  display: flex;
  margin-top: 16px;
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
    background: url(${assets}img/campaign/mnp/icon-arrow.png) 0 0 / contain
      no-repeat;
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
const CustomTxtEmp01 = styled(TxtEmp01)`
  position: relative;
  display: inline-block;
  margin-left: 36px;
  margin-right: 18px;
  font-size: ${props => props.theme.fonts.m};
  ${mixins.mq.MaxM} {
    margin-bottom: 12px;
    margin-right: 0;
  }
  &::before {
    content: '';
    position: absolute;
    background: url(${assets}img/campaign/mnp/icon-calendar.png) center /
      contain no-repeat;
    width: 32px;
    height: 32px;
    z-index: 1;
    left: -36px;
    top: 50%;
    transform: translateY(-50%);
  }
`
const CpnStepPoint = styled.div`
  position: relative;
  margin-top: 40px;
  &::before {
    content: '';
    position: absolute;
    background: url(${assets}img/campaign/mnp/icon-polygon.svg) center / contain
      no-repeat;
    width: 78px;
    height: 24px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    ${mixins.mq.MaxM} {
      width: 72px;
      height: 20px;
    }
  }
`

const anchorList: CampaignMnpAnchorProps[] = [
  {
    href: 'conditions',
    text: ' キャンペーン参加方法',
    ratid: 'campaign_mnp_index-flow_b',
  },
  {
    href: 'use',
    text: '乗り換え方法について',
    ratid: 'campaign_mnp_index-content_b',
  },
  {
    href: 'campaign-rule2091',
    text: 'キャンペーンルール',
    ratid: 'campaign_mnp_index-rule_b',
  },
]

const stepList: CpnStepListProps[] = [
  {
    ttl: '楽天モバイルお申し込み',
    text: (
      <>
        <div>
          <p>
            「他社から電話番号そのまま乗り換え」で「Rakuten最強プランに初めてお申し込みの方」が対象。
            <br />
            Web、または楽天モバイルショップでお申し込み。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※「Rakuten最強プラン（データタイプ）」は対象外
            <br className={Utils['Show-oox']} /> ※ 楽天モバイル公式
            楽天市場店は対象外
          </TxtCap>
        </div>
        <Col2>
          <ButtonPrimary
            as="a"
            href="/guide/application/?lid-r=campaign_mnp_guide_application02_b"
          >
            乗り換え（MNP）お申し込み
          </ButtonPrimary>
          <ButtonRegular
            href="/guide/procedure/?l-id=campaign_mnp_guide_procedure_b"
            as="a"
          >
            お申し込み方法を確認する
          </ButtonRegular>
        </Col2>
      </>
    ),
  },
  {
    ttl: 'プランの利用開始',
    text: (
      <>
        <p>お申し込みの翌月末日23:59まで。</p>
        <div>
          <LinkIconAfter href="/faq/detail/00001648/?l-id=campaign_mnp_faq_detail_00001648_b">
            プランの利用開始手順を確認する
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </>
    ),
  },
  {
    ttl: 'Rakuten Linkアプリの利用',
    text: (
      <>
        <div>
          <p>
            お申し込みの翌月末日23:59までに、Rakuten
            Linkアプリから発信で10秒以上通話。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※電話の発信時、（0570）などから始まる他社接続サービス、一部特番（188）への通話は特典対象外
          </TxtCap>
        </div>
        <div>
          <LinkIconAfter href="/service/rakuten-link/?l-id=campaign_mnp_service_rakuten-link_b">
            Rakuten Linkアプリとは
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </>
    ),
  },
]

const CampaignMnpb: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '電話番号もそのまま他社から乗り換え＆初めてお申し込みでポイントプレゼント! '
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
      { text: '初めて申込限定', isEmp: false },
      { text: 'Rakuten Link利用必要', isEmp: false },
      { text: '他社から乗換限定', isEmp: false },
    ],
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  // PITARI ABテスト
  useEffect(() => {
    const phoenixTrackerScript = document.createElement('script')
    phoenixTrackerScript.src =
      'https://r.r10s.jp/com/ap/target/phoenix-tracker-3.2.2.min.js'
    document.head.appendChild(phoenixTrackerScript)
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="電話番号もそのまま他社から乗り換え＆初めてお申し込みでポイントプレゼント!お持ちのスマホそのままで楽天モバイルをご利用できます！"
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
                srcSet={`${assets}img/campaign/mnp/kv-sp-240315.png`}
                width="834"
                height="734"
              />
              <img
                src={`${assets}img/campaign/mnp/kv-pc-240315.png`}
                width="1440"
                height="300"
                alt={`スマホそのまま乗り換え！電話番号もそのまま他社から乗り換え＆初めてお申し込みで6,000ポイントプレゼント!データ3GB（税込1,078円）x5カ月分がポイント還元で実質5カ月無料！`}
              />
            </picture>
          </h1>
        </KvHeading>

        <SystemContainer>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ 予告なく特典内容の変更、キャンペーンの中止を行う可能性がございます
            <br />
            <TxtEmp02 as="span">
              ※
              「実質価格」とは、キャンペーン条件達成により後日付与されるポイント・楽天キャッシュを加味した価格であり、実際の支払い金額とは異なります。詳しくはキャンペーンルールをご確認ください
            </TxtEmp02>
            <br />※
            お持ちの製品によって一部機能が利用できない場合があります。詳しくは
            <LinkNormal href="/product/byod/?l-id=campaign_mnp_product_byod_b">
              こちら
            </LinkNormal>
            をご確認ください
            <br />
            ※「Rakuten最強プラン」利用開始及びRakuten
            Linkの利用が確認された月の翌々月末日ごろから3カ月にわたってポイント付与、ポイント有効期間はポイント付与日を含めて3カ月となります
            <br />※ 対象プラン、Rakuten Link利用等条件がございます
          </TxtCap>

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <BannerHover href="/campaign/new-application/?l-id=campaign_mnp_campaign_new-application_b">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/mnp/bnr-mnp-2000point-343-108.png`}
                  width="343"
                  height="108"
                />
                <img
                  src={`${assets}img/campaign/mnp/bnr-mnp-2000point-1032-78.png`}
                  width="1032"
                  height="78"
                  alt="楽天モバイルへ初めてお申し込みで2,000ポイント還元!"
                  loading="lazy"
                />
              </picture>
            </BannerHover>
          </div>

          <div className={`${Utils['Align-center']}`} ref={scrollTrigger}>
            <p
              className={`${Utils['Mt-24']} ${Utils['Mt-pc-40']}`}
              data-ratid="campaign_mnp_scroll-01_schedule_b"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <CustomTxtEmp01>キャンペーン期間</CustomTxtEmp01>
              <br className={Utils['Show-oox']} />
              2023年11月1日（水）0:00 ～ 終了日未定
            </p>
          </div>

          <Cta2col className={`${Utils['Mt-32']} ${Utils['Mt-pc-24']}`}>
            <ButtonPrimary
              as="a"
              href="/guide/application/?lid-r=campaign_mnp_guide_application01_b"
            >
              乗り換え（MNP）お申し込み
            </ButtonPrimary>
            <ButtonSecondary href="/shop/?l-id=campaign_mnp_shop01_b" as="a">
              お近くのショップを探す・来店予約
            </ButtonSecondary>
          </Cta2col>
          <Divider className={Utils['Mt-32']} />
          <nav className={Utils['Mt-32']}>
            <CampaignMnpAnchorList props={anchorList} />
          </nav>

          <section className={`${Utils['Mt-48']} ${Utils['Mt-pc-56']}`}>
            <div
              className={Utils['Align-center']}
              id="conditions"
              data-ratid="campaign_mnp_scroll-02_campaign-flow-01_b"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <p>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/mnp/campaign-3step-sp.png`}
                    width="182"
                    height="32"
                  />
                  <img
                    src={`${assets}img/campaign/mnp/campaign-3step-pc.png`}
                    width="206"
                    height="36"
                    alt="かんたん！3ステップ"
                    loading="lazy"
                  />
                </picture>
              </p>
              <Heading level="2">キャンペーン参加方法</Heading>
            </div>
            <CampaignMnpStepListList props={stepList} />
            <CpnStepPoint>
              <h3
                className={Utils['Align-center']}
                data-ratid="campaign_mnp_scroll-03_campaign-flow-02_b"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/mnp/img-6000point-sp.png`}
                    width="326"
                    height="88"
                  />
                  <img
                    src={`${assets}img/campaign/mnp/img-6000point-pc.png`}
                    width="758"
                    height="86"
                    alt="6,000ポイントプレゼント！"
                    loading="lazy"
                  />
                </picture>
              </h3>
              <p
                className={`${Utils['Align-llc']} ${Utils['Mt-16']} ${Utils['Mt-pc-8']}`}
              >
                Rakuten Link
                ご利用の翌々月末日頃に、期間限定ポイントとして6,000ポイントを付与いたします。
              </p>
            </CpnStepPoint>
            <TxtCap as="ul" className={`${Utils['Mt-8']} ${Utils['Mt-pc-24']}`}>
              <li>
                ※併用ができないキャンペーンがあります。
                <LinkNormal
                  href="#campaign-rule2091"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-rule2091')
                  }
                  data-ratid="campaign_mnp_index-rule-01_b"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  詳しくはこちら
                </LinkNormal>
              </li>
              <li>
                ※キャンペーン条件達成が確認された月の翌々月末日ごろから3カ月にわたって進呈。ポイント有効期間はポイント付与日を含めて3カ月
              </li>
            </TxtCap>
          </section>
        </SystemContainer>
        <Appeal className={`${Utils['Mt-56']} ${Utils['Mt-pc-80']}`}>
          <SystemContainer>
            <section className={Utils['Mt-48']}>
              <HeadingCustom
                level="2"
                className={Utils['Align-center']}
                id="use"
                ratId="campaign_mnp_scroll-04_mnp-content_b"
                ratEvent="appear"
              >
                <img
                  src={`${assets}img/campaign/mnp/txt-fukidashi.png`}
                  width="351"
                  height="111"
                  alt="楽天モバイルのSIM交換で"
                  loading="lazy"
                />
                <br />
                お持ちのスマホを
                <br className={Utils['Show-oox']} />
                そのままご利用できます！
              </HeadingCustom>
              <div
                className={`${Utils['Align-center']} ${Utils['Mt-24']} ${Utils['Mt-sp-16']}`}
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/mnp/image-sim-sp.png`}
                    width="620"
                    height="311"
                  />
                  <img
                    src={`${assets}img/campaign/mnp/image-sim-pc.png`}
                    width="351"
                    height="155"
                    alt="eSIMイメージ"
                    loading="lazy"
                  />
                </picture>
              </div>
              <p className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}>
                いまお使いのスマートフォンのSIMを楽天モバイルのSIMに交換することで、
                <br />
                楽天モバイルの「Rakuten最強プラン」のご利用が可能になります。
              </p>

              <MnpFlow className={Utils['Mt-32']}>
                <MnpFlowHead className={Utils['Align-center']}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/mnp/mnp-flow-01-sp.png`}
                      width="622"
                      height="675"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/mnp-flow-01-pc.png`}
                      width="1000"
                      height="251"
                      alt="乗り換えって面倒？忙しくてショップに行く時間がない 調べたり、用意したり。準備が面倒… 手数料はいくらかかるんだろう？ オンラインは手間が多そう…"
                      loading="lazy"
                    />
                  </picture>
                </MnpFlowHead>
                <h3 className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                  <img
                    src={`${assets}img/campaign/mnp/mnp-flow-02.png`}
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
                        srcSet={`${assets}img/campaign/mnp/mnp-flow-02-1-sp.png`}
                        width="558"
                        height="349"
                      />
                      <img
                        src={`${assets}img/campaign/mnp/mnp-flow-02-1-pc.png`}
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
                        srcSet={`${assets}img/campaign/mnp/mnp-flow-02-2-sp.png`}
                        width="597"
                        height="349"
                      />
                      <img
                        src={`${assets}img/campaign/mnp/mnp-flow-02-2-pc.png`}
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
                  <li>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/mnp/mnp-flow-02-3-sp-231127.png`}
                        width="558"
                        height="349"
                      />
                      <img
                        src={`${assets}img/campaign/mnp/mnp-flow-02-3-pc-231127.png`}
                        width="302"
                        height="175"
                        alt="お使いの電話番号もかんたん引き継ぎ"
                        loading="lazy"
                      />
                    </picture>
                    <p className={Utils['Mt-16']}>
                      電話番号だけでなく、携帯電話のメール
                      <br />
                      がそのまま楽天モバイルで使える！
                      <TxtCapCustom>*3</TxtCapCustom>
                    </p>
                  </li>
                </MnpFlowCol>
                <MnpFlowLast>
                  <div>
                    <img
                      src={`${assets}img/campaign/mnp/mnp-flow-03.png`}
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
                      <TxtCapCustom>*4</TxtCapCustom>
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
                      src={`${assets}img/campaign/mnp/mnp-flow-04.png`}
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
                          src={`${assets}img/campaign/mnp/mnp-flow-04-1.png`}
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
                      <MnpAppealImg>
                        <img
                          src={`${assets}img/campaign/mnp/mnp-flow-04-2.png`}
                          width="61"
                          height="48"
                          alt="0円"
                          loading="lazy"
                        />
                      </MnpAppealImg>
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
                      srcSet={`${assets}img/campaign/mnp/mnp-flow-05-sp.png`}
                      width="522"
                      height="771"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/mnp-flow-05-pc.png`}
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
                    href="/guide/flow/application/group/?l-id=campaign_mnp_guide_application-group_b"
                  >
                    グループアプリ経由での申し込み方法を見る
                  </ButtonRegular>
                </div>
              </MnpFlow>
              <TxtCap as="p" className={Utils['Mt-24']}>
                *1
                楽天銀行・楽天証券・楽天生命のいずれかをご契約されている場合。条件あり。
                <LinkNormal href="/guide/verify/group-kyc/?l-id=campaign_mnp_guide_verify-group-kyc_b">
                  詳しくはこちら
                </LinkNormal>
                <br />
                *2
                Webでのお申し込みのみ。MNPワンストップ未対応会社からお乗り換えの場合、MNP予約番号の取得が必要。
                <LinkNormal href="/guide/mnp/fast-convert/?l-id=campaign_mnp_guide_mnp_fast-convert_b">
                  詳しくはこちら
                </LinkNormal>
                <br />
                *3 メール持ち運びサービス330円/月{' '}
                <LinkNormal href="/cm/mail_portability/?l-id=campaign_mnp_mail_portability_b">
                  詳細はこちら
                </LinkNormal>
                <br />
                *4
                eSIM対応製品でeSIMをご利用の場合。審査状況により変動。アプリ最新版利用時
              </TxtCap>

              <Heading
                level="3"
                className={`${Utils['Align-center']} ${Utils['Mt-32']} ${Utils['Mt-sp-24']}`}
              >
                <TxtEmp02>
                  MNPワンストップでオンライン乗り換えがより簡単に！
                </TxtEmp02>
              </Heading>
              <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <BannerHover href="/guide/mnp/fast-convert/?l-id=campaign_mnp_guide_mnp_fast-convert01_b">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/bnr/bnr-fast-convert-343-108-231201.png`}
                      width="686"
                      height="216"
                    />
                    <img
                      src={`${assets}img/bnr/bnr-fast-convert-1032-160-231201.png`}
                      width="1032"
                      height="160"
                      alt="電話番号そのまま！MNP予約番号なしで乗り換えできる！MNPワンストップ  Webでの申し込みがさらに簡単に。乗り換えるなら楽天モバイル"
                      loading="lazy"
                    />
                  </picture>
                </BannerHover>
              </div>
              <TxtAppeal>
                <img
                  src={`${assets}img/campaign/mnp/icon-lamp.png`}
                  width="21"
                  height="31"
                  alt=""
                  loading="lazy"
                />
                MNPとは、今使っている電話番号を変えずに、他社の携帯電話会社に乗り換えられる制度です。
              </TxtAppeal>
            </section>
          </SystemContainer>
        </Appeal>

        <SystemContainer>
          <section className={Utils['Mt-48']}>
            <Heading
              level="2"
              className={Utils['Align-center']}
              ratId="campaign_mnp_scroll-05_faq_b"
              ratEvent="appear"
            >
              よくあるご質問
            </Heading>
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
                <LinkNormal href="/faq/detail/00001802/?l-id=campaign_mnp_faq_detail_00001802_b">
                  こちら
                </LinkNormal>
                に記載の手順でご確認ください。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'ポイント付与前に楽天のサービスを退会した場合どうなりますか'
              }
              isOpened={false}
            >
              <p>＜楽天会員を退会した場合＞</p>
              <p className={Utils['Mt-8']}>
                ポイント付与前に楽天会員を退会された場合は、ポイント付与されませんので予めご了承ください。
              </p>
              <p className={Utils['Mt-16']}>＜楽天モバイルを解約した場合＞</p>
              <p className={Utils['Mt-8']}>
                楽天モバイルを解約されていても、キャンペーンルールの「対象者・適用条件」を満たしている場合はポイント付与の対象となります。
              </p>
            </AccordionList>
          </section>

          <section
            className={Utils['Mt-48']}
            data-ratid="campaign_mnp_scroll-06_rakuten-mobile_b"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <CommonSaikyo />
          </section>
          <section className={`${Utils['Mt-40']} ${Utils['Pb-24']}`}>
            <BnrCampaignRecommend />
          </section>
          <section className={Utils['Mt-56']}>
            <Heading
              level="2"
              id="campaign-rule2091"
              ratId="campaign_mnp_scroll-07_rule_b"
              ratEvent="appear"
            >
              【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント
            </Heading>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※
              2024年2月1日（木）0:00にキャンペーン名を「【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えで6,000ポイントプレゼント」から「【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント」に変更しました
            </TxtCap>
            {/* ルールを更新する場合はこちらも→ campaign-rule-2091.ejs */}
            <CampaignRule2091 />
          </section>
        </SystemContainer>
        <CustomCtaBottomFixed scrollTrigger={scrollTrigger} item={2}>
          <>
            <ButtonPrimaryLarge
              className="custom-btn"
              href="/guide/application/?lid-r=campaign_mnp_guide_application03_b"
              as="a"
            >
              <span>
                乗り換え
                <span className={Utils['Show-xoo']}>（MNP）お申し込み</span>
                <span className={Utils['Show-oxx']}>(MNP)</span>
              </span>
            </ButtonPrimaryLarge>
            <ButtonSecondaryLarge
              className="custom-btn"
              href="/shop/?l-id=campaign_mnp_shop03_b"
              as="a"
            >
              お近くのショップを探す
              <br className={Utils['Show-oxx']} />
              ・来店予約
            </ButtonSecondaryLarge>
          </>
        </CustomCtaBottomFixed>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignMnpb
