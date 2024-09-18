import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { IconChevronRight } from '@components/icons'
import { ListDisc } from '@components/atoms/List'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Recommend } from '@components/include/service/Recommend'
import { LabelList } from '@components/atoms/Label'
import { Related } from '@components/include/service/Related'

const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

export const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`

const ServiceSms: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const pagetitle = 'SMS'
  const directories = [{ path: 'service/', label: 'オプションサービス' }]
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

  const ListArgs1 = {
    text: [
      {
        text: '電話番号が入っている場合、そのままその番号へ電話ができます。',
      },
      {
        text: 'メールアドレスが入っている場合、そのままメールが作成できます。',
      },
    ],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「SMS」サービス紹介。電話番号同士で文字メッセージのやりとりができます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            SMS
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <p className={Utils['Mt-16']}>
            SMS（ ショートメッセージサービス）
            は、電話番号同士で文字メッセージのやりとりができます。
          </p>
          <TxtEmp01
            as="p"
            className={`${Utils['Align-right']} ${Utils['Mt-24']}`}
          >
            <PriceNumberFree size="ll">無料</PriceNumberFree>
          </TxtEmp01>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/sms/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <GrayBox className={Utils['Mt-56']}>
          <SystemContainer>
            <Heading level="2">表示内容</Heading>
            <DescriptionListDefault className={Utils['Mt-24']}>
              <div>
                <dt>受付時刻</dt>
                <dd>メッセージ受付時刻を通知します。</dd>
              </div>
              <div>
                <dt>発信者</dt>
                <dd>
                  電話帳に登録されている場合、電話帳の登録名で表示されます。
                </dd>
              </div>
              <div>
                <dt>本文</dt>
                <dd>
                  漢字、ひらがな、カタカナ、英字、数字、記号の文字メッセージを送受信できます。
                  <ListDisc {...ListArgs1} className={Utils['Mt-24']} />
                </dd>
              </div>
            </DescriptionListDefault>
            <Heading level="2" className={Utils['Mt-40']}>
              SMS送信・受信料金
            </Heading>
            <Heading level="3" className={Utils['Mt-24']}>
              送信料金
            </Heading>
            <DescriptionListDefault className={Utils['Mt-16']}>
              <div>
                <dt>Rakuten Linkを利用した場合</dt>
                <dd>0円</dd>
              </div>
              <div>
                <dt>通常のSMSを利用した場合</dt>
                <dd>
                  1～70文字：3円（税込3.3円）
                  <br />
                  71～134文字：6円（税込6.6円）
                  <br />
                  135～201文字：9円（税込9.9円）
                  <br />
                  202～268文字：12円（税込13.2円）
                  <br />
                  269～335文字：15円（税込16.5円）
                  <br />
                  336～402文字：18円（税込19.8円）
                  <br />
                  403～469文字：21円（税込23.1円）
                  <br />
                  470～536文字：24円（税込26.4円）
                  <br />
                  537～603文字：27円（税込29.7円）
                  <br />
                  604～670文字：30円（税込33円）
                </dd>
              </div>
            </DescriptionListDefault>
            <Heading level="3" className={Utils['Mt-32']}>
              受信料金
            </Heading>
            <DescriptionListDefault className={Utils['Mt-16']}>
              <div>
                <dt>Rakuten Linkを利用した場合</dt>
                <dd>0円</dd>
              </div>
              <div>
                <dt>通常のSMSを利用した場合</dt>
                <dd>0円</dd>
              </div>
            </DescriptionListDefault>
            <div className={Utils['Mt-24']}>
              <LinkIconAfter href="/service/rakuten-link/">
                Rakuten Linkの詳細を見る
                <IconChevronRight />
              </LinkIconAfter>
            </div>
            <p className={Utils['Mt-40']}>
              海外を含むSMS利用については、国際SMSページをご確認ください。
            </p>
            <div className={Utils['Mt-24']}>
              <LinkIconAfter href="/service/international-sms/">
                国際SMSの詳細を見る
                <IconChevronRight />
              </LinkIconAfter>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
              <ButtonRegularLarge href="/guide/sms/" as="a">
                ご利用方法を見る
              </ButtonRegularLarge>
            </div>
            <div className={Utils['Mt-24']}>
              <LinkIconAfter href="/faq/detail/00001355">
                直収接続をご希望の法人の方へ
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          </SystemContainer>
        </GrayBox>
        <BgGray className={Utils['Mt-8']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="sms"
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
              lId="sms"
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

export default ServiceSms
