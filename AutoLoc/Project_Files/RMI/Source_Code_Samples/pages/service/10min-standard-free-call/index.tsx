import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
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
  TxtSize,
  TxtNormal,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaImage, MediaList3 } from '@components/layout/Media'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { IconPdf } from '@components/icons'
import { InfoboxAlert } from '~/components/atoms/Infobox'
import { anchorCallback } from '@components/utils/anchorCallback'

const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`

const CustomInfoboxAlert = styled(InfoboxAlert)`
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const ServiceContent = styled.ul`
  display: flex;
  margin-top: 32px;
  ${mixins.mq.MaxM} {
    display: block;
  }
  li {
    flex: 1;
    margin: 0 10px;
    width: 50%;
    margin: 0 12px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    ${mixins.mq.MaxM} {
      width: 100%;
      margin: 24px 0 0;
    }
    ${mixins.mq.MinL} {
      h3 {
        display: inline-block;
        word-wrap: break-word;
        width: 100%;
      }
    }
  }
  img {
    max-width: 343px;
    width: 100%;
    margin: auto;
    display: block;
  }
`
const LabelListBox = styled.div`
  display: flex;
  margin-top: 24px;
`

const VoiceAge = styled.span`
  display: block;
  font-size: 14px;
  color: ${props => props.theme.colors.lightBlack};
`

const VoiceImage = styled.div`
  padding-right: 8px;
  width: 91px;
  ${mixins.mq.MinL} {
    margin-top: 32px;
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
  > img {
    width: auto;
    ${mixins.mq.MinL} {
      width: 170px;
    }
  }
`

const Voice = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  ${mixins.mq.MinL} {
    margin-top: 0 !important;
    display: block;
  }

  .voice-text {
    margin-left: 12px;
    position: relative;
    text-align: center;
    font-weight: 400;
    flex: 1;
    z-index: 1;
    font-size: 15px;
    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      top: 50%;
      transform: translateY(-50%);
      ${mixins.mq.MinL} {
        top: auto;
        bottom: -17px;
        transform: translateY(0);
        transform: translateX(-50%);
      }
    }
    &::after {
      left: -12px;
      border-width: 11px 20px 11px 0;
      border-color: transparent #ffffff transparent transparent;
      z-index: 2;
      ${mixins.mq.MinL} {
        border-width: 31px 18px 0 18px;
        left: 50%;
        border-color: #ffffff transparent transparent transparent;
      }
    }
    &::before {
      left: -13px;
      border-width: 12px 22px 12px 0;
      border-color: transparent ${props => props.theme.colors.lightBlack}
        transparent transparent;
      z-index: 0;
      ${mixins.mq.MinL} {
        border-width: 33px 20px 0 20px;
        left: 50%;
        bottom: -18px;
        border-color: ${props => props.theme.colors.lightBlack} transparent
          transparent transparent;
      }
    }
  }
  .voice-text-border {
    position: relative;
    border: solid 1px ${props => props.theme.colors.lightBlack};
    background-color: #ffffff;
    padding: 10px 6px;
    border-radius: 4px;
    z-index: 1;
    ${mixins.mq.MinL} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 13px 21px 12px;
      border-radius: 10px;
      min-height: 125px;
    }
  }
  .voice-age {
    display: block;
    font-size: 14px;
    color: ${props => props.theme.colors.lightBlack};
  }
  .voice-image {
    padding-right: 8px;
    width: 91px;
    ${mixins.mq.MinL} {
      margin-top: 34px;
      padding-left: 0;
      width: 100%;
      text-align: center;
    }
    > img {
      width: auto;
      ${mixins.mq.MinL} {
        width: 170px;
      }
    }
  }
`

const Service10minStandardFreeCall: NextPage = () => {
  const pagetitle = '10分（標準）通話かけ放題'
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
    item: [{ text: '通話・SMS', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「10分（標準）通話かけ放題 」のサービス紹介。OS標準アプリでの1回10分以内の国内通話がかけ放題、国内SMSの送受信が使い放題でご利用いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-24']}>
            10分（標準）通話かけ放題
          </Heading>
          <LabelListBox>
            <LabelList {...labelArgs} />
            <TxtEmp02 className={Utils['Ml-8']}>2022年6月30日まで</TxtEmp02>
          </LabelListBox>

          <CustomInfoboxAlert className={Utils['Mt-24']}>
            <TxtEmp02>
              <TxtSize size="m">本サービスの提供は終了しました。</TxtSize>
            </TxtEmp02>
            <p className={Utils['Mt-16']}>
              かけ放題オプションの新規申し込みをご希望のお客様は「
              <LinkNormal href="/service/standard-free-call/">
                15分（標準）通話かけ放題
              </LinkNormal>
              」をご利用ください。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              <TxtEmp02>
                ※「10分（標準）通話かけ放題」は、2022年7月1日（金）に料金そのままで「15分（標準）通話かけ放題」へ自動アップグレードしました。アップグレードのお手続きは不要です。引き続き、「15分（標準）通話かけ放題」をご利用ください。
              </TxtEmp02>
            </TxtCap>
          </CustomInfoboxAlert>

          <MediaGrid className={Utils['Mt-40']}>
            <MediaImage className={Utils['Align-left']}>
              <img
                src={`${assets}img/service/10min-standard-free-call/img-05.png`}
                alt=""
                width="343"
              />
            </MediaImage>
            <div>
              OS標準アプリでの1回10分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">1,100</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
              </div>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※本オプションサービスは、日割り対象外です。
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                <LinkIconAfter
                  href="/terms/pdf/rakuten_mobile_exception_number_list.pdf?220701"
                  target="_blank"
                >
                  対象外番号一覧
                  <IconPdf />
                </LinkIconAfter>
                をご確認ください。
              </TxtCap>
            </div>
          </MediaGrid>
        </SystemContainer>

        <GrayBox className={Utils['Mt-32']}>
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']}>
              主なサービス仕様
            </Heading>
            <ServiceContent>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  10分以内の国内通話が何度でもかけ放題
                </Heading>
                <img
                  src={`${assets}img/service/10min-standard-free-call/img-01.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <TxtNormal className={Utils['Mt-16']} as="p">
                  OS標準の電話アプリでの国内通話が1回10分以内かけ放題となります。
                </TxtNormal>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  1回あたりの通話時間が10分を超過した場合、超過分については30秒20円（税込22円）の通話料がかかります。
                </TxtCap>
                <TxtCap as="p">
                  ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                  <LinkIconAfter
                    href="/terms/pdf/rakuten_mobile_exception_number_list.pdf?220701"
                    target="_blank"
                  >
                    対象外番号一覧
                    <IconPdf />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
              </li>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  国内でのSMSが送信し放題<sup>※</sup>
                </Heading>
                <img
                  src={`${assets}img/service/10min-standard-free-call/img-02.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <TxtNormal className={Utils['Mt-16']} as="p">
                  OS標準のメッセージアプリ、SMS（ショートメッセージ）の国内での送信料が無料になります。
                </TxtNormal>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※1日の送信上限があります。
                  <LinkNormal
                    href="#attention"
                    onClick={e => anchorCallback(e, 'attention')}
                  >
                    ご利用上の注意
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </li>
            </ServiceContent>
            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            >
              こんな方におすすめ
            </Heading>
            <ServiceContent>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  スマホのOS標準電話アプリもおトクに
                  <br className={Utils['Disp-pc']} />
                  使いたい方
                </Heading>
                <img
                  src={`${assets}img/service/10min-standard-free-call/img-03.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <TxtNormal className={Utils['Mt-16']} as="p">
                  Rakuten
                  Linkアプリによるネット回線での無料通話だけでなく、電話回線での通話もおトクに使いたい方におすすめ。10分以内なら何回かけても定額でかけ放題！
                </TxtNormal>
              </li>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  SMSをよく使う方
                  <br className={Utils['Disp-pc']} />
                  <br className={Utils['Disp-pc']} />
                </Heading>
                <img
                  src={`${assets}img/service/10min-standard-free-call/img-04.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <TxtNormal className={Utils['Mt-16']} as="p">
                  仕事はもちろんプライベートでもSMSを頻繁に利用する方も多いはず。そんな方は毎月の請求額を気にせず定額で使い放題！
                </TxtNormal>
              </li>
            </ServiceContent>
          </SystemContainer>

          <SystemContainer>
            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            >
              実際のご利用者様の声
            </Heading>

            <MediaList3 className={Utils['Mt-48']}>
              <Voice>
                <div className="voice-text">
                  <div className="voice-text-border">
                    <div>
                      10分以内の通話なら、
                      <br />
                      <TxtEmp02>通話料が一定</TxtEmp02>なのが良い！
                      <VoiceAge>（30代 女性）</VoiceAge>
                    </div>
                  </div>
                </div>
                <VoiceImage>
                  <img
                    src={`${assets}img/service/10min-standard-free-call/img-07.png`}
                    width="341"
                    alt=""
                  />
                </VoiceImage>
              </Voice>

              <Voice>
                <div className="voice-text">
                  <div className="voice-text-border">
                    <div>
                      仕事でもプライベートでも
                      <br />
                      <TxtEmp02>短時間で通話する回数が多い</TxtEmp02>
                      <br />
                      自分には、ぴったりのサービス。
                      <VoiceAge>（50代 男性）</VoiceAge>
                    </div>
                  </div>
                </div>
                <VoiceImage>
                  <img
                    src={`${assets}img/service/10min-standard-free-call/img-08.png`}
                    width="341"
                    alt=""
                  />
                </VoiceImage>
              </Voice>

              <Voice>
                <div className="voice-text">
                  <div className="voice-text-border">
                    <div>
                      <TxtEmp02>10分通話かけ放題</TxtEmp02>だから、
                      <br />
                      簡単な短い用件は
                      <br />
                      料金を気にしないで使えます。
                      <VoiceAge>（60代 女性）</VoiceAge>
                    </div>
                  </div>
                </div>
                <VoiceImage>
                  <img
                    src={`${assets}img/service/10min-standard-free-call/img-09.png`}
                    width="341"
                    alt=""
                  />
                </VoiceImage>
              </Voice>
            </MediaList3>
            <div className={Utils['Mt-32']}>
              <TxtCap as="p">
                ※1回あたりの通話時間が10分を超過した場合、超過分については30秒20円（税込22円）の通話料が別途かかります。
              </TxtCap>
              <TxtCap as="p">
                ※2022年2月
                楽天モバイル利用者へのWebアンケート調査（楽天インサイトモニター
                調査人数 400名）
              </TxtCap>
            </div>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <Heading level="2" as="h2" className={Utils['Mt-64']}>
            対象外番号
          </Heading>
          <div className={Utils['Mt-16']}>
            <LinkIconAfter
              href="/terms/pdf/rakuten_mobile_exception_number_list.pdf?220701"
              target="_blank"
            >
              10分（標準）通話かけ放題 対象外番号一覧
              <IconPdf />
            </LinkIconAfter>
          </div>
          <Heading level="2" as="h2" id="attention" className={Utils['Mt-64']}>
            ご利用上の注意
          </Heading>
          <UlOnly className={Utils['Mt-16']}>
            <li>
              お申し込み完了後の通話・SMSから、本オプションサービスが適用となります。
            </li>
            <li>
              お申し込み前までに利用した通話・SMSの料金は、本オプションサービスは適用されず、従量課金となります。
            </li>
            <li>
              解約後（手続きのすぐ後）に本オプションサービスは解約され、それ以降の通話・SMSの料金は従量課金となります。
            </li>
            <li>
              お申し込みができるのは月1回までとなり、同月内で再度お申し込みはできません。
            </li>
            <li>
              1回あたりの通話時間が10分を超過した場合、超過分については30秒20円（税込22円）の通話料が別途かかります。
            </li>
            <li>
              国内から海外への通話・SMS送信は、10分（標準）通話かけ放題の対象外となります。
            </li>
            <li>
              本オプションサービスに加入しているご契約者様が着信転送を行った場合、転送した通話も10分（標準）通話かけ放題の対象となります。
            </li>
            <li>
              迷惑SMS防止の観点で、SMS送信上限を100通／日に設定しております。
              <br />
              <TxtCap>
                ※状況により100通／日以上送信できる場合もありますが、その場合でも最大200通／日が上限になります。
              </TxtCap>
            </li>
            <li>
              本オプションサービスに加入しているご契約者様が留守番電話にメッセージを残す、1417発信にてメッセージを再生する場合も10分（標準）通話かけ放題の対象となります。
            </li>
            <li>
              本オプションサービスの加入にかかわらず、Rakuten
              Linkアプリでの国内通話は無料です。
            </li>
            <li>本オプションサービスは、楽天ポイント付与対象です。</li>
            <li>本オプションサービスは、日割り対象外です。</li>
            <li>
              本オプションサービスの提供条件は予告なく変更になる場合があります。
            </li>
          </UlOnly>
        </SystemContainer>
      </SystemWrapper>

      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default Service10minStandardFreeCall
