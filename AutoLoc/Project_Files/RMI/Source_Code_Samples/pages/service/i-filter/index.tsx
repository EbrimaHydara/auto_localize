import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaImage, MediaGridHalf } from '@components/layout/Media'
import { LinkIconAfter } from '@components/atoms/Link'
import { ButtonPrimary } from '@components/atoms/Buttons'
import { ListDisc, OlOnly, UlOnly } from '@components/atoms/List'
import { AccordionList } from '@components/atoms/AccordionList'
import { BannerHover } from '@components/atoms/Banner'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { mixins } from '@components/utils/Mixins'
import { IconPdf, IconChevronRight } from '@components/icons'
import { InfoboxBorder } from '@components/atoms/Infobox'

const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
  }
  a {
    width: 100%;
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

const listArgs1 = {
  text: [
    {
      text: '18歳未満の方に楽天モバイルをご利用いただく場合、あんしんコントロール by i-フィルターのご契約が必須となります。',
    },
    { text: '18歳以上の方にもご契約いただけます。' },
    {
      text: 'ご利用にはアプリの設定が必要です。設定方法は、ご契約後にお送りするご案内のメールをご覧ください。',
    },
  ],
}

const listArgs2 = {
  text: [
    {
      text: '年齢にあったフィルタリングを簡単設定',
    },
    { text: 'カテゴリを選択するだけでできる細かな設定' },
    { text: '必要なサイトだけ「見せる」ことも可能' },
  ],
}

const listArgs3 = {
  text: [
    {
      text: 'ブロックしたサイトだけではなく、 閲覧したサイトや検索した単語の確認も可能',
    },
    { text: 'フィルタリングの強度変更' },
    { text: '1日1回、利用状況をメールで受け取り' },
  ],
}

const listArgs4 = {
  text: [
    { text: 'お子さまに不適切なアプリを自動的に選別してフィルタリングが可能' },
    { text: '年齢にあったフィルタリングを簡単設定' },
    { text: 'カテゴリを選択するだけでできる細かな設定' },
  ],
}

const listArgs5 = {
  text: [
    {
      text: '利用時間の制限（Androidでは、i-フィルター専用ブラウザだけでなく、スマホやタブレット等の利用時間制限が可能。iOSではi-フィルター専用ブラウザの利用時間制限のみ可能。）',
    },
    {
      text: '情報に不正アクセスする危険性があったり、 アプリ内で課金が発生するアプリを起動した時に、スマートデバイスの利用者に通知（Android対象）',
    },
    { text: 'お子さまのスマートデバイスの位置情報履歴を表示（Android対象）' },
  ],
}

const listArgs6 = {
  text: [
    { text: 'HUAWEI P30 lite' },
    { text: 'HUAWEI nova 5T' },
    { text: 'OPPO Find X' },
    { text: 'OPPO AX7' },
    { text: 'OPPO R17 Pro' },
    { text: 'OPPO Reno 10x Zoom' },
  ],
}

const listArgs7 = {
  text: [
    { text: 'Redmi Note 11 Pro 5G' },
    { text: 'OPPO A5 2020' },
    { text: 'OPPO A73' },
    { text: 'OPPO A55s 5G' },
    { text: 'OPPO Reno A 128GB' },
    { text: 'OPPO Reno3 A' },
    { text: 'OPPO Reno5 A' },
    { text: 'OPPO Reno7 A' },
    { text: 'OPPO Reno9 A' },
    { text: 'OPPO A79 5G' },
  ],
}

const ServiceIFilter: NextPage = () => {
  const selectedCardIds = ['remote-support-for-device-operation']
  const pagetitle = 'あんしんコントロール by i-フィルター'
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
  const labelArgs = {
    item: [{ text: 'セキュリティ', isEmp: false }],
  }

  const theme = useContext(ThemeContext)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「あんしんコントロール by i-フィルター」サービス紹介。ご家庭でも外出先でも、お子さまのスマートフォン（スマホ）・タブレット利用を見守る、安心・便利なフィルタリング機能です"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            あんしんコントロール by i-フィルター
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-24']}>
            <MediaImage className={Utils['Align-left']}>
              <img
                src={`${assets}img/service/i-filter/img-01.png`}
                alt=""
                width="343"
                height="172"
              />
            </MediaImage>
            <div>
              ご家庭でも外出先でも、お子さまのスマホ・タブレット利用を見守る、あんしん・便利なフィルタリングサービスです。
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">330</AlphanumericSize>
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
                    href="/guide/application/?lid-r=service_i-filter_guide_application01"
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
                    data-ratid="service_i-filter_plans01"
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
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/i-filter/?l-id=service_i-filter_guide_i-filter01">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>
        <GrayBox className={`${Utils['Mt-32']} ${Utils['Py-16']}`}>
          <SystemContainer>
            <Heading level="2" className={Utils['Mt-40']}>
              あんしん・安全なインターネット利用のために！
            </Heading>
            <MediaGridHalf className={Utils['Mt-16']}>
              <MediaImage>
                <img src={`${assets}img/service/i-filter/img-02.png`} alt="" />
              </MediaImage>
              <div>
                <p>
                  有害なサイトにアクセスしてしまった、詐欺サイトにひっかかってしまった…などなど、インターネット上のトラブルに巻き込まれる件数が年々増加している中、安心してスマートフォンやタブレットをご利用いただくために必要不可欠な機能を備えています。
                </p>
              </div>
            </MediaGridHalf>
            <ListDisc {...listArgs1} className={Utils['Mt-16']} />
            <Heading level="4" className={Utils['Mt-40']} as="h3">
              設定はカスタマイズ可能
            </Heading>
            <p className={Utils['Mt-16']}>
              利用時間を制限して使いすぎを防ぐ機能や、年齢にあわせたフィルタリング調整など、必要に応じてカスタマイズできます。
            </p>
            <Heading level="4" className={Utils['Mt-40']} as="h3">
              自由度と精度の高いWebフィルタリングで「見せる」「見せない」が自由に設定できる
            </Heading>
            <ListDisc {...listArgs2} className={Utils['Mt-16']} />
            <Heading level="4" className={Utils['Mt-40']} as="h3">
              安心の見守り機能で利用状況の確認もできる
            </Heading>
            <ListDisc {...listArgs3} className={Utils['Mt-16']} />
            <Heading level="4" className={Utils['Mt-40']} as="h3">
              保護者が操作できるアプリフィルタリングで「使わせる」「使わせない」を自由に設定できます。（Android対象）
            </Heading>
            <ListDisc {...listArgs4} className={Utils['Mt-16']} />
            <Heading level="4" className={Utils['Mt-40']} as="h3">
              そのほかにも下記のような機能をご利用いただけます。
            </Heading>
            <ListDisc {...listArgs5} className={Utils['Mt-16']} />
            <Heading
              level="4"
              className={Utils['Mt-40']}
              as="h3"
              id="Unavailable-Products"
            >
              ご利用いただけない製品
            </Heading>
            <p className={Utils['Mt-16']}>
              下記の製品は、あんしんコントロール by
              i-フィルターをご利用いただくことができません。18歳未満の方は、下記以外の製品でお申し込みください。
            </p>
            <ListDisc {...listArgs6} className={Utils['Mt-8']} />
            <TxtCap className={Utils['Mt-8']} as="p">
              ※2022年6月22日時点
            </TxtCap>
            <TxtEmp01 className={Utils['Mt-40']} as="p">
              一部機能がご利用いただけない可能性のある製品
            </TxtEmp01>
            <p className={Utils['Mt-16']}>
              弊社での検証の結果、Webフィルタリング等の主要機能が正しく動作することを確認しておりますが、主要機能以外の一部機能が正しく動作しない可能性がございます。
            </p>
            <ListDisc {...listArgs7} className={Utils['Mt-16']} />
            <TxtCap className={Utils['Mt-8']} as="p">
              ※2024年2月15日時点
            </TxtCap>
            <p className={`${Utils['Mt-56']} ${Utils['Mb-40']}`}>
              あんしんコントロール by
              i-フィルターは、デジタルアーツ株式会社の「i-フィルター for
              マルチデバイス」を利用したサービスです。
            </p>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <AccordionList
            text={'動作環境'}
            isOpened={false}
            className={Utils['Mt-56']}
          >
            <Heading level="4">
              OSのバージョン<TxtSize size="s">※</TxtSize>
            </Heading>
            <p className={Utils['Mt-16']}>
              Android
              6.0、7.0、7.1、8.0、8.1、9.0、10.0、11.0、12.0、13.0、14.0／iOS
              13.0～17.0、iPadOS 13.1～17.0／Windows® 11（Home、Pro）、Windows®
              10（Home、Pro）
            </p>
            <p className={Utils['Mt-16']}>
              ※2023年10月時点。なお、iOS 12.xは2023年9月28日(木)
              午後6時00分を持ちましてサポートが終了いたしました。
              <br />
              ※既にiOS12にてi-フィルターをご利用中のお客様につきましては、引き続きi-フィルターをご利用いただけます。
              <br />
              ※2023年10月31日（火）追記：2023年3月時点として記載されていました動作環境のOSのバージョンに一部誤りがございました。「Windows®
              8.1（Update対応）（Windows 8.1、Windows 8.1
              Pro）」は2023年1月10日（火）午後6時00分を持ちましてサポートが終了しております。
              <br />
              ※Windows 11（Sモード）およびWindows
              10（Sモード）ではご利用いただけません。Sモードの解除が必要となります。
              <br />
              ※Android
              OSのバージョンによりアプリの動作が異なる可能性がございます。最新バージョンでのご利用を推奨いたします。
              <br />
              ※リリース直後の最新OSバージョンでは、正常に動作しない可能性があります。正常に動作するまでお時間をいただく場合があります。
              <br />
              ※アプリのバージョンアップにより、対応OSが変更になる場合があります。
            </p>
          </AccordionList>

          <AccordionList text={'ご利用上の注意'} isOpened={false}>
            <UlOnly>
              <li>
                18歳未満のお客様がフィルタリングサービスを利用せずにご利用いただくことになる場合には、保護者の方に
                <LinkIconAfter
                  as="a"
                  href="/pdf/terms/application_for_non-use_of_filtering_service.pdf?20201022"
                >
                  フィルタリングサービスを利用しない旨の申出書（フィルタリング・サービス不要申出書）
                  <IconPdf />
                </LinkIconAfter>
                に利用されない理由をご記入のうえご提出いただくことになります。
              </li>
            </UlOnly>
            <p className={`${Utils['Mt-16']} ${Utils['Pl-16']}`}>
              ※回線契約翌月の10日までに解約書面を当社が受領した場合は、フィルタリングサービス料金はいただきません（今後発生する請求料金からの減額処理、もしくは口座振込による返金とさせていただきます）。
              <br />
              ※書面受領の翌月末までに解約となります。
            </p>
            <UlOnly className={Utils['Mt-32']}>
              <li>
                あんしんコントロール by
                i-フィルターのご利用に際して、インストールが正常に完了しない場合、以下の設定をご確認ください。
              </li>
            </UlOnly>
            <p className={Utils['Mt-24']}>
              【Android】
              <br />
              ファミリーリンクが有効になっている場合、初期設定ではGoogle
              Play外からのあんしんコントロール by
              i-フィルターアプリのインストールができませんので、設定を変更していただく必要があります。
            </p>
            <OlOnly className={Utils['Mt-16']}>
              <li>保護者のファミリーリンクを起動</li>
              <li> 設定を変更するお子さまのアカウントを選択</li>
              <li>画面下部にある端末名の[設定]をタップ</li>
              <li>提供元不明のアプリの項目を[許可]に変更</li>
            </OlOnly>
            <p className={Utils['Mt-24']}>
              【iOS】
              <br />
              スクリーンタイムの設定がされている場合は、あんしんコントロール by
              i-フィルターアプリのインストールが正常に完了しない可能性があります。以下の手順で設定のご確認・変更をお願いいたします。
            </p>
            <OlOnly className={Utils['Mt-16']}>
              <li>
                [設定＞スクリーンタイム＞コンテンツプライバシーの制限]を開く
              </li>
              <li>
                [iTunesおよびApp Storeでの購入]で、
                <br />
                ・アプリのインストールが制限されている場合、[許可]に変更
                <br />
                ・パスワードを要求する設定が[常に必要]になっている場合、[必須ではない]に変更
              </li>
              <li>
                [コンテンツ制限＞App]で、[Appを許可しない]になっている場合、[すべてのAppを許可]に変更
              </li>
            </OlOnly>
            <UlOnly>
              <li className={Utils['Pt-32']}>
                月途中で加入または解約された場合、月額利用料が日割りとなります。
              </li>
            </UlOnly>
          </AccordionList>

          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
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
                    href="/guide/application/?lid-r=service_i-filter_guide_application02"
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
                    data-ratid="service_i-filter_plans02"
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
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/i-filter/?l-id=service_i-filter_guide_i-filter02">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>

          <ImgList className={Utils['Mt-48']}>
            <li>
              <BannerHover href="/fee/family/?l-id=service_i-filter_fee_family">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/bnr/bnr-family-343-108-231208.png`}
                    width="960"
                    height="360"
                  />
                  <img
                    src={`${assets}img/bnr/bnr-family-504-158-231208.png`}
                    alt="家族みんなでおトクに使えるRakuten最強プラン"
                    width="1032"
                    height="108"
                  />
                </picture>
              </BannerHover>
            </li>
            <li>
              <BannerHover href="/guide/kidsjunior/">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/bnr/guide-kidsjunior-343-108.png?220407`}
                    width="960"
                    height="360"
                  />
                  <img
                    src={`${assets}img/bnr/guide-kidsjunior-504x158.png?220407`}
                    alt="子どもスマホ利用あんしんガイド"
                    width="1032"
                    height="108"
                  />
                </picture>
              </BannerHover>
            </li>
          </ImgList>
          <ImgList className={Utils['Mt-16']}>
            <li>
              <BannerHover href="/guide/security/?l-id=service_i-filter_guide_security">
                <img
                  src={`${assets}img/bnr/guide-security-504-160.png`}
                  alt="情報セキュリティ 楽天モバイルの情報セキュリティへの取り組みをご紹介"
                  width="1032"
                  height="108"
                  style={{ border: '1px solid #ccc' }}
                />
              </BannerHover>
            </li>
            <li>
              <BannerHover href="/guide/security/kids-manner/?l-id=service_i-filter_guide_security_kids-manner">
                <img
                  src={`${assets}img/bnr/bnr-kids-manner-arrow-504-160.png`}
                  alt="子どもと学ぶスマホのマナー スマホのマナーをしっかりと身につけて安全につかおう"
                  width="1032"
                  height="108"
                  style={{ border: '1px solid #ccc' }}
                />
              </BannerHover>
            </li>
          </ImgList>
          <div className={Utils['Mt-16']}>
            <BannerHover href="/guide/security/cyber-bousai2022/?l-id=service_i-filter_guide_security_cyber-bousai2022">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-cyber-bousai2022-328-185.png`}
                  width="960"
                  height="360"
                />
                <img
                  src={`${assets}img/bnr/bnr-cyber-bousai2022-1032-160.png`}
                  alt="お買いものパンダと学ぼうスミッシング対策入門 SMS+フィッシング"
                  width="1032"
                  height="108"
                />
              </picture>
            </BannerHover>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="i-filter"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />
            <Recommend
              className={Utils['Mt-24']}
              lId="i-filter"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceIFilter
