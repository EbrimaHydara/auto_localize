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

const Uservoice53: NextPage = () => {
  const pagetitle = '楽天モバイルにして速度を実感'
  const pageHeading =
    'やっぱり楽天モバイル！他社に乗り換えて楽天モバイルの通信速度を実感し、再契約！'
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

  const articleNum = '53'
  const userName = '田代'

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
        description="やっぱり楽天モバイル！他社に乗り換えて楽天モバイルの通信速度を実感し、再契約！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年6月16日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホをデータ無制限で使いたいけど、利用料金が高すぎるのは困るし、節約したい」と思う方は多いのではないでしょうか。今回インタビューした田代さん（仮名）もその1人でした。
                </p>
                <p>
                  動画を見るのが大好きな田代さんは、毎月の携帯電話料金を見直し、楽天モバイルに乗り換えました。さらに節約しようと、格安スマホのデータ使い放題の料金プランに乗り換えた田代さん、乗り換えからわずか1週間で楽天モバイルに戻ってきたそうです。
                </p>
                <p>
                  そんな田代さんに、携帯電話会社を乗り換えた経緯と、最終的に楽天モバイルを選んだ理由を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性／群馬県）"
            periodOfUse="7カ月（再契約後の期間）"
            dataUseage="100GB以上 "
            beforeComapany="Povo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="他社へ乗り換えたら楽天モバイルの良さを実感して戻ってきました"
              subTitle="高速で思い切り使えるのは楽天モバイル！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えを決めた理由を教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルには2回乗り換えていて、1回目は大手携帯電話会社からの乗り換えでした。
                </p>
                <p>
                  データ使い放題の料金プランを利用していたのですが、毎月の利用料金が7,000円程度と高額だったので、節約のために乗り換えたいなと思っていたんです。
                </p>
                <p>
                  そのとき、楽天モバイルを利用している知り合いに紹介されて、Webサイトなどを調べてみたらデータ使い放題※で3,000円程度と半額以下になることを知り、楽天モバイルに決めました。楽天モバイルを契約する前は、自宅がサービスエリア※に入っていなかったので不安だったのですが、乗り換えてみたら
                  <TxtMarker>安定してつながり、通信速度も十分速い</TxtMarker>
                  ※ので安心しました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※人口カバー率は2023年6月時点で99.9%を突破しました。※人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアに関して、
                  <LinkNormal href="/area/">詳細はこちら</LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、そうだったのですね。しかし、そこから他社に乗り換えを検討されたのはなぜでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私は1日中動画を流しっぱなしで生活していて、動画がない生活は考えられません。それが理由で、乗り換えのときからデータ使い放題の料金プランがあるのが条件だったんです。だから、楽天モバイルは本当に快適でした。
                </p>
                <p>
                  そんな楽天モバイルに乗り換えて1年以上、とても快適に動画を楽しんでいたんですが、格安スマホの料金プランを組み合わせるとデータ使い放題がもっと安く利用できる、さらに節約できるならやってみようと思ったのがきっかけでした。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  格安スマホに乗り換えた後、もう一度楽天モバイルに乗り換えたのは、なにが理由だったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  乗り換えた格安スマホは、低速でデータ使い放題の料金プランで、料金も月々1,000円ほどでした。ところが、思っていた以上にデータ通信速度が遅くて、動画がまったく見られなくなってしまったんです！
                </p>
                <p>
                  動画が見られない生活に耐えられなくて、1週間で楽天モバイルに帰って来ました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  たしかに、動画を流し続けて生活したいとお考えなら、動画が見られない状況では利用料金が安くなっても意味がなくなってしまいますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。少しの節約のために大きい我慢をするのは本末転倒だなと思い知った出来事でした。5Gも利用できる高速回線でのデータ使い放題となると、やはり3,000円が限界なんだなと実感しました。
                </p>
                <p>
                  日常的に動画を流しっぱなしにしたいので、たとえ利用料金が安くなっても動画が見られなくなっては意味がない私にとって、
                  <TxtMarker>
                    節約と高速データ通信のどちらも叶う選択は楽天モバイルでした。
                  </TxtMarker>
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルなら常に動画を流したままの生活を送っても安心"
              subTitle="データ利用量は毎月100GB以上！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  動画をいつも流しているということですが、どれくらい利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  動画配信サイトの動画をずっと流し続けている状態ですね。大手携帯電話会社のときと、使用感が変わらない生活を続けながら、利用料金が半額以下になっているのは本当にうれしいです。
                </p>
                <p>
                  データ容量に制限がある料金プランも検討したのですが、20GBぐらいで使えなくなっていたら、動画を我慢しなければいけないのでストレスが溜まっていたのではないかと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  生活スタイルを変えずにデータ通信を使えるのは、とてもいいですね。毎月のデータ利用量はどれくらいなのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  あまり意識して確認していないのですが、大体毎月100GB以上になることが多いですね。多い月はもっと利用しているかもしれません。
                </p>
                <p>
                  携帯電話会社を何度も乗り換えて、実体験で比較することになりましたが、
                  <TxtMarker>
                    データ通信を思い切り使いながら利用料金を節約するなら、高速データ通信が利用できる楽天モバイルがベスト
                  </TxtMarker>
                  だなと実感しています。
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
              毎月の携帯電話料金の見直しをするとき、データ利用量やデータ通信速度に制限が付くと、ストレスの原因になりがちです。特にデータ使い放題の料金プランでは、利用料金か通信速度のどちらかに制約があることも珍しくありません。
            </p>
            <p>
              しかし、楽天モバイルなら、20GB超過後はどれだけつないでも3,278円／月（税込）でサクサクつながる高速データ通信が利用できます。
            </p>
            <p>
              田代さんのように思い切りインターネットを楽しみながら利用料金も節約するなら、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
              <br />
              ※当ページの内容は2023年6月16日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice53
