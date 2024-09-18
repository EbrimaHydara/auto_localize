import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { PageNavigation } from '@components/fragment/product/top/PageNavigation'
import { ProductsLists } from '@components/fragment/product/top/ProductsList'
import { NewsProduct } from '@components/fragment/product/top/NewsProduct'
import ProductSupport from '@components/include/product/ProductSupport'

import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { LinkNormal } from '@components/atoms/Link'
import { KvCarousel } from '@components/include/common/KvCarousel'
import { ProductTopRecommendCarousel } from '@components/include/product/top/RecommendCarousel'
import { ProductCarouselHistory } from '@components/include/product/HistoryCarousel'
import { ProductRankingCarousel } from '@components/include/product/RankingCarousel'
import { ProductCampaignCarousel } from '@components/include/product/CampaignCarousel'
import { anchorCallback } from '@components/utils/anchorCallback'

import Utils from '@styles/Utils.module.scss'

import { ProductTopCarouselData } from '@components/include/product/top/ProductTopCarouselData'
import { iPhoneBnrData } from '@components/include/product/IphoneBnrData'
import { SmartphoneBnrData } from '@components/include/product/SmartphoneBnrData'
import { AppleWatchBrnData } from '@components/include/product/top/AppleWatchBrnData'
import { WifiBrnData } from '@components/include/product/top/WifiBrnData'

const LayoutTheme = styled.div<{ padding?: string; color?: string }>`
  padding: ${props => (props.padding ? props.padding : '40')}px 0;
  background-color: ${props => props.color};
`

const NewsContainer = styled.div`
  > div {
    margin-top: 32px;
    &:first-child {
      margin-top: 0;
    }
    ${mixins.mq.MaxM} {
      margin-top: 24px;
    }
  }
`

const ProductListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${mixins.mq.MaxM} {
    display: block;
  }

  > div:nth-child(1) {
    width: 144px;
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  > div:nth-child(2) {
    width: 80%;
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`

type LinkItem = {
  title: string | JSX.Element
  link: string
  img: string
  ratid?: string
}

type NewsItem = {
  published_date: string
  title: string
  link: string
}

type Endpoint = {
  product: string
  software: string
}

const pageNavData: Array<LinkItem> = [
  {
    title: '製品一覧',
    link: 'products',
    img: 'product/top/nav-icon-products.png',
    ratid: 'product_index-product',
  },
  {
    title: 'ランキング',
    link: 'ranking',
    img: 'product/top/nav-icon-ranking.png',
    ratid: 'product_index-ranking',
  },
  {
    title: 'キャンペーン情報',
    link: 'campaign',
    img: 'product/top/nav-icon-cpn.png',
    ratid: 'product_index-campaign',
  },
]

const productsDataAndroid: Array<LinkItem> = [
  {
    title: 'Xperia',
    link: '/product/smartphone/?l-id=product_product_smartphone-Xperia&device=Xperia',
    img: 'thumb-xperia-80-80.png',
  },
  {
    title: 'Galaxy',
    link: '/product/smartphone/?l-id=product_product_smartphone-Galaxy&device=Galaxy',
    img: 'thumb-galaxy-80-80.png',
  },
  {
    title: 'AQUOS',
    link: '/product/smartphone/?l-id=product_product_smartphone-AQUOS&device=AQUOS',
    img: 'thumb-aquos-80-80.png',
  },
  {
    title: 'OPPO',
    link: '/product/smartphone/?l-id=product_product_smartphone-OPPO&device=OPPO',
    img: 'thumb-oppo-80-80.png',
  },
]

const accessaryData: Array<LinkItem> = [
  {
    title: (
      <>
        Apple純正
        <br className={Utils['Disp-sp']} />
        アクセサリ
      </>
    ),
    link: '/product/accessory/apple/?l-id=product_product_accessory_apple',
    img: 'thumb-accessary-apple-80-80.png',
  },
  {
    title: (
      <>
        Apple関連
        <br className={Utils['Disp-sp']} />
        アクセサリ
      </>
    ),
    link: '/product/accessory/apple-related/?l-id=product_product_accessory_apple-related',
    img: 'thumb-accessary-apple-related-80-80.png',
  },
  {
    title: <>スマートフォン関連 アクセサリ</>,
    link: '/product/accessory/smartphone-related/?l-id=product_product_accessory_smartphone-related',
    img: 'thumb-accessary-smartphone-80-80-231124.png',
  },
]

const Product: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '製品（iPhone、Android／スマートフォン）'
  const directories = [
    { path: '/product/', label: 'Rakuten最強プラン（料金プラン）' },
  ]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const [newsProduct, setNewsProduct] = useState<Array<NewsItem>>([])
  const [newsSoftware, setNewsSoftware] = useState<Array<NewsItem>>([])

  const filteredData = (list: Array<NewsItem>): Array<NewsItem> =>
    list.filter((item: NewsItem, index: number) => index < 3)

  useEffect(() => {
    const newsEndpoint: Endpoint = {
      product: '/web-api/news_product/',
      software: '/web-api/software/',
    }

    axios
      .get(newsEndpoint.product)
      .then(res => {
        res.data &&
          res.data.code === 'SUCCESS' &&
          setNewsProduct(filteredData(res.data.list))
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(newsEndpoint.software)
      .then(res => {
        res.data &&
          res.data.code === 'SUCCESS' &&
          setNewsSoftware(filteredData(res.data.list))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのスマホ製品ラインアップ。楽天回線で人気のスマートフォンデバイス、Wi-Fi（ワイファイ）端末ご購入のほか、おすすめ機種の製品仕様、カメラ、価格、新商品のスペック比較がご覧いただけます。"
      />

      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <LayoutTheme padding="24" className={Utils['Pt-0']}>
          <SystemContainer>
            <TxtCap
              as="p"
              className={`${Utils['Mt-8']} ${Utils['Align-right']}`}
            >
              ※表記の金額はすべて税込です。
            </TxtCap>
            <Heading level="1" className={Utils['Mt-8']}>
              製品
            </Heading>
          </SystemContainer>
        </LayoutTheme>

        <KvCarousel secondary={true} bnrs={ProductTopCarouselData} />

        <LayoutTheme padding="24" className={Utils['Pb-40']}>
          <SystemContainer>
            <PageNavigation
              ratId="product_scroll-01_index"
              ratEvent="appear"
              pageNavData={pageNavData}
            />
            <ProductCarouselHistory
              lazy={false}
              className={Utils['Mt-40']}
              title="最近チェックした製品"
            />
          </SystemContainer>
        </LayoutTheme>

        <LayoutTheme padding="24" color={theme.colors.pink5}>
          <SystemContainer>
            <ProductTopRecommendCarousel
              ratId="product_scroll-02_recommend"
              ratEvent="appear"
              title="オススメ製品"
            />
            <TxtCap as="ul" className={Utils['Mt-8']}>
              <li>
                *1 キャンペーンのポイント詳細は
                <LinkNormal
                  href="#campaign-information"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-information')
                  }
                >
                  こちら
                </LinkNormal>
                。
              </li>
              <li>
                *2,3 キャンペーンの詳細は
                <LinkNormal
                  href="#campaign-information"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-information')
                  }
                >
                  こちら
                </LinkNormal>
                。
              </li>
            </TxtCap>
          </SystemContainer>
        </LayoutTheme>

        <LayoutTheme id="products" padding="64" color={theme.colors.monotone97}>
          <SystemContainer>
            <ProductListHeader>
              <Heading
                level="2"
                ratId="product_scroll-03_Product"
                ratEvent="appear"
              >
                製品一覧
              </Heading>
            </ProductListHeader>

            <ProductsLists
              accessaryData={accessaryData}
              productsDataAndroid={productsDataAndroid}
            />
          </SystemContainer>
        </LayoutTheme>

        <LayoutTheme id="ranking" padding="0" className={`${Utils['Pt-64']}`}>
          <SystemContainer>
            <ProductRankingCarousel
              title="製品の人気ランキング"
              rankingFilter="both"
            />
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegularLarge
                as="a"
                href="/product/ranking/?l-id=product_product_ranking"
              >
                人気ランキングの詳細を見る
              </ButtonRegularLarge>
            </div>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※ 2024年4月1日～2024年4月30日までの販売台数に基づきます。
            </TxtCap>
          </SystemContainer>
        </LayoutTheme>

        <LayoutTheme id="campaign" padding="64">
          <SystemContainer>
            <Heading
              level="2"
              ratId="product_scroll-05_campaign"
              ratEvent="appear"
            >
              開催中のキャンペーン情報
            </Heading>
            <Heading level="3" className={`${Utils['Mt-32']}`}>
              iPhone
            </Heading>
            <ProductCampaignCarousel
              dir="product"
              data={iPhoneBnrData}
              className={`${Utils['Mt-16']}`}
            />
            <Heading level="3" className={`${Utils['Mt-40']}`}>
              Android
            </Heading>
            <ProductCampaignCarousel
              dir="product"
              data={SmartphoneBnrData}
              className={`${Utils['Mt-16']}`}
            />
            <Heading level="3" className={`${Utils['Mt-40']}`}>
              Apple Watch
            </Heading>
            <ProductCampaignCarousel
              dir="product"
              data={AppleWatchBrnData}
              className={`${Utils['Mt-16']}`}
            />
            <Heading level="3" className={`${Utils['Mt-40']}`}>
              Wi-Fi
            </Heading>
            <ProductCampaignCarousel
              dir="product"
              data={WifiBrnData}
              className={`${Utils['Mt-16']}`}
            />
            <Heading
              level="3"
              id="note"
              className={Utils['Mt-64']}
              ratId="product_scroll-06_notes"
              ratEvent="appear"
              data-ratparam="all"
            >
              注意事項
            </Heading>
            <TxtEmp01
              as="p"
              id="campaign-information"
              className={Utils['Mt-24']}
            >
              ■各種キャンペーンについて
            </TxtEmp01>
            <TxtCap as="ul" className={Utils['Mt-8']}>
              <li className={Utils['Mt-16']}>
                *1 ポイント詳細は、
                <LinkNormal href="/campaign/start-point/#r-point">
                  こちら
                </LinkNormal>
                。
              </li>
              <li>
                *2 ポイント、値引きの詳細は、
                <LinkNormal href="/campaign/iphone-point/#detail">
                  こちら
                </LinkNormal>
                。
              </li>
              <li>
                *3 値引きは、「
                <LinkNormal href="/campaign/android-discount/#campaign-rule2178">
                  【Android対象製品限定】特価キャンペーン
                </LinkNormal>
                」適用時。
                <br />
                *キャンペーンによってポイントの付与時期・有効期間が異なり、分割して付与されるポイントもございます。必ずキャンペーンルールをご確認ください。
                <br />
                *取得した楽天ポイントは楽天モバイルや楽天の各サービスでご利用できます。詳しくは
                <LinkNormal href="/campaign/iphone-point/#point-detail">
                  楽天ポイント
                </LinkNormal>
                のページをご覧ください。
              </li>
              <li>
                *「対象iPhone最大32,000円相当おトク」は「Rakuten最強プラン（データタイプ）」申し込み、およびデータタイプの契約が過去にある場合は対象外。期間限定ポイントで付与。48回払いは楽天カードのみ。その他条件あり。詳しくは
                <LinkNormal href="/campaign/iphone-point/#campaign-rule">
                  キャンペーンルール
                </LinkNormal>
                をご確認ください。
              </li>
            </TxtCap>
            <TxtEmp01 as="p" className={Utils['Mt-16']}>
              ■iPhoneの48回払いについて
            </TxtEmp01>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ iPhone
              15（128GB）は現金一括払い/割賦販売価格131,800円、楽天カード支払い48回（48回目のみ2,785円/月）、支払期間48カ月、実質年率0％。事務手数料3,300円。
              <br />※ iPhone 15
              Pro（128GB）は現金一括払い/割賦販売価格174,700円、楽天カード支払い48回（48回目のみ3,667円/月）、支払期間48カ月、実質年率0％。事務手数料3,300円。
            </TxtCap>
          </SystemContainer>
        </LayoutTheme>

        <LayoutTheme padding="48" color={theme.colors.monotone97}>
          <SystemContainer>
            <NewsContainer>
              <NewsProduct
                title="製品のお知らせ"
                link="/information/news/product/"
                newsItems={newsProduct}
              />
              <NewsProduct
                title="ソフトウェアアップデートのお知らせ"
                link="/information/software/"
                newsItems={newsSoftware}
              />
            </NewsContainer>

            <div className={Utils['Mt-16']}>
              <ProductSupport />
            </div>
          </SystemContainer>
        </LayoutTheme>
      </SystemWrapper>

      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default Product
