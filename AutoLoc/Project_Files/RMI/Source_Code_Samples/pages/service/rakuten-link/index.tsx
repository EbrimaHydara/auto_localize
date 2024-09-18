import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtNormal,
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { MediaImage, MediaGrid } from '@components/layout/Media'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc, UlOnly } from '@components/atoms/List'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
} from '@components/icons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Recommend } from '@components/include/service/Recommend'
import { Table } from '@components/atoms/Table'
import { useMediaQuery } from '~/hooks/useMediaQuery'
import { Related } from '@components/include/service/Related'
import { RakutenLinkDesktopBnr } from '@components/include/common/RakutenLinkDesktopBnr'
import { BannerHover } from '@components/atoms/Banner'
import { JsonLoadInfo } from '@components/include/common/JsonLoadInfo'

// 要確認 listの中にhtml

const GrayBox = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.monotone97};
`
const Kv = styled.div`
  position: relative;
  background-image: url(${assets}img/service/rakuten-link/hero-pc.png?211015);
  background-size: contain;
  background-position: bottom;
  background-position-x: right;
  background-repeat: no-repeat;
  height: 430px;
  margin: 0 auto;
  max-width: ${props => props.theme.max.l};
  ${mixins.mq.MaxM} {
    background: none;
    height: auto;
    padding: 8px 0 0;
  }
`
const KvCap = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  text-align: right;
  ${mixins.mq.MaxM} {
    position: static;
  }
`
const KvText = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  ${mixins.mq.MaxM} {
    position: static;
    margin-top: 8px;
    text-align: center;
    transform: translateY(0);
  }
`
const KvTextCatch = styled.div`
  font-size: 40px;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 28px;
  }

  span {
    font-weight: normal;
    font-size: 13px;
  }
`
const KvTextDescription = styled.div`
  margin-top: 16px;
  font-size: 22px;
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    font-size: 16px;
  }
`
const KvTextTitle = styled.h1`
  margin-top: 16px;
  font-size: 52px;
  color: ${props => props.theme.colors.primary};
  ${mixins.mq.MaxM} {
    margin-top: 8px;
    font-size: 36px;
  }

  img {
    ${mixins.mq.MaxM} {
      width: 50px;
    }
  }

  span {
    margin-left: 12px;
    ${mixins.mq.MaxM} {
      margin-left: 16px;
    }
  }
`
const KvImgSp = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    display: none;
  }
  img {
    max-width: 375px;
  }
`
const AppContainer = styled.div`
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`
const AppHead = styled.h2`
  font-size: 22px;
  ${mixins.mq.MaxM} {
    font-size: 16px;
  }
`
const AppLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  ${mixins.mq.MaxM} {
    gap: 8px;
  }

  > div {
    max-width: 200px;
  }
`
const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1032px;
  margin-inline: auto;
  column-gap: 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    padding: 8px;
    span {
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const FeatureLink = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 24px;
  column-gap: 28px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 32px;
    row-gap: 16px;
  }
`

const ServiceContent2 = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
  column-gap: 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }

  h3 {
    min-height: 66px;
    ${mixins.mq.MaxM} {
      min-height: 16px;
    }
  }
`
const ServiceContent2Links = styled.div`
  display: flex;
  gap: 32px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
  }
`
const ServiceContent3 = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  margin-top: 80px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
    margin-top: 40px;
  }
`
const FeeTablePc = styled.div`
  ${mixins.mq.MaxM} {
    display: none;
  }

  table {
    display: table;
    margin-top: 16px;
    border-color: ${props => props.theme.colors.monotone75};

    col {
      &:nth-child(1) {
        width: 14%;
      }
      &:nth-child(2) {
        width: 34%;
      }
      &:nth-child(3) {
        width: 26%;
      }
      &:nth-child(4) {
        width: 26%;
      }
    }
    th,
    td {
      vertical-align: middle;
      text-align: center;
      font-weight: normal;
      border-color: ${props => props.theme.colors.monotone75};
      color: ${props => props.theme.colors.lightBlack};
    }
    th {
      &.thPrimary {
        background-color: ${props => props.theme.colors.monotone40};
        color: ${props => props.theme.colors.white};
      }
      &.thSecondary {
        background-color: ${props => props.theme.colors.monotone56};
        color: ${props => props.theme.colors.white};
      }
      &.thTertiary {
        background-color: ${props => props.theme.colors.monotone88};
      }
      &.thNone {
        background-color: ${props => props.theme.colors.white};
        border: 0;
      }
    }
  }
`
const FeeTableSp = styled.div`
  ${mixins.mq.MinL} {
    display: none;
  }

  table {
    margin-top: 16px;
    border: 1px solid $color_monotone75;
    text-align: center;
    th,
    td {
      text-align: center;
      font-weight: normal;
      color: ${props => props.theme.colors.lightBlack};
    }
    th {
      &.thPrimary {
        background-color: ${props => props.theme.colors.monotone56};
        color: ${props => props.theme.colors.white};
      }
      &.thSecondary {
        padding: 8px;
        background-color: ${props => props.theme.colors.monotone75};
        color: ${props => props.theme.colors.white};
      }
      &.thTertiary {
        padding: 16px 8px;
        background-color: ${props => props.theme.colors.monotone97};
      }
    }
  }
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const LinkIconAfterPL0 = styled(LinkIconAfter)`
  > span {
    padding-left: 0;
  }
`

const ServiceRakutenlink: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = 'Rakuten Link'
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

  const theme = useContext(ThemeContext)
  const isPc = useMediaQuery(`(min-width: ${theme.min.l})`)

  const ListArgs2 = {
    text: [
      {
        text: 'Rakuten Linkをはじめて起動する際に、Rakuten最強プランに契約した電話番号と契約時に登録した楽天IDを用いた認証を行います。',
      },
      {
        text: 'Rakuten Linkを利用中の製品を機種変更し、変更後の製品でRakuten Linkを利用する場合、「Rakuten Link利用規約」「「Rakuten Link」に関するアプリケーションポリシー」を改めてご確認いただき、ご同意のうえご使用ください。',
      },
      {
        text: '「あんしんコントロール by i-フィルター」を有効にした製品でRakuten Linkを利用する場合、アクセス権限設定時に保護者アカウントのパスワードの入力が必要です。',
      },
      {
        text: 'Wi-Fiに接続せず、アンテナマークが表示されている状態で設定を推奨しております。',
      },
    ],
  }

  const ListArgs3 = {
    text: [
      {
        text: '海外への渡航の前に、国内でRakuten Linkを認証してください。海外ローミングエリアによっては認証できない場合がございます。',
      },
      {
        text: 'Rakuten Linkで海外ローミング（データ通信）をご利用いただく場合、my 楽天モバイルの海外ローミング（データ通信）の設定を「オン」にしてください。',
      },
    ],
  }

  const ListArgs4 = {
    text: [
      {
        text: 'Rakuten Linkを利用中の製品を変更する場合、機種変更後にRakuten Linkをインストールしてログインすれば、自動バックアップされたデータが復元されます。',
      },
    ],
  }

  const ListArgs5 = {
    text: [
      {
        text: 'Rakuten Linkから国内の緊急電話をかける場合、自動的にOS標準の電話アプリに切り替えて発信することになります。',
      },
      {
        text: 'Rakuten Linkから海外ローミングを使っての渡航先の緊急通報には接続できません。',
      },
    ],
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="電話・メッセージがこれひとつ。楽天モバイルの便利なスーパーコミュニケーションアプリ「Rakuten Link（楽天リンク）」の設定方法・ご利用方法をご案内します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <JsonLoadInfo json={`${assets}json/service-link-info.json`} />
        <Kv>
          <KvCap>
            <TxtCap as="p">※表記の金額は特に断りがない限り税込です。</TxtCap>
          </KvCap>
          <KvText>
            <KvTextCatch>
              国内通話かけ放題
              <span>※1</span>
            </KvTextCatch>
            <KvTextDescription>
              スーパーコミュニケーションアプリ
            </KvTextDescription>
            <KvTextTitle>
              <img
                src={`${assets}img/common/icon-rakuten-link.svg?210804`}
                alt=""
                width="68"
                height="69"
              />
              <span>Rakuten Link</span>
            </KvTextTitle>
          </KvText>
          <KvImgSp>
            <img
              src={`${assets}img/service/rakuten-link/hero-sp.png?211015`}
              alt=""
              width="750"
              height="600"
            />
          </KvImgSp>
        </Kv>

        <AppContainer>
          <div className={Utils['Align-center']}>
            <AppHead>
              無料通話・お支払い・ポイント獲得
              <span className={Utils['Disp-pc']}>。</span>
              <br className={Utils['Disp-tb-sp']} />
              必要な機能を1つのアプリで
            </AppHead>
            <AppLink className={Utils['Mt-16']}>
              <div>
                <BannerHover
                  href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.rcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${assets}img/common/btn-googleplay.png`}
                    alt="Google Play"
                    width="200"
                  />
                </BannerHover>
              </div>
              <div>
                <BannerHover
                  href="https://apps.apple.com/jp/app/id1498877539"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${assets}img/common/btn-appstore.png`}
                    alt="Apple Store"
                    width="200"
                  />
                </BannerHover>
                <br />
                <TxtSize size="s">iPhoneのみ対応</TxtSize>
                <TxtCap>※2</TxtCap>
              </div>
            </AppLink>
          </div>
        </AppContainer>
        <SystemContainer className={Utils['Mt-32']}>
          <TxtEmp01 as="p">
            <TxtCap>
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtCap>
          </TxtEmp01>
          <TxtCap as="p">
            ※1
            （0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
            <LinkNormal href="/faq/detail/00001887/">対象外番号一覧</LinkNormal>
            をご確認ください。アプリ未使用時30秒22円。
            <br />
            ※2 iPad、iPod touchには対応していません。
            <br />
            ※定期的にRakuten
            Linkアプリの最新バージョンを公開しておりますので、常に最新バージョンへアップデートをお願いします。最新版につきましては、各ストアにてご確認ください。
            <br />
            <TxtEmp02>
              ※一部の製品において、ご利用のRakuten Link
              Androidアプリが最新バージョンではない場合、製品ソフトウェアアップデートの影響で一部の機能がご利用いただけなくなる事象を確認しております。
              <br />
              ※Rakuten Link
              Androidアプリは、システム変更に伴いバージョン2.9.0以降にアップデートしていない場合、Rakuten
              Link
              アプリでの着信ができなくなり、Android標準の電話アプリに着信するようになります。
            </TxtEmp02>
          </TxtCap>

          <div className={Utils['Mt-24']}>
            <p className={Utils['Align-right']}>
              <LinkIconAfter href="/service/rakuten-link/en/?l-id=service_rakuten-link_service_rakuten-link_en">
                English
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </div>

          <RakutenLinkDesktopBnr
            className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
            scid="mno_link_option"
          />
        </SystemContainer>

        <GrayBox className={Utils['Mt-32']}>
          <Nav>
            <LinkIconBefore
              href="#feature"
              onClick={e => anchorCallback(e, 'feature')}
            >
              <IconArrowDown />
              Rakuten Linkアプリ
              <br />
              の特長
            </LinkIconBefore>
            <LinkIconBefore
              href="#conditions"
              onClick={e => anchorCallback(e, 'conditions')}
            >
              <IconArrowDown />
              ご利用条件
            </LinkIconBefore>
            <LinkIconBefore
              href="#device"
              onClick={e => anchorCallback(e, 'device')}
            >
              <IconArrowDown />
              対応機種
            </LinkIconBefore>
            <LinkIconBefore
              href="#attention"
              onClick={e => anchorCallback(e, 'attention')}
            >
              <IconArrowDown />
              注意事項
            </LinkIconBefore>
          </Nav>
        </GrayBox>

        <SystemContainer>
          <FeatureLink>
            <li>
              <LinkIconAfter
                as="a"
                href="https://service.link.link/guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakuten Linkの使い方
                <IconNewTabLine />
              </LinkIconAfter>
            </li>
            <li>
              <LinkIconAfter as="a" href="/support/link/setting/">
                よくあるご質問
                <IconChevronRight />
              </LinkIconAfter>
            </li>
          </FeatureLink>
          <Heading id="feature" level="2" className={Utils['Mt-56']}>
            Rakuten Linkアプリの特長
          </Heading>
          <ServiceContent2>
            <li>
              <Heading
                level="3"
                className={isPc ? Utils['Align-center'] : Utils['Align-left']}
              >
                Rakuten Linkを使っていない人にも
                <br className={Utils['Disp-pc']} />
                無料で国内通話かけ放題
              </Heading>
              <div className={Utils['Align-center']}>
                <img
                  src={`${assets}img/service/rakuten-link/img-01.png`}
                  alt=""
                  width="343"
                  height="176"
                  loading="lazy"
                  className={Utils['Pt-16']}
                />
              </div>
              <TxtNormal className={Utils['Mt-24']} as="p">
                Rakuten
                Linkを使って相手の電話番号にかけるだけ。今お使いの番号そのままで、ほかの携帯電話会社ケータイ、固定電話を含む国内通話が無料でかけられます。
                <TxtCap>※1</TxtCap>
              </TxtNormal>
            </li>
            <li>
              <Heading
                level="3"
                className={isPc ? Utils['Align-center'] : Utils['Align-left']}
              >
                国際通話も断然おトク
              </Heading>
              <div className={Utils['Align-center']}>
                <img
                  src={`${assets}img/service/rakuten-link/img-02.png`}
                  alt=""
                  width="343"
                  height="176"
                  loading="lazy"
                  className={
                    isPc
                      ? Utils['Pb-16']
                      : `${Utils['Pb-16']} ${Utils['Pt-32']}`
                  }
                />
              </div>
              <TxtNormal className={Utils['Mt-24']} as="p">
                海外の対象国と地域からであれば、日本国内へは無料で電話がかけられます。
                <TxtCap>※3</TxtCap>
              </TxtNormal>
              <ServiceContent2Links className={Utils['Mt-16']}>
                <LinkIconAfterPL0
                  href="#price"
                  onClick={e => anchorCallback(e, 'price')}
                >
                  <IconArrowDown />
                  通話料金の詳細はこちら
                </LinkIconAfterPL0>
                <LinkIconAfter href="/service/international-sms/#area">
                  海外の対象国と地域
                  <IconChevronRight />
                </LinkIconAfter>
              </ServiceContent2Links>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※3 海外への渡航の前に、国内でRakuten
                Linkを認証してください。海外ローミングエリアによっては認証できない場合がございます。
                <br />
                海外の対象国と地域からのみ発信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発信可能となります。
                <br />
                海外ローミング用データ容量を消費しません。追加のデータチャージを心配することなくご利用いただけます。Rakuten
                Linkから海外ローミングを使っての渡航先の緊急通報には接続できません（
                <LinkNormal href="/service/international-roaming/">
                  海外ローミングの詳細を見る
                </LinkNormal>
                ）。
                <br />
                今後、ご利用料金、海外ローミング（データ通信）および国際通話、国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。
                <br />
                あらかじめご了承ください。
              </TxtCap>
            </li>
          </ServiceContent2>
          <ServiceContent3>
            <li>
              <Heading
                level="3"
                className={isPc ? Utils['Align-center'] : Utils['Align-left']}
              >
                メッセージの送受信が無料
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakuten-link/img-03.png`}
                  alt=""
                  width="343"
                  height="175"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-24']}>
                Rakuten
                Link同士なら、メッセージはもちろん写真や動画、ファイルも送受信でき、最大100人のグループメッセージも楽しめます。
              </p>
              <div className={Utils['Mt-16']}>
                <LinkIconAfterPL0
                  as="a"
                  href="#sms"
                  onClick={e => anchorCallback(e, 'sms')}
                >
                  <IconArrowDown />
                  Rakuten Link以外とのSMSの料金
                </LinkIconAfterPL0>
              </div>
            </li>
            <li>
              <Heading
                level="3"
                className={isPc ? Utils['Align-center'] : Utils['Align-left']}
              >
                楽メールも使える
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakuten-link/img-04-230331.png`}
                  alt=""
                  width="343"
                  height="175"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-24']}>
                楽天モバイルのドメイン（@rakumail.jp）で、メールサービスも無料でご利用いただけます。
              </p>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※ データ利用量としてカウントされます。
                <br />
                ※
                Rakuten最強プランのご契約、初期設定が必要です。データ利用量としてカウントされます。
                <br />
              </TxtCap>
              <div className={Utils['Mt-16']}>
                <LinkIconAfter
                  as="a"
                  href="/service/rakumail/?l-id=service_rakuten-link_service_rakumail"
                >
                  楽メール（特長・サービス内容）を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </li>
            <li>
              <Heading
                level="3"
                className={isPc ? Utils['Align-center'] : Utils['Align-left']}
              >
                通話以外の機能も充実
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakuten-link/img-05.png`}
                  alt=""
                  width="343"
                  height="175"
                  loading="lazy"
                />
              </div>
              <p className={Utils['Mt-24']}>
                通話やメッセージだけでなく、簡単に楽天ペイアプリでスマホ決済ができたり、楽天ポイントを毎日貯めることができます。最新のニュースもチェックできるなど、様々な用途でご利用いただけます。
              </p>
            </li>
          </ServiceContent3>
          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <div>
              <ButtonRegularLarge
                as="a"
                href="https://service.link.link/?scid=wi_rlk_rmb_service_rlk_morebtn_link_service_top"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakuten Linkの機能について
                <br className={Utils['Disp-tb-sp']} />
                さらに詳しく見る
                <IconNewTabLine className="icon-end" />
              </ButtonRegularLarge>
            </div>
            <div className={Utils['Mt-16']}>
              <ButtonRegularLarge
                as="a"
                href="https://service.link.link/guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ご利用方法を見る
                <IconNewTabLine className="icon-end" />
              </ButtonRegularLarge>
            </div>
            <div className={Utils['Mt-32']}>
              <LinkIconAfter as="a" href="/support/link/setting/">
                よくあるご質問を見る
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          </div>
          <Heading id="conditions" level="2" className={Utils['Mt-56']}>
            ご利用条件
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            楽天モバイル（Rakuten最強プラン）を契約していること。
          </TxtNormal>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter
              href="https://business.mobile.rakuten.co.jp/service/rakuten-link-office/"
              target="_blank"
            >
              法人向けプランをご契約のお客様はこちら
              <IconNewTabLine />
            </LinkIconAfter>
          </p>
          <DescriptionListDefault className={Utils['Mt-32']} id="device">
            <div>
              <dt>対応機種</dt>
              <dd>
                <TxtEmp01 as="p">【Android版】</TxtEmp01>
                <TxtNormal as="p" className={Utils['Mt-8']}>
                  Android 10以降を搭載した楽天モバイル対応製品
                </TxtNormal>
                <div className={Utils['Mt-8']}>
                  <LinkIconAfter as="a" href="/product/certified-products/">
                    対応製品を見る
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <TxtEmp01 className={Utils['Mt-24']} as="p">
                  【iOS版】
                </TxtEmp01>
                <p className={Utils['Mt-8']}>
                  iOS 14.4以降<TxtCap>※5</TxtCap>を搭載したiPhone 15 Pro Max、iPhone 15 Pro、iPhone 15 Plus、iPhone 15、iPhone 14 Pro Max、iPhone 14 Pro、iPhone 14 Plus、iPhone 14、iPhone 13 Pro Max、iPhone 13 Pro、iPhone 13、iPhone 13 mini、iPhone SE（第3世代）、iPhone 12 Pro Max、iPhone 12 Pro、iPhone 12、iPhone 12 mini、iPhone SE（第2世代）、iPhone 11 Pro Max、iPhone 11 Pro、iPhone 11、iPhone XR、iPhone XS Max、iPhone XS、iPhone X、iPhone 8、iPhone 8 Plus、iPhone 7、iPhone 7 Plus、iPhone SE（第1世代）、iPhone 6s、iPhone 6s Plus
                </p>
                <TxtCap className={Utils['Mt-8']} as="p">
                  ※5
                  今後、OSのアップデートにより、アプリが利用できなくなる場合があります。Appleベータ版ソフトウェアは、Rakuten
                  Link 動作保証対象外です。
                </TxtCap>
                <TxtEmp02 className={Utils['Mt-16']} as="p">
                  改造を施した製品・OSやエミュレータを使用したRakuten
                  Linkのご利用は動作保証対象外です。
                </TxtEmp02>
              </dd>
            </div>
          </DescriptionListDefault>
          <Heading id="price" level="2" className={Utils['Mt-64']}>
            Rakuten Linkから通話・メッセージを利用した場合の料金
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            相手が利用している電話・メッセージアプリによって料金が異なります。
          </TxtNormal>
          <TxtNormal as="p">海外／国際サービスはすべて不課税です。</TxtNormal>
          <Heading level="3" className={Utils['Mt-32']}>
            相手がRakuten Linkの場合
          </Heading>
          <MediaGrid>
            <MediaImage
              className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              <img
                src={`${assets}img/service/rakuten-link/img-06.png`}
                alt=""
                width="343"
                height="176"
                loading="lazy"
              />
            </MediaImage>
            <div>
              <Heading level="4">
                Rakuten Link同士は通話もメッセージも無料（Android 版／iOS
                版共通）
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※Rakuten
                Link未使用時、国内通話は30秒22円、国内から海外へ、海外から海外への通話は国・地域別従量課金で、海外の対象国と地域でのみご利用いただけます。
                <br />
                国内SMSの送信は3.3円／70文字（全角）。国際SMSの送信は100円（不課税）／70文字（全角）。国際SMSは海外の対象国と地域でのみ送信可能となります。
              </TxtCap>
            </div>
          </MediaGrid>
          <Heading level="3" className={Utils['Mt-40']}>
            相手がRakuten Link以外の場合
          </Heading>
          <TxtNormal as="p" className={Utils['Mt-16']}>
            ご利用の製品によってRakuten Linkの提供サービスが異なります。
          </TxtNormal>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※Rakuten
            Link未使用時、国内SMSは3.3円／70文字（全角）。国際SMSは100円（不課税）／70文字（全角）。SMSの送信上限数は最大200通/日。
          </TxtCap>
          <Heading level="4" id="sms" className={Utils['Mt-32']}>
            Rakuten Link以外との通話料金
          </Heading>
          <FeeTablePc>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th className="thNone"></th>
                    <th className="thNone"></th>
                    <th className="thPrimary">Android版</th>
                    <th className="thPrimary">iOS版</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan={4} className="thSecondary">
                      発信料金
                    </th>
                    <th className="thTertiary">
                      日本から日本の電話番号へかける
                    </th>
                    <td rowSpan={2}>
                      無料<TxtCap>※6</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      無料<TxtCap>※6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      海外から日本の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へかける
                    </th>
                    <td rowSpan={2}>
                      国・地域別従量課金<TxtCap>※7</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      国・地域別従量課金<TxtCap>※7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      海外から海外の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <th rowSpan={2} className="thSecondary">
                      着信料金
                    </th>
                    <th className="thTertiary">日本で電話を受ける</th>
                    <td rowSpan={2}>
                      無料<TxtCap>※8</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      <p>
                        Rakuten Linkでは
                        <br />
                        着信できません
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準の電話アプリでの着信となります。※9
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">海外で電話を受ける</th>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTablePc>
          <FeeTableSp>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      Android版
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      発信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から日本の電話番号へかける
                    </th>
                    <th className="thTertiary">
                      海外から日本の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      無料<TxtCap>※6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へかける
                    </th>
                    <th className="thTertiary">
                      海外から海外の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      国・地域別従量課金<TxtCap>※7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      着信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">日本で電話を受ける</th>
                    <th className="thTertiary">海外で電話を受ける</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      無料<TxtCap>※8</TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      iOS版
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      発信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から日本の電話番号へかける
                    </th>
                    <th className="thTertiary">
                      海外から日本の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      無料<TxtCap>※6</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へかける
                    </th>
                    <th className="thTertiary">
                      海外から海外の電話番号へかける
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      国・地域別従量課金<TxtCap>※7</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      着信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">日本で電話を受ける</th>
                    <th className="thTertiary">海外で電話を受ける</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Linkでは着信できません</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準の電話アプリでの着信となります。※9
                      </TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTableSp>
          <TxtCap className={Utils['Mt-16']} as="p">
            ※6
            （0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。Rakuten
            Linkを利用した場合、海外の対象国と地域からのみ発信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発信可能となります。
            <br />
            ※7 Rakuten
            Linkを利用した場合、海外の対象国と地域からのみ発信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発信可能となります。ご利用可能な国・地域と通話料金は「
            <LinkNormal href="/guide/international-call/">
              国際通話（ご利用方法）
            </LinkNormal>
            」をご確認ください。 海外の対象国と地域は「
            <LinkNormal href="/service/international-unlimited-talk/">
              国際通話かけ放題
            </LinkNormal>
            」に加入していれば無料でご利用いただけます。
            <br />
            ※8 Rakuten
            Linkを利用した場合、海外の対象国と地域でのみ着信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ着信可能となります。
            <br />
            ※9
            iOS標準の電話アプリを利用した場合、海外の対象国と地域でのみ着信が可能となり、国・地域別従量課金となります。その他の地域に関してはWi-Fi接続中の場合のみ着信可能となります。ご利用可能な国・地域と通話料金は「
            <LinkNormal href="/guide/international-call/">
              国際通話（ご利用方法）
            </LinkNormal>
            」をご確認ください。
          </TxtCap>
          <Heading level="4" className={Utils['Mt-32']}>
            Rakuten Link以外とのSMS料金
          </Heading>
          <FeeTablePc className="">
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th className="thNone"></th>
                    <th className="thNone"></th>
                    <th className="thPrimary">Android版</th>
                    <th className="thPrimary">iOS版</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan={4} className="thSecondary">
                      送信料金
                    </th>
                    <th className="thTertiary">
                      日本から日本の電話番号へSMS送信する
                    </th>
                    <td rowSpan={2}>
                      無料<TxtCap>※10</TxtCap>
                    </td>
                    <td rowSpan={4}>
                      <p>
                        Rakuten Linkでは
                        <br />
                        送信できません
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準のメッセージアプリでの送信となります。※11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      海外から日本の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へSMS送信する
                    </th>
                    <td rowSpan={2}>
                      <p>
                        <LinkNormal href="/service/international-sms/#area">
                          海外の対象国と地域
                        </LinkNormal>
                        ：無料<TxtCap>※10</TxtCap>
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        その他の国と地域：100円（不課税）／70文字（全角）
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      海外から海外の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <th rowSpan={2} className="thSecondary">
                      受信料金
                    </th>
                    <th className="thTertiary">日本でSMS受信する</th>
                    <td rowSpan={2}>
                      無料<TxtCap>※10</TxtCap>
                    </td>
                    <td rowSpan={2}>
                      <p>
                        Rakuten Linkでは
                        <br />
                        受信できません
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準のメッセージアプリでの受信となります。※12
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">海外でSMS受信する</th>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTablePc>
          <FeeTableSp>
            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      Android版
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      送信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から日本の電話番号へSMS送信する
                    </th>
                    <th className="thTertiary">
                      海外から日本の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      無料<TxtCap>※10</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へSMS送信する
                    </th>
                    <th className="thTertiary">
                      海外から海外の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>
                        <LinkNormal href="/service/international-sms/#area">
                          海外の対象国と地域
                        </LinkNormal>
                        ：無料<TxtCap>※10</TxtCap>
                      </p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        その他の国と地域：100円（不課税）／70文字（全角）
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      受信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">日本でSMS受信する</th>
                    <th className="thTertiary">海外でSMS受信する</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      無料<TxtCap>※10</TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <Table>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="thPrimary">
                      iOS版
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      送信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から日本の電話番号へSMS送信する
                    </th>
                    <th className="thTertiary">
                      海外から日本の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Linkでは送信できません</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準のメッセージアプリでの送信となります。※11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th className="thTertiary">
                      日本から海外の電話番号へSMS送信する
                    </th>
                    <th className="thTertiary">
                      海外から海外の電話番号へSMS送信する
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Linkでは送信できません</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準のメッセージアプリでの送信となります。※11
                      </TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="thSecondary">
                      受信料金
                    </th>
                  </tr>
                  <tr>
                    <th className="thTertiary">日本でSMS受信する</th>
                    <th className="thTertiary">海外でSMS受信する</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Rakuten Linkでは受信できません</p>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        iOS標準のメッセージアプリでの受信となります。※12
                      </TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </FeeTableSp>
          <TxtCap className={Utils['Mt-16']} as="p">
            ※10 Rakuten Linkを利用した場合、海外でのSMS送受信は
            <LinkNormal href="/service/global/overseas/#accordion-1">
              海外の対象国と地域
            </LinkNormal>
            からのみ可能となります。
            <br />
            ※11
            iOS標準のメッセージアプリを利用した場合、海外の対象国と地域でのみ送信可能となります。ご利用可能な国・地域と送信料金は「
            <LinkNormal href="/guide/international-sms/">
              国際SMS（ご利用方法）
            </LinkNormal>
            」をご確認ください。
            <br />
            ※12
            iOS標準のメッセージアプリを利用した場合、海外の対象国と地域のみ受信可能となります。ご利用可能な国・地域と受信料金は「
            <LinkNormal href="/guide/international-sms/">
              国際SMS（ご利用方法）
            </LinkNormal>
            」をご確認ください。
          </TxtCap>
          <Heading id="attention" level="2" className={Utils['Mt-56']}>
            注意事項
          </Heading>
          <AccordionList
            text={'初回起動時について'}
            isOpened={false}
            className={Utils['Mt-24']}
          >
            <ListDisc {...ListArgs2} />
          </AccordionList>
          <AccordionList text={'ご利用時の注意'} isOpened={false}>
            <UlOnly>
              <li>
                通話が連続して長時間におよぶなど、当社設備に影響をおよぼすと当社が判断した場合
                は、当該通話を切断することがあります。
              </li>
              <li>
                製品の電源が入っていない場合、圏外の場合、Rakuten
                Linkを利用中の契約回線の利用中断などによりRakuten
                Linkがメッセージを受信できない場合、Rakuten
                Linkのサーバで未受信メッセージを保管します。次回受信できる状況になったときに自動受信されます。
              </li>
              <li>
                ご契約回線の利用中断中は、Rakuten
                Link同士以外への通話・メッセージはご利用いただけません。
              </li>
              <li>
                Rakuten
                Linkをアンインストールする場合、必ずログアウトを行ってからアンインストールしてください。ログアウトせずにアンインストールした場合、着信またはメッセージを受信できなくなる場合があります。誤ってログアウトせずにRakuten
                Linkをアンインストールしてしまった場合は、「
                <LinkIconAfter
                  href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.rcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                  <IconNewTabLine />
                </LinkIconAfter>
                」もしくは「
                <LinkIconAfter
                  href="https://apps.apple.com/jp/app/id1498877539"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                  <IconNewTabLine />
                </LinkIconAfter>
                」よりRakuten Linkを再インストールし、ログアウトしてからRakuten
                Linkをアンインストールしてください。
                <br />
                <LinkIconAfter href="/product/certified-products/">
                  Rakuten Link対応機種一覧を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </li>
              <li>
                下記の場合、Rakuten Linkでは動作保証対象外です。
                <ul className={Utils['Mt-8']}>
                  <li>
                    Bluetooth等を通じて、デバイスと連携を行った操作・通話について
                  </li>
                  <li>VPNサービスをご利用時に行った操作・通話について</li>
                  <li>
                    楽天モバイルに接続していない状態で行った操作・通話について
                  </li>
                  <li>Wi-Fi接続時に発生した不具合について</li>
                  <li>
                    デュアルSIM対応端末にて、モバイルデータ通信、通話／音声回線に利用するSIMを楽天モバイル以外のSIMに設定した状態で行った操作・通話について
                  </li>
                </ul>
              </li>
              <li>
                製品の「設定」内の「通知」
                、「マナーモード」、「おやすみモード（集中モード）」の設定状況によっては、着信できない場合がございます。
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'ご解約時の注意'} isOpened={false}>
            <p>
              回線解約や譲渡をした場合、Rakuten
              Link上のデータは削除されます。Rakuten
              Link上のデータが必要なお客様は、あらかじめデータの保存をお願いいたします。
            </p>
          </AccordionList>
          <AccordionList text={'自動バックアップについて'} isOpened={false}>
            <UlOnly>
              <li>
                以下のデータは、暗号化したうえで自動バックアップします。
                <UlOnly className={Utils['Mt-16']}>
                  <li>連絡先</li>
                  <li>通話</li>
                  <li>メッセージ履歴</li>
                  <li>送受信したメッセージ</li>
                  <li>送受信した写真・動画を含むファイル</li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'電話帳について'} isOpened={false}>
            Rakuten
            Linkは、ご利用のスマートフォン内にある電話帳とデータを同期しクラウド上に暗号化し安全に保管します。これにより機種変更された場合でも、電話帳のデータ移行が不要となります。電話帳の同期に関しての詳細は、
            <LinkNormal href="/faq/detail/00001917/">こちら</LinkNormal>
            をご覧ください。
          </AccordionList>
          <AccordionList text={'データ通信について'} isOpened={false}>
            Rakuten
            Link（楽メールを除く）を利用したメッセージの送受信、電話の受発信は、データ利用量としてカウントされません。なお、この点は予告なく変更になる場合があります。
          </AccordionList>
          <AccordionList
            text={'海外ローミング（データ通信）について'}
            isOpened={false}
          >
            <ListDisc {...ListArgs3} />
          </AccordionList>
          <AccordionList text={'機種変更時・MNP時について'} isOpened={false}>
            <ListDisc {...ListArgs4} />
          </AccordionList>
          <AccordionList text={'セキュリティについて'} isOpened={false}>
            <UlOnly>
              <li>
                Rakuten
                Linkを利用している相手に表示される情報は以下のとおりです。
                <UlOnly className={Utils['Mt-16']}>
                  <li>Rakuten Linkを利用しているかどうか</li>
                  <li>
                    プロフィール（登録している名前、電話番号、プロフィール写真）
                  </li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList text={'緊急通話について'} isOpened={false}>
            <ListDisc {...ListArgs5} />
          </AccordionList>
          <AccordionList text={'着信履歴について'} isOpened={false}>
            <UlOnly>
              <li>
                下記の場合、着信者の着信表示／履歴には「不明」や「非通知」と表示されることがあります。
                <UlOnly className={Utils['Mt-16']}>
                  <li>発信者が非通知設定で発信した場合</li>
                  <li>
                    お客様ご自身が楽天モバイルに接続せず、Wi-Fiに接続した状態で電話が着信した場合
                  </li>
                  <li>
                    発信者が楽天モバイルに接続せず、Wi-Fiに接続した状態で発信した場合
                  </li>
                </UlOnly>
              </li>
            </UlOnly>
          </AccordionList>
          <div className={Utils['Mt-32']}>
            <ButtonRegular as="a" href="/">
              楽天モバイルトップへ
            </ButtonRegular>
          </div>
        </SystemContainer>

        <BgGray
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Related
              lId="rakuten-link"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>通話・SMS・メールサービス</span>
                </>
              }
            />

            <Recommend
              className={Utils['Mt-56']}
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default ServiceRakutenlink
