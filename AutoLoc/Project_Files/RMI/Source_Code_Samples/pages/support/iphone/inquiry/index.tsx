import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportIphoneInquiry: NextPage = () => {
  const pagetitle = 'お客様サポート'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのお客様サポートページ。楽天回線スマートフォン（スマホ）の設定方法、各種お手続き方法、ご契約時に必要なこと、お問い合わせ（問合せ）、紛失・故障・修理などをご案内します"
        redirect={{
          url: 'support/',
        }}
      />
    </>
  )
}
export default SupportIphoneInquiry
