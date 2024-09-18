import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { MediaGrid, MediaGridHalf, MediaImage } from '@components/layout/Media'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { IconArrowDown, IconNewTabLine } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import {
  AccordionList,
  AccordionListEmp,
} from '@components/atoms/AccordionList'
import { CampaignRule1976 } from '@components/include/campaign/rules/2023/CampaignRule1976'
import { CampaignRule2222 } from '@components/include/campaign/rules/2024/CampaignRule2222'
import { BannerHover } from '@components/atoms/Banner'
import { LabelList } from '@components/atoms/Label'

const TaxIncludedPrice = styled.div`
  padding: 6px 0;
`
const GrayBox = styled.div`
  padding: 64px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const Hero = styled.div`
  position: relative;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.monotone88};
  border-bottom: 1px solid ${props => props.theme.colors.monotone88};
  ${mixins.mq.MinL} {
    &:after {
      content: '';
      display: block;
      width: 40%;
      height: 100%;
      background-color: ${props => props.theme.colors.monotone97};
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  > h1 {
    position: relative;
    z-index: 1;
  }
  ${mixins.mq.MaxM} {
    picture,
    img {
      width: 100%;
    }
  }
`
const AnchorArea = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
    margin-top: 40px;
  }
`
const CustomHeading = styled(Heading)`
  ${mixins.mq.MaxM} {
    margin-top: 32px;
    font-size: ${props => props.theme.fonts.m};
  }
`

const CustomTxtCapAnnotation = styled(TxtCap)`
  ${mixins.mq.MinL} {
    text-align: center;
  }
`

const CustomMediaGrid = styled(MediaGrid)`
  ${mixins.mq.MaxM} {
    div:nth-child(2) {
      margin-top: 40px;
    }
  }
`
const CustomMediaGridHalf = styled(MediaGridHalf)`
  align-items: center;
  img {
    ${mixins.mq.MaxM} {
      width: 100%;
      max-width: 244px;
    }
  }
`
const RecommendHeading = styled(Heading)`
  padding: 8px 0;
  border-bottom: 1px solid #000;
  ${mixins.mq.MaxM} {
    max-width: 311px;
    margin: 0 auto;
  }
`
const ListCustomBasic = styled(UlOnly)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 24px;
  width: 100%;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mixins.mq.MaxS} {
    grid-template-columns: repeat(1, 1fr);
  }
  > li {
    margin-top: 0;
  }
`
const CustomDescriptionListDefault = styled(DescriptionListDefault)`
  ${mixins.mq.MinL} {
    border-left: 1px solid ${props => props.theme.colors.monotone75};
    border-right: 1px solid ${props => props.theme.colors.monotone75};
    > div {
      justify-content: unset;
      row-gap: 16px;
      > dt {
        border-right: 1px solid ${props => props.theme.colors.monotone75};
      }
      > dd {
        padding: 16px;
      }
    }
  }
`

const Mt16Pc24 = styled.p`
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 24px;
  }
