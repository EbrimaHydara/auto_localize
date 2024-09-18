import type { NextPage } from 'next'
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { anchorCallback } from '@components/utils/anchorCallback'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import {
  ButtonPrimary,
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { Tab } from '@components/atoms/Tab'
import { InfoboxEmphasis2 } from '@components/atoms/Infobox'
import {
  IconChevronRight,
  IconSignWarningLine,
  IconSignInfoLine,
  IconNewTabLine,
  IconArrowDown,
} from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { CampaignRule2265en } from '@components/include/campaign/rules/2024/CampaignRule2265en'
import { CommonSaikyoEn } from '@components/include/common/Saikyo'
import { CustomBottomFixed } from '@components/include/common/CustomBottomFixed'
import { Checkbox } from '@components/atoms/Checkbox'
import { fontRakutenSansUi } from '@styles/fonts'
const imgPath = `${assets}img/fee/youth/en/`

const CustomSystemWrapper = styled(SystemWrapper)`
  font-family: ${fontRakutenSansUi.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`

const KvHeading = styled.div`
  display: flex;
  justify-content: center;
  img {
    ${mixins.mq.MinL} {
      min-width: calc((1440 / 1032) * 100vw);
    }
    ${mixins.mq.MinCustom('1033px')} {
      min-width: 1440px;
    }
  }
  ${mixins.mq.MinL} {
    background: url(${imgPath}kv-bg.png) repeat;
    background-size: 48px 530px;
  }
`
const BgBlue = styled.div`
  position: relative;
  background-color: #d8ecfc;
  &::after {
    content: '';
    position: absolute;
    background: url(${imgPath}bg-bottom-icon-sp.png) no-repeat;
    background-size: contain;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 286px;
    height: 101px;
    margin: 0 auto;
    ${mixins.mq.MinL} {
      background: url(${imgPath}bg-bottom-icon-pc.png) no-repeat;
      background-size: contain;
      width: 1235px;
      height: 184px;
    }
  }
`
const RecommendHeading = styled.h2`
  ${mixins.mq.MinL} {
    text-align: center;
  }
`
const ProductPriceWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`
const BtnGridHalf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  justify-content: center;
  max-width: 500px;
  margin: 32px auto 0;
  ${mixins.mq.MinL} {
    gap: 24px;
    grid-template-columns: 240px 240px;
    a {
      width: 100%;
    }
  }
`
const BtnGridHalfWide = styled(BtnGridHalf)`
  max-width: 100%;
  grid-template-columns: 1fr;
  gap: 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: 1fr 1fr;
  }
`
const BoxWhite = styled.div`
  border-radius: 8px;
  box-shadow: 0px 3.5px 0px 0px #add5ed;
  padding: 32px 16px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MinL} {
    padding: 40px 16px;
  }
`
const TabBoxWhite = styled(BoxWhite)`
  border-radius: 0px 0px 8px 8px;
  ${mixins.mq.MinL} {
    padding: 40px;
  }
`
const TabHeading = styled.span`
  font-size: 20px;
  ${mixins.mq.MinL} {
    font-size: 24px;
  }
`
const MaxWidthWrap = styled.div`
  ${mixins.mq.MinL} {
    max-width: 918px;
    margin: 0 auto;
  }
`
const ProgramWrap = styled.div`
  margin-top: 64px;
  padding: 0 16px 114px;
  ${mixins.mq.MinL} {
    margin-top: 120px;
    padding: 0 0 228px;
  }
`
const BoxWPink5 = styled.div`
  border-radius: 8px 8px 0px 0px;
  padding: 16px 32px;
  background: ${props => props.theme.colors.pink5};
`

const Parallax = styled.div`
  ${mixins.mq.MinL} {
    position: relative;
    background: url(${imgPath}bg-parallax-240312.png) no-repeat;
    background-size: 2000px 723px;
    background-position: center;
    background-attachment: fixed;
  }
`

const EntryContent = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 16px;
`

const EntryContentPeriod = styled.div`
  border-bottom: solid 1px ${props => props.theme.colors.monotone75};
`

const TxtWaringWrap = styled.div`
  margin-inline: auto;
  padding: 10px;
  width: 100%;
  max-width: 582px;
  background-color: ${props => props.theme.colors.alertBg};
  }
`
const TxtWaring = styled.p`
  color: ${props => props.theme.colors.alertText};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    &::before {
      font-size: 16px;
      margin-right: 4px;
    }
  }
`
const TxtWaring2 = styled.p`
  margin-inline: auto;
  width: fit-content;
  display: flex;
  align-items: center;
  text-align: left;
  column-gap: 0.5em;
  ${mixins.mq.MaxS} {
    font-size: ${props => props.theme.fonts.s};
  }
`

const SaikyoWrapper = styled.section`
  max-width: 1032px;
  margin: auto;
`
const FlexColumnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  padding: 0 40px;
  > img {
    width: initial;
    height: 140px;
    margin-bottom: -40px;
  }
  > div {
    margin: auto;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
`

const NavAnchor = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  margin-top: 80px;
  ${mixins.mq.MaxM} {
    margin-top: 48px;
  }
