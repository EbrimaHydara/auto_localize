import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonPrimary } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import { LabelList } from '@components/atoms/Label'
import { LinkIconAfter } from '@components/atoms/Link'
import {
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { Table as TableWrapper } from '@components/atoms/Table'
import { IconChevronRight } from '@components/icons'
import { Recommend } from '@components/include/service/Recommend'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { CustomHead } from '@components/utils/CustomHead'
import Utils from '@styles/Utils.module.scss'
import { Related } from '@components/include/service/Related'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { mixins } from '@components/utils/Mixins'

const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const ApplyBtnBox = styled(InfoboxBorder)`
  padding: 24px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
    p {
      text-align-last: left;
    }
  }
`

const ApplyBtn = styled(ButtonPrimary)`
  max-width: 420px;
  width: 100%;
`

const ServiceDataCharge: NextPage = () => {
  const selectedCardIds = ['number-share', 'rakutenmobile-wifi']
  const pagetitle = 'データチャージ（海外ローミング）'
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
    item: [{ text: '海外', isEmp: false }],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「データチャージ（海外ローミング）」サービス紹介。スマートフォン（スマホ）のデータ通信でギガ（パケット通信量）が不足した際に必要なデータ容量をチャージできます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Pb-56']}>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて不課税です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            データチャージ（海外ローミング）
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-16']}>
            <MediaImage className={Utils['Align-left']}>
              <img
                src={`${assets}img/service/data-charge/img-01.png`}
                alt=""
                width="343"
              />
            </MediaImage>
            <div>
              海外ローミングエリアで消費するデータ容量を、必要な分だけいつでもチャージできます。
              <div className={Utils['Mt-8']}>
                <LinkIconAfter href="/support/international-roaming/area/">
                  対応エリア・料金について
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <TxtSize size="s">1GBあたり</TxtSize>
                  <AlphanumericSize size="l">500</AlphanumericSize>
                  <TxtSize size="s">円</TxtSize>
                </TxtEmp01>
              </div>
            </div>
          </MediaGrid>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ApplyBtnBox>
              <ApplyBtn
                as="a"
                href="https://portal.mobile.rakuten.co.jp/dashboard?scrollTo=partnerArea#home"
                data-ratid="service_data-charge_plans01"
                data-ratevent="click"
                data-ratparam="all"
              >
                データをチャージする
              </ApplyBtn>
              <p className={Utils['Mt-8']}>
                ログイン後、「データチャージ」画面からチャージする容量を選択し、ご購入ください。
              </p>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/data-charge/?l-id=service_data-charge_guide_data-charge01">
                  ご利用方法を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <GrayBox>
          <SystemContainer>
            <Heading level="2">追加容量</Heading>
            <TxtEmp02 className={Utils['Mt-16']} as="p">
              追加したい高速データ容量を選択しチャージします。
            </TxtEmp02>
            <p className={Utils['Mt-8']}>
              チャージしたデータ容量は、お申し込み後すぐにご利用いただけます。
            </p>
            <Heading level="3" className={Utils['Mt-24']}>
              海外ローミングエリア
            </Heading>
            <div className={`${Utils['Mt-16']} ${Utils['W-320']}`}>
              <TableWrapper>
                <table>
                  <colgroup>
                    <col className={`${Utils['W-160']}`} />
                    <col className={`${Utils['W-160']}`} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">追加容量</th>
                      <th scope="col">チャージ金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1GB</td>
                      <td className={Utils['Align-right']}>500円</td>
                    </tr>
                    <tr>
                      <td>2GB</td>
                      <td className={Utils['Align-right']}>1,000円</td>
                    </tr>
                    <tr>
                      <td>3GB </td>
                      <td className={Utils['Align-right']}>1,500円</td>
                    </tr>
                    <tr>
                      <td>4GB</td>
                      <td className={Utils['Align-right']}>2,000円</td>
                    </tr>
                    <tr>
                      <td>5GB</td>
                      <td className={Utils['Align-right']}>2,500円</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrapper>
            </div>

            <TxtCap as="p" className={Utils['Mt-16']}>
              ※チャージ料金は不課税です。
            </TxtCap>
            <Heading level="2" className={Utils['Mt-40']} as="h3">
              有効期限
            </Heading>
            <p className={Utils['Mt-16']}>購入日を含めて31日間有効</p>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Mt-56']}>
          <div className={Utils['Align-center']}>
            <ApplyBtnBox>
              <ApplyBtn
                as="a"
                href="https://portal.mobile.rakuten.co.jp/dashboard?scrollTo=partnerArea#home"
                data-ratid="service_data-charge_plans02"
                data-ratevent="click"
                data-ratparam="all"
              >
                データをチャージする
              </ApplyBtn>
              <p className={Utils['Mt-8']}>
                ログイン後、「データチャージ」画面からチャージする容量を選択し、ご購入ください。
              </p>
              <div className={Utils['Mt-24']}>
                <LinkIconAfter href="/guide/data-charge/?l-id=service_data-charge_guide_data-charge02">
                  ご利用方法を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </ApplyBtnBox>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="data-charge"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>データ通信サービス</span>
                </>
              }
            />

            <Recommend
              className={Utils['Mt-24']}
              lId="data-charge"
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

export default ServiceDataCharge
