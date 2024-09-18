import type { NextPage } from 'next'
import React, { useEffect, useContext, useRef, useState } from 'react'
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
import { LinkNormal } from '@components/atoms/Link'
import { IconArrowDown } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { BannerHover } from '@components/atoms/Banner'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import {
  Bnrs,
  EventCarousel,
} from '@components/fragment/campaign/referral/event/EventCarousel'
import {
  SocialIconData,
  SocialIconList,
} from '@components/fragment/campaign/referral/event/SocialIconList'
import { UserVoiceSection } from '@components/fragment/campaign/referral/event/UserVoiceSection'
import { Modal } from '@components/atoms/Modal'
import { fontRakutenSans } from '@styles/fonts'

const sitePath = 'https://network.mobile.rakuten.co.jp/campaign/referral/event/'
const imgpath = `${assets}img/campaign/referral/event/`
const Kv = styled.div`
  background: url(${imgpath}kv-bg-sp.png) no-repeat center;
  background-size: cover;
  ${mixins.mq.MinM} {
    background: url(${imgpath}kv-bg-tab.png) no-repeat center;
    background-size: 834px 240px;
  }
  ${mixins.mq.MinL} {
    background: url(${imgpath}kv-bg-pc.png) no-repeat center;
    background-size: 2000px 240px;
  }
  > div {
    display: flex;
    align-items: center;
    height: 240px;
    padding: 0 20px;
    ${mixins.mq.MaxM} {
      align-items: flex-end;
      padding: 0 24px 24px;
    }
  }
  h1 {
    color: ${props => props.theme.colors.white};
  }
`
const SystemContainerCustom = styled(SystemContainer)`
  max-width: 888px;
`
const PrizeWrap = styled.div`
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.pink100};
  max-width: 502px;
  margin: 8px auto 0;
  padding: 24px 16px;
  > ul {
    display: grid;
    gap: 8px;
    justify-content: center;
    > li {
      display: flex;
      gap: 24px;
      align-items: center;
    }
  }
`
const PinkBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.pink5};
`
const AnchorList = styled.ol`
  display: grid;
  gap: 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const AnchorItem = styled.li`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  background: ${props => props.theme.colors.white};
  display: grid;
  > a {
    padding: 12px 20px 8px;
    display: grid;
    text-align: center;
    gap: 4px;
    text-decoration: none;
    grid-template-rows: 24px 56px 1fr;

    &:hover {
      background: ${props => props.theme.colors.monotone97};
      p {
        &.link {
          span {
            text-decoration: underline;
            text-decoration-thickness: 3px;
          }
        }
      }
    }
    .txt {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${mixins.mq.MaxM} {
      gap: 0 4px;
      grid-template-areas:
        'case .'
        'img txt'
        'icon icon';
      grid-template-columns: 56px 1fr;
      grid-template-rows: 24px 1fr;
      .case {
        grid-area: case;
      }
      .img {
        grid-area: img;
      }
      .txt {
        grid-area: txt;
        display: flex;
        align-items: center;
      }
      .icon {
        grid-area: icon;
      }
    }
  }
`
const IconArrowDownCustom = styled(IconArrowDown)`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.l};
`
const CaseLabel = styled.div`
  width: 236px;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.colors.pink100};
  text-align: center;
  margin: 0 auto;
  padding: 4px 0;
  > span {
    color: ${props => props.theme.colors.pink100};
    font-feature-settings: 'palt' on;
    font-family: ${fontRakutenSans.style.fontFamily};
    font-size: 30px;
    font-weight: bold;
    line-height: 120%;
    letter-spacing: -0.3px;
  }
`
const CoverRatioFlex = styled.div`
  display: flex;
  gap: 36px;
  > div:first-child {
    flex-shrink: 0;
  }
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`
const CoverRatioText = styled.div`
  ${mixins.mq.MinL} {
    max-width: 512px;
  }
`
const ButtonRegularCustom = styled(ButtonRegular)`
  ${mixins.mq.MinL} {
    max-width: 272px;
    width: 100%;
  }
`
const YellowBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.yellow};
`
const Pink40Border = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.pink40};
  padding: 16px;
  ${mixins.mq.MinL} {
    padding: 32px 16px;
  }
`
const FloatingContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);
  text-align: center;
  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`
const VoicesParticipantsList = styled.ul`
  display: flex;
  gap: 16px;

  ${mixins.mq.MaxM} {
    gap: 8px;
    flex-direction: column;
  }

  > li {
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding: 16px;
    width: calc((100% - 32px) / 3);
    background-color: ${props => props.theme.colors.monotone97};

    ${mixins.mq.MaxM} {
      gap: 8px;
      justify-content: space-around;
      flex-direction: row-reverse;
      width: 100%;

      > p {
        width: calc((100% - 8px) / 2);
        height: 100%;
      }
    }
  }
`
const ModalSwitcher = styled.div`
  cursor: pointer;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    border: 10px solid transparent;
    border-left: 15px solid ${props => props.theme.colors.white};
    margin-left: -5px;
  }
  &:hover {
    &::before {
      background-color: #d52484;
    }
  }
`
const MovieContainer = styled.div`
  position: relative;
  margin-inline: auto;
  display: block;
  max-width: 640px;

  > div {
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`
const TxtEmp02Custom = styled(TxtEmp02)`
  font-size: 19px;
  ${mixins.mq.MaxM} {
    font-size: 16px;
  }
`

const MaxWidth650 = styled.div`
  max-width: 650px;
  margin: auto;
`

interface CtaBottomFixedProps {
  scrollTrigger: React.RefObject<HTMLDivElement>
}

const ServiceTopCarouselData: Bnrs[] = [
  {
    pcImg: `${imgpath}bnr-01-678-453.png`,
    spImg: `${imgpath}bnr-01-375-250.png`,
    alt: '',
  },
  {
    pcImg: `${imgpath}bnr-02-678-453.png`,
    spImg: `${imgpath}bnr-02-375-250.png`,
    alt: '',
  },
  {
    pcImg: `${imgpath}bnr-03-678-453.png`,
    spImg: `${imgpath}bnr-03-375-250.png`,
    alt: '',
  },
  {
    pcImg: `${imgpath}bnr-04-678-453.png`,
    spImg: `${imgpath}bnr-04-375-250.png`,
    alt: '',
  },
]

const SocialIconsDatas: SocialIconData[] = [
  {
    link: `https://www.facebook.com/share.php?u=${sitePath}`,
    img: `${imgpath}icon-facebook.png`,
    alt: 'facebook',
  },
  {
    link: `https://twitter.com/intent/tweet?url=${sitePath}`,
    img: `${imgpath}icon-x.png`,
    alt: 'x',
  },
  {
    link: `viber://forward?text=${sitePath}`,
    img: `${imgpath}icon-viber.png`,
    alt: 'viber',
  },
  {
    link: `http://www.linkedin.com/shareArticle?mini=true&url=${sitePath}`,
    img: `${imgpath}icon-in.png`,
    alt: 'in',
  },
  {
    link: `https://social-plugins.line.me/lineit/share?url=${sitePath}`,
    img: `${imgpath}icon-line.png`,
    alt: 'line',
  },
]

