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
  TxtSize,
  TxtEmp02,
  TxtEmp01,
  TxtWeightNormal,
  TxtWeightBold,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { Table as TableWrapper } from '@components/atoms/Table'
import { IconArrowDown, IconChevronRight } from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import { Tab } from '@components/atoms/Tab'
import { MediaGridHalf, MediaImage } from '@components/layout/Media'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { Scrollhint } from '@components/atoms/Scrollhint'
import { mixins } from '@components/utils/Mixins'

const InternationalLinkContainer = styled(SystemContainer)`
  ${mixins.mq.MaxM} {
    max-width: none;
    padding: 0;
  }
`

const InternationalLink = styled.ul`
  width: 100%;
  max-width: 1032px;
  display: flex;
  margin-top: 24px;
  gap: 24px;
  > li {
    background-color: ${props => props.theme.colors.monotone97};
    padding: 24px;
    width: 50%;
  }
  ul {
    display: flex;
    margin-top: 16px;
    gap: 16px;

    ${mixins.mq.MaxM} {
      gap: 8px;
    }

    li {
      padding: 24px;
      background-color: ${props => props.theme.colors.white};
      width: 50%;

      ${mixins.mq.MaxM} {
        padding: 16px;
      }
    }
  }
  ${mixins.mq.MaxM} {
    display: block;
    > li {
      width: 100%;
      padding: 16px;
      &:first-child {
        margin: auto;
      }
      &:last-child {
        margin: 16px auto 0;
      }
    }
  }
`

const ServiceTable = styled.table`
  .sp-width & {
    ${mixins.mq.MaxS} {
      min-width: 490px;
    }
  }
  th,
  td {
    vertical-align: middle !important;
  }
`

const ServiceTable3Col = styled(ServiceTable)`
  colgroup {
    col {
      &:nth-child(1) {
        min-width: 66px;
      }
    }
  }
`

const ServiceTable4Col = styled(ServiceTable)`
  table-layout: fixed;
  colgroup {
    col {
      &:nth-child(1) {
        width: 100px;
      }
      &:nth-child(2) {
        width: 325px;
      }

      ${mixins.mq.MaxL} {
        &:nth-child(2) {
          width: auto;
        }
      }

      ${mixins.mq.MaxM} {
        &:nth-child(1) {
          width: 66px;
        }
      }
    }
  }
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const accordionListArgs1 = {
  text: [
    {
      text: '相手国の電話会社のガイダンスに接続した場合や呼び出し音が鳴った場合など、相手国の電話会社の通信事情などにより（フリーダイヤルで無料と案内された場合でも）通話・通信料が発生することがあります。',
    },
    {
      text: '特定の電話番号（例：117や119等の電話の3桁番号サービス、衛星電話）は海外ローミング先のネットワークによって利用可否が異なる場合があります。',
    },
    {
      text: '発信者番号非通知を設定していても、海外ローミング先のネットワークによって「通話不可能」や「非通知」など正しい番号表示にならない場合があります。',
    },
    {
      text: 'ご利用の機種や、海外ローミング先のネットワーク、または通信先の相手国のネットワークの通信事情により、一覧にある事業者でサービスをご利用いただけない場合があっても当社は一切の責任を負いません。',
    },
    {
      text: '各種料金割引サービスの対象外となります。',
    },
    {
      text: '通話・通信料は、毎月のご利用料金と合算しての請求となります。',
    },
    {
      text: '国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。',
    },
    {
      text: '各海外／国際サービスのご利用料金は、不課税です。',
    },
    {
      text: '本サービスの通信料は、日本国内の通信料とは異なります。',
    },
    {
      text: 'Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten Linkを利用していない場合、iOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。',
    },
    {
      text: '通話先の相手国・地域によっては、現地事業者の設備などの都合により接続できない場合あります。',
    },
    {
      text: '国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）のサービスエリア・提供条件は予告なく変更になる場合があります。',
    },
    {
      text: '国際通話・国際SMS、国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）の月ごとのご利用限度額、またmy 楽天モバイル上のご利用量とご利用限度額表示は目安であり反映されない場合があります。実際のご利用量と請求金額については毎月の請求書に反映されますのでご確認ください。',
    },
    {
      text: '国際通話、国際通話（海外でOS標準の電話アプリ利用時）は、通話が終了した後に利用時間を当社にて確認するため、1回で長時間の通話をご利用の際は通話料がご利用限度額（20,000円）を超えて高額となる可能性があります。予め料金表をご確認の上、ご利用ください。',
    },
    {
      text: '国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）のご利用額、および、海外での着信転送サービスのご利用額は、翌月の利用分と合算してご請求する場合があります。',
    },
  ],
}
const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`

const heading1 = 'Androidで使う'
const heading2 = 'iOSで使う'
const heading3 = 'Androidで使う'
const heading4 = 'iOSで使う'
const Content1 = () => (
  <div>
    <Heading level="4" className={Utils['Mt-40']}>
      Rakuten Linkアプリを利用した場合
    </Heading>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-16']}>
        <ServiceTable4Col>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th colSpan={2}></th>
              <th>Rakuten Linkアプリ同士の場合</th>
              <th>相手がRakuten Linkアプリを利用していない場合</th>
            </tr>
            <tr>
              <th>発信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                日本から海外の電話番号へかける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <LinkIconAfter
                  href="/guide/international-call/#japan"
                  target="_blank"
                >
                  国・地域別従量課金
                  <IconChevronRight />
                </LinkIconAfter>
              </td>
            </tr>
            <tr>
              <th>着信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                日本で海外の電話番号から電話をうける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable4Col>
      </TableWrapper>
    </Scrollhint>
    <Heading level="4" className={Utils['Mt-40']}>
      Android標準の電話アプリを利用した場合
    </Heading>
    <TableWrapper className={Utils['Mt-16']}>
      <ServiceTable3Col>
        <colgroup>
          <col style={{ width: '100px' }} />
          <col style={{ width: '325px' }} />
          <col style={{ width: '606px' }} />
        </colgroup>
        <tbody>
          <tr>
            <th>発信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              日本から海外の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/#japan"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th>着信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              日本で海外の電話番号から電話をうける
            </th>
            <td>
              <TxtEmp02>無料</TxtEmp02>
            </td>
          </tr>
        </tbody>
      </ServiceTable3Col>
    </TableWrapper>
    <TxtCap className={Utils['Mt-16']} as="p">
      ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
    </TxtCap>
  </div>
)
const Content2 = () => (
  <div>
    <Heading level="4" className={Utils['Mt-40']}>
      Rakuten Linkアプリを利用した場合
    </Heading>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={`${Utils['Mt-16']} sp-width`}>
        <ServiceTable4Col>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th colSpan={2}></th>
              <th>Rakuten Linkアプリ同士の場合</th>
              <th>相手がRakuten Linkアプリを利用していない場合</th>
            </tr>
            <tr>
              <th>発信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                日本から海外の電話番号へかける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <LinkIconAfter
                  href="/guide/international-call/#japan"
                  target="_blank"
                >
                  国・地域別従量課金
                  <IconChevronRight />
                </LinkIconAfter>
              </td>
            </tr>
            <tr>
              <th>着信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                日本で海外の電話番号から電話をうける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                Rakuten Linkアプリでは着信できません。
                <br />
                iOS標準の電話アプリでの着信（無料）となります。
              </td>
            </tr>
          </tbody>
        </ServiceTable4Col>
      </TableWrapper>
    </Scrollhint>
    <Heading level="4" className={Utils['Mt-40']}>
      iOS標準の電話アプリを利用した場合
    </Heading>
    <TableWrapper className={Utils['Mt-16']}>
      <ServiceTable3Col>
        <colgroup>
          <col style={{ width: '100px' }} />
          <col style={{ width: '325px' }} />
          <col style={{ width: '606px' }} />
        </colgroup>
        <tbody>
          <tr>
            <th>発信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              日本から海外の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/#japan"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th>着信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              日本で海外の電話番号から電話をうける
            </th>
            <td>
              <TxtEmp02>無料</TxtEmp02>
            </td>
          </tr>
        </tbody>
      </ServiceTable3Col>
    </TableWrapper>
    <TxtCap as="p" className={Utils['Mt-16']}>
      ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
    </TxtCap>
  </div>
)
const Content3 = () => (
  <div>
    <Heading level="4" className={Utils['Mt-40']}>
      Rakuten Linkアプリを利用した場合
      <sub>
        <TxtWeightNormal>※1</TxtWeightNormal>
      </sub>
    </Heading>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-16']}>
        <ServiceTable4Col>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th colSpan={2}></th>
              <th>Rakuten Linkアプリ同士の場合</th>
              <th>相手がRakuten Linkアプリを利用していない場合</th>
            </tr>
            <tr>
              <th rowSpan={2}>発信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                海外から日本の電話番号へかける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
            <tr>
              <th style={{ fontWeight: 'normal' }}>
                海外から海外の電話番号へかける
              </th>
              <td>
                <TxtEmp02>-</TxtEmp02>
              </td>
              <td>
                <LinkIconAfter
                  href="/guide/international-call/overseas/#global"
                  target="_blank"
                >
                  国・地域別従量課金
                  <IconChevronRight />
                </LinkIconAfter>
              </td>
            </tr>
            <tr>
              <th>着信料金</th>
              <th style={{ fontWeight: 'normal' }}>海外で電話をうける</th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable4Col>
      </TableWrapper>
    </Scrollhint>
    <Heading level="4" className={Utils['Mt-40']}>
      Android標準の電話アプリを利用した場合
      <sub>
        <TxtWeightNormal>※2</TxtWeightNormal>
      </sub>
    </Heading>
    <TableWrapper className={Utils['Mt-16']}>
      <ServiceTable3Col>
        <colgroup>
          <col style={{ width: '100px' }} />
          <col style={{ width: '325px' }} />
          <col style={{ width: '606px' }} />
        </colgroup>
        <tbody>
          <tr>
            <th rowSpan={2}>発信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              海外から日本の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th style={{ fontWeight: 'normal' }}>
              海外から海外の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th>着信料金</th>
            <th style={{ fontWeight: 'normal' }}>海外で電話をうける</th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
        </tbody>
      </ServiceTable3Col>
    </TableWrapper>
    <TxtCap as="p" className={Utils['Mt-16']}>
      ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※ 通話先の着信料金については、着信側の通信事業者にお問い合わせください。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※1 Rakuten Linkアプリを利用した場合、
      <LinkNormal href="/fee/un-limit/#country" as="a">
        海外の対象国と地域
      </LinkNormal>
      からのみ発着信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発着信可能となります。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※2 Android標準の電話アプリを利用した場合、
      <LinkNormal
        href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
        as="a"
      >
        海外の対象国と地域
      </LinkNormal>
      でのみ発着信可能となります。
    </TxtCap>
  </div>
)

const Content4 = () => (
  <div>
    <Heading level="4" className={Utils['Mt-40']}>
      Rakuten Linkアプリを利用した場合
      <sub>
        <TxtWeightNormal>※1</TxtWeightNormal>
      </sub>
    </Heading>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={`${Utils['Mt-16']} sp-width`}>
        <ServiceTable4Col>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th colSpan={2}></th>
              <th>Rakuten Linkアプリ同士の場合</th>
              <th>相手がRakuten Linkアプリを利用していない場合</th>
            </tr>
            <tr>
              <th rowSpan={2}>発信料金</th>
              <th style={{ fontWeight: 'normal' }}>
                海外から日本の電話番号へかける
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
            <tr>
              <th style={{ fontWeight: 'normal' }}>
                海外から海外の電話番号へかける
              </th>
              <td>
                <TxtEmp02>-</TxtEmp02>
              </td>
              <td>
                <LinkIconAfter
                  href="/guide/international-call/overseas/#global"
                  target="_blank"
                >
                  国・地域別従量課金
                  <IconChevronRight />
                </LinkIconAfter>
              </td>
            </tr>
            <tr>
              <th>着信料金</th>
              <th style={{ fontWeight: 'normal' }}>海外で電話をうける</th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                Rakuten Linkアプリでは着信できません。
                <br />
                iOS標準の電話アプリでの着信（
                <LinkNormal
                  as="a"
                  href="/guide/international-call/overseas/#global"
                >
                  国・地域別従量課金
                </LinkNormal>
                ）となります。
                <sub>
                  <TxtWeightNormal>※2</TxtWeightNormal>
                </sub>
              </td>
            </tr>
          </tbody>
        </ServiceTable4Col>
      </TableWrapper>
    </Scrollhint>
    <Heading level="4" className={Utils['Mt-40']}>
      iOS標準の電話アプリを利用した場合
      <sub>
        <TxtWeightNormal>※2</TxtWeightNormal>
      </sub>
    </Heading>
    <TableWrapper className={Utils['Mt-16']}>
      <ServiceTable3Col>
        <colgroup>
          <col style={{ width: '100px' }} />
          <col style={{ width: '325px' }} />
          <col style={{ width: '606px' }} />
        </colgroup>
        <tbody>
          <tr>
            <th rowSpan={2}>発信料金</th>
            <th style={{ fontWeight: 'normal' }}>
              海外から日本の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th style={{ fontWeight: 'normal' }}>
              海外から海外の電話番号へかける
            </th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
          <tr>
            <th>着信料金</th>
            <th style={{ fontWeight: 'normal' }}>海外で電話をうける</th>
            <td>
              <LinkIconAfter
                href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                target="_blank"
              >
                国・地域別従量課金
                <IconChevronRight />
              </LinkIconAfter>
            </td>
          </tr>
        </tbody>
      </ServiceTable3Col>
    </TableWrapper>
    <TxtCap as="p" className={Utils['Mt-16']}>
      ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※ 通話先の着信料金については、着信側の通信事業者にお問い合わせください。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※1 Rakuten Linkアプリを利用した場合、
      <LinkNormal href="/fee/un-limit/#country" as="a">
        海外の対象国と地域
      </LinkNormal>
      からのみ発着信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発着信可能となります。
    </TxtCap>
    <TxtCap as="p" className={Utils['Mt-8']}>
      ※2 iOS標準の電話アプリを利用した場合、
      <LinkNormal
        href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
        as="a"
      >
        海外の対象国と地域
      </LinkNormal>
      でのみ発着信可能となります。
    </TxtCap>
  </div>
)

