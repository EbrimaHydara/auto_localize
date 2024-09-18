import type { NextPage } from 'next'
import React, { useContext, useRef, useEffect } from 'react'
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
import { TxtCap, TxtEmp02, TxtMarker } from '@components/atoms/Txt'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { Heading } from '@components/atoms/Heading'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import { MediaGridHalf } from '@components/layout/Media'
import {
  IconArrowDown,
  IconCampaignLine,
  IconChevronRight,
  IconHomeLine,
  IconPriceLine,
  IconSmartphoneLine,
  IconNewTabLine,
} from '@components/icons'
import { FlowList } from '@components/atoms/Flow'
import { Tab } from '@components/atoms/Tab'
import { CommonCtaBottomFixed } from '@components/include/common/CommonCtaBottomFixed'
import { fontRakutenSans } from '@styles/fonts'
import {
  FeeFamilyAnchor,
  FeeFamilyAnchorList,
} from '@components/fragment/fee/family/Anchor'

const imgpath = `${assets}img/fee/family/`
const KvHeading = styled.div`
  background: linear-gradient(
    to top,
    ${props => props.theme.colors.orange5} 88px,
    #feffd2 88px,
    #feffd2
  );
  display: flex;
  justify-content: center;
  img {
    ${mixins.mq.MinL} {
      min-width: calc((1440 / 1032) * 100vw);
    }
    ${mixins.mq.MinCustom('1033px')} {
      min-width: 1440px;
    }
  }
`
const BgOrange5 = styled.div`
  background-color: ${props => props.theme.colors.orange5};
`
const BgYellow = styled.div`
  background-color: #feffd2;
`
const CustomMediaGridHalf = styled(MediaGridHalf)`
  text-align: center;
  ${mixins.mq.MaxM} {
    div:last-child {
      margin-top: 16px;
    }
  }
`
const HeadingImg = styled.img`
  ${mixins.mq.MaxM} {
    width: 32px;
    height: 32px;
  }
`
const HeadingH2 = styled.h2`
  font-family: ${fontRakutenSans.style.fontFamily};
  font-feature-settings: 'palt' on;
  .first-line {
    font-size: 16px;
    font-weight: 600;
    line-height: 117%;
  }
  .second-line {
    font-size: 29px;
    font-weight: bold;
    line-height: 117%;
  }
  ${mixins.mq.MinL} {
    .first-line {
      font-size: 24px;
    }
    .second-line {
      font-size: 46px;
    }
  }
`
const TitleMerker = styled(TxtMarker)`
  background: linear-gradient(transparent 75%, #fff200 0%);
  font-size: 24px;
  ${mixins.mq.MinL} {
    font-size: 28px;
  }
`
const FamilyImg = styled.p`
  margin-top: 24px;
  ${mixins.mq.MinL} {
    margin-top: 32px;
  }
`
const CustomFlowList = styled(FlowList)`
  border: none;
  background-color: ${props => props.theme.colors.white};
  &.last-item {
    ${mixins.mq.MaxM} {
      padding-bottom: 0;
    }
    .last-item-img {
      ${mixins.mq.MaxM} {
        margin-top: 24px;
        text-align: center;
      }
      ${mixins.mq.MinL} {
        img {
          position: absolute;
          right: 8px;
          bottom: 0;
        }
      }
      ${mixins.mq.MinCustom('880px')} {
        img {
          right: 46px;
        }
      }
    }
  }
`
const CustomButtonRegular = styled(ButtonRegular)`
  ${mixins.mq.MinL} {
    min-width: 374px;
  }
`
const NegativeMargin = styled.div`
  ${mixins.mq.MaxM} {
    margin-top: 0;
  }
`
const AnchorWrap = styled(SystemContainer)`
  margin: 16px auto;
  ${mixins.mq.MaxM} {
    margin: 8px auto;
    padding: 0;
  }
`
const MovieContainer = styled.div`
  margin: 24px auto 0;
  gap: 24px;
  display: flex;
  ${mixins.mq.MinL} {
    justify-content: space-between;
    max-width: 1556px;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  > div {
    ${mixins.mq.MinL} {
      max-width: 750px;
      width: 100%;
    }
  }
`

