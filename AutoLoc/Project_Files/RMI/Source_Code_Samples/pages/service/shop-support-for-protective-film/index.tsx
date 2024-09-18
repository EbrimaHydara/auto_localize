import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  AlphanumericSize,
  TxtSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelNormalSingle } from '@components/atoms/Label'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { UlOnly } from '@components/atoms/List'
import { mixins } from '@components/utils/Mixins'
import { InfoboxLight } from '@components/atoms/Infobox'
import { AccordionList } from '@components/atoms/AccordionList'
import { DescriptionListDefaultSp2Col } from '@components/atoms/DescriptionList'

const SystemContainerCustom = styled(SystemContainer)`
  ${mixins.mq.MaxM} {
    padding: 0;
  }
`
const CustomUl = styled.ul`
  display: grid;
  row-gap: 32px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
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

const ServiceShopsupportforprotectivefilm: NextPage = () => {
  const pagetitle = '保護フィルム貼り付け'
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
        description="ショップスタッフがお客様の端末に保護フィルムの貼付けを実施いたします。"
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
                src={`${assets}img/service/shop-support-for-protective-film/img00.png`}
                alt=""
                width="656"
                height="438"
              />
            </MediaImage>
            <div>
              <p>
                楽天モバイルショップスタッフ（R
                CREW）がお客様の端末に保護フィルムの貼り付けを実施いたします。
                <br />
                精密・綺麗に仕上がるため、貼り付けが不安・苦手な方におすすめです。
              </p>
              <TxtEmp02 as="p" className={Utils['Mt-8']}>
                【対象者】
              </TxtEmp02>
              <TxtEmp02 as="p">
                ・楽天モバイルの店頭で保護フィルムを購入されたお客様
              </TxtEmp02>
              <TxtCap as="p">
                <TxtEmp02>
                  ※お客様がお店を出られた後は、本サービスはご利用いただけません
                </TxtEmp02>
              </TxtCap>
              <TxtSize
                size="s"
                as="p"
                className={`${Utils['Mt-16']} ${Utils['Align-right']}`}
              >
                <TxtEmp01>
                  <AlphanumericSize size="m">1,100</AlphanumericSize>円
                </TxtEmp01>
                ／回
              </TxtSize>
            </div>
          </MediaGrid>
        </SystemContainer>
        <InfoboxLight
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-56']}`}
        >
          <SystemContainerCustom>
            <Heading
              level="2"
              className={`${Utils['Align-center']} ${Utils['Mb-32']}`}
            >
              サービス内容
            </Heading>
            <CustomUl>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-protective-film/img01.png`}
                    alt=""
                    width="656"
                    height="424"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  迅速かつ綺麗な仕上り
                </Heading>
                <p className={Utils['Mt-8']}>
                  ショップ内でご購入いただいた保護フィルムであれば、R
                  CREWが迅速かつ綺麗に貼り付けを行います。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※製品・フィルムの個体差により、ほこりや気泡が残る可能性があります。
                </TxtCap>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-protective-film/img02.png`}
                    alt=""
                    width="656"
                    height="424"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  位置ズレしない
                </Heading>
                <p className={Utils['Mt-8']}>
                  専用の貼り付けツールを使用するため、貼り付け位置がずれる心配はございません。
                </p>
              </li>
              <li>
                <div className={Utils['Align-center']}>
                  <img
                    src={`${assets}img/service/shop-support-for-protective-film/img03.png`}
                    alt=""
                    width="656"
                    height="424"
                  />
                </div>
                <Heading level="3" className={Utils['Mt-16']}>
                  短時間で施工完了
                  <TxtCap>
                    <TxtEmp01>（5～10分程度）</TxtEmp01>
                  </TxtCap>
                </Heading>
                <p className={Utils['Mt-8']}>
                  楽天モバイルショップの店内で施工するため、短時間でお渡しができます。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※楽天モバイルショップでご購入いただいた本サポート対象の保護フィルムのみの貼り付けとなります。
                </TxtCap>
              </li>
            </CustomUl>
          </SystemContainerCustom>
        </InfoboxLight>
        <SystemContainer className={Utils['Mt-56']}>
          <DescriptionListDt>
            <div>
              <dt>サポート対象</dt>
              <dd>
                <UlOnly>
                  <li>
                    楽天モバイルの店頭で保護フィルムを購入されたお客様
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      ※お客様がお店を出られた後は、本サービスはご利用いただけません
                    </TxtCap>
                  </li>
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
                  一部店舗では「保護フィルム貼り付け」の対応を行っておりません。対応可否については店頭にてショップスタッフにお尋ねください。
                </TxtEmp02>
              </li>
              <li>
                保護フィルムの「購入時」が対象です。後日来店の施工希望はお受けできませんのでご注意ください。
              </li>
              <li>保護フィルムを購入した店舗でのみ施工の実施が可能です。</li>
            </UlOnly>
          </AccordionList>
        </SystemContainer>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['shopguide', 'product', 'support']}
      />
    </>
  )
}

export default ServiceShopsupportforprotectivefilm
