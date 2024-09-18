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
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import {
  MediaGridSmall,
  MediaImage,
  MediaList2,
} from '@components/layout/Media'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { IconArrowDown, IconNewTabLine, IconPdf } from '@components/icons'
import { mixins } from '@components/utils/Mixins'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { AccordionList } from '@components/atoms/AccordionList'
import { InfoboxLight } from '@components/atoms/Infobox'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const SystemWrapperCustom = styled(SystemWrapper)`
  .mt-16-8 {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 8px;
    }
  }
  .mt-64-40 {
    margin-top: 64px;
    ${mixins.mq.MinL} {
      margin-top: 40px;
    }
  }
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const AnchorSec = styled(SystemContainer)`
  padding-bottom: 16px;
  ul {
    margin: 0 auto;
    display: flex;
    width: fit-content;
  }
  .box {
    width: 240px;
    padding: 16px;
    border: 1px solid ${props => props.theme.colors.darkBlue20};
    background-color: ${props => props.theme.colors.white};
  }
`
const LinkHorizontal = styled.ul`
  @media screen and (max-width: ${props => props.theme.max.m}) {
    justify-content: left;
    justify-content: flex-start;
  }
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  gap: 16px 24px;
`
const AppleIcon = styled(MediaImage)`
  > img {
    max-width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    max-width: 120px;
  }
`
const SingleMedia = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${mixins.mq.MinL} {
    width: 100% !important;
    text-align: center;
  }
  .table {
    ${mixins.mq.MinL} {
      max-width: 504px;
      margin-inline: auto;
    }
  }
`
const DescriptionListHalf = styled(DescriptionListDefault)`
  ${mixins.mq.MinL} {
    max-width: 504px;
    margin-inline: auto;
  }
`

