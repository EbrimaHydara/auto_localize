import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'
const SupportPlan: NextPage = () => {
  const pagetitle = ''
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description=""
        redirect={{
          url: 'support/plan/detail/',
        }}
      />
    </>
  )
}
export default SupportPlan
