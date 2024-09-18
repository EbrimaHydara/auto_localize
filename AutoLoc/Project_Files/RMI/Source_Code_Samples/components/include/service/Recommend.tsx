import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { CardNormal } from '@components/atoms/Card'
import { Heading } from '@components/atoms/Heading'
import { TxtCap } from '@components/atoms/Txt'

const CardWrapper = styled.ul`
  li {
    ${mixins.mq.MinL} {
      width: calc(25% - 12px);
      margin-top: 0px;
      &:first-child {
        margin-left: 0px;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
    width: 100%;
    margin-top: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mixins.mq.MinL} {
    display: flex;
    justify-content: center;
    >li {
      calc((100% - 24px * (4 - 1))/ 4);
    }
    li + li {
      margin-top: 0;
      margin-left: 24px;
    }
  }
`

const CardContainer = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 64px;
`

const GridImg = styled.div`
  text-align: center;
  margin-top: 16px;
  grid-area: img;
  > img {
    width: auto;
    ${mixins.mq.MinL} {
      height: 84px;
    }
  }
  ${mixins.mq.MaxM} {
    margin-top: 0;
    display: flex;
    grid-area: img;
  }
`

const GridLink = styled.a`
  width: 100%;
  display: grid;
  gap: 0 16px;
  grid-template-rows: 2.5em 100px auto;
  grid-template-areas:
    'heading'
    'img'
    'txt';
  justify-items: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  * {
    color: #333;
  }
  ${mixins.mq.MaxM} {
    width: 100%;
    display: grid;
    align-content: space-between;
    justify-items: left;
    grid-template:
      'img heading' auto
      'img txt' 1fr/120px 1fr;
  }
`

const GridTxt = styled.p`
  text-align: center;
  font-size: 13px;
  margin-top: 16px;
  grid-area: txt;
  align-self: start;
  ${mixins.mq.MaxM} {
    grid-area: txt;
    text-align: left;
    margin-top: 0;
  }
`

const GridTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`

const ServiceRecommendListAnnotation = styled.div`
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 32px;
  }
`

interface RecommendConfig {
  lId?: string
  hiddenFreeCall: boolean
  hiddenHikari: boolean
  hiddenPayment: boolean
  hiddenNorton: boolean
  className?: string
  ratId?: string
  ratEvent?: 'click' | 'appear'
}

export const Recommend = ({
  lId,
  hiddenFreeCall,
  hiddenHikari,
  hiddenPayment,
  hiddenNorton,
  className,
  ratId,
  ratEvent,
}: RecommendConfig) => {
  return (
    <CardContainer>
      <Heading
        level="2"
        className={Utils['Align-center']}
        ratId={ratId}
        ratEvent={ratEvent}
      >
        おすすめ
        <br className={Utils['Disp-sp']} />
        オプションサービス
      </Heading>

      <CardWrapper className={Utils['Mt-32']}>
        {!hiddenFreeCall && (
          <CardNormal as="li">
            <GridLink href="/service/standard-free-call/?l-id=service-footer-recommend_service_standard-free-call">
              <GridTitle>15分（標準）通話かけ放題</GridTitle>
              <GridImg>
                <img
                  src={`${assets}img/service/standard-free-call/img-01-220526.png`}
                  alt=""
                  width="160"
                  height="86"
                />
              </GridImg>
              <GridTxt>
                国内通話15分かけ放題になるサービスが1カ月無料で使える！※1
              </GridTxt>
            </GridLink>
          </CardNormal>
        )}

        {!hiddenHikari && (
          <CardNormal as="li">
            <GridLink href="/internet/turbo/campaign/six-month-free/?l-id=service-footer-recommend_internet_turbo_campaign_six-month-free">
              <GridTitle>Rakuten Turbo</GridTitle>
              <GridImg>
                <img
                  src={`${assets}img/service/recommend/img-05.png`}
                  alt=""
                  width="160"
                  height="86"
                />
              </GridImg>
              <GridTxt>
                コンセントにさすだけですぐに使えるおうちのWiFi！
                {hiddenFreeCall ? '※1' : '※2'}
                <br />
                スマホとセットで20,000ポイント還元
                {hiddenFreeCall ? '※2' : '※3'}
              </GridTxt>
            </GridLink>
          </CardNormal>
        )}

        {!hiddenPayment && (
          <CardNormal as="li">
            <GridLink href="/campaign/payment-google/?l-id=service-footer-recommend_service_payment-google">
              <GridTitle>楽天モバイルキャリア決済</GridTitle>
              <GridImg>
                <img
                  src={`${assets}img/service/recommend/img-06.png`}
                  alt=""
                  width="160"
                  height="86"
                />
              </GridImg>
              <GridTxt>
                楽天モバイルのお支払いと同じ方法で決済できるサービスです。
                {/*}
                {hiddenFreeCall && '※2,3'}
                {*/}
              </GridTxt>
            </GridLink>
          </CardNormal>
        )}

        {!hiddenNorton && (
          <CardNormal as="li">
            <GridLink href="/service/norton-mobile-security/?l-id=service-footer-recommend_service_norton-mobile-security">
              <GridTitle>
                ノートン™ モバイル
                <br />
                セキュリティ
              </GridTitle>
              <GridImg>
                <img
                  src={`${assets}img/service/recommend/img-07.png`}
                  alt=""
                  width="160"
                  height="86"
                />
              </GridImg>
              <GridTxt>
                危険なWi-FiやWebサイトから保護{' '}
                <br className={Utils['Disp-pc']} />
                さまざまなリスクから守ります
              </GridTxt>
            </GridLink>
          </CardNormal>
        )}
      </CardWrapper>

      {!hiddenFreeCall && (
        <ServiceRecommendListAnnotation>
          <TxtCap as="p">
            ※1
            1カ月無料はかけ放題の初回お申し込み時。条件あり。SMSは1日の送信上限があります。ご利用上の注意をご確認ください。
          </TxtCap>
          <TxtCap as="p">※2 Wi-Fiの接続が必要です。</TxtCap>
          <TxtCap as="p">
            ※3 ポイントバックの条件は以下の3点になります。①Rakuten Turbo
            5GとRakuten Turboをキャンペーン期間内に申し込むこと②Rakuten
            Turboを申し込みの翌月末までに課金開始すること③Rakuten最強プランをRakuten
            Turbo利用開始の翌月末に利用していること※5Gは一部のエリアのみ
          </TxtCap>
        </ServiceRecommendListAnnotation>
      )}
      {hiddenFreeCall && (
        <ServiceRecommendListAnnotation>
          <TxtCap as="p">※1 Wi-Fiの接続が必要です。</TxtCap>
          <TxtCap as="p">
            ※2 ポイントバックの条件は以下の3点になります。①Rakuten Turbo
            5GとRakuten Turboをキャンペーン期間内に申し込むこと②Rakuten
            Turboを申し込みの翌月末までに課金開始すること③Rakuten最強プランをRakuten
            Turbo利用開始の翌月末に利用していること※5Gは一部のエリアのみ
          </TxtCap>
        </ServiceRecommendListAnnotation>
      )}
      <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
        <ButtonRegularLarge href="/service/" as="a">
          オプションサービスの一覧に戻る
        </ButtonRegularLarge>
      </div>
    </CardContainer>
  )
}
