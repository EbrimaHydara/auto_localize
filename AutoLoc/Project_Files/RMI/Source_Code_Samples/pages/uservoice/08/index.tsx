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

const Uservoice08: NextPage = () => {
  const pagetitle = 'モバイルWi-Fiルーターでデータ無制限！'
  const pageHeading = 'モバイルWi-Fiルーターでデータ無制限！外出先の仕事に便利'
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

  const articleNum = '08'
  const userName = '向谷'

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
        description="仕事のデータを扱う時にデータがしっかりと守られる楽天モバイルのデータ通信でやりとりできるのは安心（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年1月28日"
            readTime="2"
            readTimeSec="30"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  リモートワークが広がる中、外出先で仕事をする時に気になるのが、ネットワークの安全性とデータ通信量です。
                </p>
                <p>
                  今回は、データ使い放題※の楽天モバイルとモバイルWi-Fiルーターをお仕事でも活用されている向谷さん（仮名）に、実際の使用感や活用方法をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性／神奈川県）"
            periodOfUse="1年"
            dataUseage="30～40GB程度"
            beforeComapany="UQモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ使い放題でデータ利用量が大幅に増えた"
              subTitle="リモートワークでも安心の高セキュリティ"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  早速ですが、モバイルWi-Fiルーターのご契約を楽天モバイルに乗り換えたきっかけを教えて下さい。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  モバイルWi-Fiルーターの買い替えを考えていた時に、楽天モバイルのプラン料金1年無料キャンペーン※を知ったのがきっかけです。
                </p>
                <p>
                  スマホを購入してテザリングの利用を考えましたが、5年程前からモバイルWi-Fiルーターを利用しているので使い勝手が良いですし、楽天モバイルでも
                  <LinkNormal href="/product/internet/?l-id=uservoice_08_product-internet">
                    モバイルWi-Fiルーター
                  </LinkNormal>
                  を販売していたので、乗り換えと同時に新しいものに買い換えました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  実際にお仕事で利用されて、通信速度やつながりやすさはいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    とても快適な速度が出ていて、普段つながりにくさを感じることはありません。
                  </TxtMarker>
                  私の生活圏内は楽天モバイルの電波が安定している※ので、以前の携帯電話会社のモバイルWi-Fiルーターよりもデータ速度が速いです。
                </p>
                <p>
                  以前は月々4千円程度で、7GBまでしか使えないプランを契約していました。今はどれだけ使っても※月々2,980円（税込3,278円）なので、
                  <TxtMarker as="em">コスト面でも満足</TxtMarker>しています。
                </p>
                <TxtCap as="p">
                  ※環境によってつながりにくい場合がございます。詳しくは
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    提供エリア
                  </LinkNormal>
                  をご確認ください。
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  お仕事で利用されている中で、良かったと感じる点はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  業務上、セキュリティには特に気をつけているので、外出先でもフリーWi-Fiと違って高セキュリティで利用できるのがありがたいです。
                </p>
                <p>
                  仕事のデータを扱う時にデータがしっかりと守られる楽天モバイルのデータ通信でやりとりできるのは安心ですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>お仕事のほかには普段どのようなことに利用していますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  車移動が多いので、車内で音楽のストリーミング配信を聞いています。
                </p>
                <p>
                  子どもを習い事へ送る間に、子どもが動画を見たりゲームをしたりするのにも使っていますね。
                </p>
                <p>
                  ほかには、英会話のオンラインレッスンを外出先で受講したり、新型コロナウイルスの影響で子どもの化学実験教室などがオンライン授業になっていたので、それらを受講する際のデータ通信にも利用しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  1日にモバイルWi-Fiルーターをどれくらい利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ほぼ一日中ずっとですね。朝8時頃に子どもが登校したあと、私もカフェやコワーキングスペースで仕事を始めます。
                </p>
                <p>
                  夕方、子どもを習い事に送って仕事をしながら待ち、18～19時頃に帰宅するのですが、その間ずっと利用していますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それだけ使っていらっしゃると、1カ月に20GBは簡単に超えますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ通信は毎月30～40GBくらいになりますね。楽天モバイルに乗り換えたことで、制限を気にせず安心して利用できるので、以前の7GBからぐっと増えました。
                  <br />
                  楽天モバイルで契約しているモバイルWi-Fiルーターは、スマホと同じくらい、私にとってはなくてはならない大切なツールです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>それはとても良かったです。</p>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/08/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="家族で楽天モバイルへの乗り換えを検討中"
              subTitle="家族のライフステージの変化に合わせて"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご家族でほかに楽天モバイルを契約されている方はいらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>母がスマホデビューとして楽天モバイルを契約しました。</p>
                <p>
                  それから、子どもには子ども用ケータイを持たせていますが、成長に合わせてスマホを持たせることを検討しています。
                  <br />
                  楽天モバイルは子ども名義※の契約がオンラインでできる点も良く、夫を含めて一家揃って乗り換えようと考えています。
                </p>
                <p>
                  子ども用ケータイや自宅のケーブルテレビ、光回線の割引も含めて、契約した当時は現在利用しているスマホの携帯電話会社がベストでしたが、楽天モバイルが登場したおかげでこれらの割引がなくなっても3人で乗り換えた方が月々のコストが安くなるんです。
                </p>
                <TxtCap as="p">
                  ※18歳未満の方がiPhoneの購入と一緒に回線契約を希望する場合は、店頭でのお手続きが必要となります。
                  <br />
                  ※18歳未満の方がWebからSIMと製品セットを申し込む場合、「iOS製品」、「あんしんコントロール
                  by
                  i-フィルターをご利用いただけない一部のAndroid製品」を申し込むことはできません。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>どれくらい安くなりそうですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月に8千円くらい節約できそうです。
                  <br />
                  今は親子3人のスマホとケータイ、それからiPadで月々2万円弱支払っていますが、楽天モバイルはどれだけ使っても月々2,980円（税込3,278円）なので、乗り換えると合計月1万2千円程度に抑えられるんです。
                </p>
              </Interviewee>

              <Interviewer>
                <p>割引されている今より、乗り換えたほうが十分にお得ですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。子どもが小さい時は、子ども向けの製品やプランを重要視しましたが、成長してスマホを持たせられるようになれば、優先する条件がまた変わります。
                </p>
                <p>
                  以前のベストと、今のベストは違うなと試算しながら感じているので、子どもの成長を考えながら楽天モバイルへの乗り換えを進めて行きたいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  お子さまの成長は料金プランを見直す１つの大きな要因ですね。
                  <br />
                  楽天モバイルでは「
                  <LinkNormal
                    href={`/service/i-filter/?l-id=uservoice_${articleNum}_service_i-filter`}
                  >
                    あんしんコントロール by i-フィルター
                  </LinkNormal>
                  」サービスで、お子さまのスマホ使いを安心して見守ることができますので、是非色々とご検討ください。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              外出先でもセキュリティが高く安定したデータ通信を利用したい、お子さまに安全にスマホを使ってもらいたいと考えている方は、向谷さんのように楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <p>
              最大でも月2,980円（税込3,278円）で安定した高速回線が使い放題の楽天モバイルなら、リモートワークはもちろん、お子さまの使いすぎで利用料金が高額になる心配もありません。
            </p>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※当ページの内容は2022年1月28日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'データ無制限をフル活用。自宅のデバイスもテザリングで接続！',
                userInfo: '後藤さん（仮名・30代男性／千葉県）',
                img: 'avator-07.png',
                description: '先輩に、楽天モバイルのプラン料金1年ら...',
                href: `/uservoice/07/?l-id=uservoice_${articleNum}_uservoice_07`,
              },
              {
                title:
                  '滋賀県内でもデータ通信が快適。夫婦で毎月約2万円の節約！',
                userInfo: '中野さん（仮名・20代男性／滋賀県）',
                img: 'avator-06.png',
                description: '使用しているiPhoneが古くなってき...',
                href: `/uservoice/06/?l-id=uservoice_${articleNum}_uservoice_06`,
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

export default Uservoice08
