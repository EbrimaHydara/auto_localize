import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportProduct: NextPage = () => {
  const pagetitle = ' 設定・操作・故障に関するサポート'
  const directories = [
    { path: '/support/', label: ' 設定・操作・故障に関するサポート' },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="設定・操作・故障に関する知りたい・調べたい情報をお選びください。"
        redirect={{
          url: 'support/product/setting/',
        }}
      />
    </>
  )
}
export default SupportProduct
