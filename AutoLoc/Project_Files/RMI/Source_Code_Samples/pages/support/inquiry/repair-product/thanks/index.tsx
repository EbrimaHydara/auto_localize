import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { ButtonRegularLarge } from '@components/atoms/Buttons'

const InquiryWrapper = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 40px 0;
`

const CampaignMnp: NextPage = () => {
  const pagetitle = '交換・修理受付完了'
  const directories = [{ path: '/support/', label: 'お客様サポート' }, { path: '/support/inquiry/repair-product/', label: '製品の交換・修理に関するお問い合わせ'}]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: directories[1].label,
      url: directories[1].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description=""
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Mt-24']}>
          <Heading level="1" as="h1">製品の交換・修理に関するお問い合わせ</Heading>
        </SystemContainer>
        <InquiryWrapper className={Utils['Mt-48']}>
          <SystemContainer>
            <Heading level="3" as="h2">交換・修理受付が完了しました。</Heading>
            <p className={Utils['Mt-16']}>24時間以内に交換・修理の担当者からご連絡をさせていただきます。</p>
            <ButtonRegularLarge
              className={Utils['Mt-16']}
              as="a"
              href="/"
            >
              楽天モバイルトップへ
            </ButtonRegularLarge>
            <ButtonRegularLarge
              className={Utils['Mt-16']}
              as="a"
              href="/support/"
            >
              お客様サポートトップへ
            </ButtonRegularLarge>
          </SystemContainer>
        </InquiryWrapper>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignMnp
