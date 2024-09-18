import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportFaqFaq: NextPage = () => {
  const pagetitle = '製品（iPhone・Apple Watch）に関するサポート'
  const directories = [
    {
      path: '/support/',
      label: '製品（iPhone・Apple Watch）に関するサポート',
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="製品（iPhone・Apple Watch）に関する知りたい・調べたい情報をお選びください。"
        redirect={{
          url: 'support/iphone/iphone/',
        }}
      />
    </>
  )
}
export default SupportFaqFaq
