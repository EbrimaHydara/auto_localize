import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportSettingIos: NextPage = () => {
  const pagetitle = 'iOSの設定手順に関するサポート'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="iOSの設定手順に関する知りたい・調べたい情報をお選びください。"
        redirect={{
          url: 'support/iphone/iphone/',
        }}
      />
    </>
  )
}

export default SupportSettingIos
