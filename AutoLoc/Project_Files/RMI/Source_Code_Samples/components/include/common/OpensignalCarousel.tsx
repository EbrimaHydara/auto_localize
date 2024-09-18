import React, { useEffect, useCallback, useState, useContext } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import {
  DotButton,
  PrevButton,
  NextButton,
} from '@components/atoms/EmblaCarouselArrowsDotsButtons'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

// Carouselスタイル
const CarouselWrap = styled.div`
  &.contents,
  .contents {
    display: contents;
  }
`
const Carousel = styled.div`
  grid-area: carousel;
  overflow: hidden;
  .carouselContainer {
    display: flex;
    align-items: flex-start;
  }

  .slideItem {
    // レスポンシブ：BreakPointごとの表示個数設定
    --spView: 1;
    --gap: 16px;
    display: inline-block;
    margin-right: var(
      --gap
    ); // flexにgapだとループの場合、最初と最後の間が取れなかった

    // 公式のようにflexの%で実装したら微妙にサイズが合わないので計算
    min-width: calc(
      ((100% - (var(--gap) * (var(--spView) - 1))) / var(--spView))
    );
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
const Presentations = styled.div`
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
    ${mixins.mq.MaxS} {
      padding-inline: 16px;
      width: 100%;
    }
  }
`

// OPENSIGNALコンテツンつのスタイル
const HeroBorder = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  &.first {
    border-right: none;
  }
`
const HeroGridItem = styled.div`
  display: grid;
  width: 100%;
  ${mixins.mq.MinL} {
    grid-template-rows: auto 90px;
  }
`
const HeroGridTxt = styled.p`
  padding: 8px;
  line-height: 1.5;
  font-size: 15px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 8px 16px;
  }
  ${props => mixins.mq.MinMaxCustom(props.theme.min.l, '1440px')} {
    flex-grow: 1;
    br {
      display: none;
    }
  }
  ${mixins.mq.MinCustom('1440px')} {
    &.adjustLayout {
      padding: 20px 8px !important;
    }
  }
`
const HeroGridImg = styled.div`
  margin: 0;
  padding: 8px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${props => mixins.mq.MinMaxCustom(props.theme.min.l, '1440px')} {
    height: auto;
    img {
      width: auto;
      height: 100px;
    }
  }
  ${mixins.mq.MaxM} {
    padding: 12px;
  }
`

export const OpensignalCarousel = () => {
  const theme = useContext(ThemeContext)
  const [isSp, setIsSp] = useState(false)
  useEffect(() => {
    const mq: any = window.matchMedia(`(max-width: ${theme.max.m})`)
    const onResize = (mq: MediaQueryListEvent) => {
      setIsSp(mq.matches)
    }
    onResize(mq)
    mq.addListener(onResize)
  }, [theme.max.m])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
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
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect, setScrollSnaps])

  return (
    <>
      <CarouselWrap className={isSp ? '' : 'contents'}>
        <Carousel
          className={isSp ? 'carousel' : 'contents'}
          ref={isSp ? emblaRef : null}
        >
          <div className={isSp ? 'carouselContainer' : 'contents'}>
            <HeroGridItem className={isSp ? 'slideItem current' : ''}>
              <HeroBorder className={isSp ? '' : 'first'}>
                <HeroGridTxt>
                  グローバル・モバイル・ネットワーク・
                  <br />
                  エクスペリエンス・アワード 2024
                  <br />
                  <TxtEmp02>世界最高評価を獲得</TxtEmp02>
                  <TxtCap>※</TxtCap>
                </HeroGridTxt>
                <HeroGridImg>
                  <picture>
                    <source
                      media={`(max-width:834px)`}
                      srcSet={`${assets}img/feature/why-rakuten-mobile/img-opensignal-01-sp-240318.png`}
                      width="314"
                      height="168"
                    />
                    <img
                      srcSet={`${assets}img/feature/why-rakuten-mobile/img-opensignal-01-pc-240318.png`}
                      width="350"
                      height="138"
                      alt="OPENSIGNAL 2部門で世界最高評価を獲得 音声アプリ通話体感受賞 モバイルゲーム体感受賞 1部門でグローバル・リーダーに選出 アップロードスピード体感受賞"
                    />
                  </picture>
                </HeroGridImg>
              </HeroBorder>
              <div className={Utils['Mt-8']}>
                <TxtCap as="p">
                  ※Opensignal Awards「Opensignal Global Awards 2024 — Group
                  1（2024年1月）／データ収集期間（2023年7月1日
                  ～2023年12月27日）」© 2024 Opensignal Inc. 詳しくは、
                  <LinkIconAfter
                    href="https://corp.mobile.rakuten.co.jp/news/press/2024/0227_01/"
                    target="_blank"
                  >
                    当社プレスリリース
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
              </div>
            </HeroGridItem>
            <HeroGridItem className={isSp ? 'slideItem' : ''}>
              <HeroBorder>
                <HeroGridTxt>
                  モバイル・ネットワーク・ユーザー・
                  <br />
                  エクスペリエンス・アワード
                  <br />
                  <TxtEmp02>4部門受賞</TxtEmp02>
                  <TxtCap>※</TxtCap>
                </HeroGridTxt>
                <HeroGridImg>
                  <picture>
                    <source
                      media={`(max-width:834px)`}
                      srcSet={`${assets}img/feature/why-rakuten-mobile/img-opensignal-02-sp-240318.png`}
                      width="200"
                      height="148"
                    />
                    <img
                      srcSet={`${assets}img/feature/why-rakuten-mobile/img-opensignal-02-pc-240318.png`}
                      width="181"
                      height="129"
                      alt="OPENSIGNAL アップロードスピード体感受賞 5Gアップロードスピード受賞 ライブビデオ体感共同受賞 5Gダウンロードスピード共同受賞"
                    />
                  </picture>
                </HeroGridImg>
              </HeroBorder>
              <div className={Utils['Mt-8']}>
                <TxtCap as="p">
                  ※Opensignal Awards「
                  <LinkIconAfter
                    href="https://www.opensignal.com/jp/reports/2023/10/japan/mobile-network-experience"
                    target="_blank"
                    rel="noopener"
                  >
                    モバイル・ネットワーク・ユーザー体感レポート（2023年10月）／データ収集期間（2023年6月1日
                    ～2023年8月29日）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  」© 2023 Opensignal Inc. ※5Gは一部エリアで提供
                </TxtCap>
              </div>
            </HeroGridItem>
          </div>
        </Carousel>
        {isSp && (
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
            <Presentations className="multiple">
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
