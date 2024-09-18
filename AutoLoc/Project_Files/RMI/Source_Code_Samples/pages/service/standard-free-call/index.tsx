import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
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
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaImage, MediaGridHalf } from '@components/layout/Media'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { ButtonPrimary } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { IconArrowDown, IconChevronRight, IconPdf } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { assets } from '@components/utils/assets'
import { AccordionList } from '@components/atoms/AccordionList'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { CampaignRule1977 } from '@components/include/campaign/rules/2023/CampaignRule1977'
import { CampaignRule1525 } from '@components/include/campaign/rules/2023/CampaignRule1525'
import { CampaignRule1978 } from '@components/include/campaign/rules/2023/CampaignRule1978'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { BannerHover } from '@components/atoms/Banner'

const ArrowRight = styled.div`
  display: inline-block;
  height: 0;
  width: 0;
  margin: 0 8px 4px;
  border-top: 12px solid transparent;
  border-left: 10px solid #333;
  border-bottom: 12px solid transparent;
`
const BgGray = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const AnchorArea = styled.ul`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  > li {
    display: inline-block;
    margin-right: 24px;
  }
`
const Price = styled.div`
  line-height: 1;
`
const Heading2Line = styled(Heading)`
  ${mixins.mq.MinL} {
    min-height: 2.85em;
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

const BannerCpnSection = styled.div`
  margin: 64px 0;
  ${mixins.mq.MaxM} {
    margin: 48px 0;
  }
`

const BannerCpnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }
`

const ServiceStandardfreecall: NextPage = () => {
  const theme = useContext(ThemeContext)
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = '15分（標準）通話かけ放題'
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
    item: [{ text: '通話・SMS・メール', isEmp: false }],
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「15分（標準）通話かけ放題 」のサービス紹介。OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題でご利用いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={`${Utils['Ml-8']} ${Utils['Mt-8']}`}>
            15分（標準）通話かけ放題
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-24']}>
            <MediaImage>
              <img
                src={`${assets}img/service/standard-free-call/img-01-220526.png`}
                alt=""
              />
            </MediaImage>
            <div>
              OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。
              <Price className={Utils['Align-right']}>
                <TxtEmp01>
                  <AlphanumericSize size="l">1,100</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
                <ArrowRight />
                <TxtEmp02>
                  <AlphanumericSize size="l">1</AlphanumericSize>
                  <TxtSize size="l">カ月無料</TxtSize>
                  <TxtSize size="s">※1</TxtSize>
                </TxtEmp02>
              </Price>
              <TxtCap
                as="p"
                className={`${Utils['Mt-8']} ${Utils['Weight-bold']}`}
              >
                <TxtEmp02>
                  ※「Rakuten最強プラン（データタイプ）」は対象外です。
                </TxtEmp02>
              </TxtCap>
              <TxtCap as="p">
                ※1 かけ放題の初回お申し込み時。条件あり。詳細は
                <LinkNormal
                  href="#campaign-rule1977"
                  onClick={e => anchorCallback(e, 'campaign-rule1977')}
                >
                  キャンペーンルール
                </LinkNormal>
                をご確認ください。
              </TxtCap>
              <TxtCap as="p">
                ※ 本オプションサービスは、日割り対象外です。
              </TxtCap>
              <TxtCap as="p">
                ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                <LinkIconAfter href="/terms/pdf/rakuten_mobile_exception_number_list.pdf">
                  対象外番号一覧
                  <IconPdf />
                </LinkIconAfter>
                をご確認ください。
              </TxtCap>
            </div>
          </MediaGrid>
          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
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
                    href="/guide/application/?lid-r=service_standard-free-call_guide_application01"
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
                    data-ratid="service_standard-free-call_plans01"
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
                <LinkIconAfter href="/guide/standard-free-call/?l-id=service_standard-free-call_guide_standard-free-call01">
                  お申し込み方法を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
          <AnchorArea className={Utils['Mt-40']}>
            <li>
              <LinkIconBefore
                href="#service"
                onClick={e => anchorCallback(e, 'service')}
              >
                <IconArrowDown />
                主なサービス仕様
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#attention"
                onClick={e => anchorCallback(e, 'attention')}
              >
                <IconArrowDown />
                ご利用上の注意
              </LinkIconBefore>
            </li>
          </AnchorArea>
        </SystemContainer>

        <BgGray className={Utils['Mt-32']}>
          <SystemContainer>
            <Heading id="service" level="2" className={Utils['Align-center']}>
              主なサービス仕様
            </Heading>
            <MediaGridHalf className={Utils['Mt-56']}>
              <div>
                <Heading level="3" className={Utils['Align-center']}>
                  15分以内の国内通話が何度でもかけ放題
                </Heading>
                <MediaImage className={Utils['Mt-16']}>
                  <img
                    src={`${assets}img/service/standard-free-call/img-04-220526.png`}
                    alt="1回15分 何度でも！"
                    width="314"
                  />
                </MediaImage>
                <div>
                  <p className={Utils['Mt-16']}>
                    OS標準の電話アプリでの国内通話が1回15分以内かけ放題となります。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※
                    1回あたりの通話時間が15分を超過した場合、超過分については30秒20円（税込22円）の通話料がかかります。
                  </TxtCap>
                  <TxtCap as="p">
                    ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                    <LinkIconAfter href="/terms/pdf/rakuten_mobile_exception_number_list.pdf">
                      対象外番号一覧
                      <IconPdf />
                    </LinkIconAfter>
                    をご確認ください。
                  </TxtCap>
                </div>
              </div>
              <div>
                <Heading level="3" className={Utils['Align-center']}>
                  国内でのSMSが送信し放題<sup>※</sup>
                </Heading>
                <MediaImage className={Utils['Mt-16']}>
                  <img
                    src={`${assets}img/service/standard-free-call/img-05-220526.png`}
                    alt="SMS送信し放題"
                    width="343"
                  />
                </MediaImage>
                <div>
                  <p className={Utils['Mt-16']}>
                    OS標準のメッセージアプリ、SMS（ショートメッセージ）の国内での送信料が無料になります。
                  </p>
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
                </div>
              </div>
            </MediaGridHalf>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-48']}`}
            >
              こんな方におすすめ
            </Heading>

            <MediaGridHalf className={Utils['Mt-32']}>
              <div>
                <Heading level="3" className={Utils['Align-center']}>
                  スマホのOS標準電話アプリもおトクに
                  <br className={Utils['Disp-pc']} />
                  使いたい方
                </Heading>
                <MediaImage className={Utils['Mt-16']}>
                  <img
                    src={`${assets}img/service/standard-free-call/img-06-220526.png`}
                    alt=""
                    width="343"
                  />
                </MediaImage>
                <div>
                  <p className={Utils['Mt-16']}>
                    Rakuten
                    Linkアプリによるネット回線での無料通話だけでなく、電話回線での通話もおトクに使いたい方におすすめ。15分以内なら何回かけても定額でかけ放題！
                  </p>
                </div>
              </div>
              <div>
                <Heading2Line level="3" className={Utils['Align-center']}>
                  SMSをよく使う方
                </Heading2Line>
                <MediaImage className={Utils['Mt-16']}>
                  <img
                    src={`${assets}img/service/standard-free-call/img-07-220526.png`}
                    alt=""
                    width="320"
                  />
                </MediaImage>
                <div>
                  <p className={Utils['Mt-16']}>
                    仕事はもちろんプライベートでもSMSを頻繁に利用する方も多いはず。そんな方は毎月の請求額を気にせず定額で使い放題！
                  </p>
                </div>
              </div>
            </MediaGridHalf>
          </SystemContainer>
        </BgGray>

        <SystemContainer>
          <Heading level="2" className={Utils['Mt-56']}>
            対象外番号
          </Heading>
          <div>
            <LinkIconAfter href="/terms/pdf/rakuten_mobile_exception_number_list.pdf">
              15分（標準）通話かけ放題 対象外番号一覧
              <IconPdf />
            </LinkIconAfter>
          </div>
          <Heading level="2" id="attention" className={Utils['Mt-56']}>
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
              1回あたりの通話時間が15分を超過した場合、超過分については30秒20円（税込22円）の通話料が別途かかります。
            </li>
            <li>
              国内から海外への通話・SMS送信は、15分（標準）通話かけ放題の対象外となります。
            </li>
            <li>
              本オプションサービスに加入しているご契約者様が着信転送を行った場合、転送した通話も15分（標準）通話かけ放題の対象となります。
            </li>
            <li>
              迷惑SMS防止の観点で標準のメッセージアプリおよびRakuten
              Link問わず、国際SMSを含むSMSの送信上限を200通／日に設定しております。通数のカウント方法は「
              <LinkNormal href="/service/international-sms/#anc00">
                日本で国際SMSを利用する場合
              </LinkNormal>
              」をご覧ください。
            </li>
            <li>
              本オプションサービスに加入しているご契約者様が留守番電話にメッセージを残す、1417発信にてメッセージを再生する場合も15分（標準）通話かけ放題の対象となります。
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
                    href="/guide/application/?lid-r=service_standard-free-call_guide_application02"
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
                    data-ratid="service_standard-free-call_plans02"
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
                <LinkIconAfter href="/guide/standard-free-call/?l-id=service_standard-free-call_guide_standard-free-call02">
                  お申し込み方法を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer>
            <Related
              lId="standard-free-call"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>通話・SMS・メールサービス</span>
                </>
              }
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="standard-free-call"
              hiddenFreeCall={true}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>

        <SystemContainer>
          <BannerCpnSection>
            <Heading level="2">おすすめのキャンペーン</Heading>
            <BannerCpnWrap>
              <BannerHover href="/campaign/data3g/?l-id=service_standard-free-call_campaign_data3g">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/bnr/bnr-data-3g-328-185-240501.png`}
                    width="656"
                    height="370"
                  />
                  <img
                    srcSet={`${assets}img/bnr/bnr-data-3g-504-158-240501.png`}
                    width="504"
                    height="158"
                    alt="毎月開催　初めて3GBを超えたら1,000ポイントGET！※要エントリー"
                  />
                </picture>
              </BannerHover>
              <BannerHover href="/campaign/data/?l-id=service_standard-free-call_campaign_data">
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/bnr/bnr-data-20g-328-185-240501.png`}
                    width="656"
                    height="370"
                  />
                  <img
                    srcSet={`${assets}img/bnr/bnr-data-20g-504-158-240501.png`}
                    width="504"
                    height="158"
                    alt="毎月開催　初めて20GBを超えたら1,500ポイントGET！※要エントリー"
                  />
                </picture>
              </BannerHover>
            </BannerCpnWrap>
          </BannerCpnSection>
        </SystemContainer>

        <SystemContainer>
          <Heading
            level="2"
            id="campaign-rule1977"
            className={`${Utils['Mt-56']}`}
          >
            【15分（標準）通話かけ放題】料金1カ月無料特典
          </Heading>

          <CampaignRule1977 className={Utils['Mt-24']} />

          <AccordionList
            text={'過去のキャンペーンルール'}
            isOpened={false}
            className={Utils['Mt-64']}
          >
            <Heading level="2" id="campaign-rule1978">
              【再申し込み者様限定】15分（標準）通話かけ放題を申し込みで1,100ポイントプレゼント
            </Heading>
            <CampaignRule1978 className={Utils['Mt-24']} />
            <Heading
              level="2"
              id="campaign-rule1525"
              className={`${Utils['Mt-32']}`}
            >
              【15分（標準）通話かけ放題】料金3カ月無料特典
            </Heading>
            <CampaignRule1525 className={Utils['Mt-24']} />
          </AccordionList>
        </SystemContainer>

        <SystemContainer>
          <Heading level="2" className={`${Utils['Mt-56']}`}>
            旧サービス
          </Heading>
          <UlOnly className={Utils['Mt-32']}>
            <li>
              <LinkIconAfter href="/service/10min-standard-free-call/">
                10分（標準）通話かけ放題
              </LinkIconAfter>
              （新規お申し込みは終了しました。）
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

export default ServiceStandardfreecall
