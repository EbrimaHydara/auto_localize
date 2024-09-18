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
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { AccordionList } from '@components/atoms/AccordionList'
import { Tab } from '@components/atoms/Tab'
import {
  ButtonRegular,
  ButtonPrimary,
  ButtonSecondary,
} from '@components/atoms/Buttons'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { ListDisc } from '@components/atoms/List'
import { IconArrowDown, IconChevronRight } from '@components/icons'
import { MediaGrid } from '@components/layout/Media'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Divider } from '@components/atoms/Divider'
import { FlowList } from '@components/atoms/Flow'
import { BannerHover } from '@components/atoms/Banner'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CampaignRule2178 } from '@components/include/campaign/rules/2023/CampaignRule2178'
import { LabelList } from '@components/atoms/Label'
import { fontRakutenSans, fontRakutenSansUi } from '@styles/fonts'

const Kv = styled.div`
  background: #d5f2f6;
  text-align: center;
  h1 {
    display: flex;
    justify-content: center;
    height: 300px;
    ${mixins.mq.MaxCustom('1064px')} {
      height: calc((300 / 1064) * 100vw);
    }
    ${mixins.mq.MaxM} {
      height: auto;
    }
  }
  img {
    width: auto;
    max-width: 2000px;
    ${mixins.mq.MaxCustom('1064px')} {
      height: 100%;
    }
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`

const LabelListBox = styled.div`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  > ul {
    gap: 8px;
    > li {
      margin: 0;
    }
  }
`
const AnchorArea = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    margin-top: 40px;
    gap: 12px;
  }
`

const CampaignList = styled.ul`
  display: grid;
  gap: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;
  }
  > li {
    border: 1px solid ${props => props.theme.colors.monotone75};
    background: ${props => props.theme.colors.monotone97};
    ${mixins.mq.MinL} {
      display: grid;
      grid-row: span 2;
      grid-template-rows: auto 1fr;
      grid-template-rows: subgrid;
    }
    & + li {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 36px;
        height: 36px;
        background: url(${assets}img/campaign/android-discount/icon-plus.png)
          no-repeat;
        background-size: contain;
        top: -28px;
        left: 50%;
        transform: translateX(-50%);
        ${mixins.mq.MinL} {
          top: 50%;
          left: -28px;
          transform: translate(0, -50%);
        }
      }
    }
  }
`
const CampaignListTtl = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 22px 16px 24px 20px;
  background: ${props => props.theme.colors.white};
  > div:first-child {
    flex-shrink: 0;
  }
`

const CampaignListBody = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 16px 20px;
`

const GrayBox = styled.div`
  padding: 48px 0;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 32px 0;
  }
`

const FontRakutenSans = styled.span`
  line-height: 1;
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  font-weight: 600;
`

const CampaignProducts = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 32px;
  max-width: 1032px;
  border-radius: 4px;
  img {
    width: 228px;
  }
  ${mixins.mq.MaxM} {
    padding: 16px;
    img {
      width: 103px;
      margin: auto;
      display: block;
    }
  }
`

const CampaignProductsInner = styled.div`
  display: flex;
  gap: 40px;
  max-width: 768px;
  margin: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
  }
`

const CampaignProductsDetail = styled.div`
  width: calc(100% - 228px);
  ${mixins.mq.MaxM} {
    width: 100%;
  }
`

const CampaignProductsTitle = styled.div`
  vertical-align: -3%;
  font-size: 36px;
  ${mixins.mq.MaxM} {
    font-size: 30px;
  }
`

const CampaignProductsPriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CampaignProductsDiscount = styled.span`
  font-size: 30px;
  line-height: 1;
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
  ${mixins.mq.MaxM} {
    font-size: 24px;
  }
`

const CampaignProductsDiscountPrice = styled.span`
  font-size: 40px;
  line-height: 1;
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
  ${mixins.mq.MaxM} {
    font-size: 30px;
  }
`

const CampaignProductsMiniWrapper = styled.div`
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
`

const CampaignProductsMiniInner = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px auto 0;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    img {
      margin: auto;
      display: block;
    }
  }
`

const CampaignProductsMini = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 24px;
  border-radius: 4px;
  width: 50%;
  ${mixins.mq.MaxM} {
    width: 100%;
    padding: 16px;
  }
`

const CampaignProductsMiniTitle = styled.div`
  vertical-align: -3%;
  font-size: 28px;
`

const CampaignProductsMiniDetail = styled.div`
  width: calc(100% - 98px);
  ${mixins.mq.MaxM} {
    width: 100%;
  }
`

const CampaignProductsMiniPriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CampaignProductsMiniPriceContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  > p {
    flex: 0 0 100%;
    ${mixins.mq.MaxM} {
      flex: auto;
    }
  }
`

const CampaignProductsMiniPrice = styled.span`
  font-size: 22px;
  font-weight: normal;
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
`

const CampaignProductsMiniDiscount = styled.span`
  font-size: 22px;
  line-height: 1;
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
`

const CampaignProductsMiniDiscountPrice = styled.span`
  font-size: 30px;
  line-height: 1;
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
`

const BtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
  a {
    width: 100%;
    min-width: auto;
  }
  ${mixins.mq.MaxM} {
    gap: 8px;
    a {
      width: 50%;
      min-width: 0;
    }
  }
`

const TxtEmp2Cap = styled(TxtEmp02)`
  font-size: 12px;
`

const FlowImg = styled.img`
  height: fit-content;
  margin-right: 24px;
  ${mixins.mq.MaxM} {
    margin: auto;
    display: block;
  }
`

const FlowBtnsWrapper = styled.div`
  display: flex;
  gap: 16px 8px;
  flex-wrap: wrap;
  ${mixins.mq.MaxM} {
    gap: 16px;
  }
`

const FlowBtnsItem = styled.div`
  width: 100%;
  ${mixins.mq.MinL} {
    max-width: 260px;
  }
`

const FlowBtnsButton = styled(ButtonSecondary)`
  display: block;
`

const FlowLinksWrapper = styled.div`
  a {
    display: inline-block;
    margin-top: 16px;
    margin-right: 8px;
  }
  ${mixins.mq.MaxM} {
  }
`

const BnrsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  img {
    width: 100%;
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`

const SaikyoWrapper = styled.section`
  max-width: 1032px;
  margin: auto;
`

const MediaGridExtend = styled(MediaGrid)`
  > div {
    width: calc(calc(100% - 405px) - 24px) !important;
    ${mixins.mq.MaxM} {
      width: 100% !important;
    }
  }
`

const TabContent1 = () => (
  <ul>
    <FlowList className={Utils['Mt-16']}>
      <MediaGrid>
        <FlowImg
          src={`${assets}img/campaign/android-discount/step-document.png`}
          alt=""
          width={280}
          height={180}
        />
        <div>
          <Heading level="4" className="title">
            お申し込み・お支払いに必要なものを準備する
          </Heading>
          <ListDisc
            className={Utils['Mt-16']}
            text={[
              {
                text: (
                  <LinkIconAfter
                    as="a"
                    href="/guide/verify/?l-id=campaign_android-discount_guide_verify_web"
                  >
                    本人確認書類
                    <IconChevronRight />
                  </LinkIconAfter>
                ),
              },
              {
                text: (
                  <>
                    楽天会員ID、パスワード
                    <br />
                    <TxtEmp2Cap>
                      ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                    </TxtEmp2Cap>
                  </>
                ),
              },
              {
                text: (
                  <LinkIconAfter
                    as="a"
                    href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                    target="_blank"
                  >
                    楽天会員情報を確認・変更する
                    <IconChevronRight></IconChevronRight>
                  </LinkIconAfter>
                ),
              },
              {
                text: (
                  <LinkIconAfter
                    as="a"
                    href="/guide/mnp/?l-id=campaign_android-discount_guide_mnp_web"
                  >
                    ご契約者名義のMNP予約番号（他社から乗り換えの場合）
                    <IconChevronRight></IconChevronRight>
                  </LinkIconAfter>
                ),
              },
              {
                text: (
                  <LinkIconAfter
                    as="a"
                    href="/guide/payment/?l-id=campaign_android-discount_guide_payment_web"
                  >
                    クレジットカード、銀行口座情報
                    <IconChevronRight></IconChevronRight>
                  </LinkIconAfter>
                ),
              },
            ]}
          />
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
            <LinkNormal href="/faq/detail/00001238/?l-id=campaign_android-discount_faq_detail_00001238_web">
              こちらのご案内ページ
            </LinkNormal>
            を必ず事前にご確認ください。
            <br />
            ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
            <LinkNormal href="/flow/for-minors/?l-id=campaign_android-discount_flow_for-minors_web">
              こちら
            </LinkNormal>
            をご確認ください。
            <br />
            ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
            <LinkNormal href="/guide/mnp/?l-id=campaign_android-discount_guide_mnp_web#career">
              こちら
            </LinkNormal>
            からご確認ください。
            <br />
            ※MNP有効期間が「7日以上」残っているMNP予約番号が必要です。
            <br />
            ※Webページにて、楽天モバイル（ドコモ回線・au回線）から移行お手続き後に、Rakuten最強プランにお申し込みいただく場合、MNP予約番号と本人確認書類はご準備不要です。
          </TxtCap>
        </div>
      </MediaGrid>
    </FlowList>
    <FlowList>
      <MediaGridExtend>
        <FlowImg
          src={`${assets}img/campaign/android-discount/step-product-240522.png`}
          alt=""
          width={405}
          height={180}
        />
        <div>
          <Heading level="4" className="title">
            楽天モバイルのお申し込みと製品を購入する
          </Heading>
          <p className={Utils['Mt-16']}>
            製品をカートに追加後、Rakuten最強プランを選択しお申し込みください。
            <br />
            <TxtEmp02>
              製品とプランがカートに追加されると値引きが適用されます。
            </TxtEmp02>
            <br />
            <TxtCap>
              ※値引きは、対象製品の中から1製品のみ適用となります。
            </TxtCap>
          </p>
          <p className={Utils['Mt-8']}>
            <TxtEmp01>【キャンペーン期間】</TxtEmp01>
            <br className={Utils['Show-oox']} />
            2024年2月16日（金）09:00～終了日未定
          </p>
          <FlowBtnsWrapper className={Utils['Mt-16']}>
            <FlowBtnsItem>
              <FlowBtnsButton
                as="a"
                href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600645&selectAvailable=true"
                data-ratid="campaign_android-discount_xperia-5m5_order-button_bss_under"
                data-ratevent="click"
                data-ratparam="all"
              >
                Xperia 10 Vを購入する
              </FlowBtnsButton>
            </FlowBtnsItem>
            <FlowBtnsItem>
              <FlowBtnsButton
                as="a"
                href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600879&selectAvailable=true"
                data-ratid="campaign_android-discount_aquos-sense8_order-button_bss_under"
                data-ratevent="click"
                data-ratparam="all"
              >
                AQUOS sense8を購入する
              </FlowBtnsButton>
            </FlowBtnsItem>
            <FlowBtnsItem>
              <FlowBtnsButton
                as="a"
                href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600659&selectAvailable=true"
                data-ratid="campaign_android-discount_aquos-wish3_order-button_bss_under"
                data-ratevent="click"
                data-ratparam="all"
              >
                AQUOS wish3を購入する
              </FlowBtnsButton>
            </FlowBtnsItem>
            <FlowBtnsItem>
              <FlowBtnsButton
                as="a"
                href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600654&selectAvailable=true"
                data-ratid="campaign_android-discount_reno9-a_order-button_bss_under"
                data-ratevent="click"
                data-ratparam="all"
              >
                OPPO Reno9 Aを購入する
              </FlowBtnsButton>
            </FlowBtnsItem>
          </FlowBtnsWrapper>
          <FlowLinksWrapper>
            <LinkIconAfter
              as="a"
              href="/fee/saikyo-plan/?l-id=campaign_android-discount_fee_saikyo-plan"
            >
              Rakuten最強プランの詳細を見る<IconChevronRight></IconChevronRight>
            </LinkIconAfter>
            <LinkIconAfter
              as="a"
              href="/guide/mnp/?l-id=campaign_android-discount_guide_mnp"
            >
              乗り換え手順を確認する<IconChevronRight></IconChevronRight>
            </LinkIconAfter>
            <LinkIconAfter
              as="a"
              href="/guide/application-support/?l-id=campaign_android-discount_guide_application-support"
            >
              お申し込みサポート<IconChevronRight></IconChevronRight>
            </LinkIconAfter>
          </FlowLinksWrapper>
        </div>
      </MediaGridExtend>
    </FlowList>
  </ul>
)

const TabContent2 = () => (
  <>
    <MediaGrid className={Utils['Mt-16']}>
      <FlowImg
        src={`${assets}img/campaign/android-discount/step-shop.png`}
        alt=""
        width={280}
        height={180}
      />
      <div>
        <ButtonRegular
          as="a"
          href={'/shop/?l-id=campaign_android-discount_shop'}
        >
          お近くのショップを探す
        </ButtonRegular>
      </div>
    </MediaGrid>
    <ul>
      <FlowList className={Utils['Mt-16']}>
        <MediaGrid>
          <FlowImg
            src={`${assets}img/campaign/android-discount/step-document.png`}
            alt=""
            width={280}
            height={180}
          />
          <div>
            <Heading level="4" className="title">
              お申し込み・お支払いに必要なものを準備する
            </Heading>
            <ListDisc
              className={Utils['Mt-16']}
              text={[
                {
                  text: (
                    <LinkIconAfter
                      as="a"
                      href="/guide/verify/?l-id=campaign_android-discount_guide_verify_shop"
                    >
                      本人確認書類<IconChevronRight></IconChevronRight>
                    </LinkIconAfter>
                  ),
                },
                {
                  text: (
                    <>
                      楽天会員ID、パスワード
                      <br />
                      <TxtEmp2Cap>
                        ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                      </TxtEmp2Cap>
                    </>
                  ),
                },
                {
                  text: (
                    <LinkIconAfter
                      as="a"
                      href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                      target="_blank"
                    >
                      楽天会員情報を確認・変更する
                      <IconChevronRight></IconChevronRight>
                    </LinkIconAfter>
                  ),
                },
                {
                  text: (
                    <LinkIconAfter
                      as="a"
                      href="/guide/mnp/?l-id=campaign_android-discount_guide_mnp_shop"
                    >
                      ご契約者名義のMNP予約番号（他社から乗り換えの場合）
                      <IconChevronRight></IconChevronRight>
                    </LinkIconAfter>
                  ),
                },
                {
                  text: (
                    <LinkIconAfter
                      as="a"
                      href="/guide/payment/?l-id=campaign_android-discount_guide_payment_shop"
                    >
                      クレジットカード、銀行口座情報
                      <IconChevronRight></IconChevronRight>
                    </LinkIconAfter>
                  ),
                },
              ]}
            />
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
              <LinkNormal href="/faq/detail/00001238/?l-id=campaign_android-discount_faq_detail_00001238_shop">
                こちらのご案内ページ
              </LinkNormal>
              を必ず事前にご確認ください。
              <br />
              ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
              <LinkNormal href="/flow/for-minors/?l-id=campaign_android-discount_flow_for-minors_shop">
                こちら
              </LinkNormal>
              をご確認ください。
              <br />
              ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
              <LinkNormal href="/guide/mnp/?l-id=campaign_android-discount_guide_mnp_shop#career">
                こちら
              </LinkNormal>
              からご確認ください。
              <br />
              ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、MNP有効期間内にご来店ください。
            </TxtCap>
          </div>
        </MediaGrid>
      </FlowList>
      <FlowList>
        <MediaGridExtend>
          <FlowImg
            src={`${assets}img/campaign/android-discount/step-product-240522.png`}
            alt=""
            width={405}
            height={180}
          />
          <div>
            <Heading level="4" className="title">
              楽天モバイルのお申し込みと製品を購入する
            </Heading>
            <p className={Utils['Mt-16']}>
              ショップにて、楽天モバイルのお申し込みと製品を購入してください。
            </p>
            <p className={Utils['Mt-8']}>
              <TxtEmp01>【キャンペーン期間】</TxtEmp01>
              <br className={Utils['Show-oox']} />
              2024年2月16日（金）09:00～終了日未定
            </p>
          </div>
        </MediaGridExtend>
      </FlowList>
    </ul>
  </>
)

const CampaignAndroidDiscount: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '楽天モバイルお申し込み＆対象製品ご購入で最大26,930円値引き！'
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
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
    item: [{ text: '対象製品限定', isEmp: false, isBold: true }],
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルお申し込み＆対象製品（Xperia 10 V、AQUOS sense8、AQUOS wish3、OPPO Reno9 A）ご購入で最大26,930円値引き！2回線目以降も対象です。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <LabelListBox>
            <LabelList {...labelArgs} />
          </LabelListBox>
        </SystemContainer>
        <Kv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/android-discount/kv-sp-240522.png`}
                width="750"
                height="660"
              />
              <img
                src={`${assets}img/campaign/android-discount/kv-pc-240522.png`}
                width="2000"
                height="300"
                alt="楽天モバイルお申し込み＆対象製品（Xperia 10 V、AQUOS sense8、AQUOS wish3、OPPO Reno9 A）ご購入で最大26,930円値引き！"
              />
            </picture>
          </h1>
        </Kv>
        <SystemContainer>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※「Rakuten最強プラン（データタイプ）」は対象外です。
            <br />
            ※不正利用、不正転売などの目的で本キャンペーンを適用、またはそのおそれがあると当社がみなした場合はお申し込みをキャンセルさせていただきます。
            <br />
            ※購入台数制限、その他条件あり。詳細は
            <LinkNormal
              href="#campaign-rule2178"
              onClick={e => anchorCallback(e, 'campaign-rule2178')}
            >
              キャンペーンルール
            </LinkNormal>
            をご確認ください。
            <br />
            <TxtEmp02>
              ※2024年5月22日08:59をもって、「【Android対象製品限定】特価キャンペーン」からGalaxy
              A23 5Gが対象外になりました。
            </TxtEmp02>
          </TxtCap>
          <TxtEmp01
            as="p"
            className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
          >
            【キャンペーン期間】
          </TxtEmp01>
          <p className={Utils['Align-center']}>
            <TxtEmp01>Web：</TxtEmp01>2024年2月16日（金）09:00～終了日未定
            <br />
            <TxtEmp01>ショップ：</TxtEmp01>2024年2月16日（金）開店～終了日未定
            <br />
          </p>
          <AnchorArea className={Utils['Mt-24']}>
            <li>
              <LinkIconBefore
                href="#conditions"
                onClick={e => anchorCallback(e, 'conditions')}
              >
                <IconArrowDown />
                キャンペーンの達成条件
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#products"
                onClick={e => anchorCallback(e, 'products')}
              >
                <IconArrowDown />
                キャンペーン対象製品
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#flow"
                onClick={e => anchorCallback(e, 'flow')}
              >
                <IconArrowDown />
                キャンペーンの流れ
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#campaign-rule2178"
                onClick={e => anchorCallback(e, 'campaign-rule2178')}
              >
                <IconArrowDown />
                キャンペーンルール
              </LinkIconBefore>
            </li>
          </AnchorArea>
          <Heading
            id="conditions"
            level="2"
            className={`${Utils['Mt-32']} ${Utils['Mt-pc-48']} ${Utils['Align-center']}`}
          >
            キャンペーンの達成条件
          </Heading>
          <p className={Utils['Mt-24']}>
            本キャンペーンは、<TxtEmp02>その他キャンペーンと併用不可</TxtEmp02>
            となります。詳細は
            <LinkNormal
              href="#campaign-rule2178"
              onClick={e => anchorCallback(e, 'campaign-rule2178')}
            >
              キャンペーンルール
            </LinkNormal>
            をご確認ください。
          </p>
          <section className={Utils['Mt-16']}>
            <CampaignList>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/android-discount/icon-condition-1.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    楽天モバイルお申し込み
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <p>
                    2回線目以降も対象
                    <br />
                    Web・ショップどちらでも対象
                  </p>
                </CampaignListBody>
              </li>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/android-discount/icon-condition-2.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    対象製品を購入
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <p>対象製品の中から1製品のみ値引き適用</p>
                </CampaignListBody>
              </li>
            </CampaignList>
          </section>
        </SystemContainer>
        <GrayBox className={Utils['Mt-64']}>
          <SystemContainer>
            <Heading
              id="products"
              level="2"
              className={`${Utils['Mt-56']} ${Utils['Align-center']}`}
            >
              キャンペーン対象製品
            </Heading>
            <CampaignProducts className={Utils['Mt-24']}>
              <CampaignProductsInner>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/android-discount/xperia-10-v-sp.png`}
                    width="103"
                    height="170"
                  />
                  <img
                    srcSet={`${assets}img/campaign/android-discount/xperia-10-v-pc.png`}
                    width="228"
                    height="216"
                    alt="Xperia 10 V"
                  />
                </picture>
                <CampaignProductsDetail>
                  <CampaignProductsTitle>
                    <FontRakutenSans>Xperia 10 V</FontRakutenSans>
                  </CampaignProductsTitle>
                  <CampaignProductsPriceContent>
                    <TxtEmp01 as="p">製品価格</TxtEmp01>
                    <p>
                      <CampaignProductsDiscount>
                        59,290
                      </CampaignProductsDiscount>
                      <TxtSize size="m">円</TxtSize>
                    </p>
                  </CampaignProductsPriceContent>
                  <CampaignProductsPriceContent>
                    <TxtEmp01 as="p">プランセット値引き</TxtEmp01>
                    <TxtEmp01 as="p">
                      <CampaignProductsDiscount>
                        -26,930
                      </CampaignProductsDiscount>
                      <TxtSize size="m">円</TxtSize>
                    </TxtEmp01>
                  </CampaignProductsPriceContent>
                  <Divider className={`${Utils['Mt-8']} ${Utils['Mb-8']}`} />
                  <CampaignProductsPriceContent>
                    <TxtEmp02 as="p">値引き後価格</TxtEmp02>
                    <TxtEmp02 as="p">
                      <CampaignProductsDiscountPrice>
                        32,360
                      </CampaignProductsDiscountPrice>
                      <TxtSize size="m">円</TxtSize>
                    </TxtEmp02>
                  </CampaignProductsPriceContent>
                  <BtnsWrapper className={Utils['Mt-16']}>
                    <ButtonRegular
                      as="a"
                      href={`/product/smartphone/xperia-10m5/?l-id=campaign_android-discount_product_smartphone_xperia-10m5`}
                    >
                      詳細を見る
                    </ButtonRegular>
                    <ButtonPrimary
                      as="a"
                      href={`https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600645&selectAvailable=true`}
                      data-ratid="campaign_android-discount_xperia-5m5_order-button_bss"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      購入する
                    </ButtonPrimary>
                  </BtnsWrapper>
                </CampaignProductsDetail>
              </CampaignProductsInner>
            </CampaignProducts>
            <CampaignProductsMiniWrapper
              className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']}`}
            >
              <CampaignProductsMini>
                <CampaignProductsMiniTitle>
                  <FontRakutenSans>AQUOS sense8</FontRakutenSans>
                </CampaignProductsMiniTitle>
                <CampaignProductsMiniInner>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/android-discount/apuos-sense8-sp.png`}
                      width="122"
                      height="170"
                    />
                    <img
                      srcSet={`${assets}img/campaign/android-discount/apuos-sense8-pc.png`}
                      width="108"
                      height="135"
                      alt="AQUOS sense8"
                    />
                  </picture>
                  <CampaignProductsMiniDetail>
                    <CampaignProductsMiniPriceContent>
                      <TxtEmp01 as="p">製品価格</TxtEmp01>
                      <p>
                        <CampaignProductsMiniPrice>
                          63,800
                        </CampaignProductsMiniPrice>
                        <TxtSize size="m">円</TxtSize>
                      </p>
                    </CampaignProductsMiniPriceContent>
                    <CampaignProductsMiniPriceContentRow
                      className={`${Utils['Mb-8']}`}
                    >
                      <TxtEmp01 as="p">プランセット値引き</TxtEmp01>
                      <TxtEmp01 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscount>
                          -20,000
                        </CampaignProductsMiniDiscount>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp01>
                    </CampaignProductsMiniPriceContentRow>
                    <Divider className={`${Utils['Mt-8']} ${Utils['Mb-8']}`} />
                    <CampaignProductsMiniPriceContentRow>
                      <TxtEmp02 as="p">値引き後価格</TxtEmp02>
                      <TxtEmp02 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscountPrice>
                          43,800
                        </CampaignProductsMiniDiscountPrice>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp02>
                    </CampaignProductsMiniPriceContentRow>
                  </CampaignProductsMiniDetail>
                </CampaignProductsMiniInner>
                <BtnsWrapper className={Utils['Mt-16']}>
                  <ButtonRegular
                    as="a"
                    href={`/product/smartphone/aquos-sense8/?l-id=campaign_android-discount_product_smartphone_aquos-sense8`}
                  >
                    詳細を見る
                  </ButtonRegular>
                  <ButtonPrimary
                    as="a"
                    href={`https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600879&selectAvailable=true`}
                    data-ratid="campaign_android-discount_aquos-sense8_order-button_bss"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    購入する
                  </ButtonPrimary>
                </BtnsWrapper>
              </CampaignProductsMini>

              <CampaignProductsMini>
                <CampaignProductsMiniTitle>
                  <FontRakutenSans>AQUOS wish3</FontRakutenSans>
                </CampaignProductsMiniTitle>
                <CampaignProductsMiniInner>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/android-discount/apuos-wish3-sp.png`}
                      width="104"
                      height="170"
                    />
                    <img
                      srcSet={`${assets}img/campaign/android-discount/apuos-wish3-pc.png`}
                      width="98"
                      height="139"
                      alt="AQUOS wish3"
                    />
                  </picture>
                  <CampaignProductsMiniDetail>
                    <CampaignProductsMiniPriceContent>
                      <TxtEmp01 as="p">製品価格</TxtEmp01>
                      <p>
                        <CampaignProductsMiniPrice>
                          29,700
                        </CampaignProductsMiniPrice>
                        <TxtSize size="m">円</TxtSize>
                      </p>
                    </CampaignProductsMiniPriceContent>
                    <CampaignProductsMiniPriceContentRow
                      className={`${Utils['Mb-8']}`}
                    >
                      <TxtEmp01 as="p">プランセット値引き</TxtEmp01>
                      <TxtEmp01 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscount>
                          -20,000
                        </CampaignProductsMiniDiscount>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp01>
                    </CampaignProductsMiniPriceContentRow>
                    <Divider className={`${Utils['Mt-8']} ${Utils['Mb-8']}`} />
                    <CampaignProductsMiniPriceContentRow>
                      <TxtEmp02 as="p">値引き後価格</TxtEmp02>
                      <TxtEmp02 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscountPrice>
                          9,700
                        </CampaignProductsMiniDiscountPrice>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp02>
                    </CampaignProductsMiniPriceContentRow>
                  </CampaignProductsMiniDetail>
                </CampaignProductsMiniInner>
                <BtnsWrapper className={Utils['Mt-16']}>
                  <ButtonRegular
                    as="a"
                    href={`/product/smartphone/aquos-wish3/?l-id=campaign_android-discount_product_smartphone_aquos-wish3`}
                  >
                    詳細を見る
                  </ButtonRegular>
                  <ButtonPrimary
                    as="a"
                    href={`https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600659&selectAvailable=true`}
                    data-ratid="campaign_android-discount_aquos-wish3_order-button_bss"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    購入する
                  </ButtonPrimary>
                </BtnsWrapper>
              </CampaignProductsMini>

              <CampaignProductsMini>
                <CampaignProductsMiniTitle>
                  <FontRakutenSans>OPPO Reno9 A</FontRakutenSans>
                </CampaignProductsMiniTitle>
                <CampaignProductsMiniInner>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/campaign/android-discount/reno9-a-sp.png`}
                      width="104"
                      height="170"
                    />
                    <img
                      srcSet={`${assets}img/campaign/android-discount/reno9-a-pc.png`}
                      width="98"
                      height="139"
                      alt="Galaxy A23 5G"
                    />
                  </picture>
                  <CampaignProductsMiniDetail>
                    <CampaignProductsMiniPriceContent>
                      <TxtEmp01 as="p">製品価格</TxtEmp01>
                      <p>
                        <CampaignProductsMiniPrice>
                          40,700
                        </CampaignProductsMiniPrice>
                        <TxtSize size="m">円</TxtSize>
                      </p>
                    </CampaignProductsMiniPriceContent>
                    <CampaignProductsMiniPriceContentRow
                      className={`${Utils['Mb-8']}`}
                    >
                      <TxtEmp01 as="p">プランセット値引き</TxtEmp01>
                      <TxtEmp01 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscount>
                          -20,000
                        </CampaignProductsMiniDiscount>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp01>
                    </CampaignProductsMiniPriceContentRow>
                    <Divider className={`${Utils['Mt-8']} ${Utils['Mb-8']}`} />
                    <CampaignProductsMiniPriceContentRow>
                      <TxtEmp02 as="p">値引き後価格</TxtEmp02>
                      <TxtEmp02 as="p" className={`${Utils['Align-right']}`}>
                        <CampaignProductsMiniDiscountPrice>
                          20,700
                        </CampaignProductsMiniDiscountPrice>
                        <TxtSize size="m">円</TxtSize>
                      </TxtEmp02>
                    </CampaignProductsMiniPriceContentRow>
                  </CampaignProductsMiniDetail>
                </CampaignProductsMiniInner>
                <BtnsWrapper className={Utils['Mt-16']}>
                  <ButtonRegular
                    as="a"
                    href={`/product/smartphone/reno9-a/?l-id=campaign_android-discount_product_smartphone_reno9-a`}
                  >
                    詳細を見る
                  </ButtonRegular>
                  <ButtonPrimary
                    as="a"
                    href={`https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600654&selectAvailable=true`}
                    data-ratid="campaign_android-discount_reno9-a_order-button_bss"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    購入する
                  </ButtonPrimary>
                </BtnsWrapper>
              </CampaignProductsMini>
            </CampaignProductsMiniWrapper>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <Heading
            id="flow"
            level="2"
            className={`${Utils['Mt-64']} ${Utils['Align-center']}`}
          >
            キャンペーンの流れ
          </Heading>
          <Tab
            className={Utils['Mt-24']}
            heading1={'Web'}
            heading2={'ショップ'}
            content1={<TabContent1 />}
            content2={<TabContent2 />}
          />
          <Heading
            id="faq"
            level="2"
            className={`${Utils['Mt-64']} ${Utils['Align-center']}`}
          >
            よくあるご質問
          </Heading>
          <AccordionList
            text={'キャンペーンが適用されているか、確認できますか'}
            isOpened={false}
            className={Utils['Mt-24']}
          >
            <p>
              Rakuten最強プランと一緒に対象製品を選択するとお申し込み画面で値引きされた金額が表示されます。
            </p>
          </AccordionList>
          <AccordionList
            text={'他のキャンペーンと併用可能ですか'}
            isOpened={false}
          >
            <p>全てのキャンペーンと併用ができません。</p>
          </AccordionList>
          <AccordionList
            text={
              'Rakuten最強プランと対象製品を同日に購入した場合キャンペーンは適用されますか'
            }
            isOpened={false}
          >
            <p>
              Rakuten最強プランと対象製品を同時に購入すると値引きが適用されます。同日であっても、Rakuten最強プランと対象製品を別々に購入の場合、値引きは適用されませんので、ご注意ください。
            </p>
          </AccordionList>
          <AccordionList text={'製品のみの購入は対象ですか'} isOpened={false}>
            <p>
              製品のみの購入では適用されません。回線と一緒にご購入いただいた場合対象となります。
            </p>
          </AccordionList>
          <AccordionList
            text={'何回でもキャンペーンを利用できますか'}
            isOpened={false}
          >
            <p>
              おひとり様につき、対象製品のうちどれか1点までの適用となります。
            </p>
          </AccordionList>
          <BnrsWrapper className={Utils['Mt-64']}>
            <BannerHover href="/campaign/start-point/?l-id=campaign_android-discount_campaign_start-point">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-start-point-343-108-240522.png`}
                  width="343"
                  height="108"
                />
                <img
                  srcSet={`${assets}img/bnr/bnr-start-point-1032-160-240522.png`}
                  width="1032"
                  height="160"
                  alt="楽天モバイルへ初めてお申し込み＋他社から電話番号そのまま乗り換え＋対象製品ご購入で最大12,000ポイント還元！他社から乗り換え以外の方でも最大8,000ポイント還元中！"
                />
              </picture>
            </BannerHover>
          </BnrsWrapper>
          <BnrsWrapper className={Utils['Mt-24']}>
            <BannerHover href="/service/tradein/?l-id=campaign_android-discount_service_tradein">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-tradein-343-108-240419.png`}
                  width="343"
                  height="108"
                />
                <img
                  srcSet={`${assets}img/bnr/bnr-tradein-504-158-240419.png`}
                  width="504"
                  height="158"
                  alt="3/1より一部製品の下取り価格アップ中！"
                />
              </picture>
            </BannerHover>
            <BannerHover href="/campaign/hand-5g-wifi-pocket-1yen/?l-id=campaign_android-discount_campaign_hand-5g-wifi-pocket-1yen">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-wifi-pocket-1yen-343-108-231201.png`}
                  width="343"
                  height="108"
                />
                <img
                  srcSet={`${assets}img/bnr/bnr-wifi-pocket-1yen-504-158-231201.png`}
                  width="504"
                  height="158"
                  alt="2回線目以降でも対象！楽天モバイルへお申し込みでRakuten WiFi Pocket 2Cが1円で購入できるお得なキャンペーン"
                />
              </picture>
            </BannerHover>
          </BnrsWrapper>
        </SystemContainer>
        <SaikyoWrapper className={Utils['Mt-64']}>
          <CommonSaikyo />
        </SaikyoWrapper>
        <SystemContainer>
          <section className={Utils['Mt-64']}>
            <BnrCampaignRecommend />
          </section>
          <Heading level="2" id="campaign-rule2178" className={Utils['Mt-64']}>
            【Android対象製品限定】特価キャンペーン
          </Heading>
          <CampaignRule2178 />
        </SystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignAndroidDiscount
