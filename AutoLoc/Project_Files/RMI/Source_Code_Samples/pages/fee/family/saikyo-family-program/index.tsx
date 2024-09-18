import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const FeeFamilySaikyofamilyprogram: NextPage = () => {
  const pagetitle = ''
  const directories = [
    {
      path: '/fee/family/',
      label: '楽天モバイルなら家族みんなでおトクに使える',
    },
  ]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        redirect={{
          url: 'fee/family/',
        }}
      />
    </>
  )
}

export default FeeFamilySaikyofamilyprogram
