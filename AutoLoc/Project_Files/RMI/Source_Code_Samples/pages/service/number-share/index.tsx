import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid } from '@components/layout/Media'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { IconArrowDown } from '@components/icons'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { ThemeContext } from 'styled-components'
import { AccordionList } from '@components/atoms/AccordionList'
import { CampaignRule2113 } from '@components/include/campaign/rules/2023/CampaignRule2113'
import { CampaignRule1473 } from '@components/include/campaign/rules/2023/CampaignRule1473'

const ImgMain = styled.img`
  max-width: 277px;
  ${mixins.mq.MinL} {
    max-width: 268px;
  }
  width: 100%;
`
const LayoutAnchor = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin-right: 24px;
  }
  ${mixins.mq.MaxS} {
    display: block;
    a:not(:first-child) {
      margin-top: 16px;
    }
  }
`
const AppealWrapper = styled.div`
  padding-bottom: 56px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`
const Appeal = styled.div`
  margin-top: 24px;
  ${mixins.mq.MinL} {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  > div {
    display: grid;
    gap: 16px;
    text-align: center;
  }
  .img-wrapper-1 {
    display: grid;
    place-items: center;
    height: 174px;
    ${mixins.mq.MinL} {
      height: 200px;
    }
  }
  .img-wrapper-2 {
    display: grid;
    place-items: center;
    height: 147px;
    ${mixins.mq.MinL} {
      height: 200px;
    }
  }
`
const ListCustomBasic = styled(UlOnly)`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  row-gap: 8px;
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
const ListCustom1 = styled(ListCustomBasic)`
  grid-template-columns: repeat(3, 33.3%);
  width: 75%;
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  ${mixins.mq.MaxS} {
    grid-template-columns: repeat(1, 1fr);
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
  }
  > span {
    &:first-child {
      border: solid 1px ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      padding: 1px 8px;
      font-size: 13px;
      font-weight: bold;
    }
    ${mixins.mq.MaxM} {
      &:first-child {
        width: 100%;
        text-align: center;
      }
      &:last-child {
        width: 100%;
      }
    }
  }
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceNumbershare: NextPage = () => {
  const selectedCardIds = ['applecare', 'applewatch-care']
  const theme = useContext(ThemeContext)
  const pagetitle = '電話番号シェアサービス'
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
    item: [{ text: 'データ通信', isEmp: false }],
  }
  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「電話番号シェアサービス」のご紹介です。楽天回線の1つの電話番号を、iPhoneとApple Watchで共有して利用できるサービスです。"
      />
      <SystemWrapper>
        <SystemContainer className={Utils['Pb-56']}>
          <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Align-right']}`}>
            ※表記の金額は特に記載のある場合を除き全て税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            {pagetitle}
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-24']}>
            <div className={Utils['Align-center']}>
              <ImgMain
                src={`${assets}img/service/number-share/number-share-01-231127.png`}
                alt=""
                width="268"
                height="167"
              />
            </div>
            <div>
              <Heading level="2" className={Utils['Align-ccl']}>
                いつもつながる。iPhone が手元になくても。
              </Heading>
              <p className={Utils['Mt-16']}>
                1つの電話番号を、iPhoneとApple
                Watchで共有して利用できるサービスです。
                <br />
                携帯電話通信プランがあれば、iPhoneを置いて出かけられます。
              </p>
              <p>
                電話に出る。メッセージを受け取る。お気に入りの音楽やポッドキャストをストリーミングで楽しむ。すべて手首の上からどうぞ。
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                <TxtEmp02>
                  ※「Rakuten最強プラン（データタイプ）」は対象外です。
                </TxtEmp02>
              </TxtCap>
              <TxtCap as="p">
                ※本オプションサービスは、楽天回線を利用しているiPhone（親回線）と、Apple
                Watch（Series
                3以降のCellularモデル）の両方をお持ちの場合のみご加入いただけます。
              </TxtCap>
              <div className={`${Utils['Align-right']} ${Utils['Mt-16']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">550</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
                <div>お申し込み：必要</div>
              </div>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <ButtonRegularLarge href="/guide/number-share/" as="a">
                  お申し込み方法を見る
                </ButtonRegularLarge>
              </div>
            </div>
          </MediaGrid>
          <LayoutAnchor
            className={`${Utils['Align-center']} ${Utils['Mt-40']}`}
          >
            <LinkIconBefore
              href="#anc-1"
              onClick={e => anchorCallback(e, 'anc-1')}
            >
              <IconArrowDown />
              主なサービス仕様
            </LinkIconBefore>
            <LinkIconBefore
              href="#anc-2"
              onClick={e => anchorCallback(e, 'anc-2')}
            >
              <IconArrowDown />
              対象製品
            </LinkIconBefore>
            <LinkIconBefore
              href="#anc-3"
              onClick={e => anchorCallback(e, 'anc-3')}
            >
              <IconArrowDown />
              ご利用上の注意
            </LinkIconBefore>
          </LayoutAnchor>
          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <Heading level="3" as="h3">
              <TxtEmp02>おトクなキャンペーン開催中！</TxtEmp02>
            </Heading>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/service/number-share/3-month-sp-240301.png`}
                width="100%"
              />
              <img
                src={`${assets}img/service/number-share/3-month-pc-240301.png`}
                width="1032"
                height="329"
                alt={`電話番号シェアサービス(550円/月） 。期間中にお申し込みで3カ月分（1,650円）が1,650ポイント還元で実質3カ月無料`}
              />
            </picture>
          </div>
          <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Mt-pc-16']}`}>
            ※1回限り。期間限定ポイントは、「電話番号シェアサービス」へのご加入が確認された月の翌々月末日ごろに進呈。ポイントは付与日を含めて6カ月の期間限定ポイント。詳しくは
            <LinkNormal href="#campaign-rule2113">
              キャンペーンルール
            </LinkNormal>
            をご確認ください。
            <br />
            ※「実質価格」とは、キャンペーンの条件達成により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。
          </TxtCap>
          <PeriodPart className={Utils['Mt-16']}>
            <span>キャンペーン期間</span>
            <span>2023年12月14日（木）9:00～終了日未定</span>
          </PeriodPart>
          <AppealWrapper>
            <Heading
              id="anc-1"
              level="2"
              className={`${Utils['Mt-56']} ${Utils['Align-center']}`}
            >
              携帯電話通信機能で、
              <br className={Utils['Show-oox']} />
              さらに自由を。
            </Heading>
            <Appeal>
              <div>
                <div className="img-wrapper-1">
                  <picture>
                    <source
                      srcSet={`${assets}img/service/number-share/number-share-02-231127.png`}
                      width="218"
                      height="159"
                    />
                    <img
                      src={`${assets}img/service/number-share/number-share-02-231127.png`}
                      width="254"
                      height="185"
                      alt=""
                    />
                  </picture>
                </div>
                <Heading level="3">
                  すべての音楽を、
                  <br className={Utils['Show-oox']} />
                  手首の上から。
                </Heading>
                <p className={Utils['Align-llc']}>
                  ランニング中に音楽を楽しんだり、
                  <br className={Utils['Show-xxo']} />
                  Apple Payでお買い物をしたり、
                  <br className={Utils['Show-xxo']} />
                  Apple Watchなら手首の上からできます。
                </p>
              </div>
              <div>
                <div className={`img-wrapper-2 ${Utils['Mt-sp-32']}`}>
                  <picture>
                    <source
                      srcSet={`${assets}img/service/number-share/number-share-03-231127.png`}
                      width="230"
                      height="143"
                    />
                    <img
                      src={`${assets}img/service/number-share/number-share-03-231127.png`}
                      width="250"
                      height="155"
                      alt=""
                    />
                  </picture>
                </div>
                <Heading level="3">
                  Apple Watchで、
                  <br className={Utils['Show-oox']} />
                  毎日に安心を。
                </Heading>
                <p className={Utils['Align-llc']}>
                  通話・データ通信を利用できます。
                  <br className={Utils['Show-xxo']} />
                  Apple Watch だけで外出した際、急な連絡があっても安心です。
                  <br className={Utils['Show-xxo']} />
                  Apple Watch Series 9 は、緊急時に助けを呼びます。
                  <TxtCap>※</TxtCap>
                </p>
              </div>
            </Appeal>
            <TxtCap as="p" className={Utils['Mt-24']}>
              ※ 転倒検出機能のアップデートは、watchOS 8以降を搭載したApple Watch
              Series 4以降で利用できます。
              <br />※ 緊急 SOS を発信するには、Apple Watch もしくは近くにある
              iPhone からの携帯電話通信またはインターネット接続を使った Wi-Fi
              通話が必要です。
            </TxtCap>
          </AppealWrapper>
          <Heading level="2" id="anc-2" className={Utils['Mt-56']}>
            対象製品
          </Heading>
          <TxtSize as="h3" size="l" className={Utils['Mt-32']}>
            Apple Watch
          </TxtSize>
          <ListCustom1 className={Utils['Mt-24']}>
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
                href="https://www.rakuten.ne.jp/gold/rakutenmobile-store/product/apple-watch-series-8/?scid=wi_rmb_ich_service_number-share_apple-watch-series8"
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
            <li>Apple Watch Series 3</li>
            <li>Apple Watch Nike Series 3</li>
          </ListCustom1>
          <TxtSize as="h3" size="l" className={Utils['Mt-32']}>
            iPhone
          </TxtSize>
          <ListCustomBasic className={Utils['Mt-24']}>
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
                href="https://item.rakuten.co.jp/rakutenmobile-store/iphone-14-pro-max_bundle/?scid=wi_rmb_ich_service_number-share_iphone-14-pro-max"
                target="_blank"
                rel="noopener noreferrer"
              >
                iPhone 14 Pro Max
                <IconNewTabLine />
              </LinkIconAfter>
            </li>
            <li>
              <LinkIconAfter
                href="https://item.rakuten.co.jp/rakutenmobile-store/iphone-14-pro_bundle/?scid=wi_rmb_ich_service_number-share_iphone-14-pro"
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
            <li>iPhone X</li>
            <li>iPhone 8 plus</li>
            <li>iPhone 8</li>
            <li>iPhone 7 plus</li>
            <li>iPhone 7</li>
            <li>iPhone SE</li>
            <li>iPhone 6s plus</li>
            <li>iPhone 6s</li>
          </ListCustomBasic>
          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <ButtonRegularLarge as="a" href="/guide/number-share/">
              お申し込み方法を見る
            </ButtonRegularLarge>
          </div>
          <Heading level="2" id="anc-3" className={Utils['Mt-56']}>
            ご利用上の注意
          </Heading>
          <UlOnly className={Utils['Mt-24']}>
            <li>
              本オプションサービスは、楽天回線を利用しているiPhone（親回線）と、Apple
              Watch（Series
              3以降のCellularモデル）の両方をお持ちの場合のみご加入いただけます。
            </li>
            <li>
              本オプションサービスは、Apple
              Watchでのモバイル通信およびiPhone（親回線）の携帯電話番号での通話および通信を提供する携帯電話サービスとなります。
            </li>
            <li>
              Apple
              Watchによる通話および通信は、登録したiPhone（親回線）の発着信として通話料や通信料が計算され、通話明細も記録されます（緊急通報発信を除く）。
            </li>
            <li>
              Apple
              Watchは、海外での電話番号シェアサービスのご利用はできません。
            </li>
            <li>
              親回線1回線につき、最大5台のApple Watch
              を登録できますが、電話番号シェアサービスを設定できるApple
              Watchは1台のみです。
            </li>
            <li>
              電話番号シェアサービスを設定中のApple
              Watchは、別のiPhoneと電話番号シェアサービスの登録や設定ができません。
            </li>
            <li>
              Apple
              Watchを別の電話番号のiPhoneと電話番号シェアサービスでご利用になる場合は、ご利用中のiPhoneとのペアリングを解除し、別のiPhoneとペアリングをしたうえで、新たに電話番号シェアサービスをお申し込みください（月額利用料は追加で請求が発生いたします）。
            </li>
            <li>
              本オプションサービスは月途中で解約した場合、解約月の料金は日割り計算となります。
            </li>
            <li>
              本オプションサービスの解約方法は「
              <LinkNormal href="/guide/number-share/cancellation/">
                電話番号シェアサービス（解約方法）
              </LinkNormal>
              」をご確認ください。
            </li>
          </UlOnly>
          <div className={Utils['Mt-64']}>
            <Heading
              level="2"
              id="campaign-rule2113"
              className={Utils['Mt-64']}
            >
              電話番号シェアサービス 3カ月利用料相当ポイント還元キャンペーン
            </Heading>
            <CampaignRule2113 />
          </div>
          <AccordionList
            text={'過去のキャンペーンルール'}
            isOpened={false}
            className={Utils['Mt-40']}
          >
            <Heading level="2">
              電話番号シェアサービス 月額料金3カ月無料キャンペーン
            </Heading>
            <CampaignRule1473 />
          </AccordionList>
        </SystemContainer>
        <BgGray>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="number-share"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />

            <Recommend
              className={Utils['Mt-32']}
              lId="tradein"
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

export default ServiceNumbershare
