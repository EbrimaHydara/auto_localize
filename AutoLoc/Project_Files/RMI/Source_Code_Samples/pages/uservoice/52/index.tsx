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

const Uservoice52: NextPage = () => {
  const pagetitle = '海外ローミングを手軽に設定'
  const pageHeading =
    '海外ローミングは手軽な設定で使えます！はじめての旅行にも便利'
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

  const articleNum = '52'
  const userName = '坂本'

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
        description="海外ローミングは手軽な設定で使えます！はじめての旅行にも便利（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年6月9日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「海外旅行に行くけど、海外でスマホを使うにはどうすればいいんだろう」と悩んでいませんか。
                </p>
                <p>
                  海外でスマホを使うには、海外
                  Wi-Fi®や海外SIM、海外ローミングの、3つの方法がありますが、はじめての旅行だとどれを選べばいいか悩んでしまいますよね。
                </p>
                <p>
                  そこで今回は、東南アジア方面を中心に海外旅行に出かける機会が多い坂本さん（仮名）に、渡航先の空港やホテルなどで便利に使える楽天モバイルの海外ローミング※と、海外SIMの使い分けや、渡航先での便利な利用方法について詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※海外ローミング（データ通信）について、
                  <LinkNormal href="/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※プランのデータ利用量に加算。2GB 超過後は最大
                  128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="/uservoice/47/?l-id=search_top#note1">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代男性／神奈川県）"
            periodOfUse="7カ月（再契約後の期間）"
            dataUseage="150GB 以上 （海外では 500MB～1GB 未満）"
            beforeComapany="NURO モバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="ワンタッチでオンオフできる海外ローミングが便利です"
              subTitle="面倒な手続きは不要！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            />
            <Interviewer>
              <p>
                楽天モバイルの海外ローミングについて、どのようなシーンで利用しているのか教えてください。
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                渡航先で現地の海外SIMを設定するまでの間、楽天モバイルを利用しています。
              </p>
              <p>
                空港や街中のフリーWi-Fiもありますが、セキュリティを考えると短時間とはいえあまり接続したくはありません。そういうとき、海外ローミングは本当に便利ですね。
              </p>
              <p>
                私は海外ローミングの機能を常にオンにしているので、渡航先の空港に到着するとスマホのデータ通信が自動的に海外ローミングに切り替わり、インターネットに接続されます。その後、海外SIMを購入して設定するのがいつもの流れになっています。
              </p>
            </Interviewee>
            <Interviewer>
              <p>海外ローミングを利用している場所は、主にどちらの国ですか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                私は東南アジア方面が多いですね。特にタイやインドネシアによく行きます。直近ではタイのバンコクに行きました。
              </p>
              <TxtMarker>
                空港内や観光地だけでなく、少し市街地を離れた場所でも安定したデータ通信が利用できました。
              </TxtMarker>
            </Interviewee>
            <Interviewer>
              <p>
                なるほど、渡航先のどこでもつながるのは安心ですね。滞在期間はどれくらいの日数が多いのでしょうか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                私は大体1
                週間程度は滞在しています。長めの旅行でデータ利用量も多いので、基本的には海外ローミングのデータ容量を追加するのではなく、海外SIMを利用しています。
              </p>
              <p>
                とはいえ、2泊3日程度の短い旅行で現地の情報を調べたり、地図アプリを使ったりする程度であれば2GBくらいあれば充分足ります。
                <TxtMarker>
                  楽天モバイルの海外ローミングは 2GBまで無料
                </TxtMarker>
                なので、短期間の観光旅行なら海外ローミングの方がおすすめですね。
              </p>
              <p>
                それに、データ容量を使い切った後は自分でデータ容量を追加するまでは勝手に課金されることはないので、海外ローミングで高額になる心配がないのも、海外旅行に不慣れな方にはおすすめしたいポイントですね。
              </p>
            </Interviewee>
            <Interviewer>
              <p>具体的にどのような点が簡単に使えるなと感じますか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                公式アプリのmy楽天モバイルを起動すれば、すぐに切り替えられるところですね。
              </p>
              <TxtMarker>
                楽天モバイルの海外ローミングは、契約プランの画面に海外ローミングへの切り替えボタンがあるので、すぐに設定できます。
              </TxtMarker>
              <p>
                もし渡航前に設定を忘れていても、ワンタッチなのでフリーWi-Fiにつなぐ時間を最小限にできます。海外ローミングが不要なときは、スマホの設定で簡単にオンオフが切り替えられます。
              </p>
              <p>
                海外旅行は出国や入国の手続きなど慌ただしいですから、簡単に設定できるのはとてもいいですね。
              </p>
            </Interviewee>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="データ利用量が多い日は40GBを超えることも"
              subTitle="国内でも思い切り使っています！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  海外で便利にご利用いただいていますが、国内ではスマホをどのように利用していらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  動画を視聴することが多く、BGM代わりに動画を流すこともあるので、多い日は
                  40GB以上、ときには100GBを超えてしまうこともあるくらいよく使っています。
                </p>
                <p>
                  実は以前は楽天モバイルをサブ回線として利用していたんです。でも、海外での使い勝手の良さやサービスエリアの拡大もあり、それまで使っていた格安スマホをすべて解約して、メイン回線として
                  、楽天モバイルに乗り換えました（MNP）※。
                </p>
                <TxtCap as="p">
                  ※他社から乗り換え（MNP）について
                  <LinkNormal href="/guide/mnp/">詳細はこちら</LinkNormal>。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天モバイルにして良かったなと感じる部分はどこでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルは、
                  <TxtMarker>
                    20GB超えても利用料金が 3,278
                    円／月（税込）以上にならない点ですね。
                  </TxtMarker>
                  毎月150GB以上利用しているので、本当に助かります。
                  <TxtMarker>
                    海外では2GBまで無料で海外ローミングが利用できますし、国内でもデータつなぎ放題
                  </TxtMarker>
                  ※で、とてもコストパフォーマンスがいいと感じています。
                </p>
                <TxtCap>
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
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
              簡単な設定で2GBまで無料で海外ローミングが利用できる楽天モバイルは、坂本さんのように海外旅行に慣れている人にも、海外に行くのには不慣れな人にもおすすめです。
            </p>
            <p>
              楽天モバイルの海外ローミングなら、フリーWi-Fiよりもセキュリティが高いので、海外でも安心して利用できます。
            </p>
            <p>
              海外旅行を計画している方は、国内でも思い切りインターネットが使えて便利な楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
              <br />
              ※当ページの内容は
              2023年6月9日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice52
