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

const SupportOtherBusiness: NextPage = () => {
  const bigCategory = 'その他'
  const smallCategory = '法人'
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
      path: 'https://business.mobile.rakuten.co.jp/',
      name: '楽天モバイル法人プラン',
      l_id: '?scid=wi_rmb_pers_support',
      target: '_blank',
      isIconNewTabLine: true,
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

export default SupportOtherBusiness
