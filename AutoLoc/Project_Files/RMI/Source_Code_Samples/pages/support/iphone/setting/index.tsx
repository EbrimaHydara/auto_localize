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

const SupportIphoneSetting: NextPage = () => {
  const bigCategory = '製品（iPhone・Apple Watch）'
  const faqCategory = '製品（iPhone）'
  const smallCategory = '設定・操作・故障（iPhone・Apple Watch）'
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
      path: '/guide/iphone/setting/esim-upgrade/',
      name: 'iPhoneのeSIM クイック転送を使ったデータとSIMの移行方法',
    },
    {
      path: '/guide/iphone/setting/sim-esim/',
      name: 'iPhoneを使用したSIMカードからeSIMへのSIMタイプ変更方法',
    },
    {
      path: '/guide/iphone/find-my-iphone-off/',
      name: '「iPhoneを探す」をオフにする方法',
    },
    {
      path: '/guide/product-reset/',
      name: 'iPhoneの初期化（リセット）方法',
    },
    {
      path: '/guide/inquiry/?l-id=support_category_guide',
      name: 'メーカー別 問い合わせ一覧',
    },
    {
      path: '/guide/trouble-check/?l-id=support_category_guide',
      name: 'トラブル解決ナビ',
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: 'nmj5',
      title: 'iPhoneのデュアルSIM設定方法',
      description: 'iPhoneを2つのSIMで使ってみよう',
      isYoutube: false,
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

            {youtubeContent.length !== 0 && (
              <SupportMovie
                className={Utils['Mt-48']}
                arr={youtubeContent}
                isGuide={youtubeContent.some(item => item.isYoutube)}
              />
            )}

            <FrequentlyAskedFaq
              bigCategory={faqCategory}
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

export default SupportIphoneSetting
