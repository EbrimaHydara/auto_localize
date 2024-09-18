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

const Uservoice23: NextPage = () => {
  const pagetitle = '5G使い放題で動画視聴が快適'
  const pageHeading =
    '5G使い放題で動画をサクサク視聴！学生にもうれしい料金プラン'
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

  const articleNum = '23'
  const userName = '馬目'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220527', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="重たいデータもすぐにダウンロードできる。とても高速な5Gが使い放題なのは本当に凄い（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年5月27日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「学生なので負担が少ない手軽な料金プランにしたいけど、動画視聴やゲームをストレスなく楽しみたいからデータ容量が少ないのは困る」など、毎月の携帯電話料金とデータ容量のバランスで悩んでいる学生の方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、ご自身のアルバイト代で携帯電話料金を支払っている馬目さん（仮名）に楽天モバイルを選んだ理由を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／埼玉県）"
            periodOfUse="1年9カ月"
            dataUseage="10GB～50GB"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ容量を我慢しなくても、アルバイト代から余裕で支払える料金プラン"
              subTitle="弟も友人も楽天モバイルを選ぶ理由"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけや、楽天モバイルを選んだ理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  親に支払ってもらっていた携帯電話料金を自分で支払うと決めたことで、料金プランを見直そうと思ったのがきっかけです。
                  <br />
                  以前利用していた携帯電話会社では、データ容量の上限が毎月50GBで7千円程の契約でした。
                  <br />
                  僕はまだ学生なのでアルバイト代から支払っているのですが、毎月7千円という金額は負担がかなり大きかったです。ただ、単純にデータ容量を抑えて安い料金プランにすると、これまでのように好きなだけ動画視聴やゲームを楽しめなくなるので、どうしてもデータ容量は諦めたくありませんでした。
                </p>
                <p>
                  そんな風に悩んでいたところ、友人たちから「楽天モバイル実際に使ってみるとなかなか良い」という話を聞いたんです。
                  <br />
                  調べてみると、楽天モバイルはデータ使い放題※で月最大2,980円（税込3,278円）と知り、すぐに乗り換えを決めました。
                </p>
                <p>
                  <TxtMarker as="em">
                    乗り換え前と比べて毎月4千円程安くなったので、無理なく自分で支払いができています。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご友人も楽天モバイルをご利用されているとのことですが、楽天モバイルの利用者が周りでも増えていると感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね、友人以外にも１番身近なところだと、弟も楽天モバイルを利用しています。弟は僕と同じでデータ利用量がかなり多く、携帯電話料金に悩んでいたので、僕が楽天モバイルをすすめました。乗り換えて毎月の支払いが楽になったようです。
                </p>
                <p>
                  楽天モバイルを使っている周りの友人の多くがプラン料金の安さが一番の決め手だったと言っています。
                </p>
                <p>
                  <TxtMarker as="em">
                    特に自分で携帯電話料金を支払う学生にとって、毎月の負担を抑えながらも、安定したデータ通信を好きなだけ使える※楽天モバイルはとても良い選択だと思います。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なかなかぴったりな料金プランが見つからず悩まれていたようですが、検討されたポイントや条件を教えていただけますか。
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  日頃からデータ利用量が多いので、安定したデータ通信がたくさんできること、アルバイト代から無理なく支払える料金であることの2点を重視していました。
                  <br />
                  格安スマホだと通信速度が期待できなかったり、ほかの大手携帯電話会社だと学生の僕には少し料金が高かったりと、どちらかを我慢する必要がありました。
                </p>
                <p>
                  それにデータ容量が多いプランでも、以前利用していた携帯電話会社のように毎月50GBまでなどの上限があったりします。
                  <br />
                  たくさんデータ通信をする月は
                  <TxtMarker as="em">
                    データ容量の上限を気にしなければいけないのが結構苦痛だったので、楽天モバイルがデータ使い放題※と知り、とても魅力を感じましたね。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <img
                src={`${assets}img/uservoice/23/img-01.png`}
                alt=""
                width="415"
                height="300"
                loading="lazy"
              />
            </div>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="5GエリアはWi-Fiよりも高速で快適！"
              subTitle="学生生活にデータ使い放題もテザリングもフル活用"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、データ通信の使い方に何か変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前は、データ通信が多い月は何かとデータ残量を気にして使っていましたが、今はデータ使い放題※なのでデータ容量を気にしなくなりました。
                </p>
                <p>
                  また、月によっては10GB程度しかデータ通信を使わないこともあるので、僕の場合、データ利用量にかなりの波があります。自分で携帯電話料金を支払うようになると毎月の料金にも敏感になって、データ通信が少ない月も多い月と同じ金額を支払っていたので、損をしたようでずっともやもやしていました。
                  <br />
                  でも楽天モバイルなら、
                  <TxtMarker as="em">
                    １つの料金プランの中で料金がデータ利用量に応じて変わり、データ通信が少ない月は自動的に安くなるので、本当にストレスがなくなりました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>普段データ通信はどのようなことに利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  YouTubeなどでよく動画を見ています。ほかにもスマホでオンライン授業を受けたり、楽天モバイルのテザリング※を使ってパソコンで作業したりもします。
                  <br />
                  今回のオンラインインタビューも楽天モバイルの回線を利用して参加しています。
                </p>
                <TxtCap as="p">
                  ※テザリングについて
                  <LinkNormal href="/service/tethering/?l-id=uservoice_23_service_tethering">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>そうだったんですね！テザリングも活用されているのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、課題レポートや研究用のデータはクラウドストレージに保存しているのですが、Wi-Fiがなくてもテザリングで気軽に作業できるので、楽天モバイルのデータ使い放題※とテザリングにはいつも助けられています。
                  <br />
                  オプション料金なしでテザリングが利用できて、場所に縛られることもなくなったのでとても快適です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルのデータ通信を多用いただいていますが、データ通信速度はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  高画質の動画もサクサクと視聴できて、通信速度に快適さを感じています。
                  <br />
                  しかも自宅を含めて、日頃スマホを使うエリアで5G※が利用できることが多いんです。5Gだとダウンロードに時間がかかるような重たいデータもすぐにダウンロードできますし、とても高速なので、自宅のWi-Fiを使わないことも多いです。
                  <br />
                  <TxtMarker as="em">
                    5Gも使い放題なのは本当に凄いですね。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※5Gは一部エリアのみ。順次拡大予定。5Gのご利用には、対象エリアと対応製品が必要です。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご自宅で5Gが利用できるのは、とても便利ですね。
                  <br />
                  ほかにも楽天モバイルに乗り換えて何か変化を感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  生活で変わったことといえば、楽天市場など、ほかの楽天サービスを利用する機会が増えました。
                </p>
                <p>
                  楽天モバイルを契約して、楽天市場でのお買い物ポイント倍率が上がった※ので、ほかのインターネット通販を利用するよりもおトク感がありますね。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
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
              馬目さんのように毎月の携帯電話料金の手頃さと大容量データ、どちらも妥協したくないという方は、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <p>
              楽天モバイルなら、好きなだけデータを使ってもプラン料金最大2,980円（税込3,278円）／月なので、ご自身のアルバイト代から携帯電話料金を支払われている学生の方にもおすすめです。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年5月27日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: '学生起業家として、コスパの高い楽天モバイルを選びました',
                userInfo: '仁科さん（仮名・20代男性／埼玉県）',
                img: 'avator-22.png',
                description: '何よりコストパフォーマンスの高さです...',
                href: '/uservoice/22/?l-id=uservoice_23_uservoice_22',
              },
              {
                title:
                  '大量のデータ通信も躊躇なし！子どもにも持たせたい楽天モバイル',
                userInfo: '松山さんご夫婦（仮名・50代男性／女性／東京都）',
                img: 'avator-21.png',
                description: '2020年6月頃に楽天モバイルのCMを...',
                href: '/uservoice/21/?l-id=uservoice_23_uservoice_21',
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

export default Uservoice23
