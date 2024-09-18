import type { NextPage } from 'next'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import axios from 'axios'
import { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  AttentionBody,
  AttentionContainer,
  AttentionIconInfo,
  AttentionInfo,
} from '@components/atoms/Attention'
import { Heading } from '@components/atoms/Heading'
import { Tab } from '@components/atoms/Tab'
import { IconChevronRight, IconNewTabLine } from '@components/icons'
import { LinkIconAfter } from '@components/atoms/Link'
import { AccordionList } from '@components/atoms/AccordionList'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { SupportTrouble } from '@components/fragment/support/top/SupportTrouble'
import { FrequentlyAskedFaq } from '@components/fragment/support/top/FrequentlyAskedFaq'
import { BannerHover } from '@components/atoms/Banner'
import { SupportSearch } from '@components/fragment/support/top/SupportSearch'
import { MyRakutenAppVerchical } from '@components/include/common/MyRakutenAppVerchical'
import {
  Category,
  members,
  preMembers,
} from '@components/fragment/support/top/categoryData'
import { TxtCap } from '@components/atoms/Txt'
import { SupportCommunity } from '@components/include/support/SupportCommunity'
import { SupportSurveyBnr } from '@components/include/common/SupportSurveyBnr'
import { EntrySupportBnrHelf } from '@components/include/support/EntrySupportBnrHelf'
import { GuideProcedureBnr } from '@components/include/common/GuideProcedureBnr'
import { MediaGridHalf, MediaImage } from '@components/layout/Media'
import { AttentionSupport } from '@components/fragment/support/top/AttentionSupport'

const KvHeading = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  background: url(${assets}img/support/kv-sp.png?210311) center/430px 200px
    no-repeat;
  ${mixins.mq.MinM} {
    background: url(${assets}img/support/kv-tab.png) center/834px 200px;
  }
  ${mixins.mq.MinL} {
    background: url(${assets}img/support/kv-pc.png) center/1440px 200px
      no-repeat;
  }
  > .block {
    ${mixins.mq.MinL} {
      text-align: center;
    }
  }
  .title {
    font-size: 38px;
    line-height: 1.3;
    ${mixins.mq.MinL} {
      font-size: 48px;
      line-height: 1.2;
    }
  }
`
const SupportTopTab = styled(Tab)`
  position: relative;
  > ul {
    max-width: 1064px;
    margin-inline: auto;
    padding: 0 16px;
    border-bottom: none;
  }
  > div {
    padding-top: 32px;
    /* padding-bottom: 64px; */
    background-color: #fef9f2;
    border-top: solid 3px ${props => props.theme.colors.primary};
  }
`

const SupportCards = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
  /* display: none; */
  ${mixins.mq.MinL} {
    margin-top: 34px;
    row-gap: 42px;
    column-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
  }
`
const SupportCard = styled.li`
  box-shadow: 0 2px 2px #f2eee8;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  background-color: #fff;
  ${mixins.mq.MinL} {
    position: relative;
  }

  .icon {
    margin-right: 8px;
    font-size: 28px;
    color: ${props => props.theme.colors.primary};
    ${mixins.mq.MinL} {
      margin-right: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      font-size: 32px;
      line-height: 1;
      top: 0;
      z-index: 3;
    }
  }

  .list {
    position: relative;
    z-index: 2;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    > button {
      padding: 0;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      &:hover {
        background-color: #fff;
      }
      ${mixins.mq.MinL} {
        pointer-events: none;
      }

      & + div > div {
        ${mixins.mq.MinL} {
          transition: none;
        }
      }

      > span {
        &:first-of-type {
          margin-right: 24px;
          transform: none;
          position: relative;
          background-color: transparent;
          ${mixins.mq.MinL} {
            display: none;
          }
          > span {
            font-size: 19px;
            font-weight: 700;
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    .accordionlist-collapse-content {
      padding: 0;
    }
  }

  &::before {
    ${mixins.mq.MinL} {
      content: '';
      display: block;
      width: 72px;
      height: 36px;
      border: 1px solid #bfbfbf;
      border-bottom: none;
      background-color: #fff;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50% 50% 0 0/100% 100% 0 0;
      position: absolute;
      z-index: 1;
    }
  }
`
const CardHeading = styled.span`
  width: 100%;
  padding: 12px 0 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  ${mixins.mq.MinL} {
    padding: 16px 16px 0;
    display: block;
  }

  > .title {
    font-size: 16px;
    display: flex;
    align-items: center;
    ${mixins.mq.MinL} {
      margin-top: 23px;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.4;
      display: block;
      text-align: center;
    }
  }

  > .arrow {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    transition: transform 0.1s ease-in-out;
    ${mixins.mq.MinL} {
      display: none;
    }
  }
  &[aria-expanded='true'] {
    > .arrow {
      ${mixins.mq.MaxM} {
        transform: rotate(-180deg);
      }
    }
  }
`
const CardBody = styled.ul`
  margin: 0 24px;
  padding-top: 8px;
  padding-bottom: 24px;
  border-top: 1px solid #bfbfbf;
  background-color: #fff;
  transition: height 600ms;
  ${mixins.mq.MinL} {
    margin-top: 16px;
  }
`
const CardLink = styled(LinkIconAfter)`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  &:hover {
    ${mixins.mq.MinL} {
      background-color: ${props => props.theme.colors.monotone97};
      text-decoration: underline;
    }
  }

  > .arrow {
    margin-right: 0;
    margin-left: 8px;
    font-size: 1em;
    font-weight: 700;
  }
  > .tab {
    margin-right: 0;
    margin-left: 8px;
    font-weight: normal;
  }
`
const MyRakutenApp = styled.div`
  margin-inline: auto;
  max-width: 680px;
  border: solid 1px ${props => props.theme.colors.monotone75};
  padding: 24px 16px;
  ${mixins.mq.MinL} {
    padding: 24px;
  }
`
const LineUp = styled.div`
  margin-top: 48px;
  ${mixins.mq.MinL} {
    margin-top: 64px;
  }

  .read {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 24px;
    }
  }

  .btn {
    display: flex;
    row-gap: 24px;
    flex-direction: column;
    ${mixins.mq.MinL} {
      flex-direction: row;
      column-gap: 24px;
    }
    > div {
      flex: 1;
    }
  }
`

type AttentionItem = {
  title: string | JSX.Element
  link: string
  icon: string
  newTab: boolean
  weighting: number
}

const Support: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'お客様サポート'
  const directories = [{ path: '/support/', label: '' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const sectionTitle1 = 'カテゴリーから探す'

  const [matches, setMatches] = useState(false)
  const [attentionSupport, setAttentionSupport] = useState<
    Array<AttentionItem>
  >([])

  const CategoryIcon = useCallback(
    ({ item, className }: { item: Category; className?: string }) => {
      const Icon = item.icon
      return (
        <span className={className}>
          <Icon />
        </span>
      )
    },
    [],
  )

  const sortData = (data: Array<AttentionItem>) => {
    return data.sort((a, b) => {
      if (a.weighting !== b.weighting) {
        // 条件: weightingが大きいほど表示位置が上
        return b.weighting - a.weighting
      } else {
        // 条件: weightingが同じ場合、iconの「緊急」が上、「情報」が下
        if (a.icon !== b.icon) return a.icon === 'emergency' ? -1 : 1
        return 0
      }
    })
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${theme.min.l})`)
    setMatches(mediaQuery.matches)
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    mediaQuery.addEventListener('change', handler)
  }, [theme.min.l])

  useEffect(() => {
    axios
      // .get('/json/dummy-attention-all.json')
      .get('/web-api/attention-support/')
      .then(res => {
        res.data &&
          res.data.code === 'SUCCESS' &&
          setAttentionSupport(sortData(res.data.list))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのお客様サポートページ。楽天回線スマートフォン（スマホ）の設定方法、各種お手続き方法、ご契約時に必要なこと、お問い合わせ（問合せ）、紛失・故障・修理などをご案内します"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <AttentionSupport data={attentionSupport} />

        <AttentionInfo>
          <AttentionContainer>
            <AttentionIconInfo />
            <AttentionBody>
              <LinkIconAfter
                href="https://community.mobile.rakuten.net/"
                target="_blank"
                data-ratid="support-info_community"
                data-ratevent="click"
                data-ratparam="all"
              >
                お困りごとを質問・回答できる！「みんなの楽天モバイルコミュニティ」はこちら
                <IconNewTabLine />
              </LinkIconAfter>
            </AttentionBody>
          </AttentionContainer>
        </AttentionInfo>

        <KvHeading>
          <SystemContainer className="block">
            <Heading level="1" className="title">
              お客様サポート
            </Heading>
            <p className={Utils['Mt-16']}>
              お困りごとに合わせた、
              <br />
              最適な解決方法とお問い合わせ先を
              <br className={Utils['Disp-sp']} />
              ご案内いたします。
            </p>
          </SystemContainer>
        </KvHeading>

        <SupportTopTab
          className={Utils['Mt-48']}
          history="tabHistory_support_contractStatus"
          heading1={'ご利用中の方'}
          id1="tab1"
          id2="tab2"
          ratId1="support_top_tab_member"
          content1={
            <SystemContainer>
              <SupportSurveyBnr
                className={Utils['Align-center']}
                lid="support_campaign_support-survey"
              />
              <Heading
                level="2"
                className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
              >
                {sectionTitle1}
              </Heading>
              <SupportCards>
                {members.map((item, index) => {
                  return (
                    <SupportCard key={`${item.category}${index}`}>
                      <AccordionList
                        text={
                          <CardHeading>
                            <Heading level="3" as="span" className="title">
                              {typeof item.icon !== 'string' ? (
                                <CategoryIcon item={item} className="icon" />
                              ) : (
                                <img
                                  src={item.icon}
                                  height="32"
                                  alt=""
                                  className="icon"
                                />
                              )}
                              {item.title}
                            </Heading>
                          </CardHeading>
                        }
                        isOpened={false}
                        useCallback={matches}
                        openState={matches}
                        className="list"
                      >
                        <CardBody>
                          {item.menu.map((value, index) => {
                            return (
                              <li key={`${value}${index}`}>
                                <CardLink
                                  href={value.link}
                                  {...(value.target && {
                                    target: value.target,
                                  })}
                                >
                                  {value.name}
                                  {value.target === '_blank' ? (
                                    <IconNewTabLine className="tab" />
                                  ) : (
                                    <IconChevronRight className="arrow" />
                                  )}
                                </CardLink>
                              </li>
                            )
                          })}
                        </CardBody>
                      </AccordionList>
                    </SupportCard>
                  )
                })}
              </SupportCards>

              <SupportSearch
                className={Utils['Mt-64']}
                ratId="support_scroll-01_member_category"
                status="member"
              />

              <SupportTrouble
                className={Utils['Mt-64']}
                ratId="support_scroll-02_member_search"
                status="member"
              />

              <SupportCommunity
                className={Utils['Mt-64']}
                headAlign={Utils['Align-center']}
                rat="support_community"
                corner="round"
                lazy={true}
              />

              <FrequentlyAskedFaq className={Utils['Mt-64']} status="member" />

              <div
                className={`${Utils['Mt-64']} ${Utils['Align-center']} ${Utils['Pb-64']}`}
                data-ratid="support_scroll-03_member_faq"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <Heading level="2">お問い合わせ</Heading>
                <p className={Utils['Mt-16']}>
                  各種お問い合わせ窓口をご案内いたします。
                </p>
                <div className={Utils['Mt-24']}>
                  <ButtonRegularLarge
                    as="a"
                    href="/support/inquiry/?l-id=support_member_support_inquiry"
                  >
                    お問い合わせ窓口を調べる
                  </ButtonRegularLarge>
                </div>
              </div>
            </SystemContainer>
          }
          heading2={'ご利用開始前の方'}
          ratId2="support_top_tab_pre-member"
          content2={
            <SystemContainer>
              <MediaGridHalf>
                <MediaImage>
                  <GuideProcedureBnr lid="support_pre-member_guide_procedure" />
                </MediaImage>
                <MediaImage>
                  <EntrySupportBnrHelf lid="support_pre-member_guide_application-support" />
                </MediaImage>
              </MediaGridHalf>
              <Heading
                level="2"
                className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
              >
                {sectionTitle1}
              </Heading>
              <SupportCards>
                {preMembers.map((item, index) => {
                  return (
                    <SupportCard key={`${item.category}${index}`}>
                      <AccordionList
                        text={
                          <CardHeading>
                            <Heading level="3" as="span" className="title">
                              {typeof item.icon !== 'string' ? (
                                <CategoryIcon item={item} className="icon" />
                              ) : (
                                <img
                                  src={item.icon}
                                  height="32"
                                  alt=""
                                  className="icon"
                                />
                              )}
                              {item.title}
                            </Heading>
                          </CardHeading>
                        }
                        isOpened={false}
                        useCallback={matches}
                        openState={matches}
                        className="list"
                      >
                        <CardBody>
                          {item.menu.map((value, index) => {
                            return (
                              <li key={`${value}${index}`}>
                                <CardLink
                                  href={value.link}
                                  {...(value.target && {
                                    target: value.target,
                                  })}
                                >
                                  {value.name}
                                  {value.target === '_blank' ? (
                                    <IconNewTabLine className="tab" />
                                  ) : (
                                    <IconChevronRight className="arrow" />
                                  )}
                                </CardLink>
                              </li>
                            )
                          })}
                        </CardBody>
                      </AccordionList>
                    </SupportCard>
                  )
                })}
              </SupportCards>

              <SupportSearch
                className={Utils['Mt-64']}
                ratId="support_scroll-04_pre-member_category"
                status="premember"
              />

              <SupportTrouble
                className={Utils['Mt-64']}
                ratId="support_scroll-05_pre-member_search"
                status="premember"
              />

              <SupportCommunity
                className={Utils['Mt-64']}
                headAlign={Utils['Align-center']}
                rat="support_pre-member_community"
                corner="round"
                lazy={true}
              />

              <FrequentlyAskedFaq
                className={Utils['Mt-64']}
                status="premember"
              />

              <LineUp
                data-ratid="support_scroll-06_pre-member_faq"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <Heading level="2" className={Utils['Align-center']}>
                  製品ラインアップを確認する
                </Heading>
                <p className={`${Utils['Align-center']} read`}>
                  おすすめ製品のご案内、またお持ちのスマホが楽天モバイル（楽天回線）で使えるかをご確認ください。
                </p>
                <div
                  className={`${Utils['Mt-24']} ${Utils['Align-center']} btn`}
                >
                  <div>
                    <ButtonRegularLarge
                      href="/product/?l-id=support_top_pre-member_product"
                      as="a"
                    >
                      製品ラインアップを確認する
                    </ButtonRegularLarge>
                  </div>
                  <div>
                    <ButtonRegularLarge
                      href="/product/byod/?l-id=support_top_pre-member_product_byod"
                      as="a"
                    >
                      お持ちのスマホが使えるかを確認する
                    </ButtonRegularLarge>
                  </div>
                </div>
              </LineUp>
              <div
                className={`${Utils['Mt-64']} ${Utils['Align-center']} ${Utils['Pb-64']}`}
                data-ratid="support_scroll-07_pre-member_lineup"
                data-ratevent="appear"
                data-ratparam="all"
              >
                <Heading level="2">お問い合わせ</Heading>
                <p className={Utils['Mt-16']}>
                  各種お問い合わせ窓口をご案内いたします。
                </p>
                <div className={Utils['Mt-24']}>
                  <ButtonRegularLarge
                    as="a"
                    href="/support/inquiry/?l-id=support_pre-member_support_inquiry"
                  >
                    お問い合わせ窓口を調べる
                  </ButtonRegularLarge>
                </div>
              </div>
            </SystemContainer>
          }
        />

        <SystemContainer>
          <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
            <BannerHover href="/guide/support-movie/?l-id=support_top_bnr_guide_support-movie">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/support/bnr-rlink-343-108-220929.png`}
                />
                <img
                  src={`${assets}img/support/bnr-rlink-1032-120-220929.png`}
                  width="1032"
                  height="120"
                  alt=""
                  loading="lazy"
                />
              </picture>
            </BannerHover>
          </div>

          <MyRakutenApp className={Utils['Mt-48']}>
            <MyRakutenAppVerchical
              lazy={true}
              btnLid="support_top_guide_my-rakuten-mobile"
              appRat={[
                'support_top_myrakuten_google',
                'support_top_myrakuten_apple',
              ]}
              webRmRat="support_top_my-rakuten-mobile"
            />
          </MyRakutenApp>

          <div className={`${Utils['Mt-64']} ${Utils['Align-center']}`}>
            <Heading level="3">
              電気通信事業者協会相談窓口
              <br className={Utils['Disp-sp']} />
              （TCA相談窓口）
            </Heading>
            <p className={Utils['Mt-16']}>
              当社が加盟する一般社団法人電気通信事業者協会では、通信サービス全般に関するさまざまな
              <br />
              ご相談やお問い合わせ、業界に対するご意見・ご要望を受付ける相談窓口を運営しています。
              <br />
              詳細は電気通信事業者協会の相談窓口のご案内ページをご確認ください。
            </p>
            <div className={Utils['Mt-24']}>
              <LinkIconAfter href="https://www.tca.or.jp/consult/">
                電気通信事業者協会のページを見る
                <IconNewTabLine />
              </LinkIconAfter>
            </div>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ 一般社団法人電気通信事業者協会のサイトに移動します。
            </TxtCap>
          </div>

          <div className={`${Utils['Mt-64']} ${Utils['Align-center']}`}>
            <ButtonRegularLarge href="/" as="a">
              楽天モバイルトップへ
            </ButtonRegularLarge>
          </div>
          <div
            data-ratid="support_scroll-08_top-btn"
            data-ratevent="appear"
            data-ratparam="all"
          />
        </SystemContainer>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default Support
