import type { NextPage } from 'next'
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react'
import styled, { css } from 'styled-components'
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
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import {
  ButtonPrimary,
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { Tab } from '@components/atoms/Tab'
import { InfoboxAlert } from '@components/atoms/Infobox'
import {
  IconChevronRight,
  IconSignWarningLine,
  IconSignInfoLine,
  IconNewTabLine,
  IconArrowDown,
} from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { CampaignRule2265 } from '@components/include/campaign/rules/2024/CampaignRule2265'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { CustomBottomFixed } from '@components/include/common/CustomBottomFixed'
import { Checkbox } from '@components/atoms/Checkbox'
import { BannerHover } from '@components/atoms/Banner'
import { Picture } from '@components/atoms/Picture'
import { Heading } from '@components/atoms/Heading'
import { CommonNavFamilyYouthKodomo } from '@components/include/common/NavFamilyYouthKodomo'

const imgPath = `${assets}img/fee/youth/`
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
    background: url(${imgPath}bg-bottom-icon-sp-240312.png) no-repeat;
    background-size: contain;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 286px;
    height: 101px;
    margin: 0 auto;
    ${mixins.mq.MinL} {
      background: url(${imgPath}bg-bottom-icon-pc-240312.png) no-repeat;
      background-size: contain;
      width: 1235px;
      height: 184px;
    }
  }