const ServiceApplewatchcare: NextPage = () => {
  const selectedCardIds = [
    'applecare',
    'replacement-warranty-plus',
    'replacement-warranty-sim',
  ]
  const pagetitle = 'あんしん保証with AppleCare Services for Apple Watch'
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
    item: [{ text: '保証', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルで購入したApple Watchの保証サービス「あんしん保証with AppleCare Services for Apple Watch」の紹介です。もしもの時の修理サービスとサポート、盗難や紛失に対する保証をApple から直接受けられます。"
      />

      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />

      <SystemWrapperCustom>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            {pagetitle}
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGridSmall className={Utils['Mt-16']}>
            <MediaImage>
              <AppleIcon>
                <img
                  src={`${assets}img/service/applewatch-care/apple-care_services-thumb.svg?220413"`}
                  alt=""
                />
              </AppleIcon>
            </MediaImage>
            <div>
              <p>
                もしもの時の修理サービスとサポートをAppleから直接受けられます。
                <br />
                別途お申し込み手続きが必要となります。
              </p>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※楽天モバイルで購入されたApple Watchが対象です。
                <TxtEmp02>
                  楽天モバイル以外で購入されたApple Watchは対象外です。
                </TxtEmp02>
                <br />
                <TxtEmp02>※Apple Watch購入時のみお申し込み可能です。</TxtEmp02>
              </TxtCap>
            </div>
          </MediaGridSmall>
          <div className={Utils['Mt-64']}>
            <Heading level="2">月額利用料</Heading>
            <DescriptionListDefault className={Utils['Mt-24']}>
              <div>
                <dt>
                  Apple Watch SE（第2世代）
                  <br />
                  Apple Watch SE（第1世代）
                  <br />
                  Apple Watch Nike SE
                </dt>
                <dd>280円／月</dd>
              </div>
              <div>
                <dt>
                  Apple Watch Series 9
                  <br />
                  Apple Watch Series 8
                  <br />
                  Apple Watch Series 7
                  <br />
                  Apple Watch Nike Series 7
                </dt>
                <dd>500円／月</dd>
              </div>
              <div>
                <dt>
                  Apple Watch Ultra 2
                  <br />
                  Apple Watch Ultra
                </dt>
                <dd>650円／月</dd>
              </div>
            </DescriptionListDefault>
          </div>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <ButtonRegularLarge as="a" href="/guide/applewatch-care/">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <BgGray className={`${Utils['Mt-64']} ${Utils['Pt-16']}`}>
          <AnchorSec>
            <LinkHorizontal>
              <li className="box">
                <LinkNormal
                  href="#service"
                  onClick={e => anchorCallback(e, 'service')}
                >
                  <LinkIconBefore as="span">
                    <IconArrowDown />
                    サービス内容
                  </LinkIconBefore>
                </LinkNormal>
              </li>
              <li className="box">
                <LinkNormal
                  href="#notes"
                  onClick={e => anchorCallback(e, 'notes')}
                >
                  <LinkIconBefore as="span">
                    <IconArrowDown />
                    ご利用上の注意
                  </LinkIconBefore>
                </LinkNormal>
              </li>
            </LinkHorizontal>
          </AnchorSec>
        </BgGray>

        <SystemContainer className={Utils['Mt-64']}>
          <div>
            <Heading level="2">サービス特長</Heading>
            <div>
              <div className={Utils['Mt-32']}>
                <Heading level="3">
                  Apple 専任スペシャリストがワンストップサポート
                </Heading>
                <p className="mt-16-8">
                  Apple
                  の専任スペシャリストがチャットまたは電話にて優先的に対応し、製品や利用方法についてサポートします。
                </p>
              </div>
              <div className="mt-64-40">
                <div>
                  <Heading level="3">もしもの時の故障を保証</Heading>
                </div>
                <div className="mt-16-8">
                  <p>
                    過失や事故による損傷（落下、水没、ひび割れ）を保証します。
                    修理・交換する際には別途
                    <LinkNormal
                      href="#service"
                      onClick={e => anchorCallback(e, 'service')}
                    >
                      自己負担金
                    </LinkNormal>
                    が発生いたします。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※1契約につき、Apple Watch1台を回数制限なく修理・交換します。
                    <br />
                    ※故意によって生じた損傷、不正改造による機能障害がある場合は対象外です。
                  </TxtCap>
                </div>
              </div>
              <div>
                <div className="mt-64-40">
                  <Heading level="3">自然故障は無償保証</Heading>
                </div>
                <div className="mt-16-8">
                  <p>
                    自然故障や電池（バッテリー）消耗などの場合は、無償で修理・交換いたします。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※自然故障の場合は、1契約につき、Apple
                    Watch1台を無制限に修理・交換します。
                    <br />
                    ※Apple
                    Watchおよび付属アクセサリに材質上または製造上の瑕疵が生じた場合、またはバッテリーが保持する容量が本来の容量の80%未満になった場合に利用できます。
                  </TxtCap>
                </div>
              </div>
              <div>
                <div className="mt-64-40">
                  <Heading level="3">修理の受付方法が豊富</Heading>
                </div>
                <div className="mt-16-8">
                  <p>
                    お客様のご都合にあわせて、修理の受付方法をお選びいただけます。
                  </p>
                  <p>
                    持ち込み修理：お近くのApple StoreまたはApple
                    正規サービスプロバイダーにApple Watchをお持ちください。Apple
                    の認定技術者が対応いたします。
                    <br />
                    配送修理：宅配業者がご自宅やオフィスにApple
                    Watchを引き取りにうかがい、修理が完了しましたら、Apple
                    よりご返送いたします。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
                  </TxtCap>
                </div>
              </div>
              <div>
                <div className="mt-64-40">
                  <Heading level="3">
                    製品が故障した場合、交換品をいち早くお届け
                  </Heading>
                </div>
                <div className="mt-16-8">
                  <p>
                    エクスプレス交換サービスのご利用で、Apple
                    が交換用のデバイスをお届けし、修理の待ち時間をなくします。
                  </p>
                  <p className="mt-16-8">
                    <LinkIconAfter
                      href="https://support.apple.com/ja-jp/watch/repair/service/express-replacement"
                      target="_blank"
                    >
                      Apple社のエクスプレス交換サービスの詳細を見る
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </p>
                  <TxtCap as="ul" className={Utils['Mt-8']}>
                    <li>
                      ※ご利用には別途
                      <LinkNormal
                        href="#service"
                        onClick={e => anchorCallback(e, 'service')}
                      >
                        自己負担金
                      </LinkNormal>
                      が発生いたします。
                    </li>
                    <li>
                      ※Apple
                      Watch本体のみ対象です。画面交換サービスやアクセサリなどは対象外となります。
                    </li>
                    <li>
                      ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
                    </li>
                    <li>※対象地域：日本国内（離島などの一部地域を除く）</li>
                  </TxtCap>
                </div>
              </div>
            </div>
          </div>

          <div id="service" className={Utils['Mt-64']}>
            <Heading level="2">サービス内容</Heading>
            <p className={Utils['Mt-16']}>
              故障の場合、修理（持ち込み修理、配送修理）と交換（エクスプレス交換サービス）がお選びいただけます。修理・配送日数や負担額をご確認のうえ、ご利用ください。
            </p>

            <InfoboxLight
              className={`${Utils['Mt-64']} ${Utils['Pb-32']} ${Utils['Align-center']}`}
            >
              <Heading level="3">修理</Heading>
              <p className={Utils['Mt-16']}>
                修理の受付方法は2種類あります。お客様のご都合にあわせて、ご利用ください。
              </p>
            </InfoboxLight>

            <MediaList2 className={Utils['Mt-32']}>
              <div>
                <Heading level="3">持ち込み修理</Heading>
                <p className={Utils['Mt-24']}>
                  お近くのApple StoreまたはApple
                  正規サービスプロバイダーに、故障したApple
                  Watchをお持ちいただく方法になります。
                </p>
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="https://locate.apple.com/?a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                    target="_blank"
                  >
                    お近くのApple StoreまたはApple
                    正規サービスプロバイダーを確認する
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
                <DescriptionListDefault className={Utils['Mt-24']}>
                  <div>
                    <dt>負担額</dt>
                    <dd className={Utils['Pb-32']}>
                      <p>9,200円</p>
                      <TxtCap as="p" className={Utils['Mt-16']}>
                        ※自然故障の場合は無償
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <dt>予約</dt>
                    <dd>必須</dd>
                  </div>
                  <div>
                    <dt>修理日数</dt>
                    <dd className={Utils['Pb-32']}>
                      <p>即日～</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※故障状況によりお預かり修理になります。
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <dt>代替機</dt>
                    <dd>貸出なし</dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2023年9月15日現在のご利用料金です。
                  <br />
                  ※故障機の診断の結果、全損（壊滅的な損傷）や改造品であった場合、故意・過失の別なく、別途修理価格に定める保証外交換機価格をお支払いいただきます。
                </TxtCap>
                <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/guide/applewatch-care/repair/?tab-list=tab-menu1#tab-menu1"
                  >
                    持ち込み修理のご利用方法を見る
                  </ButtonRegularLarge>
                </div>
              </div>
              <div>
                <Heading level="3">配送修理</Heading>
                <p className={`${Utils['Mt-24']} ${Utils['Pb-40']}`}>
                  宅配業者がご自宅やオフィスにApple
                  Watchを引き取りにうかがい、修理が完了しましたら、Apple
                  よりご返送いたします。
                  <br />
                  修理は通常5～7営業日で完了します。
                </p>
                <DescriptionListDefault className={Utils['Mt-24']}>
                  <div>
                    <dt>負担額</dt>
                    <dd>
                      <p>9,200円</p>
                      <TxtCap as="p" className={Utils['Mt-16']}>
                        ※自然故障の場合は無償
                        <br />
                        ※送料無料
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <dt>予約</dt>
                    <dd>必須</dd>
                  </div>
                  <div>
                    <dt>修理日数</dt>
                    <dd>
                      <p>通常5～7営業日</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※故障状況により前後します。別途配送にお日にちを頂戴いたします。
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <dt>代替機</dt>
                    <dd>貸出なし</dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2023年9月15日現在のご利用料金です。
                  <br />
                  ※故障機の診断の結果、全損（壊滅的な損傷）や改造品であった場合、故意・過失の別なく、別途修理価格に定める保証外交換機価格をお支払いいただきます。
                </TxtCap>
                <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/guide/applewatch-care/repair/?tab-list=tab-menu2#tab-menu2"
                  >
                    配送修理のご利用方法を見る
                  </ButtonRegularLarge>
                </div>
              </div>
            </MediaList2>

            <InfoboxLight
              className={`${Utils['Mt-64']} ${Utils['Pb-32']} ${Utils['Pt-24']} ${Utils['Align-center']}`}
            >
              <Heading level="3">交換</Heading>
            </InfoboxLight>

            <MediaList2 className={Utils['Mt-32']}>
              <SingleMedia id="service1">
                <Heading level="3">エクスプレス交換サービス（故障）</Heading>
                <p className={Utils['Mt-24']}>
                  いち早く交換して修理の待ち時間をなくされたい場合は、エクスプレス交換サービスをご利用ください。
                  <br className={Utils['Disp-pc']} />
                  Apple から交換品がご指定の住所に届きます。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
                </TxtCap>
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="https://support.apple.com/ja-jp/watch/repair/service/express-replacement"
                    target="_blank"
                  >
                    Apple社のエクスプレス交換サービスの詳細を見る
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
                <DescriptionListDefault
                  className={`${Utils['Mt-24']} ${Utils['Align-left']} table`}
                >
                  <div>
                    <dt>負担額</dt>
                    <dd className={Utils['Pb-32']}>
                      <p>9,200円</p>
                      <TxtCap as="p">
                        ※自然故障の場合は無償
                        <br />
                        ※送料無料
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <dt>予約</dt>
                    <dd>必須</dd>
                  </div>
                  <div>
                    <dt>配送日数</dt>
                    <dd>
                      <p>最短翌日</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※交通状況や天候の影響で遅延する可能性があります。
                      </TxtCap>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※ 対象地域：日本国内（離島などの一部地域を除く）
                      </TxtCap>
                    </dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap
                  as="p"
                  className={`${Utils['Mt-8']} ${Utils['Align-left']} table`}
                >
                  ※2023年9月15日現在のご利用料金です。
                </TxtCap>
                <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/guide/applewatch-care/replacement/"
                  >
                    エクスプレス交換サービスのご利用方法を見る
                  </ButtonRegularLarge>
                </div>
              </SingleMedia>
            </MediaList2>

            <InfoboxLight
              className={`${Utils['Mt-64']} ${Utils['Pb-32']} ${Utils['Align-center']}`}
            >
              <Heading level="3">サポート</Heading>
              <p className={Utils['Mt-16']}>
                製品や利用方法について、Apple
                の専任スペシャリストが、お電話もしくはチャットにて優先的にサポートします。
                <br />
                Apple
                サポートからお問い合わせ内容を指定し、ご希望のお問い合わせ方法をご利用ください。
                <br />
                Apple
                IDと製品のIMEI（シリアル番号）をご用意のうえ、ご利用ください。
              </p>
            </InfoboxLight>
            <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
              <TxtCap as="p">
                ※ IMEIの確認方法：
                <br />
                【Apple
                Watchからの場合】設定Appを開き「一般」＞「情報」の順にタップし、下にスクロールすると表示されます。
                <br />
                【iPhoneからの場合】Apple Watch
                Appを開き「マイウォッチ」タブをタップして、「一般」＞「情報」の順にタップすると表示されます。
                <br />
                ※電話料金がかかる場合があります。電話番号およびサポート営業時間は変更される場合があります。
              </TxtCap>
            </div>

            <DescriptionListHalf className={Utils['Mt-24']}>
              <div>
                <dt className={`${Utils['Pt-24']} ${Utils['Pb-24']}`}>
                  負担額
                </dt>
                <dd className={`${Utils['Pt-24']} ${Utils['Pb-24']}`}>
                  <p>無償</p>
                </dd>
              </div>
            </DescriptionListHalf>
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge
                as="a"
                href="https://getsupport.apple.com/?a8=UnOGgnV4Raqlj4dS00LraOYyS0jaoI1AZ4Y_vOjP2BWqEymPEaW4EyOUiS2ydbO-2nM1RajrGItTxs00000015198001"
                target="_blank"
              >
                Apple サポートにアクセスする
                <IconNewTabLine className="icon-end" />
              </ButtonRegularLarge>
            </div>
          </div>
          <div id="notes" className={Utils['Mt-64']}>
            <AccordionList text={'ご利用上の注意'} isOpened={true}>
              <UlOnly>
                <li>
                  <TxtEmp02>
                    本オプションサービスは、楽天モバイルオンラインショップまたは楽天モバイルショップ（店舗）にて、Apple
                    Watchご購入と同時の場合のみご加入いただけます。
                  </TxtEmp02>
                </li>
                <li>
                  本オプションサービスは製品購入時のみ加入可能です。一度解約すると、再度加入することはできません。
                </li>
                <li>
                  本オプションサービスは、保証対象となるApple
                  Watchを受け取った時点から適用され、課金が開始されます。
                  <p className={`${Utils['Mt-8']} ${Utils['Ml-16']}`}>
                    ・楽天モバイルオンラインショップで購入：Apple
                    Watchの配達完了時点から適用
                  </p>
                  <p className={`${Utils['Mt-8']} ${Utils['Ml-16']}`}>
                    ・楽天モバイル店頭で購入：購入時点から適用
                  </p>
                </li>
                <li>
                  ご利用料金に滞りがある場合、本契約のご利用をお断りする場合があります。
                </li>
                <li>
                  Apple Watchの修理ご利用時の修理価格の適用や
                  Apple社が提供する各サービスは、Apple社への加入登録が完了をするまで、ご利用いただけない場合がございます。
                </li>
                <li>
                  詳細は
                  <LinkIconAfter
                    href="/terms/pdf/rakuten_mobile_applewatch_care_services.pdf"
                    target="_blank"
                  >
                    「あんしん保証with AppleCare Services for Apple
                    Watch」会員規約
                    <IconPdf />
                  </LinkIconAfter>
                  をご確認ください。
                </li>
                <li>
                  自己負担金のお支払いは、当社またはApple社が別途定める方法にて所定のサービス料のお支払いをお願いいたします。
                </li>
                <li>
                  本オプションサービスは、iPhone向けの「
                  <LinkNormal href="/service/iphone/applecare/">
                    故障紛失保証 with AppleCare Services
                  </LinkNormal>
                  」と異なり、盗難・紛失は対象外となります。
                </li>
              </UlOnly>
            </AccordionList>

            <div className={`${Utils['Mt-64']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge as="a" href="/guide/applewatch-care/">
                お申し込み・ご利用方法を見る
              </ButtonRegularLarge>
            </div>
          </div>
        </SystemContainer>
        <BgGray className={`${Utils['Mt-64']} ${Utils['Mb-8']}`}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="applewatch-care"
              selectedIds={selectedCardIds}
              relatedTitle={'その他の保証サービス'}
            />
            <Recommend
              className={Utils['Mt-24']}
              lId="tradein"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
      </SystemWrapperCustom>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceApplewatchcare
