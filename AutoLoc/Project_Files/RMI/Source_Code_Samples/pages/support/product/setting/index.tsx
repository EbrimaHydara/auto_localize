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

const SupportProductSetting: NextPage = () => {
  const bigCategory = '製品（Android）'
  const smallCategory = '設定・操作・故障（Android）'
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
      path: '/guide/inquiry/',
      name: 'メーカー別 問い合わせ先一覧',
    },
    {
      path: '/guide/software/',
      name: 'ソフトウェアアップデート',
    },
    {
      path: '/guide/tethering/',
      name: 'テザリング（ご利用方法）',
    },
    {
      path: '/restriction/',
      name: 'ネットワーク利用制限携帯電話機の確認',
    },
    {
      path: '/guide/sar/',
      name: '製品の比吸収率（SAR）について',
    },
    {
      path: '/guide/trouble-check/',
      name: 'トラブル解決ナビ',
    },
    {
      path: '/guide/product-reset/',
      name: 'Android製品の初期化（リセット）方法',
    },
    {
      path: '/guide/product-safety/',
      name: 'スマートフォン・周辺機器などの使用に関するご注意',
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: '3PSqGK-IsE0',
      title: 'ホーム画面の基本操作',
      description: '知っておきたいホーム画面を動画で解説',
      time: '3:38',
      isYoutube: true,
      isProduct: true,
    },
    {
      id: 'zu7gJ7vMEOk',
      title: 'スマホでよく使う基本操作',
      description: '基本的な操作や便利な機能を習得しよう',
      time: '4:55',
      isYoutube: true,
      isProduct: true,
    },
    {
      id: 'PmZGOW1OeU4',
      title: 'アプリの追加方法',
      description: 'アプリってなに？動画で分かりやすく解説',
      time: '3:21',
      isYoutube: true,
    },
    {
      id: 'byPRQF3m2nw',
      title: 'Wi-Fiの接続方法',
      description: '今さら聞けないWi-Fiを動画で分かりやすく解説',
      time: '4:27',
      isYoutube: true,
    },
    {
      id: 'KmApGdyZp-U',
      title: 'スマホの安全利用① （公衆Wi-Fi）',
      description: '公衆Wi-Fiを安全に利用しよう',
      time: '4:42',
      isYoutube: true,
    },
    {
      id: 'vzLjHqddzj8',
      title: 'インターネット(Google Chrome) の利用方法',
      description: '「Google Chrome」の利用方法を習得しよう',
      time: '15:24',
      isYoutube: true,
    },
    {
      id: 'nI47sdBpLF8',
      title: 'YouTubeの使い方',
      description: '動画共有サイト、YouTubeの視聴方法を詳しく解説',
      time: '5:55',
      isYoutube: true,
    },
    {
      id: 'RhhMDYEEw5c',
      title: 'Googleマップ①（基本操作編）',
      description: '「Googleマップ」アプリの基本操作を習得しよう',
      time: '6:48',
      isYoutube: true,
    },
    {
      id: 'tKXdkv1530Q',
      title: 'Googleマップ②（スポット検索編）',
      description: '「Googleマップ 」アプリのスポット検索を習得しよう',
      time: '9:18',
      isYoutube: true,
    },
    {
      id: 'Vv2n9Fr5hQE',
      title: 'Googleマップ③（経路検索編）',
      description: '「Googleマップ」アプリの経路検索を習得しよう',
      time: '4:28',
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

export default SupportProductSetting
