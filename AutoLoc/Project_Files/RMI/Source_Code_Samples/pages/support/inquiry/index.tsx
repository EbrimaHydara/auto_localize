import type { NextPage } from 'next'
import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react'
import { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
/* お知らせエリア。新規追加された時用に残しています
import {
  AttentionBody,
  AttentionContainer,
  AttentionIconInfo,
  AttentionInfo,
} from '@components/atoms/Attention'
*/
import { Heading } from '@components/atoms/Heading'
import { Tab } from '@components/atoms/Tab'
import { IconNewTabLine } from '@components/icons'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { AccordionList } from '@components/atoms/AccordionList'
import { ButtonRegular, ButtonRegularLarge } from '@components/atoms/Buttons'
import { BannerHover } from '@components/atoms/Banner'
import { FrequentlyAskedFaq } from '@components/fragment/support/inquiry/FrequentlyAskedFaq'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { ResolutionTime } from '@components/category/Support'
import { MediaGridHalf } from '@components/layout/Media'
// import { MyRakutenAppVerchical } from '@components/include/common/MyRakutenAppVerchical'
import { getJapanDate } from '@components/utils/getJapanDate'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { SupportCommunity } from '@components/include/support/SupportCommunity'
import { SupportTrouble } from '@components/fragment/support/inquiry/SupportTrouble'
import { SupportSurveyBnr } from '@components/include/common/SupportSurveyBnr'
import { scroller } from 'react-scroll'

const SupportInquiryTab = styled(Tab)`
  position: relative;
  > ul {
    max-width: 1064px;
    margin-inline: auto;
    padding: 0 16px;
    border-bottom: none;
  }
  > div {
    padding: 32px 0 48px;
    background-color: #fef9f2;
    border-top: solid 3px ${props => props.theme.colors.primary};
    ${mixins.mq.MinL} {
      padding: 32px 0 64px;
    }
  }
`
const BoxWWhite = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 24px 16px;
  ${mixins.mq.MinL} {
    padding: 32px;
  }
`
const GridHalf = styled(MediaGridHalf)`
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    ${mixins.mq.MinL} {
      width: calc(536 / 968 * 100%);
    }
  }
  & > div:last-child {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 0;
      width: calc(400 / 968 * 100%);
    }
    a {
      width: 100%;
    }
  }
  > span {
    ${mixins.mq.MaxM} {
      margin-top: 16px;
      display: inline-block;
    }
  }
`
const InfoboxTxt = styled.p`
  margin-top: 16px;
  ${mixins.mq.MinL} {
    display: inline-flex;
    margin-top: 0;
    margin-left: 16px;
  }
`
const InfoboxComment = styled.p`
  display: inline-flex;
`
const MediaBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 24px;
  }
`
const MediaBoxIcon = styled.div`
  width: 96px;
  margin-right: 16px;
  ${mixins.mq.MinL} {
    width: 120px;
    margin-right: 24px;
  }
`
const MediaBoxTxt = styled.p`
  width: calc(100% - 112px);
  ${mixins.mq.MinL} {
    width: calc(100% - 144px);
  }
`
const MediaBoxButtonRegular = styled(ButtonRegular)`
  ${mixins.mq.MinL} {
    width: 340px;
  }
`

const BorderBox = styled.div`
  margin-top: 48px;
  width: 100%;
  ${mixins.mq.MinL} {
    margin: 32px auto 0;
    border: 1px solid ${props => props.theme.colors.monotone75};
    max-width: 856px;
    text-align: center;
    padding: 32px 0;
    &:first-child {
      margin-top: 56px;
    }
  }
`
const BottomButton = styled.div`
  margin-top: 24px;
  ${mixins.mq.MinL} {
    margin-top: 56px;
  }
`
const LinkTel = styled(LinkNormal)`
  font-size: ${props => props.theme.fonts.m};
  line-height: 1.4;
`
const CustomFrequentlyAskedFaq = styled(FrequentlyAskedFaq)`
  div:nth-child(2) {
    padding: 0;
  }
`
const ShopBox = styled(BoxWWhite)`
  display: grid;
  grid-template-areas:
    'title'
    'text'
    'button';
  grid-template-columns: auto;
  grid-template-rows: 70px 72px auto;
  gap: 16px;

  ${mixins.mq.MinL} {
    grid-template-areas:
      'title .'
      'text button';
    grid-template-columns: auto 250px;
    grid-template-rows: 34px 48px;
    gap: 24px 104px;
  }

  > .item1 {
    grid-area: title;
  }
  > .item2 {
    grid-area: text;
  }
  > .item3 {
    grid-area: button;
    > a {
      padding: 12px 24px;
      ${mixins.mq.MaxM} {
        margin-top: 16px;
      }
    }
  }
`
type PatternData = {
  href: string
  ratId: string
  imagePath: string
  alt: string
}
type BannerPatternData = {
  setting: PatternData
  point: PatternData
  'usage-details': PatternData
  payment: PatternData
}

