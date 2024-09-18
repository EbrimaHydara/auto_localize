import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { LabelList } from '@components/atoms/Label'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Tab } from '@components/atoms/Tab'
import {
  ButtonRegularLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { IconChevronRight, IconArrowDown } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { CampaignRule2172 } from '@components/include/campaign/rules/2023/CampaignRule2172'
import { fontRakutenSans } from '@styles/fonts'

const CpnLabelWrap = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0 0;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 0;
  }
`
const KvHeading = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  h1 {
    min-width: 1440px;
    ${mixins.mq.MaxCustom('1032px')} {
      min-width: 140vw;
    }
    ${mixins.mq.MaxM} {
      min-width: 100%;
    }
  }
`
const AnchorLink = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 16px 24px;
  justify-content: center;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`
const SectionCpnFlow = styled.section`
  margin-top: 32px;
  padding: 48px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const MediaGridCustom = styled(MediaGrid)`
  padding: 24px;
  align-items: center;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`
const CpnFlowBox = styled.div`
  position: relative;
  margin-top: 24px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
`
const HeadingCustom = styled(Heading)`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  display: flex;
  align-items: center;
  gap: 16px;
  ${mixins.mq.MaxM} {
    font-size: 16px;
    padding: 16px;
  }
  > span {
    color: ${props => props.theme.colors.primary};
    font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
    font-weight: bold;
  }
`
const CpnFlowLastBox = styled.div`
  margin-top: 50px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -32px;
    width: 70px;
    height: 18px;
    background-color: ${props => props.theme.colors.primary};
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`
const CampaignShoppandaspeedkuji: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'お買いものパンダグッズがその場で当たる！スピードくじ'
  const directories = [{ path: '/campaign/', label: 'キャンペーン・特典' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'キャンペーン・特典',
      url: '/campaign/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const labelArgs = {
    item: [
      { text: 'ショップ限定', isEmp: false },
      { text: 'ご契約者様対象', isEmp: false },
    ],
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルショップ限定！楽天モバイル契約者対象で「お買いものパンダグッズ」が当たる抽選にご参加いただけます。当日ショップにてお申し込みされた方も参加いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <CpnLabelWrap>
            <LabelList {...labelArgs} />
          </CpnLabelWrap>
        </SystemContainer>
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/shop-panda-speedkuji/kv-sp.png`}
                width="1125"
                height="1464"
              />
              <img
                src={`${assets}img/campaign/shop-panda-speedkuji/kv-pc.png`}
                width="1440"
                height="320"
                alt="楽天モバイルショップ限定！お買いものパンダグッズがその場で当たる！？スピードくじ"
              />
            </picture>
          </h1>
        </KvHeading>
        <SystemContainer>
          <TxtEmp02 as="p" className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <TxtSize size="m">
              本キャンペーンは2024年3月3日をもちまして終了いたしました。<br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>
          <TxtCap as="p" className={Utils['Mt-24']}>
            ※「Rakuten最強プラン」をご利用中、またはキャンペーン期間中にお申し込み&利用開始いただく方が対象です。
            <br />
            <TxtEmp02>※店舗によって景品が異なります。</TxtEmp02>
            <br />
            ※景品は予告なく変更する場合があります。
            <br />
            ※おひとり様1回限りご参加いただけます。
            <br />
            ※景品を転売等の営利目的で利用した場合、今後のキャンペーンご利用をお断りする場合があります。
            <br />
            ※本キャンペーン終了後も類似または同様のキャンペーンが開催される可能性があります。
            <br />
            ※家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外となります。
          </TxtCap>
          <div className={`${Utils['Align-lcc']} ${Utils['Mt-16']}`}>
            <p>
              <TxtEmp01>【キャンペーン期間】</TxtEmp01>
              2024年1月15日（月）開店～2024年3月3日（日）閉店
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※景品がなくなり次第終了になります。
            </TxtCap>
          </div>
          <nav>
            <AnchorLink>
              <li>
                <LinkIconBefore
                  href="#flow"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'flow')
                  }
                >
                  <IconArrowDown />
                  キャンペーンの流れ
                </LinkIconBefore>
              </li>
              <li>
                <LinkIconBefore
                  href="#campaign-rule"
                  onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    anchorCallback(e, 'campaign-rule')
                  }
                >
                  <IconArrowDown />
                  キャンペーンルールを見る
                </LinkIconBefore>
              </li>
            </AnchorLink>
          </nav>
        </SystemContainer>
        <SectionCpnFlow>
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']} id="flow">
              キャンペーンの流れ
            </Heading>
            <p className={Utils['Mt-16']}>
              こちらのキャンペーンは、「Rakuten最強プラン」をご利用中、またはキャンペーン期間中にお申し込み&利用開始いただく方が対象となります。
            </p>
            <Tab
              className={Utils['Mt-16']}
              heading1={'新規お申し込みの方'}
              id1="tab1"
              id2="tab2"
              content1={
                <>
                  <CpnFlowBox>
                    <HeadingCustom level="3">
                      <span>STEP1</span>「Rakuten最強プラン」をお申し込みする
                    </HeadingCustom>
                    <MediaGridCustom>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/shop-panda-speedkuji/flow-01.png`}
                          width="311"
                          height="178"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <Heading level="4">
                          これから「Rakuten最強プラン」をお申し込みの方
                        </Heading>
                        <p className={Utils['Mt-16']}>
                          <TxtEmp02>
                            楽天モバイルショップ店内では、その場でお申し込みいただけます。お申し込み後、キャンペーンにご参加いただけます。
                            <br />
                          </TxtEmp02>
                          下記、お申し込みに必要なものをご確認いただき、ご来店ください。
                        </p>
                        <Heading level="4" className={Utils['Mt-24']}>
                          お申し込みに必要なもの
                        </Heading>
                        <UlOnly className={Utils['Mt-16']}>
                          <li>
                            <LinkIconAfter href="/guide/verify/?l-id=campaign_shop-panda-speedkuji_guide_verify">
                              本人確認書類
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                          <li>楽天会員ID、パスワード</li>
                          <li>
                            <LinkIconAfter href="/guide/payment/?l-id=campaign_shop-panda-speedkuji_guide_payment">
                              クレジットカード、銀行口座情報
                              <IconChevronRight className={Utils['Ml-16']} />
                            </LinkIconAfter>
                          </li>
                          <li>
                            ご契約者名義の
                            <LinkNormal href="/guide/mnp/?l-id=campaign_shop-panda-speedkuji_guide_mnp">
                              MNP予約番号
                            </LinkNormal>
                            （他社から乗り換えの場合）
                          </li>
                        </UlOnly>
                        <TxtCap as="p" className={Utils['Mt-8']}>
                          ※未成年の方のお申し込み方法は
                          <LinkNormal href="/flow/for-minors/?l-id=campaign_shop-panda-speedkuji_flow_for-minors">
                            こちら
                          </LinkNormal>
                        </TxtCap>
                        <p className={Utils['Mt-24']}>
                          また、Webでもお申し込みいただけます。キャンペーン期間中にお申し込み&利用開始後に、ご来店ください。
                        </p>
                        <div
                          className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
                        >
                          <ButtonRegularLarge
                            as="a"
                            href="/guide/application/?lid-r=campaign_shop-panda-speedkuji_guide_application"
                          >
                            新規／乗り換え（MNP）お申し込み
                          </ButtonRegularLarge>
                        </div>
                      </div>
                    </MediaGridCustom>
                  </CpnFlowBox>
                  <CpnFlowBox>
                    <HeadingCustom level="3">
                      <span>STEP2</span>楽天モバイルショップへ来店
                    </HeadingCustom>
                    <MediaGridCustom>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/shop-panda-speedkuji/flow-02.png`}
                          width="312"
                          height="136"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <p>楽天モバイルショップに来店する。</p>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonPrimaryLarge
                            as="a"
                            href="/shop/?lid-r=campaign_shop-panda-speedkuji_shop01"
                          >
                            お近くのショップを探す
                          </ButtonPrimaryLarge>
                        </div>
                        <TxtCap as="p" className={Utils['Mt-24']}>
                          ※家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外です。
                          <br />
                          ※店舗スタッフに、Rakuten Linkまたはmy
                          楽天モバイルのホーム画面をご提示ください。
                        </TxtCap>
                      </div>
                    </MediaGridCustom>
                  </CpnFlowBox>
                </>
              }
              heading2={'すでにご利用中の方'}
              content2={
                <>
                  <CpnFlowBox>
                    <HeadingCustom level="3">
                      楽天モバイルショップへ来店
                    </HeadingCustom>
                    <MediaGridCustom>
                      <MediaImage>
                        <img
                          src={`${assets}img/campaign/shop-panda-speedkuji/flow-02.png`}
                          width="312"
                          height="136"
                          alt=""
                        />
                      </MediaImage>
                      <div>
                        <Heading level="4">
                          すでに「Rakuten最強プラン」をご利用中の方
                        </Heading>
                        <p className={Utils['Mt-16']}>
                          ご利用中のスマホを持参いただき、楽天モバイルショップへご来店ください。
                        </p>
                        <div
                          className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
                        >
                          <ButtonPrimaryLarge
                            as="a"
                            href="/shop/?lid-r=campaign_shop-panda-speedkuji_shop02"
                          >
                            お近くのショップを探す
                          </ButtonPrimaryLarge>
                        </div>
                        <TxtCap as="p" className={Utils['Mt-24']}>
                          ※家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外です。
                          <br />
                          ※店舗スタッフに、Rakuten Linkまたはmy
                          楽天モバイルのホーム画面をご提示ください。
                        </TxtCap>
                      </div>
                    </MediaGridCustom>
                  </CpnFlowBox>
                </>
              }
            />
            <CpnFlowLastBox>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/shop-panda-speedkuji/img-panda-present-sp.png`}
                  width="1029"
                  height="1005"
                />
                <img
                  src={`${assets}img/campaign/shop-panda-speedkuji/img-panda-present-pc.png`}
                  width="1032"
                  height="324"
                  alt="店頭抽選でお買いものパンダグッズプレゼント"
                  loading="lazy"
                />
              </picture>
            </CpnFlowLastBox>
            <TxtCap as="p" className={Utils['Mt-16']}>
              <TxtEmp02>※店舗によって景品が異なります。</TxtEmp02>
              <br />
              ※景品がなくなり次第終了になります。
              <br />
              ※画像はイメージです。
              <br />
              ※おひとり様1回限りご参加いただけます。
            </TxtCap>
          </SystemContainer>
        </SectionCpnFlow>
        <SystemContainer>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="/shop/?lid-r=campaign_shop-panda-speedkuji_shop03"
            >
              お近くのショップを探す
            </ButtonPrimaryLarge>
            <TxtCap
              as="p"
              className={`${Utils['Mt-16']} ${Utils['Align-llc']}`}
            >
              ※家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外です。
            </TxtCap>
          </div>
          <Heading level="2" className={Utils['Mt-64']} id="campaign-rule">
            お買いものパンダグッズがその場で当たる！スピードくじ
          </Heading>
          <TxtEmp02 as="p" className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <TxtSize size="m">
              本キャンペーンは2024年3月3日をもちまして終了いたしました。<br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtSize>
          </TxtEmp02>
          <CampaignRule2172 />
        </SystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignShoppandaspeedkuji
