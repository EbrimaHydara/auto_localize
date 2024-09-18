import React from 'react'
import { assets } from '@components/utils/assets'
import styled from 'styled-components'
import { SystemContainer, SystemGrid } from '@components/layout/System'
// import { IconNewTabLine } from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import { HikariBreadcrumbsFoot } from '@components/atoms/HikariBreadcrumbsFoot'
import {
  GlobalFooterAside,
  GlobalFooterRelated,
  /*
  IconShop,
  IconProduct,
  IconAccessory,
  IconProgram,
  IconPayment,
  IconPlan,
  IconArea,
  IconSupport,
  IconService,
  IconQuestionnaire,
  IconShopguide,
  */
  IconShopV2,
  IconProductV2,
  IconAccessoryV2,
  IconProgramV2,
  IconPaymentV2,
  IconPlanV2,
  IconAreaV2,
  IconSupportV2,
  IconServiceV2,
  IconQuestionnaireV2,
  IconShopguideV2,
  //IconUsedPurchaseV2,
  GlobalFooterRelatedHeading,
  GlobalFooterRelatedText,
  GlobalFooterCopyrightSimple,
} from '@components/atoms/GlobalFooter'

import {
  GlobalFooterNav,
  GlobalFooterNavMain,
  GlobalFooterRGroup,
  GlobalFooterRGroupLink,
  GlobalFooterCopyright,
  IconNewTabLineCustom,
  // Footer,
  FooterCard,
  FooterMenu,
  FooterCardContent,
  FooterCardTxt,
  FooterCardItem,
  FooterCardArrow,
  // FooterCardSub,
  // FooterCardSubItem,
  // FooterCardSubTxt,
  // FooterLink,
  // FooterPageToTop,
} from '@components/atoms/HikariFooter'
import { LinkIconAfter, LinkNormal } from '@components/atoms/HikariLink'
import { IconNewTabLine } from '@components/icons'
import { HikariPopAskFooter } from '@components/include/hikari/PopAsk'
// import { Link as Anchor } from 'react-scroll'
import Utils from '@styles/Utils.module.scss'

const Footer = styled.footer`
  a {
    text-decoration: none;
  }
`

const shop = (
  <IconShopV2 key="RelatedShop">
    <a href="/shop/?l-id=footer_shop">
      <GlobalFooterRelatedHeading>ショップ</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        お近くの楽天モバイルショップ検索はこちらから
      </GlobalFooterRelatedText>
    </a>
  </IconShopV2>
)
const product = (
  <IconProductV2 key="RelatedProduct">
    <a href="/product/?l-id=footer_product">
      <GlobalFooterRelatedHeading>製品</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        楽天モバイル対応、5G対応スマートフォンはこちら
      </GlobalFooterRelatedText>
    </a>
  </IconProductV2>
)
const accessory = (
  <IconAccessoryV2 key="RelatedAccessory">
    <a href="/product/accessory/?l-id=footer_accessory">
      <GlobalFooterRelatedHeading>アクセサリー</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        スマートフォンと同時購入で送料無料
      </GlobalFooterRelatedText>
    </a>
  </IconAccessoryV2>
)
const program = (
  <IconProgramV2 key="RelatedProgram">
    <a href="/guide/supporter-program/?l-id=footer_guide_supporter2nd">
      <GlobalFooterRelatedHeading>
        無料サポータープログラム
      </GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        100GB 無料プランの詳細はこちら
      </GlobalFooterRelatedText>
    </a>
  </IconProgramV2>
)
const payment = (
  <IconPaymentV2 key="RelatedPayment">
    <a href="/guide/payment/?l-id=footer_payment">
      <GlobalFooterRelatedHeading>お支払い方法</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        お申し込み時にご利用いただけるお支払い方法
      </GlobalFooterRelatedText>
    </a>
  </IconPaymentV2>
)
const plan = (
  <IconPlanV2 key="RelatedPlan">
    <a href="/fee/saikyo-plan/?l-id=footer_fee_saikyo">
      <GlobalFooterRelatedHeading>料金プラン</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        Rakuten最強プランの詳細、お申し込みはこちらから
      </GlobalFooterRelatedText>
    </a>
  </IconPlanV2>
)
const area = (
  <IconAreaV2 key="RelatedArea">
    <a href="/area/?l-id=footer_area">
      <GlobalFooterRelatedHeading>通信・エリア</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        楽天モバイル対応サービスエリア（4G
        LTE、5G、海外ローミングエリア）はこちらから
      </GlobalFooterRelatedText>
    </a>
  </IconAreaV2>
)
const support = (
  <IconSupportV2 key="RelatedSupport">
    <a href="/support/?l-id=footer_support">
      <GlobalFooterRelatedHeading>お客様サポート</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        お申し込み、ご利用にあたっての疑問はここで解決
      </GlobalFooterRelatedText>
    </a>
  </IconSupportV2>
)
const service = (
  <IconServiceV2 key="RelatedService">
    <a href="/service/?l-id=footer_service">
      <GlobalFooterRelatedHeading>
        オプションサービス
      </GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        モバイル生活がさらに充実する、安心・便利な機能
      </GlobalFooterRelatedText>
    </a>
  </IconServiceV2>
)
const quesionnaire = (
  <IconQuestionnaireV2 key="RelatedQuesionnaire">
    <a href="/guide/supporter-program/?l-id=footer_guide_supporter2nd">
      <GlobalFooterRelatedHeading>
        アンケート・ポイント特典について
      </GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        無料サポータープログラム参加条件、特典の詳細
      </GlobalFooterRelatedText>
    </a>
  </IconQuestionnaireV2>
)
const shopguide = (
  <IconShopguideV2 key="RelatedShopguide">
    <a href="/shop/guide/?l-id=footer_shop_guide">
      <GlobalFooterRelatedHeading>ご来店の前に</GlobalFooterRelatedHeading>
      <GlobalFooterRelatedText>
        当日ご持参いただくものを、必ずご確認ください
      </GlobalFooterRelatedText>
    </a>
  </IconShopguideV2>
)

const outputElement = (key: string) => {
  let result: JSX.Element = <></>
  switch (key) {
    case 'shop':
      result = shop
      break
    case 'product':
      result = product
      break
    case 'accessory':
      result = accessory
      break
    case 'program':
      result = program
      break
    case 'payment':
      result = payment
      break
    case 'plan':
      result = plan
      break
    case 'area':
      result = area
      break
    case 'support':
      result = support
      break
    case 'service':
      result = service
      break
    case 'quesionnaire':
      result = quesionnaire
      break
    case 'shopguide':
      result = shopguide
      break
    default:
      break
  }
  return result
}

interface BreadcrumbsItem {
  url: string
  text: string
}
export interface GlobalFooterProps {
  relatedItems?: string[]
  copyrightSimple?: boolean
  breadcrumbsItem: BreadcrumbsItem[]
  children?: JSX.Element | JSX.Element[]
  className?: string
}
export const HikariFooter = (props: GlobalFooterProps) => {
  const { relatedItems, copyrightSimple, breadcrumbsItem, className } = props
  return (
    <>
      {copyrightSimple ? (
        <footer className={className}>
          <GlobalFooterNav isSimple={true}>
            <GlobalFooterCopyrightSimple>
              &copy; Rakuten Mobile, Inc.
            </GlobalFooterCopyrightSimple>
          </GlobalFooterNav>
        </footer>
      ) : (
        <Footer className={className} id="g-footer">
          {relatedItems && relatedItems.length ? (
            <GlobalFooterAside>
              <GlobalFooterRelated>
                <SystemContainer>
                  <Heading as="h2" level="3">
                    続けてこちらをチェック
                  </Heading>
                  <SystemGrid as="ul">
                    {relatedItems.map(elem => outputElement(elem))}
                  </SystemGrid>
                </SystemContainer>
              </GlobalFooterRelated>
            </GlobalFooterAside>
          ) : (
            ''
          )}

          <FooterMenu>
            <h3 className={Utils['Align-center']}>もっと知りたい楽天ひかり</h3>
            <FooterCard>
              <FooterCardItem>
                <a
                  href="/hikari/fee/pricelist/?l-id=rhk_footer_fee_pricelist_01"
                  data-lid_parts="footer"
                  data-ratid="rhk_footer_fee_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <FooterCardContent>
                    <img
                      src={`${assets}img/hikari/common-v2/footer-simulation.png`}
                      alt=""
                    />
                    <FooterCardTxt>料金</FooterCardTxt>
                  </FooterCardContent>
                </a>
                <FooterCardArrow />
              </FooterCardItem>

              <FooterCardItem>
                <a
                  href="/hikari/internet/?l-id=rhk_footer_internet_01"
                  data-lid_parts="footer"
                  data-ratid="rhk_footer_hikari1yf_02"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <FooterCardContent>
                    <img
                      src={`${assets}img/hikari/common-v2/footer-speed.png`}
                      alt=""
                    />
                    <FooterCardTxt>
                      速さと安定の
                      <br className={Utils['Disp-sp']} />
                      IPv6通信
                    </FooterCardTxt>
                  </FooterCardContent>
                </a>
                <FooterCardArrow />
              </FooterCardItem>

              <FooterCardItem>
                <a
                  href="/hikari/flow/?l-id=rhk_footer_flow_01"
                  data-lid_parts="footer"
                  data-ratid="rhk_footer_flow_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <FooterCardContent>
                    <img
                      src={`${assets}img/hikari/common-v2/footer-flow.png`}
                      alt=""
                    />
                    <FooterCardTxt>
                      ご利用開始まで
                      <br className={Utils['Disp-sp']} />
                      の流れ
                    </FooterCardTxt>
                  </FooterCardContent>
                </a>
                <FooterCardArrow />
              </FooterCardItem>

              <FooterCardItem>
                <a
                  href="/hikari/support/?l-id=rhk_footer_support_01"
                  data-lid_parts="footer"
                  data-ratid="rhk_footer_support_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <FooterCardContent>
                    <img
                      src={`${assets}img/hikari/common-v2/footer-support.png`}
                      alt=""
                    />
                    <FooterCardTxt>お客様サポート</FooterCardTxt>
                  </FooterCardContent>
                </a>
                <FooterCardArrow />
              </FooterCardItem>
            </FooterCard>
          </FooterMenu>

          <SystemContainer>
            <HikariPopAskFooter />
          </SystemContainer>

          {breadcrumbsItem && breadcrumbsItem.length ? (
            <SystemContainer>
              <HikariBreadcrumbsFoot item={breadcrumbsItem} />
            </SystemContainer>
          ) : (
            ''
          )}

          <GlobalFooterNav>
            <GlobalFooterNavMain>
              <li>
                <LinkIconAfter
                  href="https://corp.mobile.rakuten.co.jp/"
                  target="_blank"
                  rel="noopener"
                >
                  会社概要
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
              <li>
                <LinkIconAfter
                  href="https://corp.mobile.rakuten.co.jp/guide/privacy/"
                  target="_blank"
                  rel="noopener"
                >
                  個人情報の取扱いについて
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
              <li>
                <LinkIconAfter href="/optout/" target="_blank" rel="noopener">
                  外部送信される情報の取り扱いについて
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
              <li>
                <LinkIconAfter
                  href="https://corp.mobile.rakuten.co.jp/guide/security/"
                  target="_blank"
                  rel="noopener"
                >
                  情報セキュリティポリシー
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
              <li>
                <LinkIconAfter
                  href="https://corp.mobile.rakuten.co.jp/guide/trademark/"
                  target="_blank"
                  rel="noopener"
                >
                  商標・登録商標について
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
              <li>
                <LinkIconAfter href="/hikari/terms/" rel="noopener">
                  利用規約・重要事項説明書
                </LinkIconAfter>
              </li>
              <li>
                <LinkIconAfter
                  href="https://corp.rakuten.co.jp/sustainability/human-rights/customer-harassment/"
                  target="_blank"
                  rel="noopener"
                >
                  楽天グループカスタマーハラスメント対応ポリシー
                </LinkIconAfter>
                <IconNewTabLineCustom />
              </li>
            </GlobalFooterNavMain>
            <GlobalFooterCopyright>
              &copy; Rakuten Mobile, Inc.
            </GlobalFooterCopyright>
          </GlobalFooterNav>

          <GlobalFooterRGroup>
            <GlobalFooterRGroupLink>
              <li>楽天グループ</li>
              <li>
                <LinkNormal
                  href="https://www.rakuten.co.jp/sitemap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サービス一覧
                </LinkNormal>
                <IconNewTabLine />
              </li>
              <li>
                <LinkNormal
                  href="https://www.rakuten.co.jp/sitemap/inquiry.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせ一覧
                </LinkNormal>
                <IconNewTabLine />
              </li>
              <li>
                <LinkNormal
                  href="https://corp.rakuten.co.jp/sustainability/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サステナビリティ
                </LinkNormal>
                <IconNewTabLine />
              </li>
            </GlobalFooterRGroupLink>
          </GlobalFooterRGroup>
        </Footer>
      )}
    </>
  )
}
