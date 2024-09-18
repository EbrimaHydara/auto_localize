import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportIphoneItunes: NextPage = () => {
  const pagetitle = 'iPhoneのiTunesでのバックアップ作成と復元方法'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="iTunesを使用した、パソコンでのデータのバックアップ方法と、そのデータからのiPhoneの復元方法（初期設定方法）をご案内します。"
        redirect={{
          url: 'guide/iphone/itunes/',
        }}
      />
    </>
  )
}
export default SupportIphoneItunes
