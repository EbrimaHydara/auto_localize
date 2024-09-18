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

const SupportContractdetailConfirmation: NextPage = () => {
  const bigCategory = '契約内容・お手続き'
  const smallCategory = '契約内容の確認・変更'
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
      path: '/guide/users-information/',
      name: '契約者情報・契約内容の確認・変更',
    },
    {
      path: '/guide/contractor-name-change/',
      name: '契約者情報の変更手続き（改姓・改名）',
    },
    {
      path: '/guide/contract-transfer/',
      name: '契約者変更手続き（譲渡）',
    },
    {
      path: '/guide/contract-succession/',
      name: 'ご契約者の逝去による契約者変更手続き（承継）',
    },
    {
      path: '/guide/change-email/',
      name: '契約時に登録したメールアドレスの確認・変更方法',
    },
    {
      path: '/guide/change-address/',
      name: '契約住所の確認・変更方法',
    },
    {
      path: '/guide/change-billing-address/',
      name: '請求先住所の確認・変更方法',
    },
    {
      path: '/guide/rakuten-mobile-id/',
      name: '楽天モバイルIDの確認方法',
    },
    {
      path: '/guide/data-type-change/',
      name: 'Rakuten最強プラン（データタイプ）から通常タイプへの変更について',
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

export default SupportContractdetailConfirmation
