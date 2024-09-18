import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { SystemContainer, SystemWrapper } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import Utils from '@styles/Utils.module.scss'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import React from 'react'
import { ButtonRegular } from '@components/atoms/Buttons'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { mixins } from '@components/utils/Mixins'
import { ListDisc } from '@components/atoms/List'
import { AccordionList } from '@components/atoms/AccordionList'
import { MediaGridHalf, MediaImage } from '@components/layout/Media'
import { Table } from '@components/atoms/Table'
import { FlowList } from '@components/atoms/Flow'
import { IconNewTabLine } from '@components/icons'

const Kv = styled.div`
  border-top: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  text-align: center;
`
const SystemContainerCustom = styled(SystemContainer)`
  max-width: 680px;
  ${mixins.mq.MinL} {
    padding: 0;
  }
`
const GrayBox = styled.div`
  padding: 32px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const Grid = styled.div`
  display: grid;
  gap: 16px 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: 150px 1fr;
  }
`
const MediaGridHalfCustom = styled(MediaGridHalf)`
  ${mixins.mq.MaxM} {
    > div:last-child {
      margin-top: 16px;
    }
  }
`
const AccordionListCustom = styled(AccordionList)`
  background-color: ${props => props.theme.colors.monotone97};
  > button {
    &:hover {
      background-color: ${props => props.theme.colors.monotone88};
    }
  }
`
const FlowListWrap = styled.ol`
  counter-reset: count;
  > li {
    counter-increment: count;
  }
  .title {
    &::before {
      content: counters(count, '') '. ';
      font-size: ${props => props.theme.fonts.l};
    }
  }
