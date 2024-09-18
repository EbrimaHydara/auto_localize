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

const SupportLinkVoice: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = '通話サービス'
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
      path: 'https://service.link.link/guide/call/voicecall_number.html',
      name: '音声通話をする（電話番号を直接入力する）',
      ratid: 'support_link_guide_call_voicecall_number',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/voicecall_history.html',
      name: '音声通話をする（通話履歴または登録済みの連絡先から相手を選択する）',
      ratid: 'support_link_guide_call_voicecall_history',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/screen.html',
      name: '着信・通話中の画面の見方',
      ratid: 'support_link_guide_call_screen',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/fee.html',
      name: '通話料金が発生する可能性がある場合の確認方法',
      ratid: 'support_link_guide_call_fee',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/website_android.html',
      name: 'Webサイトに記載されている電話番号に発信する（Android版）',
      ratid: 'support_link_guide_call_website_android',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/website_ios.html',
      name: 'Webサイトに記載されている電話番号に発信する（iOS版）',
      ratid: 'support_link_guide_call_website_ios',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/voice_message_free.html',
      name: '留守番電話を再生する(無料）',
      ratid: 'support_link_guide_call_voice_message',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/voice_message_paid.html',
      name: '留守番電話を設定・再生する（有料）',
      ratid: 'support_link_guide_call_voice_message_paid',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/call/video.html',
      name: 'ビデオ通話をする（Android版のみ）',
      ratid: 'support_link_guide_call_video',
      target: '_blank',
      isIconNewTabLine: true,
    },
  ]

  // 動画リスト
  const youtubeContent: FaqMovieList[] = [
    {
      id: 'WwmYQIYyShA',
      title: '電話の使い方',
      description: '「Rakuten Link」アプリを使って電話をかけよう',
      time: '3:15',
      isYoutube: true,
    },
    {
      id: 'bTEwbwbefPM',
      title: 'Rakuten Link アプリ 対策講座',
      description: '有料通話になるケースを確認しよう',
      time: '5:44',
      isYoutube: true,
    },
    {
      id: 'DoXUx90rgBg',
      title: 'Rakuten Link 留守番電話の使い方',
      description: '「Rakuten Link」アプリの留守番電話の使い方をご紹介',
      time: '5:40',
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

export default SupportLinkVoice
