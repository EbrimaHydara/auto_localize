import type { NextPage } from 'next'
import React, { useCallback } from 'react'
import { assets } from '@components/utils/assets'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtNormal, TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { MediaImage, MediaGrid } from '@components/layout/Media'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
} from '@components/icons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Table } from '@components/atoms/Table'
import { BannerHover } from '@components/atoms/Banner'
import { fontRakutenSansUi } from '@styles/fonts'

const imgpath = `${assets}img/service/rakuten-link/en/`
const CustomSystemWrapper = styled(SystemWrapper)`
  font-family: ${fontRakutenSansUi.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`
const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const Kv = styled.div`
  position: relative;
  background-image: url(${imgpath}hero-pc.png?211015);
  background-size: contain;
  background-position: bottom;
  background-position-x: right;
  background-repeat: no-repeat;
  height: 430px;
  margin: 0 auto;
  max-width: ${props => props.theme.max.l};
  ${mixins.mq.MaxM} {
    background: none;
    height: auto;
    padding: 8px 0 0;
  }
`
const KvCap = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  text-align: right;
  ${mixins.mq.MaxM} {
    position: static;
    margin-right: 8px;
  }
`
const KvText = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  ${mixins.mq.MaxM} {
    position: static;
    margin-top: 8px;
    text-align: center;
    transform: translateY(0);
  }
`
const KvTextCatch = styled.div`
  font-size: 40px;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 28px;
  }

  span {
    font-weight: normal;
    font-size: 13px;
  }
`
const KvTextDescription = styled.div`
  margin-top: 16px;
  font-size: 22px;
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    font-size: 16px;
  }
`
const KvTextTitle = styled.h1`
  margin-top: 16px;
  font-size: 52px;
  color: ${props => props.theme.colors.primary};
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    font-size: 36px;
  }

  img {
    ${mixins.mq.MaxM} {
      width: 50px;
    }
  }

  span {
    margin-left: 12px;
    ${mixins.mq.MaxM} {
      margin-left: 16px;
    }
  }
`
const KvImgSp = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    display: none;
  }
  img {
    max-width: 375px;
  }
`
const AppContainer = styled.div`
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`
const AppHead = styled.h2`
  font-size: 22px;
  ${mixins.mq.MaxM} {
    font-size: 16px;
  }
`
const AppLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  ${mixins.mq.MaxM} {
    gap: 8px;
  }

  > div {
    max-width: 200px;
  }
`
const Nav = styled.ul`
  display: grid;
  gap: 8px 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(4, 1fr);
  }
  > li {
    border: solid 1px ${props => props.theme.colors.monotone75};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.white};
    display: grid;
    align-items: center;
  }
  .link {
    padding: 4px;
    padding-right: 36px;
    text-align: center;
    color: ${props => props.theme.colors.monotone30};
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
    ${IconArrowDown} {
      width: 24px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
`
const ServiceContent2 = styled.ul`
  display: grid;
  margin-top: 24px;
  gap: 40px 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
  }
  > li {
    gap: 0;
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
  }
`
const ServiceContent2Links = styled.div`
  display: flex;
  gap: 16px 32px;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    align-items: flex-start;
  }
  > a:first-child {
    flex-shrink: 0;
  }
`
const ServiceContent3 = styled.ul`
  display: grid;
  gap: 40px 24px;
  margin-top: 40px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 80px;
  }
  > li {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
    gap: 0;
  }
`
const FeeTablePc = styled.div`
  ${mixins.mq.MaxM} {
    display: none;
  }

  table {
    display: table;
    margin-top: 16px;
    border-color: ${props => props.theme.colors.monotone75};

    col {
      &:nth-child(1) {
        width: 14%;
      }
      &:nth-child(2) {
        width: 34%;
      }
      &:nth-child(3) {
        width: 26%;
      }
      &:nth-child(4) {
        width: 26%;
      }
    }
    th,
    td {
      vertical-align: middle;
      text-align: center;
      font-weight: normal;
      border-color: ${props => props.theme.colors.monotone75};
      color: ${props => props.theme.colors.lightBlack};
    }
    th {
      &.thPrimary {
        background-color: ${props => props.theme.colors.monotone40};
        color: ${props => props.theme.colors.white};
      }
      &.thSecondary {
        background-color: ${props => props.theme.colors.monotone56};
        color: ${props => props.theme.colors.white};
      }
      &.thTertiary {
        background-color: ${props => props.theme.colors.monotone88};
      }
      &.thNone {
        background-color: ${props => props.theme.colors.white};
        border: 0;
      }
    }
  }
`
const FeeTableSp = styled.div`
  ${mixins.mq.MinL} {
    display: none;
  }

  table {
    margin-top: 16px;
    border: 1px solid ${props => props.theme.colors.monotone75};
    text-align: center;
    th,
    td {
      text-align: center;
      font-weight: normal;
      color: ${props => props.theme.colors.lightBlack};
    }
    th {
      &.thPrimary {
        background-color: ${props => props.theme.colors.monotone56};
        color: ${props => props.theme.colors.white};
      }
      &.thSecondary {
        padding: 8px;
        background-color: ${props => props.theme.colors.monotone75};
        color: ${props => props.theme.colors.white};
      }
      &.thTertiary {
        padding: 16px 8px;
        background-color: ${props => props.theme.colors.monotone97};
      }
    }
  }
`

