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

const SupportPlanInternalvoice: NextPage = () => {
  const bigCategory = 'プラン・サービス'
  const smallCategory = '通話/通信サービス（国内）'
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
      path: '/guide/standard-free-call/',
      name: '15分（標準）通話かけ放題（お申し込み方法・解約方法）',
      l_id: '?l-id=support_plan-internal-voice_guide_standard-free-call',
    },
    {
      path: 'https://service.link.link/guide/call/voice_message_paid.html',
      name: '留守番電話を設定・再生する（有料）',
      ratid: 'support_link_guide_call_voice_message_paid',
      target: '_blank',
    },
    {
      path: '/guide/caller-id/',
      name: '発信者番号非通知（ご利用方法）',
    },
    {
      path: '/guide/special-number-service/',
      name: '特番通話（ご利用方法）',
    },
    {
      path: '/guide/call-forwarding/',
      name: '着信転送（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/call-waiting/',
      name: '割込通話（お申し込み方法・ご利用方法）',
    },
    {
      path: '/guide/call-service-settings/',
      name: '通話サービスの追加・解約（一時停止）・設定方法',
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

export default SupportPlanInternalvoice
