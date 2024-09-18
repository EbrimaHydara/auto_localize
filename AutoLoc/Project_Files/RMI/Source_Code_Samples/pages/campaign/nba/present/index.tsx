import type { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
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
import { TxtCap, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { anchorCallback } from '@components/utils/anchorCallback'
import { AccordionList } from '@components/atoms/AccordionList'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { IconChevronRight, IconArrowDown, IconArrowUp } from '@components/icons'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { BannerHover } from '@components/atoms/Banner'
import { CampaignRule2138 } from '@components/include/campaign/rules/2024/CampaignRule2138'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'

const CpnLabelWrap = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 0;
  }
`
const KvHeading = styled.div`
  img {
    ${mixins.mq.MinL} {
      max-width: none;
      width: auto;
      max-height: 420px;
      height: calc((420 / 1032) * 100vw);
      aspect-ratio: 2000 / 420;
    }
    ${mixins.mq.MinCustom('1032px')} {
      height: 420px;
    }
  }
  ${mixins.mq.MinL} {
    background: linear-gradient(to right, #083d77, #8f3f40);
    display: flex;
    justify-content: center;
  }
`

const CustomLinkIconBefore = styled(LinkIconBefore)`
  display: inline;
`
const SectionTitle = styled.h2`
  padding-block: 12px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: #00428c;
`
const CampaignList = styled.ul`
  display: grid;
  gap: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 20px;
  }
  > li {
    border: 1px solid ${props => props.theme.colors.monotone75};
    background: ${props => props.theme.colors.monotone97};
    ${mixins.mq.MinL} {
      display: grid;
      grid-row: span 2;
      grid-template-rows: auto 1fr;
      grid-template-rows: subgrid;
    }
    & + li {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 36px;
        height: 36px;
        background: url(${assets}img/campaign/replacement-warranty-sim/icon-plus.png)
          no-repeat;
        background-size: contain;
        top: -28px;
        left: 50%;
        transform: translateX(-50%);
        ${mixins.mq.MinL} {
          top: 50%;
          left: -28px;
          transform: translate(0, -50%);
        }
      }
    }
  }
`
const CampaignListTtl = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 22px 16px 24px 20px;
  background: ${props => props.theme.colors.white};
  > div:first-child {
    flex-shrink: 0;
  }
`
const CampaignListBody = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 16px 20px;
`
const CustomMediaGrid = styled(MediaGrid)`
  align-items: center;