const ServiceRakutenlinkEn: NextPage = () => {
  const pagetitle = 'Rakuten Link'
  const directories = [{ path: '/service/', label: 'Optional Services' }]
  const breadcrumbs = [
    {
      text: 'Top',
      url: '/',
    },
    {
      text: 'Optional Services',
      url: '/service/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const ListArgs1 = {
    text: [
      {
        text: 'To start using Rakuten Link for the first time, authentication is required using the phone number associated with your subscription to Rakuten SAIKYO Plan, along with the registered Rakuten ID.',
      },
      {
        text: "If you switch to a new model and wish to use Rakuten Link on it, please review and agree to the 'Rakuten Link Terms of Service' and the 'Application Policy for Rakuten Link' again before use.",
      },
      {
        text: "For devices with 'Anshin Control by i-Filter' enabled, entering the guardian account password is necessary when setting access permissions.",
      },
      {
        text: "For optimal performance, it's recommended to set up Rakuten Link without a Wi-Fi connection, ensuring the antenna symbol is displayed.",
      },
    ],
  }

  const ListArgs2 = {
    text: [
      {
        text: 'Please activate Rakuten Link while in Japan before your international travels. Authentication of the service may not be possible in some overseas roaming areas.',
      },
      {
        text: "To use Rakuten Link for overseas roaming (data communication), activate the overseas roaming (data communication) setting in your 'My Rakuten Mobile' account.",
      },
    ],
  }

  const ListArgs3 = {
    text: [
      {
        text: 'When you switch to a different device and continue using Rakuten Link, your previously backed-up data can be easily restored. Simply install Rakuten Link on your new device and log in after the model change to access your data.',
      },
    ],
  }

  const ListArgs4 = {
    text: [
      {
        text: "When you attempt to make a domestic emergency call using Rakuten Link, the app will automatically switch to your phone's default calling app to place the call.",
      },
      {
        text: 'You cannot make emergency calls to foreign destinations using international roaming with Rakuten Link.',
      },
    ],
  }

  const outputAnchorNav = useCallback(
    (items: { anchor: string; name: string | JSX.Element }[]) => (
      <Nav>
        {items.map(item => (
          <li key={item.anchor}>
            <LinkIconBefore
              href={`#${item.anchor}`}
              onClick={e => anchorCallback(e, item.anchor)}
              className="link"
            >
              <IconArrowDown />
              {item.name}
            </LinkIconBefore>
          </li>
        ))}
      </Nav>
    ),
    [],
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="Discover Rakuten Link: the super communication app that’s an all-in-one solution for calling and messaging by Rakuten Mobile. Get started with our easy setup and usage guide."
        isEnglish={true}
      />
      <CustomSystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <Kv>
          <KvCap>
            <TxtCap as="p">
              *Prices include taxes unless stated otherwise.
            </TxtCap>
          </KvCap>
          <KvText>
            <KvTextCatch>
              Unlimited Domestic Calls
              <span>*1</span>
            </KvTextCatch>
            <KvTextDescription>The Super Communication App</KvTextDescription>
            <KvTextTitle>
              <img
                src={`${assets}img/common/icon-rakuten-link.svg?210804`}
                alt=""
                width="68"
                height="69"
              />
              <span>Rakuten Link</span>
            </KvTextTitle>
          </KvText>
          <KvImgSp>
            <img
              src={`${imgpath}hero-sp.png?211015`}
              alt=""
              width="750"
              height="600"
            />
          </KvImgSp>
        </Kv>

        <AppContainer>
          <div className={Utils['Align-center']}>
            <AppHead>
              Enjoy Free Calls, Easy Payments, and Earn{' '}
              <br className={Utils['Disp-tb-sp']} />
              Points – All in One App!
            </AppHead>
            <AppLink className={Utils['Mt-16']}>
              <div>
                <BannerHover
                  href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.rcs&a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${assets}img/common/btn-googleplay-en.png`}
                    alt="Google Play"
                    width="200"
                    height="59"
                  />
                </BannerHover>
              </div>
              <div>
                <BannerHover
                  href="https://apps.apple.com/jp/app/id1498877539?a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${assets}img/common/btn-appstore-en.png`}
                    alt="Apple Store"
                    width="180"
                    height="60"
                  />
                </BannerHover>
                <br />
                <TxtCap>Supports iPhone only. *2</TxtCap>
              </div>
            </AppLink>
          </div>
        </AppContainer>
        <SystemContainer className={Utils['Mt-32']}>
          <TxtCap as="ul">
            <li>*Not applicable to “Rakuten SAIKYO Plan (Data Type)”.</li>
            <li>
              *1 Calls to certain numbers (starting with 0570, etc.) and special
              numbers (188) are not eligible for free calls. A fee of 22 yen per
              30 sec. applies when not using the app. Refer to{' '}
              <LinkNormal href="/faq/detail/00001887/">
                the list of ineligible numbers
              </LinkNormal>
              .
            </li>
            <li>*2 iPad and iPod touch are not supported. </li>
            <li>
              *Regularly update to the latest version of the Rakuten Link app
              for optimal functionality. Check each store for the most recent
              version.
            </li>
            <TxtEmp02 as="li">
              *Be aware that some product features may be unavailable with
              outdated software. If your Rakuten Link Android app version is not
              up-to-date, you may lose access to some functions.
            </TxtEmp02>
            <TxtEmp02 as="li">
              *Users not updated to version 2.9.0 or later of the Rakuten Link
              Android app may receive calls via the standard Android phone app
              instead of Rakuten Link due to system changes.
            </TxtEmp02>
          </TxtCap>
        </SystemContainer>

        <GrayBox className={Utils['Mt-32']}>
          <SystemContainer className={`${Utils['Py-24']} ${Utils['Py-pc-32']}`}>
            <nav>
              {outputAnchorNav([
                {
                  anchor: 'feature',
                  name: (
                    <>
                      Rakuten Link App <br className={Utils['Disp-pc']} />
                      Features
                    </>
                  ),
                },
                {
                  anchor: 'conditions',
                  name: 'Terms of Use',
                },
                {
                  anchor: 'device',
                  name: (
                    <>
                      Supported Device <br className={Utils['Disp-pc']} />
                      Models
                    </>
                  ),
                },
                {
                  anchor: 'notes',
                  name: 'Notes',
                },
              ])}
            </nav>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <Heading id="feature" level="2" className={Utils['Mt-56']}>
            Rakuten Link App Features
          </Heading>
          <ServiceContent2>
            <li>
              <Heading level="3" className={Utils['Align-llc']}>
                Unlimited Free Domestic Calls{' '}
                <br className={Utils['Disp-pc']} />
                Even with Non-Rakuten Link Users
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${imgpath}img-01.png`}
                  alt=""
                  width="343"
                  height="176"
                  loading="lazy"
                />
              </div>
              <TxtNormal className={Utils['Mt-24']} as="p">
                Simply dial using Rakuten Link, and your existing phone number
                will be displayed to the recipient. Enjoy free calls to mobiles
                and landlines of any carrier within the country.
                <TxtCap>*1</TxtCap>
              </TxtNormal>
            </li>
            <li>
              <Heading level="3" className={Utils['Align-llc']}>
                Economical International Calls
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${imgpath}img-02.png`}
                  alt=""
                  width="343"
                  height="176"
                  loading="lazy"
                />
              </div>
              <div className={Utils['Mt-24']}>
                <TxtNormal as="p">
                  Make free calls to Japan from eligible overseas countries and
                  regions.
                  <TxtCap>*3</TxtCap>
                </TxtNormal>
                <ServiceContent2Links className={Utils['Mt-16']}>
                  <LinkIconBefore
                    href="#price"
                    onClick={e => anchorCallback(e, 'price')}
                  >
                    <IconArrowDown />
                    Calling Charges Details
                  </LinkIconBefore>
                  <LinkIconAfter href="/service/global/overseas/en/?l-id=service_rakuten-link_en_service_global_overseas-en01#accordion-1">
                    Eligible Overseas Countries and Regions
                    <IconChevronRight />
                  </LinkIconAfter>
                </ServiceContent2Links>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  *3 Authenticate Rakuten Link in Japan before traveling;
                  authentication might not be possible in some overseas areas.
                  Calls are possible only from certain countries/regions or via
                  Wi-Fi in others. International roaming does not consume data
                  capacity. Emergency calls in the destination country cannot be
                  made via Rakuten Link international roaming (
                  <LinkNormal href="/service/international-roaming/?l-id=service_rakuten-link_en_international-roaming">
                    see international roaming details
                  </LinkNormal>
                  ). Service areas, terms, and fees for international roaming,
                  calls, and unlimited international calls are subject to
                  change. Please be aware in advance.
                </TxtCap>
              </div>
            </li>
          </ServiceContent2>
          <ServiceContent3>
            <li>
              <Heading level="3" className={Utils['Align-llc']}>
                Free Messaging
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${imgpath}img-03.png`}
                  alt=""
                  width="328"
                  height="168"
                  loading="lazy"
                />
              </div>
              <div>
                <p className={Utils['Mt-24']}>
                  Rakuten Link users can send and receive messages, photos,
                  videos, files, and enjoy group messaging with up to 100
                  people.
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconBefore
                    as="a"
                    href="#sms"
                    onClick={e => anchorCallback(e, 'sms')}
                  >
                    <IconArrowDown />
                    SMS Charges for Non-Rakuten Link Users
                  </LinkIconBefore>
                </div>
              </div>
            </li>
            <li>
              <Heading level="3" className={Utils['Align-llc']}>
                Rakuten Mobile Email Service
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${imgpath}img-04.png`}
                  alt=""
                  width="328"
                  height="168"
                  loading="lazy"
                />
              </div>
              <div>
                <p className={Utils['Mt-24']}>
                  Use our email service for free with Rakuten Mobile's domain
                  (@rakumail.jp).
                </p>
                <TxtCap className={Utils['Mt-8']} as="ul">
                  <li>*Data usage counts towards your plan.</li>
                  <li>
                    *Requires signup for Rakuten SAIKYO Plan and initial setup.
                  </li>
                </TxtCap>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter
                    as="a"
                    href="/service/rakumail/?l-id=service_rakuten-link_en_service_rakumail"
                  >
                    See Raku Mail (Features and Services)
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </div>
            </li>
            <li>
              <Heading level="3" className={Utils['Align-llc']}>
                Additional Functions Beyond Calling
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${imgpath}img-05.png`}
                  alt=""
                  width="328"
                  height="168"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-24']}>
                Beyond calls and messages, easily make smartphone payments with
                Rakuten Pay, earn daily Rakuten Points, check the latest news,
                and more.
              </p>
            </li>
          </ServiceContent3>
          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <div>
              <ButtonRegularLarge
                as="a"
                href="https://service.link.link/?scid=wi_rlk_rmb_service_rlk_morebtn_link_service_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the Details <br className={Utils['Disp-tb-sp']} />
                of Rakuten Link Features
                <IconNewTabLine className="icon-end" />
              </ButtonRegularLarge>
            </div>
            <div className={Utils['Mt-16']}>
              <ButtonRegularLarge
                as="a"
                href="https://service.link.link/guide/?scid=wi_rlk_rmb_service_rlk_howtousebtn_link_service_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide to Using Rakuen Link
                <IconNewTabLine className="icon-end" />
              </ButtonRegularLarge>
            </div>
            <div className={Utils['Mt-32']}>
              <LinkIconAfter
                as="a"
                href="/support/link/setting/?l-id=service_rakuten-link_en_support_link_setting"
              >
                FAQ
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          </div>
          <Heading id="conditions" level="2" className={Utils['Mt-56']}>
            Terms of Use
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            Must be contracted with Rakuten Mobile (Rakuten SAIKYO Plan).
            <br />
            For corporate plan users:{' '}
            <LinkIconAfter
              href="https://business.mobile.rakuten.co.jp/service/rakuten-link-office"
              target="_blank"
            >
              Click here
              <IconNewTabLine />
            </LinkIconAfter>
          </TxtNormal>
          <DescriptionListDefault className={Utils['Mt-32']} id="device">
            <div>
              <dt>Supported Models</dt>
              <dd>
                <TxtEmp01 as="p">Android Devices</TxtEmp01>
                <TxtNormal as="p" className={Utils['Mt-8']}>
                  Compatible with Rakuten Mobile products running Android 10 or
                  later.
                </TxtNormal>
                <div className={Utils['Mt-8']}>
                  <LinkIconAfter
                    as="a"
                    href="/product/certified-products/?l-id=service_rakuten-link_en_product_certified-products01"
                  >
                    See Compatible Products
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <TxtEmp01 className={Utils['Mt-24']} as="p">
                  iOS Devices
                </TxtEmp01>
                <p className={Utils['Mt-8']}>
                  Compatible with iPhone 14 Pro Max, iPhone 14 Pro, iPhone 14
                  Plus, iPhone 14, iPhone 13 Pro Max, iPhone 13 Pro, iPhone 13,
                  iPhone 13 mini, iPhone SE (3rd generation), iPhone 12 Pro Max,
                  iPhone 12 Pro, iPhone 12, iPhone 12 mini, iPhone SE (2nd
                  generation), iPhone 11 Pro Max, iPhone 11 Pro, iPhone 11,
                  iPhone XR, iPhone XS Max, iPhone XS, iPhone X, iPhone 8,
                  iPhone 8 Plus, iPhone 7, iPhone 7 Plus, iPhone SE (1st
                  generation), iPhone 6s, iPhone 6s Plus, all with iOS 14.4 or
                  later.<TxtCap>*5</TxtCap>
                </p>
                <TxtCap className={Utils['Mt-8']} as="p">
                  *5 The app may become unavailable due to future OS updates.
                  Rakuten Link usage is not guaranteed with Apple Beta Software.
                </TxtCap>
                <TxtEmp02 className={Utils['Mt-16']} as="p">
                  Rakuten Link usage is not guaranteed with modified devices,
                  OS, or emulators.
                </TxtEmp02>
              </dd>
            </div>
          </DescriptionListDefault>
          <Heading id="price" level="2" className={Utils['Mt-64']}>
            Rakuten Link Call and SMS Charges
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            Charges vary depending on the phone/messaging app used by the
            recipient.
          </TxtNormal>
          <Heading level="3" className={Utils['Mt-32']}>
            When the Recipient is Using Rakuten Link
          </Heading>
          <MediaGrid className={Utils['Mt-16']}>
            <MediaImage className={Utils['Align-center']}>
              <img
                src={`${imgpath}img-06.png`}
                alt=""
                width="326"
                height="168"
                loading="lazy"
              />
            </MediaImage>
            <div>
              <Heading level="4">
                Calls and messages with Rakuten Link users: free for both
                Android and iOS users.
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                *Without Rakuten Link: Domestic calls cost 22 yen per 30
                seconds. Calls from domestic to overseas and between overseas
                countries are charged per minute, varying by country/region, and
                are limited to eligible overseas areas.
                <br />
                SMS Charges: Domestic SMS are billed at 3.3 yen per 70
                characters (double-byte). International SMS cost 100 yen
                (non-taxable) per 70 characters (double-byte), and are available
                only in eligible overseas locations.
              </TxtCap>
            </div>
          </MediaGrid>
          <Heading level="3" className={Utils['Mt-40']}>
            When the Recipient is Not Using Rakuten Link
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            Your product may offer different features of the Rakuten Link
            service, as they can vary depending on the product you are using.
          </TxtNormal>
          <TxtCap as="p" className={Utils['Mt-8']}>
            *Without Rakuten Link: Domestic SMS cost 3.3 yen per 70 characters
            (double-byte). Daily limit for sending SMS is 100.
          </TxtCap>
          <Heading level="4" id="sms" className={Utils['Mt-32']}>
            Call Charges with Non-Rakuten Link Users
          </Heading>
          <FeeTablePc>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th className="thNone"></th>
                    <th className="thNone"></th>
                    <th className="thPrimary">Android</th>
                    <th className="thPrimary">iOS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan={4} className="thSecondary">
                      Outgoing Call Charges
                    </th>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <td rowSpan={2}>
                      Free <TxtCap>*6</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      Free <TxtCap>*6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <td rowSpan={2}>
                      Country/Region Rates <TxtCap>*7</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      Country/Region Rates <TxtCap>*7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <th rowSpan={2} className="thSecondary">
                      Incoming Call Charges
                    </th>
                    <th className="thTertiary">In Japan</th>
                    <td rowSpan={2}>
                      Free <TxtCap>*8</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      <p>Rakuten Link app does not support call receiving.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving calls. *9
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTablePc>
          <FeeTableSp>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      Android
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      Outgoing Call Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Free <TxtCap>*6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Country/Region Rates <TxtCap>*7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      Incoming Call Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">In Japan</th>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Free <TxtCap>*8</TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      iOS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      Outgoing Call Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Free <TxtCap>*6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Country/Region Rates <TxtCap>*7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      Incoming Call Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">In Japan</th>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>
                        Rakuten Link app does not support call receiving.{' '}
                        <TxtCap>*8</TxtCap>
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving calls. *9
                      </TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTableSp>
          <TxtCap className={Utils['Mt-16']} as="ul">
            <li>
              *6 Calls to certain numbers, including other carriers’ connection
              services (starting with 0570) and specific numbers (such as 188),
              are not included in the free call offer. With the Rakuten Link
              app, calls can only be made and received from countries and
              regions outside Japan. For calls to other areas, a Wi-Fi
              connection is required.
            </li>
            <li>
              *7 With Rakuten Link, outgoing calls are possible only in certain
              overseas countries and regions. For calls to other areas, a Wi-Fi
              connection is required. For a list of available countries/regions
              and call charges, see “
              <LinkNormal href="/guide/international-call/?l-id=service_rakuten-link_en_guide_international-call01">
                International Calls (How to Use)
              </LinkNormal>
              ”. Subscribers to “
              <LinkNormal href="/service/international-unlimited-talk/?l-id=service_rakuten-link_en_service_international-unlimited-talk">
                Unlimited International Calling
              </LinkNormal>
              ” enjoy free calls in the applicable overseas locations.
            </li>
            <li>
              *8 Incoming calls via Rakuten Link are limited to certain overseas
              countries and regions. For calls to other areas, a Wi-Fi
              connection is required.{' '}
            </li>
            <li>
              *9 Using the standard iOS phone app, incoming calls outside Japan
              are permitted in designated countries and regions, with
              pay-as-you-go charges varying by location. In other areas,
              incoming calls require a Wi-Fi connection. For details on
              available locations and charges, see “
              <LinkNormal href="/guide/international-call/?l-id=service_rakuten-link_en_guide_international-call02">
                International Calls (How to Use)
              </LinkNormal>
              ”.
            </li>
          </TxtCap>
          <Heading level="4" className={Utils['Mt-32']}>
            SMS Charges with Non-Rakuten Link Users
          </Heading>
          <FeeTablePc>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th className="thNone"></th>
                    <th className="thNone"></th>
                    <th className="thPrimary">Android</th>
                    <th className="thPrimary">iOS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan={4} className="thSecondary">
                      SMS Sending Charges
                    </th>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <td rowSpan={2}>
                      Free <TxtCap>*10</TxtCap>
                    </td>
                    <td rowSpan={4}>
                      <p>Rakuten Link app does not support SMS sending.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for sending SMS. *11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <td rowSpan={2}>
                      <p>
                        <LinkNormal href="/service/global/overseas/en/?l-id=service_rakuten-link_en_service_global_overseas-en02#accordion-1">
                          Eligible countries/regions
                        </LinkNormal>
                        : Free <TxtCap>*10</TxtCap>
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Other countries/regions: ¥100 (non-taxable)/70 chars
                        (double-bite)
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <th rowSpan={2} className="thSecondary">
                      SMS Receiving Charges
                    </th>
                    <th className="thTertiary">In Japan</th>
                    <td rowSpan={2}>
                      Free <TxtCap>*10</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      <p>Rakuten Link app does not support SMS receiving.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving SMS. *12
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTablePc>
          <FeeTableSp>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      Android
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      SMS Sending Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Free <TxtCap>*10</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>
                        <LinkNormal href="/service/global/overseas/en/?l-id=service_rakuten-link_en_service_global_overseas-en02#accordion-1">
                          Eligible countries/regions
                        </LinkNormal>
                        : Free <TxtCap>*10</TxtCap>
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Other countries/regions: ¥100 (non-taxable)/70 chars
                        (double-bite)
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      SMS Receiving Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">In Japan</th>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Free <TxtCap>*10</TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      iOS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      SMS Sending Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to Japanese Numbers
                    </th>
                    <th className="thTertiary">
                      From Overseas to Japanese Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Link app does not support SMS sending.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving calls. *11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      From Japan to International Numbers
                    </th>
                    <th className="thTertiary">
                      International to International Numbers
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Link app does not support SMS sending.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving calls. *11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      SMS Receiving Charges
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">In Japan</th>
                    <th className="thTertiary">Overseas</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Link app does not support SMS receiving.</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        Use the standard iOS phone app for receiving calls. *12
                      </TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTableSp>
          <TxtCap className={Utils['Mt-16']} as="ul">
            <li>
              *10 Sending and receiving SMS via Rakuten Link are limited to{' '}
              <LinkNormal href="/service/global/overseas/en/?l-id=service_rakuten-link_en_service_global_overseas-en03#accordion-1">
                eligible countries and regions
              </LinkNormal>
              .
            </li>
            <li>
              *11 Using the standard iOS app, sending SMS are possible only in
              specified overseas countries and regions. See “
              <LinkNormal href="/guide/international-sms/?l-id=service_rakuten-link_en_guide_international-sms01">
                International SMS (How to use)
              </LinkNormal>
              ” for details.
            </li>
            <li>
              *12 Using the standard iOS app, receiving SMS are possible only in
              specified overseas countries and regions. See “
              <LinkNormal href="/guide/international-sms/?l-id=service_rakuten-link_en_guide_international-sms02">
                International SMS (How to use)
              </LinkNormal>
              ” for details.
            </li>
          </TxtCap>
          <Heading id="notes" level="2" className={Utils['Mt-56']}>
            Notes
          </Heading>
          <AccordionList
            text={'First-Time Startup of Rakuten Link'}
            isOpened={false}
            className={Utils['Mt-24']}
          >
            <ListDisc {...ListArgs1} />
          </AccordionList>
          <AccordionList text={'Usage Cautions'} isOpened={false}>
            <UlOnly>
              <li>
                We reserve the right to disconnect calls that may negatively
                impact our facilities, such as those continuing for an extended
                period.
              </li>
              <li>
                If Rakuten Link is unable to receive messages due to the device
                being off, out of range, or a disruption in the contracted line,
                these messages will be stored on the Rakuten Link server. They
                will automatically be received once the service is available
                again.
              </li>
              <li>
                During periods when your subscription is interrupted, calling
                and messaging capabilities are restricted to communication only
                between Rakuten Link users.
              </li>
              <li>
                Before uninstalling Rakuten Link, ensure you log out. Failing to
                log out before uninstalling may result in an inability to
                receive calls or messages. If you uninstall Rakuten Link without
                logging out, reinstall it from "
                <LinkIconAfter
                  href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.rcs&a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                  <IconNewTabLine />
                </LinkIconAfter>
                " or "
                <LinkIconAfter
                  href="https://apps.apple.com/jp/app/id1498877539?a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                  <IconNewTabLine />
                </LinkIconAfter>
                ", log out, and then proceed to uninstall it.
                <br />
                <LinkIconAfter href="/product/certified-products/?l-id=service_rakuten-link_en_product_certified-products02">
                  Refer to our list of compatible models for Rakuten Link.
                  <IconChevronRight />
                </LinkIconAfter>
              </li>
              <li>
                Rakuten Link is not guaranteed to function with the following
                scenarios:
                <ul className={Utils['Mt-8']}>
                  <li>
                    Operations or calls made via Bluetooth or linked to a device
                  </li>
                  <li>Using the service while connected to a VPN</li>
                  <li>
                    Operations and calls made outside the Rakuten Mobile network
                  </li>
                  <li>Malfunctions experienced when connected to Wi-Fi</li>
                  <li>
                    Any operation or call made on a dual SIM device with a
                    non-Rakuten Mobile SIM set for mobile data, calls, or voice
                    line
                  </li>
                </ul>
              </li>
              <li>
                Incoming calls may not be received if 'Notification', 'Manner
                Mode', or 'Good Night Mode (Concentration Mode)' settings are
                enabled on the device.
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'Cancellation Cautions'} isOpened={false}>
            <p>
              Please note that if your line is terminated or transferred, all
              data stored on Rakuten Link will be permanently deleted. We advise
              customers who wish to retain their Rakuten Link data to back it up
              in advance.
            </p>
          </AccordionList>
          <AccordionList text={'Automatic Backups'} isOpened={false}>
            <UlOnly>
              <li>
                The following data types are securely encrypted and
                automatically backed up:
                <UlOnly className={Utils['Mt-16']}>
                  <li>Contacts</li>
                  <li>Call history</li>
                  <li>
                    Message history, including both sent and received messages
                  </li>
                  <li>
                    Files such as photos and videos that are sent and received
                  </li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'Phonebook'} isOpened={false}>
            Rakuten Link seamlessly syncs with your smartphone's phonebook and
            securely stores this data in the cloud using encryption. This
            feature ensures that you won’t need to manually transfer phonebook
            data when switching phones. For more information about phonebook
            synchronization, please{' '}
            <LinkNormal href="/faq/detail/00001917/?l-id=service_rakuten-link_en_faq_detail-00001917">
              click here
            </LinkNormal>
            .
          </AccordionList>
          <AccordionList text={'Data Communications'} isOpened={false}>
            Usage of Rakuten Link does not count towards your high-speed data
            quota. Please note that this policy is subject to change without
            prior notice.
          </AccordionList>
          <AccordionList
            text={'Overseas Roaming (Data Communication)'}
            isOpened={false}
          >
            <ListDisc {...ListArgs2} />
          </AccordionList>
          <AccordionList
            text={'Model Change or MNP (Mobile Number Portability)'}
            isOpened={false}
          >
            <ListDisc {...ListArgs3} />
          </AccordionList>
          <AccordionList text={'Security Information'} isOpened={false}>
            <UlOnly>
              <li>
                When you use Rakuten Link, the following details are visible to
                other Rakuten Link users:
                <UlOnly className={Utils['Mt-16']}>
                  <li>Your Rakuten Link usage status</li>
                  <li>
                    Your profile information, including your registered name,
                    phone number, and profile photo
                  </li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'Emergency Calls'} isOpened={false}>
            <ListDisc {...ListArgs4} />
          </AccordionList>
          <AccordionList text={'Incoming Call History'} isOpened={false}>
            <UlOnly>
              <li>
                The caller ID or history may display as 'unknown' or 'blocked'
                in the following scenarios:
                <UlOnly className={Utils['Mt-16']}>
                  <li>
                    When the caller has enabled the 'Number-withheld' setting
                  </li>
                  <li>
                    When you receive a call while not connected to Rakuten
                    Mobile, but connected to Wi-Fi
                  </li>
                  <li>
                    When the caller makes a call while not connected to Rakuten
                    Mobile, but connected to Wi-Fi
                  </li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <div className={Utils['Mt-32']}>
            <ButtonRegular
              as="a"
              href="/fee/saikyo-plan/en/?l-id=service_rakuten-link_en_fee_saikyo-plan-en"
            >
              Go Back to Rakuten SAIKYO Plan page
            </ButtonRegular>
          </div>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </CustomSystemWrapper>
    </>
  )
}

export default ServiceRakutenlinkEn
