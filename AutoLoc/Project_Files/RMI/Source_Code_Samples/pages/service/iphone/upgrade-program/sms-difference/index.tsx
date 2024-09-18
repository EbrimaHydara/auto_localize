import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const ServiceIphoneUpgradeprogramSmsdifference: NextPage = () => {
  const pagetitle =
    '楽天モバイルiPhoneアップグレードプログラム（正しい製品返却のお願い）'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    {
      path: '/service/iphone/upgrade-program/',
      label: '楽天モバイルiPhoneアップグレードプログラム',
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        redirect={{
          url: 'service/replacement-program/sms-difference/',
        }}
      />
    </>
  )
}

export default ServiceIphoneUpgradeprogramSmsdifference
