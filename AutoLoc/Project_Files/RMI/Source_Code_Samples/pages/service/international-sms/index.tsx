import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtNormal,
  TxtCap,
  TxtEmp02,
  TxtEmp01,
  PriceNumberFree,
  TxtWeightNormal,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { Table as TableWrapper } from '@components/atoms/Table'
import { IconArrowDown } from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import { Tab } from '@components/atoms/Tab'
import { MediaGridHalf } from '@components/layout/Media'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { Scrollhint } from '@components/atoms/Scrollhint'

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
  th,
  td {
    vertical-align: middle !important;
  }

  colgroup {
    col {
      &:nth-child(1) {
        width: 50px;
      }
      &:nth-child(2) {
        width: 113px;
      }
      &:nth-child(3) {
        width: 160px;
      }
      &:nth-child(4) {
        width: 302px;
      }
    }
  }
`

const BgGray = styled.div`
  background: ${props => props.theme.colors.monotone97};
`

const accordionListArgs1 = {
  text: [
    {
      text: 'ご利用の機種や、海外ローミング先のネットワーク、または通信先の相手国のネットワークの通信事情により、一覧にある事業者でサービスをご利用いただけない場合があっても当社は一切の責任を負いません。',
    },
    { text: '各種料金割引サービスの対象外となります。' },
    { text: '通話・通信料は、毎月のご利用料金と合算しての請求となります。' },
    { text: '各海外／国際サービスのご利用料金は、不課税です。' },
    { text: '本サービスの通信料は、日本国内の通信料とは異なります。' },
    {
      text: '海外通信事業者の都合により、お客さまが送信した国際SMSが受信者に送達されない場合も通信料が発生します。',
    },
    {
      text: 'ナンバーポータビリティによって、通信事業者が変更になった場合などに、一部の海外事業者との間で、国際SMSを送受信できない場合があります。',
    },
    {
      text: '上記の地域、事業者以外でも国際SMSをご利用になれる場合があります。その場合もご利用になった通信料が発生します。',
    },
    {
      text: '海外通信事業者の利用者から発信された国際SMSで、本文が全角70文字、半角英数字160文字を超えるものについては、一部機種では複数のSMSに分かれて受信しますが、その際、正しく受信されない場合があります。',
    },
    {
      text: '送信が完了していない場合においても、通信料が発生する場合があります。',
    },
    {
      text: '日本国内で「SMS受信拒否」を設定している場合は、海外でもSMS、国際SMSを受信できない場合があります。',
    },
    {
      text: 'Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten Linkを利用していない場合、Rakuten Linkで国際SMSを送信することができません。ご利用の際はiOS標準のメッセージアプリをご利用ください。',
    },
    {
      text: 'Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten Linkを利用していない場合、 iOS標準のメッセージアプリでSMSを受信いたします。',
    },
    {
      text: '受信者が、上記の地域・事業者以外でローミング中の場合などに、ご利用できない場合があります。',
    },
    {
      text: '国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。',
    },
    {
      text: '国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）のサービスエリア・提供条件は予告なく変更になる場合があります。',
    },
    {
      text: '国際通話・国際SMS、国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）の月ごとのご利用限度額、またmy 楽天モバイル上のご利用量とご利用限度額表示は目安であり反映されない場合があります。実際のご利用量と請求金額については毎月の請求書に反映されますのでご確認ください。',
    },
    {
      text: '国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）のご利用額、および、海外での着信転送サービスのご利用額は、翌月の利用分と合算してご請求する場合があります。',
    },
  ],
}

const heading1 = 'Androidで使う'
const heading2 = 'iOSで使う'
const heading3 = 'Androidで使う'
const heading4 = 'iOSで使う'
const Content1 = () => (
  <>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-40']} spWidth="1032px">
        <ServiceTable>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={2} scope="col"></th>
              <th colSpan={2} scope="col">
                Rakuten Linkアプリを利用した場合
              </th>
              <th colSpan={2} scope="col">
                Android標準のメッセージアプリを利用した場合
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={2}>
                送信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>Rakuten Linkアプリ同士の場合</TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td colSpan={2}>
                <TxtEmp01 className={Utils['Align-center']} as="div">
                  ー
                </TxtEmp01>
              </td>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>
                  日本から海外の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <UlOnly>
                  <li>
                    <LinkNormal href="/service/international-sms/?l-id=service_service-list_rakuten-link#area">
                      海外の対象国と地域
                    </LinkNormal>
                    ：<TxtEmp02>無料</TxtEmp02>
                  </li>
                  <li>
                    その他の地域（全角半角問わず）
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～660文字：国・地域別従量課金（10通分）
                    <br />
                  </li>
                </UlOnly>
              </td>
              <td colSpan={2}>
                <UlOnly>
                  <li>
                    全角
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～670文字：国・地域別従量課金（10通分）
                  </li>
                  <li>
                    半角のみの場合
                    <br />
                    1～160文字：国・地域別従量課金（1通分）
                    <br />
                    161～306文字：国・地域別従量課金（2通分）
                    <br />
                    307～459文字：国・地域別従量課金（3通分）
                    <br />
                    460～612文字：国・地域別従量課金（4通分）
                    <br />
                    613～765文字：国・地域別従量課金（5通分）
                    <br />
                    766～918文字：国・地域別従量課金（6通分）
                    <br />
                    919～1071文字：国・地域別従量課金（7通分）
                    <br />
                    1072～1224文字：国・地域別従量課金（8通分）
                    <br />
                    1225～1377文字：国・地域別従量課金（9通分）
                    <br />
                    1378～1530文字：国・地域別従量課金（10通分）
                  </li>
                </UlOnly>
              </td>
            </tr>
            <tr>
              <th>
                受信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>
                  日本で海外の電話番号からSMSを受信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable>
      </TableWrapper>
    </Scrollhint>
  </>
)
const Content2 = () => (
  <>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-40']} spWidth="1032px">
        <ServiceTable>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={2} scope="col"></th>
              <th colSpan={2} scope="col">
                Rakuten Linkアプリを利用した場合
              </th>
              <th colSpan={2} scope="col">
                iOS標準のメッセージアプリを利用した場合
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                送信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>
                  日本から海外の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2} rowSpan={2}>
                Rakuten
                Linkアプリでは送受信できません。iOS標準のメッセージアプリでの送受信となります。
              </td>
              <td colSpan={2}>
                <UlOnly>
                  <li>
                    全角
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～670文字：国・地域別従量課金（10通分）
                  </li>
                  <li>
                    半角のみの場合
                    <br />
                    1～160文字：国・地域別従量課金（1通分）
                    <br />
                    161～306文字：国・地域別従量課金（2通分）
                    <br />
                    307～459文字：国・地域別従量課金（3通分）
                    <br />
                    460～612文字：国・地域別従量課金（4通分）
                    <br />
                    613～765文字：国・地域別従量課金（5通分）
                    <br />
                    766～918文字：国・地域別従量課金（6通分）
                    <br />
                    919～1071文字：国・地域別従量課金（7通分）
                    <br />
                    1072～1224文字：国・地域別従量課金（8通分）
                    <br />
                    1225～1377文字：国・地域別従量課金（9通分）
                    <br />
                    1378～1530文字：国・地域別従量課金（10通分）
                  </li>
                </UlOnly>
              </td>
            </tr>
            <tr>
              <th>
                受信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>
                  日本で海外の電話番号からSMSを受信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable>
      </TableWrapper>
    </Scrollhint>
  </>
)
const Content3 = () => (
  <>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-40']} spWidth="1032px">
        <ServiceTable>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={2} scope="col"></th>
              <th colSpan={2} scope="col">
                Rakuten Linkアプリを利用した場合
              </th>
              <th colSpan={2} scope="col">
                Android標準のメッセージアプリを利用した場合
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={3}>
                送信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>Rakuten Linkアプリ同士の場合</TxtWeightNormal>
              </th>
              <td colSpan={2} rowSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td colSpan={2}>
                <TxtEmp01 className={Utils['Align-center']} as="div">
                  ー
                </TxtEmp01>
              </td>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>
                  海外から日本の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2} rowSpan={2}>
                <UlOnly>
                  <li>
                    全角
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～670文字：国・地域別従量課金（10通分）
                  </li>
                  <li>
                    半角のみの場合
                    <br />
                    1～160文字：国・地域別従量課金（1通分）
                    <br />
                    161～306文字：国・地域別従量課金（2通分）
                    <br />
                    307～459文字：国・地域別従量課金（3通分）
                    <br />
                    460～612文字：国・地域別従量課金（4通分）
                    <br />
                    613～765文字：国・地域別従量課金（5通分）
                    <br />
                    766～918文字：国・地域別従量課金（6通分）
                    <br />
                    919～1071文字：国・地域別従量課金（7通分）
                    <br />
                    1072～1224文字：国・地域別従量課金（8通分）
                    <br />
                    1225～1377文字：国・地域別従量課金（9通分）
                    <br />
                    1378～1530文字：国・地域別従量課金（10通分）
                  </li>
                </UlOnly>
              </td>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>
                  海外から海外の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <UlOnly>
                  <li>
                    <LinkNormal href="/service/international-sms/?l-id=service_service-list_rakuten-link#area">
                      海外の対象国と地域
                    </LinkNormal>
                    ：<TxtEmp02>無料</TxtEmp02>
                  </li>
                  <li>
                    その他の地域（全角半角問わず）
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～660文字：国・地域別従量課金（10通分）
                  </li>
                </UlOnly>
              </td>
            </tr>
            <tr>
              <th>
                受信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>海外でSMS受信する</TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable>
      </TableWrapper>
    </Scrollhint>
  </>
)

const Content4 = () => (
  <>
    <Scrollhint text="スクロールできます">
      <TableWrapper className={Utils['Mt-40']} spWidth="1032px">
        <ServiceTable>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th colSpan={2} scope="col">
                Rakuten Linkアプリを利用した場合
              </th>
              <th colSpan={2} scope="col">
                iOS標準のメッセージアプリを利用した場合
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={4}>
                送信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>Rakuten Linkアプリ同士の場合</TxtWeightNormal>
              </th>
              <td colSpan={2}>
                <TxtEmp02>無料</TxtEmp02>
              </td>
              <td colSpan={2}>
                <TxtEmp01 className={Utils['Align-center']} as="div">
                  ー
                </TxtEmp01>
              </td>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>
                  海外から日本の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
              <td colSpan={2} rowSpan={4}>
                Rakuten
                Linkアプリでは送受信できません。iOS標準のメッセージアプリでの送受信となります。
              </td>
              <td rowSpan={3}>
                <UlOnly>
                  <li>
                    全角
                    <br />
                    1～70文字：国・地域別従量課金（1通分）
                    <br />
                    71～134文字：国・地域別従量課金（2通分）
                    <br />
                    135～201文字：国・地域別従量課金（3通分）
                    <br />
                    202～268文字：国・地域別従量課金（4通分）
                    <br />
                    269～335文字：国・地域別従量課金（5通分）
                    <br />
                    336～402文字：国・地域別従量課金（6通分）
                    <br />
                    403～469文字：国・地域別従量課金（7通分）
                    <br />
                    470～536文字：国・地域別従量課金（8通分）
                    <br />
                    537～603文字：国・地域別従量課金（9通分）
                    <br />
                    604～670文字：国・地域別従量課金（10通分）
                  </li>
                  <li>
                    半角のみの場合
                    <br />
                    1～160文字：国・地域別従量課金（1通分）
                    <br />
                    161～306文字：国・地域別従量課金（2通分）
                    <br />
                    307～459文字：国・地域別従量課金（3通分）
                    <br />
                    460～612文字：国・地域別従量課金（4通分）
                    <br />
                    613～765文字：国・地域別従量課金（5通分）
                    <br />
                    766～918文字：国・地域別従量課金（6通分）
                    <br />
                    919～1071文字：国・地域別従量課金（7通分）
                    <br />
                    1072～1224文字：国・地域別従量課金（8通分）
                    <br />
                    1225～1377文字：国・地域別従量課金（9通分）
                    <br />
                    1378～1530文字：国・地域別従量課金（10通分）
                  </li>
                </UlOnly>
              </td>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>
                  海外から海外の電話番号へSMS送信する
                </TxtWeightNormal>
              </th>
            </tr>
            <tr>
              <th>
                <TxtWeightNormal>海外でSMS受信する</TxtWeightNormal>
              </th>
            </tr>
            <tr>
              <th>
                受信
                <br className={Utils['Disp-sp']} />
                料金
              </th>
              <th>
                <TxtWeightNormal>海外でSMS受信する</TxtWeightNormal>
              </th>
              <td>
                <TxtEmp02>無料</TxtEmp02>
              </td>
            </tr>
          </tbody>
        </ServiceTable>
      </TableWrapper>
    </Scrollhint>
  </>
)

const ServiceInternationalSms: NextPage = () => {
  const selectedCardIds = ['international-unlimited-talk', 'data-charge']
  const pagetitle = '国際SMS'
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
    item: [{ text: '海外', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「国際SMS（日本から海外）」サービス紹介。スマートフォン（スマホ）から海外現地の携帯電話番号宛に、文字メッセージを送信できます'"
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
            国際SMS
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            現在ご利用中の電話から、国際SMSが利用できます。
          </TxtNormal>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-24']}>
          <div className={`${Utils['Align-right']} `}>
            <PriceNumberFree>無料</PriceNumberFree>
          </div>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <MediaGridHalf>
              <div>
                <ButtonRegularLarge href="/guide/international-sms/" as="a">
                  日本でのご利用方法を見る
                </ButtonRegularLarge>
              </div>
              <div>
                <ButtonRegularLarge
                  href="/guide/international-sms/overseas/"
                  as="a"
                >
                  海外でのご利用方法を見る
                </ButtonRegularLarge>
              </div>
            </MediaGridHalf>
          </div>
          <TxtCap className={Utils['Mt-24']} as="p">
            ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
            Linkを利用していない場合、Rakuten
            Linkで国際SMSを送受信することができません。ご利用の際はiOS標準のメッセージアプリをご利用ください。
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※海外でOS標準のメッセージアプリをご利用になる際は、
            <LinkNormal href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile">
              my 楽天モバイル
            </LinkNormal>
            の契約プラン画面から、「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスをオンにしてください。
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※機種・アプリにより1回に送信可能な文字数が異なります。
          </TxtCap>
        </SystemContainer>

        <SystemContainer id="transmission-fee" className={Utils['Mt-56']}>
          <Heading level="2">国際SMS送信・受信料金</Heading>
          <TxtNormal className={Utils['Mt-16']} as="p">
            お使いのスマートフォンのOSやご利用のアプリによって対応状況や料金が異なりますのでご注意ください。
          </TxtNormal>
        </SystemContainer>
        <InternationalLinkContainer>
          <InternationalLink>
            <li>
              <Heading level="4" className={Utils['Align-center']}>
                日本で国際SMSを使う
              </Heading>
              <ul>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-sms/?tab-list=tab-menu1#tab-menu1"
                  >
                    <IconArrowDown />
                    Androidで使う
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-sms/?tab-list=tab-menu2#tab-menu2"
                  >
                    <IconArrowDown />
                    iOSで使う
                  </LinkIconBefore>
                </li>
              </ul>
            </li>
            <li>
              <Heading level="4" className={Utils['Align-center']}>
                海外で国際SMSを使う
              </Heading>
              <ul>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-sms/?tab-list=tab-menu3#tab-menu3"
                  >
                    <IconArrowDown />
                    Androidで使う
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    as="a"
                    href="/service/international-sms/?tab-list=tab-menu4#tab-menu4"
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
              日本で国際SMSを利用する場合
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={heading1}
              heading2={heading2}
              content1={<Content1 />}
              content2={<Content2 />}
              id1="tab-menu1"
              id2="tab-menu2"
            />
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※国・地域別従量課金の詳細は
              <LinkNormal href="/guide/international-sms/#japan">
                日本で国際SMSを利用する場合
              </LinkNormal>
              をご参照ください。
            </TxtCap>
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegular href="/guide/international-sms/#japan" as="a">
                ご利用可能な国・地域／料金表・国番号を見る
              </ButtonRegular>
            </div>

            <Heading level="3" className={Utils['Mt-80']}>
              海外で国際SMSを利用する場合
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={heading3}
              heading2={heading4}
              content1={<Content3 />}
              content2={<Content4 />}
              id1="tab-menu3"
              id2="tab-menu4"
            />
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※
              <LinkNormal href="/service/international-sms/#area">
                海外の対象国と地域
              </LinkNormal>
              でのみ送受信可能となります。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※国・地域別従量課金の詳細は
              <LinkNormal href="/guide/international-sms/overseas/#global">
                海外で国際SMSを利用する場合
              </LinkNormal>
              をご参照ください。
            </TxtCap>
          </SystemContainer>
        </BgGray>

        <SystemContainer>
          <AccordionList
            id="area"
            text={'海外の対象国と地域について'}
            isOpened={true}
            className={Utils['Mt-40']}
          >
            アイスランド、アイルランド、アメリカ（ハワイ）、アメリカ本土、アンドラ、イギリス、イタリア、インド、インドネシア、エストニア、オーストラリア、オーストリア、オランダ、カナダ、カンボジア、韓国、キプロス、ギリシャ、グアドループ、グアム、クロアチア、サイパン、ジブラルタル、シンガポール、スイス、スウェーデン、スペイン、スロバキア、スロベニア、タイ、台湾、チェコ共和国、中国、デンマーク、ドイツ、トルコ、ニュージーランド、ノルウェー、ハンガリー、フィリピン、フィンランド、ブラジル、フランス、フランス領ギアナ、ブルガリア、ベトナム、ペルー、ベルギー、ポーランド、ポルトガル、香港、マカオ、マルタ、マルティニーク、マレーシア、南アフリカ、ミャンマー、メキシコ、モロッコ、ラトビア、リトアニア、リヒテンシュタイン、ルーマニア、ルクセンブルク、レユニオン、ロシア（2020年3月3日時点）
            <TxtCap as="p" className={Utils['Mt-16']}>
              <TxtEmp02>
                ※アラブ首長国連邦、ウクライナ、エジプト、カタール、クウェート、サウジアラビア、ヨルダンは、国際通話かけ放題の対象外、また国際SMS送信の無料対象国外です。
              </TxtEmp02>
            </TxtCap>
            <TxtCap as="p">
              <TxtEmp02>※ミャンマーは、国際通話かけ放題の対象外です。</TxtEmp02>
            </TxtCap>
            <TxtCap as="p">
              ※海外ローミング（データ通信）および国際通話、国際SMS、国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。
            </TxtCap>
          </AccordionList>

          <ServiceGlobalBnr
            className={Utils['Mt-40']}
            lid={`service_international-sms`}
            lazy={true}
          />
        </SystemContainer>

        <SystemContainer>
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
                海外／国際サービス「国際通話・国際SMS
                」は当社にて毎月のご利用限度額 （20,000円）を設定しています。
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
                <LinkNormal href="/guide/international-sms/overseas/?tab-list=tab-menu6#global">
                  ご利用の国・地域のネットワークの対応可否
                </LinkNormal>
                をご確認ください。
              </li>
              <li>
                海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」は当社にて毎月のご利用限度額（20,000円）を設定しています。海外／国際サービス「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」のご利用額の合計が、ご利用限度額を超過したことを当社にて確認できた時点で、「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスの利用を停止させていただきます。
                <br />
                また、当該料金の支払いが確認できるまでの期間、当サービスの利用を停止する場合があります。
                <br />
                利用停止の解除をご希望のお客様は、Rakuten
                Linkアプリから050-5434-4633までご連絡ください。ご利用を再開するには全利用額を精算いただく必要があります。
              </li>
              <li>
                海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」の毎月のご利用額が、5,000円を超過するごとに、利用を一時停止させていただきます。
                <br />
                再開をご希望のお客様は、my
                楽天モバイルの契約プラン画面から「国際通話（海外でOS標準の電話アプリ・メッセージアプリ利用時）」サービスをオンにしてください。
              </li>
              <li>
                国際SMS（海外でOS標準のメッセージアプリ利用時）の送信時に発生するご利用金額はmy
                楽天モバイルに反映されない場合があります。そのため、国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）のご利用限度額（20,000円）に加算されない可能性がありますので、ご注意ください。
              </li>
            </UlOnly>
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <MediaGridHalf>
              <div>
                <ButtonRegularLarge href="/guide/international-sms/" as="a">
                  日本でのご利用方法を見る
                </ButtonRegularLarge>
              </div>
              <div>
                <ButtonRegularLarge
                  href="/guide/international-sms/overseas/"
                  as="a"
                >
                  海外でのご利用方法を見る
                </ButtonRegularLarge>
              </div>
            </MediaGridHalf>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="international-sms"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="international-sms"
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

export default ServiceInternationalSms
