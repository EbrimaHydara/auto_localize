import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { useRexCampaignButton } from '~/hooks/useRexCampaignButton'
import { LabelList } from '@components/atoms/Label'
import { LinkIconBefore, LinkNormal } from '@components/atoms/Link'
import {
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import { IconArrowDown, IconNewTabFill } from '@components/icons'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { Flow } from '@components/atoms/Flow'
import { AccordionList } from '@components/atoms/AccordionList'
import { CampaignRule2168 } from '@components/include/campaign/rules/2024/CampaignRule2168'
import { anchorCallback } from '@components/utils/anchorCallback'

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
const AnchorList = styled.ul`
  margin: 32px auto 0;
  display: flex;
  gap: 24px;
  ${mixins.mq.MinL} {
    flex-wrap: wrap;
    max-width: 748px;
    justify-content: center;
  }
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    flex-direction: column;
    gap: 8px;
  }
`
const CnpAnnotationTxt = styled.p`
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`
const CEB_ID_1 = 'rex-ceb-01'
const CEB_ID_2 = 'rex-ceb-02'
const ANCHOR_ID = {
  APPEAL1: 'appeal-unext1',
  FLOW: 'flow',
  APPEAL2: 'appeal-unext2',
  APPEAL3: 'appeal-unext3',
  GRANT_POINT: 'grant-point',
  CAMPAIGN_RULE: 'campaign-rule2168',
}
const anchors = [
  { id: ANCHOR_ID.APPEAL1, text: '無料トライアルの2つの特典' },
  { id: ANCHOR_ID.FLOW, text: 'キャンペーンの流れ' },
  { id: ANCHOR_ID.APPEAL2, text: 'U-NEXTの特長' },
  { id: ANCHOR_ID.APPEAL3, text: 'U-NEXTの6つの特長' },
  { id: ANCHOR_ID.GRANT_POINT, text: 'ポイント進呈時期の具体例' },
  { id: ANCHOR_ID.CAMPAIGN_RULE, text: 'キャンペーンルール' },
]
const labelArgs = {
  item: [
    { text: 'エントリー必要', isEmp: false, isBold: true },
    { text: 'ご契約者様対象', isEmp: false, isBold: true },
  ],
}
const campaignEntryButtonConfig = {
  code: '/rmobile/entertainment/240129',
  ids: [CEB_ID_1, CEB_ID_2],
  alreadyAppliedText: 'エントリー済みです',
}
const entertainmentRexCebProps = {
  serviceText: (
    <>
      U-NEXTの登録はこちら
      <IconNewTabFill className="icon-end" />
    </>
  ),
  serviceUrl: 'https://account.unext.jp/account/input/LPFS3X9X?cid=D34316',
}

const CampaignEntertainmentUnext: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'U-NEXT'
  const directories = [
    { path: '/campaign/', label: 'キャンペーン・特典' },
    {
      path: '/campaign/entertainment/',
      label: '春のエンタメ祭 人気エンタメサービスの月額利用料20%ポイント還元',
    },
  ]
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
      text: '春のエンタメ祭 人気エンタメサービスの月額利用料20%ポイント還元',
      url: '/campaign/entertainment/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  useRexCampaignButton(campaignEntryButtonConfig)

  const bnrData = [
    {
      path: '/campaign/data/',
      lId: 'campaign_entertainment_campaign_data',
      imgPath: 'img/campaign/entertainment/bnr/bnr-20g-240215.png',
      alt: '毎月開催エントリー&初めてデータを20GB超過利用でもれなく1500ポイントGET!2月1日よりポイントアップ!',
    },
    {
      path: '/campaign/data3g/',
      lId: 'campaign_entertainment_campaign_data3g',
      imgPath: 'img/campaign/entertainment/bnr/bnr-3g-event-24015.png',
      alt: '毎月開催エントリー&初めてデータを3GB超過利用でもれなく1,000ポイントGET!',
    },
    {
      path: '/campaign/digital-contents/',
      lId: 'campaign_entertainment_campaign_digital-contents',
      imgPath: 'img/campaign/entertainment/bnr/bnr-nba-240401.png',
      alt: 'NBA、パ・リーグ、楽天ミュージックが楽天モバイルなら追加料金0円で楽しめる！※楽天ミュージックは30日ごとに5時間無料',
    },
  ]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルご契約でU-NEXTの月額利用料20%ポイント還元キャンペーン"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <LabelListBox
            data-ratid="campaign_entertainment_unext_scroll-01_header"
            data-ratevent="appear"
            data-ratparam="all"
          >
            <LabelList {...labelArgs} />
          </LabelListBox>
        </SystemContainer>
        <Heading level="1" className={Utils['Align-center']}>
          <picture>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/campaign/entertainment/unext/kv-sp-240329.png`}
              width="100%"
            />
            <img
              src={`${assets}img/campaign/entertainment/unext/kv-pc-240329.png`}
              width="2880"
              height="688"
              alt="U-NEXT 31日間無料+月額利用料20%ポイント還元！"
            />
          </picture>
        </Heading>
        <SystemContainer>
          <p
            className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']} ${Utils['Align-center']}`}
          >
            【キャンペーン期間】
            <br className={Utils['Show-oox']} />{' '}
            2024年2月15日（木）09:00〜2024年4月15日（月）20:59
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

          <TxtCap
            as="p"
            className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
          >
            <TxtEmp02>
              本キャンペーン終了後、条件または特典を変更して類似のキャンペーンが実施される場合があります。
            </TxtEmp02>
          </TxtCap>
          <AnchorList>
            {anchors.map(v => (
              <li key={v.id}>
                <LinkIconBefore
                  href={`#${v.id}`}
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, v.id)
                  }
                >
                  <IconArrowDown />
                  {v.text}
                </LinkIconBefore>
              </li>
            ))}
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
        </SystemContainer>
        <div
          id={ANCHOR_ID.APPEAL1}
          className={`${Utils['Mt-48']} ${Utils['Align-center']}`}
          data-ratid="campaign_entertainment_unext_scroll-02_benefits"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <picture>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/campaign/entertainment/unext/img-appeal-01-sp-240329.png`}
              width="750"
              height="2682"
            />
            <img
              src={`${assets}img/campaign/entertainment/unext/img-appeal-01-pc-240329.png`}
              width="1032"
              height="921"
              alt="U-NEXT 無料トライアルの2つの特典！ 【1】300,000本以上の動画／190誌以上の雑誌が31日間無料で見放題／読み放題！ 【2】レンタル作品／購入作品を楽しむのに使える600円分のポイントプレゼント！ キャンペーン参加で31日間無料+月額利用料20%ポイント還元！（最大6カ月）"
              loading="lazy"
            />
          </picture>
        </div>
        <SystemContainer>
          <Heading
            id={ANCHOR_ID.FLOW}
            level="2"
            className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            ratId="campaign_entertainment_unext_scroll-03_flow"
            ratEvent="appear"
          >
            キャンペーンの流れ
          </Heading>
          <ul className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}>
            <Flow>
              <Heading level="3" className={Utils['Align-center']}>
                <TxtEmp01>
                  <TxtEmp02>STEP 1</TxtEmp02>
                  <br />
                  このページからエントリー
                </TxtEmp01>
              </Heading>
              <TxtCap
                as="p"
                className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
              >
                ※ エントリー対象条件は
                <LinkNormal
                  href={`#${ANCHOR_ID.CAMPAIGN_RULE}`}
                  onClick={e => anchorCallback(e, ANCHOR_ID.CAMPAIGN_RULE)}
                >
                  キャンペーンルール
                </LinkNormal>
                をご確認ください <br className={Utils['Show-xxo']} />※
                楽天モバイル未契約の方は、キャンペーン期間内にお申し込みください
              </TxtCap>
            </Flow>
            <Flow>
              <Heading level="3" className={Utils['Align-center']}>
                <TxtEmp01>
                  <TxtEmp02>STEP 2</TxtEmp02>
                  <br />
                  U-NEXTへ登録
                </TxtEmp01>
              </Heading>
              <TxtCap
                as="p"
                className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
              >
                ※ 登録メールアドレスは必ず
                <TxtEmp02>my 楽天モバイルの連絡先メールアドレス</TxtEmp02>
                を入力してください <br className={Utils['Show-xxo']} />※
                メールアドレスが合致しない場合は特典対象外となります ※
                上記ページ以外からの登録は特典対象外です
              </TxtCap>
            </Flow>
            <Flow>
              <div className={Utils['Align-center']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${assets}img/campaign/entertainment/unext/img-flow-01-sp.png`}
                    width="624"
                    height="703"
                  />
                  <img
                    src={`${assets}img/campaign/entertainment/unext/img-flow-01-pc.png`}
                    width="983"
                    height="243"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
              <TxtCap
                as="p"
                className={`${Utils['Align-llc']} ${Utils['Mt-8']}`}
              >
                ※条件達成の4カ月後末日ごろ進呈
                <br />
                ※楽天モバイルをご契約中かつU-NEXTへ本キャンペーンから初めてご登録のお客様が対象
                ※税抜価格の20%還元となります
              </TxtCap>
            </Flow>
          </ul>
        </SystemContainer>
        <div
          id={ANCHOR_ID.APPEAL2}
          className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
          data-ratid="campaign_entertainment_unext_scroll-04_contents"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <picture>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/campaign/entertainment/unext/img-appeal-02-sp-240329.png`}
              width="750"
              height="7280"
            />
            <img
              src={`${assets}img/campaign/entertainment/unext/img-appeal-02-pc-240329.png`}
              width="1032"
              height="2314"
              alt="あれも観たい、これも読みたい。だから、U-NEXT。U-NEXTなら、映画を観た後に、原作マンガや原作ドラマも簡単にチェック可能。わざわざ別のアプリやサービスを使い分けることなく、好きな作品を深掘りできます。"
              loading="lazy"
            />
          </picture>
        </div>
        <div
          id={ANCHOR_ID.APPEAL3}
          className={Utils['Align-center']}
          data-ratid="campaign_entertainment_unext_scroll-05_features"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <picture>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/campaign/entertainment/unext/img-appeal-03-sp-240329.png`}
              width="750"
              height="3724"
            />
            <img
              src={`${assets}img/campaign/entertainment/unext/img-appeal-03-pc-240329.png`}
              width="1032"
              height="1259"
              alt="【U-NEXTの6つの特長】01. 310,000本以上が見放題！最新レンタル作品も充実。 02. 動画も書籍もU-NEXTひとつでOK。 03. 毎月もらえる1,200ポイントでお得に。 04. マンガの購⼊などは、最⼤40%をポイントで還元。 05. ファミリーアカウントをつくれば、もっとお得。 06. ダウンロード機能で、いつでもどこでも視聴。"
              loading="lazy"
            />
          </picture>
        </div>
        <SystemContainer>
          <Heading
            id={ANCHOR_ID.GRANT_POINT}
            level="2"
            className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            ratId="campaign_entertainment_unext_scroll-06_flow"
            ratEvent="appear"
          >
            ポイント進呈時期の具体例
          </Heading>
          <TxtEmp01
            as="p"
            className={`${Utils['Align-llc']} ${Utils['Mt-16']}`}
          >
            U-NEXTに登録し、3月にキャンペーン条件を達成した場合、以下の時期に特典が受けられます。
          </TxtEmp01>
          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/campaign/entertainment/unext/img-point-sp.png`}
                width="686"
                height="1117"
              />
              <img
                src={`${assets}img/campaign/entertainment/unext/img-point-pc.png`}
                width="1032"
                height="356"
                alt="2月中旬～3月中旬：エントリー&U-NEXT登録（31日間無料視聴期間※）※無料期間中の利用はポイント付与対象外 3月中旬～4月中旬：1カ月目のご利用（月額2,189円（税込））でキャンペーン条件達成！ 条件達成から4カ月後の末日頃（7月末頃）に398ポイント還元（以後、最大6カ月）"
                loading="lazy"
              />
            </picture>
          </div>
        </SystemContainer>
        <SystemContainer>
          <div className={`${Utils['Mt-48']} ${Utils['Mt-pc-64']}`}>
            <Heading
              level="2"
              id="faq"
              className={Utils['Align-center']}
              ratId="campaign_entertainment_unext_scroll-07_faq"
              ratEvent="appear"
            >
              よくあるご質問
            </Heading>
            <AccordionList
              text={'キャンペーンへのエントリーは必要ですか？'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                キャンペーンへのエントリーは必要です。エントリー履歴につきましては「
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
                'このページ以外から、U-NEXTに申し込みをした場合は、このキャンペーンの対象になりますか？'
              }
              isOpened={false}
            >
              <p>
                キャンペーン対象外になります。本キャンペーン専用の申し込みページよりU-NEXTへご登録をお願いいたします。
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
              text={
                'キャンペーンのエントリーとU-NEXTの申し込みに順番はありますか？'
              }
              isOpened={false}
            >
              <p>
                キャンペーン期間中にエントリーいただければ、U-NEXTのお申し込み後になっても問題ございません。
                <br />
                ただし、このページからお申し込みされた楽天モバイルご契約者さまのみ対象となります。
              </p>
            </AccordionList>
            <AccordionList
              text={
                '過去にU-NEXTで初回無料特典を受け取っている場合、今回の申し込みでも初回無料特典特典は適用されますか？'
              }
              isOpened={false}
            >
              <p>
                初回無料特典は過去に特典を受け取ったことがない方が適用対象となります。過去に特典を受けたことがある場合は適用されません。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'U-NEXTの登録に使用したメールアドレスはどこで確認ができますか？'
              }
              isOpened={false}
            >
              <p>
                「メニュー」&gt;「アカウント・契約」&gt;「個人情報
                」&gt;「メールアドレス登録・変更」よりご確認いただけます。
                <br />
                ※セキュリティの観点により一部伏字での表示になります。
              </p>
            </AccordionList>
          </div>
        </SystemContainer>
        <SystemContainer>
          <div
            className={`${Utils['Align-llc']} ${Utils['Mt-8']}`}
            data-ratid="campaign_entertainment_unext_scroll-09_campaign"
            data-ratevent="appear"
            data-ratparam="all"
          >
          </div>
          <Heading
            level="2"
            id={ANCHOR_ID.CAMPAIGN_RULE}
            className={`${Utils['Mt-48']} ${Utils['Mt-pc-64']} ${Utils['Align-center']}`}
            ratId="campaign_entertainment_unext_scroll-10_campaign-rule"
            ratEvent="appear"
          >
            楽天モバイル エンタメ祭キャンペーン（U-NEXT）
          </Heading>
          <div className={Utils['Align-center']}>
          <TxtEmp02 as="p" className={`${Utils['Mt-24']} ${Utils['Mb-24']}`}>
            <TxtSize size="m">
              本キャンペーンは2024年4月15日をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>
          </div>
          <CampaignRule2168 />
        </SystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignEntertainmentUnext
