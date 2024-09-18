import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import {
  CardData,
  ServiceRelatedData,
} from '@components/include/service/RelatedData'
import Utils from '@styles/Utils.module.scss'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { CardNormal } from '@components/atoms/Card'
import { Heading } from '@components/atoms/Heading'

const CardNormalCustom = styled(CardNormal)`
  margin-inline: auto;
  padding: 16px 14px;
  ${mixins.mq.MinL} {
    padding: 24px 16px;
  }
  &:first-child {
    &:hover {
      > img {
        opacity: 0.7;
      }
    }
  }
`
const GridBox = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 100%;
`
const GridImg = styled.img`
  height: 88px;
  overflow: hidden;
  margin-top: 16px;
  ${mixins.mq.MaxM} {
    max-height: 56px;
    height: auto;
  }
`
const GridTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 13px;
  }
`
const CarouselWrap = styled.div`
  &.one-child,
  &.two-child {
    margin-inline: auto;
  }
  &.one-child {
    ${mixins.mq.MinS} {
      width: 181px;
    }
    ${mixins.mq.MinM} {
      width: 352px;
    }
    ${mixins.mq.MinL} {
      width: 328px;
    }
  }
  &.two-child {
    ${mixins.mq.MinL} {
      width: 672px;
    }
  }
`

const Carousel = styled.div`
  overflow: hidden;

  .carouselContainer {
    height: 100%;
    display: flex;
    column-gap: 16px;
    padding-bottom: 4px; //カードの影が計算されないぽいのでpaddingとっておく
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 2;
    --tabView: 2;
    --pcView: 3;
    --gap: 16px;
    // 公式のようにflexの%で実装したら微妙にサイズが合わないので
    display: block;
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
const Presentations = styled.div<PresentationsProps>`
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
      ${({ CardData }) =>
        CardData?.length && CardData.length <= 6
          ? `max-width: 104px;`
          : `padding-inline: 16px;`}
    }
  }
`
const HeadingC = styled(Heading)`
  > span {
    display: inline-block;
  }
`

interface CardListProps {
  selectedIds: string[]
  relatedTitle: React.ReactNode
  lId: string
  ratId?: string
  ratEvent?: 'click' | 'appear'
}
interface PresentationsProps {
  CardData?: (CardData | undefined)[]
}

export const Related: React.FC<CardListProps & PresentationsProps> = ({
  selectedIds,
  relatedTitle,
  lId,
  ratId,
  ratEvent,
  CardData,
  ...rest
}) => {
  const theme = useContext(ThemeContext)
  const [maxCount, setMaxCount] = useState(2)
  const [isCarousel, setIsCarousel] = useState(false)
  const [carouselClassName, setCarouselClassName] = useState('')
  const targetCards = selectedIds.map(id =>
    ServiceRelatedData.find(v => v.id === id),
  )

  // カルーセル基本設定
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start', // start or center or end
      slidesToScroll: 3, // 1回で何個分スライドされるか（デフォは1）
      breakpoints: {
        [`(max-width: ${theme.max.m})`]: {
          slidesToScroll: 2,
        },
      },
    },
    // [Autoplay({
    //   delay: 1000,
    //   stopOnInteraction: false,
    //   stopOnMouseEnter: true,
    // })],
  )

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
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    // Prev Next Presentations用処理
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  // 幅によってスライドに表示される最大枚数が違うので設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < theme.max.num.m) {
        setMaxCount(2)
      } else {
        setMaxCount(3)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [theme.max.num.m])

  // 幅によってカルーセルのUIを表示する枚数が違うので設定
  useEffect(() => {
    targetCards.length > maxCount ? setIsCarousel(true) : setIsCarousel(false)
  }, [maxCount, targetCards])

  // カルーセルの中身がスライドする最低枚数分ない場合の逃げ
  useEffect(() => {
    if (targetCards.length > 2) return
    targetCards.length === 1
      ? setCarouselClassName('one-child')
      : setCarouselClassName('two-child')
  }, [targetCards])

  return (
    <>
      <HeadingC
        level="2"
        className={`${Utils['Align-center']} ${Utils['Mb-32']}`}
        ratId={ratId}
        ratEvent={ratEvent}
      >
        {relatedTitle}
      </HeadingC>

      <CarouselWrap className={carouselClassName}>
        <Carousel className="carousel" ref={isCarousel ? emblaRef : null}>
          <div className="carouselContainer">
            {targetCards.map(
              (card, index) =>
                card && (
                  <CardNormalCustom
                    className={
                      'slideItem' + (index === selectedIndex ? ' current' : '')
                    }
                    href={card.url + lId}
                    key={card.id}
                    {...(card.target && { target: card.target })}
                  >
                    <GridBox>
                      <GridTitle>{card.title}</GridTitle>
                      <GridImg src={card.img} alt={card.alt} height="88" />
                    </GridBox>
                  </CardNormalCustom>
                ),
            )}
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
            <Presentations
              className={maxCount > 1 ? 'multiple' : ''}
              CardData={targetCards}
            >
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
    </>
  )
}
