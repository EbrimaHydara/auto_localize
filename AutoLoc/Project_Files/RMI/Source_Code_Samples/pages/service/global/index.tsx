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
import { TxtSize, TxtEmp01 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter } from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { CardNormal } from '@components/atoms/Card'
import { MediaGridHalf, MediaIcon } from '@components/layout/Media'
import { InfoboxLight } from '@components/atoms/Infobox'
import { mixins } from '@components/utils/Mixins'
import { IconChevronRight } from '@components/icons'

const CardText = styled(TxtSize)`
  min-height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

const InfoboxLightCustom = styled(InfoboxLight)`
  max-width: 416px;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    max-width: 100%;
  }
`

const ServiceGlobal: NextPage = () => {
  const pagetitle = '海外／国際サービス'
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
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルで楽天回線をご契約中のお客様へ、海外での携帯電話のご利用方法や、日本から海外への電話やSMSのご利用方法をご案内します。"
      />
      <SystemWrapper>
        <SystemContainer className={Utils['Pb-64']}>
          <Heading level="1" className={`${Utils['Mt-32']}`}>
            {pagetitle}
          </Heading>
          <p className={Utils['Mt-16']}>
            楽天モバイルの海外でのご利用方法や、日本から海外への電話やSMSのご利用方法をご案内します。
          </p>
          <MediaGridHalf className={Utils['Mt-32']}>
            <div>
              <CardNormal
                href="/service/global/overseas/"
                className={Utils['Align-center']}
              >
                <div>
                  <img
                    src={`${assets}img/service/global/common/img-global-01.png`}
                    width="244"
                    alt=""
                  />
                </div>
                <CardText size="l" className={Utils['Mt-8']}>
                  海外で使う
                </CardText>
                <p className={Utils['Mt-8']}>海外でのデータ通信・通話・SMS</p>
              </CardNormal>
            </div>
            <div>
              <CardNormal
                href="/service/global/outgoing/"
                className={Utils['Align-center']}
              >
                <div>
                  <img
                    src={`${assets}img/service/global/common/img-global-02.png`}
                    width="244"
                    alt=""
                  />
                </div>
                <CardText size="l" className={Utils['Mt-8']}>
                  日本から海外へ電話を
                  <br className={Utils['Disp-tb-sp']} />
                  かける・
                  <br className={Utils['Disp-pc']} />
                  SMSを送る
                </CardText>
                <p className={Utils['Mt-8']}>日本から海外への通話・SMS</p>
              </CardNormal>
            </div>
          </MediaGridHalf>
          <Heading level="2" className={Utils['Mt-48']}>
            海外での利用がもっと便利に！
          </Heading>
          <MediaGridHalf className={Utils['Mt-24']}>
            <InfoboxLightCustom>
              <MediaIcon>
                <div>
                  <img
                    src={`${assets}img/service/global/common/img-global-03.png`}
                    width="100"
                    alt=""
                  />
                </div>
                <div>
                  <TxtEmp01 as="p">必要な分だけいつでもチャージ</TxtEmp01>
                  <TxtSize as="p" size="l">
                    <TxtEmp01>データチャージ</TxtEmp01>
                  </TxtSize>
                  <p className={Utils['Mt-16']}>
                    <LinkIconAfter href="/service/data-charge/">
                      詳細を見る
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </div>
              </MediaIcon>
            </InfoboxLightCustom>
            <InfoboxLightCustom>
              <MediaIcon>
                <div>
                  <img
                    src={`${assets}img/service/global/common/img-global-04.png`}
                    width="100"
                    alt=""
                  />
                </div>
                <div>
                  <TxtSize as="p" size="l">
                    <TxtEmp01>国際通話かけ放題</TxtEmp01>
                  </TxtSize>
                  <TxtEmp01 as="p">海外指定65の国と地域への通話</TxtEmp01>
                  <p className={Utils['Mt-16']}>
                    <LinkIconAfter href="/service/international-unlimited-talk/">
                      詳細を見る
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </div>
              </MediaIcon>
            </InfoboxLightCustom>
          </MediaGridHalf>
          <Heading level="2" className={Utils['Mt-48']}>
            よく見られているご質問
          </Heading>
          <p className={Utils['Mt-24']}>
            よく見られているご質問をご案内します。お困りごとが解決しない場合は、各ページからチャットやお電話でお問い合わせいただけます。
          </p>
          <div className={Utils['Mt-24']}>
            <ButtonRegular
              as="a"
              href="/support/plan/international-voice/#smallcategory-faq"
            >
              よく見られているご質問を確認する
            </ButtonRegular>
          </div>
        </SystemContainer>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceGlobal
