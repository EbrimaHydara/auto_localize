import type { NextPage } from 'next'
import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegular } from '@components/atoms/Buttons'
import { Divider } from '@components/atoms/Divider'
import { OlOnly, UlOnly } from '@components/atoms/List'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconPdf } from '@components/icons'

const ServiceReplacementprogramSmsreturn: NextPage = () => {
  const pagetitle = '楽天モバイル買い替え超トクプログラム（製品返却のお願い）'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    {
      path: '/service/replacement-program/',
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
      url: '/service/replacement-program/',
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
        description="楽天モバイル買い替え超トクプログラムサービスにて、お乗り換えもしくは解約されたお客様への、製品返却のご案内ページになります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Mt-32']}>
          <Heading level="1">
            【重要】製品ご返却のお願い／楽天モバイル買い替え超トクプログラム
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
            お乗り換え前の製品、もしくは解約された製品が返却されておりません。
            <br />
            すみやかに製品の送付をお願いいたします。
          </Heading>
          <p className={Utils['Mt-24']}>
            <TxtEmp02>製品をお乗り換えされた場合</TxtEmp02>
            は新しい製品のお受け取り日より
            <TxtEmp02>20日以内、解約の場合</TxtEmp02>は解約
            <TxtEmp02>お申し出月の翌月15日</TxtEmp02>
            までに、お乗り換え前、もしくはご解約された製品をご返却いただく必要があります。
          </p>
          <p className={Utils['Mt-16']}>
            なお、ご返却いただく必要のある製品がご返却いただけない場合や、ご返却いただいた製品が弊社指定の状態基準を満たさない場合は、故障費用または残債を請求させていただく場合がございます。あらかじめご了承ください。
          </p>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <Heading level="2">製品返却時の必要事項</Heading>
          <p className={Utils['Mt-24']}>
            下記の手順でご対応をお願いいたします。
          </p>
          <OlOnly className={Utils['Mt-16']}>
            <li>
              iPhoneであればiCloudの解除処理と製品初期化（リセット）、Androidであれば製品初期化（リセット）
              <div className={Utils['Mt-8']}>
                <LinkIconAfter
                  href={`${assets}pdf/manual/upgrade-program_reset.pdf`}
                  target="_blank"
                >
                  iCloud解除処理と製品初期化（リセット）の方法
                  <IconPdf />
                </LinkIconAfter>
              </div>
              <div className={Utils['Mt-8']}>
                <LinkIconAfter
                  href={`${assets}pdf/service/tradein/how_to_format.pdf?20210121`}
                  target="_blank"
                >
                  Android製品の初期化（リセット）の方法
                  <IconPdf />
                </LinkIconAfter>
              </div>
            </li>
            <li>
              製品からSIMカードを取り出す
              <br />
              <TxtCap>※eSIMの場合、本手順は不要です。</TxtCap>
            </li>
            <li>
              製品の返却
              <br />
              <TxtCap>
                ※製品の返却は、新製品到着時の配送箱に同封の伝票を貼付してお送りください。
              </TxtCap>
            </li>
          </OlOnly>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <Heading level="2">製品返却時の注意事項</Heading>
          <UlOnly className={Utils['Mt-24']}>
            <li>
              データのバックアップを実施してください。
              <br />
              返却いただいた製品に保存されているデータに起因する損害について当社は一切の責任を負いません。
              <br />
              弊社へ返却いただいた製品はお戻しできません。あらかじめご了承ください。
            </li>
            <li>
              付属品やSIMカード等の製品以外の物品を返却された場合、当社で破棄します。
              <br />
              製品以外の物品が送付された場合は、返却できません。あらかじめご了承ください。
            </li>
          </UlOnly>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <p>
            その他ご不明点がございましたら、サービス案内ページをご参照ください。
          </p>
          <ButtonRegular
            as="a"
            href="/service/replacement-program/?l-id=service_replacement-program_sms-return_service_replacement-program"
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

export default ServiceReplacementprogramSmsreturn
