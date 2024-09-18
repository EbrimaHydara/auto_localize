import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportNotes: NextPage = () => {
  const pagetitle = '正式契約手続きの前にご確認ください'
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        redirect={{
          url: 'support/',
        }}
      />
    </>
  )
}
export default SupportNotes
