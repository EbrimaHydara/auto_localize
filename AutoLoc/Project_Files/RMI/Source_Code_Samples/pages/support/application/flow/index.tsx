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

const SupportApplicationFlow: NextPage = () => {
  const bigCategory = '申し込みからお受け取りまで'
  const smallCategory = 'お申し込み方法'
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
      path: '/guide/procedure/',
      name: 'はじめてでも安心！お申し込みガイド',
    },
    {
      path: '/guide/flow/application/',
      name: 'Rakuten最強プラン お申し込み方法',
    },
    {
      path: '/guide/flow/',
      name: '楽天モバイルのプラン変更方法',
    },
    {
      path: '/guide/flow/application-detail/',
      name: 'Rakuten最強プラン お申し込み方法（お客様情報入力）',
    },
    {
      path: '/guide/flow/application/data-type/',
      name: 'Rakuten最強プラン（データタイプ）お申し込み方法',
    },
    {
      path: '/guide/flow/application/data-type/for-minors/',
      name: 'Rakuten最強プラン（データタイプ）のお申し込み方法（未成年のお客様）',
    },
    {
      path: '/guide/flow/application/group/?l-id=support_category_guide',
      name: '楽天グループサービスアプリ経由でのお申し込み方法（Rakuten最強プラン）',
    },
    {
      path: '/guide/flow/application/apple-watch-family-sharing/',
      name: 'Apple Watch ファミリー共有 お申し込み方法',
    },
    {
      path: '/guide/application-support/',
      name: 'お申し込みの電話サポート',
    },
    {
      path: '/guide/select-number/',
      name: '選べる電話番号サービス（お申し込み方法）',
    },
    {
      path: '/guide/kids-ke-tai/',
      name: '楽天モバイルならキッズ携帯や学生のスマホ利用にもあんしん',
    },
    {
      path: '/guide/kidsjunior/',
      name: '子どもスマホ利用あんしんガイド',
    },
    {
      path: '/guide/replacement-program/',
      name: '楽天モバイル買い替え超トクプログラム各種お手続き方法',
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

export default SupportApplicationFlow
