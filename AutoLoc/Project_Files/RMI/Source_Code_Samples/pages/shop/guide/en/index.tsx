import type { NextPage } from 'next'
import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { IconArrowDown, IconNewTabLine } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { AccordionListEmp } from '@components/atoms/AccordionList'
import { ListDisc } from '@components/atoms/List'
import { InfoboxEmphasis1 } from '@components/atoms/Infobox'
import { fontRakutenSansUi } from '@styles/fonts'

const imgpath = `${assets}img/shop/guide/en/`

const CustomSystemWrapper = styled(SystemWrapper)`
  font-family: ${fontRakutenSansUi.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`

const AnchorArea = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`
const BorderBox = styled.li`
  border: 1px solid ${props => props.theme.colors.monotone75};
  padding: 24px 16px 20px;
`
const BorderList = styled.ul`
  display: grid;
  gap: 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StepList = styled.div`
  display: grid;
  gap: 16px 10px;
  grid-template-columns: repeat(2, 1fr);
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const StepLink = styled.button`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
  row-gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  color: #333;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 5px 0 0 #e0e0e0;
  ${mixins.mq.MinL} {
    padding: 12px 8px 16px;
  }
  &[aria-selected='true'] {
    border: 3px solid #ff008c;
    background-color: #fffee8;
  }
`
const StepTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  line-height: 100%;
  font-weight: bold;
  text-align: center;
  span {
    font-size: 13px;
  }
`
const BgYellow = styled.div`
  background-color: ${props => props.theme.colors.yellow};
`

