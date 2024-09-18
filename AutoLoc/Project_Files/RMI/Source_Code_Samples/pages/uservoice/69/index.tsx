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
import { TxtCap } from '@components/atoms/Txt'
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

const Uservoice69: NextPage = () => {
  const pagetitle =
    '熊本と福岡 2 拠点で活用！改善が進む回線品質に満足しています'
  const pageHeading =
    '熊本と福岡 2 拠点で活用！改善が進む回線品質に満足しています'
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

  const articleNum = '69'
  const userName = '沢倉'

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
        description="熊本と福岡 2 拠点で活用！改善が進む回線品質に満足しています"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年4月19日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  単身赴任など2拠点で生活されている方だとスマホの料金プランを見直し、乗り換えを考えても、「乗り換えたときに、拠点の片方がつながりにくくなると困る」と、思いとどまってはいないでしょうか。
                </p>
                <p>
                  地図上ではサービスエリアと表示されていても、実際によく立ち寄る場所で使用したときの電波状況や通信品質は、立地や周囲の建物にも影響されるため、本当につながるのか不安になることはあります。
                </p>
                <p>
                  そこで今回は、2拠点生活で楽天モバイルを活用している沢倉さん（仮）に、乗り換えて感じたことや、拠点を移動したときの使い勝手の変化などを詳しくうかがいました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（50代男性・熊本県）"
            periodOfUse="2023年9月ごろから"
            dataUseage="3GB未満"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="子どもたちの巣立ちが料金プランの見直しの機会に "
              subTitle="きっかけは奥様の乗り換え"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えを検討するきっかけは何かありましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  子どもたちが大学を卒業して家を巣立ち、自分で携帯電話料金を支払うようになったので、家族割引に加入する必要がなくなったんです。
                </p>
                <p>
                  妻と私は、どちらもさほどスマホを使うわけでもないので、子どもたちがシェアするために契約していたデータ利用量の上限が大きい料金プランは大分割高だし、夫婦で料金プランの見直しを相談していました。
                </p>
                <p>
                  そうしたら、妻が友人に熱烈に楽天モバイルをおすすめされまして。
                </p>
                <p>
                  私は2拠点を往復する仕事をしているのもあり、電波の状況が気になって楽天モバイルへの乗り換えを迷っていたのですが、妻は友人の熱意に触れて先に乗り換えを決意したようです。
                </p>
                <p>
                  もう少し様子を見てからと迷っていた私に先んじて、さっと乗り換えてしまったというわけです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>なるほど、奥様が先に楽天モバイルを契約されたのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。妻に使い勝手をいろいろと聞いてみたところ、なかなかいいとのことで、実際に使っている人が問題ないというのならば大丈夫だろうと、遅れて私も乗り換えました。
                </p>
                <p>
                  そもそも、私も妻もあまりスマホを使わない生活なので、使わなければ自動的に料金が安くなる楽天モバイルの料金プランは、使い勝手がちょうどよかったというのもあります。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。使い方で自動的に料金プランが変わる楽天モバイルは、沢倉さんのようにあまりスマホを使わない方にもピッタリだとご好評いただいています。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんですよ。ちょうどいいデータ利用量とプラン料金で満足しています。
                </p>
                <p>
                  携帯電話料金を夫婦の使い方にあわせて見直したのと同時に、楽天モバイルに乗り換えたことで楽天経済圏※の利用が増えたので、トータルで見るとかなりコストパフォーマンスがいいと感じています。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天経済圏をかなり使われているのですか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、すっかり楽天経済圏に首までどっぷりと浸かっています。あれこれ利用して、支払いも楽天カードに集約しているので、毎月8,000ポイント前後の楽天ポイントを受け取るほどです。
                </p>
                <p>
                  楽天モバイルに乗り換えたことで楽天経済圏が強化できたのも、満足度が高いですね。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="2拠点生活でも安定の通信"
              subTitle="熊本と福岡を往復して使っています！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  先ほど2拠点を往復されているとのことでしたが、詳しく教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私は仕事の都合で、平日は福岡で過ごし、休日は熊本に戻ってくるという2拠点生活をしているんです。そのため、どちらでも安定してスマホがつながることが必要でした。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  実際に2拠点で生活されていて、楽天モバイルのつながり方はどうですか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  どちらの地域でも電波は安定していると感じています。通信速度も十分ですね。
                </p>
                <p>
                  熊本と福岡の間を移動しているとき、極狭い場所でたまに切れることがありますが、それ以外は途切れたことはありません。それに、通信品質がどんどん改善してきているのを感じています。
                </p>
                <p>
                  私たち夫婦はライフスタイルとしてあまりスマホを使いませんが、熊本でも福岡でも安定してつながるので、必要なときは便利に使えています。今後、プラチナバンドでさらにつながりやすくなるのに期待したいですね。
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
              楽天モバイルのサービスエリアはどんどん拡大中です。沢倉さんのように2つの拠点を移動する生活でも、広いエリアでしっかりつながるので安心して使えます。
            </p>
            <p>
              月々のデータ利用量に対して割高になったと感じたりしたときは、沢倉さんのように、つながる場所がどんどん広がっている楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年4月19日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice69
