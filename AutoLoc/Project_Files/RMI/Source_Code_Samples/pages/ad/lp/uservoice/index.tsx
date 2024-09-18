import type { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { GuidePopAsk } from '@components/include/guide/PopAsk'

const Kv = styled.div`
  ${mixins.mq.MaxM} {
    height: 100vh;
  }
`
const KvItemContainer = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/kv-pc-240322.png);
  height: 740px;
  background-position: left center;
  max-width: 1920px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: -56px;
  ${mixins.mq.MaxM} {
    background-image: url(${assets}img/ad/lp/uservoice/kv-sp-240304.png);
    background-position: center center;
    height: 100vh;
  }
`

const KvItemContainerWrapper = styled.div`
  background: #b0bec8;
`

const KvGradient = styled.div`
  ${mixins.mq.MinCustom('1921px')} {
    max-width: 1920px;
    height: 740px;
    &::before {
      content: '';
      display: block;
      margin-left: auto;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(177, 190, 200, 1) 100%
      );
      width: 100px;
      height: 100%;
      position: relative;
    }
  }
`

const KvLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 462px;
  height: 148px;
  ${mixins.mq.MaxM} {
    width: 270px;
    height: 86px;
  }
`

const KvSaikyo = styled.picture`
  display: block;
  height: 278px;
  width: 100%;
  max-width: 1160px;
  margin: auto;
  margin-top: -278px;
  position: relative;
  bottom: 286px;
  img {
    margin-left: auto;
    display: block;
    ${mixins.mq.MaxM} {
      margin-right: auto;
    }
  }
  ${mixins.mq.MaxM} {
    position: absolute;
    top: 85px;
    margin: 0;
    height: 0;
    bottom: 0;
  }
`

const KvBtnsWrapper = styled.div`
  position: relative;
  bottom: 80px;
  ${mixins.mq.MaxM} {
    bottom: 25px;
  }
`

const KvBtns = styled.div`
  max-width: 622px;
  margin: auto;
  display: flex;
  gap: 40px;
  padding: 0 16px;
  ${mixins.mq.MaxM} {
    gap: 9px;
    justify-content: center;
    bottom: auto;
    a {
      img {
        width: auto;
        height: 36px;
        ${mixins.mq.MaxCustom('355px')} {
          height: 30px;
        }
      }
    }
  }
  ${mixins.mq.MaxCustom('355px')} {
    max-width: 314px;
  }
`

const ImgBtn = styled.a`
  background-color: black;
  border-radius: 30px;
  display: inline-block;
  img {
    &:hover {
      opacity: 0.9;
    }
  }
  ${mixins.mq.MaxM} {
    background-color: unset;
  }
`
const ScrollArrowWrapper = styled.div`
  position: relative;
  top: 72px;
  left: 4px;
`

const ScrollTxt = styled.p`
  img {
    height: 45px;
  }
`

const ScrollHInt = styled.div`
  position: relative;
  right: 79px;
  bottom: 160px;
  float: right;
  ${mixins.mq.MaxM} {
    right: 10px;
    bottom: 144px;
  }
`

const ScrollArrow = styled.div`
  position: relative;
  animation: arrow 2s infinite;

  @keyframes arrow {
    0% {
      top: 0;
    }
    80% {
      top: 5px;
    }
    100% {
      top: 40px;
    }
  }
  &::before {
    content: '';
    width: 1px;
    display: block;
    position: relative;
    top: -69px;
    background-color: white;
    height: 59px;
    left: -0.5px;
    animation: line 2s infinite;
    @keyframes line {
      0% {
        height: 0px;
      }
      80% {
        height: 59px;
      }
    }
  }
  &::after {
    content: '';
    border-style: solid;
    border-width: 10px 4px 0 4px;
    border-color: white transparent transparent transparent;
    position: relative;
    top: -60px;
    left: -4px;
  }
`

