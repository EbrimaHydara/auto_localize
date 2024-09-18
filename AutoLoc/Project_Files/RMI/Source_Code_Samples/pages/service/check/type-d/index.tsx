import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import {
  LinkListBorder,
  LinkList,
  LinkIconBefore,
} from '@components/atoms/Link'
import { TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { IconChevronRight, IconChevronLeft } from '@components/icons'
import { MediaGrid, MediaImage, MediaGridLarge } from '@components/layout/Media'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import Utils from '@styles/Utils.module.scss'
import { TurboOneYear1980Bnr } from '@components/include/common/TurboOneYear1980Bnr'
import { InfoboxLight } from '@components/atoms/Infobox'

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

const ButtonWrapper = styled.div`
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    text-align: center;
  }
`

const ServiceCheckTypeD: NextPage = () => {
  const pagetitle = 'オプションサービス診断結果（こだわりタイプ）'
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

  return (
    <>
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <CustomHead
          pagetitle={pagetitle}
          directories={directories}
          description="オプションサービス診断で「こだわりタイプ」だったあなたにオススメのオプションサービスをご案内します。"
        />
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
                  src={`${assets}img/service/check/img-type-d.png`}
                  alt=""
                  width="686"
                  height="392"
                />
              </MediaImage>
              <div>
                <TxtSize size="m" as="p">
                  <TxtEmp01>一つ一つを吟味！</TxtEmp01>
                </TxtSize>
                <TxtSize size="ll" as="p">
                  <TxtEmp01>こだわりタイプ</TxtEmp01>
                </TxtSize>
                <p className={Utils['Mt-8']}>
                  どんなものでもこだわって選ぶあなたにぴったりなサービスをご紹介！
                </p>
              </div>
            </CheckMediaGrid>
          </ContentContainer>
        </InfoboxLight>

        <SystemContainer className={Utils['Mt-24']}>
          <Heading level="2" className={Utils['Mt-40']}>
            そんなあなたにオススメのオプションは…
          </Heading>
          <Heading level="3" className={Utils['Mt-32']}>
            通話・SMSサービス
          </Heading>
          <MediaGridLarge className={Utils['Mt-16']}>
            <MediaImage>
              <img
                src={`${assets}img/service/check/img-05.png`}
                alt=""
                width="504"
                height="209"
              />
            </MediaImage>
            <div>
              <p>
                電話番号選択サービスは電話番号の下4桁を指定し、選んだ下4桁を含んだ電話番号をお好きな電話番号が出てくるまで何度でも検索でき、こだわりの電話番号を使用できます。
              </p>
              <ButtonWrapper>
                <ButtonSecondaryLarge
                  as="a"
                  href="/service/select-number/?l-id=service_check_type-d_service_select-number"
                >
                  選べる電話番号サービスを見る
                </ButtonSecondaryLarge>
              </ButtonWrapper>
            </div>
          </MediaGridLarge>

          <TurboOneYear1980Bnr
            className={Utils['Mt-80']}
            url="/hikari/campaign/six-month-free/?l-id=chart_type_particular_hikari_campaign_six-month-free"
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
              <LinkList as="a" href="/service/check/type-c/">
                心配性タイプ
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

export default ServiceCheckTypeD
