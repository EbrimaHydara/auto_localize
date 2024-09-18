import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { InfoboxLight } from '@components/atoms/Infobox'
import { ButtonRadioFlex } from '@components/atoms/ButtonRadio'
import {
  TxtNormal,
  TxtCap,
  TxtSize,
  TxtEmp01,
  TxtEmp02,
} from '@components/atoms/Txt'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { Heading } from '@components/atoms/Heading'
import {
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { CardNormal } from '@components/atoms/Card'
import { ProductCard } from '@components/atoms/ProductCard'
import {
  OptionCardData,
  ProductOptionCard,
} from '@components/include/product/OptionCard'
import { device_top } from '~/js/csv-data/device-top'

import { KvCarousel } from '@components/include/common/KvCarousel'
import { SmartphoneTopCarouselData } from '@components/include/product/smartphone/SmartphoneTopCarouselData'
import { ProductCampaignCarousel } from '@components/include/product/CampaignCarousel'
import { ProductRankingCarousel } from '@components/include/product/RankingCarousel'
import { ProductCarouselHistory } from '@components/include/product/HistoryCarousel'
import { anchorCallback } from '@components/utils/anchorCallback'

import { SmartphoneBnrData } from '@components/include/product/SmartphoneBnrData'

const AccordionWrapper = styled.div`
  > div {
    background-color: transparent;
  }
`

const RadioWrapper = styled.div`
  padding: 0 16px;
`

const RadioContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${mixins.mq.MinL} {
    gap: 12px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    ${mixins.mq.MinL} {
      gap: 8px;
    }
  }
`

const ToggleButton = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 52px;

  .slider {
    display: block;
    width: 52px;
    height: 28px;
    background-color: ${props => props.theme.colors.monotone88};
    border: solid 1px ${props => props.theme.colors.monotone75};
    border-radius: 16px;
    transition: 0.3s;
  }

  .circle {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.white};
    transition: 0.3s;
  }
`

const ToggleButtonInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked {
    ~ .slider {
      background-color: ${props => props.theme.colors.pink100};
      border: solid 1px ${props => props.theme.colors.pink100};
      transition: 0.3s;
    }

    ~ .circle {
      transform: translateX(24px);
      transition: 0.3s;
    }
  }
`

const CardList = styled.ul`
  display: grid;
  gap: 16px;
  margin-top: 24px;
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mixins.mq.MinL} {
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const AccessoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  text-align: center;
  ${mixins.mq.MinL} {
    gap: 24px;
  }
  li {
    width: calc((100% - 8px) / 2);
    ${mixins.mq.MinL} {
      width: calc((100% - 24px * 3) / 4);
    }
  }
`

const ImgWrapper = styled.div`
  margin: 16px auto 0;
  width: 343px;
  height: 335px;
  background-image: url(${assets}img/product/smartphone/img-investigate-sp.png);
  background-size: 100%;
  ${mixins.mq.MinL} {
    margin: 24px auto 0;
    width: auto;
    height: 206px;
    background-image: url(${assets}img/product/smartphone/img-investigate-pc.png);
    background-size: cover;
    background-position-x: center;
  }
`

const ImgContents = styled.div`
  text-align: center;
  padding: 16px;
`

const ImgContentsText = styled.p`
  font-size: 20px;
  ${mixins.mq.MinL} {
    font-size: 24px;
  }
`

const AnnotationText = styled.p`
  display: flex;
  gap: 2px;
`

interface Product {
  'android-48-note': string
  'android-card-note': string
  'android-point-note': string
  'android-point-note-product-only': string
  basictext: string
  battery: string
  brand: string
  bss_url: string
  'card-note': string
  colorcode: string
  directory: string
  'discount-note': string
  discountprice: string
  display: string
  netpayment: string
  new: string
  point1: string
  pointtotal: string
  price1: string
  price2: string
  price3: string
  price4: string
  priority: string
  product: string
  release: string
  releasetext: string
  'replacement-48-note': string
  'replacement-flag': string
  'replacement-point-note': string
  'replacement-price': string
  spec: string
  strikethrough: string
  style: string
  threshold: string
  'top-carousel-48-note': string
  'top-carousel-point-note': string
  txt1: string
  txt2: string
  update: string
}

const Smartphone: NextPage = () => {
  const pagetitle = 'Android／Rakutenオリジナル（スマートフォン）一覧'
  const directories = [{ path: '/product/', label: '製品' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const router = useRouter()
  const [allProducts, setAllProducts] = useState<Product[]>(device_top)
  const [showProducts, setShowProducts] = useState<Product[]>([])
  const [isShowSpec, setIsShowSpec] = useState<boolean>(false)
  const [defaultValue, setDefaultValue] = useState<string | string[]>('')
  const filterArraySp = [
    {
      text: 'すべて',
      value: 'all',
      name: 'filter-sp',
      ratid: 'sort_smartphone_brand_all',
      defaultChecked: defaultValue === 'all' ? true : false,
    },
    {
      text: 'Xperia',
      value: 'Xperia',
      name: 'filter-sp',
      ratid: 'sort_smartphone_brand_xperia',
      defaultChecked: defaultValue === 'Xperia' ? true : false,
    },
    {
      text: 'Galaxy',
      value: 'Galaxy',
      name: 'filter-sp',
      ratid: 'sort_smartphone_brand_galaxy',
      defaultChecked: defaultValue === 'Galaxy' ? true : false,
    },
    {
      text: 'AQUOS',
      value: 'AQUOS',
      name: 'filter-sp',
      ratid: 'sort_smartphone_brand_aquos',
      defaultChecked: defaultValue === 'AQUOS' ? true : false,
    },
    {
      text: 'OPPO',
      value: 'OPPO',
      name: 'filter-sp',
      ratid: 'sort_smartphone_brand_oppo',
      defaultChecked: defaultValue === 'OPPO' ? true : false,
    },
  ]
  const filterArrayPc = [
    {
      text: 'すべて',
      value: 'all',
      name: 'filter-pc',
      ratid: 'sort_smartphone_brand_all',
      defaultChecked: defaultValue === 'all' ? true : false,
    },
    {
      text: 'Xperia',
      value: 'Xperia',
      name: 'filter-pc',
      ratid: 'sort_smartphone_brand_xperia',
      defaultChecked: defaultValue === 'Xperia' ? true : false,
    },
    {
      text: 'Galaxy',
      value: 'Galaxy',
      name: 'filter-pc',
      ratid: 'sort_smartphone_brand_galaxy',
      defaultChecked: defaultValue === 'Galaxy' ? true : false,
    },
    {
      text: 'AQUOS',
      value: 'AQUOS',
      name: 'filter-pc',
      ratid: 'sort_smartphone_brand_aquos',
      defaultChecked: defaultValue === 'AQUOS' ? true : false,
    },
    {
      text: 'OPPO',
      value: 'OPPO',
      name: 'filter-pc',
      ratid: 'sort_smartphone_brand_oppo',
      defaultChecked: defaultValue === 'OPPO' ? true : false,
    },
  ]
  const sortArraySp = [
    {
      text: 'オススメ順',
      value: 'recommendation',
      name: 'sort-sp',
      ratid: 'sort_smartphone_recommended',
      defaultChecked: true,
    },
    {
      text: '価格が安い順',
      value: 'price',
      name: 'sort-sp',
      ratid: 'sort_smartphone_cheap',
    },
    {
      text: '新しい順',
      value: 'new',
      name: 'sort-sp',
      ratid: 'sort_smartphone_newest',
    },
  ]
  const sortArrayPc = [
    {
      text: 'オススメ順',
      value: 'recommendation',
      name: 'sort-pc',
      ratid: 'sort_smartphone_recommended',
      defaultChecked: true,
    },
    {
      text: '価格が安い順',
      value: 'price',
      name: 'sort-pc',
      ratid: 'sort_smartphone_cheap',
    },
    {
      text: '新しい順',
      value: 'new',
      name: 'sort-pc',
      ratid: 'sort_smartphone_newest',
    },
  ]
  const accessoryArray = [
    {
      path: 'case-231124',
      title: 'ケース',
      url: '/product/accessory/smartphone-related/?l-id=product_smartphone_product_accessory_smartphone-related-case#case',
    },
    {
      path: 'film-231124',
      title: 'フィルム',
      url: '/product/accessory/smartphone-related/?l-id=product_smartphone_product_accessory_smartphone-related-film#film',
    },
    {
      path: 'charger',
      title: '充電器',
      url: '/product/accessory/smartphone-related/?l-id=product_smartphone_product_accessory_smartphone-related-chargers#chargers',
    },
    {
      path: 'cable',
      title: 'ケーブル',
      url: '/product/accessory/smartphone-related/?l-id=product_smartphone_product_accessory_smartphone-related-cable#cable',
    },
  ]
  const optionArray: OptionCardData[] = [
    {
      title: 'スマホ交換保証プラス',
      url: '/service/replacement-warranty-plus/?l-id=product_smartphone_service_replacement-warranty-plus',
      imageData: `${assets}img/product/img-service-replacement-v2.png`,
      body: (
        <div>
          <TxtEmp02 as="p">加入できるのは購入時のみ</TxtEmp02>
          <TxtNormal as="p" className={Utils['Mt-8']}>
            故障・紛失時に新品同等の同一機種に交換！最短当日中※にお届け
          </TxtNormal>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※対象地域：東京／神奈川／千葉／埼玉
          </TxtCap>
        </div>
      ),
    },
    {
      title: 'スマホ下取りサービス',
      url: '/service/tradein/?l-id=product_smartphone_service_trade-in',
      imageData: `${assets}img/product/img-service-tradein-230222.png`,
      body: (
        <div>
          <TxtEmp02 as="p">
            Google Pixel Fold を下取りに出すと、最大91,000円相当になります。
          </TxtEmp02>
          <TxtCap as="ul" className={Utils['Mt-8']}>
            <li>※docomoの256GBを下取りに出した場合</li>
            <li>
              ※下取り金額は電子マネーの楽天キャッシュで受け取ることができます。
            </li>
            <li>※上記下取り金額は2024年3月15日時点のものとなります。</li>
          </TxtCap>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const defaultDevice = router.query.device
    if (router.isReady) {
      if (defaultDevice) {
        setDefaultValue(defaultDevice)
        filterProducts(defaultDevice)
      } else {
        const sortedProducts: Product[] = sortByArgument(device_top, 'priority')
        setDefaultValue('all')
        setShowProducts([...sortedProducts])
      }
    }
  }, [router])

  const filterProducts = useCallback(
    (value?: string | string[]) => {
      let filteredProducts: Product[]
      if (value === 'all') {
        filteredProducts = allProducts
      } else {
        filteredProducts = allProducts.filter(product => {
          return product.brand === value
        })
      }
      setShowProducts([...filteredProducts])
    },
    [showProducts],
  )

  const sortProducts = useCallback(
    (value?: string) => {
      let sortProp: keyof Product
      switch (value) {
        case 'recommendation':
          sortProp = 'priority'
          break
        case 'new':
          sortProp = 'release'
          break
        case 'price':
          sortProp = 'price4'
          break
        default:
          sortProp = 'priority'
      }
      const sortedAllProducts = sortByArgument(allProducts, sortProp)
      const sortedProducts = sortByArgument(showProducts, sortProp)
      setAllProducts([...sortedAllProducts])
      setShowProducts([...sortedProducts])
    },
    [showProducts],
  )

  const sortByArgument = (arr: Product[], prop: keyof Product) => {
    const result = arr.sort((a: Product, b: Product) => {
      if (prop === 'release') {
        return Number(new Date(a[prop])) > Number(new Date(b[prop])) ? -1 : 1
      } else {
        return Number(a[prop]) < Number(b[prop]) ? -1 : 1
      }
    })
    return result
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのスマホ製品（Android／Rakutenオリジナル）ラインアップ。楽天モバイルで人気のスマートフォン端末(デバイス)ご購入のほか、おすすめ機種の性能比較、料金、新製品のスペックがご覧いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Align-right']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading
            level="1"
            className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']} ${Utils['Mb-24']}`}
          >
            Android／Rakutenオリジナル（スマートフォン）
          </Heading>
        </SystemContainer>
        <KvCarousel secondary={true} bnrs={SmartphoneTopCarouselData} />
        <SystemContainer>
          <ProductCarouselHistory
            className={`${Utils['Mt-48']} ${Utils['Mt-pc-24']}`}
            lazy={false}
            title="最近チェックした製品"
          />
        </SystemContainer>
        <InfoboxLight
          className={`${Utils['Py-40']} ${Utils['Px-0']} ${Utils['Mt-40']}`}
        >
          <SystemContainer>
            <AccordionWrapper>
              <AccordionList
                text={'製品を絞り込む'}
                isOpened={true}
                className={`${Utils['Show-oox']}`}
                ratid="sort_smartphone_accordion"
              >
                <RadioContents>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>並び替え</TxtEmp01>
                    </TxtSize>
                    <div className={Utils['Pl-8']}>
                      <ButtonRadioFlex
                        select={sortArraySp}
                        onChangeCheck={sortProducts}
                      />
                    </div>
                  </div>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>ブランド</TxtEmp01>
                    </TxtSize>
                    <div className={Utils['Pl-8']}>
                      <ButtonRadioFlex
                        select={filterArraySp}
                        onChangeCheck={filterProducts}
                      />
                    </div>
                  </div>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>製品スペック表示</TxtEmp01>
                    </TxtSize>
                    <ToggleButton
                      data-ratid="sort_smartphone_spec"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      <span>
                        <ToggleButtonInput
                          type="checkbox"
                          onChange={() => setIsShowSpec(prev => !prev)}
                        />
                        <span className="circle"></span>
                        <span className="slider"></span>
                      </span>
                    </ToggleButton>
                  </div>
                </RadioContents>
              </AccordionList>
              <RadioWrapper className={Utils['Show-xxo']}>
                <RadioContents>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>並び替え</TxtEmp01>
                    </TxtSize>
                    <ButtonRadioFlex
                      select={sortArrayPc}
                      onChangeCheck={sortProducts}
                    />
                  </div>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>ブランド</TxtEmp01>
                    </TxtSize>
                    <ButtonRadioFlex
                      select={filterArrayPc}
                      onChangeCheck={filterProducts}
                    />
                  </div>
                  <div>
                    <TxtSize as="p" size="s">
                      <TxtEmp01>製品スペック表示</TxtEmp01>
                    </TxtSize>
                    <ToggleButton
                      data-ratid="sort_smartphone_spec"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      <span>
                        <ToggleButtonInput
                          type="checkbox"
                          onChange={() => setIsShowSpec(prev => !prev)}
                        />
                        <span className="circle"></span>
                        <span className="slider"></span>
                      </span>
                    </ToggleButton>
                  </div>
                </RadioContents>
              </RadioWrapper>
            </AccordionWrapper>
            <CardList>
              {showProducts.map(product => (
                <ProductCard
                  key={product.directory}
                  type={'Android'}
                  directory={product.directory}
                  newFlag={product.new}
                  saleFlag={product.basictext}
                  releaseFlag={product.releasetext}
                  productName={product.product}
                  price={product.price2}
                  price48={product.price4}
                  programNote={product['android-48-note']}
                  setPoint={product.pointtotal}
                  setPointNote={product['android-point-note']}
                  bssUrl={product.bss_url}
                  release={product.release}
                  strikethrough={product.strikethrough}
                  isShowSpec={isShowSpec}
                  spec={product.spec}
                  cardNote={product['android-card-note']}
                  txt1={product.txt1}
                  txt2={product.txt2}
                />
              ))}
            </CardList>
            <p className={Utils['Mt-40']}>
              <LinkIconAfter href="/product/end/?l-id=product_smartphone_product_end">
                販売終了製品一覧
                <IconChevronRight />
              </LinkIconAfter>
            </p>
            <div className={Utils['Mt-24']}>
              <TxtCap as="p">
                ※1
                48回払いは楽天カードのみご利用いただけます。24回払い、一括払いは楽天カード以外のクレジットカードもご利用いただけます。楽天カード以外のクレジットカードで24回払いを選択した場合、分割手数料が発生します。
              </TxtCap>
              <TxtCap as="p">
                ※2,3,4 キャンペーンのポイント詳細は
                <LinkNormal
                  href="#campaign"
                  onClick={e => anchorCallback(e, 'campaign')}
                >
                  こちら
                </LinkNormal>
                。最大ポイントは各種キャンペーンの合計です。
              </TxtCap>
            </div>
          </SystemContainer>
        </InfoboxLight>
        <SystemContainer>
          <div className={`${Utils['Mt-64']}`}>
            <ProductRankingCarousel
              title="Androidの人気ランキング"
              rankingFilter="Android"
            />
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge
                as="a"
                href="/product/ranking/?l-id=product_smartphone_product_ranking?android-ranking"
              >
                人気ランキングの詳細を見る
              </ButtonRegularLarge>
            </div>
            <TxtCap as="p" className={`${Utils['Mt-16']}`}>
              ※ 2024年4月1日～2024年4月30日までの販売台数に基づきます。
            </TxtCap>
          </div>
          <div className={Utils['Mt-64']}>
            <Heading level="3">おトクなキャンペーン開催中！</Heading>
            <ProductCampaignCarousel
              dir="product_smartphone"
              className={`${Utils['Mt-24']}`}
              data={SmartphoneBnrData}
            />
          </div>
          <div className={Utils['Mt-64']}>
            <Heading level="3">Androidご購入の方におすすめのオプション</Heading>
            <ProductOptionCard
              data={optionArray}
              optionListProps={{
                pcInlineGap: '26px',
                pcBlockGap: '0',
                spGap: '24px',
              }}
              otherOptionLid="product_smartphone_service"
            />
          </div>
          <div className={`${Utils['Mt-64']} ${Utils['Mt-pc-56']}`}>
            <Heading level="3">スマートフォン関連アクセサリ</Heading>
            <AccessoryList className={`${Utils['Mt-16']} ${Utils['Mt-pc-32']}`}>
              {accessoryArray.map(item => {
                return (
                  <li key={item.path}>
                    <CardNormal href={item.url}>
                      <div>
                        <img
                          src={`${assets}img/product/smartphone/img-accessory-${item.path}.png`}
                          width="120"
                          height="107"
                          alt=""
                        />
                      </div>
                      <TxtSize as="p" size="m" className={Utils['Mt-pc-24']}>
                        <TxtEmp01>{item.title}</TxtEmp01>
                      </TxtSize>
                    </CardNormal>
                  </li>
                )
              })}
            </AccessoryList>
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge
                as="a"
                href="/product/accessory/smartphone-related/?l-id=product_smartphone_product_accessory_smartphone-related"
              >
                スマートフォン関連アクセサリ一覧
              </ButtonRegularLarge>
            </div>
          </div>
          <div className={`${Utils['Mt-64']} ${Utils['Mt-pc-56']}`}>
            <Heading level="3">
              楽天モバイルでお持ちの製品が使えるか調べる
            </Heading>
            <ImgWrapper>
              <ImgContents>
                <TxtEmp02 as="p">＼ iPhoneは使えるの？ ／</TxtEmp02>
                <ImgContentsText className={Utils['Mt-8']}>
                  <TxtEmp01>
                    お持ちのスマホが使えるか
                    <br />
                    確認してみませんか？
                  </TxtEmp01>
                </ImgContentsText>
                <div className={Utils['Mt-8']}>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/product/byod/?l-id=product_byod"
                  >
                    楽天モバイルで使えるか調べる
                  </ButtonSecondaryLarge>
                </div>
              </ImgContents>
            </ImgWrapper>
          </div>
          <div className={Utils['Mt-64']}>
            <Heading level="4">注意事項</Heading>
            <div className={Utils['Mt-16']}>
              <TxtNormal as="p">
                <TxtEmp01>■楽天回線対応製品について</TxtEmp01>
              </TxtNormal>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※
                上記は「Rakuten最強プラン」でご利用いただける楽天回線対応製品です。こちらの楽天回線対応製品をご購入、もしくは
                <LinkNormal href="/product/certified-products/">
                  SIMカードを差し替えてご利用できる楽天回線対応製品
                </LinkNormal>
                をご準備ください。
              </TxtCap>
            </div>
            <div className={Utils['Mt-24']} id="campaign">
              <TxtNormal as="p">
                <TxtEmp01>■各種キャンペーンについて</TxtEmp01>
              </TxtNormal>

              <AnnotationText>
                <TxtCap>※2</TxtCap>
                <TxtCap>
                  「
                  <LinkNormal href="/campaign/start-point/#campaign-rule2006">
                    「Rakuten最強プラン」＋対象のAndroid製品ご購入でポイント還元キャンペーン
                  </LinkNormal>
                  」適用時
                </TxtCap>
              </AnnotationText>
              <AnnotationText>
                <TxtCap>※3</TxtCap>
                <TxtCap>
                  「
                  <LinkNormal href="/campaign/start-point/#campaign-rule2091">
                    【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント
                  </LinkNormal>
                  」適用時
                </TxtCap>
              </AnnotationText>
              <AnnotationText>
                <TxtCap>※4</TxtCap>
                <TxtCap>
                  「
                  <LinkNormal href="/campaign/android-discount/#campaign-rule2178">
                    【Android対象製品限定】特価キャンペーン
                  </LinkNormal>
                  」適用時
                </TxtCap>
              </AnnotationText>
              <AnnotationText>
                <TxtCap>※</TxtCap>
                <TxtCap>
                  キャンペーンによってポイントの付与時期・有効期間が異なり、分割して付与されるポイントもございます。必ずキャンペーンルールをご確認ください。
                </TxtCap>
              </AnnotationText>
              <AnnotationText>
                <TxtCap>※</TxtCap>
                <TxtCap>
                  取得した楽天ポイントは楽天モバイルや楽天の各サービスでご利用できます。詳しくは
                  <LinkNormal href="/guide/point/">
                    楽天ポイントのページ
                  </LinkNormal>
                  をご覧ください。
                </TxtCap>
              </AnnotationText>
              <AnnotationText>
                <TxtCap>※</TxtCap>
                <TxtCap>5Gは一部エリアのみ。</TxtCap>
              </AnnotationText>
            </div>
          </div>
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'area', 'service']}
        />
      </SystemWrapper>
    </>
  )
}
export default Smartphone