const ExpContet = styled.div`
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: 100px 0;
  ${mixins.mq.MaxM} {
    padding: 53px 0 45px;
  }
`

const ExpSaikyoLogo = styled.img`
  width: 540px;
  height: 75px;
  ${mixins.mq.MaxM} {
    width: 225px;
    height: 32px;
  }
`

const MySaikyo = styled.img`
  width: 400px;
  height: 67px;
  ${mixins.mq.MaxM} {
    width: 225px;
    height: 38px;
  }
`

const ExpContetInner = styled.div`
  max-width: 822px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
`

const VoiceContet = styled.div`
  max-width: 1034px;
  width: 100%;
  margin: auto;
  text-align: center;
`

const VoiceContetDecoration = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: auto;
  text-align: center;
`

const VoiceHead = styled.img`
  width: 280px;
  height: 71px;
  margin-top: 120px;
  ${mixins.mq.MaxM} {
    width: 146px;
    height: 37px;
    margin-top: 42px;
  }
`

const VoiceTxt = styled.img`
  width: 340px;
  height: 67px;
  ${mixins.mq.MaxM} {
    width: 217px;
    height: 42px;
  }
`

const BgPink = styled.div`
  background-color: #f9e9f1;
  text-align: center;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  padding-top: 80px;
`

const AboutWaveWhite = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/wave-2-bottom-pc.png);
  background-position: top;
  background-size: 1920px 90px;
  height: 90px;
  position: relative;
  bottom: 1px;
  ${mixins.mq.MaxM} {
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const AboutBg = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/wave-2-bg-pc.png);
  max-width: 1920px;
  width: 100%;
  margin: auto;
  text-align: center;
  background-position: center;
  background-size: cover;
`

const AboutContent = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/wave-1-top-pc.png);
  background-position: bottom;
  background-size: 1920px 90px;
  margin-bottom: -1px;
  ${mixins.mq.MaxM} {
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const AboutBtns = styled.div`
  display: flex;
  gap: 40px;
  max-width: 622px;
  margin: auto;
  margin-bottom: 120px;
  ${mixins.mq.MaxM} {
    margin-bottom: 60px;
    gap: 16px;
    flex-direction: column;
  }
`

const AboutSaikyoLogo = styled.img`
  width: 600px;
  height: 84px;
  margin-top: 120px;
  ${mixins.mq.MaxM} {
    width: 249px;
    height: 35px;
    margin-top: 0;
  }
`

const AboutSaikyoContent = styled.picture`
  margin-top: 80px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
  }
`

const AdjustPad25 = styled.div`
  padding: 0;
  ${mixins.mq.MaxM} {
    padding: 0 25px;
  }
`

const NotYetLogo = styled.img`
  width: 480px;
  height: 67px;
  ${mixins.mq.MaxM} {
    width: 275px;
    height: 39px;
  }
`

const NotYetBg = styled(BgPink)`
  ${mixins.mq.MaxM} {
    padding-top: 0;
  }
`

const PinkWaveBottom = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/wave-1-bottom-pc.png);
  background-position: bottom;
  background-size: 1920px 90px;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  height: 90px;
  ${mixins.mq.MaxM} {
    background-size: contain;
    background-position: top;
    height: 45px;
  }
`

const PinkWaveTop = styled.div`
  background-image: url(${assets}img/ad/lp/uservoice/wave-1-top-pc.png);
  background-position: top;
  background-size: 1920px 90px;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  height: 90px;
  ${mixins.mq.MaxM} {
    height: 45px;
    background-size: contain;
    background-position: bottom;
  }
`

const UsersImg = styled.picture`
  max-width: 1920px;
  width: 100%;
  margin: auto;
  display: block;
`

const PopAskIndex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 546px;
  margin: auto;
  padding: 0 16px;
  margin-top: -20px;
`