`

const listArgs = {
  text: [
    {
      text: 'データ通信専用（音声通話はご利用いただけません）',
    },
    {
      text: (
        <>
          基本データ容量は7GB/30日間
          <br />
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※7GB超過後は通信速度が200kbpsに制限されます
          </TxtCap>
        </>
      ),
    },
    {
      text: (
        <>
          ご利用可能期間は利用開始された日の29日後の23:59まで
          <br />
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ご利用可能期間を過ぎると回線が利用できなくなります。自動的に料金が発生することはございません
          </TxtCap>
        </>
      ),
    },
    {
      text: 'ご利用にはeSIM対応製品が必要',
    },
    {
      text: 'おひとり様1回線まで',
    },
    {
      text: '18歳以上の方のみ対象',
    },
  ],
}

const CampaignDatatrialWebentry: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイル1カ月無料お試しプラン'
  const description = ''

  return (
    <>
      <CustomHead
        directories={[{ path: '/campaign/', label: 'キャンペーン・特典' }]}
        description={description}
        pagetitle={pagetitle}
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader />
        <Kv>
          <h1>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/campaign/data-trial/web-entry/kv-sp.png`}
                width="834"
                height="734"
              />
              <img
                src={`${assets}img/campaign/data-trial/web-entry/kv-pc.png`}
                width="1032"
                height="240"
                alt="楽天モバイル1カ月無料お試しプラン データ7GBプレゼント"
              />
            </picture>
          </h1>
        </Kv>
        <SystemContainerCustom>
          <div className={Utils['Mt-32']}>
            <TxtSize as="p" size="m">
              <TxtEmp02>楽天モバイルを1カ月無料でお試しできます！</TxtEmp02>
            </TxtSize>
          </div>
        </SystemContainerCustom>
        <GrayBox className={Utils['Mt-32']}>
          <SystemContainerCustom>
            <Heading level="2" className={Utils['Align-center']}>
              お試しプランの概要
            </Heading>
            <ListDisc className={Utils['Mt-16']} {...listArgs} />
            <AccordionListCustom
              text={'データ通信量の目安'}
              isOpened={false}
              className={Utils['Mt-16']}
            >
              <TxtCap as="ul" className={Utils['Mt-8']}>
                <li>
                  ※下記はあくまで1コンテンツを単独で利用した目安のデータ量です。写真や動画については画質やサイズなどによって使用するデータ通信量が変動いたします
                </li>
                <li>
                  ※ご利用状況や操作内容の組み合わせにより、ご利用できる内容は変動します
                </li>
                <li>
                  ※掲載の商品名称やサービス名称などは、一般に各社の商標または登録商標です
                </li>
                <li>
                  ※各社の商標記載においては™や®などの商標表示を省略する場合があります
                </li>
              </TxtCap>
              <MediaGridHalfCustom className={Utils['Mt-16']}>
                <div>
                  <dl>
                    <dt>
                      <TxtEmp01>YouTube</TxtEmp01>
                    </dt>
                    <dd className={Utils['Mt-8']}>標準画質：約450MB／1時間</dd>
                    <dd className={Utils['Mt-8']}>
                      <Table>
                        <table>
                          <thead>
                            <tr>
                              <th>データ利用量</th>
                              <th>利用可能目安</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1GB</td>
                              <td>約2.2時間</td>
                            </tr>
                          </tbody>
                        </table>
                      </Table>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※標準画質で1時間視聴するのに約450MB消費した場合
                      </TxtCap>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>
                      <TxtEmp01>動画配信サービス（Netflix）</TxtEmp01>
                    </dt>
                    <dd className={Utils['Mt-8']}>
                      Netflix（HD画質）：約1,300MB／1時間
                    </dd>
                    <dd className={Utils['Mt-8']}>
                      <Table>
                        <table>
                          <thead>
                            <tr>
                              <th>データ利用量</th>
                              <th>利用可能目安</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1GB</td>
                              <td>約0.8時間</td>
                            </tr>
                          </tbody>
                        </table>
                      </Table>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※Netflix（HD画質）で1時間視聴するのに約1,300MB消費した場合
                      </TxtCap>
                    </dd>
                  </dl>
                </div>
              </MediaGridHalfCustom>
            </AccordionListCustom>
          </SystemContainerCustom>
        </GrayBox>
        <SystemContainerCustom className={Utils['My-32']}>
          <Heading level="2" className={Utils['Align-center']}>
            お試しプランのご利用方法
          </Heading>
          <FlowListWrap className={Utils['Mt-16']}>
            <FlowList>
              <Heading level="3" className="title">
                ショップへの来店予約
              </Heading>
              <ButtonRegular
                as="a"
                href="/shop/?l-id=campaign_data-trial_web-entry_shop"
                className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
              >
                お近くのショップを探す・来店予約
              </ButtonRegular>
              <TxtCap as="ul" className={Utils['Mt-16']}>
                <li>
                  ※カウンターが空き次第のご案内となり、多少の待ち時間をいただく場合がございます。あらかじめご了承ください。
                </li>
                <li>※お電話での来店予約は受け付けておりません。</li>
                <li>※一部のショップでは、来店予約いただけません。</li>
                <TxtEmp02 as="li">
                  ※来店時のスムーズな対応のため、来店予約をお願いしております。ご予約が難しい場合は、直接対象店舗へご来店ください。
                </TxtEmp02>
                <TxtEmp02 as="li">
                  ※本プランの来店予約では以下の項目を選択してください。
                  <br />
                  　・製品の選択：製品を店頭で購入しない
                  <br />
                  　・ご用件の確認：その他
                </TxtEmp02>
              </TxtCap>
            </FlowList>
            <FlowList>
              <Heading level="3" className="title">
                必要なものをご準備いただきご来店
              </Heading>
              <TxtEmp01
                as="p"
                className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
              >
                ご来店時に必要なもの
              </TxtEmp01>
              <AccordionList
                text={'本人確認書類'}
                isOpened={false}
                className={Utils['Mt-16']}
              >
                <Grid>
                  <MediaImage>
                    <img
                      src={`${assets}img/campaign/data-trial/web-entry/img-flow-03-1.png`}
                      width="150"
                      height="96"
                      alt=""
                    />
                  </MediaImage>
                  <div>
                    <TxtEmp01 as="p">
                      運転免許証、マイナンバーカードなど
                    </TxtEmp01>
                    <TxtCap as="ul" className={Utils['Mt-8']}>
                      <li>
                        ※外国籍のお客様は必要な本人確認書類が異なります。下記より詳細をご確認ください。
                      </li>
                    </TxtCap>
                    <ButtonRegular
                      as="a"
                      href="/guide/verify/?l-id=campaign_data-trial_web-entry_guide_verify"
                      className={Utils['Mt-16']}
                    >
                      利用できる本人確認書類を確認する
                    </ButtonRegular>
                  </div>
                </Grid>
              </AccordionList>
              <AccordionList
                text={'楽天会員ユーザID・パスワード'}
                isOpened={false}
              >
                <Grid>
                  <MediaImage>
                    <img
                      src={`${assets}img/campaign/data-trial/web-entry/img-flow-03-2.png`}
                      width="150"
                      height="96"
                      alt=""
                    />
                  </MediaImage>
                  <div>
                    <TxtEmp01 as="p">楽天会員でないお客様</TxtEmp01>
                    <p className={Utils['Mt-8']}>
                      楽天IDをお持ちでないお客様は、楽天会員に登録（無料）をお願いします。
                    </p>
                    <ButtonRegular
                      as="a"
                      href="https://www.rakuten.co.jp/myrakuten/help/"
                      target="_blank"
                      className={Utils['Mt-16']}
                    >
                      楽天会員に登録する
                      <IconNewTabLine className={Utils['Pl-8']} />
                    </ButtonRegular>

                    <TxtEmp01 as="p" className={Utils['Mt-16']}>
                      楽天会員のお客様
                    </TxtEmp01>
                    <p className={Utils['Mt-8']}>
                      登録情報が最新の情報でお申し込み内容と一致しているか、ご確認ください。
                    </p>
                    <ButtonRegular
                      as="a"
                      href="https://member.id.rakuten.co.jp/rms/nid/menufwd"
                      target="_blank"
                      className={Utils['Mt-16']}
                    >
                      楽天会員情報を確認・変更する
                      <IconNewTabLine className={Utils['Pl-8']} />
                    </ButtonRegular>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      <TxtEmp02>
                        ※店頭でのお申し込み時に使用します。お申し込みご本人の会員情報が必要です。
                      </TxtEmp02>
                    </TxtCap>
                  </div>
                </Grid>
              </AccordionList>
              <AccordionList
                text={'楽天回線に対応するスマホ／製品'}
                isOpened={false}
              >
                <Grid>
                  <MediaImage>
                    <img
                      src={`${assets}img/campaign/data-trial/web-entry/img-flow-03-3.png`}
                      width="150"
                      height="96"
                      alt=""
                    />
                  </MediaImage>
                  <div>
                    <p>
                      お持ちのスマホがeSIM対応製品か、楽天モバイルで使えるかご確認ください。また、製品によっては事前に「SIMロック解除」のお手続きが必要です。
                    </p>
                    <ButtonRegular
                      as="a"
                      href="/product/byod/?l-id=campaign_data-trial_web-entry_product_byod"
                      className={Utils['Mt-16']}
                    >
                      楽天モバイルで使えるか確認する
                    </ButtonRegular>
                    <ButtonRegular
                      as="a"
                      href="/faq/detail/10000070/?l-id=campaign_data-trial_web-entry_faq_detail_10000070"
                      className={Utils['Mt-16']}
                    >
                      SIMロックの解除について
                    </ButtonRegular>
                  </div>
                </Grid>
              </AccordionList>
            </FlowList>
            <FlowList>
              <Heading level="3" className="title">
                利用開始
              </Heading>
              <p className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}>
                ご来店時に開通の手続きを行っていただき、ご利用開始となります。
              </p>
            </FlowList>
          </FlowListWrap>
        </SystemContainerCustom>
      </SystemWrapper>

      <GlobalFooter copyrightSimple={true} />
    </>
  )
}

export default CampaignDatatrialWebentry
