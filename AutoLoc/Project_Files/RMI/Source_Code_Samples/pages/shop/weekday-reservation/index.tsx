import type { NextPage } from 'next'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { Heading } from '@components/atoms/Heading'
import {
  AccordionListEmp,
  AccordionEmpStep,
  AccordionEmpTxt,
} from '@components/atoms/AccordionList'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { BnrCampaignShopLimited } from '@components/include/common/BnrCampaignShopLimited'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { UlOnly } from '@components/atoms/List'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { IconNewTabLine, IconChevronRight } from '@components/icons'
import { CampaignRule2244 } from '@components/include/campaign/rules/2024/CampaignRule2244'
import ShopSearch from '@components/include/common/ShopSearch'

const HeadingTxt = styled.p`
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
`
const HeadingKv = styled.section`
  text-align: center;
  background-color: #73d8ff;
`
const FlowSection = styled.section`
  padding: 40px 0;
  background-color: ${props => props.theme.colors.monotone97};
  .valign-center {
    align-items: center;
  }
`
const CustomAccordionListEmp = styled(AccordionListEmp)`
  ${mixins.mq.MaxM} {
    > button {
      display: flex;
      align-items: center;
    }
  }
`
const Emplist = styled.li`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  &::before {
    background-color: ${props => props.theme.colors.primary} !important;
  }
`
const CustomMediaGrid = styled(MediaGrid)`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.divider};
`
const FlowPointBox = styled.div`
  &::before {
    content: '';
    display: block;
    margin: 20px auto 16px;
    width: 70px;
    height: 18px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    background-color: ${props => props.theme.colors.primary};
  }
`

const SeachBg = styled.div`
  margin-top: 40px;
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.pink5};
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
`

const Heading3Custom = styled(Heading)`
  ${mixins.mq.MaxM} {
    font-size: ${props => props.theme.fonts.m};
  }
`

