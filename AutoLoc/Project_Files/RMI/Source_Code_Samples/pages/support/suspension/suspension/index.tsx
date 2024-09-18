import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { SupportWrap } from '@components/category/Support'
import { SupportHead } from '@components/include/support/SupportHead'
import { FrequentlyAskedFaq } from '@components/include/support/FrequentlyAskedFaq'
import { SupportFooter } from '@components/include/support/SupportFooter'
import { GuidePopAsk } from '@components/include/guide/PopAsk'
import {
  LinkIconAfter,
  LinkIconBefore,
  LinkNormal,
} from '@components/atoms/Link'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
} from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import { FlowList } from '@components/atoms/Flow'
import { ButtonRegular } from '@components/atoms/Buttons'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { AccordionList } from '@components/atoms/AccordionList'
import { anchorCallback } from '@components/utils/anchorCallback'

const PageNav = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  ${mixins.mq.MinL} {
    margin-top: 64px;
    flex-direction: row;
  }
`

const SupportSuspensionSuspension: NextPage = () => {
  const bigCategory = '盗難・紛失'
  const smallCategory = 'スマートフォンの紛失・盗難'
  const titleCategory = smallCategory
  const pagetitle = `${titleCategory}に関するサポート`
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
      text: `${titleCategory}に関するサポート`,
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


  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description={`${titleCategory}時の対応方法についてご案内いたします。`}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SupportWrap>
          <SystemContainer>
            <SupportHead
              title={`${titleCategory}`}
              customRead="時の対応方法についてご案内いたします。"
            />

            <PageNav>
              <li>
                <LinkIconBefore
                  href="#plan01"
                  onClick={e => anchorCallback(e, 'plan01')}
                >
                  <IconArrowDown />
                  紛失・盗難に気が付いたらすぐにやること
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#plan02"
                  onClick={e => anchorCallback(e, 'plan02')}
                >
                  <IconArrowDown />
                  探したけれど見つからなかったら
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#plan03"
                  onClick={e => anchorCallback(e, 'plan03')}
                >
                  <IconArrowDown />
                  スマートフォンが見つかったら
                </LinkIconBefore>
              </li>
            </PageNav>

            <Heading level="2" id="plan01" className={Utils['Mt-48']}>
              紛失・盗難に気が付いたらすぐにやること
            </Heading>
            <ol className={Utils['Mt-16']}>
              <FlowList>
                <Heading level="3">1. スマートフォンを探す</Heading>
                <Heading level="4" className={Utils['Mt-16']}>
                  Android の場合
                </Heading>
                <p className={Utils['Mt-16']}>
                  「スマートフォンを探す」機能を使うことで、紛失したデバイスを保護することができます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    href="https://r10.to/hMneJA"
                    as="a"
                    target="_blank"
                    data-ratid="support_suspension_suspension_google_find-your-phone"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    「スマートフォンを探す」
                    <br className={Utils['Disp-sp']} />
                    機能を使う
                    <IconNewTabLine className="icon-end" />
                  </ButtonRegular>
                </div>
                <Heading level="4" className={Utils['Mt-16']}>
                  iPhoneの場合
                </Heading>
                <p className={Utils['Mt-16']}>
                  「探す」機能を使うことで、紛失したデバイスの現在位置を調べたりデータを保護したりすることができます。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    href="https://r10.to/hMbR8U"
                    as="a"
                    target="_blank"
                    data-ratid="support_suspension_suspension_google_find-your-phone"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    「探す」機能を使う
                    <IconNewTabLine className="icon-end" />
                  </ButtonRegular>
                </div>
              </FlowList>
              <FlowList>
                <Heading level="3">2. 回線を停止する</Heading>
                <p className={Utils['Mt-16']}>
                  スマートフォンがすぐに見つからなかった場合・不正な利用が懸念される場合は、速やかにmy
                  楽天モバイルで回線利用停止の手続きをされることをおすすめします。
                </p>
                <p className={Utils['Mt-16']}>
                  回線を停止した後にスマートフォンが見つかった場合は、かんたんに回線を再開することもできます。
                </p>
                <Heading level="4" className={Utils['Mt-16']}>
                  my 楽天モバイルからのお手続き
                </Heading>
                <TxtCap className={Utils['Mt-16']} as="p">
                  ※「各種手続き」よりお進みください
                </TxtCap>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    href="https://portal.mobile.rakuten.co.jp/dashboard?scrollTo=simAndLinesAction#plans"
                    as="a"
                    target="_blank"
                    data-ratid="support_suspension_suspension_ecare_plans_sim-lost"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    「紛失・盗難などによる利用停止・再開
                    <IconNewTabLine className="icon-end" />
                  </ButtonRegular>
                </div>
                <p className={Utils['Mt-16']}>
                  回線の利用停止・再開方法については、以下のサポートページをご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/sim-lost/">
                    楽天回線の利用停止・再開について
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <Heading level="4" className={Utils['Mt-16']}>
                  紛失・盗難専用ダイヤル
                </Heading>
                <p className={Utils['Mt-16']}>
                  「
                  <LinkNormal href="/my-rakuten-mobile/" target="_blank">
                    my 楽天モバイル
                  </LinkNormal>
                  」からのお手続きが困難な場合、ご契約者様本人より問い合わせください。
                </p>
                <p className={Utils['Mt-16']}>
                  電話番号：
                  <LinkNormal
                    href="tel:0800-600-0500"
                    data-ratid="support_suspension_tel_07"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0800-600-0500
                  </LinkNormal>
                  <br />
                  受付時間：24時間（年中無休）
                </p>
                <TxtEmp02 className={Utils['Mt-16']} as="p">
                  停止手続きと併せて、警察や紛失した施設などへの連絡もおすすめします。
                </TxtEmp02>
              </FlowList>
            </ol>

            <Heading level="2" id="plan02" className={Utils['Mt-32']}>
              探したけれど見つからなかったら
            </Heading>
            <p className={Utils['Mt-16']}>
              不正利用を防ぐための各IDやサービスのご変更や、ご利用再開にあたってのお手続きについてご案内いたします。
            </p>
            <div className={Utils['Mt-16']}>
              <AccordionList text={'楽天ID・パスワードの変更'} isOpened={false}>
                <p>下記からお手続きを行ってください。</p>
                <p className={Utils['Mt-16']}>
                  また、登録済みのメールアドレスや配送先の住所などの登録情報が変更されていないかご確認いただくこともおすすめします。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    href="https://member.id.rakuten.co.jp/rms/nid/upkfwd"
                    as="a"
                    target="_blank"
                    data-ratid="support_suspension_suspension_member-id_upkfwd"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    ユーザIDの確認・パスワードの再設定
                    <IconNewTabLine className="icon-end" />
                  </ButtonRegular>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="https://ichiba.faq.rakuten.net/detail/000006676"
                    target="_blank"
                  >
                    ユーザIDの設定をしたい
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'おサイフケータイのロック（利用者のみ）'}
                isOpened={false}
              >
                <p>
                  おサイフケータイ機能を無断で使われることを防ぐために、おサイフケータイの機能をロックすることができます。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/osaifu-lock/">
                    おサイフケータイロックの設定・解除方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'モバイルSuicaの利用停止（利用者のみ）'}
                isOpened={false}
              >
                <p>
                  第三者による不正利用を防止するため、モバイルSuicaの利用停止手続き（再発行登録）をおすすめします。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="https://r10.to/h6xcBG"
                    data-ratid="support_suspension_suspension_mobilesuica_losstheft"
                    data-ratevent="click"
                    data-ratparam="all"
                    target="_blank"
                  >
                    モバイルSuica　端末の紛失・盗難
                    <IconNewTabLine />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'保証サービスの利用（加入者のみ）'}
                isOpened={false}
              >
                <p>
                  保証サービスにご加入の方は、所定の自己負担金で新品または新品同様の同一機種を購入することができます。
                  <br />
                  詳しくは各サービスのお手続き方法をご確認ください。
                  <br />
                  <TxtEmp02>
                    ※「スマホ交換保証プラス」は、紛失・盗難発生日から30日以内にサービスご利用のお手続きが必要です。
                  </TxtEmp02>
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/replacement-warranty-plus/">
                    スマホ交換保証プラス
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/iphone/applecare/">
                    故障紛失保証 with AppleCare Services
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/iphone/applecare-icloud/">
                    故障紛失保証 with AppleCare Services & iCloud+
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList text={'SIMの再発行'} isOpened={false}>
                <p>
                  別の製品で継続して同じ回線をご利用される場合は、SIMの再発行手続きが必要となります。
                </p>
                <div className={Utils['Mt-16']}>
                  <ButtonRegular
                    href="https://portal.mobile.rakuten.co.jp//dashboard?scrollTo=simAndLinesAction#plans"
                    as="a"
                    target="_blank"
                    data-ratid="support_suspension_suspension_ecare_plans_sim-lost_02"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    SIMの交換・再発行のお手続き
                    <IconNewTabLine className="icon-end" />
                  </ButtonRegular>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/sim-lost/">
                    楽天回線の利用停止・再開について
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList text={'製品の再購入'} isOpened={false}>
                <p>
                  製品を再購入される場合は、楽天モバイル対応製品をお求めください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/product/">
                    製品（iPhone、Android / スマートフォン）
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'再購入時に保証サービスに加入'}
                isOpened={false}
              >
                <p>
                  製品を再購入される場合、保証サービスのご加入をおすすめします。
                  <br />
                  紛失・盗難だけではなく、故障時も所定の自己負担金で新品または新品同様の同一機種を購入することができます。
                  <br />
                  詳しくは各サービスのお手続き方法をご確認ください。
                </p>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/replacement-warranty-plus/">
                    スマホ交換保証プラス
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
                <div className={Utils['Mt-16']}>
                  <LinkIconAfter href="/guide/iphone/applecare-icloud/">
                    故障紛失保証 with AppleCare Services & iCloud+
                    <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </AccordionList>
              <AccordionList
                text={'電子証明書の一時停止（利用者のみ）'}
                isOpened={false}
              >
                <p>
                  現在利用しているスマートフォンでスマホ用電子証明書を利用している場合は、「一時利用停止」の手続きにより、スマホ用電子証明書の利用を一時的に停止することができます。
                </p>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※スマートフォンが通信できない状態でもお手続きいただけます。
                </TxtCap>
                <p className={Utils['Mt-16']}>
                  一時利用停止の手続きは、マイナンバー総合フリーダイヤル{' '}
                  <LinkNormal
                    href="tel:0120950178"
                    data-ratid="support_suspension_suspension_tel_mynumber_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    0120-95-0178
                  </LinkNormal>
                  （音声ガイダンス2番／年中無休）へご連絡ください。
                </p>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※マイナンバー総合フリーダイヤルは海外からのお電話をお繋ぎできません。海外からご連絡する際は国内に居住するご家族などの代理人の方からご連絡をお願いたします。
                </TxtCap>
                <p className={Utils['Mt-16']}>
                  また、一時利用停止の手続き方法については
                  <LinkIconAfter
                    href="https://r10.to/hYvsmF"
                    target="_blank"
                    data-ratid="support_suspension_suspension_digital_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    デジタル庁のWebサイト
                    <IconNewTabLine />
                  </LinkIconAfter>
                  でもご確認いただけます。
                </p>
              </AccordionList>

              <Heading level="2" id="plan03" className={Utils['Mt-32']}>
                スマートフォンが見つかったら
              </Heading>
              <p className={Utils['Mt-16']}>
                ご契約回線の再開手順についてご案内いたします。
              </p>
              <div className={Utils['Mt-16']}>
                <AccordionList text={'回線の利用再開'} isOpened={false}>
                  <p>my 楽天モバイルから回線の再開ができます。</p>
                  <div className={Utils['Mt-16']}>
                    <ButtonRegular
                      href="https://portal.mobile.rakuten.co.jp/dashboard?scrollTo=simAndLinesAction#plans"
                      as="a"
                      target="_blank"
                      data-ratid="support_suspension_suspension_ecare_plans_sim-lost_03"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      利用再開のお手続き
                      <IconNewTabLine className="icon-end" />
                    </ButtonRegular>
                  </div>
                  <p className={Utils['Mt-16']}>
                    お電話窓口で利用停止をご依頼された方はご契約者様本人より紛失・盗難専用ダイヤルへお問い合わせください。
                  </p>
                  <div className={Utils['Mt-16']}>
                    <LinkIconAfter href="/guide/sim-lost/">
                      楽天回線の利用停止・再開について
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </AccordionList>
                <AccordionList
                  text="おサイフケータイのロック解除（ロックされた方）"
                  isOpened={false}
                >
                  <p>
                    おサイフケータイ機能をロックされた場合、以下の手順をご参考にロック解除を行ってください。
                  </p>
                  <div className={Utils['Mt-16']}>
                    <LinkIconAfter href="/guide/osaifu-lock/">
                      おサイフケータイロックの設定・解除方法
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </AccordionList>
                <AccordionList
                  text="モバイルSuicaの再設定（利用停止された方）"
                  isOpened={false}
                >
                  <p>
                    モバイルSuicaを利用停止された場合、以下の手順をご参考に再設定を行ってください。
                  </p>
                  <div className={Utils['Mt-16']}>
                    <LinkIconAfter
                      href="https://r10.to/h5aO7F"
                      as="a"
                      data-ratid="support_suspension_suspension_mobilesuica_faq_122"
                      data-ratevent="click"
                      data-ratparam="all"
                      target="_blank"
                    >
                      モバイルSuicaの再設定手順
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </div>
                </AccordionList>
                <AccordionList
                  text="電子証明書の利用再開（利用停止された方）"
                  isOpened={false}
                >
                  <p>
                    スマホ用電子証明書の利用を一時的に停止している場合、利用再開のお手続きが必要です。
                  </p>
                  <p className={Utils['Mt-16']}>
                    利用再開の手続きは、マイナンバー総合フリーダイヤル{' '}
                    <LinkNormal
                      href="tel:0120950178"
                      data-ratid="support_suspension_suspension_tel_mynumber_02"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      0120-95-0178
                    </LinkNormal>
                    （音声ガイダンス4番／年中無休）へご連絡ください。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-16']}>
                    ※マイナンバー総合フリーダイヤルは海外からのお電話をお繋ぎできません。海外からご連絡する際は国内に居住するご家族などの代理人の方からご連絡をお願いたします。
                  </TxtCap>
                  <p className={Utils['Mt-16']}>
                    また、再開の手続き方法については
                    <LinkIconAfter
                      href="https://img.myna.go.jp/manual/04-04/0213.html"
                      target="_blank"
                      data-ratid="support_suspension_suspension_digital_02"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      マイナポータルのWebサイト
                      <IconNewTabLine />
                    </LinkIconAfter>
                    でもご確認いただけます。
                  </p>
                </AccordionList>
              </div>
            </div>

            <FrequentlyAskedFaq
              bigCategory={bigCategory}
              smallCategory={smallCategory}
            />
          </SystemContainer>

          <SystemContainer className={Utils['Pb-16']}>
            <GuidePopAsk config={configTxt} />
            <SupportFooter className="after-popask" />
          </SystemContainer>
        </SupportWrap>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default SupportSuspensionSuspension
