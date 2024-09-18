import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportIphoneSettingNanosim: NextPage = () => {
  const pagetitle = 'iPhone＋プランセット購入者向け初期設定方法（nanoSIM）'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルでiPhone（nanoSIM）をプランとセットでご購入のお客様向けに、iPhoneの初期設定から楽天回線の開通確認方法までご案内します。"
        redirect={{
          url: 'guide/iphone/setting/nanosim/',
        }}
      />
    </>
  )
}
export default SupportIphoneSettingNanosim
