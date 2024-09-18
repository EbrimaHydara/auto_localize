import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportIphoneIcloud: NextPage = () => {
  const pagetitle = 'iPhoneのiCloudでのバックアップ作成と復元方法'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="iCloudを使用した、iPhone本体でのデータのバックアップ方法と、そのデータからのiPhoneの復元方法（初期設定方法）をご案内します。"
        redirect={{
          url: 'guide/iphone/icloud/',
        }}
      />
    </>
  )
}
export default SupportIphoneIcloud
