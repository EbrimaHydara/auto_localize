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

const SupportLinkOther: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = 'その他'
  const titleCategory = `Rakuten Linkの${smallCategory}`
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
      path: 'https://service.link.link/guide/',
      name: 'Rakuten Linkの使い方',
      ratid: 'support_link_guide',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/version/check_update.html',
      name: 'アプリのバージョンを確認・アップデートする',
      ratid: 'support_link_guide_version_check_update',
      target: '_blank',
      isIconNewTabLine: true,
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: 'kT3PZO5fGJU',
      title: 'Rakuten Link ナビゲーションメニューの見方',
      description:
        '「Rakuten Link」アプリのナビゲーションメニューの見方をご紹介',
      time: '4:50',
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

export default SupportLinkOther