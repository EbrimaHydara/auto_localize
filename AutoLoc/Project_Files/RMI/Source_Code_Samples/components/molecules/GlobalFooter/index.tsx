import React from 'react'
import styled from 'styled-components'
import { SystemContainer, SystemGrid } from '@components/layout/System'
import { IconNewTabLine } from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import { BreadcrumbsFoot } from '@components/atoms/BreadcrumbsFoot'
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
  GlobalFooterNav,
  GlobalFooterNavMain,
  GlobalFooterRGroup,
  GlobalFooterRGroupLink,
  GlobalFooterCopyright,
  GlobalFooterCopyrightSimple,
} from '@components/atoms/GlobalFooter'

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
  breadcrumbsItem?: BreadcrumbsItem[]
  children?: JSX.Element | JSX.Element[]
  className?: string
}
export const GlobalFooter = (props: GlobalFooterProps) => {
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
                  <Heading level="2">続けてこちらをチェック</Heading>
                  <SystemGrid as="ul">
                    {relatedItems.map(elem => outputElement(elem))}
                  </SystemGrid>
                </SystemContainer>
              </GlobalFooterRelated>
            </GlobalFooterAside>
          ) : (
            ''
          )}
          {breadcrumbsItem && breadcrumbsItem.length ? (
            <SystemContainer>
              <BreadcrumbsFoot item={breadcrumbsItem} />
            </SystemContainer>
          ) : (
            ''
          )}
          <GlobalFooterNav isSimple={false}>
            <GlobalFooterNavMain>
              <li>
                <a
                  href="https://corp.mobile.rakuten.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  会社概要
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://business.mobile.rakuten.co.jp/?scid=wi_rmb_pers_footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  法人のお客様
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://business.mobile.rakuten.co.jp/partner/?scid=wi_rmb_pers_footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  法人パートナープログラム
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://corp.mobile.rakuten.co.jp/guide/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  個人情報の取扱いについて
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://corp.mobile.rakuten.co.jp/guide/security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  情報セキュリティポリシー
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://corp.mobile.rakuten.co.jp/guide/trademark/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  商標・登録商標について
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a href="/secondhand-dealer/">古物営業法に基づく表示</a>
              </li>
              <li>
                <a href="/terms/">利用規約</a>
              </li>
              <li>
                <a href="/optout/">外部送信される情報の取り扱いについて</a>
              </li>
            </GlobalFooterNavMain>
            <GlobalFooterCopyright>
              &copy; Rakuten Mobile, Inc.
            </GlobalFooterCopyright>
          </GlobalFooterNav>
          <GlobalFooterRGroup>
            {props.children}
            <GlobalFooterRGroupLink>
              <li>楽天グループ</li>
              <li>
                <a
                  href="https://www.rakuten.co.jp/sitemap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サービス一覧
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://www.rakuten.co.jp/sitemap/inquiry.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせ一覧
                </a>
                <IconNewTabLine />
              </li>
              <li>
                <a
                  href="https://corp.rakuten.co.jp/sustainability/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サステナビリティ
                </a>
                <IconNewTabLine />
              </li>
            </GlobalFooterRGroupLink>
            {/* スクロール計測 */}
            <div
              data-ratid="scroll-00_logo"
              data-ratevent="appear"
              data-ratparam="all"
            ></div>
          </GlobalFooterRGroup>
        </Footer>
      )}
    </>
  )
}
