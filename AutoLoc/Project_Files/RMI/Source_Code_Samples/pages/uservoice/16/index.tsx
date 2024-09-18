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
import { YoutubePremiumBnr } from '@components/include/uservoice/YoutubePremiumBnr'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice16: NextPage = () => {
  const pagetitle = 'スマホデビューでネットゲームもやり放題'
  const pageHeading =
    'スマホデビューを楽天モバイルで！ネットゲームを楽しんでいます'
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
  const articleNum = '16'
  const userName = '末広'
  type InterviewImg = {
    directory: string
    param: string
  }
  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220401', // yymmdd
  }
  const scrollTrigger = useRef<HTMLDivElement>(null)
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="モバイルデータ通信でネットゲームを満喫。楽天モバイルを選んで良かったなと感じています。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年4月1日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「初めてのスマホを契約するならどこの携帯電話会社が良い？」「スマホでネットゲームは楽しめる？」と気になる方もいるのではないでしょうか。
                </p>
                <p>
                  今回はこれまでご自身の携帯を持ったことがなかった10代の末広さん（仮名）に、スマホデビューに楽天モバイルを選び、大好きなネットゲームでもデータ通信速度の快適さを存分に体感している理由を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（10代男性・福岡県）"
            periodOfUse="8カ月"
            dataUseage="60~70GB"
            beforeComapany="なし（今回初めてご契約）"
          />
        </SystemContainer>
        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ使い放題でオンライン対戦ゲームも安心して遊べる"
              subTitle="楽天モバイルを選んだのは、データ通信の安定性！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選ばれた経緯をお聞かせください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルを契約するまで、スマホもガラケーも持っていませんでした。はじめての携帯電話会社なので、情報を集めて慎重に検討しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  はじめてのご契約は、より慎重になりますよね。ご検討された際の決め手は何でしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>利用できるデータ容量とデータ通信の安定性です。</p>
                <p>
                  スマホのテザリングを利用してゲーム機をインターネットにつなげたかったので、毎月20GB以上使えることが必須条件でした。また、ネットゲーム中に通信が途切れる、いわゆる「回線落ち」が起きるのは困るので、大手携帯電話会社は譲れないポイントでした。
                </p>
                <p>
                  様々な料金プランをじっくり検討した結果、
                  <TxtMarker as="em">
                    データ使い放題※で、評判も良かった楽天モバイルに決めました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ネットゲームを思い切り楽しめるプランであることが条件だったのですね。
                  <br />
                  ちなみに、どのようなゲームをされているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主にオンラインで、複数のプレイヤーとマッチングして対戦をするゲームをしています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  リアルタイムで大容量データをやりとりするのだと思いますが、データ通信は安定していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、安定しています。ネットゲームは大量のデータ容量を消費するため、光回線と比較するとたまに気になることもありますが、
                  <TxtMarker as="em">
                    モバイルデータ通信でも問題なく楽しめているので、やはり楽天モバイルを選んで良かったなと感じています！
                  </TxtMarker>
                </p>
                <p>
                  万が一のためにモバイルWi-Fiルーターを契約し続けているのですが、3日間で15GB以上のデータ通信をすると速度制限がかかってしまうので、データ容量が大きなゲームをダウンロードする目的以外ではほとんど使用していません。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />
            <Interview
              title="動画視聴だけでなく今後は動画配信もやってみたい！"
              subTitle="スマホでライフスタイルにも変化"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  スマホを利用するようになって、生活が変化したなと感じる部分はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  動画視聴やゲームのプレイ時間が増えました。特に動画はお風呂でもよく見ていますが、
                  <TxtMarker as="em">
                    再生中に動画が止まることもなく、とても快適です。
                  </TxtMarker>
                </p>
                <p>
                  今月から楽天モバイルのYouTube Premium
                  3カ月無料※キャンペーンを利用しているのですが、YouTubeの動画がバックグラウンド再生できて、更に快適になりましたね！
                </p>
                <TxtCap as="p">
                  ※Rakuten最強プランをご利用の製品で「YouTube
                  Premium」にお申し込みいただくと、3カ月無料で利用できるキャンペーンです。
                  <LinkNormal href="/campaign/youtubepremium/?l-id=uservoice_16_campaign_youtubepremium_01">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ゲームだけでなく、動画視聴も楽しまれているのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。今は主にゲームのプレイやゲーム実況動画の視聴に使っていますが、今後機会があれば自分でもゲーム実況の生配信をしてみたいです！
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  もしゲーム実況の生配信をする場合、楽天モバイルの回線でできると思いますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、
                  <TxtMarker as="em">
                    ゲームのプレイに必要なデータ容量と配信に必要なデータ容量を合わせても問題ないと思います！
                  </TxtMarker>
                  モバイルデータ通信でゲーム実況の生配信ができるかなと感じるのも、安定したデータ通信と、残量を気にせずにデータ使い放題ができる楽天モバイルならではだと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお話をお聞かせいただきありがとうございました。
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
              最大でも月2,980円（税込3,278円）で安定した高速回線が使い放題※の楽天モバイルなら、大量のデータ容量を消費するネットゲームも快適にお楽しみいただけます。
            </p>
            <p>
              スマホデビューに楽天モバイルを選び、ネットゲームも動画視聴も思いっきり満喫している末広さんのように、最初のスマホに迷っている方やデータ容量を気にせずにスマホを使いたい方は、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年5月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <YoutubePremiumBnr
            className={Utils['Mt-32']}
            lazy={true}
            directory={articleNum}
            serialNumber="02"
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>
          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'もっと早く乗り換えればよかった！スマホ代を夫婦で大幅に節約',
                userInfo: '吉田さん（仮名・20代女性／石川県）',
                img: 'avator-15.png',
                description: 'マイホーム購入で家計を見直したことが...',
                href: '/uservoice/15/?l-id=uservoice_16_uservoice_15',
              },
              {
                title:
                  'スマホの使い方が変わった！思いっきりインターネットが楽しめる',
                userInfo: '内海さん（仮名・20代女性／三重県）',
                img: 'avator-14.png',
                description: '楽天市場を普段から愛用していて、そこ...',
                href: '/uservoice/14/?l-id=uservoice_16_uservoice_14',
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

export default Uservoice16
