import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtSize, TxtEmp01, TxtCap } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import {
  LinkIconAfter,
  LinkIconBefore,
  LinkNormal,
} from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { CardNormal } from '@components/atoms/Card'
import {
  MediaGridHalf,
  MediaIcon,
  MediaImage,
  MediaList3,
} from '@components/layout/Media'
import { InfoboxLight, InfoboxBorder } from '@components/atoms/Infobox'
import { mixins } from '@components/utils/Mixins'
import { IconChevronRight, IconArrowDown } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'

const InfoboxLightCustom = styled(InfoboxLight)`
  max-width: 416px;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    max-width: 100%;
  }
`

const Hero = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  & div {
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      text-align: center;
    }
  }
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    flex-direction: column;
  }
  & img {
    margin-right: 58px;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      margin-top: 24px;
      margin-right: 0;
    }
  }
`
const AnchorSec = styled.div`
  display: flex;
  margin-top: 42px;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    flex-direction: column;
  }
  & div {
    margin-right: 18px;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      margin-bottom: 18px;
    }
  }
`
const InfoboxBorderList = styled(InfoboxBorder)`
  .txt {
    font-weight: bold;
    text-align: center;
    ${mixins.mq.MaxM} {
      text-align: left;
    }
  }
  .flexbox {
    display: flex;
  }
  &${MediaImage} {
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`
const ListTitle = styled(TxtSize)`
  font-weight: bold;
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`
const ButtonRegularMr = styled(ButtonRegular)`
  margin-right: 16px;
  ${mixins.mq.MaxM} {
    margin-right: 0;
  }
`
const Layout4Grid = styled.div`
  display: flex;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    flex-wrap: wrap;
  }
  & div {
    width: calc((100% - 24px * (4 - 1)) / 4);
    margin-left: 24px;
    display: flex;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      width: calc((100% - 16px * (2 - 1)) / 2);
      margin-left: 16px;
      margin-bottom: 16px;
    }
    &:nth-child(4n + 1) {
      margin-left: 0;
    }
    &:nth-child(2n + 1) {
      ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
        margin-left: 0;
      }
    }
  }
`
const List3Custom = styled(MediaList3)`
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    flex-direction: row;
    display: flex;
    & div {
      width: 50%;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`
const Flex = styled.div`
  display: flex;
`
const CardCustom = styled(CardNormal)`
  text-align: center;
  p {
    font-size: 20px;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      font-size: 16px;
    }
  }
  &.active {
    background: ${props => props.theme.colors.pink5};
    border: 2px solid ${props => props.theme.colors.pink100};
    &${CardNormal}::after {
      display: none;
    }

    &:hover {
      background: ${props => props.theme.colors.monotone97};
    }
  }
`

const ServiceGlobalOutgoing: NextPage = () => {
  const pagetitle = '日本から海外へ電話をかける・SMSを送る'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    { path: '/service/global/', label: '国際サービス' },
  ]
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
      text: '国際サービス',
      url: '/service/global/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルで楽天回線をご契約中のお客様へ、日本から海外への電話やSMSのご利用方法や、お使いのスマホで利用できるおトクな国際サービスをご案内します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Pb-64']}>
          <Hero>
            <div>
              <Heading level="1" className={Utils['Mt-64']}>
                日本から海外へ電話をかける・SMSを送る
              </Heading>
              <TxtSize as="p" size="l" className={Utils['Mt-16']}>
                <TxtEmp01>海外への通話・SMSもおトク！</TxtEmp01>
              </TxtSize>
            </div>
            <div>
              <img
                src={`${assets}img/service/global/outgoing/img-outgoing-hero.png`}
                width="307"
                alt=""
              />
            </div>
          </Hero>
          <AnchorSec>
            <div>
              <LinkIconBefore
                href="#sec1"
                onClick={e => anchorCallback(e, 'sec1')}
              >
                <IconArrowDown />
                対応エリア・料金
              </LinkIconBefore>
            </div>
            <div>
              <LinkIconBefore
                href="#sec3"
                onClick={e => anchorCallback(e, 'sec3')}
              >
                <IconArrowDown />
                ご利用方法
              </LinkIconBefore>
            </div>
            <div>
              <LinkIconBefore
                href="#sec4"
                onClick={e => anchorCallback(e, 'sec4')}
              >
                <IconArrowDown />
                よく見られているご質問
              </LinkIconBefore>
            </div>
          </AnchorSec>
          <div className={`${Utils['Align-right']} ${Utils['Mt-16']}`}>
            <LinkIconAfter href="/service/global/overseas/">
              海外で使う方はこちら
              <IconChevronRight />
            </LinkIconAfter>
          </div>

          <Heading level="2" className={Utils['Mt-48']}>
            楽天モバイルの海外／国際サービス
          </Heading>

          <MediaGridHalf className={Utils['Mt-24']}>
            <InfoboxBorderList>
              <ListTitle as="p" size="l">
                国際通話
              </ListTitle>
              <MediaImage className={Utils['Mt-8']}>
                <img
                  src={`${assets}img/service/global/common/img-global-service-02.png`}
                  width="280"
                  alt=""
                />
              </MediaImage>
              <ListTitle as="div" size="m" className={Utils['Mt-8']}>
                Rakuten Link利用で、海外にいる相手でも、
                <br className={Utils['Disp-pc']} />
                日本の電話番号との通話が無料<TxtCap>※1</TxtCap>
              </ListTitle>
              <div className={Utils['Align-center']}>
                <ButtonRegular
                  as="a"
                  href="/service/international-call/#anc00"
                  className={Utils['Mt-16']}
                >
                  詳細を見る
                </ButtonRegular>
              </div>
            </InfoboxBorderList>
            <InfoboxBorderList>
              <ListTitle as="p" size="l">
                国際SMS
              </ListTitle>
              <MediaImage className={Utils['Mt-8']}>
                <img
                  src={`${assets}img/service/global/common/img-global-service-03.png`}
                  width="280"
                  alt=""
                />
              </MediaImage>
              <ListTitle as="div" size="m" className={Utils['Mt-8']}>
                Rakuten Link利用で、海外の対象国と地域の
                <br className={Utils['Disp-pc']} />
                電話番号とのSMS送受信が無料<TxtCap>※2</TxtCap>
              </ListTitle>
              <div className={Utils['Align-center']}>
                <ButtonRegular
                  as="a"
                  href="/service/international-sms/#anc00"
                  className={Utils['Mt-16']}
                >
                  詳細を見る
                </ButtonRegular>
              </div>
            </InfoboxBorderList>
          </MediaGridHalf>
          <div className={Utils['Mt-16']}>
            <TxtCap as="p">
              ※1 国際通話の
              <LinkNormal
                href="#heed02"
                onClick={e => anchorCallback(e, 'heed02')}
              >
                注意事項の詳細はこちら
              </LinkNormal>
            </TxtCap>
            <TxtCap as="p">
              ※2 国際SMSの
              <LinkNormal
                href="#heed03"
                onClick={e => anchorCallback(e, 'heed03')}
              >
                注意事項の詳細はこちら
              </LinkNormal>
            </TxtCap>
            <TxtCap as="p">
              <TxtEmp01>
                ※「Rakuten最強プラン（データタイプ）」をご契約の場合、国際通話はご利用いただけません。
              </TxtEmp01>
            </TxtCap>
          </div>
          <Heading level="2" className={Utils['Mt-48']}>
            海外との通話がもっとおトクに！
          </Heading>
          <MediaGridHalf className={Utils['Mt-24']}>
            <InfoboxLightCustom>
              <MediaIcon>
                <div>
                  <img
                    src={`${assets}img/service/global/common/img-global-04.png`}
                    width="100"
                    alt=""
                  />
                </div>
                <div>
                  <TxtSize as="p" size="l">
                    <TxtEmp01>国際通話かけ放題</TxtEmp01>
                  </TxtSize>
                  <TxtEmp01 as="p">海外指定65の国と地域への通話</TxtEmp01>
                  <p className={Utils['Mt-16']}>
                    <LinkIconAfter href="/service/international-unlimited-talk/">
                      詳細を見る
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </div>
              </MediaIcon>
            </InfoboxLightCustom>
          </MediaGridHalf>
          <div id="sec1" className={Utils['Mt-48']}>
            <Heading level="2">対応エリア・料金</Heading>
            <p className={Utils['Mt-24']}>
              対応エリアと通話、SMSの利用料金をご案内します。
            </p>
            <div className={Utils['Mt-24']}>
              <ButtonRegularMr
                as="a"
                href="/guide/international-call/#japan"
                className={Utils['Mb-16']}
              >
                国際通話について確認する
              </ButtonRegularMr>
              <ButtonRegular as="a" href="/guide/international-sms/#japan">
                国際SMSについて確認する
              </ButtonRegular>
            </div>
          </div>

          <div id="sec3" className={Utils['Mt-48']}>
            <Heading level="2">ご利用方法</Heading>

            <Layout4Grid className={Utils['Mt-24']}>
              <div>
                <CardNormal
                  href="/guide/international-call/#howto"
                  className={Utils['Align-center']}
                >
                  <img
                    src={`${assets}img/service/global/common/icon-global-01.png`}
                    width="64"
                    alt=""
                  />
                  <TxtSize as="p" size="m" className={Utils['Mt-8']}>
                    <TxtEmp01>国際通話</TxtEmp01>
                  </TxtSize>
                </CardNormal>
              </div>
              <div>
                <CardNormal
                  href="/guide/international-sms/#howto"
                  className={Utils['Align-center']}
                >
                  <img
                    src={`${assets}img/service/global/common/icon-global-02.png`}
                    width="64"
                    alt=""
                  />
                  <TxtSize as="p" size="m" className={Utils['Mt-8']}>
                    <TxtEmp01>国際SMS</TxtEmp01>
                  </TxtSize>
                </CardNormal>
              </div>
            </Layout4Grid>
          </div>
          <div id="sec4" className={Utils['Mt-48']}>
            <Heading level="2" className={Utils['Mt-48']}>
              よく見られているご質問
            </Heading>

            <p className={Utils['Mt-24']}>
              よく見られているご質問をご案内します。お困りごとが解決しない場合は、各ページからメッセージ相談やお電話でお問い合わせいただけます。
            </p>

            <div className={Utils['Mt-24']}>
              <ButtonRegular
                as="a"
                href="/support/plan/international-voice/#smallcategory-faq"
              >
                よく見られているご質問を確認する
              </ButtonRegular>
            </div>
          </div>
          <div className={Utils['Mt-48']}>
            <Heading level="2" className={Utils['Mt-8']}>
              注意事項
            </Heading>
            <Heading level="4" id="heed02" className={Utils['Mt-24']}>
              国際通話について
            </Heading>
            <ul>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                <LinkNormal href="/faq/detail/00001887/">
                  対象外番号一覧
                </LinkNormal>
                をご確認ください。
              </TxtCap>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※ Rakuten Linkアプリを利用した場合、
                <LinkNormal href="/fee/un-limit/#country">
                  海外の対象国と地域
                </LinkNormal>
                からのみ発着信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発着信可能となります。
              </TxtCap>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。
              </TxtCap>
            </ul>
            <Heading level="4" id="heed03" className={Utils['Mt-24']}>
              国際SMSについて
            </Heading>
            <ul className={Utils['Mt-8']}>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
                Linkを利用していない場合、Rakuten
                Linkで国際SMSを送受信することができません。ご利用の際はiOS標準のメッセージアプリをご利用ください。
              </TxtCap>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※Rakuten Linkアプリを利用した場合、
                <a href="/fee/un-limit/#country" className="c-Link_Txt">
                  海外の対象国と地域
                </a>
                からのみ送受信可能となります。
              </TxtCap>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。
              </TxtCap>
              <TxtCap as="li" className={Utils['Mt-8']}>
                ※ご利用の機種や、海外ローミング先のネットワーク、または通信先の相手国のネットワークの通信事情により、一覧にある事業者でサービスをご利用いただけない場合があっても当社は一切の責任を負いません。
              </TxtCap>
            </ul>
          </div>
          <div className={Utils['Mt-48']}>
            <Heading level="2" className={`${Utils['Mt-8']} ${Utils['Pb-24']}`}>
              海外／国際サービス
            </Heading>

            <List3Custom>
              <Flex>
                <CardCustom href="/service/global/overseas/">
                  <img
                    src={`${assets}img/service/global/common/img-global-01.png`}
                    width="186"
                    alt=""
                  />
                  <TxtEmp01 as="p" className={Utils['Mt-8']}>
                    海外で使う
                  </TxtEmp01>
                </CardCustom>
              </Flex>
              <Flex>
                <CardCustom href="/service/global/outgoing/" className="active">
                  <img
                    src={`${assets}img/service/global/common/img-global-02.png`}
                    width="186"
                    alt=""
                  />
                  <TxtEmp01 as="p" className={Utils['Mt-8']}>
                    日本から海外へ電話をかける・
                    <br className={Utils['Disp-pc']} />
                    SMSを送る
                  </TxtEmp01>
                </CardCustom>
              </Flex>
            </List3Custom>
          </div>
        </SystemContainer>
      </SystemWrapper>
      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ServiceGlobalOutgoing
