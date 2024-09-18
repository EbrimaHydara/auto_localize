import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtNormal,
  TxtSize,
  TxtWeightBold,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { LabelList } from '@components/atoms/Label'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

export const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceSpecialNumberService: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = '特番通話'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'オプションサービス',
      url: '/service/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const labelArgs = {
    item: [{ text: '通話・SMS・メール', isEmp: false }],
  }
  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「特番通話」サービス紹介。110番（警察）や#4桁特番などの緊急時の特番通話をご利用いただけます"
      />
      <SystemWrapper>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            特番通話
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            110番（警察）や#4桁特番などの特番通話をご利用いただけます。
          </TxtNormal>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <TxtEmp01
              as="p"
              className={`${Utils['Align-right']} ${Utils['Mt-24']}`}
            >
              <PriceNumberFree size="ll">無料</PriceNumberFree>
            </TxtEmp01>
          </div>
          <TxtCap as="p" className={Utils['Mt-8']}>
            <TxtWeightBold>
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtWeightBold>
          </TxtCap>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/special-number-service/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="special-number-service"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  その他の
                  <br className={Utils['Disp-sp']} />
                  通話・SMS・メールサービス
                </>
              }
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="special-number-service"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceSpecialNumberService
