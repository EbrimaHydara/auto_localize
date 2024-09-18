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
  TxtNormal,
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { ButtonPrimary } from '@components/atoms/Buttons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc } from '@components/atoms/List'
import { assets } from '@components/utils/assets'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { mixins } from '@components/utils/Mixins'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ApplyBtnBox = styled(InfoboxBorder)`
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
    p {
      text-align-last: left;
    }
  }
`

const ApplyBtn = styled(ButtonPrimary)`
  max-width: 420px;
  width: 100%;
`

const ServiceSelectNumber: NextPage = () => {
  const selectedCardIds = ['rakumail-portability']
  const pagetitle = '選べる電話番号サービス'
  const directories = [{ path: 'service/', label: 'オプションサービス' }]
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
  const ListArgs1 = {
    text: [
      {
        text: 'お申し込み完了後に電話番号を変更することはできません。',
      },
    ],
  }
  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「選べる電話番号サービス」サービス紹介。お申し込み時に、お好きな電話番号の下4桁を選べ、その下4桁を含んだ電話番号が回数無制限で検索可できます。検索結果からお好きな電話番号をお選びいただけます"
      />
      <SystemWrapper>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            選べる電話番号サービス
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-16']}>
          <MediaGrid>
            <MediaImage>
              <img
                src={`${assets}img/service/select-number/img-illustration01.png`}
                alt=""
                width="978"
                height="633"
              />
            </MediaImage>
            <div>
              <TxtNormal as="p">
                電話番号の下4桁をお好みの番号でお選びいただけます。選んだ下4桁を含んだ電話番号を、
                <TxtEmp02>
                  お好きな電話番号が出てくるまで、何度でも検索が可能です。
                </TxtEmp02>
              </TxtNormal>
              <TxtCap as="p">
                ※ご希望に添えない場合がございます。あらかじめご了承ください。
              </TxtCap>
              <TxtCap as="p">
                <TxtEmp02>
                  ※「Rakuten最強プラン（データタイプ）」は対象外です。
                </TxtEmp02>
              </TxtCap>
              <p className={`${Utils['Align-right']} ${Utils['Mt-16']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">1,100</AlphanumericSize>
                  <TxtSize size="s">円</TxtSize>
                </TxtEmp01>
              </p>
              <TxtCap
                className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
                as="p"
              >
                ※通話プラン新規電話番号でお申し込み時
              </TxtCap>
            </div>
          </MediaGrid>

          <AccordionList
            text={'ご利用上の注意'}
            isOpened={false}
            className={Utils['Mt-56']}
          >
            <ListDisc {...ListArgs1} />
          </AccordionList>

          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ApplyBtnBox>
              <Heading level="4" className={Utils['Align-center']}>
                お申し込み
              </Heading>
              <ApplyBtn
                as="a"
                href="/guide/application/?lid-r=service_select-number_guide_application01"
                className={Utils['Mt-24']}
              >
                プランと一緒に申し込む
              </ApplyBtn>
              <p className={Utils['Mt-8']}>
                契約プランを選択後、「オプションサービス」の項目からお申し込みください。
              </p>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/select-number/?l-id=service_select-number_guide_select-number01">
                  お申し込み方法を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-64']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="select-number"
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
              lId="select-number"
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

export default ServiceSelectNumber
