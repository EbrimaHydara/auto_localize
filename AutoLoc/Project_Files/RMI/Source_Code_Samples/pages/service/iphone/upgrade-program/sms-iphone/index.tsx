import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const ServiceIphoneUpgradeprogramSmsiphone: NextPage = () => {
  const pagetitle =
    '楽天モバイルiPhoneアップグレードプログラム（「iPhoneを探す」解除のご案内）'
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
          url: 'service/replacement-program/sms-iphone/',
        }}
      />
    </>
  )
}

export default ServiceIphoneUpgradeprogramSmsiphone