const PopAskHeading = styled.div`
  margin-bottom: -12px;
  & + div {
    padding: 16px 0 0;
    .NpsEmbedded-Box{
      padding: 25px 16px 17px;
    }
    .NpsEmbedded-Box-MessageBox,
    .NpsGuide {
      font-weight:bold;
    }
    .NpsGuide_message__LNEcD {
      width:auto!important;
    }
  }
`

const FixedBtnWrapper = styled.div`
  background: rgba(77, 77, 77, 0.8);
  padding: 16px;
  position: fixed;
  bottom: -88px;
  left: 0;
  width: 100%;
  transition: all 0.5s 0s ease;
  ${mixins.mq.MaxM} {
    padding: 8px;
  }
`

const FixedBtnContent = styled.div`
  max-width: 568px;
  margin: auto;
  display: flex;
  gap: 16px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    max-width: 359px;
    gap: 10px;
    img {
      height: 36px;
      width: auto;
      ${mixins.mq.MaxCustom('355px')} {
        height: 30px;
      }
    }
  }
`

const FixedBtn = styled.a`
  &:hover {
    opacity: 0.9;
  }
`

const FooterBttomPadding = styled.div`
  padding-bottom: 88px;
  ${mixins.mq.MaxM} {
    padding-bottom: 52px;
  }
`

const configTxt =
  'window.rexSurveyConfig = {"language":"ja","surveyId":"40819","cId":{"name":"answers[40819_277267]","value":""},"embedded":true,"url":{"name":"answers[40819_277268]"},"triggerIdName":"trigger","reappearancePeriodWithRespond":30,"reappearancePeriodWithoutRespond":30,"enableDisplaySuppressionPerPage":true,"enableFormAction":false,"displayStartDate":"","displayEndDate":"","permission":{"inquiryTxt":"キャンペーンをより分かりやすくするためにアンケートにご協力ください (選択式1問)","yesBtnTxt":"協力する","noBtnTxt":"今は協力しない","available":true},"thanks":{"txt0":"ご協力ありがとうございました","txt1":"いただいた情報は、サービス改善のために使用させていただきます。","thanksDisplaySeconds":3},"nps":{"available":true,"question":{"label":"このページを見て、楽天モバイルに興味を持ちましたか？"},"options":[{"name":"answers[40819_277269][]","value":"769828"},{"name":"answers[40819_277269][]","value":"769829"},{"name":"answers[40819_277269][]","value":"769830"},{"name":"answers[40819_277269][]","value":"769831"},{"name":"answers[40819_277269][]","value":"769832"}],"txt0":"全く興味を持たなかった","txt1":"とても興味を持った","checked":4},"inquiry":{"available":true,"checkList":{"questionType":"multipleAnswer","available":true,"question":"このページに関してあなたの意見にあてはまるものをお選びください【必須】","shuffleChoices":true,"options":[{"name":"answers[40819_277270][]","value":"769833","label":"Rakuten最強プランが気になった"},{"name":"answers[40819_277270][]","value":"769834","label":"Rakuten最強プランを契約したくなった"},{"name":"answers[40819_277270][]","value":"769835","label":"Rakuten最強プランに契約しようと思った"},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""}]},"freeInput":{"available":true,"name":"answers[40819_277271]","title":"このページに関してあなたの意見にあてはまるものをお選びください【必須】【1000文字】"},"sendBtnTxt":"送信する","footerNote":{"available":true,"text":"お客様よりご提供いただく情報はサービス向上のため使用させていただきます。","link":"https://privacy.rakuten.co.jp/","htmlText":""}},"inquiryNegative":{"checkList":{"available":false,"options":[{"name":"answers[40819_277270][]","value":"769833","label":""},{"name":"answers[40819_277270][]","value":"769834","label":""},{"name":"answers[40819_277270][]","value":"769835","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""},{"name":"","value":"","label":""}]}},"ua":{"name":"answers[40819_277272]"},"href":{"name":"answers[40819_277273]"},"cookie":{"available":false},"assetPaths":{"closeButton":"","checkIcon":""}}'

const AdLpUserVoice: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'Rakuten最強プランユーザーのリアルな声'

  useEffect(() => {
    // ↓最初のスクロールの処理↓
    const explainOffsetTop = document.getElementById('js-explain')!.offsetTop

    const handleKeyDown = (event: { key: string }) => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        event.key === ' '
      ) {
        handleScroll()
      }
    }

    const handleScroll = () => {
      // クリーンアップ処理
      document.removeEventListener('wheel', handleScroll)
      document.removeEventListener('touchmove', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)

      setTimeout(() => {
        // スクロール
        window.scrollTo({
          top: explainOffsetTop,
          behavior: 'smooth',
        })
        // スクロール許可
        document.documentElement.style.overflow = 'initial'
      }, 300)
    }

    if (window.scrollY === 0) {
      // スクロール無効化
      document.documentElement.style.overflow = 'hidden'

      // スクロール動作の検知&発火用
      document.addEventListener('wheel', handleScroll)
      document.addEventListener('touchmove', handleScroll)
      document.addEventListener('keydown', handleKeyDown)
    }
    // ↑最初のスクロールの処理↑

    // ↓popaskのテキスト画像の非表示化処理↓
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement
      if (target.className === 'rex-button primary') {
        document.getElementById('popask-txt')!.style.display = 'none'
        document.getElementById('popask-index')!.style.display = 'none'
      }
    }

    document.addEventListener('click', handleClick)
    // ↑popaskのテキスト画像の非表示化処理↑

    // ↓画面下部fixed buttonの処理↓
    const triggerElement = document.getElementById('js-fixed-btn-trigger')!

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.y < 0) {
          document.getElementById('fixed-btn')!.style.bottom = '0'
        } else {
          document.getElementById('fixed-btn')!.style.bottom = '-88px'
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(triggerElement)
    // ↑画面下部fixed buttonの処理↑
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="Rakuten最強プランユーザーのリアルな声を集めてみました。あなたのライフスタイルに合わせて使い方は自由自在のプランです。使いこなしている人たちの声を見てみましょう。"
        noindex={true}
        ogp_img="https://network.mobile.rakuten.co.jp/assets/img/ad/lp/uservoice/ogp.png"
      />
      <Kv>
        <KvItemContainerWrapper>
          <KvItemContainer>
            <KvLogo>
              <a href="/">
                <img
                  src={`${assets}img/ad/lp/uservoice/logo.png`}
                  alt="Rakuten Mobile"
                />
              </a>
            </KvLogo>
            <KvGradient />
          </KvItemContainer>
        </KvItemContainerWrapper>
        <KvBtnsWrapper>
          <KvBtns>
            <ImgBtn href="/fee/saikyo-plan/?l-id=ad_lp_uservoice_fee_saikyo-plan_01">
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/btn-kv-apply-sp.png`}
                  width="166"
                  height="36"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/btn-kv-apply-pc.png`}
                  width="275"
                  height="56"
                  alt="料金プランをもっと詳しく"
                />
              </picture>
            </ImgBtn>
            <ImgBtn href="/guide/application/?lid-r=ad_lp_uservoice_guide_application_01">
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/btn-kv-detail-sp.png`}
                  width="166"
                  height="36"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/btn-kv-detail-pc.png`}
                  width="275"
                  height="56"
                  alt="お申し込みはこちら"
                />
              </picture>
            </ImgBtn>
          </KvBtns>
        </KvBtnsWrapper>
        <h1>
          <KvSaikyo>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/ad/lp/uservoice/logo-shadow-sp.png`}
              width="367"
              height="115"
            />
            <img
              src={`${assets}img/ad/lp/uservoice/logo-shadow-pc.png`}
              width="584"
              height="166"
              alt="My Rakuten最強プラン"
            />
          </KvSaikyo>
        </h1>
        <ScrollHInt>
          <ScrollTxt>
            <img
              src={`${assets}img/ad/lp/uservoice/txt-scroll.png`}
              alt="SCROLL"
            />
          </ScrollTxt>
          <ScrollArrowWrapper>
            <ScrollArrow />
          </ScrollArrowWrapper>
        </ScrollHInt>
      </Kv>
      <div id="js-fixed-btn-trigger" />
      <ExpContet id="js-explain">
        <ExpContetInner
          data-ratid="ad_lp_uservoice_scroll-01_saikyo-plan"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <ExpSaikyoLogo
            src={`${assets}img/ad/lp/uservoice/saikyo-logo-w.png`}
            alt="Rakuten最強プラン"
          />
          <p className={`${Utils['Mt-pc-64']} ${Utils['Mt-32']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/img-txt-1-sp-240430.png`}
                width="220"
                height="347"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/img-txt-1-pc-240430.png`}
                width="790"
                height="399"
                alt="Rakuten最強プランはどれだけ使っても※1 2,980円／月（税込3,278円）　最強家族プログラム適用なら2,880円／月（税込3,168円）　使わない人は勝手に安くなる。あなたのライフスタイルに合わせて使い方は自由自在のプランです。　Rakuten最強プランを使いこなしている人たちの声を見てみましょう。"
              />
            </picture>
          </p>
          <MySaikyo
            src={`${assets}img/ad/lp/uservoice/my-saikyo.png`}
            alt="My Rakuten最強プラン"
            className={`${Utils['Mt-pc-64']} ${Utils['Mt-32']}`}
          />
          <p className={`${Utils['Mt-pc-40']} ${Utils['Mt-32']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/img-note-1-sp-240430.png`}
                width="325"
                height="28"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/img-note-1-pc-240430.png`}
                width="412"
                height="36"
                alt="※通話料等別　※1 公平なサービス提供または環境により速度低下する場合あり"
              />
            </picture>
          </p>
        </ExpContetInner>
      </ExpContet>
      <VoiceContet>
        <AdjustPad25
          data-ratid="ad_lp_uservoice_scroll-02_voice"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <VoiceHead
            src={`${assets}img/ad/lp/uservoice/voice.png`}
            alt="VOICE"
          />
          <p>
            <VoiceTxt
              src={`${assets}img/ad/lp/uservoice/txt-2.png`}
              alt="Rakuten最強プランユーザーに、リアルな声を聞いてみましょう。"
              className={`${Utils['Mt-pc-80']} ${Utils['Mt-32']}`}
            />
          </p>
        </AdjustPad25>
      </VoiceContet>
      <VoiceContetDecoration>
        <VoiceContet>
          <AdjustPad25>
            <p className={`${Utils['Mt-pc-80']} ${Utils['Mt-48']}`}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/baloon-1-sp.png`}
                  width="325"
                  height="585"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/baloon-1-pc.png`}
                  width="1002"
                  height="510"
                  alt="01 オフの日は、ゲームに動画…。永遠に楽しめちゃいます。 今田 美桜さん【20代・東京都】の場合"
                />
              </picture>
            </p>
            <p className={Utils['Mt-40']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/txt-voice-1-sp-240419.png`}
                  width="325"
                  height="460"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/txt-voice-1-pc-240419.png`}
                  width="1002"
                  height="339"
                  alt="休みの日は家にこもりっきり。ひたすらゲームをしたり、ドラマを見たり。普段は仕事で外にいることが多いのでお家のWi-Fiは契約してませんよ。どこにいても、スマホ１台で永遠に楽しめちゃうのが最高！家にいるときはテレビにネットつなぐのもRakuten最強プランです。"
                />
              </picture>
            </p>
          </AdjustPad25>
        </VoiceContet>
      </VoiceContetDecoration>
      <VoiceContetDecoration>
        <div className={`${Utils['Mt-80']} ${Utils['Mb-80']}`}>
          <PinkWaveTop className={Utils['Mt-pc-80']} />
          <BgPink className={Utils['Pb-80']}>
            <VoiceContet>
              <AdjustPad25
                data-ratid="ad_lp_uservoice_scroll-03_voice02"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <p>
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/baloon-2-sp.png`}
                      width="325"
                      height="584"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/baloon-2-pc.png`}
                      width="1002"
                      height="510"
                      alt="02 使い放題※1だから、リモート会議はずーっとテザリングで大丈夫。大澤 広務さん（仮名）【30代・東京都】の場合"
                    />
                  </picture>
                </p>
                <p className={Utils['Mt-40']}>
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/txt-voice-2-sp.png`}
                      width="325"
                      height="548"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/txt-voice-2-pc.png`}
                      width="1002"
                      height="387"
                      alt="出先での仕事が多く、リモート会議も多いためWi-Fiのあるカフェ探しが目標だった。やっと見つけても人がいっぱいなんてこともあるから、結構ストレス。データ量を制限なく使える※1 Rakuten最強プランは、テザリングでも使い放題。座れる場所さえあればどこでも仕事場になり、はかどっています。※1 公平なサービス提供または環境により速度低下する場合あり"
                    />
                  </picture>
                </p>
              </AdjustPad25>
            </VoiceContet>
          </BgPink>
          <PinkWaveBottom />
        </div>
      </VoiceContetDecoration>
      <VoiceContetDecoration>
        <VoiceContet>
          <AdjustPad25
            data-ratid="ad_lp_uservoice_scroll-04_voice03"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <p className={Utils['Mt-40']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/baloon-3-sp.png`}
                  width="325"
                  height="585"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/baloon-3-pc.png`}
                  width="1002"
                  height="510"
                  alt="03 データを使っても安い。使わなかったらもっと安い。無駄が嫌いな私にぴったり。河合 杏さん（仮名）【30代・滋賀県】の場合"
                />
              </picture>
            </p>
            <p className={Utils['Mt-40']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/txt-voice-3-sp.png`}
                  width="325"
                  height="518"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/txt-voice-3-pc.png`}
                  width="1002"
                  height="356"
                  alt="家計を悩ます毎月のスマホ代。子どももいるし、無駄は省いて安くしたい。Rakuten最強プランはもともと安いのに、あまり使わなかった月はもっと安くなるのが助かるよね。いちいち料金の見直しは面倒だし、勝手に安くなる、がポイント。浮いたお金で、家族でちょっと贅沢、しちゃおうかな。"
                />
              </picture>
            </p>
          </AdjustPad25>
        </VoiceContet>
      </VoiceContetDecoration>
      <VoiceContetDecoration>
        <div className={Utils['Mt-80']}>
          <PinkWaveTop />
          <BgPink className={Utils['Pb-80']}>
            <VoiceContet>
              <AdjustPad25
                data-ratid="ad_lp_uservoice_scroll-05_voice04"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <p>
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/baloon-4-sp-240322.png`}
                      width="325"
                      height="584"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/baloon-4-pc-240322.png`}
                      width="1002"
                      height="510"
                      alt="04 ギガを気にせず動画を見れるから、外で子どもがぐずりだした時も安心。高梨 歩さん（仮名）【30代・千葉県】の場合"
                    />
                  </picture>
                </p>
                <p className={Utils['Mt-40']}>
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/txt-voice-4-sp.png`}
                      width="325"
                      height="548"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/txt-voice-4-pc.png`}
                      width="1002"
                      height="387"
                      alt="アニメが大好きな娘。お出かけ中もアニメを見せるとルンルンで助かっていたけれど、気がつけば私のデータ消費量がとんでもないことに。Rakuten最強プランなら、データを気にせず好きなだけアニメを見せてあげられる！ママも子どももご機嫌に。私たちの育児に、データ無制限※1は心強い味方。※1 公平なサービス提供または環境により速度低下する場合あり"
                    />
                  </picture>
                </p>
              </AdjustPad25>
            </VoiceContet>
          </BgPink>
        </div>
      </VoiceContetDecoration>
      <VoiceContetDecoration>
        <PinkWaveBottom />
        <VoiceContet className={Utils['Mt-40']}>
          <AdjustPad25
            data-ratid="ad_lp_uservoice_scroll-06_voice05"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <p className={`${Utils['Mt-40']} ${Utils['Mt-pc-64']}`}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/baloon-5-sp.png`}
                  width="325"
                  height="585"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/baloon-5-pc.png`}
                  width="1002"
                  height="510"
                  alt="05 月末速度制限かかっている友だちに、テザリングさせてあげてます。 阿部 風磨さん（仮名）【20代・神奈川県】の場合"
                />
              </picture>
            </p>
            <p className={Utils['Mt-40']}>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/ad/lp/uservoice/txt-voice-5-sp-240419.png`}
                  width="325"
                  height="546"
                />
                <img
                  src={`${assets}img/ad/lp/uservoice/txt-voice-5-pc-240419.png`}
                  width="1002"
                  height="424"
                  alt="SNSもYouTubeもTikTokも僕らの日常には欠かせないから、データ無制限※1でこの安さはありがたい！知らない友だちはまだ毎月末、速度制限にイライラしてる。「テザリングさせて」はいいけれど、Rakuten最強プランに変えちゃいなよって勧めてます。学生に優しいRakuten最強プラン。※1 公平なサービス提供または環境により速度低下する場合あり"
                />
              </picture>
            </p>
          </AdjustPad25>
        </VoiceContet>
      </VoiceContetDecoration>
      <div className={`${Utils['Mt-80']} ${Utils['Mb-80']}`}>
        <AboutBg>
          <AboutContent>
            <AboutWaveWhite />
            <div
              className={`${Utils['Pb-pc-80']} ${Utils['Pb-32']}`}
              data-ratid="ad_lp_uservoice_scroll-07_saikyo-plan02"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <AboutSaikyoLogo
                src={`${assets}img/ad/lp/uservoice/saikyo-logo-w.png`}
                alt="Rakuten最強プラン"
              />
              <p>
                <AboutSaikyoContent>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${assets}img/ad/lp/uservoice/about-sp.png`}
                    width="325"
                    height="545"
                  />
                  <img
                    src={`${assets}img/ad/lp/uservoice/about-pc.png`}
                    width="790"
                    height="956"
                    alt="使わなければ勝手に安くなるおトクなワンプラン。「最強家族プログラム」適用後100円/月（税別）引きで、20GB超過後無制限※2,880円/月（税込3,168円）、3GB超過後20GBまで1,880円/月（税込2,068円）、3GBまで880円/月（税込968円）"
                  />
                </AboutSaikyoContent>
              </p>
              <p className={`${Utils['Mt-pc-56']} ${Utils['Mt-24']}`}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${assets}img/ad/lp/uservoice/img-note-2-sp-240430.png`}
                    width="267"
                    height="60"
                  />
                  <img
                    src={`${assets}img/ad/lp/uservoice/img-note-2-pc-240430.png`}
                    width="440"
                    height="99"
                    alt="※1 公平なサービス提供または環境により速度低下する場合あり ※2 最強家族プログラム適用で100円（税別）割引の料金。通話料等別"
                  />
                </picture>
              </p>
              <AboutBtns className={`${Utils['Mt-pc-56']} ${Utils['Mt-24']}`}>
                <ImgBtn href="/fee/saikyo-plan/?l-id=ad_lp_uservoice_fee_saikyo-plan_02">
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/btn-about-detail-sp.png`}
                      width="275"
                      height="46"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/btn-about-detail-pc.png`}
                      width="356"
                      height="56"
                      alt="料金プランをもっと詳しく"
                    />
                  </picture>
                </ImgBtn>
                <ImgBtn href="/fee/simulation/?l-id=ad_lp_uservoice_fee_simulation">
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/ad/lp/uservoice/btn-about-sim-sp.png`}
                      width="275"
                      height="46"
                    />
                    <img
                      src={`${assets}img/ad/lp/uservoice/btn-about-sim-pc.png`}
                      width="356"
                      height="56"
                      alt="料金シュミレーションはこちら"
                    />
                  </picture>
                </ImgBtn>
              </AboutBtns>
            </div>
          </AboutContent>
        </AboutBg>
        <NotYetBg
          data-ratid="ad_lp_uservoice_scroll-08_saikyo-plan03"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <p>
            <picture className={`${Utils['Mt-pc-0']} ${Utils['Mt-32']}`}>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/not-yet-pc.png`}
                width="275"
                height="100"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/not-yet-sp.png`}
                width="460"
                height="167"
                alt="まだ、Rakuten最強プランじゃないの？"
              />
            </picture>
          </p>
          <UsersImg className={`${Utils['Mt-pc-80']} ${Utils['Mt-40']}`}>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/ad/lp/uservoice/users-sp.png`}
            />
            <img
              src={`${assets}img/ad/lp/uservoice/users-pc.png`}
              width="100%"
              alt="今田 美桜さんの写真 大澤 広務さんの写真 河合 杏さんの写真 高梨 歩さんの写真 阿部 風磨さんの写真"
            />
          </UsersImg>
          <NotYetLogo
            src={`${assets}img/ad/lp/uservoice/saikyo-logo-m.png`}
            alt="Rakuten最強プラン"
            className={`${Utils['Mt-pc-80']} ${Utils['Mt-40']} ${Utils['Mb-pc-80']} ${Utils['Mb-48']}`}
          />
        </NotYetBg>
        <PinkWaveBottom />
        <div
          className={`${Utils['Align-center']} ${Utils['Mt-40']} ${Utils['Mb-pc-80']} ${Utils['Mb-48']}`}
        >
          <ImgBtn href="/cm/?l-id=ad_lp_uservoice_cm">
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/btn-cm-sp.png`}
                width="275"
                height="46"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/btn-cm-pc.png`}
                width="304"
                height="56"
                alt="CMギャラリーはこちら"
              />
            </picture>
          </ImgBtn>
        </div>
      </div>
      <PopAskHeading
        id="popask-txt"
        className={`${Utils['Align-center']} ${Utils['Mt-pc-80']} ${Utils['Mt-40']}`}
      >
      </PopAskHeading>
      <div>
        <GuidePopAsk
          config={configTxt}
          className={Utils['Mt-0']}
          version="2.1.0"
        />
        <PopAskIndex id="popask-index">
        </PopAskIndex>
      </div>
      <GlobalFooter className={`${Utils['Mt-pc-80']} ${Utils['Mt-48']}`} />
      <FixedBtnWrapper id="fixed-btn">
        <FixedBtnContent>
          <FixedBtn href="/fee/saikyo-plan/?l-id=ad_lp_uservoice_fee_saikyo-plan_03">
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/btn-kv-apply-sp.png`}
                width="150"
                height="35"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/btn-kv-apply-pc.png`}
                width="275"
                height="56"
                alt="料金プランをもっと詳しく"
              />
            </picture>
          </FixedBtn>
          <FixedBtn href="/guide/application/?lid-r=ad_lp_uservoice_guide_application_02">
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/uservoice/btn-kv-detail-sp.png`}
                width="150"
                height="35"
              />
              <img
                src={`${assets}img/ad/lp/uservoice/btn-kv-detail-pc.png`}
                width="275"
                height="56"
                alt="お申し込みはこちら"
              />
            </picture>
          </FixedBtn>
        </FixedBtnContent>
      </FixedBtnWrapper>
      <FooterBttomPadding
        data-ratid="ad_lp_uservoice_scroll-00_logo"
        data-ratevent="appear"
        data-ratparam="all"
      />
    </>
  )
}

export default AdLpUserVoice
