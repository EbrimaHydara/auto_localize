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
import { TxtCap } from '@components/atoms/Txt'
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

const Uservoice64: NextPage = () => {
  const pagetitle = '楽天モバイルの通信品質向上を実感！ポイントもざくざくです！'
  const pageHeading =
    '楽天モバイルの通信品質向上を実感！ポイントもざくざくです！'
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

  const articleNum = '66'
  const userName = '船橋'

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
        description="楽天モバイルの通信品質向上を実感！ポイントもざくざくです！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年3月29日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「携帯電話会社を乗り換えたとき、今生活している場所で同じようにつながるだろうか」、「余計なオプションの契約はしたくないけど大丈夫かな」と悩み、乗り換えを迷っているという人も少なくありません。
                </p>
                <p>
                  そこで今回は岩手県にお住まいの船橋さん（仮名）に、普段お使いの地域での使い勝手や、乗り換えのときに感じた疑問がどのように解消したのか、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性・岩手県）"
            periodOfUse="2020年10月10日ごろから"
            dataUseage="3GB未満"
            beforeComapany="KDDI"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="3年間でどんどんよくなる通信品質！"
              subTitle="岩手県でもばっちりつながります"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えた時期と経緯を教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  最初に楽天モバイルを契約したのは2020年の10月ごろです。楽天モバイルのサービスが始まったことを聞いて、ネット広告も見かけるようになったので、興味を持ちました。
                </p>
                <p>
                  今は終了していますが、当時はデータ利用料が1年間0円になるキャンペーン※があったので、楽天経済圏※の利用も兼ねて契約を決めました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMITの1年間無料キャンペーンは終了しています。
                  <br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  乗り換えを検討したとき、他社と比較検討したり、口コミなどを調べたりしましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。その当時利用していた携帯電話会社と比較すると、プラン料金がとても安価なので、複数のオプションに加入する必要があったり、最初から速度制限がかけられたりするのかもしれないと気になりました。
                </p>
                <p>
                  そこで、いろいろと口コミを調べてみたのですが、まだサービスが始まったばかりということで情報が足りなかったんです。
                </p>
                <p>
                  それでも問題なく利用できているという口コミも多いので、2年縛りなどの条件がないのも魅力に感じて、思い切って契約してみようと決心しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>実際に使い始めて、不安はすぐに払拭できましたか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前の携帯電話会社と変わらない品質で使えて満足しています。今暮らしているあたりではつながらないと感じたことはありません。
                </p>
              </Interviewee>
              <Interviewer>
                <p>3年間で変化を感じることはありますか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね、3年間でどんどん電波が入りやすくなったなと感じます。契約した当初はRakuten
                  Linkで通話していると、時々音が悪いと感じていましたが、今ではそんなことはありません。
                </p>
                <p>
                  以前よりもずっと電波はよくなっているのを体感しますし、SMSでたまにアンテナの設置についての通知が来ると、「あ、エリアがまた広がったのかな」とたのもしく感じています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。楽天モバイルに乗り換えて、よかったなと実感する部分を具体的にお聞かせいただけますか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とにかくコストパフォーマンスが抜群だということです。使い勝手は以前となにも変わらないのに、以前の携帯電話会社よりも格段に毎月のデータ利用料が安くなりましたし、データ利用料の支払いに楽天ポイントを利用できるのも助かっています。
                </p>
                <p>
                  いざというときのためにスマホを2台持ちにしているのですが、携帯電話料金を負担に感じないのがとても助かりますね。
                </p>
                <p>
                  あまりに安くなったので姉に紹介したら、姉も楽天モバイルに乗り換えていました。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="乗り換えをきっかけにアプリやサービスを楽天に集約！"
              subTitle="ポイントもたくさん貯まっています"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天経済圏の利用状況についてお聞かせください。どのサービスを利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場を定期的に利用しています。楽天カードを普段使いのカードにしているので、ポイントがたくさん還元されていますね。ファッション関係はRakuten
                  Fashionを利用しています。
                </p>
                <p>
                  ほかにも楽天ペイ※をコンビニなどでの支払いに利用しています。期間限定ポイントを利用できるのでとても助かっています。
                </p>
                <p>
                  楽天ポイントクラブではプラチナ会員なので、ポイント還元だけでなく、いろいろな付帯サービスがあるのがとても助かります。
                </p>
                <TxtCap as="p">
                  ※
                  楽天ペイはQRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkNormal href="https://pay.rakuten.co.jp/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  月々、どれくらいのポイントを受け取っているのでしょうか？使い方も併せてお聞かせください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月によって異なりますが、少ない月は1,000ポイント、多い月は3,000ポイントくらいになります。貯まったポイントは楽天ペイのほかにも、楽天市場での買い物や楽天モバイルの支払いに利用しています。
                </p>
                <p>
                  楽天経済圏でいろいろとまとめたことで、管理も楽になりました。楽天ポイントもざくざく貯まるので、やはり楽天モバイルへの乗り換えと楽天経済圏のコストパフォーマンスは高いと感じています。
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
              楽天モバイルは国内各地で基地局の増設を進めており、通信品質は日々改善しています。船橋さんのように以前と比較して改善を実感してくださる方も多く、さまざまなエリアで安心してご利用いただけます。
            </p>
            <p>
              また楽天グループはさまざまなサービスを提供しているので、楽天経済圏の利用を始めることでポイントがざくざく貯まるだけでなく、利便性も向上します。船橋さんのようにスマホもお買い物も、楽天にまとめてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年3月29日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
              <br />
              ※QRコードは株式会社デンソーウェーブの登録商標です。
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

export default Uservoice64
