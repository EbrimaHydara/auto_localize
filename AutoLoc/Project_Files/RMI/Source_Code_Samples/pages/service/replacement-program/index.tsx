import type { NextPage } from 'next'
import React, { useCallback, useContext } from 'react'
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
import {
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtNormal,
  TxtSize,
} from '@components/atoms/Txt'
import {
  LinkIconAfter,
  LinkIconBefore,
  LinkNormal,
} from '@components/atoms/Link'
import {
  IconArrowDown,
  IconChevronRight,
  IconNewTabLine,
  IconPdf,
} from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { UlOnly } from '@components/atoms/List'
import { AccordionList } from '@components/atoms/AccordionList'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { FlowList } from '@components/atoms/Flow'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { ReplacementProgramIphone } from '@components/include/service/replacement-program/ReplacementProgramIphone'

const Col2Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
const Col2Grid = styled.div`
  display: grid;
  gap: 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
  }
`
const UlOnlyCenter = styled(UlOnly)`
  margin-inline: auto;
  width: fit-content;
`
const ImgGrid = styled.div`
  display: grid;
  gap: 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'img contents contents';
    /* 1fr 2fr とか areas 使わない手もあるけど この設定で書いてるのは逆にすることを考慮した実験 */
  }
  .img {
    text-align: center;
    ${mixins.mq.MinL} {
      text-align: left;
      grid-area: img;
    }
  }
  .contents {
    ${mixins.mq.MinL} {
      grid-area: contents;
    }
  }
`
const EntryBlock = styled.div`
  padding-block: 32px;
  background-color: ${props => props.theme.colors.pink5};
`
const CtaBtns = styled.div`
  display: grid;
  gap: 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: max(432px) max(432px);
    gap: 24px;
    place-content: center;
  }
  .btn {
    font-size: 16px;
    margin-inline: auto;
    padding: 13px 24px;
    ${mixins.mq.MinL} {
      display: grid;
      place-content: center;
    }
  }
  .subtxt {
    margin-block-end: 4px;
    display: block;
    font-size: ${props => props.theme.fonts.s};
  }
`
const Hero = styled(Heading)`
  text-align: center;
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.white} 0,
    ${props => props.theme.colors.white} 332px,
    ${props => props.theme.colors.primary} 332px,
    ${props => props.theme.colors.primary} 420px
  );
  ${mixins.mq.MinL} {
    height: 420px;
  }
  img {
    ${mixins.mq.MaxM} {
      width: 100vw;
    }
  }
`
const OtokuDesc = styled.div`
  display: grid;
  row-gap: 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: auto 415px;
    align-items: center;
    column-gap: 27px;
  }
  .text {
    ${mixins.mq.MaxM} {
      display: contents;
    }
  }
  .read {
    ${mixins.mq.MinL} {
      margin-top: 12px;
    }
  }
`
const OtokuChart = styled.div`
  padding-block: 16px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding-inline: 12px;
  }
`
const Nav = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
  }

  .link {
    width: 100%;
    padding: 16px 8px;
    padding-right: 36px;
    border: solid 1px ${props => props.theme.colors.monotone75};
    border-radius: 4px;
    text-align: center;
    color: ${props => props.theme.colors.monotone30};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }
`

const NavIconArrowDown = styled(IconArrowDown)`
  width: 1em;
  font-size: 20px;
`

const NewItemsChart = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  ${mixins.mq.MinL} {
    column-gap: 24px;
  }
`
const Products = styled.div`
  padding-block-start: 64px;
  padding-block-end: 32px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MinL} {
    padding-block-end: 64px;
  }
`
const FlowListWrap = styled.ol`
  counter-reset: count;
  > li {
    counter-increment: count;
  }
  .title {
    &::before {
      content: 'STEP' counters(count, '');
      font-size: ${props => props.theme.fonts.m};
      color: ${props => props.theme.colors.primary};
      display: block;
    }
  }
`

