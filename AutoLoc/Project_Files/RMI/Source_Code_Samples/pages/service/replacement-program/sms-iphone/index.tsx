import type { NextPage } from 'next'
import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegular } from '@components/atoms/Buttons'
import { Divider } from '@components/atoms/Divider'
import { OlOnly } from '@components/atoms/List'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight, IconNewTabLine } from '@components/icons'
import { Heading } from '@components/atoms/Heading'

const ServiceReplacementprogramSmsiphone: NextPage = () => {
  const pagetitle =
    '楽天モバイル買い替え超トクプログラム（「iPhoneを探す」解除のご案内）'
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
        description="楽天モバイル買い替え超トクプログラムサービスにて、お乗り換えもしくは解約されたお客様への、「iPhoneを探す」解除のご案内ページになります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Mt-32']}>
          <Heading level="1">
            【重要】「iPhoneを探す」解除のお願い／楽天モバイル買い替え超トクプログラム
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
            ご返却いただいた製品は「iPhoneを探す」が未解除（有効の状態）です。
            <br />
            <TxtEmp02>
              「iPhoneを探す」の解除（無効の状態に変更）をお願いいたします。
            </TxtEmp02>
          </Heading>
          <p className={Utils['Mt-24']}>
            <TxtEmp02>製品をお乗り換えされた場合</TxtEmp02>
            は新しい製品のお受け取り日より
            <TxtEmp02>20日以内、解約の場合</TxtEmp02>は解約
            <TxtEmp02>お申し出月の翌月15日</TxtEmp02>
            までに、
            お乗り換え前、もしくはご解約された製品をご返却いただく必要があります。
          </p>
          <p className={Utils['Mt-16']}>
            上記期日以内に「iPhoneを探す」の解除（無効の状態に変更）を実施いただけない場合、またはご返却いただいた製品が弊社指定の状態基準を満たさない場合は、故障費用または残債を請求させていただく場合がございます。あらかじめご了承ください。
          </p>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <Heading level="2">「iPhoneを探す」解除時の必要事項</Heading>
          <p className={Utils['Mt-24']}>
            下記の手順でご対応をお願いいたします。
          </p>
          <OlOnly className={Utils['Mt-16']}>
            <li>
              お手持ちのPCやスマートフォンのWebブラウザから
              <LinkIconAfter
                href="https://www.icloud.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                iCloud.com
                <IconNewTabLine />
              </LinkIconAfter>
              にアクセスし、Apple IDでサインイン
            </li>
            <li>[iPhoneを探す]を選択</li>
            <li>解除するiPhoneを選択</li>
            <li>
              [iPhoneを消去]を選択後、確認ダイアログ上で「消去」を選択
              <br />
              <p>
                <LinkIconAfter href="/guide/iphone/find-my-iphone-off/?tab-list=tab-menu2">
                  「iPhoneを探す」を無効にする方法
                  <IconChevronRight />
                </LinkIconAfter>
              </p>
            </li>
          </OlOnly>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <p>
            その他ご不明点がございましたら、サービス案内ページをご参照ください。
          </p>
          <ButtonRegular
            as="a"
            href="/service/replacement-program/?l-id=service_replacement-program_sms-iphone_service_replacement-program"
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

export default ServiceReplacementprogramSmsiphone
