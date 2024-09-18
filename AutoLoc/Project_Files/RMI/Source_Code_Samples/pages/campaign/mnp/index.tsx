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
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CampaignRule2091 } from '@components/include/campaign/rules/2023/CampaignRule2091'
import { CustomCtaBottomFixed } from '@components/include/common/CustomCtaBottomFixed'

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
const AnchorLink = styled.ul`
  margin-top: 32px;
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
const CpnCondition = styled.ul`
  display: flex;
  align-items: stretch;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const CpnConditionItem = styled.li`
  border: 1px solid ${props => props.theme.colors.monotone75};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &::after {
    content: '';
    position: absolute;
    background: url(${assets}img/common/icon-cpn-plus-glay.svg) center
      top/contain no-repeat;
    width: 36px;
    height: 36px;
    z-index: 1;
    ${mixins.mq.MinL} {
      right: -30px;
      top: 50%;
      transform: translateY(-50%);
    }
    ${mixins.mq.MaxM} {
      left: 50%;
      bottom: -30px;
      transform: translateX(-50%);
    }
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`
const CpnConditionTitle = styled.div`
  padding: 16px 24px 24px;
  display: flex;
  font-weight: bold;
  align-items: center;
  gap: 16px;
  height: 100%;
  .img-wrapper {
    max-width: 47.5px;
    width: 100%;
  }
`
const CpnConditionContents = styled.div`
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.monotone97};
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

const StepLastBox = styled(InfoboxBorder)`
  margin-top: 50px;
  position: relative;
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