const MovieContainerMod1 = styled(MovieContainer)`
  ${mixins.mq.MaxM} {
    display: block;
  }
`

const MovieContainerInner = styled.div`
  position: relative;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  .vjs-dock-text {
    display: none !important;
  }
`
const MarginAuto = styled.div`
  margin: 0 auto;
`
const IframeMovieHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  ${mixins.mq.MaxM} {
    font-size: 24px;
  }
`

const YouthContent = styled.div`
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .head {
    margin-top: -40px;
    ${mixins.mq.MaxS} {
      margin-top: -32px;
    }
    ${props => mixins.mq.MinMaxCustom('376px', '568px')} {
      margin-top: calc(-28 / 375 * 100vw);
    }
  }
  ${mixins.mq.MinL} {
    .txt {
      margin-top: 0;
      position: relative;
    }
  }
  ${mixins.mq.MaxM} {
    padding: 16px;
    gap: 4px;
    margin-top: 40px;
    img {
      width: 100%;
    }
    .head {
      width: calc(284 / 375 * 100vw);
      max-width: 568px;
    }
    .logo {
      width: calc(245 / 375 * 100vw);
      max-width: 490px;
    }
  }
  ${props => mixins.mq.MinMaxCustom('376px', '752')} {
    margin-top: calc(36 / 375 * 100vw);
  }
`

const YouthImgMain = styled.img`
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  ${mixins.mq.MaxS} {
    width: 323px;
  }
`

const YouthImgTxt = styled.img`
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  ${mixins.mq.MaxS} {
    width: 323px;
  }
`

const KidsContent = styled.div`
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .head {
    margin-top: -40px;
    ${mixins.mq.MaxS} {
      margin-top: -32px;
    }
    ${props => mixins.mq.MinMaxCustom('376px', '568px')} {
      margin-top: calc(-28 / 375 * 100vw);
    }
  }
  ${mixins.mq.MinL} {
    .txt {
      margin-top: 0;
      position: relative;
    }
  }
  ${mixins.mq.MaxM} {
    padding: 16px;
    gap: 4px;
    margin-top: 40px;
    img {
      width: 100%;
    }
    .head {
      width: calc(284 / 375 * 100vw);
      max-width: 568px;
    }
    .logo {
      width: calc(245 / 375 * 100vw);
      max-width: 490px;
    }
  }
  ${props => mixins.mq.MinMaxCustom('376px', '752')} {
    margin-top: calc(36 / 375 * 100vw);
  }
`

const KidsImgMain = styled.img`
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  ${mixins.mq.MaxS} {
    width: 323px;
  }
`

const KidsImgTxt = styled.img`
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  ${mixins.mq.MaxS} {
    width: 323px;
  }
