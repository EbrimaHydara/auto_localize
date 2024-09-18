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
import { BannerHover } from '@components/atoms/Banner'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import {
  ButtonPrimary,
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { Tab } from '@components/atoms/Tab'
import { InfoboxBorder } from '@components/atoms/Infobox'
import {
  IconChevronRight,
  IconSignWarningLine,
  IconNewTabLine,
  IconArrowDown,
} from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { Checkbox } from '@components/atoms/Checkbox'
import { ListDisc } from '@components/atoms/List'
import { CampaignRule2335 } from '@components/include/campaign/rules/2024/CampaignRule2335'
import { CustomBottomFixed } from '@components/include/common/CustomBottomFixed'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { CommonNavFamilyYouthKodomo } from '@components/include/common/NavFamilyYouthKodomo'

const imgPath = `${assets}img/fee/kids/`
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
    background-size: 1px 420px;
  }
`

const BgGreen = styled.div`
  position: relative;
  background-color: #ecfcec;
`

const TitleBgGreen = styled.div`
  background-color: #ecfcec;
  padding: 12px 16px;
  text-align: center;
  max-width: 856px;
  width: 100%;
  margin: auto;
`

const PageNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  ${mixins.mq.MinL} {
    flex-direction: row;
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

const ProductPricNote = styled(TxtCap)`
  max-width: 856px;
  margin: auto;
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
  padding: 32px 16px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MinL} {
    padding: 40px 16px;
  }
  ${mixins.mq.MaxM} {
    margin: 0 -16px;
  }
`

const TabBoxWhite = styled(BoxWhite)`
  border-radius: 0px 0px 8px 8px;
  ${mixins.mq.MinL} {
    padding: 32px;
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

const EntryConfirmWrap = styled.div`
  margin-inline: auto;
  max-width: 1032px;
`

const EntryConfirm = styled.div`
  display: flex;
  flex-direction: column;
  ${ButtonRegularLarge} {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`

const EntryConfirmTxt = styled.p`
  color: ${props => props.theme.colors.lightBlack};
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

const ReasonAnchors = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 6px;
  }
  li {
    max-width: 248px;
    &:hover {
      opacity: 0.75;
    }
    ${mixins.mq.MaxM} {
      max-width: 856px;
    }
  }
`

const OsusumeContentBox = styled(InfoboxBorder)`
  max-width: 856px;
  margin: auto;
`

const BnrWrapper = styled.div`
  max-width: 856px;
  margin: auto;
`

const OsusumeContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  & :nth-child(2) {
    max-width: 392px;
    text-align: left;
    ${mixins.mq.MaxM} {
      text-align: center;
    }
  }
  & :last-child {
    max-width: 128px;
    text-align: left;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    p {
      max-width: 856px !important;
    }
  }
`

const MessageContent = styled.div`
  display: flex;
  gap: 24px;
  max-width: 856px;
  margin: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    align-items: center;
    div {
      text-align: center;
    }
  }
`

const AnshinContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 56px;
  max-width: 856px;
  margin: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    align-items: center;
  }
  & picture {
    width: calc(50% - 28px);
    ${mixins.mq.MaxM} {
      width: auto;
    }
  }
`

const DeviceAnchor = styled.ul`
  display: flex;
  gap: 16px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  li {
    background-color: white;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.monotone75};
    width: 50%;
    justify-content: center;
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  a {
    padding: 12px;
    font-size: 20px;
    color: ${props => props.theme.colors.monotone30};
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: ${props => props.theme.colors.monotone93};
      color: ${props => props.theme.colors.monotone30};
    }
  }
  span {
    &:hover {
      text-decoration: none !important;
    }
  }
`

const DeviceContentWrapper = styled.div`
  background-color: white;
  padding: 32px;
  ${mixins.mq.MaxM} {
    padding: 16px;
    margin: 0 -16px;
  }
`

const DeviceContentTab = styled(Tab)`
  max-width: 856px;
  margin: auto;
`

const CampaignInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-top: -16px;
  ${mixins.mq.MaxM} {
    margin-top: 0;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
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
    margin-top: 24px;
  }
