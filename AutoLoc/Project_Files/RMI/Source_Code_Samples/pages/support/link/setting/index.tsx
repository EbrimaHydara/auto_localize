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
  FaqMovieList,
  LinkListFaqItem,
  relatedCategories,
} from '@components/include/support/supportData'
import { SupportHead } from '@components/include/support/SupportHead'
import { SmallCategoryFaq } from '@components/include/support/SmallCategoryFaq'
import { SupportMovie } from '@components/include/support/SupportMovie'
import { FrequentlyAskedFaq } from '@components/include/support/FrequentlyAskedFaq'
import { SupportOther } from '@components/include/support/SupportOther'

const SupportLinkSetting: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = '初期設定'
  const titleCategory = smallCategory
  const pagetitle = `${bigCategory}の${titleCategory}に関するサポート`
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
      text: `${bigCategory}の${titleCategory}に関するサポート`,
      url: '',
    },
  ]

  // ○○に関するサポート下に表示するリスト
  const linkListContent: LinkListFaqItem[] = [
    {
      path: 'https://service.link.link/guide/activation/android.html',
      name: 'Rakuten Linkの初期設定をする（Android版）',
      ratid: 'support_link_guide_activation_android',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/activation/ios.html',
      name: 'Rakuten Linkの初期設定をする（iOS版）',
      ratid: 'support_link_guide_activation_ios',
      target: '_blank',
      isIconNewTabLine: true,
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: 'csnq2AA6KbY',
      title: 'Rakuten Linkとは？',
      description: '通話アプリ「Rakuten Link」でできることをご紹介',
      time: '1:46',
      isYoutube: true,
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
        description={`${bigCategory}の${titleCategory}に関する知りたい・調べたい情報をお選びください。`}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SupportWrap>
          <SystemContainer>
            <SupportHead title={`${bigCategory}の${titleCategory}`} />

            <SmallCategoryFaq
              className={Utils['Mt-24']}
              arr={linkListContent}
              isMovie={true}
            />

            {youtubeContent.length !== 0 && (
              <SupportMovie
                className={Utils['Mt-48']}
                arr={youtubeContent}
                isGuide={youtubeContent.some(item => item.isYoutube)}
              />
            )}

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

export default SupportLinkSetting
