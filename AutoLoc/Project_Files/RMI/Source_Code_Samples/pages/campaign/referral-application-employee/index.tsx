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
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { AboutRakutenMobile } from '@components/include/common/AboutRakutenMobile'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { UlOnly, ListDisc } from '@components/atoms/List'
import { IconChevronRight } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CampaignRule2162 } from '@components/include/campaign/rules/2024/CampaignRule2162'
import { CampaignRule2162turbo } from '@components/include/campaign/rules/2024/CampaignRule2162turbo'
import { AccordionList } from '@components/atoms/AccordionList'

const KvHeading = styled.section`
  ${mixins.mq.MinL} {
    background-color: #e4007e;
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
const GraphNote = styled(BgGray)`
  text-align: left;
  margin-top: -3%;
  padding: 5px 4% 10px;
  font-size: 12px;
  ${mixins.mq.MinL} {
    margin-top: -1em;
    margin-inline: 0;
    padding: 7px 16px 12px;
  }
`

const CampaignReferralapplicationemployee: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '【楽天従業員から紹介された方限定】楽天モバイル紹介キャンペーン！回線お申し込みごとにポイントプレゼント'
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
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
  const faq3 = [
    {
      text: (
        <>
          <TxtEmp01>
            「Rakuten最強プラン」または「楽天最強プラン（データタイプ）」をお申込みの場合
          </TxtEmp01>
          <p>
            〈2024年5月31日までのお申し込みの場合〉
            <br />
            条件を達成いただければ、複数回の適用が可能です。
            <br />
            なお、おひとり様あたりのご契約数には上限がございますのでご注意ください。詳細は
            <LinkNormal href="/faq/detail/00001243/">こちら</LinkNormal>
          </p>
          <p className={Utils['Mt-16']}>
            〈2024年6月1日以降のお申込みの場合〉
            <br />
            特典はおひとり様最大5回線までとなります。
          </p>
        </>
      ),
    },
    {
      text: (
        <>
          <TxtEmp01>「Rakuten Turbo」をお申込みの場合</TxtEmp01>
          <br />
          特典はおひとり様1度のみとなります。
        </>
      ),
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天従業員からの紹介で回線お申し込みごとにポイントプレゼント！初めて申し込み＆電話番号そのまま他社から乗り換えの方は14,000ポイント。初めて申し込みの方は7,000ポイント。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/referral-application-employee/kv-sp-240216.png`}
                width="900"
                height="576"
              />
              <img
                src={`${assets}img/campaign/referral-application-employee/kv-pc-240216.png`}
                width="1440"
                height="400"
                alt="特別なお客様へのご案内 Rakuten最強プラン紹介キャンペーン！楽天従業員から紹介された方限定 電話番号そのまま乗り換えの場合回線お申し込みごとに14,000ポイントプレゼント 乗り換え以外の場合は7,000ポイント"
              />
            </picture>
          </h1>
        </KvHeading>
        <BgGray className={`${Utils['Pt-8']} ${Utils['Pb-16']}`}>
          <SystemContainer>
            <TxtCap as="p">
              <TxtEmp02>
                ※ ポイントは期間限定ポイントとして3カ月間にわたり進呈します。
              </TxtEmp02>
              <br />
              <TxtEmp02>※ 特典内容は増減する場合がございます。</TxtEmp02>
              <br />
              ※ 2024年2月1日以降のお申し込み分から、ポイントアップいたしました。
              <br />
              ※ Rakuten最強プランのお申し込みは10回線まで。
              <br />※
              本キャンペーンにご参加いただいたお客様の楽天会員情報及び契約状況に関する情報は、キャンペーンの遂行、手続き状況等をお知らせする目的で楽天モバイル及び楽天グループ各社に提供される場合があります。
              <br />
              ※1 楽天モバイル公式
              楽天市場店にて6,000円OFFクーポンを利用された場合は、8,000ポイントとなります。
            </TxtCap>
            <div className={`${Utils['Align-right']} ${Utils['Mt-16']}`}>
              <LinkIconAfter href="/campaign/referral-application-employee/en/?l-id=campaign_referral-application-employee_referral-application-employee-en">
                English
                <IconChevronRight />
              </LinkIconAfter>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              <TxtEmp01 as="p">【キャンペーン期間】</TxtEmp01>
              <p>
                Web：2023年12月5日（火）09:00～
                <del>2024年5月31日（金）23:59</del> 終了日未定
                <br />
                ショップ：2023年12月5日（火）開店～
                <del>2024年5月31日（金）閉店</del> 終了日未定
              </p>
            </div>
          </SystemContainer>
        </BgGray>
        <SystemContainer
          data-ratid="referral-application-employee_scroll-01_application"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <Applybox>
            <h2>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/referral-application-employee/title-ribbon-sp.png`}
                  width="325"
                  height="53"
                />
                <img
                  src={`${assets}img/campaign/referral-application-employee/title-ribbon-pc.png`}
                  width="505"
                  height="111"
                  alt="お申し込みはこちら"
                />
              </picture>
            </h2>
            <ApplyContents>
              <p className={Utils['Align-center']}>
                この度は、楽天モバイルにご興味をお持ちいただき、誠にありがとうございます。
                <br />
                「Rakuten最強プラン<TxtCap as="span">※</TxtCap>
                」、またはホームルーター「Rakuten Turbo」をお申し込みで
                <br className={Utils['Show-xxo']} />
                本キャンペーンの対象となります。
                <br />
                皆様にもご利用いただき、高い満足度と通信品質を実感いただけますと幸いです。
                <br />
                <TxtCap>※データタイプを含む。</TxtCap>
              </p>
              <SectionBorder>
                <section>
                  <Heading
                    level="4"
                    as="h3"
                    className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                  >
                    Rakuten最強プラン
                  </Heading>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonPrimaryLarge
                      as="a"
                      href="/guide/application/?lid-r=campaign_referral-application-employee_guide_application-01"
                    >
                      新規／乗り換え（MNP）
                      <br className={Utils['Show-oxx']} />
                      お申し込み
                    </ButtonPrimaryLarge>
                    <ButtonSecondaryLarge
                      href="/shop/?lid=campaign_referral-application-employee_shop_01"
                      as="a"
                    >
                      お近くのショップを探す
                    </ButtonSecondaryLarge>
                  </Cta>
                  <div className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}>
                    <p>
                      <LinkIconAfter href="/guide/mnp/?l-id=campaign_referral-application-employee_guide_mnp_01">
                        他社からの乗り換え（MNP）方法
                        <IconChevronRight />
                      </LinkIconAfter>
                    </p>
                    <p className={Utils['Mt-sp-8']}>
                      <LinkIconAfter href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_referral-application-employee_ms_top&mno_migration=1">
                        楽天モバイル（ドコモ・au回線）からのプラン変更（移行）
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
                    Rakuten最強プラン<TxtNormal>（データタイプ）</TxtNormal>
                  </Heading>
                  <TxtCap
                    as="p"
                    className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
                  >
                    ※データ通信のみ可能、楽天カードをお持ちの方限定のプランです。
                    <br />
                    ※お申し込み画面から、「プランのみお申し込み」を選択後に「Rakuten最強プラン（データタイプ）」を選択の上、お進みください。
                  </TxtCap>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonPrimaryLarge
                      href="/onboarding/fast/?sourceExternalChannel=wi_lp_rmb_mkdiv_campaign_referral-application-employee_01&l-id=campaign_referral-application-employee_onboarding_fast_01"
                      as="a"
                    >
                      データタイプお申し込み
                    </ButtonPrimaryLarge>
                  </Cta>
                  <p className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}>
                    <LinkIconAfter href="/faq/detail/10000812/?l-id=campaign_referral-application-employee_faq_detail_10000812">
                      「Rakuten最強プラン」と「Rakuten最強プラン（データタイプ）」の違い
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
                    ※工事不要で利用できるホームルーターです。
                    <br />
                    ※下記
                    詳細ページから対応エリアなどをご確認の上、お申し込みください。
                  </TxtCap>
                  <Cta className={Utils['Mt-16']}>
                    <ButtonSecondaryLarge
                      href="/internet/turbo/campaign/six-month-free/?l-id=campaign_referral-application-employee_internet_turbo_campaign_six-month-free"
                      as="a"
                    >
                      Rakuten Turboの詳細を見る
                    </ButtonSecondaryLarge>
                  </Cta>
                </section>
              </SectionBorder>
            </ApplyContents>
          </Applybox>

          <AttentionBox>
            <TxtEmp01 as="p">
              楽天従業員から紹介された場合は、通常の紹介キャンペーンと異なり下記条件が適用されます。
            </TxtEmp01>
            <UlOnly className={Utils['Mt-8']}>
              <li>
                初めてのお申し込み以外の方も、キャンペーン対象となります。（例：2回線目の方、再契約の方）
              </li>
              <li>
                「Rakuten最強プラン（データタイプ）」、「Rakuten
                Turbo」のお申し込みもキャンペーン対象となります。
              </li>
              <li>Rakuten Linkアプリのご利用は必須ではありません。</li>
            </UlOnly>
          </AttentionBox>

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <BannerHover href="/guide/procedure/?l-id=campaign_referral-application-employee_guide_procedure">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-apply-guide-343-116.png`}
                  width="1032"
                  height="78"
                />
                <img
                  src={`${assets}img/bnr/bnr-apply-guide-1032-78.png`}
                  width="1032"
                  height="78"
                  alt="お申し込み手続きでお困りごとはありますか？ はじめてでも安心！お申し込みガイド ご利用開始までかんたん4ステップでご案内します"
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
            data-ratid="referral-application-employee_scroll-02_application-flow"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <section>
              <Heading level="2" className={Utils['Align-center']}>
                お申し込みの流れ
              </Heading>
              <CustomAccordionListEmp
                text={
                  <>
                    <AccordionEmpStep>STEP1</AccordionEmpStep>
                    <AccordionEmpTxt>楽天モバイルのお申し込み</AccordionEmpTxt>
                  </>
                }
                isOpened={false}
                className={Utils['Mt-24']}
                step={true}
              >
                <Tab
                  className={Utils['Mt-8']}
                  heading1={'Web'}
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
                                srcSet={`${assets}img/campaign/referral-application-employee/img-flow-apply-document-sp.png`}
                                width="558"
                                height="232"
                              />
                              <img
                                src={`${assets}img/campaign/referral-application-employee/img-flow-apply-document-pc.png`}
                                width="280"
                                height="180"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </MediaImage>
                          <div>
                            <Heading level="4" as="h3">
                              お申し込みに必要なもの
                            </Heading>
                            <UlOnly className={Utils['Mt-16']}>
                              <li>
                                <LinkIconAfter href="/guide/verify/?l-id=campaign_referral-application-employee_guide_verify">
                                  本人確認書類
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                              <li>
                                楽天会員ID、パスワード
                                <TxtCap as="div" className={Utils['Ml-16']}>
                                  <TxtEmp02>
                                    ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                                  </TxtEmp02>
                                </TxtCap>
                                <div className={Utils['Ml-16']}>
                                  <LinkIconAfter href="https://member.id.rakuten.co.jp/rms/nid/menufwd?l-id=campaign_referral-application-employee_rms_nid_menufwd">
                                    楽天会員情報を確認・変更する
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </div>
                              </li>
                              <li>
                                ご契約者名義の
                                <LinkNormal href="/guide/mnp/?l-id=campaign_referral-application-employee_guide_mnp_02">
                                  MNP予約番号
                                </LinkNormal>
                                （他社から乗り換えの場合）
                              </li>
                              <li>
                                <LinkIconAfter href="/guide/payment/?l-id=campaign_referral-application-employee_guide_payment_02">
                                  クレジットカード、銀行口座情報
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                            </UlOnly>
                            <TxtCap as="p" className={Utils['Mt-8']}>
                              ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
                              <LinkNormal href="/faq/detail/00001238/">
                                こちらのご案内ページ
                              </LinkNormal>
                              を必ず事前にご確認ください。
                              <br />
                              ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
                              <LinkNormal href="/flow/for-minors/">
                                こちらのご案内ページ
                              </LinkNormal>
                              をご確認ください。
                              <br />
                              ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                              <LinkNormal href="/guide/mnp/#career">
                                こちら
                              </LinkNormal>
                              からご確認ください。
                              <br />
                              ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、MNP有効期間内にご来店ください。
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
                                Rakuten最強プラン
                              </Heading>
                              <div className={Utils['Mt-16']}>
                                <ButtonPrimaryLarge
                                  as="a"
                                  href="/guide/application/?lid-r=campaign_referral-application-employee_guide_application_02"
                                >
                                  新規／乗り換え（MNP）
                                  <br className={Utils['Show-oxx']} />
                                  お申し込み
                                </ButtonPrimaryLarge>
                              </div>
                              <div className={Utils['Mt-16']}>
                                <LinkIconAfter href="/fee/saikyo-plan/?l-id=campaign_referral-application-employee_fee_saikyo-plan">
                                  プラン詳細
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </div>
                              <div className={Utils['Mt-8']}>
                                <LinkIconAfter href="/guide/flow/application/?l-id=campaign_referral-application-employee_guide_flow_application">
                                  お申し込み方法
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
                                Rakuten最強プラン
                                <br className={Utils['Show-oxx']} />
                                （データタイプ）
                              </Heading>
                              <TxtCap
                                as="p"
                                className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}
                              >
                                ※データ通信のみ可能、楽天カードをお持ちの方限定のプランです。
                                <br />
                                ※お申し込み画面から、「プランのみお申し込み」「Rakuten最強プラン（データタイプ）」を選択の上、お進みください。
                              </TxtCap>
                              <div className={Utils['Mt-16']}>
                                <ButtonPrimaryLarge
                                  as="a"
                                  href="/onboarding/fast/?sourceExternalChannel=wi_lp_rmb_mkdiv_campaign_referral-application-employee_02&l-id=campaign_referral-application-employee_onboarding_fast_02"
                                >
                                  データタイプお申し込み
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
                              楽天モバイル（ドコモ・au回線）からプラン変更（移行）
                            </Heading>
                            <div className={Utils['Mt-16']}>
                              <ButtonSecondaryLarge
                                as="a"
                                href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_referral-application-employee_members_rmb_login&mno_migration=1"
                              >
                                メンバーズステーションから
                                <br className={Utils['Show-xxo']} />
                                プラン変更（移行）する
                              </ButtonSecondaryLarge>
                            </div>
                            <div
                              className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/guide/migration/?l-id=campaign_referral-application-employee_guide_migration">
                                スーパーホーダイ・組み合わせプラン（※）との比較
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                            <TxtCap
                              as="p"
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              ※2020年4月8日に受付終了のドコモ回線・au回線使用プラン
                            </TxtCap>
                            <div
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/guide/mnp/migration/?l-id=campaign_referral-application-employee_guide_mnp_migration">
                                楽天モバイル（楽天回線）への移行方法
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                            <div
                              className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
                            >
                              <LinkIconAfter href="/flow/mvno-user-registration/?l-id=campaign_referral-application-employee_flow_mvno-user-registration">
                                利用者登録でご利用中の方の移行方法
                                <IconChevronRight />
                              </LinkIconAfter>
                            </div>
                          </section>
                        </InfoboxBorder>
                      </FlexBox>
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
                              srcSet={`${assets}img/campaign/referral-application-employee/img-flow-shop-sp.png`}
                              width="559"
                              height="274"
                            />
                            <img
                              src={`${assets}img/campaign/referral-application-employee/img-flow-shop-pc.png`}
                              width="284"
                              height="165"
                              alt=""
                              loading="lazy"
                            />
                          </picture>
                        </MediaImage>
                        <div>
                          <Heading level="4" as="h3">
                            「Rakuten最強プラン」を申し込む
                          </Heading>
                          <TxtCap as="p" className={Utils['Mt-8']}>
                            <TxtEmp02>
                              ※ 未成年の方のお申し込み方法は別途
                              <LinkNormal href="/flow/for-minors/">
                                こちら
                              </LinkNormal>
                              のご案内ページをご確認ください。
                            </TxtEmp02>
                          </TxtCap>
                          <ButtonRegular
                            as="a"
                            href="/shop/?lid=campaign_referral-application-employee_shop_02"
                            className={Utils['Mt-16']}
                          >
                            お近くのショップを探す
                          </ButtonRegular>
                        </div>
                      </MediaGrid>
                      <InfoboxBorder className={Utils['Mt-24']}>
                        <MediaGrid>
                          <MediaImage>
                            <picture>
                              <source
                                media={`(max-width: ${theme.max.m})`}
                                srcSet={`${assets}img/campaign/referral-application-employee/img-flow-apply-document-sp.png`}
                                width="558"
                                height="232"
                              />
                              <img
                                src={`${assets}img/campaign/referral-application-employee/img-flow-apply-document-pc.png`}
                                width="280"
                                height="180"
                                alt=""
                                loading="lazy"
                              />
                            </picture>
                          </MediaImage>
                          <div>
                            <Heading level="4" as="h3">
                              お申し込みに必要なもの
                            </Heading>
                            <UlOnly className={Utils['Mt-16']}>
                              <li>
                                <LinkIconAfter href="/guide/verify/?l-id=campaign_referral-application-employee_guide_verify_shop-tab">
                                  本人確認書類
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                              <li>
                                楽天会員ID、パスワード
                                <TxtCap as="div" className={Utils['Ml-16']}>
                                  <TxtEmp02>
                                    ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                                  </TxtEmp02>
                                </TxtCap>
                                <div className={Utils['Ml-16']}>
                                  <LinkIconAfter href="https://member.id.rakuten.co.jp/rms/nid/menufwd?l-id=campaign_referral-application-employee_rms_nid_menufwd_shop-tab">
                                    楽天会員情報を確認・変更する
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </div>
                              </li>
                              <li>
                                ご契約者名義の
                                <LinkNormal href="/guide/mnp/?l-id=campaign_referral-application-employee_guide_mnp_02_shop-tab">
                                  MNP予約番号
                                </LinkNormal>
                                （他社から乗り換えの場合）
                              </li>
                              <li>
                                <LinkIconAfter href="/guide/payment/?l-id=campaign_referral-application-employee_guide_payment_02_shop-tab">
                                  クレジットカード、銀行口座情報
                                  <IconChevronRight />
                                </LinkIconAfter>
                              </li>
                            </UlOnly>
                            <TxtCap as="p" className={Utils['Mt-8']}>
                              ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
                              <LinkNormal href="/faq/detail/00001238/">
                                こちらのご案内ページ
                              </LinkNormal>
                              を必ず事前にご確認ください。
                              <br />
                              ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
                              <LinkNormal href="/flow/for-minors/">
                                こちらのご案内ページ
                              </LinkNormal>
                              をご確認ください。
                              <br />
                              ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会
                              <LinkNormal href="/guide/mnp/#career">
                                こちら
                              </LinkNormal>
                              からご確認ください。
                              <br />
                              ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、MNP有効期間内にご来店
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
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/referral-application-employee/img-flow-plan-start-sp.png`}
                        width="467"
                        height="227"
                      />
                      <img
                        src={`${assets}img/campaign/referral-application-employee/img-flow-plan-start-pc.png`}
                        width="304"
                        height="135"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </MediaImage>
                  <div>
                    <TxtEmp01 as="p" className={Utils['Align-cll']}>
                      期限：紹介メッセージ経由での
                      <br className={Utils['Show-oxx']} />
                      ログイン日の翌々月末日23:59まで
                    </TxtEmp01>
                    <div className={Utils['Mt-24']}>
                      <ButtonRegular
                        as="a"
                        href="/faq/detail/00001648/?l-id=campaign_referral-application-employee_faq_detail_00001648_01"
                      >
                        プラン利用開始手順
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
                      src={`${assets}img/campaign/referral-application-employee/img-flow-rpoint-pc.png`}
                      width="304"
                      height="150"
                      alt=""
                      loading="lazy"
                    />
                  </MediaImage>
                  <RPointtext>
                    <TxtSize size="l" as="p" className={Utils['Align-cll']}>
                      <TxtEmp01>紹介された方に</TxtEmp01>
                      <br className={Utils['Show-oxx']} />
                      <TxtEmp02>
                        <AlphanumericSize size="l">14,000</AlphanumericSize>
                        ポイントプレゼント！
                      </TxtEmp02>
                    </TxtSize>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      ※
                      電話番号そのまま乗り換え（MNP）の場合。乗り換え（MNP）以外の方は7,000ポイントとなります。
                      <br />
                      ※紹介メッセージ経由でログインした月の4カ月後の末日ごろから3カ月にわたり、期間限定ポイントとして進呈します。
                    </TxtCap>
                  </RPointtext>
                </MediaGrid>
              </InfoboxWhite>
            </section>
          </SystemContainer>
        </BgGray>

        <SystemContainer
          data-ratid="referral-application-employee_scroll-03_flow-schedule"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <section
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-48']} ${Utils['Align-center']}`}
          >
            <Heading level="2">ポイント進呈時期の具体例</Heading>
            <p className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
              2月に条件を達成した場合、以下の予定でポイントを進呈します。
            </p>
            <div className={Utils['Mt-16']}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/referral-application-employee/img-graph-sp-240201.png`}
                  width={theme.max.num.m}
                  height="1426"
                />
                <img
                  src={`${assets}img/campaign/referral-application-employee/img-graph-pc-240201.png`}
                  width="1032"
                  height="360"
                  alt=""
                  loading="lazy"
                />
              </picture>
              <GraphNote>
                ※電話番号そのまま乗り換え（MNP）で楽天モバイルを初めてお申し込みの場合。乗り換え（MNP）以外で初めてお申し込みの方は7,000ポイントとなり、3カ月にわたり進呈します。
                <br />
                （4カ月後・5カ月後に2,000ポイント、6カ月後に3,000ポイントを進呈。）
              </GraphNote>
            </div>
          </section>

          <section
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-48']} ${Utils['Pb-64']}`}
          >
            <Heading level="2" className={`${Utils['Align-center']}`}>
              よくあるご質問
            </Heading>
            <AccordionList
              text={
                '過去に回線契約をしたことがある場合でも、本キャンペーンは適用されますか'
              }
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                過去にご契約があるお客様も、新たにお申込みした回線で条件を達成いただければキャンペーンの対象となります。
              </p>
            </AccordionList>
            <AccordionList
              text={'本キャンペーンの適用回数に制限はありますか'}
              isOpened={false}
            >
              <ListDisc text={faq3} />
            </AccordionList>
            <AccordionList
              text={
                '紹介者（楽天従業員）から送られたキャンペーンURLでログインをせずに申込をしてしまった場合、どうすればよいですか'
              }
              isOpened={false}
            >
              <p>
                お申し込み日を含めて7日以内にログインしていただければ、お申込み後のログインでも対象となります。
              </p>
            </AccordionList>
            <AccordionList
              text={
                '併用不可・対象外キャンペーンに記載のあるキャンペーンを利用したことがある場合、本キャンペーンは適用されますか'
              }
              isOpened={false}
            >
              <p>
                新しくお申込みいただく回線で併用不可・対象外キャンペーンのご利用がなければ、キャンペーン対象となります。
              </p>
            </AccordionList>
          </section>
        </SystemContainer>

        <BgYellow>
          <SystemContainer
            data-ratid="referral-application-employee_scroll-04_simulation"
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
                        srcSet={`${assets}img/campaign/referral-application/bnr-simulation-comment-sp-240201.png`}
                        width="480"
                        height="128"
                      />
                      <img
                        src={`${assets}img/campaign/referral-application/bnr-simulation-comment-pc-240201.png`}
                        width="468"
                        height="54"
                        alt="楽天モバイルを使うとこんなにおトク！"
                      />
                    </picture>
                  </BnrComment>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/referral-application/bnr-simulation-title-sp-240201.png`}
                      width="620"
                      height="216"
                    />
                    <img
                      src={`${assets}img/campaign/referral-application/bnr-simulation-title-pc-240201.png`}
                      width="780"
                      height="43"
                      alt="いくらおトクになるのかシミュレーション！"
                    />
                  </picture>
                </BnrHeading>
              </BnrHead>
              <BnrBody>
                <BnrBodyInner>
                  <p>
                    現在お使いのキャリアとプラン料金を比較できます。
                    <br className={Utils['Show-xoo']} />
                    料金シミュレーションでどれくらい節約できるのか今すぐチェック！
                  </p>
                  <div className={`${Utils['Show-oox']} ${Utils['Mt-16']}`}>
                    <picture>
                      <img
                        src={`${assets}img/campaign/referral/bnr-simulation-img-sp.png`}
                        width="620"
                        height="248"
                        alt="プラン料金をシミュレーション"
                      />
                    </picture>
                  </div>
                  <CustomSimurationBtn
                    as="a"
                    href="/fee/simulation/?l-id=campaign_referral-application-employee_fee_un-limit_simulation"
                  >
                    <span>プラン料金をシミュレーションする</span>
                  </CustomSimurationBtn>
                </BnrBodyInner>
              </BnrBody>
            </BnrSimulation>
            <BnrLink>
              <BnrLinkComment>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/referral-application-employee/bnr-link-comment-sp.png`}
                    width="659"
                    height="98"
                  />
                  <img
                    src={`${assets}img/campaign/referral-application-employee/bnr-link-comment-pc.png`}
                    width="468"
                    height="53"
                    alt="楽天モバイルで使えるオススメアプリ"
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
                Rakuten Linkアプリ利用で国内通話かけ放題！
                <BnrLinkAnnotation>※</BnrLinkAnnotation>
              </BnrLinkTitle>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/referral/bnr-link-2-sp.png`}
                    width="622"
                    height="204"
                  />
                  <img
                    src={`${assets}img/campaign/referral/bnr-link-2-pc.png`}
                    width="925"
                    height="202"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className={`${Utils['Mt-16']} ${Utils['Mt-pc-32']} ${Utils['Align-center']}`}
              >
                <CustomLinkBtn
                  as="a"
                  href="/service/rakuten-link/?l-id=campaign_referral-application-employee_service_rakuten-link"
                  className="Bnr-link-btn"
                >
                  <span>詳細を見る</span>
                </CustomLinkBtn>
              </div>
              <BnrLinkAnnotation as="p" className={Utils['Mt-16']}>
                ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。OS標準の電話アプリを利用した場合、30秒22円
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
          <CommonSaikyo />
        </SectionCommonSaikyo>
        <AboutRakutenMobile
          className={Utils['Mt-64']}
          lid="campaign_referral-application-employee"
          isBgGray={true}
        />
        <SystemContainer>
          <section className={`${Utils['Mt-40']} ${Utils['Pb-24']}`}>
            <BnrCampaignRecommend />
          </section>
          <section
            className={Utils['Mt-56']}
            data-ratid="referral-application-employee_scroll-06_rule"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading level="2" id="campaign-rule2162">
              【楽天従業員から紹介された方限定】Rakuten最強プラン紹介キャンペーン
            </Heading>
            <CampaignRule2162 />

            <Heading
              level="2"
              id="campaign-rule2162turbo"
              className={Utils['Mt-64']}
            >
              [Rakuten
              Turbo]【楽天従業員から紹介された方限定】Rakuten最強プラン紹介キャンペーン
            </Heading>
            <CampaignRule2162turbo />
          </section>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignReferralapplicationemployee
