import type { NextPage } from 'next'
import { useContext } from 'react'

import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'

import { PandaShopCardItem } from '@components/fragment/shop/panda-desgin-shop/CardCampaign'
import { SearchShop } from '@components/fragment/shop/panda-desgin-shop/SearchShop'
import { CardCampaign } from '@components/fragment/shop/panda-desgin-shop/CardCampaign'
import { BnrCampaignShopLimited } from '@components/include/common/BnrCampaignShopLimited'

import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'

const Section = styled.div`
  padding: 56px 0;
`

const SectionKv = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    padding-top: 44px;
    padding-bottom: 16px;
    background: url(${assets}img/shop/panda-desgin-shop/panda-desgin-shop-kv-bg-top.png)
        left top repeat-x,
      url(${assets}img/shop/panda-desgin-shop/panda-desgin-shop-kv-bg-center.png)
        left center repeat-x;
    background-color: ${props => props.theme.colors.pink5};
    background-size: 104px 34px, 3549px 177px;
  }
`

const SectionRenewal = styled(Section)`
  background-color: #d1f1ff;
`

const SectionCampaign = styled(Section)`
  background: url(${assets}img/shop/panda-desgin-shop/bg-campaign-sp.png);
  background-size: 100%;
  ${mixins.mq.MinL} {
    background: url(${assets}img/shop/panda-desgin-shop/bg-campaign-pc.png);
    background-size: 50%;
  }
`

const RenewalDesc = styled.div`
  margin-top: 32px;
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
  p {
    margin-top: 8px;
    ${mixins.mq.MaxM} {
      margin-top: 16px;
    }
    &:nth-of-type(1) {
      margin-top: 0;
    }
  }
`

const CampaignCardList = styled.ul`
  margin-top: 32px;
  display: grid;
  gap: 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 100%);
  }
