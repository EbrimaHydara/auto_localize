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
import { TurboBnr } from '@components/include/uservoice/TurboBnr'
import { Heading } from '@components/atoms/Heading'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice63: NextPage = () => {
  const pagetitle =
    'Rakuten Turboの利用でゲームがサクサク！以前より安定しています'
  const pageHeading =
    'Rakuten Turboの利用でゲームがサクサク！以前より安定しています'
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

  const articleNum = '63'
  const userName = '福永'

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
        description="Rakuten Turboの利用でゲームがサクサク！以前より安定しています"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年10月20日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「マンションの光回線が急につながらなくなってしまった」、「光回線が遅い」とお悩みではありませんか？
                </p>
                <p>
                  インターネットの通信速度が遅いとさまざまな弊害が起こりますが、大人数でやり取りするオンラインゲームや動画配信などのサービスを利用するときは、余計にストレスが溜まってしまうものです。
                </p>
                <p>
                  今回お話をうかがった福永さん（仮名）もマンションの光回線の接続が不安定だったため、ゲーム中に急にインターネットにつながらなくなって困っていたそうです。
                </p>
                <p>
                  そんなときにホームルーターの
                  <LinkNormal href="/internet/turbo/?l-id=uservoice_63_internet_turbo">
                    Rakuten Turbo
                  </LinkNormal>
                  （ラクテンターボ）に出会い、自宅のインターネット環境を刷新。驚くほど快適にインターネットが楽しめるようになりました。
                </p>
                <p>
                  そこで今回は、福永さん（仮名）に、乗り換え前後のインターネット環境や契約時のお話について詳しくうかがいました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため速度低下の場合あり。通信速度はベストエフォート（規格上の最大速度）であり、実効速度は通信環境・状況により変動。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代男性・大阪府）"
            periodOfUse="2023年6月ごろから"
            dataUseage="5GB程度／Rakuten Turbo：100GB以上"
            beforeComapany="povo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="丁寧で親切なサポートで安心！"
              subTitle="スマホに詳しくない自分でも、店舗で相談しながら無事に契約できた"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
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
                  以前利用していた携帯電話会社が、不便だと感じていたことがきっかけです。
                </p>
                <p>
                  自分が使う分だけデータ容量を追加できる料金プランだったのですが、都度データ容量をチャージする手間がかかって面倒でした。それに、私の使い方では利用料金が思ったより安くなかったんです。
                </p>
                <p>
                  このままではいけないと思い、プラン料金が安い楽天モバイルに乗り換えようと決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルへの乗り換えはWebサイトと店舗、どちらで手続きされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  店舗です。乗り換える前に質問したいことがあったので、店舗を利用したかったんです。実際に店舗へ行くとスタッフさんが親切に対応してくださり、そのまま乗り換えの手続きもお願いしました。
                </p>
                <p>
                  格安スマホだと店舗が少なかったり、Web申し込み専用プランでそもそも店舗がなかったりする中、楽天モバイルは全国に店舗があるので助かります。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、店舗であればその場でいろいろなことが相談できますね。乗り換えの手続きはスムーズに終わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私がスマホに関して詳しくなく、MNP（携帯電話番号ポータビリティ）予約番号※の取得からスマホの設定まで全部店舗のスタッフさんに手伝ってもらいながらの契約なので少し時間はかかりましたが、無事乗り換え手続きができました。
                </p>
                <p>
                  長時間対応をお願いすることになってしまったのですが、
                  <TxtMarker as="em">
                    店舗のスタッフさんは手続きが終わるまで丁寧に対応してくれました。
                  </TxtMarker>
                  そのおかげで安心して乗り換えができて、店舗で手続きして本当によかったと思いました。
                </p>
                <TxtCap as="p">
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal href="/guide/mnp/">詳細はこちら。</LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  乗り換えが不安なときは、店舗のサポートがあると安心ですよね。店舗のスタッフにはどんなことを質問されたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  自宅の光回線で起きていた問題を相談しました。店舗のスタッフさんからホームルーターのRakuten
                  Turboをおすすめしてもらって、Rakuten最強プランと一緒に契約をしたんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>光回線にどんな問題が起きていたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  自宅の光回線が急につながらなくなったり、ゲームをプレイしていると画面がカクカクしたり、快適に楽しめない状態になっていたんです。
                </p>
                <p>
                  ゲームで遊んでいる最中に光回線がつながらなくなると、ストレスが溜まりますし、なにより一緒に遊んでいる相手に迷惑をかけてしまうことに悩んでいました。
                </p>
                <p>
                  そこで、コンセントに挿すだけで使えるRakuten
                  Turboを使ってみてはどうかとおすすめしてもらったんです。せっかく相談に乗っていただいたこともあり、思い切って使っていた光回線を解約してRakuten
                  Turboを契約しました。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="以前よりも通信環境が安定！"
              subTitle="Rakuten Turboでゲームを満喫しています"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご自宅のインターネット環境をRakuten
                  Turboに変えてから、通信環境はどのように変化しましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  突然通信が切れたり、カクついたりすることがなくなって、通信環境が格段によくなりました。通信が切れてしまう事態がなくなり、
                  <TxtMarker as="em">
                    ゲームや動画を快適に楽しめています
                  </TxtMarker>
                  ※。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため速度低下の場合あり。通信速度はベストエフォート（規格上の最大速度）であり、実効速度は通信環境・状況により変動。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  データ通信速度は光回線と比較して、どれくらい変わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  光回線とほぼ変わりません。以前とインターネット環境が変わったことに対する不満はなにもありませんし、むしろRakuten
                  Turboの方が圧倒的によくなったと感じるほどです。同じようにインターネット環境で悩んでいる知り合いにも紹介したいと思いました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。楽天モバイルには「楽天モバイル紹介キャンペーン」※があることをご存じですか？　紹介する方も紹介された方も楽天ポイントがプレゼントされるキャンペーンなので、紹介する際は活用してください。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル紹介キャンペーンの
                  <LinkNormal href="/campaign/referral/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんですね！お互いに楽天ポイントがもらえるなら紹介しやすくなりますね。ぜひ利用してみます。
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
              自宅の光回線が不安定なときに、すぐにほかの回線に乗り換えるのは難しいものです。乗り換えようとしても手続きや工事までの日程など、開通まで時間がかかってしまうこともあります。
            </p>
            <p>
              しかし、Rakuten
              Turboなら申し込みから最短2日※でインターネットが開通可能です。ホームルーターを受け取ったその日からコンセントに挿すだけでインターネットが使えるので、工事を待つ必要がありません。
            </p>
            <p>
              さらに「
              <LinkNormal href="/internet/turbo/campaign/one-year-1980/?l-id=uservoice_63_internet_turbo_campaign_one-year-1980">
                Rakuten
                Turbo＆Rakuten最強プランをセットで利用すると20,000ポイント還元されるおトクなキャンペーン
              </LinkNormal>
              」も実施中です。Rakuten
              Turboを契約して、快適なインターネット環境を手に入れましょう。
            </p>
            <TxtCap as="p">
              ※お客様の審査状況や天候、配送状況によっては、お届けまでに数日もしくは1週間ほどお時間をいただく場合がございます。
              <br />
              ※本コンテンツは、ユーザー個人の実体験に基づくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は2023年10月20日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <Heading level="2">
              家中つなげても快適な
              <br className={Utils['Show-oox']} />
              高速Wi-Fiをお探しの方へ
            </Heading>
          </div>
          <TurboBnr
            className={Utils['Mt-16']}
            param={`?l-id=uservoice_63_internet_turbo_campaign_six-month-free`}
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

export default Uservoice63
