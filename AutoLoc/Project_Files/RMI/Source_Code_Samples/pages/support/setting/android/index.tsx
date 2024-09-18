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
  // relatedCategories,
} from '@components/include/support/supportData'
import { SupportHead } from '@components/include/support/SupportHead'
import { SmallCategoryFaq } from '@components/include/support/SmallCategoryFaq'
import { SupportMovie } from '@components/include/support/SupportMovie'
import { FrequentlyAskedFaq } from '@components/include/support/FrequentlyAskedFaq'
import { SupportOther } from '@components/include/support/SupportOther'
// import { SupportOther } from '@components/include/support/SupportOther'

const SupportSettingAndroid: NextPage = () => {
  const bigCategory = 'ご利用開始までの設定'
  const smallCategory = 'Android製品の設定手順'
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
      path: '/guide/setting/',
      name: '楽天モバイルで購入した各種製品の初期設定',
    },
    {
      path: '/guide/opening/?l-id=support_category_guide',
      name: '楽天モバイル（楽天回線）の開通手順',
    },
    {
      path: '/guide/mnp/flow/',
      name: 'MNP開通手続き方法',
    },
    {
      path: '/guide/sim-setting-ng/',
      name: 'SIMカードをスマートフォンにセットしても開通しない場合',
    },
    {
      path: '/guide/data-migration/',
      name: 'データ移行・バックアップ',
    },
    {
      path: '/guide/setting/data-type-esim/',
      name: 'Rakuten最強プラン（データタイプ）eSIMの開通手続き方法',
    },
    {
      path: '/guide/setting/data-type-sim/',
      name: 'Rakuten最強プラン（データタイプ）SIMカードの開通手続き方法',
    },
    {
      path: '/guide/trouble-check/',
      name: 'トラブル解決ナビ',
    },
    {
      path: '/guide/osaifu-lock/',
      name: 'おサイフケータイ ロックの設定・解除方法',
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: '8h77',
      title: 'AndroidのデュアルSIM設定方法',
      description: 'Androidを2つのSIMで使ってみよう',
      isYoutube: false,
    },
    {
      id: '3PSqGK-IsE0',
      title: 'ホーム画面の基本操作',
      description: '知っておきたいホーム画面を動画で解説',
      time: '3:38',
      isYoutube: true,
    },
    {
      id: 'zu7gJ7vMEOk',
      title: 'スマホでよく使う基本操作',
      description: '基本的な操作や便利な機能を習得しよう',
      time: '4:55',
      isYoutube: true,
    },
    {
      id: 'rAhMX9lRfAo',
      title: 'Googleアカウント登録',
      description: 'アカウントの登録方法を習得しよう',
      time: '4:19',
      isYoutube: true,
    },
    {
      id: '4KHP8UUAa90',
      title: '音量・マナーモードの設定',
      description: '音量を変える方法とマナーモードを習得しよう',
      time: '5:43',
      isYoutube: true,
    },
    {
      id: 'S2FkSkwnos0',
      title: '画面設定・文字設定',
      description: 'スマホを自分好みに使いやすく設定しよう',
      time: '8:00',
      isYoutube: true,
    },
    {
      id: 'KPRmTnDnJek',
      title: 'AQUOS かんたんモードの使い方',
      description: 'AQUOSユーザー限定 かんたんモードを使ってみよう',
      time: '13:36',
      isYoutube: true,
    },
    {
      id: '46tk',
      title: 'Rakuten Hand',
      description: 'Rakuten Handの初期設定方法と手順をご紹介',
      isYoutube: false,
    },
    {
      id: 'nkn5',
      title: 'Rakuten BIG',
      description: 'Rakuten BIGの初期設定方法と手順をご紹介',
      isYoutube: false,
    },
    {
      id: 'kb9m',
      title: 'Rakuten Mini',
      description: 'Rakuten Miniの初期設定方法と手順をご紹介',
      isYoutube: false,
    },
    {
      id: 'vf2b',
      title: 'OPPO A5 2020',
      description: 'OPPO A5 2020の初期設定方法と手順をご紹介',
      isYoutube: false,
    },
    {
      id: 'gzc2',
      title: 'Galaxy A7',
      description: 'Galaxy A7の初期設定方法と手順をご紹介',
      isYoutube: false,
    },
    {
      id: '7c7p',
      title: 'AQUOS sense3 lite',
      description: 'AQUOS sense3 liteの初期設定方法と手順をご紹介',
      isYoutube: false,
    },
  ]

  // const relatedCategory = relatedCategories.find(
  //   data => data.bigCategory === bigCategory,
  // )?.list

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
              bigCategory={bigCategory}
              smallCategory={smallCategory}
            />
          </SystemContainer>

          <SupportOther />
        </SupportWrap>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default SupportSettingAndroid
