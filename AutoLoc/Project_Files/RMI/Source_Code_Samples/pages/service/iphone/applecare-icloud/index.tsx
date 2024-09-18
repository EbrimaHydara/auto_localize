import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { TxtCap, TxtNormal, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { Heading } from '@components/atoms/Heading'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
  IconPdf,
} from '@components/icons'
import {
  MediaImage,
  MediaGridSmall,
  MediaGridHalf,
} from '@components/layout/Media'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { LabelList } from '@components/atoms/Label'
import { ButtonLinkIconAfter } from '@components/atoms/ButtonLink'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { AccordionList } from '@components/atoms/AccordionList'
import { UlOnly } from '@components/atoms/List'
import { Related } from '@components/include/service/Related'
import { Recommend } from '@components/include/service/Recommend'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'

const BgGray = styled.div`
  background: ${props => props.theme.colors.monotone97};
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }

  ${LinkIconBefore} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.monotone88};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    padding: 16px;
    text-decoration: none;

    ${IconArrowDown} {
      position: absolute;
      left: 8px;
    }
  }
`

const ApplecareTableDt = styled.dt`
  width: 100% !important;
  ${mixins.mq.MinL} {
    width: calc((100% - 16px * 2) / 3) !important;
  }
`

const LinkContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;

  ${mixins.mq.MaxM} {
    justify-content: start;
    flex-wrap: wrap;
    gap: 16px 24px;
  }
`

const ApplecareContent = styled.ul`
  display: flex;
  li {
    width: 100%;
    margin: 48px 12px 0;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    ${mixins.mq.MaxM} {
      width: 100%;
      margin: 40px 0 0;
    }
  }
  ${mixins.mq.MaxL} {
    display: block;
  }
`

const MediaGridSmallCustom = styled(MediaGridSmall)`
  > div:first-child {
    width: auto;
    flex-shrink: 0;
  }
  > div:last-child {
    width: auto;
  }
  flex-wrap: nowrap;
`

const ServiceIphoneLayoutMediaThumb = styled(MediaImage)`
  display: flex;
  align-items: start;
  gap: 24px;

  ${mixins.mq.MaxM} {
    text-align: left;
  }
  img {
    width: 112px;
    ${mixins.mq.MaxM} {
      width: 155px;
    }
  }
`

const IcloudStorage = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const GridItem = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 24px;

  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const ServiceIphoneApplecareicloud: NextPage = () => {
  const selectedCardIds = [
    'replacement-warranty-plus',
    'replacement-warranty-sim',
    'applewatch-care',
  ]
  const pagetitle = '故障紛失保証 with AppleCare Services & iCloud+'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
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
  const labelArgs = {
    item: [{ text: '保証', isEmp: false }],
  }

  const theme = useContext(ThemeContext)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「故障紛失保証 with AppleCare Services & iCloud+」のサービス紹介。楽天モバイルで購入したiPhoneの保証サービスです。もしもの時の修理サービスとサポート、盗難や紛失に対する保証をApple から直接受けられ、さらに「iCloud+ 50GBストレージ付き」もご利用いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            {pagetitle}
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGridSmallCustom className={Utils['Mt-16']}>
            <ServiceIphoneLayoutMediaThumb>
              <div>
                <img
                  src={`${assets}img/service/iphone/applecare-icloud/applecare-services-thumb.svg`}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={`${assets}img/service/iphone/applecare-icloud/icloud-thumb.svg`}
                  alt=""
                />
              </div>
            </ServiceIphoneLayoutMediaThumb>
            <div>
              <TxtEmp01 as="p">
                iPhoneもデータもオールインワンで守ります。
              </TxtEmp01>
              <p className={Utils['Mt-16']}>
                もしもの時の修理サービスとサポート、盗難や紛失に対する保証をApple
                から直接受けられ、さらに「iCloud+
                50GBストレージ付き」もご利用いただけます。なお、修理・交換の保証をご利用いただく場合は、別途お申し込み手続きが必要となります。
              </p>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※楽天モバイルで購入されたiPhoneが対象です。
                <TxtEmp02>
                  楽天モバイル以外で購入されたiPhoneは対象外です。
                </TxtEmp02>
                <br />
                <TxtEmp02>
                  ※iPhone購入時（新規・機種変更）のみお申し込み可能です。
                </TxtEmp02>
              </TxtCap>
            </div>
          </MediaGridSmallCustom>
          <p className={Utils['Mt-48']}>
            「故障紛失保証 with AppleCare
            Services」をご利用のお客様はこちらをご確認ください。
            <br />
            <LinkIconAfter href="/service/iphone/applecare/">
              故障紛失保証 with AppleCare Services
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <Heading as="h2" level="2" className={Utils['Mt-24']}>
            月額利用料
          </Heading>
          <DescriptionListDefault className={Utils['Mt-24']}>
            <div>
              <ApplecareTableDt>iPhone SE（第3世代）</ApplecareTableDt>
              <dd>1,100円／月</dd>
            </div>
            <div>
              <ApplecareTableDt>
                iPhone 15、iPhone 14、iPhone 13
              </ApplecareTableDt>
              <dd>
                <dl>1,310円／月</dl>
              </dd>
            </div>
            <div>
              <ApplecareTableDt>
                iPhone 15 Plus、iPhone 14 Plus
              </ApplecareTableDt>
              <dd>1,490円／月</dd>
            </div>
            <div>
              <ApplecareTableDt>
                iPhone 15 Pro Max、iPhone 15 Pro、
              </ApplecareTableDt>
              <dd>1,650円／月</dd>
            </div>
          </DescriptionListDefault>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/iphone/applecare-icloud/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-64']}>
          <Nav>
            <LinkIconBefore
              href="#features"
              onClick={e => anchorCallback(e, 'features')}
            >
              <IconArrowDown />
              サービス特長
            </LinkIconBefore>
            <LinkIconBefore
              href="#example1"
              onClick={e => anchorCallback(e, 'example1')}
            >
              <IconArrowDown />
              利用例
            </LinkIconBefore>
            <LinkIconBefore
              href="#service"
              onClick={e => anchorCallback(e, 'service')}
            >
              <IconArrowDown />
              サービス内容
            </LinkIconBefore>
            <LinkIconBefore
              href="#notes"
              onClick={e => anchorCallback(e, 'notes')}
            >
              <IconArrowDown />
              ご利用上の注意
            </LinkIconBefore>
          </Nav>
        </SystemContainer>
        <SystemContainer id="features">
          <Heading level="2" className={Utils['Mt-64']} as="h2">
            サービス特長
          </Heading>
          <ul className={Utils['Mt-32']}>
            <li>
              <Heading level="3">
                Apple 専任スペシャリストがワンストップサポート
              </Heading>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                Apple
                の専任スペシャリストがチャットまたは電話にて優先的に対応し、製品や利用方法についてサポートします。
              </p>
            </li>
            <li className={Utils['Mt-40']}>
              <Heading level="3">もしもの時の故障を保証</Heading>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                過失や事故による損傷（落下、水没、ひび割れ）を保証します。修理・交換する際には別途
                <LinkNormal
                  href="#service"
                  onClick={e => anchorCallback(e, 'service')}
                >
                  自己負担金
                </LinkNormal>
                が発生いたします。
              </p>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※1契約につき、iPhone1台を回数制限なく修理・交換します。
                <br />
                ※故意によって生じた損傷、不正改造による機能障害がある場合は対象外です。
              </TxtCap>
            </li>
            <li className={Utils['Mt-40']}>
              <Heading level="3">自然故障は無償保証</Heading>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                自然故障や電池（バッテリー）消耗などの場合は、無償で修理・交換いたします。
              </p>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※自然故障の場合は、1契約につき、iPhone1台を無制限に修理・交換します。
                <br />
                ※修理サービスは、iPhoneおよび付属アクセサリに材質上または製造上の瑕疵が生じた場合、またはバッテリーが保持する容量が本来の容量の80%未満になった場合に利用できます。修理サービスには制限が課せられる場合があります。
              </TxtCap>
            </li>
            <li className={Utils['Mt-40']}>
              <Heading level="3">修理の受付方法が豊富</Heading>
              <div className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                お客様のご都合にあわせて、修理の受付方法をお選びいただけます。
                <DescriptionListDefault className={Utils['Mt-8']}>
                  <div>
                    <ApplecareTableDt>持ち込み修理</ApplecareTableDt>
                    <dd>
                      お近くのApple StoreまたはApple
                      正規サービスプロバイダーにiPhoneをお持ちください。Apple
                      の認定技術者が対応いたします。
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>配送修理</ApplecareTableDt>
                    <dd>
                      宅配業者がご自宅やオフィスにiPhoneを引き取りにうかがい、修理が完了しましたら、Apple
                      よりご返送いたします。
                    </dd>
                  </div>
                </DescriptionListDefault>
              </div>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
              </TxtCap>
            </li>
            <li className={Utils['Mt-40']}>
              <Heading level="3">
                製品が故障した場合、交換品をいち早くお届け
              </Heading>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                エクスプレス交換サービスのご利用で、Apple
                が交換用のデバイスをお届けし、修理の待ち時間をなくします。
              </p>
              <div className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                <ButtonLinkIconAfter
                  href="https://support.apple.com/ja-jp/iphone/repair/service/express-replacement"
                  as="a"
                  target="_blank"
                >
                  Apple社のエクスプレス交換サービスの詳細を見る
                  <IconNewTabLine />
                </ButtonLinkIconAfter>
              </div>
              <TxtCap className={Utils['Mt-8']} as="p">
                <TxtEmp01>
                  ※ご利用には別途
                  <LinkNormal
                    href="#service1"
                    onClick={e => anchorCallback(e, 'service1')}
                  >
                    自己負担金
                  </LinkNormal>
                  が発生いたします。
                </TxtEmp01>
              </TxtCap>
            </li>
            <li className={Utils['Mt-40']}>
              <Heading level="3">盗難・紛失時もあんしん</Heading>
              <p className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                盗難・紛失時に、Apple
                から新品または新品同様の交換品をお届けします。
              </p>
              <div className={`${Utils['Mt-8']} ${Utils['Mt-sp-16']}`}>
                <ButtonLinkIconAfter
                  href="https://support.apple.com/ja-jp/HT208491"
                  as="a"
                  target="_blank"
                >
                  Apple社の盗難・紛失プランの補償請求および詳細を見る
                  <IconNewTabLine />
                </ButtonLinkIconAfter>
              </div>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※1契約につき、1年間に2回まで交換可能です。
                <br />
                <TxtEmp01>
                  ※別途
                  <LinkNormal
                    href="#service2"
                    onClick={e => anchorCallback(e, 'service2')}
                  >
                    自己負担金
                  </LinkNormal>
                  が発生いたします。
                </TxtEmp01>
              </TxtCap>
            </li>
          </ul>
        </SystemContainer>
        <BgGray
          className={`${Utils['Mt-64']} ${Utils['Pt-64']} ${Utils['Pb-48']}`}
        >
          <SystemContainer id="example1">
            <Heading level="2">
              <TxtEmp02>スマホユーザー約3人に1人が故障経験あり</TxtEmp02>
              <TxtCap>※</TxtCap>
            </Heading>
            <p className={Utils['Mt-16']}>
              未加入の場合、故障・破損時の新製品への機種変更金額が全額負担となります。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※調査時期：2017年8月7日～14日
              スマートフォンユーザー12,451人にWebアンケート
              調査元：株式会社MM総研
            </TxtCap>
            <Heading level="3" className={Utils['Mt-32']}>
              こんな、もしもの場合に利用できるサービスです
            </Heading>
            <MediaGridHalf className={Utils['Mt-32']}>
              <GridItem>
                <Heading level="3" className={Utils['Align-center']}>
                  画面にひびが入ったり割れてしまったとき
                </Heading>
                <MediaImage className={Utils['Mt-24']}>
                  <img
                    src={`${assets}img/service/iphone/applecare/img-applecare-01.png`}
                    alt=""
                    width="456"
                    height="224"
                    loading="lazy"
                  />
                </MediaImage>
                <p className={Utils['Mt-24']}>
                  かばんを落として、使っているスマートフォンの画面が破損し、修理した場合…
                </p>
                <MediaImage className={Utils['Mt-24']}>
                  <img
                    src={`${assets}img/service/iphone/applecare-icloud/img-applecare-arrow.png`}
                    alt=""
                    width="87"
                    height="19"
                    loading="lazy"
                  />
                </MediaImage>
                <MediaImage className={Utils['Mt-24']}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/iphone/applecare-icloud/img-applecare-02-sp.png`}
                      width="312"
                      height="459"
                    />
                    <img
                      src={`${assets}img/service/iphone/applecare-icloud/img-applecare-02-pc.png`}
                      alt="故障紛失保証 with AppleCare Services & iCloud+に加入していれば自己負担金は3,700円に抑えられます。"
                      width="455"
                      height="401"
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
              </GridItem>
              <GridItem>
                <Heading level="3" className={Utils['Align-center']}>
                  スマホ本体を紛失してしまったとき
                </Heading>
                <MediaImage className={Utils['Mt-24']}>
                  <img
                    src={`${assets}img/service/iphone/applecare-icloud/img-applecare-03.png`}
                    alt=""
                    width="309"
                    height="224"
                    loading="lazy"
                  />
                </MediaImage>
                <p className={Utils['Mt-24']}>
                  外出先に置き忘れて、スマートフォンを紛失し、新品の同一機種に交換した場合…
                </p>
                <MediaImage className={Utils['Mt-24']}>
                  <img
                    src={`${assets}img/service/iphone/applecare-icloud/img-applecare-arrow.png`}
                    alt=""
                    width="87"
                    height="19"
                    loading="lazy"
                  />
                </MediaImage>
                <MediaImage className={Utils['Mt-24']}>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/iphone/applecare-icloud/img-applecare-04-sp.png`}
                      width="311"
                      height="455"
                    />
                    <img
                      src={`${assets}img/service/iphone/applecare-icloud/img-applecare-04-pc.png`}
                      alt="故障紛失保証 with AppleCare Services & iCloud+に加入していれば自己負担金は12,900円に抑えられます。"
                      width="455"
                      height="399"
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
              </GridItem>
            </MediaGridHalf>
            <TxtCap as="p" className={Utils['Mt-32']}>
              ※価格は2024年2月21日時点のものです。
              <br />
              ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
              <br />
              ※1 iPhone 15 Proの保証対象外かつ、Appleで修理した場合の料金です。
              <ButtonLinkIconAfter
                href="https://support.apple.com/ja-jp/iphone/repair/service/screen-replacement"
                as="a"
                target="_blank"
              >
                詳しくはこちら
                <IconNewTabLine />
              </ButtonLinkIconAfter>
              <br />
              ※2 自己負担金は故障の状態によって異なります。詳細は各サービスの
              <LinkNormal
                href="#service"
                onClick={e => anchorCallback(e, 'service')}
              >
                自己負担金
              </LinkNormal>
              をご確認ください。
              <br />
              ※3 割引キャンペーン適用時以外の楽天モバイルでのiPhone 15
              Proの場合の販売価格になります。
            </TxtCap>
          </SystemContainer>
        </BgGray>
        <SystemContainer id="service" className={Utils['Mt-64']}>
          <Heading as="h2" level="2" id="service">
            サービス内容
          </Heading>
          <TxtNormal className={Utils['Mt-64']} as="p">
            故障の場合、修理（持ち込み修理、配送修理）と交換（エクスプレス交換サービス）がお選びいただけます。修理・配送日数や負担額をご確認のうえ、ご利用ください。盗難・紛失された場合は、交換保証となりますので「盗難・紛失プラン」をご利用ください。さらに「iCloud+
            50GBストレージ付き」も負担額無しでご利用いただけます。
          </TxtNormal>
          <LinkContent className={Utils['Mt-48']}>
            <LinkIconBefore
              href="#service-repair"
              onClick={e => anchorCallback(e, 'service-repair')}
            >
              <IconArrowDown />
              修理
            </LinkIconBefore>
            <LinkIconBefore
              href="#service-replace"
              onClick={e => anchorCallback(e, 'service-replace')}
            >
              <IconArrowDown />
              交換
            </LinkIconBefore>
            <LinkIconBefore
              href="#service-icloud"
              onClick={e => anchorCallback(e, 'service-icloud')}
            >
              <IconArrowDown />
              iCloud+
            </LinkIconBefore>
            <LinkIconBefore
              href="#service-support"
              onClick={e => anchorCallback(e, 'service-support')}
            >
              <IconArrowDown />
              サポート
            </LinkIconBefore>
          </LinkContent>
          <div className={Utils['Mt-56']}>
            <BgGray
              className={`${Utils['Align-center']} ${Utils['Pt-24']} ${Utils['Px-16']} ${Utils['Pb-32']}`}
            >
              <Heading level="3" id="service-repair">
                修理
              </Heading>
              <p className={Utils['Mt-16']}>
                修理の受付方法は2種類あります。お客様のご都合にあわせて、ご利用ください。
              </p>
            </BgGray>
            <ApplecareContent className={Utils['Mt-sp-40']}>
              <li>
                <Heading level="3">持ち込み修理</Heading>
                <p className={Utils['Mt-24']}>
                  お近くのApple StoreまたはApple
                  正規サービスプロバイダに、故障したiPhoneをお持ちいただく方法になります。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonLinkIconAfter
                    href="https://locate.apple.com/"
                    as="a"
                    target="_blank"
                  >
                    お近くのApple StoreまたはApple 正規サービスプロバイダを確認
                    <IconNewTabLine />
                  </ButtonLinkIconAfter>
                </div>
                <DescriptionListDefault className={Utils['Mt-48']}>
                  <div>
                    <ApplecareTableDt>負担額</ApplecareTableDt>
                    <dd className={Utils['Pb-40']}>
                      <p>
                        【iPhone 15,14,13シリーズ】
                        <br />
                        画面または背面ガラスの修理：3,700円
                        <br />
                        画面または背面ガラスの修理以外：12,900円
                      </p>
                      <p className={Utils['Mt-8']}>
                        【上記シリーズ以外】
                        <br />
                        画面の修理：3,700円
                        <br />
                        画面の修理以外：12,900円
                      </p>
                      <TxtCap className={Utils['Mt-8']} as="p">
                        ※自然故障の場合は無償
                        <br />
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>予約</ApplecareTableDt>
                    <dd>
                      <dl>必須</dl>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>修理日数</ApplecareTableDt>
                    <dd style={{ paddingBottom: '34px' }}>
                      即日～
                      <br />
                      <TxtCap className={Utils['Mt-8']} as="p">
                        ※故障状況によりお預かり修理になります。
                        <br />
                      </TxtCap>
                    </dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2024年2月21日現在のご利用料金です。
                  <br />
                  ※故障機の診断の結果、全損（壊滅的な損傷）や改造品であった場合、故意・過失の別なく、別途修理価格に定める保証外交換機価格をお支払いいただきます。
                </TxtCap>
                <div className={Utils['Mt-24']}>
                  <ButtonRegular
                    as="a"
                    href="/guide/iphone/applecare-icloud/repair/?tab-list=tab-menu1"
                  >
                    持ち込み修理のご利用方法を見る
                  </ButtonRegular>
                </div>
              </li>
              <li>
                <Heading level="3">配送修理</Heading>
                <p className={Utils['Mt-24']}>
                  宅配業者がご自宅やオフィスにiPhoneを引き取りにうかがい、修理が完了しましたら、Apple
                  よりご返送いたします。
                  <br />
                  修理は通常5～7営業日で完了します。
                </p>
                <DescriptionListDefault className={Utils['Mt-64']}>
                  <div>
                    <ApplecareTableDt>負担額</ApplecareTableDt>
                    <dd>
                      <p>
                        【iPhone 15,14,13シリーズ】
                        <br />
                        画面または背面ガラスの修理：3,700円
                        <br />
                        画面または背面ガラスの修理以外：12,900円
                      </p>
                      <p className={Utils['Mt-8']}>
                        【上記シリーズ以外】
                        <br />
                        画面の修理：3,700円
                        <br />
                        画面の修理以外：12,900円
                      </p>
                      <TxtCap className={Utils['Mt-16']} as="p">
                        ※自然故障の場合は無償
                        <br />
                        ※送料無料
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>予約</ApplecareTableDt>
                    <dd>
                      <dl>必須</dl>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>修理日数</ApplecareTableDt>
                    <dd>
                      通常5～7営業日
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※故障状況により前後します。別途配送にお日にちを頂戴いたします。
                      </TxtCap>
                    </dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2024年2月21日現在のご利用料金です。
                  <br />
                  ※故障機の診断の結果、全損（壊滅的な損傷）や改造品であった場合、故意・過失の別なく、別途修理価格に定める保証外交換機価格をお支払いいただきます。
                </TxtCap>
                <div className={Utils['Mt-24']}>
                  <ButtonRegular
                    as="a"
                    href="/guide/iphone/applecare-icloud/repair/?tab-list=tab-menu2"
                  >
                    配送修理のご利用方法を見る
                  </ButtonRegular>
                </div>
              </li>
            </ApplecareContent>
          </div>
          <div className={Utils['Mt-56']}>
            <BgGray
              className={`${Utils['Align-center']} ${Utils['Pt-24']} ${Utils['Px-16']} ${Utils['Pb-32']}`}
            >
              <Heading level="3" id="service-replace">
                交換
              </Heading>
              <p className={Utils['Mt-16']}>
                故障か盗難・紛失かで、ご利用いただくサービスが異なります。
              </p>
            </BgGray>
            <ApplecareContent className={Utils['Mt-sp-40']}>
              <li>
                <Heading level="3" id="service1">
                  エクスプレス交換サービス（故障）
                </Heading>
                <p className={Utils['Mt-24']}>
                  いち早く交換して修理の待ち時間をなくされたい場合は、エクスプレス交換サービスをご利用ください。Apple
                  から交換品がご指定の住所に届きます。
                </p>
                <TxtCap className={Utils['Mt-8']} as="p">
                  ※iPhone本体のみ対象です。画面交換サービスやアクセサリなどは対象外となります。
                  <br />
                  ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
                  <br />
                  ※対象地域：日本国内（離島などの一部地域を除く）
                </TxtCap>
                <div className={Utils['Mt-16']}>
                  <ButtonLinkIconAfter
                    href="https://support.apple.com/ja-jp/iphone/repair/service/express-replacement"
                    as="a"
                    target="_blank"
                  >
                    Apple社のエクスプレス交換サービスの詳細を見る
                    <IconNewTabLine />
                  </ButtonLinkIconAfter>
                </div>
                <DescriptionListDefault className={Utils['Mt-80']}>
                  <div>
                    <ApplecareTableDt>負担額</ApplecareTableDt>
                    <dd className={Utils['Pb-24']}>
                      <p>12,900円</p>
                      <TxtCap as="p">
                        ※自然故障の場合は無償
                        <br />
                        ※送料無料
                      </TxtCap>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>申請</ApplecareTableDt>
                    <dd>
                      <dl>必須</dl>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>配送日数</ApplecareTableDt>
                    <dd>
                      最短翌日
                      <br />
                      <TxtCap className={Utils['Mt-8']} as="p">
                        ※交通状況や天候の影響で遅延する可能性があります。
                      </TxtCap>
                      <TxtCap className={Utils['Mt-8']} as="p">
                        ※ 対象地域：日本国内（離島などの一部地域を除く）
                      </TxtCap>
                    </dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2024年2月21日現在のご利用料金です。
                </TxtCap>
                <div className={Utils['Mt-24']}>
                  <ButtonRegular
                    as="a"
                    href="/guide/iphone/applecare-icloud/replacement/?tab-list=tab-menu1"
                  >
                    エクスプレス交換サービスのご利用方法を見る
                  </ButtonRegular>
                </div>
              </li>
              <li>
                <Heading level="3" id="service2">
                  盗難・紛失プラン
                </Heading>
                <p className={Utils['Mt-24']}>
                  盗難・紛失の場合は、「盗難・紛失プラン」がご利用できるすべての国で、新品または新品同様の同一機種をお届けします。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※iPhone本体のみ対象です。アクセサリなどは対象外となります。
                  <br />
                  ※ご利用には、盗難・紛失される前に「iPhone
                  を探す」がオンになっている必要があります。
                  <br />
                  ※Appleが修理または交換サービスで提供する交換品には、Appleの機能要件検査に合格した新品または中古のApple純正パーツが含まれます。
                  <br />
                  ※盗難・紛失保証申請手続きの際、新しいデバイスの支給を受ける前に、紛失したデバイスのデータ消去、無効化、所有権の譲渡を求められます。
                  <br />
                  ※海外での交換は、在庫が限られていたり、地域やiPhoneのモデルによってオプションが異なる場合があります。
                </TxtCap>
                <div className={Utils['Mt-16']}>
                  <ButtonLinkIconAfter
                    href="https://support.apple.com/ja-jp/HT208491"
                    as="a"
                    target="_blank"
                  >
                    Apple社の盗難・紛失プランの補償請求および詳細を見る
                    <IconNewTabLine />
                  </ButtonLinkIconAfter>
                </div>
                <DescriptionListDefault className={Utils['Mt-24']}>
                  <div>
                    <ApplecareTableDt>負担額</ApplecareTableDt>
                    <dd style={{ paddingBottom: '54px' }}>
                      <p>12,900円</p>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>申請</ApplecareTableDt>
                    <dd>
                      <dl>必須</dl>
                    </dd>
                  </div>
                  <div>
                    <ApplecareTableDt>配送日数</ApplecareTableDt>
                    <dd style={{ paddingBottom: '42px' }}>
                      2～3営業日
                      <br />
                      <TxtCap className={Utils['Mt-8']}>
                        ※補償請求が承認がされた場合
                      </TxtCap>
                    </dd>
                  </div>
                </DescriptionListDefault>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※2024年2月21日現在のご利用料金です。
                </TxtCap>
                <div className={Utils['Mt-24']}>
                  <ButtonRegular
                    as="a"
                    href="/guide/iphone/applecare-icloud/replacement/?tab-list=tab-menu2"
                  >
                    盗難・紛失プランのご利用方法を見る
                  </ButtonRegular>
                </div>
              </li>
            </ApplecareContent>
          </div>
          <div className={Utils['Mt-56']}>
            <BgGray
              className={`${Utils['Align-center']} ${Utils['Pt-24']} ${Utils['Px-16']} ${Utils['Pb-32']}`}
            >
              <Heading level="3" id="service-icloud">
                iCloud+
              </Heading>
              <p className={Utils['Mt-16']}>
                写真、ファイル、バックアップなどの最も重要な情報を、すべてのデバイスで安全かつ最新の状態で利用するのに役立ちます。
              </p>
            </BgGray>
            <Heading level="4" className={Utils['Mt-48']}>
              iCloud+の特長
            </Heading>
            <p className={Utils['Mt-16']}>
              iCloud+は、写真、ファイル、メモなど、あなたのすべてのデータを安全に保存し、最新の状態に保ち、どこからでもアクセスできます。 バックアップを有効にしておくことで、デバイスをなくした時や新しいデバイスを手に入れた時も、手間をかけずにスムーズに復元できます。さらに、iCloudプライベートリレー、「メールを非公開」の機能でプライバシーを守ります。iPhone本体だけでなくデータも安心です。
            </p>
            <IcloudStorage className={Utils['Mt-32']}>
              <div>
                <img
                  src={`${assets}img/service/iphone/applecare-icloud/icloud-thumb.svg`}
                  alt=""
                  width="117"
                  height="117"
                  loading="lazy"
                />
              </div>
              <div>
                <TxtEmp01 as="p">
                  「iCloud+ 50GBストレージ付き」をご利用いただけます。
                </TxtEmp01>
              </div>
            </IcloudStorage>
            <p className={Utils['Mt-16']}>
              <LinkIconAfter
                as="a"
                href="https://support.apple.com/ja-jp/guide/icloud/mmfc854d9604/icloud"
                target="_blank"
              >
                Apple社のiCloud+の詳細を見る
                <IconNewTabLine />
              </LinkIconAfter>
            </p>
            <DescriptionListDefault
              className={Utils['Mt-24']}
              style={{ maxWidth: '504px', width: '100%', margin: 'auto' }}
            >
              <div>
                <ApplecareTableDt>負担額</ApplecareTableDt>
                <dd>無償</dd>
              </div>
            </DescriptionListDefault>
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']} `}>
              <ButtonRegular
                as="a"
                href="/guide/iphone/applecare-icloud/icloud/"
              >
                iCloud+のご利用方法を見る
              </ButtonRegular>
            </div>
          </div>
          <div className={Utils['Mt-56']}>
            <BgGray
              className={`${Utils['Align-center']} ${Utils['Pt-24']} ${Utils['Px-16']} ${Utils['Pb-32']}`}
            >
              <Heading level="3" id="service-support">
                サポート
              </Heading>
              <p className={Utils['Mt-16']}>
                製品や利用方法について、Apple
                の専任スペシャリストが、お電話もしくはチャットにて優先的にサポートします。
                <br />
                Apple
                サポートからお問い合わせ内容を指定し、ご希望のお問い合わせ方法をご利用ください。
                <br />
                AppleIDと製品のIMEI（シリアル番号）をご用意のうえ、ご利用ください。
              </p>
            </BgGray>
            <ul className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <li>
                <TxtCap as="p">
                  ※
                  IMEIの確認方法：通話アプリを起動し、ダイヤルに「*#06#」と入力すると15桁の数字が表示されます。
                </TxtCap>
              </li>
              <li>
                <TxtCap as="p">
                  ※電話料金がかかる場合があります。電話番号およびサポート営業時間は変更される場合があります。
                </TxtCap>
              </li>
            </ul>
            <DescriptionListDefault
              className={Utils['Mt-24']}
              style={{ maxWidth: '504px', width: '100%', margin: 'auto' }}
            >
              <div>
                <ApplecareTableDt>負担額</ApplecareTableDt>
                <dd>無償</dd>
              </div>
            </DescriptionListDefault>
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']} `}>
              <ButtonRegular
                as="a"
                href="https://getsupport.apple.com/?caller=qrcdrktn"
                target="_blank"
              >
                Apple サポートにアクセスする
                <IconNewTabLine className={Utils['Pl-8']} />
              </ButtonRegular>
            </div>
          </div>
        </SystemContainer>
        <SystemContainer id="notes" className={Utils['Mt-64']}>
          <AccordionList text={'ご利用上の注意'} isOpened={true}>
            <UlOnly>
              <li>
                <TxtEmp02>
                  本オプションサービスは、楽天モバイルオンラインショップまたは楽天モバイルショップ（店舗）にて、iPhoneご購入と同時の場合のみご加入いただけます。
                </TxtEmp02>
              </li>
              <li>
                本オプションサービスは製品購入時のみ加入可能です。一度解約すると、再度加入することはできません。
              </li>
              <li>
                本オプションサービスは、保証対象となるiPhoneを受け取った時点から適用され、課金が開始されます。
                <p className={`${Utils['Ml-16']} ${Utils['Mt-8']}`}>
                  ・楽天モバイルオンラインショップで購入：iPhoneの配達完了時点から適用
                </p>
                <p className={`${Utils['Ml-16']} ${Utils['Mt-8']}`}>
                  ・楽天モバイル店頭で購入：購入時点から適用
                </p>
              </li>
              <li>
                盗難・紛失の原因が、お客様の故意・重過失による場合や、災害（地震・噴火・津波・水害）などによる損害は対象外となります。
              </li>
              <li>
                ご利用料金に滞りがある場合、本契約のご利用をお断りする場合があります。
              </li>
              <li>
                iPhoneの修理ご利用時の修理価格の適用や
                Apple社が提供する各サービスは、Apple社への加入登録が完了をするまで、ご利用いただけない場合がございます。
              </li>
              <li>
                <LinkNormal
                  as="a"
                  href="/guide/iphone/applecare-icloud/icloud/"
                >
                  「iCloud+ 50GBストレージ付き」のご利用上の注意
                </LinkNormal>
                もご確認ください。
              </li>
              <li>
                詳細は
                <LinkIconAfter
                  as="a"
                  href="/terms/pdf/rakuten_mobile_applecare_services_icloud.pdf?20240221"
                >
                  「故障紛失保証 with AppleCare Services & iCloud+」利用規約
                  <IconPdf />
                </LinkIconAfter>
                をご確認ください。
              </li>
              <li>
                自己負担金のお支払いは、当社またはApple社が別途定める方法にて所定のサービス料のお支払いをお願いいたします。
              </li>
            </UlOnly>
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonRegularLarge href="/guide/iphone/applecare-icloud/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="applecare"
              selectedIds={selectedCardIds}
              relatedTitle={'その他の保証サービス'}
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="applecare"
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

export default ServiceIphoneApplecareicloud
