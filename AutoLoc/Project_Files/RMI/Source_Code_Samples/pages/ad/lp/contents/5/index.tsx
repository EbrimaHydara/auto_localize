import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { InfoboxEmphasis1, InfoboxLight } from '@components/atoms/Infobox'
import { ListDisc } from '@components/atoms/List'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 680px;
`
const UservoiceBox = styled.div`
  :nth-of-type(n + 2) {
    margin-top: 16px;
  }
  padding: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 110px auto;
  ${mixins.mq.MinL} {
    grid-template-columns: 140px auto;
  }
  border: 1px solid ${props => props.theme.colors.monotone75};
  ${mixins.mq.MinL} {
    padding: 16px 24px;
    gap: 24px;
  }
  .profile {
    text-align: center;
  }
  .contents {
    align-self: center;
  }
`
const TextWithIndent = styled.span`
  ${mixins.mq.MaxM} {
    display: inline-block;
    text-indent: 4em;
  }
`

const whenUsingWifiRouterList = [
  { text: 'ルーターを持ち歩く必要がある' },
  { text: 'ルーターの充電が必要である' },
  { text: '契約が必要で、追加で月額料金がかかる' },
]

const ifUseSmartphoneTetheringList = [
  { text: 'スマホだけでパソコンなどをネット接続できる' },
  { text: '新たな契約が不要で、すぐに使える' },
  { text: 'スマホからの接続なので、セキュリティ面も安心' },
]

const tetheringMeritList = [
  {
    text: (
      <>
        テザリングの利用料金は<TxtEmp02>無料</TxtEmp02>
      </>
    ),
  },
  {
    text: (
      <>
        テザリングも<TxtEmp02>データ無制限</TxtEmp02>
        <TxtCap>※1</TxtCap>で、家族割引適時
        <TxtEmp02> 2,880円/月</TxtEmp02>（税込3,168円）
        <TxtCap as="p" className={Utils['Pl-16']}>
          ※通話料等別
        </TxtCap>
      </>
    ),
  },
  { text: 'ご自宅でもWi-Fi代わりに使用できる' },
]

const uservoiceList = [
  {
    id: '30',
    profile: '40代男性',
    text: (
      <TxtEmp01>
        フルリモートワークでテザリングを活用
        <br className={Utils['Show-xxo']} />
        毎月150GB以上のデータ通信を利用していました
      </TxtEmp01>
    ),
  },
  {
    id: '28',
    profile: '20代男性',
    text: (
      <TxtEmp01>
        インターネット環境を最小限にまとめたい！
        <br className={Utils['Show-xxo']} />
        データ使い放題の楽天モバイルで、パソコンとタブレットもテザリングで利用
      </TxtEmp01>
    ),
  },
] satisfies { id: string; profile: string; text: JSX.Element }[]

const AdLpContents5: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    'Wi-FiなしでOK！外出先でネット接続ならスマホのテザリングが便利！'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '/ad/lp/contents/5/',
    },
  ]

  const [directory, setDirectory] = useState<string>('')
  useEffect(() => {
    const matches = window.location.pathname.match(/contents\/(.*?)\//)
    matches && setDirectory(matches[1])
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="外出先でパソコンなどをネット接続するには、楽天モバイルの「テザリング」がおすすめ！おトクなワンプラン「Rakuten最強プラン」！家族割引適用でデータ無制限2,880円/月（税込3,168円）※通話料等別"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader isNoLink={true} />
        <CustomSystemContainer>
          <Heading level="1" className={Utils['Mt-40']} children={pagetitle} />
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/5/kv-sp-240221.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/5/kv-pc-240221.png`}
                width="680"
                height="300"
                alt=""
              />
            </picture>
          </div>
          <Heading
            as="h2"
            level="4"
            className={`${Utils['Mt-pc-40']} ${Utils['Mt-24']}`}
            children="スマホのテザリング機能とは？"
          />
          <p className={Utils['Mt-32']}>
            外出先でもパソコンを使いたいけれど、フリーWi-Fiは心配だし、Wi-Fiルーターを持ち歩くのは面倒...
          </p>
          <p className={Utils['Mt-16']}>
            そんな方へ！
            <br />
            <TxtEmp02>
              テザリングなら、外出先でも自分のスマホで簡単にネット接続できるんです！
            </TxtEmp02>
          </p>
          <p className={Utils['Mt-16']}>
            テザリングとは、スマホをWi-Fiルーターのように使ってパソコンやタブレット、ゲーム機器などをインターネットに接続する機能です。
          </p>
          <p className={Utils['Mt-16']}>
            Wi-Fiルーターの持ち運びも不要で、ご自身のスマホの電波を使用するため、フリーWi-Fiと比較してセキュリティ面でも安心です。
          </p>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="Wi-Fiルーターとの違いは？テザリングがおすすめの理由！"
          />
          <TxtEmp01 as="p" className={`${Utils['Mt-pc-32']} ${Utils['Mt-24']}`}>
            外出先でWi-Fiルーターを利用する時は、
          </TxtEmp01>
          <InfoboxLight className={Utils['Mt-8']}>
            <TxtEmp01>スマホとは別に...</TxtEmp01>
            <ListDisc
              className={Utils['Mt-8']}
              text={whenUsingWifiRouterList}
            />
          </InfoboxLight>
          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            一方、スマホのテザリングを利用すれば
          </TxtEmp01>
          <InfoboxEmphasis1 className={Utils['Mt-8']}>
            <ListDisc text={ifUseSmartphoneTetheringList} />
          </InfoboxEmphasis1>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ご契約携帯電話会社のプランによってはテザリング利用に追加料金がかかる場合があります。ご自身のご契約プランをご確認ください
          </TxtCap>
          <p className={Utils['Mt-16']}>
            この手軽さとすぐに使える便利さこそが、テザリングを圧倒的におすすめする理由です！
          </p>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="テザリング利用も楽天モバイルが断然おトク！"
          />
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/5/tethering-sp-240221.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/5/tethering-pc-240221.png`}
                width="680"
                height="189"
                alt="データ高速無制限。テザリング利用料金0円 ※プランのデータ利用料に加算 ※通信エリア内において使用が可能"
              />
            </picture>
          </div>
          <ListDisc className={Utils['Mt-16']} text={tetheringMeritList} />
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonSecondaryLarge
              as="a"
              href="/fee/saikyo-plan/?l-id=ad_lp_contents_5_saikyo-plan"
            >
              おトクなプラン詳細を確認する
            </ButtonSecondaryLarge>
          </div>
          <p className={Utils['Mt-24']}>
            楽天モバイルであれば別途<TxtEmp02>お申込み不要</TxtEmp02>
            でテザリングが利用可能。
            <br />
            この機会にテザリングもデータ無制限<TxtCap>※1</TxtCap>
            の楽天モバイルを検討してみてはいかがでしょうか？
          </p>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application/?lid-r=ad_lp_contents_5_f_guide_application"
            >
              新規／乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
          </div>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※ プランのデータ利用量に加算
            <br />
            ※ 通信エリア内において使用が可能
            <br />
            ※1 公平なサービス提供または環境により速度低下する場合あり
          </TxtCap>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="テザリングをご利用いただいているお客様の声"
          />
          <div className={Utils['Mt-32']}>
            {uservoiceList.map(v => (
              <UservoiceBox key={v.id}>
                <div className="profile">
                  <picture>
                    <source
                      media={`(max-width:${theme.max.m})`}
                      srcSet={`${assets}img/uservoice/avator-${v.id}.png`}
                      width="92"
                      height="92"
                    />
                    <img
                      src={`${assets}img/uservoice/avator-${v.id}.png`}
                      width="108"
                      height="108"
                      alt=""
                    />
                  </picture>
                  <TxtSize as="p" size="ss" className={Utils['Mt-8']}>
                    {v.profile}
                  </TxtSize>
                </div>
                <div className="contents">
                  {v.text}
                  <p className={`${Utils['Mt-8']} ${Utils['Align-rrl']}`}>
                    <LinkIconAfter
                      href={`/uservoice/${v.id}/?l-id=ad_lp_contents_${directory}_uservoice_${v.id}`}
                    >
                      続きを読む
                      <IconChevronRight />
                    </LinkIconAfter>
                  </p>
                </div>
              </UservoiceBox>
            ))}
          </div>
          <p
            className={`${Utils['Mt-pc-56']} ${Utils['Mt-64']} ${Utils['Align-llc']}`}
          >
            楽天モバイル株式会社
            <br />
            所在地：東京都世田谷区玉川一丁目14番1号{' '}
            <br className={Utils['Show-oox']} />
            <TextWithIndent>楽天クリムゾンハウス</TextWithIndent>
          </p>
          <div
            className={`${Utils['Align-center']} ${Utils['Mt-pc-16']} ${Utils['Mt-48']}`}
          >
            <p>
              <LinkNormal
                href={`/support/?l-id=ad_lp_contents_${directory}_support`}
              >
                お問い合わせ先
              </LinkNormal>
            </p>
            <p>
              <LinkNormal
                href={`https://corp.mobile.rakuten.co.jp/guide/privacy/?l-id=ad_lp_contents_${directory}_guide_privacy`}
                target="_blank"
                rel="noopener"
              >
                個人情報保護ポリシー
              </LinkNormal>
            </p>
          </div>
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default AdLpContents5
