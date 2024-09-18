import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportIphoneFindmyiphoneoff: NextPage = () => {
  const pagetitle = '「iPhoneを探す」をオフにする方法'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="「iPhoneを探す」をオフにする方法を、iPhoneからの設定方法とパソコンからの設定方法をそれぞれご案内します。"
        redirect={{
          url: 'guide/iphone/find-my-iphone-off/',
        }}
      />
    </>
  )
}
export default SupportIphoneFindmyiphoneoff
