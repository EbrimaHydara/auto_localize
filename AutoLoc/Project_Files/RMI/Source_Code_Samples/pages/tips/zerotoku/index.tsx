import type { NextPage } from 'next'
import React, { useEffect, useState, useRef, useContext, useMemo } from 'react'
import styled, { keyframes } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import {
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonSecondary,
} from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { BannerHover } from '@components/atoms/Banner'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { AccordionList } from '@components/atoms/AccordionList'
import { IconNewTabLine } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'

import { ZerotokuLoginGadget } from '@components/include/tips/LoginGadget'
import { useBrightcove, BrightcoveVideoProps } from '~/hooks/useBrightcove'

const SystemWrapperCustom = styled(SystemWrapper)`
  ${mixins.mq.MinL} {
    overflow-x: visible;
  }
`
const Kv = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.primary} 0,
      ${props => props.theme.colors.primary} 247px,
      #eb0181 248px,
      #eb0181 100%
    );
  }
`
const BgYellow = styled.div`
  background: #fffee8 url(${assets}img/tips/zerotoku/img-bg-yellow-pc.png)
    repeat;
  background-position-x: center;
  background-attachment: fixed;
  ${mixins.mq.MaxM} {
    background: #fffee8 url(${assets}img/tips/zerotoku/img-bg-yellow-sp.png)
      repeat;
    background-attachment: fixed;
  }
`
const BgPink = styled.div`
  background-color: ${props => props.theme.colors.pink10};
`
const BgWhite = styled.div`
  background-color: ${props => props.theme.colors.white};
`
const Cta2col = styled.div`
  margin: 0 auto;
  max-width: 824px;
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const Cta2colFoot = styled(Cta2col)`
  ${mixins.mq.MaxM} {
    flex-direction: row;
    gap: 8px;
    a {
      font-size: 13px;
      padding: 14px;
    }
  }
`
const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);
  ${mixins.mq.MaxM} {
    padding: 8px;
  }
  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`
const GuideBtn = styled.a`
  position: absolute;
  bottom: 12px;
  right: 16px;
  width: 120px;
  height: 73px;
  background-image: url(${assets}img/common/btn-apply-guide.png);
  background-size: 120px 73px;
  background-position: center;
  background-repeat: no-repeat;
  > span {
    position: absolute;
    text-indent: 100%;
    width: 120px;
    height: 73px;
    overflow: hidden;
    z-index: -1;
  }
  &:hover {
    background-image: url(${assets}img/common/btn-apply-guide-active.png),
      url(${assets}img/common/btn-apply-guide.png);
  }
  ${mixins.mq.MaxCustom('1120px')} {
    display: none;
  }