const ServiceInternationalCall: NextPage = () => {
  const selectedCardIds = ['international-unlimited-talk', 'data-charge']
  const pagetitle = '国際通話'
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
    item: [{ text: '海外', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「国際通話」サービス紹介。現在利用中のスマートフォン（スマホ）から、手続きなしで国際通話が利用できます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        {/* お知らせエリア。新規追加された時用に残しています
        <AttentionInfo>
          <AttentionContainer>
            <AttentionIconInfo />
            <AttentionBody>
              <a href="/information/failure/933/">
                トンガにおける通信障害について
              </a>
            </AttentionBody>
          </AttentionContainer>
        </AttentionInfo>
         */}
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて不課税です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            国際通話
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            現在利用中の電話から、国際通話が利用できます。
          </TxtNormal>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※発信条件や発信先により、通話料が発生いたします。
          </TxtCap>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-24']}>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <PriceNumberFree size="ll">
              <TxtEmp01>無料</TxtEmp01>
            </PriceNumberFree>
          </div>

          <MediaGridHalf
            className={`${Utils['Align-right']} ${Utils['Mt-32']}`}
          >
            <MediaImage>
              <ButtonRegularLarge href="/guide/international-call/" as="a">
                日本でのご利用方法を見る
              </ButtonRegularLarge>
            </MediaImage>
            <MediaImage>
              <ButtonRegularLarge
                href="/guide/international-call/overseas/"
                as="a"
              >
                海外でのご利用方法を見る
              </ButtonRegularLarge>
            </MediaImage>
          </MediaGridHalf>
          <TxtCap className={Utils['Mt-32']} as="p">
            <TxtWeightBold>
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtWeightBold>
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
            Linkを利用していない場合、iOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※海外でOS標準の電話アプリをご利用になる際は、
            <LinkNormal href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile">
              my 楽天モバイル
            </LinkNormal>
            の契約プラン画面から、「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスをオンにしてください。
          </TxtCap>
        </SystemContainer>

        <SystemContainer id="fee" className={Utils['Mt-24']}>
          <Heading level="2" className={Utils['Mt-56']} as="h2">
            国際通話発信・着信料金
          </Heading>
          <TxtNormal className={Utils['Mt-16']} as="p">
            お使いのスマートフォンのOSやご利用のアプリによって対応状況や料金が異なりますのでご注意ください。
          </TxtNormal>
        </SystemContainer>

        <InternationalLinkContainer>
          <InternationalLink>
            <li>
              <Heading level="4" className={Utils['Align-center']}>
                日本で国際通話を使う
              </Heading>
              <ul>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-call/?tab-list=tab-menu1#tab-menu1"
                  >
                    <IconArrowDown />
                    Androidで使う
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-call/?tab-list=tab-menu2#tab-menu2"
                  >
                    <IconArrowDown />
                    iOSで使う
                  </LinkIconBefore>
                </li>
              </ul>
            </li>
            <li>
              <Heading level="4" className={Utils['Align-center']}>
                海外で国際通話を使う
              </Heading>
              <ul>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-call/?tab-list=tab-menu3#tab-menu3"
                  >
                    <IconArrowDown />
                    Androidで使う
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-call/?tab-list=tab-menu4#tab-menu4"
                  >
                    <IconArrowDown />
                    iOSで使う
                  </LinkIconBefore>
                </li>
              </ul>
            </li>
          </InternationalLink>
        </InternationalLinkContainer>

        <BgGray
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Heading id="anc00" level="3">
              日本で国際通話を利用する場合
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={heading1}
              heading2={heading2}
              id1="tab-menu1"
              id2="tab-menu2"
              content1={<Content1 />}
              content2={<Content2 />}
            />
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegular href="/guide/international-call/#japan" as="a">
                ご利用可能な国・地域／料金表・国番号を見る
              </ButtonRegular>
            </div>

            <Heading level="3" className={Utils['Mt-80']}>
              海外で国際通話を利用する場合
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={heading3}
              heading2={heading4}
              id1="tab-menu3"
              id2="tab-menu4"
              content1={<Content3 />}
              content2={<Content4 />}
            />
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegular
                href="/guide/international-call/overseas/#fee"
                as="a"
              >
                ご利用可能な国・地域／料金表・国番号を見る
              </ButtonRegular>
            </div>
          </SystemContainer>
        </BgGray>
        <SystemContainer>
          <ServiceGlobalBnr
            className={Utils['Mt-40']}
            lid="service_international-call"
            lazy={true}
          />

          <Heading level="3" className={Utils['Mt-56']}>
            注意事項
          </Heading>
          <AccordionList
            text={'国際通話・国際SMSサービス全体に関する注意事項'}
            isOpened={true}
            className={Utils['Mt-24']}
          >
            <ListDisc {...accordionListArgs1} />
          </AccordionList>
          <AccordionList
            text={'国際通話・国際SMSに関する注意事項'}
            isOpened={true}
          >
            <UlOnly>
              <li>
                海外／国際サービス「国際通話・国際SMS」は当社にて毎月のご利用限度額（20,000円）を設定しています。
                <br />
                海外／国際サービス「国際通話・国際SMS」のご利用額の合計が、ご利用限度額を超過したことを当社にて確認できた時点で「国際通話・国際SMS」サービスの利用を停止させていただきます。
                <br />
                また、当該料金の支払いが確認できるまでの期間、当サービスの利用を停止する場合があります。
                <br />
                ご利用を再開するには全利用額を精算いただく必要があります。
                <br />
                利用停止の解除をご希望のお客様は、050-5434-4633までご連絡ください。
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList
            text={
              '国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリご利用時）に関する注意事項'
            }
            isOpened={true}
          >
            <UlOnly>
              <li>
                海外でOS標準の電話アプリ・メッセージアプリを利用して通話を行う・メッセージを送受信する場合は、my
                楽天モバイルの契約プラン画面で、「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリご利用時）
                」サービスがオンになっていること、また、
                <LinkNormal
                  href="/guide/international-call/overseas/?tab-list=tab-menu6#global"
                  data-target-tab="#tab-menu6"
                >
                  ご利用の国・地域のネットワークの対応可否
                </LinkNormal>
                をご確認ください。
              </li>
              <li>
                海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」は当社にて毎月のご利用限度額（20,000円）を設定しています。国際サービス「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」のご利用額の合計が、ご利用限度額を超過したことを当社にて確認できた時点で、「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスの利用を停止させていただきます。
                <br />
                また、当該料金の支払いが確認できるまでの期間、当サービスの利用を停止する場合があります。
                <br />
                利用停止の解除をご希望のお客様は、Rakuten
                Linkアプリから050-5434-4633までご連絡ください。ご利用を再開するには全利用額を精算いただく必要があります。
              </li>
              <li>
                海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」の毎月のご利用額が、5,000円を超過するごとに、利用を一時停止させていただきます。再開をご希望のお客様は、my
                楽天モバイルの契約プラン画面から「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスをオンにしてください。
              </li>
              <li>
                海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」は、国際通話のかけ放題の対象とはならず、従量課金となります。
              </li>
              <li>
                海外渡航時、2G非対応製品をご利用の場合、3Gネットワークがない国では国際通話（海外でOS標準の電話アプリ利用時）サービスはご利用いただけません。Rakuten
                Linkアプリから通話をご利用ください。
              </li>
            </UlOnly>
          </AccordionList>
          <MediaGridHalf
            className={`${Utils['Align-right']} ${Utils['Mt-40']}`}
          >
            <MediaImage>
              <ButtonRegularLarge href="/guide/international-call/" as="a">
                日本でのご利用方法を見る
              </ButtonRegularLarge>
            </MediaImage>
            <MediaImage>
              <ButtonRegularLarge
                href="/guide/international-call/overseas/"
                as="a"
              >
                海外でのご利用方法を見る
              </ButtonRegularLarge>
            </MediaImage>
          </MediaGridHalf>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="international-call"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="international-call"
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

export default ServiceInternationalCall