`

const FeeKids: NextPage = () => {
  const pagetitle = '最強こどもプログラム 12歳までとーってもおトク！'
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
        description="楽天モバイルのおトクなプログラム 12歳まで毎月最大440ポイント還元！家族割引適用後3GB 968円/月が、440ポイント還元で実質480円（税込528円）※3GB超過後は毎月110ポイント還元"
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
                srcSet={`${imgPath}kv-sp.png`}
                width="1125"
                height="990"
              />
              <img
                src={`${imgPath}kv-pc.png`}
                width="1440"
                height="530"
                alt="最強こどもプログラム 12歳までとーってもおトク！家族割引適用後3GB 968円/月が、440ポイント還元で実質480円（税込528円）※3GB超過後は毎月110ポイント還元 "
              />
            </picture>
          </h1>
        </KvHeading>
        <BgGreen className={`${Utils['Pt-8']} ${Utils['Pb-72']}`}>
          <SystemContainer>
            <TxtCap as="p">
              ※1 すべての条件を満たしたことが確認された月の翌々月末日ごろに付与
              ※2 13歳の誕生月前月まで適用。お子様名義でのご契約が必要
              <TxtEmp02>
                ※「実質価格」とは、条件達成により後日付与される期間限定ポイントを加味した価格であり、実際のお支払い金額とは異なる
              </TxtEmp02>
              ※データタイプは対象外
              ※18歳未満の方がご利用いただく場合、フィルタリングサービスご契約が必須
            </TxtCap>
            <section
              className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
              data-ratid="fee-kids_scroll-01_kv"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${imgPath}sub-title-otoku-debut-sp.png`}
                  width="297"
                  height="110"
                />
                <img
                  src={`${imgPath}sub-title-otoku-debut-pc.png`}
                  width="542"
                  height="90"
                  alt="楽天モバイルでおトクにスマホデビューしよう"
                  loading="lazy"
                />
              </picture>
            </section>
            <section className={Utils['Mt-32']}>
              <EntryContent id="entry" aria-hidden={!isLoad}>
                <EntryContentPeriod
                  className={`${Utils['Pb-16']} ${Utils['Align-center']}`}
                >
                  <TxtEmp01>【エントリー期間】</TxtEmp01>
                  <br className={Utils['Disp-sp']} />
                  2024年5月2日（木）18:00～終了日未定
                </EntryContentPeriod>
                <TxtWaringWrap
                  className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
                  aria-hidden={isCampaignEntry}
                >
                  <TxtWaring>
                    <IconSignWarningLine />
                    <span>
                      12歳以下のご契約者様自身の楽天IDでの契約・エントリーが必要となります
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
                      data-ratid="fee-kids_click-01_entry"
                      data-ratevent="click"
                      data-ratparam="all"
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
                    rel="noopener"
                    className={Utils['Ml-16']}
                  >
                    楽天会員情報の確認・新規登録（無料）はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
                <TxtCap
                  as="p"
                  className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
                >
                  <TxtEmp02>
                    ※「最強青春プログラム」をご利用中の12歳以下のお客様は、自動的に「最強こどもプログラム」が適用されます。再度エントリーいただく必要はありません。
                  </TxtEmp02>
                </TxtCap>
                <EntryConfirmWrap className={Utils['Mt-16']}>
                  <AccordionList
                    text={
                      <TxtEmp01>エントリーとポイント付与時期について</TxtEmp01>
                    }
                    isOpened={false}
                  >
                    <EntryConfirm>
                      <PageNav>
                        <li>
                          <LinkIconBefore
                            href="#aboutEntry"
                            onClick={e => anchorCallback(e, 'aboutEntry')}
                          >
                            <IconArrowDown />
                            エントリーについて
                          </LinkIconBefore>
                        </li>
                        <li>
                          <LinkIconBefore
                            href="#checkEntry"
                            onClick={e => anchorCallback(e, 'checkEntry')}
                          >
                            <IconArrowDown />
                            適用したい楽天IDでエントリーできているか確認する方法
                          </LinkIconBefore>
                        </li>
                        <li>
                          <LinkIconBefore
                            href="#pointPeriod"
                            onClick={e => anchorCallback(e, 'pointPeriod')}
                          >
                            <IconArrowDown />
                            ポイント付与時期について
                          </LinkIconBefore>
                        </li>
                      </PageNav>
                      <div className={Utils['Mt-24']}>
                        <TxtEmp01 as="p" id="aboutEntry">
                          エントリーについて
                        </TxtEmp01>
                        <EntryConfirmTxt className={Utils['Mt-8']}>
                          0-12歳までが対象です。対象外の方（ご家族等）の楽天IDでエントリーした場合、ポイント進呈の対象になりません。
                        </EntryConfirmTxt>
                      </div>
                      <div className={Utils['Mt-24']}>
                        <TxtEmp01 as="p" id="checkEntry">
                          適用したい楽天IDでエントリーできているか確認する方法
                        </TxtEmp01>
                        <EntryConfirmTxt className={Utils['Mt-8']}>
                          楽天PointClubの、
                          <LinkNormal
                            href="https://oubo.rakuten.co.jp/list/"
                            target="_blank"
                            rel="noopener"
                          >
                            キャンペーンエントリー履歴
                          </LinkNormal>
                          でご確認いただけます。
                          <br />
                          ログインする際、最強こどもプログラムを適用したい楽天IDを使用しているかご確認ください。「最強こどもプログラム」が
                          表示されていない場合、適用したい楽天IDで、再度エントリーをお願いします。
                        </EntryConfirmTxt>
                      </div>
                      <div className={Utils['Mt-8']}>
                        <LinkIconAfter href="/faq/detail/10000942/?l-id=fee_kids_faq_10000942">
                          確認方法の詳細はこちら
                          <IconChevronRight />
                        </LinkIconAfter>
                      </div>
                      <div className={Utils['Mt-24']}>
                        <TxtEmp01 as="p" id="pointPeriod">
                          ポイント付与時期について
                        </TxtEmp01>
                        <div className={Utils['Align-center']}>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${imgPath}entry-history-sp.png`}
                              width="328"
                            />
                            <img
                              src={`${imgPath}entry-history-pc.png`}
                              className={Utils['Mt-8']}
                              width="1032"
                              alt=""
                            />
                          </picture>
                        </div>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          ※5月にすべての条件を達成した場合、その翌々月7月末日ごろにポイント付与となります。※一度エントリーすると、適用条件を満たす限り特典が付与され続けます。※13歳の誕生月前月までが対象となります。※エントリーした月内に13歳になる場合、その月はポイント付与の対象外となります。※ポイント還元の詳細は
                          <LinkNormal
                            href="#rule-2335"
                            onClick={e => anchorCallback(e, 'rule-2335')}
                          >
                            ルール
                          </LinkNormal>
                          をご確認ください。
                        </TxtCap>
                      </div>
                    </EntryConfirm>
                  </AccordionList>
                </EntryConfirmWrap>
              </EntryContent>
            </section>
            <section
              className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
              data-ratid="fee-kids_scroll-02_cta"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <img
                src={`${imgPath}title-before-pc.png`}
                width="280"
                height="33"
                alt="楽天モバイルをご利用前の方はこちら"
                loading="lazy"
              />
              <BtnGridHalfWide className={Utils['Mt-24']}>
                <div>
                  <ButtonPrimaryLarge
                    as="a"
                    href="/guide/application/?lid-r=fee_kids_cta_guide_application"
                  >
                    Rakuten最強プランを申し込む
                  </ButtonPrimaryLarge>
                </div>
                <div>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/shop/?l-id=fee_kids_cta_shop"
                  >
                    お近くのショップを探す・来店予約
                  </ButtonSecondaryLarge>
                </div>
              </BtnGridHalfWide>
              <TxtEmp02
                as="p"
                className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
              >
                お申し込み前に、未成年の方のお申し込みの流れ、必要な書類をご確認ください。
              </TxtEmp02>
              <div className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
                <LinkIconAfter href="/flow/for-minors/?l-id=fee_kids_flow_for-minors">
                  未成年のお客様のお申し込みについて
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </section>
          </SystemContainer>
          <NavAnchor>
            <NavAnchorInner>
              <NavAnchorItem
                href="#fee"
                onClick={e => anchorCallback(e, 'fee')}
                data-ratid="fee-kids_click-02_price"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">おトクな料金</TxtCap>
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
                data-ratid="fee-kids_click-03_device"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  オススメ
                  <br className={Utils['Show-oxx']} />
                  製品
                </TxtCap>
                <img
                  src={`${imgPath}icon-device.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
              <NavAnchorItem
                href="#anshin"
                onClick={e => anchorCallback(e, 'anshin')}
                data-ratid="fee-kids_click-04_filtering"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  安心の見守り
                  <br className={Utils['Show-oxx']} />
                  機能
                </TxtCap>
                <img
                  src={`${imgPath}icon-new-user.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
              <NavAnchorItem
                href="#faq"
                onClick={e => anchorCallback(e, 'faq')}
                data-ratid="fee-kids_click-05_faq"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown />
                <TxtCap as="p">
                  よくある
                  <br className={Utils['Show-oxx']} />
                  ご質問
                </TxtCap>
                <img
                  src={`${imgPath}icon-help.png`}
                  width="32"
                  height="32"
                  alt=""
                  loading="lazy"
                />
              </NavAnchorItem>
            </NavAnchorInner>
          </NavAnchor>
          <SystemContainer>
            <section
              data-ratid="fee-kids_scroll-03_benefit"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <h2 className={`${Utils['Align-center']} ${Utils['Mt-72']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-3-reason-sp.png`}
                    width="321"
                    height="123"
                  />
                  <img
                    src={`${imgPath}title-3-reason-pc.png`}
                    width="904"
                    height="67"
                    alt="お子さまのスマホデビューに楽天モバイルがオススメな３つの理由"
                    loading="lazy"
                  />
                </picture>
              </h2>
              <ReasonAnchors className={Utils['Mt-48']}>
                <li>
                  <a
                    href="#fee"
                    onClick={e => anchorCallback(e, 'fee')}
                    data-ratid="fee-kids_click-06_fee"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}anchor-1-sp.png`}
                        width="343"
                        height="70"
                      />
                      <img
                        src={`${imgPath}anchor-1-pc.png`}
                        width="100%"
                        alt="12歳までずーっとおトクに！"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </li>
                <li>
                  <a
                    href="#message"
                    onClick={e => anchorCallback(e, 'message')}
                    data-ratid="fee-kids_click-07_call"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}anchor-2-sp.png`}
                        width="343"
                        height="70"
                      />
                      <img
                        src={`${imgPath}anchor-2-pc.png`}
                        width="100%"
                        alt="アプリ利用で国内通話＆メッセージ無料"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    onClick={e => anchorCallback(e, 'product')}
                    data-ratid="fee-kids_click-08_phone"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}anchor-3-sp.png`}
                        width="343"
                        height="70"
                      />
                      <img
                        src={`${imgPath}anchor-3-pc.png`}
                        width="100%"
                        alt="iPhoneなど好きな製品が選べる"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </li>
              </ReasonAnchors>
              <TxtCap
                as="p"
                className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
              >
                ※3
                一部対象外番号あり。アプリ未使用時30秒22円。アプリ同士でないメッセージ無料はAndroidのみ
              </TxtCap>
              <h3
                id="fee"
                className={`${Utils['Align-center']} ${Utils['Mt-sp-48']}  ${Utils['Mt-72']}`}
                ref={scrollTriggerRef}
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}sub-title-1-sp.png`}
                    width="296"
                    height="150"
                  />
                  <img
                    src={`${imgPath}sub-title-1-pc.png`}
                    width="489"
                    height="145"
                    alt="毎月最大440ポイント還元12歳までずーっとおトクに！"
                    loading="lazy"
                  />
                </picture>
              </h3>
              <BoxWhite className={Utils['Mt-16']}>
                <TitleBgGreen>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}txt-3gb-sp.png`}
                      width="326"
                      height="51"
                    />
                    <img
                      src={`${imgPath}txt-3gb-pc.png`}
                      width="381"
                      height="58"
                      alt="データ通信が3GB/月までなら家族割引適用後968円が440ポイント還元で"
                      loading="lazy"
                    />
                  </picture>
                </TitleBgGreen>
                <div className={Utils['Align-center']}>
                  <picture className={Utils['Mt-16']}>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-3gb-sp.png`}
                      width="237"
                      height="138"
                    />
                    <img
                      src={`${imgPath}h3-3gb-pc.png`}
                      width="525"
                      height="129"
                      alt="実質480円 税込528円 ※3GB超過後は、毎月110ポイント還元"
                      loading="lazy"
                    />
                  </picture>
                  <TitleBgGreen className={Utils['Mt-48']}>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}txt-plan-sp.png`}
                        width="195"
                        height="50"
                      />
                      <img
                        src={`${imgPath}txt-plan-pc.png`}
                        width="438"
                        height="30"
                        alt="データ量で決まるおトクなワンプラン"
                        loading="lazy"
                      />
                    </picture>
                  </TitleBgGreen>
                  <picture
                    data-ratid="fee-kids_scroll-04_fee"
                    data-ratevent="appear"
                    data-ratparam="all"
                    className={Utils['Mt-16']}
                  >
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-data-amount-sp.png`}
                      width="343"
                      height="299"
                    />
                    <img
                      src={`${imgPath}h3-data-amount-pc.png`}
                      width="856"
                      height="198"
                      alt="家族割引＆最大440ポイント還元で、3GBまで実質480円/月(税込528円)、20GBまで実質1,780 円/月(税込1,958円) 、20GB超過後どれだけ使っても無制限※4 で2,780円/月(税込3,058円)。※3GB超過後は110ポイント還元"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/fee/saikyo-plan/?l-id=fee_kids_fee_saikyo-plan"
                  >
                    プランの詳細を見る
                  </ButtonRegularLarge>
                </div>
                <TxtCap
                  as="p"
                  className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
                >
                  <TxtEmp02>
                    ※「実質価格」とは、プログラムの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。
                  </TxtEmp02>
                  <br />
                  ※4 公平なサービス提供または環境により速度低下する場合あり
                  ※通話料等別
                </TxtCap>
                <OsusumeContentBox
                  className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
                >
                  <img
                    src={`${imgPath}shihara-osusume-pc.png`}
                    width="327"
                    height="28"
                    alt="ポイント支払いがおすすめ！"
                    loading="lazy"
                  />
                  <OsusumeContent className={Utils['Mt-8']}>
                    <img
                      src={`${imgPath}shiharai-pc.png`}
                      width="160"
                      height="64"
                      alt=""
                      loading="lazy"
                    />
                    <p>
                      毎月のポイント還元分など、貯まったポイントは
                      <TxtEmp01>月々のお支払いにご利用</TxtEmp01>いただけます！
                    </p>
                    <img
                      src={`${imgPath}convenience-store-pc.png`}
                      width="80"
                      height="64"
                      alt=""
                      loading="lazy"
                    />
                    <p>街でのお買い物にも！</p>
                  </OsusumeContent>
                  <div className={`${Utils['Align-center']} ${Utils['Mt-8']}`}>
                    <LinkIconAfter href="/guide/point-payment/?l-id=fee_kids_guide_point-payment">
                      スマホ代のポイント利用について
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </OsusumeContentBox>
                <BnrWrapper
                  className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
                >
                  <h3>
                    <img
                      src={`${imgPath}txt-13-22.png`}
                      width="234"
                      height="23"
                      alt="13歳～22歳までの方はこちら"
                      loading="lazy"
                    />
                  </h3>
                  <BannerHover href="/fee/youth/?l-id=fee_kids_banner_fee_youth">
                    <picture className={Utils['Mt-8']}>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/bnr/bnr-youth-504-158.png`}
                        width="504"
                        height="158"
                      />
                      <img
                        src={`${assets}img/bnr/bnr-youth-856-133.png`}
                        width="1032"
                        height="160"
                        alt="最強青春プログラム U22"
                        loading="lazy"
                      />
                    </picture>
                  </BannerHover>
                </BnrWrapper>
              </BoxWhite>
              <h3
                id="message"
                className={`${Utils['Align-center']} ${Utils['Mt-sp-48']} ${Utils['Mt-72']}`}
                data-ratid="fee-kids_scroll-05_call"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}sub-title-2-sp.png`}
                    width="254"
                    height="150"
                  />
                  <img
                    src={`${imgPath}sub-title-2-pc.png`}
                    width="489"
                    height="145"
                    alt="アプリ利用で国内通話もメッセージも無料！ ※アプリ同士でないメッセージ無料はAndroidのみ"
                    loading="lazy"
                  />
                </picture>
              </h3>
              <TxtCap
                as="p"
                className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
              >
                ※アプリ同士でないメッセージ無料はAndroidのみ
              </TxtCap>
              <BoxWhite className={Utils['Mt-16']}>
                <MessageContent>
                  <div>
                    <TitleBgGreen>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}txt-data-0-sp.png`}
                          width="232"
                          height="31"
                        />
                        <img
                          src={`${imgPath}txt-data-0-pc.png`}
                          width="270"
                          height="36"
                          alt="通話もデータ消費ゼロ"
                          loading="lazy"
                        />
                      </picture>
                    </TitleBgGreen>
                    <picture className={Utils['Mt-8']}>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}h3-data-0-sp.png`}
                        width="343"
                        height="167"
                      />
                      <img
                        src={`${imgPath}h3-data-0-pc.png`}
                        width="416"
                        height="287"
                        alt="0円"
                        loading="lazy"
                      />
                    </picture>
                    <TxtCap
                      as="p"
                      className={`${Utils['Align-center']} ${Utils['Mt-8']}`}
                    >
                      ※一部対象外番号あり。アプリ未使用時30秒22円
                    </TxtCap>
                  </div>
                  <div>
                    <TitleBgGreen>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${imgPath}txt-apply-0-sp.png`}
                          width="287"
                          height="31"
                        />
                        <img
                          src={`${imgPath}txt-apply-0-pc.png`}
                          width="312"
                          height="36"
                          alt="アプリ同士のメッセージも"
                          loading="lazy"
                        />
                      </picture>
                    </TitleBgGreen>
                    <picture className={Utils['Mt-8']}>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}h3-message-sp.png`}
                        width="343"
                        height="167"
                      />
                      <img
                        src={`${imgPath}h3-message-pc.png`}
                        width="416"
                        height="262"
                        alt="0円"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </MessageContent>
                <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/service/rakuten-link/?l-id=fee_kids_service_rakuten-link"
                  >
                    Rakuten Linkアプリの詳細を見る
                  </ButtonRegularLarge>
                </div>
              </BoxWhite>
              <h3
                id="product"
                className={`${Utils['Align-center']} ${Utils['Mt-sp-48']} ${Utils['Mt-72']}`}
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}sub-title-3-sp.png`}
                    width="269"
                    height="90"
                  />
                  <img
                    src={`${imgPath}sub-title-3-pc.png`}
                    width="489"
                    height="145"
                    alt="楽天モバイルなら好きな製品が選べる！"
                    loading="lazy"
                  />
                </picture>
              </h3>
              {/* コンポーネントがあった気がする */}
              <DeviceAnchor className={Utils['Mt-32']}>
                <li>
                  <a
                    href="#device"
                    onClick={e => anchorCallback(e, 'device')}
                    data-ratid="fee-kids_click-09_choice"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <LinkIconBefore as="span">
                      <IconArrowDown />
                      iPhoneやAndroidも
                    </LinkIconBefore>
                  </a>
                </li>
                <li>
                  <a
                    href="#handsMeDown"
                    onClick={e => anchorCallback(e, 'handsMeDown')}
                    data-ratid="fee-kids_click-10_used"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <LinkIconBefore as="span">
                      <IconArrowDown />
                      家族のおさがりスマホもOK
                    </LinkIconBefore>
                  </a>
                </li>
              </DeviceAnchor>

              <DeviceContentWrapper
                id="device"
                className={Utils['Mt-32']}
                data-ratid="fee-kids_scroll-06_device"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <TitleBgGreen>
                  <img
                    src={`${imgPath}txt-device-otoku.png`}
                    width="353"
                    height="30"
                    alt="人気のスマホもおトクに購入！"
                    loading="lazy"
                  />
                </TitleBgGreen>
                <DeviceContentTab
                  className={Utils['Mt-32']}
                  heading1={<TabHeading>iPhone</TabHeading>}
                  heading2={<TabHeading>Android</TabHeading>}
                  ratId1="fee-kids_click-11_iphone"
                  ratId2="fee-kids_click-12_android"
                  content1={
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
                            <LinkNormal href="/product/iphone/fee/?l-id=fee_kids_product_iphone_fee">
                              価格比較表はこちら
                            </LinkNormal>
                          </TxtCap>
                        </BoxWPink5>
                        <ProductPriceWrap className={Utils['Mt-24']}>
                          <div
                            className={`${Utils['Px-24']} ${Utils['Px-pc-0']}`}
                          >
                            <img
                              src={`${imgPath}img-se.png`}
                              width="258"
                              height="203"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-02-sp-240517.png`}
                                width="686"
                                height="405"
                              />
                              <img
                                src={`${imgPath}iphone-txt-02-pc-240517.png`}
                                width="401"
                                height="237"
                                alt="iPhone SE（第3世代）製品価格 64,000円。48回払い（買い替え超トクプログラム）1,333円/月、24回払い 2,666円/月"
                                loading="lazy"
                              />
                            </picture>
                          </div>
                        </ProductPriceWrap>
                        <div className={Utils['Align-center']}>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          ※買い替え超トクプログラムは18歳以上のお客様が対象です。48回払いでの製品購入は18歳以上の方が行ってください。
                        </TxtCap>
                        </div>
                        <div className={Utils['Align-center']}>
                          <ImgBox>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}iphone-txt-04-sp-240517.png`}
                                width="686"
                                height="405"
                              />
                              <img
                                src={`${imgPath}iphone-txt-04-pc-240517.png`}
                                width="680"
                                height="178"
                                alt="さらに一括または24回払いなら、対象iPhone購入＋初めてプラン申し込み ＋他社から電話番号そのまま乗り換えで最大22,000円相当おトク！"
                                loading="lazy"
                              />
                            </picture>
                          </ImgBox>
                        </div>
                        <BtnGridHalf>
                          <div>
                            <ButtonRegular
                              href="/product/iphone/iphone-se-3rd/?l-id=fee_kids_product_iphone_iphone-se-3rd"
                              as="a"
                            >
                              詳細を見る
                            </ButtonRegular>
                          </div>
                          <div>
                            <ButtonPrimary
                              as="a"
                              href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600352&selectAvailable=true"
                              data-ratid="fee-kids_iphone-se_order-button_bss"
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
                            href="/product/iphone/?l-id=fee_kids_product_iphone"
                          >
                            その他のiPhoneを見る
                          </ButtonRegularLarge>
                        </div>
                      </MaxWidthWrap>
                      <ProductPricNote as="p" className={Utils['Mt-32']}>
                        *1
                        楽天カードのみ。現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。楽天カード以外のクレジットカードで24回払い時、分割手数料が発生。
                        <LinkNormal href="/service/replacement-program/?l-id=fee_kids_service_replacement-program">
                          その他条件の詳細はこちら
                        </LinkNormal>
                        *2
                        <LinkNormal href="/campaign/iphone-point/?l-id=fee_kids_campaign_iphone-point#detail">
                          キャンペーンの詳細はこちら
                        </LinkNormal>
                      </ProductPricNote>
                    </TabBoxWhite>
                  }
                  content2={
                    <TabBoxWhite>
                      <MaxWidthWrap>
                        <ProductPriceWrap>
                          <div
                            className={`${Utils['Px-24']} ${Utils['Px-pc-0']}`}
                          >
                            <img
                              src={`${imgPath}img-aquos-wish-3.png`}
                              width="244"
                              height="204"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <picture>
                              <source
                                media={`(max-width:${theme.max.m})`}
                                srcSet={`${imgPath}android-txt-01-sp-240517.png`}
                                width="686"
                                height="268"
                              />
                              <img
                                src={`${imgPath}android-txt-01-pc-240517.png`}
                                width="405"
                                height="160"
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
                              srcSet={`${imgPath}android-txt-02-sp.png`}
                              width="622"
                              height="280"
                            />
                            <img
                              src={`${imgPath}android-txt-02-pc.png`}
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
                              href="/product/smartphone/aquos-wish3/?l-id=fee_kids_product_smartphone_aquos-wish3"
                              as="a"
                            >
                              詳細を見る
                            </ButtonRegularLarge>
                          </div>
                          <div>
                            <ButtonPrimaryLarge
                              as="a"
                              href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600659&selectAvailable=true"
                              data-ratid="fee-kids_aquos-wish3_order-button_bss"
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
                            href="/product/smartphone/?l-id=fee_kids_product_smartphone"
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
                />
              </DeviceContentWrapper>

              <BoxWhite className={Utils['Pt-0']}>
                <TitleBgGreen id="handsMeDown">
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${imgPath}txt-hands-me-down-pc.png`}
                      width="296"
                      height="25"
                    />
                    <img
                      src={`${imgPath}txt-hands-me-down-pc.png`}
                      width="345"
                      height="30"
                      alt="家族のおさがりスマホもOK！"
                      loading="lazy"
                    />
                  </picture>
                </TitleBgGreen>
                <MessageContent className={Utils['Mt-32']}>
                  <div>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}h3-not-rm-sp.png`}
                        width="343"
                        height="200"
                      />
                      <img
                        src={`${imgPath}h3-not-rm-pc.png`}
                        width="416"
                        height="287"
                        alt="他社のお子さま向けの料金プランだと利用できる製品が限られることも..."
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${imgPath}h3-if-rm-sp.png`}
                        width="343"
                        height="218"
                      />
                      <img
                        src={`${imgPath}h3-if-rm-pc.png`}
                        width="416"
                        height="262"
                        alt="楽天モバイルなら楽天回線対応製品であればどのスマホもOK！"
                        loading="lazy"
                      />
                    </picture>
                    <ListDisc
                      className={Utils['Mt-16']}
                      text={[
                        {
                          text: '製品代の初期費用を抑えられる',
                        },
                        {
                          text: '使い慣れた製品で操作もあんしん',
                        },
                      ]}
                    />
                    <div className={Utils['Mt-8']}>
                      <LinkIconAfter href="/product/byod/?l-id=fee_kids_product_byod">
                        楽天回線対応製品のご確認はこちら
                        <IconChevronRight />
                      </LinkIconAfter>
                    </div>
                  </div>
                </MessageContent>
              </BoxWhite>
            </section>
            <section>
              <h2
                id="anshin"
                className={`${Utils['Align-center']} ${Utils['Mt-72']}`}
              >
                <picture
                  data-ratid="fee-kids_scroll-07_filtering"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-anshin-sp.png`}
                    width="269"
                    height="90"
                  />
                  <img
                    src={`${imgPath}title-anshin-pc.png`}
                    width="666"
                    height="67"
                    alt="お子さまのスマホデビュー楽天モバイルで安心！"
                    loading="lazy"
                  />
                </picture>
              </h2>
              <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                お子さまが安全にスマホを使えるよう、18歳未満のお客様向けにフィルタリングサービスをご提供しています。（330円/月）
              </p>
              <BoxWhite className={Utils['Mt-16']}>
                <AnshinContent>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-web-flitering-sp.png`}
                      width="343"
                      height="166"
                    />
                    <img
                      src={`${imgPath}h3-web-flitering-pc.png`}
                      width="368"
                      height="184"
                      alt="悪質なアプリやサイトからお子さまを守るWebフィルタリング"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-usage-time-sp.png`}
                      width="343"
                      height="166"
                    />
                    <img
                      src={`${imgPath}h3-usage-time-pc.png`}
                      width="368"
                      height="184"
                      alt="利用時間の上限設定でスマホ時間を管理"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-mail-sp.png`}
                      width="343"
                      height="166"
                    />
                    <img
                      src={`${imgPath}h3-mail-pc.png`}
                      width="368"
                      height="184"
                      alt="検索や閲覧など利用状況をメールで確認"
                      loading="lazy"
                    />
                  </picture>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}h3-gps-sp.png`}
                      width="343"
                      height="166"
                    />
                    <img
                      src={`${imgPath}h3-gps-pc.png`}
                      width="368"
                      height="184"
                      alt="離れた場所から見守る位置情報履歴"
                      loading="lazy"
                    />
                  </picture>
                </AnshinContent>
                <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/service/i-filter/?l-id=fee_kids_service_i-filter"
                  >
                    あんしんコントロール by i-フィルターの詳細を見る
                  </ButtonRegularLarge>
                </div>
                <TxtCap as="p" className={Utils['Mt-32']}>
                  ※18歳未満の方に楽天モバイルをご利用いただく場合、ご契約が必須となります。フィルタリングサービスを利用しない場合、保護者の方による
                  <LinkNormal href="/pdf/terms/application_for_non-use_of_filtering_service.pdf?20201022">
                    フィルタリングサービスを利用しない旨の申出書
                  </LinkNormal>
                  のご提出が必要です。
                </TxtCap>
                <BnrWrapper
                  className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
                >
                  <BannerHover href="/guide/security/kids-manner/?l-id=guide_security_guide_security_kids-manner">
                    <picture className={Utils['Mt-8']}>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/bnr/bnr-fee-kids-manner-343-108.png`}
                        width="343"
                        height="108"
                      />
                      <img
                        src={`${assets}img/bnr/bnr-fee-kids-manner-1032-160.png`}
                        width="1032"
                        height="160"
                        alt="スマホデビューを応援！子どもと学ぶスマホのマナー"
                        loading="lazy"
                      />
                    </picture>
                  </BannerHover>
                </BnrWrapper>
              </BoxWhite>
            </section>
            <section>
              <h2
                className={`${Utils['Align-center']} ${Utils['Mt-72']}`}
                data-ratid="fee-kids_scroll-08_family"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-otoku-sp.png`}
                    width="269"
                    height="90"
                  />
                  <img
                    src={`${imgPath}title-otoku-pc.png`}
                    width="582"
                    height="67"
                    alt="家族みんなで使うともーっとおトク！"
                    loading="lazy"
                  />
                </picture>
              </h2>
              <h3 className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-introduction-cpn-sp.png`}
                    width="241"
                    height="73"
                  />
                  <img
                    src={`${imgPath}title-introduction-cpn-pc.png`}
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
                    srcSet={`${imgPath}introduction-1-sp.png`}
                    width="343"
                    height="148"
                  />
                  <img
                    src={`${imgPath}introduction-1-pc.png`}
                    width="505"
                    height="208"
                    alt="紹介する方 紹介1人につき7,000ポイントプレゼント!"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}introduction-2-sp.png`}
                    width="343"
                    height="148"
                  />
                  <img
                    src={`${imgPath}introduction-2-pc.png`}
                    width="505"
                    height="208"
                    alt="紹介される方 初めてのお申し込み＆他社から電話番号そのまま乗り換えで13,000ポイントプレゼント! ※乗り換え（MNP）以外で初めてお申し込みの方は6,000ポイント"
                    loading="lazy"
                  />
                </picture>
              </CampaignInfo>
              <TxtCap
                as="p"
                className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
              >
                ※紹介された方のRakuten
                Link利用・データタイプ対象外等条件あり。ポイントは4カ月後から分割付与。期間限定ポイント
              </TxtCap>
              <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                <ButtonRegularLarge
                  as="a"
                  href="/campaign/referral/?l-id=fee_kids_campaign_referral"
                >
                  紹介キャンペーンの詳細を見る
                </ButtonRegularLarge>
              </div>
              <h3 className={`${Utils['Align-center']} ${Utils['Mt-72']}`}>
                <img
                  src={`${imgPath}for-family.png`}
                  width="252"
                  height="36"
                  alt="ご家族の方はこちら"
                  loading="lazy"
                />
              </h3>
              <CommonNavFamilyYouthKodomo
                showElements={{ second: ['family', 'youth'] }}
                familyParam="fee_kids_fee_family"
                youthParam="fee_kids_fee_youth"
                className={Utils['Mt-16']}
              />
            </section>
            <section>
              <h2
                id="faq"
                className={`${Utils['Align-center']} ${Utils['Mt-72']}`}
                data-ratid="fee-kids_scroll-09_faq"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-faq-sp.png`}
                    width="269"
                    height="65"
                  />
                  <img
                    src={`${imgPath}title-faq-pc.png`}
                    width="579"
                    height="65"
                    alt="よくあるご質問"
                    loading="lazy"
                  />
                </picture>
              </h2>
              <BoxWhite className={`${Utils['Mt-16']} ${Utils['Align-left']}`}>
                <AccordionList
                  text="最強こどもプログラムが適用される条件は何ですか？"
                  isOpened={false}
                >
                  <p>
                    本プログラムが適用される主な条件は下記をご確認ください。
                  </p>
                  <ListDisc
                    className={Utils['Mt-8']}
                    text={[
                      {
                        text: 'Rakuten最強プランを契約している',
                      },
                    ]}
                  />
                  <TxtCap as="p">
                    ※Rakuten最強プラン（データタイプ）、Apple Watch
                    ファミリー共有は適用対象外です。
                  </TxtCap>
                  <br />
                  <ListDisc
                    text={[
                      {
                        text: '本プログラムへのエントリーが完了している（おひとり様1度のみ）',
                      },
                      {
                        text: '12歳以下の方',
                      },
                    ]}
                  />
                  <TxtCap>
                    ※エントリーとRakuten最強プランご利用開始の順序は問いません。
                    <br />
                    ※13歳の誕生月前月までが対象となります。また、一度適用されると適用条件外となるまで解除できません。
                    <br />
                    ※保護者の方が操作される場合は、お子様の楽天IDでログインし、エントリーをお願いします。
                    <br />
                    ※最強こどもプログラムにエントリー済みの方は、13歳になる月から自動的に「最強青春プログラム」の対象になります。改めてのエントリーは不要です。
                  </TxtCap>
                  <p className={Utils['Mt-16']}>
                    その他、最強こどもプログラムの詳細は
                    <LinkNormal
                      href="rule-2335"
                      onClick={e => anchorCallback(e, 'rule-2335')}
                    >
                      キャンペーンルール
                    </LinkNormal>
                    をご確認ください。
                  </p>
                </AccordionList>
                <AccordionList
                  text="月の途中で最強こどもプログラムにエントリーした場合、特典ポイントはどうなりますか？"
                  isOpened={false}
                >
                  <p>
                    エントリーした月のご利用分から適用となり、翌々月に特典ポイントが付与されます。
                    <br />
                    特典ポイントは日割り計算となりません。
                  </p>
                  <p className={Utils['Mt-16']}>
                    <TxtEmp01>【特典ポイント付与例】</TxtEmp01>
                    <br />
                    5月にすべての条件を達成した場合には、その翌々月である7月末日ごろにポイント付与となります。
                  </p>
                </AccordionList>
                <AccordionList
                  text="2回線契約しています。最強こどもプログラムにエントリーした場合、どの回線にプログラムが適用されますか？"
                  isOpened={false}
                >
                  <p>
                    複数回線をご契約の場合は、特典ポイント数が多い回線に最強こどもプログラムが適用されます。
                  </p>
                  <p className={Utils['Mt-16']}>
                    <TxtEmp01>【特典ポイント】</TxtEmp01>
                    <br />
                  </p>
                  <ListDisc
                    className={Utils['Mt-8']}
                    text={[
                      {
                        text: '当月利用量が3GB以下：440ポイント還元',
                      },
                      {
                        text: '当月利用量が3GBを超過：110ポイント還元',
                      },
                    ]}
                  />
                  <p className={Utils['Mt-16']}>
                    <TxtEmp01>【特典ポイント付与例】</TxtEmp01>
                    <br />
                    「当月利用量が2GBの回線A」と「当月利用量が10GBの回線B」がある場合、還元されるポイント数が多い「当月利用量が2GBの回線A」に最強こどもプログラムが適用されます。
                  </p>
                  <TxtCap>
                    ※本プログラムのエントリーは楽天IDに紐づくため、いずれかの回線を解約しても、1回線でもRakuten最強プランのご契約がある場合は引き続き最強こどもプログラムが適用されます。
                    <br />
                    ※ご契約に紐づく楽天IDを変更した場合は、あらためてエントリーが必要です。
                  </TxtCap>
                </AccordionList>
                <AccordionList
                  text="最強こどもプログラムは他のキャンペーンと併用できますか？"
                  isOpened={false}
                >
                  <p>併用できます。</p>
                  <TxtCap>
                    ※最強こどもプログラムと最強青春プログラムの併用はできません。
                  </TxtCap>
                  <p className={Utils['Mt-16']}>
                    併用可能なキャンペーンは
                    <LinkNormal href="/campaign/">こちら</LinkNormal>
                    をご確認ください。
                  </p>
                </AccordionList>
                <AccordionList
                  text="すでに最強青春プログラムにエントリーしている場合、最強こどもプログラムにエントリーする必要はありますか？"
                  isOpened={false}
                >
                  <p>
                    不要です。
                    <br />
                    12歳以下のお客様が最強青春プログラムをエントリーした場合、自動的に「最強こどもプログラム」が適用されます。
                  </p>
                  <TxtCap>
                    ※2024年5月2日（木）の最強こどもプログラム開始前までに「最強青春プログラム」にエントリー済みの方もエントリーは不要です。エントリー情報を引き継ぎいたします。
                  </TxtCap>
                </AccordionList>
                <AccordionList
                  text="最強こどもプログラムに正しくエントリーできているか確認したい場合、どうすればよいですか？"
                  isOpened={false}
                >
                  <p>
                    最強こどもプログラムを適用したい楽天IDで楽天PointClubにログインし、キャンペーンエントリー履歴をご確認ください。
                  </p>
                  <p>
                    確認方法の詳細は
                    <LinkNormal href="/faq/detail/10000942/">こちら</LinkNormal>
                    をご確認ください。
                  </p>
                </AccordionList>
              </BoxWhite>
            </section>
            <section
              id="rule-2335"
              data-ratid="fee-kids_scroll-10_rule"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <h2 className={`${Utils['Align-center']} ${Utils['Mt-72']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}title-rule-sp.png`}
                    width="269"
                    height="65"
                  />
                  <img
                    src={`${imgPath}title-rule-pc.png`}
                    width="564"
                    height="67"
                    alt="よくあるご質問"
                    loading="lazy"
                  />
                </picture>
              </h2>
              <BoxWhite className={Utils['Mt-16']}>
                <CampaignRule2335 />
              </BoxWhite>
            </section>
          </SystemContainer>
        </BgGreen>
        {!isCampaignEntry && (
          <CustomBottomFixed scrollTrigger={scrollTriggerRef}>
            <div className={Utils['Align-center']}>
              <TxtWaring2 className={Utils['Color-white']}>
                <IconSignWarningLine />
                12歳以下のご契約者様自身の楽天IDをご利用ください
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

export default FeeKids
