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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { articleData } from '@components/include/uservoice/uservoiceData'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice54: NextPage = () => {
  const pagetitle = '毎月のデータ利用量は300GB以上'
  const pageHeading =
    '毎月のデータ利用量は月300GB以上！ライブ配信時も安定しています'
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

  const articleNum = '54'
  const userName = '上田'

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
        description="毎月のデータ利用量は月300GB以上！ライブ配信時も安定しています（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年7月14日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  Webサイトに動画を投稿したり、ライブ配信をしたりするときに、データ容量がたくさん使える料金プランが欠かせないと感じる方もいるのではないでしょうか。
                </p>
                <p>
                  データ容量をたくさん利用できる安い料金プランは多くありません。やむを得ず高額な料金プランを契約したり、大容量のモバイルWi-Fi®ルーターを契約したり、経済的な負担を感じながら我慢している方もいるでしょう。
                </p>
                <p>
                  そこで今回は、楽天モバイルに乗り換えて、毎月のデータ利用量が300GB以上になっても、以前よりずっと月々の利用料金が安くなった上田さん（仮名）に、乗り換えにまつわるお話を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／岡山県）"
            periodOfUse="8カ月"
            dataUseage="100~300GB以上"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="スマホの使い方を変えずに月々の携帯電話料金が半分以下に"
              subTitle="職場で唯一安定してつながる楽天モバイル！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前利用していた携帯電話会社では、データ使い放題の料金プランを利用していました。ただ、毎月の利用料金が8,000円ほどになっていて、少し高く感じたため利用を続けるのに限界を感じていたんです。
                </p>
                <p>
                  そこで、以前からサブ回線として利用していた楽天モバイルに乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。楽天モバイルへ乗り換える前に、ほかの携帯電話会社は検討されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。毎月100GB以上のデータ通信を利用するので、月々の利用料金が安くて、それなりに電波がつながるという条件で探していました。
                </p>
                <p>
                  オンラインブランドや格安スマホを検討したのですが、データ容量をチャージしたり、データ増量オプションを付けると高額になったりするので、候補は楽天モバイルだけになりましたね。
                </p>
                <p>
                  <TxtMarker>
                    楽天モバイルはデータ使い放題※ですし、月々のデータ利用が20GBを超えても3,278円以上の追加料金はかからない※
                  </TxtMarker>
                  ので楽天モバイルにしようと決めたんです。
                </p>
                <p>
                  楽天モバイルに決めた後は、
                  <TxtMarker>
                    Webサイトから乗り換え手続きをして、10分程で乗り換えが完了
                  </TxtMarker>
                  しました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※通話料等別費用。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。実際に楽天モバイルに乗り換えてみて、使い心地はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前利用していた携帯電話会社の使い心地とほとんど変わらずに、利用料金が安くなったのが嬉しいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルに乗り換えてから、電波は安定していますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  実家と今暮らしている場所で電波の入り方にムラを感じることはありますが、僕の
                  <TxtMarker>
                    生活圏では電波が入らなくて困ったことはありません。
                  </TxtMarker>
                  自宅周辺は電波がしっかり入って安定※しているので、乗り換えてよかったと感じています。
                </p>
                <p>
                  それと、僕の職場が山間部にあるんですが、ほかの携帯電話会社の電波がほとんど入らない環境なんです。
                </p>
                <p>
                  でも、楽天モバイルだけはしっかりと電波がつながるので、職場の人はサブ回線として楽天モバイルを契約する人が増えています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。ほかにも身近で楽天モバイルを利用されている方はいらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  結構いますね。僕の周りにいる同世代の新社会人は、僕と同じように「思い切りデータ容量を使いたい。でもほかの携帯電話会社のデータ使い放題プランは高い」という理由で、楽天モバイルに乗り換える人が増えています。
                </p>
                <p>
                  たくさんデータ容量を使いたいけど、毎月の携帯電話料金は節約したいニーズにぴったりだと思います。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="ライブ配信や動画のアップロードも安定して使えます"
              subTitle="モバイルWi-Fiと併用でデータ通信をヘビーに利用！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  毎月100GB以上データ通信を利用しているというお話でしたが、具体的にどれくらいデータ容量を利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  実は楽天モバイル以外にもモバイルWi-Fiルーターを契約していて、合計するとデータ利用量が500GBを超える月があります。
                </p>
                <p>
                  楽天モバイルだけで毎月100GB以上、多いときは300GBを超える月もあります。それだけ使っても、データ通信に速度制限がかかったことはありません※。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  データ使い放題の楽天モバイルとは別に、モバイルWi-Fiルーターを契約している理由はなにかあるのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  僕は動画を配信しているので、メイン回線で動画をアップロードして、その間はサブ回線で別の作業をするというように回線を使い分けているんです。
                </p>
                <p>
                  動画をアップロードしているときは、どうしてもデータ通信速度が遅くなってしまってほかのことができないので、回線を使い分けるようになりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>そうだったのですね。ライブ配信などはされているのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、僕は動画をアップロードするよりも、ライブ配信をする方が多いですね。配信が遅延したり、途中で乱れたりすることは一度もなく、とても安定していて満足しています。
                </p>
                <p>
                  <TxtMarker>
                    データ使い放題※や利用料金、通信環境の安定度も、僕にとっては楽天モバイルにしない理由が見つからないくらいメリットが大きいですね。
                  </TxtMarker>
                </p>
                <p>
                  以前の携帯電話会社のときと使い方を変えずに、毎月の携帯電話料金を節約できて、大満足です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
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
              楽天モバイルは、あなたの住む街や地域で快適にデータ通信ができるように、つながりやすさを改善しています。
            </p>
            <p>
              上田さんのように、毎月の携帯電話料金を節約しながら、データ容量を気にせず使ってスマホを楽しみたい人にとって、楽天モバイルは最適な料金プランといえるでしょう。
            </p>
            <p>
              たくさんデータ容量を使う生活は変えたくない。でも携帯電話料金は節約したいと思ったら、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー個人の実体験にもとづくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年7月14日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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