`

const CardCampaignItems: Array<PandaShopCardItem> = [
  {
    id: '1',
    title: (
      <>
        ご来店でお買いものパンダ
        <br className={Utils['Disp-sp']} />
        LINEスタンプGET!
      </>
    ),
    imgs: [
      {
        path: 'okaimono-panda-line-stamp.png',
        alt: 'お買いものパンダ「最強ポジティブ」LINEスタンプGET！',
      },
    ],
    link: {
      url: 'https://event.rakuten.co.jp/okaimonopanda/line/mobileshop/?scid=oe_rmb_shop_banner_mnp_collaboration_shop_2403_rakuten_okaimonopandaline&argument=ZMhPE4GP&dmai=a65e12069aac49',
      target: '_blank',
    },
    content: (
      <>
        お買いものパンダLINEスタンプを無料でダウンロードできます。
        <br />
        最強にポジティブなメッセージスタンプで、新生活も毎日ハッピーに過ごそう♪
        <p className={`${Utils['Mt-8']}`}>
          開催期間：2024年3月12日（火）12:00～2024年6月3日（月）閉店
        </p>
      </>
    ),
    memo: [
      '※一部、本キャンペーン対象外の楽天モバイルショップがあります。',
      '※本キャンペーンは予告なく、変更・中止される場合があります。',
    ],
    labels: [
      {
        text: '楽天モバイルショップ対象',
        isEmp: true,
      },
      {
        text: '家電量販店対象',
        isEmp: true,
      },
    ],
  },
  {
    id: '2',
    title: (
      <>
        ご来店でお買いものパンダ
        <br className={Utils['Disp-sp']} />
        グッズプレゼント！
      </>
    ),
    imgs: [
      {
        path: 'campaign-shop-panda-present-240502.png',
        alt: '楽天モバイルショップ限定！ご来店でお買いものパンダグッズプレゼント！',
        ratid: 'shop_panda-desgin-shop_campaign_shop-panda-speedkuji_01',
        note: '※店舗によって景品が異なります。',
        label: '5月特典',
      },
      {
        path: 'campaign-shop-panda-coloring.png',
        alt: '最強こどもプログラム開始記念　お買いものパンダのぬりえ',
        note: '※5月特典お買いものパンダグッズプレゼントとの併用はできません',
        label: '5/3～',
        labelColor: '#CEFFD6',
      },
    ],
    link: {
      url: '',
    },
    content: (
      <>
        楽天モバイルショップへ来店するだけで、毎月新しいお買いものパンダグッズが貰えます。
        <p className={`${Utils['Mt-16']} ${Utils['Mb-8']}`}>
          5月より、お子さまのスマホデビューにオススメな「最強こどもプログラム」も開始されます。
        </p>
        <LinkIconAfter href="/fee/kids/?l-id=shop_panda-desgin-shop_fee_kids">
          最強こどもプログラム詳細はこちら
          <IconChevronRight />
        </LinkIconAfter>
      </>
    ),

    memo: [
      '※本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください。',
      '※店舗によって景品が異なります。',
      '※家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外となります。',
      '※景品画像は一例です。',
      '※おひとり様1点限りとなります。',
      '※在庫がなくなり次第終了となります。',
      '※予告なく内容の変更もしくは終了となる場合がございます。あらかじめご了承ください。',
      '※本景品を転売等の営利目的で利用した場合、今後のキャンペーンご利用をお断りする場合があります。',
    ],
    labels: [
      {
        text: '楽天モバイルショップ対象',
        isEmp: true,
      },
      {
        text: '家電量販店対象外',
        isEmp: false,
      },
    ],
  },
  {
    id: '3',
    title: (
      <>
        お見積もりで
        <br className={Utils['Disp-sp']} />
        お買いものパンダグッズ
        <br className={Utils['Disp-sp']} />
        プレゼント！
      </>
    ),
    imgs: [
      {
        path: 'campaign-shop-quotation-240502.png',
        alt: 'お買いものパンダグッズプレゼント！',
      },
    ],
    link: {
      url: '',
    },
    content: '店舗スタッフにスマホ料金のお見積りの依頼をしてください。',
    memo: [
      '※当たるアイテムの画像は一例です。',
      '※店舗によって特典が異なる可能性があります。',
      '※一部店舗ではご利用いただけない場合があります。',
      '※おひとり様1点限りとなります。',
      '※在庫がなくなり次第終了となります。',
      '※予告なく内容の変更もしくは終了となる場合がございます。あらかじめご了承ください。',
      '※本景品を転売等の営利目的で利用した場合、今後のキャンペーンご利用をお断りする場合があります。',
    ],
    labels: [
      {
        text: '楽天モバイルショップ対象',
        isEmp: true,
      },
      {
        text: '家電量販店対象',
        isEmp: true,
      },
    ],
  },
]

const ShopPandadesignshop: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイルショップ全店舗がお買いものパンダデザインに'
  // const directories = [
  //   { path: '/campaign/', label: 'キャンペーン・特典' },
  // ]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'キャンペーン・特典',
      url: '/campaign/',
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
        // directories={directories}
        description="楽天モバイルショップの店内が楽天モバイルTシャツを着たお買いものパンダのデザインにリニューアル！楽天モバイルショップでは、「ご来店」「お見積もり」すると、それぞれでお買いものパンダのグッズが手に入る！"
      />

      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SectionKv>
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/shop/panda-desgin-shop/panda-desgin-shop-kv-sp-240501.png`}
              width="750"
              height="920"
            />
            <img
              src={`${assets}img/shop/panda-desgin-shop/panda-desgin-shop-kv-pc-240501.png`}
              width="972"
              height="463"
              alt="楽天モバイルショップ全店舗がお買いものパンダデザインに"
            />
          </picture>
        </SectionKv>
        <SectionRenewal>
          <SystemContainer>
            <div className={`${Utils['Align-center']}`}>
              <img
                src={`${assets}img/shop/panda-desgin-shop/title-renewal.png`}
                width="328"
                height="70"
                alt="楽天モバイルショップがリニューアル！"
              />
            </div>
            <RenewalDesc>
              <p>
                店内が、楽天モバイルTシャツを着たお買いものパンダのデザインにリニューアル！
              </p>
              <p>
                楽天モバイルショップでは、「お見積もり」や「楽天モバイルご契約者」に、それぞれでお買いものパンダのグッズが手に入る！
              </p>
              <p>ぜひ、楽天モバイルショップに遊びに来てね！</p>
            </RenewalDesc>
            <div className={`${Utils['Mt-40']}`}>
              <SearchShop lid="shop_panda-desgin-shop_shop_01" />
            </div>
          </SystemContainer>
        </SectionRenewal>

        <SectionCampaign>
          <SystemContainer>
            <div className={`${Utils['Align-center']}`}>
              <img
                src={`${assets}img/shop/panda-desgin-shop/title-campaign.png`}
                width="240"
                height="67"
                alt="ショップで開催中のキャンペーン"
              />
            </div>
            <CampaignCardList>
              {CardCampaignItems.map((item, index) => (
                <CardCampaign key={index} cardItem={item} />
              ))}
            </CampaignCardList>
          </SystemContainer>
        </SectionCampaign>

        <section className={`${Utils['Pt-56']}`}>
          <SystemContainer>
            <CommonSaikyo />
            <SearchShop padding="56" lid="shop_panda-desgin-shop_shop_02" />

            <div className={`${Utils['Mt-40']}`}>
              <BnrCampaignShopLimited />
            </div>
          </SystemContainer>
        </section>
      </SystemWrapper>

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ShopPandadesignshop
