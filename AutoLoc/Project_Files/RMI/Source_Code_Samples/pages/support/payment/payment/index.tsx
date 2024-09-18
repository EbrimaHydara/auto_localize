import type { NextPage } from 'next'
import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { SupportWrap } from '@components/category/Support'
import {
  LinkListFaqItem,
  relatedCategories,
} from '@components/include/support/supportData'
import { SupportHead } from '@components/include/support/SupportHead'
import { SmallCategoryFaq } from '@components/include/support/SmallCategoryFaq'
import { FrequentlyAskedFaq } from '@components/include/support/FrequentlyAskedFaq'
import { SupportOther } from '@components/include/support/SupportOther'

const SupportPaymentPayment: NextPage = () => {
  const bigCategory = '請求・お支払い方法'
  const smallCategory = '支払い方法の確認・変更'
  const titleCategory = smallCategory
  const pagetitle = `${titleCategory}に関するサポート`
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
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
      text: `${titleCategory}に関するサポート`,
      url: '',
    },
  ]

  // ○○に関するサポート下に表示するリスト
  const linkListContent: LinkListFaqItem[] = [
    {
      path: '/guide/payment/',
      name: 'お支払い方法',
    },
    {
      path: '/guide/payment/point/',
      name: 'お支払い方法（楽天ポイント利用）',
    },
    {
      path: '/guide/point-payment/',
      name: '楽天ポイント利用の設定方法',
    },
    {
      path: '/guide/point/',
      name: '製品や月々の支払いに使える 楽天ポイント',
    },
    {
      path: '/guide/payment/autopay/',
      name: 'お支払い方法（口座振替）',
    },
    {
      path: '/guide/payment/card/',
      name: 'クレジットカード・デビットカード',
    },
    {
      path: '/guide/payment/change/',
      name: 'お支払い方法の確認・変更方法',
      l_id: '?l-id=support_category_guide_payment_change',
    },
    {
      path: '/guide/payment/daibiki/',
      name: 'お支払い方法（代金引換）',
    },
    {
      path: '/guide/payment/3ds/',
      name: '本人認証サービス（3Dセキュア）',
    },
  ]

  const relatedCategory = relatedCategories.find(
    data => data.bigCategory === bigCategory,
  )?.list

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description={`${titleCategory}に関する知りたい・調べたい情報をお選びください。`}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SupportWrap>
          <SystemContainer>
            <SupportHead title={titleCategory} />

            <SmallCategoryFaq
              className={Utils['Mt-24']}
              arr={linkListContent}
            />

            <FrequentlyAskedFaq
              bigCategory={bigCategory}
              smallCategory={smallCategory}
            />
          </SystemContainer>

          <SupportOther
            bigCategory={bigCategory}
            relatedCategory={relatedCategory}
          />
        </SupportWrap>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default SupportPaymentPayment
