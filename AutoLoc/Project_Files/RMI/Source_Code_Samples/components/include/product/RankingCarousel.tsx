import React, {
  useEffect,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import { IconProductArrowSelect } from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import { RankCard } from '@components/atoms/RankCard'
import {
  DeviceIphone,
  DeviceTop,
} from '@components/include/common/product/CardType'

//CSV to date
import { device_iphone } from '~/js/csv-data/device-iphone'
import { device_top } from '~/js/csv-data/device-top'
import { device_ranking } from '~/js/csv-data/device-ranking'

const Carousel = styled.div`
  overflow: hidden;
  .carouselContainer {
    height: 100%;
    display: flex;
    padding-bottom: 4px; //カードの影が計算されないぽいのでpaddingとっておく
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 2;
    --pcView: 5;
    --gap: 16px;
    // 公式のようにflexの%で実装したら微妙にサイズが合わないので
    display: block;
    margin-right: var(--gap);
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
    ${mixins.mq.MinL} {
      max-width: min-content;
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
const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 16px 0 0 auto;
  ${IconProductArrowSelect} {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`

const SelectContent = styled.select`
  font-size: 16px;
  height: 40px;
  padding-right: 48px;
  padding-left: 16px;
  border: 1px solid #666;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
`
const FlexBox = styled.div`
  ${mixins.mq.MinL} {
    display: flex;
    justify-content: space-between;
  }
`

interface CardListProps {
  className?: string
  title: string
  rankingFilter: string
  lazy?: boolean
  suffix?: string
}
interface rankingProps {
  'update-page': string
  'rank-last-month': string
  'rank-this-month': string
  product: string
  manufacturer: string
  'ranking-iphone-note1': string
  'ranking-iphone-note2': string
  'ranking-note1': string
  'ranking-note2': string
  'ranking-note3': string
  'ranking-discount-note': string
  feature1: string
  feature2: string
  feature3: string
  note: string
  'ranking-payment48-text': string
  'ranking-payment48-note': string
  'ranking-pointback-text1': string
  'ranking-pointback-text2': string
  'ranking-pointback-text3': string
  'rank-add-this-month'?: string
  'rank-add-last-month'?: string
}

interface mergedIphoneProps extends rankingProps, DeviceIphone {}
interface mergedAndroidProps extends rankingProps, DeviceTop {}
interface PresentationsProps {
  CardData?: (mergedIphoneProps | mergedAndroidProps)[]
}

export const ProductRankingCarousel: React.FC<CardListProps> = ({
  title,
  rankingFilter,
  lazy = true,
  suffix,
}) => {
  const rankingDeviceData = device_ranking
  const iPhoneDeviceData = device_iphone
  const androidDeviceData = device_top
  const options = [
    {
      text: '総合ランキング',
      value: 'both',
    },
    {
      text: 'iPhone',
      value: 'iPhone',
    },
    {
      text: 'Android',
      value: 'Android',
    },
  ]

  const [rankingData, setRankingData] = useState<
    (mergedIphoneProps | mergedAndroidProps)[]
  >([])

  const [rankFilter, setRankingFilter] = useState<string>(rankingFilter)

  const [isCarousel, setIsCarousel] = useState(false)
  const [maxCount, setMaxCount] = useState(5)
  const theme = useContext(ThemeContext)
  // カルーセル基本設定
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start', // start or center or end
    slidesToScroll: 5, // 1回で何個分スライドされるか（デフォは1）
    breakpoints: {
      [`(max-width: ${theme.max.m})`]: {
        slidesToScroll: 2,
      },
    },
  })

  // Prev Next Presentation設定と処理
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

  const sortRanking = (
    rankingData: (mergedIphoneProps | mergedAndroidProps)[],
  ) => {
    return rankingData.sort(
      (a, b) => parseInt(a['rank-this-month']) - parseInt(b['rank-this-month']),
    )
  }

  const createRankInData = (
    rankingData: rankingProps[],
    productsData: (DeviceIphone | DeviceTop)[],
  ) => {
    const productMap = new Map(
      productsData.map(data => [data.product.trim(), data]),
    )
    return rankingData.reduce((acc, item) => {
      const data = productMap.get(item.product.trim())
      if (data) {
        acc.push({ ...data, ...item })
      }
      return acc
    }, [] as (mergedIphoneProps | mergedAndroidProps)[])
  }

  const getSortedAndMergedRankingData = useCallback(() => {
    const thisRankInIphone = sortRanking(
      createRankInData(rankingDeviceData, iPhoneDeviceData),
    )
    const thisRankInAndroid = sortRanking(
      createRankInData(rankingDeviceData, androidDeviceData),
    )

    const thisRankingBoth = sortRanking([
      ...thisRankInIphone,
      ...thisRankInAndroid,
    ]).slice(0, 10)
    // ランキングの情報を更新
    const updateRankingAdditionalInfo = (
      data: (mergedIphoneProps | mergedAndroidProps)[],
    ) => {
      return data.map((item, index) => ({
        ...item,
        'rank-add-this-month': String(index + 1),
        'rank-add-last-month':
          item['rank-last-month'].trim() === ''
            ? ''
            : item['rank-add-last-month'],
      }))
    }

    return {
      allData: thisRankingBoth,
      iphoneData: updateRankingAdditionalInfo(thisRankInIphone),
      androidData: updateRankingAdditionalInfo(thisRankInAndroid),
    }
  }, [rankingDeviceData, iPhoneDeviceData, androidDeviceData])

  const [allData] = useState<(mergedIphoneProps | mergedAndroidProps)[]>(
    getSortedAndMergedRankingData().allData,
  )
  const [iphoneData] = useState<(mergedIphoneProps | mergedAndroidProps)[]>(
    getSortedAndMergedRankingData().iphoneData,
  )
  const [androidData] = useState<(mergedIphoneProps | mergedAndroidProps)[]>(
    getSortedAndMergedRankingData().androidData,
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
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
    updateSlidesInView,
    lastScrollSnap,
    lazy,
  ])

  // 幅によってスライドに表示される最大枚数が違うので設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= theme.max.num.m) {
        setMaxCount(2)
      } else {
        setMaxCount(5)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.max.num.m, rankingData])

  // 幅によってカルーセルのUIを表示する枚数が違うので設定
  useEffect(() => {
    rankingData.length > maxCount ? setIsCarousel(true) : setIsCarousel(false)
  }, [maxCount, rankingData])

  const filteredData = useMemo(() => {
    const dataMap: Record<string, (mergedIphoneProps | mergedAndroidProps)[]> =
      {
        iPhone: iphoneData,
        Android: androidData,
        both: allData,
      }

    return dataMap[rankFilter] || allData
  }, [rankFilter, iphoneData, androidData, allData])

  useEffect(() => {
    setRankingData(filteredData)
    if (!emblaApi) return
    emblaApi.scrollTo(0)
  }, [filteredData, emblaApi])

  return (
    <>
      <FlexBox className={Utils['Mb-16']}>
        <Heading level="2">{title}</Heading>
        {rankingFilter === 'both' && (
          <SelectWrapper>
            <SelectContent
              value={rankFilter}
              onChange={e => setRankingFilter(e.target.value)}
            >
              {options.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              ))}
            </SelectContent>
            <IconProductArrowSelect />
          </SelectWrapper>
        )}
      </FlexBox>

      <div>
        <Carousel className="carousel" ref={isCarousel ? emblaRef : null}>
          <div className="carouselContainer">
            {rankingData.map((item, index) => {
              return (
                <RankCard
                  key={item.directory}
                  summary={item}
                  selectDeviceName={rankFilter}
                  lazy={lazy}
                  suffix={suffix}
                  inView={slidesInView.indexOf(index) > -1}
                ></RankCard>
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
            <Presentations className="multiple" CardData={rankingData}>
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
