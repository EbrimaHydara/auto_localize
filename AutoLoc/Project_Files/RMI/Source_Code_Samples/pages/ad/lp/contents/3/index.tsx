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
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
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

const wifiInfoBoxList = [
  { text: 'レンタル契約に時間がかかる場合がある' },
  { text: 'ルーターを持ち歩く必要がある' },
  { text: '受取と返却が必要になる' },
  { text: '返却忘れなど延滞料金のリスクがある' },
  { text: '複数国周遊時は割高になる場合がある' },
]
const overseaRoamingGeneralInfoBoxList = [
  { text: '使用中のスマホで簡単に設定ができる' },
  { text: 'スマホだけでインターネットに接続できる' },
  { text: '機器の契約・返却が要らない' },
  { text: '使ったデータ通信量分だけの支払い' },
  { text: 'フリーWi-Fiで懸念される情報漏洩などの心配がない' },
]
const overseaRoamingInfoBoxList = [
  { text: '近くの観光スポットを調べる' },
  { text: '電車やバスの時刻を調べる' },
  { text: 'チャットやメールをする' },
  { text: 'SNSの閲覧／投稿をする' },
]
const overseasUseInfoBoxList = [
  {
    text: (
      <>
        海外利用は毎月2GB無料<TxtCap>※1</TxtCap>
      </>
    ),
  },
  { text: '2GB超過分は1GBあたり500円で追加可能' },
  { text: '別途お申し込み不要' },
  {
    text: '事前に「my 楽天モバイル」で海外ローミング(データ通信)の設定をONにするだけ',
  },
]
const saikyoPlanDescriptionBoxList = [
  {
    text: (
      <>
        国内利用時は家族割引適用でデータ無制限2,880円/月 （税込3,168円）
        <TxtCap>※3</TxtCap>
      </>
    ),
  },
  {
    text: (
      <>
        テザリングも無制限<TxtCap>※2</TxtCap>で、Wi-Fiルーター代わりになって便利
      </>
    ),
  },
]
const uservoiceList = [
  {
    id: '57',
    profile: '20代男性／愛知県',
    text: (
      <TxtEmp01>
        2度のタイ旅行で海外ローミングをフル活用！
        <br className={Utils['Show-xxo']} />
        バンコク周辺はどこも安定していました
      </TxtEmp01>
    ),
  },
  {
    id: '52',
    profile: '40代男性／神奈川県',
    text: (
      <TxtEmp01>
        面倒な手続きは不要！
        <br className={Utils['Show-xxo']} />
        ワンタッチでオンオフできる海外ローミングが便利です
      </TxtEmp01>
    ),
  },
  {
    id: '58',
    profile: '20代男性／愛知県',
    text: (
      <TxtEmp01>
        スマホひとつで気軽に外出！
        <br className={Utils['Show-xxo']} />
        出張のお供に楽天モバイルの海外ローミングを活用しました
      </TxtEmp01>
    ),
  },
] satisfies { id: string; profile: string; text: JSX.Element }[]

const AdLpContents3: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'Wi-FiなしでOK！海外でスマホをそのまま使うには'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '/ad/lp/contents/3/',
    },
  ]

  const [directory, setDirectory] = useState<string>('')
  useEffect(() => {
    const matches = window.location.pathname.match(/contents\/(.*?)\//)
    matches && setDirectory(matches[1])
  }, [])

  return (
    <>
      <CustomHead pagetitle={pagetitle} description="" noindex={true} />
      <SystemWrapper>
        <GlobalSimpleHeader
        isNoLink={false}
        isFixed={true}
        lid={`gnavi_logo`}
         />
        <CustomSystemContainer>
          <Heading
            as="h1"
            level="2"
            className={Utils['Mt-40']}
            children={pagetitle}
          />
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/3/kv-sp-240115.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/3/kv-pc-240115.png`}
                width="680"
                height="300"
                alt=""
              />
            </picture>
          </div>
          <Heading
            as="h2"
            level="4"
            className={`${Utils['Mt-pc-40']} ${Utils['Mt-sp-24']}`}
            children="海外でのスマホ利用は「海外ローミング」が便利！"
          />
          <p className={Utils['Mt-32']}>
            海外に行く時は、準備が大変！
            <br />
            パスポート、服、バッグ、靴、化粧品、常備薬、Wi-Fiルーターのレンタル…
          </p>
          <TxtEmp02 className={Utils['Mt-16']}>
            いえいえ、Wi-Fiルーターのレンタルをしなくても、スマホをそのまま使えるんです！
          </TxtEmp02>
          <p className={Utils['Mt-16']}>
            海外ローミングとは、スマホの設定を少し変えるだけで、日本にいる時と同じようなインターネット接続が海外でも出来るサービスです。
          </p>
          <p className={Utils['Mt-16']}>
            短期間の海外旅行や出張に行く方には、別途機器や契約が不要でとても便利だと好評です。
          </p>
          <p className={Utils['Mt-16']}>
            なぜ海外ローミングが良いのか。
            <br />
            Wi-Fiルーターとの違いや、海外旅行での使用例などご紹介します。
          </p>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="Wi-Fiルーターとの違いは？海外ローミングをおすすめするワケ"
          />
          <TxtEmp01
            as="p"
            className={`${Utils['Mt-pc-32']} ${Utils['Mt-sp-24']}`}
          >
            Wi-Fiルーターを利用した時は、
          </TxtEmp01>
          <InfoboxLight className={Utils['Mt-8']}>
            <ListDisc text={wifiInfoBoxList} />
          </InfoboxLight>
          <p className={Utils['Mt-16']}>
            もちろん、使用用途によってはWi-Fiルーターが良い場合もありますが、いつものスマホがそのまま使えるのは便利！
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            一方、一般的な海外ローミングの特徴は、
          </TxtEmp01>
          <InfoboxEmphasis1 className={Utils['Mt-8']}>
            <ListDisc text={overseaRoamingGeneralInfoBoxList} />
          </InfoboxEmphasis1>
          <p className={Utils['Mt-16']}>
            面倒な手続きがなく、シンプルに利用でき、セキュリティリスクも軽減！
            <br />
            身軽で快適な旅をするには、海外ローミングがおすすめなのです。
          </p>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="短期間の旅行だとどのくらいデータ容量を使う？"
          />
          <div className={`${Utils['Mt-pc-32']} ${Utils['Mt-sp-24']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/3/img-01-sp.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/3/img-01-pc.png`}
                width="680"
                height="189"
                alt=""
              />
            </picture>
          </div>
          <p className={`${Utils['Mt-pc-16']} ${Utils['Mt-sp-24']}`}>
            時間区切りであったり、使った分だけの支払いだと高いイメージがありますよね。
            <br />
            旅先ではどのくらい利用するのでしょうか？
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            例えば、飛行機とホテルのみ予約していた場合
          </TxtEmp01>
          <ListDisc
            className={Utils['Mt-16']}
            text={overseaRoamingInfoBoxList}
          />
          <p className={Utils['Mt-16']}>
            などが多く、約一週間で2GB程度が一般的。
          </p>
          <p className={`${Utils['Mt-pc-16']} ${Utils['Mt-sp-24']}`}>
            ただし動画を見たり、ビデオ通話を長くしたりすると、たくさん容量を使うので、その場合は容量が多いプランを契約する必要があります。
          </p>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="海外利用も楽天モバイルが断然おトク"
          />
          <div className={`${Utils['Mt-pc-32']} ${Utils['Mt-sp-24']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/3/img-02-sp-240408.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/3/img-02-pc-240408.png`}
                width="680"
                height="173"
                alt=""
              />
            </picture>
          </div>
          <ListDisc className={Utils['Mt-16']} text={overseasUseInfoBoxList} />
          <p className={Utils['Mt-16']}>
            今すぐ海外に行く予定がなくても、Rakuten最強プランは海外ローミング2GBがついたおトクなプランです。
          </p>
          <ListDisc
            className={Utils['Mt-16']}
            text={saikyoPlanDescriptionBoxList}
          />
          <p className={Utils['Mt-16']}>
            この機会に乗り変えを検討してみるのはいかがでしょうか。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※ 公平なサービス提供または環境により速度低下する場合あり
            <br />
            ※1
            対象の国と地域。プランのデータ利用量に加算。通話料等別。2GB超過後は最大128kbps。その他条件の詳細は
            <LinkNormal
              href={`/service/global/overseas/?l-id=ad_lp_contents_${directory}_service_global_overseas01#note1`}
            >
              こちら
            </LinkNormal>
            <br />
            ※2 無制限は通信量のこと。ゲーム内課金、コンテンツ利用料等別
            <br />
            ※3 通話料等別
          </TxtCap>
          <div
            className={`${Utils['Align-center']} ${Utils['Mt-pc-64']} ${Utils['Mt-sp-24']}`}
          >
            <ButtonPrimaryLarge
              as="a"
              href={`/guide/application/?lid-r=ad_lp_contents_${directory}_f_guide_application`}
            >
              新規／乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
          </div>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="海外ローミングをご利用いただいたお客様の声"
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
            className={`${Utils['Mt-pc-56']} ${Utils['Mt-sp-64']} ${Utils['Align-llc']}`}
          >
            楽天モバイル株式会社
            <br />
            所在地：東京都世田谷区玉川一丁目14番1号{' '}
            <br className={Utils['Show-oox']} />
            <TextWithIndent>楽天クリムゾンハウス</TextWithIndent>
          </p>
          <div
            className={`${Utils['Align-center']} ${Utils['Mt-pc-16']} ${Utils['Mt-sp-48']}`}
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

export default AdLpContents3
