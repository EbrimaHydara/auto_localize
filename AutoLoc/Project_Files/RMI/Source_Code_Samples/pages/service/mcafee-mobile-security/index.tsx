import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  TxtNormal,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaIcon } from '@components/layout/Media'
import { LinkNormal } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { InfoboxAlert } from '@components/atoms/Infobox'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import { mixins } from '@components/utils/Mixins'

const InfoboxAlertPcPd = styled(InfoboxAlert)`
  ${mixins.mq.MinL} {
    padding: 24px;
  }
`

const SetviceContent = styled.ul`
  display: flex;
  li {
    width: 50%;
    margin: 0 12px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  ${mixins.mq.MaxM} {
    display: block;
    li {
      width: 100%;
      margin: 0 0 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const accordionListArgs1 = {
  text: [
    {
      text: `ダークウェブモニタリングスキャン`,
    },
    {
      text: `Wi-Fiのセキュリティ`,
    },
  ],
}

const accordionListArgs3 = {
  text: [
    {
      text: `月途中で加入または解約された場合、月額利用料が日割りとなります。`,
    },
  ],
}

const ServiceMcafeeMobileSecurity: NextPage = () => {
  const pagetitle = 'マカフィー® モバイル セキュリティ Android版'
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
    item: [{ text: 'セキュリティ', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「マカフィー® モバイル セキュリティ Android版」サービス紹介。ウィルス対策や紛失時の検索・追跡、危険サイトへのアクセスブロックなど、スマートフォン（スマホ）をリスクから守ります"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Pb-64']}>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            マカフィー® モバイル セキュリティ Android版
          </Heading>
          <InfoboxAlertPcPd className={Utils['Mt-24']}>
            <TxtEmp02 as="p">
              <TxtSize size="m">
                本サービスは新規受付を終了いたしました。
              </TxtSize>
            </TxtEmp02>
            <TxtNormal as="p" className={Utils['Mt-16']}>
              セキュリティサービスの新規申し込みをご希望のお客様は「
              <LinkNormal href="/service/norton-mobile-security/" as="a">
                ノートン™ モバイル セキュリティ
              </LinkNormal>
              」をご利用ください。
            </TxtNormal>
          </InfoboxAlertPcPd>
          <div className={Utils['Mt-40']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaIcon className={Utils['Mt-16']}>
            <div>
              <img
                src={`${assets}img/service/mcafee-mobile-security/logo-mcafee.png`}
                alt=""
              />
            </div>
            <div>
              ウイルス対策やダークウェブモニタリング機能追加に伴う、「個人情報流出状況の監視」、危険サイトへのアクセスブロックなど、お客様のスマホ・タブレットをさまざまなリスクから守ります。
            </div>
          </MediaIcon>
          <div className={`${Utils['Align-right']} ${Utils['Mt-32']}`}>
            <TxtEmp01>
              <AlphanumericSize size="l">220</AlphanumericSize>
              <TxtSize size="s">円／月</TxtSize>
            </TxtEmp01>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/mcafee-mobile-security/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>

          <Heading level="2" className={Utils['Mt-64']}>
            豊富な機能で危険を回避！
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            ウイルス対策や危険サイトのブロックなど、モバイル生活に必要な便利機能が勢揃い！
          </TxtNormal>
          <Heading level="3" className={Utils['Mt-40']}>
            主な機能
          </Heading>
          <SetviceContent className={Utils['Mt-48']}>
            <li>
              <img
                src={`${assets}img/service/mcafee-mobile-security/main-image-02.png`}
                className={Utils['Mt-8']}
                style={{
                  maxWidth: '328px',
                  width: '100%',
                  margin: 'auto',
                  display: 'block',
                }}
                alt=""
              />
              <Heading level="4" className={Utils['Mt-24']}>
                ウイルス対策
              </Heading>
              <TxtNormal className={Utils['Mt-16']} as="p">
                マカフィーアクティブプロテクション™技術で、アプリ、SD
                カード、ファイルをリアルタイムにスキャンし、不正なコードの侵入を阻止。さらに、マカフィーの優れたGlobal
                Threat Intelligence
                Networkにより、マルウェアや危険なウイルスの感染から製品を保護します。
              </TxtNormal>
            </li>
            <li>
              <img
                src={`${assets}img/service/mcafee-mobile-security/main-image-03.png`}
                className={Utils['Mt-8']}
                style={{
                  maxWidth: '328px',
                  width: '100%',
                  margin: 'auto',
                  display: 'block',
                }}
                alt=""
              />
              <Heading level="4" className={Utils['Mt-24']}>
                危険なサイトをブロック
              </Heading>
              <TxtNormal className={Utils['Mt-16']} as="p">
                フィッシング詐欺などネット犯罪未然防止のために、アクセスするサイトの安全性や受信したメールに記載されたURLを確認し、危険な場合はアラート画面で警告します。
              </TxtNormal>
            </li>
          </SetviceContent>
          <Heading level="3" className={Utils['Mt-40']}>
            その他の機能
          </Heading>
          <ListDisc {...accordionListArgs1} className={Utils['Mt-16']} />
          <AccordionList
            text={'動作環境'}
            isOpened={false}
            className={Utils['Mt-64']}
          >
            以下の条件に該当するAndroid
            OSのスマートフォンまたはタブレット（いずれか1台）でご利用いただけます。
            <TxtCap className={Utils['Mt-16']} as="p">
              ※マカフィー® モバイル セキュリティ Android版は、VAIO Phone
              BizをはじめとするWindows OSは非対応です。
            </TxtCap>
            <UlOnly className={Utils['Mt-32']}>
              <li>
                <TxtEmp01>OSのバージョン</TxtEmp01>
                <TxtSize size="s">※</TxtSize>
                <p>Android 8.0 以降</p>
              </li>
            </UlOnly>
            <TxtCap as="ul" className={Utils['Mt-8']}>
              <li>※2023年10月時点</li>
              <li>
                ※サポート対象外のOSバージョンをご利用中のお客様は、マカフィー®
                モバイル セキュリティ
                Android版の新規インストール、再インストールができません。既にインストールされている場合には、インストール済みのマカフィー®
                モバイル セキュリティ Android版を継続してご利用いただけます。
              </li>
            </TxtCap>
            <UlOnly className={Utils['Mt-24']}>
              <li>
                <TxtEmp01>ブラウザ</TxtEmp01>
                <TxtSize size="s">※</TxtSize>
                <p>Google Chrome（最新版を推奨）、Mozilla Firefox（最新版を推奨）</p>
              </li>
            </UlOnly>
            <TxtCap as="ul" className={Utils['Mt-8']}>
              <li>※2023年10月時点</li>
            </TxtCap>
          </AccordionList>
          <AccordionList text={'ご利用上の注意'} isOpened={false}>
            <ListDisc {...accordionListArgs3} />
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
            <ButtonRegularLarge href="/guide/mcafee-mobile-security/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceMcafeeMobileSecurity
