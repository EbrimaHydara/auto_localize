import type { NextPage } from 'next'
import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtNormal,
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtWeightBold,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import styled from 'styled-components'
import { Related } from '@components/include/service/Related'
import { Recommend } from '@components/include/service/Recommend'

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`

const ServiceCallerId: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = '発信者番号非通知'
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
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「発信者番号非通知」サービス紹介。スマートフォン（スマホ）で電話をかけたときに、電話番号（発信者番号）を相手に通知しない、非通知機能です"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            発信者番号非通知
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            電話をかけたときに、電話番号（発信者番号）を相手に通知しない機能です。
          </TxtNormal>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-24']}>
          <div className={`${Utils['Align-right']} `}>
            <PriceNumberFree size="ll">
              <TxtEmp01>無料</TxtEmp01>
            </PriceNumberFree>
          </div>

          <TxtCap as="p" className={`${Utils['Mt-8']}`}>
            <TxtWeightBold>
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtWeightBold>
          </TxtCap>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/caller-id/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="caller-id"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>通話・SMS・メールサービス</span>
                </>
              }
            />
            <Recommend
              className={Utils['Mt-24']}
              lId="caller-id"
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

export default ServiceCallerId
