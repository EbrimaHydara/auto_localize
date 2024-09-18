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

const SupportIphoneIntialsetting: NextPage = () => {
  const bigCategory = '製品（iPhone・Apple Watch）'
  const faqCategory = '製品（iPhone）'
  const smallCategory = '初期設定'
  const titleCategory = smallCategory
  const pagetitle = `${titleCategory}（iPhone・Apple Watch）に関するサポート`
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
      text: `${titleCategory}（iPhone・Apple Watch）に関するサポート`,
      url: '',
    },
  ]

  // ○○に関するサポート下に表示するリスト
  const linkListContent: LinkListFaqItem[] = [
    {
      path: '/guide/opening/?l-id=support_category_guide',
      name: '楽天モバイル（楽天回線）の開通手順',
    },
    {
      path: '/guide/setting/profile_delete/',
      name: 'お手持ちのiPhone・iPadで楽天回線を使用するためのAPN構成プロファイル削除方法',
    },
    {
      path: '/guide/iphone/quick-start/',
      name: 'iPhoneのクイックスタートのご利用方法',
    },
    {
      path: '/guide/iphone/icloud/',
      name: 'iPhoneのiCloudでのバックアップ作成と復元方法',
    },
    {
      path: '/guide/iphone/itunes/',
      name: 'iPhoneのiTunesでのバックアップ作成と復元方法',
    },
    {
      path: '/guide/iphone/faceid/',
      name: 'Face IDの設定方法',
    },
    {
      path: '/service/number-share/',
      name: '[Apple Watch]電話番号シェアサービス',
    },
    {
      path: '/guide/number-share/',
      name: '[Apple Watch]電話番号シェアサービス（ご利用方法）',
    },
    {
      path: '/guide/apple-watch-setting/',
      name: '[Apple Watch]電話番号シェアサービス ペアリング・初期設定方法',
    },
    {
      path: '/guide/setting/apple-watch-family-sharing/',
      name: 'Apple Watch ファミリー共有 ペアリング・初期設定方法',
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
        description={`${titleCategory}（iPhone・Apple Watch）に関する知りたい・調べたい情報をお選びください。`}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SupportWrap>
          <SystemContainer>
            <SupportHead title={`${titleCategory}（iPhone・Apple Watch）`} />

            <SmallCategoryFaq
              className={Utils['Mt-24']}
              arr={linkListContent}
            />

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

export default SupportIphoneIntialsetting
