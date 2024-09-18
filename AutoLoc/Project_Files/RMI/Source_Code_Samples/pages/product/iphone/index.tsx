import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { device_iphone } from '~/js/csv-data/device-iphone'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { ProductCard } from '@components/atoms/ProductCard'
import { ButtonRadioFlex } from '@components/atoms/ButtonRadio'
import {
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import {
  OptionCardData,
  ProductOptionCard,
} from '@components/include/product/OptionCard'
import { CardNormal } from '@components/atoms/Card'
import { ProductCarouselHistory } from '@components/include/product/HistoryCarousel'
import { ProductCampaignCarousel } from '@components/include/product/CampaignCarousel'
import { ProductRankingCarousel } from '@components/include/product/RankingCarousel'
import { iPhoneBnrData } from '@components/include/product/IphoneBnrData'
import { BannerHover } from '@components/atoms/Banner'
import { MovieWrapper } from '@components/atoms/MovieWrapper'

const HERO_IMAGE_WIDTH = 926
const Hero = styled.div`
  display: grid;
  background: linear-gradient(0, #e4e4e4 -9.04%, rgba(247, 247, 247, 0.6) 100%);
  margin-top: 24px;
  > :first-child {
    grid-area: areaA;
    align-self: center;
  }
  > :nth-child(2) {
    grid-area: areaB;
    align-self: end;
  }
  > :nth-child(3) {
    grid-area: areaC;
    align-self: start;
  }
  justify-content: center;
  ${mixins.mq.MinCustom(`${HERO_IMAGE_WIDTH + 32 + 1}px`)} {
    padding: 50px 0;
    grid-template-columns: 229px 597px;
    grid-template-rows: auto auto;
    gap: 10px 40px;
    grid-template-areas:
      'areaA areaB'
      'areaA areaC';
    > :nth-child(2) {
      margin-top: 8px;
    }
  }
  ${props =>
    mixins.mq.MinMaxCustom(props.theme.min.m, `${HERO_IMAGE_WIDTH + 32}px`)} {
    padding: 5% 16px;
    grid-template-columns: 289fr 597fr;
    grid-template-rows: auto auto;
    gap: 10px 4%;
    grid-template-areas:
      'areaA areaB'
      'areaA areaC';
    > :nth-child(2) {
      margin-top: 8px;
    }
  }
  ${mixins.mq.MaxS} {
    padding: 19px 16px 20px;
    justify-items: center;
    gap: 0;
    > :first-child {
      margin-top: 16px;
    }
    > :nth-child(3) {
      margin-top: 12px;
      text-align: center;
    }
    grid-template-areas:
      'areaB'
      'areaA'
      'areaC';
  }
`
const TxtCapCustome = styled(TxtCap)`
  line-height: 1;
  margin-top: 11px;
  ${mixins.mq.MaxS} {
    margin-top: 8px;
    font-size: 11px;
  }
`
const BgGray = styled.div`
  background: ${props => props.theme.colors.monotone97};
`
const TextWrapper = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.white};
  ${mixins.mq.MinL} {
    padding: 12px 16px;
  }
  a {
    display: inline-block;
    margin-top: 6px;
    ${mixins.mq.MinL} {
      margin-top: 4px;
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
interface FlexContainerProp {
  isSpCol?: boolean
  isCenter?: boolean
  columnGap?: number
  rowGap?: number
  spColumnGap?: number
  spRowGap?: number
  cols?: '2' | '3' | '4' | '5'
  spCols?: '2' | '3' | '4' | '5'
}
const FlexContainer = styled.div<FlexContainerProp>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.isCenter ? 'center' : 'initial')};
  gap: ${props => (props.rowGap || 0) + 'px'}
    ${props => (props.columnGap || 0) + 'px'};
  ${mixins.mq.MaxM} {
    ${props => {
      if (props.isSpCol && props.isCenter) return 'align-items: center;'
      else if (!props.isSpCol && props.isCenter)
        return 'justify-content:center;'
    }}
    gap: ${props => (props.spRowGap || 0) + 'px'} ${props =>
      (props.spColumnGap || 0) + 'px' || props.columnGap + 'px' || 'initial'};
    ${props => (props.isSpCol ? 'flex-derection:column;' : '')}
  }
  > * {
    width: calc(
      (
          100% -
            ${props =>
              (props.columnGap || 0) * (Number(props.cols || '1') - 1)}px
        ) / ${props => Number(props.cols || '1')}
    ) !important;
    ${mixins.mq.MaxM} {
      width: calc(
        (
            100% -
              ${props =>
                (props.spColumnGap || props.columnGap || 0) *
                (Number(props.spCols || '1') - 1)}px
          ) / ${props => Number(props.spCols || '1')}
      ) !important;
    }
  }
`
const CardNormalCustom = styled(CardNormal)`
  height: 184px;
  ${mixins.mq.MinL} {
    height: 198px;
  }
  img {
    display: block;
    margin: 0 auto;
    height: 120px;
  }
`
const ApplyByShop = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    margin: 24px auto 40px;
    font-size: ${props => props.theme.fonts.l};
    padding: 18px;
    background: url('${assets}img/product/iphone/top/pc-byod.png') no-repeat
      center;
    background-size: cover;
    width: 100%;
  }
  ${mixins.mq.MaxM} {
    margin: 16px auto 40px;
    font-size: ${props => props.theme.fonts.m};
    padding: 16px;
    background: url('${assets}img/product/iphone/top/sp-byod.png') no-repeat
      center;
    background-size: 100%;
    width: 343px;
    height: 285px;
  }
`
const MovieTitle = styled(Heading)`
  ${mixins.mq.MaxM} {
    font-size: 22px;
  }
`

interface Product {
  directory: string
  new: string
  sale: string
  product: string
  payment1: string
  payment48: string
  'top-carousel-pointback-num': string
  'iphone-point-note': string
  bss_url: string
  release: string
  priority: string
}

const ProductIphone: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'iPhone一覧'
  const directories = [{ path: '/product/', label: '製品' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: '製品',
      url: '/product/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  // hooks state
  type SortType = 'recommended' | 'lowToHigh'
  const [sortState, updateSortState] = useState<SortType>('recommended')

  // hooks effect
  useEffect(() => {
    const scriptLoad = (target: string, callback?: () => void) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = target
      script.defer = true
      if (callback) {
        script.onload = () => {
          callback()
        }
      }
      document.body.appendChild(script)
    }
    scriptLoad(
      'https://players.brightcove.net/5068808272001/default_default/index.min.js',
    )
    scriptLoad('https://r.r10s.jp/com/rat/plugin/media/main-0.2.0.js', () => {
      if (window.RAT.hasOwnProperty('MediaTracker')) {
        window.RAT.MediaTracker({
          params: {
            acc: 1312,
            aid: 1,
            pgn: '/product/iphone/',
          },
          configs: {
            measure: true,
            youtubeMedia: {
              iframeIds: 'product_iphone_movie',
            },
          },
        })
      }
    })
  }, [])

  const sortArray = [
    {
      text: 'オススメ順',
      value: 'recommended',
      name: 'sort',
      defaultChecked: true,
      ratid: 'product_iphone_product-recommendation',
    },
    {
      text: '価格が安い順',
      value: 'lowToHigh',
      name: 'sort',
      ratid: 'product_iphone_product-lowest-Price',
    },
  ]
  const ProductCards = (sortType: SortType) => {
    const sortByType = () => {
      const sortConfig = {
        recommended: {
          callback: (a: Product, b: Product) =>
            Number(a.priority) - Number(b.priority),
        },
        lowToHigh: {
          callback: (a: Product, b: Product) =>
            Number(a.payment48) - Number(b.payment48),
        },
      }
      device_iphone.sort(sortConfig[sortType].callback)
    }
    sortByType()
    return device_iphone.map(data => (
      <ProductCard
        key={data.directory}
        type={'iPhone'}
        directory={data.directory}
        newFlag={data.new}
        saleFlag={data.sale}
        productName={data.product}
        price={data.payment1}
        price48={data.payment48}
        programNote={data['upgrade-program-price-note']}
        setPoint={data['top-carousel-pointback-num']}
        setPointNote={data['iphone-point-note']}
        bssUrl={data.bss_url}
        release={data.release}
        cardNote={data['iphone-card-note']}
        iphoneDiscountPrice={data['discount']}
        discountText={data['discount_text']}
      />
    ))
  }

  const iphoneOptionData: OptionCardData[] = [
    {
      title: '故障紛失保証 with AppleCare Services & iCloud+',
      url: '/service/iphone/applecare-icloud/?l-id=product_iphone_service_iphone_applecare-icloud',
      imageData: {
        img1: `${assets}img/product/img-service-applecare.png`,
        img2: `${assets}img/product/icon-i-cloud.png`,
      },
      body: (
        <div>
          <TxtEmp02 as="p">加入できるのは購入時のみ</TxtEmp02>
          <TxtEmp01 className={Utils['Mt-8']} as="p">
            iPhoneもデータもオールインワンで守ります。
          </TxtEmp01>
        </div>
      ),
    },
    {
      title: 'スマホ下取りサービス',
      url: '/service/tradein/?l-id=product_iphone_service_trade-in',
      imageData: `${assets}img/product/iphone/top/iphone-option-other01.png`,
      body: (
        <div>
          <TxtEmp02 as="p">
            iPhone 14 Pro Max を下取り利用で最大99,770円相当還元
          </TxtEmp02>
          <TxtCap className={Utils['Mt-8']} as="p">
            <TxtEmp02>3/1よりiPhone 11などの下取り価格アップ！</TxtEmp02>
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※楽天モバイルの1TBを下取りに出した場合
            <br />
            ※下取り金額は電子マネーの楽天キャッシュで受け取ることができます。
            <br />
            ※上記下取り金額は2024年3月1日時点のものとなります。
          </TxtCap>
        </div>
      ),
    },
  ]

  const accessoryData = [
    {
      url: '/product/accessory/apple/?l-id=product_iphone_apple-audio_1224ts_def#audio',
      img: `${assets}img/product/iphone/top/airpods-231109.png`,
      text: 'AirPods',
    },
    {
      url: '/product/accessory/apple/?l-id=product_iphone_apple-other_1224ts_def#other',
      img: `${assets}img/product/iphone/top/airtag.png`,
      text: 'AirTag＆その他',
    },
    {
      url: '/product/accessory/apple/?l-id=product_iphone_apple_1224ts_def#case',
      img: `${assets}img/accessory/apple-rm2309053/pht-accessory-00.png`,
      text: 'iPhoneケース',
    },
    {
      url: '/product/accessory/apple/?l-id=product_iphone_apple-chargers_1224ts_def#chargers',
      img: `${assets}img/product/iphone/top/magsafe.png`,
      text: '充電器＆アダプタ',
    },
  ]
  const Accessories = (data: typeof accessoryData) =>
    data.map(v => (
      <CardNormalCustom key={v.text} href={v.url}>
        <img src={v.img} alt="" />
        <TxtEmp01
          as="p"
          className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
        >
          {v.text}
        </TxtEmp01>
      </CardNormalCustom>
    ))

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのiPhone（アイフォン）ラインアップ。最新機種 iPhone 15 Pro Max、iPhone 15 Pro、iPhone 15 Plus、iPhone 15販売中！既存モデルiPhone 14、iPhone 14 Plus、iPhone 13、iPhone SE（第3世代）も含め、端末のご購入、おすすめ機種の製品仕様、カメラ、価格、新商品のスペック比較がご覧いただけます。さらに楽天モバイルなら本体代が全通信キャリアで最安！ ※2024.03.27時点。NTTドコモ、au、ソフトバンクの4キャリア公式オンラインのiPhone本体代金の比較。当社調べ。"
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
            className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}
          >
            iPhone
          </Heading>
        </SystemContainer>
        <Hero>
          <picture>
            <source
              media={`(max-width: ${theme.max.s})`}
              srcSet={`${assets}img/product/iphone/top/iphone-device-sp-240517.png`}
              width="160"
              height="180"
            />
            <img
              src={`${assets}img/product/iphone/top/iphone-device-pc-240517.png`}
              width="229"
              height="255"
              alt=""
            />
          </picture>
          <picture>
            <source
              media={`(max-width: ${theme.max.s})`}
              srcSet={`${assets}img/product/iphone/top/hero-text-sp.png`}
              width="343"
              height="111"
            />
            <img
              src={`${assets}img/product/iphone/top/hero-text-pc.png`}
              width="597"
              height="113"
              alt="本体代が全通信キャリアで最安！"
            />
          </picture>
          <div>
            <LinkIconAfter href="/product/iphone/fee/?l-id=product_iphone_iphone_fee">
              他キャリアとの価格比較表を見る
              <IconChevronRight />
            </LinkIconAfter>
            <TxtCapCustome as="p">
              ※2024年3月27日時点。公式オンラインのiPhone本体代金の比較。
            </TxtCapCustome>
          </div>
        </Hero>

        <SystemContainer>
          <ProductCarouselHistory
            lazy={false}
            className={`${Utils['Mt-48']} ${Utils['Mt-pc-24']} ${Utils['Mb-40']}`}
            title="最近チェックした製品"
          />
        </SystemContainer>
        <BgGray
          className={Utils['Py-40']}
          data-ratid="iphone_scroll-01_product-1"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <SystemContainer>
            <div className={Utils['Align-center']}>
              <BannerHover
                href={
                  '/campaign/iphone-point/?l-id=product_iphone_campaign_iphone-point_kv'
                }
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/product/iphone/top/bnr-iphone-point-328-185-240327.png`}
                    width="656"
                    height="370"
                  />
                  <img
                    src={`${assets}img/product/iphone/top/bnr-iphone-point-1032-160-240327.png`}
                    alt="対象iPhoneを一括または24回払いで購入＆楽天モバイルへ初めて申し込み＆他社から電話番号そのまま乗り換えで最大32,000円相当おトク！48回払いでもポイント還元中！"
                    width="1032"
                    height="160"
                  />
                </picture>
              </BannerHover>
            </div>
            <TextWrapper className={Utils['Mt-40']}>
              <div className={Utils['Align-center']}>
                <p>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/iphone/top/img-text-01-sp.png`}
                      width="285"
                      height="50"
                    />
                    <img
                      src={`${assets}img/product/iphone/top/img-text-01-pc.png`}
                      width="556"
                      height="31"
                      alt=""
                    />
                  </picture>
                </p>
                <p>
                  <LinkIconAfter href="/service/replacement-program/?l-id=product_iphone_service_replacement-program">
                    サービス詳細はこちら
                    <IconChevronRight />
                  </LinkIconAfter>
                </p>
              </div>
              <TxtCap
                as="p"
                className={`${Utils['Mt-8']} ${Utils['Align-llc']}`}
              >
                ※
                楽天カード48回払い。25カ月目以降に製品返却最大24回分のお支払いが不要。製品返却時に事務手数料3,300円が必要。その他条件有。
              </TxtCap>
            </TextWrapper>
            <div className={`${Utils['My-24']} ${Utils['Ml-pc-16']}`}>
              <TxtSize as="p" size="s">
                <TxtEmp01>並び替え</TxtEmp01>
              </TxtSize>
              <ButtonRadioFlex
                select={sortArray}
                onChangeCheck={v =>
                  updateSortState(v === 'recommended' ? v : 'lowToHigh')
                }
                className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}
              />
            </div>
            <CardList>{ProductCards(sortState)}</CardList>
            <div className={Utils['Mt-16']}>
              <LinkIconAfter href="https://network.mobile.rakuten.co.jp/product/end/?l-id=product_iphone_product_end">
                販売終了製品一覧
                <IconChevronRight />
              </LinkIconAfter>
            </div>
            <div
              className={`${Utils['Align-center']} ${Utils['Mt-40']} ${Utils['Mt-sp-32']}`}
            >
              <ButtonRegularLarge
                as="a"
                href="/product/iphone/comparison/?l-id=product_iphone_product_iphone_comparison"
              >
                iPhoneを比較する
              </ButtonRegularLarge>
            </div>
            <TxtCap as="p" className={Utils['Mt-24']}>
              ※1
              48回払いは楽天カードのみ。機種変更時に製品のご返却と事務手数料3,300円のお支払いが必要です。製品の状態によって故障費用がかかります。現金販売価格と割賦販売価格（総額）は製品価格と同額。24回払い、一括払いは楽天カード以外のクレジットカードもご利用いただけます。楽天カード以外のクレジットカードで24回払いを選択した場合、分割手数料が発生します。
              <br />
              ※2 キャンペーンの詳細は
              <LinkNormal href="/campaign/iphone-point/#detail">
                こちら
              </LinkNormal>
            </TxtCap>
          </SystemContainer>
        </BgGray>
        <SystemContainer
          data-ratid="iphone_scroll-02_ranking"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <div className={`${Utils['Mt-64']} ${Utils['Mt-pc-56']} `}>
            <ProductRankingCarousel
              title="iPhoneの人気ランキング"
              rankingFilter="iPhone"
            />
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
              <ButtonRegularLarge
                as="a"
                href="/product/ranking/?l-id=product_iphone_product_ranking?iphone-ranking"
              >
                人気ランキングの詳細を見る
              </ButtonRegularLarge>
            </div>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※ 2024年4月1日～2024年4月30日までの販売台数に基づきます。
            </TxtCap>
          </div>
          <div
            className={Utils['Mt-48']}
            data-ratid="iphone_scroll-03_campaign"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading level="2">おトクなキャンペーン開催中！</Heading>
            <ProductCampaignCarousel
              dir="product_iphone"
              data={iPhoneBnrData}
              className={`${Utils['Mt-24']}`}
            />
          </div>
          <Heading
            level="3"
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-64']}`}
            ratId="iphone_scroll-04_option"
            ratEvent="appear"
          >
            iPhoneご購入の方におすすめのオプション
          </Heading>
          <ProductOptionCard
            data={iphoneOptionData}
            optionListProps={{
              pcInlineGap: '26px',
              pcBlockGap: '0',
              spGap: '24px',
            }}
            otherOptionLid="product_iphone_service"
            isShowAppendBnr={false}
          />
          <Heading
            level="3"
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-64']}`}
          >
            Apple純正アクセサリ
          </Heading>
          <FlexContainer
            className={`${Utils['Mt-24']} ${Utils['Mt-sp-16']}`}
            columnGap={24}
            spColumnGap={8}
            spRowGap={16}
            cols="4"
            spCols="2"
          >
            {Accessories(accessoryData)}
          </FlexContainer>
          <Heading
            level="2"
            className={`${Utils['Mt-56']} ${Utils['Mt-sp-64']}`}
            ratId="iphone_scroll-05_shop"
            ratEvent="appear"
          >
            ショップでお申し込み
          </Heading>
          <ApplyByShop>
            <TxtEmp01 as="p">
              オンラインで予約して
              <br />
              ショップで製品受け取り
            </TxtEmp01>
            <div className={Utils['Mt-16']}>
              <ButtonSecondaryLarge
                as="a"
                href="/shop/?l-id=product_iphone_shop"
              >
                来店予約をする
              </ButtonSecondaryLarge>
            </div>
          </ApplyByShop>
          <Heading level="4" className={Utils['Mt-48']} id="caution">
            注意事項
          </Heading>
          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            ■楽天モバイル買い替え超トクプログラム48回払いについて
          </TxtEmp01>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※1
            現金販売価格と割賦販売価格（総額）は製品価格と同額。支払回数48回、支払期間48カ月、実質年率0％。割賦金算出時の端数分について、毎月の月額料金に含めて、あるいは最終月の月額料金に含めて、請求させていただきます。本プログラムの仕様上、支払回数を48回と記載していますが、25カ月目以降、新しい製品への機種変更及び解約が可能となり、弊社指定条件を満たし製品をご返却いただいた場合、残りのお支払いは不要です。
            <TxtEmp02>
              機種変更の際には、事務手数料3,300円をご請求させていただきます。ご返却いただいた旧製品が当社指定状態基準を満たさない場合、当社指定の故障費用を請求、または返却いただけない場合がございます。
            </TxtEmp02>
          </TxtCap>
          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            ■各種キャンペーンについて
          </TxtEmp01>

          <TxtCap as="ul" className={Utils['Mt-8']}>
            <li className={Utils['Mt-16']}>
              ※
              キャンペーンによってポイントの付与時期・有効期間が異なり、分割して付与されるポイントもございます。必ずキャンペーンルールをご確認ください。
            </li>
            <li>
              ※
              取得した楽天ポイントは楽天モバイルや楽天の各サービスでご利用できます。詳しくは
              <LinkNormal href="/guide/point/index.html?l-id=product_iphone_guide_point">
                楽天ポイントのページ
              </LinkNormal>
              をご覧ください。
            </li>
          </TxtCap>
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'area', 'service']}
        />
      </SystemWrapper>
    </>
  )
}

export default ProductIphone
