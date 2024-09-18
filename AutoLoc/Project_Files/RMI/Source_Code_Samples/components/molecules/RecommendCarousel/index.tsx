import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { LazyLoadImage } from '@components/atoms/EmblaCarouselLazyLoadImage'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
const CarouselWrap = styled.div``
const Carousel = styled.div`
  grid-area: carousel;
  overflow: hidden;

  .carouselContainer {
    display: flex;
    align-items: flex-start;
    height: 139px;
    max-height: 139px;
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 2;
    --tabView: 3;
    --pcView: 4;
    --gap: 16px;
    display: inline-block;
    margin-right: var(
      --gap
    ); // flexにgapだとループの場合、最初と最後の間が取れなかった

    // 公式のようにflexの%で実装したら微妙にサイズが合わないので計算
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
    @media screen and (min-width: ${props => props.theme.min.m}) {
      min-width: calc(
        ((100% - (var(--gap) * (var(--tabView) - 1))) / var(--tabView))
      );
    }
    @media screen and (min-width: ${props => props.theme.min.l}) {
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
  grid-template-areas: 'prevbutton presentations nextbutton';
  ${mixins.mq.MinL} {
    margin-top: 16px;
    width: fit-content;
    margin-inline: auto;
    grid-template-columns: 128px 56px 44px;
    grid-template-areas: 'presentations prevbutton nextbutton';
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
const Presentations = styled.div<Props>`
  grid-area: presentations;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 6px 12px;
  &.multiple {
    margin-inline: auto;
    width: 128px;
    column-gap: 4px;
    ${mixins.mq.MaxM} {
      width: 184px;
    }
    ${mixins.mq.MaxS} {
      width: 100%;
      ${({ bannerList }) =>
        bannerList?.length <= 6 ? `max-width: 104px;` : `padding-inline: 16px;`}
    }
  }
`

type List = {
  url: string
  img: string
  alt: string
  target?: string
}
type Props = {
  className?: string
  bannerList: Array<List>
  lazy?: boolean
}

export const RecommendCarousel = ({
  className,
  bannerList,
  lazy = true,
}: Props) => {
  const theme = useContext(ThemeContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 4,
    breakpoints: {
      [`(max-width: ${theme.max.m})`]: {
        slidesToScroll: 3,
      },
      [`(max-width: ${theme.max.s})`]: {
        slidesToScroll: 2,
      },
    },
  })

  // Prev Next Presentations設定と処理
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

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

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const lastscrollSnap = useCallback(() => {
    if (!emblaApi) return
    const emblaEngine = emblaApi.internalEngine()
    const totalSlide = emblaApi.scrollSnapList().length - 1
    const secondLastItem = emblaEngine.scrollSnaps.length - 2
    const marginArea = 16
    const sliderScrollLength = emblaEngine.slideLooper.loopPoints.length
    console.log(sliderScrollLength)
    if (emblaEngine.slideRects) {
      //あまりの数=すべてのカルーセルの枚数 ー スクロールされる枚数 ✖️ スクロールバーの枚数
      const remainderLength =
        emblaEngine.slideIndexes.length - sliderScrollLength * totalSlide
      //余りカルーセルの幅=カルーセル一枚分の幅 * カルーセルあまりの数 + カルーセルあまり分の余白(margin)
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

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    emblaApi.on('select', lastscrollSnap)
    emblaApi.on('reInit', lastscrollSnap)

    if (lazy) {
      // 遅延読み込み用
      updateSlidesInView(emblaApi)
      emblaApi.on('slidesInView', updateSlidesInView)
      emblaApi.on('reInit', updateSlidesInView)
    }
  }, [emblaApi, onInit, onSelect, updateSlidesInView, lazy, lastscrollSnap])

  return (
    <CarouselWrap>
      <Carousel className="carousel" ref={emblaRef}>
        <div className="carouselContainer">
          {bannerList.map((item: List, index) => {
            return (
              <a
                className={
                  'slideItem' + (index === selectedIndex ? ' current' : '')
                }
                href={item.url}
                key={index}
                target={item.target}
              >
                {lazy ? (
                  <LazyLoadImage
                    imgSrc={item.img}
                    width="246"
                    height="139"
                    alt={item.alt}
                    inView={slidesInView.indexOf(index) > -1}
                  />
                ) : (
                  <img src={item.img} width="246" height="139" alt={item.alt} />
                )}
              </a>
            )
          })}
        </div>
      </Carousel>
      {scrollSnaps.length > 1 && (
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
          <Presentations className="multiple" bannerList={bannerList}>
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
    </CarouselWrap>
  )
}