`
const CustomInfoboxBorder = styled(InfoboxBorder)`
  position: relative;
  margin-top: 56px;
  &::before {
    position: absolute;
    content: '';
    width: 70px;
    height: 18px;
    background: url(${assets}img/campaign/replacement-warranty-sim/icon-polygon.png)
      no-repeat;
    background-size: contain;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
`
const CustomListDisc = styled.ul`
  > li {
    padding-left: 16px;
    text-indent: -16px;
    &::before {
      content: '';
      display: inline-block;
      margin-right: 8px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      vertical-align: middle;
      border-radius: 50%;
      background-color: #8f8f8f;
    }
  }
`
const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.gap.l};
  ${mixins.mq.MaxM} {
    gap: ${props => props.theme.gap.l} ${props => props.theme.gap.m};
  }
  li {
    width: calc((100% - (${props => props.theme.gap.l} * 3)) / 4);
    ${mixins.mq.MaxM} {
      width: calc((100% - ${props => props.theme.gap.m}) / 2);
    }
  }
  img {
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: left;
  }
`
const ServiceAppearBox = styled.div`
  background-color: #fffee8;
  padding: 47px 60px 24px;
  ${mixins.mq.MaxM} {
    padding: 51px 16px 16px;
  }
`
const ServiceAppearLayout = styled(MediaGrid)`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 451px;
    height: 65px;
    background: url(${assets}img/campaign/nba/present/img-hukidashi-pc.png)
      no-repeat;
    background-size: contain;
    top: -38px;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mixins.mq.MaxM} {
      width: 311px;
      height: 76px;
      background: url(${assets}img/campaign/nba/present/img-hukidashi-sp.png)
        no-repeat;
      background-size: contain;
      top: -45px;
    }
  }
  > div:first-child {
    margin-top: 16px;
  }
`

const CampaignNbaPresent: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    '【楽天モバイルご契約者様限定】3GBまたは20GB超過のデータ利用でNBA豪華景品が当たる！'
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

  const directories = [
    {
      label: 'キャンペーン・特典',
      path: '/campaign/',
    },
  ]

  const labelArgs = {
    item: [
      { text: 'エントリー必要', isEmp: false },
      { text: 'ご契約者様対象', isEmp: false },
      { text: 'NBA LEAGUE PASS for 楽天モバイル視聴者様対象', isEmp: false },
    ],
  }

  const scriptLoad1 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    const scriptFunction = document.createTextNode(`
    window.rexButtons = {language: 'ja', buttons: [{"code":"/rmobile/nba/231225","theme":"red","wide":true,"showCelebration":false,"alreadyAppliedText":"エントリー済みです","ids":["rex-ceb-01"]}]}
    `)
    script.appendChild(scriptFunction)
    document.body.appendChild(script)
  }
  const scriptLoad2 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src =
      'https://cdn.rex.contents.rakuten.co.jp/rex-ceb/5.1.0/static/js/main.js'
    document.body.appendChild(script)
  }

  useEffect(() => {
    scriptLoad1()
    scriptLoad2()
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="エントリー＆条件達成でNBA豪華商品を60名様にプレゼント！20GB超過でクーポンとタオルがダブルで当たるチャンス！楽天モバイル（Rakuten最強プラン）ご利用中の方が対象です"
        noindex={false}
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
                srcSet={`${assets}img/campaign/nba/present/kv-sp-240122.png`}
                width="834"
                height="1023"
              />
              <img
                src={`${assets}img/campaign/nba/present/kv-pc-240122.png`}
                width="2000"
                height="420"
                alt={`楽天モバイルへ初めてお申し込みで2,000ポイントプレゼント!`}
              />
            </picture>
          </h1>
        </KvHeading>

        <SystemContainer>
          <div className={Utils['Align-center']}>
            <TxtCap className={Utils['Mt-16']}>
              ※キャンペーン開始時点（2024年1月22日（月）10:00）で「Rakuten最強プラン」をご利用中の方が対象となります
            </TxtCap>
            <TxtEmp02 as="p" className={Utils['Mt-16']}>
              本キャンペーンは2024年2月29日をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtEmp02>
            <Heading level="2" className={`${Utils['Mt-32']}`} id="entry">
              キャンペーンの達成条件
            </Heading>
            <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']}`}>
              本キャンペーンには達成条件があります。必ず
              <LinkNormal
                href="#campaign-rule2138"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  anchorCallback(e, 'campaign-rule2138')
                }
              >
                キャンペーンルール
              </LinkNormal>
              をご確認ください。
            </p>
          </div>

          <DescriptionListDefault className={`${Utils['Mt-16']}`}>
            <div>
              <dt>エントリー期間</dt>
              <dd>2024年1月22日（月）10:00～2月29日（木）23:59まで</dd>
            </div>
            <div>
              <dt>データ利用量の集計期間</dt>
              <dd>
                2024年1月1日（月）0:00～1月31日（水）23:59
                <br />
                2024年2月1日（木）0:00～2月29日（木）23:59
              </dd>
            </div>
          </DescriptionListDefault>

          <TxtCap
            className={`${Utils['Mt-8']} ${Utils['Align-center']} ${Utils['Color-primary']}`}
            as="p"
          >
            ※条件達成した回線数に応じて、当選確率は上がります
            ※両期間で条件達成した場合、当選確率が2倍となります
          </TxtCap>

          <TxtCap
            className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
            as="p"
          >
            ※1月および2月のデータ利用量がともに3GBに達しなかった場合抽選対象外
          </TxtCap>

          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <ButtonPrimaryLarge as="button" aria-disabled="true">
              エントリーする
            </ButtonPrimaryLarge>
          </div>
          <p className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
            <CustomLinkIconBefore
              href="#campaign-rule2138"
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                anchorCallback(e, 'campaign-rule2138')
              }
            >
              <IconArrowDown />
              キャンペーンルール
            </CustomLinkIconBefore>
          </p>
        </SystemContainer>

        <SystemContainer>
          <section className={Utils['Mt-56']}>
            <CampaignList>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/nba/present/icon-campaign-01.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    エントリーする
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <LinkIconBefore
                    href="#entry"
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                      anchorCallback(e, 'entry')
                    }
                  >
                    <IconArrowUp />
                    エントリーはこちら
                  </LinkIconBefore>
                </CampaignListBody>
              </li>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/nba/present/icon-campaign-02.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    NBA Rakutenにログインしてコンテンツを視聴
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <LinkIconAfter
                    href="https://nba.rakuten.co.jp/?scid=wi_rmb_nba"
                    target="_blank"
                  >
                    NBA Rakutenはこちら
                    <IconChevronRight />
                  </LinkIconAfter>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    楽天モバイルにご登録の楽天IDでNBA Rakutenにログイン
                  </TxtCap>
                </CampaignListBody>
              </li>
              <li>
                <CampaignListTtl>
                  <div>
                    <img
                      src={`${assets}img/campaign/nba/present/icon-campaign-03.png`}
                      alt=""
                      width={47}
                      height={47}
                    />
                  </div>
                  <Heading level="4" as="h3">
                    1月または2月に3GB超過のデータ利用量を達成
                  </Heading>
                </CampaignListTtl>
                <CampaignListBody>
                  <LinkIconAfter href="/guide/data-traffic/?l-id=campaign_nba_present_guide_data-traffic">
                    データ利用量の確認方法はこちら
                    <IconChevronRight />
                  </LinkIconAfter>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※クーポンの抽選はデータ利用量が20GB超過の方が対象です
                  </TxtCap>
                </CampaignListBody>
              </li>
            </CampaignList>

            <CustomInfoboxBorder>
              <CustomMediaGrid>
                <MediaImage>
                  <img
                    src={`${assets}img/campaign/nba/present/img-flow-present.png`}
                    width="304"
                    height="156"
                    alt=""
                  />
                </MediaImage>
                <div>
                  <TxtSize as="p" size="ll">
                    <TxtEmp02>抽選で豪華景品プレゼント</TxtEmp02>
                  </TxtSize>
                  <p className={Utils['Mt-8']}>
                    2024年5月末日ごろにクーポンの当選はメールにて、タオルの当選は商品の発送をもってお知らせさせていただきます。クーポンは楽天モバイルにご登録のメールアドレス、タオルは楽天モバイルにご登録の氏名・契約者住所に発送しますので、ご登録情報にお間違いがないかご確認ください。
                  </p>
                  <p className={Utils['Mt-8']}>
                    <LinkIconAfter href="/guide/change-address/?l-id=campaign_nba_present_guide_change-address">
                      契約者情報の確認方法
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </div>
              </CustomMediaGrid>
            </CustomInfoboxBorder>
          </section>
        </SystemContainer>

        <SectionTitle className={`${Utils['Mt-64']}`}>
          楽天モバイルご契約者様なら、NBA全試合の視聴が無料！
        </SectionTitle>
        <SystemContainer>
          <Heading
            level="3"
            className={`${Utils['Mt-24']} ${Utils['Align-center']}`}
          >
            2023-24のシーズン全試合配信！
          </Heading>
          <BannerHover
            href="/campaign/nba/?l-id=campaign_nba_present_campaign_nba"
            className={`${Utils['Mt-16']}`}
          >
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/nba/present/bnr-nba-free-sp.png`}
                width="834"
                height="750"
              />
              <img
                src={`${assets}img/campaign/nba/present/bnr-nba-free-pc.png`}
                width="1032"
                height="287"
                alt="Rakuten最強プランご利用でNBA全試合無料！2023-24のシーズン全試合配信！"
              />
            </picture>
          </BannerHover>
          <ServiceAppearBox className={`${Utils['Mt-72']}`}>
            <ServiceAppearLayout>
              <MediaImage>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/campaign/nba/present/img-service-appear-sp.png`}
                    width="834"
                    height="180"
                  />
                  <img
                    src={`${assets}img/campaign/nba/present/img-service-appear-pc.png`}
                    width="1032"
                    height="287"
                    alt=""
                  />
                </picture>
              </MediaImage>
              <div>
                <p>例えば、</p>
                <CustomListDisc>
                  <li>
                    2.5時間の映画をNetflixで1作品見ると、
                    <TxtEmp02>約2.5GB</TxtEmp02>
                  </li>
                  <li>
                    通学・通勤時間に約1時間YouTubeを見ると、
                    <TxtEmp02>約0.7GB</TxtEmp02>
                  </li>
                  <li>
                    1カ月に映画を3本、YouTubeを1日1時間（20日間）視聴した場合、
                    <TxtEmp02>約21.5GB</TxtEmp02>
                  </li>
                </CustomListDisc>
                <p className={`${Utils['Mt-8']}`}>
                  スキマ時間に動画を楽しんで応募条件を達成できます！
                </p>
                <p className={`${Utils['Mt-8']}`}>
                  <LinkIconAfter href="/guide/data-traffic/?l-id=campaign_nba_present_guide_data-traffic">
                    データ利用量の確認方法
                    <IconChevronRight />
                  </LinkIconAfter>
                </p>
              </div>
            </ServiceAppearLayout>
            <div className={`${Utils['Mt-16']}`}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/nba/present/img-text-service-price-sp.png`}
                  width="834"
                  height="312"
                />
                <img
                  src={`${assets}img/campaign/nba/present/img-text-service-price-pc.png`}
                  width="911"
                  height="79"
                  alt="Rakuten最強プランなら20GBを超えても2,980円/月(税込3,278円)※通話料等別"
                />
              </picture>
            </div>
          </ServiceAppearBox>
        </SystemContainer>

        <SectionTitle className={`${Utils['Mt-64']}`}>
          NBAグッズが買える！
          <br className={`${Utils['Show-oox']}`} />
          クーポン対象店舗　楽天スポーツゾーン
        </SectionTitle>
        <SystemContainer>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ProductList>
              <li>
                <LinkNormal href="https://item.rakuten.co.jp/rakutensportszone/to008/">
                  <img
                    src={`${assets}img/campaign/nba/present/img-product-01.png`}
                    width="240"
                    height="157"
                    alt=""
                  />
                  <p className={`${Utils['Mt-8']}`}>
                    NBA 別注 チーム レタリング スウェット オーバーフィット
                  </p>
                </LinkNormal>
              </li>
              <li>
                <LinkNormal href="https://item.rakuten.co.jp/rakutensportszone/to015/">
                  <img
                    src={`${assets}img/campaign/nba/present/img-product-02.png`}
                    width="240"
                    height="157"
                    alt=""
                  />
                  <p className={`${Utils['Mt-8']}`}>
                    【別注】NBA 全30チーム ロゴデザイン Tシャツ
                    ウェスタン・カンファレンス / NBA ALL 30 TEAM LOGO T-SHIRTS
                    WESTERN CONFERENCE 半袖
                  </p>
                </LinkNormal>
              </li>
              <li>
                <LinkNormal href="https://item.rakuten.co.jp/rakutensportszone/to028/">
                  <img
                    src={`${assets}img/campaign/nba/present/img-product-03.png`}
                    width="240"
                    height="157"
                    alt=""
                  />
                  <p className={`${Utils['Mt-8']}`}>
                    NBA公式 Wilson NBA 別注 ダブルフェイス スウェット フーディー
                  </p>
                </LinkNormal>
              </li>
              <li>
                <LinkNormal href="https://item.rakuten.co.jp/rakutensportszone/era0487/">
                  <img
                    src={`${assets}img/campaign/nba/present/img-product-04.png`}
                    width="240"
                    height="157"
                    alt=""
                  />
                  <p className={`${Utils['Mt-8']}`}>
                    NEW ERA x 楽天別注 NBA 9Forty A-Frame Beef and
                    Broccoliキャップ Los Angeles Lakers Boston Celtics
                    ロサンゼルス レイカーズ ボストン セルティックス
                  </p>
                </LinkNormal>
              </li>
            </ProductList>
            <ButtonPrimaryLarge
              as="a"
              href="https://www.rakuten.co.jp/rakutensportszone/?scid=wi_rmb_rakutensportszone"
              target="_blank"
              className={Utils['Mt-32']}
            >
              クーポン対象店舗はこちら
            </ButtonPrimaryLarge>
          </div>
        </SystemContainer>

        <SystemContainer>
          <section className={Utils['Mt-48']}>
            <Heading level="2" className={`${Utils['Align-center']}`}>
              よくあるご質問
            </Heading>
            <AccordionList
              text={'クーポンを獲得できるのはいつですか？'}
              isOpened={false}
              className={Utils['Mt-24']}
            >
              <p>
                2024年5月末日ごろです。
                <br />
                クーポンの当選は、メールにて当選者にのみお知らせさせていただきます。
              </p>
            </AccordionList>
            <AccordionList
              text={'景品の発送はいつごろになりますか？'}
              isOpened={false}
            >
              <p>
                2024年5月末日ごろです。
                <br />
                タオルの当選は商品の発送をもって当選者にのみお知らせさせていただきます。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'キャンペーン達成条件は、何月のデータ利用量で判定されますか？'
              }
              isOpened={false}
            >
              <p>
                2024年1月または2月のどちらかの月でデータ利用量が3GBを超過した方が条件達成となり、抽選対象になります。
                <br />
                <TxtCap>※クーポンは20GB超過で抽選対象になります。</TxtCap>
              </p>
            </AccordionList>
            <AccordionList
              text={
                'NBA Rakutenのコンテンツを視聴したか確認する方法はありますか？'
              }
              isOpened={false}
            >
              <p>
                申し訳ございませんが、確認することはできません。エントリーした楽天ID、楽天モバイルにご登録の楽天ID、NBA
                Rakutenの楽天IDの3点が一致していることをご確認の上、NBA
                Rakutenのコンテンツをご視聴ください。
              </p>
            </AccordionList>
            <AccordionList
              text={
                'クーポンとタオル両方が当たるチャンスの対象条件は何ですか？'
              }
              isOpened={false}
            >
              <p>
                キャンペーン条件を達成した方のうち、2024年1月または2月のどちらかの月でデータ利用量が20GBを超過した方です。
              </p>
            </AccordionList>
          </section>
          <section className={Utils['Mt-56']}>
            <Heading level="2" id="campaign-rule2138">
              【楽天モバイルご契約者様限定】3GBまたは20GB超過のデータ利用でNBA豪華景品が当たる！
            </Heading>
            <TxtEmp02
              as="p"
              className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
            >
              本キャンペーンは2024年2月29日をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtEmp02>
            <CampaignRule2138 />
          </section>
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default CampaignNbaPresent
