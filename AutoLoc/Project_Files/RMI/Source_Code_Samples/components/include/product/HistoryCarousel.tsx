import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import styled, { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { Heading } from '@components/atoms/Heading'
import { HistoryCard } from '@components/atoms/HistoryCard'

const Carousel = styled.div`
  overflow: hidden;
  .carouselContainer {
    height: 100%;
    display: flex;
    padding-bottom: 4px; //カードの影が計算されないぽいのでpaddingとっておく
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 3;
    --pcView: 6;
    --gap: 16px;
    // 公式のようにflexの%で実装したら微妙にサイズが合わないので
    display: block;
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
    max-width: 109px;
    margin: 0 16px 0 0;
    ${mixins.mq.MinL} {
      min-width: calc(
        ((100% - (var(--gap) * (var(--pcView) - 1))) / var(--pcView))
      );
      max-width: 152px;
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
    grid-template-columns: 128px 56px 44px;
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

interface HistoryDevice {
  path: string
  productName: string
  time: string
}

interface CardListProps {
  title: string
  className?: string
  lazy?: boolean
  suffix?: string
}

interface PresentationsProps {
  CardData?: HistoryDevice[]
}

export const ProductCarouselHistory: React.FC<
  CardListProps & PresentationsProps
> = ({ title, className, lazy = true, suffix, CardData, ...rest }) => {
  const theme = useContext(ThemeContext)
  // カルーセル基本設定
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 6,
    loop: true,
    breakpoints: {
      [`(max-width: ${theme.max.m})`]: {
        slidesToScroll: 3,
      },
    },
  })
  const [productsData, setProductsData] = useState<HistoryDevice[]>([])

  // Prev Next Presentation設定と処理
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [maxCount, setMaxCount] = useState(3)
  const [isCarousel, setIsCarousel] = useState(true)
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
      const lastCardPositon =
        emblaEngine.slideRects[0].width * remainderLength +
        remainderLength * marginArea
      //最後のカルーセルの位置 = 余りカルーセルの幅 - 最後から２番目のsnapPoint
      const reScrollPosition =
        lastCardPositon - emblaEngine.scrollSnaps[secondLastItem]
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

  // 幅によってスライドに表示される最大枚数が違うので設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= theme.max.num.m) {
        setMaxCount(3)
      } else {
        setMaxCount(6)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [theme.max.num.m])

  // 幅によってカルーセルのUIを表示する枚数が違うので設定
  useEffect(() => {
    productsData.length > maxCount ? setIsCarousel(true) : setIsCarousel(false)
  }, [maxCount, productsData])

  //ローカルストレージからデータ取得
  const getLocalStorageData = () => {
    const str_storage = window.localStorage.getItem('targeting')
    let obj_storage = str_storage !== null ? JSON.parse(str_storage) : []
    return obj_storage
  }
  //表示枚数が少ないときのLazy対応
  const firstLazy = useCallback(
    (data: HistoryDevice[]) => {
      if (data.length < maxCount) {
        const detaArray = Array.from(
          { length: data.length },
          (_, index) => index,
        )
        return setSlidesInView(detaArray)
      }
    },
    [maxCount],
  )

  useEffect(() => {
    const setStorageData = () => {
      const storageDate = getLocalStorageData()
      const showData = (storageDate.visit ?? []).slice(0, 10)
      setProductsData(showData)
      if (lazy) firstLazy(showData)
    }

    setStorageData()
  }, [lazy, firstLazy])

  return (
    <>
      {productsData.length > 0 && (
        <div className={className}>
          <Heading level="3">{title}</Heading>
          <div className={`${Utils['Mt-pc-16']} ${Utils['Mt-24']}`}>
            <Carousel className="carousel" ref={isCarousel ? emblaRef : null}>
              <div className="carouselContainer">
                {productsData.map((item, index) => (
                  <HistoryCard
                    key={index}
                    summary={item}
                    index={index}
                    lazy={lazy}
                    suffix={suffix}
                    inView={slidesInView.indexOf(index) > -1}
                  ></HistoryCard>
                ))}
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
                <Presentations className="multiple" CardData={productsData}>
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
      )}
    </>
  )
}
