import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportIphoneQuickstart: NextPage = () => {
  const pagetitle = 'iPhoneのクイックスタートのご利用方法'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="クイックスタートを利用した、iPhoneの初期設定方法をご案内します。クイックスタートは、ご利用中のiPhoneを利用して、新しいiPhoneをすばやく設定する機能です。この機能を使えば、ワイヤレスで新しいiPhoneにデータを直接転送することができます。"
        redirect={{
          url: 'guide/iphone/quick-start/',
        }}
      />
    </>
  )
}
export default SupportIphoneQuickstart
