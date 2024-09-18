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
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { InfoboxEmphasis1, InfoboxLight } from '@components/atoms/Infobox'
import { ListDisc } from '@components/atoms/List'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkNormal } from '@components/atoms/Link'
import { BannerHover } from '@components/atoms/Banner'

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 712px;
`
const TextWithIndent = styled.span`
  ${mixins.mq.MaxM} {
    display: inline-block;
    text-indent: 4em;
  }
`

const routerOfDifference = [
  { text: '利用場所の制限' },
  { text: '端末の大きさや価格' },
  { text: '電波の届く範囲' },
]
const homeRouterOfFeature = [
  { text: 'コンセントに繋ぐため、家での置き場を考える必要がある' },
  { text: 'モバイルルーターと比べるとサイズが大きい' },
  { text: '利用場所を変える際、住所登録の変更が必要な場合がある' },
]
const mobileRouterOfFeature = [
  { text: '充電ができるので利用場所を選ばない' },
  {
    text: '比較的小さいサイズなので手軽に持ち運べて、通信エリアなら外出先でもすぐ使える',
  },
  { text: '本体価格がホームルーターより安いことが多い' },
]
const recommendedReason = [
  { text: 'お手持ちのスマホやPC・タブレットなど16台まで同時接続OK' },
  { text: 'QRコードを読み込むだけで、スマホと簡単接続' },
  { text: '携帯しやすいデザインで持ち運びも便利' },
  { text: '最大約10時間連続通信できるので、外出先でも長時間利用できる' },
]
const rakutenMobileMatchUser = [
  { text: '複数端末を同時接続して作業したい方' },
  { text: '簡単に接続設定をしたい方' },
  { text: '在宅時や外出先、旅行先でも利用したい方' },
]

const AdLpContents7: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'モバイルルーターはホームルーターの代わりになる？'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '/ad/lp/contents/7/',
    },
  ]

  const [directory, setDirectory] = useState<string>('')
  useEffect(() => {
    const matches = window.location.pathname.match(/contents\/(.*?)\//)
    matches && setDirectory(matches[1])
  }, [])

  interface BannerProps {
    lid?: string
  }
  const Banner = (params: BannerProps) => {
    const lidString = params.lid ? `?l-id=${params.lid}` : ''

    return (
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <BannerHover
          href={`/product/internet/rakuten-wifi-pocket-2c/${lidString}`}
        >
          <picture>
            <source
              media={`(max-width:${theme.max.m})`}
              srcSet={`${assets}img/ad/lp/contents/7/bnr-01-sp-240328.png`}
              width="343"
              height="108"
            />
            <img
              src={`${assets}img/ad/lp/contents/7/bnr-01-pc-240328.png`}
              width="680"
              height="106"
              alt="Rakuten WiFi Pocket 2Cが楽天モバイルお申し込みで1円 ※購入台数制限等条件あり ※「Rakuten最強プラン（データタイプ）」は対象外"
            />
          </picture>
        </BannerHover>
      </div>
    )
  }

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="ご自宅でのネット接続には、楽天モバイルのモバイルルーターがおすすめ！データ高速無制限のおトクなワンプラン「Rakuten最強プラン」"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader
          lid={`ad_lp_contents_${directory}_fee_top`}
          isFixed={true}
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
                srcSet={`${assets}img/ad/lp/contents/7/kv-sp-240328.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/7/kv-pc-240328.png`}
                width="680"
                height="300"
                alt=""
              />
            </picture>
          </div>
          <Heading
            as="h2"
            level="4"
            className={`${Utils['Mt-24']}`}
            children="家でのネット接続にはホームルーターが必要？"
          />
          <p className={Utils['Mt-24']}>
            近年、家でネットに接続する機会が増えたのではないでしょうか？
          </p>
          <p className={Utils['Mt-16']}>
            その選択肢として話題に上がる1つにホームルーターがありますが、
            <TxtEmp02 as="span">
              ホームルーター以外にも選択肢があることをご存じでしょうか？
            </TxtEmp02>
          </p>
          <p className={Utils['Mt-16']}>
            家でインターネット接続するには、
            <br />
            光回線・ホームルーター・モバイルルーターを利用するなど、いくつか方法があります。
          </p>
          <p className={Utils['Mt-16']}>
            なるべく安く、家に置いていても邪魔になりにくいものが良いけれど、どれを選べば良いか迷っている方もいると思います。
          </p>
          <p className={Utils['Mt-16']}>
            そこでまず、選択肢としてよく検討されるホームルーターとモバイルルーターの違いを見てみましょう。
          </p>

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="ホームルーターとモバイルルーターの違いは？"
          />
          <p className={Utils['Mt-16']}>
            ホームルーターとモバイルルーターの大きな違いは、例えば以下の3点が挙げられます。
          </p>
          <InfoboxLight className={Utils['Mt-16']}>
            <ListDisc text={routerOfDifference} />
          </InfoboxLight>
          <p className={Utils['Mt-16']}>
            では、具体的にホームルーターとモバイルルーターの特徴を見てみましょう。
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            一般的なホームルーターの特徴は、
          </TxtEmp01>
          <InfoboxLight className={Utils['Mt-16']}>
            <ListDisc text={homeRouterOfFeature} />
          </InfoboxLight>

          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            一方、一般的なモバイルルーターの特徴は、
          </TxtEmp01>
          <InfoboxEmphasis1 className={Utils['Mt-8']}>
            <ListDisc text={mobileRouterOfFeature} />
          </InfoboxEmphasis1>
          <p className={Utils['Mt-16']}>
            ただし、一般的に接続可能な端末の数、電波の届く範囲や通信速度などは、ホームルーターと異なる場合があるので注意が必要です。
          </p>
          <p className={Utils['Mt-16']}>
            このように、自宅だけでなく外出先でも利用されたい方や端末の価格を抑えたい方は、ホームルーター替わりにモバイルルーターの利用を検討してみてはいかがでしょうか？
          </p>
          <TxtEmp02 as="p" className={Utils['Mt-16']}>
            楽天モバイルならおトクなキャンペーン利用で、モバイルルーターが楽天モバイルお申し込みで1円！！
          </TxtEmp02>
          <TxtCap as="p">
            ※詳しくは、以下リンクおよびページ下部をご確認ください。
          </TxtCap>
          <Banner lid="ad_lp_contents_7_product_rakuten-wifi-pocket-2c01" />

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="楽天モバイルのモバイルルーターがおすすめな理由"
          />
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/7/img-01-sp-240328.png`}
                width="686"
                height="548"
              />
              <img
                src={`${assets}img/ad/lp/contents/7/img-01-pc-240328.png`}
                width="680"
                height="270"
                alt=""
              />
            </picture>
          </div>
          <InfoboxEmphasis1 className={Utils['Mt-24']}>
            <ListDisc text={recommendedReason} />
          </InfoboxEmphasis1>
          <p className={Utils['Mt-24']}>
            そのため、以下のような方は楽天モバイルのモバイルルーターがおすすめです！
          </p>
          <InfoboxEmphasis1 className={Utils['Mt-16']}>
            <ListDisc text={rakutenMobileMatchUser} />
          </InfoboxEmphasis1>
          <p className={Utils['Mt-24']}>
            <TxtEmp02>
              また、楽天モバイルのモバイルルーターは海外でも利用でき、なんと毎月2GBまで無料で使えます！
            </TxtEmp02>
            <TxtCap>※</TxtCap>
          </p>
          <p className={Utils['Mt-16']}>
            つまり、海外旅行の際もいつも使っているモバイルルーターをそのままおトクに使うことができちゃいます！
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※プランのデータ利用量に加算。通話料等別。2GB超過後は最大128kbps※ご利用時にmy
            楽天モバイルとスマホの設定が別途必要です
          </TxtCap>

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="モバイルルーターを使うなら楽天モバイルが断然おトク"
          />
          <p className={Utils['Mt-24']}>
            楽天モバイルなら、データ高速無制限だからどんなに使っても家族割引適用で月額2,880円（税込3,168円）！
            <TxtCap>※1</TxtCap>{' '}
            しかも、使ったデータ量に応じて自動で最適な料金になるので、使わなければ勝手に安くなる！
          </p>
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/7/img-02-sp-240430.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/7/img-02-pc-240430.png`}
                width="680"
                height="300"
                alt="家族割引適用後100円（税別）引きで、20GB超過後どれだけ使っても無制限※1 で2,880円/月(税込3,168円)、3GB超過後20GBまでは1,880 円/月(税込2,068円)  、3GBまでは880円/月(税込968円) 。毎月のデータ利用量に応じて最適な料金に！"
              />
            </picture>
          </div>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonSecondaryLarge
              as="a"
              href={`/fee/saikyo-plan/?l-id=ad_lp_contents_${directory}_saikyo-plan`}
            >
              料金プランの詳細はこちら
            </ButtonSecondaryLarge>
          </div>

          <p className={Utils['Mt-32']}>
            さらに、毎月のお支払いに楽天ポイントが使えるから、ポイントで通信費を抑えることも！
          </p>
          <div className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/7/img-03-sp-240328.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/7/img-03-pc-240328.png`}
                width="680"
                height="300"
                alt=""
              />
            </picture>
          </div>
          <p className={Utils['Mt-24']}>
            ぜひこの機会に、おトクが盛りだくさんの楽天モバイルへの乗り変えを検討してみるのはいかがでしょうか。
          </p>
          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=50150679&selectAvailable=true"
              className={Utils['Py-sp-8']}
            >
              Rakuten WiFi Pocket 2Cを
              <br className={Utils['Show-oxx']} />
              購入する
            </ButtonPrimaryLarge>
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

export default AdLpContents7
