import type { NextPage } from 'next'
import React, { useState } from 'react'
import { assets } from '@components/utils/assets'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import {
  LinkIconAfter,
  LinkIconBefore,
  LinkNormal,
} from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import {
  IconArrowDown,
  IconArrowUp,
  IconChevronRight,
  IconNewTabLine,
} from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { ButtonRegular, ButtonSecondary } from '@components/atoms/Buttons'
import { MediaGridHalf } from '@components/layout/Media'
import { TxtCap } from '@components/atoms/Txt'
import { GuidePopAsk } from '@components/include/guide/PopAsk'
import { MyRakutenAppVerchical } from '@components/include/common/MyRakutenAppVerchical'

const SupportFaqWrap = styled.div`
  padding-top: 32px;
  .gotop {
    display: inline-table;
  }
`
const SupportFaqNavWrap = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding-top: 24px;
  padding-bottom: 24px;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
  .nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    ${mixins.mq.MinL} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .nav-link {
    width: 100%;

    > span {
      display: inline-block;
      vertical-align: bottom;
    }
  }
`
const SupportFaqNav = styled(SystemContainer)`
  ${mixins.mq.MaxM} {
    padding-left: 0;
    padding-right: 0;
  }
`
const NavAnchor = styled(LinkIconBefore)`
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  > icon {
    display: inline;
  }
`
const SupportTrouble = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  ${mixins.mq.MinL} {
    grid-template-columns: 176px auto;
  }
  &::before {
    display: block;
    content: '';
    background-image: url(${assets}img/support/icon-trouble-nav.png);
    background-size: contain;
    width: 96px;
    height: 88px;
    flex-basis: 1;
    ${mixins.mq.MinL} {
      width: 152px;
      height: 140px;
    }
  }
  & > .block {
    ${mixins.mq.MaxM} {
      display: contents;
    }
  }
  .btn {
    margin-top: 16px;
    ${mixins.mq.MaxM} {
      grid-column: span 2;
    }
    ${mixins.mq.MinL} {
      margin-top: 24px;
    }
  }
`
const SupportAll = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  ${mixins.mq.MinL} {
    grid-template-columns: 176px auto;
  }
  &::before {
    display: block;
    content: '';
    background-image: url(${assets}img/support/faq/support-icon.png);
    background-size: contain;
    width: 96px;
    height: 88px;
    flex-basis: 1;
    ${mixins.mq.MinL} {
      width: 152px;
      height: 140px;
    }
  }
  & > .block {
    ${mixins.mq.MaxM} {
      display: contents;
    }
  }
  .btn {
    margin-top: 16px;
    ${mixins.mq.MaxM} {
      grid-column: span 2;
    }
    ${mixins.mq.MinL} {
      margin-top: 24px;
    }
  }
`
const MyRakutenApp = styled.div`
  margin-top: 72px;
  .store {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    column-gap: 8px;
    ${mixins.mq.MinL} {
      margin-top: 8px;
    }
  }
