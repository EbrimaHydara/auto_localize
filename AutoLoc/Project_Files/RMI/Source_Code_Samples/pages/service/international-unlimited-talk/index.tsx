import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { AccordionList } from '@components/atoms/AccordionList'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonPrimary } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import { LinkIconAfter } from '@components/atoms/Link'
import { ListDisc } from '@components/atoms/List'
import { Scrollhint } from '@components/atoms/Scrollhint'
import { Table as TableWrapper } from '@components/atoms/Table'
import {
  TxtCap,
  TxtSize,
  TxtEmp02,
  TxtEmp01,
  AlphanumericNormal,
} from '@components/atoms/Txt'
import { IconChevronRight } from '@components/icons'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { Recommend } from '@components/include/service/Recommend'
import { CustomHead } from '@components/utils/CustomHead'
import Utils from '@styles/Utils.module.scss'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'
import { Related } from '@components/include/service/Related'
import { mixins } from '@components/utils/Mixins'
import { InfoboxBorder } from '@components/atoms/Infobox'

const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const TxtCapWhite = styled(TxtCap)`
  color: ${props => props.theme.colors.white};
`
const TxtEmp01White = styled(TxtEmp01)`
  color: ${props => props.theme.colors.white};
`

const UnlimitedTable = styled(TableWrapper)`
  table {
    td {
      vertical-align: middle;
    }
  }
  ${mixins.mq.MaxM} {
    width: 720px;
  }
`

const ServiceHero = styled.div`
  background-image: url(${assets}img/service/international-unlimited-talk/hero-pc-230331.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 360px;
  width: 100%;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.white};
  h1 {
    font-size: 56px;
  }
  ${TxtCapWhite} {
    font-weight: normal;
  }
  ${mixins.mq.MaxM} {
    background-image: url(${assets}img/service/international-unlimited-talk/hero-sp-230407.png);
    h1 {
      margin-top: 10px;
      font-size: 34px;
    }
  }
`

const ServiceHeroWrapper = styled(SystemContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ServiceHeroTaxAttention = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`

const ServiceHeroPrice = styled(AlphanumericNormal)`
  font-size: 56px;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 38px;
  }
`

const ServiceHeroDescription = styled.p`
  color: white;
  font-size: 20px;
  font-weight: normal;
  ${mixins.mq.MaxM} {
    margin-top: 4px;
  }
`

const InternationalContent = styled.ul`
  display: flex;
  margin-top: 64px;
  background-color: ${props => props.theme.colors.monotone97};
  li {
    width: 33.3%;
    ${mixins.mq.MaxM} {
      width: 100%;
      margin: 40px 0 0;
    }
    + li {
      margin-left: 24px;
      ${mixins.mq.MaxM} {
        margin-left: 0;
      }
    }
  }
  ${mixins.mq.MaxM} {
    display: block;
    margin-top: 40px;
  }
`

const ApplyBtn = styled.div`
  display: flex;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  p {
    text-align: left;
  }
`

const ApplyBtnBox = styled(InfoboxBorder)`
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`

const ApplyBtnItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  margin: auto;
  padding: 0;
  &:first-child {
    margin-bottom: 32px;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
      position: relative;
      top: 16px;
    }
  }
  &:last-child {
    margin-top: 0;
  }
  ${mixins.mq.MinL} {
    padding: 0 32px;
    &:first-child {
      &::after {
        content: '';
        width: 1px;
        height: 168px;
        background-color: ${props => props.theme.colors.monotone75};
        position: absolute;
        left: 50%;
        top: initial;
      }
    }
  }
`

const ServiceInternationalunlimitedtalk: NextPage = () => {
  const selectedCardIds = ['data-charge']
  const pagetitle = '国際通話かけ放題'
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
  const ListArgs1 = {
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
      { text: '各種料金割引サービスの対象外となります。' },
      { text: '通話・通信料は、毎月のご利用料金と合算しての請求となります。' },
      { text: '各海外／国際サービスのご利用料金は、不課税です。' },
      {
        text: '海外／国際サービス「国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）」は、国際通話のかけ放題の対象とはならず、従量課金となります。',
      },
      { text: '国際通話かけ放題は契約日が属する月から課金開始となります。' },
      {
        text: '国際通話かけ放題を途中から契約した場合、オプション契約時点までに利用した国際通話の料金は国際通話かけ放題の対象とならず従量課金となります。必ず、国際通話の利用前にオプション申し込みを行うようご注意ください。',
      },
      {
        text: '国際通話かけ放題を解約した場合、解約手続き日にサービスが解約され、以降の国際通話は従量課金となります。',
      },
      { text: '国際通話かけ放題は日割り対象外です。' },
      {
        text: '通話先の相手国・地域によっては、現地事業者の設備などの都合により接続できない場合あります。',
      },
      {
        text: '国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。',
      },
    ],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「国際通話」サービス紹介。海外の対象国と地域への通話がかけ放題で利用できます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <ServiceHero>
          <ServiceHeroWrapper>
            <ServiceHeroTaxAttention>
              <TxtCapWhite as="p" className={Utils['Align-right']}>
                ※表記の金額はすべて不課税です。
              </TxtCapWhite>
            </ServiceHeroTaxAttention>
            <div>
              <Heading level="1">国際通話かけ放題</Heading>
              <div>
                <ServiceHeroPrice>980</ServiceHeroPrice>
                <TxtSize size="ll">円/月</TxtSize>
              </div>
              <ServiceHeroDescription>
                海外指定65の国と地域への通話がかけ放題になるオプションです。
              </ServiceHeroDescription>
              <TxtCapWhite className={Utils['Mt-16']} as="p">
                <TxtEmp01White>
                  ※「Rakuten最強プラン（データタイプ）」は対象外です。
                </TxtEmp01White>
                <br />
                ※お申し込みが必要です。
                <br />
                ※本オプションサービスは、日割り対象外です。
              </TxtCapWhite>
            </div>
          </ServiceHeroWrapper>
        </ServiceHero>

        <SystemContainer>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ApplyBtnBox>
              <Heading level="4" className={Utils['Align-center']}>
                お申し込み
              </Heading>
              <p className={Utils['Mt-8']}>
                楽天モバイルのご契約状況によってお申し込み方法が異なります。
              </p>
              <ApplyBtn className={Utils['Mt-24']}>
                <ApplyBtnItem>
                  <TxtEmp01>未契約の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="/guide/application/?lid-r=service_international-unlimited-talk_guide_application01"
                    className={Utils['Mt-8']}
                  >
                    プランと一緒に申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    契約プランを選択後、「オプションサービス」の項目からお申し込みください。
                  </p>
                </ApplyBtnItem>
                <ApplyBtnItem>
                  <TxtEmp01>ご契約中の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                    data-ratid="service_international-unlimited-talk_plans01"
                    data-ratevent="click"
                    data-ratparam="all"
                    className={Utils['Mt-8']}
                  >
                    オプションサービスを申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    ログイン後、「オプションサービスの追加・解約」からお申し込みください。
                  </p>
                </ApplyBtnItem>
              </ApplyBtn>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/international-unlimited-talk/?l-id=service_international-unlimited-talk_guide_international-unlimited-talk01">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <GrayBox
          className={`${Utils['Pt-40']} ${Utils['Pb-64']} ${Utils['Mt-64']}`}
        >
          <SystemContainer>
            <Heading level="2">主な仕様</Heading>
            <InternationalContent>
              <li>
                <img
                  src={`${assets}img/service/international-unlimited-talk/img-01-230927.png`}
                  alt=""
                />
                <div className={Utils['Mt-24']}>
                  海外指定65の国と地域への通話がかけ放題になるオプションです。対象国をご確認ください。
                </div>
              </li>
              <li>
                <img
                  src={`${assets}img/service/international-unlimited-talk/img-02-230313.png`}
                  alt=""
                />
                <div className={Utils['Mt-24']}>
                  日本から海外の通話、海外から海外の通話が月額980円でかけ放題となります※。
                  <TxtCap className={Utils['Mt-16']} as="p">
                    ※海外から発信する際はRakuten
                    Linkをご利用ください。海外からOS標準の電話アプリを利用して発信した場合、国際通話かけ放題のサービス対象外となります。
                  </TxtCap>
                </div>
              </li>
              <li>
                <img
                  src={`${assets}img/service/international-unlimited-talk/img-03-230313.png`}
                  alt=""
                />
                <div className={Utils['Mt-24']}>
                  Rakuten
                  LinkアプリおよびOS標準の電話アプリでの通話が対象となります。
                  <div className={Utils['Mt-8']}>
                    <LinkIconAfter href="/service/rakuten-link/">
                      Rakuten Linkの詳細を見る
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </div>
              </li>
            </InternationalContent>
          </SystemContainer>
        </GrayBox>
        <SystemContainer className={`${Utils['Mt-64']}`}>
          <Heading level="2">海外指定65の国と地域への発信</Heading>
          <Scrollhint text="スクロールできます">
            <UnlimitedTable className={Utils['Mt-24']}>
              <table>
                <tbody>
                  <tr>
                    <th>発信</th>
                    <th>
                      Rakuten Linkを利用した場合<sup>※1</sup>
                    </th>
                    <th>OS標準の電話アプリ使用時</th>
                  </tr>
                  <tr>
                    <td>日本から海外へ電話をかける</td>
                    <td
                      rowSpan={2}
                      style={{ verticalAlign: 'middle!important' }}
                    >
                      国際通話かけ放題対象
                    </td>
                    <td>国際通話かけ放題対象</td>
                  </tr>
                  <tr>
                    <td>
                      海外から海外<sup>※2</sup>へ電話をかける
                    </td>
                    <td>国際通話かけ放題対象外</td>
                  </tr>
                </tbody>
              </table>
            </UnlimitedTable>
          </Scrollhint>

          <TxtCap as="p" className={Utils['Mt-16']}>
            ※1 Rakuten
            Linkを利用して海外から海外へ電話をかける場合は、海外の対象国と地域からのみ発信可能となります。その他の地域に関しては、Wi-Fi接続中の場合のみRakuten
            Linkでの発信が可能となります。
            <br />
            ※2 日本を含む
          </TxtCap>
          <AccordionList
            text={'対象国'}
            isOpened={false}
            className={Utils['Mt-32']}
          >
            アイスランド、アイルランド、アメリカ（ハワイ）、アメリカ本土、アンドラ、イギリス、イタリア、インド、インドネシア、エストニア、オーストラリア、オーストリア、オランダ、カナダ、カンボジア、韓国、キプロス、ギリシャ、グアドループ、グアム、クロアチア、サイパン、ジブラルタル、シンガポール、スイス、スウェーデン、スペイン、スロバキア、スロベニア、タイ、台湾、チェコ共和国、中国、デンマーク、ドイツ、トルコ、ニュージーランド、ノルウェー、ハンガリー、フィリピン、フィンランド、ブラジル、フランス、フランス領ギアナ、ブルガリア、ベトナム、ペルー、ベルギー、ポーランド、ポルトガル、香港、マカオ、マルタ、マルティニーク、マレーシア、南アフリカ、メキシコ、モロッコ、ラトビア、リトアニア、リヒテンシュタイン、ルーマニア、ルクセンブルク、レユニオン、ロシア（2023年10月1日時点）
            <TxtCap as="p" className={Utils['Mt-16']}>
              <TxtEmp02>
                ※アラブ首長国連邦、ウクライナ、エジプト、カタール、クウェート、サウジアラビア、ヨルダンは、国際通話かけ放題の対象外、また国際SMS送信の無料対象国外です。
              </TxtEmp02>
              <br />
              <TxtEmp02>※ミャンマーは、国際通話かけ放題の対象外です。</TxtEmp02>
              <br />
              ※海外ローミング（データ通信）および国際通話、国際SMS、国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。
            </TxtCap>
          </AccordionList>
          <Heading level="2" className={`${Utils['Mt-56']}`}>
            ご利用上の注意
          </Heading>
          <ListDisc {...ListArgs1} className={`${Utils['Mt-24']}`} />

          <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
            <ApplyBtnBox>
              <Heading level="4" className={Utils['Align-center']}>
                お申し込み
              </Heading>
              <p className={Utils['Mt-8']}>
                楽天モバイルのご契約状況によってお申し込み方法が異なります。
              </p>
              <ApplyBtn className={Utils['Mt-24']}>
                <ApplyBtnItem>
                  <TxtEmp01>未契約の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="/guide/application/?lid-r=service_international-unlimited-talk_guide_application02"
                    className={Utils['Mt-8']}
                  >
                    プランと一緒に申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    契約プランを選択後、「オプションサービス」の項目からお申し込みください。
                  </p>
                </ApplyBtnItem>
                <ApplyBtnItem>
                  <TxtEmp01>ご契約中の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                    data-ratid="service_international-unlimited-talk_plans02"
                    data-ratevent="click"
                    data-ratparam="all"
                    className={Utils['Mt-8']}
                  >
                    オプションサービスを申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    ログイン後、「オプションサービスの追加・解約」からお申し込みください。
                  </p>
                </ApplyBtnItem>
              </ApplyBtn>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/international-unlimited-talk/?l-id=service_international-unlimited-talk_guide_international-unlimited-talk02">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <SystemContainer>
          <ServiceGlobalBnr
            className={Utils['Mt-56']}
            lid="international-unlimited-talk"
            lazy={true}
          />
        </SystemContainer>

        <GrayBox className={`${Utils['Mt-56']} ${Utils['Py-56']}`}>
          <SystemContainer>
            <Related
              lId="international-unlimited-talk"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />

            <Recommend
              className={Utils['Mt-56']}
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </GrayBox>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceInternationalunlimitedtalk
