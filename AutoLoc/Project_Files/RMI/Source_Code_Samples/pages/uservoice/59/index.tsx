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

const Uservoice59: NextPage = () => {
  const pagetitle = '夫婦で乗り換えておトクに'
  const pageHeading =
    '夫婦で乗り換えて15,000円もおトクに！楽天ポイントもザクザク'
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

  const articleNum = '59'
  const userName = '島本'

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
        description="夫婦で乗り換えて15,000円もおトクに！楽天ポイントもザクザク（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年8月25日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  子どもが生まれることをきっかけに、生活費の見直しをする方は多いのではないでしょうか。「子どもの将来のために貯金をしよう」と生活費を見直したら、携帯電話料金が思っていたよりも高額だったということは、珍しくありません。
                </p>
                <p>
                  島本さん（仮名）は、「子どもの将来のために、携帯電話料金を節約したい」と悩んでいたところ、楽天モバイルに乗り換えて月々の携帯電話料金を大幅に節約できました。さらにデータ無制限※になったことで、現在は快適に過ごされています。
                </p>
                <p>
                  そこで今回は、携帯電話料金を節約しただけでなく、楽天経済圏の利用で楽天ポイントをたくさん獲得している島本さんに、乗り換えのきっかけや楽天経済圏について詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／長野県）"
            periodOfUse="9カ月"
            dataUseage="20GB~30GB程度"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="通信環境を変えずに料金を見直すなら楽天モバイル一択でした"
              subTitle="乗り換えのきっかけは子どもの誕生!"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  携帯電話会社を乗り換えようと考えたきっかけは、なにがあったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  子どもが産まれたのがきっかけです。子どもの将来のためにお金を貯めたいと思って、生活費の見直しから始めました。
                </p>
                <p>
                  あらためて生活費を確かめてみたら、私と夫2人合わせて毎月の携帯電話料金が20,000円を超えていて驚いたんです。スマホ本体の代金や、通話料金でこんなにかかっているのかなと思って調べてみたら、プラン料金だけで夫婦で20,000円を超えていることに気づきました。
                </p>
                <p>
                  スマホデビューから10年以上同じ携帯電話会社を利用していましたが、利用料金が高いので楽天モバイルに乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。さまざまな携帯電話会社がある中で、なぜ楽天モバイルを選ばれたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私は以前から楽天経済圏※を利用していて、楽天モバイルの存在自体は知っていたんです。楽天市場などを利用するときに表示されるバナーが目について、ずっと気になっていました。
                </p>
                <p>
                  ただ、実際の使い心地を知りたかったので、夫に頼んで先に楽天モバイルに乗り換えてもらったんです。
                  <TxtMarker>電波が入りやすいし使い心地もいい</TxtMarker>
                  感じと聞いて、1カ月後に私も楽天モバイルに乗り換えました。
                </p>
                <p>
                  楽天モバイルのSIMカードが届いた後、元々使っていた携帯電話会社のSIMカードを入れ替えて手続きをするだけだったので簡単でしたね。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。楽天モバイルに乗り換えた後、スマホの使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ容量の制限がなくなった※ので、Wi-Fi®がない場所でも気にせず思いきり使うようになりました。自宅はインターネット回線を無料で使える物件なのですが、楽天モバイルのデータ通信速度の方が速いときがある※ので、Wi-Fiを切ることも多いです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供または環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前より思い切りデータ通信を楽しまれているようでなによりです。楽天モバイルに乗り換えてから生活費の状況はいかがでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Wi-Fiがない場所でもデータ容量を気にせず使えるようになったのに、月々の携帯電話料金は15,000円ほど安くなりました。今は、1人あたり月額最大3,278
                  円（税込）ですからね。なんでもっと早く乗り換えなかったんだろうって思うくらいです。
                </p>
                <p>
                  余裕ができたお金の一部は、子どもの養育費や生活費の足しにして、余った分は貯金に回しています。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天のサービスをたくさん使ってポイントがザクザク獲得できます"
              subTitle="夫も乗り換えを機に楽天経済圏デビュー！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  島本さんは楽天経済圏を利用されていると伺いましたが、SPUの倍率アップを意識されていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。私が楽天経済圏※を活用しているので、楽天モバイルに乗り換えるきっかけとしてSPUの倍率アップ※はかなり影響が大きかったですね。
                </p>
                <TxtCap as="p">
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
                <p>ご主人も楽天経済圏を活用されているのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  夫は楽天モバイルに乗り換えるまで、楽天経済圏を利用していませんでした。
                </p>
                <p>
                  ただ、楽天モバイルに乗り換えてからは、楽天銀行の口座を開設したり、楽天カードを作ったり、今では色々な楽天のサービスを利用しています。夫にとって、楽天経済圏を利用する絶好のタイミングだったのかもしれません。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、ご主人は乗り換えを機に楽天経済圏の利用を始められたのですね。楽天モバイルに乗り換えて、魅力を感じるところはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker>
                    毎月の携帯電話料金が安くなったことや、楽天モバイルのSPU倍率アップのおかげで楽天ポイントが貯まりやすくなったのがいいですね。
                  </TxtMarker>
                </p>
                <p>
                  楽天経済圏を利用している人にとって、楽天モバイルを選ばない理由はないと思います。少しでも携帯電話料金を節約できると貯金額を増やせますし、それが将来大きな差になるので、乗り換えて良かったと感じています。
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
              子どもが生まれたことをきっかけに生活費を見直すと、携帯電話料金が気になるものです。
            </p>
            <p>
              しかし、携帯電話料金を安くしたいときに、データ容量やデータ通信速度を妥協する必要はありません。楽天モバイルなら、月額3,278円（税込）でデータ無制限※で利用できるうえに、楽天経済圏を活用すれば楽天ポイントもたくさん貯まります。
            </p>
            <p>
              島本さんのように子ども将来のために生活費を見直したい人は、ぜひ楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年8月25日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice59
