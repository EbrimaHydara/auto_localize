import type { NextPage } from 'next'
import { assets } from '@components/utils/assets'
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
import { LinkNormal } from '@components/atoms/Link'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice05: NextPage = () => {
  const pagetitle = 'スマホ代を気にせず動画も見放題'
  const pageHeading =
    '新社会人生活を楽天モバイルで。スマホ代を気にせず動画も見放題'
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

  const articleNum = '05'
  const userName = '高田'

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
        description="データ使い放題でスマホ代を気にせず使える！データ通信量が少ない月は自動的に安くなってストレスフリー（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2021年12月24日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「料金プランが多すぎて、どれが自分に一番あっているのかわからない」「契約時に条件やオプションが多くて、結局思っていたより高い」とお悩みの方もいらっしゃるのではないでしょうか。
                </p>
                <p>
                  今回は、社会人生活のスタートに合わせて楽天モバイルを契約された高田さん（仮名）に、実際の使用感をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／埼玉県）"
            periodOfUse="7カ月"
            dataUseage="20GB前後"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="兄のすすめで選んだ楽天モバイル"
              subTitle="就職をきっかけに携帯電話番号も一新"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだきっかけを教えて下さい。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>楽天モバイルを使っている兄にすすめられたんです。</p>
                <p>
                  当時、社会人になるタイミングで、「携帯電話番号を一度新しいものにしよう」と考えていました。調べたら楽天モバイルの評判が良かったので、7年間使用していた携帯電話番号を解約して、新しい番号で契約しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルのどのような点に一番魅力を感じましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>料金の安さに一番惹かれました。</p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社と比較して、スマホ代はどのように変化しましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホ代が
                  <TxtMarker as="em">
                    毎月6～7千円も違うので、とても安くなりました。
                  </TxtMarker>
                </p>
                <p>
                  以前は月々1万円程度で、50GBのデータが使用できる他社のプランを契約していたのですが、データ容量を使い切れずに毎月余らせていました。かと言ってその下のプランだと容量が足りず、仕方ないと諦めていました。
                  <br />
                  その点、楽天モバイルでは、利用したデータ通信量で料金が変わり、どれだけ使っても月々2,980円（税込3,278円）なので安心です。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前は料金プランと実際のデータ通信量が上手く噛み合っていなかったのですね。
                  <br />
                  データ通信は普段どのようなことに利用していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主にSNSです。ほかには動画を視聴しています。通勤の往復時と、就寝前に1～2時間ほど動画視聴を楽しんでいます。月合計20GB前後ですね。
                </p>
                <p>
                  県をまたぐ長距離通勤で、地下鉄を含めて1時間半ほど電車に乗っていますが、
                  <TxtMarker as="em">
                    つながりにくさを感じたり、動画が重くてなかなか再生されないことはありません。
                  </TxtMarker>
                  ※
                </p>
                <TxtCap as="p">
                  ※環境によってつながりにくい場合があります。詳しくは
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    提供エリア
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、通勤中も快適に動画視聴を楽しんでいらっしゃるのですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。長時間視聴してもデータ通信量を気にしなくて良いので、気持ちがとても楽です。
                </p>
                <p>
                  スマホ代が安くなったので、その差額で動画配信サービスのサブスクリプションを契約して日々満喫しています。
                </p>
              </Interviewee>
            </Interview>
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <img
                src={`${assets}img/uservoice/05/img-01.png`}
                alt=""
                width="415"
                height="300"
                loading="lazy"
              />
            </div>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="iPhoneをおトクに契約できたのも楽天モバイルを選んだ理由"
              subTitle="スマホは新しいものにすぐ買い替えたい！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>契約時にスマホは購入されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。ちょうど新しいiPhoneが欲しいなと思っていたタイミングだったので、契約と同時に楽天モバイルでiPhone
                  12を購入しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>契約はオンラインでしたか？店舗でしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  店舗です。実際にスマホに触ることができたので、とても参考になりました。※当初はiPhone
                  12
                  Proの購入を予定していましたが、触れてみたところ思っていたよりも重かったので、普段使いには辛いと思い、iPhone
                  12を購入しました。
                </p>
                <TxtCap as="p">
                  ※店舗によって取り扱いが異なりますので、あらかじめご了承ください。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>店舗での契約はスムーズでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  来店予約をしていたので、
                  <TxtMarker as="em">
                    店舗に到着して30分で開通できました。
                  </TxtMarker>
                </p>
                <p>
                  店員さんがとても親切で、気になったことやその場で浮かんだ疑問にもすぐに答えてくれました。契約後のスマホの初期設定方法や、新しい充電器の紹介、使用上の注意点など、丁寧に教えてくれて良かったです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>店舗に着いて30分での開通は、スピーディーでしたね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、すぐに使えるようになって助かりました。それに、申し込みキャンペーンで楽天ポイントの還元も受けられました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>還元された楽天ポイントは、何に使われましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場で新しいパソコンを購入したときに使いました。もともと楽天市場で毎月1万円程度、化粧品などを購入しているので、楽天モバイルの契約で楽天市場のお買い物による楽天ポイントが+1倍※になるのも助かります。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限有り。詳しくは{' '}
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
            </Interview>

            <Interview
              title="気にせずデータ通信が使える"
              subTitle="料金プランがシンプルでストレスフリー！"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルの料金プランはワンプランですが、実際にご利用いただいていかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ使い放題※なので、たくさん使った月も
                  <TxtMarker as="em">
                    請求金額を心配しなくて良く、本当に気が楽
                  </TxtMarker>
                  です。また、使ったデータ通信量が20GB未満だった月は自動的に安くなるので、良かった！という気持ちになります。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  料金プランに使い方をあわせるのではなく、自分の使い方に料金プランがあわせてくれるのは、ストレスがなくて良いですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。データ容量が大きくて高い料金プランにしたのに結局使い切れなかったり、逆に安い料金プランにしたらデータ容量が足りなかったりというストレスもなく、日々
                  <TxtMarker as="em">
                    データ通信量とスマホ代を気にせず使えるのは嬉しい
                  </TxtMarker>
                  です。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  データ使い放題で、思い切り動画視聴やSNSを満喫されているようで良かったです。本日は貴重なお声をお聞かせいただき、ありがとうございました。
                </p>
              </Interviewer>
            </Interview>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              新しいスマホをおトクに買い替えたい、料金プランでストレスを感じたくないという方は、高田さんのように楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2021年12月24日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '3世代家族みんなで楽天モバイル。使い放題で家族全員が楽しめる',
                userInfo: '藤木さん（仮名・40代女性／大阪府）',
                img: 'avator-04.png',
                description: '両親が高齢なこともあり、わかりやす...',
                href: `/uservoice/04/?l-id=uservoice_${articleNum}_uservoice_04`,
              },
              {
                title:
                  '先輩にすすめられ、契約を即決。昼休みに申し込み、即日開通！',
                userInfo: '森田さん（仮名・20代男性／東京都）',
                img: 'avator-03.png',
                description: '昼休みに先輩からすすめられて、その場...',
                href: `/uservoice/03/?l-id=uservoice_${articleNum}_uservoice_03`,
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

export default Uservoice05
