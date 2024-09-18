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

const SupportApplicationMnp: NextPage = () => {
  const bigCategory = '申し込みからお受け取りまで'
  const smallCategory = '他社からの乗り換え（MNP）'
  const titleCategory = smallCategory
  const pagetitle = titleCategory
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
      text: pagetitle,
      url: '',
    },
  ]

  // ○○に関するサポート下に表示するリスト
  const linkListContent: LinkListFaqItem[] = [
    {
      path: '/guide/mnp/',
      name: '他社から電話番号そのままで乗り換え（MNP）',
    },
    {
      path: '/guide/mnp/out-of-stock/',
      name: 'MNP（他社からの電話番号乗り換え）でご購入時の注意事項',
    },
    {
      path: '/guide/mnp/procedure/',
      name: 'Rakuten最強プランへの乗り換え手順',
    },
    {
      path: '/guide/mnp/fast-convert/',
      name: 'MNPワンストップとは？',
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

export default SupportApplicationMnp