const ShopWeekdayreservation: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '平日限定！楽天モバイルショップの来店予約とご来店アンケートに回答で100ポイント！'
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

  const imgpath = `${assets}img/shop/weekday-reservation/`

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルショップの来店予約（平日を選択）をして、ご来店アンケートにご回答いただくと100ポイント贈呈いたします。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <HeadingTxt>
            ポイント：付与日を含めて6カ月の期間限定ポイント
          </HeadingTxt>
        </SystemContainer>
        <HeadingKv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${imgpath}kv-sp.png`}
                width="1125"
                height="990"
              />
              <img
                src={`${imgpath}kv-pc.png`}
                width="1440"
                height="300"
                alt="平日限定！楽天モバイルショップの来店予約＆ご来店アンケートに回答で100ポイント！"
              />
            </picture>
          </h1>
        </HeadingKv>
        <SystemContainer>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
          <TxtEmp02>
            <TxtSize size="m">※本施策（施策コード：2244）は2024年5月31日（金）23:59をもって終了いたします。</TxtSize>
          </TxtEmp02>
          </div>

          <div className={`${Utils['Align-llc']} ${Utils['Mt-24']}`}>
            <p>
              <TxtEmp01>【来店予約期間】</TxtEmp01>
              店舗：2024年3月28日（木）9:00～2024年5月31日（金）23:59
            </p>
            <p>
              <TxtEmp01>【来店およびご来店アンケート回答期限】</TxtEmp01>
              2024年6月14日（金）閉店
            </p>
            <p>
              ※来店予約日を2024年6月15日（土）以降で選択すると対象外となります。
            </p>

            <TxtCap as="p" className={Utils['Mt-16']}>
              ※おひとり様1回ご参加いただけます。
              <br />
              ※ポイントは来店予約時にログインした楽天会員ポイント口座へ進呈いたします。
            </TxtCap>
          </div>
        </SystemContainer>
        <FlowSection className={Utils['Mt-16']}>
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']}>
              ご参加の流れ
            </Heading>
            <CustomAccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP1</AccordionEmpStep>
                  <AccordionEmpTxt>
                    お近くの楽天モバイルショップを検索して来店予約
                    <TxtEmp02>（平日を選択）</TxtEmp02>
                  </AccordionEmpTxt>
                </>
              }
              isOpened={true}
              className={Utils['Mt-24']}
              step={true}
            >
              <MediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgpath}img-flow-device-sp.png`}
                      width="622"
                      height="276"
                    />
                    <img
                      src={`${imgpath}img-flow-device-pc.png`}
                      width="312"
                      height="138"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <TxtSize size="m" as="p">
                    <TxtEmp01>
                      各ショップページの
                      <TxtEmp02>「Webで予約する」ボタン</TxtEmp02>
                      よりご予約ください。
                    </TxtEmp01>
                  </TxtSize>
                  <UlOnly className={Utils['Mt-16']}>
                    <li>
                      予約完了メールが届きますので、大切に保管してください。
                    </li>
                    <Emplist>
                      実施期間中の土日祝を除く、平日を来店予定日に指定した方が対象です。（国民の祝日は
                      <LinkIconAfter
                        href="https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        こちら
                        <IconNewTabLine />
                      </LinkIconAfter>
                      からご確認ください。）
                    </Emplist>
                    <Emplist>
                      予約がキャンセルになった場合、ポイント進呈対象外となります。
                    </Emplist>
                    <li>
                      実施期間中に複数回予約された場合は、予約日が早い方が進呈対象となります。
                    </li>
                  </UlOnly>
                </div>
              </MediaGrid>

              <SeachBg>
                <Heading3Custom level="2" className={Utils['Align-center']}>
                  お近くのショップを探す
                </Heading3Custom>
                <div className={Utils['Mt-24']}>
                  <ShopSearch lid="shop_weekday-reservation_shop_search_01" />
                </div>
                <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                  <LinkIconAfter href="/shop/?l-id=shop_weekday-reservation_shop_01">
                   地図からショップを探す
                   <IconChevronRight />
                  </LinkIconAfter>
                </div>
              </SeachBg>

              <CustomMediaGrid>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgpath}img-flow-doc-sp.png`}
                      width="622"
                      height="276"
                    />
                    <img
                      src={`${imgpath}img-flow-doc-pc.png`}
                      width="312"
                      height="138"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <TxtSize size="m" as="p">
                    <TxtEmp01>
                      ご契約を検討中のお客様は下記の書類をご持参ください。
                    </TxtEmp01>
                  </TxtSize>
                  <UlOnly className={Utils['Mt-16']}>
                    <li>
                      <LinkIconAfter href="/guide/verify/?l-id=shop_weekday-reservation_guide_verify">
                        本人確認書類
                        <IconChevronRight />
                      </LinkIconAfter>
                    </li>
                    <li>楽天ID、パスワード</li>
                    <li>
                      <LinkIconAfter href="/guide/payment/?l-id=shop_weekday-reservation_guide_payment">
                        クレジットカード、銀行口座情報
                        <IconChevronRight />
                      </LinkIconAfter>
                    </li>
                    <li>
                      <LinkIconAfter href="/guide/mnp/?l-id=shop_weekday-reservation_guide_mnp">
                        ご契約者名義のMNP予約番号（他社から乗り換えの場合）
                        <IconChevronRight />
                      </LinkIconAfter>
                    </li>
                  </UlOnly>
                  <TxtCap as="p" className={Utils['Mt-24']}>
                    ※
                    <LinkNormal href="/flow/for-minors/?l-id=shop_weekday-reservation_flow_for-minors">
                      未成年の方のお申し込み方法はこちら
                    </LinkNormal>
                    <br />
                    ※ショップでのお手続きは、ワンストップ対象の他社からの転入であっても、MNP予約番号を取得のうえ、ご来店ください。
                  </TxtCap>
                </div>
              </CustomMediaGrid>
            </CustomAccordionListEmp>
            <CustomAccordionListEmp
              text={
                <>
                  <AccordionEmpStep>STEP2</AccordionEmpStep>
                  <AccordionEmpTxt>
                    ご予約日時に来店して、ご来店アンケートに回答
                  </AccordionEmpTxt>
                </>
              }
              isOpened={false}
              className={Utils['Mt-24']}
              step={true}
            >
              <MediaGrid className="valign-center">
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${imgpath}img-flow-shop-sp.png`}
                      width="622"
                      height="276"
                    />
                    <img
                      src={`${imgpath}img-flow-shop-pc.png`}
                      width="312"
                      height="138"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </MediaImage>
                <div>
                  <TxtSize size="m" as="p">
                    <TxtEmp01>
                      楽天モバイルショップにて、ご来店アンケートにご回答ください。
                    </TxtEmp01>
                  </TxtSize>
                </div>
              </MediaGrid>
            </CustomAccordionListEmp>
            <FlowPointBox>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${imgpath}img-flow-point-sp.png`}
                  width="1029"
                  height="336"
                />
                <img
                  src={`${imgpath}img-flow-point-pc.png`}
                  width="1032"
                  height="130"
                  alt="楽天ポイント100ポイント進呈!"
                  loading="lazy"
                />
              </picture>
            </FlowPointBox>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※条件達成が確認できた月の翌々月末日ごろに進呈いたします。
              <br />
              ※おひとり様1回限りご参加いただけます。
              <br />
              ※ポイントは来店予約時にログインした楽天会員ポイント口座へ進呈いたします。
              <br />
              ※進呈されるポイントの有効期限は、ポイント進呈日を含めて6カ月です。
            </TxtCap>
          </SystemContainer>
        </FlowSection>

        <section className={`${Utils['Pt-56']}`}>
          <SystemContainer>
            <CommonSaikyo />
            <div
              className={`${Utils['Align-center']} ${Utils['Mt-56']} ${Utils['Mt-sp-40']}`}
            >
              <Heading3Custom level="2">お近くのショップを探す</Heading3Custom>
              <div className={Utils['Mt-24']}>
                <ShopSearch lid="shop_weekday-reservation_shop_search_02" />
              </div>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <LinkIconAfter href="/shop/?l-id=shop_weekday-reservation_shop_02">
                 地図からショップを探す
                 <IconChevronRight />
                </LinkIconAfter>
              </div>
            </div>

            <div className={`${Utils['Mt-40']}`}>
              <BnrCampaignShopLimited />
            </div>
            <div className={Utils['My-64']}>
              <Heading level="2" id="campaign-rule2244">
                平日限定！来店予約&ご来店アンケートに回答で100ポイント
              </Heading>
              <CampaignRule2244 className={Utils['Mt-32']} />
            </div>
          </SystemContainer>
        </section>
      </SystemWrapper>

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ShopWeekdayreservation
