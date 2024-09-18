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
import { SupportOther } from '@components/include/support/SupportOther'

const SupportIphoneSetting: NextPage = () => {
  const bigCategory = '製品（iPhone・Apple Watch）'
  const smallCategory = '製品保証サービス（iPhone・Apple Watch）'
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
      path: '/guide/iphone/applecare/',
      name: '故障紛失保証 with AppleCare Services（ご利用方法）',
    },
    {
      path: '/guide/iphone/applecare/repair/',
      name: '故障紛失保証 with AppleCare Services（修理のご利用方法）',
    },
    {
      path: '/guide/iphone/applecare/replacement/',
      name: '故障紛失保証 with AppleCare Services（交換のご利用方法）',
    },
    {
      path: '/guide/iphone/applecare-icloud/',
      name: '故障紛失保証 with AppleCare Services & iCloud+（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/iphone/applecare-icloud/repair/',
      name: '故障紛失保証 with AppleCare Services & iCloud+（修理のご利用方法）',
    },
    {
      path: '/guide/iphone/applecare-icloud/replacement/',
      name: '故障紛失保証 with AppleCare Services & iCloud+（交換のご利用方法）',
    },
    {
      path: '/guide/iphone/applecare-icloud/icloud/',
      name: '故障紛失保証 with AppleCare Services & iCloud+（iCloud+ 50GBストレージ付き」のご利用方法）',
    },
    {
      path: '/guide/applewatch-care/',
      name: 'あんしん保証with AppleCare Services for Apple Watch（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/applewatch-care/repair/',
      name: 'あんしん保証with AppleCare Services for Apple Watch（修理のご利用方法）',
    },
    {
      path: '/guide/applewatch-care/replacement/',
      name: 'あんしん保証with AppleCare Services for Apple Watch（交換のご利用方法）',
    },
    {
      path: '/guide/replacement-warranty-sim/application/',
      name: '持ち込みスマホあんしん保証（お申し込み方法）',
    },
    {
      path: '/guide/replacement-warranty-sim/',
      name: '持ち込みスマホあんしん保証（ご利用方法）',
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
            <SupportHead title={`${titleCategory}`} />

            <SmallCategoryFaq
              className={Utils['Mt-24']}
              arr={linkListContent}
              isMovie={true}
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

export default SupportIphoneSetting