`

const NavAnchorInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 1064px;
  width: 100%;
  margin: auto;
  padding: 16px;
  ${mixins.mq.MaxM} {
    gap: 0;
    flex-direction: initial;
    padding: 8px 0;
    background-color: white;
  }
`

const NavAnchorItem = styled.a`
  display: flex;
  padding: 12px 8px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  div {
    font-size: ${props => props.theme.fonts.base};
    align-items: center;
    margin-right: 6px;
    color: ${props => props.theme.colors.lightBlack};
    ${mixins.mq.MaxM} {
      font-size: ${props => props.theme.fonts.s};
    }
  }
  span {
    color: ${props => props.theme.colors.primary};
    ${mixins.mq.MaxM} {
      display: none;
    }
  }
  &:hover {
    opacity: 0.75;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    border: none;
    padding: 0;
    line-height: 1.1;
    p {
      font-size: 13px;
    }
    &:hover {
      opacity: initial;
    }
    &:not(:last-child) {
      border-radius: 0;
      border-right: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
`

const InfoboxCaution = styled.div`
  background-color: #ebf7fe;
  margin-top: 24px;
  padding: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    padding: 24px 16px;
  }
  > span {
    &::before {
      font-size: 32px;
      color: #006497;
    }
  }
`

const TxtHighlight = styled.p`
  color: #006497;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: -0.2em;
  text-decoration-thickness: 0.5em;
  text-decoration-color: #fcf404;
  text-decoration-skip-ink: none;
`

const InfoShop = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
`

const LifeStage = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  picture {
    width: calc(50% - 8px);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`

const CampaignInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-top: -16px;
  ${mixins.mq.MaxM} {
    margin-top: 0;
    gap: 8px;
    flex-direction: column;
    margin-top: 8px;
  }
`

const ButtonSuccessLarge = styled.span`
  display: inline-block;
  position: relative;
  text-align: center;
  background-color: ${props => props.theme.colors.successBg};
  color: ${props => props.theme.colors.successText};
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  font-size: 18px;
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  line-height: 1.4;
`

const ProgramInner = styled.div`
  ${mixins.mq.MinL} {
    max-width: 936px;
    margin: auto;
  }
