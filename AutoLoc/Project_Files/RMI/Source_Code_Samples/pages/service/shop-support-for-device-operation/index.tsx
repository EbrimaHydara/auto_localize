import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelNormalSingle } from '@components/atoms/Label'
import { MediaGrid, MediaImage, MediaList3 } from '@components/layout/Media'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { ButtonRegular, ButtonPrimary } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { AccordionList } from '@components/atoms/AccordionList'
import { ImageCapturer } from '@components/atoms/Image'
import { IconArrowDown } from '@components/icons'
import { Tab } from '@components/atoms/Tab'
import { FlowList } from '@components/atoms/Flow'
import { BoxApp, AppIcon, AppTxt, AppTtl, AppLink } from '@components/atoms/Box'
import {
  StoreButtonAppStore,
  StoreButtonGooglePlay,
} from '@components/atoms/StoreButton'
import { DescriptionListDefaultSp2Col } from '@components/atoms/DescriptionList'
import { ListDisc } from '@components/atoms/List'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { anchorCallback } from '@components/utils/anchorCallback'

const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const GrayContent = styled.div`
  padding: 24px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const DescriptionListDt = styled(DescriptionListDefaultSp2Col)`
  > div {
    justify-content: normal;
    > dd {
      padding: 16px;
    }
    > dt {
      width: 32%;
      border-right: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
`

const ApplyBtn = styled.div`
  display: flex;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  p {
    text-align: left;
  }
`

const ApplyBtnBox = styled(InfoboxBorder)`
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`

const ApplyBtnItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  margin: auto;
  padding: 0;
  &:first-child {
    margin-bottom: 32px;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
      position: relative;
      top: 16px;
    }
  }
  &:last-child {
    margin-top: 0;
  }
  ${mixins.mq.MinL} {
    padding: 0 32px;
    &:first-child {
      &::after {
        content: '';
        width: 1px;
        height: 168px;
        background-color: ${props => props.theme.colors.monotone75};
        position: absolute;
        left: 50%;
        top: initial;
      }
    }
  }
`

const ApplyBtnLink = styled.div`
  display: inline-block;
`

const ServiceShopsupportfordeviceoperation: NextPage = () => {
  const pagetitle = 'あんしん操作サポート'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'オプションサービス',
      url: '/service/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const heading1 = 'アプリからのお申し込み'
  const heading2 = 'Webからのお申し込み'

  const listArgs1 = {
    text: [
      { text: '製品の操作説明（取扱説明書の範囲内）' },
      { text: 'SNSアプリ（LINE、X（旧Twitter）、Instagram、Facebook）の操作' },
      { text: '楽天グループアプリ（楽天市場、楽天カード、楽天ペイ）の操作' },
      { text: '電話の基本操作や電話帳の登録' },
      { text: 'マナーモード設定' },
      { text: 'Wi-Fi設定/接続' },
      { text: 'テザリング設定基本操作' },
      { text: '海外利用に関するご案内' },
      { text: 'OSバージョンアップ' },
    ],
  }

  const listArgs2 = {
    text: [
      { text: '楽天モバイルでご契約中の楽天回線' },
      { text: '楽天回線動作確認済み製品' },
    ],
  }

  const Content1 = () => (
    <ul>
      <FlowList className={Utils['Mt-32']}>
        <Heading level="3">1. my 楽天モバイルにログインしてください</Heading>
        <p className={Utils['Mt-16']}>
          my 楽天モバイルアプリをお持ちでない方はダウンロードしてください。
        </p>
        <BoxApp className={Utils['Mt-16']}>
          <AppIcon>
            <img src={`${assets}img/common/icon-rmb-app.png`} alt="" />
          </AppIcon>
          <AppTxt>
            <AppTtl>my 楽天モバイル</AppTtl>
            <AppLink>
              <li>
                <StoreButtonGooglePlay
                  alt="Google Play"
                  url="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.ecare"
                />
              </li>
              <li>
                <StoreButtonAppStore
                  alt="App Store"
                  url="https://apps.apple.com/jp/app/myrakutenmobile/id1473535769"
                />
              </li>
              <li>
                <ButtonRegular as="a" href="/guide/my-rakuten-mobile/">
                  詳細を見る
                </ButtonRegular>
              </li>
            </AppLink>
          </AppTxt>
        </BoxApp>
      </FlowList>
      <FlowList>
        <Heading level="3">
          2. 契約プラン画面にある「オプションサービスの追加・解約」をタップ
        </Heading>
        <div className={Utils['Align-center']}>
          <ImageCapturer
            src={`${assets}img/service/shop-support-for-device-operation/img11-230623.png`}
            alt=""
            className={Utils['Mt-16']}
          />
        </div>
      </FlowList>
      <FlowList>
        <Heading level="3">
          3.
          オプションサービスの「あんしん操作サポート」にチェックを入れ、画面下部の「変更する」をタップ
        </Heading>
        <div className={Utils['Align-center']}>
          <ImageCapturer
            src={`${assets}img/service/shop-support-for-device-operation/img12-230623.png`}
            alt=""
            className={Utils['Mt-16']}
          />
        </div>
        <p className={Utils['Mt-16']}>
          以上でお申し込みは完了です。
          <br />
          別途申し込み完了メールが届くのでご確認ください。
        </p>
      </FlowList>
    </ul>
  )
  const Content2 = () => (
    <ul>
      <FlowList className={Utils['Mt-32']}>
        <Heading level="3">
          1. 「my
          楽天モバイル」にログインし、「契約プラン・オプション設定」をタップ
        </Heading>
        <ButtonPrimary
          className={Utils['Mt-16']}
          as="a"
          href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=network_shop-support-for-device-operation_ecare"
        >
          my 楽天モバイルにログイン
        </ButtonPrimary>
        <div className={Utils['Align-center']}>
          <ImageCapturer
            src={`${assets}img/service/shop-support-for-device-operation/img10-230623.png`}
            alt=""
            className={Utils['Mt-16']}
          />
        </div>
      </FlowList>
      <FlowList>
        <Heading level="3">
          2. 契約プラン画面にある「オプションサービスの追加・解約」をタップ
        </Heading>
        <div className={Utils['Align-center']}>
          <ImageCapturer
            src={`${assets}img/service/shop-support-for-device-operation/img11-web-230623.png`}
            alt=""
            className={Utils['Mt-16']}
          />
        </div>
      </FlowList>
      <FlowList>
        <Heading level="3">
          3.
          オプションサービスの「あんしん操作サポート」にチェックを入れ、画面下部の「変更する」をタップ
        </Heading>
        <div className={Utils['Align-center']}>
          <ImageCapturer
            src={`${assets}img/service/shop-support-for-device-operation/img12-web-230623.png`}
            alt=""
            className={Utils['Mt-16']}
          />
        </div>
        <p className={Utils['Mt-16']}>
          以上でお申し込みは完了です。
          <br />
          別途申し込み完了メールが届くのでご確認ください。
        </p>
      </FlowList>
    </ul>
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="回線契約や名義変更などのお手続き、故障受付、製品やアプリの操作を説明、LINEや電話帳の新しいスマホへの移行サポートなど、楽天モバイルショップ（店舗）でできるサポートサービスをご案内します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1">{pagetitle}</Heading>
          <div className={Utils['Mt-24']}>
            <LabelNormalSingle>ショップサポート</LabelNormalSingle>
          </div>
          <MediaGrid className={Utils['Mt-32']}>
            <MediaImage>
              <img
                src={`${assets}img/service/shop-support-for-device-operation/img01.png`}
                alt=""
              />
            </MediaImage>
            <div>
              あんしん操作サポートは楽天モバイル取り扱い製品やアプリ※の操作方法をサポートする、楽天モバイルショップ（店舗）のサービスです。店舗でお客様と直接お話ししながら、わかりやすくお困りごとにお答えします。
              <TxtCap as="p" className={Utils['Mt-8']}>
                <TxtEmp02>
                  ※一部家電量販店では「あんしん操作サポート」の対応を行っておりません
                </TxtEmp02>
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※アプリはSNSや楽天グループサービスの一部が対象です
              </TxtCap>
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">550</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
              </div>
            </div>
          </MediaGrid>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ApplyBtnBox>
              <Heading level="4" className={Utils['Align-center']}>
                お申し込み
              </Heading>
              <p className={Utils['Mt-8']}>
                楽天モバイルのご契約状況によってお申し込み方法が異なります。
              </p>
              <ApplyBtn className={Utils['Mt-24']}>
                <ApplyBtnItem>
                  <TxtEmp01>未契約の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="/guide/application/?lid-r=service_shop-support-for-device-operation_guide_application01"
                    className={Utils['Mt-8']}
                  >
                    プランと一緒に申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    契約プランを選択後、「オプションサービス」の項目からお申し込みください。
                  </p>
                </ApplyBtnItem>
                <ApplyBtnItem>
                  <TxtEmp01>ご契約中の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                    data-ratid="service_shop-support-for-device-operation_plans01"
                    data-ratevent="click"
                    data-ratparam="all"
                    className={Utils['Mt-8']}
                  >
                    オプションサービスを申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    ログイン後、「オプションサービスの追加・解約」からお申し込みください。
                  </p>
                </ApplyBtnItem>
              </ApplyBtn>
              <ApplyBtnLink className={Utils['Mt-24']}>
                <LinkIconBefore
                  href="#app"
                  onClick={e => anchorCallback(e, 'app')}
                >
                  <IconArrowDown />
                  お申し込み・ご利用方法詳細を見る
                </LinkIconBefore>
              </ApplyBtnLink>
            </ApplyBtnBox>
          </div>
        </SystemContainer>
        <GrayBox
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']}>
              <TxtEmp01>
                何度でも来店して
                <br className={Utils['Disp-tb-sp']} />
                サポートが受けられます
              </TxtEmp01>
            </Heading>
            <p className={Utils['Mt-16']}>
              お申し込みいただいたその日からサービスをご利用いただけます。楽天モバイルショップでご購入いただいた製品だけでなく、楽天回線の動作確認が取れる他製品に対しても本サポートをご利用いただけます。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※このサービスは
              <TxtEmp02>
                お近くの楽天モバイルショップにご来店いただき、スタッフ（R
                CREW）がお客様のお困りごとをサポートするサービス
              </TxtEmp02>
              です。ご自宅や外出先からオンラインでサポートをご希望のお客様は、「
              <LinkNormal href="/service/remote-support-for-device-operation/">
                スマホ操作遠隔サポート
              </LinkNormal>
              」をご利用ください
            </TxtCap>
            <LinkIconBefore href="#app" className={Utils['Mt-32']}>
              <IconArrowDown />
              あんしん操作サポートのお申し込み方法を見る
            </LinkIconBefore>
            <Heading level="3" className={Utils['Mt-32']}>
              サポート例
            </Heading>
            <p className={Utils['Mt-8']}>
              スマホ操作でのサポート例をご案内します。
            </p>
            <MediaList3 className={Utils['Mt-0']}>
              <div className={Utils['Mt-24']}>
                <Heading level="4">製品の操作説明</Heading>
                <MediaImage
                  className={`${Utils['Mt-8']} ${Utils['Mb-16']} ${Utils['Align-center']}`}
                >
                  <img
                    src={`${assets}img/service/shop-support-for-device-operation/img02.png`}
                    alt=""
                    width="658"
                    height="424"
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  お客様に画面を確認いただきながら、取扱説明書に沿って操作方法をご説明いたします。
                </p>
              </div>
              <div className={`${Utils['Mt-32']} ${Utils['Mt-pc-24']}`}>
                <Heading level="4">SNSアプリの操作説明</Heading>
                <MediaImage
                  className={`${Utils['Mt-8']} ${Utils['Mb-16']} ${Utils['Align-center']}`}
                >
                  <img
                    src={`${assets}img/service/shop-support-for-device-operation/img03.png`}
                    alt=""
                    width="658"
                    height="424"
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  LINE、X（旧Twitter）、Instagram、Facebookアプリの操作方法をご説明いたします。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※アカウント、データ移行は含みません
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※上記以外のSNSは対象外となります
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※LINEのデータ移行をご希望のお客様は「
                  <LinkNormal href="/service/shop-support-for-oneshot-operation/">
                    データ移行サポート
                  </LinkNormal>
                  」をご利用ください
                </TxtCap>
              </div>
              <div className={`${Utils['Mt-32']} ${Utils['Mt-pc-24']}`}>
                <Heading level="4">楽天グループアプリの操作説明</Heading>
                <MediaImage
                  className={`${Utils['Mt-8']} ${Utils['Mb-16']} ${Utils['Align-center']}`}
                >
                  <img
                    src={`${assets}img/service/shop-support-for-device-operation/img04.png`}
                    alt=""
                    width="656"
                    height="423"
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  楽天市場、楽天カード、楽天ペイアプリの操作方法をご説明いたします。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※一部サービスのサポートは無料で受けられる場合があります。
                </TxtCap>
              </div>
            </MediaList3>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <DescriptionListDt className={Utils['Mt-32']}>
            <div>
              <dt>サポート内容</dt>
              <dd>
                <TxtCap as="p" className={Utils['Mb-8']}>
                  <TxtEmp02>
                    ※製品の操作はお客様ご自身で行っていただきます。記載内容以外はサポート対象外です
                  </TxtEmp02>
                </TxtCap>
                <ListDisc {...listArgs1} />
              </dd>
            </div>
            <div>
              <dt>サポート対象</dt>
              <dd>
                <ListDisc {...listArgs2} />
              </dd>
            </div>
          </DescriptionListDt>
          <AccordionList
            text={'ご利用上の注意'}
            isOpened={false}
            className={Utils['Mt-32']}
          >
            <UlOnly>
              <li>
                <TxtEmp02>
                  一部家電量販店では「あんしん操作サポート」の対応を行っておりません。お申し込み前にお近くのショップをご確認ください。
                </TxtEmp02>
              </li>
              <li>
                月途中で加入または解約された場合、月額利用料が日割りとなります。
              </li>
              <li>
                サポート対象製品の操作については、取扱説明書や公開されているホームページを確認しながらサポートをさせていただきますが、一部サポートの対象外となる場合がございます。あらかじめご了承ください。
              </li>
            </UlOnly>
          </AccordionList>
          <Heading level="2" className={Utils['Mt-48']}>
            サポート対応ショップ
          </Heading>
          <p className={Utils['Mt-16']}>
            ショップ一覧ページからサポート対応ショップをご確認いただけます。ご来店の際は予約がおすすめです。予約なしでも対応は可能ですが、お待ちいただく場合がございます。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            <TxtEmp02>
              ※一部家電量販店では「あんしん操作サポート」の対応を行っておりません
            </TxtEmp02>
          </TxtCap>
          <GrayContent className={Utils['Mt-24']}>
            <p>
              お近くのエリアをご選択の上、「サービスで絞り込む」をタップします。表示された画面の「あんしん操作サポート」にチェックを入れ「検索ボタン」をタップすると対応ショップが一覧で表示されます。
            </p>
            <div className={Utils['Align-center']}>
              <ImageCapturer
                className={Utils['Mt-16']}
                src={`${assets}img/service/shop-support-for-device-operation/img05.png`}
                alt=""
                width="768"
                height="1024"
              />
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
              <ButtonRegular as="a" href="/shop/search/">
                あんしん操作サポートの
                <br className={Utils['Disp-tb-sp']} />
                対応ショップを探す
              </ButtonRegular>
            </div>
            <p className={Utils['Mt-32']}>
              各ショップ詳細ページの「対応サービス」欄をご確認ください。
            </p>
            <div className={Utils['Align-center']}>
              <ImageCapturer
                className={Utils['Mt-16']}
                src={`${assets}img/service/shop-support-for-device-operation/img06.png`}
                alt=""
                width="768"
                height="1024"
              />
            </div>
          </GrayContent>
          <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
            <ApplyBtnBox>
              <Heading level="4" className={Utils['Align-center']}>
                お申し込み
              </Heading>
              <p className={Utils['Mt-8']}>
                楽天モバイルのご契約状況によってお申し込み方法が異なります。
              </p>
              <ApplyBtn className={Utils['Mt-24']}>
                <ApplyBtnItem>
                  <TxtEmp01>未契約の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="/guide/application/?lid-r=service_shop-support-for-device-operation_guide_application02"
                    className={Utils['Mt-8']}
                  >
                    プランと一緒に申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    契約プランを選択後、「オプションサービス」の項目からお申し込みください。
                  </p>
                </ApplyBtnItem>
                <ApplyBtnItem>
                  <TxtEmp01>ご契約中の方</TxtEmp01>
                  <ButtonPrimary
                    as="a"
                    href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                    data-ratid="service_shop-support-for-device-operation_plans02"
                    data-ratevent="click"
                    data-ratparam="all"
                    className={Utils['Mt-8']}
                  >
                    オプションサービスを申し込む
                  </ButtonPrimary>
                  <p className={Utils['Mt-8']}>
                    ログイン後、「オプションサービスの追加・解約」からお申し込みください。
                  </p>
                </ApplyBtnItem>
              </ApplyBtn>
              <ApplyBtnLink className={Utils['Mt-24']}>
                <LinkIconBefore
                  href="#app"
                  onClick={e => anchorCallback(e, 'app')}
                >
                  <IconArrowDown />
                  お申し込み・ご利用方法詳細を見る
                </LinkIconBefore>
              </ApplyBtnLink>
            </ApplyBtnBox>
          </div>
          <Heading level="2" id="app" className={Utils['Mt-48']}>
            お申し込み方法
          </Heading>
          <Heading level="3" className={Utils['Mt-16']}>
            楽天モバイル新規ご契約時
          </Heading>
          <p className={Utils['Mt-8']}>
            Webでお申し込みの際は、お申し込みフローに沿って「あんしん操作サポート」のオプションサービスをお選びください。
          </p>
          <p className={Utils['Mt-8']}>
            楽天モバイルショップでお申し込みの際は、スタッフ（R
            CREW）にお申し付けください。
          </p>
          <Heading level="3" className={Utils['Mt-16']}>
            楽天モバイルご契約中
          </Heading>
          <p className={Utils['Mt-8']}>
            my 楽天モバイルからお申し込みください。
          </p>

          <Tab
            className={Utils['Mt-24']}
            heading1={heading1}
            heading2={heading2}
            content1={<Content1 />}
            content2={<Content2 />}
          />
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['shopguide', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceShopsupportfordeviceoperation
