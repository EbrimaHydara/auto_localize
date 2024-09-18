import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { Heading } from '@components/atoms/Heading'
import { ProductTopRecommendCard } from '@components/include/product/top/RecommendProductCard'
import {
  DeviceIphone,
  DeviceTop,
} from '@components/include/common/product/CardType'

//CSV to date
import { device_osusume } from '~/js/csv-data/device-osusume'
import { device_iphone } from '~/js/csv-data/device-iphone'
import { device_top } from '~/js/csv-data/device-top'

const Carousel = styled.div`
  overflow: hidden;
  .carouselContainer {
    display: flex;
    padding-bottom: 4px; //カードの影が計算されないぽいのでpaddingとっておく
  }
  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 2;
    --tabView: 2;
    --pcView: 3;
    --gap: 16px;
    // 公式のようにflexの%で実装したら微妙にサイズが合わないので
    display: flex;
    flex-direction: column;
    margin-right: var(--gap);
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
    ${mixins.mq.MinM} {
      min-width: calc(
        ((100% - (var(--gap) * (var(--tabView) - 1))) / var(--tabView))
      );
    }
    ${mixins.mq.MinL} {
      min-width: calc(
        ((100% - (var(--gap) * (var(--pcView) - 1))) / var(--pcView))
      );
    }
  }
`
const CarouselUi = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 32px auto 32px;
  grid-template-areas: 'prevbutton presentation nextbutton';
  ${mixins.mq.MinL} {
    margin-top: 16px;
    width: fit-content;
    margin-inline: auto;
    grid-template-columns: 200px 56px 44px;
    grid-template-areas: 'presentation prevbutton nextbutton';
    transform: translateX(
      50px
    ); // 矢印２つの分（余白含む ※56 + 44 = 100）の1/2調整
  }

  .prevButton {
    grid-area: prevbutton;
    ${mixins.mq.MinL} {
      margin-left: 24px;
    }
  }
  .nextButton {
    grid-area: nextbutton;
    ${mixins.mq.MinL} {
      margin-left: 12px;
    }
  }
`
const Presentations = styled.div<PresentationsProps>`
  grid-area: presentation;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 6px 12px;
  width: 128px;
  margin-inline: auto;
  column-gap: 4px;
  ${mixins.mq.MaxM} {
    width: 184px;
  }
  ${mixins.mq.MaxS} {
    width: 100%;
    ${({ CardData }) =>
      CardData?.length && CardData.length <= 6
        ? `max-width: 104px;`
        : `padding-inline: 16px;`}
  }
`

interface CardListProps {
  title: string
  className?: string
  lazy?: boolean
  suffix?: string
  ratId?: string
  ratEvent?: 'click' | 'appear'
}

interface recommendDeviceProps {
  product: string
  priority: string
  lid: string
  new_label: string
  discount_label: string
  discount_note: string
  cpn_note: string
  cpn_txt1: string
  cpn_txt2: string
}

interface PresentationsProps {
  CardData?: recommendDeviceProps[]
}

export const ProductTopRecommendCarousel: React.FC<
  CardListProps & PresentationsProps
> = ({ title, className, lazy = true, suffix, ratId, ratEvent, CardData }) => {
  const [isCarousel, setIsCarousel] = useState(false)
  const [maxCount, setMaxCount] = useState(3)
  const theme = useContext(ThemeContext)
  // カルーセル基本設定
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start', // start or center or end
    slidesToScroll: 3, // 1回で何個分スライドされるか（デフォは1）
    breakpoints: {
      [`(max-width: ${theme.max.m})`]: {
        slidesToScroll: 2,
      },
    },
  })

  const ratParam = ratId && 'all'

  // Prev Next Presentation設定と処理
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // おすすめ製品 csv
  const recommendDeviceData = device_osusume
  const iPhoneDeviceData = device_iphone
  const androidDeviceData = device_top

  // Prev Next 処理
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      if (emblaApi.selectedScrollSnap() !== index)
        emblaApi.scrollTo(index, false)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  //カルーセルの送りに余りが出てしまう場合の最後のスクロール時の挙動修正
  const lastScrollSnap = useCallback(() => {
    if (!emblaApi) return
    const emblaEngine = emblaApi.internalEngine()
    const totalSlide = emblaApi.scrollSnapList().length - 1
    const secondLastItem = emblaEngine.scrollSnaps.length - 2
    const marginArea = 16
    const sliderScrollLength = emblaEngine.slideLooper.loopPoints.length
    if (emblaEngine.slideRects) {
      //あまりの数=すべてのカルーセルの枚数　ー　スクロールされる枚数　✖️ スクロールバーの枚数
      const remainderLength =
        emblaEngine.slideIndexes.length - sliderScrollLength * totalSlide
      //余りカルーセルの幅=カルーセル一枚分の幅　*　カルーセルあまりの数 +　カルーセルあまり分の余白(margin)
      const lastCardPosition =
        emblaEngine.slideRects[0].width * remainderLength +
        remainderLength * marginArea
      //最後のカルーセルの位置 = 余りカルーセルの幅 - 最後から２番目のsnapPoint
      const reScrollPosition =
        lastCardPosition - emblaEngine.scrollSnaps[secondLastItem]
      emblaEngine.scrollSnaps.splice(totalSlide, 1, -reScrollPosition)
    }
    if (emblaApi.selectedScrollSnap() === totalSlide)
      emblaApi.scrollTo(totalSlide, false)
  }, [emblaApi])

  // 遅延読み込み用
  const [slidesInView, setSlidesInView] = useState<number[]>([])
  const updateSlidesInView = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!emblaApi) return
      setSlidesInView(slidesInView => {
        if (slidesInView.length === emblaApi.slideNodes().length) {
          emblaApi.off('slidesInView', updateSlidesInView)
        }
        const inView = emblaApi
          .slidesInView()
          .filter((index: number) => !slidesInView.includes(index))
        return slidesInView.concat(inView)
      })
    },
    [setSlidesInView],
  )

  useEffect(() => {
    if (!emblaApi) return
    // Prev Next Presentation用処理
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    emblaApi.on('select', lastScrollSnap)
    emblaApi.on('reInit', lastScrollSnap)
    if (lazy) {
      // 遅延読み込み用
      updateSlidesInView(emblaApi)
      emblaApi.on('slidesInView', updateSlidesInView)
      emblaApi.on('reInit', updateSlidesInView)
    }
  }, [
    emblaApi,
    setScrollSnaps,
    onSelect,
    lastScrollSnap,
    updateSlidesInView,
    lazy,
  ])

  const sortPriority = (rankingData: recommendDeviceProps[]) => {
    return rankingData.sort(
      (a, b) => parseInt(a['priority']) - parseInt(b['priority']),
    )
  }

  const createData = (
    recommendData: recommendDeviceProps[],
    productsData: DeviceIphone[] | DeviceTop[],
  ) => {
    const productMap = new Map(
      productsData.map(data => [data.product.trim(), data]),
    )
    return recommendData.reduce((acc, item) => {
      const data = productMap.get(item.product.trim())
      if (data) {
        acc.push({ ...data, ...item })
      }
      return acc
    }, [] as recommendDeviceProps[])
  }

  // おすすめ製品データ取得
  const updateRecommendData = useCallback(() => {
    const mergedIphoneData = createData(recommendDeviceData, iPhoneDeviceData)
    const mergedAndroidData = createData(recommendDeviceData, androidDeviceData)
    return sortPriority([...mergedAndroidData, ...mergedIphoneData])
  }, [recommendDeviceData, iPhoneDeviceData, androidDeviceData])

  const [recommendData] = useState<recommendDeviceProps[]>(updateRecommendData)

  // 幅によってスライドに表示される最大枚数が違うので設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= theme.max.num.m) {
        setMaxCount(1)
      } else {
        setMaxCount(3)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.max.num.m, recommendData])

  // 幅によってカルーセルのUIを表示する枚数が違うので設定
  useEffect(() => {
    recommendData.length > maxCount ? setIsCarousel(true) : setIsCarousel(false)
  }, [maxCount, recommendData])

  return (
    <>
      <div
        className={className}
        data-ratid={ratId}
        data-ratevent={ratEvent}
        data-ratparam={ratParam}
      >
        <Heading level="3">{title}</Heading>
        <div className={`${Utils['Mt-16']}`}>
          <Carousel className="carousel" ref={isCarousel ? emblaRef : null}>
            <div className="carouselContainer">
              {recommendData.map((item, index) => {
                return (
                  <ProductTopRecommendCard
                    key={item.product}
                    deviceData={item}
                    index={index}
                    lazy={lazy}
                    suffix={suffix}
                    inView={slidesInView.indexOf(index) > -1}
                  />
                )
              })}
            </div>
          </Carousel>
          {isCarousel && (
            <CarouselUi>
              <PrevButton
                onClick={scrollPrev}
                enabled={prevBtnEnabled}
                className="default"
              />
              <NextButton
                onClick={scrollNext}
                enabled={nextBtnEnabled}
                className="default"
              />
              <Presentations className="multiple" CardData={recommendData}>
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    index={index}
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </Presentations>
            </CarouselUi>
          )}
        </div>
      </div>
    </>
  )
}