`

const TabContent1 = () => (
  <ul>
    <CustomFlowList className={Utils['Mt-24']}>
      <Heading level="3">1. 【代表者】楽天モバイルに申し込む</Heading>
      <CustomMediaGridHalf className={Utils['Mt-24']}>
        <div>
          <ButtonPrimaryLarge
            as="a"
            href="/guide/application?lid-r=fee_family_nonsubs-flow_guide_application"
          >
            新規／乗り換え（MNP）
            <br className={Utils['Show-oxx']} />
            お申し込み
          </ButtonPrimaryLarge>
        </div>
        <div>
          <ButtonSecondaryLarge
            href="/shop/?l-id=fee_family_nonsubs-flow_shop"
            as="a"
          >
            お近くのショップを探す・来店予約
          </ButtonSecondaryLarge>
        </div>
      </CustomMediaGridHalf>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <LinkIconAfter href="/guide/procedure/?l-id=fee_family_nonsubs-flow_guide_procedure">
          お申し込み方法の詳細を見る
          <IconChevronRight />
        </LinkIconAfter>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">2. 【代表者】紹介キャンペーンで家族を紹介する</Heading>
      <p className={Utils['Mt-24']}>
        楽天モバイルにすでにご契約中のご家族は紹介できません。そのままステップ3に進んでください。
        <br />
        ※紹介されたご家族は、回線を利用する方の名義で1人1回線のお申し込みが必要です
      </p>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <CustomButtonRegular
          href="/campaign/referral/?l-id=fee_family_nonsubs-flow_campaign_referral"
          as="a"
        >
          家族を紹介する
        </CustomButtonRegular>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">
        3. 【代表者】最強家族プログラムのグループを作成する
      </Heading>
      <p className={Utils['Mt-24']}>
        会員ページ「my
        楽天モバイル」のWeb/アプリより最強家族プログラムのグループを作成。グループに参加されたご家族全員に家族割引が適用されます。
      </p>
      <div className={Utils['Mt-8']}>
        <LinkIconAfter
          href="/faq/detail/10000911"
          data-ratid="fee_family_nonsubs-flow_faq"
          data-ratevent="click"
          data-ratparam="all"
        >
          割引適用日の詳細を見る
          <IconChevronRight />
        </LinkIconAfter>
      </div>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <div>
          <CustomButtonRegular
            href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=fee_family_nonsubs-flow_ecare"
            as="a"
          >
            my 楽天モバイルにログイン
          </CustomButtonRegular>
        </div>
        <div className={Utils['Mt-24']}>
          <LinkIconAfter href="/guide/family/?l-id=fee_family_nonsubs-flow_guide_family">
            最強家族プログラムのご利用方法を見る
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </div>
    </CustomFlowList>
    <CustomFlowList className="last-item">
      <Heading level="3" className={Utils['Align-ccl']}>
        家族みんなで最強家族プログラムに参加完了！
      </Heading>
      <div className="last-item-img">
        <img
          src={`${imgpath}img-flow-item.png`}
          width="274"
          height="102"
          alt=""
          loading="lazy"
        />
      </div>
    </CustomFlowList>
  </ul>
)

const TabContent2 = () => (
  <ul>
    <CustomFlowList className={Utils['Mt-24']}>
      <Heading level="3">1. 【代表者】紹介キャンペーンで家族を紹介する</Heading>
      <p className={Utils['Mt-24']}>
        楽天モバイルにすでにご契約中のご家族は紹介できません。そのままステップ2に進んでください。
        <br></br>
        ※紹介されたご家族は、回線を利用する方の名義で1人1回線のお申し込みが必要です
      </p>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <CustomButtonRegular
          href="/campaign/referral/?l-id=fee_family_subs-flow_campaign_referral"
          as="a"
        >
          家族を紹介する
        </CustomButtonRegular>
      </div>
    </CustomFlowList>
    <CustomFlowList>
      <Heading level="3">
        2. 【代表者】最強家族プログラムのグループを作成する
      </Heading>
      <p className={Utils['Mt-24']}>
        会員ページ「my
        楽天モバイル」のWeb/アプリより最強家族プログラムのグループを作成。グループに参加されたご家族全員に家族割引が適用されます。
      </p>
      <div className={Utils['Mt-8']}>
        <LinkIconAfter
          href="/faq/detail/10000911"
          data-ratid="fee_family_subs-flow_faq"
          data-ratevent="click"
          data-ratparam="all"
        >
          割引適用日の詳細を見る
          <IconChevronRight />
        </LinkIconAfter>
      </div>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <div>
          <CustomButtonRegular
            href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile?l-id=fee_family_subs-flow_ecare"
            as="a"
          >
            my 楽天モバイルにログイン
          </CustomButtonRegular>
        </div>
        <div className={Utils['Mt-24']}>
          <LinkIconAfter href="/guide/family/?l-id=fee_family_subs-flow_guide_family">
            最強家族プログラムのご利用方法を見る
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </div>
    </CustomFlowList>
    <CustomFlowList className="last-item">
      <Heading level="3" className={Utils['Align-ccl']}>
        家族みんなで最強家族プログラムに参加完了！
      </Heading>
      <div className="last-item-img">
        <img
          src={`${imgpath}img-flow-item.png`}
          width="274"
          height="102"
          alt=""
          loading="lazy"
        />
      </div>
    </CustomFlowList>
  </ul>
)

const FeeFamily: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '最強家族プログラム（家族割引）家族みんなで使えばずっとおトク！'
  const directories = [
    { path: '/fee/saikyo-plan/', label: 'Rakuten最強プラン（料金プラン）' },
  ]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const scrollTrigger = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scriptLoad = (target: string, callback?: () => void) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = target
      script.defer = true
      if (callback) {
        script.onload = () => {
          callback()
        }
      }
      document.body.appendChild(script)
    }
    scriptLoad(
      'https://players.brightcove.net/5068808272001/default_default/index.min.js',
    )
    scriptLoad('https://r.r10s.jp/com/rat/plugin/media/main-0.2.0.js', () => {
      if (window.RAT.hasOwnProperty('MediaTracker')) {
        window.RAT.MediaTracker({
          params: {
            acc: 1312,
            aid: 1,
            pgn: '/fee/family/',
          },
          configs: {
            measure: true,
          },
        })
      }
    })
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="最強家族プログラム（家族割引）は家族みんなで使えばずっとおトク！データ3GB／無制限で（家族割引適用時）全キャリアで最安！※2024年2月時点。自社調べ"
        ogp_img="https://network.mobile.rakuten.co.jp/assets/img/fee/family/ogp-20240410.png"
        directories={directories}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <KvHeading>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${imgpath}kv-sp-240410.png`}
                width="1125"
                height="990"
              />
              <img
                src={`${imgpath}kv-pc-240410.png`}
                width="1440"
                height="300"
                alt="最強家族プログラム（家族割引）は家族全員ずーっとおトク！データ３GB（家族割引適用時）全キャリア最安880円/月～（税込968円～） ※通話料等別"
              />
            </picture>
          </h1>
        </KvHeading>
        <BgOrange5
          className={`${Utils['Pt-8']} ${Utils['Pt-pc-16']} ${Utils['Pb-32']}`}
        >
          <SystemContainer>
            <TxtCap as="ul">
              <li>
                ※1 家族割引のみ適用しその他割引は含めない場合。2024年2月時点
                自社調べ※2
                家族6人で、5人が家族からの紹介経由で申し込みした場合。Rakuten
                Linkアプリ利用・「Rakuten最強プラン（データタイプ）」対象外等条件有。ポイントは4カ月後から分割付与。期間限定ポイント※3「実質価格」とは後日付与されるポイントを加味した価格。実際のお支払い金額とは異なります。最強家族プログラム適用後データ3GB以下の場合968円（税込）、家族6名12カ月で69,696円（税込）の場合。
                <LinkNormal href="/campaign/referral/#campaign-rule1784">
                  詳しくはこちら
                </LinkNormal>
                ※
                <LinkNormal
                  href="#notes"
                  onClick={e => anchorCallback(e, 'notes')}
                >
                  その他注意事項はこちら
                </LinkNormal>
              </li>
            </TxtCap>

            <div className={Utils['Mt-24']}>
              <p className={Utils['Align-right']}>
                <LinkIconAfter href="/fee/family/en/?l-id=fee_family_fee_family_en">
                  English
                  <IconChevronRight />
                </LinkIconAfter>
              </p>
            </div>

            <CustomMediaGridHalf className={Utils['Mt-24']} ref={scrollTrigger}>
              <div>
                <ButtonPrimaryLarge
                  as="a"
                  href="/guide/application?lid-r=fee_family_cta_guide_application"
                >
                  新規／乗り換え（MNP）お申し込み
                </ButtonPrimaryLarge>
              </div>
              <div>
                <ButtonSecondaryLarge
                  href="/shop/?l-id=fee_family_cta_shop"
                  as="a"
                >
                  お近くのショップを探す・来店予約
                </ButtonSecondaryLarge>
              </div>
            </CustomMediaGridHalf>
          </SystemContainer>
        </BgOrange5>
        <AnchorWrap>
          <FeeFamilyAnchorList>
            <li>
              <FeeFamilyAnchor
                href="#program"
                onClick={e => anchorCallback(e, 'program')}
                data-ratid="fee_family_family-program_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                最強家族
                <br className={Utils['Show-oox']} />
                プログラム
                <IconHomeLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#fee"
                onClick={e => anchorCallback(e, 'fee')}
                data-ratid="fee_family_fee_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                <span className="text">料金</span>
                <IconPriceLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#referral-campaign"
                onClick={e => anchorCallback(e, 'referral-campaign')}
                data-ratid="fee_family_referral_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                紹介
                <br className={Utils['Show-oox']} />
                キャンペーン
                <IconCampaignLine className="icon" />
              </FeeFamilyAnchor>
            </li>
            <li>
              <FeeFamilyAnchor
                href="#flow"
                onClick={e => anchorCallback(e, 'flow')}
                data-ratid="fee_family_flow_anker"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconArrowDown className="arrow-down" />
                ご利用の
                <br className={Utils['Show-oox']} />
                流れ
                <IconSmartphoneLine className="icon" />
              </FeeFamilyAnchor>
            </li>
          </FeeFamilyAnchorList>
        </AnchorWrap>
        <BgOrange5 className={`${Utils['Py-40']} ${Utils['Py-pc-48']}`}>
          <SystemContainer>
            <div id="program" className={Utils['Align-center']}>
              <HeadingImg
                src={`${imgpath}icon-home.svg`}
                width="48"
                height="48"
                alt=""
              />
              <HeadingH2
                data-ratid="family_scroll-01_program"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">
                  家族全員
                  <TxtEmp02>ずーっとおトク！</TxtEmp02>
                </span>
                <br />
                <span className="second-line">最強家族プログラム</span>
              </HeadingH2>

              <Heading
                level="3"
                className={`${Utils['Mt-32']} ${Utils['Mt-pc-40']}`}
              >
                <TitleMerker>
                  幅広い家族のかたちで
                  <br className={Utils['Show-oox']} />
                  ご利用いただけるようになりました!
                </TitleMerker>
              </Heading>

              <picture className={Utils['Mt-16']}>
                <img
                  src={`${imgpath}icon-new.png`}
                  width="127"
                  height="27"
                  alt="NEW 4/10 更新"
                  loading="lazy"
                />
              </picture>

              <FamilyImg>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-saikyo-family-01-sp-240410.png`}
                    width="686"
                    height="528"
                  />
                  <img
                    src={`${imgpath}img-saikyo-family-01-pc-240410.png`}
                    width="1032"
                    height="354"
                    alt="一緒に住む家族はもちろん、離れて住む家族も対象！最大20回線までOK!!"
                    loading="lazy"
                  />
                </picture>
              </FamilyImg>
              <NegativeMargin className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/family/?l-id=fee_family_target_guide_family">
                  注意事項を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </NegativeMargin>

              <Heading
                level="3"
                id="fee"
                className={Utils['Mt-64']}
                ratId="family_scroll-02_fee"
                ratEvent="appear"
              >
                <TitleMerker>
                  家族で使えば
                  <br className={Utils['Show-oox']} />
                  「Rakuten最強プラン」が
                  <br className={Utils['Show-oox']} />
                  もっと安くなる!
                </TitleMerker>
              </Heading>
              <p className={Utils['Mt-24']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-saikyo-family-02-sp-240410.png`}
                    width="686"
                    height="718"
                  />
                  <img
                    src={`${imgpath}img-saikyo-family-02-pc-240410.png`}
                    width="1032"
                    height="402"
                    alt="最強家族プログラム（家族割引）適用後 家族全員100円/月（税別）引き。 それぞれのデータ量に応じて最適な料金に。20GB超過後無制限で2,880円/月（税込3,168円）、3GB超過後20GBまで1,880円/月（税込2,068円）、3GBまで880円/月（税込968円）"
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap
                className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
                as="ul"
              >
                <li>
                  ※通話料等別費用 ※2
                  公平なサービス提供または環境により速度低下する場合あり
                </li>
                <li>
                  ※割引適用日の詳細についてはよくあるご質問をご確認ください
                </li>
              </TxtCap>

              <div className={Utils['Mt-24']}>
                <ButtonRegularLarge
                  href="/fee/saikyo-plan/?l-id=fee_family_fee_fee_saikyo-plan"
                  as="a"
                >
                  料金プランの詳細を見る
                </ButtonRegularLarge>
              </div>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/fee/saikyo-plan/?l-id=fee_family_fee-comparison_fee_saikyo-plan#compareother">
                  他キャリア家族割引との比較表を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>

              <HeadingH2 className={Utils['Mt-40']}>
                <span className="first-line">
                  0歳から22歳までは
                  <TxtEmp02>もーっとおトク!</TxtEmp02>
                </span>
              </HeadingH2>
              <YouthContent>
                <picture className="head">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}youth-head-sp-240502.png`}
                    width="208"
                    height="29"
                  />
                  <img
                    src={`${imgpath}youth-head-pc-240502.png`}
                    width="247"
                    height="34"
                    alt="22歳までの方はこちら"
                    loading="lazy"
                  />
                </picture>
                <picture className="logo">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}youth-logo-sp.png`}
                    width="245"
                    height="44"
                  />
                  <img
                    src={`${imgpath}youth-logo-pc.png`}
                    width="459"
                    height="83"
                    alt="最強青春プログラム"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}youth-main-sp.png`}
                    width="323"
                    height="91"
                  />
                  <YouthImgMain
                    src={`${imgpath}youth-main-pc.png`}
                    width="710"
                    height="84"
                    alt="エントリーするだけで22歳まで毎月ずーっと110ポイント還元"
                    loading="lazy"
                  />
                </picture>
                <picture className="txt">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}youth-txt-sp-240502.png`}
                    width="276"
                    height="72"
                  />
                  <YouthImgTxt
                    src={`${imgpath}youth-txt-pc-240502.png`}
                    width="547"
                    height="101"
                    alt="家族割引適用で3GBまで880円/月(税込968円) 110ポイント還元で実質780円/月(税込858円) "
                    loading="lazy"
                  />
                </picture>
              </YouthContent>
            </div>
            <TxtCap
              as="p"
              className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
            >
              <TxtEmp02>
                ※「実質価格」とは、プログラム条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります
              </TxtEmp02>
              <br className={Utils['Show-xxo']} />
              ※通話料等別。期間限定ポイント
            </TxtCap>
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge
                as="a"
                href="/fee/youth/?l-id=fee_family_fee_youth"
              >
                詳細を見る
              </ButtonRegularLarge>
            </div>

            <div className={`${Utils['Mt-48']} ${Utils['Align-center']}`}>
              <KidsContent>
                <picture className="head">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}kids-head-sp.png`}
                    width="205"
                    height="29"
                  />
                  <img
                    src={`${imgpath}kids-head-pc.png`}
                    width="247"
                    height="34"
                    alt="12歳までの方はこちら"
                    loading="lazy"
                  />
                </picture>
                <picture className="logo">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}kids-logo-sp.png`}
                    width="265"
                    height="44"
                  />
                  <img
                    src={`${imgpath}kids-logo-pc.png`}
                    width="500"
                    height="83"
                    alt="最強こどもプログラム"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}kids-main-sp.png`}
                    width="311"
                    height="130"
                  />
                  <KidsImgMain
                    src={`${imgpath}kids-main-pc.png`}
                    width="710"
                    height="89"
                    alt="エントリーするだけで12歳まで最大440ポイント還元"
                    loading="lazy"
                  />
                </picture>
                <picture className="txt">
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}kids-txt-sp.png`}
                    width="274"
                    height="50"
                  />
                  <KidsImgTxt
                    src={`${imgpath}kids-txt-pc.png`}
                    width="547"
                    height="101"
                    alt="家族割引適用で3GBまで880円/月(税込968円) 440ポイント還元で実質480円/月(税込528円) "
                    loading="lazy"
                  />
                </picture>
              </KidsContent>
            </div>
            <TxtCap
              as="p"
              className={`${Utils['Mt-24']} ${Utils['Align-llc']}`}
            >
              <TxtEmp02>
                ※「実質価格」とは、プログラム条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります
                ※3GB超過後は、毎月110ポイント還元
              </TxtEmp02>
              <br className={Utils['Show-xxo']} />
              ※通話料等別。期間限定ポイント
            </TxtCap>
            <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
              <ButtonRegularLarge
                as="a"
                href="/fee/kids/?l-id=fee_family_fee_kids"
              >
                詳細を見る
              </ButtonRegularLarge>
            </div>
          </SystemContainer>
        </BgOrange5>

        <BgYellow className={Utils['Py-48']}>
          <SystemContainer>
            <div id="referral-campaign" className={Utils['Align-center']}>
              <HeadingImg
                src={`${imgpath}icon-home.svg`}
                width="48"
                height="48"
                alt=""
                loading="lazy"
              />
              <HeadingH2
                data-ratid="family_scroll-03_referral-campaign"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">紹介キャンペーン併用なら</span>
                <br />
                <span className="second-line">もーっとおトク！</span>
              </HeadingH2>
              <Heading level="3" className={Utils['Mt-32']}>
                <TitleMerker>家族で紹介しあうと…!</TitleMerker>
              </Heading>
              <p className={Utils['Mt-8']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-01-sp.png`}
                    width="686"
                    height="650"
                  />
                  <img
                    src={`${imgpath}img-referral-01-pc.png`}
                    width="1032"
                    height="202"
                    alt="紹介する方は紹介1人につき7,000ポイントプレゼント！紹介される方は初めてのお申し込み＆他社から電話番号そのまま乗り換えで13,000ポイントプレゼント！※乗り換え（MNP）以外で初めてお申し込みの方は6,000ポイント"
                    loading="lazy"
                  />
                </picture>
              </p>
              <p className={Utils['Mt-8']}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-02-sp.png`}
                    width="686"
                    height="336"
                  />
                  <img
                    src={`${imgpath}img-referral-02-pc.png`}
                    width="743"
                    height="120"
                    alt="1人申し込むごとに合計2万ポイント獲得 紹介するほどもらえる！"
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap className={Utils['Mt-8']} as="p">
                ※ポイントは期間限定ポイントで分割付与
              </TxtCap>

              <Heading
                level="3"
                className={`${Utils['Mt-64']} ${Utils['Align-center']}`}
              >
                <TitleMerker>だから家族6人で利用すると!</TitleMerker>
              </Heading>
              <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-03-sp.png`}
                    width="686"
                    height="690"
                  />
                  <img
                    src={`${imgpath}img-referral-03-pc.png`}
                    width="1032"
                    height="324"
                    alt="5人紹介で合計10万ポイント獲得!! 2万ポイント×家族5人紹介=10万ポイント"
                    loading="lazy"
                  />
                </picture>
              </p>
              <p className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
                <picture>
                  <source
                    media={`(max-width:${theme.max.m})`}
                    srcSet={`${imgpath}img-referral-04-sp.png`}
                    width="686"
                    height="582"
                  />
                  <img
                    src={`${imgpath}img-referral-04-pc.png`}
                    width="1032"
                    height="218"
                    alt="つまり 3GBまでのスマホ代年間63,360円(6人分)を超えるポイント獲得だから 家族全員3GBまで実質1年無料"
                    loading="lazy"
                  />
                </picture>
              </p>
              <TxtCap
                className={`${Utils['Mt-24']} ${Utils['Align-lcc']}`}
                as="p"
              >
                ※ポイントは4カ月後から分割付与
                <br />
                ※「実質価格」とは、キャンペーンの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。詳しくは
                <LinkNormal href="/campaign/referral/#campaign-rule1784">
                  こちら
                </LinkNormal>
                をご確認ください
              </TxtCap>

              <p className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <ButtonRegularLarge
                  href="/campaign/referral/?l-id=fee_family_referral_campaign_referral"
                  as="a"
                >
                  紹介キャンペーンの詳細を見る
                </ButtonRegularLarge>
              </p>
            </div>
          </SystemContainer>
        </BgYellow>

        <BgOrange5>
          <SystemContainer className={`${Utils['Py-40']} ${Utils['Py-pc-48']}`}>
            <div id="flow" className={Utils['Align-center']}>
              <HeadingImg
                src={`${imgpath}icon-home.svg`}
                width="48"
                height="48"
                alt=""
                loading="lazy"
              />
              <HeadingH2
                data-ratid="family_scroll-04_flow"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <span className="first-line">最強家族プログラム</span>
                <br />
                <span className="second-line">ご利用の流れ</span>
              </HeadingH2>
            </div>
            <div className={`${Utils['Mt-32']} ${Utils['Align-lcc']}`}>
              <p>
                最強家族プログラムは、対象となる家族につき1人の代表者がグループの作成・管理を行います。
              </p>
              <TxtCap as="ul" className={Utils['Mt-8']}>
                <li>
                  ※「最強家族プログラム」のグループ作成・グループ参加は、「my
                  楽天モバイル」アプリの最新バージョン、またはWeb版にてご利用いただけます。
                </li>
                <li>
                  ※アプリの最新バージョンは、
                  <LinkIconAfter
                    href="https://apps.apple.com/jp/app/myrakutenmobile/id1473535769"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Store（iOS）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  または
                  <LinkIconAfter
                    href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.ecare"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play（Android）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  にてご確認ください。
                </li>
              </TxtCap>
            </div>
            <Tab
              className={Utils['Mt-32']}
              heading1={
                <span className={Utils['Align-ccl']}>
                  初めて楽天モバイルに契約する
                </span>
              }
              heading2={
                <span className={Utils['Align-ccl']}>
                  すでに楽天モバイルに契約している
                </span>
              }
              content1={<TabContent1 />}
              content2={<TabContent2 />}
              ratId1="fee_family_nonsubs-flow_tab"
              ratId2="fee_family_subs-flow_tab"
            />
            <div className={`${Utils['Mt-64']} ${Utils['Mb-64']}`}>
              <IframeMovieHeading>
                動画で分かる！
                <br />
                グループ作成・参加方法
              </IframeMovieHeading>
              <MovieContainerMod1>
                <MarginAuto>
                  <MovieContainerInner>
                    <video
                      id="play-movie_fee_family"
                      data-account="5068808272001"
                      data-player="default"
                      data-embed="default"
                      data-video-id="6347735244112"
                      className="video-js"
                      controls
                      data-rat-media='{ "measure":true, "mediaId": "play-movie_fee_family" }'
                      style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                        width: '100%',
                        height: '100%',
                        borderWidth: '0',
                      }}
                    />
                  </MovieContainerInner>
                </MarginAuto>
              </MovieContainerMod1>
            </div>
            <section
              data-ratid="family_scroll-05_plan"
              data-ratevent="appear"
              data-ratparam="all"
            >
              <CommonSaikyo className={Utils['Mt-48']} />
            </section>

            <div id="notes" className={`${Utils['Mt-48']}`}>
              <Heading level="3" className={`${Utils['Align-center']}`}>
                注意事項
              </Heading>
              <TxtCap className={`${Utils['Mt-16']}`} as="p">
                ※「Rakuten最強プラン（データタイプ）」は本プログラムの対象外です。
              </TxtCap>
              <TxtCap as="p">
                ※
                代表者としてグループを作成できるのは18歳以上の契約者のみです。なお、招待される方は18歳以下の契約者も対象です。
              </TxtCap>
              <TxtCap as="p">
                ※
                1グループ最大20回線まで参加できます。なお、複数回線を契約している場合は、1回線のみ本プログラムに参加可能（割引適用）です。また、割引が適用されるのは、1人1回線までとなります。
              </TxtCap>
              <TxtCap as="p">
                ※
                契約者1人につき1グループまで参加が可能です。グループを変更する場合は、現在参加しているグループから退会して、新しいグループへ参加する必要があります。
              </TxtCap>
            </div>
          </SystemContainer>
        </BgOrange5>

        <CommonCtaBottomFixed
          btnItems={[
            { btnType: 'application' },
            { btnType: 'shop', isSecondary: true },
          ]}
          scrollTrigger={scrollTrigger}
          lid="fee_family"
        />

        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['product', 'service', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default FeeFamily