`

const SeniorBnr = styled.div`
  margin-top: 48px;
  text-align: center;
  > p {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

const PeriodPart = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`

const PeriodLabel = styled.div`
  > ul {
    > li {
      margin: 0;
      border: solid 1px ${props => props.theme.colors.primary};
      background-color: #fff;
      ${mixins.mq.MaxM} {
        width: 100%;
        text-align: center;
      }
      &:nth-child(n + 2) {
        margin-left: 8px;
        ${mixins.mq.MaxM} {
          margin-left: 0;
          margin-top: 8px;
        }
      }
    }
  }
`

const FeeAppleWatchFamilySharing: NextPage = () => {
  const pagetitle = 'Apple Watch ファミリー共有'
  const directories = [
    { path: '/fee/saikyo-plan/', label: 'Rakuten最強プラン（料金プラン）' },
  ]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'Rakuten最強プラン（料金プラン）',
      url: '/fee/saikyo-plan/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const theme = useContext(ThemeContext)

  const labelArgs = {
    item: [{ isEmp: true, text: 'キャンペーン期間' }],
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「Apple Watch ファミリー共有」サービスは、iPhoneを持っていない家族のApple Watchを設定することで、Apple Watchだけで音声通話やデータ通信を利用できるサービスです。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TaxIncludedPrice>
            <TxtCap as="p" className={Utils['Align-right']}>
              ※表記の金額はすべて税込です。
            </TxtCap>
          </TaxIncludedPrice>
        </SystemContainer>
        <section>
          <Hero>
            <Heading level="1">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/fee/apple-watch-family-sharing/kv-sp.png`}
                  width="750"
                  height="480"
                />
                <img
                  src={`${assets}img/fee/apple-watch-family-sharing/kv-pc.png`}
                  width="1032"
                  height="320"
                  alt="たった1台のiPhoneで、家族みんなのApple Watchとつながれます。Apple Watch ファミリー共有 1,078円/月 ※Apple Watch1台につき"
                />
              </picture>
            </Heading>
          </Hero>
          <SystemContainer>
            <div className={Utils['Mt-16']}>
              <p>
                「Apple Watch
                ファミリー共有」を使えば、iPhoneを持っていない家族のApple
                Watchを設定して管理できます。いつもつながる。アクティブに動く。健康や安全を守る。そのすべての機能を大切な家族に。
              </p>
              <TxtCap as="ul" className={Utils['Mt-8']}>
                <li>
                  ※ iPhone（親回線）と、Apple Watch（Series
                  4以降のCellularモデル）の両方をお持ちの場合のみご加入いただけます。
                </li>
                <li>
                  ※
                  「Rakuten最強プラン」のお申し込み、またはご利用を条件とするキャンペーン特典は対象外です。
                </li>
                <li>
                  ※ 「Apple Watch ファミリー共有」でApple
                  Watchを設定した場合、一部の機能はご利用できません。詳細は
                  <LinkNormal
                    href="#attention"
                    onClick={e => anchorCallback(e, 'attention')}
                  >
                    ご利用上の注意
                  </LinkNormal>
                  をご確認ください。
                </li>
              </TxtCap>
            </div>
            <AnchorArea>
              <li>
                <LinkIconBefore
                  href="#feature"
                  data-ratid="apple-watch-family-sharing_index_features"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'feature')}
                >
                  <IconArrowDown />
                  主な特長
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#service"
                  data-ratid="apple-watch-family-sharing_index_service"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'service')}
                >
                  <IconArrowDown />
                  サービスの仕様
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#product"
                  data-ratid="apple-watch-family-sharing_index_product"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'product')}
                >
                  <IconArrowDown />
                  対象製品
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#attention"
                  data-ratid="apple-watch-family-sharing_index_attention"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={e => anchorCallback(e, 'attention')}
                >
                  <IconArrowDown />
                  ご利用上の注意
                </LinkIconBefore>
              </li>
            </AnchorArea>
          </SystemContainer>
        </section>

        <section className={`${Utils['Mt-40']}`}>
          <SystemContainer>
            <div className={`${Utils['Align-center']}`}>
              <Heading level="3" as="h3">
                <TxtEmp02>＼キャンペーン開催中／</TxtEmp02>
              </Heading>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/fee/apple-watch-family-sharing/bnr-panda-band-375-192-240322.png`}
                  width="100%"
                />
                <img
                  src={`${assets}img/fee/apple-watch-family-sharing/bnr-panda-band-1032-300-240322.png`}
                  width="1032"
                  height="300"
                  alt="先着500名限定！Apple Watch ファミリー共有ご契約でApple Watch用お買いものパンダバンドプレゼント！"
                />
              </picture>
            </div>
            <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Mt-pc-16']}`}>
              ※ 数量に限りあり。おひとり様1個まで。※
              バンドは手首が130mm～200mmの方にフィットします。 ※
              本キャンペーン対象有無のお知らせは、景品の到着をもって代えさせていただきます。
              詳しくは
              <LinkNormal
                href="#campaign-rule2222"
                onClick={e => anchorCallback(e, 'campaign-rule2222')}
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </TxtCap>
            <PeriodPart className={Utils['Mt-16']}>
              <PeriodLabel>
                <LabelList {...labelArgs} />
              </PeriodLabel>
              <span>2024年3月22日（金）09:00～終了日未定</span>
            </PeriodPart>
          </SystemContainer>
        </section>

        <GrayBox className={Utils['Mt-64']}>
          <SystemContainer>
            <section>
              <Heading
                level="2"
                id="feature"
                className={Utils['Align-center']}
                ratId="apple-watch-family-sharing_scroll-01_features"
                ratEvent="appear"
              >
                Apple Watch <br className={Utils['Show-oox']} />
                ファミリー共有の特長
              </Heading>
              <CustomMediaGridHalf className={Utils['Mt-32']}>
                <MediaImage>
                  <img
                    src={`${assets}img/fee/apple-watch-family-sharing/img-apple-watch-family-pc.png`}
                    width="357"
                    height="320"
                    alt=""
                  />
                </MediaImage>
                <div>
                  <CustomHeading level="3">
                    子どもには自由を、
                    <br />
                    あなたには安心を届けます。
                  </CustomHeading>
                  <Mt16Pc24>
                    iPhoneを持っていない家族のApple
                    Watchを設定して管理できます。また、電話やメッセージであなたが承認した人と連絡を取ることができます。
                  </Mt16Pc24>
                </div>
              </CustomMediaGridHalf>
            </section>
            <section className={Utils['Mt-64']}>
              <div className={Utils['Align-center']}>
                <TxtEmp01>「Apple Watch ファミリー共有」は　</TxtEmp01>
                <Heading level="2" className={Utils['Align-center']}>
                  こんな方におすすめ！
                </Heading>
              </div>
              <CustomMediaGrid className={Utils['Mt-24']}>
                <div>
                  <RecommendHeading level="3" className={Utils['Align-center']}>
                    小さなお子さまをもつ方
                  </RecommendHeading>
                  <Heading level="4" className={Utils['Mt-32']}>
                    居場所を見守る機能
                  </Heading>
                  <p className={Utils['Mt-8']}>
                    位置情報の共有機能を使えば、子どもが帰宅したり、いるはずの場所にいない時に通知を受け取ることができます。
                  </p>
                </div>
                <div>
                  <RecommendHeading level="3" className={Utils['Align-center']}>
                    シニアのご家族をもつ方
                  </RecommendHeading>
                  <MediaGridHalf>
                    <div>
                      <Heading level="4" className={Utils['Mt-32']}>
                        安全を見守る機能
                      </Heading>
                      <p className={Utils['Mt-8']}>
                        あなたの大切な人が転倒したことを検知。転倒後に反応がないことを検知すると、緊急SOSを使って緊急通報サービスに連絡できます。
                      </p>
                    </div>
                    <div>
                      <Heading level="4" className={Utils['Mt-32']}>
                        健康を見守る機能
                      </Heading>
                      <p className={Utils['Mt-8']}>
                        Apple
                        Watchは、現在の心拍数を測定。通常よりも高い心拍数と低い心拍数を検知するとアラートで知らせます。
                      </p>
                    </div>
                  </MediaGridHalf>
                </div>
              </CustomMediaGrid>
              <div className={`${Utils['Align-center']} ${Utils['Mt-48']}`}>
                <ButtonRegularLarge
                  as="a"
                  href="/guide/flow/application/apple-watch-family-sharing/?l-id=fee_apple-watch-family-sharing_guide_flow_application_apple-watch-family-sharing_1"
                >
                  お申し込み方法を見る
                </ButtonRegularLarge>
              </div>
              <CustomTxtCapAnnotation as="ul" className={Utils['Mt-16']}>
                <li>
                  ※契約者、または利用者が18歳未満の場合、ショップでのお申し込みとなります。
                </li>
                <li>
                  ※iPhone（親回線）が、Rakuten最強プラン（データタイプ）や他キャリアをご利用の場合でもご利用いただけますが、ショップでのお申し込みとなります。
                </li>
                <li>
                  <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/#attention">
                    その他注意事項
                  </LinkNormal>
                  をご確認の上、ご来店ください。
                </li>
              </CustomTxtCapAnnotation>
              <SeniorBnr>
                <p>シニアのご家族にもおすすめな理由！</p>
                <BannerHover href="https://senior.rakuten.co.jp/column/new_communication_with_smart_watch/?scid=wi_rmb_familyshare-column">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/fee/apple-watch-family-sharing/bnr-senior-watch-sp-343-108-231117.png`}
                      width="343"
                      height="108"
                    />
                    <img
                      src={`${assets}img/fee/apple-watch-family-sharing/bnr-senior-watch-pc-1032-160-231117.png`}
                      width="1032"
                      height="160"
                      alt="シニアが語るApple Watchの魅力をコラムで紹介！"
                    />
                  </picture>
                </BannerHover>
              </SeniorBnr>
            </section>
          </SystemContainer>
        </GrayBox>

        <SystemContainer>
          <section className={Utils['Mt-64']}>
            <Heading
              level="2"
              id="service"
              ratId="apple-watch-family-sharing_scroll-02_service"
              ratEvent="appear"
            >
              サービスの仕様
            </Heading>
            <p className={Utils['Mt-8']}>
              「Apple Watch ファミリー共有」でご利用いただける、Apple
              Watchの仕様は以下となります。
            </p>
            <Heading level="3" className={Utils['Mt-40']}>
              データ通信
            </Heading>
            <CustomDescriptionListDefault className={Utils['Mt-16']}>
              <div>
                <dt>高速データ容量</dt>
                <dd>
                  国内250MB
                  <TxtCap as="ul">
                    <li>※高速データ容量は、毎月1日（0:00）に付与されます。</li>
                    <li>
                      ※高速データ容量(250MB)を全て消費しデータ残容量が0になった場合、通信速度が制限されます。（最大128kbps）
                    </li>
                  </TxtCap>
                </dd>
              </div>
              <div>
                <dt>データチャージ</dt>
                <dd>対象外</dd>
              </div>
              <div>
                <dt>対応ネットワーク</dt>
                <dd>4G</dd>
              </div>
              <div>
                <dt>海外ローミング(データ通信)</dt>
                <dd>非対応</dd>
              </div>
            </CustomDescriptionListDefault>
            <Heading level="3" className={Utils['Mt-32']}>
              通話
            </Heading>
            <CustomDescriptionListDefault className={Utils['Mt-16']}>
              <div>
                <dt>国内通話</dt>
                <dd>
                  通常の音声通話（VoLTE）： 20円／30秒
                  <TxtCap as="ul">
                    <li>※Rakuten Linkは利用できません。</li>
                    <li>※かけ放題オプションの提供はありません。</li>
                  </TxtCap>
                </dd>
              </div>
              <div>
                <dt>国際通話（国内から海外へかける）</dt>
                <dd>
                  通常の音声通話（VoLTE）：国・地域別従量課金
                  <TxtCap as="ul">
                    <li>※海外での発着信は非対応。</li>
                    <li>※Rakuten Linkは利用できません。</li>
                    <li>※かけ放題オプションの提供はありません。</li>
                  </TxtCap>
                </dd>
              </div>
            </CustomDescriptionListDefault>
            <TxtCap className={Utils['Mt-8']} as="p">
              ※国際通話のサービスエリアや通話料金は、国や地域によって異なります。詳しくは
              <LinkNormal href="/service/international-call/">
                こちら
              </LinkNormal>
              をご確認ください。
            </TxtCap>
            <Heading level="3" className={Utils['Mt-32']}>
              SMS
            </Heading>
            <CustomDescriptionListDefault className={Utils['Mt-16']}>
              <div>
                <dt>国内SMS</dt>
                <dd>
                  1通：3円／140byte（70文字）
                  <TxtCap as="ul">
                    <li>※Rakuten Linkは利用できません。</li>
                  </TxtCap>
                </dd>
              </div>
              <div>
                <dt>国際SMS（国内から海外へ送る）</dt>
                <dd>
                  1通：国・地域別従量課金／140byte（70文字）
                  <TxtCap as="ul">
                    <li>※海外での送受信は非対応。</li>
                    <li>※Rakuten Linkは利用できません。</li>
                  </TxtCap>
                </dd>
              </div>
            </CustomDescriptionListDefault>
            <TxtCap className={Utils['Mt-8']} as="p">
              ※国際SMSのサービスエリアや送信料金は、国や地域によって異なります。詳しくは
              <LinkNormal href="/service/international-sms/">こちら</LinkNormal>
              をご確認ください。
            </TxtCap>
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegularLarge
                as="a"
                href="/guide/flow/application/apple-watch-family-sharing/?l-id=fee_apple-watch-family-sharing_guide_flow_application_apple-watch-family-sharing_2"
              >
                お申し込み方法を見る
              </ButtonRegularLarge>
            </div>
            <CustomTxtCapAnnotation as="ul" className={Utils['Mt-16']}>
              <li>
                ※契約者、または利用者が18歳未満の場合、ショップでのお申し込みとなります。
              </li>
              <li>
                ※iPhone（親回線）が、Rakuten最強プラン（データタイプ）や他キャリアをご利用の場合でもご利用いただけますが、ショップでのお申し込みとなります。
              </li>
              <li>
                <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/#attention">
                  その他注意事項
                </LinkNormal>
                をご確認の上、ご来店ください。
              </li>
            </CustomTxtCapAnnotation>
          </section>

          <section className={Utils['Mt-64']}>
            <Heading
              level="2"
              id="product"
              ratId="apple-watch-family-sharing_scroll-03_product"
              ratEvent="appear"
            >
              対象製品
            </Heading>
            <p className={Utils['Mt-8']}>
              iPhone（親回線）と、Apple Watch（Series
              4以降のCellularモデル）の両方をお持ちの場合のみご加入いただけます。
            </p>
            <TxtCap as="ul" className={Utils['Mt-8']}>
              <li>
                ※ショップでプランと同時にApple
                Watch(Series4以降のCellularモデル)をご購入いただく場合は、初期設定の必要がございますので、お時間に余裕をもってお越しください。
              </li>
              <li>
                利用者が18歳未満の場合はショップにて設定のサポートを行います。
              </li>
            </TxtCap>
            <div className={Utils['Mt-32']}>
              <AccordionListEmp
                text={'Apple Watch'}
                isOpened={false}
                ratid="apple-watch-family-sharing_watch"
              >
                <ListCustomBasic>
                  <li>
                    <LinkNormal href="/product/apple-watch/apple-watch-series9/">
                      Apple Watch Series 9
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/apple-watch/apple-watch-ultra-2/">
                      Apple Watch Ultra 2
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/apple-watch/apple-watch-se-2nd-2023/">
                      Apple Watch SE（第2世代）
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkIconAfter
                      href="https://www.rakuten.ne.jp/gold/rakutenmobile-store/product/apple-watch-series-8/?scid=wi_rmb_ich_fee_apple-watch-family-sharing_apple-watch-series8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apple Watch Series 8
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </li>
                  <li>
                    <LinkNormal href="/product/apple-watch/apple-watch-ultra/">
                      Apple Watch Ultra
                    </LinkNormal>
                  </li>
                  <li>Apple Watch Series 7</li>
                  <li>Apple Watch Nike Series 7</li>
                  <li>Apple Watch SE（第1世代）</li>
                  <li>Apple Watch Nike SE</li>
                  <li>Apple Watch Series 6</li>
                  <li>Apple Watch Nike Series 6</li>
                  <li>Apple Watch Series 5</li>
                  <li>Apple Watch Nike Series 5</li>
                  <li>Apple Watch Series 4</li>
                  <li>Apple Watch Nike Series 4</li>
                </ListCustomBasic>
              </AccordionListEmp>
              <AccordionListEmp
                text={'iPhone'}
                isOpened={false}
                className={Utils['Mt-24']}
                ratid="apple-watch-family-sharing_iphone"
              >
                <ListCustomBasic>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-15-pro-max/">
                      iPhone 15 Pro Max
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-15-pro/">
                      iPhone 15 Pro
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-15-plus/">
                      iPhone 15 Plus
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-15/">
                      iPhone 15
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkIconAfter
                      href="https://item.rakuten.co.jp/rakutenmobile-store/iphone-14-pro-max_bundle/?scid=wi_rmb_ich_fee_apple-watch-family-sharing_iphone-14-pro-max"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iPhone 14 Pro Max
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </li>
                  <li>
                    <LinkIconAfter
                      href="https://item.rakuten.co.jp/rakutenmobile-store/iphone-14-pro_bundle/?scid=wi_rmb_ich_fee_apple-watch-family-sharing_iphone-14-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iPhone 14 Pro
                      <IconNewTabLine />
                    </LinkIconAfter>
                  </li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-14-plus/">
                      iPhone 14 Plus
                    </LinkNormal>
                  </li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-14/">
                      iPhone 14
                    </LinkNormal>
                  </li>
                  <li>iPhone 13 Pro Max</li>
                  <li>iPhone 13 Pro</li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-13/">
                      iPhone 13
                    </LinkNormal>
                  </li>
                  <li>iPhone 13 mini</li>
                  <li>
                    <LinkNormal href="/product/iphone/iphone-se-3rd/">
                      iPhone SE（第3世代）
                    </LinkNormal>
                  </li>
                  <li>iPhone 12 Pro Max</li>
                  <li>iPhone 12 Pro</li>
                  <li>iPhone 12</li>
                  <li>iPhone 12 mini</li>
                  <li>iPhone SE（第2世代）</li>
                  <li>iPhone 11 Pro Max</li>
                  <li>iPhone 11 Pro</li>
                  <li>iPhone 11</li>
                  <li>iPhone XS</li>
                  <li>iPhone XS Max</li>
                  <li>iPhone XR</li>
                </ListCustomBasic>
              </AccordionListEmp>
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegularLarge
                as="a"
                href="/guide/flow/application/apple-watch-family-sharing/?l-id=fee_apple-watch-family-sharing_guide_flow_application_apple-watch-family-sharing_3"
              >
                お申し込み方法を見る
              </ButtonRegularLarge>
            </div>
            <CustomTxtCapAnnotation as="ul" className={Utils['Mt-16']}>
              <li>
                ※契約者、または利用者が18歳未満の場合、ショップでのお申し込みとなります。
              </li>
              <li>
                ※iPhone（親回線）が、Rakuten最強プラン（データタイプ）や他キャリアをご利用の場合でもご利用いただけますが、ショップでのお申し込みとなります。
              </li>
              <li>
                <LinkNormal href="/guide/flow/application/apple-watch-family-sharing/#attention">
                  その他注意事項
                </LinkNormal>
                をご確認の上、ご来店ください。
              </li>
            </CustomTxtCapAnnotation>
          </section>

          <section className={Utils['Mt-64']}>
            <Heading
              level="2"
              id="attention"
              ratId="apple-watch-family-sharing_scroll-04_attention"
              ratEvent="appear"
            >
              ご利用上の注意
            </Heading>
            <UlOnly className={Utils['Mt-16']}>
              <li>
                「Rakuten最強プラン」のお申し込み、またはご利用を条件とするキャンペーン特典は対象外
                です 。
              </li>
              <li>「選べる電話番号サービス」はご利用いただけません。</li>
              <li>Apple Watch ファミリー共有は5回線までご契約が可能です。</li>
              <li>Apple Watch ファミリー共有は海外でご利用いただけません。</li>
              <li>
                Apple Watch
                ファミリー共有の解約は、楽天モバイルショップ（店舗）、my
                楽天モバイルおよびiPhone標準アプリの「Apple
                Watchアプリ」からお手続きが可能です。
                <br />
                <TxtCap>
                  ※iPhone（親回線）を楽天モバイル以外の携帯電話会社でご利用中の場合、「Apple
                  Watchアプリ」から解約はできません。my
                  楽天モバイルから解約手続きを行ってください。
                </TxtCap>
              </li>
              <li>
                Apple
                WatchをペアリングされたiPhoneでご利用中の回線を解約しても、Apple
                Watch
                ファミリー共有は解約されません。別途解約手続きが必要となります。
              </li>
              <li>
                Apple Watch
                ファミリー共有は、お子さまやシニアのご家族など、iPhoneのご契約者とは別のご家族がApple
                Watchを利用することを前提としたサービスです。そのため、
                ご契約者のiPhoneへの着信や通知等をApple
                Watchで受けることはできません。iPhoneとApple
                Watchを同じ方（ご契約者）が利用する場合は、電話番号シェアサービスをご利用ください。詳しくは
                <LinkNormal href="/service/number-share/">こちら</LinkNormal>
              </li>
            </UlOnly>
          </section>

          <section className={Utils['Mt-64']}>
            <Heading level="2" id="campaign-rule2222">
              「Apple Watch ファミリー共有」お申し込みで先着500名様にApple
              Watch用お買いものパンダバンドプレゼントキャンペーン
            </Heading>
            <CampaignRule2222 />
          </section>

          <section className={Utils['Mt-48']}>
            <Heading
              level="3"
              ratId="apple-watch-family-sharing_scroll-06_faq"
              ratEvent="appear"
              className={`${Utils['Align-center']}`}
            >
              よくあるご質問
            </Heading>
            <AccordionList
              text={
                'キャンペーンに申し込みたいのですが、どのようにすればよいですか？'
              }
              isOpened={false}
              className={Utils['Mt-24']}
            >
              キャンペーン期間内にWebまたは店舗にてApple Watch
              ファミリー共有をお申し込みいただくことで、キャンペーン条件を満たすことができます。
              <TxtCap as="p">
                <TxtEmp02>
                  ※
                  景品の数には限りがございます。先着順で景品がなくなり次第終了とさせていただく場合があります。
                </TxtEmp02>
              </TxtCap>
            </AccordionList>
            <AccordionList
              text={
                'Apple Watch ファミリー共有の申し込みができる対象店舗を教えてください。'
              }
              isOpened={false}
            >
              Apple Watch ファミリー共有は全店舗にてお申し込みが可能です。
            </AccordionList>
            <AccordionList
              text={'Apple Watch用お買い物パンダバンドはいつ頃届きますか？'}
              isOpened={false}
            >
              キャンペーン条件達成から2カ月前後で発送いたします。
              <TxtCap as="p">
                ※ 景品は先着順でなくなり次第終了とさせていただきます。
              </TxtCap>
              <p className={Utils['Mt-16']}>
                例）
                <br />
                4月1日から4月30日までに条件達成：2024年6月末発送
                <br />
                5月1日から5月31日までに条件達成：2024年7月末発送
              </p>
            </AccordionList>
            <AccordionList
              text={'先着から500名以内に入っているか確認したい'}
              isOpened={false}
            >
              先着順については景品の到着を持って確認いただいており、お問い合わせいただいてもお答えすることができません。
            </AccordionList>
            <AccordionList
              text={'他のキャンペーンとの併用は可能ですか？'}
              isOpened={false}
            >
              キャンペーンルールの「併用可能キャンペーン」欄をご確認ください。
            </AccordionList>
          </section>

          <AccordionList
            text={'過去のキャンペーンルール'}
            isOpened={false}
            className={Utils['Mt-48']}
          >
            <section id="campaign-rule1976" className={Utils['Mt-16']}>
              <TxtEmp02 as="p" className={Utils['Mb-8']}>
                ご購入製品のお受け取り、「Apple Watch
                ファミリー共有」のお申し込みはいずれも2024年3月21日（木）23:59（楽天モバイルショップの場合は2024年3月21日（木）閉店時）まで可能となります。
                <br />
                2024年3月22日（金）09:00より、同一の景品をプレゼントする類似キャンペーンを新たに開催する予定です。
              </TxtEmp02>
              <Heading
                level="2"
                ratId="apple-watch-family-sharing_scroll-05_rule"
                ratEvent="appear"
              >
                先着500名限定！Apple Watch用お買いものパンダバンド
                プレゼントキャンペーン
              </Heading>
              <CampaignRule1976 />
            </section>

            <section className={Utils['Mt-48']}>
              <Heading
                level="3"
                ratId="apple-watch-family-sharing_scroll-06_faq"
                ratEvent="appear"
              >
                よくあるご質問
              </Heading>
              <AccordionList
                text={
                  'キャンペーンに申し込みたいのですが、どのようにすればよいですか？'
                }
                isOpened={false}
                className={Utils['Mt-24']}
              >
                キャンペーン期間内にwebまたは店舗にて対象製品を購入の上、製品ご購入の翌月末までにApple
                Watch
                ファミリー共有をお申し込みいただくことで、キャンペーン条件を満たすことができます。
                <TxtCap as="p">
                  <TxtEmp02>
                    ※
                    景品の数には限りがございます。先着順で景品がなくなり次第終了とさせていただく場合があります。
                  </TxtEmp02>
                </TxtCap>
              </AccordionList>
              <AccordionList
                text={
                  '製品購入およびApple Watch ファミリー共有の申し込みができる対象店舗を教えてください。'
                }
                isOpened={false}
              >
                Apple Watch ファミリー共有は全店舗にてお申し込みが可能です。
                ただし、Apple
                Watchは一部の店舗では取り扱っておりませんので楽天モバイル公式HPの『
                <LinkNormal href="/shop/">ショップ（店舗）を探す</LinkNormal>
                』からご希望の店舗の『対応サービス・店舗条件』に「Apple
                Watch取扱い」と記載があることをご確認ください。
              </AccordionList>
              <AccordionList
                text={
                  '楽天モバイル公式 楽天市場店でApple Watchを購入した場合もノベルティ配布対象となりますか？'
                }
                isOpened={false}
              >
                楽天モバイル公式 楽天市場店でのご購入は対象外となります。 Apple
                Watch用お買いものパンダバンドプレゼントをご希望の場合、キャンペーン期間内に楽天モバイルショップ、または楽天モバイルオンラインにてApple
                Watchをご購入の上、Apple Watch
                ファミリー共有のお申し込みをお願いいたします。
                なお、景品は先着順でなくなり次第終了とさせていただきますのでお早目のご購入をご検討ください。
              </AccordionList>
              <AccordionList
                text={'Apple Watch用お買いものパンダバンドはいつ頃届きますか？'}
                isOpened={false}
              >
                キャンペーン条件達成から3ヶ月前後で発送いたします。
                <TxtCap as="p">
                  ※ 景品は先着順でなくなり次第終了とさせていただきます。
                </TxtCap>
                <p className={Utils['Mt-16']}>
                  例）
                  <br />
                  10月20日から11月30日までに条件達成：2024年1月末発送
                  <br />
                  12月1日から12月31日までに条件達成：2024年2月末発送
                  <br />
                  1月1日から1月31日までに条件達成：2024年3月末発送
                </p>
              </AccordionList>
              <AccordionList
                text={'先着500名以内に入っているか確認したい。'}
                isOpened={false}
              >
                先着順については景品の到着を持って確認いただいており、お問い合わせいただいてもお答えすることができません。
              </AccordionList>
            </section>
          </AccordionList>
        </SystemContainer>
      </SystemWrapper>

      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default FeeAppleWatchFamilySharing
