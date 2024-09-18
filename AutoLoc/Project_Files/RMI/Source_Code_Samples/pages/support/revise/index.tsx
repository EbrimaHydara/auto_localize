import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportRevise: NextPage = () => {
  return (
    <>
      <CustomHead
        redirect={{
          url: 'support/payment/bill/',
        }}
      />
    </>
  )
}
export default SupportRevise
