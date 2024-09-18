import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtNormal } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegular } from '@components/atoms/Buttons'
import { mixins } from '@components/utils/Mixins'

const CustomSystemContainer = styled(SystemContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 160px;
`
const CustomButtonRegular = styled(ButtonRegular)`
  width: 296px;
  width: fit-content;
  ${mixins.mq.MaxS} {
    width: 100%;
  }
`
const GuideSimulationsmsoptoutThanks: NextPage = () => {
  const pagetitle =
    '「料金シミュレーションご回答者様へのSMS配信」の停止（完了）'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
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
      text: pagetitle,
      url: '',
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="「料金シミュレーションご回答者様向けSMS」の配信停止完了ページです。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <CustomSystemContainer>
          <Heading level="1" className={Utils['Mt-24']}>
            「料金シミュレーションご回答者様へのSMS配信」の停止（完了）
          </Heading>
          <TxtNormal className={Utils['Mt-32']}>
            配信停止のお手続きが完了しました。
          </TxtNormal>
          <TxtCap className={Utils['Mt-16']}>
            ※お手続き後、配信停止までお時間がかかる場合があります。ご了承ください。
          </TxtCap>
          <CustomButtonRegular
            className={Utils['Mt-40']}
            as="a"
            href="https://network.mobile.rakuten.co.jp/?l-id=guide_simulation-sms-optout-thanks_top"
          >
            楽天モバイルトップへ
          </CustomButtonRegular>
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default GuideSimulationsmsoptoutThanks
