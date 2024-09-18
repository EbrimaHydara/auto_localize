import type { NextPage } from 'next'
import React, { useContext, useRef } from 'react'
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
import { TxtCap, TxtMarker } from '@components/atoms/Txt'
import { CommonSaikyoEn } from '@components/include/common/Saikyo'
import { Heading } from '@components/atoms/Heading'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import { MediaGridHalf } from '@components/layout/Media'
import {
  IconArrowDown,
  IconCampaignLine,
  IconChevronRight,
  IconHomeLine,
  IconPriceLine,
  IconSmartphoneLine,
} from '@components/icons'
import { FlowList } from '@components/atoms/Flow'
import { Tab } from '@components/atoms/Tab'
import { CommonCtaBottomFixed } from '@components/include/common/CommonCtaBottomFixed'
import {
  FeeFamilyAnchorList,
  FeeFamilyAnchor,
} from '@components/fragment/fee/family/Anchor'
import { fontRakutenSans, fontRakutenSansUi } from '@styles/fonts'

const imgpath = `${assets}img/fee/family/en/`
const CustomSystemWrapper = styled(SystemWrapper)`
  font-family: ${fontRakutenSansUi.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`
const KvHeading = styled.div`
  background: linear-gradient(
    to top,
    ${props => props.theme.colors.orange5} 88px,
    #feffd2 88px,
    #feffd2
  );
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
`
const BgOrange5 = styled.div`
  background-color: ${props => props.theme.colors.orange5};
`
const BgYellow = styled.div`
  background-color: #feffd2;
`
const CustomMediaGridHalf = styled(MediaGridHalf)`
  text-align: center;
  ${mixins.mq.MaxM} {
    div:last-child {
      margin-top: 16px;
    }
  }
`
const HeadingIconHomeLine = styled(IconHomeLine)`
  font-size: 48px;
  ${mixins.mq.MaxM} {
    font-size: 32px;
  }
`
const HeadingH2 = styled.h2`
  font-family: ${fontRakutenSans.style.fontFamily};
  font-feature-settings: 'palt' on;
  line-height: 117%;
  margin-top: 8px;
  .first-line,
  .first-line-symbol,
  .second-line,
  .second-line-symbol {
    line-height: 117%;
  }
  .first-line {
    font-size: 20px;
    font-weight: 600;
  }
  .first-line-symbol {
    font-size: 17px;
    font-weight: 600;
  }
  .second-line {
    font-size: 32px;
    font-weight: bold;
  }
  .second-line-symbol {
    font-size: 25px;
    font-weight: bold;
  }
  ${mixins.mq.MinL} {
    .first-line {
      font-size: 26px;
    }
    .first-line-symbol {
      font-size: 22px;
    }
    .second-line {
      font-size: 52px;
    }
    .second-line-symbol {
      font-size: 44px;
    }
  }
`
const TitleMarker = styled(TxtMarker)`
  background: linear-gradient(transparent 75%, #fff200 0%);
  font-size: 25px;
  line-height: 140%;
  .symbol {
    font-size: 23px;
  }
  ${mixins.mq.MinL} {
    font-size: 28px;
    .symbol {
      font-size: 24px;
    }
  }
`

const CustomFlowList = styled(FlowList)`
  border: none;
  background-color: ${props => props.theme.colors.white};
  &.last-item {
    ${mixins.mq.MaxM} {
      padding-bottom: 0;
    }
    .last-item-img {
      ${mixins.mq.MaxM} {
        margin-top: 24px;
        text-align: center;
      }
      ${mixins.mq.MinL} {
        img {
          position: absolute;
          right: 8px;
          bottom: 0;
        }
      }
      ${mixins.mq.MinCustom('880px')} {
        img {
          right: 126px;
        }
      }
    }
  }
`
const CustomButtonRegular = styled(ButtonRegular)`
  ${mixins.mq.MinL} {
    min-width: 374px;
  }
`
const AnchorWrap = styled(SystemContainer)`
  margin: 16px auto;
  ${mixins.mq.MaxM} {
    margin: 8px auto;
    padding: 0;
  }
`
const SectionCommonSaikyo = styled.section`
  ${mixins.mq.MaxM} {
    margin: 0 calc(50% - 50vw);
    width: 100vw;
    img {
      width: 100svw;
    }
  }
`

const TabContent1 = () => (
  <ul>
    <CustomFlowList className={Utils['Mt-32']}>
      <Heading level="3">
        1. For the Representative: Start by applying for Rakuten Mobile
      </Heading>
      <CustomMediaGridHalf className={Utils['Mt-24']}>
        <div>
          <ButtonPrimaryLarge
            as="a"
            href="https://onboarding.mobile.rakuten.co.jp/?l-id=fee_family-en_step_onb&locale=en"
          >
            Apply Here (New/MNP Transfer)
          </ButtonPrimaryLarge>
        </div>
        <div>
          <ButtonSecondaryLarge
            href="/shop/en/?l-id=fee_family_en_shop_en02"
            as="a"
          >
            Find a Shop Near You/Book a Visit
          </ButtonSecondaryLarge>
        </div>
      </CustomMediaGridHalf>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <LinkIconAfter href="/guide/procedure/en/?l-id=fee_family_en_guide_procedure_en">
          See How to Apply for Rakuten Mobile
          <IconChevronRight />
        </LinkIconAfter>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">
        2. For the Representative: Use the Referral Campaign to add a family
        member
      </Heading>
      <p className={Utils['Mt-24']}>
        You can’t refer someone already with Rakuten Mobile; skip to the next
        step.
        <br />
        <TxtCap>*Ensure each family member applies for their own line.</TxtCap>
      </p>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <CustomButtonRegular
          href="/campaign/referral/en/?l-id=fee_family_en_campaign_referral_en03"
          as="a"
        >
          Refer Your Family
        </CustomButtonRegular>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">
        3. For the Representative: Create a group of SAIKYO FAMILY Program
      </Heading>
      <p className={Utils['Mt-24']}>
        Create a group of SAIKYO FAMILY Program via "my Rakuten Mobile" website
        or app. This allows the family discount to apply to all joined family
        members.
      </p>
      <div className={Utils['Mt-8']}>
        <LinkIconAfter href="/faq/detail/10000911">
          See Details on When the Discount Applies
          <IconChevronRight />
        </LinkIconAfter>
      </div>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <div>
          <CustomButtonRegular
            href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=fee_family_en_ecare"
            as="a"
          >
            Log in to "my Rakuten Mobile"
          </CustomButtonRegular>
        </div>
        <div className={Utils['Mt-24']}>
          <LinkIconAfter href="/guide/family/?l-id=fee_family_en_guide_family02">
            See How to Create a SAIKYO FAMILY Group：
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </div>
    </CustomFlowList>
    <CustomFlowList className="last-item">
      <Heading level="3" className={Utils['Align-ccl']}>
        All family members successfully join <br />
        the SAIKYO FAMILY Program!
      </Heading>
      <div className="last-item-img">
        <img
          src={`${imgpath}img-flow-item.png`}
          width="274"
          height="102"
          alt=""
          loading="lazy"
        />
      </div>
    </CustomFlowList>
  </ul>
)

const TabContent2 = () => (
  <ul>
    <CustomFlowList className={Utils['Mt-32']}>
      <Heading level="3">
        1. For the Representative: Use the Referral Campaign to add a family
        member
      </Heading>
      <p className={Utils['Mt-24']}>
        You can’t refer someone already with Rakuten Mobile; skip to the next
        step.
        <br />
        <TxtCap>*Ensure each family member applies for their own line.</TxtCap>
      </p>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <CustomButtonRegular
          href="/campaign/referral/en/?l-id=fee_family_en_campaign_referral_en04"
          as="a"
        >
          Refer Your Family
        </CustomButtonRegular>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">
        2. For the Representative: Create a group of SAIKYO FAMILY Program
      </Heading>
      <p className={Utils['Mt-24']}>
        Create a group of SAIKYO FAMILY Program via "my Rakuten Mobile" website
        or app. This allows the family discount to apply to all joined family
        members.
      </p>
      <div className={Utils['Mt-8']}>
        <LinkIconAfter href="/faq/detail/10000911">
          See Details on When the Discount Applies
          <IconChevronRight />
        </LinkIconAfter>
      </div>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <div>
          <CustomButtonRegular
            href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=fee_family_en_ecare"
            as="a"
          >
            Log in to "my Rakuten Mobile"
          </CustomButtonRegular>
        </div>
        <div className={Utils['Mt-24']}>
          <LinkIconAfter href="/guide/family/?l-id=fee_family_en_guide_family03">
            See How to Create a SAIKYO FAMILY Group
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </div>
    </CustomFlowList>
    <CustomFlowList className="last-item">
      <Heading level="3" className={Utils['Align-ccl']}>
        All family members successfully join <br />
        the SAIKYO FAMILY Program!
      </Heading>
      <div className="last-item-img">
        <img
          src={`${imgpath}img-flow-item.png`}
          width="274"
          height="102"
          alt=""
          loading="lazy"
        />
      </div>
    </CustomFlowList>
  </ul>
)

const FeeFamilyEn: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'Boost Your Family Savings! SAIKYO FAMILY Program'
  const directories = [
    { path: '/fee/saikyo-plan/en/', label: 'Rakuten SAIKYO Plan (Price Plan)' },
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
  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="The Powerful Program Arrives to Boost Family Savings! Best rates for 3GB or unlimited data with our family discount - LOWEST PRICE across all carriers. Enjoy up to 3GB for just 880 yen/mo. (968 yen incl. tax) or unlimited high-speed data for 2,880 yen/mo. (3,168 yen incl. tax)."
        directories={directories}
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
                srcSet={`${imgpath}kv-sp-240430.png`}
                width="750"
                height="920"
              />
              <img
                src={`${imgpath}kv-pc-240430.png`}
                width="1440"
                height="420"
                alt="The powerful program arrives to boost family savings! Best rates for 3GB or unlimited data with our family discount - LOWEST PRICE across all carriers. Enjoy up to 3GB for just 880 yen/mo. (968 yen incl. tax) or unlimited high-speed data for 2,880 yen/mo. (3,168 yen incl. tax)."
              />
            </picture>
          </h1>
        </KvHeading>
        <BgOrange5
          className={`${Utils['Pt-8']} ${Utils['Pt-pc-16']} ${Utils['Pb-40']} ${Utils['Pb-pc-32']}`}
        >
          <SystemContainer>
            <TxtCap as="ul">
              <li>
                *1 Offer applies exclusively to the family discount without
                additional discounts. Surveyed by our company, as of February
                2024.
              </li>
              <li>
                *2 Applies to a family of 6, with 5 members joining through
                family referrals. Conditions include using the Rakuten Link app
                and not qualifying for the Rakuten SAIKYO Plan (Data Type).
                Points will be awarded in installments starting after the 4th
                month as time-limited points.
              </li>
              <li>
                *
                <LinkNormal
                  href="#notes"
                  onClick={e => anchorCallback(e, 'notes')}
                >
                  Click here for more detailed conditions
                </LinkNormal>
                .
              </li>
            </TxtCap>
            <CustomMediaGridHalf
              className={`${Utils['Mt-40']} ${Utils['Mt-pc-32']}`}
              ref={scrollTrigger}
            >
              <div>
                <ButtonPrimaryLarge
                  as="a"
                  href="https://onboarding.mobile.rakuten.co.jp/?l-id=fee_family-en_kv_onb&locale=en"
                >
                  Apply Here (New/MNP Transfer)
                </ButtonPrimaryLarge>
              </div>
              <div>
                <ButtonSecondaryLarge
                  href="/shop/en/?l-id=fee_family_en_shop_en01"
                  as="a"
                >
                  Find a Shop Near You/Book a Visit
                </ButtonSecondaryLarge>
              </div>
            </CustomMediaGridHalf>
          </SystemContainer>
        </BgOrange5>
        <AnchorWrap>
          <FeeFamilyAnchorList>
            <li>
              <FeeFamilyAnchor
                href="#program"
                onClick={e => anchorCallback(e, 'program')}
                data-ratid="fee-family_en_click-01_program"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                SAIKYO FAMILY <br className={Utils['Show-oox']} />
                Program
                <IconHomeLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#price"
                onClick={e => anchorCallback(e, 'price')}
                data-ratid="fee-family_en_click-02_price"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                <span className="text">Price</span>
                <IconPriceLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#campaign"
                onClick={e => anchorCallback(e, 'campaign')}
                data-ratid="fee-family_en_click-03_campaign"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                Referral <br className={Utils['Show-oox']} />
                Campaign
                <IconCampaignLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#steps"
                onClick={e => anchorCallback(e, 'steps')}
                data-ratid="fee-family_en_click-04_steps"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                <span className="text">Steps to Join</span>
                <IconSmartphoneLine className="icon" />
              </FeeFamilyAnchor>
            </li>
          </FeeFamilyAnchorList>
        </AnchorWrap>
        <BgOrange5 className={`${Utils['Py-40']} ${Utils['Py-pc-48']}`}>
          <SystemContainer>
            <div id="program" className={Utils['Align-center']}>
              <HeadingIconHomeLine />
              <HeadingH2
                data-ratid="fee-family_en_scroll-01-program"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">
                  Boost your family savings <br className={Utils['Show-oox']} />
                  all the time
                </span>
                <span className="first-line-symbol">!</span>
                <br />
                <span className="second-line">SAIKYO FAMILY Program</span>
              </HeadingH2>

              <Heading
                level="3"
                className={`${Utils['Mt-32']} ${Utils['Mt-pc-40']}`}
              >
                <TitleMarker>
                  Now Available to <br className={Utils['Show-oox']} />
                  Diverse Family Types!
                </TitleMarker>
              </Heading>
              <img
                className={Utils['Mt-16']}
                src={`${imgpath}img-updated-on-april-10.png`}
                width="146"
                height="19"
                alt="Updated on April 10"
                loading="lazy"
              />
              <p className={Utils['Mt-16']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-saikyo-family-01-sp-240430.png`}
                    width="686"
                    height="528"
                  />
                  <img
                    src={`${imgpath}img-saikyo-family-01-pc-240430.png`}
                    width="1032"
                    height="354"
                    alt="Close or Far, Families Can Save Together! Up to 20 Lines Allowed!"
                    loading="lazy"
                  />
                </picture>
              </p>
              <div className={`${Utils['Mt-8']} ${Utils['Mt-pc-24']}`}>
                <LinkIconAfter href="/guide/family/?l-id=fee_family_en_guide_family">
                  Check the Eligibility Conditions
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
              <Heading
                level="3"
                id="price"
                className={`${Utils['Mt-48']} ${Utils['Mt-pc-56']}`}
                ratId="fee-family_en_scroll-02-fee"
                ratEvent="appear"
              >
                <TitleMarker>
                  Maximize Your Savings With Rakuten SAIKYO Plan{' '}
                  <br className={Utils['Show-oox']} />
                  for Families<span className="symbol">!</span>
                </TitleMarker>
              </Heading>
              <p className={Utils['Mt-24']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-saikyo-family-02-sp-240507.png`}
                    width="686"
                    height="644"
                  />
                  <img
                    src={`${imgpath}img-saikyo-family-02-pc-240430.png`}
                    width="1032"
                    height="432"
                    alt="Enjoy up to 3GB for just 880 yen/mo. (968 yen incl. tax) or unlimited high-speed data for 2,880 yen/mo. (3,168 yen incl. tax)."
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap
                className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
                as="ul"
              >
                <li>
                  *Excludes call charges and related fees. *2 Speed may be
                  restricted due to fair service provision or network
                  environment.
                </li>
              </TxtCap>

              <div className={Utils['Mt-24']}>
                <ButtonRegularLarge
                  href="/fee/saikyo-plan/en/?l-id=fee_family_en_fee_saikyo-plan_en"
                  as="a"
                >
                  See Price Plan
                </ButtonRegularLarge>
              </div>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/fee/saikyo-plan/en/?l-id=fee_family_en_fee_saikyo-plan#compareother">
                  Compare Plan Fees With Other Carriers
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </div>
          </SystemContainer>
        </BgOrange5>

        <BgYellow className={Utils['Py-48']}>
          <SystemContainer>
            <div id="campaign" className={Utils['Align-center']}>
              <HeadingIconHomeLine />
              <HeadingH2
                data-ratid="fee-family_en_scroll-03-referral-campaign"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">By Referring,</span>
                <br />
                <span className="second-line">
                  Supercharge <br className={Utils['Show-oox']} />
                  Your Savings
                </span>
                <span className="second-line-symbol">!</span>
              </HeadingH2>
              <Heading level="3" className={Utils['Mt-32']}>
                <TitleMarker>
                  Refer family members <br className={Utils['Show-oox']} />
                  and boost your benefits:
                </TitleMarker>
              </Heading>
              <p className={Utils['Mt-8']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-01-sp.png`}
                    width="686"
                    height="686"
                  />
                  <img
                    src={`${imgpath}img-referral-01-pc.png`}
                    width="1032"
                    height="207"
                    alt="Refer family members and boost your benefits: Referrer can earn 7,000 points for each referral, and the lucky referred can earn 13,000 points for the first sign-up & MNP transfer from another carrier. *For other new sign-ups, 6,000 points."
                    loading="lazy"
                  />
                </picture>
              </p>
              <p className={Utils['Mt-8']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-02-sp.png`}
                    width="686"
                    height="444"
                  />
                  <img
                    src={`${imgpath}img-referral-02-pc.png`}
                    width="919"
                    height="120"
                    alt="More referrals, more rewards! Each referral brings 20,000 points in total."
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap className={Utils['Mt-8']} as="p">
                *Points will be awarded in installments as time-limited points.
              </TxtCap>

              <Heading
                level="3"
                className={`${Utils['Mt-48']} ${Utils['Mt-pc-56']} ${Utils['Align-center']}`}
              >
                <TitleMarker>
                  With 6 family members <br className={Utils['Show-oox']} />
                  on board:
                </TitleMarker>
              </Heading>
              <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-03-sp.png`}
                    width="686"
                    height="900"
                  />
                  <img
                    src={`${imgpath}img-referral-03-pc.png`}
                    width="1032"
                    height="338"
                    alt="If you refer 5 family members, you can earn 100,000 points in total."
                    loading="lazy"
                  />
                </picture>
              </p>
              <p className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-04-sp.png`}
                    width="686"
                    height="692"
                  />
                  <img
                    src={`${imgpath}img-referral-04-pc.png`}
                    width="1032"
                    height="225"
                    alt="You gain points than your yearly ¥69,696  bill for 6 members, covering up to 3GB. It’s effectively free for the whole family up to 3GB for one year."
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap
                className={`${Utils['Mt-24']} ${Utils['Align-lcc']}`}
                as="ul"
              >
                <li>
                  *Points will be awarded in installments starting after the 4th
                  month.
                </li>
                <li>
                  *The "actual price" reflects the cost after including points
                  awarded later upon meeting campaign conditions,
                </li>
                <li>
                  differing from the initial payment amount.{' '}
                  <LinkNormal href="/campaign/referral/en/?l-id=fee_family_en_campaign_referral_en01">
                    Click here
                  </LinkNormal>{' '}
                  for more details.
                </li>
              </TxtCap>

              <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <ButtonRegularLarge
                  href="/campaign/referral/en/?l-id=fee_family_en_campaign_referral_en02"
                  as="a"
                >
                  Learn More About Referral Campaign
                </ButtonRegularLarge>
              </p>
            </div>
          </SystemContainer>
        </BgYellow>

        <BgOrange5>
          <SystemContainer className={`${Utils['Py-40']} ${Utils['Py-pc-48']}`}>
            <div id="steps" className={Utils['Align-center']}>
              <HeadingIconHomeLine />
              <HeadingH2
                data-ratid="fee-family_en_scroll-04-flow"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">SAIKYO FAMILY Program</span>
                <br />
                <span className="second-line">Steps to Join</span>
              </HeadingH2>
            </div>
            <div className={`${Utils['Mt-32']} ${Utils['Align-lcc']}`}>
              <p>
                SAIKYO FAMILY Program, each qualifying family selects one
                representative to create and manage their group.
              </p>
              <TxtCap as="ul" className={Utils['Mt-8']}>
                <li>
                  *To create a group within the SAIKYO FAMILY Program, use the
                  "my Rakuten Mobile" website or app.
                </li>
              </TxtCap>
            </div>
            <Tab
              className={Utils['Mt-32']}
              heading1={
                <span className={Utils['Align-ccl']}>First-Time Sign-Up</span>
              }
              heading2={
                <span className={Utils['Align-ccl']}>Existing Subscriber</span>
              }
              content1={<TabContent1 />}
              content2={<TabContent2 />}
              ratId1="fee-family_en_click-05_new"
              ratId2="fee-family_en_click-06_existing"
            />

            <SectionCommonSaikyo
              data-ratid="fee-family_en_scroll-05-plan"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <CommonSaikyoEn
                className={`${Utils['Mt-40']} ${Utils['Mt-pc-48']}`}
              />
            </SectionCommonSaikyo>

            <div id="notes" className={`${Utils['Mt-48']}`}>
              <Heading level="1" as="h2">
                Notes
              </Heading>
              <TxtCap className={Utils['Mt-24']} as="ul">
                <li>
                  *"Rakuten SAIKYO Plan (Data Type)" is not eligible for this
                  program.
                </li>
                <li>
                  *Group creation is restricted to subscribers aged 18 and
                  above. Subscribers under 18 can be invited to join.
                </li>
                <li>
                  *Up to 20 lines per group allowed. For subscribers with
                  multiple lines, only one line per individual is eligible for
                  program participation and the associated discount.
                </li>
                <li>
                  *Subscribers can be part of only one group at a time. To
                  switch groups, you must leave your current group before
                  joining another.
                </li>
              </TxtCap>
              <Heading level="4" as="h3" className={Utils['Mt-24']}>
                Language
              </Heading>
              <TxtCap className={Utils['Mt-8']} as="ul">
                <li>
                  *This page is made in Japanese and translated into English.
                  The Japanese text shall prevail if there is any conflict or
                  inconsistency between these two texts.
                </li>
              </TxtCap>
            </div>
          </SystemContainer>
        </BgOrange5>

        <CommonCtaBottomFixed
          btnItems={[
            { btnType: 'application_en' },
            { btnType: 'shop_en', isSecondary: true },
          ]}
          scrollTrigger={scrollTrigger}
          lid="fee_family_en"
        />

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </CustomSystemWrapper>
    </>
  )
}

export default FeeFamilyEn
