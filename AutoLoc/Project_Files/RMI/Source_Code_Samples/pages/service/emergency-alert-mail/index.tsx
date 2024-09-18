import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtNormal,
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { IconChevronRight, IconNewTabLine, IconPdf } from '@components/icons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc } from '@components/atoms/List'
import { BoxApp, AppIcon, AppTxt, AppTtl } from '@components/atoms/Box'
import { InfoboxWhite, InfoboxWarning } from '@components/atoms/Infobox'
import { AttentionIconAlert } from '@components/atoms/Attention'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const GrayBox = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`
const Notetxt = styled.p`
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.monotone75};
`
const YellowBox = styled(InfoboxWarning)`
  ${mixins.mq.MinL} {
    padding: 24px;
  }
`
const HeadingAlert = styled(Heading)`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fonts.base};
  line-height: 1.5;
  ${AttentionIconAlert} {
    font-size: ${props => props.theme.fonts.m};
  }
`

const accordionListArgs1 = {
  text: [
    { text: 'Xperia Ace' },
    { text: 'Xperia 10 III Lite' },
    { text: 'Galaxy A7' },
    { text: 'Galaxy S10' },
    { text: 'Galaxy Note10+' },
    { text: 'arrows RX' },
    { text: 'OPPO A5 2020' },
    { text: 'OPPO A73' },
    { text: 'OPPO Reno A 128GB' },
    { text: 'OPPO Reno3 A' },
    { text: 'OPPO Reno5 A' },
    { text: 'HUAWEI nova 5T' },
    { text: 'AQUOS R5G' },
    { text: 'AQUOS sense3 lite' },
    { text: 'AQUOS sense3 plus' },
    { text: 'AQUOS sense4 lite' },
    { text: 'AQUOS sense4 plus' },
    { text: 'Rakuten BIG s' },
    { text: 'Rakuten BIG' },
    { text: 'Rakuten Hand' },
    { text: 'Rakuten Mini' },
    { text: 'iPhone 12 Pro Max' },
    { text: 'iPhone 12 Pro' },
    { text: 'iPhone 12' },
    { text: 'iPhone 12 mini' },
    { text: 'iPhone SE（第2世代）' },
  ],
}

const accordionListArgs2 = {
  text: [
    {
      text: '緊急速報メールの受信にかかる通信料・情報料は無料です。ただし、情報内に記載のあるサイトリンクに接続した場合は、別途通信料などが発生します。',
    },
    {
      text: 'パートナー回線エリアまたはその境界付近にいる場合や製品の状態などにより、同じ内容の通知が複数回届く場合があります。',
    },
  ],
}

const ServiceemergencyAlertMail: NextPage = () => {
  const selectedCardIds = ['i-filter']
  const pagetitle = '緊急速報メール'
  const directories = [{ path: 'service/', label: 'オプションサービス' }]
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
    item: [{ text: '災害関連', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「緊急速報メール」サービス。気象庁が配信する緊急地震速報や津波警報・特別警報 、国や地方公共団体が配信する災害・避難情報を、対象エリアにいるお客様に一斉にメールでお知らせします"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Pb-56']}>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            緊急速報メール
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            気象庁が配信する「緊急地震速報」や「津波警報」、国や地方公共団体が配信する「災害・避難情報」を、対象エリアにいるお客様に一斉にメールでお知らせします。
          </TxtNormal>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <PriceNumberFree size="ll">
              <TxtEmp01>無料</TxtEmp01>
            </PriceNumberFree>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonRegularLarge href="/guide/emergency-alert-mail/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <GrayBox>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Heading level="2">緊急速報メールでお知らせする内容</Heading>
            <Notetxt className={Utils['Mt-32']}>
              「気象等に関する特別警報」および「噴火警報」は、2022年12月26日14:00をもって気象庁からの配信終了発表に伴い、各地方公共団体による配信可能項目に変更となります。なお、お客様がご利用中の製品において、本変更に伴う設定変更の必要はございません。
            </Notetxt>
            <Heading level="3" className={Utils['Mt-32']}>
              緊急地震速報
            </Heading>
            <TxtNormal className={Utils['Mt-16']} as="p">
              気象庁が配信する緊急地震速報を、震源地周辺エリアに一斉にお知らせします。
            </TxtNormal>
            <div className={Utils['Mt-8']}>
              <LinkIconAfter
                href="https://www.data.jma.go.jp/svd/eew/data/nc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                緊急地震速報の詳細を見る
                <IconNewTabLine />
              </LinkIconAfter>
            </div>
            <Heading level="3" className={Utils['Mt-32']}>
              津波警報
            </Heading>
            <TxtNormal className={Utils['Mt-16']} as="p">
              気象庁が配信する津波警報を、対象沿岸地域を含むエリアに一斉にお知らせします。
            </TxtNormal>
            <div className={Utils['Mt-8']}>
              <LinkIconAfter
                href="http://www.data.jma.go.jp/svd/eqev/data/joho/tsunamiinfo.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                津波警報の詳細を見る
                <IconNewTabLine />
              </LinkIconAfter>
            </div>
            <Heading level="3" className={Utils['Mt-32']}>
              災害・避難情報
            </Heading>
            <TxtNormal className={Utils['Mt-16']} as="p">
              国や地方公共団体から配信される以下の情報（高齢者等避難や避難指示、各種警報などの住民の安全にかかわるもの）を、特定エリアに一斉にお知らせします。
            </TxtNormal>
            <div className={`${Utils['Mt-32']}`}>
              <DescriptionListDefault>
                <div>
                  <dt>災害・避難情報</dt>
                  <dd>
                    <TxtNormal as="p">
                      国や地方公共団体より、地震や台風などの自然災害に対する警戒情報や「気象等に関する特別警報」や「噴火警報」、それに伴う高齢者等避難や避難指示など、住民の安全にかかわる情報を、配信対象エリアにいるお客様に配信
                    </TxtNormal>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      ※
                      楽天回線エリアでは、一部地域のみ配信に対応しています。配信可能な地方公共団体は以下のPDFにてご確認いただけます。
                    </TxtCap>
                    <div className={Utils['Mt-16']}>
                      <LinkIconAfter
                        href={`${assets}pdf/emergency-alert-mail/local-government-list.pdf?240329`}
                        target="_blank"
                      >
                        「災害・避難情報」を配信可能な地方公共団体
                        <IconPdf />
                      </LinkIconAfter>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt>洪水情報</dt>
                  <dd>
                    <dl>
                      <div>
                        <dd>
                          国土交通省より、指定河川洪水予報の氾濫危険情報（レベル4）及び氾濫発生情報（レベル5）の警報発表を契機に、主体的な避難を促進するための情報を、流域住民に配信
                          <TxtCap as="p" className={Utils['Mt-16']}>
                            ※ 指定河川洪水予報については、
                            <LinkIconAfter
                              href="http://www.jma.go.jp/jma/kishou/know/bosai/flood.html"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              気象庁のホームページ
                              <IconNewTabLine />
                            </LinkIconAfter>
                            をご確認ください。
                          </TxtCap>
                        </dd>
                      </div>
                    </dl>
                  </dd>
                </div>
                <div>
                  <dt>国民保護に関する情報（J-Alert）</dt>
                  <dd>
                    <dl>
                      <div>
                        <dd>
                          総務省消防庁より、政府の発表する国民保護に関する情報を配信
                          <TxtCap as="p" className={Utils['Mt-16']}>
                            ※ 国民保護に関する情報の詳細は、
                            <LinkIconAfter
                              href="http://www.kokuminhogo.go.jp/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              国民保護ポータルサイト
                              <IconNewTabLine />
                            </LinkIconAfter>
                            でご確認ください。
                          </TxtCap>
                        </dd>
                      </div>
                    </dl>
                  </dd>
                </div>
                <div>
                  <dt>電力需給ひっ迫情報</dt>
                  <dd>
                    <dl>
                      <div>
                        <dd>
                          資源エネルギー庁より、計画停電の実施の恐れがある場合（供給予備3％未満）に計画停電の実施に関する情報を配信
                        </dd>
                      </div>
                    </dl>
                  </dd>
                </div>
              </DescriptionListDefault>
            </div>
            <div>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※ 警告音については、
                <LinkIconAfter
                  href="https://www.data.jma.go.jp/svd/eew/data/nc/katsuyou/keitai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  気象庁のホームページ
                  <IconNewTabLine />
                </LinkIconAfter>
                をご確認ください。
              </TxtCap>
            </div>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <Heading level="4" className={Utils['Mt-40']}>
            以下アプリでは、上記情報をいち早く入手することが可能です。
          </Heading>
          <div className={Utils['Mt-24']}>
            <LinkIconAfter
              href="https://www3.nhk.or.jp/news/news_bousai_app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHK ニュース・防災
              <IconNewTabLine />
            </LinkIconAfter>
          </div>

          <BoxApp className={Utils['Mt-32']}>
            <AppIcon>
              <img
                src={`${assets}img/service/emergency-alert-mail/icon-safety-tips-for-travelers.png`}
                alt=""
              />
            </AppIcon>
            <AppTxt>
              <AppTtl>Safety tips for Travelers</AppTtl>
              <p className={Utils['Mt-16']}>
                This push-enabled app pushes alerts about earthquake early
                warnings, tsunami warnings, and other weather warnings within
                Japan in English, Japanese, Hangul, Traditional Chinese, and
                Simplified Chinese.
              </p>
              <div className={Utils['Mt-16']}>
                <LinkIconAfter
                  href="https://www.jnto.go.jp/safety-tips/eng/app.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safety tips for Travelers (Japan Tourism Agency Web site)
                  <IconNewTabLine />
                </LinkIconAfter>
              </div>
            </AppTxt>
          </BoxApp>

          <div className={Utils['Mt-40']}>
            <AccordionList text={'対応機種'} isOpened={false}>
              <ListDisc {...accordionListArgs1} />
              <YellowBox className={Utils['Mt-24']}>
                <HeadingAlert level="2">
                  <AttentionIconAlert />
                  iPhoneで緊急速報メールをご利用いただくには、キャリア設定アップデートが必要です。
                </HeadingAlert>
                <TxtEmp02 as="p" className={Utils['Mt-16']}>
                  iOS14.4以下でキャリア設定を行っていない場合は、緊急速報メールをご利用いただけません。
                </TxtEmp02>
                <InfoboxWhite className={Utils['Mt-24']}>
                  <p>
                    最新のOSにアップデート後、キャリア設定アップデートをお願いいたします。
                  </p>
                  <p className={Utils['Mt-24']}>
                    キャリア設定アップデート方法：
                    <br />
                    ホーム画面より「設定」→「一般」→「情報」の順に進むと、ポップアップが表示されるので「アップデート」をタップしてしばらくお待ちください。
                  </p>
                  <TxtCap className={Utils['Mt-24']} as="p">
                    ※アンテナマークの横に「4G」もしくは「5G」の表示がある場合は、キャリア設定が反映されていますので、そのままご使用ください。
                  </TxtCap>
                </InfoboxWhite>
              </YellowBox>
              <p className={Utils['Mt-56']}>
                上記以外の製品に関しては、「
                <LinkNormal as="a" href="/product/byod/">
                  ご利用製品の対応状況確認
                </LinkNormal>
                」で「ETWS（緊急地震速報、津波警報の受信などの機能）」が対応しているかご確認ください。
              </p>
            </AccordionList>
            <AccordionList text={'ご利用上の注意'} isOpened={false}>
              <ListDisc {...accordionListArgs2} />
            </AccordionList>
          </div>
          <div className={Utils['Mt-40']}>
            <LinkIconAfter href="https://network.mobile.rakuten.co.jp/faq/detail/00001356/">
              地方自治体の方へ
              <IconChevronRight />
            </LinkIconAfter>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <ButtonRegularLarge href="/guide/emergency-alert-mail/" as="a">
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="emergency-alert-mail"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>セキュリティサービス</span>
                </>
              }
            />
            <Recommend
              className={Utils['Mt-24']}
              lId="emergency-alert-mail"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceemergencyAlertMail
