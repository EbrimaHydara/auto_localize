import type { NextPage } from 'next'
import React, { useCallback, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import {
  LinkIconAfter,
  LinkIconBefore,
  LinkNormal,
} from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import { ButtonPrimaryLarge, ButtonRegular } from '@components/atoms/Buttons'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import {
  IconChevronRight,
  IconArrowDown,
  IconNewTabLine,
  IconPdf,
} from '@components/icons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'

import { TradeinPrice } from '@components/fragment/service/tradein/TradeinPrice'
import { RelatedMedia } from '@components/include/common/RelatedMedia'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { TradeinGuide } from '@components/include/service/tradein/TradeinGuide'
import { NewsSlim } from '@components/include/common/NewsSlim'
import { Table } from '@components/atoms/Table'

const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const NavAnchor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  margin-top: 40px;
  ${mixins.mq.MaxM} {
    justify-content: flex-start;
  }
`
const TradeinPriceList = styled.ul`
  display: grid;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 18px;
  }
`
const TradeinPriceItem = styled.li`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  row-gap: 0;
  border-top: 1px solid ${props => props.theme.colors.monotone75};
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  padding-top: 16px;
  padding-bottom: 4px;
  dl {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
    row-gap: 0;
  }
  dt {
    margin-bottom: 8px;
  }
  dd {
    &:last-child {
      margin-top: 5px;
    }
  }
`
const TradeinPriceName = styled.div`
  display: grid;
  grid-template-columns: 104px auto;
  column-gap: 8px;
`
const TradeinPriceLabel = styled(TxtSize)`
  padding: 4px 6.5px;
  max-width: 104px;
  height: fit-content;
  text-align: center;
  background-color: ${props => props.theme.colors.monotone93};
`
const Colums2 = styled.div`
  ${mixins.mq.MinL} {
    display: flex;
    flex-wrap: wrap;
  }
  > div {
    ${mixins.mq.MinL} {
      width: calc((100% - 24px * 1) / 2);
    }
  }
  div + div {
    ${mixins.mq.MinL} {
      margin: 24px 0;
    }
    ${mixins.mq.MaxM} {
      margin-top: 24px;
    }
  }
`
const SubTitle = styled(Heading)`
  text-align: center;
  font-size: ${props => props.theme.fonts.ll};
  ${mixins.mq.MaxM} {
    text-align: left;
    br {
      display: none;
    }
  }
`
const Linkflex = styled.ul`
  display: flex;
  flex-wrap: wrap;
  > li {
    margin: 0 24px 16px 0;
  }
`

const HeroBottomBtn = styled.div`
  padding-block: 40px;
  > a {
    display: block;
    margin: 0 auto;
  }
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const Hero = styled.h1`
  text-align: center;
  background-color: #e3f7ff;
`

const TableCustom = styled(Table)`
  table {
    th {
      vertical-align: middle;
      text-align: center;
      width: calc(100% / 3);
    }
    td {
      padding: 16px 8px;
      vertical-align: middle;
      text-align: center;
    }
  }
`

const ServiceTradein: NextPage = () => {
  const selectedCardIds = [
    'applecare',
    'replacement-warranty-plus',
    'replacement-warranty-sim',
    'applewatch-care',
  ]
  const theme = useContext(ThemeContext)
  const pagetitle = 'スマホ下取りサービス'
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
  const [lastUpdate, setLastUpdate] = useState('')
  const getUpdateData = (formattedDate: string) => {
    setLastUpdate(formattedDate)
  }

  type TradeInPriceMonth = {
    device: string
    carrier: string | JSX.Element
    name: string
    max?: boolean
    price: string
  }

  type RecommendTradeinPrice = {
    device: string
    carrier: string
    price: string
    maxPrice: string
  }
  const outputTradeinPriceList = useCallback((items: TradeInPriceMonth[]) => {
    return (
      <TradeinPriceList className={Utils['Mt-24']}>
        {items.map((item, index) => (
          <TradeinPriceItem key={index}>
            <dl>
              <TxtSize size="ll" as="dt" className={Utils['Weight-bold']}>
                {item.device}
              </TxtSize>
              <dd>
                <TradeinPriceName>
                  <TradeinPriceLabel size="s" as="div">
                    {item.carrier}
                  </TradeinPriceLabel>
                  <TxtEmp01 as="div">{item.name}</TxtEmp01>
                </TradeinPriceName>
              </dd>
              <dd>
                <div className={Utils['Align-right']}>
                  {item.max && <TxtSize size="m">最大</TxtSize>}
                  <AlphanumericSize size="l" className={Utils['Color-primary']}>
                    {item.price}
                  </AlphanumericSize>
                  <TxtSize size="m">円</TxtSize>
                </div>
              </dd>
            </dl>
          </TradeinPriceItem>
        ))}
      </TradeinPriceList>
    )
  }, [])

  const recommendTradeinPriceTable = useCallback(
    (items: RecommendTradeinPrice[]) => {
      return (
        <TableCustom className={Utils['Mt-16']}>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>対象製品</th>
                <th colSpan={2}>下取り価格</th>
              </tr>
              <tr>
                <th>
                  通常<TxtCap>※</TxtCap>
                </th>
                <th>アップ期間（3/1〜）</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.device + item.carrier}>
                  <td>
                    {item.device}
                    <br className={Utils['Show-oxx']} />
                    <TxtCap className={Utils['Pl-8']}>({item.carrier})</TxtCap>
                  </td>
                  <td>{item.price}円</td>
                  <td>
                    最大
                    <br className={Utils['Show-oxx']} />
                    <TxtEmp02>
                      <TxtSize size="m">{item.maxPrice}</TxtSize>
                    </TxtEmp02>
                    円
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCustom>
      )
    },
    [],
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="簡単査定でお使いのスマホを高額で下取ります。下取り金額は楽天Payでお使いいただける楽天キャッシュでチャージされます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <Hero>
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/service/tradein/hero-sp-240301.png`}
              width="750"
              height="558"
            />
            <img
              src={`${assets}img/service/tradein/hero-pc-240301.png`}
              alt="スマホ下取りサービス下取り利用で最新機種をおトクにGET 3/1より一部製品の下取り価格アップ! 他社での購入品も下取り可能 手数料・送料完全無料 本体のみでOK!箱・付属品不要"
              width="1440"
              height="280"
            />
          </picture>
        </Hero>

        <SystemContainer>
          <HeroBottomBtn>
            <ButtonPrimaryLarge
              as="a"
              href="https://r10.to/hM569V"
              data-ratid="tradein_apply_top"
              data-ratevent="click"
              data-ratparam="all"
            >
              下取りのお申し込みはこちら
            </ButtonPrimaryLarge>
          </HeroBottomBtn>
        </SystemContainer>

        <GrayBox className={Utils['Py-16']}>
          <SystemContainer>
            <NewsSlim
              title="お知らせ"
              data={[
                {
                  date: '2024年3月15日',
                  text: 'Google Pixel Fold、Galaxy S23、Xperia PRO-I など、高額下取り機種追加！',
                  link: '#js-content-top',
                  ratid: 'tradein_news-0315',
                },
                {
                  date: '2023年10月4日',
                  text: '【規約変更のお知らせ】スマホ下取りサービス利用規約変更のお知らせ',
                  link: '/information/news/service/2477/',
                },
              ]}
            />
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <NavAnchor className={Utils['Mt-40']}>
            <li>
              <LinkIconBefore
                href="#feature_service"
                onClick={e => anchorCallback(e, 'feature_service')}
              >
                <IconArrowDown />
                サービスの特長
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#service_flow"
                onClick={e => anchorCallback(e, 'service_flow')}
              >
                <IconArrowDown />
                ご利用の流れ
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore href="#qa" onClick={e => anchorCallback(e, 'qa')}>
                <IconArrowDown />
                よくあるご質問
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#conditions"
                onClick={e => anchorCallback(e, 'conditions')}
              >
                <IconArrowDown />
                ご利用条件
              </LinkIconBefore>
            </li>
          </NavAnchor>
          <div
            data-ratid="service_tradein_scroll-01_highest-price"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading
              as="h2"
              level="2"
              className={`${Utils['Mt-40']} ${Utils['Align-llc']}`}
            >
              今月の下取り最高価格
            </Heading>

            {outputTradeinPriceList([
              {
                device: 'iPhone',
                carrier: '楽天モバイル',
                name: 'iPhone 14 Pro Max',
                max: true,
                price: '99,770',
              },
              {
                device: 'Android',
                carrier: 'docomo',
                name: 'Google Pixel Fold',
                max: true,
                price: '91,000',
              },
              {
                device: 'Apple Watch',
                carrier: (
                  <>
                    その他
                    <br />
                    （SIM フリー）
                  </>
                ),
                name: 'Watch 7 Hermes 45mm - GPS+Cellular - Stainless',
                max: true,
                price: '27,500',
              },
            ])}

            <TxtCap className={Utils['Mt-16']} as="p">
              ※2024年4月26日時点。製品の状態によっては下取り価格が下がる場合があります。
              ※表示価格は税込です。
              <br />
              ※下取り価格は電子マネーの楽天キャッシュで受け取ることができます。※
              <LinkIconAfter
                href="https://cash.rakuten.co.jp/overview/"
                target="_blank"
              >
                楽天キャッシュの詳細はこちら
                <IconNewTabLine />
              </LinkIconAfter>
              をご覧ください。
            </TxtCap>
          </div>

          <Heading
            level="3"
            className={`${Utils['Mt-40']} ${Utils['Mt-pc-64']} ${Utils['Align-center']}`}
          >
            iPhone、Androidを下取りに出すなら今がチャンス
          </Heading>
          <p className={Utils['Mt-16']}>
            2024年3月1日より、iPhone 11 / iPhone X / iPhone XR / iPhone
            XSと、一部Android製品の下取り価格がアップ！
          </p>
          <Heading level="4" className={Utils['Mt-16']}>
            おすすめ下取り製品
          </Heading>

          {recommendTradeinPriceTable([
            {
              device: 'iPhone 11 Pro Max 512GB',
              carrier: 'SIMフリー',
              price: '27,000',
              maxPrice: '33,070',
            },
            {
              device: 'iPhone 11 Pro 512GB',
              carrier: 'SIMフリー',
              price: '20,520',
              maxPrice: '27,200',
            },
            {
              device: 'iPhone 11 256GB',
              carrier: 'SIMフリー',
              price: '14,400',
              maxPrice: '18,340',
            },
            {
              device: 'iPhone XS 64GB',
              carrier: 'SIMフリー',
              price: '4,500',
              maxPrice: '10,900',
            },
            {
              device: 'iPhone XR 64GB',
              carrier: 'SIMフリー',
              price: '3,600',
              maxPrice: '8,270',
            },
            {
              device: 'iPhone X 64GB',
              carrier: 'SIMフリー',
              price: '3,600',
              maxPrice: '5,970',
            },
            {
              device: 'Galaxy S20 Ultra 5G SCG03',
              carrier: 'au',
              price: '12,960',
              maxPrice: '28,000',
            },
            {
              device: 'Galaxy S20 5G SC-51A',
              carrier: 'docomo',
              price: '8,100',
              maxPrice: '15,000',
            },
            {
              device: 'Xperia 10 III SOG04',
              carrier: 'au',
              price: '8,910',
              maxPrice: '11,880',
            },
            {
              device: 'AQUOS sense7 SH-53C',
              carrier: 'docomo',
              price: '11,700',
              maxPrice: '13,000',
            },
          ])}

          <TxtCap as="p" className={Utils['Mt-16']}>
            ※ 2024年1月25日～2月29日の期間の下取り価格 。良品下取時。
          </TxtCap>

          <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
            <ButtonRegular
              href="/service/tradein/price-up-list/?l-id=service_tradein_service_tradein_price-up-list"
              as="a"
            >
              他の下取り価格アップ製品を見る
            </ButtonRegular>
          </div>

          <TradeinPrice onUpdateDate={getUpdateData} />

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <LinkIconAfter href="/service/tradein/price-list/?l-id=service_tradein_service_tradein_price-list">
              下取り価格を一覧で確認する
              <IconChevronRight />
            </LinkIconAfter>
          </div>

          <div
            data-ratid="service_tradein_scroll-03_criteria"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading
              level="3"
              id="about"
              className={`${Utils['Mt-40']} ${Utils['Align-llc']}`}
            >
              査定基準について
            </Heading>
            <p className={Utils['Mt-16']}>
              お客様の製品状態を4段階で評価し、査定価格を決定しております。製品状態の判断については以下をご参照のうえ、お申し込みください。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              <TxtEmp02>
                ※査定後、製品の状態により下取り価格が変更になる場合がございます。査定結果に変更がある場合でも、お申し込み後にキャンセルを行うことはできません。再査定や写真による結果のご提供はできませんので、あらかじめご了承ください。
                <br />
                ※査定後の価格が0円の場合は下取り不成立とし、ご送付いただいた製品は返送いたします。
              </TxtEmp02>
            </TxtCap>
          </div>

          <TradeinGuide className={Utils['Mt-16']} />

          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <ButtonPrimaryLarge
              href="https://r10.to/hM569V"
              as="a"
              data-ratid="tradein_apply_middle1"
              data-ratevent="click"
              data-ratparam="all"
            >
              下取りのお申し込みはこちら
            </ButtonPrimaryLarge>
          </div>
          <Colums2 className={Utils['Mt-64']}>
            <div>
              <SubTitle as="h2" id="feature_service">
                大切にお使いになっていたスマホを
                <br />
                楽天キャッシュで高額下取り
              </SubTitle>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/tradein/img-04.png?211221`}
                  width="343"
                  alt=""
                />
              </div>
              <UlOnly className={Utils['Mt-16']}>
                <li>
                  楽天ポイントと同様にお買い物でご利用可能です。
                  <br />
                  例：楽天市場・楽天トラベル・ラクマ
                </li>
                <li>
                  楽天ペイの電子マネーとして様々な場面でご利用できます。
                  <br />
                  例：コンビニ・ドラッグストア・スーパー・公共料金のお支払いなど
                </li>
              </UlOnly>
              <Linkflex className={`${Utils['Mt-8']} ${Utils['Ml-16']}`}>
                <li>
                  <p>
                    <LinkIconAfter
                      href="https://cash.rakuten.co.jp/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      楽天キャッシュの詳細を見る
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </p>
                </li>
                <li>
                  <p>
                    <LinkIconAfter
                      href="https://pay.rakuten.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      楽天ペイの詳細を見る
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </p>
                </li>
              </Linkflex>
            </div>
            <div>
              <SubTitle as="h2">個人情報は安全に管理</SubTitle>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/tradein/img-03-240215.png`}
                  width="343"
                  alt=""
                />
              </div>
              <ListDisc
                className={Utils['Mt-16']}
                text={[
                  {
                    text: '下取り製品の個人情報は正しい手順で適正に消去。モバイル製品保守・検品の専門業者が、安心、安全な対応をいたします。',
                  },
                ]}
              />
            </div>
          </Colums2>
          <SubTitle
            as="h2"
            id="service_flow"
            className={Utils['Mt-64']}
            data-ratid="service_tradein_scroll-04_flow"
            data-ratevent="appear"
            data-ratparam="all"
          >
            ご利用の流れ
          </SubTitle>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/service/tradein/img-flow-sp-240215.png`}
                width="343"
                height="279"
              />
              <img
                src={`${assets}img/service/tradein/img-flow-pc-240215.png`}
                alt="ステップ1.下取り希望製品の情報と引取り日時の入力※　ステップ2.製品の受け渡し　ステップ3.下取り金額のお受け取り ※本人確認書類をご用意ください。"
                width="784"
                height="237"
              />
            </picture>
          </div>
          <AccordionList
            text={'3つのステップ詳細を見る'}
            isOpened={false}
            className={Utils['Mt-24']}
          >
            <Heading level="4">
              STEP1. 下取り希望製品の情報と引取り日時の入力
            </Heading>
            <p className={Utils['Mt-8']}>
              下取り希望製品の詳細をご入力ください。下取り見積もり金額をご提示します。あわせて、本人確認書類をアップロードいただき、引取り日時をご入力ください。
              <br />
              詳しくは「
              <LinkIconAfter
                href={`${assets}pdf/service/tradein/tradein_application_flow.pdf?230414`}
                data-ratid="tradein_application_flow"
                data-ratevent="click"
                target="_blank"
              >
                お申し込みの流れ
                <IconPdf />
              </LinkIconAfter>
              」をご確認ください。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※
              本人確認書類の直接撮影が必要です。写真撮影機能が利用可能なスマホ・タブレット・PC等からお申し込みください。
              <br />
              ※ 製品引取り日は、お申し込みの翌日から10日後まで指定可能です。
              <br />※ 引取り時間帯は
              「指定なし」、「午前中」、「14時～16時」、「16時～18時」、「18時～21時」からお選びいただけます。
            </TxtCap>
            <Heading level="4" className={Utils['Mt-32']}>
              STEP2. 製品の受け渡し
            </Heading>
            <p className={Utils['Mt-8']}>
              予約された引取り日時に、配達員がお客様のご住所に伺います。下取り希望製品を用意し、配達員にお渡しください。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※事前にお客様にて製品の初期化（データ消去）・おサイフケータイなど各種ロックの解除とバックアップの実施が必要です。
              <br />
              ※箱・付属品は不要です。下取り希望製品本体のみお渡しください。
              <br />
              ※14日以内に弊社に到着しなかった場合は、申し込み時の下取り価格より変更となること、あるいは下取り不可としてご返却させていただくことがございますので、あらかじめご了承ください。
              <br />
              ※下取り希望製品の引取り先は、お客様がアップロードした本人確認書類に記載の住所のみ可能です。
            </TxtCap>

            <Heading level="4" className={Utils['Mt-32']}>
              STEP3. 下取り金額のお受け取り
            </Heading>
            <p className={Utils['Mt-8']}>
              製品査定後、金額をメールにてお知らせします。価格確定後1カ月程度で楽天キャッシュにチャージされます。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※査定価格は製品の状態によってSTEP1で提示した査定金額から変更になる場合があります。価格変更によるキャンセルはできません。あらかじめご了承ください。
            </TxtCap>
          </AccordionList>
          <div className={`${Utils['Mt-48']} ${Utils['Align-center']}`}>
            <ButtonPrimaryLarge
              href="https://r10.to/hM569V"
              as="a"
              data-ratid="tradein_apply_bottom"
              data-ratevent="click"
              data-ratparam="all"
            >
              下取りのお申し込みはこちら
            </ButtonPrimaryLarge>
          </div>

          <SubTitle as="h2" id="qa" className={Utils['Mt-64']}>
            よくあるご質問
          </SubTitle>
          <AccordionList
            text={'お申し込みについて'}
            isOpened={false}
            className={Utils['Mt-24']}
          >
            <AccordionList
              text={'お申し込み条件を教えてください'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                以下２点の条件を満たす方であれば、どなたでもお申し込みいただけます。
              </p>
              <p>①RakutenIDを保有する楽天会員であること</p>
              <p>②18歳以上であること</p>
            </AccordionList>
            <AccordionList
              text={'複数の製品をお申し込みできますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                お申し込み可能ですが、1台毎にお手続きいただく必要がございます。
              </p>
            </AccordionList>
            <AccordionList
              text={'お申し込み手順を教えてください'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                詳しくは「
                <LinkNormal
                  href="#service_flow"
                  onClick={e => anchorCallback(e, 'service_flow')}
                >
                  ご利用の流れ
                </LinkNormal>
                」をご確認ください。
              </p>
            </AccordionList>
            <AccordionList
              text={
                '製品の名義が下取り申し込み者と相違していても、申し込みはできますか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>お申し込み可能です。</p>
            </AccordionList>
            <AccordionList
              text={
                'お申し込み内容の不備で製品が戻ってきました。再申し込みはいつからできますか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>最初の申し込み日の15日後より再度お申し込み可能です。</p>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'下取り製品について'} isOpened={false}>
            <AccordionList
              text={'製品の初期化方法を教えてください'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                下記のリンクを選択するとPDFファイルがダウンロードされます。手順に従い製品の初期化を行ってください。
              </p>
              <p>
                <LinkIconAfter
                  href={`${assets}pdf/service/tradein/how_to_format.pdf?20210121`}
                  target="_blank"
                >
                  製品の初期化方法
                  <IconPdf />
                </LinkIconAfter>
              </p>
              <p className={Utils['Mt-16']}>
                Apple
                Watchの場合は、必ずペアリングされているiPhoneから、ペアリングを解除して初期化してください。
                <br />
                ペアリングの解除方法は「
                <LinkIconAfter
                  href="https://support.apple.com/ja-jp/HT204568"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Watch のペアリングを解除して消去する
                  <IconNewTabLine />
                </LinkIconAfter>
                」をご参照ください。
              </p>
            </AccordionList>
            <AccordionList
              text={
                '「おサイフケータイ機能」等の残高の移行、データの削除はどうすればいいですか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                ご利用製品やアプリケーションの提供元にご確認ください。
                <br />
                データ移行・バックアップ・ロック解除については「
                <LinkNormal href="/guide/data-migration/">
                  データ移行・バックアップ
                </LinkNormal>
                」をご確認ください。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'SIMフリーの製品の場合、キャリアは何を指定したらいいですか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                製品を購入されたキャリアをご選択ください。キャリア以外で購入された場合は「その他」をご選択ください。
              </p>
            </AccordionList>
            <AccordionList
              text={'下取り対象製品一覧にない製品のお申し込みは可能ですか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>下取り対象製品一覧に無い製品はお申し込みいただけません。</p>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'下取り希望製品の送付について'} isOpened={false}>
            <AccordionList
              text={'下取り希望製品の送付はどのように行いますか？ '}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                スマホ下取りサービスのお申し込み時に、下取り希望製品の詳細と引取り日時のご入力をお願いします。
                <br />
                お客様が指定された引取り日時に、配達員がお客様のご自宅に伺い、製品を回収します。
                <br />
                下取り希望製品をあらかじめご用意ください。
              </p>
            </AccordionList>
            <AccordionList
              text={'下取り希望製品の引取り日時は何日先まで指定できますか。'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                製品引取り日は、お申し込みの翌日から10日後まで指定可能です。
                <br />
                引取り時間帯は
                「指定なし」、「午前中」、「14時～16時」、「16時～18時」、「18時～21時」からお選びいただけます。
              </p>
            </AccordionList>
            <AccordionList
              text={'下取り希望製品の引取りは有料ですか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>下取り希望製品の引取りは無料となります。</p>
            </AccordionList>
            <AccordionList
              text={'SIMも送付する必要がありますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                SIMは同梱せず配達員へお渡しください。SIMやSDカード等の下取り製品以外のものをご送付された場合、当社で破棄させていただきます。
              </p>
            </AccordionList>
            <AccordionList
              text={'下取り希望製品のデータは消去する必要がありますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                下取り希望製品のデータは消去する必要があります。
                下取り希望製品内のデータ・おサイフケータイの情報・Apple
                WatchとiPhoneとのペアリングなど各種ロックを解除の上、消去していただいた後にご送付ください。
              </p>
              <p className={Utils['Mt-16']}>
                iPhone、Android製品の初期化方法は「
                <LinkNormal href="/guide/product-reset/">こちら</LinkNormal>
                」をご参照ください。
                <br />
                おサイフケータイのロック解除方法は「
                <LinkNormal href="/guide/osaifu-lock/">こちら</LinkNormal>
                」をご参照ください。
                <br />
                ペアリングの解除方法は「
                <LinkIconAfter
                  href="https://support.apple.com/ja-jp/HT204568"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  こちら
                  <IconNewTabLine />
                </LinkIconAfter>
                」をご参照ください。
              </p>
            </AccordionList>
            <AccordionList
              text={'製品の引取り日時の変更はどうすればいいですか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                製品引取り日時の変更および予約のキャンセルをご希望の場合は、お客様ご自身で以下のクロネコヤマト電話窓口までご連絡をお願いします。
              </p>
              <p className={Utils['Mt-16']}>
                ヤマトカスタマーサポートセンター
                <br />
                受付時間 8:00～21:00 年中無休
                <br />
                携帯電話ご利用の場合：0570-200-000
                <br />
                固定電話ご利用の場合：0120-019-625
              </p>
              <p className={Utils['Mt-16']}>
                引取り予約確認のため、電話口担当者に以下の3点をお伝えください。
                <br />
                ・申込者名
                <br />
                ・製品引取り日時
                <br />
                ・製品引取り住所
              </p>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※製品引取り日時の予約をキャンセルしてしまった場合、引取り日時の再予約はできず、スマホ下取りサービスの再申し込みが必要となります。再申し込みは最初のお申し込みから15日後より可能です。
              </TxtCap>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'必要書類について'} isOpened={false}>
            <div className={Utils['Ml-16']}>
              <p>
                お申し込みされる方のお名前とご住所の記載がある下記書類のいずれかをご用意ください。
                <br />
                ・運転免許証
                <br />
                ・運転経歴証明書
                <br />
                ・パスポート（現住所記載があるもの）
                <br />
                ・マイナンバーカード（個人番号カード）
                <br />
                ・住民基本台帳カード（現住所記載があるもの）
                <br />
                ・障がい者手帳
                <br />
                ・精神障がい者保険福祉手帳
                <br />
                ・特別永住者証明書
                <br />
                ・在留カード
              </p>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※本人確認書類の直接撮影が必要です。写真撮影機能が利用可能なスマホ・タブレット・PC等からお申し込みください。
                <br />
                ※本人様確認書類の表面、厚み、裏面（ないし住所更新記載欄）を撮影いただき、アップロードをお願いします。
                <br />
                ※文字が確認できないもの（かすれ・にじみ）や、途中で切れている場合は確認書類不備となり、申し込みキャンセルとなりますのでご注意ください。
                <br />
                ※スマホ下取りサービスでは、本人確認書類として健康保険証はご利用できません。
                <br />
                ※マイナンバーカードの場合、裏面の撮影は不要です。
              </TxtCap>
            </div>
          </AccordionList>
          <AccordionList text={'キャンセルについて'} isOpened={false}>
            <AccordionList
              text={'キャンセルするにはどうしたらよいですか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                お申し込み後のキャンセルは、「
                <LinkIconAfter
                  href="https://auth.trade-in.device-service.mobile.rakuten.net/checkstatus"
                  target="_blank"
                >
                  手続き状況
                  <IconNewTabLine />
                </LinkIconAfter>
                」より、サービスお申し込みの当日中（23:59まで）のみお手続き可能です。
              </p>
              <p className={Utils['Mt-16']}>
                なお、スマホ下取りサービスのキャンセル前に製品引取り日時の予約を完了している場合は、お客様ご自身で以下のクロネコヤマト電話窓口にご連絡の上、製品引取り予約のキャンセルをお願いします。
              </p>
              <p className={Utils['Mt-16']}>
                ヤマトカスタマーサポートセンター
                <br />
                受付時間 8:00～21:00 年中無休
                <br />
                携帯電話ご利用の場合：0570-200-000
                <br />
                固定電話ご利用の場合：0120-019-625
              </p>
              <p className={Utils['Mt-16']}>
                引取り予約確認のため、電話口担当者に以下の3点をお伝えください。
                <br />
                ・申込者名
                <br />
                ・製品引取り日時
                <br />
                ・製品引取り住所
              </p>
            </AccordionList>
            <AccordionList
              text={
                '申し込みキャンセル後に、同じ製品の再申し込みはできますか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                同じ製品の再申し込みは最初のお申し込みから15日後より可能となります。ただし、お申し込み日当日中に「
                <LinkIconAfter
                  href="https://auth.trade-in.device-service.mobile.rakuten.net/checkstatus"
                  target="_blank"
                >
                  手続き状況
                  <IconNewTabLine />
                </LinkIconAfter>
                」からキャンセルいただいた場合は、キャンセル後すぐに再申し込みいただけます。
              </p>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'査定について'} isOpened={false}>
            <AccordionList
              text={'査定価格はどこで確認できますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                「
                <LinkIconAfter
                  href="https://auth.trade-in.device-service.mobile.rakuten.net/checkstatus"
                  target="_blank"
                >
                  手続き状況
                  <IconNewTabLine />
                </LinkIconAfter>
                」からご確認いただけます。
              </p>
            </AccordionList>
            <AccordionList
              text={'査定価格確定まで何日かかりますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>製品実査定は弊社に製品到着後、7日程度かかります。</p>
              <p>
                なお、製品受け渡し時に配達員からお客様控えを受け取ってください。製品の到着状況は、控えにあるお問合せ伝票番号を利用し「
                <LinkIconAfter
                  href="https://toi.kuronekoyamato.co.jp/cgi-bin/tneko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ヤマト運輸 荷物お問い合わせシステム
                  <IconNewTabLine />
                </LinkIconAfter>
                」にてご確認いただけます。
              </p>
            </AccordionList>
            <AccordionList
              text={'申し込み後に査定価格が変更になることはありますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                弊社にて査定後、製品の状態等により価格が変更になる場合がございます。
                <br />
                この場合も、お客様は申し込みのキャンセルを行うことはできません。
                <br />
                査定内容については「
                <LinkIconAfter
                  href="https://auth.trade-in.device-service.mobile.rakuten.net/checkstatus"
                  target="_blank"
                >
                  手続き状況
                  <IconNewTabLine />
                </LinkIconAfter>
                」からご確認いただけます。
                <br />
                なお、査定後の価格が0円の場合は下取り不成立とし、ご送付いただいた製品は返送いたします。
              </p>
            </AccordionList>
            <AccordionList
              text={'0円査定だった場合、製品は引き取ってもらえますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                製品の引き取りはいたしません。
                <br />
                査定価格が0円の場合は下取り不成立とし、ご送付いただいた製品は返送いたします。
              </p>
            </AccordionList>
            <AccordionList
              text={'査定金額に不満があった場合、キャンセルはできますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                査定結果により価格に変更がある場合も、下取り価格変更によるキャンセルはできません。
                <br />
                なお、査定後の価格が0円の場合は下取り不成立とし、ご送付いただいた製品は返送いたします。
              </p>
            </AccordionList>
            <AccordionList
              text={'査定金額に不満があった場合、再査定を要求できますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>再査定はお受付しておりません。</p>
            </AccordionList>
            <AccordionList
              text={'申し込み後、メールが届きません'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                メインの受信トレイではなく、プロモーションや迷惑メールフォルダー等に受信されてしまう場合もございます。お手数ですが、メインの受信トレイ以外のフォルダーに振り分けられていないか、ご確認をお願いします。
              </p>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'楽天キャッシュについて'} isOpened={false}>
            <AccordionList
              text={'楽天キャッシュの使い方を教えてほしい'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                詳しくは「
                <LinkIconAfter
                  href="https://cash.rakuten.co.jp/overview/"
                  target="_blank"
                >
                  楽天キャッシュ
                  <IconNewTabLine />
                </LinkIconAfter>
                」をご確認ください。
              </p>
            </AccordionList>
            <AccordionList
              text={'楽天キャッシュはいつ付与されますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                楽天キャッシュは、下取り価格確定後、1カ月～1カ月半程度で付与されます。
              </p>
            </AccordionList>
            <AccordionList
              text={'付与されたことはどうやってわかりますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                「
                <LinkIconAfter
                  href="https://point.rakuten.co.jp/"
                  target="_blank"
                >
                  楽天PointClub
                  <IconNewTabLine />
                </LinkIconAfter>
                」にてログイン後、「ポイント実績」をクリックしてご確認ください。
              </p>
            </AccordionList>
            <AccordionList
              text={'付与された楽天キャッシュはどこで使えますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                楽天グループの各種サービスの他、コンビニ等でもご利用いただけます。詳しくは「
                <LinkIconAfter
                  href="https://cash.rakuten.co.jp/howto/"
                  target="_blank"
                >
                  楽天キャッシュの便利な使い方
                  <IconNewTabLine />
                </LinkIconAfter>
                」をご確認ください。
              </p>
            </AccordionList>
          </AccordionList>
          <AccordionList text={'その他'} isOpened={false}>
            <AccordionList
              text={
                '楽天IDの登録情報を確認（変更）するにはどうしたらよいですか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                楽天IDの登録情報の確認および変更は「
                <LinkIconAfter href="https://my.rakuten.co.jp/" target="_blank">
                  my Rakuten
                  <IconNewTabLine />
                </LinkIconAfter>
                」から行えます。
              </p>
            </AccordionList>
            <AccordionList
              text={'利用規約はどこで確認できますか？'}
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>下記のリンクからご確認いただけます。</p>
              <p>
                <LinkIconAfter
                  href="/terms/pdf/tradein_service.pdf?231004"
                  target="_blank"
                >
                  スマホ下取りサービス利用規約
                  <IconNewTabLine />
                </LinkIconAfter>
              </p>
            </AccordionList>
            <AccordionList
              text={
                '「スマホ用電子証明書」を利用している場合、どのような対応が必要ですか？'
              }
              isOpened={false}
              className={Utils['Ml-16']}
            >
              <p>
                下取りを希望する製品でスマホ用電子証明書をご利用になっている場合は、製品を送付いただく前にご自身で失効手続きをしていただく必要があります。製品を初期化（データ消去）する前に必要な手続きを行ってください。
                手続き方法などについては「
                <LinkIconAfter
                  href="https://x.gd/Kogyr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  デジタル庁Webサイト
                  <IconNewTabLine />
                </LinkIconAfter>
                」 をご確認ください。
                <br />
                <br />
                ご不明点がある場合や失効手続き前に製品を初期化（データ消去）してしまったときの手続き方法などについてご質問がある場合には、マイナンバー総合フリーダイヤル
                0120-95-0178（音声ガイダンス4番）（平日9:30～20:00、土日祝9:30～17:30）にお問い合わせください。
              </p>
            </AccordionList>
          </AccordionList>
          <SubTitle
            as="h2"
            className={Utils['Mt-40']}
            data-ratid="service_tradein_scroll-05_notes"
            data-ratevent="appear"
            data-ratparam="all"
          >
            注意事項
          </SubTitle>
          <TxtEmp02 as="p" className={Utils['Mt-16']}>
            楽天モバイル買い替え超トクプログラム加入中の製品は、スマホ下取りサービスの対象外となります。スマホ下取りサービスへのお申し込みはできませんのでご注意ください。
          </TxtEmp02>
          <p className={Utils['Mt-16']}>
            スマホ下取りサービスを利用する場合は個人情報の取扱いについて及び利用規約を必ずご確認いただき、内容にご同意のうえ、ご使用ください。
          </p>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter
              href="/terms/pdf/tradein_service.pdf?211008"
              target="_blank"
            >
              利用規約
              <IconPdf />
            </LinkIconAfter>
          </p>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter href="https://corp.mobile.rakuten.co.jp/guide/privacy/">
              個人情報の取扱いについて
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <SubTitle as="h2" className={Utils['Mt-40']} id="conditions">
            ご利用条件
          </SubTitle>
          <DescriptionListDefault
            className={`${Utils['Mt-24']} ${Utils['Mb-40']}`}
          >
            <div>
              <dt>下取り対象製品</dt>
              <dd>
                <UlOnly>
                  <li>
                    楽天モバイル、および他社取り扱いのスマートフォン、タブレット、Apple
                    Watch。
                    <br />
                    詳細は
                    <LinkNormal href="/service/tradein/price-list/">
                      下取り対象製品の価格一覧
                    </LinkNormal>
                    でご確認ください。
                    <TxtCap
                      as="div"
                      className={`${Utils['Mt-16']} ${Utils['Ml-16']}`}
                    >
                      <p>
                        ※<span id="lastupdate">{lastUpdate}時点</span>
                      </p>
                      <p>
                        ※下取り価格は査定結果に応じて前後する可能性がございます。
                      </p>
                      <p>
                        ※一覧に記載のある製品でも、状況によっては下取りを終了している場合がございます。あらかじめご了承ください。
                      </p>
                      <p>
                        ※
                        <LinkNormal
                          href="#about"
                          onClick={e => anchorCallback(e, 'about')}
                          data-ratid="tradein_inspection_example"
                          data-ratevent="click"
                          data-ratparam="all"
                        >
                          画面損傷品・外装損傷品の詳細はこちら
                        </LinkNormal>
                        をご参照ください。
                      </p>
                    </TxtCap>
                  </li>
                  <li>
                    付属品は下取りしておりません。なお付属品の有無は、下取り価格に影響しません。
                  </li>
                </UlOnly>
              </dd>
            </div>
            <div>
              <dt>対象条件</dt>
              <dd>
                <ListDisc
                  text={[
                    {
                      text: '下取り対象製品を下取りに出すこと',
                    },
                    {
                      text: '楽天IDを保有する楽天会員であること',
                    },
                    {
                      text: '18歳以上であること',
                    },
                  ]}
                />
              </dd>
            </div>
            <div>
              <dt>特典内容</dt>
              <dd>
                お客様がお持ちの対象製品を下取りし、下取り金額に応じた楽天キャッシュが付与されます。
              </dd>
            </div>
            <div>
              <dt>特典付与について</dt>
              <dd>
                <ListDisc
                  text={[
                    {
                      text: '楽天キャッシュは、下取り価格確定後、約1カ月程度でチャージされます。',
                    },
                    {
                      text: '付与される楽天キャッシュの有効期間は10年です。',
                    },
                    {
                      text: '楽天キャッシュは楽天モバイルよりチャージします。',
                    },
                    {
                      text: '権利の譲渡はできません。',
                    },
                  ]}
                />
              </dd>
            </div>
            <div>
              <dt>下取り希望製品の受け渡しについて</dt>
              <dd>
                <ListDisc
                  text={[
                    {
                      text: '当社は、本サービスのお申し込み時に入力されたご住所に下取り希望製品を引取りに伺います。',
                    },
                    {
                      text: (
                        <>
                          お客様は、本サービスのお申し込み時に、現在の住所を確認することができる本人確認書類を撮影しアップロードする必要があります。
                          <TxtCap
                            as="div"
                            className={`${Utils['Mt-8']} ${Utils['Ml-8']}`}
                          >
                            ※お客様ご住所は本人確認書類に記載の最新の住所と必ず一致している必要がございます。不一致の場合、書類不備として下取り不成立となる場合がございます。この場合、既に当社が引き取った下取り希望製品は、返送します。
                          </TxtCap>
                        </>
                      ),
                    },
                    {
                      text: 'お客様がご指定の日時に当社が下取り希望製品を引取りに伺いますので、ご指定の日時に、ご在宅いただけますようお願いします。',
                    },
                    {
                      text: '下取り希望製品はアクティベーション（例：iPhoneを探す）・おサイフケータイ・Apple Watchの場合はiPhoneとのペアリングの解除など各種ロックの解除及びデータの初期化をお客様ご自身の責任において実施し、充分に充電した状態にてご送付ください。',
                    },
                    {
                      text: 'アクティベーション・各種ロックの解除がされていない場合、キャンセルとなり製品をご返却させていただきます。',
                    },
                    {
                      text: '下取り希望製品は、事前にデータバックアップをお取りいただき、製品上の全てのデータを消去してください。製品ご送付後に下取り希望製品にデータが保存されている場合でも、当該データに起因する損害について当社は一切の責任を負いません。',
                    },
                    {
                      text: '本サービスをご利用する場合は、加入中のオプションサービスの契約解除漏れにご注意ください。',
                    },
                  ]}
                />
              </dd>
            </div>
            <div>
              <dt>査定について</dt>
              <dd>
                <UlOnly>
                  <li>製品実査定は弊社に製品到着後、7日程度かかります。</li>
                  <li>
                    弊社にて査定後、下取り価格が変更になる場合がございます。その場合も、お客様はお申込みのキャンセルはできません。
                    <br />
                    なお、弊社査定後の価格が0円だった場合は、下取り不成立とし、ご送付いただいた製品はご返送いたします。
                  </li>
                </UlOnly>
              </dd>
            </div>
            <div>
              <dt>お申し込み当日のキャンセルについて</dt>
              <dd>
                <ListDisc
                  text={[
                    {
                      text: 'サービスお申し込み当日の23:59までは、申し込みページの「手続き状況」よりキャンセルのお手続きが可能です。',
                    },
                  ]}
                />
              </dd>
            </div>
            <div>
              <dt>お問い合わせ先</dt>
              <dd>
                スマホ下取りサービスセンター（050-3519-0326）
                <br />
                営業時間 9:00～18:00　月曜～金曜（祝祭日の場合も含む）
              </dd>
            </div>
            <div>
              <dt>その他</dt>
              <dd>
                <UlOnly>
                  <li>
                    本サービスは予告なく内容の変更、中止もしくは延長させていただくことがございます。あらかじめご了承ください。
                  </li>
                  <li>
                    お客様が以下のいずれかに該当するときは、当社はお客様からの本サービスへの利用申し込みをお断りさせていただくことがあります。
                    <UlOnly className={Utils['Mt-16']}>
                      <li>
                        お客様が、当社に対し債務の支払いを怠っている、または怠る恐れがある場合
                      </li>
                      <li>その他当社が不適切と判断した場合</li>
                    </UlOnly>
                  </li>
                </UlOnly>
              </dd>
            </div>
          </DescriptionListDefault>
          <div
            data-ratid="service_tradein_scroll-06_related"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <RelatedMedia
              list={[
                {
                  title: 'スマホ端末の買い替え時期の目安は？',
                  link: 'https://network.mobile.rakuten.co.jp/sumakatsu/contents/articles/2020/00007/?l-id=service_tradein_media_00007',
                },
                {
                  title: 'スマホの寿命はどれくらい？経年劣化の兆候を解説',
                  link: 'https://network.mobile.rakuten.co.jp/sumakatsu/contents/articles/2020/00012/?l-id=service_tradein_media_00012',
                },
              ]}
            />
          </div>
        </SystemContainer>

        <BgGray
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Related
              lId="tradein"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
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

        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          copyrightSimple={false}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceTradein
