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

const SupportPlanService: NextPage = () => {
  const bigCategory = 'プラン・サービス'
  const smallCategory = 'オプションサービス'
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
      path: '/guide/change-options/',
      name: 'オプションサービスの確認・追加・解約方法',
    },
    {
      path: '/guide/standard-free-call/',
      name: '15分（標準）通話かけ放題（お申し込み方法・解約方法）',
    },
    {
      path: '/guide/iphone/applecare/',
      name: '故障紛失保証 with AppleCare Services（ご利用方法）',
    },
    {
      path: '/service/iphone/applecare-icloud/',
      name: '故障紛失保証 with AppleCare Services & iCloud+（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/applewatch-care/',
      name: 'あんしん保証with AppleCare Services for Apple Watch（ご利用方法）',
    },
    {
      path: '/guide/replacement-warranty-sim/application/',
      name: '持ち込みスマホあんしん保証（お申し込み方法）',
    },
    {
      path: '/guide/replacement-warranty-sim/',
      name: '持ち込みスマホあんしん保証（ご利用方法）',
    },
    {
      path: '/guide/replacement-warranty-plus/',
      name: 'スマホ交換保証プラス（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/service/repair-closed/',
      name: 'メーカー修理受付終了機種および終了予定機種一覧（スマホ交換保証プラス／持ち込みスマホあんしん保証）',
    },
    {
      path: '/guide/norton-mobile-security/',
      name: 'ノートン™ モバイル セキュリティ（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/i-filter/',
      name: 'あんしんコントロール by i-フィルター（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/remote-support-for-device-operation/',
      name: 'スマホ操作遠隔サポート（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/rakutenmobile-wifi/',
      name: '楽天モバイルWiFi by エコネクト（お申し込み方法・ご利用方法）',
    },
    {
      path: '/service/tradein/',
      name: 'スマホ下取りサービス（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/data-charge/',
      name: 'データチャージ（ご利用方法）',
    },
    {
      path: '/guide/number-share/',
      name: '[Apple Watch] 電話番号シェアサービス（ご利用方法）',
    },
    {
      path: '/guide/number-share/cancellation/',
      name: '[Apple Watch] 電話番号シェアサービス（解約方法）',
    },
    {
      path: '/guide/iphone-voice-mail/',
      name: 'iPhoneビジュアルボイスメールのご利用方法',
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

export default SupportPlanService