const CampaignReferralEvent: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイル紹介感謝イベント'
  const directories = [{ path: '/campaign/referral/event/', label: '' }]
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
        let wrapperHeight = 200
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
      <FloatingContainer aria-expanded={isExpanded} ref={wrapperElem}>
        <ButtonPrimaryLarge
          as="a"
          href="/campaign/referral/?l-id=campaign_referral_event_campaign_referral0"
        >
          紹介キャンペーンの詳細を見る
        </ButtonPrimaryLarge>
      </FloatingContainer>
    )
  }

  const JudgeTrigger = (refTrigger: React.RefObject<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState(false)
    useEffect(() => {
      const fixedBottomBtn = (trigger: HTMLDivElement | null) => {
        const scrollY = window.scrollY
        if (!trigger) {
          return
        }
        const triggerRect = trigger.getBoundingClientRect()
        const triggerY = triggerRect.top
        const shouldExpand = triggerY < window.innerHeight || scrollY > triggerY
        setIsExpanded(shouldExpand)
      }
      window.addEventListener('scroll', () =>
        fixedBottomBtn(refTrigger.current),
      )
    }, [refTrigger])
    return {
      isExpanded,
    }
  }

  const [isExpanded01, setIsExpanded01] = useState(false)
  const [isExpanded02, setIsExpanded02] = useState(false)
  const [isExpanded03, setIsExpanded03] = useState(false)
  const toggleExpanded01 = () => setIsExpanded01(!isExpanded01)
  const toggleExpanded02 = () => setIsExpanded02(!isExpanded02)
  const toggleExpanded03 = () => setIsExpanded03(!isExpanded03)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの想いを応援してくださっている皆様に感謝を込めて、特別なイベントを開催しました。"
        ogp_img="https://network.mobile.rakuten.co.jp/assets/img/campaign/referral/event/ogp.png"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <Kv>
          <SystemContainerCustom>
            <Heading level="1">
              <TxtSize size="l">2023年7−9月期</TxtSize>
              <br />
              楽天モバイル
              <br className={Utils['Show-oox']} />
              紹介感謝イベント
            </Heading>
          </SystemContainerCustom>
        </Kv>

        <SystemContainerCustom>
          <div className={`${Utils['Mt-56']} ${Utils['Mt-pc-40']}`}>
            <Heading level="2" className={Utils['Align-center']}>
              挑戦の道は、お客様と共に
            </Heading>
            <p className={Utils['Mt-16']}>
              楽天モバイルは、すべての人が自由にスマホを使える世界の実現を目指しています。
            </p>
            <p className={Utils['Mt-16']}>
              おかげさまで、2023年8月28日には契約回線数が500万を突破し、記念の年となりました。
            </p>
            <p className={Utils['Mt-16']}>
              そこで、楽天モバイルの想いを応援してくださっている皆様に直接感謝を伝える場を作りたいと考え、特別なイベントを開催しました。
            </p>
          </div>

          <div className={Utils['Disp-pc-tb']}>
            <div
              className={Utils['Mt-16']}
              style={{
                position: 'relative',
                display: 'block',
                maxWidth: '640px',
                marginInline: 'auto',
              }}
            >
              <div style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6343507715112"
                  allowFullScreen
                  allow="encrypted-media"
                  title="楽天モバイル紹介感謝イベント7-9月期 ダイジェスト動画"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className={Utils['Disp-sp']}>
            <div
              className={Utils['Mt-16']}
              style={{
                position: 'relative',
                display: 'block',
                maxWidth: '300px',
                marginInline: 'auto',
              }}
            >
              <div style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6343507715112"
                  allowFullScreen
                  allow="encrypted-media"
                  title="楽天モバイル紹介感謝イベント7-9月期 ダイジェスト動画"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className={Utils['Pt-32']} ref={scrollTrigger}>
            <Heading level="2" className={Utils['Align-center']}>
              紹介感謝イベントの概要
            </Heading>
            <p className={Utils['Mt-16']}>
              2023年12月1日に楽天グループオフィス内の「クリムゾンクラブ」にてイベントを開催しました。
            </p>
            <p className={Utils['Mt-16']}>
              当イベントでは、楽天モバイル紹介キャンペーンを活用してご友人やご家族などに楽天モバイルを紹介してくださったお客様計10名様をご招待し、楽天モバイルの経営層から感謝をお伝えしました。
            </p>
          </div>
        </SystemContainerCustom>

        <EventCarousel
          className={Utils['Mt-24']}
          secondary={true}
          bnrs={ServiceTopCarouselData}
          lazy={true}
        />

        <SystemContainerCustom>
          <div className={Utils['Mt-24']}>
            <p>
              会場では、楽天モバイル株式会社代表取締役会長 三木谷
              浩史たちより、トロフィーと景品を贈呈し、授賞式の後には、「クリムゾンクラブ」の食事を楽しみながら、お客様と楽天モバイルに関する意見交換を行いました。
            </p>
            <p className={Utils['Mt-16']}>
              お客様からは、携帯料金が安くなり満足いただいているという嬉しいお声や、
              “ここも○○できるようになってほしい”などサービス利用者の方ならではのサービスへのご要望もいただきました。また、ご家族に薦めて家族全員で楽天モバイルに乗り換えた等の素敵なエピソードや、贈呈した景品の使い道についてもお話いただき、とても和やかな時間を一緒に過ごすことができました。
            </p>
          </div>

          <div className={Utils['Mt-32']}>
            <Heading level="2" as="h3" className={Utils['Align-center']}>
              参加者からの声
            </Heading>
            <VoicesParticipantsList className={Utils['Mt-16']}>
              <li>
                <p>
                  「<TxtEmp02Custom>子どもに動画</TxtEmp02Custom>
                  を見せる時に、データ制限がないので月末に遅くなることもなく、安心して使える」※
                </p>
                <ModalSwitcher as="p" onClick={() => toggleExpanded01()}>
                  <img
                    src={`${imgpath}img-voice01.png`}
                    width="230"
                    height="130"
                    alt=""
                    loading="lazy"
                  />
                </ModalSwitcher>
                <Modal flag={isExpanded01} switchFlag={toggleExpanded01}>
                  <MovieContainer>
                    <div>
                      <iframe
                        src={
                          !isExpanded01
                            ? ''
                            : 'https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6343628792112'
                        }
                        allowFullScreen
                        allow="encrypted-media"
                        title="楽天モバイル紹介感謝イベント7-9月期 BRONZE賞受賞者インタビュー"
                      ></iframe>
                    </div>
                  </MovieContainer>
                </Modal>
              </li>
              <li>
                <p>
                  「<TxtEmp02Custom>海外から来る人</TxtEmp02Custom>
                  はインターネット使い放題に慣れているので、データ無制限は本当にありがたい」※
                </p>
                <ModalSwitcher as="p" onClick={() => toggleExpanded02()}>
                  <img
                    src={`${imgpath}img-voice02.png`}
                    width="230"
                    height="130"
                    alt=""
                    loading="lazy"
                  />
                </ModalSwitcher>
                <Modal flag={isExpanded02} switchFlag={toggleExpanded02}>
                  <MovieContainer>
                    <div>
                      <iframe
                        src="https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6343630725112"
                        allowFullScreen
                        allow="encrypted-media"
                        title="楽天モバイル紹介感謝イベント7-9月期 BRONZE賞受賞者インタビュー"
                      ></iframe>
                    </div>
                  </MovieContainer>
                </Modal>
              </li>
              <li>
                <p>
                  「楽天市場でふるさと納税を利用して、毎月
                  <TxtEmp02Custom>楽天市場で買い物</TxtEmp02Custom>
                  するなら、楽天モバイルがおすすめです」
                </p>
                <ModalSwitcher as="p" onClick={() => toggleExpanded03()}>
                  <img
                    src={`${imgpath}img-voice03.png`}
                    width="230"
                    height="130"
                    alt=""
                    loading="lazy"
                  />
                </ModalSwitcher>
                <Modal flag={isExpanded03} switchFlag={toggleExpanded03}>
                  <MovieContainer>
                    <div>
                      <iframe
                        src="https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6343628077112"
                        allowFullScreen
                        allow="encrypted-media"
                        title="楽天モバイル紹介感謝イベント7-9月期 GOLD賞受賞者インタビュー"
                      ></iframe>
                    </div>
                  </MovieContainer>
                </Modal>
              </li>
            </VoicesParticipantsList>
            <TxtCap as="ul" className={Utils['Mt-8']}>
              ※公平なサービスのため、または環境により速度低下する場合あり
            </TxtCap>
          </div>

          <div className={Utils['Mt-32']}>
            <Heading level="4" as="h3" className={Utils['Align-center']}>
              <img
                src={`${imgpath}icon-gift.png`}
                alt=""
                width="24"
                height="24"
                loading="lazy"
              />
              <TxtEmp02 className={Utils['Ml-8']}>
                今回の紹介感謝イベント景品
              </TxtEmp02>
            </Heading>
            <PrizeWrap>
              <ul>
                <li>
                  <img
                    src={`${imgpath}icon-gold-prize.png`}
                    width="45"
                    height="45"
                    alt=""
                    loading="lazy"
                  />
                  <TxtEmp01 as="p">楽天キャッシュ 10万円分</TxtEmp01>
                </li>
                <li>
                  <img
                    src={`${imgpath}icon-silver-prize.png`}
                    width="45"
                    height="45"
                    alt=""
                    loading="lazy"
                  />
                  <TxtEmp01 as="p">楽天キャッシュ 8万円分</TxtEmp01>
                </li>
                <li>
                  <img
                    src={`${imgpath}icon-bronze-prize.png`}
                    width="45"
                    height="45"
                    alt=""
                    loading="lazy"
                  />
                  <TxtEmp01 as="p">楽天キャッシュ 5万円分</TxtEmp01>
                </li>
                <li>
                  <img
                    src={`${imgpath}icon-participation-prize.png`}
                    width="45"
                    height="45"
                    alt=""
                    loading="lazy"
                  />
                  <TxtEmp01 as="p">
                    富士河口湖温泉 富士山の見える温泉旅館{' '}
                    <br className={Utils['Show-xxo']} />
                    <LinkNormal
                      href="https://travel.rakuten.co.jp/HOTEL/2946/2946.html"
                      target="_blank"
                    >
                      大池ホテル{' '}
                    </LinkNormal>
                    ペア宿泊券
                  </TxtEmp01>
                </li>
              </ul>
            </PrizeWrap>
            <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
              <Heading level="4" as="h3">
                ＼ あなたも紹介してみよう ／
              </Heading>
              <ButtonPrimaryLarge
                as="a"
                href="/campaign/referral/?l-id=campaign_referral_event_campaign_referral01"
                className={Utils['Mt-16']}
              >
                紹介キャンペーンの詳細を見る
              </ButtonPrimaryLarge>
            </div>
          </div>
        </SystemContainerCustom>

        <PinkBox className={Utils['Mt-56']}>
          <SystemContainerCustom>
            <Heading level="2" className={Utils['Align-center']}>
              紹介にあたり
              <br className={Utils['Show-oox']} />
              こんな心配がある方必見！
            </Heading>
            <AnchorList className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}>
              <AnchorItem>
                <a href="#case1" onClick={e => anchorCallback(e, 'case1')}>
                  <TxtEmp02 as="p" className={'case'}>
                    CASE1
                  </TxtEmp02>
                  <div className={'img'}>
                    <img
                      src={`${imgpath}img-anchor-01.png`}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </div>
                  <TxtEmp01 as="p" className={'txt'}>
                    「電波はちゃんとつながるの？」
                  </TxtEmp01>
                  <IconArrowDownCustom className={'icon'} />
                </a>
              </AnchorItem>
              <AnchorItem>
                <a href="#case2" onClick={e => anchorCallback(e, 'case2')}>
                  <TxtEmp02 as="p" className={'case'}>
                    CASE2
                  </TxtEmp02>
                  <div className={'img'}>
                    <img
                      src={`${imgpath}img-anchor-02.png`}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </div>
                  <TxtEmp01 as="p" className={'txt'}>
                    「料金形態が複雑そう」
                    <br />
                    「結局他社の方が安そう」
                  </TxtEmp01>
                  <IconArrowDownCustom className={'icon'} />
                </a>
              </AnchorItem>
              <AnchorItem>
                <a href="#case3" onClick={e => anchorCallback(e, 'case3')}>
                  <TxtEmp02 as="p" className={'case'}>
                    CASE3
                  </TxtEmp02>
                  <div className={'img'}>
                    <img
                      src={`${imgpath}img-anchor-03.png`}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </div>
                  <TxtEmp01 as="p" className={'txt'}>
                    「料金プラン以外の魅力は？」
                  </TxtEmp01>
                  <IconArrowDownCustom className={'icon'} />
                </a>
              </AnchorItem>
            </AnchorList>
          </SystemContainerCustom>
        </PinkBox>

        <SystemContainerCustom className={Utils['Mt-56']}>
          <CaseLabel id="case1">
            <span>CASE 1</span>
          </CaseLabel>
          <Heading
            level="2"
            className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
          >
            「電波はちゃんと繋がるの？」
          </Heading>
          <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
            <TxtEmp02>人口カバー率は99.9%</TxtEmp02>と 国内最高水準！ 契約前に
            <LinkNormal href="/area/?l-id=campaign_referral_event_area2">
              こちら
            </LinkNormal>
            でよくお出かけするエリアでも繋がるか 調べることもできます！！
          </p>
          <CoverRatioFlex className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
            <div className={Utils['Show-xxo']}>
              <img
                src={`${imgpath}img-cover-map.png`}
                width="253"
                height="280"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <Heading level="3" className={Utils['Align-center']}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgpath}img-cover-ratio-sp.png`}
                    width="684"
                    height="664"
                  />
                  <img
                    src={`${imgpath}img-cover-ratio-pc.png`}
                    width="502"
                    height="118"
                    alt="業界最高水準人口カバー率99.9%"
                    loading="lazy"
                  />
                </picture>
              </Heading>
              <CoverRatioText>
                <Heading level="4" className={Utils['Mt-24']}>
                  4キャリア中、最も多くの地域で業界最高水準の通信品質評価を獲得！
                </Heading>
                <TxtCap as="ul" className={Utils['Mt-8']}>
                  <li>
                    ※OpenSignal社データ（2023年10月時点）。31府県で「一貫した品質」のRank1を獲得。詳細はページ下部「
                    <LinkNormal href="/fee/saikyo-plan/#opensignal">
                      OpenSignal社データについて
                    </LinkNormal>
                    」に記載
                  </li>
                </TxtCap>
                <ButtonRegularCustom
                  as="a"
                  href="/area/?l-id=campaign_referral_event_area2"
                  className={`${Utils['Mt-40']} ${Utils['Mt-pc-16']}`}
                >
                  通信可能エリアを見る
                </ButtonRegularCustom>
              </CoverRatioText>
            </div>
          </CoverRatioFlex>
          <TxtCap
            as="p"
            className={`${Utils['Mt-40']} ${Utils['Mt-pc-16']} ${Utils['Align-llc']}`}
          >
            ※
            2023年9月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出
          </TxtCap>
          <UserVoiceSection
            className={`${Utils['Mt-24']} ${Utils['Mt-pc-40']}`}
            img={`${imgpath}img-user-voice-01.png`}
            name="横澤さん（仮名) (30代男性/鹿児島県）"
            text="鹿児島から北海道まで日本一周！全国でしっかりつながる楽天モバイルを体感"
            link="/uservoice/62/?l-id=campaign_referral_event_uservoice_62"
          />
        </SystemContainerCustom>

        <YellowBox className={Utils['Mt-56']}>
          <SystemContainerCustom>
            <CaseLabel id="case2">
              <span>CASE 2</span>
            </CaseLabel>
            <Heading
              level="2"
              className={`${Utils['Mt-32']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
            >
              「料金形態が複雑そう」
              <br className={Utils['Show-oox']} />
              「結局他社の方が安そう」
            </Heading>
            <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
              料金プランはひとつだけ。毎月のデータ利用量で金額が変動するから、「自分に合ったギガ数は？」と悩まなくて大丈夫。
            </p>
            <p className={Utils['Mt-16']}>
              さらに20GB超過後は
              <TxtEmp02>
                家族割引適用でデータ無制限2,880円/月（税込3,168円）
              </TxtEmp02>
              <TxtCap>※</TxtCap>
            </p>

            <Heading
              level="2"
              className={`${Utils['Mt-32']} ${Utils['Mt-pc-40']} ${Utils['Align-center']}`}
            >
              楽天モバイルの料金プラン
            </Heading>
            <Pink40Border
              className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
            >
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${imgpath}ladder-txt-sp-240221.png`}
                  width="300"
                  height="57"
                />
                <img
                  src={`${imgpath}ladder-txt-pc-240221.png`}
                  width="648"
                  height="30"
                  alt="使わなければ勝手に安くなるおトクなワンプラン"
                  loading="lazy"
                />
              </picture>
              <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgpath}ladder-sp-240430.png`}
                    width="622"
                    height="491"
                  />
                  <img
                    src={`${imgpath}ladder-pc-240430.png`}
                    width="727"
                    height="357"
                    alt="使わなければ勝手に安くなるおトクなワンプラン。「最強家族プログラム」適用後100円/月（税別）引きで、20GB超過後無制限※2,880円/月（税込3,168円）、3GB超過後20GBまで1,880円/月（税込2,068円）、3GBまで880円/月（税込968円）"
                    loading="lazy"
                  />
                </picture>
              </p>
              <MaxWidth650 className={Utils['Mt-8']}>
                <TxtCap as="p">
                  *公平なサービス提供または環境により速度低下する場合あり※通話料等別
                </TxtCap>
              </MaxWidth650>
            </Pink40Border>
            <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
              <ButtonPrimaryLarge
                as="a"
                href="/fee/saikyo-plan/?l-id=campaign_referral_event_fee_saikyo-plan"
              >
                料金プランの詳細を見る
              </ButtonPrimaryLarge>
            </div>
            <UserVoiceSection
              className={Utils['Mt-40']}
              img={`${imgpath}img-user-voice-02.png`}
              name="園部さん（仮名）（30代女性/埼玉県）"
              text="明確な料金プランで安心！ワンプランのわかりやすさが魅力"
              link="/uservoice/12/?l-id=campaign_referral_event_uservoice_12"
            />
          </SystemContainerCustom>
        </YellowBox>

        <SystemContainerCustom className={Utils['Mt-56']}>
          <CaseLabel id="case3">
            <span>CASE 3</span>
          </CaseLabel>
          <Heading
            level="2"
            className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']} ${Utils['Align-center']}`}
          >
            「料金プラン以外の魅力は？」
          </Heading>
          <p className={Utils['Mt-16']}>
            楽天モバイルを利用することで、普段の楽天市場でのお買い物が
            <TxtEmp02>
              ポイント毎日全員5倍<TxtCap>※</TxtCap>
            </TxtEmp02>
            に!
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ 楽天会員1倍とモバイルご契約特典＋４倍の合算
          </TxtCap>
          <Pink40Border className={Utils['Mt-24']}>
            <div className={Utils['Align-center']}>
              <Heading level="4" as="h3">
                貯めた「楽天ポイント」を月々のスマホ代の支払いに充てることも可能！
              </Heading>
              <p className={`${Utils['Mt-0']} ${Utils['Mt-pc-16']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgpath}img-point-sp.png`}
                    width="622"
                    height="326"
                  />
                  <img
                    src={`${imgpath}img-point-pc.png`}
                    width="504"
                    height="263"
                    alt="3GBまで980円（税込1,078円）ポイント利用で0円！"
                    loading="lazy"
                  />
                </picture>
              </p>
            </div>
            <p className={`${Utils['Mt-16']} ${Utils['Align-ccl']}`}>
              仮に楽天ポイントが毎月「3,300ポイント」以上貯まっていれば、家族割引適用でデータ無制限2,880円/月（税込3,168円）のお支払いも、
              <TxtEmp02>全額ポイントで！</TxtEmp02>
            </p>
          </Pink40Border>
          <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
            <ButtonRegularLarge
              as="a"
              href="/guide/point/?l-id=campaign_referral_event_guide_point"
            >
              楽天ポイント活用はこちら
            </ButtonRegularLarge>
          </div>
          <UserVoiceSection
            className={Utils['Mt-40']}
            img={`${imgpath}img-user-voice-03.png`}
            name="川原さん（仮名） （40代女性/兵庫県）"
            text="乗り換えでポイ活がより効率的に！スマホ代も大幅節約"
            link="/uservoice/35/?l-id=campaign_referral_event_uservoice_35"
          />

          <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
            <Heading level="2">他の方の声も！</Heading>
            <div className={Utils['Mt-16']}>
              <BannerHover href="/uservoice/?l-id=campaign_referral_event_uservoice">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgpath}bnr-user-voice-343-108.png`}
                    width="686"
                    height="216"
                  />
                  <img
                    src={`${imgpath}bnr-user-voice-504-158.png`}
                    width="504"
                    height="158"
                    alt="楽天モバイルってどうですか？ お客様に直接お聞きしました"
                  />
                </picture>
              </BannerHover>
            </div>
          </div>

          <div className={`${Utils['Mt-40']} ${Utils['Align-center']}`}>
            <Heading level="2">イベントを共有</Heading>
            <SocialIconList
              className={Utils['Mt-16']}
              iconData={SocialIconsDatas}
            />
          </div>
        </SystemContainerCustom>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignReferralEvent
