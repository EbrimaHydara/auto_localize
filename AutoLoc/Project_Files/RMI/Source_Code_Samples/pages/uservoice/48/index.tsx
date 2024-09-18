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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice48: NextPage = () => {
  const pagetitle = '自宅の固定回線代わりに！'
  const pageHeading =
    '自宅の固定回線として活用！遊びに来た孫が YouTube を見ても余裕です'
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

  const articleNum = '48'
  const userName = '加藤'

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
        description="自宅の固定回線として活用！遊びに来た孫がYouTubeを見ても余裕です（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年4月21日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  生活費の節約のために、携帯電話会社やインターネット回線を見直す人は少なくありません。
                </p>
                <p>
                  今回は、定年退職後に生活費を見直して、ケーブルテレビのインターネット回線から「楽天モバイル」のテザリングを固定回線の代わりにした加藤さん（仮名）に、実際のご利用状況などのお話を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（60代男性／福岡県）"
            periodOfUse="5カ月（2回目の契約）"
            dataUseage="350～400GB 程度"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="でもサービスが充実したので再契約して満足です"
              subTitle="満足できず一度は解約..."
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだ理由をお聞かせください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  生活費を節約するために選びました。以前は自宅の固定回線としてケーブルテレビの回線を契約していたのですが、
                  <TxtMarker as="em">
                    スマホのテザリング※を固定回線の代わりにしようと考えて楽天モバイルを選びました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天モバイルではテザリングのオプションを無料でご利用いただけます。
                  <LinkNormal
                    href={`/service/tethering/?l-id=uservoice_${articleNum}_service_tethering`}
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご自宅のインターネット回線に楽天モバイルをご利用なのですね。楽天モバイルには、いつごろ乗り換えられたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2022年12月ごろです。ですが、実は一度、楽天モバイルから他社に乗り換えたことがあるんです。
                </p>
                <p>
                  以前楽天モバイルを契約していたときは、自宅がサービスエリア内だったのですが、電波の入りがあまりよくありませんでした。安定して電波が入らないとテザリングを固定回線として使うのは難しいと考え、2022年5月ごろに一度、他社に乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。再度、楽天モバイルを契約された理由はなんだったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  他社のポケット
                  Wi-Fi®などを試したのですが、電波や通信速度が安定しないのでなかなか満足いく結果にならなかったんです。スマホでいろいろと調べながら、楽天モバイルの電波がしっかりと入るのを待っていました。
                  <TxtMarker as="em">
                    そして楽天モバイルのサービスエリア※が拡大し、強化されていることを確認したため、2022年の12月に再度契約しました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                </TxtCap>
                <TxtCap as="p">
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアについて、
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>2度目の乗り換え後、電波の状態はいかがですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前よりも格段に強く電波が入り、通信速度も安定しています。おかげで固定回線として利用していたケーブルテレビを解約できました。
                </p>
                <p>
                  今は自宅のインターネット機器をすべて楽天モバイルのテザリングで接続して、動画を見て楽しんでいます。楽天モバイルのテザリングに集約したことで、生活費の削減ができてとても満足です。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="孫たちが一斉にYouTubeを見ても快適です"
              subTitle="データ利用量は毎月400GB弱！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご自宅の固定回線としてテザリングをご利用いただいているということですが、毎月のデータ利用量はどれくらいでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>毎月350～400GBほど利用しています。</p>
              </Interviewee>
              <Interviewer>
                <p>
                  毎月のデータ利用量が350GB以上というのは、とても多いですね。主にどんなことに利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  普段から4～5台の機器を楽天モバイルのテザリングで接続していて、動画配信サービスで動画をよく見ています。
                  <br />
                  私以外にも、孫たちが動画を見るのもデータ容量を多く使用する大きな理由です。私の子どもの世帯が歩いてすぐの場所に暮らしているので、孫たちが週に1～2回ほど自宅に遊びに来るんです。
                </p>
                <p>
                  テザリングに接続してYouTubeを見たり、ゲームをしたり、インターネットを利用するので、データ利用量が増えますね。私が動画配信サービスを流しているときに、孫たちが3人それぞれ一斉にYouTubeを見ても、動画の読み込みが遅いと感じたことはありません※。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>4台同時に動画を見ても問題ないというのはすごいですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。
                  <TxtMarker as="em">
                    月々約3千円で、安定した高速回線と大量のデータ通信が利用できるサービス
                  </TxtMarker>
                  なので、本当に助かります。テザリングを固定回線の代わりにしてから生活費も節約できたので、大満足です。
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
              定年退職を機に月々の生活費の見直しをしたいけれど、自宅のインターネット回線利用料を節約するのは難しいと考えている方は、楽天モバイルのテザリングがおすすめです。
            </p>
            <p>
              楽天モバイルならテザリングのオプションお申し込み不要で、自宅の固定回線に利用できます。さらに、データ利用量は無制限で※月最大3,278円（税込）と、固定費を節約することができます。
            </p>
            <p>
              固定回線として楽天モバイルのテザリングを利用している加藤さんのように、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年4月21日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'アイルランドやL.A.でもつながる！2GB無料の海外ローミングで快適',
                userInfo: '柴崎さん（仮名・20代女性／愛知県）',
                img: 'avator-47.png',
                description:
                  '私は仕事柄、何度も海外に渡航するので、1年の3分の1以上は海外にいる...',
                href: `/uservoice/47/?l-id=uservoice_${articleNum}_uservoice_47`,
              },
              {
                title: 'iPhone14がおトクに購入できました！楽天経済圏も便利です',
                userInfo: '小野田さん（仮名・40代女性／岐阜県）',
                img: 'avator-46.png',
                description:
                  '私と主人2人分の携帯電話料金と、光回線の利用料金の合計が月3万円以上...',
                href: `/uservoice/46/?l-id=uservoice_${articleNum}_uservoice_46`,
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

export default Uservoice48
