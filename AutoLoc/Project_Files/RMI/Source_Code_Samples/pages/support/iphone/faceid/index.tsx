import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportIphoneFaceid: NextPage = () => {
  const pagetitle = 'Face IDの設定方法'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="Face IDの設定方法をご案内します。Face IDを設定すると、iPhoneを一目見るだけで、安全かつ簡単にiPhoneのロック解除や、iPhoneでの購入を承認できます。"
        redirect={{
          url: 'guide/iphone/faceid/',
        }}
      />
    </>
  )
}
export default SupportIphoneFaceid
