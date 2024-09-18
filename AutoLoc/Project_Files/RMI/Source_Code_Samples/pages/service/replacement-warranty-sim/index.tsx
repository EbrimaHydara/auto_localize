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
import {
  TxtCap,
  TxtSize,
  TxtEmp02,
  TxtNormal,
  TxtEmp01,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaGridHalf, MediaImage } from '@components/layout/Media'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { AccordionList } from '@components/atoms/AccordionList'
import { IconChevronRight } from '@components/icons'
import { UlOnly } from '@components/atoms/List'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const TxtCapPrimarySup = styled(TxtCap)`
  top: -1em;
  color: ${props => props.theme.colors.primary};
`
const ServiceContents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
  }

  .title {
    ${mixins.mq.MinL} {
      min-height: 66px;
    }
  }

  .img {
    ${mixins.mq.MaxM} {
      margin-top: 16px;
      text-align: center;
    }
  }

  .txt {
    margin-top: 24px;
    ${mixins.mq.MinL} {
      margin-top: 16px;
    }
  }
`

const ServiceReplacementWarrantySim: NextPage = () => {
  const selectedCardIds = [
    'applecare',
    'replacement-warranty-plus',
    'applewatch-care',
  ]
  const theme = useContext(ThemeContext)
  const pagetitle = '持ち込みスマホあんしん保証'
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
        description="楽天モバイルの「持ち込みスマホあんしん保証」サービス紹介。スマートフォン（スマホ）の故障・破損時に、新品同等の同一機種を交換品としてお届けするので安心です。楽天回線対応製品をすでにお持ちで、楽天モバイルのSIMをご利用される方が対象となります。"
      />
      <SystemWrapper>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            持ち込みスマホあんしん保証
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-24']}>
            <MediaImage>
              <img
                src={`${assets}img/service/replacement-warranty-sim/img-illustration01-231101.png`}
                alt=""
                width="328"
                height="174"
              />
            </MediaImage>
            <div>
              <p>
                今使っているスマホを楽天モバイルでも使いたい。そんなあなたにおすすめ！
              </p>
              <TxtNormal as="p" className={Utils['Mt-8']}>
                スマートフォンの破損、全損、水没時に、新品同等の同一機種を交換品としてお届けします。
              </TxtNormal>
              <TxtNormal as="p" className={Utils['Mt-8']}>
                <LinkNormal href="/service/replacement-warranty-sim/price-list/">
                  保証対象製品
                </LinkNormal>
                をすでにお持ちで、楽天モバイルのSIMをご利用される方が対象となります。
              </TxtNormal>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※ 本サービスは回線契約時以外もお申し込みできます。
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※
                本サービスは回線開通日から30日以内に、オンラインで加入手続きをする必要があります。
              </TxtCap>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※
                保証対象は楽天回線対応製品のみとなります。保証対象製品が製品登録時にすでに故障・破損している場合は、本サービス対象外となります。
              </TxtCap>

              <TxtCap as="p" className={Utils['Mt-8']}>
                <TxtEmp02>
                  ※Xperia Ace（NTTドコモ）、HUAWEI P30 lite
                  Premium（au）など一部のキャリア製品や製品購入場所により保証対象外となる場合があります。
                  <br />
                  ※サービスお申し込み時に購入場所を誤って選択した場合、加入はできますが、保証対象外となりますのでご注意ください。
                </TxtEmp02>
              </TxtCap>
            </div>
          </MediaGrid>

          <div className={`${Utils['Align-right']} ${Utils['Mt-32']}`}>
            <TxtEmp02 className={Utils['Mr-8']}>オススメ！</TxtEmp02>
            <TxtEmp01>
              <AlphanumericSize size="l">715</AlphanumericSize>
              <TxtSize size="s">円～</TxtSize>
              <AlphanumericSize size="l">1,309</AlphanumericSize>
              <TxtSize size="s">円／月</TxtSize>
            </TxtEmp01>

            <TxtCap as="p" className={Utils['Mt-8']}>
              ※
              加入できるのは、SIMのみでプランお申し込み時、もしくは楽天回線の開通日から30日以内
            </TxtCap>
          </div>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge href="/guide/replacement-warranty-sim/" as="a">
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
          <TxtCap className={Utils['Mt-32']} as="p">
            ※楽天回線対応製品をすでにお持ちで、楽天モバイルのSIMをご利用される方が対象となります。楽天モバイルで購入する製品への保証はiOS製品であれば「
            <LinkNormal href="/service/iphone/applecare/">
              故障紛失保証 with AppleCare Services
            </LinkNormal>
            」、Androidであれば「
            <LinkNormal href="/service/replacement-warranty-plus/">
              スマホ交換保証プラス
            </LinkNormal>
            」をご利用ください。
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※
            同一機種が在庫にない場合は、楽天モバイルが指定する同等の機種の中からご選択いただき、ご選択いただいた機種と交換いたします。
          </TxtCap>
          <TxtCap className={Utils['Mt-8']} as="p">
            ※
            海外版の製品は保証対象外になります。ご登録予定の製品が海外版か否かのご確認は、メーカーまたは販売元にご確認ください。
          </TxtCap>
        </SystemContainer>

        <BgGray
          className={`${Utils['Mt-56']} ${Utils['Pt-40']} ${Utils['Pb-40']}`}
        >
          <SystemContainer>
            <Heading level="2">故障・破損時の費用負担例</Heading>
            <Heading
              level="3"
              className={`${Utils['Align-center']} ${Utils['Mt-24']}`}
            >
              <TxtEmp02>
                スマホユーザー
                <br className={Utils['Disp-tb-sp']} />
                約3人に1人が故障経験あり
                <TxtCapPrimarySup as="sup">※</TxtCapPrimarySup>
              </TxtEmp02>
            </Heading>
            <TxtNormal className={Utils['Mt-24']} as="p">
              保証サービスに加入していれば、故障・破損時の費用負担を最小限に抑えられます。
            </TxtNormal>
            <TxtCap className={Utils['Mt-8']} as="p">
              ※
              調査時期：2017年8月7日～14日　スマートフォンユーザー12,451人にWebアンケート　調査元：株式会社MM総研
            </TxtCap>
            <MediaGridHalf className={Utils['Mt-24']}>
              <div>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/replacement-warranty-sim/img-graph-oppo-sp-221108.png`}
                    />
                    <img
                      src={`${assets}img/service/replacement-warranty-sim/img-graph-oppo-pc-221108.png`}
                      width="504"
                      alt="保証サービスに加入していれば自己負担金は6,600円に抑えられます。"
                    />
                  </picture>
                </MediaImage>
              </div>

              <div>
                <MediaImage>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/service/replacement-warranty-sim/img-graph-galaxy-sp-221122.png`}
                    />
                    <img
                      src={`${assets}img/service/replacement-warranty-sim/img-graph-galaxy-pc-221122.png`}
                      width="504"
                      alt="保証サービスに加入していれば自己負担金は12,100円に抑えられます。"
                    />
                  </picture>
                </MediaImage>
              </div>
            </MediaGridHalf>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※
              割引キャンペーン適用時以外の、楽天モバイルでの販売価格になります。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ 価格は2022年11月9日時点のものです。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※
              上記はあくまで一例です。在庫の状況や機種等により異なる場合がございます。同一機種のご用意がない場合、楽天モバイルが指定した同等ランクの機種との交換となります。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※ 自己負担金（免責金額）は製品によって異なります。詳細は
              <LinkNormal href="/service/replacement-warranty-sim/price-list/">
                サービス料金一覧
              </LinkNormal>
              をご確認ください。
            </TxtCap>
          </SystemContainer>
        </BgGray>

        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="2">サービス内容</Heading>
          <ServiceContents className={Utils['Mt-32']}>
            <div>
              <Heading level="3" className="title">
                故障したお持ちのスマホを
                <br className={Utils['Disp-pc']} />
                同一機種に交換
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration02.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>
                  破損、全損、水没などによる故障の際に、新品同等の同一機種を交換品としてお届けします。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※盗難、紛失は保証対象外です。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※1契約につき、年間2回まで保証可能です。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※同一機種が在庫にない場合は、楽天モバイルが指定する同等の機種の中からご選択いただき、交換品として送付いたします。
                </TxtCap>
              </div>
            </div>
            <div>
              <Heading level="3" className="title">
                最安6,600円で交換できる
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration03.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>
                  自己負担金（免責金額）は機種によって異なります。
                  <br />
                  6,600円もしくは12,100円で、新品同等の同一機種に交換いただけます。
                </p>
                <p className={Utils['Mt-16']} style={{ fontSize: '15px' }}>
                  <LinkIconAfter href="/service/replacement-warranty-sim/price-list/">
                    各機種の自己負担金（免責金額）はこちら
                    <IconChevronRight />
                  </LinkIconAfter>
                </p>
              </div>
            </div>
            <div>
              <Heading level="3" className="title">
                Webから24時間受付可能
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration04.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>故障受付はWebで24時間、365日対応可能です。</p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※楽天モバイルショップにお越しの場合は、各ショップの営業時間内での対応となります。その際、各ショップでは故障受付のWeb申請をサポートさせていただきます。故障機をお持ちいただいても、店頭にて交換品のお渡しや故障機のお預かりはできませんので、ご注意ください。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※故障受付は、製品登録完了後31日目より行えます。
                </TxtCap>

                <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/guide/replacement-warranty-sim/replacement-reception/"
                  >
                    故障受付方法の詳細を見る
                  </ButtonRegularLarge>
                </p>
              </div>
            </div>
            <div>
              <Heading level="3" className="title">
                全国翌日発送でお届け
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration05.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>
                  故障受付日の翌日に発送しますので、最短で2～3日後にお届けします。（離島などの一部地域を除く）
                </p>
              </div>
            </div>
            <div>
              <Heading level="3" className="title">
                コンビニでも受け取り可能
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration06.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>
                  交換品の受け取りは、コンビニ※や指定の宅配ロッカーでも可能です。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ファミリーマート、デイリーヤマザキ、ポプラなどの一部対象店舗になります。
                </TxtCap>
              </div>
            </div>
            <div>
              <Heading level="3" className="title">
                機種変更時も安心
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/replacement-warranty-sim/img-illustration07.png?220301`}
                  width="328"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="txt">
                <p>
                  お使いの製品を機種変更した際も、Webから変更手続きを行うだけで、引き続き保証を受けることができます。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※機種の変更登録には手数料は発生しません。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※月額利用料、自己負担金（免責金額）は機種により異なります。
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※故障受付は、変更登録完了後31日目より行えます。
                </TxtCap>
                <p className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                  <ButtonRegularLarge
                    as="a"
                    href="/guide/replacement-warranty-sim/device-resistration/#change"
                  >
                    機種変更時の手続き方法を見る
                  </ButtonRegularLarge>
                </p>
              </div>
            </div>
          </ServiceContents>

          <AccordionList
            text={'ご利用上の注意'}
            isOpened={false}
            className={Utils['Mt-56']}
          >
            <UlOnly>
              <li>
                本サービスは、SIMのみでプランお申し込み時、もしくは楽天回線の開通日から30日以内に「
                <LinkNormal
                  as="a"
                  href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile/"
                >
                  my 楽天モバイル
                </LinkNormal>
                」より加入いただけます。
              </li>
              <li>
                月途中で加入または解約された場合、月額利用料は日割りでの請求となります。
                <TxtCap as="p" className={`${Utils['Pl-16']} ${Utils['Mt-8']}`}>
                  <TxtEmp02>
                    ※月額利用料は、オプションのお申し込み当日より発生します。
                  </TxtEmp02>
                </TxtCap>
              </li>
              <li>
                <TxtEmp02>
                  製品の交換保証を受けるには、本サービスのお申し込み後に「製品登録」を行う必要があります。
                </TxtEmp02>
                <br />
                <TxtCap as="p" className={`${Utils['Pl-16']} ${Utils['Mt-8']}`}>
                  ※製品登録の詳細は、「
                  <LinkNormal href="/guide/replacement-warranty-sim/device-resistration/">
                    保証対象とする製品の登録方法
                  </LinkNormal>
                  」をご確認ください。
                </TxtCap>
                <TxtCap as="p" className={Utils['Pl-16']}>
                  ※保証対象製品が製品登録時にすでに故障・破損している場合は、本サービスを受けられませんのでご注意ください。
                </TxtCap>
                <TxtCap as="p" className={Utils['Pl-16']}>
                  ※製品の故障受付は、製品登録後30日経過してからご利用できます。
                </TxtCap>
                <TxtCap as="p" className={Utils['Pl-16']}>
                  ※海外版の製品は保証対象外になります。ご登録予定の製品が海外版か否かのご確認は、メーカーまたは販売元にご確認ください。
                </TxtCap>
              </li>
              <li>
                1契約につき、年間2回まで保証可能です。
                <TxtCap as="p" className={`${Utils['Pl-16']} ${Utils['Mt-8']}`}>
                  ※故障受付時において、過去1年間にすでに本サービスを指定回数受けられている場合は、ご利用いただくことができません。
                </TxtCap>
              </li>
              <li>故障発生から30日以内に故障受付をする必要があります。</li>
              <li>盗難・紛失は対象外となります。</li>
              <li>
                <TxtEmp02>
                  「Xperia Ace（NTTドコモ）」「HUAWEI P30 lite
                  Premium（au）」など、一部のほかキャリア製品は保証対象外となります。保証対象製品は、
                  <LinkNormal
                    as="a"
                    href="/service/replacement-warranty-sim/price-list/"
                  >
                    サービス料金一覧
                  </LinkNormal>
                  をご確認ください。
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

        <SystemContainer
          className={`${Utils['Mt-56']} ${Utils['Align-center']}`}
        >
          <ButtonRegularLarge as="a" href="/guide/replacement-warranty-sim/">
            お申し込み・ご利用方法を見る
          </ButtonRegularLarge>
        </SystemContainer>

        <BgGray
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainer>
            <Related
              lId="replacement-warranty-sim"
              selectedIds={selectedCardIds}
              relatedTitle={'その他の保証サービス'}
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="replacement-warranty-sim"
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

export default ServiceReplacementWarrantySim
