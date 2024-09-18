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

const SupportLinkManual: NextPage = () => {
  const bigCategory = 'Rakuten Link'
  const smallCategory = '操作・設定・不具合'
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
      path: 'https://service.link.link/guide/contact/add.html',
      name: '連絡先を追加する',
      ratid: 'support_link_guide_contact_add',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/contact/delete.html',
      name: '連絡先を削除する',
      ratid: 'support_link_guide_contact_delete',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/navigationmenu/edit.html',
      name: 'ナビゲーションメニューを編集する',
      ratid: 'support_link_guide_navigationmenu_edit',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/setting/account.html',
      name: 'アカウント設定を確認・編集する',
      ratid: 'support_link_guide_setting_account',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/setting/notifications.html',
      name: '通知設定を確認・編集する',
      ratid: 'support_link_guide_setting_notifications',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/qrcode/read_qrcode.html',
      name: 'QRコードを読み取る・表示する',
      ratid: 'support_link_guide_qrcode_read_qrcode',
      target: '_blank',
      isIconNewTabLine: true,
    },
    {
      path: 'https://service.link.link/guide/feedback/send_feedback.html',
      name: 'ご意見・ご要望を送る',
      ratid: 'support_link_guide_feedback_send_feedback',
      target: '_blank',
      isIconNewTabLine: true,
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

export default SupportLinkManual
