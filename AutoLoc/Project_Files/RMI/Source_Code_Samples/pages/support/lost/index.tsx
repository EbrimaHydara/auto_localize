import type { NextPage } from 'next'
import React from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const SupportLost: NextPage = () => {
  const pagetitle = 'スマートフォンの紛失・盗難に関するサポート'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="スマートフォンの紛失・盗難時の対応方法についてご案内いたします。"
        redirect={{
          url: 'support/suspension/suspension/',
        }}
      />
    </>
  )
}
export default SupportLost