const SupportInquiry: NextPage = () => {
  const router = useRouter()
  const query: ParsedUrlQuery = router.query
  const pitariRef = useRef(null)
  const [patternData, setPatternData] = useState<PatternData | null>(null)
  const [observerTriggered, setObserverTriggered] = useState(false)
  const [pitariStatus, setPitariStatus] = useState<string>('')
  const [isOutsideBusinessHours] = useState(false)
  const [isLoadConditionScript, setIsLoadConditionScript] = useState(false)
  const [isBannerPatternInit, setIsBannerPatternInit] = useState(false)
  const [tabArray, setTabArray] = useState<number[]>([])
  const theme = useContext(ThemeContext)
  const pagetitle = 'お問い合わせ'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const sectionTitle = '解決方法を探す'
  const sectionText =
    'Webでもお困りごとが解決できます。よく見られているご質問や、お客様サポートページをご確認ください。'

  const tabListParameters = useMemo(() => ['tab-menu1', 'tab-menu2'], [])
  const processDateAndphxPattern = useCallback(
    (currentJapanDate: number, phxPattern: string | null) => {
      let dateType: keyof BannerPatternData
      if (phxPattern === 'non_mno_holder') {
        // 「開通中/開通当日/未契約/解約済み」ステータス
        dateType = 'setting' //開通方法
      } else if (currentJapanDate >= 1 && currentJapanDate <= 3) {
        // 毎月1～3日
        dateType = 'point' //CPポイント確認方法
      } else if (currentJapanDate >= 4 && currentJapanDate <= 19) {
        // 毎月4～19日
        dateType = 'usage-details' //請求内訳確認方法
      } else if (currentJapanDate >= 20 && currentJapanDate <= 31) {
        // 毎月20～月末
        dateType = 'payment' //支払い状況確認方法
      } else {
        dateType = 'setting' //開通方法
      }

      const getBannerPattern = (dateType: keyof BannerPatternData) => {
        const bannerPatternData: BannerPatternData = {
          setting: {
            href: 'https://r10.to/hUdAEV',
            ratId: 'support_inquiry_bnr_setting_b',
            imagePath: 'bnr-setting-b',
            alt: '各種製品の初期設定方法をご案内します',
          },
          point: {
            href: 'https://r10.to/huD6Z8',
            ratId: 'support_inquiry_bnr_point_a',
            imagePath: 'bnr-point-a',
            alt: '獲得予定ポイントをご案内します',
          },
          'usage-details': {
            href: 'https://r10.to/hUdAMA',
            ratId: 'support_inquiry_bnr_usage-details_a',
            imagePath: 'bnr-usage-details-a',
            alt: '各種明細の確認方法をご案内します',
          },
          payment: {
            href: 'https://r10.to/h6RqP7',
            ratId: 'support_inquiry_bnr_payment_b',
            imagePath: 'bnr-payment-b',
            alt: '料金の支払い状況をご案内します',
          },
        }

        return bannerPatternData[dateType]
      }

      const bannerPattern = getBannerPattern(dateType)
      setPatternData(bannerPattern)
    },
    [],
  )

  const launchNDEPChat = () => {
    window.Inq?.fireCustomEvent('NDEPembeddedChat')
  }

  /**
   * NDEPチャットのボタンの切り替え
   * 営業時間内ではアクティブ、営業時間外では非アクティブ
   * 現在は24時間体制なので、一旦コメントアウト
   */
  // useEffect(() => {
  //   const currentJapanTime: number = getJapanDate('hours')
  //   if (currentJapanTime < 9 || currentJapanTime >= 23) {
  //     setIsOutsideBusinessHours(true)
  //   }
  // }, [])
  // Create or Load SessionID for DeepQA>>>

  useEffect(() => {
    const handleScriptEvent = () => {
      const phoenixScript = document.createElement('script')
      phoenixScript.src = 'https://r.r10s.jp/com/ap/target/phoenix-2.9.0.min.js'
      document.body.appendChild(phoenixScript)
      setIsLoadConditionScript(true)
    }

    const conditionScript = document.createElement('script')
    conditionScript.src =
      '//www.rakuten.co.jp/com/advance/mobile/mnoprj_support-inquiry_banner_ab/responsive/condition.js'
    conditionScript.onload = handleScriptEvent
    conditionScript.onerror = handleScriptEvent
    document.body.appendChild(conditionScript)
  }, [])

  const scrollToHash = useCallback(() => {
    const hash = window.location.hash
    if (hash) {
      const hashValue = hash.substring(1)
      if (hashValue === 'inquiry1' || hashValue === 'inquiry2') {
        scroller.scrollTo(hashValue, {
          smooth: false,
        })
      }
    }
  }, [])

  useEffect(() => {
    // pitariのずれを検知するため念の為残し
    scrollToHash()
  }, [pitariStatus, scrollToHash])

  useEffect(() => {
    const urlParameter = window.location.search
    const urlParameterToSearch = new URLSearchParams(urlParameter)
    const isTabParameter = urlParameterToSearch.has('tab-list')
    if (isLoadConditionScript) {
      const element = pitariRef.current
      let timeoutId: string | number | NodeJS.Timeout | null | undefined
      let currentJapanDate: number = getJapanDate('date')

      if (element) {
        const getParameter = (): string => {
          if (query['abtest-banner']) {
            const abtestBanner = query['abtest-banner']
            const dateLocationSearch = query['abtest-date']
            if (dateLocationSearch && dateLocationSearch !== null) {
              currentJapanDate = parseInt(dateLocationSearch as string, 10)
            }

            return abtestBanner as string
          }

          return element['value']
        }

        setPitariStatus(getParameter())

        const bannerPatternInit = () => {
          if (currentJapanDate) {
            processDateAndphxPattern(currentJapanDate, pitariStatus)
            setIsBannerPatternInit(true)
          }
        }

        const currentTabInit = () => {
          if (pitariStatus === 'mno_holder' || pitariStatus === 'default') {
            setTabArray([1, 0, 0])
          } else if (pitariStatus === 'non_mno_holder') {
            setTabArray([0, 1, 0])
          }
        }

        const config = {
          attributes: true,
          attributeFilter: ['value'],
        }

        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.type === 'attributes') {
              bannerPatternInit()
              !isTabParameter && currentTabInit()
              if (timeoutId !== null) {
                clearTimeout(timeoutId as number)
              }
              setObserverTriggered(true)
              observer.disconnect()
            }
          })
        })

        const timeoutPromise = new Promise<void>(resolve => {
          timeoutId = setTimeout(() => {
            resolve()
          }, 1000)
        })

        const checkTimeout = async () => {
          await timeoutPromise
          if (!observerTriggered) {
            bannerPatternInit()
            !isTabParameter && currentTabInit()
          }
        }

        if (element['value'] !== '') {
          bannerPatternInit()
          !isTabParameter && currentTabInit()
        } else {
          observer.observe(element, config)
          checkTimeout()
        }
      }
    }
  }, [
    pitariStatus,
    isLoadConditionScript,
    observerTriggered,
    processDateAndphxPattern,
    query,
  ])

  useEffect(() => {
    if (isBannerPatternInit && window.RAT && window.RAT.bindAppear) {
      const $newElementsToTrack =
        pitariStatus === 'non_mno_holder'
          ? '#js-banner-non-mno'
          : '#js-banner-mno'
      const appearBanner = window.RAT.$Selector($newElementsToTrack)
      appearBanner.off('appear')
      window.RAT.bindAppear(appearBanner)
    }
  }, [isBannerPatternInit, pitariStatus])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのお問い合わせ窓口や、よく見られているご質問をご案内いたします。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        {/* お知らせエリア。新規追加された時用に残しています
        <AttentionInfo>
          <AttentionContainer>
            <AttentionIconInfo />
            <AttentionBody>
              <LinkNormal href="/information/maintenance/2478/?l-id=support_inquiry_information_maintenance_2478">
                【完了】チャット相談窓口システムメンテナンスのお知らせ（10月23日午前9時00分時点）
              </LinkNormal>
            </AttentionBody>
          </AttentionContainer>
        </AttentionInfo>
        */}
        <SystemContainer className="block">
          <Heading level="1" className={Utils['Mt-32']}>
            {pagetitle}
          </Heading>
          <p className={Utils['Mt-16']}>
            お困りごとの解決方法や、各種お問い合わせ窓口をご案内いたします。
          </p>
        </SystemContainer>

        <SupportInquiryTab
          className={Utils['Mt-48']}
          heading1={'ご利用中の方'}
          id1="tab-menu1"
          pitari={tabArray}
          history="tabHistory_support_contractStatus"
          tabListParameters={tabListParameters}
          ratId1="support_top_tab_member"
          content1={
            <SystemContainer>
              <SupportSurveyBnr
                className={Utils['Align-center']}
                lid="support_inquiry_campaign_support-survey"
              />
              <noscript>
                <div className={Utils['Mt-24']}>
                  <BannerHover href="/guide/payment/usage-details/?l-id=support_inquiry_id_a">
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/support/inquiry/bnr-usage-details-a-sp-230712.png`}
                        width="656"
                        height="216"
                      />
                      <img
                        src={`${assets}img/support/inquiry/bnr-usage-details-a-pc-230712.png`}
                        width="768"
                        height="112"
                        alt=""
                      />
                    </picture>
                  </BannerHover>
                </div>
              </noscript>
              {patternData &&
                (pitariStatus === 'mno_holder' ||
                  pitariStatus === 'default') && (
                  <div
                    id="js-banner-mno"
                    className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                    data-ratid={patternData.ratId}
                    data-ratevent="appear"
                    data-ratparam="all"
                  >
                    {patternData?.href && (
                      <BannerHover href={patternData.href}>
                        <picture>
                          <source
                            media={`(max-width: ${theme.max.m})`}
                            srcSet={`${assets}img/support/inquiry/${patternData.imagePath}-sp-230712.png`}
                            width="656"
                            height="216"
                          />
                          <img
                            src={`${assets}img/support/inquiry/${patternData.imagePath}-pc-230712.png`}
                            width="768"
                            height="112"
                            alt={patternData.alt}
                          />
                        </picture>
                      </BannerHover>
                    )}
                  </div>
                )}
              <Heading level="2" className={Utils['Mt-24']}>
                {sectionTitle}
              </Heading>
              <p className={Utils['Mt-8']}>{sectionText}</p>
              <CustomFrequentlyAskedFaq
                className={Utils['Mt-24']}
                status="member"
                callbackAfterFramePaint={() => scrollToHash()}
              />

              <SupportTrouble className={Utils['Mt-64']} status="member" />

              <SupportCommunity
                className={Utils['Mt-64']}
                rat="support_inquiry_community"
              />

              <Heading level="2" id="inquiry1" className={Utils['Mt-64']}>
                お問い合わせ窓口
              </Heading>

              <MediaGridHalf>
                <BoxWWhite className={Utils['Mt-24']}>
                  <Heading level="3">
                    製品の交換・修理に関するお問い合わせ
                  </Heading>
                  <MediaBox>
                    <MediaBoxIcon>
                      <img
                        src={`${assets}img/support/img-repair-240426.png`}
                        alt=""
                      />
                    </MediaBoxIcon>
                    <MediaBoxTxt>
                      製品の不具合やお困りごとを選んでいくだけで解決方法をご案内します。解決しない場合、加入されている保証サービスのご利用方法や交換・修理についてご案内します。
                    </MediaBoxTxt>
                  </MediaBox>
                  <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                    <MediaBoxButtonRegular
                      href="/guide/trouble-check/?l-id=support_inquiry_member_guide_trouble-check_member_s-1-1#/member/s-1-1"
                      target="_blank"
                      as="a"
                    >
                      製品の交換・修理に関する
                      <br />
                      お問い合わせに進む
                    </MediaBoxButtonRegular>
                  </div>
                </BoxWWhite>
                <BoxWWhite className={Utils['Mt-24']}>
                  <Heading level="3">
                    楽天回線の電波改善要望・調査のご依頼
                  </Heading>
                  <MediaBox>
                    <MediaBoxIcon>
                      <img src={`${assets}img/support/img-wave.png`} alt="" />
                    </MediaBoxIcon>
                    <MediaBoxTxt>
                      楽天回線が繋がりづらいなど、電波改善のご要望は以下のフォームよりご意見・ご要望をお聞かせください。
                    </MediaBoxTxt>
                  </MediaBox>
                  <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                    <MediaBoxButtonRegular
                      href="/inquiry/input.html?l-id=support_inquiry_member_inquiry_input"
                      target="_blank"
                      as="a"
                    >
                      電波改善・調査専用フォームに
                      <br className={Utils['Disp-tb-sp']} />
                      入力する
                    </MediaBoxButtonRegular>
                  </div>
                </BoxWWhite>
              </MediaGridHalf>

              <BoxWWhite className={Utils['Mt-24']}>
                <GridHalf>
                  <Heading level="3">チャットでお問い合わせ</Heading>
                  <ResolutionTime as="span">
                    <TxtEmp02>解決の目安…約15分</TxtEmp02>
                  </ResolutionTime>
                </GridHalf>
                <GridHalf className={Utils['Mt-16']}>
                  <div>
                    <TxtEmp01 as="p">営業時間 9:00〜23:00</TxtEmp01>
                    <div className={Utils['Mt-16']}>
                      <TxtCap as='p'>
                        ※チャット相談のご利用にはmy 楽天モバイルへのログインが必要です。
                      </TxtCap>
                      <TxtCap as='p'>
                        ※Rakuten Casaに関するお問い合わせは9:00～18:00までとなります。
                      </TxtCap>
                      <TxtCap as='p'>
                        ※営業時間外にいただいたお問い合わせは、AIアシスタントが回答いたします。
                      </TxtCap>
                    </div>
                  </div>
                  <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                    <ButtonRegularLarge
                      href="https://portal.mobile.rakuten.co.jp/technical-operation?action=supportChat"
                      as="a"
                      data-ratid="support_inquiry_inquiry_chat"
                      data-ratevent="click"
                      data-ratparam="all"
                      onClick={launchNDEPChat}
                      id="chat01"
                    >
                      チャット相談を利用する
                    </ButtonRegularLarge>
                  </div>
                </GridHalf>
                {/* <AccordionList
                  text={'公式アプリ「my 楽天モバイル」'}
                  isOpened={false}
                  className={Utils['Mt-24']}
                >
                  <MyRakutenAppVerchical
                    subTxt="空き時間で気軽にお問い合わせ"
                    iconSize="96"
                    btnLid="support_inquiry_guide_my-rakuten-mobile"
                    appRat={[
                      'support_inquiry_myrakuten_google',
                      'support_inquiry_myrakuten_apple',
                    ]}
                    webRmRat="support_inquiry_my-rakuten-mobile"
                    lazy={true}
                  />
                </AccordionList> */}
              </BoxWWhite>

              <BoxWWhite className={Utils['Mt-24']}>
                <GridHalf>
                  <Heading level="3">電話でお問い合わせ</Heading>
                  <ResolutionTime as="span">
                    <TxtEmp02>解決の目安…約25分</TxtEmp02>
                  </ResolutionTime>
                </GridHalf>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※電話番号のおかけ間違いにより、一般の方へご迷惑をおかけする事象が発生しております。お掛け間違いのないようお願い申し上げます。
                </TxtCap>

                <AccordionList
                  text={'お申し込み後～初期設定でお困りの方'}
                  isOpened={false}
                  className={Utils['Mt-24']}
                >
                  <LinkTel
                    href="tel:0800-600-0700"
                    data-ratid="faq_tel_04"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0700
                  </LinkTel>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>
                      申し込み内容のお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>通話料無料
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      営業時間外は、「最近よくあるご質問リンク集」のご案内をショートメッセージにて送付しております。ぜひご利用ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList
                  text={'楽天モバイル（Rakuten最強プラン）をご利用中の方'}
                  isOpened={false}
                >
                  <LinkTel
                    href="tel:050-5434-4653"
                    data-ratid="faq_tel_06"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4653
                  </LinkTel>
                  <InfoboxComment>（有料 ※1）</InfoboxComment>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※1</span> Rakuten
                      Linkからの通話は、通話料無料。通話かけ放題オプションサービス加入による対象時間内の通話は、通話料が発生しません。詳しくは
                      <LinkNormal href="/service/#service-list">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      契約内容や請求などのお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      営業時間外は、「最近よくあるご質問リンク集」のご案内をショートメッセージにて送付しております。ぜひご利用ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList
                  text={'盗難・紛失／利用停止・再開'}
                  isOpened={false}
                >
                  <LinkTel
                    href="tel:0800-600-0500"
                    data-ratid="faq_tel_07"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0500
                  </LinkTel>
                  <InfoboxTxt>営業時間：24時間（年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>
                      お問い合わせはご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>通話料無料
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'海外からのお問い合わせ'} isOpened={false}>
                  <LinkTel
                    href="tel:050-5434-4633"
                    data-ratid="faq_tel_08"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4633
                  </LinkTel>
                  <InfoboxTxt>
                    発信する国・地域ごとに所定の通話料が発生します。※1
                  </InfoboxTxt>
                  <InfoboxTxt>営業時間：24時間（年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※1</span> 発信する国・地域ごとの通話料は
                      <LinkNormal href="/guide/international-call/overseas/?tab-list=tab-menu6#global">
                        こちら
                      </LinkNormal>
                      をご確認ください。Rakuten
                      LinkやViberからの通話は、通話料無料。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      お問い合わせはご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'未払い料金に関して'} isOpened={false}>
                  <LinkTel
                    href="tel:050-5434-4653"
                    data-ratid="faq_tel_09"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4653
                  </LinkTel>
                  <InfoboxComment>（有料 ※1）</InfoboxComment>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※1</span> Rakuten
                      Linkからの通話は、通話料無料。通話かけ放題オプションサービス加入による対象時間内の通話は、通話料が発生しません。詳しくは
                      <LinkNormal href="/service/#service-list">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      契約内容や請求などのお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'Rakuten Turboに関して'} isOpened={false}>
                  <LinkTel
                    href="tel:0800-805-0040"
                    data-ratid="faq_tel_12"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0040
                  </LinkTel>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>
                      契約内容や請求などのお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>通話料無料
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'English Support'} isOpened={false}>
                  <LinkTel
                    href="tel:0800-805-0805"
                    data-ratid="faq_tel_11"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0805
                  </LinkTel>
                  <InfoboxTxt>
                    Business hour : 9:00-5:00pm
                    <br className={Utils['Disp-tb-sp']} />
                    （open 365 days）
                  </InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>*</span>Inquiries regarding contract details and
                      claims should be made by the contract holder themselves.
                      For anyone else, please review the information{' '}
                      <LinkNormal href="/faq/detail/10000774/">here</LinkNormal>{' '}
                      prior to making inquiries.
                    </TxtCap>
                    <TxtCap as="li">
                      <span>*</span>The conversation might take place as a
                      three-way call with you, our customer service staff, and
                      the phone interpreter. (An interpretation is free of
                      charge)
                    </TxtCap>
                  </ul>
                </AccordionList>
              </BoxWWhite>

              <ShopBox className={Utils['Mt-24']}>
                <Heading level="3" className="item1">
                  お近くのショップでお問い合わせ
                </Heading>
                <p className="item2">
                  Webからお近くのショップ（店舗）に来店予約をして、直接スタッフへご相談いただけます。
                </p>
                <div className="item3">
                  <ButtonRegularLarge
                    href="/shop/?l-id=support_inquiry_member_shop#shop"
                    target="_blank"
                    as="a"
                  >
                    ショップ（店舗）を探す
                  </ButtonRegularLarge>
                </div>
              </ShopBox>
            </SystemContainer>
          }
          id2="tab-menu2"
          heading2={'ご利用開始前の方'}
          ratId2="support_top_tab_pre-member"
          content2={
            <SystemContainer>
              <Heading level="2">{sectionTitle}</Heading>
              <p className={Utils['Mt-8']}>{sectionText}</p>
              <CustomFrequentlyAskedFaq
                className={Utils['Mt-24']}
                status="premember"
                callbackAfterFramePaint={() => scrollToHash()}
              />
              <noscript>
                <div className={Utils['Mt-24']}>
                  <BannerHover href="/faq/detail/00002024/?l-id=support_inquiry_bnr_setting_a">
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/support/inquiry/bnr-setting-a-sp-230712.png`}
                        width="656"
                        height="216"
                      />
                      <img
                        src={`${assets}img/support/inquiry/bnr-setting-a-pc-230712.png`}
                        width="768"
                        height="112"
                        alt=""
                      />
                    </picture>
                  </BannerHover>
                </div>
              </noscript>
              {patternData && pitariStatus === 'non_mno_holder' && (
                <div
                  id="js-banner-non-mno"
                  className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                  data-ratid={patternData.ratId}
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  {patternData?.href && (
                    <BannerHover href={patternData.href}>
                      <picture>
                        <source
                          media={`(max-width: ${theme.max.m})`}
                          srcSet={`${assets}img/support/inquiry/${patternData.imagePath}-sp-230712.png`}
                          width="656"
                          height="216"
                        />
                        <img
                          src={`${assets}img/support/inquiry/${patternData.imagePath}-pc-230712.png`}
                          width="768"
                          height="112"
                          alt={patternData.alt}
                        />
                      </picture>
                    </BannerHover>
                  )}
                </div>
              )}

              <SupportTrouble className={Utils['Mt-64']} status="premember" />

              <SupportCommunity
                className={Utils['Mt-64']}
                rat="support_inquiry_pre-member_community"
              />

              <Heading level="2" id="inquiry2" className={Utils['Mt-64']}>
                お問い合わせ窓口
              </Heading>
              <BoxWWhite className={Utils['Mt-24']}>
                <GridHalf>
                  <Heading level="3">チャットでお問い合わせ</Heading>
                  <ResolutionTime as="span">
                    <TxtEmp02>解決の目安…約15分</TxtEmp02>
                  </ResolutionTime>
                </GridHalf>
                <GridHalf className={Utils['Mt-16']}>
                  <div>
                    <TxtEmp01 as="p">営業時間 9:00〜23:00</TxtEmp01>
                    <ul className={Utils['Mt-8']}>
                      <TxtCap as="li">
                        <span>※</span>Rakuten
                        Casaに関するお問い合わせは9:00～18:00までとなります。
                      </TxtCap>
                      <TxtCap as="li">
                        <span>※</span>
                        営業時間外にいただいたお問い合わせは、AIアシスタントがご回答いたします。
                      </TxtCap>
                      <TxtCap as="li">
                        <span>※</span>
                        ボタンを押してもチャット画面が表示されない場合、画面右側に表示されているチャットのアイコンをタップしてください。
                      </TxtCap>
                    </ul>
                  </div>
                  <div>
                    <ButtonRegular
                      as="button"
                      data-ratid="support_inquiry_web_chat"
                      data-ratevent="click"
                      data-ratparam="all"
                      id="chat02"
                      aria-disabled={isOutsideBusinessHours}
                      onClick={launchNDEPChat}
                    >
                      チャット相談を利用する
                    </ButtonRegular>
                  </div>
                </GridHalf>
              </BoxWWhite>

              <BoxWWhite className={Utils['Mt-24']}>
                <GridHalf>
                  <Heading level="3">電話でお問い合わせ</Heading>
                  <ResolutionTime as="span">
                    <TxtEmp02>解決の目安…約25分</TxtEmp02>
                  </ResolutionTime>
                </GridHalf>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※電話番号のおかけ間違いにより、一般の方へご迷惑をおかけする事象が発生しております。お掛け間違いのないようお願い申し上げます。
                </TxtCap>

                <AccordionList
                  text={'新規／乗り換え（MNP）お申し込みを検討中の方'}
                  isOpened={false}
                  className={Utils['Mt-24']}
                >
                  <LinkTel
                    href="tel:0800-805-0090"
                    data-ratid="faq_tel_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0090
                  </LinkTel>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>通話料無料
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList
                  text={'お申し込み後～初期設定でお困りの方'}
                  isOpened={false}
                >
                  <LinkTel
                    href="tel:0800-600-0700"
                    data-ratid="faq_tel_04"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0700
                  </LinkTel>
                  <InfoboxComment>（有料 ※1）</InfoboxComment>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>
                      申し込み内容のお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      通話料無料
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      営業時間外は、「最近よくあるご質問リンク集」のご案内をショートメッセージにて送付しております。ぜひご利用ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'海外からのお問い合わせ'} isOpened={false}>
                  <LinkTel
                    href="tel:050-5434-4633"
                    data-ratid="faq_tel_08"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4633
                  </LinkTel>
                  <InfoboxTxt>
                    発信する国・地域ごとに所定の通話料が発生します。※1
                  </InfoboxTxt>
                  <InfoboxTxt>営業時間：24時間（年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※1</span> 発信する国・地域ごとの通話料は
                      <LinkNormal href="/guide/international-call/overseas/?tab-list=tab-menu6#global">
                        こちら
                      </LinkNormal>
                      をご確認ください。Rakuten
                      LinkやViberからの通話は、通話料無料。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>
                      お問い合わせはご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'Rakuten Turboに関して'} isOpened={false}>
                  <LinkTel
                    href="tel:0800-805-0040"
                    data-ratid="faq_tel_12"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0040
                  </LinkTel>
                  <InfoboxTxt>営業時間 : 9:00～17:00 （年中無休）</InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>※</span>
                      契約内容や請求などのお問い合わせは、ご契約者様ご本人よりお願いいたします。ご契約者様以外のお問い合わせは、事前に
                      <LinkNormal href="/faq/detail/10000563/">
                        こちら
                      </LinkNormal>
                      をご確認ください。
                    </TxtCap>
                    <TxtCap as="li">
                      <span>※</span>通話料無料
                    </TxtCap>
                  </ul>
                </AccordionList>
                <AccordionList text={'English Support'} isOpened={false}>
                  <LinkTel
                    href="tel:0800-805-0805"
                    data-ratid="faq_tel_11"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0805
                  </LinkTel>
                  <InfoboxTxt>
                    Business hour : 9:00-5:00pm
                    <br className={Utils['Disp-tb-sp']} />
                    （open 365 days）
                  </InfoboxTxt>
                  <ul className={Utils['Mt-8']}>
                    <TxtCap as="li">
                      <span>*</span>Inquiries regarding contract details and
                      claims should be made by the contract holder themselves.
                      For anyone else, please review the information{' '}
                      <LinkNormal href="/faq/detail/10000774/">here</LinkNormal>{' '}
                      prior to making inquiries.
                    </TxtCap>
                    <TxtCap as="li">
                      <span>*</span>The conversation might take place as a
                      three-way call with you, our customer service staff, and
                      the phone interpreter. (An interpretation is free of
                      charge)
                    </TxtCap>
                  </ul>
                </AccordionList>
              </BoxWWhite>

              <ShopBox className={Utils['Mt-24']}>
                <Heading level="3" className="item1">
                  お近くのショップでお問い合わせ
                </Heading>
                <p className="item2">
                  Webからお近くのショップ（店舗）に来店予約をして、直接スタッフへご相談いただけます。
                </p>
                <div className="item3">
                  <ButtonRegularLarge
                    href="/shop/?l-id=support_inquiry_member_shop#shop"
                    target="_blank"
                    as="a"
                  >
                    ショップ（店舗）を探す
                  </ButtonRegularLarge>
                </div>
              </ShopBox>
            </SystemContainer>
          }
        />

        <SystemContainer>
          <BorderBox>
            <Heading level="2">
              楽天グループのサービスに
              <br className={Utils['Disp-tb-sp']} />
              関するお問い合わせ
            </Heading>
            <p className={Utils['Mt-16']}>
              <LinkIconAfter
                href="https://www.rakuten.co.jp/sitemap/inquiry.html"
                target="_blank"
              >
                楽天グループ サービス一覧 | お問い合わせ
                <IconNewTabLine />
              </LinkIconAfter>
            </p>
          </BorderBox>
          <BorderBox>
            <Heading level="2">
              電気通信事業者協会
              <br className={Utils['Disp-tb-sp']} />
              相談窓口（TCA相談窓口）
            </Heading>
            <p className={Utils['Mt-16']}>
              当社が加盟する一般社団法人電気通信事業者協会では、通信サービス全般に関する
              <br className={Utils['Disp-pc']} />
              さまざまなご相談やお問い合わせ、
              <br className={Utils['Disp-pc']} />
              業界に対するご意見・ご要望を受付ける相談窓口を運営しています。
              <br />
              詳細は電気通信事業者協会の相談窓口のご案内ページをご確認ください。
            </p>
            <p className={Utils['Mt-16']}>
              <LinkIconAfter
                href="https://www.tca.or.jp/consult/"
                target="_blank"
              >
                電気通信事業者協会のページを見る
                <IconNewTabLine />
              </LinkIconAfter>
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※一般社団法人電気通信事業者協会のサイトに移動します。
            </TxtCap>
          </BorderBox>

          <BottomButton className={Utils['Align-center']}>
            <ButtonRegularLarge href="/support/" as="a">
              お客様サポートトップへ
            </ButtonRegularLarge>
          </BottomButton>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
        <input
          ref={pitariRef}
          type="hidden"
          name="pitari_phx_pattern"
          id="phx_pattern_name"
        ></input>
      </SystemWrapper>
    </>
  )
}

export default SupportInquiry
