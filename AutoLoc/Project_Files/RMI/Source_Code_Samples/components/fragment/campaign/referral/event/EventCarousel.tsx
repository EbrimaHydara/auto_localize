import React, { useEffect, useCallback, useState, useContext } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { ThemeContext } from 'styled-components'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { LazyLoadPicture } from '@components/atoms/EmblaCarouselLazyLoadPicture'

const Main = styled.div`
  transition: opacity 200ms ease-in;
  &[aria-hidden='true'] {
    display: block;
    opacity: 0;
  }
  &[aria-hidden='false'] {
    opacity: 1;
  }
  .carouselContainer {
    display: flex;
    height: auto;
  }
  .slideItem {
    min-width: 100%;
    ${mixins.mq.MinL} {
      position: relative;
      min-width: 678px;
      max-height: 453px;
    }
    &::after {
      ${mixins.mq.MinL} {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    &.current {
      &::after {
        ${mixins.mq.MinL} {
          width: 100%;
          display: none;
        }
      }
    }
  }
  .secondary {
    .slideItem {
      &::after {
        ${mixins.mq.MinL} {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`
const Ui = styled.div`
  --btnSize: 32px;
  margin-top: 12px;
  display: grid;
  justify-content: center;
  place-items: center;
  min-height: var(--btnSize);
  grid-template-areas: 'prev presentations next';
  grid-template-columns: var(--btnSize) calc(100% - 64px) var(--btnSize);
  ${mixins.mq.MaxM} {
    padding-inline: 16px;
  }
  ${mixins.mq.MinL} {
    margin-top: 16px;
    --next: 56px;
    --prev: 44px;
    grid-template-areas: 'presentations prev next';
    grid-template-columns: auto var(--next) var(--prev);
    transform: translateX(calc((var(--next) + var(--prev)) / 2));
  }
`
const PrevCustom = styled(PrevButton)`
  grid-area: prev;
  ${mixins.mq.MinL} {
    margin-left: 24px;
  }
`
const NextCustom = styled(NextButton)`
  grid-area: next;
  ${mixins.mq.MinL} {
    margin-left: 12px;
  }
`
const Presentations = styled.div`
  grid-area: presentations;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  padding-inline: 12px;
  ${mixins.mq.MinL} {
    justify-content: flex-start;
    gap: 6px 12px;
    padding-inline: 0;
    max-width: 516px;
  }
`

export type Bnrs = {
  spImg: string
  pcImg: string
  alt: string
}
type Props = {
  className?: string
  secondary?: boolean
  bnrs: Bnrs[]
  lazy?: boolean
}

export const EventCarousel = ({ className, secondary, bnrs, lazy }: Props) => {
  const [isShowCarousel, setIsShowCarousel] = useState<boolean>(true)
  const theme = useContext(ThemeContext)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  )

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

  const handleCustomScrollTo = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      if (!emblaApi) return
      if (selectedIndex === index) {
        return
      } else {
        e.preventDefault()
      }
      const totalSlides = emblaApi.slideNodes().length
      const diff = index - selectedIndex

      if (diff === 0) return

      if (Math.abs(diff) > totalSlides / 2) {
        if (diff > 0) {
          emblaApi.scrollPrev()
        } else {
          emblaApi.scrollNext()
        }
      } else {
        if (diff > 0) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollPrev()
        }
      }
    },
    [emblaApi, selectedIndex],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
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
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    if (lazy) {
      // 遅延読み込み用
      updateSlidesInView(emblaApi)
      emblaApi.on('slidesInView', updateSlidesInView)
      emblaApi.on('reInit', updateSlidesInView)
    }
  }, [emblaApi, setScrollSnaps, onSelect, updateSlidesInView, lazy])

  useEffect(() => {
    setIsShowCarousel(false)
  }, [])

  return (
    <>
      <Main className={className} aria-hidden={isShowCarousel} ref={emblaRef}>
        <div className={`carouselContainer ${secondary && 'secondary'}`}>
          {bnrs.map((bnr, index) => {
            return (
              <div
                className={
                  'slideItem' + (index === selectedIndex ? ' current' : '')
                }
                key={index}
                onClick={e => {
                  handleCustomScrollTo(e, index)
                }}
              >
                {lazy ? (
                  <LazyLoadPicture
                    imgSrc={bnr.pcImg}
                    spImg={bnr.spImg}
                    width="678"
                    height="453"
                    alt={bnr.alt}
                    inView={slidesInView.indexOf(index) > -1}
                  />
                ) : (
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={bnr.spImg}
                      width="375"
                      height="250"
                    />
                    <img
                      src={bnr.pcImg}
                      width="678"
                      height="453"
                      alt={bnr.alt}
                    />
                  </picture>
                )}
              </div>
            )
          })}
        </div>
      </Main>
      <Ui>
        <PrevCustom
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
          className="topcarousel"
          ariaLabel="Previous"
          ratId="carousel_left"
          ratEvent="click"
          ratParam="all"
        />
        <NextCustom
          onClick={scrollNext}
          enabled={nextBtnEnabled}
          className="topcarousel"
          ariaLabel="Next"
          ratId="carousel_right"
          ratEvent="click"
          ratParam="all"
        />

        <Presentations>
          {scrollSnaps.map((_, index) => (
            <DotButton
              index={index}
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              ratId={`carousel_indicator${(index + 1)
                .toString()
                .padStart(2, '0')}`}
              ratEvent="click"
              ratParam="all"
              ariaLabel={`${index + 1} of ${bnrs.length}`}
              tabIndex={-1}
              role="tab"
            />
          ))}
        </Presentations>
      </Ui>
    </>
  )
}
