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

const Uservoice58: NextPage = () => {
  const pagetitle = '2GB無料の海外ローミング'
  const pageHeading = '2GB無料の海外ローミングがフランスで活躍！'
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

  const articleNum = '58'
  const userName = '権田'

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
        description="2GB無料の海外ローミングがフランスで活躍！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年8月10日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「海外でスマホを使いたいけれど、いろんな方法があってよくわからない」、「海外ローミングは使い過ぎたら高くなりそうで心配」と考えている人は多いのではないでしょうか。
                </p>
                <p>
                  海外でスマホを使うときに気になるのが、海外でのデータ通信にかかる費用です。海外Wi-Fi®をレンタルしたり、海外SIMや海外ローミングを利用したり、さまざまな選択肢がある中で、どれが一番いいのかわからないとお悩みの方も少なくありません。
                </p>
                <p>
                  そこで今回は、国内外でお仕事をしている権田さん（仮名）に、1カ月の海外出張で楽天モバイルの海外ローミング※を利用した際の使い心地や、国内での利用状況について詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※プランのデータ利用量に加算。2GB超過後は最大128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／愛知県）"
            periodOfUse="9カ月"
            dataUseage="100GB程度"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="出張のお供に楽天モバイルの海外ローミングを活用しました"
              subTitle="スマホひとつで気軽に外出！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  今回は楽天モバイルの海外ローミングをご利用いただいた経験について、詳しくお聞かせください。楽天モバイルの海外ローミングをどちらの国で利用されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  フランスのブルゴーニュです。2022年8月ごろ、仕事の出張で1カ月ほど滞在したときに楽天モバイルの海外ローミングを利用しました。
                </p>
                <p>
                  会社から海外Wi-Fiルーターを支給されていたのですが、ルーターを持ち歩くと荷物がかさばってしまうのが気になっていました。ホテルの外へちょっと出かけるときくらいは身軽に過ごしたいと思って、楽天モバイルの海外ローミングを使ったんです。
                </p>
                <p>
                  地図アプリを使ったり、天気を確認したり、ちょっとした調べものをしたいときにとても便利でした。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  支給された海外Wi-Fiと海外ローミングを使い分けられていたのですね。1カ月の滞在期間でデータ容量は足りましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。ちょっとした調べものくらいなら、ひと月無料で利用できる2GB※で十分足りました。ホテルのWi-Fiや現地のフリーWi-Fiもあったので、データ容量が足りなくなることはありませんでした。
                </p>
                <TxtCap as="p">
                  ※プランのデータ利用量に加算。2GB超過後は最大128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>現地の電波状況やデータ通信速度はいかがでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker>
                    滞在したエリアでは、快適につながっていましたし、データ通信速度も十分でした※。海外Wi-Fiがなくても、安定してつながるのはありがたいですね。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※通信速度はベストエフォートであり、実効速度は通信環境・状況により変動します。
                  <br />
                  ※データ通信（海外ローミング）のサービスエリア・提供条件は予告なく変更になる場合があります。対象エリアに関して
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/guide/international-roaming/">
                    詳しくはこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  海外ローミングを利用するときは、現地のフリーWi-Fiなどを使って設定されたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、日本で設定してから出張に行きました。出張に行くことが決まったときから海外ローミングを利用しようと思っていたので、事前に設定しておいたんです。
                </p>
                <p>
                  出国前にmy楽天モバイルから海外ローミングの設定をオンにして、渡航先でスマホの設定アプリからデータローミングの設定をオンにするだけなので、簡単に利用できました。
                </p>
                <p>
                  思った以上に快適だったので、今後も出張で使いたいですね。海外旅行に行くときも、海外ローミングを使ってみようと思います。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="魅力はシンプルな料金プランと楽天経済圏"
              subTitle="データ使い放題で選ぶなら楽天モバイル！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルを海外で活用していただいていることを伺いましたが、国内での利用状況についても教えてください。まず、楽天モバイルを選んだ理由を教えていただけますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>料金プランの安さと、データ無制限※で使えるところです。</p>
                <p>
                  以前利用していた携帯電話会社では、データ無制限の料金プランで毎月5,000円ほど携帯料金を支払っていたのですが、少し高いと感じていました。ただ、データ利用量が多いときは月100GB以上になることがあるので、データ無制限の料金プランからは変えられないだろうなと思っていたんです。
                </p>
                <p>
                  もっと利用料金が安くて、データ無制限で使える携帯電話会社はないかと、無理を承知で携帯電話会社を探していたところ、楽天モバイルを見つけました。
                </p>
                <p>
                  料金プランがとてもシンプルでわかりやすく、20GBを超えてもデータ容量を気にしなくていいところに魅力を感じて乗り換えました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、理由は利用料金とデータ容量だったのですね。普段はどのようにスマホを利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主に動画配信サービスで、映画やいろいろな動画を見ています。妻が私のスマホのテザリングを使って動画を見るので、実質2人で動画を見ているようなものですね。
                </p>
                <p>
                  妻がテザリングを利用しても、私のスマホのデータ通信速度が遅くなることもなく、快適に動画を楽しんでいます。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  テザリングを利用しながらご自身もデータ通信速度を気にせず動画を楽しめるのはとてもいいですね。ほかに、楽天モバイルに乗り換えて変化したことはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天ポイントが貯まりやすくなったことですね。もともと楽天経済圏※を活用しているのですが、
                  <TxtMarker>
                    楽天モバイルのSPU倍率アップ※のおかげでさらに楽天ポイントが貯まりやすくなりました。
                  </TxtMarker>
                </p>
                <p>
                  毎月2,000～3,000くらいの楽天ポイントがもらえるので、買い物するときに使ったり、楽天モバイルの利用料金に充てたりしています。毎月の携帯電話料金が安くなっただけでなく、楽天ポイントで普段の生活費が節約できているので、本当に助かります。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳細はこちら
                  </LinkNormal>
                  。
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
              楽天モバイルの海外ローミングは、海外出張や海外旅行でスマホを使いたいという悩みもスマホひとつで解決できます。
            </p>
            <p>
              my楽天モバイルから海外ローミングの設定をオンにするだけで利用できるので、海外Wi-Fiのように、レンタルするための手続きや複雑な設定は必要ありません。
            </p>
            <p>
              さらに、楽天モバイルの海外ローミングなら月々2GBまで無料※。高速データ容量が足りなくなったときは1GBずつデータ容量をチャージできるので、データ容量を使いすぎて気づいたら利用金額が高額になるという心配もありません。
            </p>
            <p>
              「海外で便利にスマホを使いたい！」と思ったら、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※高速データ通信が毎月2GBまで無料。2GB超過後は最大
              128kbpsで使い放題。
              <br />
              ※当ページの内容は2023
              年8月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice58
