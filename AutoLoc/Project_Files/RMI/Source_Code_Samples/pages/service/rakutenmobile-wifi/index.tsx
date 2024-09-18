import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  TxtNormal,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaIcon, MediaGridHalf, MediaImage } from '@components/layout/Media'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc } from '@components/atoms/List'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const GrayBox = styled.div`
  padding: 16px 0 56px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 32px 0 56px;
  }
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const SetviceContent = styled.ul`
  margin-top: 40px;
  ${mixins.mq.MinL} {
    margin-top: 64px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }

  li {
    ${mixins.mq.MaxM} {
      width: 100%;
      &:not(:first-child) {
        margin-top: 40px;
      }
    }
  }
`

const PriceRightArrow = styled.span`
  display: inline-block;
  height: 0;
  width: 0;
  margin: 0 8px 4px;
  border-top: 12px solid transparent;
  border-left: 10px solid #333;
  border-bottom: 12px solid transparent;
`

const SetviceRecomend = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }
`
const HeadingC = styled(Heading)`
  ${mixins.mq.MinS} {
    text-align: left;
  }
  ${mixins.mq.MinM} {
    text-align: center;
  }
  ${mixins.mq.MinL} {
    text-align: left;
  }
`

const ServiceRakutenmobilewifi: NextPage = () => {
  const selectedCardIds = ['number-share', 'data-charge']
  const pagetitle = '楽天モバイルWiFi by エコネクト'
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
    item: [{ text: 'データ通信', isEmp: false }],
  }
  const ListArgs1 = {
    text: [
      {
        text: '最大300Mbpsでの高速通信が可能です。',
      },
      {
        text: 'エコネクトWi-Fi接続ツール（「ギガぞう」アプリ）でユーザ認証が自動で行われ、簡単にWi-Fiにつながります。また、頻繁に利用する駅や公共交通機関、お気に入りのカフェやレストランなどをあらかじめ登録しておくだけで、自動でWi-Fiを検知して接続します。',
      },
    ],
  }

  const ListArgs2 = {
    text: [
      {
        text: '月途中で加入された場合、月額利用料が日割りとなります。',
      },
      {
        text: '無料期間以降に月途中で解約された場合、月額利用料が日割りとなります。',
      },
      {
        text: '初めてお申し込みの方に限り、月額398円が1カ月間無料となります。',
      },
    ],
  }

  const ListArgs3 = {
    text: [
      {
        text: 'オプションサービスのご利用開始にはアプリの設定が必要となります。詳しくは「お申し込み・ご利用方法を見る」をご確認ください。',
      },
    ],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「楽天モバイルWiFi by エコネクト」Wi-Fiサービス紹介。駅や街中の飲食店、ホテルなど、日本全国のスポットで高速インターネット（Wi-Fi）接続ができます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            楽天モバイルWiFi by エコネクト
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaIcon className={Utils['Mt-16']}>
            <div>
              <img
                src={`${assets}img/service/rakutenmobile-wifi/rakutenmobile-wifi-image-1-231002.png`}
                alt=""
                width="191"
                height="187"
              />
            </div>
            <div>
              駅や街中の飲食店、ホテルなど、日本全国のスポットで高速インターネットを利用できるWi-Fi接続サービスです。
              <TxtCap className={Utils['Mt-8']} as="p">
                ※約100,000以上のスポットで利用可能
              </TxtCap>
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">398</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
                <PriceRightArrow />
                <TxtEmp02>
                  <AlphanumericSize size="l">1</AlphanumericSize>
                  <TxtSize size="l">カ月無料</TxtSize>
                </TxtEmp02>
              </div>
            </div>
          </MediaIcon>
          <TxtCap className={`${Utils['Align-right']} ${Utils['Mt-8']}`} as="p">
            ※初めてお申し込みの方に限り、月額398円が1カ月間無料となります。
          </TxtCap>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/rakutenmobile-wifi/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <GrayBox className={`${Utils['Mt-56']} ${Utils['Pt-56']}`}>
          <SystemContainer>
            <Heading level="2">
              SNSや動画の閲覧など、外出先でのインターネット利用が便利に！
            </Heading>
            <MediaGridHalf className={Utils['Mt-32']}>
              <MediaImage>
                <img
                  src={`${assets}img/service/rakutenmobile-wifi/rakutenmobile-wifi-image-2-230331.png`}
                  alt=""
                  width="736"
                  height="415"
                />
              </MediaImage>
              <div>
                <Heading level="3">
                  街中でもインターネットを快適に利用できる
                </Heading>
                <TxtNormal as="p" className={Utils['Mt-16']}>
                  日本全国の公衆無線LANアクセスポイントが利用できます。接続可能スポットは順次拡大中！
                </TxtNormal>
                <TxtCap className={Utils['Mt-16']} as="p">
                  ※約100,000以上のスポットで利用可能
                </TxtCap>
              </div>
            </MediaGridHalf>
            <SetviceContent>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/rakutenmobile-wifi/rakutenmobile-wifi-image-3-231002.png`}
                    className={Utils['Mt-8']}
                    width="173"
                    height="346"
                    alt=""
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  データの利用状況がすぐにわかる
                </Heading>
                <TxtNormal className={Utils['Mt-16']} as="p">
                  月のデータ利用状況が、データローミングとWi-Fi利用とに分けて表示されます。通信速度制限まであとどのくらいデータ容量が残っているのかが一目でわかります。
                </TxtNormal>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/rakutenmobile-wifi/rakutenmobile-wifi-image-4-231002.png`}
                    className={Utils['Mt-8']}
                    width="173"
                    height="346"
                    alt=""
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  Wi-Fiスポットをかんたん検索
                </Heading>
                <TxtNormal className={Utils['Mt-16']} as="p">
                  アプリ上の地図でエコネクトWi-Fi対応のスポットを簡単に検索することができます。
                </TxtNormal>
              </li>
            </SetviceContent>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <Heading level="3" className={Utils['Mt-40']}>
            その他の特長
          </Heading>
          <ListDisc {...ListArgs1} className={Utils['Mt-16']} />
          <Heading level="3" className={Utils['Mt-40']}>
            こんな方にオススメ！
          </Heading>
          <SetviceRecomend className={Utils['Mt-16']}>
            <li>
              <HeadingC level="4">
                公衆Wi-Fiの接続設定が毎回面倒だと感じている方
              </HeadingC>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakutenmobile-wifi/img-recommend-01.png`}
                  width="300"
                  height="215"
                  alt=""
                />
              </div>
            </li>
            <li>
              <HeadingC level="4">
                外出先でインターネットを頻繁に利用される方
              </HeadingC>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakutenmobile-wifi/img-recommend-02.png`}
                  width="300"
                  height="215"
                  alt=""
                />
              </div>
            </li>
            <li>
              <HeadingC level="4">
                通話料節約のためアプリで音声通話をされる方
              </HeadingC>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/service/rakutenmobile-wifi/img-recommend-03.png`}
                  width="300"
                  height="215"
                  alt=""
                />
              </div>
            </li>
          </SetviceRecomend>
          <AccordionList
            text={'OSのバージョン'}
            isOpened={false}
            className={Utils['Mt-56']}
          >
            <p>Android 5.0以上 ／ iOS 12.0以上</p>
            <div className={Utils['Mt-16']}>
              <p>※2022年5月時点</p>
              <p>
                ※リリース直後の最新OSバージョンでは、正常に動作しない可能性があります。正常に動作するまでお時間をいただく場合がございます。
              </p>
              <p>
                ※アプリのバージョンアップにより、対応OSが変更になる場合があります。
              </p>
              <p>※パソコンではご利用いただけません。</p>
            </div>
          </AccordionList>
          <AccordionList text={'ご利用上の注意'} isOpened={false}>
            <ListDisc {...ListArgs2} />
            <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Ml-16']}`}>
              ※無料期間終了月の月額利用料は日割でのご請求となります。
            </TxtCap>
            <ListDisc {...ListArgs3} className={Utils['Mt-16']} />
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <ButtonRegularLarge href="/guide/rakutenmobile-wifi/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="rakutenmobile-wifi"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  その他の
                  <br className={Utils['Disp-sp']} />
                  データ通信サービス
                </>
              }
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="rakutenmobile-wifi"
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

export default ServiceRakutenmobilewifi
