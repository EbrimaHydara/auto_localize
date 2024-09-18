import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportIphoneAppleid: NextPage = () => {
  const pagetitle = 'Apple IDに関するサポート'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="Apple IDの設定方法をご案内します。Apple IDは、Apple のさまざまなサービスにサインインする時に使用するアカウントになります。iPhoneを使用する際は、アカウントを作成してご利用ください。"
        redirect={{
          url: 'guide/iphone/appleid/',
        }}
      />
    </>
  )
}
export default SupportIphoneAppleid