const CampaignMnp: NextPage = () => {
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
    const handleScriptEvent = () => {
      const phoenixScript = document.createElement('script')
      phoenixScript.src = 'https://r.r10s.jp/com/ap/target/phoenix-3.2.2.min.js'
      document.head.appendChild(phoenixScript)
    }

    const conditionScript = document.createElement('script')
    conditionScript.src =
      'https://www.rakuten.co.jp/com/advance/mobile/mnpprj_mnp-cpn/responsive/condition.js'
    conditionScript.onload = handleScriptEvent
    conditionScript.onerror = handleScriptEvent
    document.head.appendChild(conditionScript)
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
                width="750"
                height="660"
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
            <LinkNormal href="/product/byod/?l-id=campaign_mnp_product_byod">
              こちら
            </LinkNormal>
            をご確認ください
            <br />
            ※「Rakuten最強プラン」利用開始及びRakuten
            Linkの利用が確認された月の翌々月末日ごろから3カ月にわたってポイント付与、ポイント有効期間はポイント付与日を含めて3カ月となります
            <br />※ 対象プラン、Rakuten Link利用等条件がございます
          </TxtCap>

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <BannerHover href="/campaign/new-application/?l-id=campaign_mnp_campaign_new-application">
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
              className={Utils['Mt-32']}
              data-ratid="campaign_mnp_scroll-01_schedule"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <TxtEmp01>【キャンペーン期間】</TxtEmp01>
              <br className={Utils['Show-oox']} />
              2023年11月1日（水）0:00 ～ 終了日未定
            </p>
          </div>
          <nav>
            <AnchorLink>
              <li>
                <LinkIconBefore
                  href="#conditions"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'conditions')
                  }
                  data-ratid="campaign_mnp_top-index-condition"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <IconArrowDown />
                  キャンペーンの達成条件
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#use"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'use')
                  }
                  data-ratid="campaign_mnp_top-index-content"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <IconArrowDown />
                  スマホそのままでのご利用について
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#flow"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'flow')
                  }
                  data-ratid="campaign_mnp_top-index-flow"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <IconArrowDown />
                  キャンペーンの流れ
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#campaign-rule2091"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-rule2091')
                  }
                  data-ratid="campaign_mnp_top-index-rule"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <IconArrowDown />
                  キャンペーンルール
                </LinkIconBefore>
              </li>
            </AnchorLink>
          </nav>

          <Cta2col className={Utils['Mt-32']}>
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application/?lid-r=campaign_mnp_guide_application01"
            >
              乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
            <ButtonSecondaryLarge href="/shop/?l-id=campaign_mnp_shop01" as="a">
              お近くのショップを探す・来店予約
            </ButtonSecondaryLarge>
          </Cta2col>
          <section className={Utils['Mt-48']}>
            <Heading
              level="2"
              className={Utils['Align-center']}
              id="conditions"
              ratId="campaign_mnp_scroll-02_campaign-condition"
              ratEvent="appear"
            >
              キャンペーンの達成条件
            </Heading>
            <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              詳細は
              <LinkNormal
                href="#campaign-rule2091"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2091')
                }
                data-ratid="campaign_mnp_index-rule-01"
                data-ratevent="click"
                data-ratparam="all"
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </p>

            <CpnCondition className={Utils['Mt-16']}>
              <CpnConditionItem>
                <CpnConditionTitle>
                  <div className="img-wrapper">
                    <img
                      src={`${assets}img/campaign/mnp/icon-application.png`}
                      width="47"
                      height="47"
                      alt=""
                    />
                  </div>
                  <Heading level="4" as="h3">
                    電話番号そのまま乗り換え（MNP）
                    <br />
                    ＆初めてのお申し込み
                  </Heading>
                </CpnConditionTitle>
                <CpnConditionContents>
                  2回線目以降のお申し込みは対象外となります。
                </CpnConditionContents>
              </CpnConditionItem>
              <CpnConditionItem>
                <CpnConditionTitle>
                  <div className="img-wrapper">
                    <img
                      src={`${assets}img/campaign/mnp/icon-plan-start.png`}
                      width="47"
                      height="47"
                      alt=""
                    />
                  </div>
                  <Heading level="4" as="h3">
                    プランの利用開始
                  </Heading>
                </CpnConditionTitle>
                <CpnConditionContents>
                  【期限】
                  <br />
                  お申し込みの翌月末日23:59まで
                </CpnConditionContents>
              </CpnConditionItem>
              <CpnConditionItem>
                <CpnConditionTitle>
                  <div className="img-wrapper">
                    <img
                      src={`${assets}img/campaign/mnp/icon-link.png`}
                      width="47"
                      height="47"
                      alt=""
                    />
                  </div>
                  <Heading level="4" as="h3">
                    Rakuten Linkで
                    <br />
                    10秒以上通話
                  </Heading>
                </CpnConditionTitle>
                <CpnConditionContents>
                  【期限】
                  <br />
                  お申し込みの翌月末日23:59まで
                </CpnConditionContents>
              </CpnConditionItem>
            </CpnCondition>
          </section>
        </SystemContainer>
        <Appeal className={Utils['Mt-48']}>
          <SystemContainer>
            <section className={Utils['Mt-48']}>
              <HeadingCustom
                level="2"
                className={Utils['Align-center']}
                id="use"
                ratId="campaign_mnp_scroll-03_mnp-content"
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
                    href="/guide/flow/application/group/?l-id=campaign_mnp_guide_application-group"
                  >
                    グループアプリ経由での申し込み方法を見る
                  </ButtonRegular>
                </div>
              </MnpFlow>
              <TxtCap as="p" className={Utils['Mt-24']}>
                *1
                楽天銀行・楽天証券・楽天生命のいずれかをご契約されている場合。条件あり。
                <LinkNormal href="/guide/verify/group-kyc/?l-id=campaign_mnp_guide_verify-group-kyc">
                  詳しくはこちら
                </LinkNormal>
                <br />
                *2
                Webでのお申し込みのみ。MNPワンストップ未対応会社からお乗り換えの場合、MNP予約番号の取得が必要。
                <LinkNormal href="/guide/mnp/fast-convert/?l-id=campaign_mnp_guide_mnp_fast-convert">
                  詳しくはこちら
                </LinkNormal>
                <br />
                *3 メール持ち運びサービス330円/月{' '}
                <LinkNormal href="/cm/mail_portability/?l-id=campaign_mnp_mail_portability">
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
                <BannerHover href="/guide/mnp/fast-convert/?l-id=campaign_mnp_guide_mnp_fast-convert01">
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
              id="flow"
              ratId="campaign_mnp_scroll-04_campaign-flow-01"
              ratEvent="appear"
            >
              <TxtEmp02>
                <TxtSize size="xl">6,000</TxtSize>ポイント
              </TxtEmp02>
              獲得の流れ
            </Heading>

            <AccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP1</AccordionEmpStep>
                  <AccordionEmpTxt>
                    楽天モバイル対応製品の確認{' '}
                    <TxtCap>
                      <TxtEmp02>※お持ちの製品で乗り換えの場合</TxtEmp02>
                    </TxtCap>
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
              ratid="campaign_mnp_flow-accordion-01"
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/mnp/img-flow-device-sp.png`}
                      width="622"
                      height="358"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/img-flow-device-pc.png`}
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
                      href="/product/byod/?l-id=campaign_mnp_product_byod"
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
                        srcSet={`${assets}img/campaign/mnp/img-flow-sim-rock-sp.png`}
                        width="281"
                        height="240"
                      />
                      <img
                        src={`${assets}img/campaign/mnp/img-flow-sim-rock-pc.png`}
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
                  <AccordionEmpTxt>
                    電話番号そのまま乗り換え（MNP）＆初めて楽天モバイルにお申し込み
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
              ratid="campaign_mnp_flow-accordion-02"
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
                            srcSet={`${assets}img/campaign/mnp/img-flow-apply-document-sp.png`}
                            width="467"
                            height="227"
                          />
                          <img
                            src={`${assets}img/campaign/mnp/img-flow-apply-document-pc.png`}
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
                            <LinkIconAfter href="/guide/verify/?l-id=campaign_mnp_guide_verify">
                              本人確認書類
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                          <li>楽天会員ID、パスワード</li>
                          <li>
                            <LinkIconAfter href="/guide/payment/?l-id=campaign_mnp_guide_payment">
                              クレジットカード、銀行口座情報
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                        </UlOnly>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          <LinkNormal href="/flow/for-minors/?l-id=campaign_mnp_flow_for-minors">
                            ※未成年の方のお申し込み方法は
                          </LinkNormal>
                          <br />
                          ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                          <LinkNormal href="/guide/mnp/?l-id=campaign_mnp_guide_mnp#carrier">
                            こちら
                          </LinkNormal>
                          からご確認ください。
                          <br />
                          ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、ご来店ください。
                        </TxtCap>
                      </div>
                    </MediaGrid>

                    <InfoboxBorder className={Utils['Mt-16']}>
                      <MediaGrid>
                        <MediaImage>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${assets}img/campaign/mnp/img-flow-mnp-sp.png`}
                              width="401"
                              height="254"
                            />
                            <img
                              src={`${assets}img/campaign/mnp/img-flow-mnp-pc.png`}
                              width="282"
                              height="174"
                              alt=""
                              loading="lazy"
                            />
                          </picture>
                        </MediaImage>
                        <div>
                          <Heading level="4">
                            電話番号そのまま乗り換え（MNP）
                          </Heading>

                          <div className={Utils['Mt-16']}>
                            <ButtonPrimaryLarge
                              as="a"
                              href="/guide/application/?lid-r=campaign_mnp_guide_application02"
                            >
                              乗り換え（MNP）お申し込み
                            </ButtonPrimaryLarge>
                          </div>
                          <div className={Utils['Mt-16']}>
                            <LinkIconAfter href="/guide/mnp/?l-id=campaign_mnp_guide_mnp">
                              乗り換え手順について
                              <IconChevronRight />
                            </LinkIconAfter>
                          </div>
                        </div>
                      </MediaGrid>
                    </InfoboxBorder>
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
                            srcSet={`${assets}img/campaign/mnp/img-flow-shop-sp.png`}
                            width="559"
                            height="274"
                          />
                          <img
                            src={`${assets}img/campaign/mnp/img-flow-shop-pc.png`}
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
                          href="/shop/?l-id=campaign_mnp_shop02"
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
                              srcSet={`${assets}img/campaign/mnp/img-flow-apply-document-sp.png`}
                              width="467"
                              height="227"
                            />
                            <img
                              src={`${assets}img/campaign/mnp/img-flow-apply-document-pc.png`}
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
                              <LinkIconAfter href="/guide/verify/?l-id=campaign_mnp_guide_verify">
                                本人確認書類
                                <IconChevronRight className={Utils['Ml-16']} />
                              </LinkIconAfter>
                            </li>
                            <li>楽天会員ID、パスワード</li>
                            <li>
                              <LinkIconAfter href="/guide/payment/?l-id=campaign_mnp_guide_payment">
                                クレジットカード、銀行口座情報
                                <IconChevronRight className={Utils['Ml-16']} />
                              </LinkIconAfter>
                            </li>
                            <li>
                              ご契約者名義の
                              <LinkNormal href="/guide/mnp/">
                                MNP予約番号
                              </LinkNormal>
                              （他社から乗り換えの場合）
                            </li>
                          </UlOnly>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            <LinkNormal href="/flow/for-minors/?l-id=campaign_mnp_flow_for-minors">
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
              ratid="campaign_mnp_flow-accordion-03"
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/mnp/img-flow-plan-start-sp.png`}
                      width="467"
                      height="227"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/img-flow-plan-start-pc.png`}
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
                      href="/faq/detail/00001648/?l-id=campaign_mnp_faq_detail_00001648"
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
              ratid="campaign_mnp_flow-accordion-04"
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/mnp/img-flow-link-sp.png`}
                      width="622"
                      height="283"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/img-flow-link-pc.png`}
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
                    <LinkIconAfter href="/service/rakuten-link/?l-id=campaign_mnp_service_rakuten-link">
                      Rakuten Linkアプリの詳細
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </div>
              </MediaGrid>
            </AccordionListEmp>

            <StepLastBox
              data-ratid="campaign_mnp_scroll-05_campaign-flow-02"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/mnp/img-flow-rpoint-sp.png`}
                      width="608"
                      height="300"
                    />
                    <img
                      src={`${assets}img/campaign/mnp/img-flow-rpoint-pc.png`}
                      width="304"
                      height="150"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <Heading level="4">
                    <TxtEmp02>6,000円相当のポイント獲得！</TxtEmp02>
                  </Heading>
                  <p className={Utils['Mt-8']}>
                    Rakuten Link
                    ご利用の翌々月末日頃に、期間限定ポイントとして6,000ポイントを付与いたします。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※併用ができないキャンペーンがあります。
                    <LinkNormal
                      href="#campaign-rule2091"
                      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                        anchorCallback(e, 'campaign-rule2091')
                      }
                      data-ratid="campaign_mnp_index-rule-02"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      詳しくはこちら
                    </LinkNormal>
                    <br />
                    ※「Rakuten最強プラン」利用開始及びRakuten
                    Linkの利用が確認された月の翌々月末日ごろから3カ月にわたって進呈。ポイント有効期間はポイント付与日を含めて3カ月
                  </TxtCap>
                </div>
              </MediaGrid>
            </StepLastBox>
          </section>

          <section className={Utils['Mt-48']}>
            <Heading
              level="2"
              className={Utils['Align-center']}
              ratId="campaign_mnp_scroll-06_faq"
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
                <LinkNormal href="/faq/detail/00001802/?l-id=campaign_mnp_faq_detail_00001802">
                  こちら
                </LinkNormal>
                に記載の手順でご確認ください。
              </p>
            </AccordionList>
          </section>

          <section
            className={Utils['Mt-48']}
            data-ratid="campaign_mnp_scroll-07_rakuten-mobile"
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
              ratId="campaign_mnp_scroll-08_rule"
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
              href="/guide/application/?lid-r=campaign_mnp_guide_application03"
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
              href="/shop/?l-id=campaign_mnp_shop03"
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

export default CampaignMnp