`

const SupportFaq: NextPage = () => {
  type navType = {
    anchor: string
    text: string
    ratid: string
  }
  const navigationData: navType[] = [
    {
      anchor: 'cat-1',
      text: '請求・お支払い方法',
      ratid: 'payment',
    },
    {
      anchor: 'cat-2',
      text: 'お申し込み・機種変更',
      ratid: 'application',
    },
    {
      anchor: 'cat-3',
      text: 'お申し込みキャンセル',
      ratid: 'cancel',
    },
    {
      anchor: 'cat-4',
      text: '配送状況',
      ratid: 'delivery',
    },
    {
      anchor: 'cat-5',
      text: '初期設定・開通',
      ratid: 'initial-setting',
    },
    {
      anchor: 'cat-6',
      text: 'ご契約情報・プラン',
      ratid: 'contract',
    },
    {
      anchor: 'cat-7',
      text: '電波・通信トラブル',
      ratid: 'nw-troubleshooting',
    },
    {
      anchor: 'cat-8',
      text: '故障・修理',
      ratid: 'troubleshooting',
    },
    {
      anchor: 'cat-9',
      text: 'キャンペーン',
      ratid: 'campaign',
    },
    {
      anchor: 'cat-10',
      text: 'Rakuten Linkアプリ',
      ratid: 'link',
    },
    {
      anchor: 'cat-11',
      text: '盗難・紛失',
      ratid: 'suspension',
    },
    {
      anchor: 'cat-13',
      text: 'トラブル解決ナビ',
      ratid: 'trouble-check',
    },
    {
      anchor: 'cat-12',
      text: 'すべてのサポート情報を見る',
      ratid: 'all',
    },
  ]
  const [isOutsideBusinessHours] = useState(false)

  const pagetitle = '最近よくあるご質問リンク集（FAQ）'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
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

  const configTxt =
    `window.rexSurveyConfig = {
      "surveyId": "40808",
      "cId": {
          "name": "answers[40808_277194]",
          "value": ""
      },
      "embedded": true,
      "url": {
          "name": "answers[40808_277195]"
      },
      "triggerIdName": "trigger",
      "expirationPeriod": 30,
      "enableDisplaySuppressionPerPage": true,
      "enableFormAction": true,
      "permission": {
          "inquiryTxt": "キャンペーンをより分かりやすくするためにアンケートにご協力ください (選択式1問) ",
          "yesBtnTxt": "協力する",
          "noBtnTxt": "今は協力しない",
          "available": true
      },
      "thanks": {
          "txt0": "ご協力ありがとうございました",
          "txt1": "いただいた情報は、サービス改善のために使用させていただきます。"
      },
      "nps": {
          "available": true,
          "question": {
              "label": "このページを見て、楽天モバイルを魅力的だと思いましたか？"
          },
          "options": [
              {
                  "name": "answers[40808_277196]",
                  "value": "712274"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712275"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712276"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712277"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712278"
              }
          ],
          "txt0": "全く思わなかった",
          "txt1": "とても思った",
          "checked": 4
      },
      "inquiry": {
          "checkList": {
              "available": true,
              "question": "あなたがこのページ見て感じたことで、当てはまるものを教えてください (複数可)",
              "options": [
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712279",
                      "label": "プランやサービスが魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712280",
                      "label": "楽天モバイルの通信技術が魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712281",
                      "label": "楽天回線エリアの人口カバー率が魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712282",
                      "label": "楽天ポイントが貯まる・使えるのが魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712283",
                      "label": "「お客様の声」が参考になった"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712284",
                      "label": "楽天モバイルを周りに薦めたくなった"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712285",
                      "label": " 特に無い"
                  }
              ]
          },
          "freeInput": {
              "available": false,
              "name": "answers[40808_277198]",
              "title": "ご回答いただいた内容の理由や、このページについてのご意見・ご要望がございましたら、ご自由にお書きください【1000文字】"
          },
          "sendBtnTxt": "送信する",
          "footerNote": {
              "available": true,
              "text": "お客様よりご提供いただく情報はサービス向上のためご利用させていただきます。",
              "link": "https://privacy.rakuten.co.jp/",
              "htmlText": ""
          }
      },
      "inquiryNegative": {
          "checkList": {
              "available": false,
              "options": [
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712279",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712280",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712281",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712282",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712283",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712284",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712285",
                      "label": ""
                  }
              ]
          }
      },
      "ua": {
          "name": "answers[40808_277199]"
      },
      "href": {
          "name": "answers[40808_277200]"
      },
      "cookie": {
          "available": false
      },
      "assetPaths": {
          "closeButton": "",
          "checkIcon": ""
      }
    }`

  const launchNDEPChat = () => {
    window.Inq?.fireCustomEvent('NDEPembeddedChat')
  }

  /**
   * NDEPチャットのボタンの切り替え
   * 営業時間内ではアクティブ、営業時間外では非アクティブ
   * 現在は24時間体制なので、一旦コメントアウト
   */
  // useEffect(() => {
  //   const currentJapanTime: number = getJapanDate('hours')
  //   if (currentJapanTime < 9 || currentJapanTime >= 23) {
  //     setIsOutsideBusinessHours(true)
  //   }
  // }, [])
  // Create or Load SessionID for DeepQA>>>

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルについてお客様から最近よくいただくご質問を掲載しております。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SupportFaqWrap>
          <SystemContainer>
            <Heading level="1">最近よくあるご質問リンク集（FAQ）</Heading>
            <p className={Utils['Mt-16']}>
              楽天モバイルについてお客様から最近よくいただくご質問を掲載しております。気になるカテゴリを以下よりお選びください。
            </p>
          </SystemContainer>
          <SupportFaqNavWrap className={Utils['Mt-16']}>
            <SupportFaqNav>
              <Heading level="2">ご質問のカテゴリ</Heading>
              <nav className={Utils['Mt-16']}>
                <ul className="nav">
                  {navigationData.map((item, index) => {
                    return (
                      <li key={`${item.ratid}_${index}`}>
                        <NavAnchor
                          href={`#${item.anchor}`}
                          data-ratid={`support_faq_anc_${item.ratid}`}
                          data-ratevent="click"
                          data-ratparam="all"
                          onClick={e => anchorCallback(e, item.anchor)}
                        >
                          <IconArrowDown className="icon" />
                          {item.text}
                        </NavAnchor>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </SupportFaqNav>
          </SupportFaqNavWrap>
          <SystemContainer className={Utils['Pt-32']}>
            <Heading level="2" id="cat-1">
              請求・お支払い方法
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'支払い状況を確認したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_01"
              >
                <p>my 楽天モバイルの「利用料金」画面からご確認いただけます。</p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_billing_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（利用料金）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  支払い状況の確認方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/10000510/">
                    未払い料金の支払い状況を確認したい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={
                  'コンビニ払込票（ハガキ）が手元にない場合は、どうすればよいか'
                }
                isOpened={false}
                ratid="support_faq_payment_accordion_02"
              >
                <p>
                  未払い料金はmy
                  楽天モバイルの「利用料金」画面からもお支払いいただけます。
                  <br />
                  有効なクレジットカードやデビットカードをお持ちでない場合は、次回のコンビニ払込票（ハガキ）発送までお待ちください。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_billing_02"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（利用料金）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  未払い料金発生～契約解除までの流れは、下記リンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/payment/invoice/unpaid/?l-id=support_faq_guide_payment_invoice_unpaid#anc03">
                    未払い料金の発生からご利用停止・契約解除まで
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'請求金額・請求内訳を確認したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_03"
              >
                <p>my 楽天モバイルの「利用料金」画面からご確認いただけます。</p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_billing_03"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（利用料金）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  請求のスケジュール、明細の確認方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/payment/flow/?l-id=support_faq_guide_payment_flow">
                    請求金額の確定とお支払いまでの流れ
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/payment/usage-details/?l-id=support_faq_guide_payment_usage-details">
                    利用明細と各種明細の確認方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'未払い料金を支払いたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_04"
              >
                <p>
                  未払い料金はmy
                  楽天モバイルの「利用料金」画面からもお支払いいただけます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_billing_04"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（利用料金）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  未払い料金のお支払い方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/payment/invoice/flow/?l-id=support_faq_guide_payment_invoice_flow">
                    未払い料金のお支払い方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'支払い方法を確認・変更したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_05"
              >
                <p>
                  支払い方法の確認・変更はmy
                  楽天モバイルの「支払い情報」画面から行えます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_payment_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（支払い情報）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  支払い方法の確認・変更方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/payment/change/?l-id=support_faq_guide_payment_change">
                    お支払い方法の確認・変更方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'利用した覚えのない請求がある'}
                isOpened={false}
                ratid="support_faq_payment_accordion_06"
              >
                <p>下記のリンクからよくある原因をご確認ください。</p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/10000186/?l-id=support_faq_faq_detail_10000186">
                    利用した覚えのない請求が発生している／請求が重複して発生している
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  ご利用明細はmy
                  楽天モバイルの「利用料金」画面からご確認いただけます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#billing"
                    as="a"
                    data-ratid="support_faq_payment_ecare_billing_05"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（利用料金）へ進む
                  </ButtonSecondary>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-2" className={Utils['Mt-64']}>
              お申し込み・機種変更
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'本人確認書類に不備があった'}
                isOpened={false}
                ratid="support_faq_payment_accordion_07"
              >
                <p>
                  「【重要】本人確認書類の不備による再アップロードのお願い」のメールに記載の不備理由をご確認のうえ、my
                  楽天モバイルから本人確認書類の再アップロードを行ってください。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#home"
                    as="a"
                    data-ratid="support_faq_application_ecare_home_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（ホーム）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  本人確認書類の再アップロード手順については下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001393/?l-id=support_faq_faq_detail_00001393">
                    本人確認書類が不備になった
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'申し込みが正常にできているか確認したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_08"
              >
                <p>
                  my
                  楽天モバイルの「申し込み履歴」画面または申し込み完了メールからご確認いただけます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#orders"
                    as="a"
                    data-ratid="support_faq_application_ecare_orders_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（申し込み履歴）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  確認方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001827/?l-id=support_faq_faq_detail_00001827">
                    申し込みが正常にできているか確認したい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'機種変更方法を知りたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_09"
              >
                <p>機種変更方法については、下記のリンクをご確認ください。</p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/product/device-upgrade/?l-id=support_faq_guide_product_device-upgrade">
                    楽天モバイルでの機種変更方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-3" className={Utils['Mt-64']}>
              お申し込みキャンセル
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'申し込みをキャンセルしたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_10"
              >
                <p>
                  お申し込みをしたSIMカードや製品、アクセサリは出荷前のみ、my
                  楽天モバイルの「申し込み履歴」画面からキャンセルが可能です。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#orders"
                    as="a"
                    data-ratid="support_faq_cancel_ecare_orders_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（申し込み履歴）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  キャンセル手続き方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001971/?l-id=support_faq_faq_detail_00001971">
                    申し込みをキャンセルしたい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'キャンセル状況を確認したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_11"
              >
                <p>
                  my 楽天モバイルの「申し込み履歴」画面でご確認いただけます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#orders"
                    as="a"
                    data-ratid="support_faq_cancel_ecare_orders_02"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（申し込み履歴）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  キャンセル状況の確認方法については下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/10000336/?l-id=support_faq_faq_detail_10000336">
                    キャンセル状況を確認したい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-4" className={Utils['Mt-64']}>
              配送状況
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'配送状況を知りたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_12"
              >
                <p>
                  「製品発送完了のお知らせ」のメールに記載された、配送伝票番号と配送状況を確認いただけるURLよりご確認ください。
                </p>
                <p className={Utils['Mt-16']}>
                  メールがご確認いただけない場合は、my
                  楽天モバイルの「申し込み履歴」画面からご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#orders"
                    as="a"
                    data-ratid="support_faq_cancel_ecare_orders_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（申し込み履歴）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  確認方法については下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/10000344/?l-id=support_faq_faq_detail_10000344">
                    配送伝票番号と配送状況の確認方法を知りたい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-5" className={Utils['Mt-64']}>
              初期設定・開通
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'初期設定・開通ができない'}
                isOpened={false}
                ratid="support_faq_payment_accordion_13"
              >
                <p>
                  下記のリンクよりスタートガイド（利用開始手順書）をご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001648/?l-id=support_faq_faq_detail_00001648">
                    スタートガイド（利用開始手順書）を確認したい
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  それでも解決しない場合は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001496/?l-id=support_faq_faq_detail_00001496">
                    開通（アクティベーション）ができない
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-6" className={Utils['Mt-64']}>
              ご契約情報・プラン
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'契約者情報・プランを確認したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_14"
              >
                <p>
                  my 楽天モバイルの「契約プラン」画面からご確認いただけます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard#plans"
                    as="a"
                    data-ratid="support_faq_contract_ecare_plans_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（契約プラン）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  プランの詳細は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/fee/saikyo-plan/?l-id=support_faq_fee_un-limit#price">
                    Rakuten最強プラン（料金プラン）
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-7" className={Utils['Mt-64']}>
              電波・通信トラブル
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'データ通信が利用できない'}
                isOpened={false}
                ratid="support_faq_payment_accordion_15"
              >
                <p>下記のリンクより状況をお知らせください。</p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/inquiry/input.html?l-id=support_faq_inquiry_input">
                    楽天モバイルご利用者様用電波改善・調査依頼
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'電波が入りにくい、データ通信しづらい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_16"
              >
                <p>下記のリンクより状況をお知らせください。</p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/inquiry/input.html?l-id=support_faq_inquiry_input">
                    楽天モバイルご利用者様用電波改善・調査依頼
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-8" className={Utils['Mt-64']}>
              故障・修理
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'Rakutenオリジナルスマホを修理したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_17"
              >
                <p>
                  製品の交換や修理に関するオプションに加入されている場合は、各オプションのご利用方法をご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/service/replacement-warranty-plus/?l-id=support_faq_service_replacement-warranty-plus">
                    スマホ交換保証プラス
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/service/replacement-warranty-sim/?l-id=support_faq_service_replacement-warranty-sim">
                    持ち込みスマホあんしん保証
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  各製品の修理保証に関しては、お客様サポート内の「製品（Android）」からご利用中の製品を選択し、各製品のサポート情報よりご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/support/?l-id=support_faq_support#category-product-android">
                    お客様サポート「製品（Android）」
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'Rakutenオリジナル以外の製品で不具合が起きている'}
                isOpened={false}
                ratid="support_faq_payment_accordion_18"
              >
                <p>ご使用の製品メーカーへお問い合わせください。</p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/inquiry/?l-id=support_faq_guide_inquiry">
                    各製品メーカーへのお問い合わせ
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'スマホ交換保証プラスを利用したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_33"
              >
                <p>
                  「スマホ交換保証プラス」のお申し込みから故障した際の交換方法までの流れと、サービス内容の詳細をご案内いたします。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/replacement-warranty-plus/?l-id=support_faq_guide_replacement-warranty-plus">
                    スマホ交換保証プラス（お申し込み方法・ご利用方法）
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-9" className={Utils['Mt-64']}>
              キャンペーン
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'キャンペーンの条件について知りたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_19"
              >
                <p>
                  現在開催中のキャンペーンの概要は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/campaign/?l-id=support_faq_campaign">
                    キャンペーン・特典
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  過去のキャンペーンについては、下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/campaign/close/2022/?l-id=support_faq_campaign_close_2022">
                    過去のキャンペーン・特典
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-10" className={Utils['Mt-64']}>
              Rakuten Linkアプリ
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'Rakuten Link通話時に不具合が発生する'}
                isOpened={false}
                ratid="support_faq_payment_accordion_20"
              >
                <p>
                  Rakuten
                  Linkの音声通話で不具合が発生している場合は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/faq/detail/00001801/?l-id=support_faq_faq_detail_00001801">
                    Rakuten Linkで音声通話ができません
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  ご確認いただいても事象が解決しない場合は下記のリンクより状況をお知らせください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="https://r10.to/hPDUZj">
                    Rakuten Linkに関するお問い合わせ
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'Rakuten Link通話について知りたい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_21"
              >
                <p>
                  Rakuten Linkの使い方については、下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="https://service.link.link/guide/"
                    data-ratid="support_faq_link_guide_01"
                    data-ratevent="click"
                    data-ratparam="all"
                    target="_blank"
                  >
                    Rakuten Linkの使い方
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
                <p className={Utils['Mt-16']}>
                  お困りごとが解決しない場合は下記のリンクより状況をお知らせください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="https://r10.to/hPDUZj">
                    Rakuten Linkに関するお問い合わせ
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-11" className={Utils['Mt-64']}>
              盗難・紛失
            </Heading>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'盗難や紛失のため、利用停止したい'}
                isOpened={false}
                ratid="support_faq_payment_accordion_22"
              >
                <p>
                  my
                  楽天モバイルの「契約プラン」画面から利用停止手続きができます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondary
                    href="https://portal.mobile.rakuten.co.jp/dashboard?scrollTo=simAndLinesAction#plans"
                    as="a"
                    data-ratid="support_faq_suspension_ecare_plans_simAndLinesAction_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    my 楽天モバイル（契約プラン）へ進む
                  </ButtonSecondary>
                </div>
                <p className={Utils['Mt-16']}>
                  利用停止方法は下記のリンクをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/sim-lost/?l-id=support_faq_guide_sim-lost">
                    楽天回線の利用停止・再開について
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>

            <Heading level="2" id="cat-13" className={Utils['Mt-64']}>
              トラブル解決ナビ
            </Heading>
            <SupportTrouble className={Utils['Mt-24']}>
              <div className="block">
                <p>お困りごとを選んでいくだけで解決方法をご案内します。</p>
                <div className="btn">
                  <ButtonRegular
                    href="/guide/trouble-check/?l-id=support_faq_guide_trouble-check#/"
                    as="a"
                  >
                    トラブル解決ナビへ
                  </ButtonRegular>
                </div>
              </div>
            </SupportTrouble>
            <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
              <LinkIconBefore href="#" className="gotop">
                <IconArrowUp />
                ページトップへ
              </LinkIconBefore>
            </div>

            <Heading level="2" id="cat-12" className={Utils['Mt-64']}>
              すべてのサポート情報を見る
            </Heading>
            <SupportAll className={Utils['Mt-24']}>
              <div className="block">
                <p>
                  よくある質問が見つからない場合は、「お客様サポート」をご確認ください。
                </p>
                <div className="btn">
                  <ButtonRegular
                    href="/support/?l-id=support_faq_support"
                    as="a"
                  >
                    お客様サポートトップへ
                  </ButtonRegular>
                </div>
              </div>
            </SupportAll>
            <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
              <LinkIconBefore href="#" className="gotop">
                <IconArrowUp />
                ページトップへ
              </LinkIconBefore>
            </div>

            <Heading level="2" id="cat-13" className={Utils['Mt-64']}>
              お問い合わせ窓口
            </Heading>
            <p className={Utils['Mt-16']}>
              上記を確認いただいても解決しない場合は、お問い合わせください。
            </p>

            <Heading level="3" className={Utils['Mt-32']}>
              チャットでお問い合わせ
            </Heading>

            <p className={Utils['Mt-16']}>空き時間で気軽にお問い合わせ。</p>
            <Heading level="4" className={Utils['Mt-16']}>
              営業時間 9:00〜23:00
            </Heading>
            <TxtCap as="ul" className={Utils['Mt-16']}>
              <li>
                ※Rakuten Casaに関するお問い合わせは9:00～18:00までとなります。
              </li>
              <li>
                ※営業時間外にいただいたお問い合わせは、AIアシスタントがご回答いたします。
              </li>
              <li>
                ※ボタンを押してもチャット画面が表示されない場合、画面右側に表示されているチャットのアイコンをタップしてください。
              </li>
            </TxtCap>
            <MediaGridHalf className={Utils['Mt-32']}>
              <div>
                <Heading level="3">お申し込み前の方</Heading>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    as="button"
                    data-ratid="support_faq_web_chat"
                    data-ratevent="click"
                    data-ratparam="all"
                    aria-disabled={isOutsideBusinessHours}
                    onClick={launchNDEPChat}
                  >
                    チャット相談を利用する
                  </ButtonRegular>
                </div>
              </div>
              <div>
                <Heading level="3">お申し込み済み・ご契約中の方</Heading>
                <TxtCap as='p' className={Utils['Mt-16']}>
                  ※チャット相談のご利用にはmy 楽天モバイルへのログインが必要です。
                </TxtCap>
                <div className={Utils['Mt-24']}>
                  <ButtonRegular
                    href="https://portal.mobile.rakuten.co.jp/technical-operation?action=supportChat"
                    as="a"
                    data-ratid="support_faq_myrakuten_web"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    チャット相談を利用する
                  </ButtonRegular>
                </div>
              </div>
            </MediaGridHalf>

            <div className={Utils['Mt-32']}>
              <AccordionList
                text={'公式アプリ「my 楽天モバイル」'}
                isOpened={false}
                ratid="support_faq_payment_accordion_23"
              >
                <MyRakutenApp className={Utils['Align-center']}>
                  <MyRakutenAppVerchical
                    lazy={true}
                    btnLid="support_faq_guide_my-rakuten-mobile"
                    appRat={[
                      'support_faq_myrakuten_google',
                      'support_faq_myrakuten_apple',
                    ]}
                    webRmRat="support_faq_my-rakuten-mobile"
                  />
                </MyRakutenApp>
              </AccordionList>
            </div>

            <Heading level="3" className={Utils['Mt-32']}>
              電話でお問い合わせ
            </Heading>
            <div className={Utils['Mt-24']}>
              <LinkIconAfter
                href="/information/news/other/2233/?l-id=support_faq_information_news_other_2233"
                target="_blank"
              >
                【重要】お問い合わせ窓口営業時間変更のお知らせ（2月1日～）
                <IconNewTabLine />
              </LinkIconAfter>
            </div>
            <p className={Utils['Mt-16']}>
              電話番号のおかけ間違いにより、一般の方へご迷惑をおかけする事象が発生しております。お掛け間違いのないようお願い申し上げます。
            </p>
            <div className={Utils['Mt-24']}>
              <AccordionList
                text={'楽天モバイル（Rakuten最強プラン）をご利用中の方'}
                isOpened={false}
                ratid="support_faq_payment_accordion_24"
              >
                <div>
                  <LinkNormal
                    href="tel:050-5434-4653"
                    data-ratid="support_faq_tel_06"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4653
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 : 9:00～17:00 （年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※
                  <LinkNormal href="https://r10.to/huqZws" target="_blank">
                    Rakuten Link
                  </LinkNormal>
                  での通話は、通話料無料
                  <br />
                  ※お電話での対応をご希望の方は、営業時間内にお問い合わせください。
                  <br />
                  ※営業時間外は、「最近よくあるご質問リンク集」のご案内をショートメッセージにて送付しております。ぜひご利用ください。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'盗難・紛失／利用停止・再開'}
                isOpened={false}
                ratid="support_faq_payment_accordion_25"
              >
                <div>
                  <LinkNormal
                    href="tel:0800-600-0500"
                    data-ratid="support_faq_tel_07"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0500
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 24時間（年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※通話料無料でご利用になれます。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'海外からのお問い合わせ'}
                isOpened={false}
                ratid="support_faq_payment_accordion_26"
              >
                <div>
                  <LinkNormal
                    href="tel:050-5434-4633"
                    data-ratid="support_faq_tel_08"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4633
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 24時間（年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※
                  <LinkNormal href="https://app.adjust.com/31tox3v_bpdya2y?deeplink=viber://keypad?number=05054344633">
                    Viber
                  </LinkNormal>
                  なら通話料無料でお問い合わせできます。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'未払い料金に関して'}
                isOpened={false}
                ratid="support_faq_payment_accordion_27"
              >
                <div>
                  <LinkNormal
                    href="tel:050-5434-4653"
                    data-ratid="support_faq_tel_09"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    050-5434-4653
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 : 9:00～17:00 （年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※
                  <LinkNormal href="https://r10.to/huqZws" target="_blank">
                    Rakuten Link
                  </LinkNormal>
                  での通話は、通話料無料
                  <br />
                  ※7/1より「楽天モバイル（Rakuten最強プラン）をご利用中の方」の窓口番号と統合いたしました。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'新規／乗り換え（MNP）お申し込みを検討中の方'}
                isOpened={false}
                ratid="support_faq_payment_accordion_28"
              >
                <div>
                  <LinkNormal
                    href="tel:0800-805-0090"
                    data-ratid="support_faq_tel_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0090
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 : 9:00～17:00 （年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※通話料無料でご利用になれます。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'お申し込み後～初期設定でお困りの方'}
                isOpened={false}
                ratid="support_faq_payment_accordion_30"
              >
                <div>
                  <LinkNormal
                    href="tel:0800-600-0700"
                    data-ratid="support_faq_tel_04"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0700
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  営業時間 : 9:00～17:00 （年中無休）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※通話料無料でご利用になれます。
                  <br />
                  ※お電話での対応をご希望の方は、営業時間内にお問い合わせください。
                  <br />
                  ※営業時間外は、「最近よくあるご質問リンク集」のご案内をショートメッセージにて送付しております。ぜひご利用ください。
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={'English Support'}
                isOpened={false}
                ratid="support_faq_payment_accordion_32"
              >
                <div>
                  <LinkNormal
                    href="tel:0800-805-0805"
                    data-ratid="support_faq_tel_11"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-805-0805
                  </LinkNormal>
                </div>
                <div className={Utils['Mt-16']}>
                  Business hour : 9:00-5:00pm（open 365 days）
                </div>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  *The conversation might take place as a three-way call with
                  you, our customer service staff, and the phone interpreter.
                  (An interpretation is free of charge)
                </TxtCap>
              </AccordionList>
              <div className={`${Utils['Mt-16']} ${Utils['Align-right']}`}>
                <LinkIconBefore href="#" className="gotop">
                  <IconArrowUp />
                  ページトップへ
                </LinkIconBefore>
              </div>
            </div>
          </SystemContainer>
        </SupportFaqWrap>
        <GuidePopAsk config={configTxt} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default SupportFaq
