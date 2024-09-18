import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const ServiceRakutenMail: NextPage = () => {
  const pagetitle = '楽メール'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        redirect={{
          url: 'service/rakumail/',
        }}
      />
    </>
  )
}
export default ServiceRakutenMail
