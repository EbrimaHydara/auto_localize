import type { NextPage } from 'next'
import React, { useEffect, useState, useRef, useContext } from 'react'
import styled from 'styled-components'
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
  AccordionList,
  AccordionListEmp,
  AccordionEmpStep,
  AccordionEmpTxt,
} from '@components/atoms/AccordionList'
import { Tab } from '@components/atoms/Tab'
import {
  ButtonRegular,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
  IconPdf,
} from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { RecommendCarousel } from '@components/molecules/RecommendCarousel'
import { useGenerateId } from '@components/utils/useGenerateId'
import { useSearchParams } from 'next/navigation'
import { AnchorList } from '@components/atoms/Anchor'
import { BoxApp } from '@components/atoms/Box'
import { KvCarousel } from '@components/include/common/KvCarousel'
import { OptionsType } from 'embla-carousel-autoplay/components/Options'
import { EmblaPluginType } from 'embla-carousel-react'
import { anchorCallback } from '@components/utils/anchorCallback'

const KvHeading = styled.div`
  background: url(${assets}img/campaign/nba/kv-bg-body-231026.png) center
    top/cover repeat-x;
  text-align: center;
`
const KvCopyTxt = styled.div`
  background: url(${assets}img/campaign/nba/kv-bg-head.png) center top/cover
    repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  ${mixins.mq.MaxM} {
    display: none;
  }
`
const KvSubTxt = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  ${mixins.mq.MaxM} {
    display: none;
  }
`
const Cta2col = styled.div`
  margin: 0 auto;
  max-width: 856px;
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const FeatureCard = styled.ul`
  margin-top: 24px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
const FeatureCardItem = styled.li`
  text-align: center;
  p {
    margin-top: 16px;
    ${mixins.mq.MaxM} {
      margin-top: 8px;
    }
  }
`
const MediaGridCustom = styled(MediaGrid)`
  align-items: center;
`
const AnchorListCustom = styled(AnchorList)`
  gap: 32px;
  margin: auto;
  li {
    text-wrap: nowrap;
    max-width: fit-content;
  }
  ${mixins.mq.MaxS} {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
`
const HowtoCard = styled.ul`
  margin-top: 32px;
  display: grid;
  gap: 72px;
  grid-template-columns: 1fr 1fr 1fr;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
const HowtoCardItem = styled.li`
  text-align: center;
  ${mixins.mq.MaxM} {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -20px;
      width: 34px;
      height: 14px;
      background-color: ${props => props.theme.colors.pink20};
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  picture {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -44px;
      width: 18px;
      height: 34px;
      background-color: ${props => props.theme.colors.pink20};
      clip-path: polygon(0 0, 100% 50%, 0 100%);
      ${mixins.mq.MaxM} {
        display: none;
      }
    }
  }
  &:last-child {
    picture {
      &::after {
        display: none;
      }
    }
  }
  p {
    margin-top: 16px;
    ${mixins.mq.MaxM} {
      margin-top: 8px;
    }
  }
`
const TxtCapEmp01 = styled(TxtCap)`
  color: ${props => props.theme.colors.primary};
`
const NbaAppWrap = styled.div`
  margin-top: 48px;
  padding: 8px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding-bottom: 16px;
  }
`
const NbaAppItemWrap = styled.div`
  display: flex;
  gap: 58px;
  align-items: center;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
  }
`
const NbaAppItem = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  text-align: center;
  ${mixins.mq.MaxM} {
    margin-top: 0;
  }
  > div {
    width: 100%;
  }
  .googlebtn {
    padding-top: 4px;
  }
`
const MailtoLink = styled(LinkNormal)`
  cursor: pointer;
`
const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);
  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`

const UserVoiceLinkWrap = styled.div`
  max-width: 850px;
  margin: 0 auto;

  ${mixins.mq.MaxM} {
    max-width: 100%;
  }
  > h3 {
    font-size: 20px;
  }
`

const UserVoiceLinkItem = styled.div`
  border: 1px solid #e0e0e0;
  padding: 32px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 48px;

  ${mixins.mq.MaxM} {
    display: block;
  }
  > img {
    ${mixins.mq.MaxM} {
      display: block;
      margin: 0 auto 24px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
`
const CustomBoxApp = styled(BoxApp)`
  width: 100%;
  justify-content: center;
  margin-top: 48px;
  padding: 48px 24px 24px 24px;
  ${mixins.mq.MaxM} {
    margin-top: 0px;
    padding: 48px 0 0 0;
    background: transparent;
  }
`
const MangaTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const CustomTxtSize = styled(TxtSize)`
  ${mixins.mq.MinS} {
    display: flex;
  }
  flex-wrap: wrap;
  justify-content: center;
  display: block;
  width: fit-content;
  text-align: center;
  div {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  ${mixins.mq.MaxS} {
    padding: 0 16px;
  }
`
const CustomKvCarousel = styled(KvCarousel)`
  .slideItem {
    width: 480px;
    min-width: 480px;
    max-height: unset;
    max-height: unset;
    margin: 0 8px;
    ${mixins.mq.MaxM} {
      min-width: unset;
      min-width: 100%;
      padding: 0 16px;
    }
    ${mixins.mq.MinL} {
      width: 480px;
      min-width: 480px;
      max-height: unset;
    }
    &.current:hover img {
      opacity: 1;
    }
    &:not(.current) img,
    :not(.current):hover img {
      opacity: 0.5;
    }
    &::after {
      display: none;
    }
  }
`
const CarouselContainer = styled.div`
  width: 100%;
  justify-content: center;
  ${mixins.mq.MinL} {
    padding: 0px calc((100% - 480px) / 2);
  }
`
const CustomTxtCap = styled(TxtCap).attrs({ as: 'ul' })`
  margin-inline-end: auto;

  ${mixins.mq.MinL} {
    margin-left: calc((100% - 480px) / 2);
  }
  ${mixins.mq.MaxM} {
    margin-left: 16px;
  }
`
const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.monotone30};
  opacity: 0.75;
  position: absolute;
  z-index: 1;
`

const CampaignNba: NextPage = () => {
  const theme = useContext(ThemeContext)
  const anchorList = [
    {
      id: 'nba-pass-about',
      ratid: 'campaign_nba_anchor_about',
      text: 'NBA LEAGUE PASS for 楽天モバイルとは',
    },
    {
      id: 'use-steps',
      ratid: 'campaign_nba_anchor_flow',
      text: 'ご利用の流れ',
    },
    {
      id: 'about',
      ratid: 'campaign_nba_anchor_saikyo-plan',
      text: '楽天モバイルのご紹介',
    },
  ]
  // PITARI ABテストで使用
  const [showLoader, setShowLoader] = useState(true)
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  })
  useEffect(() => {
    const showBody = () => {
      setShowLoader(false)
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }
    const handleScriptEvent = () => {
      const phoenixScript = document.createElement('script')
      phoenixScript.src = 'https://r.r10s.jp/com/ap/target/phoenix-3.2.2.min.js'
      document.head.appendChild(phoenixScript)
      phoenixScript.onload = showBody
    }
    const conditionScript = document.createElement('script')
    conditionScript.src =
      'https://www.rakuten.co.jp/com/advance/mobile/mnoprj_nba/responsive/condition.js'
    conditionScript.onload = handleScriptEvent
    conditionScript.onerror = handleScriptEvent
    document.head.appendChild(conditionScript)

    const $nbaBtnElems = RAT.$Selector('.nba-watch-btn,.carousel-indicators>*')
    $nbaBtnElems.off('click')
    RAT.bindClick($nbaBtnElems)
  }, [showLoader])
  const pagetitle =
    '楽天モバイルご契約者様限定！ NBA LEAGUE PASS for 楽天モバイルが無料！'
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

  const scrollTrigger = useRef<HTMLDivElement>(null)

  const featureItems = [
    {
      img: 'img-about-01-240422',
      txt: '日本人選手が活躍するチームを始め、開幕からNBAファイナルまで全試合を配信！',
    },
    {
      img: 'img-about-02',
      txt: '注⽬試合は⽇本語解説・実況付きでNBAビギナーも安⼼！',
    },
    {
      img: 'img-about-03',
      txt: 'スマートフォンやタブレットはもちろん、テレビやゲーム機でも試合が観られる︕',
    },
    {
      img: 'img-about-04',
      txt: '感動を共有！ライブチャットで盛り上がろう！',
    },
    {
      img: 'img-about-05',
      txt: '楽天回線を使っていつでもどこでも楽しめる！',
    },
    {
      img: 'img-about-06',
      txt: '過去の名勝負やオリジナル番組など最新試合以外のコンテンツも充実！',
    },
  ]

  const howtoItems = [
    {
      img: 'img-howto-01',
    },
    {
      img: 'img-howto-02',
      txt: 'NBA Rakutenのメニューから日程・結果をクリック',
    },
    {
      img: 'img-howto-03',
      txt: '対戦カード内にある「LIVE」または「見逃し」をクリック後、再生ボタンを押すだけ！',
    },
  ]

  const customCarouselConfig = {
    options: { loop: false } as Partial<OptionsType>,
    plugins: [] as EmblaPluginType[],
  }

  type BnrRecommendProps = {
    lazy?: boolean
  }

  const BnrRecommend = ({ lazy = true }: BnrRecommendProps) => {
    type BnrList = Array<{
      id: string
      url: string
      img: string
      alt: string
      target?: string
    }>

    const { generateId } = useGenerateId()
    const recommendBnrs: BnrList = [
      {
        id: generateId(),
        url: 'https://tv.rakuten.co.jp/static/pacificleague/lp/mobile_cpn/?scid=wi_rmb_tv_mobile_cpn',
        img: `${assets}img/campaign/nba/bnr-tv.png`,
        alt: 'Rakuten Tv パ・リーグSpecial 楽天モバイルご契約者様限定 追加料金０円でパ・リーグ主催の公式戦が全て見放題！',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://magazine.rakuten.co.jp/cpn/mno/?scid=wi_rmb_magazine_cpn-mno',
        img: `${assets}img/campaign/nba/bnr-magazine.png`,
        alt: 'Rakuten Magazine 楽天モバイルご契約者様限定 初回90日間無料＆無料期間後も30%OFF',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://ac.ebis.ne.jp/tr_set.php?argument=ZMhPE4GP&ai=rgp_mno_006972',
        img: `${assets}img/campaign/nba/bnr-music-240423.png`,
        alt: 'Rakuten Music 楽天モバイルご契約者様ならずっと音楽が無料！30日ごと5時間無料※一部対象外曲がございます',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://tv.rakuten.co.jp/static/mobile_cpn/lp/prairie-kids/?scid=wi_rmb_tv_prairie-kids',
        img: `${assets}img/campaign/nba/bnr-prairie-kids.png`,
        alt: 'Rakuten Tv 楽天モバイルご契約者様対象 PrairieKids',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://tv.rakuten.co.jp/static/mobile_cpn/lp/asiadrama-premium-channel/?scid=wi_rmb_tv_asiadrama-premium-channel',
        img: `${assets}img/campaign/nba/bnr-tv-asia.png`,
        alt: 'Rakuten Tv 楽天モバイルご契約者様対象 アジアドラマ・プレミアムチャンネル',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://tv.rakuten.co.jp/static/mobile_cpn/lp/seiyuchannel/?scid=wi_rmb_tv_seiyuchannel',
        img: `${assets}img/campaign/nba/bnr-tv-voice.png`,
        alt: 'Rakuten Tv 楽天モバイルご契約者様対象 声優チャンネル',
        target: '_blank',
      },
      {
        id: generateId(),
        url: 'https://tv.rakuten.co.jp/static/mobile_cpn/lp/vcinema_monthlypack/?scid=wi_rmb_tv_vcinema_monthlypack',
        img: `${assets}img/campaign/nba/bnr-tv-v.png`,
        alt: 'Rakuten Tv 楽天モバイルご契約者様対象 Vシネママンスリーパック',
        target: '_blank',
      },
      {
        id: generateId(),
        url: '/campaign/youtubepremium/?l-id=campaign_nba_campaign_youtubepremium',
        img: `${assets}img/campaign/nba/bnr-youtube.png`,
        alt: 'Rakuten Mobile 楽天モバイルご契約者様対象　YouTube Premium 初回3カ月無料',
        target: '',
      },
    ]
    return (
      <div>
        <div className={Utils['Mt-24']}>
          <RecommendCarousel bannerList={recommendBnrs} lazy={lazy} />
        </div>
        <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
          <ButtonRegular
            as="a"
            href="/campaign/digital-contents/?l-id=campaign_nba_campaign_digital-contents"
          >
            楽天モバイルの特集ページを見る
          </ButtonRegular>
        </div>
      </div>
    )
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

  interface CtaBottomFixedProps {
    scrollTrigger: React.RefObject<HTMLDivElement>
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
        <Cta2col>
          <CvButtonPrimaryLarge lidR="campaign_nba_f_guide_application_03" />
          <CustomNbaBtn ratId="campaign_nba_application_03" />
        </Cta2col>
      </Container>
    )
  }

  const mailLinkHandler = (appType: 'ios' | 'google') => {
    const appInfo = {
      ios: {
        subject: 'NBA Rakuten アプリをダウンロード(App Store)',
        text: 'App StoreからアプリをダウンロードしてNBAライフをお楽しみください！',
        urlLink: 'https://r10.to/nba_ios',
      },
      google: {
        subject: 'NBA Rakuten アプリをダウンロード(Google Play Store)',
        text: 'Google Play StoreからアプリをダウンロードしてNBAライフをお楽しみください！',
        urlLink: 'https://r10.to/nba_android',
      },
    }

    const { subject, text, urlLink } = appInfo[appType] || {}

    if (subject && text && urlLink) {
      const body = `${text}%0D%0A${urlLink}`
      window.location.href = `mailto:?subject=${subject}&body=${body}`
    }
  }

  const CustomNbaBtn = (props: { ratId: string }) => {
    const [newParam, setNewParam] = useState('')
    const [baseUrl, setBaseUrl] = useState('https://nba.rakuten.co.jp')
    const searchParams = useSearchParams()
    const scid = searchParams.get('scid') || ''
    useEffect(() => {
      interface Obj {
        [prop: string]: string
      }
      const pramData: Obj = {
        wi_nba_rmb_mkdiv_nbafree_gsa_brand:
          '?argument=SDZXcDYA&dmai=a6526223c6684c',
        wi_nba_rmb_mkdiv_nbafree_gsa_cnt:
          '?argument=SDZXcDYA&dmai=a6526223ca9038',
        wi_nba_rmb_mkdiv_nbafree_gsa_team:
          '?argument=SDZXcDYA&dmai=a6526223cb3f15',
        wi_nba_rmb_mkdiv_nbafree_gsa_nbaplayer:
          '?argument=SDZXcDYA&dmai=a6526223cbed0b',
        wi_nba_rmb_mkdiv_nbafree_ysa_brand:
          '?argument=SDZXcDYA&dmai=a6526223cc9c0b',
        wi_nba_rmb_mkdiv_nbafree_ysa_cnt:
          '?argument=SDZXcDYA&dmai=a6526223cd4e0a',
        wi_nba_rmb_mkdiv_nbafree_ysa_team:
          '?argument=SDZXcDYA&dmai=a6526223ce291b',
        wi_nba_rmb_mkdiv_nbafree_ysa_nbaplayer:
          '?argument=SDZXcDYA&dmai=a6526223cedc61',
        wi_nba_rmb_mkdiv_nbafree_gdn_rtg:
          '?argument=SDZXcDYA&dmai=a6526223d0488a',
        wi_nba_rmb_mkdiv_nbafree_gdn_aw_cia:
          '?argument=SDZXcDYA&dmai=a6526223d13451',
        wi_nba_rmb_mkdiv_nbafree_find_rtg:
          '?argument=SDZXcDYA&dmai=a6526223d1fe0a',
        wi_nba_rmb_mkdiv_nbafree_find_cia_aw:
          '?argument=SDZXcDYA&dmai=a6526223d2b6d7',
        wi_nba_rmb_mkdiv_nbafree_find_ciaplayer:
          '?argument=SDZXcDYA&dmai=a6526223d365b5',
        'wi_nba_rmb_mkdiv_nbafree_p-max':
          '?argument=SDZXcDYA&dmai=a6526223d414d4',
        wi_nba_rmb_mkdiv_nbafree_trv_aw_cia:
          '?argument=SDZXcDYA&dmai=a6526223d4c3cc',
        wi_nba_rmb_mkdiv_nbafree_trv_aw_ciaplayer:
          '?argument=SDZXcDYA&dmai=a6526223d5780e',
        wi_nba_rmb_mkdiv_nbafree_yda_st:
          '?argument=SDZXcDYA&dmai=a6526223d627cd',
        wi_nba_rmb_mkdiv_nbafree_yda_stplayer:
          '?argument=SDZXcDYA&dmai=a6526223d6d6c0',
        wi_nba_rmb_mkdiv_nbafree_yda_rtg:
          '?argument=SDZXcDYA&dmai=a6526223d7866e',
        wi_nba_rmb_mkdiv_nbafree_yda_bprtg:
          '?argument=SDZXcDYA&dmai=a6526223d835c3',
        wi_nba_rmb_mkdiv_nbafree_fb_int:
          '?argument=SDZXcDYA&dmai=a6526223d8e62b',
        wi_nba_rmb_mkdiv_nbafree_line_rtg:
          '?argument=SDZXcDYA&dmai=a6526223d99921',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo:
          '?argument=SDZXcDYA&dmai=a6526223da4c9f',
        wi_nba_rmb_mkdiv_nbafree_news_1:
          '?argument=SDZXcDYA&dmai=a65278db69ed04',
        wi_nba_rmb_mkdiv_nbafree_news_2:
          '?argument=SDZXcDYA&dmai=a65278db713581',
        wi_nba_rmb_mkdiv_nbafree_news_3:
          '?argument=SDZXcDYA&dmai=a65278db71e11d',
        wi_nba_rmb_mkdiv_nbafree_news_4:
          '?argument=SDZXcDYA&dmai=a6536298c319e2',
        wi_nba_rmb_mkdiv_nbafree_news_5:
          '?argument=SDZXcDYA&dmai=a6536298c8e932',
        wi_nba_rmb_mkdiv_nbafree_news_6:
          '?argument=SDZXcDYA&dmai=a6536298ca73da',
        wi_nba_rmb_mkdiv_nbafree_news_7:
          '?argument=SDZXcDYA&dmai=a6536298cbc0fe',
        wi_nba_rmb_mkdiv_nbafree_yda_spbprtg:
          '?argument=SDZXcDYA&dmai=a653107d4c5059',
        wi_nba_rmb_mkdiv_nbafree_fb_intteam:
          '?argument=SDZXcDYA&dmai=a652e33dfd3d05',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_1:
          '?argument=SDZXcDYA&dmai=a65372f6b787d0',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_2:
          '?argument=SDZXcDYA&dmai=a65372f6bc5ae1',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_3:
          '?argument=SDZXcDYA&dmai=a65372f6bcf949',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_4:
          '?argument=SDZXcDYA&dmai=a65372f6bd9bf9',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_5:
          '?argument=SDZXcDYA&dmai=a65372f6be3a80',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_6:
          '?argument=SDZXcDYA&dmai=a65372f6bed7b4',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_7:
          '?argument=SDZXcDYA&dmai=a65372f6c033f8',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_8:
          '?argument=SDZXcDYA&dmai=a65372f6c0d378',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_9:
          '?argument=SDZXcDYA&dmai=a65372f6c17115',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_10:
          '?argument=SDZXcDYA&dmai=a65372f6c20f94',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_11:
          '?argument=SDZXcDYA&dmai=a65372f6c2b8c7',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_12:
          '?argument=SDZXcDYA&dmai=a65372f6c358aa',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_13:
          '?argument=SDZXcDYA&dmai=a65372f6c407f9',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_14:
          '?argument=SDZXcDYA&dmai=a65372f6c4a8e8',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_15:
          '?argument=SDZXcDYA&dmai=a65372f6c54a4d',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_16:
          '?argument=SDZXcDYA&dmai=a65372f6c5e9c3',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_17:
          '?argument=SDZXcDYA&dmai=a65372f6c6887f',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_18:
          '?argument=SDZXcDYA&dmai=a65372f6c72b5e',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_19:
          '?argument=SDZXcDYA&dmai=a65372f6c7d2fe',
        wi_nba_rmb_mkdiv_nbafree_jnt_seo_20:
          '?argument=SDZXcDYA&dmai=a65372f6c877ba',
        wi_nba_rmb_mkdiv_nbafree_youtube_organic:
          '?argument=SDZXcDYA&dmai=a65278db72a8b3',
        wi_nba_rmb_mkdiv_nbafree_mailmagazine:
          '?argument=SDZXcDYA&dmai=a65278db7352a5',
        wi_nba_rmb_mkdiv_nbafree_twt_organic:
          '?argument=SDZXcDYA&dmai=a6530b91f4c028',
        wi_nba_rmb_mkdiv_nbafree_fb_organic:
          '?argument=SDZXcDYA&dmai=a6530b96b01290',
        wi_nba_rmb_mkdiv_nbafree_line_organic:
          '?argument=SDZXcDYA&dmai=a6530b9cd4f67a',
        wi_nba_rmb_mkdiv_nbafree_ig_organic:
          '?argument=SDZXcDYA&dmai=a6530ba5b589e9',
        wi_nba_rmb_mkdiv_nbafree_tiktok_organic:
          '?argument=SDZXcDYA&dmai=a6530bfcbada66',
        wi_nba_rmb_mkdiv_nbafree_gsa_mobile:
          '?argument=SDZXcDYA&dmai=a6556dae6e31b5',
        wi_nba_rmb_mkdiv_nbafree_gsa_mobilecompetitor:
          '?argument=SDZXcDYA&dmai=a6556dae734499',
        wi_nba_rmb_mkdiv_nbafree_find_mobile:
          '?argument=SDZXcDYA&dmai=a6556dae740297',
        wi_nba_rmb_mkdiv_nbafree_find_mobilecompetitor:
          '?argument=SDZXcDYA&dmai=a6556dae74a7cf',
        wi_nba_rmb_mkdiv_nbafree_yda_mobile:
          '?argument=SDZXcDYA&dmai=a6556dae7569aa',
        wi_nba_rmb_mkdiv_nbafree_yda_mobilecompetitor:
          '?argument=SDZXcDYA&dmai=a6556dae76364c',
        wi_nba_rmb_mkdiv_nbafree_LINE_rtgimageclick:
          '?argument=SDZXcDYA&dmai=a6556dae76d642',
        'wi_nba_rmb_mkdiv_nbafree_i-mobile_1':
          '?argument=SDZXcDYA&dmai=a6556dae77a4bb',
        'wi_nba_rmb_mkdiv_nbafree_i-mobile_2':
          '?argument=SDZXcDYA&dmai=a6556dae784383',
        'wi_nba_rmb_mkdiv_nbafree_i-mobile_3':
          '?argument=SDZXcDYA&dmai=a6556dae78e2b2',
        'wi_nba_rmb_mkdiv_nbafree_i-mobile_4':
          '?argument=SDZXcDYA&dmai=a6556dae798502',
        'wi_nba_rmb_mkdiv_nbafree_i-mobile_5':
          '?argument=SDZXcDYA&dmai=a6556dae7a2730',
        wi_nba_rmb_mkdiv_nbafree_unicorn_1:
          '?argument=SDZXcDYA&dmai=a6556dae7ac992',
        wi_nba_rmb_mkdiv_nbafree_unicorn_2:
          '?argument=SDZXcDYA&dmai=a6556dae7b6af5',
        wi_nba_rmb_mkdiv_nbafree_unicorn_3:
          '?argument=SDZXcDYA&dmai=a6556dae7c0ab7',
      }
      if (pramData[scid] !== undefined) {
        setNewParam(pramData[scid])
        setBaseUrl('https://nba.rakuten.co.jp/package')
      }
    }, [scid])
    return (
      <ButtonSecondaryLarge
        href={`${baseUrl}${newParam}`}
        as="a"
        target="_blank"
        data-ratid={props.ratId}
        data-ratevent="click"
        data-ratparam="all"
        className="nba-watch-btn"
      >
        NBA Rakutenを見る
        <IconNewTabLine className="icon-end" />
      </ButtonSecondaryLarge>
    )
  }

  interface PopAskProps {
    config?: string
    className?: string
  }

  const configTxt = `
  window.rexSurveyConfig = {"surveyId":"39912","cId":{"name":"answers[39912_271974]","value":""},"embedded":true,"url":{"name":"answers[39912_271975]"},"triggerIdName":"trigger","expirationPeriod":"30","enableDisplaySuppressionPerPage":true,"enableFormAction":true,"permission":{"inquiryTxt":"キャンペーンをより分かりやすくするためにアンケートにご協力ください (選択式1問) ","yesBtnTxt":"協力する","noBtnTxt":"今は協力しない","available":true},"thanks":{"txt0":"ご協力ありがとうございました","txt1":"いただいた情報は、サービス改善のために使用させていただきます。"},"nps":{"available":true,"question":{"label":"このページの総合的な「わかりやすさ」について、どのように感じましたか？"},"options":[{"name":"answers[39912_271976]","value":"754219"},{"name":"answers[39912_271976]","value":"754220"},{"name":"answers[39912_271976]","value":"754221"},{"name":"answers[39912_271976]","value":"754222"},{"name":"answers[39912_271976]","value":"754223"}],"txt0":"わかりにくい","txt1":"わかりやすい","checked":4},"inquiry":{"checkList":{"available":true,"question":"あなたがこのページについて思ったことで、当てはまるものを教えてください（複数可）","options":[{"name":"answers[39912_271977][]","value":"754224","label":"キャンペーン特典が魅力的だ’"},{"name":"answers[39912_271977][]","value":"754225","label":"キャンペーンの達成条件が分かりやすい"},{"name":"answers[39912_271977][]","value":"754226","label":"キャンペーンのWebサイトが分かりにくい"},{"name":"answers[39912_271977][]","value":"754227","label":"キャンペーンの達成条件が分かりにくい"},{"name":"answers[39912_271977][]","value":"754228","label":"キャンペーン特典が魅力的でない"},{"name":"answers[39912_271977][]","value":"754229","label":"特になし"},{"name":"","value":"","label":""}]},"freeInput":{"available":true,"name":"answers[39912_271978]","title":"ご回答いただいた内容の理由や、このページについてのご意見・ご要望がございましたら、ご自由にお書きください【1000文字】"},"sendBtnTxt":"送信する","footerNote":{"available":true,"text":"お客様よりご提供いただく情報はサービス向上のためご利用させていただきます。","link":"https://privacy.rakuten.co.jp/","htmlText":""}},"inquiryNegative":{"checkList":{"available":false,"options":[{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""}]}},"ua":{"name":"answers[39912_271979]"},"href":{"name":"answers[39912_271980]"},"cookie":{"available":false},"assetPaths":{"closeButton":"","checkIcon":""}}
  `

  const PopAsk = (props: PopAskProps) => {
    const { config, className } = props
    useEffect(() => {
      const scriptLoad1 = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = false
        script.id = 'rex-survey-config'
        const configTxt = config
          ? config
          : `
        `
        const scriptFunction = document.createTextNode(configTxt)
        const element = document.getElementById(script.id)
        if (!element) {
          script.appendChild(scriptFunction)
          document.body.appendChild(script)
        }
      }

      const scriptLoad2 = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = false
        script.id = 'rex-survey-main'
        script.src =
          'https://cdn.rex.contents.rakuten.co.jp/rex-ips/1.5.0/js/main.js'
        const element = document.getElementById(script.id)
        if (!element) {
          document.body.appendChild(script)
        }
      }
      scriptLoad1()
      scriptLoad2()
    }, [config])
    return (
      <SystemContainer
        className={
          className ? className : `${Utils['Mt-64']} ${Utils['Mb-40']}`
        }
      >
        {/* ReX UX Survey: Mounting point for embedded components */}
        <div id="rexSurveyEmbedded" className="rexSurveyNamespace"></div>
        {/* ReX UX Survey: Config */}
        <div
          id="js-npsRadio-0"
          data-ratid="npsRadio_1"
          data-ratevent="click"
          data-ratparam="all"
        ></div>
        <div
          id="js-npsRadio-1"
          data-ratid="npsRadio_2"
          data-ratevent="click"
          data-ratparam="all"
        ></div>
        <div
          id="js-npsRadio-2"
          data-ratid="npsRadio_3"
          data-ratevent="click"
          data-ratparam="all"
        ></div>
        <div
          id="js-npsRadio-3"
          data-ratid="npsRadio_4"
          data-ratevent="click"
          data-ratparam="all"
        ></div>
        <div
          id="js-npsRadio-4"
          data-ratid="npsRadio_5"
          data-ratevent="click"
          data-ratparam="all"
        ></div>
      </SystemContainer>
    )
  }

  const InsertCvTag = () => {
    const scriptLoadMicrosoftTrackingTag = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      const scriptFunction = document.createTextNode(`
      (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187092507", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
      `)
      script.appendChild(scriptFunction)
      document.body.appendChild(script)
    }

    const scriptLoadMicrosoftConversionTag = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      const scriptFunction = document.createTextNode(`
      function uet_report_conversion() {window.uetq = window.uetq || [];window.uetq.push('event', 'purchase', {});}
      `)
      script.appendChild(scriptFunction)
      document.body.appendChild(script)
    }

    const scriptLoadIMobileReTargetingTag = () => {
      const fragmentElement = document.createDocumentFragment()

      // 計測データ作成
      const measurementScript = document.createElement('script')
      measurementScript.type = 'text/javascript'
      const measurementScriptFunction = document.createTextNode(`
      (function (IMobile) {
        (function (adv) {
          adv.push({
            sid: "34002",
            name: "top=1",
          })
        })(IMobile.adv || (IMobile.adv = []));
      })(window.IMobile || (window.IMobile = {}));
      `)
      measurementScript.appendChild(measurementScriptFunction)
      fragmentElement.appendChild(measurementScript)

      // 計測データ集計用script読み込み
      const excuteScript = document.createElement('script')
      excuteScript.type = 'text/javascript'
      excuteScript.async = true
      excuteScript.src = 'https://spcnv.i-mobile.co.jp/script/v2/adv.js'
      fragmentElement.appendChild(excuteScript)

      document.body.appendChild(fragmentElement)
    }

    useEffect(() => {
      scriptLoadMicrosoftTrackingTag()
      scriptLoadMicrosoftConversionTag()
      scriptLoadIMobileReTargetingTag()
    }, [])
  }
  InsertCvTag()

  type CvButtonPrimaryLargeProps = {
    lidR: string
  }
  const CvButtonPrimaryLarge = ({ lidR }: CvButtonPrimaryLargeProps) => {
    const onClickHandler = (evt: React.MouseEvent) => {
      evt.preventDefault()

      // Microsoftタグのイベントスニペットを実行
      ;(window as Window).uet_report_conversion()

      window.location.href = `/campaign/nba/application/?lid-r=${lidR}`
    }

    return (
      <ButtonPrimaryLarge
        as="a"
        href={`/guide/application/?lid-r=${lidR}`}
        onClick={onClickHandler}
      >
        楽天モバイルのお申し込み
      </ButtonPrimaryLarge>
    )
  }

  return (
    <>
      {showLoader && (
        <LoaderContainer>
          <Overlay />
          <img src={`${assets}img/common/ajax-loader.gif`} alt="loading"></img>
        </LoaderContainer>
      )}
      <CustomHead
        pagetitle={pagetitle}
        description="楽天モバイルご契約者様ならNBAが全試合が無料で観られる。日本人選手も活躍する世界最高峰のバスケリーグを楽しもう！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: showLoader ? 'block' : 'none',
          }}
        ></div>
        <div>
          <KvHeading>
            <KvCopyTxt>
              <img
                src={`${assets}img/campaign/nba/kv-txt-01.png`}
                width="777"
                height="49"
                alt=""
              />
            </KvCopyTxt>
            <KvSubTxt>
              <img
                src={`${assets}img/campaign/nba/kv-txt-02.png`}
                width="365"
                height="27"
                alt=""
              />
            </KvSubTxt>
            <h1>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/nba/kv-sp-231228.png`}
                  width="100%"
                />
                <img
                  src={`${assets}img/campaign/nba/kv-pc-231228.png`}
                  width="1429"
                  height="300"
                  alt="楽天モバイルならエンタメコンテンツがおトクに楽しめる！楽天モバイルご契約者様限定 NBAの全試合が無料！！で観られる！"
                />
              </picture>
            </h1>
          </KvHeading>

          <SystemContainer>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※「楽天モバイルご契約者様」とは、「Rakuten最強プラン・Rakuten最強プラン（データタイプ）」のご契約者様です。
              <br />
              <TxtEmp02>
                ※本サービスのご利用には、「Rakuten最強プラン」開通から3日から4日程度お待ちいただく場合がございます。
              </TxtEmp02>
              <br />
              ※LEAGUE PASSの月額料金が無料です。NBA
              Rakuten上の全試合・全動画が視聴可能です。
              <br />
              ※本サービスは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください。
            </TxtCap>

            <Cta2col className={Utils['Mt-16']}>
              <CvButtonPrimaryLarge lidR="campaign_nba_f_guide_application_01" />
              <CustomNbaBtn ratId="campaign_nba_application_01" />
            </Cta2col>
            <AnchorListCustom
              className={`${Utils['Mt-32']} ${Utils['Mt-pc-40']}`}
            >
              {anchorList.map((a, i) => {
                return (
                  <li key={i}>
                    <LinkIconBefore
                      href={`#${a.id}`}
                      key={i}
                      className="anchor-link"
                      data-ratid={a.ratid}
                      data-ratevent="click"
                      data-ratparam="all"
                      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                        anchorCallback(e, a.id)
                      }
                    >
                      <IconArrowDown />
                      {a.text}
                    </LinkIconBefore>
                  </li>
                )
              })}
            </AnchorListCustom>
          </SystemContainer>
          <CustomBoxApp>
            <MangaTitleContainer>
              <CustomTxtSize
                as="div"
                size="ll"
                className={Utils['Weight-bold']}
                data-ratid="campaign_nba_scroll-01_comic"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span>マンガでわかる！</span>
                <div>
                  <span>楽天モバイルでNBAを</span>
                  <span>無料で観るまで</span>
                </div>
              </CustomTxtSize>
            </MangaTitleContainer>

            <CarouselContainer>
              <CustomKvCarousel
                className={Utils['Mt-32']}
                prevRatId="campaign_nba_carousel_left"
                nextRatId="campaign_nba_carousel_right"
                indicatorRatIdPrefix="campaign_nba_"
                noUrl={true}
                customCarouselConfig={customCarouselConfig}
                bnrs={[
                  {
                    alt: '',
                    pcImg: `${assets}img/campaign/nba/img-manga-1-pc.png`,
                    spImg: `${assets}img/campaign/nba/img-manga-1-sp.png`,
                  },
                  {
                    alt: '',
                    pcImg: `${assets}img/campaign/nba/img-manga-2-pc.png`,
                    spImg: `${assets}img/campaign/nba/img-manga-2-sp.png`,
                  },
                  {
                    alt: '',
                    pcImg: `${assets}img/campaign/nba/img-manga-3-pc.png`,
                    spImg: `${assets}img/campaign/nba/img-manga-3-sp.png`,
                  },
                ]}
              />
            </CarouselContainer>

            <CustomTxtCap className={Utils['Mt-8']}>
              <li>※本人確認審査にお時間がかかる場合があります。</li>
              <li>
                ※1 詳細は
                <LinkNormal href="https://network.mobile.rakuten.co.jp/guide/procedure/?l-id=campaign_nba_guide_procedure">
                  こちら
                </LinkNormal>
              </li>
            </CustomTxtCap>
          </CustomBoxApp>
          <SystemContainer>
            <div ref={scrollTrigger} />
            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-02_about"
              ratEvent="appear"
              id="nba-pass-about"
            >
              NBA LEAGUE PASS for 楽天モバイルとは
            </Heading>
            <FeatureCard>
              {featureItems.map((featureItem, index) => {
                return (
                  <FeatureCardItem key={index}>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/nba/${featureItem.img}-sp.png`}
                        width="686"
                        height="436"
                      />
                      <img
                        src={`${assets}img/campaign/nba/${featureItem.img}-pc.png`}
                        width="328"
                        height="209"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                    <p>{featureItem.txt}</p>
                  </FeatureCardItem>
                )
              })}
            </FeatureCard>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-03_flow"
              ratEvent="appear"
              id="use-steps"
            >
              NBA LEAGUE PASS for 楽天モバイルご利用の流れ
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={'新規お申し込みの方'}
              id1="tab1"
              id2="tab2"
              ratId1="campaign_nba_flow_tab_pre-member"
              ratId2="campaign_nba_flow_tab_member"
              content1={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <AccordionEmpStep>STEP1</AccordionEmpStep>
                        <AccordionEmpTxt>
                          楽天モバイルのお申し込み
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                    ratid="campaign_nba_flow_step1"
                  >
                    <MediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/nba/img-flow-01.png`}
                          width="280"
                          height="180"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <Heading level="4">お申し込みに必要なもの</Heading>
                        <UlOnly className={Utils['Mt-16']}>
                          <li>
                            <LinkIconAfter href="/guide/verify/">
                              本人確認書類
                              <IconChevronRight />
                            </LinkIconAfter>
                          </li>
                          <li>楽天会員ID、パスワード</li>
                          <li>
                            <LinkIconAfter href="/guide/payment/">
                              クレジットカード、銀行口座情報
                              <IconChevronRight />
                            </LinkIconAfter>
                          </li>
                          <li>
                            ご契約者名義の
                            <LinkNormal href="/guide/mnp/">
                              MNP予約番号
                            </LinkNormal>
                            （他社から乗り換えの場合）
                          </li>
                        </UlOnly>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          ※未成年の方のお申し込み方法は
                          <LinkNormal href="/flow/for-minors/">
                            こちら
                          </LinkNormal>
                        </TxtCap>
                      </div>
                    </MediaGrid>
                    <div
                      className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                    >
                      <CvButtonPrimaryLarge lidR="campaign_nba_f_guide_application_02" />
                    </div>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <AccordionEmpStep>STEP2</AccordionEmpStep>
                        <AccordionEmpTxt>
                          「Rakuten最強プラン」利用開始
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                    ratid="campaign_nba_flow_step2"
                  >
                    <MediaGridCustom>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/nba/img-flow-02.png`}
                          width="278"
                          height="156"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <ButtonRegular as="a" href="/faq/detail/00001648/">
                          プラン利用開始手順
                        </ButtonRegular>
                      </div>
                    </MediaGridCustom>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <AccordionEmpStep>STEP3</AccordionEmpStep>
                        <AccordionEmpTxt>
                          NBA Rakutenのご利用登録
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                    ratid="campaign_nba_flow_step3"
                  >
                    <Heading level="4" className={Utils['Align-center']}>
                      <TxtEmp02>
                        楽天モバイルをご契約の楽天IDでNBA
                        Rakutenにログインすれば、登録完了です！
                      </TxtEmp02>
                    </Heading>
                    <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                      NBA LEAGUE PASS for 楽天モバイルは、NBA
                      Rakutenが配信するすべての試合、動画をご視聴頂けます。見逃し配信やダウンロード機能もあるので、いつでもどこでも好きな時に試合観戦を楽しめます！
                    </p>
                    <div
                      className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                    >
                      <ButtonSecondaryLarge
                        as="a"
                        href="https://nba.rakuten.co.jp/?scid=wi_20231020_nbar_top_rmi&utm_source=nbar_top&utm_medium=rmi&utm_campaign=lp_guide"
                        target="_blank"
                        data-ratid="campaign_nba_application_02"
                        data-ratevent="click"
                        data-ratparam="all"
                      >
                        NBA Rakutenを見る
                        <IconNewTabLine className="icon-end" />
                      </ButtonSecondaryLarge>
                    </div>
                  </AccordionListEmp>
                </>
              }
              heading2={'ご契約中の方'}
              content2={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <AccordionEmpStep>STEP1</AccordionEmpStep>
                        <AccordionEmpTxt>
                          NBA Rakutenのご利用登録
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                    ratid="campaign_nba_flow_member_step1"
                  >
                    <Heading level="4" className={Utils['Align-center']}>
                      <TxtEmp02>
                        楽天モバイルをご契約の楽天IDでNBA
                        Rakutenにログインすれば、登録完了です！
                      </TxtEmp02>
                    </Heading>
                    <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                      NBA LEAGUE PASS for 楽天モバイルは、NBA
                      Rakutenが配信するすべての試合、動画をご視聴頂けます。見逃し配信やダウンロード機能もあるので、いつでもどこでも好きな時に試合観戦を楽しめます！
                    </p>
                    <div
                      className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                    >
                      <ButtonSecondaryLarge
                        as="a"
                        href="https://nba.rakuten.co.jp/?scid=wi_20231020_nbar_top_rmi&utm_source=nbar_top&utm_medium=rmi&utm_campaign=lp_guide"
                        target="_blank"
                        data-ratid="campaign_nba_application_02_member"
                        data-ratevent="click"
                        data-ratparam="all"
                      >
                        NBA Rakutenを見る
                        <IconNewTabLine className="icon-end" />
                      </ButtonSecondaryLarge>
                    </div>
                  </AccordionListEmp>
                </>
              }
            />

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-04_how-to-watch"
              ratEvent="appear"
            >
              試合を観る方法
            </Heading>
            <HowtoCard>
              {howtoItems.map((howtoItem, index) => {
                return (
                  <HowtoCardItem key={index}>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/nba/${howtoItem.img}-sp.png`}
                        width="686"
                        height="386"
                      />
                      <img
                        src={`${assets}img/campaign/nba/${howtoItem.img}-pc.png`}
                        width="305"
                        height="171"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                    {howtoItem.txt ? (
                      <p>{howtoItem.txt}</p>
                    ) : (
                      <>
                        <p>
                          ログイン後、視聴可否を
                          <LinkIconAfter
                            href="https://nba.rakuten.co.jp/my_account/subscription"
                            target="_blank"
                          >
                            こちら
                            <IconNewTabLine />
                          </LinkIconAfter>
                          <br />
                          で確認。
                        </p>
                        <TxtCapEmp01 as="p" className={Utils['Align-left']}>
                          ※本サービスのご利用には、「Rakuten最強プラン」開通から3日から4日程度お待ちいただく場合がございます。
                        </TxtCapEmp01>
                      </>
                    )}
                  </HowtoCardItem>
                )
              })}
            </HowtoCard>

            <UserVoiceLinkWrap className={Utils['Mt-48']}>
              <Heading className={Utils['Align-center']} level="3">
                <TxtEmp02>＼ご利用中の方にお聞きしました／</TxtEmp02>
              </Heading>

              <UserVoiceLinkItem className={Utils['Mt-16']}>
                <img
                  src={`${assets}img/uservoice/avator-64.png`}
                  width="124"
                  height="124"
                  alt=""
                  loading="lazy"
                />

                <div>
                  <Heading level="4">
                    楽天経済圏強化のために乗り換えました！ NBAの視聴も楽しみです
                  </Heading>
                  <p className={Utils['My-16']}>
                    楽天モバイルに乗り換えて「NBA LEAGUE PASS for
                    楽天モバイル」が無料で利用できるようになったので、今シーズンから思い切り楽しみたいですね。
                  </p>
                  <LinkIconAfter href="/uservoice/64/?l-id=campaign_nba_uservoice_64">
                    続きを読む
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </UserVoiceLinkItem>
            </UserVoiceLinkWrap>
          </SystemContainer>

          <NbaAppWrap>
            <SystemContainer>
              <NbaAppItemWrap>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/nba/img-nba-app-sp.png`}
                    width="375"
                    height="262"
                  />
                  <img
                    src={`${assets}img/campaign/nba/img-nba-app-pc.png`}
                    width="516"
                    height="360"
                    alt=""
                    loading="lazy"
                  />
                </picture>
                <div>
                  <Heading as="h3" level="4">
                    試合のダウンロードやチャット機能も充実
                  </Heading>
                  <NbaAppItem>
                    <div>
                      <p className={Utils['Show-xxo']}>
                        AppStore で<br />[ NBA Rakuten ]と検索。
                      </p>
                      <div className={Utils['Mt-16']}>
                        <img
                          src={`${assets}img/common/btn-appstore-small.png`}
                          width="120"
                          height="40"
                          alt="Download on the App Store"
                          loading="lazy"
                        />
                      </div>
                      <div className={`${Utils['Mt-8']} ${Utils['Show-xxo']}`}>
                        <img
                          src={`${assets}img/campaign/nba/qr-appstore.png`}
                          width="128"
                          height="128"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <TxtSize size="s">
                        <MailtoLink onClick={() => mailLinkHandler('ios')}>
                          メールでURLを送る
                        </MailtoLink>
                      </TxtSize>
                    </div>
                    <div>
                      <p className={Utils['Show-xxo']}>
                        Google Play で<br />[ NBA Rakuten ] と検索。
                      </p>
                      <div className={`${Utils['Mt-16']} googlebtn`}>
                        <img
                          src={`${assets}img/common/btn-googleplay-small.png`}
                          width="120"
                          height="36"
                          alt="GET IT ON Google Play"
                          loading="lazy"
                        />
                      </div>
                      <div className={`${Utils['Mt-8']} ${Utils['Show-xxo']}`}>
                        <img
                          src={`${assets}img/campaign/nba/qr-googleplay.png`}
                          width="128"
                          height="128"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <TxtSize size="s">
                        <MailtoLink onClick={() => mailLinkHandler('google')}>
                          メールでURLを送る
                        </MailtoLink>
                      </TxtSize>
                    </div>
                  </NbaAppItem>
                </div>
              </NbaAppItemWrap>
            </SystemContainer>
          </NbaAppWrap>
          <SystemContainer>
            <TxtCap
              as="p"
              className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              Apple および Apple ロゴは米国その他の国で登録された Apple Inc.
              の商標です。App Store は Apple Inc. のサービスマークです。Google
              Play および Google Play ロゴは、Google LLC の商標です。
            </TxtCap>
          </SystemContainer>

          <SystemContainer>
            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-05_faq"
              ratEvent="appear"
            >
              よくあるご質問
            </Heading>
            <AccordionList
              text={'NBA Rakutenとは？'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                楽天グループ株式会社が運営するNBAの日本国内向け動画配信サービスです。国内で唯一、NBAのレギュラーシーズン、オールスター、プレイイン・トーナメント、プレイオフ、NBAファイナルのすべてをLIVEとオンデマンドで配信しています。{' '}
              </p>
            </AccordionList>
            <AccordionList text={' 海外で視聴できますか？'} isOpened={false}>
              <p>
                NBA
                Rakutenは日本国内でのみご利用いただけます。海外ではご利用になれませんのでご注意ください。
              </p>
            </AccordionList>
            <AccordionList text={' 視聴できるデバイスは？'} isOpened={false}>
              <p>NBA Rakutenでご利用いただけるデバイスは以下の通りです。</p>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                ＜推奨デバイス＞
              </TxtEmp01>
              <ul className={Utils['Mt-8']}>
                <li>iOS 15以上</li>
                <li>Android 7以上 (GooglePlay対応端末)</li>
                <li>
                  PC (Windows8.1/10/11) (Mac10.13～) <TxtCap>*1</TxtCap>
                </li>
                <li>
                  Chromecast <TxtCap>*2</TxtCap>
                </li>
                <li>
                  Fire TV
                  <LinkIconAfter
                    href="https://nba.faq.rakuten.net/detail/000002102"
                    target="_blank"
                  >
                    Fire TV 再生方法
                    <IconNewTabLine />
                  </LinkIconAfter>
                  にて対象機種をご確認ください。
                </li>
                <li>PlayStation®4</li>
                <li>
                  Android TV <TxtCap>*3</TxtCap>
                </li>
                <li>Apple TV (4K、第4世代) (tvOS 11.0~)</li>
                <li>
                  VIERA（2017年以降のモデル）<TxtCap>*4</TxtCap>
                </li>
                <li>
                  HDMI接続 <TxtCap>*5</TxtCap>
                </li>
              </ul>
              <TxtCap as="p" className={Utils['Mt-16']}>
                *1 Internet Explore は対応していません。
                <br />
                *2
                Chromecast第1世代など、一部仕様により視聴できない場合がございます。
                <br />
                *3
                <LinkIconAfter
                  href="https://nba.faq.rakuten.net/detail/000002181"
                  target="_blank"
                >
                  Android TV 再生方法
                  <IconNewTabLine />
                </LinkIconAfter>
                にて対象機種をご確認ください。
                <br />
                *4 2021年10月5日をもちまして、VIERA
                2016年モデルへのサービス提供を終了させていただくことになりました。
                <br />
                *5
                HDMI接続は回線の混雑状況やお使いの端末のスペック、HDMIケーブルの仕様により、高画質で視聴できない場合や、視聴自体が行えない場合がございます。iOSは純正HDMIを推奨しておりますが、端末により視聴できない場合がございます。
              </TxtCap>
              <p className={Utils['Mt-16']}>
                なお、一部デバイスへのサービス提供並びにサポートを終了しております。詳しくは下記リンクをご参照ください。
              </p>
              <div className={Utils['Mt-16']}>
                <LinkIconAfter
                  href="https://nba.faq.rakuten.net/detail/000002123"
                  target="_blank"
                >
                  https://nba.faq.rakuten.net/detail/000002123
                  <IconNewTabLine />
                </LinkIconAfter>
              </div>
            </AccordionList>
            <AccordionList
              text={
                'NBA LEAGUE PASS for 楽天モバイルが適用されているかは、どこで確認できますか？'
              }
              isOpened={false}
            >
              <p>
                ログイン後、NBA Rakuten内の
                <LinkIconAfter
                  href="https://nba.rakuten.co.jp/my_account/subscription"
                  target="_blank"
                >
                  「契約中の定額プランの確認」ページ をご確認ください。
                  <IconNewTabLine />
                </LinkIconAfter>
              </p>
            </AccordionList>
            <AccordionList
              text={'2023-2024シーズンのNBAファイナルは対象ですか？'}
              isOpened={false}
            >
              <p>
                2023-2024シーズンのNBAファイナル全戦を含む、全試合を無料で視聴いただけます。
              </p>
            </AccordionList>

            <div className={`${Utils['Align-center']} ${Utils['Mt-48']}`}>
              <Heading level="2">利用規約</Heading>
              <p className={Utils['Mt-16']}>
                利用規約は
                <LinkIconAfter
                  href="/terms/pdf/rakuten_mobile_video_streaming.pdf"
                  target="_blank"
                >
                  こちら
                  <IconPdf />
                </LinkIconAfter>
              </p>
            </div>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-06_saikyo-plan"
              ratEvent="appear"
              id="about"
            >
              楽天モバイルのご紹介
            </Heading>
            <div className={Utils['Mt-24']}>
              <CommonSaikyo lid={`campaign_nba_fee_saikyo-plan`} />
            </div>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
              ratId="campaign_nba_scroll-07_campaign"
              ratEvent="appear"
            >
              楽天モバイルご契約者様向けエンタメコンテンツ
            </Heading>
            <div className={Utils['Mt-40']}>
              <BnrRecommend />
            </div>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            >
              ほかにも楽天モバイルご契約者様におすすめ
            </Heading>
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <BannerHover href="/tips/gservice/?l-id=campaign_nba_tips_gservice">
                <img
                  src={`${assets}img/campaign/nba/bnr-mobile.png`}
                  width="640"
                  height="150"
                  alt="楽天モバイルご契約者様へ 楽天のおトクなサービス"
                  loading="lazy"
                />
              </BannerHover>
            </div>
          </SystemContainer>

          <CtaBottomFixed scrollTrigger={scrollTrigger} />
          <PopAsk config={configTxt} className={Utils['Mt-64']} />
          <GlobalFooter breadcrumbsItem={breadcrumbs} />
        </div>
      </SystemWrapper>
    </>
  )
}

export default CampaignNba
