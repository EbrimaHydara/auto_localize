import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  AlphanumericSize,
  TxtSize,
  TxtEmp02,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaImage, MediaGridSmall } from '@components/layout/Media'
import { LinkIconAfter } from '@components/atoms/Link'
import { InfoboxWhite } from '@components/atoms/Infobox'
import {
  IconCheck,
  IconPdf,
  IconNewTabLine,
  IconChevronRight,
} from '@components/icons'
import { ListDisc } from '@components/atoms/List'
import { Tab } from '@components/atoms/Tab'
import { BannerHover } from '@components/atoms/Banner'
import { Recommend } from '@components/include/service/Recommend'
import { Divider } from '@components/atoms/Divider'
import { DescriptionListDefaultSp2Col } from '@components/atoms/DescriptionList'
import { AccordionList } from '@components/atoms/AccordionList'
import { Related } from '@components/include/service/Related'
import { MovieWrapper } from '@components/atoms/MovieWrapper'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { ButtonPrimary } from '@components/atoms/Buttons'

const GrayBox = styled.div`
  padding: 16px 0;
  background-color: ${props => props.theme.colors.monotone97};
`

const ImgList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  li {
    width: calc((100% - 16px * (2 - 1)) / 2);

    ${mixins.mq.MaxM} {
      width: 100%;
      text-align: center;
    }
  }
  a {
    width: 100%;
  }
`

const ImgBorder = styled.img`
  border: 1px solid #ccc;
`

const HeadingSpCenter = styled(Heading)`
  ${mixins.mq.MaxM} {
    text-align: center;
  }
`

const SetviceContent = styled.ul`
  display: flex;
  li {
    width: 33.3%;
    margin: 0 12px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  ${mixins.mq.MaxM} {
    display: block;
    li {
      width: 100%;
      margin: 0 0 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const NortonCap = styled.div`
  ${mixins.mq.MinL} {
    display: grid;
    grid-template:
      'title img'
      'txt img';
    grid-template-columns: auto 1fr;
  }

  .title {
    ${mixins.mq.MinL} {
      grid-area: title;
      display: flex;
      align-items: flex-end;
    }
  }

  .img {
    ${mixins.mq.MinL} {
      grid-area: img;
    }
    ${mixins.mq.MaxM} {
      display: block;
      margin-inline: auto;
      margin-top: 8px;
    }
  }
  .txt {
    ${mixins.mq.MinL} {
      grid-area: txt;
      display: flex;
      align-items: flex-start;
    }
  }
`
const CustomHeading = styled(Heading)`
  ${mixins.mq.MinL} {
    margin-top: 64px !important;
  }
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
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

const ServiceNortonmobilesecrity: NextPage = () => {
  const selectedCardIds = ['i-filter']
  const pagetitle = 'ノートン™ モバイル セキュリティ'
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

  const ListArgs1 = {
    text: [
      {
        text: 'Android 8.0以降',
      },
      {
        text: 'ColorOS 7.1以降',
      },
      {
        text: 'iOS最新および2バージョン前までのiOSを搭載したiPhone',
      },
    ],
  }

  const ListArgs2 = {
    text: [
      {
        text: 'オプションサービスの加入につきましては、月途中で加入された場合、月額料金が日割りとなります。',
      },
      {
        text: 'オプションサービスの解約につきましては、月途中で解約された場合、月額料金が日割りとなります。',
      },
      {
        text: 'オプションサービスのご利用開始にはノートン™ モバイル セキュリティのアカウント作成が必要となります。詳しくは「お申し込み・ご利用方法を見る」をご確認ください。',
      },
    ],
  }

  const TabContent1 = () => (
    <DescriptionListDefaultSp2Col className={Utils['Mt-16']}>
      <div>
        <dt>Web保護</dt>
        <dd>
          悪質なサイトや詐欺サイトなど、危険なWebサイトにアクセスしようとすると、事前に検知して警告します。
        </dd>
      </div>
      <div>
        <dt>Wi-Fiセキュリティ</dt>
        <dd>安全でないWi-Fiネットワークに接続すると、警告します。</dd>
      </div>
      <div>
        <dt>アプリアドバイザー</dt>
        <dd>アプリの危険性を判定し、危険な場合は警告します。</dd>
      </div>
    </DescriptionListDefaultSp2Col>
  )

  const TabContent2 = () => (
    <DescriptionListDefaultSp2Col className={Utils['Mt-16']}>
      <div>
        <dt>Web保護</dt>
        <dd>
          悪質なサイトや詐欺サイトなど、危険なWebサイトにアクセスしようとすると、事前に検知して警告します。
        </dd>
      </div>
      <div>
        <dt>Wi-Fiセキュリティ</dt>
        <dd>安全でないWi-Fiネットワークに接続すると、警告します。</dd>
      </div>
      <div>
        <dt>デバイスセキュリティ</dt>
        <dd>
          オペレーティングシステムが古くなっているとユーザーに通知し、その影響について警告します。
        </dd>
      </div>
    </DescriptionListDefaultSp2Col>
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「ノートン™ モバイル セキュリティ」サービス紹介。ウイルス対策やWeb保護、Wi-Fiセキュリティなどの機能を備え、お客様のスマートフォン（スマホ）を保護します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            ノートン™ モバイル セキュリティ
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGridSmall className={Utils['Mt-32']}>
            <MediaImage className={Utils['Align-left']}>
              <img
                src={`${assets}img/service/norton-mobile-security/logo-norton-220708.png`}
                alt="Norton™"
                width="200"
              />
            </MediaImage>
            <div>
              <p>
                あなたのスマホは、常にあらゆる危険にさらされています。ノートン™
                モバイル
                セキュリティは、危険なWi-FiやWebサイトから保護する機能を備えています。世界が認めるノートンは、さまざまなリスクから守ります。
              </p>
            </div>
          </MediaGridSmall>
          <div className={`${Utils['Align-right']} ${Utils['Mt-16']}`}>
            <TxtEmp01>
              <AlphanumericSize size="l">220</AlphanumericSize>
              <TxtSize size="s">円／月</TxtSize>
            </TxtEmp01>
          </div>
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
                    href="/guide/application/?lid-r=service_norton-mobile-security_guide_application01"
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
                    data-ratid="service_norton-mobile-security_plans01"
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
                <LinkIconAfter href="/guide/norton-mobile-security/?l-id=service_norton-mobile-security_guide_norton-mobile-security01">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
          <MovieWrapper
            className={`${Utils['Mt-56']} ${Utils['Align-center']}`}
          >
            <iframe
              src="https://www.youtube.com/embed/og0LAm15Rrc"
              title="ノートン™ モバイル セキュリティ"
              allow="autoplay;
              encrypted-media"
              allowFullScreen
            ></iframe>
          </MovieWrapper>
        </SystemContainer>
        <GrayBox className={Utils['Mt-56']}>
          <SystemContainer>
            <Heading level="2" className={Utils['Mt-40']}>
              あなたも知らない間に詐欺にあう可能性！？
            </Heading>
            <MediaGrid className={Utils['Mt-16']}>
              <MediaImage>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/norton-mobile-security/norton-graph-01-220524.png`}
                    alt=""
                    width="656"
                    height="374"
                  />
                </div>
              </MediaImage>
              <div>
                <p>
                  警視庁は、2019年（令和元年）フィッシングメールやSMSなどによるインターネットバンキングに係る不正送金事犯の被害総額が
                  <TxtEmp02>約25億円</TxtEmp02>を超えたと報告しています。
                  <br />
                  <TxtCap className={Utils['Mt-8']}>
                    ※
                    <LinkIconAfter
                      as="a"
                      href="https://www.npa.go.jp/publications/statistics/cybersecurity/data/R03_cyber_jousei.pdf"
                      target="_blank"
                    >
                      警視庁広報資料（令和4年4月7日）
                      <IconPdf />
                    </LinkIconAfter>
                    より。
                  </TxtCap>
                </p>
                <p className={Utils['Mt-16']}>
                  ノートン™ モバイル
                  セキュリティなら、フィッシング詐欺やワンクリック詐欺を巧みにブロックする機能がついており、あなたの安全を守ります。
                </p>
              </div>
            </MediaGrid>
            <Divider className={Utils['Mt-56']} />
            <Heading level="2" className={Utils['Mt-56']}>
              主な機能
            </Heading>
            <SetviceContent className={Utils['Mt-24']}>
              <li>
                <HeadingSpCenter level="3">危険サイトを警告！</HeadingSpCenter>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/norton-mobile-security/main-image-01-220524.png`}
                    className={Utils['Mt-32']}
                    alt=""
                    width="656"
                    height="374"
                  />
                </div>
                <p className={Utils['Mt-16']}>
                  悪質なWebサイトやウイルスから、お使いのスマホを守ります。LINE、Instagramなどのアプリ上のリンクにも対応しており、危険なサイトを警告します。
                </p>
                <TxtCap className={Utils['Mt-8']} as="p">
                  ※ウイルスの検知はAndroid版のみの対応です。
                </TxtCap>
              </li>
              <li>
                <HeadingSpCenter level="3">危険なWi-Fiを警告！</HeadingSpCenter>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/norton-mobile-security/main-image-02-220524.png`}
                    className={Utils['Mt-32']}
                    alt=""
                    width="656"
                    height="374"
                  />
                </div>
                <p className={Utils['Mt-16']}>
                  セキュリティが弱いWi-Fiや個人情報の収集などを目的とした悪質なWi-Fiに警告を表示します。
                </p>
              </li>
              <li>
                <HeadingSpCenter level="3">
                  アプリの危険性を警告！
                </HeadingSpCenter>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/norton-mobile-security/main-image-03-220524.png`}
                    className={Utils['Mt-32']}
                    alt=""
                    width="656"
                    height="374"
                  />
                </div>
                <p className={Utils['Mt-16']}>
                  アプリスキャン技術を使用して、アプリの危険性を判定。ウイルスアプリや迷惑アプリからお使いのスマホを守ります。
                </p>
                <TxtCap className={Utils['Mt-8']} as="p">
                  ※Android版のみの対応です。
                </TxtCap>
              </li>
            </SetviceContent>
            <Divider className={Utils['Mt-56']} />
            <Heading level="2" className={Utils['Mt-56']}>
              どうしてノートン（Norton）が選ばれるの？
            </Heading>
            <InfoboxWhite className={`${Utils['Mt-24']} ${Utils['Mb-40']}`}>
              <p>
                <IconCheck
                  className={Utils['Mr-16']}
                  style={{ color: '#ff33a3', fontSize: '21px' }}
                />
                <TxtEmp01>世界中から提供される脅威データ</TxtEmp01>
              </p>
              <p className={Utils['Mt-8']}>
                <IconCheck
                  className={Utils['Mr-16']}
                  style={{ color: '#ff33a3', fontSize: '21px' }}
                />
                <TxtEmp01>世界のビッグデータをAI技術により知識化</TxtEmp01>
              </p>
              <p className={Utils['Mt-8']}>
                <IconCheck
                  className={Utils['Mr-16']}
                  style={{ color: '#ff33a3', fontSize: '21px' }}
                />
                <TxtEmp01>防御力「AAA」。世界最強クラスの防御力※</TxtEmp01>
              </p>
              <TxtEmp01 as="p" className={Utils['Mt-24']}>
                ノートンだからこそ、ほかにはない安心をあなたに届けます。
              </TxtEmp01>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※ SE Labs CONSUMER REPORT（January - March 2016 ～October -
                December 2019）, Dennis Technology Labs Home Anti-Virus
                Protection（October - December 2013 ～October - December
                2015）26回のうち、9回は Dennis Technology Labs のテストです。 SE
                Labs は Dennis Technology Labs
                のテスト手法を継続して実施する第三者調査機関です。
              </TxtCap>
              <NortonCap className={Utils['Mt-24']}>
                <TxtEmp01 as="p" className="title">
                  ノートン™ モバイル
                  セキュリティは日本PTAによって推薦されています。
                </TxtEmp01>
                <img
                  src={`${assets}img/service/norton-mobile-security/logo-nippon-pta.png`}
                  alt="公益社団法人日本PTA全国業議会推薦"
                  width="76"
                  className="img"
                />
                <TxtCap as="p" className={`${Utils['Mt-8']} txt`}>
                  ※ノートンシリーズは、公益社団法人日本PTA 全国協議会
                  推薦商品に認定。（2023年6月時点）
                </TxtCap>
              </NortonCap>
            </InfoboxWhite>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <Heading level="2" className={Utils['Mt-64']} as="h2">
            機能一覧
          </Heading>
          <Tab
            className={Utils['Mt-24']}
            heading1={'Android版'}
            heading2={'iOS版'}
            content1={<TabContent1 />}
            content2={<TabContent2 />}
          />
          <Heading level="2" className={Utils['Mt-56']}>
            ご利用いただけない製品
          </Heading>
          <p className={Utils['Mt-24']}>
            HUAWEI製品は、ノートン™ モバイル
            セキュリティをご利用頂くことはできません。
          </p>
          <CustomHeading level="2" className={Utils['Mt-48']}>
            動作環境
          </CustomHeading>
          <p className={Utils['Mt-24']}>
            以下の条件に該当するOSのスマートフォンまたはタブレット（いずれか1台）でご利用いただけます。
          </p>
          <CustomHeading level="2" className={Utils['Mt-48']}>
            OSのバージョン<TxtSize size="s">※</TxtSize>
          </CustomHeading>
          <ListDisc {...ListArgs1} className={Utils['Mt-24']} />
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※詳しくは
            <LinkIconAfter href="https://norton.com/nmsinfo" target="_blank">
              こちら
              <IconNewTabLine />
            </LinkIconAfter>
            より「ノートン デバイスセキュリティ
            （モバイルセキュリティを含む）＞モバイル」をご確認ください
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※2022年5月時点
          </TxtCap>
          <AccordionList
            text={'ご利用上の注意'}
            isOpened={true}
            className={Utils['Mt-64']}
          >
            <ListDisc {...ListArgs2} />
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
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
                    href="/guide/application/?lid-r=service_norton-mobile-security_guide_application02"
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
                    data-ratid="service_norton-mobile-security_plans02"
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
                <LinkIconAfter href="/guide/norton-mobile-security/?l-id=service_norton-mobile-security_guide_norton-mobile-security02">
                  お申し込み・ご利用方法詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※Google Play および Google Play ロゴは Google LLC の商標です。
          </TxtCap>
          <ImgList className={Utils['Mt-40']}>
            <li>
              <BannerHover href="/guide/security/?l-id=service_norton-mobile-security_guide_security">
                <ImgBorder
                  src={`${assets}img/bnr/guide-security-504-160.png`}
                  alt="情報セキュリティ 楽天モバイルの情報セキュリティへの取り組みをご紹介"
                  width="1008"
                  height="320"
                />
              </BannerHover>
            </li>
            <li>
              <BannerHover href="/guide/security/kids-manner/?l-id=service_norton-mobile-security_guide_security_kids-manner">
                <ImgBorder
                  src={`${assets}img/bnr/bnr-kids-manner-arrow-504-160.png`}
                  alt="子どもと学ぶスマホのマナー スマホのマナーをしっかりと身につけて安全につかおう"
                  width="1008"
                  height="320"
                />
              </BannerHover>
            </li>
          </ImgList>
          <div className={Utils['Mt-24']}>
            <BannerHover href="/guide/security/cyber-bousai2022/?l-id=service_norton-mobile-security_guide_security_cyber-bousai2022">
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
              lId="norton-mobile-security"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>セキュリティサービス</span>
                </>
              }
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="norton-mobile-security"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={true}
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

export default ServiceNortonmobilesecrity