const StepContent = styled.div`
  &[aria-hidden='true'] {
    display: none;
  }
  ${IconNewTabLine} {
    color: ${props => props.theme.colors.primary};
  }
`
const StepFlexBox = styled.div`
  display: flex;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
  > div {
    &:last-of-type {
      margin-left: 16px;
      padding-left: 16px;
      border-left: solid 1px ${props => props.theme.colors.monotone88};
      ${mixins.mq.MaxM} {
        margin: 16px 0 0;
        padding: 16px 0 0;
        border-top: solid 1px ${props => props.theme.colors.monotone88};
        border-left: none;
      }
    }
  }

  ${ButtonRegular} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Marker = styled.span`
  font-weight: 700;
  background: linear-gradient(transparent 60%, #fff200 0);
`

const AccordionListEmpInner = styled.span`
  display: flex;
  flex-direction: column;
`

const ShopGuideEn: NextPage = () => {
  const [activeItem, setActiveItem] = useState('step-switch')

  const pagetitle = 'Before Your Shop Visit'
  const directories = [{ path: '/shop/', label: 'Shops' }]
  const breadcrumbs = [
    {
      text: 'Top',
      url: '/',
    },
    {
      text: 'Shops',
      url: '/shop/en/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const theme = useContext(ThemeContext)

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
    scrollToItemContent()
  }

  const scrollToItemContent = () => {
    const stepContents = document.getElementById('step-contents')
    stepContents?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="Discover key information for your upcoming visit to a Rakuten Mobile shop, including required identification documents, MNP reservation numbers, and other essentials. Prepare efficiently and know what to bring for a seamless experience."
        isEnglish={true}
      />
      <CustomSystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <section>
          <SystemContainer>
            <Heading level="1" className={Utils['Mt-48']}>
              Before Your Shop Visit
            </Heading>
            <p className={Utils['Mt-8']}>
              Ensure you read and prepare the following before visiting the
              shop.
            </p>
            <AnchorArea>
              <li>
                <LinkIconBefore
                  href="#required"
                  data-ratid="shop_shop-support_en_belongings"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'required')}
                >
                  <IconArrowDown />
                  Required Items for Your Visit
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#minors"
                  data-ratid="shop_shop-support_en_minors"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'minors')}
                >
                  <IconArrowDown />
                  Guidelines for Minors
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#reservation"
                  data-ratid="shop_shop-support_en_reservation"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'reservation')}
                >
                  <IconArrowDown />
                  How to Book Your Visit
                </LinkIconBefore>
              </li>
            </AnchorArea>

            <Heading level="2" id="required" className={Utils['Mt-56']}>
              Required Items for Your Visit
            </Heading>
            <StepList className={Utils['Mt-16']}>
              <StepLink
                onClick={() => {
                  handleItemClick('step-switch')
                }}
                aria-selected={activeItem === 'step-switch'}
                aria-controls="step-content-switch"
              >
                <StepTitle>
                  Switch from
                  <br />
                  another carrier
                  <br />
                  (MNP)
                </StepTitle>
                <span>
                  <img
                    src={`${imgpath}img-step01.png`}
                    alt=""
                    width="150"
                    height="94"
                  />
                </span>
              </StepLink>

              <StepLink
                onClick={() => handleItemClick('step-new-number')}
                aria-selected={activeItem === 'step-new-number'}
                aria-controls="step-content-new-number"
              >
                <StepTitle>Get a new number</StepTitle>
                <span>
                  <img
                    src={`${imgpath}img-step02.png`}
                    alt=""
                    width="150"
                    height="94"
                  />
                </span>
              </StepLink>
              <StepLink
                onClick={() => handleItemClick('step-model')}
                aria-selected={activeItem === 'step-model'}
                aria-controls="step-content-model"
              >
                <StepTitle>
                  Upgrade to a<br />
                  new model
                </StepTitle>
                <span>
                  <img
                    src={`${imgpath}img-step03.png`}
                    alt=""
                    width="150"
                    height="94"
                  />
                </span>
              </StepLink>
              <StepLink
                onClick={() => handleItemClick('step-mobile')}
                aria-selected={activeItem === 'step-mobile'}
                aria-controls="step-content-mobile"
              >
                <StepTitle>
                  Switch from
                  <br />
                  Rakuten Mobile
                  <span>(using docomo or au line)</span>
                </StepTitle>
                <span>
                  <img
                    src={`${imgpath}img-step04.png`}
                    alt=""
                    width="151"
                    height="82"
                  />
                </span>
              </StepLink>
            </StepList>
          </SystemContainer>
        </section>
        <BgYellow
          id="step-contents"
          className={`${Utils['Py-40']} ${Utils['Mt-32']}`}
        >
          <SystemContainer>
            <StepContent
              id="step-content-switch"
              aria-hidden={activeItem !== 'step-switch'}
            >
              <Heading level="3" className={Utils['Align-center']}>
                For Switching from Another Carrier (MNP)
              </Heading>
              <AccordionListEmp
                isOpened={true}
                text={'Identity Verification Documents'}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step05.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>Driver’s licence, My Number card, etc.</p>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *Foreign customers require different identification.
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/verify/en/?l-id=shop-support_en_guide_verify"
                      >
                        Check Accepted Identity Verification Documents
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'MNP Reservation Number'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step09.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      If you're applying in-store or switching from a carrier
                      that does not support MNP One-Stop, get an{' '}
                      <Marker>
                        MNP reservation number from your current carrier first.{' '}
                      </Marker>
                    </p>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/mnp/?l-id=shop-support_en_guide_mnp#howToSignUp"
                        rel="noopener noreferrer"
                      >
                        How to Get Your MNP Reservation Number
                      </ButtonRegular>
                    </div>
                    <TxtCap as="div" className={Utils['Mt-16']}>
                      <TxtEmp02 as="p">
                        *If you’re switching online from a mobile carrier
                        providing MNP one-stop service, an MNP reservation
                        number is not required.
                      </TxtEmp02>
                      <LinkNormal href="/guide/mnp/fast-convert/?l-id=shop-support_en_guide_mnp_fast-convert">
                        Clicke here for details.
                      </LinkNormal>
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Rakuten Member ID and Password'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step06.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <StepFlexBox>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Non-Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          If you don’t have a Rakuten ID, please sign up for a
                          free Rakuten membership.{' '}
                        </p>
                        <div
                          className={`${Utils['Mt-16']} ${Utils['Mt-pc-40']} `}
                        >
                          <ButtonRegular
                            as="a"
                            href="https://www.rakuten.co.jp/myrakuten/help/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sign Up for Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          Ensure your registered details are current and
                          consistent with your application.{' '}
                        </p>
                        <div className={Utils['Mt-16']}>
                          <ButtonRegular
                            as="a"
                            href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Update or Check Your
                            <br />
                            Rakuten Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      <TxtEmp02 as="span">
                        *This information is necessary for applications made
                        in-store. We require the membership details of the
                        applicant.
                      </TxtEmp02>
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Credit Card/Bank Account Information'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step07.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Provide your credit card or bank account information for
                      monthly payments or direct debits.
                    </p>
                    <TxtCap as="ul" className={Utils['Mt-8']}>
                      <TxtEmp02 as="li">
                        *Please note that Rakuten Mobile counters at certain
                        electronics retail stores do not provide the option for
                        24 or 48 installment payments using Rakuten Card
                        (including the Rakuten Mobile Kaikae Chotoku Program)
                        with no installment fee when purchasing a product.
                      </TxtEmp02>
                      <li className={Utils['Mt-8']}>
                        *When using a payment method that is not in your name,
                        you must be accompanied by the named account/cardholder.
                      </li>
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/payment/?l-id=shop-support_en_guide_payment"
                      >
                        Check Payment Methods
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={
                  <AccordionListEmpInner>
                    <span>
                      Compatible Smartphones/Products for Rakuten Line
                    </span>
                    <TxtCap>
                      <TxtEmp02>
                        *No need to bring your own if you’re purchasing a
                        smartphone when applying.
                      </TxtEmp02>
                    </TxtCap>
                  </AccordionListEmpInner>
                }
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step08.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Ensure your smartphone is compatible with Rakuten Mobile.
                      Some devices may require a “SIM unlock” procedure
                      beforehand.
                    </p>
                    <StepFlexBox className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/product/byod/?l-id=shop-support_en_product_byod"
                      >
                        Check Phone Compatibility
                      </ButtonRegular>
                      <ButtonRegular
                        as="a"
                        href="/faq/detail/10000070/?l-id=shop-support_en_faq-10000070"
                        className={`${Utils['Mt-16']} ${Utils['Ml-pc-16']} ${Utils['Mt-pc-0']} `}
                      >
                        Learn About SIM Unlock
                      </ButtonRegular>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *While a smartphone may be compatible with Rakuten Mobile,
                      its usability may vary depending on the country of
                      purchase. For more information, please contact your
                      purchase carrier.
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <InfoboxEmphasis1 className={Utils['Mt-16']}>
                <TxtEmp01 as="p">Notes</TxtEmp01>
                <TxtEmp01 as="p" className={Utils['Mt-8']}>
                  ■For subscribers who are not the primary user
                </TxtEmp01>
                <p className={Utils['Mt-8']}>
                  If you are registered as a user, but not as the primary
                  subscriber on your current mobile plan, you must first cancel
                  your user registration. Then, the person named as the
                  subscriber on your current plan must complete the MNP
                  transfer-out process. For more information on how to cancel
                  your user registration, please contact your current mobile
                  carrier.
                </p>
              </InfoboxEmphasis1>
            </StepContent>
            <StepContent
              id="step-content-new-number"
              aria-hidden={activeItem !== 'step-new-number'}
            >
              <Heading level="3" className={Utils['Align-center']}>
                For Getting a New Number
              </Heading>
              <AccordionListEmp
                text={
                  <>
                    Identity Verification Documents
                    <TxtCap as="span" className={Utils['Ml-8']}>
                      <TxtEmp02 as="span">
                        *Not needed for data type applications.
                      </TxtEmp02>
                    </TxtCap>
                  </>
                }
                isOpened={true}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step05.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>Driver’s licence, My Number card, etc.</p>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *Foreign customers require different identification.
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/verify/en/?l-id=shop-support_en_guide_verify"
                      >
                        Check Accepted Identity Verification Documents
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Rakuten Member ID and Password'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step06.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <StepFlexBox>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Non-Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          If you don’t have a Rakuten ID, please sign up for a
                          free Rakuten membership.{' '}
                        </p>
                        <div className={Utils['Mt-40']}>
                          <ButtonRegular
                            as="a"
                            href="https://www.rakuten.co.jp/myrakuten/help/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sign Up for Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          Ensure your registered details are current and
                          consistent with your application.{' '}
                        </p>
                        <div className={Utils['Mt-16']}>
                          <ButtonRegular
                            as="a"
                            href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Update or Check Your
                            <br />
                            Rakuten Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      <TxtEmp02 as="span">
                        *This information is necessary for applications made
                        in-store. We require the membership details of the
                        applicant.
                      </TxtEmp02>
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Credit Card/Bank Account Information'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step07.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Provide your credit card or bank account information for
                      monthly payments or direct debits.
                    </p>
                    <TxtCap as="ul" className={Utils['Mt-8']}>
                      <TxtEmp02 as="li">
                        *Please note that Rakuten Mobile counters at certain
                        electronics retail stores do not provide the option for
                        24 or 48 installment payments using Rakuten Card
                        (including the Rakuten Mobile Kaikae Chotoku Program)
                        with no installment fee when purchasing a product.
                      </TxtEmp02>
                      <li className={Utils['Mt-8']}>
                        *When using a payment method that is not in your name,
                        you must be accompanied by the named account/cardholder.
                      </li>
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/payment/?l-id=shop-support_en_guide_payment"
                      >
                        Check Payment Methods
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={
                  <AccordionListEmpInner>
                    <span>
                      Compatible Smartphones/Products for Rakuten Line
                    </span>
                    <TxtCap>
                      <TxtEmp02>
                        *No need to bring your own if you’re purchasing a
                        smartphone when applying.
                      </TxtEmp02>
                    </TxtCap>
                  </AccordionListEmpInner>
                }
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step08.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Ensure your smartphone is compatible with Rakuten Mobile.
                      Some devices may require a “SIM unlock” procedure
                      beforehand.
                    </p>
                    <StepFlexBox className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/product/byod/?l-id=shop-support_en_product_byod"
                      >
                        Check Phone Compatibility
                      </ButtonRegular>
                      <ButtonRegular
                        as="a"
                        href="/faq/detail/10000070/?l-id=shop-support_en_faq-10000070"
                        className={`${Utils['Mt-16']} ${Utils['Ml-pc-16']} ${Utils['Mt-pc-0']} `}
                      >
                        Learn About SIM Unlock
                      </ButtonRegular>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *While a smartphone may be compatible with Rakuten Mobile,
                      its usability may vary depending on the country of
                      purchase. For more information, please contact your
                      purchase carrier.
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
            </StepContent>
            <StepContent
              id="step-content-model"
              aria-hidden={activeItem !== 'step-model'}
            >
              <Heading level="3" className={Utils['Align-center']}>
                For Upgrading to a New Model
              </Heading>
              <AccordionListEmp
                text={'Rakuten Member ID and Password'}
                isOpened={true}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step06.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <StepFlexBox>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Non-Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          If you don’t have a Rakuten ID, please sign up for a
                          free Rakuten membership.{' '}
                        </p>
                        <div className={Utils['Mt-40']}>
                          <ButtonRegular
                            as="a"
                            href="https://www.rakuten.co.jp/myrakuten/help/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sign Up for Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                      <div>
                        <ListDisc
                          className={Utils['Mt-8']}
                          text={[
                            {
                              text: 'Rakuten members',
                            },
                          ]}
                        ></ListDisc>
                        <p className={Utils['Mt-16']}>
                          Ensure your registered details are current and
                          consistent with your application.{' '}
                        </p>
                        <div className={Utils['Mt-16']}>
                          <ButtonRegular
                            as="a"
                            href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Update or Check Your
                            <br />
                            Rakuten Membership
                            <IconNewTabLine className="icon-end" />
                          </ButtonRegular>
                        </div>
                      </div>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      <TxtEmp02 as="span">
                        *This information is necessary for applications made
                        in-store. We require the membership details of the
                        applicant.
                      </TxtEmp02>
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Credit Card/Bank Account Information'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step07.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Provide your credit card or bank account information for
                      monthly payments or direct debits.
                    </p>
                    <TxtCap as="ul" className={Utils['Mt-8']}>
                      <TxtEmp02 as="li">
                        *Please note that Rakuten Mobile counters at certain
                        electronics retail stores do not provide the option for
                        24 or 48 installment payments using Rakuten Card
                        (including the Rakuten Mobile Kaikae Chotoku Program)
                        with no installment fee when purchasing a product.
                      </TxtEmp02>
                      <li className={Utils['Mt-8']}>
                        *When using a payment method that is not in your name,
                        you must be accompanied by the named account/cardholder.
                      </li>
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/payment/?l-id=shop-support_en_guide_payment"
                      >
                        Check Payment Methods
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Identity Verification Documents'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step05.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>Driver’s licence, My Number card, etc.</p>
                    <TxtCap as="ul" className={Utils['Mt-8']}>
                      <TxtEmp02 as="li">
                        *Identity verification documents might be required for
                        specific purchases, like when applying the Rakuten
                        Mobile Kaikae Chotoku Program.
                      </TxtEmp02>
                      <li className={Utils['Mt-8']}>
                        *Foreign customers require different identification.{' '}
                      </li>
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/verify/en/?l-id=shop-support_en_guide_verify"
                      >
                        Check Accepted Identity Verification Documents
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
            </StepContent>
            <StepContent
              id="step-content-mobile"
              aria-hidden={activeItem !== 'step-mobile'}
            >
              <Heading level="3" className={Utils['Align-center']}>
                For Switching from Rakuten Mobile (using docomo or au line)
              </Heading>
              <AccordionListEmp
                text={'Rakuten Member ID and Password'}
                isOpened={true}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step06.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Ensure that your application details are current and align
                      with your application.
                    </p>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Update or Check Your Rakuten Membership
                        <IconNewTabLine className="icon-end" />
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'Identity Verification Documents'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step05.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>Driver’s licence, My Number card, etc.</p>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *Foreign customers require different identification.
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/guide/verify/en/?l-id=shop-support_en_guide_verify"
                      >
                        Check Accepted Identity Verification Documents
                      </ButtonRegular>
                    </div>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={'QR Code/MNP Reservation Number'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step10.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      At some shops, you can change (or transfer) your plan
                      using a QR code. Please check which shops provide QR code
                      support.
                    </p>
                    <StepFlexBox className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/shop/migration-qr-shop/?l-id=shop-support_en_migration-qr-shop"
                      >
                        Find Shops Supporting QR Codes
                      </ButtonRegular>
                      <ButtonRegular
                        as="a"
                        href="/guide/migration/?tab-list=tab-menu4#anc_02"
                        className={`${Utils['Mt-16']} ${Utils['Ml-pc-16']} ${Utils['Mt-pc-0']} `}
                      >
                        Learn How to Obtain an MNP <br />
                        Reservation Number
                      </ButtonRegular>
                    </StepFlexBox>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <AccordionListEmp
                text={
                  <AccordionListEmpInner>
                    <span>
                      Compatible Smartphones/Products for Rakuten Line
                    </span>
                    <TxtCap>
                      <TxtEmp02>
                        *No need to bring your own if you’re purchasing a
                        smartphone when applying.
                      </TxtEmp02>
                    </TxtCap>
                  </AccordionListEmpInner>
                }
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <MediaGrid>
                  <MediaImage>
                    <img
                      src={`${imgpath}img-step08.png`}
                      alt=""
                      width="240"
                      height="100"
                      loading="lazy"
                    />
                  </MediaImage>
                  <div>
                    <p>
                      Ensure your smartphone is compatible with Rakuten Mobile.
                      Some devices may require a “SIM unlock” procedure
                      beforehand.
                    </p>
                    <StepFlexBox className={Utils['Mt-16']}>
                      <ButtonRegular
                        as="a"
                        href="/product/byod/?l-id=shop-support_en_product_byod"
                      >
                        Check Phone Compatibility
                      </ButtonRegular>
                      <ButtonRegular
                        as="a"
                        href="/faq/detail/10000070/?l-id=shop-support_en_faq-10000070"
                        className={`${Utils['Mt-16']} ${Utils['Ml-pc-16']} ${Utils['Mt-pc-0']} `}
                      >
                        Learn About SIM Unlock
                      </ButtonRegular>
                    </StepFlexBox>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      *While a smartphone may be compatible with Rakuten Mobile,
                      its usability may vary depending on the country of
                      purchase. For more information, please contact your
                      purchase carrier.
                    </TxtCap>
                  </div>
                </MediaGrid>
              </AccordionListEmp>
              <InfoboxEmphasis1 className={Utils['Mt-16']}>
                <TxtEmp01 as="p">Notes</TxtEmp01>
                <TxtEmp01 as="p" className={Utils['Mt-8']}>
                  ■For subscribers who are not the primary user
                </TxtEmp01>
                <p className={Utils['Mt-8']}>
                  Before requesting a plan modification or transfer, cancel your
                  current plan registration and update your name. For more
                  details,{' '}
                  <LinkNormal href="/flow/mvno-user-registration/?l-id=shop-support_en_flow_mvno-user-registration">
                    click here.
                  </LinkNormal>
                </p>
              </InfoboxEmphasis1>
            </StepContent>
          </SystemContainer>
        </BgYellow>

        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="2" id="minors">
            Guidelines for Minors
          </Heading>
          <BorderList className={Utils['Mt-16']}>
            <BorderBox>
              <Heading level="3" className={Utils['Align-center']}>
                Minors' Attendance
              </Heading>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <img
                  src={`${imgpath}img-minor01.png`}
                  alt=""
                  width="141"
                  height="95"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-16']}>
                Applications from individuals under 18 must be accompanied by a
                parent or guardian. Both the minor and the guardian must visit
                the shop together.
              </p>
            </BorderBox>
            <BorderBox>
              <Heading level="3" className={Utils['Align-center']}>
                Required Identification
              </Heading>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <img
                  src={`${imgpath}img-minor02.png`}
                  alt=""
                  width="158"
                  height="95"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-16']}>
                Valid identification is required for both the minor and the
                parent/guardian.
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                *Please note that student IDs are not accepted.
              </TxtCap>
            </BorderBox>
            <BorderBox>
              <Heading level="3" className={Utils['Align-center']}>
                Filtering Service
              </Heading>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <img
                  src={`${imgpath}img-minor03.png`}
                  alt=""
                  width="157"
                  height="95"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-16']}>
                Minors under 18 are required to subscribe to "
                <LinkNormal href="/service/i-filter/?l-id=shop-support_en_service_i-filter">
                  Anshin Control by i-Filter
                </LinkNormal>
                " for Rakuten Mobile use (330 yen/mo.).
                <TxtCap as="span">*1</TxtCap>
              </p>
            </BorderBox>
          </BorderList>
          <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
            <ButtonRegularLarge
              as="a"
              href="/flow/for-minors/?l-id=shop-support_en_flow_for-minors"
              rel="noopener noreferrer"
            >
              Check the Minor Application Details
            </ButtonRegularLarge>
          </div>
          <TxtCap as="p" className={Utils['Mt-24']}>
            *1 Guardians may opt out of the "Anshin Control by i-Filter" service
            by submitting a "Request Form of Filtering Service Cancellation" by
            post. If we receive this form by the 10th of the month following
            subscription, the monthly charge (330 yen/month) will not apply. The
            service will be canceled at the month's end after we receive the
            cancellation request.
          </TxtCap>

          <Heading level="2" id="reservation" className={Utils['Mt-56']}>
            How to Book Your Visit
          </Heading>
          <p className={Utils['Mt-16']}>
            Book your visit in advance to ensure priority service, even during
            busy times. <br />
            This also allows you to verify required documents beforehand for a
            smoother experience.
          </p>
          <picture className={Utils['Mt-24']}>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${imgpath}img-reserve-sp.png`}
              width="686"
            />
            <img
              src={`${imgpath}img-reserve.png`}
              width="2064"
              height="320"
              alt="Find a shop near you. Book your visit by clicking Make a reservation on the web on the shop page. Visit the shop at your scheduled time."
            />
          </picture>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <ButtonRegular
              as="a"
              href="/shop/en/?l-id=shop-support_en_shop_en#shop"
            >
              Find a Shop Near You
            </ButtonRegular>
          </div>
          <TxtCap as="p" className={Utils['Mt-24']}>
            *Please be aware that there may be waiting times for service
            counters, and we appreciate your understanding in advance.
            <br />
            *Note that phone reservations are not accepted.
            <br />
            *Some shops may not offer booking options.
          </TxtCap>
        </SystemContainer>
      </CustomSystemWrapper>

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ShopGuideEn
