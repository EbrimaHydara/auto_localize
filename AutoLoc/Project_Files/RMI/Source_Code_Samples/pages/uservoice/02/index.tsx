import type { NextPage } from 'next'
import { assets } from '@components/utils/assets'
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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice02: NextPage = () => {
  const pagetitle = 'スマホ代が5分の1に！データ通信も満喫'
  const pageHeading = 'スマホ代が5分の1に！ストレスなくどこでもデータ通信を満喫'
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

  const articleNum = '02'
  const userName = '北原'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: 'yymmdd', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="乗り換えで月々のスマホ代を約5分の1に削減！通信速度は以前より遥かに快適になりました。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2021年11月26日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホ代が高い」「通信速度が遅い」「データ容量を使い切って速度制限に達した」と悩んでいる方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、スマホ代を約5分の1に削減しながら通信速度は以前より遥かに快適になったと話す北原さん（仮名）に、現在の満足度とスマホ代見直しの成功のポイントをお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／東京都）"
            periodOfUse="1年"
            dataUseage="50GB以上"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="楽天モバイルを1年利用した結果は？"
              subTitle="以前はデータ容量不足で月々のスマホ代が1万5千円！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを1年利用してみていかがですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">通信速度が速いどころではない</TxtMarker>
                  ※ですね。家のWi-Fiよりも速く感じることも多く、Wi-Fiが繋がりにくい場所では楽天回線で動画視聴や通信をしています。
                  <br />
                  高速データ通信が使い放題だから、気兼ねなく使えて良いですね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  毎月のデータ通信量が50GBを超えるとお聞きしましたが、主にどのようなアプリを使用していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  一番はSNSでInstagramとTwitterへのアップロード、その次がLINEです。
                  <br />
                  LINEでは大量の写真やファイルを送受信するので、かなりのデータ容量を使用します。
                  <br />
                  ファイルサイズの大きなPDFが送られてきた時、以前なら無料Wi-Fiが使える喫茶店に入ってダウンロードしていました。今は楽天モバイルのデータ使い放題※で、
                  <TxtMarker as="em">
                    その場ですぐダウンロードでき、ストレスフリー
                  </TxtMarker>
                  になりました。
                </p>
                <p>
                  仕事関係の重いデータファイルをいつでも受信・すぐに確認できる安心感は、楽天モバイルならではだと感じています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>データ使い放題の楽天モバイルが合っていたんですね。</p>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/02/img-01.png`}
                  alt=""
                  width="415"
                  height="298"
                  loading="lazy"
                />
              </div>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>使用感はとても良いです。</p>
                <p>
                  以前のスマホ会社では、5GBの契約でしたが、すぐに使い切ってしまって、1GBずつ買い足している状態でした。結果として毎月1万5千円もスマホ代にかかっていて、今ではなんであんな無駄遣いをしていたんだろうと後悔しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。
                  <br />
                  データ容量を買い足していた頃と比較して、スマホ代以外にも何か変わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    月々のスマホ代は下がったのにデータ回線の品質は上がっている
                  </TxtMarker>
                  という、逆転現象が起きているんですよ。あの追加購入の日々はなんだったのだろうと思ってしまいますね。
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="楽天モバイルを選んだ決め手は「クチコミ」だった"
              subTitle="データ通信ヘビーユーザーが"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  とても満足いただけている楽天モバイルですが、選んだ理由はどこにあるのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>楽天モバイルにしようと決めた理由は2つあります。</p>
                <p>
                  1つ目は、サービス開始前から楽天が通信事業に参入するという情報に注目していて、新サービスを試してみたかったからです。
                </p>
                <p>
                  2つ目は、YouTubeとTwitterでのレビューで、「
                  <TxtMarker as="em">
                    楽天モバイルの通信速度がかなり速い
                  </TxtMarker>
                  」という高評価を受けていたことです。
                </p>
                <p>
                  早期に利用を開始したYouTuberのレビュー動画を10件以上と、Twitterのクチコミをいくつも見ながら検討しました。
                  <br />
                  結果として、実際に繋いでみたら「Wi-Fiより速い！」とあまりの通信速度に衝撃を受けましたね。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="なぜ固定費の見直しをスマホ代から考えたのか？"
              subTitle="スマホ代が毎月1万5千円から一気に3千円程度に！"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  最近支出の見直しに興味をお持ちとのことですが、固定費の見直しとして、なぜスマホ代の優先順位を高くしたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホはいまや、一生付き合っていく情報インフラなのに、今までしっかりと見直す機会をあまり持っていなかったな、と思ったからです。
                </p>
                <p>
                  周りでも目先の損得だけを見て、格安スマホを契約して結果的に高額な追加料金を支払ったり、遅い通信速度にストレスをためたり、逆に面倒だからと
                  <TxtMarker as="em">
                    ずっと高いスマホ代を払い続けてしまったりしている人が大勢いる
                  </TxtMarker>
                  と思います。
                </p>
                <p>
                  スマホ代は今後一生払っていく固定費の一つなので、
                  <TxtMarker as="em">
                    毎月約1万2千円の差額はものすごく大きい
                  </TxtMarker>
                  です
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そこで固定費を見直すなら、一番効果的なスマホ代が大切だと考えられたんですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうです。見直しをして節約ができたというだけではなく、生じた差額を投資に活用することで、今まで漫然と支払っていたスマホ代が、育つお金、つまり資産に変わったんです。
                </p>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/02/img-02.png`}
                  alt=""
                  width="415"
                  height="298"
                  loading="lazy"
                />
              </div>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えることで、通信速度が速くなっただけではなく、固定費を資産に変えることが出来たとは本当にすごいですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  解約金が気になって乗り換えに迷っている人には、「解約金を払っても、毎月のスマホ代の差額ですぐに取り戻せる」と伝えたいです。特にスマホ代の高さに悩んでいる人は、すぐにでも計算してみてください。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお声をお聞かせいただき、ありがとうございました。
                </p>
              </Interviewer>
            </Interview>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              固定費であるスマホ代を見直すことで、大きく節約ができた北原さん。
              <br />
              動画視聴などでデータ通信をたくさん利用する方は、ぜひ携帯電話料金の見直しをしてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2021年11月26日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '先輩にすすめられ、契約を即決。昼休みに申し込み、即日開通！',
                userInfo: '森田さん（仮名・20代男性／東京都）',
                img: 'avator-03.png',
                description: '昼休みに先輩からすすめられて、その場...',
                href: `/uservoice/03/?l-id=uservoice_${articleNum}_uservoice_03`,
              },
              {
                title:
                  '通信速度に大満足！毎月の料金は楽天ポイントで支払えておトク！',
                userInfo: '鈴木さん（仮名・30代女性／東京都）',
                img: 'avator-01.png',
                description: '大満足ですね。なんといっても、通信速...',
                href: `/uservoice/01/?l-id=uservoice_${articleNum}_uservoice_01`,
              },
            ]}
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

export default Uservoice02
