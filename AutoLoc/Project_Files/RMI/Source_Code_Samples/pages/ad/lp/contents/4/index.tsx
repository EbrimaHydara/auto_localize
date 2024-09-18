import type { NextPage } from 'next'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'
import {
  UserVoiceData,
  UserVoiceSection,
} from '@components/fragment/ad/lp/contents/UserVoiceSection'
import { RakutenInfo } from '@components/fragment/ad/lp/contents/RakutenInfo'
import { DlData, DlList } from '@components/fragment/ad/lp/contents/4/DlList'

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 680px;
`
const FlexWrap = styled.div`
  display: flex;
  gap: 8px 24px;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`

const dlList01: DlData[] = [
  {
    id: '01',
    dtText: '何ギガあれば十分？',
    ddText:
      'お子さまによって使うギガ数が大きく異なります。自宅にWi-Fiがあり、通話やトークアプリ中心であれば月3GB程度。また、通学中や外出先のWi-Fiが使えない環境で動画を見る事が多い場合は、無制限プランが安心です。',
  },
  {
    id: '02',
    dtText: '危険なWi-Fiやサイトから守りたい',
    ddText:
      '街中やお店などでフリーWi-Fiにつなぎ、大切な個人情報が漏洩したりウイルスに感染したりと、トラブルに巻き込まれる可能性もあります。そういった危険からお子さまのスマホを守るため、フィルタリングサービスをおすすめします。',
  },
  {
    id: '03',
    dtText: 'スマホ本体が高い…',
    ddText: (
      <>
        例えば、親が使用していたスマホをそのままお子さまへ譲るなど、本体を購入せずSIMのみの契約にする事もできます。
        <br />
        また、お求めやすいスマホやキャンペーンなどを上手に活用して、初期費用を抑える事も可能です。
      </>
    ),
  },
]

const dlList02: DlData[] = [
  {
    id: '04',
    dtText: 'ワンプランでわかりやすくておトク',
    ddText: (
      <>
        毎月のデータ利用量に応じて支払い金額が決まる、シンプルな料金プランで、どれだけデータを使っても
        <TxtCap>※</TxtCap>料金は家族割引適用でデータ無制限2,880円/月
        （税込3,168円）。3GBまでなら家族割引適用でデータ3GB880円/月（
        税込968円） 、あまり使わなかった月は勝手に料金が安くなる仕組みです。
        <TxtCap as="p" className={Utils['Mt-8']}>
          ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
          ※通話料等別
        </TxtCap>
      </>
    ),
    btn: {
      link: '/fee/saikyo-plan/?l-id=ad_lp_contents_4_saikyo-plan',
      text: '料金プランの詳細はこちら',
    },
  },
  {
    id: '05',
    dtText: 'お子さまを危険から守れる',
    ddText: (
      <>
        悪質なアプリやサイトからお子さまを守る「あんしんコントロール by
        i-フィルター」をご用意。
        <br />
        <TxtCap as="p" className={Utils['Mt-8']}>
          ※18歳未満の方に楽天モバイルをご利用いただく場合、あんしんコントロール
          by i-フィルターのご契約が必須となります（330円/月）
        </TxtCap>
      </>
    ),
    btn: {
      link: '/service/i-filter/?l-id=ad_lp_contents_4_service-i-filte',
      text: (
        <>
          あんしんコントロール
          <br className={Utils['Show-oox']} />
          by i-フィルターの詳細はこちら
        </>
      ),
    },
  },
  {
    id: '06',
    dtText: '一人ひとりに合った最適なスマホが選べる',
    ddText: (
      <>
        楽天モバイルは色々なスマホの種類があるので、お子さまの成長に合わせて適切なスマホを選べます。また、ご両親が使っていたスマホをそのままお子さまへ譲る場合、SIMのみの契約も可能です。
        <div className={Utils['Mt-16']}>
          この機会にお子さま向けのスマホを検討してみてはいかがでしょうか？
        </div>
      </>
    ),
  },
]

const uservoiceList: UserVoiceData[] = [
  {
    id: '42',
    profile: '40代女性・10代男性',
    text: (
      <TxtEmp01>
        親子で同じ携帯電話会社に乗り換え！
        <br />
        わかりやすい料金プランで子どものデータ利用量が変わっても安心
      </TxtEmp01>
    ),
  },
  {
    id: '26',
    profile: '40代男性',
    text: (
      <TxtEmp01>
        子どものスマホデビューに楽天モバイルを選んだ理由
        <br />
        成長に合わせて見直す必要がないシンプルな料金プラン
      </TxtEmp01>
    ),
  },
]

const AdLpContents4: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'キッズ向けスマホを安全・おトクに使う方法は？'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const directory = '4'
  const imgpath = `${assets}img/ad/lp/contents/4/`

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="楽天モバイルならお子さまのスマホデビューも、3つの理由で安全・安心！おトクなワンプラン「Rakuten最強プラン」！"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader isNoLink={true} />
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
                srcSet={`${imgpath}kv-sp.png`}
                width="686"
                height="480"
              />
              <img
                src={`${imgpath}kv-pc.png`}
                width="648"
                height="286"
                alt=""
              />
            </picture>
          </div>
          <Heading
            as="h2"
            level="4"
            className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
            children="子どもにスマホを持たせるのはいつから？"
          />
          <p className={Utils['Mt-32']}>
            お子さまにスマホをいつ持たせるのか悩まれる方は多いと思います。
          </p>

          <p className={Utils['Mt-16']}>
            家族間の連絡手段としてもスマホのトークアプリが主流となり、YouTubeなどでも有効な学習動画や一緒に勉強するライブ配信が増え、「スマホで学習」もスタンダードになってきました。
          </p>
          <p className={Utils['Mt-16']}>
            そのような背景から、お子さまのスマホ所有率は年々上がる一方。高校生は当たり前のように持ち、中学生は7割。小学生は3割と言われていますが、6年生では半数以上と一気に増えます。
          </p>
          <p className={Utils['Mt-16']}>
            スマホデビューは小学6年生、中学1年生という節目の時期が多くなります。
          </p>
          <TxtCap as="p" className={Utils['Mt-16']}>
            出典：モバイル社会研究所「2022年親と子の調査」より
            <br />
            <LinkIconAfter
              href="https://www.moba-ken.jp/project/children/kodomo20230216.html"
              target="_blank"
              rel="noopener"
            >
              https://www.moba-ken.jp/project/children/kodomo20230216.html
              <IconNewTabLine />
            </LinkIconAfter>
          </TxtCap>

          <section className={Utils['Mt-64']}>
            <Heading
              as="h2"
              level="4"
              children="スマホを持たせたいけど、どんなことに注意や対策をしたら良い？"
            />
            <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}>
              初めてスマホを持たせる保護者の、よくあるお悩みは3つ！
            </p>
            <DlList
              className={Utils['Mt-24']}
              directory={directory}
              DlData={dlList01}
            />
          </section>

          <section className={Utils['Mt-64']}>
            <Heading
              as="h2"
              level="4"
              children="楽天モバイルはお子さまにもおすすめ！"
            />
            <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}>
              3つの理由で、安心＆安全。
            </p>
            <DlList
              className={Utils['Mt-24']}
              directory={directory}
              DlData={dlList02}
            />
          </section>

          <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
            <ButtonPrimaryLarge
              as="a"
              href={`/guide/application/?lid-r=ad_lp_contents_${directory}_f_guide_application`}
            >
              新規／乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
          </div>

          <section>
            <Heading
              as="h2"
              level="4"
              className={Utils['Mt-64']}
              children="家族でご利用いただいているお客様の声"
            />
            <p className={Utils['Mt-16']}>
              楽天モバイルでは、保護者の方にも安心していただけるよう、お子さまの初めての携帯や学生のスマホデビューに向けたセキュリティページをご用意しています。ぜひご活用ください。
            </p>
            <FlexWrap className={Utils['Mt-16']}>
              <LinkIconAfter
                href="/guide/security/kids-manner/?l-id=ad_lp_contents_4_guide_security_kids-manner"
                target="_blank"
              >
                子どもと学ぶスマホのマナー
                <IconNewTabLine />
              </LinkIconAfter>
              <LinkIconAfter
                href="/guide/kidsjunior/?l-id=ad_lp_contents_4_guide_kidsjunior"
                target="_blank"
              >
                子どもスマホ利用あんしんガイド
                <IconNewTabLine />
              </LinkIconAfter>
            </FlexWrap>

            <UserVoiceSection
              className={Utils['Mt-32']}
              directory={directory}
              userVoiceData={uservoiceList}
            />
          </section>

          <RakutenInfo
            className={`${Utils['Mt-72']} ${Utils['Mt-pc-56']}`}
            directory={directory}
          />
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default AdLpContents4
