import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegular } from '@components/atoms/Buttons'
import { Divider } from '@components/atoms/Divider'
import { InfoboxLight } from '@components/atoms/Infobox'

const AddressTxt = styled.address`
  font-style: inherit;
`

const ServiceReplacementprogramSmswarranty: NextPage = () => {
  const pagetitle =
    '楽天モバイル買い替え超トクプログラム（メーカー修理保証書送付のお願い）'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    {
      path: '/service/iphone/upgrade-program/',
      label: '楽天モバイル買い替え超トクプログラム',
    },
  ]
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
      text: '楽天モバイル買い替え超トクプログラム',
      url: '/service/iphone/upgrade-program/',
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
        description="楽天モバイル買い替え超トクプログラムサービスにて、お乗り換えもしくは解約されたお客様への、メーカー修理保証書送付のご案内ページになります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Mt-32']}>
          <Heading level="1">
            【重要】メーカー修理保証書をご送付ください／楽天モバイル買い替え超トクプログラム
          </Heading>
          <div className={Utils['Mt-24']}>
            <p>いつも楽天モバイルをご利用いただきありがとうございます。</p>
            <p className={Utils['Mt-16']}>
              「楽天モバイル買い替え超トクプログラム」サービスにてお乗り換え、もしくは解約をされた方で、下記のご対応が必要なお客様へのご案内となります。
            </p>
          </div>
          <Divider className={Utils['Mt-32']} />
        </SystemContainer>

        <SystemContainer className={Utils['Mt-32']}>
          <Heading level="2">
            本来返却すべき製品とは異なるIMEIの製品がご返却されました。
            <br />
            メーカー修理保証書の送付が必要になりますので、送付方法についてご案内します。
            <br />
            下記お問い合わせ窓口へご連絡ください。
          </Heading>
          <p className={Utils['Mt-24']}>
            <TxtEmp02>製品をお乗り換えされた場合</TxtEmp02>
            は新しい製品のお受け取り日より
            <TxtEmp02>20日以内、解約の場合</TxtEmp02>は解約
            <TxtEmp02>お申し出月の翌月15日</TxtEmp02>
            までに、メーカー修理保証書をご送付いただく必要があります。
          </p>
          <p className={Utils['Mt-16']}>
            なお、メーカー修理保証書がご送付いただけない場合や、ご返却いただいた製品が弊社指定の状態基準を満たさない場合は、故障費用または残債を請求させていただく場合がございます。あらかじめご了承ください。
          </p>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <Heading level="2">お問い合わせ窓口</Heading>
          <p className={Utils['Mt-24']}>
            メーカー修理保証書の送付方法に関してご案内いたしますので、まずは、下記お問い合わせ窓口にご連絡をお願いいたします。
          </p>
          <InfoboxLight className={Utils['Mt-16']}>
            <AddressTxt>
              <TxtEmp01 as="p">
                楽天モバイル買い替え超トクプログラム専用お問い合わせ窓口
              </TxtEmp01>
              <p className={Utils['Mt-16']}>
                電話番号　<a href="tel:05035126566">050-3512-6566</a>
              </p>
              <p className={Utils['Mt-16']}>
                受付時間　9:00～20:00（年中無休）
              </p>
            </AddressTxt>
          </InfoboxLight>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <p>
            その他ご不明点がございましたら、サービス案内ページをご参照ください。
          </p>
          <ButtonRegular
            as="a"
            href="/service/replacement-program/?l-id=service_replacement-program_sms-warranty_service_replacement-program"
            className={Utils['Mt-24']}
          >
            楽天モバイル買い替え超トクプログラムの詳細を見る
          </ButtonRegular>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default ServiceReplacementprogramSmswarranty