`
const IntroFlow = styled.div`
  display: flex;
  gap: 46px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
  div:nth-child(1) {
    width: calc((208 / 1032) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  div:nth-child(2) {
    width: calc((227 / 1032) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  div:nth-child(3) {
    width: calc((505 / 1032) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  div {
    position: relative;
  }
  div + div::before {
    content: '';
    display: block;
    width: 14px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    background: url(${assets}img/tips/zerotoku/img-sec1-arrow-pc.png);
    background-size: cover;
    ${mixins.mq.MaxM} {
      display: block;
      width: 16px;
      height: 9px;
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translate(-50%, 0);
      background: url(${assets}img/tips/zerotoku/img-sec1-arrow-sp.png);
      background-size: cover;
    }
  }
`
const SecTitleFlow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;

  .zerotoku_gadjet {
    + div {
      ${mixins.mq.MaxM} {
        margin-block: 16px;
      }
    }
  }
`
const Sec2ContentFlow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${props => props.theme.gap.l};
`
const Sec2cardHeadingLv3 = styled(Heading).attrs({ level: '3' })``
const Sec2card = styled.div`
  margin-inline: auto;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 4px 0px rgba(219, 210, 177, 0.5);

  > ${Sec2cardHeadingLv3} {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.pink100};
    padding: 6px;
    border-radius: 8px 8px 0px 0px;
  }

  > div {
    background-color: ${props => props.theme.colors.white};
    padding: 24px;
    border-radius: 0px 0px 8px 8px;
    ${mixins.mq.MaxM} {
      padding: 16px;
    }
  }
`
const Sec2Flex01 = styled.div`
  display: flex;
  align-items: end;
  gap: ${props => props.theme.gap.m};
  max-width: 709px;
  margin-inline: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: ${props => props.theme.gap.s};
  }

  > div:first-child {
    width: calc((313 / 709) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  > div:last-child {
    width: calc((380 / 709) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`
const Sec2Flex02 = styled.div`
  display: flex;
  gap: ${props => props.theme.gap.m};
  max-width: 752px;
  margin-inline: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: ${props => props.theme.gap.s};
  }

  > div:first-child {
    width: calc((313 / 752) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  > div:last-child {
    width: calc((380 / 752) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`
const Sec2Flex03 = styled.div`
  display: flex;
  gap: ${props => props.theme.gap.m};
  max-width: 787px;
  margin-inline: auto;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }

  > div:first-child {
    width: calc((391 / 787) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  > div:last-child {
    width: calc((380 / 787) * 100%);
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
`
const OtherCaseArea = styled.div`
  display: flex;
  gap: ${props => props.theme.gap.m};
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  border-radius: 4px;
  background-color: #eff9e6;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: ${props => props.theme.gap.s};
  }
  > div:first-child {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`
const ButtonSecondaryCostom = styled(ButtonSecondary)`
  width: 305px;
  ${mixins.mq.MaxM} {
    width: 100%;
    max-width: 289px;
    padding: 12px 16px;
  }
`
const SimulationBtnArea = styled.div`
  position: relative;

  > ${ButtonSecondaryCostom} {
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    ${mixins.mq.MaxM} {
      bottom: 16px;
    }
  }
`
const Sec3ContentWrap = styled.div`
  max-width: 800px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  padding: 24px 100px;
  margin-inline: auto;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`
const TextBeforeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.gap.m};
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: ${props => props.theme.gap.s};
  }
  > p {
    text-align: center;
    width: calc(100% - 180px);
    max-width: 400px;
  }
`
const SpuContentWrap = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 24px 16px;
`
const SpuBorderTop = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.monotone75};
`
const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`
const expandApper = keyframes`
  0% {
    opacity: .7;
    transform: scale(.6);
  }
  60% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const AnimateWraper = styled.div`
  opacity: 0;

  &.fadeIn {
    transform: translateY(20px);
    animation: ${fadeIn} 0.5s ease-out forwards;
  }

  &.expandApper {
    transform: scale(1.5);
    animation: ${expandApper} 0.6s ease-out forwards;
  }
`

const MovieContainer = styled.div`
  margin: 8px auto 0;
  gap: 24px;
  display: flex;
  ${mixins.mq.MinL} {
    justify-content: space-between;
    max-width: 1556px;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  > div {
    ${mixins.mq.MinL} {
      max-width: 750px;
      width: 100%;
    }
  }
`

const MovieContainerMod1 = styled(MovieContainer)`
  ${mixins.mq.MaxM} {
    display: block;
  }
`

const MovieContainerInner = styled.div`
  position: relative;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  .vjs-dock-text {
    display: none !important;
  }
`
const MarginAuto = styled.div`
  margin: 0 auto;
`

const TipsZerotoku: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'ポイント全額払いで、スマホ代のお支払いがずーッと0円！'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const imgPath = `${assets}img/tips/zerotoku/`
  const scrollTrigger = useRef<HTMLDivElement>(null)

  interface CtaBottomFixedProps {
    scrollTrigger: React.RefObject<HTMLDivElement>
  }
  const JudgeTrigger = (refTrigger: React.RefObject<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState(false)
    useEffect(() => {
      const fixedBottomBtn = (trigger: HTMLDivElement | null) => {
        let scrollY = window.scrollY
        if (!trigger) {
          return
        }
        const triggerRect = trigger.getBoundingClientRect()
        const triggerY = scrollY + triggerRect.top

        if (scrollY > triggerY) {
          setIsExpanded(true)
        } else {
          setIsExpanded(false)
        }
      }
      window.addEventListener('scroll', () =>
        fixedBottomBtn(refTrigger.current),
      )
    }, [refTrigger])
    return {
      isExpanded,
    }
  }
  const CtaBottomFixed = ({ scrollTrigger }: CtaBottomFixedProps) => {
    const { isExpanded } = JudgeTrigger(scrollTrigger)
    const wrapperElem = useRef<HTMLDivElement>(null)
    const adjustPadding = (wrapperHeight: number, target: HTMLElement) => {
      target.style.paddingBottom = `${wrapperHeight}px`
    }
    useEffect(() => {
      const footerElem = document.getElementById('g-footer')
      if (footerElem && wrapperElem.current) {
        const e = wrapperElem.current
        let wrapperHeight = 100
        setTimeout(() => {
          wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        }, 500)
        window.addEventListener('resize', () => {
          wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        })
      }
    }, [])
    return (
      <Container aria-expanded={isExpanded} ref={wrapperElem}>
        <Cta2colFoot>
          <ButtonPrimaryLarge
            as="a"
            href="/guide/application/?lid-r=tips_zerotoku_guide_application01"
          >
            <span className={Utils['Show-xxo']}>
              新規／乗り換え（MNP）お申し込み
            </span>
            <span className={Utils['Show-oox']}>新規／乗り換え(MNP)</span>
          </ButtonPrimaryLarge>

          <ButtonSecondaryLarge as="a" href="/shop/?l-id=tips_zerotoku_shop01">
            お近くのショップを探す
          </ButtonSecondaryLarge>
        </Cta2colFoot>
        <GuideBtn href="/guide/procedure/?l-id=zerotoku-modal_guide_procedure">
          <span>はじめてでも安心お申し込みガイド</span>
        </GuideBtn>
      </Container>
    )
  }
  const useIntersectionObserver = (
    ref: React.RefObject<HTMLDivElement>,
    onIntersect: () => void,
  ) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            onIntersect()
            observer.disconnect()
          }
        },
        { rootMargin: '-20% 0px' },
      )

      const refElement = ref.current

      if (refElement) {
        observer.observe(refElement)
      }

      return () => {
        if (refElement) {
          observer.unobserve(refElement)
        }
      }
    }, [ref, onIntersect])
  }

  const expandApper01 = useRef<HTMLDivElement>(null)
  const expandApper02 = useRef<HTMLDivElement>(null)
  const fadeIn00 = useRef<HTMLDivElement>(null)
  const fadeIn01 = useRef<HTMLDivElement>(null)
  const fadeIn02 = useRef<HTMLDivElement>(null)
  const fadeIn03 = useRef<HTMLDivElement>(null)
  const fadeIn04 = useRef<HTMLDivElement>(null)
  const fadeIn05 = useRef<HTMLDivElement>(null)
  const fadeIn06 = useRef<HTMLDivElement>(null)
  const fadeIn07 = useRef<HTMLDivElement>(null)
  const fadeIn08 = useRef<HTMLDivElement>(null)

  useIntersectionObserver(expandApper01, () => {
    expandApper01.current?.classList.add('expandApper')
  })
  useIntersectionObserver(expandApper02, () => {
    expandApper02.current?.classList.add('expandApper')
  })

  useIntersectionObserver(fadeIn00, () => {
    fadeIn00.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn01, () => {
    fadeIn01.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn02, () => {
    fadeIn02.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn03, () => {
    fadeIn03.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn04, () => {
    fadeIn04.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn05, () => {
    fadeIn05.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn06, () => {
    fadeIn06.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn07, () => {
    fadeIn07.current?.classList.add('fadeIn')
  })
  useIntersectionObserver(fadeIn08, () => {
    fadeIn08.current?.classList.add('fadeIn')
  })

  const brightcoveVideos: BrightcoveVideoProps[] = useMemo(
    () => [
      {
        className: 'video-js',
        playerId: 'default',
        videoId: '6350541414112',
        dataRatMediaId: 'play-movie_zerotoku',
      },
    ],
    [],
  )
  const [urls, BrightcoveIframe] = useBrightcove(brightcoveVideos)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="楽天モバイルご契約で楽天ポイントがザクザク貯まる！貯まったポイントで全額支払えば、スマホ代のお支払いがずーッと0円！Rakuten最強プランで始めるおトクな生活をご案内します。"
      />
      <SystemWrapperCustom>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <Kv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${imgPath}kv-sp-240228.png`}
                width="100%"
              />
              <img
                src={`${imgPath}kv-pc-240228.png`}
                width="1440"
                height="280"
                alt="ポイントザクザク貯まってスマホ代に使える！ポイント全額支払いでスマホ料金のお支払いがずーッと0円! ※月平均1,388ポイント獲得（2023年10月楽天モバイル利用者対象） 。データ利用量3GBまで980円/月(税込1,078円)の場合 ※実際の獲得ポイントはお買い物実績等により異なります"
              />
            </picture>
          </h1>
        </Kv>
        <BgPink
          className={Utils['Py-32']}
          data-ratid="zerotoku_scroll-01_KV"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <SystemContainer>
            <div>
              <IntroFlow>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec1-01-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}img-sec1-01-pc.png`}
                      width="1440"
                      height="280"
                      alt="日常のいろんなシーンでザクザク貯まる"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec1-02-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}img-sec1-02-pc.png`}
                      width="1440"
                      height="280"
                      alt="貯めたポイントを月々のスマホ代に使える※1ポイント1円としてご利用"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec1-03-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}img-sec1-03-pc.png`}
                      width="1440"
                      height="280"
                      alt="実際に楽天モバイルご契約者は毎月平均1388ポイント獲得!※2023年10月 ポイント全額払いでお支払いずーっと0円※ 3GBまで980円/月(税込1,078円)の場合"
                    />
                  </picture>
                </div>
              </IntroFlow>
              <div>
                <Heading
                  level="3"
                  as="h2"
                  className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
                >
                  今すぐ楽天モバイルで
                  <br className={`${Utils['Show-oox']}`} />
                  スマホ代0円生活をはじめよう!
                </Heading>
                <MovieContainerMod1>
                  <MarginAuto>
                    <MovieContainerInner>
                      <BrightcoveIframe url={urls[0]} />
                    </MovieContainerInner>
                  </MarginAuto>
                </MovieContainerMod1>
                <Cta2col className={Utils['Mt-32']}>
                  <ButtonPrimaryLarge
                    as="a"
                    href="/guide/application/?lid-r=tips_zerotoku_guide_application"
                  >
                    新規／乗り換え（MNP）お申し込み
                  </ButtonPrimaryLarge>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/shop/?l-id=tips_zerotoku_shop"
                  >
                    お近くのショップを探す・来店予約
                  </ButtonSecondaryLarge>
                </Cta2col>
              </div>
            </div>
          </SystemContainer>
        </BgPink>
        <BgYellow
          as="section"
          className={`${Utils['Pt-24']} ${Utils['Pb-32']}`}
        >
          <div ref={scrollTrigger} />
          <SystemContainer>
            <SecTitleFlow>
              <AnimateWraper
                ref={expandApper01}
                data-ratid="zerotoku_scroll-02_save"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}img-sec2-01-sp-240307.png`}
                    width="343"
                    height="170"
                  />
                  <img
                    src={`${imgPath}img-sec2-01-pc-240307.png`}
                    width="451"
                    height="121"
                    alt="いまどれくらいポイント貯まってたかな？"
                  />
                </picture>
              </AnimateWraper>
              <AnimateWraper ref={fadeIn00}>
                <ZerotokuLoginGadget className="zerotoku_gadjet" />
              </AnimateWraper>
              <AnimateWraper ref={fadeIn01}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}img-sec2-02-sp.png`}
                    width="8"
                    height="32"
                  />
                  <img
                    src={`${imgPath}img-sec2-02-pc.png`}
                    width="8"
                    height="32"
                    alt=""
                  />
                </picture>
              </AnimateWraper>
              <AnimateWraper ref={fadeIn02}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}img-sec2-03-sp-240307.png`}
                    width="340"
                    height="133"
                  />
                  <img
                    src={`${imgPath}img-sec2-03-pc-240307.png`}
                    width="632"
                    height="117"
                    alt="楽天モバイルにご契約するともっとポイントがザクザク貯まる！!"
                  />
                </picture>
              </AnimateWraper>
            </SecTitleFlow>
            <Sec2ContentFlow className={Utils['Mt-16']}>
              <AnimateWraper ref={fadeIn03}>
                <Sec2card>
                  <Sec2cardHeadingLv3>
                    <TxtSize size="m">ザクザク貯まる理由</TxtSize>
                    <TxtSize size="l">1</TxtSize>
                  </Sec2cardHeadingLv3>
                  <div>
                    <Sec2Flex01>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-04-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-04-pc.png`}
                            width="313"
                            height="117"
                            alt="楽天市場のお買い物が毎日全員ポイント5倍に！"
                          />
                        </picture>
                      </div>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-05-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-05-pc.png`}
                            width="380"
                            height="156"
                            alt="ご契約前：通常1倍。ご契約後：毎日全員5倍※1"
                          />
                        </picture>
                      </div>
                    </Sec2Flex01>
                    <AccordionList
                      text="詳しく見る"
                      isOpened={false}
                      className={Utils['Mt-24']}
                    >
                      <div className={`${Utils['Align-center']}`}>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-accordion-02-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-accordion-02-pc.png`}
                            width="279"
                            height="184"
                            alt=""
                          />
                        </picture>
                      </div>
                      <TextBeforeImg className={Utils['Mt-24']}>
                        <img
                          src={`${imgPath}img-sec2-accordion-03.png`}
                          width="185"
                          height="80"
                          alt=""
                        />
                        <TxtSize size="m" className={Utils['Weight-bold']}>
                          ちょっとした日用品も楽天市場で購入すれば
                          <br />
                          どんどんポイントが貯まります!
                        </TxtSize>
                      </TextBeforeImg>
                      <SpuContentWrap
                        className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                      >
                        <img
                          src={`${imgPath}img-sec2-accordion-04.png`}
                          width="126"
                          height="76"
                          alt=""
                        />
                        <p className={Utils['Mt-16']}>
                          楽天サービスを
                          <span className={Utils['Weight-bold']}>
                            使えば使うほど
                          </span>
                          楽天市場のお買い物が
                          <br />
                          <span className={Utils['Weight-bold']}>
                            ポイントアップする仕組みのこと
                          </span>
                        </p>
                        <SpuBorderTop>
                          <p>
                            つまり
                            <br />
                            ほかにも楽天サービスを使うと
                            <TxtEmp02>ポイントがザクザク貯まる！</TxtEmp02>
                          </p>
                          <div className={`${Utils['Mt-24']}`}>
                            <picture>
                              <source
                                media={`(max-width: ${theme.max.m})`}
                                srcSet={`${imgPath}img-sec2-accordion-05-sp-20240401.png`}
                                width="100%"
                              />
                              <img
                                src={`${imgPath}img-sec2-accordion-05-pc-20240401.png`}
                                width="604"
                                height="298"
                                alt="通常1倍のところ、楽天モバイルご利用で＋4倍（5倍）、楽天カードご利用で＋2倍（7倍）。ほかにも楽天サービスを使うとポイント最大17倍！"
                              />
                            </picture>
                          </div>
                          <ButtonRegular
                            as="a"
                            href="/campaign/spu/?l-id=tips_zerotoku_campaign_spu"
                            className={Utils['Mt-16']}
                          >
                            SPUの詳細を見る
                          </ButtonRegular>
                        </SpuBorderTop>
                      </SpuContentWrap>
                      <Heading level="3" className={Utils['Mt-24']}>
                        楽天市場のお買い物ポイントをチェック！
                      </Heading>
                      <BannerHover
                        href="/tips/point/?l-id=tips_zerotoku_tips_point"
                        className={Utils['Mt-8']}
                      >
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-accordion-06-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-accordion-06-pc.png`}
                            width="311"
                            height="98"
                            alt=""
                          />
                        </picture>
                      </BannerHover>
                    </AccordionList>
                  </div>
                </Sec2card>
              </AnimateWraper>
              <AnimateWraper ref={fadeIn04}>
                <Sec2card>
                  <Sec2cardHeadingLv3>
                    <TxtSize size="m">ザクザク貯まる理由</TxtSize>
                    <TxtSize size="l">2</TxtSize>
                  </Sec2cardHeadingLv3>
                  <div>
                    <Sec2Flex02>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-06-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-06-pc.png`}
                            width="332"
                            height="64"
                            alt="日常のシーンでポイントが貯まりやすい！"
                          />
                        </picture>
                        <div
                          className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                        >
                          <p className={`${Utils['Mb-8']}`}>
                            楽天サービスはもちろん、
                            <br className={`${Utils['Show-xxo']}`} />
                            街でのお買い物やお食事でも貯まる
                          </p>
                          <LinkIconAfter
                            href="https://pointcard.rakuten.co.jp/partner/"
                            target="_blank"
                          >
                            対象店舗はこちら<IconNewTabLine></IconNewTabLine>
                          </LinkIconAfter>
                        </div>
                      </div>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-07-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-07-pc.png`}
                            width="380"
                            height="156"
                            alt=""
                          />
                        </picture>
                      </div>
                    </Sec2Flex02>
                    <OtherCaseArea>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-12-sp.png`}
                            width="97"
                            height="133"
                          />
                          <img
                            src={`${imgPath}img-sec2-12-pc.png`}
                            width="66"
                            height="90"
                            alt=""
                          />
                        </picture>
                        <div className={`${Utils['Align-llc']}`}>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${imgPath}img-sec2-13-sp.png`}
                              width="178"
                              height="109"
                            />
                            <img
                              src={`${imgPath}img-sec2-13-pc.png`}
                              width="373"
                              height="57"
                              alt="例えば、こんな場面でも 楽天ペイでSuica※にチャージで200円で1ポイント!"
                            />
                          </picture>
                          <p className={`${Utils['Mt-8']}`}>
                            <LinkIconAfter
                              as="a"
                              href="https://pay.rakuten.co.jp/topics/suica/"
                              target="_blank"
                            >
                              詳しくはこちら
                              <IconNewTabLine />
                            </LinkIconAfter>
                          </p>
                        </div>
                      </div>
                      <div className={`${Utils['Align-left']}`}>
                        <TxtCap as="p">
                          ※画像はiOS版で、Android版と異なります。
                        </TxtCap>
                        <TxtCap as="p">
                          ※その他条件は
                          <LinkNormal
                            href="#notes"
                            onClick={e => anchorCallback(e, 'notes')}
                          >
                            こちら
                          </LinkNormal>
                        </TxtCap>
                      </div>
                    </OtherCaseArea>
                  </div>
                </Sec2card>
              </AnimateWraper>
              <AnimateWraper ref={fadeIn05}>
                <Sec2card>
                  <Sec2cardHeadingLv3>
                    <TxtSize size="m">ザクザク貯まる理由</TxtSize>
                    <TxtSize size="l">3</TxtSize>
                  </Sec2cardHeadingLv3>
                  <div>
                    <Sec2Flex03>
                      <div>
                        <div>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${imgPath}img-sec2-09-sp.png`}
                              width="100%"
                            />
                            <img
                              src={`${imgPath}img-sec2-09-pc.png`}
                              width="340"
                              height="72"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className={`${Utils['Mt-16']}`}>
                          <picture>
                            <source
                              media={`(max-width: ${theme.max.m})`}
                              srcSet={`${imgPath}img-sec2-10-sp.png`}
                              width="100%"
                            />
                            <img
                              src={`${imgPath}img-sec2-10-pc.png`}
                              width="391"
                              height="63"
                              alt="100円分 （税別）ご利用で1ポイント"
                            />
                          </picture>
                        </div>
                      </div>
                      <div>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${imgPath}img-sec2-11-sp.png`}
                            width="100%"
                          />
                          <img
                            src={`${imgPath}img-sec2-11-pc.png`}
                            width="380"
                            height="155"
                            alt=""
                          />
                        </picture>
                      </div>
                    </Sec2Flex03>
                  </div>
                </Sec2card>
              </AnimateWraper>
            </Sec2ContentFlow>
          </SystemContainer>
        </BgYellow>
        <BgPink className={Utils['Py-24']}>
          <SystemContainer>
            <SecTitleFlow>
              <AnimateWraper
                ref={expandApper02}
                data-ratid="zerotoku_scroll-03_use"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}img-sec3-01-sp.png`}
                    width="100%"
                  />
                  <img
                    src={`${imgPath}img-sec3-01-pc.png`}
                    width="470"
                    height="121"
                    alt="ポイントで支払う前のスマホ代はいくらだろう?"
                  />
                </picture>
              </AnimateWraper>
              <AnimateWraper ref={fadeIn06}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}img-sec2-02-sp.png`}
                    width="8"
                    height="32"
                  />
                  <img
                    src={`${imgPath}img-sec2-02-pc.png`}
                    width="8"
                    height="32"
                    alt=""
                  />
                </picture>
              </AnimateWraper>
            </SecTitleFlow>
            <AnimateWraper ref={fadeIn07}>
              <Sec3ContentWrap className={Utils['Mt-8']}>
                <div className={`${Utils['Align-center']}`}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec3-04-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}img-sec3-04-pc.png`}
                      width="408"
                      height="82"
                      alt=""
                    />
                  </picture>
                </div>
                <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec3-02-sp.png?240426`}
                      width="100%"
                    />
                    <img
                      src={`${imgPath}img-sec3-02-pc.png?240426`}
                      width="600"
                      height="318"
                      alt="家族割引適用後100円（税別）引きで、20GB超過後どれだけ使っても無制限※3 で2,880円/月(税込3,168円)、3GB超過後20GBまでは1,880 円/月(税込2,068円)  、3GBまでは880円/月(税込968円) 。"
                    />
                  </picture>
                </div>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※3公平なサービス提供または環境により速度低下する場合あり
                  ※通話料等別
                </TxtCap>
                <SimulationBtnArea
                  className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
                >
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgPath}img-sec3-03-sp.png`}
                      width="311"
                      height="252"
                    />
                    <img
                      src={`${imgPath}img-sec3-03-pc.png`}
                      width="600"
                      height="170"
                      alt="乗り換えでどれだけおトクになるか計算してみよう！"
                    />
                  </picture>
                  <ButtonSecondaryCostom
                    as="a"
                    href="/fee/simulation/?l-id=tips_zerotoku_fee_simulation"
                  >
                    料金シミュレーションを試してみる
                  </ButtonSecondaryCostom>
                </SimulationBtnArea>
              </Sec3ContentWrap>
            </AnimateWraper>
            <AnimateWraper ref={fadeIn08}>
              <Heading
                level="3"
                as="h2"
                className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
                data-ratid="zerotoku_scroll-04_CTA"
                data-ratevent="appear"
                data-ratparam="all"
              >
                今すぐ楽天モバイルで
                <br className={`${Utils['Show-oox']}`} />
                スマホ代0円生活をはじめよう!
              </Heading>
              <Cta2col className={Utils['Mt-16']}>
                <ButtonPrimaryLarge
                  as="a"
                  href="/guide/application/?lid-r=tips_zerotoku_guide_application02"
                >
                  新規／乗り換え（MNP）お申し込み
                </ButtonPrimaryLarge>
                <ButtonSecondaryLarge
                  as="a"
                  href="/shop/?l-id=tips_zerotoku_shop02"
                >
                  お近くのショップを探す・来店予約
                </ButtonSecondaryLarge>
              </Cta2col>
            </AnimateWraper>
          </SystemContainer>
        </BgPink>
        <BgWhite as="aside">
          <SystemContainer>
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <BannerHover href="/guide/procedure/?l-id=tips_zerotoku_guide_procedure">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/bnr/bnr-apply-guide-343-116.png`}
                    width="686"
                    height="232"
                  />
                  <img
                    src={`${assets}img/bnr/bnr-apply-guide-1032-78.png`}
                    width="1032"
                    height="78"
                    loading="lazy"
                    alt="お申し込み手続きでお困りごとはありますか？ はじめてでも安心！お申し込みガイド ご利用開始までかんたん4ステップでご案内します"
                  />
                </picture>
              </BannerHover>
            </div>

            <section className={`${Utils['Mt-40']}`}>
              <BnrCampaignRecommend />
            </section>
            <div className={`${Utils['Mt-64']} ${Utils['Mt-sp-40']}`}>
              <CommonSaikyo />
            </div>
            <div className={Utils['Mt-64']}>
              <div />
              <Heading
                level="2"
                id="notes"
                className={Utils['Align-center']}
                data-ratid="zerotoku_scroll-05_notes"
                data-ratevent="appear"
                data-ratparam="all"
              >
                注意事項
              </Heading>
              <TxtEmp01 as="p" className={Utils['Mt-24']}>
                ■「楽天市場のお買い物ポイント5倍」特典について
              </TxtEmp01>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※1
                楽天会員1倍と楽天モバイルSPU+4倍の合計。毎月の獲得上限ポイント数は2,000ポイント。期間限定ポイントでの付与。詳細は
                <LinkNormal href="/campaign/spu/?l-id=tips_zerotoku_campaign_spu">
                  こちら
                </LinkNormal>
                をご確認ください。
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※2 「楽天市場のお買い物ポイントが最大17倍」は
                楽天モバイルSPU+4倍とその他グループサービスご利用で最大13倍の合計値です。達成条件、獲得ポイント上限あり。期間限定ポイントでの付与。
                <LinkNormal href="/campaign/spu/">SPUの詳細</LinkNormal>
                をご確認ください。
              </TxtCap>
              <TxtEmp01 as="p" className={Utils['Mt-24']}>
                ■楽天ポイント利用について
              </TxtEmp01>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※ 1ポイント1円としてご利用いただけます。
                <br />
                ※
                月々のお支払いに口座振替をご指定の場合は、楽天ポイントをご利用いただけません。
                <br />
                ※
                製品（スマートフォンおよびアクセサリ）代金をクレジットカードまたはデビットカードにて一括でお支払いいただく場合、ポイントがご利用いただけます。製品を分割払いでご購入の場合、初回のみポイントがご利用いただけます。分割払いの2回目以降のお支払いにはご利用いただけません。
                <br />※
                一度に利用できるポイント数は1～30,000（ダイヤモンド会員の方は～500,000）ポイントです。
              </TxtCap>
              <TxtEmp01 as="p" className={Utils['Mt-24']}>
                ■「楽天ペイでSuicaチャージ」について
              </TxtEmp01>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※SuicaおよびモバイルSuicaは東日本旅客鉄道株式会社の登録商標です。
                <br />
                ※「Suicaのペンギン」は東日本旅客鉄道株式会社のSuicaのキャラクターです。
              </TxtCap>
            </div>
          </SystemContainer>
        </BgWhite>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapperCustom>
    </>
  )
}

export default TipsZerotoku
