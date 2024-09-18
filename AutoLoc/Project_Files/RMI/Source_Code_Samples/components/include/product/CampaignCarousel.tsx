import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { BannerHover } from '@components/atoms/Banner'
import { LazyLoadPicture } from '@components/atoms/EmblaCarouselLazyLoadPicture'

const Carousel = styled.div`
  overflow: hidden;
  .carouselContainer {
    height: 100%;
    display: flex;
    gap: 16px;
    ${mixins.mq.MinL} {
      flex-wrap: wrap;
    }
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 1;
    --pcView: 4;
    --gap: 16px;
    // 公式のようにflexの%で実装したら微妙にサイズが合わないので
    display: block;
    /* margin: 0 8px; */
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
    ${mixins.mq.MinL} {
      width: min-content;
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
  .prevButton {
    grid-area: prevbutton;
  }
  .nextButton {
    grid-area: nextbutton;
  }
`
const Presentations = styled.div`
  grid-area: presentations;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px 12px;
`
export interface bnrData {
  url: string
  pcImg: string
  spImg: string
  alt: string
  target?: string
  lidEndParam?: string
}

interface CardListProps {
  data: bnrData[]
  dir: string
  className?: string
  lazy?: boolean
  suffix?: string
}

export const ProductCampaignCarousel: React.FC<CardListProps> = ({
  data,
  className,
  dir,
  lazy = false,
  suffix,
  ...rest
}) => {
  const theme = useContext(ThemeContext)
  const [isCarousel, setIsCarousel] = useState(false)
  // カルーセル基本設定
  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: {
      [`(max-width: ${theme.max.m})`]: {
        loop: true,
        align: 'start', // start or center or end
        slidesToScroll: 1,
      },
    },
  })

  // Prev Next Presentations設定と処理
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
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
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

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
    // Prev Next Presentations用処理
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    if (lazy) {
      // 遅延読み込み用
      updateSlidesInView(emblaApi)
      emblaApi.on('slidesInView', updateSlidesInView)
      emblaApi.on('reInit', updateSlidesInView)
    }
  }, [emblaApi, setScrollSnaps, onSelect, updateSlidesInView, lazy])

  // 834px以下はカルーセルになるので設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= theme.max.num.m) {
        setIsCarousel(true)
      } else {
        if (lazy) {
          //PC時のLazy逃げ対応
          const detaArray = Array.from(
            { length: data.length },
            (_, index) => index,
          )
          setSlidesInView(detaArray)
        }
        setIsCarousel(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.max.num.m, data, lazy])

  return (
    <>
      <div className={className}>
        <Carousel className="carousel" ref={isCarousel ? emblaRef : null}>
          <div className="carouselContainer">
            {data.map((bnr, index) => {
              return (
                <BannerHover
                  className={
                    'slideItem' + (index === selectedIndex ? ' current' : '')
                  }
                  href={
                    bnr.lidEndParam
                      ? `${bnr.url}?l-id=${dir}_${bnr.lidEndParam}${
                          suffix || ''
                        }`
                      : bnr.url
                  }
                  key={index}
                  {...(bnr.target && { target: bnr.target })}
                >
                  {lazy ? (
                    <LazyLoadPicture
                      imgSrc={bnr.pcImg}
                      spImg={bnr.spImg}
                      width="240"
                      height="135"
                      alt={bnr.alt}
                      inView={slidesInView.indexOf(index) > -1}
                    />
                  ) : (
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={bnr.spImg}
                        width={theme.max.num.m}
                      />
                      <img
                        src={bnr.pcImg}
                        width="240"
                        height="135"
                        alt={bnr.alt}
                      />
                    </picture>
                  )}
                </BannerHover>
              )
            })}
          </div>
        </Carousel>
        {isCarousel && scrollSnaps.length > 1 && (
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
            <Presentations>
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
    </>
  )
}
