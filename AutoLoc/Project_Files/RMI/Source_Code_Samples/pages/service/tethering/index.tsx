import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { TxtCap, TxtSize } from '@components/atoms/Txt'
import {
  ButtonPrimaryLarge,
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import { UsersVoiceLinks } from '@components/include/uservoice/UsersVoiceLinks'
import { IconChevronRight } from '@components/icons'
import { LinkIconBefore } from '@components/atoms/Link'
const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const WhiteBox = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 32px;
`
const PinkBox = styled.div`
  background-color: ${props => props.theme.colors.pink5};
`

const Hero = styled(Heading)`
  text-align: center;
  background-color: #fffedd;
  img {
    ${mixins.mq.MaxM} {
      width: 100vw;
    }
  }
`

const ServiceContent = styled.ul`
  display: flex;
  gap: 0 16px;
  margin-top: 32px;
  ${mixins.mq.MaxM} {
    display: block;
  }
  li {
    flex: 1;
    width: calc(33% - 16px);
    min-height: 420px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    padding: 24px 22px;

    h3 {
      font-size: 20px;
    }

    ${mixins.mq.MaxM} {
      width: 100%;
      margin: 24px 0 0;
    }
    ${mixins.mq.MinL} {
      h3 {
        display: inline-block;
        word-wrap: break-word;
        width: 100%;
      }
    }
  }
  img {
    max-width: 186px;
    width: 100%;
    margin: auto;
    display: block;
  }
`

const AnchorArea = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    align-items: center;
    gap: 12px;
  }
`

const ServiceTethering: NextPage = () => {
  const theme = useContext(ThemeContext)
  const selectedCardIds = ['number-share', 'rakutenmobile-wifi', 'data-charge']
  const pagetitle = 'テザリングならお使いのスマホでらくらくネット接続！'
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
        description="楽天モバイルの「テザリング」サービス紹介。外出先でも、スマートフォン（スマホ）を介してパソコンやゲーム機などのWi-Fi対応機器をインターネットに接続できます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        {/* Hero */}
        <Hero
          level="1"
          ratId="service_tethering_scroll-01_header"
          ratEvent="appear"
        >
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/service/tethering/kv-sp-20231127.png`}
              width="750"
              height="660"
            />
            <img
              src={`${assets}img/service/tethering/kv-pc-20231127.png`}
              width="1440"
              height="240"
              alt="テザリングなら、外出先でもお使いのスマホでパソコン・ゲーム機などをらくらくネット接続！"
            />
          </picture>
        </Hero>
        {/* / Hero */}

        <SystemContainer>
          <p className={`${Utils['Align-llc']} ${Utils['Mt-40']}`}>
            テザリングとは、スマートフォンを使用してパソコン、ゲーム機などのWi-Fi対応機器をインターネットに接続できる機能です。
            <br />
            プランのご契約で追加料金なしでご利用いただけます。
          </p>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonPrimaryLarge
              href="/guide/application/?lid-r=service_tethering_guide_application01"
              as="a"
            >
              プランお申し込みはこちら
            </ButtonPrimaryLarge>
          </div>
          <AnchorArea>
            <li>
              <LinkIconBefore href="/fee/saikyo-plan/?l-id=service_tethering_fee_saikyo-plan-01">
                料金プランの詳細を見る
                <IconChevronRight />
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore href="/guide/tethering/?l-id=service_tethering_guide_tethering-01">
                テザリングのご利用方法を見る
                <IconChevronRight />
              </LinkIconBefore>
            </li>
          </AnchorArea>
        </SystemContainer>

        <GrayBox className={Utils['Mt-40']}>
          <SystemContainer>
            <Heading
              level="2"
              className={Utils['Align-center']}
              ratId="service_tethering_scroll-02_use"
              ratEvent="appear"
            >
              使用用途が豊富
            </Heading>
            <WhiteBox className={Utils['Mt-40']}>
              <MediaGrid className={Utils['Mt-24']}>
                <MediaImage>
                  <img
                    src={`${assets}img/service/tethering/img-purpose-231127.png`}
                    alt=""
                    width="352"
                    height="102"
                  />
                </MediaImage>
                <div>
                  <p className={Utils['Mt-8']}>
                    テザリングにはWi-Fiテザリング、USBテザリング、Bluetooth®テザリングの3つの接続方法があります。外出先のカフェでパソコンにつないだり、家の中でWi-Fiの代わりに使ったりと、使い方次第で用途が広がります。
                  </p>
                  <TxtCap className={Utils['Mt-16']} as="p">
                    ※機種によってはご利用できない場合があります。ご利用されるスマートフォンの仕様をご確認ください。
                  </TxtCap>
                </div>
              </MediaGrid>
            </WhiteBox>

            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
              ratId="service_tethering_scroll-03_recommend-01"
              ratEvent="appear"
            >
              こんな方におすすめ
            </Heading>
            <p className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
              外出先でもパソコンやゲーム機などをネット接続したい方におすすめです！
            </p>

            <ServiceContent>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  オンラインゲームを
                  <br className={Utils['Disp-pc']} />
                  楽しみたい方
                </Heading>
                <img
                  src={`${assets}img/service/tethering/img-recommend-01-231127.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <p className={Utils['Mt-16']}>
                  Wi-Fiテザリングなら、パソコンだけではなくタブレットやゲーム機、カメラ（テザリング対応機種）等対応機器は豊富です。複数台同時接続も可能です。
                </p>
                <TxtCap as="p" className={`${Utils['Mt-8']}`}>
                  ※機種によってはご利用できない場合があります。ご利用されるスマートフォンの仕様をご確認ください。
                </TxtCap>
              </li>
              <li>
                <Heading
                  level="3"
                  className={Utils['Align-center']}
                  ratId="service_tethering_scroll-04_recommend-02"
                  ratEvent="appear"
                >
                  パソコンで長時間
                  <br />
                  ネット接続したい方
                </Heading>
                <img
                  src={`${assets}img/service/tethering/img-recommend-02-231127.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <p className={Utils['Mt-16']}>
                  USBテザリングなら、パソコンからスマートフォンに給電しながらテザリング接続をするので、長時間の作業が可能です。
                </p>
              </li>
              <li>
                <Heading level="3" className={Utils['Align-center']}>
                  複数の機器で接続したいけど
                  <br />
                  バッテリー残量が気になる方
                </Heading>
                <img
                  src={`${assets}img/service/tethering/img-recommend-03-231127.png`}
                  alt=""
                  className={Utils['Mt-16']}
                />
                <p className={Utils['Mt-16']}>
                  Bluetooth®テザリングなら、Wi-Fiテザリングよりもスマートフォンの電池持ちがよいので外出先の使用に便利です。
                </p>
              </li>
            </ServiceContent>

            <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
              <ButtonRegularLarge
                href="/guide/tethering/?l-id=service_tethering_guide_tethering-02"
                as="a"
              >
                ご利用方法を見る
              </ButtonRegularLarge>
            </div>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Mt-64']}>
          <Heading
            level="2"
            className={Utils['Align-center']}
            ratId="service_tethering_scroll-05_plan"
            ratEvent="appear"
          >
            楽天モバイルのプランはテザリングもデータ無制限
            <TxtSize size="m">
              <sup>※</sup>
            </TxtSize>
            で使える!
          </Heading>

          <TxtCap
            as="p"
            className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
          >
            ※公平なサービスのため、速度制限の場合あり。環境により速度低下する場合あり。
          </TxtCap>
          <section className={Utils['Mt-48']}>
            <CommonSaikyo />
          </section>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application/?lid-r=service_tethering_guide_application02"
            >
              プランお申し込みはこちら
            </ButtonPrimaryLarge>
          </div>
        </SystemContainer>

        <PinkBox className={`${Utils['Mt-64']} ${Utils['Py-56']}`}>
          <SystemContainer>
            <Heading
              level="2"
              className={Utils['Align-center']}
              ratId="service_tethering_scroll-06_uservoice"
              ratEvent="appear"
            >
              テザリングを実際に
              <br className={Utils['Disp-tb-sp']} />
              お使いのお客様の声
            </Heading>
            <UsersVoiceLinks
              className={Utils['Mt-32']}
              lid="service_tethering"
              data={[
                {
                  user: '28',
                  title:
                    'データ無制限でテザリングをフル活用！料金の安さにも大満足！',
                  text: '「引っ越しの度に光回線を撤去したり、開通工事するのはお金も時間ももったいない」「パソコンやタブレットも、全部まとめて...',
                },
                {
                  user: '07',
                  title:
                    'データ無制限をフル活用。自宅のデバイスもテザリングで接続！',
                  text: '「携帯電話と光回線がセット割引でそれぞれの料金の見直しが難しい」とお悩みの方もいらっしゃるのではないでしょうか...',
                },
              ]}
            />
            <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
              <ButtonRegularLarge
                href="/uservoice/?l-id=service_tethering_uservoice"
                as="a"
              >
                ご利用者の声一覧
              </ButtonRegularLarge>
            </div>
          </SystemContainer>
        </PinkBox>

        <BgGray>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="tethering"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  その他の
                  <br className={Utils['Disp-sp']} />
                  データ通信サービス
                </>
              }
              ratId="service_tethering_scroll-07_other-data"
              ratEvent="appear"
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="tethering"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
              ratId="service_tethering_scroll-08_other-service"
              ratEvent="appear"
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

export default ServiceTethering
