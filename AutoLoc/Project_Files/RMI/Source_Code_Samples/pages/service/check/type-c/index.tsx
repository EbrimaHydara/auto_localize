import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import {
  LinkNormal,
  LinkListBorder,
  LinkList,
  LinkIconBefore,
} from '@components/atoms/Link'
import { TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { IconChevronRight, IconChevronLeft } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import Utils from '@styles/Utils.module.scss'
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

const ServiceCheckTypeC: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'オプションサービス診断結果（心配性タイプ）'
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

  const isPc = useMediaQuery(`(min-width: ${theme.min.l})`)

  return (
    <>
      <SystemWrapper>
        <CustomHead
          pagetitle={pagetitle}
          directories={directories}
          description="オプションサービス診断で「心配性タイプ」だったあなたにオススメのオプションサービスをご案内します。"
        />
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
            <CheckMediaGrid
              className={Utils['Mt-16']}
              style={{ backgroundColor: 'white', padding: '24px' }}
            >
              <MediaImage>
                <img src={`${assets}img/service/check/img-type-c.png`} alt="" />
              </MediaImage>
              <div>
                <TxtSize size="m" as="p">
                  <TxtEmp01>何事も計画的！</TxtEmp01>
                </TxtSize>
                <TxtSize size="ll" as="p">
                  <TxtEmp01>心配性タイプ</TxtEmp01>
                </TxtSize>
                <p className={Utils['Mt-8']}>
                  スマホに関する心配事もちらほら。
                  <br />
                  そんな心配性のあなたにぴったりなサービスを3つご紹介！
                </p>
              </div>
            </CheckMediaGrid>
          </ContentContainer>
        </InfoboxLight>

        <SystemContainer className={Utils['Mt-40']}>
          <Heading level="2">そんなあなたにオススメのオプションは…</Heading>
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
                <div className={Utils['Mt-24']}>
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
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/standard-free-call/?l-id=service_check_type-c_service_standard-free-call"
                >
                  15分（標準）通話かけ放題を見る
                </ButtonSecondaryLarge>
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
                <div className={Utils['Mt-24']}>
                  <p>
                    スマホが壊れたらどうしよう…保証サービスに加入すればそんな心配は不要です。故障はもちろん、盗難・紛失の際も保証致します。
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
                    href="/service/iphone/applecare-icloud/?l-id=service_check_type-c_service_iphone_applecare-icloud"
                  >
                    故障紛失保証 with AppleCare Services & iCloud+を見る
                  </ButtonSecondaryLarge>
                </div>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/replacement-warranty-plus/?l-id=service_check_type-c_service_replacement-warranty-plus"
                  >
                    スマホ交換保証プラスを見る
                  </ButtonSecondaryLarge>
                </div>
                <div className={Utils['Mt-16']}>
                  <ButtonSecondaryLarge
                    as="a"
                    href="/service/replacement-warranty-sim/?l-id=service_check_type-c_service_replacement-warranty-sim"
                  >
                    持ち込みスマホあんしん保証を見る
                  </ButtonSecondaryLarge>
                </div>
              </div>
            </li>
            <li>
              <div>
                <Heading level="3">サポートサービス</Heading>
                <div className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-04.png`}
                    alt=""
                    width="504"
                    height="208"
                  />
                </div>
                <div className={Utils['Mt-24']}>
                  <p>
                    スマホの操作が心配。そんなあなたを専任オペレータがサポートいたします。
                  </p>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/remote-support-for-device-operation/?l-id=service_check_type-c_service_remote-support-for-device-operation"
                >
                  スマホ操作遠隔サポートを見る
                </ButtonSecondaryLarge>
              </div>
            </li>
          </CheckContent>

          <TurboOneYear1980Bnr
            className={isPc ? Utils['Mt-56'] : Utils['Mt-80']}
            url="/hikari/campaign/six-month-free/?l-id=chart_type_worrying_hikari_campaign_six-month-free"
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
              <LinkList as="a" href="/service/check/type-b/">
                オールマイティータイプ
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

export default ServiceCheckTypeC
