import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { IconArrowDown } from '@components/icons'
import { AccordionList } from '@components/atoms/AccordionList'
import { anchorCallback } from '@components/utils/anchorCallback'
import { UlOnly } from '@components/atoms/List'
import { MediaGrid, MediaGridHalf, MediaImage } from '@components/layout/Media'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { MovieWrapper } from '@components/atoms/MovieWrapper'

const GrayBox = styled.div`
  padding-top: 56px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const TxtCapPrimary = styled(TxtCap)`
  color: ${props => props.theme.colors.primary};
`
const ServiceContents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
  }

  .img {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 30px;
    }
  }

  .txt {
    margin-top: 24px;
    ${mixins.mq.MinL} {
      margin-top: 16px;
    }
  }
`

const HeadingSpCenter = styled(Heading)`
  ${mixins.mq.MaxM} {
    text-align: center;
  }
`

const UsersVoice = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 32px;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;
  }
`

const VoiceContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  ${mixins.mq.MinL} {
    margin-top: 0 !important;
    display: block;
  }
`

const VoiceTxt = styled.div`
  margin-left: 12px;
  position: relative;
  text-align: center;
  font-weight: 400;
  flex: 1;
  z-index: 1;
  font-size: 15px;
  ${mixins.mq.MinL} {
    margin-left: 0;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    top: 50%;
    transform: translateY(-50%);
    ${mixins.mq.MinL} {
      top: auto;
      bottom: -17px;
      transform: translateY(0);
      transform: translateX(-50%);
    }
  }
  &::after {
    left: -12px;
    border-width: 11px 20px 11px 0;
    border-color: transparent ${props => props.theme.colors.white} transparent
      transparent;
    z-index: 2;
    ${mixins.mq.MinL} {
      border-width: 31px 18px 0 18px;
      left: 50%;
      border-color: ${props => props.theme.colors.white} transparent transparent
        transparent;
    }
  }
  &::before {
    left: -13px;
    border-width: 12px 22px 12px 0;
    border-color: transparent ${props => props.theme.colors.lightBlack}
      transparent transparent;
    z-index: 0;
    ${mixins.mq.MinL} {
      border-width: 33px 20px 0 20px;
      left: 50%;
      bottom: -18px;
      border-color: ${props => props.theme.colors.lightBlack} transparent
        transparent transparent;
    }
  }
`

const VoiceTxtBorder = styled.div`
  position: relative;
  border: solid 1px #c4c4c4;
  background-color: ${props => props.theme.colors.white};
  padding: 10px 12px;
  border-radius: 4px;
  z-index: 1;
  ${mixins.mq.MinL} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 13px 10px 12px;
    border-radius: 10px;
    min-height: 156px;
  }
  > p {
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    ${mixins.mq.MinL} {
      font-size: 18px;
    }
  }
`

const VoiceAge = styled.span`
  display: block;
  font-size: 14px;
  color: ${props => props.theme.colors.lightBlack};
  font-weight: normal;
  text-align: center;
  ${mixins.mq.MinL} {
    font-size: 16px;
  }
`

const VoiceImage = styled(MediaImage)`
  padding-right: 8px;
  width: 82px;
  ${mixins.mq.MinL} {
    margin-top: 34px;
    padding-left: 0;
    width: 100%;
    text-align: center;
    padding-right: 0;
  }
  > img {
    width: auto;
    ${mixins.mq.MinL} {
      width: 170px;
    }
  }
`

const ServiceReplacementwarrantyplus: NextPage = () => {
  const selectedCardIds = [
    'applecare',
    'replacement-warranty-sim',
    'applewatch-care',
  ]
  const theme = useContext(ThemeContext)
  const pagetitle = 'スマホ交換保証プラス'
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
  const labelArgs = {
    item: [{ text: '保証', isEmp: false }],
  }
  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「スマホ交換保証プラス」サービス紹介。スマートフォン（スマホ）やモバイルルーターの故障・紛失時に、最短で当日に新品同等の同一機種を交換品としてお届けするので安心です"
      />
      <SystemWrapper>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            スマホ交換保証プラス
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>

          <MediaGrid className={Utils['Mt-24']}>
            <MediaImage>
              <img
                src={`${assets}img/service/replacement-warranty-plus/img-illustration-hero-230313.png`}
                width="479"
                height="273"
                alt=""
              />
            </MediaImage>
            <div>
              <p>
                楽天モバイルで購入したスマートフォンやモバイルルーターの故障・紛失時に、最短で当日に新品同等の同一機種を交換品としてお届けします。
              </p>
              <p className={Utils['Mt-32']}>
                <TxtEmp02>スマホユーザー約3人に1人が故障経験あり</TxtEmp02>
                <TxtCapPrimary>※</TxtCapPrimary>
              </p>

              <p className={Utils['Mt-8']}>
                未加入の場合、故障時の新製品への機種変更金額が全額負担となります。
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※調査時期：2017年8月7日～14日
                スマホ利用者12,451人にWebアンケート 調査元：株式会社MM総研
              </TxtCap>
              <div className={Utils['Mt-24']}>
                <LinkIconBefore
                  href="#example"
                  onClick={e => anchorCallback(e, 'example')}
                >
                  <IconArrowDown />
                  費用負担例を見る
                </LinkIconBefore>
              </div>
            </div>
          </MediaGrid>

          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <TxtEmp02 className={Utils['Mr-8']}>オススメ！</TxtEmp02>
            <TxtEmp01>
              <AlphanumericSize size="l">715</AlphanumericSize>
              <TxtSize size="s">円／月</TxtSize>
            </TxtEmp01>
            <TxtCap className={Utils['Mt-8']} as="p">
              ※購入時（新規・機種変更）のみ選択可能
            </TxtCap>
          </div>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge as="a" href="/guide/replacement-warranty-plus/">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
          <TxtCap as="p" className={Utils['Mt-32']}>
            ※同一機種が在庫にない場合は、同等の楽天モバイルが指定する機種の中からご選択いただき、ご選択いただいた機種と交換いたします。
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※1契約につき、年間3回まで（うち、盗難・紛失による交換は年間2回まで）です。
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※交換受付のお申し込み時において、すでに指定回数のサービスを受けられている場合は、ご利用いただくことができません。
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※故障発生から30日以内に故障受付をする必要があります。
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※iPhoneの保証サービスに加入されたいお客様は、「
            <LinkNormal href="/service/iphone/applecare/">
              故障紛失保証 with AppleCare Services
            </LinkNormal>
            」をご利用ください。
          </TxtCap>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※すでにお持ちの楽天回線対応製品で保証サービスに加入されたいお客様は、「
            <LinkNormal href="/service/replacement-warranty-sim/">
              持ち込みスマホあんしん保証
            </LinkNormal>
            」をご利用ください。
          </TxtCap>

          <MovieWrapper
            className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
          >
            <iframe
              src="https://www.youtube.com/embed/6Jx3Lvqrauo"
              title="スマホ交換保証プラス"
              allow="autoplay;
              encrypted-media"
              allowFullScreen
            ></iframe>
          </MovieWrapper>
        </SystemContainer>

        <GrayBox className={Utils['Mt-56']}>
          <SystemContainer>
            <Heading level="2">サービス内容</Heading>
            <ServiceContents className={Utils['Mt-32']}>
              <div>
                <Heading level="3" className="title">
                  故障したら同一機種に交換
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration01.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>
                    破損、全損、水没、などによる故障だけでなく、盗難・紛失の際も、新品同等の同一機種を交換品としてお届けします。
                    <br />
                    お受け取り後、故障機からデータを移行すればすぐに使用可能です。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※
                    同一機種が在庫にない場合は、同等の楽天モバイルが指定する機種の中からご選択いただき、交換品として送付いたします。
                  </TxtCap>
                </div>
              </div>
              <div>
                <Heading level="3" className="title">
                  最短で当日にお届け
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration02.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>
                    東京都／神奈川県／千葉県／埼玉県なら、12時までの受付で最短で当日中に交換品をお届け！
                    <br />
                    その他全国の地域も、翌日にお届けします。（中国／四国地方の一部地域・離島などを除く
                    <TxtCap>※1</TxtCap>）<br />
                    さらに、受付完了から4時間以内に配送可能なオプションも！
                    <TxtCap>※2</TxtCap>
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※1
                    翌日お届けの対象外となる地域：島根県（松江市、安来市）、広島県（福山市）、鳥取県、岡山県、徳島県、香川県、愛媛県、高知県
                  </TxtCap>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※2 ＜4時間スピード配送＞
                    <br />
                    受付時間：9:00〜17:00
                    <br />
                    別途オプション料金：3,300円
                    <br />
                    対象地域：東京23区内
                  </TxtCap>
                </div>
              </div>
              <div>
                <Heading level="3" className="title">
                  一律6,600円で交換可能
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration03.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>
                    機種や購入価格問わず、すべて一律6,600円で、新品同等の同一機種に交換いただけます。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※
                    同一機種が在庫にない場合は、同等の楽天モバイルが指定する機種の中からご選択いただき、交換品として送付いたします。
                  </TxtCap>
                </div>
              </div>
              <div>
                <Heading level="3" className="title">
                  盗難・紛失時もあんしん
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration04.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>故障だけでなく、盗難・紛失も保証対象です。</p>
                </div>
              </div>
              <div>
                <Heading level="3" className="title">
                  電話、Webで受付可能
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration05.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>故障受付は電話、Webのどちらでも対応可能です。 </p>
                </div>
              </div>
              <div>
                <Heading level="3" className="title">
                  交換品の受け取り
                </Heading>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-illustration06.png?211210`}
                    width="328"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="txt">
                  <p>
                    交換品の受け取りは、コンビニや指定の宅配ロッカーでも可能です。
                  </p>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※
                    ファミリーマート、デイリーヤマザキ、ポプラなどの一部対象店舗
                  </TxtCap>
                </div>
              </div>
            </ServiceContents>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="2">ご利用者様の声と費用負担例</Heading>
          <HeadingSpCenter level="3" className={Utils['Pt-24']}>
            <TxtEmp02>
              スマホユーザー
              <br className={Utils['Disp-sp']} />
              約3人に1人が故障経験あり<TxtSize size="s">※</TxtSize>
            </TxtEmp02>
          </HeadingSpCenter>
          <p className={`${Utils['Disp-pc']} ${Utils['Mt-16']}`}>
            そんな時でもスマホ交換保証プラスに加入していれば、故障・紛失時の費用負担を最小限に抑えられます。
          </p>
          <p className={`${Utils['Disp-sp']} ${Utils['Mt-24']}`}>
            そんな時でもスマホ交換保証プラスに加入していれば、故障・紛失時の費用負担を最小限に抑えられます。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※
            調査時期：2017年8月7日～14日　スマートフォンユーザー12,451人にWebアンケート　調査元：株式会社MM総研
          </TxtCap>

          <Heading
            level="3"
            className={`${Utils['Align-center']} ${Utils['Mt-40']}`}
          >
            ご利用者様の声
          </Heading>

          <UsersVoice>
            <VoiceContent>
              <VoiceTxt>
                <VoiceTxtBorder>
                  <p>
                    ボタンが反応しなくなり、
                    <br className={Utils['Disp-pc']} />
                    交換サービスを使いました。
                    <br className={Utils['Disp-pc']} />
                    <TxtEmp02>丁寧に対応</TxtEmp02>いただき、助かりました。
                  </p>
                  <VoiceAge>（50代 女性）</VoiceAge>
                </VoiceTxtBorder>
              </VoiceTxt>
              <VoiceImage>
                <img
                  src={`${assets}img/service/replacement-warranty-plus/user-1-220524.png`}
                  width="341"
                  alt=""
                />
              </VoiceImage>
            </VoiceContent>
            <VoiceContent>
              <VoiceTxt>
                <VoiceTxtBorder>
                  <p>
                    スマホを置き忘れ、探しにいきましたが見つからず…。
                    <br className={Utils['Disp-tb-sp']} />
                    <TxtEmp02>交換対応の速さ</TxtEmp02>
                    に驚きました。とても満足しています。
                  </p>
                  <VoiceAge>（40代 男性）</VoiceAge>
                </VoiceTxtBorder>
              </VoiceTxt>
              <VoiceImage>
                <img
                  src={`${assets}img/service/replacement-warranty-plus/user-2-220524.png`}
                  width="341"
                  alt=""
                />
              </VoiceImage>
            </VoiceContent>
            <VoiceContent>
              <VoiceTxt>
                <VoiceTxtBorder>
                  <p>
                    自転車に乗っているときにスマホが
                    <br className={Utils['Disp-pc']} />
                    落ちて、壊れてしまいました。
                    <br className={Utils['Disp-pc']} />
                    <TxtEmp02>交換にあたり迅速な対応</TxtEmp02>を
                    <br className={Utils['Disp-pc']} />
                    していただきました。
                  </p>
                  <VoiceAge>（30代 女性）</VoiceAge>
                </VoiceTxtBorder>
              </VoiceTxt>
              <VoiceImage>
                <img
                  src={`${assets}img/service/replacement-warranty-plus/user-3-220524.png`}
                  width="341"
                  alt=""
                />
              </VoiceImage>
            </VoiceContent>
          </UsersVoice>
          <TxtCap as="p" className={Utils['Mt-32']}>
            ※2020年2月～2022年4月 ​<br />
            「スマホ交換保証プラス」利用者へのWebアンケート調査​（当社調べ　調査人数
            7,961名）
          </TxtCap>
        </SystemContainer>

        <SystemContainer
          id="example"
          className={`${Utils['Mt-56']} ${Utils['Pt-40']}`}
        >
          <Heading level="3" className={Utils['Align-center']}>
            故障・紛失時の費用負担例
          </Heading>
          <MediaGridHalf className={Utils['Mt-24']}>
            <div>
              <MediaImage>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/service/replacement-warranty-plus/img-graph-oppo-sp-220524.png`}
                  />
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-graph-oppo-pc-220524.png`}
                    width="504"
                    alt="同じ機種の新品に交換できる※ 使っているOPPO Reno3 Aが壊れてしまった場合。保証サービスに加入していない場合:スマホ本体代39,800円全額負担。保証サービスに加入している場合:費用は一律6,600円 33,200円おトク！"
                  />
                </picture>
              </MediaImage>
            </div>

            <div>
              <MediaImage>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/service/replacement-warranty-plus/img-graph-galaxy-sp-220524.png`}
                  />
                  <img
                    src={`${assets}img/service/replacement-warranty-plus/img-graph-galaxy-pc-220524.png`}
                    width="504"
                    alt="高額スマホならこんなにおトク Galaxy Note10+が壊れてしまった場合。保証サービスに加入していない場合:スマホ本体代76,980円全額負担。保証サービスに加入している場合:費用は一律6,600円 70,380円おトク！"
                  />
                </picture>
              </MediaImage>
            </div>
          </MediaGridHalf>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※ 割引キャンペーン適用時以外の、楽天モバイルでの販売価格になります。
          </TxtCap>
          <TxtCap as="p">※ 価格は2022年5月10日時点のものです。</TxtCap>
          <TxtCap as="p">
            ※
            上記はあくまで一例です。在庫の状況や機種等により異なる場合がございます。同一機種のご用意がない場合、当社が指定した同等ランクの機種との交換となります。
          </TxtCap>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-56']}>
          <AccordionList text={'ご利用上の注意'} isOpened={false}>
            <UlOnly>
              <li>
                月途中で加入または解約された場合、月額利用料が日割りとなります。
              </li>
              <li>
                <TxtEmp02>
                  交換品に不具合があった場合、交換品を受領してから14日以内に「{' '}
                  <LinkNormal href="/faq/detail/00001180/">
                    スマホ交換保証サポート（故障受付）
                  </LinkNormal>
                  」へご連絡をお願いいたします。
                </TxtEmp02>
              </li>
              <li>
                メーカー修理受付が終了した機種は、在庫状況により同一の交換機の提供ができない場合がございます。該当機種は「
                <LinkNormal as="a" href="/guide/service/repair-closed/">
                  メーカー修理受付終了機種および終了予定機種一覧（スマホ交換保証プラス／持ち込みスマホあんしん保証）
                </LinkNormal>
                」をご確認ください。
              </li>
            </UlOnly>
          </AccordionList>
        </SystemContainer>

        <SystemContainer>
          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <ButtonRegularLarge href="/guide/replacement-warranty-plus/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="replacement-warranty-plus"
              selectedIds={selectedCardIds}
              relatedTitle={'その他の保証サービス'}
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="replacement-warranty-plus"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceReplacementwarrantyplus
