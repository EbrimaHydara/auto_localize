import type { NextPage } from 'next'
import React, { useState, useContext } from 'react'
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
import { ButtonRegular, ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { IconChevronRight, IconNewTabLine } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { Modal } from '@components/atoms/Modal'

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
const SearchWordCopyWrap = styled.div`
  border-top: 1px solid ${props => props.theme.colors.monotone56};
  margin-top: 24px;
  padding-top: 24px;
  text-align: center;
`
const SearchWordCopyBox = styled.div`
  display: flex;
  max-width: 416px;
  margin: 16px auto 0;
  box-shadow: 0px 3.36px 0px 0px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: bold;
`
const SearchWordCopyTxt = styled.span`
  width: 254px;
  padding: 10px 16px;
  border: 1px solid ${props => props.theme.colors.monotone56};
  background-color: ${props => props.theme.colors.white};
`
const SearchWordCopyBtn = styled.button`
  width: 162px;
  padding: 10px 16px;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`

const CampaignNbaApp: NextPage = () => {
  const theme = useContext(ThemeContext)
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

  const featureItems = [
    {
      img: 'img-about-01',
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

  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => setIsExpanded(!isExpanded)

  const SearchWordCopy = () => {
    const searchText = '楽天モバイル　NBA'
    const copyToClipboard = async () => {
      await global.navigator.clipboard.writeText(searchText)
      toggleExpanded()
    }
    return (
      <>
        <SearchWordCopyWrap>
          <TxtEmp01 as="p">NBA Rakutenにお申し込みする</TxtEmp01>
          <p className={Utils['Mt-8']}>
            「 楽天モバイル　NBA 」をWebで検索してください
          </p>
          <SearchWordCopyBox>
            <SearchWordCopyTxt>楽天モバイル　NBA</SearchWordCopyTxt>
            <SearchWordCopyBtn onClick={() => copyToClipboard()}>
              コピーする
            </SearchWordCopyBtn>
          </SearchWordCopyBox>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ボタンを押してもコピーできない場合、手入力で検索してください
          </TxtCap>
        </SearchWordCopyWrap>
        <Modal flag={isExpanded} switchFlag={toggleExpanded}>
          <div className={Utils['Align-center']}>
            <TxtSize size="m">
              <TxtEmp01>検索ワードをコピーしました</TxtEmp01>
            </TxtSize>
            <p className={Utils['Mt-16']}>
              Webでペーストして検索し、お申し込みページにアクセスしてください
            </p>
          </div>
        </Modal>
      </>
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

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="楽天モバイルご契約者様ならNBAが全試合が無料で観られる。日本人選手も活躍する世界最高峰のバスケリーグを楽しもう！"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

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

          <div className={`${Utils['Align-center']} ${Utils['Mt-48']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application/?lid-r=campaign_nba-app_f_guide_application_01"
            >
              楽天モバイルのお申し込み
            </ButtonPrimaryLarge>
          </div>

          <SearchWordCopy />

          <Heading
            level="2"
            className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
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
          >
            NBA LEAGUE PASS for 楽天モバイルご利用の流れ
          </Heading>
          <Tab
            className={Utils['Mt-24']}
            heading1={'新規お申し込みの方'}
            id1="tab1"
            id2="tab2"
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
                            <IconChevronRight className={Utils['Ml-16']} />
                          </LinkIconAfter>
                        </li>
                        <li>楽天会員ID、パスワード</li>
                        <li>
                          <LinkIconAfter href="/guide/payment/">
                            クレジットカード、銀行口座情報
                            <IconChevronRight className={Utils['Ml-16']} />
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
                        <LinkNormal href="/flow/for-minors/">こちら</LinkNormal>
                      </TxtCap>
                    </div>
                  </MediaGrid>
                  <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                    <ButtonPrimaryLarge
                      as="a"
                      href="/guide/application/?lid-r=campaign_nba-app_f_guide_application_02"
                    >
                      楽天モバイルのお申し込み
                    </ButtonPrimaryLarge>
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
                      <AccordionEmpTxt>NBA Rakutenのご利用登録</AccordionEmpTxt>
                    </>
                  }
                  isOpened={false}
                  className={Utils['Mt-24']}
                  step={true}
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
                  <SearchWordCopy />
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
                      <AccordionEmpTxt>NBA Rakutenのご利用登録</AccordionEmpTxt>
                    </>
                  }
                  isOpened={false}
                  className={Utils['Mt-24']}
                  step={true}
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
                  <SearchWordCopy />
                </AccordionListEmp>
              </>
            }
          />

          <Heading
            level="2"
            className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
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
                        ログイン後、プロフィール内の購入履歴から視聴可否を確認。
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

          <Heading
            level="2"
            className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
          >
            楽天モバイルのご紹介
          </Heading>
          <div className={Utils['Mt-24']}>
            <CommonSaikyo />
          </div>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignNbaApp
