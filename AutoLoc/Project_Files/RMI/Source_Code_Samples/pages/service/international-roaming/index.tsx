import type { NextPage } from 'next'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter, LinkIconBefore } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { LabelList } from '@components/atoms/Label'
import { IconArrowDown, IconChevronRight } from '@components/icons'
import { ListDisc } from '@components/atoms/List'
import { Recommend } from '@components/include/service/Recommend'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'
import { Related } from '@components/include/service/Related'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'
import { MediaGridHalf } from '@components/layout/Media'
import { TxtCap } from '@components/atoms/Txt'

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const Nav = styled.ul`
  display: grid;
  gap: 8px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
  > li {
    border: solid 1px ${props => props.theme.colors.monotone75};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.white};
  }
  .link {
    width: 100%;
    padding: 16px 8px;
    padding-right: 36px;
    text-align: center;
    color: ${props => props.theme.colors.monotone30};
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
`

const NavIconArrowDown = styled(IconArrowDown)`
  width: 24px;
  font-size: 20px;
`

const feeList = {
  text: [
    {
      text: '2GB超過後も海外ローミング自体は利用可能ですが、海外ローミングエリアでの通信速度が低速になります。（最大128kbps）',
    },
    {
      text: '2GB超過後も高速データを追加で利用したい場合は、別途500円／1GBでデータチャージが可能です。',
    },
  ],
}

const termsList = {
  text: [
    {
      text: 'Rakuten最強プラン／Rakuten最強プラン（データタイプ）を契約している。',
    },
    {
      text: (
        <>
          渡航先とご利用端末が海外ローミング（データ通信）の対応エリアに該当している。
          <div className={Utils['Mt-8']}>
            <LinkIconAfter href="/support/international-roaming/area/">
              対応エリアを調べる
              <IconChevronRight />
            </LinkIconAfter>
          </div>
        </>
      ),
    },
  ],
}

const accordionListArgs1 = {
  text: [
    {
      text: `海外への渡航の前に、日本で楽天モバイルネットワークへの接続をしてください。`,
    },
    {
      text: `海外への渡航の前に、国内でRakuten Linkを認証してください。海外ローミングエリアによっては認証できない場合がございます。`,
    },
    {
      text: `海外ローミング（データ通信）および国際通話、国際SMS、国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。`,
    },
    {
      text: `各海外／国際サービスのご利用料金は、不課税です。`,
    },
    {
      text: `海外ローミング（データ通信）のご利用時にRakuten Linkを用いて発信した場合、事業者の回線の仕様によって非通知として発信される場合がございます。`,
    },
  ],
}

const ServiceInternationalRoaming: NextPage = () => {
  const selectedCardIds = ['international-unlimited-talk', 'data-charge']
  const pagetitle = '海外ローミング（データ通信）'
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
  const outputAnchorNav = useCallback(
    (items: { anchor: string; name: string }[]) => (
      <Nav>
        {items.map(item => (
          <li key={item.anchor}>
            <LinkIconBefore
              href={`#${item.anchor}`}
              onClick={e => anchorCallback(e, item.anchor)}
              className="link"
            >
              <NavIconArrowDown />
              {item.name}
            </LinkIconBefore>
          </li>
        ))}
      </Nav>
    ),
    [],
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「海外ローミング（データ通信）」サービス紹介。現在利用中のスマートフォン（スマホ）のまま、世界各国で定額料金でデータ通信ができます"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Heading level="1" className={Utils['Mt-32']}>
            海外ローミング（データ通信）
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <p className={Utils['Mt-16']}>
            Rakuten最強プランの料金支払いのみで、海外ローミング（データ通信）対応エリアでの、高速データ通信の利用が可能です。
          </p>
        </SystemContainer>
        <BgGray
          className={`${Utils['Mt-24']} ${Utils['Pt-16']} ${Utils['Pb-32']}`}
        >
          <SystemContainer>
            <Heading level="4" as="h3" className={Utils['Align-center']}>
              毎月2GBまで、
              <br className={Utils['Show-oox']} />
              プラン料金の支払いのみで利用可能
              <br />
              <TxtCap>※通話料等別</TxtCap>
            </Heading>
            <nav className={Utils['Mt-16']}>
              {outputAnchorNav([
                {
                  anchor: 'fee',
                  name: '料金／データ利用量',
                },
                {
                  anchor: 'terms',
                  name: '利用条件',
                },
                {
                  anchor: 'notes',
                  name: 'ご利用上の注意',
                },
              ])}
            </nav>
          </SystemContainer>
        </BgGray>
        <SystemContainer>
          <MediaGridHalf
            className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
          >
            <div>
              <ButtonRegularLarge as="a" href="/guide/international-roaming/">
                ご利用方法を見る
              </ButtonRegularLarge>
            </div>
            <div>
              <ButtonRegularLarge
                as="a"
                href="/support/international-roaming/area/"
              >
                対応エリア・料金を調べる
              </ButtonRegularLarge>
            </div>
          </MediaGridHalf>

          <section className={Utils['Mt-64']}>
            <Heading id="fee" level="2">
              料金／データ利用量
            </Heading>
            <p className={Utils['Mt-16']}>
              高速データ2GBまでは、Rakuten最強プランのお支払いのみで海外ローミングの利用が可能です。利用分はRakuten最強プランのデータ量として換算されます。
            </p>
            <ListDisc className={Utils['Mt-16']} {...feeList} />
            <div className={Utils['Mt-8']}>
              <LinkIconAfter href="/service/data-charge/">
                データチャージの詳細を見る
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          </section>

          <section className={Utils['Mt-64']}>
            <Heading id="terms" level="2">
              利用条件
            </Heading>
            <p className={Utils['Mt-16']}>
              海外ローミングをご利用いただくにあたり、以下条件を全て満たしていることをご確認ください。
            </p>
            <ListDisc className={Utils['Mt-16']} {...termsList} />
          </section>

          <section className={Utils['Mt-64']}>
            <Heading id="notes" level="2">
              ご利用上の注意
            </Heading>
            <ListDisc className={Utils['Mt-16']} {...accordionListArgs1} />
            <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
              <ButtonRegularLarge href="/guide/international-roaming/" as="a">
                ご利用方法を見る
              </ButtonRegularLarge>
            </div>
          </section>

          <ServiceGlobalBnr
            className={Utils['Mt-40']}
            lid="service_international-roaming"
          />
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="international-roaming"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />
            <Recommend
              className={Utils['Mt-24']}
              lId="international-roaming"
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

export default ServiceInternationalRoaming
