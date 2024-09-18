import type { NextPage } from 'next'
import { useContext } from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
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
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { UlOnly } from '@components/atoms/List'
import { LinkNormal } from '@components/atoms/Link'
import { Table as TableWrapper } from '@components/atoms/Table'
import { Related } from '@components/include/service/Related'
import { Recommend } from '@components/include/service/Recommend'

const GrayBox = styled.div`
  padding-block: 16px;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const CustomUl = styled.ul`
  > li {
    list-style-type: none !important;
  }
`
const CustomTableWrapperSp = styled(TableWrapper)`
  table tr:first-child td {
    background-color: ${props => props.theme.colors.darkBlue5};
    padding: 8px;
  }
  .service-Table01_td {
    vertical-align: middle !important;
  }
`
const CustomTableWrapperPc = styled(TableWrapper)`
  max-width: 720px;
  .service-Table01_td {
    vertical-align: middle !important;
  }
`

const BorderPicture = styled.div`
  text-align: center;
  margin-top: 32px;
  > picture {
    border: 1px solid #e0e0e0;
  }
`
const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`

const ServiceCallForwarding: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const theme = useContext(ThemeContext)
  const pagetitle = '着信転送'
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
        description="楽天モバイルの「着信転送」サービス紹介。お客様のスマートフォン（スマホ）にかかってきた電話を、あらかじめ登録済みの別の電話へ転送します"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Pb-56']}>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            着信転送
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            かかってきた電話を、あらかじめ登録済みの別の電話へ転送します。転送パターンは4種類から選択可能です。
          </TxtNormal>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
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
            <ButtonRegularLarge href="/guide/call-forwarding/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <GrayBox className={Utils['Pb-56']}>
          <SystemContainer>
            <Heading level="2" className={Utils['Mt-40']} as="h2">
              転送パターン
            </Heading>
            <div className={`${Utils['Mt-24']}`}>
              <DescriptionListDefault>
                <div>
                  <dt>無条件転送</dt>
                  <dd>かかってきたすべての電話を転送</dd>
                </div>
                <div>
                  <dt>話中転送</dt>
                  <dd>通話中に他の相手からかかってきた電話を転送</dd>
                </div>
                <div>
                  <dt>無応答転送</dt>
                  <dd>着信に応答しなかった場合に電話を転送</dd>
                </div>
                <div>
                  <dt>圏外転送</dt>
                  <dd>圏外にいる時や、電源OFF時にかかってきた電話を転送</dd>
                </div>
              </DescriptionListDefault>
            </div>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※Rakuten
              Linkアプリをご利用の場合、圏外転送はサポート非対応となります。
            </TxtCap>
            <UlOnly className={Utils['Mt-16']}>
              <li>話中転送、無応答転送、圏外転送は同時に設定が可能です。</li>
              <li>
                転送の優先順位は、以下のとおりです。
                <br />
              </li>
            </UlOnly>
            <CustomUl className={Utils['Ml-16']}>
              <li>1. 無条件転送</li>
              <li>2. 圏外転送</li>
              <li>3. 話中転送</li>
              <li>4. 無応答転送</li>
            </CustomUl>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="2" as="h2">
            通話料金
          </Heading>
          <UlOnly className={Utils['Mt-16']}>
            <li>転送中は転送元に通話料が発生します（22円／30秒）。</li>
            <li>
              転送先がお話し中もしくは応答しない場合、通話料は発生しません。
            </li>
          </UlOnly>

          <Heading level="3" className={Utils['Mt-40']}>
            Rakuten Linkをご利用の場合
          </Heading>
          <p className={Utils['Mt-16']}>
            通話料金が課金される場合は「
            <LinkNormal href="https://network.mobile.rakuten.co.jp/fee/un-limit/detail/#call-02">
              Rakuten Linkアプリの課金仕様
            </LinkNormal>
            」に準じます。
          </p>

          <Heading level="4" className={Utils['Mt-40']}>
            Androidの場合
          </Heading>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            お客様の携帯電話から転送先までの通話料
          </TxtEmp01>

          <div className={Utils['Mt-16']}>
            <CustomTableWrapperPc className={Utils['Disp-pc']}>
              <table>
                <tbody>
                  <tr>
                    <th scope="row" rowSpan={4} className="service-Table01_td">
                      発信者がRakuten Linkを利用している場合
                    </th>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料<TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan={4} className="service-Table01_td">
                      発信者がRakuten Linkを利用していない場合
                    </th>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料<TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapperPc>

            <CustomTableWrapperSp className={Utils['Disp-tb-sp']}>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <TxtEmp01 as="p">
                        発信者がRakuten Linkを利用している場合
                      </TxtEmp01>
                    </td>
                  </tr>
                  <tr>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料
                      <TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <TxtEmp01 as="p">
                        発信者がRakuten Linkを利用していない場合
                      </TxtEmp01>
                    </td>
                  </tr>
                  <tr>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料
                      <TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapperSp>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※Rakuten Linkの仕様上、ご利用の通信環境が不安定の場合はRakuten
              Linkアプリではなく、OS標準の電話アプリで着信します。この場合、OS標準アプリでの転送と同額の通話料が発生します。
            </TxtCap>
          </div>

          <Heading level="4" className={Utils['Mt-24']}>
            iOSの場合
          </Heading>
          <p className={Utils['Mt-16']}>
            iOSでは発信者がRakuten
            Linkを利用していない場合、転送する場合もOS標準アプリと同額の通話料が発生します。
          </p>
          <TxtCap as="p">
            ※Rakuten Linkアプリ
            iOSバージョンでは国内外問わずOS標準の電話アプリからの発信を着信できないため。
          </TxtCap>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            お客様の携帯電話から転送先までの通話料
          </TxtEmp01>
          <div className={Utils['Mt-16']}>
            <CustomTableWrapperPc className={Utils['Disp-pc']}>
              <table>
                <tbody>
                  <tr>
                    <th scope="row" rowSpan={4} className="service-Table01_td">
                      発信者がRakuten Linkを利用している場合
                    </th>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料<TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan={4} className="service-Table01_td">
                      発信者がRakuten Linkを利用していない場合
                    </th>
                    <td>無条件転送</td>
                    <td rowSpan={4} className="service-Table01_td">
                      有料
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapperPc>

            <CustomTableWrapperSp className={Utils['Disp-tb-sp']}>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <TxtEmp01 as="p">
                        発信者がRakuten Linkを利用している場合
                      </TxtEmp01>
                    </td>
                  </tr>
                  <tr>
                    <td>無条件転送</td>
                    <td rowSpan={3} className="service-Table01_td">
                      無料
                      <TxtCap>※</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                    <td>有料</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <TxtEmp01 as="p">
                        発信者がRakuten Linkを利用していない場合
                      </TxtEmp01>
                    </td>
                  </tr>
                  <tr>
                    <td>無条件転送</td>
                    <td rowSpan={4} className="service-Table01_td">
                      有料
                    </td>
                  </tr>
                  <tr>
                    <td>話中転送</td>
                  </tr>
                  <tr>
                    <td>無応答転送</td>
                  </tr>
                  <tr>
                    <td>圏外転送</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapperSp>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※Rakuten Linkの仕様上、ご利用の通信環境が不安定の場合はRakuten
              Linkアプリではなく、OS標準の電話アプリで着信します。この場合、OS標準アプリでの転送と同額の通話料が発生します。
            </TxtCap>
          </div>

          <Heading level="2" as="h2" className={Utils['Mt-40']}>
            利用明細の確認
          </Heading>
          <p className={Utils['Mt-16']}>
            「my
            楽天モバイル」の「利用明細」で着信転送の利用明細が確認できます。
          </p>
          <TxtCap as="p">
            ※利用明細の確認方法は「
            <LinkNormal href="https://network.mobile.rakuten.co.jp/guide/payment/usage-details/">
              利用明細と各種明細の確認方法
            </LinkNormal>
            」をご確認ください。
          </TxtCap>

          <Heading level="3" className={Utils['Mt-40']}>
            OS標準アプリで着信転送した場合
          </Heading>
          <p className={Utils['Mt-16']}>
            「通信区分」が「携帯（転送）」と記載されます。
          </p>
          <BorderPicture>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/guide/call-forwarding/detail-pc-230221.png`}
              />
              <img
                src={`${assets}img/guide/call-forwarding/detail-pc-230221.png`}
                width="750"
                alt="OS標準アプリで着信転送した場合"
                loading="lazy"
              />
            </picture>
          </BorderPicture>

          <Heading level="3" className={Utils['Mt-24']}>
            Rakuten Linkアプリで着信転送した場合
          </Heading>
          <p className={Utils['Mt-16']}>
            「通信区分」が「音声」と記載されます。
          </p>
          <TxtCap as="p">
            ※着信転送以外のRakuten
            Linkアプリで発信した際と同一区分となります。（2022年12月時点）
          </TxtCap>
          <BorderPicture>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/guide/call-forwarding/detail-2-pc-221228.png`}
              />
              <img
                src={`${assets}img/guide/call-forwarding/detail-2-pc-221228.png`}
                width="750"
                alt="Rakuten Linkアプリで着信転送した場合"
                loading="lazy"
              />
            </picture>
          </BorderPicture>

          <Heading level="2" as="h2" className={Utils['Mt-40']}>
            注意事項
          </Heading>

          <UlOnly className={Utils['Mt-16']}>
            <li>他の携帯電話や、固定電話にも転送できます。</li>
            <li>海外事業者の携帯電話、一般電話には転送できません。</li>
            <li>
              着信転送は留守番電話と併用できません。着信転送を契約すると留守番電話は停止されます。留守番電話を再度利用する場合は、再度サービスの開始を設定する必要があります。
            </li>
            <li>
              転送先の電話から、さらに転送設定されている携帯電話に転送すると、相互に転送を繰り返して着信できない場合があります。転送先電話番号を登録する際にはご注意ください。
            </li>
            <li>3桁の番号や短縮ダイヤル、フリーダイヤルの登録はできません。</li>
            <li>Rakuten Linkアプリでも転送電話の機能がご利用いただけます。</li>
          </UlOnly>
          <TxtCap as="p">
            ※2022年11月24日～（
            <LinkNormal href="https://network.mobile.rakuten.co.jp/faq/detail/10000362/">
              詳細はこちら
            </LinkNormal>
            ）
          </TxtCap>

          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <ButtonRegularLarge href="/guide/call-forwarding/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="call-forwarding"
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
              lId="call-forwarding"
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

export default ServiceCallForwarding
