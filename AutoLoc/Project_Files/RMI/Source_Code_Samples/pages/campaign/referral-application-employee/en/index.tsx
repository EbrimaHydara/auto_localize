import type { NextPage } from 'next'
import React, { useContext } from 'react'
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
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
  TxtNormal,
  AlphanumericSize,
} from '@components/atoms/Txt'
import {
  AccordionList,
  AccordionListEmp,
  AccordionEmpStep,
  AccordionEmpTxt,
} from '@components/atoms/AccordionList'
import { Tab } from '@components/atoms/Tab'
import { InfoboxBorder, InfoboxWhite } from '@components/atoms/Infobox'
import {
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import { CommonSaikyoEn } from '@components/include/common/Saikyo'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { UlOnly, ListDisc } from '@components/atoms/List'
import { IconChevronRight, IconNewTabLine } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { CampaignRule2162en } from '@components/include/campaign/rules/2024/CampaignRule2162en'
import { fontRakutenSansUi } from '@styles/fonts'
import { CampaignRule2162turboEn } from '@components/include/campaign/rules/2024/CampaignRule2162turboEn'

const CustomSystemWrapper = styled(SystemWrapper)`
  font-family: ${fontRakutenSansUi.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`

const KvHeading = styled.section`
  ${mixins.mq.MinL} {
    background-color: #e5017e;
    display: flex;
    justify-content: center;
  }
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const BgYellow = styled.div`
  background-color: ${props => props.theme.colors.yellow};
`
const Applybox = styled.section`
  margin-top: 88px;
  border: 2px solid #bf0000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mixins.mq.MaxM} {
    margin-top: 72px;
    border-radius: 8px;
  }
  > h2 {
    position: relative;
    top: -40px;
    ${mixins.mq.MaxM} {
      top: -32px;
    }
  }
`
const ApplyContents = styled.div`
  max-width: 856px;
  padding: 0 0 48px;
  margin-top: -8px;
  ${mixins.mq.MaxM} {
    padding: 0 16px 40px;
  }
`
const SectionBorder = styled.div`
  section + section {
    border-top: 1px solid ${props => props.theme.colors.monotone75};
    margin-top: 24px;
  }
`
const Cta = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  > a {
    max-width: 416px;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const AttentionBox = styled.div`
  margin-top: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.pink5};
  font-size: ${props => props.theme.fonts.s};
  ul > li {
    margin-top: 8px;
  }
`
const FlexBox = styled.div`
  display: flex;
  gap: 24px;
  > div {
    width: 100%;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
  }
`
const CustomAccordionListEmp = styled(AccordionListEmp)`
  ${mixins.mq.MaxM} {
    > button {
      display: flex;
      align-items: center;
    }
  }
`
const CustomUlOnly = styled(UlOnly)`
  > li {
    margin-top: 4px;
  }
`
const ArrowDown = styled.div`
  margin: 24px auto 0;
  width: 50px;
  height: 26px;
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0 0, 100% 0, 50% 100%);
`
const RPointtext = styled.div`
  ${mixins.mq.MaxM} {
    > p > span {
      font-size: ${props => props.theme.fonts.m};
      > span {
        font-size: 40px;
      }
    }
  }
`
const SectionCommonSaikyo = styled(SystemContainer)`
  ${mixins.mq.MaxM} {
    padding-left: 0;
    padding-right: 0;
  }
  > div {
    ${mixins.mq.MaxM} {
      border-left: none;
      border-right: none;
    }
    img {
      ${mixins.mq.MaxM} {
        width: 100svw;
      }
    }
  }
`
const BnrSimulation = styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
`
const BnrHead = styled.div`
  text-align: center;
  padding: 48px 16px 16px;
  background-color: ${props => props.theme.colors.pink5};
  border-radius: 16px 16px 0 0;
`
const BnrHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const BnrComment = styled.div`
  position: absolute;
  top: -58px;
  ${mixins.mq.MaxM} {
    width: 240px;
    top: -70px;
  }
`
const BnrBody = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 16px 16px;
`
const BnrBodyInner = styled.div`
  padding: 16px 16px 24px;
  background: url(${assets}img/campaign/referral/bnr-simulation-img-01-pc.png),
    url(${assets}img/campaign/referral/bnr-simulation-img-02-pc.png);
  background-repeat: no-repeat;
  background-size: 202px 140px, 180px 125px;
  background-position: left 48px bottom, right 42px bottom;
  ${mixins.mq.MaxM} {
    background: none;
  }
  ${mixins.mq.MaxL} {
    background-size: 182px 126px;
    background-position: left 16px bottom, right 16px bottom;
  }
`
const CustomSimurationBtn = styled(ButtonSecondaryLarge)`
  margin-top: 16px;
  max-width: 400px;
  ${mixins.mq.MaxM} {
    margin-top: 0;
    max-width: none;
  }
`
const BnrLink = styled.div`
  position: relative;
  margin-top: 64px;
  padding: 20px 45px 50px;
  background-color: ${props => props.theme.colors.pink5};
  border-radius: 12px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`
const BnrLinkComment = styled.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  ${mixins.mq.MaxM} {
    width: 328px;
  }
`

const BnrLinkTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 14px;
  line-height: 1.4;
  ${mixins.mq.MaxM} {
    font-size: 24px;
  }
`
const BnrLinkAnnotation = styled.span`
  font-size: ${props => props.theme.fonts.ss};
  font-weight: normal;
  color: ${props => props.theme.colors.lightBlack};
`
const CustomLinkBtn = styled(ButtonRegularLarge)`
  padding: 12px 24px;
  max-width: 328px;
  ${mixins.mq.MaxM} {
    max-width: none;
  }
`
const TxtTitle = styled.span`
  display: block;
  text-indent: 0;
`

const CampaignReferralapplicationemployeeEn: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '[Only for Rakuten Employee Referrals] Rakuten Mobile Referral Campaign! Earn Points per Line Application'
  const breadcrumbs = [
    {
      text: 'Top',
      url: '/',
    },
    {
      text: 'Campaigns & Perks',
      url: '/campaign/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const faq3 = [
    {
      text: (
        <>
          <TxtEmp01>
            For Rakuten SAIKYO Plan or Rakuten SAIKYO Plan (Data Type)
          </TxtEmp01>
          <TxtTitle>&lt;Customer applied before May 31 2024&gt;</TxtTitle>
          Multiple applications are allowed under this campaign if the
          conditions are met.
          <br />
          However, please note that there is a limit to the number of contracts
          per person. For details,{' '}
          <LinkNormal href="/faq/detail/00001243/">click here.</LinkNormal>
          <TxtTitle className={`${Utils['Mt-24']}`}>
            &lt;Customer applied after June 1 2024&gt;
          </TxtTitle>
          Rewards will be capped at five lines per individual.
          <br />
        </>
      ),
    },
    {
      text: (
        <>
          <TxtEmp01>For RakutenTurbo</TxtEmp01>
          <br />A reward will be given only once.
        </>
      ),
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="Receive points for each line application when referred by a Rakuten employee! Receive 14,000 points for MNP transfers, or 7,000 points for other new sign-ups. Join now and take advantage of this campaign!"
        noindex={true}
        isEnglish={true}
      />
      <CustomSystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/referral-application-employee/en/kv-sp-240216.png`}
                width="750"
                height="720"
              />
              <img
                src={`${assets}img/campaign/referral-application-employee/en/kv-pc-240216.png`}
                width="1440"
                height="400"
                alt="Rakuten SAIKYO Plan Referral Campaign for special customers! For each line application when referred by a Rakuten employee, you’ll receive 14,000 points for MNP transfers, or 7,000 points for other new sign-ups."
              />
            </picture>
          </h1>
        </KvHeading>
        <BgGray className={`${Utils['Pt-8']} ${Utils['Pb-16']}`}>
          <SystemContainer>
            <TxtCap as="p">
              <TxtEmp02>
                *Points will be awarded as time-limited points for a period of 3
                months.
              </TxtEmp02>
              <br />
              <TxtEmp02>*Campaign rewards are subject to variation.</TxtEmp02>
              <br />
              *Points increased for applications from February 1, 2024, onwards.
              <br />
              *The offer for Rakuten SAIKYO Plan applies to a max of 10 lines.
              <br />
              *Participant information for this campaign, including Rakuten
              membership and contract details, may be shared with Rakuten Mobile
              and other Rakuten Group companies for campaign execution and
              updates.
              <br />
              *1 If the referred person uses the 6,000 yen OFF coupon at the
              official Rakuten Mobile Rakuten Ichiba store, they will receive
              8,000 points instead.
              <br />
            </TxtCap>
          </SystemContainer>
        </BgGray>
        <SystemContainer
          data-ratid="referral-application-employee_en_scroll-01_application"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <div className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            <LinkIconAfter href="/campaign/referral-application-employee/?l-id=campaign_referral-application-employee_en_referral-application-employee">
              日本語
              <IconChevronRight />
            </LinkIconAfter>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-8']}`}>
            <TxtEmp01 as="p">[Campaign Period]</TxtEmp01>
            <p>
              <TxtEmp01>Online:</TxtEmp01> Tuesday, December 5, 2023 at 9:00{' '}
              <del>- Friday, May 31 at 23:59</del> and end date TBD
              <br />
              <TxtEmp01>In-Store:</TxtEmp01> Tuesday, December 5, 2024 at 9:00{' '}
              <del>- Friday, May 31 at 23:59, during shop hours</del> and end
              date TBD
            </p>
          </div>
          <Applybox>
            <h2>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/referral-application-employee/en/title-ribbon-sp.png`}
                  width="325"
                  height="53"
                />
                <img
                  src={`${assets}img/campaign/referral-application-employee/en/title-ribbon-pc.png`}
                  width="505"
                  height="70"
                  alt="Apply Here"
                />
              </picture>
            </h2>
            <ApplyContents>
              <p className={Utils['Align-center']}>
                Thank you for your interest in Rakuten Mobile.
                <br />
                You become eligible for this campaign when you apply for the
                "Rakuten SAIKYO Plan*" or the home router "Rakuten Turbo". We
                hope you will take advantage of this opportunity to experience
                the high satisfaction and superior communication quality.
                <br />
                <TxtCap>*Includes "Data Type".</TxtCap>
              </p>
              <SectionBorder>
                <section className={Utils['Pb-24']}>
                  <Heading
                    level="4"
                    as="h3"
                    className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                  >
                    Rakuten SAIKYO Plan
                  </Heading>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonPrimaryLarge
                      as="a"
                      href="https://onboarding.mobile.rakuten.co.jp/?l-id=campaign_referral-application-employee-en_kv_onb&locale=en"
                    >
                      Apply Online
                      <br className={Utils['Show-oxx']} />
                      (New/MNP Transfer)
                    </ButtonPrimaryLarge>
                    <ButtonSecondaryLarge
                      href="/shop/en/?l-id=campaign_referral-application-employee_en_shop_en_01"
                      as="a"
                    >
                      Find a Shop Near You
                    </ButtonSecondaryLarge>
                  </Cta>
                  <div className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}>
                    <p>
                      <LinkIconAfter href="/guide/mnp/?l-id=campaign_referral-application-employee_en_guide_mnp_01">
                        How to Switch from Another Carrier (MNP)
                        <IconChevronRight />
                      </LinkIconAfter>
                    </p>
                    <p className={Utils['Mt-sp-8']}>
                      <LinkIconAfter href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_referral-application-employee_en_ms_top&mno_migration=1">
                        How to Change Your Plan from Rakuten Mobile (using
                        docomo or au line)
                        <IconChevronRight />
                      </LinkIconAfter>
                    </p>
                  </div>
                </section>
                <section>
                  <Heading
                    level="4"
                    as="h3"
                    className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                  >
                    Rakuten SAIKYO Plan<TxtNormal> (Data Type)</TxtNormal>
                  </Heading>
                  <TxtCap
                    as="p"
                    className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
                  >
                    *This plan is exclusively for data communication and is
                    available only to Rakuten cardholders.
                    <br />
                    *On the application screen, first select the "Apply for Plan
                    Only" [プランのみお申し込み] button.
                    <br />
                    Then, choose the "Rakuten SAIKYO Plan (Data Type)" [Rakuten
                    最強プラン（データタイプ）] button to continue with your
                    application.
                  </TxtCap>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonPrimaryLarge
                      href="/onboarding/fast/?sourceExternalChannel=wi_lp_rmb_mkdiv_campaign_referral-application-employee_en_01&l-id=campaign_referral-application-employee_en_onboarding_fast_01"
                      as="a"
                    >
                      Apply for Data Type
                    </ButtonPrimaryLarge>
                  </Cta>
                  <p className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}>
                    <LinkIconAfter href="/faq/detail/10000812/?l-id=campaign_referral-application-employee_en_faq_detail_10000812">
                      Comparing "Rakuten SAIKYO Plan" and "Rakuten SAIKYO Plan
                      (Data Type)"
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </section>
                <section>
                  <Heading
                    level="4"
                    as="h3"
                    className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                  >
                    Rakuten Turbo
                  </Heading>
                  <TxtCap
                    as="p"
                    className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
                  >
                    *No installation required for this home router.
                    <br />
                    *Please check the supported areas and more details on the
                    page below before applying.
                  </TxtCap>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonSecondaryLarge
                      href="/internet/turbo/campaign/six-month-free/?l-id=campaign_referral-application-employee_en_internet_turbo_campaign_six-month-free"
                      as="a"
                    >
                      Learn More About Rakuten Turbo
                    </ButtonSecondaryLarge>
                  </Cta>
                </section>
              </SectionBorder>
            </ApplyContents>
          </Applybox>

          <AttentionBox>
            <TxtEmp01 as="p">
              The campaign terms outlined here differ from those applicable to
              referrals by non-Rakuten employees.
            </TxtEmp01>
            <UlOnly className={Utils['Mt-8']}>
              <li>
                This campaign is also valid for non-first-time applicants, such
                as customers applying for a second line or re-subscribing.
              </li>
              <li>
                It's also applicable for applications to Rakuten SAIKYO Plan
                (Data Type) or Rakuten Turbo.
              </li>
              <li>There's no requirement to use the Rakuten Link app.</li>
            </UlOnly>
          </AttentionBox>

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <BannerHover href="/guide/procedure/en/?l-id=campaign_referral-application-employee_en_guide_procedure">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-apply-guide-en-343-108.png`}
                  width="1029"
                  height="324"
                />
                <img
                  src={`${assets}img/bnr/bnr-apply-guide-en-1032-78.png`}
                  width="1032"
                  height="78"
                  alt="No Worries for First-Timers! Step-by-Step Application Guide"
                  loading="lazy"
                />
              </picture>
            </BannerHover>
          </div>
        </SystemContainer>

        <BgGray
          className={`${Utils['Py-56']} ${Utils['Py-sp-40']} ${Utils['Mt-56']} ${Utils['Mt-sp-48']}`}
        >
          <SystemContainer
            data-ratid="referral-application-employee_en_scroll-02_application-flow"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <section>
              <Heading level="2" className={Utils['Align-center']}>
                Application Steps
              </Heading>
              <CustomAccordionListEmp
                text={
                  <>
                    <AccordionEmpStep>STEP1</AccordionEmpStep>
                    <AccordionEmpTxt>Apply for Rakuten Mobile</AccordionEmpTxt>
                  </>
                }
                isOpened={false}
                className={Utils['Mt-24']}
                step={true}
              >
                <Tab
                  className={Utils['Mt-8']}
                  heading1={'Online'}
                  id1="tab1"
                  id2="tab2"
                  content1={
                    <>
                      <InfoboxBorder className={Utils['Mt-24']}>
                        <MediaGrid>
                          <MediaImage>
                            <picture>
                              <source
                                media={`(max-width: ${theme.max.m})`}
                                srcSet={`${assets}img/campaign/referral-application-employee/en/img-flow-apply-document-sp.png`}
                                width="558"
                                height="232"
                              />
                              <img
                                src={`${assets}img/campaign/referral-application-employee/en/img-flow-apply-document-pc.png`}
                                width="280"
                                height="180"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </MediaImage>
                          <div>
                            <Heading level="4" as="h3">
                              Requirements
                            </Heading>
                            <CustomUlOnly className={Utils['Mt-16']}>
                              <li>
                                <LinkIconAfter href="/guide/verify/en/?l-id=campaign_referral-application-employee_en_guide_verify_en">
                                  Identity Verification Documents
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                              <li>
                                Rakuten Member ID & Password
                                <TxtCap as="div" className={Utils['Ml-16']}>
                                  <TxtEmp02>
                                    *The details on your identity verification
                                    documents must correspond with your Rakuten
                                    membership information.
                                  </TxtEmp02>
                                </TxtCap>
                                <div className={Utils['Ml-16']}>
                                  <LinkIconAfter
                                    href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                                    target="_blank"
                                  >
                                    Update or Check Your Rakuten Membership
                                    <IconNewTabLine />
                                  </LinkIconAfter>
                                </div>
                              </li>
                              <li>
                                Subscriber’s{' '}
                                <LinkNormal href="/guide/mnp/?l-id=campaign_referral-application-employee_en_guide_mnp_02">
                                  MNP Reservation Number
                                </LinkNormal>{' '}
                                (for switching from another carrier)
                              </li>
                              <li>
                                <LinkIconAfter href="/guide/payment/?l-id=campaign_referral-application-employee_en_guide_payment_02">
                                  Credit Card/Bank Account Information
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                            </CustomUlOnly>
                            <TxtCap as="p" className={Utils['Mt-8']}>
                              *For those intending to use a credit card not
                              registered under the subscriber's name, please
                              review{' '}
                              <LinkNormal href="/faq/detail/00001238/">
                                this page
                              </LinkNormal>{' '}
                              beforehand.
                              <br />
                              *For details on the application process for minors
                              and instructions on how to apply, please visit{' '}
                              <LinkNormal href="/flow/for-minors/">
                                this page
                              </LinkNormal>
                              .
                              <br />
                              *If your current mobile carrier does not support
                              MNP One Stop, you will need to obtain an MNP
                              reservation number. Please{' '}
                              <LinkNormal href="/guide/mnp/#career">
                                click here
                              </LinkNormal>{' '}
                              for a list of mobile carriers that support MNP One
                              Stop.
                              <br />
                              *For in-store procedures, an MNP reservation
                              number is needed regardless of your previous
                              mobile carrier’s eligibility for MNP One Stop.
                            </TxtCap>
                          </div>
                        </MediaGrid>
                      </InfoboxBorder>
                      <FlexBox>
                        <InfoboxBorder
                          className={`${Utils['Mt-24']} ${Utils['Mt-sp-16']} ${Utils['Align-center']}`}
                        >
                          <SectionBorder>
                            <section className={Utils['Pb-16']}>
                              <Heading level="4" as="h3">
                                Rakuten SAIKYO Plan
                              </Heading>
                              <div className={Utils['Mt-16']}>
                                <ButtonPrimaryLarge
                                  as="a"
                                  href="https://onboarding.mobile.rakuten.co.jp/?l-id=campaign_referral-application-employee-en_step_onb&locale=en"
                                >
                                  Apply Online (New/MNP Transfer)
                                </ButtonPrimaryLarge>
                              </div>
                              <div className={Utils['Mt-16']}>
                                <LinkIconAfter href="/fee/saikyo-plan/?l-id=campaign_referral-application-employee_en_fee_saikyo-plan">
                                  Plan Details
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </div>
                              <div className={Utils['Mt-8']}>
                                <LinkIconAfter href="/guide/flow/application/?l-id=campaign_referral-application-employee_en_guide_flow_application">
                                  How to Apply
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </div>
                            </section>
                            <section>
                              <Heading
                                level="4"
                                as="h3"
                                className={Utils['Mt-16']}
                              >
                                Rakuten SAIKYO Plan
                                <br className={Utils['Show-oxx']} />
                                (Data Type)
                              </Heading>
                              <TxtCap
                                as="p"
                                className={`${Utils['Mt-16']} ${Utils['Align-left']}`}
                              >
                                *This plan is exclusively for data communication
                                and is available only to Rakuten cardholders.
                                <br />
                                *On the application screen, first select the
                                "Apply for Plan Only" [プランのみお申し込み]
                                button.
                                <br />
                                Then, choose the "Rakuten SAIKYO Plan (Data
                                Type)" [Rakuten 最強プラン（データタイプ）]
                                button to continue with your application.
                              </TxtCap>
                              <div className={Utils['Mt-16']}>
                                <ButtonPrimaryLarge
                                  as="a"
                                  href="/onboarding/fast/?sourceExternalChannel=wi_lp_rmb_mkdiv_campaign_referral-application-employee_en_02&l-id=campaign_referral-application-employee_en_onboarding_fast_02"
                                >
                                  Apply for Data Type
                                </ButtonPrimaryLarge>
                              </div>
                            </section>
                          </SectionBorder>
                        </InfoboxBorder>
                        <InfoboxBorder
                          className={`${Utils['Mt-24']} ${Utils['Mt-sp-16']} ${Utils['Align-center']}`}
                        >
                          <section className={Utils['Pb-16']}>
                            <Heading level="4" as="h3">
                              Rakuten Mobile (docomo/au line) Plan Change
                              (Migration)
                            </Heading>
                            <div className={Utils['Mt-16']}>
                              <ButtonSecondaryLarge
                                as="a"
                                href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_referral-application-employee_en_members_rmb_login&mno_migration=1"
                              >
                                Change Plan (Migration)
                              </ButtonSecondaryLarge>
                            </div>
                            <div
                              className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/guide/migration/?l-id=campaign_referral-application-employee_en_guide_migration">
                                Comparison with Super-hodai/Combination Plan*
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                            <TxtCap
                              as="p"
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              *Plans using docomo and au lines that were
                              terminated on April 8, 2020.
                            </TxtCap>
                            <div
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/guide/mnp/migration/?l-id=campaign_referral-application-employee_en_guide_mnp_migration">
                                How to Migrate to Rakuten Mobile (Rakuten Line)
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                            <div
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/flow/mvno-user-registration/?l-id=campaign_referral-application-employee_en_flow_mvno-user-registration">
                                How to Migrate Your Account as a Registered User
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                          </section>
                        </InfoboxBorder>
                      </FlexBox>
                    </>
                  }
                  heading2={'In-Store'}
                  content2={
                    <>
                      <MediaGrid className={Utils['Mt-24']}>
                        <MediaImage>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${assets}img/campaign/referral-application-employee/en/img-flow-shop-sp.png`}
                              width="559"
                              height="274"
                            />
                            <img
                              src={`${assets}img/campaign/referral-application-employee/en/img-flow-shop-pc.png`}
                              width="284"
                              height="165"
                              alt=""
                              loading="lazy"
                            />
                          </picture>
                        </MediaImage>
                        <div>
                          <Heading level="4" as="h3">
                            Apply for Rakuten SAIKYO Plan
                          </Heading>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            <TxtEmp02>
                              *For instructions on applying as a minor, please
                              see our dedicated{' '}
                              <LinkNormal href="/flow/for-minors/">
                                information page
                              </LinkNormal>
                              .
                            </TxtEmp02>
                          </TxtCap>
                          <ButtonRegular
                            as="a"
                            href="/shop/en/?l-id=campaign_referral-application-employee_en_shop_en_02"
                            className={Utils['Mt-16']}
                          >
                            Find a Shop Near You
                          </ButtonRegular>
                        </div>
                      </MediaGrid>
                      <InfoboxBorder className={Utils['Mt-24']}>
                        <MediaGrid>
                          <MediaImage>
                            <picture>
                              <source
                                media={`(max-width: ${theme.max.m})`}
                                srcSet={`${assets}img/campaign/referral-application-employee/en/img-flow-apply-document-sp.png`}
                                width="558"
                                height="232"
                              />
                              <img
                                src={`${assets}img/campaign/referral-application-employee/en/img-flow-apply-document-pc.png`}
                                width="280"
                                height="180"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </MediaImage>
                          <div>
                            <Heading level="4" as="h3">
                              Requirements
                            </Heading>
                            <CustomUlOnly className={Utils['Mt-16']}>
                              <li>
                                <LinkIconAfter href="/guide/verify/en/?l-id=campaign_referral-application-employee_en_guide_verify_en_shop-tab">
                                  Identity Verification Documents
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                              <li>
                                Rakuten Member ID & Password
                                <TxtCap as="div" className={Utils['Ml-16']}>
                                  <TxtEmp02>
                                    *The details on your identity verification
                                    documents must correspond with your Rakuten
                                    membership information.
                                  </TxtEmp02>
                                </TxtCap>
                                <div className={Utils['Ml-16']}>
                                  <LinkIconAfter
                                    href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                                    target="_blank"
                                  >
                                    Update or Check Your Rakuten Membership
                                    <IconNewTabLine />
                                  </LinkIconAfter>
                                </div>
                              </li>
                              <li>
                                Subscriber’s{' '}
                                <LinkNormal href="/guide/mnp/?l-id=campaign_referral-application-employee_en_guide_mnp_02_shop-tab">
                                  MNP Reservation Number
                                </LinkNormal>{' '}
                                (for switching from another carrier)
                              </li>
                              <li>
                                <LinkIconAfter href="/guide/payment/?l-id=campaign_referral-application-employee_en_guide_payment_02_shop-tab">
                                  Credit Card/Bank Account Information
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                            </CustomUlOnly>
                            <TxtCap as="p" className={Utils['Mt-8']}>
                              *For those intending to use a credit card not
                              registered under the subscriber's name, please
                              review{' '}
                              <LinkNormal href="/faq/detail/00001238/">
                                this page
                              </LinkNormal>{' '}
                              beforehand.
                              <br />
                              *For details on the application process for minors
                              and instructions on how to apply, please visit{' '}
                              <LinkNormal href="/flow/for-minors/">
                                this page
                              </LinkNormal>
                              .
                              <br />
                              *If your current mobile carrier does not support
                              MNP One Stop, you will need to obtain an MNP
                              reservation number. Please{' '}
                              <LinkNormal href="/guide/mnp/#career">
                                click here
                              </LinkNormal>{' '}
                              for a list of mobile carriers that support MNP One
                              Stop.
                              <br />
                              *For in-store procedures, an MNP reservation
                              number is needed regardless of your previous
                              mobile carrier’s eligibility for MNP One Stop.
                            </TxtCap>
                          </div>
                        </MediaGrid>
                      </InfoboxBorder>
                    </>
                  }
                />
              </CustomAccordionListEmp>
              <ArrowDown />
              <CustomAccordionListEmp
                text={
                  <>
                    <AccordionEmpStep>STEP2</AccordionEmpStep>
                    <AccordionEmpTxt>
                      Start Using "Rakuten SAIKYO Plan"
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
                        srcSet={`${assets}img/campaign/referral-application-employee/en/img-flow-plan-start-sp.png`}
                        width="467"
                        height="227"
                      />
                      <img
                        src={`${assets}img/campaign/referral-application-employee/en/img-flow-plan-start-pc.png`}
                        width="304"
                        height="135"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <div>
                    <TxtEmp01 as="p" className={Utils['Align-cll']}>
                      Deadline: 23:59 on the last day of the second month
                      following the date of login via referral message
                    </TxtEmp01>
                    <div className={Utils['Mt-24']}>
                      <ButtonRegular
                        as="a"
                        href="/faq/detail/00001648/?l-id=campaign_referral-application-employee_en_faq_detail_00001648_01"
                      >
                        How to Start Using Our Plan
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </CustomAccordionListEmp>
              <ArrowDown />
              <InfoboxWhite className={Utils['Mt-24']}>
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${assets}img/campaign/referral-application-employee/en/img-flow-rpoint-pc.png`}
                      width="304"
                      height="150"
                      alt=""
                      loading="lazy"
                    />
                  </MediaImage>
                  <RPointtext>
                    <TxtSize size="l" as="p" className={Utils['Align-cll']}>
                      <TxtEmp02>Referred person can earn</TxtEmp02>
                      <br className={Utils['Show-oxx']} />
                      <TxtEmp02>
                        {' '}
                        <AlphanumericSize size="l">
                          14,000
                        </AlphanumericSize>{' '}
                        points!*
                      </TxtEmp02>
                    </TxtSize>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      *When transferring from another carrier (MNP). 7,000
                      points for other new sign-ups. Campaign offer limited to
                      one time per person.
                      <br />
                      *Points will be awarded at the end of the 4th month
                      following the month of first login via referral message as
                      time-limited points.
                    </TxtCap>
                  </RPointtext>
                </MediaGrid>
              </InfoboxWhite>
            </section>
          </SystemContainer>
        </BgGray>

        <SystemContainer
          data-ratid="referral-application-employee_en_scroll-03_flow-schedule"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <section
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-48']} ${Utils['Pb-48']} ${Utils['Align-center']}`}
          >
            <Heading level="2">
              Point Award Schedule for Meeting Conditions
            </Heading>
            <p className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
              Should you meet the conditions in February, points will be awarded
              as per the schedule below:
            </p>
            <div className={Utils['Mt-16']}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/referral-application-employee/en/img-graph-sp-240201.png`}
                  width="686"
                  height="1172"
                />
                <img
                  src={`${assets}img/campaign/referral-application-employee/en/img-graph-pc-240201.png`}
                  width="1032"
                  height="358"
                  alt=""
                  loading="lazy"
                />
              </picture>
            </div>
            <TxtCap className={Utils['Mt-8']} as="p">
              *When applying for the first time by transferring from another
              carrier (MNP). Other new sign-ups will earn 7,000 points over 3
              months: 2,000 points each after 4 and 5 months, followed by 3,000
              points after 6 months.
            </TxtCap>
          </section>

          <section
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-48']} ${Utils['Pb-64']}`}
          >
            <Heading level="2" className={`${Utils['Align-center']}`}>
              Got questions?
            </Heading>
            <AccordionList
              text={
                'If I have previously subscribed to a plan, am I still eligible for this campaign if I re-subscribe?'
              }
              isOpened={false}
              className={Utils['Mt-24']}
              ratid="campaign_referral-application-employee_en_click-01_faq"
            >
              <p>
                Yes, customers who have previously subscribed are still eligible
                for this campaign, provided they meet the campaign conditions.
              </p>
            </AccordionList>
            <AccordionList
              text={
                'How many times can this campaign be applied? Is there a limit?'
              }
              isOpened={false}
              ratid="campaign_referral-application-employee_en_click-02_faq"
            >
              <ListDisc text={faq3} />
            </AccordionList>
            <AccordionList
              text={
                'I completed the application without using the referral URL sent by a Rakuten employee. Can I still qualify if I log in later?'
              }
              isOpened={false}
              ratid="campaign_referral-application-employee_en_click-03_faq"
            >
              <p>
                Yes, if you log in within 7 days of the application date, you
                will still be eligible.
              </p>
            </AccordionList>
            <AccordionList
              text={
                'I have already participated in a campaign that cannot be combined with this one. Am I not eligible for the current campaign?'
              }
              isOpened={false}
              ratid="campaign_referral-application-employee_en_click-04_faq"
            >
              <p>
                You can still participate in this campaign as long as your new
                subscription doesn't include any other campaigns that can't be
                combined.
              </p>
            </AccordionList>
          </section>
        </SystemContainer>

        <BgYellow>
          <SystemContainer
            data-ratid="referral-application-employee_en_scroll-04_simulation"
            data-ratevent="appear"
            data-ratparam="all"
            className={Utils['Py-56']}
          >
            <BnrSimulation>
              <BnrHead>
                <BnrHeading>
                  <BnrComment>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/referral/en/bnr-simulation-comment-sp.png`}
                        width="480"
                        height="128"
                      />
                      <img
                        src={`${assets}img/campaign/referral/en/bnr-simulation-comment-pc.png`}
                        width="468"
                        height="53"
                        alt="Experience the Savings with Rakuten Mobile!"
                      />
                    </picture>
                  </BnrComment>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/referral/en/bnr-simulation-title-sp-240201.png`}
                      width="686"
                      height="164"
                    />
                    <img
                      src={`${assets}img/campaign/referral/en/bnr-simulation-title-pc-240201.png`}
                      width="505"
                      height="50"
                      alt="See How Much You Could Save!"
                    />
                  </picture>
                </BnrHeading>
              </BnrHead>
              <BnrBody>
                <BnrBodyInner>
                  <p>
                    See how our plan fee stacks up against your current carrier.{' '}
                    <br className={Utils['Show-xoo']} />
                    Discover your savings with our rate simulation tool!
                  </p>
                  <div className={`${Utils['Show-oxx']} ${Utils['Mt-16']}`}>
                    <picture>
                      <img
                        src={`${assets}img/campaign/referral/bnr-simulation-img-sp.png`}
                        width="620"
                        height="248"
                        alt=""
                      />
                    </picture>
                  </div>
                  <CustomSimurationBtn
                    as="a"
                    href="/fee/simulation/?l-id=campaign_referral-application-employee_en_fee_un-limit_simulation"
                  >
                    <span>Calculate Plan Savings</span>
                  </CustomSimurationBtn>
                </BnrBodyInner>
              </BnrBody>
            </BnrSimulation>
            <BnrLink>
              <BnrLinkComment>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/referral-application-employee/en/bnr-link-comment-sp.png`}
                    width="656"
                    height="94"
                  />
                  <img
                    src={`${assets}img/campaign/referral-application-employee/en/bnr-link-comment-pc.png`}
                    width="374"
                    height="52"
                    alt="Featured App"
                  />
                </picture>
              </BnrLinkComment>
              <div className={`${Utils['Show-oxx']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/campaign/referral/bnr-link-1.png`}
                  width="109"
                  height="114"
                  alt=""
                />
              </div>
              <BnrLinkTitle className={Utils['Align-center']}>
                With Rakuten Link app Unlimited Domestic Calls
                <BnrLinkAnnotation>*</BnrLinkAnnotation>
              </BnrLinkTitle>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/referral/en/bnr-link-2-sp.png`}
                    width="622"
                    height="204"
                  />
                  <img
                    src={`${assets}img/campaign/referral/en/bnr-link-2-pc.png`}
                    width="915"
                    height="216"
                    alt=""
                  />
                </picture>
              </div>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <CustomLinkBtn
                  as="a"
                  href="/service/rakuten-link/en/?l-id=campaign_referral-application-employee_en_service_rakuten-link"
                  className="Bnr-link-btn"
                >
                  <span>Learn More</span>
                </CustomLinkBtn>
              </div>
              <BnrLinkAnnotation as="p" className={Utils['Mt-16']}>
                *Calls to certain numbers (starting with 0570, etc.) and special
                numbers (188) are not eligible for free calls. A fee of 22 yen
                per 30 sec. applies when not using the app.
              </BnrLinkAnnotation>
            </BnrLink>
          </SystemContainer>
        </BgYellow>

        <SectionCommonSaikyo
          className={Utils['Mt-48']}
          data-ratid="referral-application-employee_scroll-05_plan"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <CommonSaikyoEn />
        </SectionCommonSaikyo>
        <SystemContainer>
          <section
            className={Utils['Mt-56']}
            data-ratid="referral-application-employee_en_scroll-06_rule"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading level="2" id="campaign-rule2162">
              【Limited to Those Referred by Rakuten Employees】Rakuten SAIKYO
              Plan Referral Campaign
            </Heading>
            {/* ルールを更新する場合はこちらも→ campaign-rule-2162en.ejs */}
            <CampaignRule2162en />

            <Heading
              level="2"
              id="campaign-rule2162turbo"
              className={Utils['Mt-64']}
            >
              [Rakuten Turbo]【Limited to Those Referred by Rakuten
              Employees】Rakuten SAIKYO Plan Referral Campaign
            </Heading>
            {/* ルールを更新する場合はこちらも→ campaign-rule-2162turbo-en.ejs */}
            <CampaignRule2162turboEn />
          </section>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </CustomSystemWrapper>
    </>
  )
}

export default CampaignReferralapplicationemployeeEn
