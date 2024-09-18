import type { NextPage } from 'next'
import React, { useEffect, useContext } from 'react'
import Head from 'next/head'
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
  ButtonRegularLarge,
  ButtonSecondaryLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewUserFill,
  IconPaperPlaneLine,
} from '@components/icons'
import { MediaGrid, MediaGridHalf, MediaImage } from '@components/layout/Media'
import { LabelList } from '@components/atoms/Label'
import { anchorCallback } from '@components/utils/anchorCallback'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { CampaignRule2161 } from '@components/include/campaign/rules/2024/CampaignRule2161'
import { CampaignRule2164 } from '@components/include/campaign/rules/2024/CampaignRule2164'
import { CampaignRule2165 } from '@components/include/campaign/rules/2024/CampaignRule2165'
import { CampaignRule2166 } from '@components/include/campaign/rules/2024/CampaignRule2166'
import { CampaignRule2167 } from '@components/include/campaign/rules/2024/CampaignRule2167'
import { CampaignRule2168 } from '@components/include/campaign/rules/2024/CampaignRule2168'

const Kv = styled.div`
  display: flex;
  justify-content: center;
  ${mixins.mq.MinL} {
    height: calc(420 / 1064 * 100vw);
  }
  ${mixins.mq.MinCustom('1064px')} {
    height: 420px;
  }
  ${mixins.mq.MinCustom('2000px')} {
    background-image: linear-gradient(180deg, #f2008c 60px, #000 60px);
  }

  picture {
    display: inline;
  }
  img {
    ${mixins.mq.MinCustom('835px')} {
      width: auto;
      max-width: 2000px;
      height: 100%;
    }
  }
`
const LabelListBox = styled.div`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  > ul {
    gap: 8px;
    > li {
      margin: 0;
    }
  }
`
const CnpAnnotationEmpTxt = styled.p`
  font-size: 13px;
  text-align: center;
`
const AnchorList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    gap: 16px 24px;
    flex-wrap: wrap;
  }
`
const CnpAnnotationTxt = styled.p`
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`
const CpnIntroduction = styled.section`
  padding-top: 24px;
  padding-bottom: 56px;
`
const CustomUlOnly = styled(UlOnly)`
  > li {
    margin-top: 4px;
  }
`
const CustomAccordionEmpStep = styled(AccordionEmpStep)`
  font-size: 26px;
  line-height: 1.16;
  ${mixins.mq.MaxM} {
    font-size: ${props => props.theme.fonts.base};
  }
`
const GrayBox = styled.div`
  padding: 48px 0;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 32px 0;
  }
`
const CustomMediaGrid = styled(MediaGrid)`
  align-items: center;