`

const FeeYouthEn: NextPage = () => {
  const pagetitle = 'SAIKYO YOUTH Program'
  const directories = [
    { path: '/fee/saikyo-plan/en/', label: 'Rakuten SAIKYO Plan (Price plan)' },
  ]
  const breadcrumbs = [
    {
      text: 'Top',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const theme = useContext(ThemeContext)
  const scrollTriggerRef = useRef(null)

  const isLocal = false
  let campaignCheckApi = ''
  if (isLocal) {
    campaignCheckApi = '/json/dummy-campaign.json'
  } else {
    campaignCheckApi =
      'https://api.oubo.rakuten.co.jp/2.0/entry/check?code=/rmobile/youth/240306'
  }

  const [isLoad, setLoadStatus] = useState(false)
  const [isCampaignEntry, setCampaignStatus] = useState(false)
  const [isCheckEntry, setEntryButtonStatus] = useState(false)
  const checkEntry = useCallback((checked?: boolean) => {
    if (checked) {
      setEntryButtonStatus(true)
    } else {
      setEntryButtonStatus(false)
    }
  }, [])

  useEffect(() => {
    fetch(campaignCheckApi, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => {
        if (!res.ok && res.status !== 200) {
          console.log('not ok')
        } else {
          return res.json()
        }
      })
      .then(data => {
        console.log(data)
        if (data.results[0].applied) setCampaignStatus(true)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoadStatus(true)
      })
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="Youth savings champ! Experience unparalleled savings with SAIKYO YOUTH Program, enhanced by a family discount. Rakuten SAIKYO Plan offers the lowest price among all carriers for 3GB of data, available until you turn 23! *Surveyed by our company, as of March 2024."
        directories={directories}
        ogp_img={`https://network.mobile.rakuten.co.jp${imgPath}ogp.png`}
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
                srcSet={`${imgPath}kv-sp-240430.png`}
                width="750"
                height="1442"
              />
              <img
                src={`${imgPath}kv-pc-240430.png`}
                width="1440"
                height="530"
                alt="Double Discounts for Ages 22 and Under! SAIKYO YOUTH Program"
              />
            </picture>
          </h1>
        </KvHeading>
        <BgBlue className={Utils['Pt-8']}>
          <SystemContainer>
            <TxtCap as="p">
              *1 Our rates are the most competitive when comparing actual prices
              with only family discounts and the 22-and-under campaign,
              excluding kid-specific plans. Surveyed by our company, as of March
              2024. Conditions for program eligibility apply. *2 Available up
              until the month before turning 23. *3 Points are awarded as
              time-limited points after conditions are met, around two months
              in. *4 Some numbers excluded. ¥22/30s without Rakuten Link app.*5
              AQUOS wish3 available for a lump sum or in 48 installments of
              29,700 yen total, with a 0% APR over 48 months, exclusive to
              Rakuten Card payments. *6 Conditions for program eligibility
              apply. *Multiple lines still earn 110 points each.{' '}
              <TxtEmp02>
                *The "actual price" reflects the cost after including points
                awarded later upon meeting conditions, differing from the
                initial payment amount.
              </TxtEmp02>{' '}
              For details, please see{' '}
              <LinkNormal
                href="?l-id=fee_youth_en#campaign-rule226"
                onClick={e => anchorCallback(e, 'campaign-rule2265')}
              >
                the rules
              </LinkNormal>
              .
            </TxtCap>
            <div className={Utils['Mt-48']}>
              <EntryContent id="entry" aria-hidden={!isLoad}>
                <EntryContentPeriod
                  className={`${Utils['Pb-16']} ${Utils['Align-center']}`}
                >
                  <TxtEmp01>【Registration】</TxtEmp01>
                  <br className={Utils['Show-oox']} />
                  Tuesday, March 12, 2024 at 9:00{' '}
                  <br className={Utils['Show-oxx']} />- End Date TBD
                </EntryContentPeriod>
                <TxtWaringWrap
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
                  aria-hidden={isCampaignEntry}
                >
                  <TxtWaring>
                    <IconSignWarningLine />
                    <span>
                      Registration requires the Rakuten ID of the contracting
                      individual, who must be 22 or under.
                    </span>
                  </TxtWaring>
                  <div className={`${Utils['Align-center']}`}>
                    <Checkbox
                      text="I have reviewed the notes above."
                      value="terms"
                      onChangeCheck={checked => checkEntry(checked)}
                      className={Utils['Mt-16']}
                    />
                  </div>
                </TxtWaringWrap>
                <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                  <div aria-hidden={isCampaignEntry}>
                    <ButtonPrimaryLarge
                      as="a"
                      href={`https://login.account.rakuten.com/sso/logout?post_logout_redirect_uri=https://oubo.rakuten.co.jp/apply/rmobile/youth/240306`}
                      aria-disabled={!isCheckEntry}
                    >
                      Register Here
                    </ButtonPrimaryLarge>
                  </div>
                  <div aria-hidden={!isCampaignEntry}>
                    <ButtonSuccessLarge>You're Registered!</ButtonSuccessLarge>
                  </div>
                </div>
                <div
                  className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}
                  aria-hidden={isCampaignEntry}
                >
                  <LinkIconAfter
                    href="https://my.rakuten.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ratid="fee_youth_rakuten_member_registration"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    Check Your Rakuten Membership or Sign up for a Free Rakuten
                    Account
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
                <TxtCap
                  as="p"
                  className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}
                >
                  *This promotion is for individuals aged 0-22. Registration
                  using a Rakuten ID of someone outside this age range (such as
                  a family member) won't qualify for point rebates.
                  <br />
                  *Conditions apply for point rebates. For details, please see{' '}
                  <LinkNormal
                    href="?l-id=fee_youth_en#campaign-rule2265"
                    onClick={e => anchorCallback(e, 'campaign-rule2265')}
                  >
                    the rules
                  </LinkNormal>
                  .
                  <br />
                  *To view your registration history,{' '}
                  <LinkNormal href="https://oubo.rakuten.co.jp/list/">
                    click here
                  </LinkNormal>
                  .
                </TxtCap>
              </EntryContent>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
              <img
                src={`${imgPath}title-before-pc.png`}
                width="421"
                height="20"
                alt="If You Haven't Joined Rakuten Mobile Yet"
                loading="lazy"
              />
              <BtnGridHalfWide className={Utils['Mt-24']}>
                <div>
                  <ButtonPrimaryLarge
                    as="a"
                    href="/guide/application?lid-r=fee_youth_en_guide_application01&locale=en"
                  >
                    Apply Rakuten SAIKYO Plan
                  </ButtonPrimaryLarge>
                </div>
                <div>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/shop/en/?l-id=fee_youth_en_shop_en01"
                  >
                    Find a Shop Near You/Book a Visit
                  </ButtonSecondaryLarge>
                </div>
              </BtnGridHalfWide>
            </div>
          </SystemContainer>
          <NavAnchor>
            <NavAnchorInner>
              <NavAnchorItem
                href="#saikyo"
                onClick={e => anchorCallback(e, 'saikyo')}
                data-ratid="fee_youth_en_click-01_youth"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <div>
                  SAIKYO YOUTH
                  <br />
                  Program
                </div>
                <img
                  src={`${imgPath}icon-yen.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
              <NavAnchorItem
                href="#product"
                onClick={e => anchorCallback(e, 'product')}
                data-ratid="fee_youth_en_click-02_products"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <div>Top Picks</div>
                <img
                  src={`${imgPath}icon-smartphone.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
              <NavAnchorItem
                href="#structure"
                onClick={e => anchorCallback(e, 'structure')}
                data-ratid="fee_youth_en_click-03_mechanics"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <div>
                  Program <br className={Utils['Show-oxx']} />
                  Mechanics
                </div>
                <img
                  src={`${imgPath}icon-calendar.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
              <NavAnchorItem
                href="#lifestage"
                onClick={e => anchorCallback(e, 'lifestage')}
                data-ratid="fee_youth_en_click-04_usage"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <div>
                  Expected <br className={Utils['Show-oxx']} />
                  Usage
                </div>
                <img
                  src={`${imgPath}icon-star.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
            </NavAnchorInner>
          </NavAnchor>
          <Parallax>
            <SystemContainer>
              <section className={`${Utils['Mt-24']} ${Utils['Mt-pc-64']}`}>
                <RecommendHeading
                  className={Utils['Align-center']}
                  data-ratid="fee_youth_en_scroll-01-fee"
                  data-ratevent="appear"
                  data-ratparam="all"
                  id="saikyo"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-1-sp-240430.png`}
                      width="688"
                      height="276"
                    />
                    <img
                      src={`${imgPath}reason-1-pc-240430.png`}
                      width="961"
                      height="186"
                      alt="SAIKYO YOUTH Program, Ideal for Anyone up to age 22! LOWEST PRICE (3GB) Across All Carriers!"
                      loading="lazy"
                    />
                  </picture>
                </RecommendHeading>
                <BoxWhite className={Utils['Mt-8']}>
                  <MaxWidthWrap>
                    <p className={Utils['Align-center']}>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}fee-txt-01-sp-240430.png`}
                          width="622"
                          height="1068"
                        />
                        <img
                          src={`${imgPath}fee-txt-01-pc-240430.png`}
                          width="918"
                          height="473"
                          alt="After applying the family discount to ¥968/mo. and with 110 point rebates from SAIKYO YOUTH Program, Fee of 3GB Data Drops to Effectively ¥780/mo.～"
                          loading="lazy"
                        />
                      </picture>
                    </p>
                    <TxtCap as="ul" className={Utils['Mt-16']}>
                      <li>
                        *1 This comparison with other carriers is based on
                        applying only the family discounts and the 22-and-under
                        campaign, excluding any other discounts. Surveyed by our
                        company, as of March 2024. *2 Available up until the
                        month before turning 23.
                      </li>
                    </TxtCap>
                    <p
                      className={`${Utils['Mt-32']} ${Utils['Mt-pc-48']} ${Utils['Align-center']}`}
                    >
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}fee-txt-02-sp.png`}
                          width="522"
                          height="982"
                        />
                        <img
                          src={`${imgPath}fee-txt-02-pc.png`}
                          width="680"
                          height="557"
                          alt="With SAIKYO FAMILY Program applied, ¥2,880/mo. (¥3,168 incl. tax) over 20GB, ¥1,880/mo. (¥2,068 incl. tax) Over 3GB up to 20GB, and ¥880/mo. (¥968 incl. tax) up to 3GB."
                          loading="lazy"
                        />
                      </picture>
                    </p>
                    <TxtCap
                      as="p"
                      className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                    >
                      *7 Speed may be restricted due to fair service provision
                      or network environment.
                      <br />
                      *Excludes call charges and related fees.
                    </TxtCap>
                    <InfoboxEmphasis2
                      className={`${Utils['Mt-32']} ${Utils['Mt-pc-48']} ${Utils['Align-center']}`}
                    >
                      <p>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}people-sp-240430.png`}
                            width="620"
                            height="390"
                          />
                          <img
                            src={`${imgPath}people-pc-240430.png`}
                            width="358"
                            height="154"
                            alt="Eligible for Relatives and Housemates!"
                            loading="lazy"
                          />
                        </picture>
                      </p>
                      <div ref={scrollTriggerRef}>
                        <ButtonSecondaryLarge
                          as="a"
                          href="/fee/family/en/?l-id=fee_youth_en_fee_family_en"
                        >
                          Learn More About SAIKYO FAMILY Program
                        </ButtonSecondaryLarge>
                      </div>
                    </InfoboxEmphasis2>
                  </MaxWidthWrap>
                </BoxWhite>
              </section>
              <section
                className={`${Utils['Mt-40']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
              >
                <RecommendHeading
                  data-ratid="fee_youth_en_scroll-02-call"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-2-sp.png`}
                      width="688"
                      height="148"
                    />
                    <img
                      src={`${imgPath}reason-2-pc.png`}
                      width="734"
                      height="126"
                      alt="EnjoyFree Domestic Calls"
                      loading="lazy"
                    />
                  </picture>
                </RecommendHeading>
                <BoxWhite className={Utils['Mt-8']}>
                  <FlexColumnBox>
                    <img
                      src={`${imgPath}illust-people.png`}
                      width="160"
                      height="140"
                      alt=""
                      loading="lazy"
                      className={Utils['Show-xxo']}
                    />
                    <div>
                      <h3>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}content-call-sp.png`}
                            width="645"
                            height="650"
                          />
                          <img
                            src={`${imgPath}content-call-pc.png`}
                            width="531"
                            height="208"
                            alt="Unlimited Calls to Anyone Using the App!"
                            loading="lazy"
                          />
                        </picture>
                      </h3>
                      <div className={Utils['Mt-pc-24']}>
                        <ButtonRegularLarge
                          as="a"
                          href="/service/rakuten-link/en/?l-id=fee_youth_en_service_rakuten-link_en"
                        >
                          Learn More About Rakuten Link
                        </ButtonRegularLarge>
                      </div>
                      <TxtCap as="p" className={Utils['Mt-24']}>
                        *Some numbers excluded. ¥22/30s without Rakuten Link
                        app.
                      </TxtCap>
                    </div>
                    <img
                      src={`${imgPath}illust-smartphone.png`}
                      width="160"
                      height="140"
                      alt=""
                      loading="lazy"
                      className={Utils['Show-xxo']}
                    />
                  </FlexColumnBox>
                </BoxWhite>
              </section>
              <section className={`${Utils['Mt-64']} ${Utils['Mt-pc-16']}`}>
                <RecommendHeading
                  className={Utils['Align-center']}
                  data-ratid="fee_youth_en_scroll-03-phone"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-3-sp.png`}
                      width="688"
                      height="156"
                    />
                    <img
                      src={`${imgPath}reason-3-pc.png`}
                      width="835"
                      height="126"
                      alt="Find Affordable Smartphones"
                      loading="lazy"
                      id="product"
                    />
                  </picture>
                </RecommendHeading>
                <Tab
                  heading1={<TabHeading>Android</TabHeading>}
                  heading2={<TabHeading>iPhone</TabHeading>}
                  ratId1="fee_youth_en_click-05_android"
                  ratId2="fee_youth_en_click-06_iPhone"
                  className={Utils['Mt-8']}
                  content1={
                    <TabBoxWhite>
                      <MaxWidthWrap>
                        <ProductPriceWrap>
                          <div
                            className={`${Utils['Px-24']} ${Utils['Px-pc-0']}`}
                          >
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}img-android-240315.png`}
                                width="488"
                                height="409"
                              />
                              <img
                                src={`${imgPath}img-android-240315.png`}
                                width="244"
                                height="204"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </div>
                          <div>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}android-txt-01-sp.png`}
                                width="622"
                                height="362"
                              />
                              <img
                                src={`${imgPath}android-txt-01-pc.png`}
                                width="383"
                                height="235"
                                alt="AQUOS wish3: ¥29,700, With 48 Monthly Payments ¥618/mo."
                                loading="lazy"
                              />
                            </picture>
                          </div>
                        </ProductPriceWrap>
                        <p
                          className={`${Utils['Mt-0']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
                        >
                          <picture>
                            <source
                              media={`(max-width:${theme.max.m})`}
                              srcSet={`${imgPath}android-txt-02-sp.png`}
                              width="648"
                              height="328"
                            />
                            <img
                              src={`${imgPath}android-txt-02-pc.png`}
                              width="680"
                              height="104"
                              alt="Exciting Campaigns Ongoing! Get ¥20,000 discount!"
                              loading="lazy"
                            />
                          </picture>
                        </p>
                        <BtnGridHalf>
                          <div>
                            <ButtonRegularLarge
                              href="/product/smartphone/aquos-wish3/?l-id=fee_youth_en_product_smartphone_aquos-wish3"
                              as="a"
                            >
                              Learn More
                            </ButtonRegularLarge>
                          </div>
                          <div>
                            <ButtonPrimaryLarge
                              as="a"
                              href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600659&selectAvailable=true"
                              data-ratid="fee_youth_aquos-wish3_order-button_bss"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              Buy Now
                            </ButtonPrimaryLarge>
                          </div>
                        </BtnGridHalf>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonRegularLarge
                            as="a"
                            href="/product/smartphone/?l-id=fee_youth_en_product_smartphone"
                          >
                            View More Androids
                          </ButtonRegularLarge>
                        </div>
                      </MaxWidthWrap>
                      <TxtCap as="p" className={Utils['Mt-32']}>
                        *8 48-installment payment is exclusive to Rakuten Card
                        holders. Cash and installment total match the product
                        price: 48 payments over 48 months at 0% APR. Other
                        credit cards can be used for 24 installments or a lump
                        sum. An installment fee applies for 24 installments with
                        non-Rakuten credit cards. *9 Discount available under "
                        <LinkNormal href="/campaign/android-discount/#campaign-rule2178">
                          [Android Products] Special Price Campaign
                        </LinkNormal>
                        ."
                      </TxtCap>
                    </TabBoxWhite>
                  }
                  content2={
                    <TabBoxWhite>
                      <MaxWidthWrap>
                        <BoxWPink5 className={Utils['Align-center']}>
                          <p>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-01-sp.png`}
                                width="467"
                                height="99"
                              />
                              <img
                                src={`${imgPath}iphone-txt-01-pc.png`}
                                width="362"
                                height="20"
                                alt="Best Price Across All Carriers!"
                                loading="lazy"
                              />
                            </picture>
                          </p>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            *As of February, 2024. This compares official online
                            prices for iPhones.{' '}
                            <LinkNormal href="/product/iphone/fee/?l-id=fee_youth_en_product_iphone_fee">
                              See the price comparison chart here
                            </LinkNormal>
                            .
                          </TxtCap>
                        </BoxWPink5>
                        <ProductPriceWrap className={Utils['Mt-24']}>
                          <div
                            className={`${Utils['Px-24']} ${Utils['Px-pc-0']}`}
                          >
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}img-iphone-sp.png`}
                                width="516"
                                height="364"
                              />
                              <img
                                src={`${imgPath}img-iphone-pc.png`}
                                width="258"
                                height="203"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </div>
                          <div>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-02-sp.png`}
                                width="622"
                                height="378"
                              />
                              <img
                                src={`${imgPath}iphone-txt-02-pc.png`}
                                width="425"
                                height="242"
                                alt="iPhone 15 (128GB): ¥131,800, With 48 Monthly Payments (Kaikae Chotoku Program) ¥2,745/mo."
                                loading="lazy"
                              />
                            </picture>
                          </div>
                        </ProductPriceWrap>
                        <div className={Utils['Align-center']}>
                          <TxtSize size="m" as="p" className={Utils['Mt-24']}>
                            <TxtEmp02>
                              Enjoy the newest iPhone at a more affordable
                              monthly rate!
                            </TxtEmp02>
                          </TxtSize>
                          <p className={Utils['Mt-24']}>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-04-sp.png`}
                                width="640"
                                height="368"
                              />
                              <img
                                src={`${imgPath}iphone-txt-04-pc.png`}
                                width="680"
                                height="104"
                                alt="Now You Get Significant Point Rebates!"
                                loading="lazy"
                              />
                            </picture>
                          </p>
                        </div>
                        <BtnGridHalf>
                          <div>
                            <ButtonRegular
                              href="/product/iphone/iphone-15/?l-id=fee_youth_en_product_iphone_iphone-15"
                              as="a"
                            >
                              Learn More
                            </ButtonRegular>
                          </div>
                          <div>
                            <ButtonPrimary
                              as="a"
                              href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600672&selectAvailable=true"
                              data-ratid="fee_youth_iphone-15_order-button_bss"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              Buy Now
                            </ButtonPrimary>
                          </div>
                        </BtnGridHalf>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonRegularLarge
                            as="a"
                            href="/product/iphone/?l-id=fee_youth_en_product_iphone"
                          >
                            View More iPhones
                          </ButtonRegularLarge>
                        </div>
                      </MaxWidthWrap>
                      <TxtCap as="p" className={Utils['Mt-32']}>
                        *10 48-installment payment is exclusive to Rakuten Card
                        holders. Cash and installment total match the product
                        price: 48 payments over 48 months at 0% APR. Other
                        credit cards can be used for 24 installments or a lump
                        sum. An installment fee applies for 24 installments with
                        non-Rakuten credit cards. For the collection of modified
                        or used products, a fee of 3,300 yen will be charged. If
                        the collected products do not meet our specified quality
                        standards, a predetermined penalty may be incurred, or
                        the products may become ineligible for return. For other
                        terms and conditions,{' '}
                        <LinkNormal href="/service/replacement-program/">
                          click here
                        </LinkNormal>
                        .<br />
                        *11 For campaign details,{' '}
                        <LinkNormal href="/campaign/iphone-point/#detail">
                          click here
                        </LinkNormal>
                        .
                      </TxtCap>
                    </TabBoxWhite>
                  }
                />
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']} ${Utils['Align-center']}`}
              >
                <h2
                  data-ratid="fee_youth_en_scroll-04-mechanics"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-shikumi-sp-240430.png`}
                      width="688"
                      height="140"
                    />
                    <img
                      src={`${imgPath}title-shikumi-pc-240430.png`}
                      width="324"
                      height="84"
                      alt="SAIKYO YOUTH Program Mechanics"
                      loading="lazy"
                      id="structure"
                    />
                  </picture>
                </h2>
                <TxtEmp01
                  as="p"
                  className={`${Utils['Mt-8']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
                >
                  Joining the Program Is Easy!
                  <br />
                  Register Now and Enjoy Benefits From Day One!
                </TxtEmp01>
                <BoxWhite
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
                >
                  <ProgramInner>
                    <img
                      src={`${imgPath}march.png`}
                      width="298"
                      height="43"
                      alt="Example for March Registration"
                      loading="lazy"
                    />
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}period-sp.png`}
                        width="657"
                        height="864"
                      />
                      <img
                        src={`${imgPath}period-pc.png`}
                        width="936"
                        height="362"
                        alt="Example for March Registration"
                        loading="lazy"
                        className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']}`}
                      />
                    </picture>
                    <TxtCap
                      as="p"
                      className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-left']}`}
                    >
                      *Meet all conditions in March to earn points by May's end.
                      <br />
                      *Once you register, keep receiving rewards by maintaining
                      eligibility. *Available up until the month before turning
                      23. <br />
                      *No March points if you turn 23 in your registration
                      month.
                    </TxtCap>
                    <InfoboxCaution>
                      <IconSignInfoLine />
                      <TxtHighlight>
                        For Minors (Under 18): Check below link for how to apply
                        and what documents you need.
                      </TxtHighlight>
                      <div
                        className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
                      >
                        <LinkIconAfter href="/flow/for-minors/?l-id=fee_youth_en_flow_for-minors">
                          For Under 18s: How to Apply and What You Need
                          <IconChevronRight />
                        </LinkIconAfter>
                      </div>
                      <InfoShop className={Utils['Mt-16']}>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}shop-txt-sp.png`}
                            width="494"
                            height="198"
                          />
                          <img
                            src={`${imgPath}shop-txt-pc.png`}
                            width="564"
                            height="40"
                            alt="Our shops are ready to help with your application!"
                            loading="lazy"
                          />
                        </picture>
                        <p
                          className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
                        >
                          Questions or Issues?{' '}
                          <br className={Utils['Show-oox']} />
                          We're here in-store to assist!
                        </p>
                        <div className={Utils['Mt-16']}>
                          <ButtonSecondaryLarge
                            as="a"
                            href="/shop/en/?l-id=fee_youth_en_shop_en02"
                          >
                            Find a Shop Near You
                          </ButtonSecondaryLarge>
                        </div>
                      </InfoShop>
                    </InfoboxCaution>
                  </ProgramInner>
                </BoxWhite>
                <h3
                  className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']}`}
                  data-ratid="fee_youth_en_scroll-05-stage"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-life-stage-sp-240430.png`}
                      width="686"
                      height="250"
                    />
                    <img
                      src={`${imgPath}title-life-stage-pc-240430.png`}
                      width="678"
                      height="85"
                      alt="From First Smartphone Experiences up to Age 22, Perfectly Suited for Every Life Stage!"
                      loading="lazy"
                      id="lifestage"
                    />
                  </picture>
                </h3>
                <LifeStage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-1-sp.png`}
                      width="686"
                      height="494"
                    />
                    <img
                      src={`${imgPath}life-stage-1-pc.png`}
                      width="508"
                      height="164"
                      alt="～For Elementary School Kids: Enhanced security for a worry-free smartphone start!"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-2-sp.png`}
                      width="686"
                      height="438"
                    />
                    <img
                      src={`${imgPath}life-stage-2-pc.png`}
                      width="508"
                      height="164"
                      alt="From Upper Elementary to Junior High: Stay safe from overuse with our filtering services!"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-3-sp.png`}
                      width="686"
                      height="578"
                    />
                    <img
                      src={`${imgPath}life-stage-3-pc.png`}
                      width="508"
                      height="164"
                      alt="Junior to Senior High Students: Get unlimited data for effectively 2,780 yen (3,058 yen incl.tax)  and dive into endless music and videos!"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-4-sp.png`}
                      width="686"
                      height="492"
                    />
                    <img
                      src={`${imgPath}life-stage-4-pc.png`}
                      width="508"
                      height="164"
                      alt="University Students: Seamless online classes with tethering. Plus, enjoy up to 2GB of free data abroad!"
                      loading="lazy"
                    />
                  </picture>
                </LifeStage>
                <TxtCap
                  as="p"
                  className={`${Utils['Mt-16']} ${Utils['Align-left']}`}
                >
                  <TxtEmp02>
                    *The "actual price" reflects the cost after including points
                    awarded later upon meeting conditions, differing from the
                    initial payment amount.
                  </TxtEmp02>
                  <br />
                  *12 This comparison with other carriers is based on applying
                  only the family discounts and the 22-and-under campaign,
                  excluding any other discounts. *Excludes call charges and
                  related fees.
                  <br />
                  *13 Data consumption counts towards plan’s usage. Excludes
                  call charges and related fees. Speed max of 128kbps after 2GB.
                  For details on data communication (overseas roaming),{' '}
                  <LinkNormal href="/service/global/overseas/en/#note1">
                    click here
                  </LinkNormal>
                  .
                </TxtCap>
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']} ${Utils['Align-center']}`}
              >
                <h2
                  data-ratid="fee_youth_en_scroll-06-referral"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-otoku-sp-240430.png`}
                      width="686"
                      height="129"
                    />
                    <img
                      src={`${imgPath}title-otoku-pc-240430.png`}
                      width="391"
                      height="84"
                      alt="Earn More Points by Referring Family and Friends!"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <h3
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-32']} ${Utils['Px-56']} ${Utils['Px-pc-0']}`}
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-campaign-sp.png`}
                      width="562"
                      height="135"
                    />
                    <img
                      src={`${imgPath}title-campaign-pc.png`}
                      width="813"
                      height="47"
                      alt="Rakuten Mobile Referral Campaign"
                      loading="lazy"
                    />
                  </picture>
                </h3>
                <CampaignInfo>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}point-1-sp.png`}
                      width="686"
                      height="283"
                    />
                    <img
                      src={`${imgPath}point-1-pc.png`}
                      width="504"
                      height="207"
                      alt="Referrer: 7,000 points per referral"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}point-2-sp.png`}
                      width="686"
                      height="377"
                    />
                    <img
                      src={`${imgPath}point-2-pc.png`}
                      width="505"
                      height="207"
                      alt="Referred Customer: 13,000 points for their first sign-up and MNP transfers. *For other new sign-ups, 6,000 points."
                      loading="lazy"
                    />
                  </picture>
                </CampaignInfo>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  *Conditions include using the Rakuten Link app and not
                  qualifying for the Rakuten SAIKYO Plan (Data Type). <br />
                  Points will be awarded in installments starting after the 4th
                  month as time-limited points.
                </TxtCap>
                <div className={`${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/campaign/referral/en/?l-id=fee_youth_en_campaign_referral_en"
                  >
                    See Referral Campaign Details
                  </ButtonRegularLarge>
                </div>
                <h2
                  className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']} ${Utils['Px-sp-32']}`}
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-faq-sp-240430.png`}
                      width="686"
                      height="77"
                    />
                    <img
                      src={`${imgPath}title-faq-pc-240430.png`}
                      width="364"
                      height="48"
                      alt="FAQ"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <BoxWhite
                  className={`${Utils['Mt-16']} ${Utils['Align-left']}`}
                >
                  <AccordionList
                    text="Who qualifies for the SAIKYO YOUTH Program?"
                    isOpened={false}
                  >
                    <p>The key eligibility condition include:</p>
                    <ul className={Utils['Mt-16']}>
                      <li>
                        - Being subscribed to Rakuten SAIKYO Plan.
                        <br />
                        <TxtCap>
                          *Rakuten SAIKYO Plan (Data Type) and Apple Watch
                          Family Sharing are excluded.
                        </TxtCap>
                      </li>
                      <li>
                        - Completing a one-time program registration (per
                        individual)
                      </li>
                      <li>- Being 22 or under</li>
                    </ul>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *Program registration and activation of Rakuten SAIKYO
                      Plan can occur in any sequence.
                      <br />
                      *Eligibility extends until the month before turning 23.
                      Once registered, cancellation is restricted until
                      eligibility ends.
                      <br />
                      *If managed by a parent/guardian, use the youth's Rakuten
                      ID for registration.
                    </TxtCap>
                    <p className={Utils['Mt-16']}>
                      For detailed program rules,{' '}
                      <LinkNormal
                        href="#campaign-rule2265"
                        onClick={(
                          e: React.MouseEvent<HTMLElement, MouseEvent>,
                        ) => anchorCallback(e, 'campaign-rule2265')}
                      >
                        click here
                      </LinkNormal>
                      .
                    </p>
                  </AccordionList>
                  <AccordionList
                    text="What happens to my points if I register mid-month?"
                    isOpened={false}
                  >
                    <p>
                      Points correspond to the month of program entry and are
                      distributed over the next two months without proration.
                    </p>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      *If conditions are met in March, expect points by the end
                      of May.
                    </TxtCap>
                  </AccordionList>
                  <AccordionList
                    text="How does the program apply if I have multiple lines?"
                    isOpened={false}
                  >
                    <p>
                      Program registration is linked to your Rakuten ID.
                      Registrations with one line under the Rakuten SAIKYO Plan
                      applies the benefits to that line. Regardless of how many
                      lines you have, you'll earn 110 monthly reward points.
                    </p>
                    <p>
                      Cancellation of one line doesn't affect your eligibility,
                      provided you maintain at least one active Rakuten SAIKYO
                      Plan subscription.
                    </p>
                    <p>
                      Changing your Rakuten ID requires re-registration to the
                      program.
                    </p>
                  </AccordionList>
                  <AccordionList
                    text="Can the SAIKYO YOUTH Program be combined with other campaigns?"
                    isOpened={false}
                  >
                    Yes, it's compatible with various campaigns.
                    <br />
                    <LinkNormal href="/campaign/">Click here</LinkNormal> for
                    compatible campaigns.
                  </AccordionList>
                  <AccordionList
                    text="Do I need to re-register the program monthly?"
                    isOpened={false}
                  >
                    <p>
                      No, a single entry secures point eligibility until the
                      month before turning 23.
                    </p>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      *Program eligibility ends if all Rakuten SAIKYO Plan
                      subscriptions are cancelled.
                      <br />
                      *Changing your Rakuten ID needs re-registration.
                    </TxtCap>
                  </AccordionList>
                </BoxWhite>
                <h2
                  id="campaign-rule2265"
                  className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']}`}
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-rule-sp-240430.png`}
                      width="686"
                      height="128"
                    />
                    <img
                      src={`${imgPath}title-rule-pc-240430.png`}
                      width="319"
                      height="84"
                      alt="SAIKYO YOUTH Program Rules"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <CampaignRule2265en
                  className={`${Utils['Mt-24']} ${Utils['Align-left']}`}
                />
              </section>
            </SystemContainer>
            <ProgramWrap className={Utils['Align-center']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${imgPath}youth-program-sp-240430.png`}
                  width="686"
                  height="310"
                />
                <img
                  src={`${imgPath}youth-program-pc-240430.png`}
                  width="895"
                  height="188"
                  alt="SAIKYO YOUTH Program Youth Moves the World."
                  loading="lazy"
                />
              </picture>
            </ProgramWrap>
          </Parallax>
        </BgBlue>
        <SaikyoWrapper className={`${Utils['Mt-0']} ${Utils['Mt-pc-48']}`}>
          <CommonSaikyoEn />
        </SaikyoWrapper>
        <SystemContainer>
          <p className={Utils['Mt-32']}>
            <TxtSize size="m">
              <TxtEmp01>Language</TxtEmp01>
            </TxtSize>
            <br />
            *This page is made in Japanese and translated into English. The
            Japanese text shall prevail if there is any conflict or
            inconsistency between these two texts.
          </p>
        </SystemContainer>

        <CustomBottomFixed scrollTrigger={scrollTriggerRef}>
          <div className={Utils['Align-center']}>
            <TxtWaring2 className={Utils['Color-white']}>
              <IconSignWarningLine />
              If you're 22 or under, ensure you register with your personal
              Rakuten ID.
            </TxtWaring2>
            <ButtonPrimaryLarge
              className={Utils['Mt-8']}
              as="a"
              href="?l-id=fee_youth_en_floating#entry"
              onClick={e => anchorCallback(e, 'entry')}
            >
              Register Here
            </ButtonPrimaryLarge>
          </div>
        </CustomBottomFixed>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          className="js-adjust-padding"
        />
      </CustomSystemWrapper>
    </>
  )
}

export default FeeYouthEn
