import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtNormal, TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const PriceNumberFree = styled(TxtSize)`
  line-height: 1;
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceDisasterboard: NextPage = () => {
  const selectedCardIds = ['i-filter']
  const pagetitle = '災害用伝言板'
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
    item: [{ text: '災害関連', isEmp: false }],
  }
  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「災害用伝言板」サービス紹介。"
      />
      <SystemWrapper>
        <SystemContainer>
          <Heading level="1" className={Utils['Mt-16']}>
            {pagetitle}
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <TxtNormal className={Utils['Mt-16']} as="p">
            災害時の安否確認手段として「災害用伝言板」をご利用いただけます。
          </TxtNormal>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <div>
              <PriceNumberFree size="ll">
                <TxtEmp01>無料</TxtEmp01>
              </PriceNumberFree>
            </div>
          </div>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※
            災害用伝言板は、無料でご利用いただけます。楽天回線からご利用の場合は、データ利用量にカウントされます。
          </TxtCap>
          <div className={Utils['Mt-40']}>
            <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
              <ButtonRegularLarge
                href="https://public-safety.mobile.rakuten.co.jp/?lang=ja"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                災害用伝言板を利用する
              </ButtonRegularLarge>
            </div>
            <Heading level="2" className={Utils['Mt-64']}>
              主な機能
            </Heading>
            <Heading level="3" className={Utils['Mt-32']}>
              安否の登録
            </Heading>
            <p className={Utils['Mt-16']}>
              お客様ご自身の安否情報を登録し、ご家族・知人に伝えることができます。
            </p>
            <Heading level="3" className={Utils['Mt-32']}>
              安否の確認
            </Heading>
            <p className={Utils['Mt-16']}>
              ご家族・知人の安否情報を確認できます。
            </p>
            <TxtCap as="p" className={Utils['Mt-24']}>
              ※登録された安否情報の確認は、楽天モバイルのスマートフォンのほか、他社携帯電話やパソコン、タブレットを含め、インターネットからどなたでもご利用いただけます。
            </TxtCap>
            <Heading level="2" className={Utils['Mt-64']}>
              主な仕様
            </Heading>
            <DescriptionListDefault className={Utils['Mt-24']}>
              <div>
                <dt>提供条件</dt>
                <dd>震度6弱以上の地震など、大きな災害が発生した場合</dd>
              </div>
              <div>
                <dt>メッセージ登録可能件数</dt>
                <dd>
                  <p>1携帯電話番号あたり10件</p>
                  <TxtCap as="p" className={Utils['Mt-16']}>
                    ※10件を超えるメッセージは古いものから順次上書きされます。
                  </TxtCap>
                </dd>
              </div>
              <div>
                <dt>メッセージ登録内容</dt>
                <dd>
                  <Heading level="4" as="p">
                    安否の状態（複数選択可）
                  </Heading>
                  <div className={Utils['Mt-8']}>
                    日本語版
                    <ul>
                      <li>・無事です</li>
                      <li>・被害があります</li>
                      <li>・自宅にいます</li>
                      <li>・避難所にいます</li>
                    </ul>
                  </div>
                  <div className={Utils['Mt-8']}>
                    英語版
                    <ul>
                      <li>・I’m okay</li>
                      <li>・Need Help</li>
                      <li>・Safe at home</li>
                      <li>・At evacuation area</li>
                    </ul>
                  </div>
                  <Heading level="4" as="p" className={Utils['Mt-16']}>
                    コメント
                  </Heading>
                  <p className={Utils['Mt-8']}>
                    ・全角100文字以内（半角200文字以内）
                  </p>
                </dd>
              </div>
              <div>
                <dt>保存期間</dt>
                <dd>1つの災害でのサービスを終了するまで</dd>
              </div>
            </DescriptionListDefault>
            <Heading level="2" className={Utils['Mt-64']} id="trial-services">
              体験サービス
            </Heading>
            <p className={Utils['Mt-16']}>
              災害発生に備えて、災害用伝言版のご利用方法を事前に覚えていただくことを目的として体験サービスを提供しています。
            </p>
            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegularLarge
                href="https://public-safety.mobile.rakuten.co.jp/?lang=ja"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                災害用伝言板を利用する
              </ButtonRegularLarge>
            </div>
            <TxtCap as="p" className={Utils['Mt-24']}>
              ※実際に災害が発生した際には体験サービスを中止します。
              <br />
              ※体験サービスの終了時には、すべての伝言は削除します。
            </TxtCap>
            <Heading level="3" className={Utils['Mt-32']}>
              体験サービスの提供時期
            </Heading>
            <p className={Utils['Mt-16']}>
              毎月1日・15日（0:00～24:00）
              <br />
              正月三が日（1月1日12:00～1月3日24:00）
              <br />
              防災週間（8月30日～9月5日）
              <br />
              防災とボランティア週間（1月15日～1月21日）
            </p>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-64']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="disaster_board"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>セキュリティサービス</span>
                </>
              }
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="disaster_board"
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

export default ServiceDisasterboard
