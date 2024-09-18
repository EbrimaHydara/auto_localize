import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportIphoneApplication: NextPage = () => {
  const pagetitle = ''
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description=""
        redirect={{
          url: 'support/iphone/product-warranty/',
        }}
      />
    </>
  )
}
export default SupportIphoneApplication