`
const RecommendHeading = styled.h2`
  ${mixins.mq.MinL} {
    margin-right: 11%;
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
    max-width: 680px;
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
  max-width: 640px;
  background-color: ${props => props.theme.colors.alertBg};
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
const TxtNotice = styled(TxtCap)`
  max-width: 640px;
  margin-inline: auto;
`
const EntryConfirmWrap = styled.div`
  margin-inline: auto;
  max-width: 640px;
`
const EntryConfirm = styled.ol`
  display: grid;
  row-gap: 24px;
  ${ButtonRegularLarge} {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`
const CustomInfoboxAlert = styled(InfoboxAlert)`
  padding: 16px;
`
const TitleIconBefore = css`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  align-items: center;
  font-weight: bold;
  ${mixins.mq.MaxS} {
    width: fit-content;
    margin-inline: auto;
  }
`
const TitleIconBeforeAlert = styled.p`
  ${TitleIconBefore}
  &::before {
    content: url(${assets}img/fee/youth/icon-alert.svg);
    width: 20px;
    height: 20px;
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
  background-color: white;
  border: 1px solid ${props => props.theme.colors.monotone75};
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-radius: 4px;
  text-decoration: none;
  p {
    font-size: 16px;
    margin-right: 6px;
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
  p {
    color: #006497;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: -0.2em;
    text-decoration-thickness: 0.5em;
    text-decoration-color: #fcf404;
    text-decoration-skip-ink: none;
  }
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
  justify-content: center;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
    gap: 8px;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
  picture {
    width: calc(50% - 8px);
    ${mixins.mq.MaxM} {
      max-width: 343px;
      width: 100%;
    }
  }
`

const CampaignInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-top: -16px;
  ${mixins.mq.MaxM} {
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

const ImgBox = styled.p`
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    margin-top: -16px;
  }
`
const BannerHoverShadow = styled(BannerHover)`
  box-shadow: 0px 3.5px 0px 0px #85b6d4;
`
const MonthPayment = styled.section`
  display: grid;
  padding: 16px;
  gap: 8px;
  border: solid 1px #000;
  ${mixins.mq.MinM} {
    grid-template-columns: 25% 1fr;
    grid-template-areas:
      'title title'
      'icon txt'
      'link link';
  }
  .title {
    justify-self: center;
    ${mixins.mq.MinM} {
      grid-area: title;
    }
  }
  .icon {
    justify-self: center;
    ${mixins.mq.MinM} {
      grid-area: icon;
      justify-self: end;
    }
  }
  .txt {
    ${mixins.mq.MinM} {
      grid-area: txt;
      align-self: center;
    }
  }
  .link {
    justify-self: center;
    ${mixins.mq.MinM} {
      grid-area: link;
    }
  }
`

const FeeYouth: NextPage = () => {
  const pagetitle = '最強青春プログラム 22歳までずっとおトクに利用できる！'
  const directories = [
    { path: '/fee/saikyo-plan/', label: 'Rakuten最強プラン（料金プラン）' },
  ]
  const breadcrumbs = [
    {
      text: 'トップ',
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
  }, [campaignCheckApi])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="最強青春プログラム 家族割引とセットで使えば、Rakuten最強プランが22歳までデータ3GBで全キャリアで1番安い！※2024年3月時点。自社調べ"
        directories={directories}
        ogp_img={`https://network.mobile.rakuten.co.jp${imgPath}ogp.png`}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${imgPath}kv-sp-240502.png`}
                width="1125"
                height="990"
              />
              <img
                src={`${imgPath}kv-pc-240502.png`}
                width="1440"
                height="530"
                alt="22歳まではずーっとダブルで安い！最強青春プログラム"
              />
            </picture>
          </h1>
        </KvHeading>
        <BgBlue className={Utils['Pt-8']}>
          <SystemContainer>
            <TxtCap as="p">
              ※1
              家族割引、22歳以下のキャンペーンのみを適用し、その他の特典は含めない場合の実質価格を他キャリアと比較。キッズ向けプランを除く。2024年3月時点。自社調べ。プログラム適用条件あり。※2
              13~23歳の誕生月前月まで適用。※3
              期間限定ポイント。すべての条件を満たしたことが確認された月の翌々月末日ごろに付与。※4
              一部対象外番号あり。Rakuten Linkアプリ未使用時30秒22円。※5 AQUOS
              wish3の場合。現金一括払い/割賦販売価格29,700円、48回払い、支払期間48カ月、実質年率0％。[楽天カード支払い限定]。※複数回線契約している場合も、110ポイントの還元となります。
              <TxtEmp02>
                ※「実質価格」とは、プログラムの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。
              </TxtEmp02>
              ※詳しくは
              <LinkNormal
                href="#campaign-rule2265"
                onClick={e => anchorCallback(e, 'campaign-rule2265')}
              >
                ルール
              </LinkNormal>
              をご確認ください。
            </TxtCap>

            <div className={Utils['Mt-16']}>
              <p className={Utils['Align-right']}>
                <LinkIconAfter href="/fee/youth/en/?l-id=fee_youth_fee_youth_en">
                  English
                  <IconChevronRight />
                </LinkIconAfter>
              </p>
            </div>

            <div className={Utils['Mt-48']}>
              <EntryContent id="entry" aria-hidden={!isLoad}>
                <EntryContentPeriod
                  className={`${Utils['Pb-16']} ${Utils['Align-center']}`}
                >
                  <TxtEmp01>【エントリー期間】</TxtEmp01>
                  <br className={Utils['Disp-sp']} />
                  2024年3月12日（火）9:00 ～終了日未定
                </EntryContentPeriod>
                <TxtWaringWrap
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
                  aria-hidden={isCampaignEntry}
                >
                  <TxtWaring>
                    <IconSignWarningLine />
                    <span>
                      13〜22歳以下のご契約者様自身の楽天IDでのエントリーが必要となります
                    </span>
                  </TxtWaring>
                  <div className={`${Utils['Align-center']}`}>
                    <Checkbox
                      text="上記注意事項を確認した"
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
                      エントリーはこちら
                    </ButtonPrimaryLarge>
                  </div>
                  <div aria-hidden={!isCampaignEntry}>
                    <ButtonSuccessLarge>エントリー済みです</ButtonSuccessLarge>
                  </div>
                </div>
                <div
                  className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
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
                    楽天会員情報の確認・新規登録（無料）はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
                <TxtNotice
                  as="p"
                  className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}
                >
                  ※13〜22歳までが対象です。対象外の方（ご家族等）の楽天IDでエントリーした場合、ポイント還元の対象になりません
                  <br />
                  ※ポイント還元には条件があります。詳細は
                  <LinkNormal
                    href="#campaign-rule2265"
                    onClick={e => anchorCallback(e, 'campaign-rule2265')}
                  >
                    ルール
                  </LinkNormal>
                  をご確認ください
                  <br />
                  ※13歳の誕生月前月までにエントリーした場合は「最強こどもプログラム」が適用されます。
                  <LinkNormal href="/fee/kids/?l-id=fee_youth_fee_kids_1">
                    詳細はこちら
                  </LinkNormal>
                </TxtNotice>
                <EntryConfirmWrap className={Utils['Mt-16']}>
                  <AccordionList
                    text={
                      <TxtEmp01>
                        適用したい楽天IDでエントリーできているか確認する方法
                      </TxtEmp01>
                    }
                    isOpened={false}
                  >
                    <EntryConfirm>
                      <li>
                        <p>
                          <TxtEmp01>
                            楽天PointClubの、
                            <br className={Utils['Show-oxx']} />
                            <LinkIconAfter
                              href="https://oubo.rakuten.co.jp/list/"
                              target="_blank"
                              data-ratid="fee_youth_campaign-entry-list"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              キャンペーンエントリー履歴
                              <IconNewTabLine />
                            </LinkIconAfter>
                            を確認する
                          </TxtEmp01>
                          <br />
                          ログインする際、
                          <TxtEmp02>
                            最強青春プログラムを適用したい楽天IDを使用しているか
                          </TxtEmp02>
                          ご確認ください。
                        </p>
                        <p
                          className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                        >
                          <img
                            src={`${imgPath}entry-history.png`}
                            width="421"
                            height="306"
                            alt=""
                            loading="lazy"
                          />
                        </p>
                      </li>
                      <li>
                        <CustomInfoboxAlert className={Utils['Mt-8']}>
                          <TitleIconBeforeAlert>
                            「最強青春プログラム」が 表示されていない場合
                          </TitleIconBeforeAlert>
                          <p>
                            最強青春プログラムを適用したい楽天IDで、再度エントリーをお願いします。
                          </p>
                          <p>
                            ※ほかの楽天IDで最強青春プログラムにエントリーする場合も以下よりご確認ください。
                          </p>
                          <div
                            className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                          >
                            <ButtonRegularLarge
                              as="a"
                              href="/faq/detail/10000942/?l-id=fee_youth_faq_detail_10000942#sec2"
                            >
                              再度エントリーする方法の詳細を見る
                            </ButtonRegularLarge>
                          </div>
                        </CustomInfoboxAlert>
                      </li>
                    </EntryConfirm>
                  </AccordionList>
                </EntryConfirmWrap>
              </EntryContent>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
              <img
                src={`${imgPath}title-before-pc.png`}
                width="301"
                height="29"
                alt="楽天モバイルをご利用前の方はこちら"
                loading="lazy"
              />
              <BtnGridHalfWide className={Utils['Mt-16']}>
                <div>
                  <ButtonPrimaryLarge
                    as="a"
                    href="/guide/application?lid-r=fee_youth_cta_guide_application"
                  >
                    Rakuten最強プランを申し込む
                  </ButtonPrimaryLarge>
                </div>
                <div>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/shop/?l-id=fee_youth_cta_shop"
                  >
                    お近くのショップを探す・来店予約
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
                data-ratid="fee_youth_youth-program_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  最強青春
                  <br className={Utils['Show-oxx']} />
                  プログラム
                </TxtCap>
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
                data-ratid="fee_youth_product_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  おすすめの
                  <br className={Utils['Show-oxx']} />
                  製品
                </TxtCap>
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
                data-ratid="fee_youth_structure_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  プログラムの
                  <br className={Utils['Show-oxx']} />
                  仕組み
                </TxtCap>
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
                data-ratid="fee_youth_usage-image_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  利用
                  <br className={Utils['Show-oxx']} />
                  イメージ
                </TxtCap>
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
          <div>
            <SystemContainer>
              <section className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']}`}>
                <RecommendHeading
                  className={Utils['Align-center']}
                  data-ratid="youth_scroll-01_fee"
                  data-ratevent="appear"
                  data-ratparam="all"
                  id="saikyo"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-1-sp-240425.png`}
                      width="686"
                      height="343"
                    />
                    <img
                      src={`${imgPath}reason-1-pc-240425.png`}
                      width="772"
                      height="187"
                      alt="22歳までの方には最強青春プログラムがおすすめ！おすすめの理由その1全キャリアで料金（3GB）が1番安い！"
                      loading="lazy"
                    />
                  </picture>
                </RecommendHeading>
                <BoxWhite className={`${Utils['Mt-8']} ${Utils['Mt-pc-0']}`}>
                  <MaxWidthWrap>
                    <p className={Utils['Align-center']}>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}fee-txt-01-sp-240502.png`}
                          width="622"
                          height="972"
                        />
                        <img
                          src={`${imgPath}fee-txt-01-pc-240502.png`}
                          width="680"
                          height="437"
                          alt="家族割引適用後968円/月が「最強青春プログラム」で110ポイント還元でデータ3GBのご利用なら22歳までずーっと実質780円/月〜"
                          loading="lazy"
                        />
                      </picture>
                    </p>
                    <TxtCap as="ul" className={Utils['Mt-16']}>
                      <li>
                        ※1
                        家族割引、22歳以下の割引のみを適用し、その他の割引は含めない場合の他キャリアと比較。2024年3月時点。自社調べ。プログラム適用条件あり。※2
                        13〜23歳の誕生月前月まで適用。
                      </li>
                    </TxtCap>
                    <p
                      className={`${Utils['Mt-32']} ${Utils['Mt-pc-48']} ${Utils['Align-center']}`}
                    >
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}fee-txt-02-sp-240502.png`}
                          width="622"
                          height="1000"
                        />
                        <img
                          src={`${imgPath}fee-txt-02-pc-240502.png`}
                          width="680"
                          height="528"
                          alt="最強家族プログラム適用時20GB超過後～2,880円（税込3,168円）3GB超過後～20GBまで1,880円（税込2,068円）3GBまで880円税込968円"
                          loading="lazy"
                        />
                      </picture>
                    </p>
                    <TxtCap
                      as="p"
                      ref={scrollTriggerRef}
                      className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                    >
                      * 公平なサービス提供または環境により速度低下する場合あり
                      ※通話料等別
                    </TxtCap>
                    <MonthPayment className={Utils['Mt-16']}>
                      <Heading
                        level="4"
                        as="h3"
                        className={`title ${Utils['Align-center']}`}
                      >
                        楽天ポイントを
                        <br className={Utils['Show-oxx']} />
                        月々のお支払いに使う!
                      </Heading>
                      <p className="icon">
                        <img
                          src={`${imgPath}img-siharai-illust.png`}
                          width="90"
                          height="64"
                          alt=""
                          loading="lazy"
                        />
                      </p>
                      <p className={`txt ${Utils['Align-cll']}`}>
                        最強青春プログラムの110ポイント還元に加えて、
                        <br />
                        貯めたポイントも月々のお支払いにご利用いただけます！
                      </p>
                      <p className="link">
                        <LinkIconAfter href="/guide/point-payment/?l-id=fee_youth_guide_point-payment">
                          楽天ポイントの利用設定方法を見る
                          <IconChevronRight />
                        </LinkIconAfter>
                      </p>
                    </MonthPayment>

                    <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}kids-txt-sp.png`}
                          width="167"
                        />
                        <img
                          src={`${imgPath}kids-txt-pc.png`}
                          width="167"
                          alt="12歳までの方はこちら"
                          loading="lazy"
                        />
                      </picture>
                    </p>
                    <p className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
                      <a href="/fee/kids/?l-id=fee_youth_fee_kids_2">
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}kids-sp.png`}
                          />
                          <img
                            src={`${imgPath}kids-pc.png`}
                            width="856"
                            alt="最強こどもプログラム"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </p>
                  </MaxWidthWrap>
                </BoxWhite>
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
              >
                <RecommendHeading
                  data-ratid="youth_scroll-02_call"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-2-sp.png`}
                      width="688"
                      height="136"
                    />
                    <img
                      src={`${imgPath}reason-2-pc.png`}
                      width="594"
                      height="132"
                      alt="おすすめの理由その2国内通話無料で安心"
                      loading="lazy"
                    />
                  </picture>
                </RecommendHeading>
                <BoxWhite className={`${Utils['Mt-8']} ${Utils['Mt-pc-0']}`}>
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
                            width="622"
                            height="649"
                          />
                          <img
                            src={`${imgPath}content-call-pc.png`}
                            width="512"
                            height="195"
                            alt="アプリ利用で誰とでも通話し放題！！"
                            loading="lazy"
                          />
                        </picture>
                      </h3>
                      <div className={Utils['Mt-pc-24']}>
                        <ButtonRegularLarge
                          as="a"
                          href="/service/rakuten-link/?l-id=fee_youth_service_rakuten-link"
                        >
                          Rakuten Linkの詳細を見る
                        </ButtonRegularLarge>
                      </div>
                      <TxtCap as="p" className={Utils['Mt-24']}>
                        ※一部対象外番号あり。アプリ未使用時30秒22円
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
                  data-ratid="youth_scroll-03_smartphone"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}reason-3-sp.png`}
                      width="688"
                      height="136"
                    />
                    <img
                      src={`${imgPath}reason-3-pc.png`}
                      width="722"
                      height="132"
                      alt="おすすめの理由その3スマホも楽天モバイルがおトク！"
                      loading="lazy"
                      id="product"
                    />
                  </picture>
                </RecommendHeading>
                <Tab
                  heading1={<TabHeading>Android</TabHeading>}
                  heading2={<TabHeading>iPhone</TabHeading>}
                  ratId1="fee_youth_smartphone_android_tab"
                  ratId2="fee_youth_smartphone_iphone_tab"
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
                                srcSet={`${imgPath}android-txt-01-sp-240417.png`}
                                width="622"
                                height="357"
                              />
                              <img
                                src={`${imgPath}android-txt-01-pc-240417.png`}
                                width="405"
                                height="223"
                                alt="AQUOS wish3 製品価格が29,700円 48回払いで毎月の支払いが618円/月"
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
                              srcSet={`${imgPath}android-txt-02-sp-240315.png`}
                              width="622"
                              height="280"
                            />
                            <img
                              src={`${imgPath}android-txt-02-pc-240315.png`}
                              width="680"
                              height="104"
                              alt="キャンペーン開催中！さらに20,000円値引き！*2"
                              loading="lazy"
                            />
                          </picture>
                        </p>
                        <BtnGridHalf>
                          <div>
                            <ButtonRegularLarge
                              href="/product/smartphone/aquos-wish3/?l-id=fee_youth_product_smartphone_aquos-wish3"
                              as="a"
                            >
                              詳細を見る
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
                              購入する
                            </ButtonPrimaryLarge>
                          </div>
                        </BtnGridHalf>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonRegularLarge
                            as="a"
                            href="/product/smartphone/?l-id=fee_youth_product_smartphone"
                          >
                            その他のAndroidを見る
                          </ButtonRegularLarge>
                        </div>
                      </MaxWidthWrap>
                      <TxtCap as="p" className={Utils['Mt-32']}>
                        *1
                        楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。楽天カード以外のクレジットカードで24回払い時、分割手数料が発生
                        *2 値引きは、「
                        <LinkNormal href="/campaign/android-discount/#campaign-rule2178">
                          【Android対象製品限定】特価キャンペーン
                        </LinkNormal>
                        」適用時。
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
                                width="229"
                                height="50"
                              />
                              <img
                                src={`${imgPath}iphone-txt-01-pc.png`}
                                width="325"
                                height="25"
                                alt="本体代が全通信キャリアで最安"
                                loading="lazy"
                              />
                            </picture>
                          </p>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            ※2024年3月27日時点。公式オンラインのiPhone本体代金の比較。
                            <LinkNormal href="/product/iphone/fee/?l-id=fee_youth_product_iphone_fee">
                              価格比較表はこちら
                            </LinkNormal>
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
                                src={`${imgPath}img-iphone-pc-240522.png`}
                                width="258"
                                height="189"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </div>
                          <div>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-02-sp-240522.png`}
                                width="622"
                                height="292"
                              />
                              <img
                                src={`${imgPath}iphone-txt-02-pc-240522.png`}
                                width="370"
                                height="179"
                                alt="iPhone 15（128GB）製品価格131,800円"
                                loading="lazy"
                              />
                            </picture>
                          </div>
                        </ProductPriceWrap>
                        <div className={Utils['Align-center']}>
                          <p className={Utils['Mt-24']}>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-03-sp-240401.png`}
                                width="258"
                                height="41"
                              />
                              <img
                                src={`${imgPath}iphone-txt-03-pc.png`}
                                width="439"
                                height="22"
                                alt="毎月の負担を少なくおトクに最新のiPhoneへ！"
                                loading="lazy"
                              />
                            </picture>
                          </p>
                          <ImgBox>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-04-sp-240401.png`}
                                width="638"
                                height="348"
                              />
                              <img
                                src={`${imgPath}iphone-txt-04-pc-240401.png`}
                                width="680"
                                height="104"
                                alt="対象iPhone購入＋初めてプラン申し込み ＋他社から電話番号そのまま乗り換えで最大12,000円相当おトク！"
                                loading="lazy"
                              />
                            </picture>
                          </ImgBox>
                        </div>
                        <BtnGridHalf>
                          <div>
                            <ButtonRegular
                              href="/product/iphone/iphone-15/?l-id=fee_youth_product_iphone_iphone-15"
                              as="a"
                            >
                              詳細を見る
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
                              購入する
                            </ButtonPrimary>
                          </div>
                        </BtnGridHalf>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonRegularLarge
                            as="a"
                            href="/product/iphone/?l-id=fee_youth_product_iphone"
                          >
                            その他のiPhoneを見る
                          </ButtonRegularLarge>
                        </div>
                      </MaxWidthWrap>
                      <TxtCap as="p" className={Utils['Mt-32']}>
                        *1
                        楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。楽天カード以外のクレジットカードで24回払い時、分割手数料が発生。
                        <LinkNormal href="/service/replacement-program/">
                          その他条件の詳細はこちら
                        </LinkNormal>
                        *2
                        <LinkNormal href="/campaign/iphone-point/#detail">
                          キャンペーンの詳細はこちら
                        </LinkNormal>
                      </TxtCap>
                    </TabBoxWhite>
                  }
                />
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']} ${Utils['Align-center']}`}
              >
                <h2
                  data-ratid="youth_scroll-04_flow"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-shikumi-sp-240425.png`}
                      width="343"
                      height="30"
                    />
                    <img
                      src={`${imgPath}title-shikumi-pc-240425.png`}
                      width="234"
                      height="79"
                      alt="最強青春プログラムの仕組み"
                      loading="lazy"
                      id="structure"
                    />
                  </picture>
                </h2>
                <TxtEmp01
                  as="p"
                  className={`${Utils['Mt-8']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
                >
                  プログラムの参加はエントリーするだけ！
                  <br />
                  月のどのタイミングでエントリーしてもその月から対象に！
                </TxtEmp01>
                <BoxWhite
                  className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-center']}`}
                >
                  <img
                    src={`${imgPath}march.png`}
                    width="218"
                    height="40"
                    alt="3月にエントリーした場合"
                    loading="lazy"
                  />
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}period-sp-240315.png`}
                    />
                    <img
                      src={`${imgPath}period-pc-240315.png`}
                      width="100%"
                      alt=""
                      loading="lazy"
                      className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']}`}
                    />
                  </picture>
                  <TxtCap
                    as="p"
                    className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-left']}`}
                  >
                    ※3月にすべての条件を達成した場合、その翌々月5月末日ごろにポイント付与となります。※一度エントリーすると、適用条件を満たす限り特典が付与され続けます。※13〜23歳の誕生月前月までが対象となります。※エントリーした月内に23歳になる場合、3月はポイント付与の対象外となります。
                  </TxtCap>
                  <InfoboxCaution>
                    <IconSignInfoLine />
                    <p>
                      未成年(18歳未満)の方の
                      <br className={Utils['Show-oox']} />
                      お申し込みの流れや
                      <br className={Utils['Show-oox']} />
                      必要な書類は下記をご覧ください
                    </p>
                    <div
                      className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
                    >
                      <LinkIconAfter href="/flow/for-minors/?l-id=fee_youth_flow_for-minors">
                        未成年のお客様のお申し込みについて
                        <IconChevronRight />
                      </LinkIconAfter>
                    </div>
                    <InfoShop className={Utils['Mt-16']}>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}shop-txt-sp.png`}
                          width="100%"
                        />
                        <img
                          src={`${imgPath}shop-txt-pc.png`}
                          width="488"
                          alt="ショップでもお申し込みをサポートしています！不明点や、お困りのことがございましたらショップまでお気軽にお越しください"
                          loading="lazy"
                        />
                      </picture>
                      <div className={Utils['Mt-8']}>
                        <ButtonSecondaryLarge
                          as="a"
                          href="/shop/?l-id=fee_youth_shop"
                        >
                          お近くのショップを探す
                        </ButtonSecondaryLarge>
                      </div>
                    </InfoShop>
                  </InfoboxCaution>
                </BoxWhite>
                <h3
                  className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']}`}
                  data-ratid="youth_scroll-05_debut"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-life-stage-sp-240502.png`}
                      width="343"
                      height="64"
                    />
                    <img
                      src={`${imgPath}title-life-stage-pc-240502.png`}
                      width="736"
                      height="44"
                      alt="ライフステージに合わせて様々な使い方ができる！"
                      loading="lazy"
                      id="lifestage"
                    />
                  </picture>
                </h3>
                <LifeStage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-3-sp-240502.png`}
                    />
                    <img
                      src={`${imgPath}life-stage-3-pc-240502.png`}
                      width="100%"
                      alt="中学生～高校生 データ無制限でも実質2,780円（税込3,058円）！ 動画や音楽も十分に楽しめる ※7"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}life-stage-4-sp-240502.png`}
                    />
                    <img
                      src={`${imgPath}life-stage-4-pc-240502.png`}
                      width="100%"
                      alt="大学生 テザリングでのオンライン授業 海外旅行もデータ通信2GBまで無料！ ※8"
                      loading="lazy"
                    />
                  </picture>
                </LifeStage>
                <TxtCap
                  as="p"
                  className={`${Utils['Mt-16']} ${Utils['Align-left']}`}
                >
                  <TxtEmp02>
                    ※7「実質価格」とは、プログラムの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。
                  </TxtEmp02>
                  <br />
                  ※7
                  家族割引、22歳以下の割引のみを適用し、その他の割引は含めない場合。プログラム適用条件あり。※通話料等別
                  <br />
                  ※8プランのデータ利用量に加算。通話料等別。2GB超過後は最大128kbps。データ通信（海外ローミング）の
                  <LinkNormal href="/service/global/overseas/#note1">
                    注意事項の詳細はこちら
                  </LinkNormal>
                </TxtCap>
                <div className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}>
                  <a href="/uservoice/?l-id=fee_youth_uservoice">
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}uservoice-sp.png`}
                      />
                      <img
                        src={`${imgPath}uservoice-pc.png`}
                        width="100%"
                        alt="かけ放題オプションが就活に便利！学生にオススメの料金プラン 息子が小学5年生でスマホデビュー！ 楽天モバイルってどうですか？ お客様に直接お聞きしました お客様の声を見る"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']} ${Utils['Align-center']}`}
              >
                <h2>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-reportcard-sp.png`}
                      width="343"
                      height="56"
                    />
                    <img
                      src={`${imgPath}title-reportcard-pc.png`}
                      width="296"
                      height="83"
                      alt="数字とユーザーの声で見る！いまの楽天モバイル"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <BannerHoverShadow
                  href="/ad/reportcard/?l-id=fee_youth_ad_reportcard"
                  bgColor={theme.colors.white}
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-32']}`}
                >
                  <Picture
                    src={`${assets}img/bnr/bnr-reportcard-1032-160.jpg`}
                    width="1032"
                    height="160"
                    spSrc={`${assets}img/bnr/bnr-reportcard-343-193.png`}
                    spWidth="686"
                    spHeight="386"
                    alt="みんなに聞いた！楽天モバイル通信簿"
                  />
                </BannerHoverShadow>
              </section>
              <section
                className={`${Utils['Mt-64']} ${Utils['Mt-pc-80']} ${Utils['Align-center']}`}
              >
                <h2
                  data-ratid="youth_scroll-06_referral-campaign"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-otoku-sp-240425.png`}
                      width="343"
                      height="56"
                    />
                    <img
                      src={`${imgPath}title-otoku-pc-240425.png`}
                      width="279"
                      height="80"
                      alt="紹介キャンペーンを使ったらもーっとおトク"
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
                      width="688"
                      height="136"
                    />
                    <img
                      src={`${imgPath}title-campaign-pc.png`}
                      width="561"
                      height="49"
                      alt="楽天モバイル紹介キャンペーン"
                      loading="lazy"
                    />
                  </picture>
                </h3>
                <CampaignInfo>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}point-1-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}point-1-pc.png`}
                      width="505"
                      height="208"
                      alt="紹介する方 紹介1人につき7,000ポイントプレゼント!"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}point-2-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}point-2-pc.png`}
                      width="505"
                      height="208"
                      alt="紹介される方 初めてのお申し込み＆他社から電話番号そのまま乗り換えで13,000ポイントプレゼント! ※乗り換え（MNP）以外で初めてお申し込みの方は6,000ポイント"
                      loading="lazy"
                    />
                  </picture>
                </CampaignInfo>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※紹介された方のRakuten
                  Link利用・データタイプ対象外等条件あり。ポイントは4カ月後から分割付与。期間限定ポイント
                </TxtCap>
                <div className={`${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/campaign/referral/?l-id=fee_youth_campaign_referral"
                  >
                    紹介キャンペーンの詳細を見る
                  </ButtonRegularLarge>
                </div>

                <Heading
                  level="3"
                  className={`${Utils['Mt-48']} ${Utils['Align-center']}`}
                >
                  ご家族の方はこちら
                </Heading>
                <CommonNavFamilyYouthKodomo
                  showElements={{ second: ['family', 'kodomo'] }}
                  familyParam="fee_youth_fee_family_3"
                  kidsParam="fee_youth_fee_kids_3"
                  className={Utils['Mt-16']}
                />

                <h2 className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']}`}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-faq-sp-240425.png`}
                      width="343"
                      height="32"
                    />
                    <img
                      src={`${imgPath}title-faq-pc-240425.png`}
                      width="243"
                      height="49"
                      alt="よくあるご質問"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <BoxWhite
                  className={`${Utils['Mt-16']} ${Utils['Align-left']}`}
                >
                  <AccordionList
                    text="最強青春プログラムが適用される条件は何ですか？"
                    isOpened={false}
                  >
                    <p>
                      本プログラムが適用される主な条件は下記をご確認ください。
                    </p>
                    <ul className={Utils['Mt-16']}>
                      <li>
                        ・Rakuten最強プランを契約している
                        <br />
                        <TxtCap>
                          ※Rakuten最強プラン（データタイプ）、Apple Watch
                          ファミリー共有は適用対象外です。
                        </TxtCap>
                      </li>
                      <li>
                        ・本プログラムへのエントリーが完了している（おひとり様1度のみ）
                      </li>
                      <li>・13〜22歳以下の方</li>
                    </ul>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      ※エントリーとRakuten最強プランご利用開始の順序は問いません。
                      <br />
                      ※13〜23歳の誕生月前月までが対象となります。また、一度適用されると適用条件外となるまで解除できません。
                      <br />
                      ※保護者の方が操作される場合は、お子様の楽天IDでログインし、エントリーをお願いします。
                    </TxtCap>
                    <p className={Utils['Mt-16']}>
                      その他、最強青春プログラムの詳細は
                      <LinkNormal
                        href="#campaign-rule2265"
                        onClick={(
                          e: React.MouseEvent<HTMLElement, MouseEvent>,
                        ) => anchorCallback(e, 'campaign-rule2265')}
                      >
                        ルール
                      </LinkNormal>
                      をご確認ください。
                    </p>
                  </AccordionList>
                  <AccordionList
                    text="月の途中で最強青春プログラムにエントリーした場合、特典ポイントはどうなりますか？"
                    isOpened={false}
                  >
                    <p>
                      エントリーした月のご利用分から適用となり、翌々月に特典ポイントが付与されます。
                      <br />
                      特典ポイントは日割り計算となりません。
                    </p>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      ※3月にすべての条件を達成した場合には、その翌々月である5月末日ごろにポイント付与となります。
                    </TxtCap>
                  </AccordionList>
                  <AccordionList
                    text="2回線契約しています。最強青春プログラムにエントリーした場合、どの回線にプログラムが適用されますか？"
                    isOpened={false}
                  >
                    <p>
                      本プログラムのエントリーは楽天IDに紐づくため、1回線でもRakuten最強プランのご契約がある場合は、最強青春プログラムが適用されます。
                    </p>
                    <p>
                      ご契約の回線数にかかわらず、最強青春プログラムの特典ポイントは毎月110ポイントです。
                      <br />
                      いずれかの回線を解約した場合も、1回線でもRakuten最強プランのご契約がある場合は引き続き本プログラムが適用されます。
                    </p>
                    <p>
                      なお、ご契約に紐づく楽天IDを変更した場合は、あらためてエントリーが必要です。
                    </p>
                  </AccordionList>
                  <AccordionList
                    text="最強青春プログラムは他のキャンペーンと併用できますか？"
                    isOpened={false}
                  >
                    併用できます。
                    <br />
                    併用可能なキャンペーンは
                    <LinkNormal href="/campaign/">こちら</LinkNormal>
                    をご確認ください
                  </AccordionList>
                  <AccordionList
                    text="最強青春プログラムは毎月エントリーが必要ですか？"
                    isOpened={false}
                  >
                    <p>
                      不要です。
                      <br />
                      1度エントリーすれば、13〜23歳の誕生日前月までポイント付与の対象となります。
                    </p>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      ※Rakuten最強プランのご契約をすべて解約した場合は適用対象外になります。
                      <br />
                      ※楽天IDを変更した場合は再度エントリーが必要です。
                    </TxtCap>
                  </AccordionList>
                  <AccordionList
                    text="最強青春プログラムに正しくエントリーできているか確認したい場合、どうすればよいですか？"
                    isOpened={false}
                  >
                    <p>
                      最強青春プログラムを適用したい楽天IDで楽天PointClubにログインし、キャンペーンエントリー履歴をご確認ください。
                      <br />
                      確認方法の詳細は
                      <LinkNormal href="/faq/detail/10000942/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </p>
                  </AccordionList>
                </BoxWhite>
                <h2
                  id="campaign-rule2265"
                  className={`${Utils['Mt-48']} ${Utils['Mt-pc-80']}`}
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}title-rule-sp-240425.png`}
                      width="343"
                      height="52"
                    />
                    <img
                      src={`${imgPath}title-rule-pc-240425.png`}
                      width="234"
                      height="73"
                      alt="最強青春プログラムのルール"
                      loading="lazy"
                    />
                  </picture>
                </h2>
                <CampaignRule2265
                  className={`${Utils['Mt-24']} ${Utils['Align-left']}`}
                />
              </section>
            </SystemContainer>
            <ProgramWrap className={Utils['Align-center']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${imgPath}youth-program-sp-240425.png`}
                  width="343"
                  height="98"
                />
                <img
                  src={`${imgPath}youth-program-pc-240425.png`}
                  width="726"
                  height="171"
                  alt="青春って、最強だ。22歳までは最強青春プログラムU22"
                  loading="lazy"
                />
              </picture>
            </ProgramWrap>
          </div>
        </BgBlue>
        <SaikyoWrapper className={`${Utils['Mt-0']} ${Utils['Mt-pc-48']}`}>
          <CommonSaikyo />
        </SaikyoWrapper>
        {!isCampaignEntry && (
          <CustomBottomFixed scrollTrigger={scrollTriggerRef}>
            <div className={Utils['Align-center']}>
              <TxtWaring2 className={Utils['Color-white']}>
                <IconSignWarningLine />
                13〜22歳以下のご契約者様自身の楽天IDをご利用ください
              </TxtWaring2>
              <ButtonPrimaryLarge
                className={Utils['Mt-8']}
                as="a"
                href="#entry"
                onClick={e => anchorCallback(e, 'entry')}
                data-ratid="fee_youth_floating_entry"
                data-ratevent="click"
                data-ratparam="all"
              >
                エントリーはこちら
              </ButtonPrimaryLarge>
            </div>
          </CustomBottomFixed>
        )}
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          className="js-adjust-padding"
        />
      </SystemWrapper>
    </>
  )
}

export default FeeYouth
