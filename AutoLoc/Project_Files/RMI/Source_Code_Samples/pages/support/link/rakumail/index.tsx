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

const SupportLinkRakumail: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = '楽メール'
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
      path: '/guide/rakumail/initial-setting/?l-id=support_category_guide/',
      name: '初期設定（楽メール）',
    },
    {
      path: '/guide/rakumail/setting/?l-id=support_category_guide/',
      name: '各種設定（楽メール）',
    },
    {
      path: '/guide/rakumail/function/?l-id=support_category_guide/',
      name: 'メール機能（楽メール）',
    },
    {
      path: '/guide/rakumail/send/?l-id=support_category_guide/',
      name: 'メールの作成／送信（楽メール）',
    },
    {
      path: '/guide/rakumail/folder/?l-id=support_category_guide/',
      name: 'フォルダーの作成／変更（楽メール）',
    },
    {
      path: '/guide/rakumail/filter/?l-id=support_category_guide/',
      name: '受信リスト／拒否リストの設定・変更・削除（楽メール）',
    },
    {
      path: '/guide/rakumail/filter_2/?l-id=support_category_guide/',
      name: 'その他のフィルター設定（楽メール）',
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
        description={`Rakuten Linkの通話サービスに関する知りたい・調べたい情報をお選びください。`}
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

export default SupportLinkRakumail
