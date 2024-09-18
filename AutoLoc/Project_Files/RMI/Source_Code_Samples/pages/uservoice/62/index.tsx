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

const Uservoice62: NextPage = () => {
  const pagetitle =
    '鹿児島から北海道まで日本一周！全国でしっかりつながる楽天モバイルを体感'
  const pageHeading =
    '鹿児島から北海道まで日本一周！全国でしっかりつながる楽天モバイルを体感'
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

  const articleNum = '62'
  const userName = '横澤'

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
        description="日本全国を旅して実感！どこでも安定※してつながる楽天モバイル！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年10月13日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話を乗り換えるときに、しっかり電波がつながるのか気になっていませんか？実際に使ってみた人の口コミや、通信エリア※を確認する人も多いのではないでしょうか。
                </p>
                <p>
                  今回お話をうかがった横澤さん（仮名）は、愛車で鹿児島県から北海道まで、旅のお供に楽天モバイルを携えて日本を一周した経験がある方です。日本各地を巡り、さまざまな場所で快適※にスマホが使えたと語ってくださいました。
                </p>
                <p>
                  そこで今回は、日本一周の経験を振り返りながら、横澤さん（仮名）に楽天モバイルの魅力についてお話をうかがいました。
                </p>
                <TxtCap as="p">
                  ※実際の通信速度は環境により異なります。公平なサービスのため速度低下する場合あり。
                  <br />
                  ※人口カバー率は 2023年6月時点で99.9%を突破しました。
                  <br />
                  ※人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアに関して、
                  <LinkNormal href="/area/">詳細はこちら。</LinkNormal>
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／鹿児島）"
            periodOfUse="2021年2月ごろから"
            dataUseage="10～30GB程度"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="鹿児島から北海道まで日本一周！"
              subTitle="全国でしっかりつながる楽天モバイルを体感"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  まずは、日本一周の旅をされた経験について詳しくお聞かせください。旅はいつごろから始められたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2023年5月からです。愛車で地元の鹿児島県を出発して、北海道まで行って日本全国をぐるりと回って7月に帰ってきました。
                </p>
                <p>
                  以前から出かけた先のホテルで数日間泊まって仕事をすることが多く、今度は日本全国を回りながら仕事をしてみようと思ったのがきっかけですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  3カ月間とは、かなりの長さですね。仕事をするときは、主にホテルのWi-Fiを利用されていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ホテルのWi-Fiと楽天モバイルのテザリング※を併用しました。ホテルによっては通信状態が不安定になることがあるので、安定して接続するために楽天モバイルのテザリングを使っていたんです。
                </p>
                <p>
                  ホテル以外でも車の中や立ち寄った店で仕事をするときは、楽天モバイルを活用しました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルではテザリングを無料でご利用いただけます
                  <LinkNormal href="/service/tethering/">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  日本全国を巡る中で、どれくらいデータ容量を使われたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月10GB～20GBほど使いました。1日あたり1GB～1.5GBを超えることが何度かあったので、20GB以上になる月もありました。テザリングを使う頻度がもっと高ければ、50～60GBを超えていたかもしれません。
                </p>
                <p>
                  データ利用量が20GBを超えても利用料金が月3,278円（税込）なので、安心して仕事に使えることにあらためて魅力を感じました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに魅力を感じていただき、ありがとうございます。日本各地で楽天モバイルを利用してみて、通信状態はいかがでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    とても安定してつながるので快適でした
                  </TxtMarker>
                  ※。街中でつながらないことはほとんどなく特に人口の多い場所は安定していたので、4G人口カバー率が改善しているのを実感しました。
                </p>
                <p>
                  北海道の平野を走っているときでも、国道沿いならつながります。さすがに山奥や北海道の平野のど真ん中など、ほとんど人がいない場所は電波が入りにくいと感じましたが、ほかの携帯電話会社のアンテナも同じような電波状況なので気になりませんでした。
                </p>
                <TxtCap as="p">
                  ※実際の通信速度は環境により異なります。公平なサービスのため速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="料金プランのシンプルさがいい！"
              subTitle="自分のデータ利用量と料金をマネジメントしやすいのが魅力"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>楽天モバイルには、いつごろ乗り換えられたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2021年の2月ごろですね。当時契約していた携帯電話会社の料金プランを見直そうかなと考えていたタイミングで、楽天モバイルが1年間無料キャンペーン※を実施していたのを見たのがきっかけです。1年も無料になるなら、楽天モバイルをためしてみようと思って乗り換えました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMITの1年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>キャンペーンはどの媒体でご覧いただいたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場のバナーで見かけました。2006年ごろから楽天市場を愛用していて、買い物をしようとしたときに目に留まったんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天モバイルに乗り換えて、魅力を感じたのはどの部分でしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    SPUの倍率アップ※につながるのが魅力的
                  </TxtMarker>
                  ですね。ダイヤモンド会員※になるほど楽天市場をよく利用しているので、楽天ポイントがザクザク貯まります。そのポイントが買い物の節約にもつながっているんです。
                </p>
                <p>
                  もうひとつは、毎月の携帯利用料金を予想しやすいところですね。今月のデータ利用量を抑えようかなとか、来月は外出が多くなりそうだからデータ利用量を気にせず使おうかなとか、
                  <TxtMarker as="em">
                    計画的な使い方ができるので出費を把握しやすいのが助かります。
                  </TxtMarker>
                </p>
                <p>
                  私のように、自宅で仕事をしているときと旅に出るときのデータ利用量に大きな差がある自由なライフスタイルの場合でも使いやすいところが便利です。
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳しくはSPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                  <br />
                  ※楽天ポイントの会員ランクについて、
                  <LinkNormal href="https://point.rakuten.co.jp/guidance/rankkeep/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。2年半の間、楽天モバイルをご利用いただく中で、契約当初からの変化を感じる部分があれば教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  通信エリアが着実に拡大していると感じています。契約当初は電波がつながらないなと感じていた場所も、今はしっかりとつながっています。契約したばかりのころと比べて、全体的にサービスがよくなったなと感じますね。
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
              楽天モバイルは、4G人口カバー率が99.9％の通信エリアでデータ高速無制限※。今後もさらに通信エリアが拡大していく予定です。
            </p>
            <p>
              料金プランもシンプルで、データ利用量にあわせて自動的に利用料金が変わるためリモートワークにもぴったりです。拡大する通信エリアで思い切りスマホを使いたいという方は、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供または環境により速度低下する場合があります。
              <br />
              ※本コンテンツは、ユーザー個人の実体験に基づくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年10月13日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice62
