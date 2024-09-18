import type { NextPage } from 'next'
import React, { useRef } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Introduction } from '@components/include/uservoice/Introduction'
import { TxtCap, TxtMarker } from '@components/atoms/Txt'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { ReadMoreInterviews } from '@components/include/uservoice/ReadMoreInterviews'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CtaBottomFixed } from '@components/include/uservoice/CtaBottomFixed'
import { Interview } from '@components/include/uservoice/Interview'
import { Interviewer } from '@components/include/uservoice/Interviewer'
import { Interviewee } from '@components/include/uservoice/Interviewee'
import { SmakatsuBnr } from '@components/include/uservoice/SmakatsuBnr'
import { ReturnUserVoiceList } from '@components/include/uservoice/ReturnUserVoiceList'
import { LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { articleData } from '@components/include/uservoice/uservoiceData'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice60: NextPage = () => {
  const pagetitle = '世界一周旅も海外ローミング'
  const pageHeading = '世界一周40カ国をめぐる旅も海外ローミングで楽しめました！'
  const directories = [
    { path: '/uservoice/', label: 'お客様の声' },
    { path: '', label: '評判・口コミ' },
  ]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: `${directories[0].label}：楽天モバイルの評判をご紹介`,
      url: `${directories[0].path}`,
    },
    {
      text: pageHeading,
      url: '',
    },
  ]

  const articleNum = '60'
  const userName = '重松'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: 'yymmdd', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)
  const articleNoNum = Number(articleNum)
  const readMoreInterviewsData = articleData.filter(
    v => v.id === `${articleNoNum - 1}` || v.id === `${articleNoNum - 2}`,
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="世界一周40カ国をめぐる旅も海外ローミングで楽しめました！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年9月29日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  海外旅行でスマホを使うとき、海外
                  Wi-Fi®ルーターのレンタル、海外 SIM
                  の購入などいくつか選択肢があります。その中でも手軽に利用できるのが、携帯電話会社の海外ローミング※です。
                </p>
                <p>
                  今回紹介する重松さん（仮名）は、楽天モバイルの海外ローミングを活用したひとり。海外ローミングを使いこなして新婚旅行を兼ねた世界40カ国をめぐる旅を快適に過ごされました。
                </p>
                <p>
                  そこで今回は、重松さんに世界一周の旅と海外ローミングの利便性について、詳しくお話をうかがいました。
                </p>
                <TxtCap as="p">
                  ※海外ローミング（データ通信）について、
                  <LinkNormal href="/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／東京都）"
            periodOfUse="2021年3月ごろから"
            dataUseage="国内30GB以上、海外5～10GB"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="40カ国を訪ねた旅を支えたのは、楽天モバイルの海外ローミングでした"
              subTitle="1年間で世界一周！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  世界一周の旅をされたそうですが、ご旅行の時期や期間を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2022年5月から、2023年4月までの約1年です。航空会社のマイレージがたまっていたので、世界一周を楽しめる航空券を発行して海外旅行に行ってきました。妻と2人で、新婚旅行を兼ねて楽しんできました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>それは素敵ですね。どんな国や地域に行かれたのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  アメリカ、中南米、ヨーロッパ、中東、アジア、オーストラリアを回って帰国しました。全部で40カ国です。それぞれの国で1週間ほど滞在する旅だったので、観光名所をゆっくり見ることができ楽しかったです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  40カ国も滞在されたのはすごいですね。旅行中は、海外ローミングを活用されたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、私と妻の2人とも楽天モバイルの海外ローミングを使いました。
                  <TxtMarker as="em">
                    楽天モバイルは海外ローミングの対象国※が多くて助かりました。
                  </TxtMarker>
                  現地の海外SIMやフリーWi-Fiを使ったのは、海外ローミング対象外の国くらいです。
                </p>
                <p>
                  現在地のニュースや治安を調べるのにスマホを活用できたおかげで、安全な旅行が楽しめました。
                </p>
                <TxtCap as="p">
                  ※海外ローミング対応エリアと料金について、
                  <LinkNormal href="/support/international-roaming/area/">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それは良かったです。海外ではどれくらいデータ通信を利用しましたか？追加したデータ容量も教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ利用量は、滞在した国によって異なりました。道が複雑だったり、治安が気になる場所だったり、情報をこまめに確認したい場所では多くなりがちでしたね。
                </p>
                <p>
                  でも、楽天モバイルの海外ローミングは毎月2GB無料※で使えるので、あまりデータ容量は追加していません。実際に追加したデータ容量は毎月3～8GBくらいです。
                </p>
                <TxtCap as="p">
                  ※プランのデータ利用量に加算。2GB超過後は最大128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。海外でローミングを利用していて、印象に残ったことはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  世界遺産のマチュピチュ（ペルー）で電波が届いていたのが、なかなか印象的でしたね。ほかにもいろいろな国の観光地を訪れましたが、どこも電波が安定しているので安心できました。
                </p>
                <p>
                  とはいえ、海外ローミングは海外の通信事業者のネットワークを利用するので、過信と油断は禁物です。楽天モバイルの通信エリア外に入り急につながらなくなって、四苦八苦したこともありました。渡航先の電波状況などは、事前に調べておいた方がいいですね。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="渡航先によっては海外SIMより安価に使える海外ローミング"
              subTitle="海外でローミングを使うコツは？"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  海外のさまざまな国で過ごした経験から、重松さん流の海外ローミングの使い方のコツを教えてもらえますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>1つ目は、海外ローミングの対応エリアを確認することです。</p>
                <p>
                  日本人が多く訪れる国はほとんど対象国になっていますが、ほかの国が同じように対応しているとは限りません。特に複数の国をめぐる旅をするときは、念のため滞在する国が国際ローミングに対応しているか、調べておくことが大切です。
                </p>
                <p>
                  2つ目は、滞在する国で海外SIMを買うか海外ローミングを使うか、どちらの方がおトクになるのか調べておくことです。国によっては海外SIMを買うよりも、海外ローミングでデータ容量を追加した方が安いことがあるんです。今後海外に行く人は、海外ローミングを検討してみてほしいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>なるほど。しっかりと下調べをすることが大切なのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。旅行先で翻訳アプリや地図アプリを使うと、データ利用量が増えがちなので、先に調べておいた方がいいですね。
                </p>
                <p>
                  でも、
                  <TxtMarker as="em">
                    楽天モバイルなら海外ローミングの設定をするだけで、対象国に着いたらすぐにつながるのでとても便利
                  </TxtMarker>
                  です。追加容量も1GBあたり500円※なのでわかりやすく、現地通貨のレートで計算しなくてすみます。
                </p>
                <p>
                  海外でのスマホ利用は海外ローミングを利用したり、海外SIMを併用したり、旅行先に合わせるのがおすすめです。
                </p>
                <TxtCap as="p">※チャージ料金は不課税です。</TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお話をお聞かせいただき、ありがとうございました。
                </p>
              </Interviewer>
            </Interview>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-03_close`}
            className={Utils['Mt-32']}
          >
            <p>
              楽天モバイルの海外ローミングは、海外の70の国と地域※で利用できるため、複数の国や地域をめぐる旅で快適に利用できます。さらに毎月2GBまで無料のため、翻訳アプリや地図アプリを活用して旅行を思い切り楽しめます。
            </p>
            <p>
              重松さんのように海外旅行に慣れている人も、はじめて海外旅行に行く人も、海外旅行を満喫するなら、手軽に使える楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <p>
              島本さんのように子ども将来のために生活費を見直したい人は、ぜひ楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※データ通信（海外ローミング）および国際通話、国際SMS、国際通話かけ放題のサービスエリア・提供条件は予告なく変更になる場合があります。
              <br />
              ※本コンテンツは、ユーザー個人の実体験に基づくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年9月29日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <ServiceGlobalBnr
            className={Utils['Mt-32']}
            lid={`uservoice_${articleNum}`}
            lazy={true}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={readMoreInterviewsData.map(v => ({
              title: v.title,
              userInfo: v.profile,
              img: `avator-${v.id}.png`,
              description: v.description,
              href: `/uservoice/${v.id}/?l-id=uservoice_${articleNum}_uservoice_${v.id}`,
            }))}
          />

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ReturnUserVoiceList directory={articleNum} />
          </div>

          <SmakatsuBnr className={Utils['Mt-32']} directory={articleNum} />

          <div className={`${Utils['Mt-40']} ${Utils['Pb-24']}`}>
            <BnrCampaignRecommend />
          </div>
        </SystemContainer>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />

        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'area', 'service']}
        />
      </SystemWrapper>
    </>
  )
}

export default Uservoice60
