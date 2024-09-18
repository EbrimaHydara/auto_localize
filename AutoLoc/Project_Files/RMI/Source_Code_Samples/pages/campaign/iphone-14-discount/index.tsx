import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const CampaignIphone14discount: NextPage = () => {
  const pagetitle = ' '
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description=""
        redirect={{
          url: 'campaign/iphone-point/',
        }}
      />
    </>
  )
}

export default CampaignIphone14discount
