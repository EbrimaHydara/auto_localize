import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { InfoboxEmphasis1, InfoboxLight } from '@components/atoms/Infobox'
import { ListDisc, ListOrdered } from '@components/atoms/List'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'
import { MovieWrapper } from '@components/atoms/MovieWrapper'
import {
  UserVoiceData,
  UserVoiceSection,
} from '@components/fragment/ad/lp/contents/UserVoiceSection'
import { RakutenInfo } from '@components/fragment/ad/lp/contents/RakutenInfo'

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 680px;
`

const whenUsingTwoStopList = [
  { text: '取得方法が携帯電話会社により異なる' },
  { text: '取得まで数日かかることがある' },
  { text: '有効期限が決まっている' },
]

const ifUseMnoProcessList = [
  { text: 'Webでかんたん本人確認（eKYC）でお申し込み' },
  { text: 'eSIM対応製品をご利用' },
  { text: 'アプリで開通手続き' },
]

const uservoiceList: UserVoiceData[] = [
  {
    id: '45',
    profile: '30代男性',
    text: (
      <TxtEmp01>
        Webサイトからの乗り換えがわかりやすくてスムーズ！
        <br className={Utils['Show-xxo']} />
        AIかんたん本人確認（eKYC）のコツは撮影方法！
      </TxtEmp01>
    ),
  },
] satisfies { id: string; profile: string; text: JSX.Element }[]

const AdLpContents6: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    'Web でより簡単により早く、電話番号をそのままで通信キャリアを乗り換えるには？'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '/ad/lp/contents/6/',
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
        description="Webでより簡単により早く、電話番号をそのままで通信キャリアを乗り換えるには、楽天モバイルの「MNPワンストップ」がおすすめ！Webからのお申し込みで即日開通！おトクなワンプラン「Rakuten最強プラン」！"
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
                srcSet={`${assets}img/ad/lp/contents/6/kv-sp-240228.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/6/kv-pc-240228.png`}
                width="680"
                height="300"
                alt=""
              />
            </picture>
          </div>
          <Heading
            as="h2"
            level="4"
            className={`${Utils['Mt-24']} ${Utils['Mt-pc-40']}`}
            children="乗り換えは「MNPワンストップ」がおすすめ！"
          />
          <InfoboxEmphasis1 className={Utils['Mt-24']}>
            <TxtEmp02 as="p">MNPってなに？</TxtEmp02>
            <p className={Utils['Mt-8']}>
              MNP（携帯電話番号ポータビリティ）とは今使っている携帯電話番号を変えずに、携帯電話会社の乗り換えができる制度です。
            </p>
          </InfoboxEmphasis1>
          <p className={Utils['Mt-16']}>
            電話番号変えずにキャリアを乗り換えたいけど、手続きにはMNP予約番号が必要なんだよね？その他にも手続きが多いのかな？
            <br />
            <TxtEmp02>
              「MNPワンストップ」なら手続きが1社で完結しちゃうんです！
            </TxtEmp02>
          </p>
          <p className={Utils['Mt-24']}>
            MNPの乗り換えには
            <TxtEmp01>従来のMNP予約番号を取得する「ツーストップ方式」</TxtEmp01>
            と、
            <TxtEmp01>
              MNP予約番号取得の必要がない「MNPワンストップ方式」
            </TxtEmp01>
            があります。
          </p>
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/ad/lp/contents/6/content01-sp.png`}
                width="100%"
              />
              <img
                src={`${assets}img/ad/lp/contents/6/content01-pc.png`}
                width="680"
                height="178"
                alt=""
              />
            </picture>
          </div>
          <p className={Utils['Mt-24']}>
            従来のツーストップ方式は、MNP予約番号が必要で、以下のような注意が必要でした。
          </p>
          <InfoboxLight className={Utils['Mt-16']}>
            <ListDisc className={Utils['Mt-8']} text={whenUsingTwoStopList} />
          </InfoboxLight>
          <p className={Utils['Mt-24']}>
            2023年5月からスタートした<TxtEmp01>「MNPワンストップ」</TxtEmp01>
            は、MNP予約番号を気にすることなく、
            <TxtEmp02>乗り換え先の携帯電話会社のWebサイトでお申し込み</TxtEmp02>
            できます。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            <TxtEmp01>
              ※楽天モバイルショップでのお申し込みは未対応。Webでのお申し込みのみ。
            </TxtEmp01>
          </TxtCap>

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="さらに楽天モバイルならWebからのお申し込みで即日開通！"
          />
          <p className={Utils['Mt-24']}>
            忙しくて時間がない方でも、簡単スピーディーにお手続きが可能！
          </p>
          <InfoboxEmphasis1 className={Utils['Mt-16']}>
            <ListOrdered text={ifUseMnoProcessList} />
          </InfoboxEmphasis1>
          <p className={Utils['Mt-8']}>
            <LinkIconAfter
              as="a"
              href="/guide/verify/ekyc/?l-id=ad_lp_contents_6_guide_verify_ekyc"
            >
              eKYCの詳細はこちら
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <p className={Utils['Mt-8']}>
            <LinkIconAfter
              as="a"
              href="/product/sim/esim/?l-id=ad_lp_contents_6_product_sim_esim"
            >
              eSIMの詳細はこちら
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <MovieWrapper className={Utils['Mt-24']}>
            <iframe
              src="https://players.brightcove.net/5068808272001/default_default/index.html?videoId=6328254050112"
              allow="encrypted-media"
              allowFullScreen
              id="play-movie_ad_lp_contents_6"
              className="video-js"
              data-rat-media={{
                measure: true,
                mediaId: 'play-movie_ad_lp_contents_6',
              }}
            ></iframe>
          </MovieWrapper>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※
            SIMフリーの製品でない場合、SIMロック解除が必要です。eKYC（AIかんたん本人確認）は、my
            楽天モバイル（アプリ／Web）にてご利用いただけます。
          </TxtCap>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="乗り換え先は楽天モバイルがおすすめ！"
          />
          <p className={Utils['Mt-24']}>
            楽天モバイルは毎月のデータ利用量に応じて支払い金額が決まるシンプルなワンプランで
            <TxtEmp02>
              データ使い放題でも料金は家族割引適用で 2,880 円/月（税込 3,168
              円）
            </TxtEmp02>
            。
            <br />
            あまり使わない人も3GBまでなら家族割引適用で 880 円/月（税込 968
            円）だからとってもおトクな料金プランです。
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※公平なサービス提供または環境により速度低下する場合あり ※通話料等別
          </TxtCap>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonSecondaryLarge
              as="a"
              href="/fee/saikyo-plan/?l-id=ad_lp_contents_6_fee_saikyo-plan"
            >
              料金プランの詳細はこちら
            </ButtonSecondaryLarge>
          </div>
          <p className={Utils['Mt-32']}>
            また、電話番号そのままで他社から乗り換え＆初めて楽天モバイル申し込みで6,000ポイントプレゼント！※
            <br />
            その他、おトクなキャンペーン実施中！
          </p>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※対象プラン、Rakuten Link利用等条件あり。期間限定ポイントで付与
          </TxtCap>
          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonSecondaryLarge
              as="a"
              href="/campaign/?l-id=ad_lp_contents_6_campaign"
            >
              キャンペーン・特典をみる
            </ButtonSecondaryLarge>
          </div>
          <p className={Utils['Mt-32']}>
            この機会にMNPワンストップを使ってスマホの乗り換え検討してみてはいかがでしょうか？
          </p>
          <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
            <ButtonPrimaryLarge
              as="a"
              href="https://onboarding.mobile.rakuten.co.jp/?l-id=ad_lp_contents_6_f_guide_application"
            >
              新規／乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
          </div>
          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="家族でご利用いただいているお客様の声"
          />
          <UserVoiceSection
            className={Utils['Mt-32']}
            directory={directory}
            userVoiceData={uservoiceList}
          />
          <RakutenInfo
            className={`${Utils['Mt-64']} ${Utils['Mt-pc-56']}`}
            directory={directory}
          />
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default AdLpContents6
