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
import { FreeCallBnr } from '@components/include/uservoice/FreeCallBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice31: NextPage = () => {
  const pagetitle = 'データ使い放題とかけ放題でとっても気楽'
  const pageHeading =
    '乗り換えて良かった！データ使い放題とかけ放題でとっても快適'
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

  const articleNum = '31'
  const userName = '東野'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20211217', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="乗り換えて良かった！データ使い放題とかけ放題でとっても気楽。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年7月29日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「データ残量が気になり、データ通信を楽しめない」「スマホから頻繁に電話をかけると、通話料金が高くなる」とお悩みの方もいるのではないでしょうか。
                </p>
                <p>
                  今回は、楽天モバイルに乗り換えて、データ利用量を気にせず使えるようになり、さらに「15分（標準）通話かけ放題」オプションサービスに加入することで、データ通信も通話もストレスがなくなった東野さん（仮名）に詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※「10分（標準）通話かけ放題」は、2022年7月1日に料金そのままで「15分（標準）通話かけ放題」へ自動移行されました。
                  <br />
                  ※かけ放題オプションは、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。一部対象外番号あり。SMSは一日の送信上限あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性・大阪府）"
            periodOfUse="1年4カ月"
            dataUseage="15GB前後"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="以前とはスマホの使い方がすっかり変わりました"
              subTitle="データ利用量を気にしなくて良いのがとてもうれしい！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えたきっかけを教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルの店舗の前を通ったときに、1年間無料キャンペーン※の受付最終日と告知されていたのを見たのがきっかけです。{' '}
                </p>
                <p>
                  それまで携帯電話会社を乗り換えようとは考えていなかったのですが、「1年間無料なら乗り換えてみよう」と思って、その場で契約しました。
                </p>
                <p>
                  だいぶ前に「楽天モバイルのデータ通信の品質は今ひとつ」という噂を聞いたことがあって、契約するときは多少不安もあったのですが、ママ友の間ではつい先日「楽天モバイルはサクサクつながるよ」なんて、話題になっていたんです。
                </p>
                <p>
                  実際に乗り換えてみたら、
                  <TxtMarker as="em">
                    データ通信は問題なく安定していて、とても速い※ので、すごく満足しています！
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年間無料キャンペーンは終了しています。
                  <br />
                  ※実際のデータ速度は、環境等により異なります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。ご友人やご家族など、周りで楽天モバイルを使っている方は多いですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私の周りでは多いですね。ママ友だとかなりの人数が楽天モバイルを利用しています。夫は半信半疑だったのですが、私が乗り換えてデータ容量を気にせず使っているのを見て、「それ良いな」と乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  乗り換えてみて、以前ご利用されていた携帯電話会社との違いを実感するのはどこでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ容量の残りを気にしなくても良いところと、携帯電話料金の安さですね。
                </p>
                <p>
                  以前利用していた携帯電話会社では、データ容量が1GBの料金プランを契約していたので、なるべくスマホを使わないようにしていました。でも
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えてからはデータ使い放題※で、データ容量を気にせずスマホを使えるのでとてもうれしい
                  </TxtMarker>
                  です。
                </p>
                <p>
                  それに携帯電話料金は、以前と比べると私と夫、合計で月額5千円程度安くなりました。びっくりするくらい安くなったのに、データ容量を気にせず使えるので、本当に乗り換えて良かったと思います。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>普段のデータ通信はどのようなことにご利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  最近は
                  YouTubeを視聴しています。ずっと我慢していた動画も、今ではちょっと暇になったらすぐに見るくらい生活が変わりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>我慢のストレスがなくなったのはとても良いですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。自分がどれくらいデータ容量を消費したのか把握していない月もあるくらい、気軽にデータ通信をするようになりました。楽天モバイルに乗り換えてスマホの使い方がすっかり変わりましたね。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="かけ放題オプション追加で通話料金も気になりません"
              subTitle="電話をたくさんかけても安心！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、データ通信以外の使い方で変わったと感じる点はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  通話料金が安くなったことですね。もともと、ちょっとした連絡はすべて電話で済ませていたんです。毎回ほんの数分なんですけど、頻繁に通話するので、結構な金額になっていました。
                </p>
                <p>
                  そこで、楽天モバイルの店舗でスタッフさんに相談したところ、10分間の通話までは定額になる「10分（標準）通話かけ放題」をおすすめされたので、オプションを追加して乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  実際に「10分（標準）通話かけ放題」を利用してみていかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  電話での問い合わせで時間がかかるときなど、イライラしないでのんびり待てるようになりました。10分までなら通話料金を気にしなくて良いので、電話をするときに気持ちが楽ですね。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  短い通話が多い方にとって、10分（標準）通話かけ放題のオプションはとても良いですよね。2022年7月1日から、
                  <TxtMarker as="em">月額料金はそのままで</TxtMarker>
                  「15分（標準）通話かけ放題」に自動アップグレードされたのはご存知でしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんですね！問い合わせが長引いてしまい、10分以上通話することもあるので助かります。
                </p>
                <p>
                  オプションサービスは月々の利用料金が増えてしまうと考えるところですが、私のように短い通話が多い方なら、
                  <TxtMarker as="em">
                    オプションを付けた方が結果的に大きな節約になる
                  </TxtMarker>
                  と思います。かなりおすすめのオプションですね。
                </p>
              </Interviewee>

              <FreeCallBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                lazy={true}
              />

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
              東野さんのように、データ容量の残りを気にせずデータ使い放題※でインターネットを楽しみたいなら、楽天モバイルに乗り換えを検討してみてはいかがでしょうか。
            </p>
            <p>
              さらに2022年7月1日から、通話時間が10分から
              <TxtMarker as="em">15分にアップグレードした「15分</TxtMarker>
              （標準）通話かけ放題」なら、1,100円／月（税込）で最長
              <TxtMarker as="em">15分</TxtMarker>
              までの通話を、通話料金を気にせず何度でもお楽しみいただけます。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年7月29日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: 'ひと月で150GB使っても安心！テザリングで2拠点生活も快適',
                userInfo: '立川さん（仮名・40代男性／静岡県）',
                img: 'avator-30.png',
                description: '単身赴任先でのインターネット回線とし..',
                href: '/uservoice/30/?l-id=uservoice_31_uservoice_30',
              },
              {
                title:
                  'かけ放題オプションが就活に便利！学生にオススメの料金プラン',
                userInfo: '原田さん（仮名・20代男性／東京都）',
                img: 'avator-29.png',
                description: '以前契約していた携帯電話会社での、デ...',
                href: '/uservoice/29/?l-id=uservoice_31_uservoice_29',
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

export default Uservoice31
