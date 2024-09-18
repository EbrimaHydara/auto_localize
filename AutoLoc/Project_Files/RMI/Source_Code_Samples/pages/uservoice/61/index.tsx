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

const Uservoice61: NextPage = () => {
  const pagetitle = 'ストレスなしの最強ワンプラン'
  const pageHeading =
    '自由自在な使い方でストレスなし！シンプルなワンプランが最強！'
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

  const articleNum = '61'
  const userName = '森北'

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
        description="自由自在な使い方でストレスなし！シンプルなワンプランが最強！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年10月6日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  毎月のデータ利用量に波があり、データをあまり使わない月は、定額のデータ容量ではもったいないと感じませんか？
                </p>
                <p>
                  もっと安く利用できる方法があるのではないか？といろいろ調べている方も多いのではないでしょうか。
                </p>
                <p>
                  今回お話をうかがった森北さん（仮名）もそのひとり。毎月のデータ利用量が少ない月は5GB未満、多い月は30GB以上と毎月大きく変動するため、料金プラン選びに悩んでいたそうです。
                </p>
                <p>
                  そんなときに、データ利用量に応じて支払い金額が自動的に変わる楽天モバイルに出会い乗り換え。ストレスフリーな使い心地についてお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／高知県）"
            periodOfUse="2023年5月ごろから"
            dataUseage="5GB未満～30GB以上"
            beforeComapany="povo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="口コミのおかげで、データ利用量に応じて自動的にプラン料金が決まる楽天モバイルに安心して乗り換えられました"
              subTitle="その月のデータ利用に応じてデータチャージするのが面倒に…"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えを決めたきっかけや理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  リモートワークがきっかけですね。僕は自宅と外出先で仕事をするので、月々のデータ利用量に波があるんです。そのため、自分が使う分だけデータ容量を追加できる携帯電話会社を利用していました。
                </p>
                <p>
                  最初は便利だと思っていたのですが、だんだんとデータ容量をチャージする手間がかかって面倒だなと思うようになりました。ただ、携帯電話会社を乗り換えようと比較検討しても、なかなか自分にぴったりな料金プランが見つからなくて諦めかけていたんです。
                </p>
                <p>
                  そんなときに、使ったデータ容量にあわせて月々の料金が自動的に変わる楽天モバイルを見つけて、乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。森北さんのライフスタイルに、柔軟に合わせられる楽天モバイルがぴったりだったのですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。もともと父が楽天モバイルに乗り換えていて、使い心地を聞けたのも、乗り換えのきっかけのひとつになりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>ほかの方の口コミも参考にされたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、乗り換えを決断するまで口コミや紹介を見ました。ほかの利用者の感想が知りたくて、「お客様の声」※もチェックして、いろいろな利用者のインタビューや体験も参考にしました。
                </p>
                <p>
                  最終的には知り合いからもおすすめされて楽天モバイルの紹介※を受けたので、ここまでみんながおすすめするなら乗り換えようと決めたんです。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルをご利用されている「お客様の声」について、
                  <LinkNormal href="/uservoice/">詳細はこちら</LinkNormal>
                  <br />
                  ※「楽天モバイル紹介キャンペーン」について、
                  <LinkNormal href="/campaign/referral/">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  実際に楽天モバイルに乗り換えてみて、使い心地はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    動画をスムーズにダウンロードできるようになったので、快適になったと感じています。SNSへの投稿も、データ容量の残りを気にせずに行えるので満足
                  </TxtMarker>
                  です。
                </p>
                <p>
                  僕は高知県高知市を中心に利用していますが、
                  <TxtMarker as="em">
                    生活圏内では通信状況が悪くなることもなく、データ通信速度も速いので十分満足しています
                  </TxtMarker>
                  ※。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限エリアの人口カバー率は2023年6月時点で99.9%を突破しました。
                  <br />
                  ※データ高速無制限エリアであっても、地下、屋内、大きな商業ビルの屋内等の場所、電波の状況等によって通信速度が変化する場合あり。
                  <LinkNormal href="/area/">詳細はこちら</LinkNormal>。
                </TxtCap>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="データ利用量に大きな幅があっても、ストレスなく使えています！"
              subTitle="多い月は30GB以上、少ない月は5GB未満"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  データ利用量に波があるとおっしゃっていましたが、実際にどれくらいの幅があるのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  あまり使わない月は5GB未満なんですが、多い月は30GBを超えることがありますね。
                </p>
                <p>
                  自宅で仕事をしているときはWi-Fi®を使うので、データ利用量が5GBを超えることはほとんどありません。しかし、外で仕事をするときはスマホのテザリングを使いパソコンで資料を作ることがあるので、データ利用量が一気に増えてしまうんです。
                </p>
                <p>
                  そのため、定額のデータ容量プランをデータ利用量が多い月に合わせるとデータ容量が余ってしまい、少ない月に合わせるとデータ容量が足りなくなってしまう状況に陥っていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天モバイルに乗り換えて、ストレスは軽減されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、とても快適になりました。
                  <TxtMarker as="em">
                    「データ容量が足りない」とか「データ容量が余ってもったいない」というストレスがないのが最高
                  </TxtMarker>
                  ですね。
                </p>
                <p>
                  今はついついデータ容量を使ってしまっていますが、20GB以下に抑えれば2,178円（税込）、3GB以下なら1,078円（税込）とどんどん安くなるので、今後は意識してみようかなとも思っています。
                </p>
                <p>
                  こういう自由な使い方ができるのが、楽天モバイルならではの魅力だと感じています。
                </p>
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
              楽天モバイルは、データ利用量に応じて自動的に料金が決まるシンプルな料金プランです。少ししか使わない月も、たくさん使いたい月も、毎月のデータ容量を気にしなくていいため、月々のデータ利用量に波がある人におすすめです。
            </p>
            <p>
              また、「楽天モバイル紹介キャンペーン」※を実施中です。楽天モバイルを紹介した人と、紹介された人、どちらにも楽天ポイントをプレゼントしています。
            </p>
            <p>
              身近に楽天モバイルを契約している人がいるなら、「楽天モバイル紹介キャンペーン」※を活用して、賢く乗り換えましょう！
            </p>
            <TxtCap as="p">
              ※「楽天モバイル紹介キャンペーン」について、
              <LinkNormal href="/campaign/referral/">詳細はこちら</LinkNormal>。
              <br />
              ※本コンテンツは、ユーザー個人の実体験に基づくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年10月6日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice61