const ServiceReplacementprogram: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイル買い替え超トクプログラム（iPhone）'
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

  const outputAnchorNav = useCallback(
    (items: { anchor: string; name: string }[]) => (
      <Nav>
        {items.map(item => (
          <li key={item.anchor}>
            <LinkIconBefore
              href={`#${item.anchor}`}
              onClick={e => anchorCallback(e, item.anchor)}
              data-ratid={`service_replacement-program_${item.anchor}`}
              data-ratevent="click"
              data-ratparam="all"
              className="link"
            >
              <NavIconArrowDown />
              {item.name}
            </LinkIconBefore>
          </li>
        ))}
      </Nav>
    ),
    [],
  )

  const outputEntryBlock = useCallback(
    (props: {
      className?: string
      lid1: string
      lid2: string
      lid3: string
    }) => {
      return (
        <EntryBlock className={props.className}>
          <SystemContainer>
            <CtaBtns>
              <ButtonPrimaryLarge
                as="a"
                href={`/guide/application/?lid-r=${props.lid1}`}
                className="btn"
              >
                <span className="subtxt">＼製品のご購入もこちら／</span>
                新規／機種変更（MNP）お申し込み
              </ButtonPrimaryLarge>
              <ButtonRegularLarge
                as="a"
                href={`/shop/?l-id=${props.lid2}`}
                className="btn"
              >
                お近くのショップを探す
              </ButtonRegularLarge>
            </CtaBtns>
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <TxtSize size="m" className={Utils['Weight-bold']}>
                「楽天カード」をお持ちでない方は同時申し込みがおトク！
              </TxtSize>
              <p className={Utils['Mt-8']}>
                楽天カードなら分割払い手数料0円！お申し込みの当日から楽天モバイルの製品購入などに利用できます！
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                <TxtEmp02>
                  ※楽天モバイル買い替え超トクプログラムのお申し込みは「楽天カード」が必要です。
                </TxtEmp02>
              </TxtCap>
              <div className={Utils['Mt-16']}>
                <LinkIconAfter
                  href={`/guide/application/card-campaign/upgrade/?l-id=${props.lid3}`}
                >
                  楽天モバイルと楽天カードを同時に申し込む
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </div>
          </SystemContainer>
        </EntryBlock>
      )
    },
    [],
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイル買い替え超トクプログラムで対象のiPhoneを購入すると、本体代が最大半額分お支払い不要に。対象製品やプログラムの特長、分割払いの価格がご覧いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        {/* Hero */}
        <Hero level="1">
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/service/replacement-program/kv-sp-231222.png`}
              width="750"
              height="660"
            />
            <img
              src={`${assets}img/service/replacement-program/kv-pc-231222.png`}
              width="1032"
              height="420"
              alt="楽天モバイル買い替え超トクプログラムで最新iPhoneの本体代が最大半額分支払い不要 プランの申し込みがなくてもOK"
            />
          </picture>
        </Hero>
        {/* / Hero */}

        {/* read */}
        <SystemContainer className={Utils['Mt-8']}>
          <TxtCap as="p">
            <TxtEmp02>
              ※
              当社が回収する製品が当社指定の状態を満たさない場合、故障費用22,000円（不課税）お支払いが必要となる、または当社が回収できない場合があります。
              <LinkNormal href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program#anc05">
                詳細
              </LinkNormal>
              を必ずご確認ください。
              <br />※ 本プログラムは初期契約解除対象外となります。
            </TxtEmp02>
          </TxtCap>
        </SystemContainer>
        {/* / read */}

        {/* otoku */}
        <SystemContainer
          as="section"
          className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}
        >
          <OtokuDesc>
            <div className="text">
              <Heading level="2" className={Utils['Align-ccl']}>
                <TxtSize size="l">
                  「楽天モバイル買い替え
                  <br className={Utils['Disp-sp']} />
                  超トクプログラム」とは
                </TxtSize>
              </Heading>
              <p className="read">
                対象のiPhoneを本プログラム（48回払い）で購入し、25カ月目以降に当社が回収すると残りのお支払いが不要となり、おトクに最新の製品に乗り換えできるサービスです。
              </p>
            </div>
            <div className={Utils['Align-center']}>
              <img
                src={`${assets}img/service/replacement-program/img-replacement-desc.png`}
                width="415"
                height="152"
                alt=""
              />
            </div>
          </OtokuDesc>

          <section className={Utils['Mt-40']}>
            <OtokuChart>
              <Heading level="3" className={Utils['Align-center']}>
                例えばiPhone製品が
                <br className={Utils['Disp-tb-sp']} />
                こんなにおトク！
              </Heading>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/service/replacement-program/img-otoku-sp-240221.png`}
                    width="100%"
                  />
                  <img
                    src={`${assets}img/service/replacement-program/img-otoku-pc-240221.png`}
                    width="1000"
                    height="234"
                    alt=""
                  />
                </picture>
              </div>
            </OtokuChart>

            <TxtCap as="p" className={Utils['Mt-16']}>
              ※1
              現金販売価格と割賦販売価格（総額）は製品の支払い総額と同額。支払回数48回、支払期間48カ月、実質年率0％。機種変更の際には事務手数料3,300円が必要。
            </TxtCap>
          </section>
        </SystemContainer>
        {/* / otoku */}

        {/* nav */}
        <SystemContainer
          as="nav"
          className={`${Utils['Mt-32']} ${Utils['Mt-pc-40']}`}
        >
          {outputAnchorNav([
            {
              anchor: 'feature',
              name: 'サービス概要',
            },
            {
              anchor: 'item',
              name: '対象製品',
            },
            {
              anchor: 'flow',
              name: 'ご利用の流れ',
            },
            {
              anchor: 'conditions',
              name: 'ご利用条件',
            },
          ])}
        </SystemContainer>
        {/* /nav */}

        {/* feature */}
        <SystemContainer id="feature" as="section" className={Utils['Mt-64']}>
          <Heading
            level="2"
            className={Utils['Align-center']}
            ratId="service_replacement-program_scroll-01_feature"
            ratEvent="appear"
          >
            <TxtNormal className={Utils['Weight-normal']}>
              乗り換えの方も機種変更の方も申し込める
            </TxtNormal>
            <br />
            毎月の負担を少なく、
            <br className={Utils['Disp-tb-sp']} />
            おトクに最新の製品へ
          </Heading>

          <NewItemsChart className={Utils['Mt-24']}>
            <div>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/service/replacement-program/img-point1-sp.png`}
                  width={theme.max.m}
                />
                <img
                  src={`${assets}img/service/replacement-program/img-point1-pc.png`}
                  width="504"
                  height="477"
                  alt="POINT 1 毎月の負担を軽減 48回払いだから月々の支払いを少なくできる"
                  loading="lazy"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/service/replacement-program/img-point2-sp-231110.png`}
                  width={theme.max.m}
                />
                <img
                  src={`${assets}img/service/replacement-program/img-point2-pc-231110.png`}
                  width="504"
                  height="477"
                  alt="POINT 2 最大半額分の支払いが不要 24回のお支払い完了以降に製品を当社が回収すると、残りのお支払いは不要"
                  loading="lazy"
                />
              </picture>
            </div>
          </NewItemsChart>

          <section className={Utils['Mt-40']}>
            <Heading level="3" className={Utils['Align-center']}>
              お支払いイメージ
            </Heading>
            <section className={Utils['Mt-16']}>
              <Heading level="4" className={Utils['Align-center']}>
                たとえば、iPhone 15 128GBを
                <TxtEmp02>買い替え超トクプログラム</TxtEmp02>で購入した場合
              </Heading>

              <p className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
                月々の支払分は2,745円。25カ月目に製品を当社が回収することで、65,920円分のお支払いが不要で、最新の製品に機種変更ができます。
              </p>

              <div className={Utils['Mt-24']}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/service/replacement-program/img-pay-sp-240221.png`}
                    width={theme.max.m}
                  />
                  <img
                    src={`${assets}img/service/replacement-program/img-pay-pc-240221.png`}
                    width="1032"
                    height="406"
                    alt="お支払いイメージ"
                    loading="lazy"
                  />
                </picture>
              </div>

              <TxtCap as="ul" className={Utils['Mt-8']}>
                <li>
                  ※ 上記の参考例はiPhone 15
                  128GBの場合：現金販売価格および割賦販売価格（総額）131,800円、頭金0円、支払回数48回、支払期間48カ月、実質年率0％。本プログラム対象製品への機種変更かつ、本プログラムで購入した製品を当社が回収した場合です。2024年2月21日時点の価格です。
                </li>
                <li className={Utils['Mt-8']}>
                  ※
                  お使いいただいた製品を当社が回収する際は、事務手数料3,300円がかかります。
                </li>
                <li className={Utils['Mt-8']}>
                  ※
                  当社が回収する製品が当社指定の状態を満たさない場合、別途お支払いが必要となる、または当社が回収できない場合があります。
                  <LinkNormal href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program#anc05">
                    詳細
                  </LinkNormal>
                  を必ずご確認ください。各種保証サービスに加入されている方は保証を利用することで負担額が抑えられる場合がございます。以下は保証の一例です。
                  <br />
                  ＜iPhoneをご利用の方＞
                  <LinkNormal href="/service/iphone/applecare-icloud/?l-id=service_replacement-program_service_iphone_applecare-icloud">
                    故障紛失保証 with AppleCare Services & iCloud+
                  </LinkNormal>
                  ご加入の場合、画面修理は3,700円、画面以外は12,900円の負担。
                </li>
                <li className={Utils['Mt-8']}>
                  ※
                  機種変更の可能期間は、25カ月目以降、47カ月目までです。機種変更が可能な製品は、本プログラム対象製品に限ります。
                </li>
                <li className={Utils['Mt-8']}>
                  ※
                  機種変更後の新製品が予約申し込みの場合、お客様が新製品を受け取る月までは旧製品の請求が発生いたします。
                </li>
              </TxtCap>

              <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <ButtonRegularLarge
                  as="a"
                  href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program_1"
                >
                  お申し込み方法・各種お手続き方法を見る
                </ButtonRegularLarge>
              </div>
            </section>
          </section>
        </SystemContainer>
        {/* / feature */}

        {/* products */}
        <Products as="section" id="item" className={Utils['Mt-64']}>
          <SystemContainer>
            <Heading
              level="2"
              className={Utils['Align-center']}
              ratId="service_replacement-program_scroll-02_item"
              ratEvent="appear"
            >
              楽天モバイル買い替え超トクプログラム対象製品
            </Heading>
            <ReplacementProgramIphone className={Utils['Mt-32']} />
          </SystemContainer>
        </Products>
        {/* / products */}

        {outputEntryBlock({
          lid1: 'service_replacement-program_guide_application_1',
          lid2: 'service_replacement-program_shop_1',
          lid3: 'service_replacement-program_guide_application_card-campaign_upgrade_1',
        })}

        {/* flow */}
        <SystemContainer id="flow" as="section" className={Utils['Mt-64']}>
          <Heading
            level="2"
            className={Utils['Align-center']}
            ratId="service_replacement-program_scroll-03_flow"
            ratEvent="appear"
          >
            ご利用の流れ
          </Heading>

          <FlowListWrap className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}>
            <FlowList>
              <div className={Utils['Align-center']}>
                <Heading level="3" className="title">
                  製品を選んでお申し込み
                </Heading>
              </div>
              <ImgGrid className={Utils['Mt-24']}>
                <div className="img">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/replacement-program/img-step1-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${assets}img/service/replacement-program/img-step1-pc.png`}
                      width="304"
                      height="101"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="contents">
                  <p>
                    お申し込み画面から、楽天モバイル買い替え超トクプログラムにてお申し込みください。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※
                    楽天モバイルへのお申し込みは必須ではありません。製品のみのご購入でも本プログラムをご利用いただけます。
                  </TxtCap>
                  <div className={Utils['Mt-16']}>
                    <ButtonRegular
                      as="a"
                      href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program#anc01"
                    >
                      お申し込み方法を見る
                    </ButtonRegular>
                  </div>
                </div>
              </ImgGrid>
              <Col2Grid className={Utils['Mt-24']}>
                <InfoboxBorder as="section">
                  <Heading level="4" className={Utils['Align-center']}>
                    「楽天カード」をお持ちでない方はこちらから
                  </Heading>
                  <TxtCap
                    as="p"
                    className={`${Utils['Mt-16']} ${Utils['Align-ccl']}`}
                  >
                    <TxtEmp02>
                      ※楽天モバイル買い替え超トクプログラムのお申し込みは「楽天カード」が必要です。
                    </TxtEmp02>
                  </TxtCap>
                  <UlOnlyCenter className={Utils['Mt-16']}>
                    <li>年会費永年無料</li>
                    <li>ポイントがザクザクたまる</li>
                    <li>あんしんのセキュリティ</li>
                  </UlOnlyCenter>
                  <div className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
                    <LinkIconAfter href="/guide/application/card-campaign/upgrade/?l-id=service_replacement-program_guide_application_card-campaign_upgrade_2">
                      楽天モバイルと楽天カードを同時に申し込む
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </InfoboxBorder>
                <InfoboxBorder as="section">
                  <Heading level="4" className={Utils['Align-center']}>
                    万が一の盗難・紛失の場合に備えて
                  </Heading>
                  <p className={Utils['Mt-16']}>
                    盗難に遭われたり、紛失してしまった場合、故障紛失保証 with
                    AppleCare Services &
                    iCloud+にご加入なら、新品または新品同様の同一機種に交換可能です。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-16']}>
                    ※
                    未加入の場合は、製品の残債を全額お支払いのうえ、解約のお手続きをお願いいたします。
                  </TxtCap>
                  <TxtCap as="p">
                    ※
                    各種保証サービスに加入されている方は保証を利用することで負担額が抑えられる場合がございます。
                  </TxtCap>
                  <div className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
                    <LinkIconAfter href="/service/iphone/applecare-icloud/?l-id=service_replacement-program_service_iphone_applecare-icloud">
                      故障紛失保証 with AppleCare Services & iCloud+
                      <br className={Utils['Disp-pc']} />
                      の詳細を見る
                      <IconChevronRight />
                    </LinkIconAfter>
                  </div>
                </InfoboxBorder>
              </Col2Grid>
            </FlowList>
            <FlowList>
              <div className={Utils['Align-center']}>
                <Heading level="3" className="title">
                  製品を25カ月以上つかう
                </Heading>
              </div>
              <ImgGrid className={Utils['Mt-24']}>
                <div className="img">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/replacement-program/img-step2-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${assets}img/service/replacement-program/img-step2-pc.png`}
                      width="304"
                      height="142"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="contents">
                  <p>
                    新しい製品への機種変更は25カ月目から行っていただけます。
                  </p>
                </div>
              </ImgGrid>
            </FlowList>
            <FlowList>
              <div className={Utils['Align-center']}>
                <Heading level="3" className="title">
                  新しい製品に機種変更する
                </Heading>
              </div>
              <ImgGrid className={Utils['Mt-24']}>
                <div className="img">
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/replacement-program/img-step3-sp.png`}
                      width="100%"
                    />
                    <img
                      src={`${assets}img/service/replacement-program/img-step3-pc.png`}
                      width="304"
                      height="153"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="contents">
                  <p>
                    25カ月目以降、お使いになった製品を当社が回収することで、残債ゼロで機種変更ができます。（STEP1に戻ります）
                    <br />
                    回収した製品に破損や変形などが見られる場合は、故障費用が発生することがあります。
                    <br />
                    返送する旧製品は新製品が届いた箱に同梱されている伝票で返送ください。
                  </p>
                  <Col2Flex className={Utils['Mt-16']}>
                    <ButtonRegular
                      as="a"
                      href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program#anc02"
                    >
                      機種変更方法を見る
                    </ButtonRegular>
                    <ButtonRegular
                      as="a"
                      href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program#anc05"
                    >
                      返却時の注意事項を見る
                    </ButtonRegular>
                  </Col2Flex>
                </div>
              </ImgGrid>
            </FlowList>
          </FlowListWrap>
        </SystemContainer>
        {/* / flow */}

        {outputEntryBlock({
          className: Utils['Mt-48'],
          lid1: 'service_replacement-program_guide_application_2',
          lid2: 'service_replacement-program_shop_2',
          lid3: 'service_replacement-program_guide_application_card-campaign_upgrade_3',
        })}

        {/* conditions */}
        <SystemContainer
          id="conditions"
          as="section"
          className={Utils['Mt-64']}
        >
          <Heading
            level="2"
            className={Utils['Align-center']}
            ratId="service_replacement-program_scroll-04_conditions"
            ratEvent="appear"
          >
            ご利用条件
          </Heading>
          <TxtCap
            as="p"
            className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
          >
            <TxtEmp02>
              ※本プログラムは、楽天モバイルのプラン（Rakuten最強プラン）のお申し込みがなくてもご利用いただけます。
            </TxtEmp02>
          </TxtCap>

          <DescriptionListDefault className={Utils['Mt-24']}>
            <div>
              <dt>対象年齢</dt>
              <dd>
                <p>18歳以上</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  本プログラムのお申し込みは、18歳以上のお客様が対象です。18歳未満のお客様からのお申し込みは受け付けておりません。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>楽天回線のお申し込み</dt>
              <dd>
                <p>不要</p>
              </dd>
            </div>
            <div>
              <dt>お支払い方法</dt>
              <dd>
                <p>楽天カードのみ</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  本プログラムのお支払いは、お申し込み時、ご利用中ともに、ご契約者本人の楽天カードのみご利用いただけます。楽天カード以外のカード、およびご契約者以外の方ご名義のカードはご利用いただけませんので、ご注意ください。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>お支払い内容</dt>
              <dd>
                <p>製品代金を48回払いでお支払い</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  本プログラムをお申し込みいただいた場合、当社または当社が指定する第三者との間で割賦販売契約または個別信用購入あっせん契約を締結し、48回の分割払いの方法によって対象製品を購入する必要があります。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  2021年7月29日8:59以前にお申し込みいただいたお客様は、月々のお支払いにプログラム利用料（1円／月）が含まれます。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ 分割払いについては
                  <LinkIconAfter
                    href="https://www.rakuten-card.co.jp/adjustment/installment/"
                    target="_blank"
                  >
                    こちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ ご利用可能枠／1万円～300万円楽天カード会員様は
                  <LinkIconAfter
                    href="https://www.rakuten-card.co.jp/e-navi/members/credit-limit/availability/index.xhtml"
                    target="_blank"
                  >
                    こちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  からご確認いただけます。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ カード会員規約は
                  <LinkIconAfter
                    href="https://www.rakuten-card.co.jp/agreement/card_member/"
                    target="_blank"
                  >
                    こちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>保証（故障／盗難・紛失）</dt>
              <dd>
                <p>
                  <LinkNormal href="/service/iphone/applecare-icloud/?l-id=service_replacement-program_service_iphone_applecare-icloud">
                    故障紛失保証 with AppleCare Services & iCloud+
                  </LinkNormal>
                  へのご加入が可能
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  楽天モバイル買い替え超トクプログラムへのお申し込みの際、同時加入いただけます。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ 故障紛失保証 with AppleCare Services &
                  iCloud+にご加入いただいた場合、ご利用中の製品故障や破損時、または盗難・紛失時に修理や交換サービスをお受けいただくことが可能です。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ 故障紛失保証 with AppleCare Services &
                  iCloud+に未加入の場合、当社が回収した製品が万が一故障や破損している際は故障費用22,000円（不課税）のお支払いが必要になります。盗難・紛失の際は、楽天モバイル買い替え超トクプログラムの解約のお手続きが必要になり、残債を一括でお支払いいただくことになります。ぜひご加入をおすすめします。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  各種保証サービスに加入されている方は保証を利用することで負担額が抑えられる場合がございます。以下は保証の一例です。
                  <br />
                  <LinkNormal href="/service/iphone/applecare-icloud/?l-id=service_replacement-program_service_iphone_applecare-icloud">
                    故障紛失保証 with AppleCare Services & iCloud+
                  </LinkNormal>
                  ご加入の場合、画面修理は3,700円の負担。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>機種変更の可能期間</dt>
              <dd>
                <p>25カ月目以降〜47カ月目まで</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  機種変更や解約をせずに48カ月経過した場合、自動的に満了解約となります。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  機種変更の際には、事務手数料3,300円をご請求させていただきます。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>当社の製品回収による解約可能期間</dt>
              <dd>
                <p>25カ月目以降〜47カ月目まで</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  機種変更や解約をせずに48カ月経過した場合、自動的に満了解約となります。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  25カ月未満の解約の場合、残債の一括支払いが必要になります。製品の回収はありません。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※
                  製品を回収する際は、事務手数料3,300円をご請求させていただきます。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>買い取りによる解約可能期間</dt>
              <dd>
                <p>加入時以降〜47カ月目まで</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ 残債を一括でお支払いいただきます。製品の回収はありません。
                </TxtCap>
              </dd>
            </div>
            <div>
              <dt>ご契約上限台数</dt>
              <dd>
                <p>以下の条件において、お1人様2台までお申し込みが可能です。</p>
                <UlOnly className={Utils['Mt-16']}>
                  <li>条件1：ご契約上限台数が2台まで</li>
                  <li>条件2：年間通算での新規申し込み台数が2台まで</li>
                </UlOnly>
                <p className={Utils['Mt-16']}>
                  iPhone本体は、
                  <TxtEmp02>
                    対象機種ごとにおひとり様あたりの購入可能台数に制限
                  </TxtEmp02>
                  があります。購入可能台数は、楽天モバイル公式サイト・楽天モバイル公式楽天市場店・楽天モバイルショップすべてでの購入台数を指します。購入手続き後、当社で審査を実施し、審査の完了をもって購入契約成立となります。ただし、当社所定の条件に該当する場合、注文キャンセルとなる可能性がございます。キャンセルの際は、登録メールアドレス宛にご連絡します。
                </p>
                <TxtEmp01 as="p">
                  - 対象機種①（おひとり様1点限り購入可能）
                </TxtEmp01>
                <p className={Utils['Ml-8']}>
                  iPhone 15 Pro Max, iPhone 15 Pro
                </p>
                <TxtEmp01 as="p">
                  - 対象機種②（おひとり様2点まで購入可能）
                </TxtEmp01>
                <p className={Utils['Ml-8']}>
                  iPhone 15 Plus, iPhone 15, iPhone 14 Plus, iPhone 14, iPhone
                  13, iPhone SE（第3世代）, 販売終了製品 (iPhone 14 Pro Max,
                  iPhone 14 Pro, iPhone 13 Pro Max, iPhone 13 Pro, iPhone 13
                  mini, iPhone 12), 楽天モバイル公式
                  楽天市場店における訳あり品（外装不良）
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※対象製品①を1点、対象製品②を2点、合計3点のご購入は可能。
                </TxtCap>
              </dd>
            </div>
          </DescriptionListDefault>
        </SystemContainer>
        {/* / conditions */}

        {/* faq */}
        <SystemContainer as="section" className={Utils['Mt-64']}>
          <Heading level="2" className={Utils['Align-center']}>
            よくあるご質問
          </Heading>
          <p className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}>
            楽天モバイル買い替え超トクプログラムに関してご不明点がありましたら、こちらをご覧のうえ、お役立てください。
          </p>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <ButtonRegular
              as="a"
              href="/faq/detail/10000213/?l-id=service_replacement-program_faq_detail_10000213"
            >
              よくあるご質問一覧を見る
            </ButtonRegular>
          </div>
        </SystemContainer>
        {/* / faq */}

        {/* campaign */}
        <SystemContainer
          as="section"
          className={`${Utils['Mt-64']} ${Utils['Pb-24']}`}
        >
          <div className={Utils['Align-center']}>
            <BnrCampaignRecommend />
          </div>
        </SystemContainer>
        {/* / campaign */}

        {/* note */}
        <SystemContainer id="note" as="section" className={Utils['Mt-64']}>
          <Heading
            level="2"
            className={Utils['Align-center']}
            ratId="service_replacement-program_scroll-05_note"
            ratEvent="appear"
          >
            注意事項
          </Heading>

          <div className={Utils['Mt-16']}>
            <AccordionList text={'新規お申し込み'} isOpened={false}>
              <UlOnly>
                <li>
                  本プログラムのお支払いは、お申し込み時、ご利用中ともに、ご契約者本人の楽天カードのみご利用いただけます。楽天カード以外のカード、およびご契約者以外の方ご名義のカードはご利用いただけませんので、ご注意ください。
                </li>
                <li>
                  本プログラムのお申し込みは、18歳以上のお客様が対象です。18歳未満のお客様からのお申し込みは受け付けておりません。
                </li>
                <li>
                  本プログラムにてお申し込みいただける対象製品は、当社指定の製品となり、お申し込み時期により異なります。詳細は、
                  <LinkNormal
                    href="#item"
                    onClick={e => anchorCallback(e, 'item')}
                  >
                    対象製品一覧
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  本プログラムをお申し込みいただいた場合、当社または当社が指定する第三者との間で割賦販売契約または個別信用購入あっせん契約を締結し、48回の分割払いの方法によって対象製品を購入する必要があります。
                </li>
                <li>
                  本プログラムは、お1人様2台までお申し込みが可能です。本プログラム申込時点において、本プログラムの契約が2台以上ないこと、および、本プログラム申込時点から過去1年以内に本プログラムの新規契約（本申し込み契約含め）を2回以上行っていないことが条件となります。
                </li>
                <li>
                  本プログラムは初期契約解除対象外となります。本プログラムはお申し込み後、直ちに所定の審査手続き等を開始するためお申し込み後のキャンセルはできません。例え未開封であっても返品・返金受付はできかねますのでご注意ください。
                </li>
                <li>
                  本プログラムの月途中による加入、解約、終了その他いかなる理由であっても、製品代金の日割り計算は行わず、契約者は、月額割賦金満額をお支払いいただく必要があります。
                </li>
                <li>
                  楽天モバイル公式Web（楽天モバイルショップ、楽天市場店は対象外）および各製品のお取り扱いのある楽天モバイルショップ（一部家電量販店を除く）にてお申し込みいただけます。Webの
                  <LinkNormal href="https://onboarding.mobile.rakuten.co.jp/">
                    お申し込み画面
                  </LinkNormal>
                  または、
                  <LinkNormal href="/shop/">ショップ（店舗）ページ</LinkNormal>
                  からお近くの各製品取り扱いショップを検索のうえ、ご来店ください。
                </li>
                <li>
                  本プログラムは、Rakuten最強プランのご利用に関わらず、お申し込みが可能です。また、Rakuten最強プランをご契約いただき、その後ご解約いただいた場合でも、楽天モバイル買い替え超トクプログラムのお支払いは継続します。
                </li>
                <li>
                  対象製品の機種変更、または本プログラムの解約が可能なのは47カ月目までとなります。48カ月目のお支払いをもちまして、ご契約は自動的に満了解約となり、以後月額料金のお支払いの必要はありません。新しい製品をご希望のお客様は、新規に製品ご購入の契約をお願いいたします。
                </li>
                <li>
                  本プログラムにてご契約された製品を、メーカー保証修理をされる場合は、機種変更時にメーカー修理の保証書が必要となる場合があります。メーカーより保証書を交付された場合は、お手元に保管をお願いいたします。
                </li>
                <li>
                  以下の条件に当てはまる場合は、お申し込み、機種変更をお断りさせていただく場合があります。
                  <UlOnly className={Utils['Mt-16']}>
                    <li>
                      当社または当社の指定する第三者による所定の与信審査で非承認となったとき
                    </li>
                    <li>
                      当社の提供するサービスなどの料金のお支払いをお支払期限までに行わなかった場合
                    </li>
                    <li>当社が定める規約などに違反した場合</li>
                    <li>その他、会員として不適格である場合</li>
                  </UlOnly>
                </li>
                <li>
                  当社と配送会社間のデータ連携の関係により、製品を受け取った月（利用開始月）の月額料金のご請求が2カ月目にずれる場合がございます。その場合、2カ月目に1カ月目と2カ月目の月額料金を合算してご請求させていただきます。あらかじめご了承ください。（例：1月に製品を受け取ったが、配送会社からの配送データが2月に当社へ連携された場合、1月と2月の月額料金を合算して、2月ご利用分としてご請求させていただきます。）
                </li>
              </UlOnly>
            </AccordionList>
            <AccordionList text={'機種変更'} isOpened={false}>
              <UlOnly>
                <li>
                  本プログラムをご利用中のお客様は、対象製品のお支払期間中であっても、利用開始（または直近の機種変更）から25カ月目以降にご利用中の対象製品（以下「旧製品」といいます）を当社にご返却いただくことで、新しい対象製品（以下「新製品」といいます）への機種変更が可能です。この場合、旧製品の残りの割賦金（以下「残債」といいます。）のお支払いは不要となります。
                  <br />
                  <TxtCap>
                    ※
                    「電気通信事業法第27条の3等の運用に関するガイドライン」に則り、楽天モバイル買い替え超トクプログラム対象機種の買取等予想価格を公表しております。詳細は
                    <LinkIconAfter
                      href="/assets/pdf/service/replacement-program/replacement-program_purchase_price.pdf?240221"
                      target="_brank"
                    >
                      こちら
                      <IconPdf />
                    </LinkIconAfter>
                    をご確認ください。
                  </TxtCap>
                </li>
                <li>
                  25カ月目以降、新しい製品へ機種変更しない場合でも、お使いいただいた製品を当社が回収することで、残りのお支払いは不要となります。
                </li>
                <li>
                  機種変更の際には、当社または当社が指定する第三者との間で割賦販売契約または個別信用購入あっせん契約を締結し、48回の分割払いの方法によって対象製品を購入する必要があります。割賦金のお支払いはご契約者本人の楽天カードによるものとします。
                </li>
                <li>
                  機種変更の際には、当社指定の本人確認手続きが必要となります。
                </li>
                <li>
                  機種変更のお申し込み後は、取り消し（キャンセル）はできません。
                </li>
                <li>
                  機種変更の際には、事務手数料3,300円をご請求させていただきます。
                </li>
                <li>
                  対象製品の割賦金は、新製品受領月より新製品の割賦金に切り替わります。旧製品の割賦金は新製品受領月以降はご請求いたしません。
                  <br />
                  ただし、当社と配送会社間のデータ連携の関係により、新製品受領月に旧製品の割賦金をご請求させていただく場合がございます。その場合、新製品受領月にお支払いいただいた旧製品の割賦金は、翌月以降に返金させていただきます。また、新製品の割賦金は、新製品受領月の翌月に新製品受領月と新製品受領月翌月分を合算し、ご請求させていただきます。
                  <p className={`${Utils['Mt-16']} ${Utils['Ml-16']}`}>
                    例：1月に新製品を受け取ったが、配送会社からの配送データが2月に当社へ連携された場合、1月利用分は旧製品の割賦金をご請求させていただき、2月利用分のご請求にて旧製品の割賦金を返金させていただきます。新製品の割賦金は1月と2月の割賦金を合算して、2月ご利用分としてご請求させていただきます。
                  </p>
                </li>
                <li>
                  機種変更に際し、旧製品は新製品受領日より20日以内にご返却をお願いいたします。
                </li>
                <li>
                  機種変更に際し、本プログラム契約時の住所に変更がある場合は、必ず
                  <LinkNormal href="/guide/change-address/">
                    契約住所の確認・変更方法
                  </LinkNormal>
                  をご確認いただき、事前に住所を更新してください。
                </li>
                <li>
                  my
                  楽天モバイル（アプリ／Web）にて機種変更をお申し込みいただいた場合、新製品お受け取り時の箱に旧製品を梱包し、同梱されている伝票で当社指定住所までご返送をお願いいたします。
                </li>
                <li>
                  楽天モバイルショップにて機種変更をお申し込みいただいた場合、返送用キットをご自宅へ送付いたします。到着した返送用キットに旧製品を梱包し、同梱されている伝票で当社指定住所までご返送をお願いいたします。
                </li>
                <li>
                  当社指定の返送用キットと同梱されている伝票をご利用ください。その他の返送方法は受け付けておりませんので、あらかじめご了承ください。なお、楽天本社では製品の返送受付は行っておりませんので、ご注意ください。
                </li>
                <li>
                  新製品送付時の箱や返送用キットの破損や紛失された場合は以下より再送を依頼いただけます。
                  <br />
                  TEL 050-5434-4653 ／ 受付時間 9:00～17:00（年中無休）
                </li>
                <li>
                  旧製品に記録されているデータの移行および消去は、契約者ご自身の責任で行ってください。当社は、契約者から返送された旧製品内に記録されているデータについて一切責任を負わないものとします。
                </li>
                <li>
                  2台以上の製品を同梱しないようお願いします。なお旧製品と一緒に旧製品以外の物品が含まれていた場合、当社は当該物品を当社の裁量により全て破棄または処分します。返却は致しませんので、旧製品以外の物品を同梱されないようご注意ください。
                </li>
                <li>製品査定は弊社に製品到着後、7日程度かかります。</li>
                <li>
                  旧製品をご返却いただけない場合、当社より書面、電話、SMS、その他当社指定の方法にて契約者へ通知を行います。入れ違いにより通知が届く場合があります。
                </li>
                <li>
                  当社が回収する旧製品が当社指定の状態を満たさない場合、当社指定の故障費用をご請求させていただきます。その場合は、査定完了後の翌週以降にメールにてお知らせいたします。故障費用が発生しない場合は、メールでのお知らせはございません。詳細は、
                  <LinkNormal href="/guide/replacement-program/index.html#anc05">
                    故障費用が必要になる場合（保証に未加入の場合）
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  旧製品をご返却いただけない場合、また当社が回収した旧製品が当社指定の状態を満たさない場合、残債をご請求させていただきます。詳細は、
                  <LinkNormal href="/guide/replacement-program/index.html#anc05">
                    残債の全額お支払いが必要になる場合
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  買い替え超トクプログラム加入中の製品は、スマホ下取りサービスの対象外となります。
                  スマホ下取りサービスへのお申込みはできませんのでご注意ください。
                </li>
              </UlOnly>
            </AccordionList>
            <AccordionList text={'解約'} isOpened={false}>
              <UlOnly>
                <li>
                  本プログラムをご利用中のお客様は、対象製品のお支払い期間中であっても、利用開始（または直近の機種変更）から25カ月目以降に旧製品を当社にご返却いただくことで、解約が可能です。この場合、残債のお支払いは不要となります。解約のお手続きについては
                  <LinkNormal href="/guide/replacement-program/index.html#anc03">
                    解約方法
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  上記の方法以外にも、残債を一括にてお支払いいただくことで本プログラムを解約し、旧製品を継続利用いただくことも可能です。
                </li>
                <li>
                  旧製品返却による解約の際には、当社指定の本人確認手続きが必要となります。
                </li>
                <li>解約申請後は、取り消し（キャンセル）はできません。</li>
                <li>
                  残債一括弁済による解約の場合を除き、解約の際は、事務手数料3,300円をご請求させていただきます。
                </li>
                <li>本プログラムは、解約申請月末日までご利用いただけます。</li>
                <li>
                  解約申請日に関わらず、製品代金の日割り計算は行わず、月額割賦金満額をご請求いたします。
                </li>
                <li>
                  本プログラムの終了に際し、旧製品は、解約申請月の翌月15日までにご返却をお願いいたします。
                </li>
                <li>
                  本プログラムの終了に際し、契約時の住所に変更がある場合は、必ず
                  <LinkNormal href="/guide/change-address/">
                    契約住所の確認・変更方法
                  </LinkNormal>
                  をご確認いただき、事前に住所を更新してください
                </li>
                <li>
                  本プログラムの終了は、my
                  楽天モバイル（アプリ／Web）より申請可能です。返送用キットをご自宅へ送付いたしますので、そちらに旧製品を梱包し、当社指定住所までご返送をお願いいたします。
                </li>
                <li>
                  当社指定の返送用キットと同梱されている伝票をご利用ください。その他の返送方法は受け付けておりませんので、あらかじめご了承ください。なお、楽天本社では製品の返送受付は行っておりませんので、ご注意ください。
                </li>
                <li>
                  新製品送付時の箱や返送用キットの破損や紛失された場合は以下より再送を依頼いただけます。
                  <br />
                  TEL 050-5434-4653 ／ 受付時間 9:00～17:00（年中無休）
                </li>
                <li>
                  旧製品に記録されているデータの移行および消去は、契約者ご自身の責任で行ってください。当社は、契約者から返送された旧製品内に記録されているデータについて一切責任を負わないものとします。
                </li>
                <li>
                  2台以上の製品を同梱しないようお願いします。なお旧製品と一緒に旧製品以外の物品が含まれていた場合、当社は当該物品を当社の裁量により全て破棄または処分します。旧製品と必要書類以外の物品を同梱されないようご注意ください。
                </li>
                <li>製品査定は弊社に製品到着後、7日程度かかります。</li>
                <li>
                  旧製品をご返却いただけない場合、当社より書面、電話、SMS、その他当社指定の方法にて契約者へ通知を行います。入れ違いにより通知が届く場合があります。
                </li>
                <li>
                  当社が回収する旧製品が当社指定の状態を満たさない場合、当社指定の故障費用をご請求させていただきます。その場合は、査定完了後の翌週以降にメールにてお知らせいたします。故障費用が発生しない場合は、メールでのお知らせはございません。詳細は、
                  <LinkNormal href="/guide/replacement-program/index.html#anc05">
                    故障費用が必要になる場合（保証に未加入の場合）
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  旧製品をご返却いただけない場合もしくは盗難紛失の場合、または当社が回収した製品が当社指定の状態を満たさない場合、残債をご請求させていただきます。詳細は、
                  <LinkNormal href="/guide/replacement-program/index.html#anc05">
                    残債の全額お支払いが必要になる場合
                  </LinkNormal>
                  をご確認ください。
                </li>
                <li>
                  買い替え超トクプログラム加入中の製品は、スマホ下取りサービスの対象外となります。
                  スマホ下取りサービスへのお申込みはできませんのでご注意ください。
                </li>
              </UlOnly>
            </AccordionList>
            <AccordionList
              text={'製品・対象キャンペーンについて'}
              isOpened={false}
              id="product-campaign"
            >
              <TxtCap as="ul">
                <li>
                  ※1
                  48回払い利用は「楽天モバイル買い替え超トクプラグラム」のこと。割賦金算出時の端数分について、毎月の月額料金に含めて、あるいは最終月の月額料金に含めて、請求させていただきます。本プログラムの仕様上、支払回数を48回と記載していますが、25カ月目以降、新しい製品への機種変更及び解約が可能となり、当社指定条件を満たし製品をご返却いただいた場合、残りのお支払いは不要です。機種変更または製品のご返却による本プログラムの終了の際は、事務手数料3,300円をご請求させていただきます。おかえしいただいた旧製品が当社指定状態基準を満たさない場合、当社指定の故障費用を請求、または当社が回収できない場合がございます。
                </li>
                <li className={Utils['Mt-8']}>
                  ※キャンペーンによってポイントの付与時期・有効期間が異なり、分割して付与されるポイントもございます。必ずキャンペーンルールをご確認ください。
                </li>
                <li className={Utils['Mt-8']}>
                  ※取得した楽天ポイントは楽天モバイルや楽天の各サービスでご利用できます。詳しくは
                  <LinkNormal href="/guide/point/">
                    楽天ポイントのページ
                  </LinkNormal>
                  をご覧ください。
                </li>
                <li className={Utils['Mt-8']}>※5Gは一部エリアのみ。</li>
              </TxtCap>
            </AccordionList>
          </div>

          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <ButtonRegular
              as="a"
              href="/guide/replacement-program/?l-id=service_replacement-program_guide_replacement-program_2"
            >
              お申し込み方法・各種お手続き方法を見る
            </ButtonRegular>
          </div>
        </SystemContainer>
        {/* / note */}

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default ServiceReplacementprogram
