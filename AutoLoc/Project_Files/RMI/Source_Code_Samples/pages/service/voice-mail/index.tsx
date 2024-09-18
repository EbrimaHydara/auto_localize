import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LabelList } from '@components/atoms/Label'
import { Recommend } from '@components/include/service/Recommend'
import { IconArrowDown, IconNewTabLine } from '@components/icons'
import { Related } from '@components/include/service/Related'
import { LinkIconAfter, LinkIconBefore } from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const PriceNumberFree = styled.span`
  font-family: var(--noto-sans-jp), sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`

const ButtonRegularLargeCustom = styled(ButtonRegularLarge)`
  max-width: 524px;
`
const ServiceVoicemail: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = '留守番電話'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  const labelArgs = {
    item: [{ text: '通話・SMS・メール', isEmp: false }],
  }
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
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「留守番電話」サービス紹介。スマートフォン(スマホ)の電源OFF時や電話に出られない時に、相手の伝言を預かり、後で再生することができます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={`${Utils['Pb-56']}`}>
          <Heading level="1" className={Utils['Mt-24']}>
            留守番電話
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <div>
            <p className={Utils['Mt-16']}>
              電源OFF時や電話に出られない時に、相手の伝言を預かり、後で再生することができます。
            </p>
            <p>
              ご利用にあたり留守番電話の機能が有効になっているかご確認ください。
              <TxtEmp01>
                確認方法は
                <LinkIconAfter
                  href="https://service.link.link/guide/call/voice_message.html"
                  target="_blank"
                >
                  こちら
                  <IconNewTabLine />
                </LinkIconAfter>
                をご確認ください。
              </TxtEmp01>
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ iPhone、Androidどちらでもご利用いただけます。
            </TxtCap>
            <TxtCap as="p">
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtCap>
          </div>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <PriceNumberFree>無料</PriceNumberFree>
          </div>
          <div className={Utils['Mt-40']}>
            <p>下記のいずれかで留守番電話の伝言メッセージを再生できます。</p>
            <div className={Utils['Mt-16']}>
              <ul>
                <li>
                  <LinkIconBefore
                    href="#rakuten-link"
                    onClick={e => anchorCallback(e, 'rakuten-link')}
                    className={Utils['Mt-16']}
                  >
                    Rakuten Link
                    <IconArrowDown />
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    href="#voice-mail"
                    onClick={e => anchorCallback(e, 'voice-mail')}
                    className={Utils['Mt-16']}
                  >
                    iPhoneビジュアルボイスメール
                    <IconArrowDown />
                  </LinkIconBefore>
                </li>
                <li>
                  <LinkIconBefore
                    href="#service-center"
                    onClick={e => anchorCallback(e, 'service-center')}
                    className={Utils['Mt-16']}
                  >
                    留守番電話サービスセンター（1417発信）
                    <IconArrowDown />
                  </LinkIconBefore>
                </li>
              </ul>
            </div>
            <TxtCap
              as="p"
              className={`${Utils['Mt-16']} ${Utils['Color-primary']} ${Utils['Weight-bold']}`}
            >
              ※
              「1417」に発信して再生した場合、通話料が発生いたしますのでご注意ください。
            </TxtCap>
          </div>
        </SystemContainer>
        <BgGray className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
          <SystemContainer>
            <div>
              <Heading id="rakuten-link" level="2">
                Rakuten Link
              </Heading>
              <p className={Utils['Mt-24']}>
                留守番電話サービスでお預かりした伝言メッセージを、Rakuten
                Linkアプリで保存・管理できます。保存されたメッセージは簡単に再生することができます。
              </p>
              <TxtCap className={Utils['Mt-8']}>
                ※ iOS17.2以降のiPhoneをお使いの場合は、Rakuten
                Linkからの留守番電話の通知は届きません。
              </TxtCap>
              <Heading className={Utils['Mt-24']} level="2">
                主な仕様
              </Heading>
              <DescriptionListDefault className={Utils['Mt-24']}>
                <div>
                  <dt>録音時間</dt>
                  <dd>最長3分</dd>
                </div>
                <div>
                  <dt>保存件数</dt>
                  <dd>最大100件</dd>
                </div>
                <div>
                  <dt>保存期間</dt>
                  <dd>1週間</dd>
                </div>
                <div>
                  <dt>呼び出し時間</dt>
                  <dd>
                    5～30秒の範囲内で設定可能
                    <br />
                    <TxtCap className={Utils['Mt-8']}>
                      ※ 初期値は15秒で設定されています。
                    </TxtCap>
                  </dd>
                </div>
              </DescriptionListDefault>
              <div
                className={`${Utils['Align-center']} ${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
              >
                <ButtonRegularLarge
                  href="https://service.link.link/guide/call/voice_message_free.html"
                  target="_blank"
                  as="a"
                >
                  Rakuten Linkでの再生方法を確認する
                  <IconNewTabLine />
                </ButtonRegularLarge>
              </div>
            </div>
            <div className={Utils['Mt-56']}>
              <Heading id="voice-mail" level="2">
                iPhoneビジュアルボイスメール
              </Heading>
              <p className={Utils['Mt-24']}>
                留守番電話サービスでお預かりした伝言メッセージを、OS標準の電話アプリで保存・管理できます。保存されたメッセージは簡単に再生することができます。
              </p>
              <TxtCap className={Utils['Mt-8']}>
                ※ iOS17.2以降に対応しております。
              </TxtCap>

              <Heading level="2" className={Utils['Mt-24']}>
                主な仕様
              </Heading>
              <DescriptionListDefault className={Utils['Mt-24']}>
                <div>
                  <dt>録音時間</dt>
                  <dd>最長3分</dd>
                </div>
                <div>
                  <dt>保存件数</dt>
                  <dd>最大100件</dd>
                </div>
                <div>
                  <dt>保存期間</dt>
                  <dd>1週間</dd>
                </div>
                <div>
                  <dt>呼び出し時間</dt>
                  <dd>
                    5～30秒の範囲内で設定可能
                    <br />
                    <TxtCap>※ 初期値は15秒で設定されています。</TxtCap>
                  </dd>
                </div>
              </DescriptionListDefault>
              <div
                className={`${Utils['Align-center']} ${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
              >
                <ButtonRegularLargeCustom
                  href="/guide/iphone-voice-mail/"
                  as="a"
                >
                  iPhoneビジュアルボイスメールでの再生方法を確認する
                </ButtonRegularLargeCustom>
              </div>
            </div>
            <div className={Utils['Mt-56']}>
              <Heading id="service-center" level="2" className={Utils['Mt-40']}>
                留守番電話サービスセンター（1417発信）
              </Heading>
              <p className={Utils['Mt-24']}>
                留守番電話サービスセンター（1417）に発信して留守番電話を再生することができます。伝言をお預かりした場合、伝言を残された方の「発信電話番号」と「日時」を着信履歴またはSMSにてお知らせします。
              </p>
              <TxtCap
                as="p"
                className={`${Utils['Mt-16']} ${Utils['Color-primary']} ${Utils['Weight-bold']}`}
              >
                ※
                「1417」に発信して再生した場合、通話料が発生いたしますのでご注意ください。
              </TxtCap>
              <div
                className={`${Utils['Align-center']} ${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
              >
                <ButtonRegularLarge
                  href="https://service.link.link/guide/call/voice_message_paid.html"
                  target="_blank"
                  as="a"
                >
                  留守番電話の再生方法を確認する
                  <IconNewTabLine />
                </ButtonRegularLarge>
              </div>
            </div>
          </SystemContainer>
        </BgGray>

        <BgGray className={Utils['Mt-8']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="voice-mail"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  その他の
                  <br className={Utils['Disp-sp']} />
                  通話・SMS・メールサービス
                </>
              }
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="voice-mail"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
      </SystemWrapper>

      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceVoicemail
