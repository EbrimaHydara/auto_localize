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
      min-height: calc(var(--btnHeight) * 3);
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

const ServiceCheckTypeA: NextPage = () => {
  const pagetitle = 'オプションサービス診断結果（チャレンジャータイプ）'
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
        description="オプションサービス診断で「チャレンジャータイプ」だったあなたにオススメのオプションサービスをご案内します。"
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
                <img src={`${assets}img/service/check/img-type-a.png`} alt="" />
              </MediaImage>
              <div>
                <TxtSize size="m" as="p">
                  <TxtEmp01>好奇心旺盛！</TxtEmp01>
                </TxtSize>
                <TxtSize size="ll" as="p">
                  <TxtEmp01>チャレンジャータイプ</TxtEmp01>
                </TxtSize>
                <TxtNormal className={Utils['Mt-8']} as="p">
                  日々新しいことにチャレンジしたい。
                  <br />
                  好奇心とチャレンジ精神旺盛なあなたにぴったりなサービスを2つご紹介！
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
                <Heading level="3">セキュリティサービス</Heading>
                <div className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-01.png`}
                    alt=""
                    width="504"
                    height="210"
                  />
                </div>
                <div className={`${Utils['Mt-24']} text`}>
                  <p>
                    ついつい調べ物や情報収集でインターネットにアクセスしてしまう。そんなあなたのスマホやタブレットは、常にあらゆる危険にさらされています。世界が認めるノートンは、さまざまなリスクから守ります。
                  </p>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/norton-mobile-security/?l-id=service_check_type-a_service_norton-mobile-security"
                >
                  ノートンモバイルセキュリティを見る
                </ButtonSecondaryLarge>
              </div>
            </li>
            <li>
              <div>
                <Heading level="3">データ通信サービス</Heading>
                <div className={`${Utils['Mt-16']} img`}>
                  <img
                    src={`${assets}img/service/check/img-02.png`}
                    alt=""
                    width="504"
                    height="210"
                  />
                </div>
                <div className={`${Utils['Mt-24']} text`}>
                  <p>
                    チャレンジ精神旺盛なあなたは外出することも多いはず！Wi-Fiエコネクトなら外出先でも快適に高速インターネットがご利用いただけます。
                  </p>
                </div>
              </div>
              <div className={`${Utils['Align-center']} btn`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/rakutenmobile-wifi/?l-id=service_check_type-a_service_rakutenmobile-wifi"
                >
                  楽天モバイルWiFi by エコネクトを見る
                </ButtonSecondaryLarge>
              </div>
            </li>
          </CheckContent>

          <TurboOneYear1980Bnr
            className={isPc ? Utils['Mt-56'] : Utils['Mt-80']}
            url="/hikari/campaign/six-month-free/?l-id=chart_type_challenger_hikari_campaign_six-month-free"
          />

          <Heading level="2" className={Utils['Mt-64']}>
            他の診断結果
          </Heading>
          <ul>
            <LinkListBorder className={Utils['Mt-16']}>
              <LinkList as="a" href="/service/check/type-b/">
                オールマイティータイプ
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

export default ServiceCheckTypeA