`
const CustomInfoboxBorder = styled(InfoboxBorder)`
  position: relative;
  margin-top: 50px;
  &::before {
    position: absolute;
    content: '';
    width: 70px;
    height: 18px;
    background: url(${assets}img/campaign/entertainment/icon-polygon.png)
      no-repeat;
    background-size: contain;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
`
const IconTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonSecondaryLargeLowHeight = styled(ButtonSecondaryLarge)`
  padding-block: 12px;
`
const HeadingJumpTxt = styled.span`
  display: inline-block;
  font-size: 20px;
`
const ServiceList = styled.ul<{ pcChildWidth: string; tbChildWidth?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  > li {
    width: ${props => props.pcChildWidth};
    ${mixins.mq.MaxM} {
      width: ${props =>
        props.tbChildWidth ? props.tbChildWidth : props.pcChildWidth};
    }
    ${mixins.mq.MaxS} {
      width: 100%;
    }
  }
`
const ServiceCard = styled.div`
  position: relative;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    pointer-events: none;
    border-radius: 8px;
    border: 1px solid #bfbfbf;
  }

  > div:first-child {
    overflow: hidden;
    border-radius: 9px 9px 0 0;
  }
  > div:nth-child(2) {
    padding: 15px 15px 24px;
    border-radius: 0 0 8px 8px;
    background-color: white;
  }
  ${TxtCap} span {
    font-size: 10px;
  }
`
const ServeceHCard = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  ${mixins.mq.MaxM} {
    display: block;
  }

  > div:first-child {
    width: 440px;
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  > div:nth-child(2) {
    position: relative;
    width: calc(100% - 440px);
    padding: 5px 15px 15px;
    background-color: white;
    ${mixins.mq.MaxM} {
      width: 100%;
      padding-top: 16px;
    }
  }
  ${TxtCap} span {
    position: absolute;
    right: 16px;
    font-size: 10px;
    ${mixins.mq.MaxM} {
      position: static;
    }
  }
`

const CampaignEntertainment: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '春のエンタメ祭 人気エンタメサービスの月額利用料20%ポイント還元'
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'キャンペーン・特典',
      url: '/campaign/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const labelArgs = {
    item: [
      { text: 'エントリー必要', isEmp: false, isBold: true },
      { text: 'ご契約者様対象', isEmp: false, isBold: true },
    ],
  }

  const scriptLoad1 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    const scriptFunction = document.createTextNode(`
window.rexButtons = {language: 'ja', buttons: [{"code":"/rmobile/entertainment/240129","theme":"pink","wide":false,"showCelebration":false,"below":{"isCheckboxMandatory":true,"isChecked":false,"checkboxText":"上記の個人情報の取り扱いに同意する","html":""},"alreadyAppliedText":"エントリー済みです","ids":["rex-ceb-01"]}]}
    `)
    script.appendChild(scriptFunction)
    document.body.appendChild(script)
  }

  const scriptLoad2 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src =
      'https://cdn.rex.contents.rakuten.co.jp/rex-ceb/5.0.0/static/js/main.js'
    document.body.appendChild(script)
  }

  useEffect(() => {
    scriptLoad1()
    scriptLoad2()
  }, [])

  const MovieUnlimitedViewingList = () => {
    const serveceList = [
      {
        visualAlt: 'U-NEXT',
        txtAlt:
          '映画/ドラマ/アニメからマンガ/雑誌までひとつのアプリで楽しめる！ 初回31日間無料 月額料金1,990円（税込2,189円） 398ポイント還元/月※',
        noteTxt: 'ポイント還元期間：6カ月間',
        href: '/campaign/entertainment/unext/?l-id=campaign_entertainment_campaign_entertainment_unext',
        parameta: '240329',
      },
      {
        visualAlt: 'Hulu',
        txtAlt:
          'ドラマ、アニメ、映画、バラエティなど人気作品がいつでも見放題！ 初月無料 月額料金933円（税込1,026円） 186ポイント還元/月※',
        noteTxt: 'ポイント還元期間：6カ月間',
        href: '/campaign/entertainment/hulu/?l-id=campaign_entertainment_campaign_entertainment_hulu',
      },
      {
        visualAlt: 'DAZN',
        txtAlt:
          '好きなスポーツ、好きなだけ見放題！ライブ中継からオリジナル番組まで 月額料金3,818円（税込4,200円） 763ポイント還元/月※1 月額料金29,090円（税込32,000円）※2 5,818ポイント還元/月',
        noteTxt: '1ポイント還元期間：3カ月間 ※2DAZN年額料金は一括支払い',
        href: '/campaign/entertainment/dazn/?l-id=campaign_entertainment_campaign_entertainment_dazn',
      },
      {
        visualAlt: 'ABEMAプレミアム',
        txtAlt:
          'プレミアム対象作品すべて見放題！ 初回14日間無料 月額料金873円（税込960円） 174ポイント還元/月※',
        noteTxt: 'ポイント還元期間：3カ月間',
        href: '/campaign/entertainment/abema/?l-id=campaign_entertainment_campaign_entertainment_abema',
      },
      {
        visualAlt: 'DMMプレミアム',
        txtAlt:
          'アニメ・ドラマ・映画・バラエティなど 19万本以上がDMM TVで楽しめる！※　初回30日間無料　月額料金500円（税込550円）100ポイント還元/月※',
        noteTxt: '2024年1月現在※ポイント還元期間：6カ月間',
        href: '/campaign/entertainment/dmm/?l-id=campaign_entertainment_campaign_entertainment_dmm',
      },
    ]

    const serviceType = 'movie'
    const pcChildWidth = '328px'
    const ServiceListProps = {
      pcChildWidth,
    }
    return (
      <ServiceList {...ServiceListProps}>
        {serveceList.map((service, sIdx) => {
          return (
            <li key={service.visualAlt}>
              <Service
                {...service}
                target={serviceType}
                num={sIdx + 1}
                isVertical={true}
              />
            </li>
          )
        })}
      </ServiceList>
    )
  }

  const ListeningReadingList = () => {
    const serveceList = [
      {
        visualAlt: 'audiobook.jp',
        txtAlt:
          '手や目を使わない、耳で聴く読書 初回30日間無料 月額料金1,209円（税込1,330円） 241ポイント還元/月※ 月額料金757円（税込832円） 151ポイント還元/月※',
        noteTxt: 'ポイント還元期間：6カ月間',
        href: '/campaign/entertainment/audiobook/?l-id=campaign_entertainment_campaign_entertainment_audiobook',
      },
    ]

    const serviceType = 'listening'
    const pcChildWidth = '100%'
    const tbChildWidth = '328px'
    const ServiceListProps = {
      pcChildWidth,
      tbChildWidth,
    }
    return (
      <ServiceList {...ServiceListProps}>
        {serveceList.map((service, sIdx) => {
          return (
            <li key={service.visualAlt}>
              <Service
                {...service}
                target={serviceType}
                num={sIdx + 1}
                isVertical={false}
              />
            </li>
          )
        })}
      </ServiceList>
    )
  }

  interface ServeceProps {
    num: number
    target: string
    visualAlt: string
    txtAlt: string
    noteTxt: string
    href: string
    isVertical: boolean
    parameta?: string
  }
  const Service = ({
    num,
    target,
    visualAlt,
    txtAlt,
    noteTxt,
    href,
    isVertical,
    parameta,
  }: ServeceProps) => {
    const Tag = isVertical ? ServiceCard : ServeceHCard
    const size = isVertical
      ? {
          v: {
            pc: {
              width: 328,
              height: 210,
            },
            sp: {
              width: 656,
              height: 420,
            },
          },
          t: {
            pc: {
              width: 296,
              height: 174,
            },
            sp: {
              width: 622,
              height: 348,
            },
          },
        }
      : {
          v: {
            pc: {
              width: 440,
              height: 190,
            },
            sp: {
              width: 686,
              height: 420,
            },
          },
          t: {
            pc: {
              width: 560,
              height: 112,
            },
            sp: {
              width: 611,
              height: 392,
            },
          },
        }

    const imgParam = parameta ? parameta : '240215'

    return (
      <Tag>
        <div>
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/campaign/entertainment/${target}/img-service-${num}-visual-sp-${imgParam}.png`}
              {...size.v.sp}
            />
            <img
              src={`${assets}img/campaign/entertainment/${target}/img-service-${num}-visual-pc-${imgParam}.png`}
              {...size.v.pc}
              alt={visualAlt}
              loading="lazy"
            />
          </picture>
        </div>
        <div>
          <div>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/entertainment/${target}/img-service-${num}-txt-sp-240215.png?240318`}
                {...size.t.sp}
              />
              <img
                src={`${assets}img/campaign/entertainment/${target}/img-service-${num}-txt-pc-240215.png?240318`}
                {...size.t.pc}
                alt={txtAlt}
                loading="lazy"
              />
            </picture>
            <TxtCap
              as="p"
              className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
            >
              <span>※{noteTxt}</span>
            </TxtCap>
          </div>
        </div>
      </Tag>
    )
  }
  const Copyrights = () => {
    const copyrights = [
      {
        company: 'U-NEXT',
        text: '®, TM & © 2024 Lions Gate Entertainment Inc. All Rights Reserved. ©2023 映画『わたしの幸せな結婚』製作委員会 ©2023 Lifetime & Group8 ©TBS © 2023 Home Box Office, Inc. All rights reserved. HBO® and all related programs are the property of Home Box Office, Inc. ©2019「劇場版おっさんずラブ」製作委員会 © Warner Bros Entertainment Inc. All rights reserved. ©U-NEXT © 2024 HYBE & eggiscoming. All Rights Reserved. ©TBSスパークル ©九井諒子・KADOKAWA刊／「ダンジョン飯」製作委員会 © 2020 Universal Studios.  ALL RIGHTS RESERVED. © 2024 Universal Content Productions LLC and MRC II Distribution Company LP. All Rights Reserved. ©SBS ©諫山創・講談社／「進撃の巨人」The Final Season製作委員会 Sesame Street Mecha Builders メカビルダーズ™️ and associated characters, trademarks and design elements are owned and licensed by Sesame Workshop. ©2022 Sesame Workshop. All rights reserved. ©宝塚歌劇団　©大和 和紀／講談社',
      },
      {
        company: 'Hulu',
        text: '©NTV/知念実希人/KADOKAWA / © 2024 CBS Studios Inc. All Rights Reserved. / ©Tencent Technology (Beijing) Co., Ltd.',
      },
      {
        company: 'ABEMAプレミアム',
        text: '(C)AbemaTV, Inc.制作著作 テレビ朝日 (C)赤坂アカ×横槍メンゴ／集英社・【推しの子】製作委員会',
      },
      {
        company: 'DMMプレミアム',
        text: '©WIT STUDIO/Great Pretenders/モンキー・パンチ ©TMS/© 2023「静かなるドン」製作委員会/©見里朝希JGH・シンエイ動画/モルカーズ/©諫山創・講談社／「進撃の巨人」The Final Season製作委員会/©︎金城宗幸・ノ村優介・講談社／「ブルーロック」製作委員会/©2022 石森プロ・バンダイ・東映ビデオ・東映 ©石森プロ・東映/©︎DMM TV／「インシデンツ2」「EVOL」「ケンシロウによろしく」',
      },
    ]

    return (
      <TxtCap as="ul">
        {copyrights.map(({ company, text }) => (
          <li key={company} className={Utils['Mt-16']}>
            {company}
            <br />
            {text}
          </li>
        ))}
      </TxtCap>
    )
  }

  return (
    <>
      <Head>
        <link
          rel="dns-prefetch"
          href="https://cdn.rex.contents.rakuten.co.jp"
        />
      </Head>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルご契約で人気エンタメサービスの月額利用料20%ポイント還元キャンペーン"
        ogp_img="https://network.mobile.rakuten.co.jp/assets/img/campaign/entertainment/ogp.png"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <SystemContainer>
          <LabelListBox>
            <LabelList {...labelArgs} />
          </LabelListBox>
        </SystemContainer>

        <Kv
          data-ratid="campaign_entertainment_scroll-01_header"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/entertainment/kv-sp-240215.png`}
                width="834"
                height="1023"
              />
              <img
                src={`${assets}img/campaign/entertainment/kv-pc-240215.png`}
                width="2000"
                height="420"
                alt="要エントリー 楽天モバイルご契約者様限定 楽天モバイルエンタメ祭 人気エンタメサービスの月額利用料20%ポイント還元 U-NEXT、Hulu、DAZN、ABEMAプレミアム、DMMプレミアム、audiobook.jp ※条件達成の4カ月後末日ごろ進呈。各サービスへ本キャンペーンでの初めてのご登録のお客様が対象"
              />
            </picture>
          </h1>
        </Kv>

        <SystemContainer>
          <CpnIntroduction>
            <p className={Utils['Align-center']}>
              <TxtEmp01>【キャンペーン期間】</TxtEmp01>
              <br className={Utils['Show-oox']} />
              2024年2月15日（木）09:00～2024年4月15日（月）20:59
            </p>

            <div className={Utils['Align-center']}>
              <TxtEmp02 as="p" className={Utils['Mt-24']}>
                <TxtSize size="m">
                  本キャンペーンは2024年4月15日をもちまして終了いたしました。
                  <br />
                  このページに掲載されている情報は、キャンペーン終了時点のものです。
                </TxtSize>
              </TxtEmp02>
              <p className={Utils['Mt-32']}>
                楽天モバイルでは、おトクに楽しめるエンタメサービスを多数ご用意しております。
              </p>
              <div className={Utils['Mt-16']}>
                <ButtonRegularLarge
                  as="a"
                  href="/campaign/digital-contents/?l-id=campaign_entertainment_closed_campaign_digital-contents"
                >
                  対象エンタメサービスを確認する
                </ButtonRegularLarge>
              </div>
            </div>

            <CnpAnnotationEmpTxt className={Utils['Mt-32']}>
              <TxtEmp02>
                本キャンペーン終了後、条件または特典を変更して類似のキャンペーンが実施される場合があります。
              </TxtEmp02>
            </CnpAnnotationEmpTxt>
            <AnchorList className={`${Utils['Mt-32']} ${Utils['Mt-pc-16']}`}>
              <li>
                <LinkIconBefore
                  href="#campaign-flow"
                  onClick={e => anchorCallback(e, 'campaign-flow')}
                >
                  <IconArrowDown />
                  キャンペーンの流れ
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#faq"
                  onClick={e => anchorCallback(e, 'faq')}
                >
                  <IconArrowDown />
                  よくあるご質問
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#campaign-rule"
                  onClick={e => anchorCallback(e, 'campaign-rule')}
                >
                  <IconArrowDown />
                  キャンペーンルール
                </LinkIconBefore>
              </li>
            </AnchorList>
            <CnpAnnotationTxt className={Utils['Mt-16']}>
              <TxtCap>
                本キャンペーンの運営に関連して楽天モバイル株式会社は楽天グループ株式会社より応募者のメールアドレスを取得することがあります。
                <br className={Utils['Show-xxo']} />
                取得したメールアドレスは楽天モバイル株式会社において応募条件を満たしていることの確認およびポイント付与を目的としてのみ利用し、
                <br className={Utils['Show-xxo']} />
                また、同一目的のためにサービス提供会社各社（6社）に提供します。
              </TxtCap>
            </CnpAnnotationTxt>
          </CpnIntroduction>
        </SystemContainer>

        <GrayBox
          data-ratid="campaign_entertainment_scroll-02_service"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <SystemContainer>
            <Heading level="2" id="service" className={Utils['Align-center']}>
              キャンペーン対象サービス
            </Heading>
            <Heading
              level="3"
              className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
            >
              動画見放題サービス
            </Heading>
            <div className={Utils['Mt-16']}>
              <MovieUnlimitedViewingList />
            </div>

            <Heading
              level="3"
              className={`${Utils['Mt-56']} ${Utils['Align-center']}`}
            >
              聴く読書サービス
            </Heading>
            <div className={Utils['Mt-16']}>
              <ListeningReadingList />
            </div>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <section
            className={Utils['Mt-64']}
            data-ratid="campaign_entertainment_scroll-03_flow"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading
              level="2"
              id="campaign-flow"
              className={Utils['Align-center']}
            >
              キャンペーンの流れ
            </Heading>
            <Tab
              className={Utils['Mt-24']}
              heading1={'新規お申し込みの方'}
              id1="tab1"
              ratId1="campaign_entertainment_flow_tab_pre-member"
              id2="tab2"
              ratId2="campaign_entertainment_flow_tab_member"
              content1={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP1</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          キャンペーンにエントリー
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
                          src={`${assets}img/campaign/entertainment/img-flow-01-240215.png`}
                          width="304"
                          height="135"
                          alt=""
                          loading="lazy"
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>【エントリー期間】</TxtEmp01>
                          2024年2月15日（木）09:00～2024年4月15日（月）20:59
                        </p>
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※ エントリー、お申し込みの順番は問いません。
                        </TxtCap>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP2</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          楽天モバイルのお申し込み
                        </AccordionEmpTxt>
                      </>
                    }
                    isOpened={false}
                    className={Utils['Mt-24']}
                    step={true}
                  >
                    <Tab
                      className={Utils['Mt-24']}
                      heading1={'Web'}
                      id1="tab1-1"
                      id2="tab1-2"
                      content1={
                        <>
                          <InfoboxBorder className={Utils['Mt-16']}>
                            <MediaGrid>
                              <div>
                                <MediaImage>
                                  <p
                                    className={`${Utils['Align-left']} ${Utils['Show-oox']}`}
                                  >
                                    <TxtEmp01>
                                      【プランのお申し込み期間】
                                    </TxtEmp01>
                                    2024年2月15日（木）09:00～2024年4月15日（月）20:59
                                  </p>
                                  <img
                                    src={`${assets}img/campaign/entertainment/img-flow-02-240215.png`}
                                    width="311"
                                    height="185"
                                    loading="lazy"
                                    alt=""
                                  />
                                </MediaImage>
                              </div>
                              <div>
                                <p className={Utils['Show-xxo']}>
                                  <TxtEmp01>
                                    【プランのお申し込み期間】
                                  </TxtEmp01>
                                  2024年2月15日（木）09:00～2024年4月15日（月）20:59
                                </p>
                                <Heading
                                  level="4"
                                  className={`${Utils['Mt-0']} ${Utils['Mt-pc-16']}`}
                                >
                                  お申し込みに必要なもの
                                </Heading>
                                <CustomUlOnly className={Utils['Mt-16']}>
                                  <li>
                                    <LinkIconAfter href="/guide/verify/?l-id=campaign_entertainment_guide_verify">
                                      本人確認書類
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                  <li>
                                    楽天会員ID、パスワード
                                    <br />
                                    <TxtCap
                                      as="p"
                                      className={`${Utils['Mt-8']} ${Utils['Pl-16']}`}
                                    >
                                      <TxtEmp02>
                                        ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                                      </TxtEmp02>
                                    </TxtCap>
                                    <div className={Utils['Pl-16']}>
                                      <LinkIconAfter href="https://member.id.rakuten.co.jp/rms/nid/menufwd">
                                        楽天会員情報を確認・変更する
                                        <IconChevronRight
                                          className={Utils['Ml-16']}
                                        />
                                      </LinkIconAfter>
                                    </div>
                                  </li>
                                  <li className={Utils['Mt-8']}>
                                    <LinkIconAfter href="/guide/mnp/?l-id=campaign_entertainment_guide_mnp">
                                      ご契約者名義のMNP予約番号（他社から乗り換えの場合）
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                  <li>
                                    <LinkIconAfter href="/guide/payment/?l-id=campaign_entertainment_guide_payment">
                                      クレジットカード、銀行口座情報
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                </CustomUlOnly>
                                <TxtCap as="ul" className={Utils['Mt-8']}>
                                  <li>
                                    ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
                                    <LinkNormal href="/faq/detail/00001238/">
                                      こちらのご案内ページ
                                    </LinkNormal>
                                    を必ず事前にご確認ください
                                  </li>
                                  <li>
                                    ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
                                    <LinkNormal href="/flow/for-minors/">
                                      こちら
                                    </LinkNormal>
                                    をご確認ください
                                  </li>
                                  <li>
                                    ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                                    <LinkNormal href="/guide/mnp/#career">
                                      こちら
                                    </LinkNormal>
                                    からご確認ください。
                                  </li>
                                  <li>
                                    ※MNP有効期間が「7日以上」残っているMNP予約番号が必要です。
                                  </li>
                                  <li>
                                    ※Webページにて、楽天モバイル（ドコモ回線・au回線）から移行お手続き後に、Rakuten最強プランにお申し込みいただく場合、MNP予約番号と本人確認書類はご準備不要です。
                                  </li>
                                </TxtCap>
                              </div>
                            </MediaGrid>
                          </InfoboxBorder>
                          <MediaGridHalf
                            className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
                          >
                            <InfoboxBorder>
                              <Heading level="4">
                                <IconTitle>
                                  <TxtSize
                                    as="span"
                                    size="ll"
                                    className={Utils['Mr-8']}
                                  >
                                    <TxtEmp02>
                                      <IconNewUserFill />
                                    </TxtEmp02>
                                  </TxtSize>
                                  新規電話番号／他社から乗り換え（MNP）
                                </IconTitle>
                              </Heading>
                              <div
                                className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                              >
                                <ButtonPrimaryLarge
                                  as="a"
                                  href="/guide/application/?lid-r=campaign_entertainment_guide_application"
                                >
                                  Rakuten最強プランに
                                  <br className={Utils['Show-oxx']} />
                                  申し込む
                                </ButtonPrimaryLarge>
                              </div>
                              <ul
                                className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                              >
                                <li>
                                  <LinkIconAfter href="/fee/saikyo-plan/?l-id=campaign_entertainment_fee_saikyo-plan">
                                    Rakuten最強プランの詳細
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </li>
                                <li className={Utils['Mt-8']}>
                                  <LinkIconAfter href="/guide/flow/application/?l-id=campaign_entertainment_guide_flow_application">
                                    Rakuten最強プランの申し込み方法を確認する
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </li>
                                <li className={Utils['Mt-8']}>
                                  <LinkIconAfter href="/guide/mnp/?l-id=campaign_entertainment_guide_mnp">
                                    Rakuten最強プランへの乗り換え手順を確認する
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </li>
                              </ul>
                            </InfoboxBorder>
                            <InfoboxBorder>
                              <Heading level="4">
                                <IconTitle>
                                  <TxtSize
                                    as="span"
                                    size="ll"
                                    className={Utils['Mr-8']}
                                  >
                                    <TxtEmp02>
                                      <IconPaperPlaneLine />
                                    </TxtEmp02>
                                  </TxtSize>
                                  楽天モバイル（ドコモ・au回線）から
                                  <br />
                                  プラン変更（移行）
                                </IconTitle>
                              </Heading>
                              <div
                                className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                              >
                                <ButtonSecondaryLargeLowHeight
                                  as="a"
                                  href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=campaign_entertainment_ms&mno_migration=1"
                                >
                                  メンバーズステーションから
                                  <br />
                                  プラン変更（移行）する
                                </ButtonSecondaryLargeLowHeight>
                              </div>
                              <ul
                                className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                              >
                                <li>
                                  <LinkIconAfter href="/guide/migration/?l-id=campaign_entertainment_guide_migration">
                                    スーパーホーダイ・組み合わせプラン（※）との比較
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                  <TxtCap>
                                    ※2020年4月8日に受付終了のドコモ回線・au回線使用プラン
                                  </TxtCap>
                                </li>
                                <li className={Utils['Mt-8']}>
                                  <LinkIconAfter href="/guide/mnp/migration/?l-id=campaign_entertainment_guide_mnp_migration">
                                    楽天モバイル（楽天回線）への移行方法
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </li>
                                <li className={Utils['Mt-8']}>
                                  <LinkIconAfter href="/flow/mvno-user-registration/?l-id=campaign_entertainment_flow_mvno-user-registration">
                                    利用者登録でご利用中の方の移行方法
                                    <IconChevronRight />
                                  </LinkIconAfter>
                                </li>
                              </ul>
                            </InfoboxBorder>
                          </MediaGridHalf>
                        </>
                      }
                      heading2={'ショップ'}
                      content2={
                        <>
                          <MediaGrid className={Utils['Mt-16']}>
                            <MediaImage className={Utils['Pt-24']}>
                              <picture>
                                <source
                                  media={`(max-width: ${theme.max.m})`}
                                  srcSet={`${assets}img/campaign/mnp/img-flow-shop-sp.png`}
                                  width="559"
                                  height="274"
                                />
                                <img
                                  src={`${assets}img/campaign/mnp/img-flow-shop-pc.png`}
                                  width="284"
                                  height="165"
                                  alt=""
                                  loading="lazy"
                                />
                              </picture>
                            </MediaImage>
                            <div>
                              <ButtonRegular
                                as="a"
                                href="/shop/?l-id=campaign_entertainment_shop_01"
                              >
                                お近くのショップを探す
                              </ButtonRegular>
                            </div>
                          </MediaGrid>
                          <InfoboxBorder className={Utils['Mt-40']}>
                            <MediaGrid>
                              <div>
                                <MediaImage>
                                  <p
                                    className={`${Utils['Align-left']} ${Utils['Show-oox']}`}
                                  >
                                    <TxtEmp01>
                                      【プランのお申し込み期間】
                                    </TxtEmp01>
                                    2024年2月15日（木）09:00～2024年4月15日（月）20:59
                                  </p>
                                  <img
                                    src={`${assets}img/campaign/entertainment/img-flow-02-240215.png`}
                                    width="311"
                                    height="185"
                                    loading="lazy"
                                    alt=""
                                  />
                                </MediaImage>
                              </div>
                              <div>
                                <Heading level="4">
                                  お申し込み・お支払いに必要なものを準備する
                                </Heading>
                                <CustomUlOnly className={Utils['Mt-16']}>
                                  <li>
                                    <LinkIconAfter href="/guide/verify/?l-id=campaign_entertainment_guide_verify">
                                      本人確認書類
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                  <li>
                                    楽天会員ID、パスワード
                                    <br />
                                    <TxtCap
                                      as="p"
                                      className={`${Utils['Mt-8']} ${Utils['Pl-16']}`}
                                    >
                                      <TxtEmp02>
                                        ※本人確認書類の情報と、楽天会員情報が一致している必要があります。
                                      </TxtEmp02>
                                    </TxtCap>
                                    <div className={Utils['Pl-16']}>
                                      <LinkIconAfter href="https://member.id.rakuten.co.jp/rms/nid/menufwd">
                                        楽天会員情報を確認・変更する
                                        <IconChevronRight
                                          className={Utils['Ml-16']}
                                        />
                                      </LinkIconAfter>
                                    </div>
                                  </li>
                                  <li className={Utils['Mt-8']}>
                                    <LinkIconAfter href="/guide/mnp/?l-id=campaign_entertainment_guide_mnp">
                                      ご契約者名義のMNP予約番号（他社から乗り換えの場合）
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                  <li>
                                    <LinkIconAfter href="/guide/payment/?l-id=campaign_entertainment_guide_payment">
                                      クレジットカード、銀行口座情報
                                      <IconChevronRight
                                        className={Utils['Ml-16']}
                                      />
                                    </LinkIconAfter>
                                  </li>
                                </CustomUlOnly>
                                <TxtCap as="ul" className={Utils['Mt-8']}>
                                  <li>
                                    ※ご契約者本人名義と異なるクレジットカードをご利用希望のお客様は、
                                    <LinkNormal href="/faq/detail/00001238/">
                                      こちらのご案内ページ
                                    </LinkNormal>
                                    を必ず事前にご確認ください
                                  </li>
                                  <li>
                                    ※未成年者の方のお申し込みに必要な情報、お申し込み方法は
                                    <LinkNormal href="/flow/for-minors/">
                                      こちら
                                    </LinkNormal>
                                    をご確認ください
                                  </li>
                                  <li>
                                    ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社は
                                    <LinkNormal href="/guide/mnp/#career">
                                      こちら
                                    </LinkNormal>
                                    からご確認ください。
                                  </li>
                                  <li>
                                    ※MNPワンストップ未対応の携帯電話会社から乗り換えの方は、MNP予約番号の取得が必要です。MNPワンストップ対象の携帯電話会社はこちらからご確認ください。
                                  </li>
                                  <li>
                                    ※MNP有効期間が「7日以上」残っているMNP予約番号が必要です。
                                  </li>
                                  <li>
                                    ※Webページにて、楽天モバイル（ドコモ回線・au回線）から移行お手続き後に、Rakuten最強プランにお申し込みいただく場合、MNP予約番号と本人確認書類はご準備不要です。
                                  </li>
                                </TxtCap>
                              </div>
                            </MediaGrid>
                          </InfoboxBorder>
                        </>
                      }
                    />
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP3</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          「Rakuten最強プラン」＆お好きなサービスを利用開始
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
                          src={`${assets}img/campaign/entertainment/img-flow-03-240215.png`}
                          width="311"
                          height="171"
                          loading="lazy"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>期限：</TxtEmp01>
                          2024年2月15日（木）09:00〜2024年4月15日（月）20:59
                        </p>
                        <ul className={Utils['Mt-16']}>
                          <li>
                            <ButtonRegular
                              as="a"
                              href="/faq/detail/00001648/?l-id=campaign_entertainment_faq_detail_00001648"
                            >
                              プラン利用開始手順はこちら
                            </ButtonRegular>
                          </li>
                          <li className={Utils['Mt-16']}>
                            <ButtonRegular
                              as="a"
                              href="#service"
                              onClick={e => anchorCallback(e, 'service')}
                            >
                              各コンテンツ紹介はこちら
                            </ButtonRegular>
                          </li>
                        </ul>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <CustomInfoboxBorder>
                    <CustomMediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/entertainment/img-flow-04-240215.png`}
                          width="304"
                          height="144"
                          loading="lazy"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <TxtSize as="p" size="ll">
                          <TxtEmp02>
                            月額利用料の20％分のポイント進呈！
                          </TxtEmp02>
                        </TxtSize>
                        <p className={Utils['Mt-16']}>
                          キャンペーン条件達成の4カ月後の末日頃に、20%分のポイントを進呈
                          <TxtCap>※</TxtCap>
                        </p>
                        <TxtCap className={Utils['Mt-8']}>
                          ※ポイント進呈の月数は各サービスで異なりますので、
                          <LinkNormal
                            href="#campaign-rule"
                            onClick={e => anchorCallback(e, 'campaign-rule')}
                          >
                            キャンペーンルール
                          </LinkNormal>
                          をご確認ください。
                        </TxtCap>
                      </div>
                    </CustomMediaGrid>
                  </CustomInfoboxBorder>
                </>
              }
              heading2={'プランご契約中の方'}
              content2={
                <>
                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP1</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          キャンペーンにエントリー
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
                          src={`${assets}img/campaign/entertainment/img-flow-01-240215.png`}
                          width="304"
                          height="151"
                          loading="lazy"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>【エントリー期間】</TxtEmp01>
                          2024年2月15日（木）09:00～2024年4月15日（月）20:59
                        </p>
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※ エントリー、お申し込みの順番は問いません。
                        </TxtCap>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <AccordionListEmp
                    text={
                      <>
                        <CustomAccordionEmpStep>STEP2</CustomAccordionEmpStep>
                        <AccordionEmpTxt>
                          お好きなサービスを利用開始
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
                          src={`${assets}img/campaign/entertainment/img-flow-03-240215.png`}
                          width="311"
                          height="171"
                          loading="lazy"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>
                          <TxtEmp01>期限：</TxtEmp01>
                          2024年2月15日（木）09:00〜2024年4月15日（月）20:59
                        </p>
                        <div className={Utils['Mt-16']}>
                          <ButtonRegular
                            as="a"
                            href="#service"
                            onClick={e => anchorCallback(e, 'service')}
                          >
                            各コンテンツ紹介はこちら
                          </ButtonRegular>
                        </div>
                      </div>
                    </MediaGrid>
                  </AccordionListEmp>

                  <CustomInfoboxBorder>
                    <CustomMediaGrid>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/entertainment/img-flow-04-240215.png`}
                          width="304"
                          height="144"
                          loading="lazy"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <TxtSize as="p" size="ll">
                          <TxtEmp02>
                            月額利用料の20％分のポイント進呈！
                          </TxtEmp02>
                        </TxtSize>
                        <p className={Utils['Mt-16']}>
                          キャンペーン条件達成の4カ月後の末日頃に、20%分のポイントを進呈
                          <TxtCap>※</TxtCap>
                        </p>
                        <TxtCap className={Utils['Mt-8']}>
                          ※ポイント進呈の月数は各サービスで異なりますので、
                          <LinkNormal
                            href="#campaign-rule"
                            onClick={e => anchorCallback(e, 'campaign-rule')}
                          >
                            キャンペーンルール
                          </LinkNormal>
                          をご確認ください。
                        </TxtCap>
                      </div>
                    </CustomMediaGrid>
                  </CustomInfoboxBorder>
                </>
              }
            />
          </section>

          <section
            className={Utils['Mt-64']}
            data-ratid="campaign_entertainment_scroll-04_point-example"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading level="2" className={Utils['Align-center']}>
              ポイント進呈時期の具体例
              <HeadingJumpTxt>（Huluの場合）</HeadingJumpTxt>
            </Heading>
            <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <TxtEmp01>
                Huluに登録し、3月にキャンペーン条件を達成した場合、以下の時期に特典が受けられます。
              </TxtEmp01>
            </p>
            <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/entertainment/img-schedule-sp-240215.png`}
                  width="343"
                  height="494"
                />
                <img
                  src={`${assets}img/campaign/entertainment/img-schedule-pc-240215.png`}
                  width="1032"
                  height="356"
                  loading="lazy"
                  alt="2月中旬～3月中旬：エントリー&hulu登録（初月無料）※無料期間中の利用はポイント付与対象外 3月中旬～4月中旬：1カ月目のご利用（月額1,026円（税込））でキャンペーン条件達成！ 条件達成から4カ月後の末日頃（7月末頃）に186ポイント還元（以後、最大6カ月）"
                />
              </picture>
            </div>
          </section>

          <section
            className={Utils['Mt-64']}
            data-ratid="campaign_entertainment_scroll-05_faq"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <Heading level="2" id="faq" className={Utils['Align-center']}>
              よくあるご質問
            </Heading>
            <AccordionList
              text={'キャンペーンへのエントリーは必要ですか？'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                キャンペーンへのエントリーは必要です。1度のエントリーで、6社すべてのサービスへのお申し込みが可能です。
              </p>
            </AccordionList>
            <AccordionList
              text={'エントリーされているか、どこで確認できますか？'}
              isOpened={false}
            >
              <p>
                エントリー履歴につきましては「
                <LinkNormal
                  href="https://login.account.rakuten.com/sso/authorize?client_id=rakuten_campaigntool_web&nonce=qu72auMaaFCAUBULcVX9MFc6M9SjmKoj&redirect_uri=https%3A%2F%2Foubo.rakuten.co.jp%2Fredirect&response_type=code&scope=openid%20profile&state=ecHGBrwSKTFmpkVA8TzgzwhYJvZ0PrBM&ui_locales=ja-JP#/sign_in"
                  target="_blank"
                >
                  キャンペーンエントリー履歴
                </LinkNormal>
                」からご確認いただけます。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'キャンペーンのエントリーと楽天モバイルの申し込みに順番はありますか？'
              }
              isOpened={false}
            >
              <p>
                キャンペーン期間中にエントリーいただければ、楽天モバイルのお申し込み後になっても問題ございません。
                <br />
                ただし、キャンペーン期間中の楽天モバイルへのお申し込み後、4月末日までにプラン利用を開始していただく必要がございます。
              </p>
            </AccordionList>
            <AccordionList
              text={'他のキャンペーンと併用はできますか？'}
              isOpened={false}
            >
              <p>はい、併用は可能です。</p>
            </AccordionList>
            <AccordionList
              text={
                '各サービスの申し込みがはじめてではなくとも、本キャンペーンは対象になりますか。'
              }
              isOpened={false}
            >
              <p>
                本キャンペーンから初めてご登録いただければキャンペーン対象となります。
              </p>
            </AccordionList>
          </section>

          <div
            data-ratid="campaign_entertainment_scroll-06_saikyo-plan"
            data-ratevent="appear"
            data-ratparam="all"
          ></div>

          <section
            className={Utils['Mt-40']}
            data-ratid="campaign_entertainment_scroll-07_campaign"
            data-ratevent="appear"
            data-ratparam="all"
          ></section>
        </SystemContainer>

        <GrayBox
          className={`${Utils['Mt-64']} ${Utils['Mt-pc-72']}`}
          data-ratid="campaign_entertainment_scroll-08_campaign-rule"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <SystemContainer>
            <Heading
              level="2"
              id="campaign-rule"
              className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
            >
              キャンペーンルール
            </Heading>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（U-NEXT）'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2168 />
            </AccordionList>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（Hulu）'}
              isOpened={false}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2161 />
            </AccordionList>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（DAZN）'}
              isOpened={false}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2164 />
            </AccordionList>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（ABEMAプレミアム）'}
              isOpened={false}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2165 />
            </AccordionList>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（DMMプレミアム）'}
              isOpened={false}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2166 />
            </AccordionList>
            <AccordionList
              text={'楽天モバイル エンタメ祭キャンペーン（audiobook.jp）'}
              isOpened={false}
            >
              <div className={Utils['Align-center']}>
                <TxtEmp02 as="p" className={Utils['Mb-16']}>
                  <TxtSize size="m">
                    本キャンペーンは2024年4月15日をもちまして終了いたしました。
                    <br />
                    このページに掲載されている情報は、キャンペーン終了時点のものです。
                  </TxtSize>
                </TxtEmp02>
              </div>
              <CampaignRule2167 />
            </AccordionList>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Mt-24']}>
          <Copyrights />
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignEntertainment
