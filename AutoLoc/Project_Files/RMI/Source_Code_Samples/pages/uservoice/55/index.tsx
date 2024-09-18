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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice54: NextPage = () => {
  const pagetitle = 'データ通信を思い切り使用'
  const pageHeading =
    'データ通信が思い切り使えて便利！楽天経済圏も活用しています'
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

  const articleNum = '55'
  const userName = '久松'

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
        description="データ通信が思い切り使えて便利！楽天経済圏も活用しています（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年7月21日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  たくさんデータ通信を利用するため、モバイル
                  Wi-Fi®ルーターと併用しているものの「想像していたよりも快適にならない」と感じる方は珍しくありません。
                </p>
                <p>
                  データ通信速度が思うほど速くなかったり、毎回つなぎ直す手間がかかったりして、不便に感じることもあるのではないでしょうか。
                </p>
                <p>
                  そこで今回は、携帯電話とモバイルWi-Fiルーターとの併用から携帯電話会社を楽天モバイルに乗り換えて、思い切りスマホで動画を楽しめるようになっただけでなく、楽天経済圏の利用も増えた久松さん（仮名）に、乗り換えの経緯や使い心地について詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／大阪府）"
            periodOfUse="1年5カ月"
            dataUseage="50GB程度"
            beforeComapany="UQ mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="思い切り使えるようになってストレスがなくなりました"
              subTitle="データ利用量の節約から解放！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思った理由や、楽天モバイルを知ったきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前利用していた携帯電話会社はデータ容量が少なかったため、毎月のデータ利用に気を使っていたことが理由です。動画を見るとすぐにデータ利用量が上限に達してしまうので、ずっと乗り換えようと考えていました。
                </p>
                <p>
                  ほかの携帯電話会社のことを調べていたら、Webサイトで楽天モバイルの動画広告を見たんです。
                  <TxtMarker>
                    データ無制限※で使えることを知って、毎月たくさんデータ通信を利用している私にぴったりだと思いました。
                  </TxtMarker>
                </p>
                <p>
                  私よりも先に、母が楽天モバイルを使っていたので、実際に使っている人の意見を聞けたのも決め手になりましたね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前利用されていた携帯電話会社では、データ容量はどれくらいの料金プランだったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月のデータ容量が3GBの一番安い料金プランです。スマホのわずかなデータ容量を節約しながら、モバイルWi-Fiルーターを一緒に使っていました。
                </p>
                <p>
                  ただ、モバイルWi-Fiルーターのデータ通信速度がとても遅くて、高画質で動画を見たいときにストレスを感じていたんです。
                </p>
                <p>
                  それに、度々スマホでモバイルWi-Fiルーターにつないだり切ったりと接続先を変える手間がかかりますし、どうしても高速データ通信が必要なときのためにやりくりしなければならないので面倒でしたね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  確かにデータ通信をしたいと思っても、毎回モバイルWi-Fiルーターを起動して、接続先を変更するとなると大変手間がかかりますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。でも楽天モバイルに乗り換えてからは、ストレスを感じなくなって満足しています。データ無制限※なのでデータ容量を気にせず動画を見られますし、度々接続先を変える手間もかからなくなって快適になりました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。毎月どれくらいのデータ通信を利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えてからは、毎月50GBくらい使っています。以前よりも動画をたくさん見るようになりましたね。お風呂や部屋でのんびりしている時間も、動画や映画を楽しんで好きなことをできるようになりました。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="以前より楽天ポイントがたくさん貯まるようになりました"
              subTitle="楽天経済圏を利用する機会が増加！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外の、楽天グループのサービスを利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天生命や楽天銀行、楽天証券、楽天カードなど、ほかにも色々利用しています。楽天モバイルを契約したのでSPUの倍率がアップ※して6.5倍になりました。
                </p>
                <p>
                  SPUの倍率がアップした影響で、買い物をするときは基本的に楽天市場を利用するようになりましたね。
                </p>
                <p>
                  楽天ポイントをたくさんもらって、楽天ポイントを使うために楽天経済圏※を利用する機会が増えて、さらに楽天ポイントが貯まっていくようなサイクルになっています。
                </p>

                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPU
                  の倍率が「楽天モバイル＋会員ランク特典で最大＋3
                  倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>獲得した楽天ポイントはどのように使っていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  買い物をするときや、楽天モバイルの利用料金に充てています。
                  <TxtMarker>
                    楽天モバイルの利用料金に楽天ポイントの期間限定ポイントを使えるので、ポイントの期限が過ぎて無駄になってしまうことがない
                  </TxtMarker>
                  のがいいですね。
                </p>
                <p>
                  楽天モバイルに乗り換えてから、携帯電話料金が安くなっただけでなく、楽天ポイントが貯まりやすくなって生活費まで節約できているので本当に助かります。
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
              楽天モバイルは、データ無制限※で月額最大 3,278
              円（税込）というシンプルなワンプランで、動画を快適に楽しめます。
            </p>
            <p>
              さらに、「楽天モバイル＋会員ランク特典」で、楽天市場でのポイント還元率が最大3倍アップ。
              <TxtMarker>
                楽天市場で買い物をすると、SPUの倍率に応じて楽天ポイントを効率よく獲得できます。
              </TxtMarker>
              たくさんデータ容量を使いたい方や、楽天経済圏で効率的に楽天ポイントを貯めたい方は、ぜひ楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービスのため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※本コンテンツは、ユーザー個人の実体験にもとづくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年7月21日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

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

export default Uservoice54
