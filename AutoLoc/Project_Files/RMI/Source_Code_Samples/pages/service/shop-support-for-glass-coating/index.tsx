import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelNormalSingle } from '@components/atoms/Label'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { InfoboxLight } from '@components/atoms/Infobox'
import { AccordionList } from '@components/atoms/AccordionList'
import { ImageCapturer } from '@components/atoms/Image'
import { assets } from '@components/utils/assets'
import { DescriptionListDefaultSp2Col } from '@components/atoms/DescriptionList'

const GrayBox = styled.div`
  padding: 56px 24px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding-left: 0;
    padding-right: 0;
  }
`

const ServiceUlLayout = styled.ul`
  display: grid;
  gap: 32px 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const DescriptionListDt = styled(DescriptionListDefaultSp2Col)`
  > div {
    justify-content: normal;
    > dd {
      padding: 16px;
    }
    > dt {
      width: 32%;
      border-right: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
`

const ServiceShopsupportforglasscoating: NextPage = () => {
  const pagetitle = 'ガラスコーティング'
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

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="ショップスタッフがお客様の端末にガラスコーティングを施工いたします。コーティングをすることで強力に画面を保護するだけでなく、抗菌・抗ウイルス効果も発揮します。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            {pagetitle}
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelNormalSingle>ショップサポート</LabelNormalSingle>
          </div>
          <MediaGrid className={Utils['Mt-32']}>
            <MediaImage>
              <img
                src={`${assets}img/service/shop-support-for-glass-coating/img00.png`}
                alt=""
                width="656"
                height="438"
              />
            </MediaImage>
            <div>
              <p>
                楽天モバイルショップスタッフ（R
                CREW）がお客様の端末にガラスコーティングを施工いたします。
              </p>
              <p>
                コーティングをすることで強力に画面を保護するだけでなく、抗菌・抗ウイルス効果も発揮します。
              </p>
              <TxtEmp02 as="p" className={Utils['Mt-8']}>
                【対象者】
              </TxtEmp02>
              <TxtEmp02 as="p">・制限なし</TxtEmp02>
              <TxtSize
                size="s"
                as="p"
                className={`${Utils['Mt-16']} ${Utils['Align-right']}`}
              >
                <AlphanumericSize size="m">4,400</AlphanumericSize>
                <TxtEmp01>円</TxtEmp01>／回
              </TxtSize>
              <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
                <ButtonRegularLarge as="a" href="#app">
                  お申し込み方法を見る
                </ButtonRegularLarge>
              </div>
            </div>
          </MediaGrid>
        </SystemContainer>
        <GrayBox className={Utils['Mt-56']}>
          <SystemContainer>
            <Heading level="2" className={Utils['Align-center']}>
              サービス内容
            </Heading>
            <ServiceUlLayout className={Utils['Mt-32']}>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-glass-coating/img01.png`}
                    alt=""
                    width="656"
                    height="442"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  抗菌・抗ウイルス効果
                </Heading>
                <p className={Utils['Mt-8']}>
                  独自の技術により、素材表面をナノレベルの薄膜ガラス被膜でコーティングし、傷や汚れを防ぎ、付着ウィルス・菌の増殖を抑制することが期待できます。透明かつ薄膜なのでスマホ本来の見た目やタッチ性能に影響を及ぼしません。加えて滑らかな指触りとなります。
                </p>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-glass-coating/img02.png`}
                    alt=""
                    width="656"
                    height="441"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  強力に画面を保護
                </Heading>
                <p className={Utils['Mt-8']}>
                  コーティング剤を塗ることで極薄のガラスの被膜を形成し、画面を傷から守ります。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※完全に硬化するまでには10日程度かかります
                </TxtCap>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-glass-coating/img03.png`}
                    alt=""
                    width="656"
                    height="441"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  汚れがつきにくい
                </Heading>
                <p className={Utils['Mt-8']}>
                  画面に指紋汚れやファンデーションがつきづらくなります。汚れてしまっても簡単に拭き取ることができるので、綺麗な画面を保つことが可能です。
                </p>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-glass-coating/img04.png`}
                    alt=""
                    width="656"
                    height="410"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  短時間で施工完了
                  <TxtCap>
                    <TxtEmp01>（5〜10分程度）</TxtEmp01>
                  </TxtCap>
                </Heading>
                <p className={Utils['Mt-8']}>
                  楽天モバイルショップの店内で施工するため、短時間でお渡しができます。
                </p>
              </li>
            </ServiceUlLayout>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <DescriptionListDt className={Utils['Mt-56']}>
            <div>
              <dt>サポート対象</dt>
              <dd>
                <UlOnly>
                  <li>制限なし</li>
                </UlOnly>
              </dd>
            </div>
          </DescriptionListDt>
          <AccordionList
            text={'ご利用上の注意'}
            isOpened={false}
            className={Utils['Mt-32']}
          >
            <UlOnly>
              <li>
                <TxtEmp02>
                  郵便局店および家電量販店ではでは「ガラスコーティング」の対応を行っておりません。お申し込み前にお近くのショップをご確認ください。
                </TxtEmp02>
              </li>
            </UlOnly>
          </AccordionList>

          <Heading level="2" id="app" className={Utils['Mt-56']}>
            お申し込み方法
          </Heading>
          <Heading level="3" className={Utils['Mt-16']}>
            楽天モバイルショップ（サービス対応ショップのみ）で、お申し込みいただけます。
          </Heading>
          <p className={Utils['Mt-16']}>
            ご来店前にサポート対応ショップをご確認ください。ご来店の際は予約がおすすめです。予約なしでも対応は可能ですが、お待ちいただく場合がございます。
          </p>
          <TxtEmp02 as="p" className={Utils['Mt-8']}>
            ※郵便局店および家電量販店では「ガラスコーティング」の対応を行っておりません。
          </TxtEmp02>
          <InfoboxLight className={Utils['Mt-24']}>
            <p>
              お近くのエリアをご選択の上、「サービスで絞り込む」をタップします。表示された画面の「ガラスコーティング」にチェックを入れ「検索ボタン」をタップすると対応ショップが一覧で表示されます。
            </p>
            <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              <ImageCapturer
                src={`${assets}img/service/shop-support-for-glass-coating/img05.png`}
                alt=""
                width="600"
                height="966"
              />
            </div>
            <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
              <ButtonRegular as="a" href="/shop/search/">
                ガラスコーティングの対応ショップを探す
              </ButtonRegular>
            </div>
            <p className={Utils['Mt-32']}>
              各ショップ詳細ページの「対応サービス」欄をご確認ください。
            </p>
            <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              <ImageCapturer
                src={`${assets}img/service/shop-support-for-glass-coating/img06.png`}
                alt=""
                width="600"
                height="1070"
              />
            </div>
          </InfoboxLight>
        </SystemContainer>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['shopguide', 'product', 'support']}
      />
    </>
  )
}

export default ServiceShopsupportforglasscoating
