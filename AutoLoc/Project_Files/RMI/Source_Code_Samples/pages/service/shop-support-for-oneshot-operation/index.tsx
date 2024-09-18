import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
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
  TxtEmp02,
  AlphanumericSize,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { LinkNormal } from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { mixins } from '@components/utils/Mixins'
import { AccordionList } from '@components/atoms/AccordionList'
import { ImageCapturer } from '@components/atoms/Image'
import { LabelNormalSingle } from '@components/atoms/Label'
import { DescriptionListDefaultSp2Col } from '@components/atoms/DescriptionList'
import { InfoboxLight } from '@components/atoms/Infobox'

const CustomUl = styled.ul`
  display: grid;
  row-gap: 32px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`
const DescriptionListDt = styled(DescriptionListDefaultSp2Col)`
  > div {
    justify-content: normal;
    > dd {
      padding: 16px;
    }
    > dt {
      width: 32%;
      border-right: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
`

const GrayBox = styled.div`
  padding: 16px 0;
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceShopsupportforoneshotoperation: NextPage = () => {
  const pagetitle = 'データ移行サポート'
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
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="データ移行サポートは、新しいスマホに機種変更の際などに、LINEや電話帳など必要なデータの移行をサポートします。ご利用ごとのお支払いなので、お客様が必要なときにだけ気軽にご利用いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1">{pagetitle}</Heading>
          <div className={Utils['Mt-24']}>
            <LabelNormalSingle>ショップサポート</LabelNormalSingle>
          </div>
          <MediaGrid className={Utils['Mt-32']}>
            <MediaImage>
              <img
                src={`${assets}img/service/shop-support-for-oneshot-operation/img01.png`}
                alt=""
              />
            </MediaImage>
            <div>
              楽天モバイルショップスタッフが各種データ移行をサポートします。ご利用ごとのお支払いなので、お客様が必要なときにだけ気軽にご利用いただけます。
              <TxtEmp02 as="p">
                ※一部家電量販店の店舗では「データ移行サポート」の対応を行っておりません
              </TxtEmp02>
              <div className={`${Utils['Mt-24']} ${Utils['Align-right']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">1,100</AlphanumericSize>
                  <TxtSize size="s">
                    円<span className={Utils['Weight-normal']}>〜</span>
                  </TxtSize>
                  <AlphanumericSize size="l">2,200</AlphanumericSize>
                  <TxtSize size="s">
                    円／<span className={Utils['Weight-normal']}>回</span>
                  </TxtSize>
                </TxtEmp01>
              </div>
              <TxtCap
                as="p"
                className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
              >
                ※ご利用サービスにより異なります
              </TxtCap>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonRegularLarge href="#app" as="a">
                  お申し込み方法を見る
                </ButtonRegularLarge>
              </div>
            </div>
          </MediaGrid>
        </SystemContainer>
        <GrayBox
          className={`${Utils['Mt-56']} ${Utils['Pt-48']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Heading level="3" className={Utils['Align-center']}>
              <TxtEmp02>
                <TxtSize size="m">MNP・機種変更時に必要な</TxtSize>
              </TxtEmp02>
              <br />
              <TxtSize size="ll">
                アカウント移行などの
                <br className={Utils['Disp-tb-sp']} />
                操作をサポートいたします
              </TxtSize>
            </Heading>

            <Heading level="3" className={Utils['Mt-32']}>
              サポート内容
            </Heading>
            <TxtCap as="p" className={Utils['Mt-16']}>
              <TxtEmp02>
                ※製品の操作はお客様ご自身で行っていただきます。記載内容以外はサポート対象外です
              </TxtEmp02>
            </TxtCap>

            <CustomUl className={Utils['Mt-16']}>
              <li>
                <Heading level="4">①アカウント移行</Heading>
                <img
                  className={Utils['Mt-8']}
                  src={`${assets}img/service/shop-support-for-oneshot-operation/img02.png`}
                  alt=""
                  width="656"
                  height="318"
                />
                <TxtSize
                  as="p"
                  size="s"
                  className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
                >
                  <TxtEmp01>
                    <AlphanumericSize size="s">1,100</AlphanumericSize>円
                  </TxtEmp01>
                  ／回
                </TxtSize>
                <p className={Utils['Mt-8']}>
                  Apple ID、Googleアカウントの移行
                </p>
              </li>
              <li>
                <Heading level="4">②LINEのデータ移行</Heading>
                <img
                  className={Utils['Mt-8']}
                  src={`${assets}img/service/shop-support-for-oneshot-operation/img03.png`}
                  alt=""
                  width="656"
                  height="316"
                />
                <TxtSize
                  as="p"
                  size="s"
                  className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
                >
                  <TxtEmp01>
                    <AlphanumericSize size="s">1,650</AlphanumericSize>円
                  </TxtEmp01>
                  ／回
                </TxtSize>
                <p className={Utils['Mt-8']}>
                  LINEアカウント、友だち、トーク履歴などの移行
                </p>
              </li>
              <li>
                <Heading level="4">③製品に保存したデータの移行</Heading>
                <img
                  className={Utils['Mt-8']}
                  src={`${assets}img/service/shop-support-for-oneshot-operation/img04.png`}
                  alt=""
                  width="656"
                  height="314"
                />
                <TxtSize
                  as="p"
                  size="s"
                  className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
                >
                  <TxtEmp01>
                    <AlphanumericSize size="s">2,200</AlphanumericSize>円
                  </TxtEmp01>
                  ／回
                </TxtSize>
                <p className={Utils['Mt-8']}>
                  スマートフォン内の電話帳、写真の移行
                </p>
              </li>
            </CustomUl>
            <div className={Utils['Mt-32']}>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※操作説明のサポートなどをご希望のお客様は「
                <LinkNormal href="/service/shop-support-for-device-operation/">
                  あんしん操作サポート
                </LinkNormal>
                」をご利用ください
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※店舗のWi-Fi環境やお客様のデータ量などによっては、移行が実施できない場合がございます
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※移行作業でデータ通信料が発生する可能性があります
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※全件移行ができなかった場合、1件でも移行に成功した場合は有料となります
              </TxtCap>
            </div>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <DescriptionListDt className={Utils['Mt-32']}>
            <div>
              <dt>サポート対象</dt>
              <dd>
                <UlOnly>
                  <li>楽天モバイルでご契約中の楽天回線</li>
                  <li>
                    データ移行先が楽天モバイルショップ、
                    楽天モバイル公式Webサイト、 楽天モバイル公式
                    楽天市場店で購入した楽天回線動作確認済製品
                  </li>
                </UlOnly>
              </dd>
            </div>
          </DescriptionListDt>

          <AccordionList
            text={'ご利用上の注意'}
            isOpened={false}
            className={Utils['Mt-32']}
          >
            <UlOnly>
              <li>
                <TxtEmp02>
                  一部家電量販店の店舗では「データ移行サポート」の対応を行っておりません。
                </TxtEmp02>
              </li>
              <li>
                データ内容によっては一部サポートの対象外となる場合がございます。あらかじめご了承ください。
              </li>
              <li>
                店舗のWi-Fi環境やお客様のデータ量などによっては、移行が実施できない場合がございます。
              </li>
              <li>移行作業でデータ通信料が発生する可能性があります。</li>
              <li>
                全件移行ができなかった場合、1件でも移行に成功した場合は有料となります。
              </li>
            </UlOnly>
          </AccordionList>
          <Heading level="2" id="app" className={Utils['Mt-48']}>
            お申し込み方法
          </Heading>
          <Heading level="3" className={Utils['Mt-16']}>
            楽天モバイルショップ（一部家電量販店の店舗を除く）で、お申し込みいただけます
          </Heading>
          <p className={Utils['Mt-8']}>
            ご来店前にサポート対応ショップをご確認ください。ご来店の際は予約がおすすめです。予約なしでも対応は可能ですが、お待ちいただく場合がございます。
          </p>
          <InfoboxLight className={Utils['Mt-24']}>
            <p>
              お近くのエリアをご選択の上、「サービスで絞り込む」をタップします。表示された画面の「データ移行サポート」にチェックを入れ「検索ボタン」をタップすると対応ショップが一覧で表示されます。
            </p>
            <div className={Utils['Align-center']}>
              <ImageCapturer
                className={Utils['Mt-16']}
                src={`${assets}img/service/shop-support-for-oneshot-operation/img05.png`}
                alt=""
                width="600"
                height="968"
              />
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
              <ButtonRegular as="a" href="/shop/search/">
                データ移行サポートの
                <br className={Utils['Disp-tb-sp']} />
                対応ショップを探す
              </ButtonRegular>
            </div>
            <p className={Utils['Mt-32']}>
              各ショップ詳細ページの「対応サービス」欄をご確認ください。
            </p>
            <div className={Utils['Align-center']}>
              <ImageCapturer
                className={Utils['Mt-16']}
                src={`${assets}img/service/shop-support-for-oneshot-operation/img06.png`}
                alt=""
                width="600"
                height="1064"
              />
            </div>
          </InfoboxLight>
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['shopguide', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceShopsupportforoneshotoperation
