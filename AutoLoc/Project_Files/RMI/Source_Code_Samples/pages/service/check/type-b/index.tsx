import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtNormal, TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import {
  LinkNormal,
  LinkListBorder,
  LinkList,
  LinkIconBefore,
} from '@components/atoms/Link'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { IconChevronRight, IconChevronLeft } from '@components/icons'
import { useMediaQuery } from '~/hooks/useMediaQuery'
import { TurboOneYear1980Bnr } from '@components/include/common/TurboOneYear1980Bnr'
import { InfoboxLight } from '@components/atoms/Infobox'

const CheckContent = styled.ul`
  display: grid;
  gap: 40px 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
  }

  > li {
    ${mixins.mq.MinL} {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .img {
    text-align: center;
  }

  --btnHeight: 69px;
  /* なんかトリッキーだけどボタンの数の分高さを取るといいらしい（元ソースより抜粋 */

  .btn {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 32px;
      min-height: var(--btnHeight);
    }
  }

  .btn2 {
    ${mixins.mq.MinL} {
      min-height: calc(var(--btnHeight) * 2);
    }
  }
  .btn3 {
    ${mixins.mq.MinL} {
      min-height: 210px; /* calc(var(--btnHeight) * 3)でずれてたので直接指定 */
    }
  }

  ${MediaImage} {
    min-height: 210px;
    ${mixins.mq.MaxM} {
      min-height: auto;
    }
  }
`

const ContentContainer = styled(SystemContainer)`
  padding-left: 0;
  padding-right: 0;
`

const CheckMediaGrid = styled(MediaGrid)`
  background-color: ${props => props.theme.colors.white};
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const MediaImageCustom = styled(MediaImage)`
  magin-bottom: 24px;
  ${mixins.mq.MinL} {
    min-height: 210px;
  }
`

const ServiceCheckTypeB: NextPage = () => {
  const pagetitle = 'オプションサービス診断結果（オールマイティータイプ）'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    { path: '/service/check/', label: 'オプションサービス診断' },
  ]
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
      text: 'オプションサービス診断',
      url: '/service/check/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const theme = useContext(ThemeContext)
  const isPc = useMediaQuery(`(min-width: ${theme.min.l})`)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="オプションサービス診断で「オールマイティータイプ」だったあなたにオススメのオプションサービスをご案内します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <InfoboxLight className={`${Utils['Pt-16']} ${Utils['Pb-40']}`}>
          <ContentContainer>
            <TxtCap
              as="p"
              className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
            >
              ※表記の金額はすべて税込です。
            </TxtCap>
            <Heading level="1" className={Utils['Mt-32']}>
              オプションサービス診断結果
            </Heading>
            <Heading level="2" className={Utils['Mt-40']}>
              あなたの性格タイプは…
            </Heading>
            <CheckMediaGrid className={Utils['Mt-16']}>
              <MediaImage>
                <img
                  src={`${assets}img/service/check/img-type-b.png`}
                  alt=""
                  width="686"
                  height="392"
                />
              </MediaImage>
              <div>
                <TxtSize size="m" as="p">
                  <TxtEmp01>バランスが大事！</TxtEmp01>
                </TxtSize>
                <TxtSize size="ll" as="p">
                  <TxtEmp01>オールマイティータイプ</TxtEmp01>
                </TxtSize>
                <TxtNormal className={Utils['Mt-8']} as="p">
                  これさえ加入しておけば安心。
                  <br />
                  バランスを重視されているあなたにぴったりなサービスを3つご紹介！
                </TxtNormal>
              </div>
            </CheckMediaGrid>
          </ContentContainer>
        </InfoboxLight>
        <SystemContainer>
          <Heading level="2" className={Utils['Mt-40']}>
            そんなあなたにオススメのオプションは…
          </Heading>
          <CheckContent className={Utils['Mt-32']}>
            <li>
              <div>
                <Heading level="3">通話・SMS</Heading>
                <MediaImageCustom className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-06.png`}
                    alt="1回15分何度でも!SMS送信し放題"
                    width="360"
                  />
                </MediaImageCustom>
                <div className={`${Utils['Mt-24']} text`}>
                  <p>
                    OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。電話もSMSもこのサービスに加入しておけば、料金を気にする必要がなく、あんしんです。
                  </p>
                  <TxtCap as="p">
                    ※本サービスの加入にかかわらず、Rakuten
                    Linkアプリでの国内通話は無料です。
                    <br />
                    ※無料通話の対象外となる番号があります。
                    <br />
                    ※1日の送信上限があります。
                    <LinkNormal
                      href="/service/standard-free-call/#attention"
                      as="a"
                    >
                      ご利用上の注意
                    </LinkNormal>
                    をご確認ください。
                  </TxtCap>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn btn3`}>
                <div>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/standard-free-call/?l-id=service_check_type-b_service_standard-free-call"
                  >
                    15分（標準）通話かけ放題を見る
                  </ButtonSecondaryLarge>
                </div>
              </div>
            </li>
            <li>
              <div>
                <Heading level="3">保証サービス</Heading>
                <MediaImageCustom className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-03.png`}
                    alt=""
                    width="504"
                  />
                </MediaImageCustom>
                <div className={`${Utils['Mt-24']} text`}>
                  <p>
                    破損、全損、水没などによる故障だけでなく、盗難・紛失の際も保証。これさえ加入しておけばもしもの時も安心です。
                  </p>
                  <div className={Utils['Mt-16']}>
                    <TxtEmp01 as="p">製品を新規購入する方</TxtEmp01>
                    <p>
                      iPhone：故障紛失保証 with AppleCare Services & iCloud+
                      <br />
                      Android：スマホ交換保証プラス
                    </p>
                  </div>
                  <div className={Utils['Mt-16']}>
                    <TxtEmp01 as="p">お持ちの製品を使用する方</TxtEmp01>
                    <p>iPhone／Android：持ち込みスマホあんしん保証</p>
                  </div>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn btn3`}>
                <div>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/iphone/applecare-icloud/?l-id=service_check_type-b_service_iphone_applecare-icloud"
                  >
                    故障紛失保証 with AppleCare Services & iCloud+を見る
                  </ButtonSecondaryLarge>
                </div>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/replacement-warranty-plus/?l-id=service_check_type-b_service_replacement-warranty-plus"
                  >
                    スマホ交換保証プラスを見る
                  </ButtonSecondaryLarge>
                </div>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/replacement-warranty-sim/?l-id=service_check_type-b_service_replacement-warranty-sim"
                  >
                    持ち込みスマホあんしん保証を見る
                  </ButtonSecondaryLarge>
                </div>
              </div>
            </li>
            <li>
              <div>
                <Heading level="3">セキュリティサービス</Heading>
                <div className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-01.png`}
                    alt=""
                    width="504"
                    height="208"
                  />
                </div>
                <div className={`${Utils['Mt-24']} text`}>
                  <p>
                    あなたのスマホをさまざまな危険から守るオールマイティなセキュリティサービスです。
                  </p>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/norton-mobile-security/?l-id=service_check_type-b_service_norton-mobile-security"
                >
                  ノートンモバイルセキュリティを見る
                </ButtonSecondaryLarge>
              </div>
            </li>
          </CheckContent>

          <TurboOneYear1980Bnr
            className={isPc ? Utils['Mt-56'] : Utils['Mt-80']}
            url="/hikari/campaign/six-month-free/?l-id=chart_type_almighty_hikari_campaign_six-month-free"
          />

          <Heading level="2" className={Utils['Mt-64']}>
            他の診断結果
          </Heading>
          <ul>
            <LinkListBorder className={Utils['Mt-16']}>
              <LinkList as="a" href="/service/check/type-a/">
                チャレンジャータイプ
                <IconChevronRight />
              </LinkList>
            </LinkListBorder>
            <LinkListBorder>
              <LinkList as="a" href="/service/check/type-c/">
                心配性タイプ
                <IconChevronRight />
              </LinkList>
            </LinkListBorder>
            <LinkListBorder>
              <LinkList as="a" href="/service/check/type-d/">
                こだわりタイプ
                <IconChevronRight />
              </LinkList>
            </LinkListBorder>
          </ul>
          <div className={Utils['Mt-48']}>
            <LinkIconBefore href="/service/">
              <IconChevronLeft />
              オプションサービスの一覧に戻る
            </LinkIconBefore>
          </div>
        </SystemContainer>
      </SystemWrapper>

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ServiceCheckTypeB
