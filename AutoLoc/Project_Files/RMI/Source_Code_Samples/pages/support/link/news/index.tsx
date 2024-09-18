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

const SupportLinkNews: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = 'ニュース・ウォレット・ミッション'
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
      path: 'https://service.link.link/guide/news/screen.html',
      name: 'ニュース画面の見方',
      ratid: 'support_link_guide_news_screen',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/wallet/screen.html',
      name: 'ウォレット画面の見方',
      ratid: 'support_link_guide_wallet_screen',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/mission/screen.html',
      name: 'ミッション画面の見方',
      ratid: 'support_link_guide_mission_screen',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/mission/pointget.html',
      name: 'ミッションで楽天ポイントを獲得する',
      ratid: 'support_link_guide_mission_pointget',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/mission/official_account.html',
      name: 'ミッションのオフィシャルアカウントをフォローする',
      ratid: 'support_link_guide_mission_official_account',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/discovery/screen.html',
      name: '探す画面の見方',
      ratid: 'support_link_guide_discovery_screen',
      target: '_blank',
      isIconNewTabLine: true,
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: 'kT3PZO5fGJU',
      title: 'Rakuten Link ナビゲーションメニューの見方',
      description: (
        <>
          楽天ポイントが毎日貯まるミッションやニュースなどナビゲーションメニューの見方をご案内
          <br />
          ※チャプター「楽天ポイントが毎日貯まる“ミッション”」をご覧ください
        </>
      ),
      time: '2:39',
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

export default SupportLinkNews
