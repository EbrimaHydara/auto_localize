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
import { ReportCardBnr } from '@components/include/uservoice/ReportCardBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice64: NextPage = () => {
  const pagetitle = 'どんどんよくなる電波、山梨県南アルプス市でもばっちり！'
  const pageHeading = 'どんどんよくなる電波、山梨県南アルプス市でもばっちり！'
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

  const articleNum = '67'
  const userName = '天野'

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
        description="どんどんよくなる電波、山梨県南アルプス市でもばっちり！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年4月5日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「地図上ではサービスエリアになっているけど、私の自宅に電波が届くのかな」、「山間部へ旅行に行きたいけど、電波は入るだろうか」と気になっていませんか？
                </p>
                <p>
                  楽天モバイルでは、通信品質を向上するためにさまざまな取り組みを行っています。国内各地への基地局設置により電波がつながる地域が広がり、どんどんつながりやすくなっています※。
                </p>
                <p>
                  そこで今回は、ご夫婦2人で楽天モバイルに乗り換えた天野さん（仮名）に、山梨県南アルプス市の電波状況や楽天モバイルの使い心地について詳しくお話をうかがいました。
                </p>
                <TxtCap as="p">
                  ※人口カバー率は 2023年9月時点で99.9%を突破しました。
                  <br />
                  ※人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアに関して、
                  <LinkNormal href="/area/">詳細はこちら。</LinkNormal>
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性・山梨県）"
            periodOfUse="2023年6月ごろから"
            dataUseage="3～10GB前後"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="楽天モバイルを選んだ理由は楽天経済圏！ "
              subTitle="楽天のサービスをバリバリ使っています "
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>楽天モバイルを選んだ理由を教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えたのは、楽天経済圏※の利用を始めようと思ったからです。
                </p>
                <p>
                  今まで、楽天ポイントだけでなくさまざまなポイントカードやアプリを使ってポイ活をしていました。でも、段々とポイントやアプリの管理が面倒になり、あちこちのポイントが少しずつ貯まる状態になっていたんです。
                </p>
                <p>
                  それに音楽やファッション、旅行などのアプリも、たくさんインストールしていたのですが、すべて使いこなせていませんでした。
                </p>
                <p>
                  そこでインターネットでのお買い物や旅行も楽天のサービスを使って、ポイ活を楽天ポイントに集約しようと思って楽天モバイルに乗り換えました。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>なるほど。楽天経済圏がきっかけだったのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、楽天経済圏でポイント管理や日々の生活費の管理をシンプルにしたいなという気持ちだったんです。
                </p>
                <p>
                  シンプルといえば、楽天モバイルの料金プランに魅力を感じたのも後押しになりました。私のように毎月のデータ利用量に波がある場合でも、データ利用量に応じて利用料金が変わるので、どの料金プランにするか悩む必要がないのがいいなと感じたんです。
                </p>
                <p>
                  いい携帯電話会社だなと思ったので、夫にも一緒に乗り換えようと誘って、2人で同時期に乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ご主人と一緒に楽天モバイルに乗り換えられたのですね。ありがとうございます。楽天経済圏を活用しているということですが、楽天ポイントは主にどんなことに利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場で使っています。お買い物マラソン※などの楽天ポイントがたくさん貯まるタイミングで、おむつなどのかさばる子ども用品や、お米などの重いものを買ったりしています。
                </p>
                <p>
                  楽天モバイルの「Rakuten最強プラン」を契約していると楽天市場のお買い物におけるポイント倍率が+4倍になるのもあり、毎月3,000～4,000ポイントほど貯まるので、いろいろとお買い物ができて便利です。
                </p>
                <p>
                  期間限定ポイントなどの一部は、楽天ペイ※での支払いに使うこともありますね。楽天経済圏の利用でポイント還元を受けられ、生活費の足しになるので非常に助かります。
                </p>
                <p>
                  楽天モバイルに乗り換えて月々の携帯電話料金も見直せましたし、以前の携帯電話会社と比べると経済的なメリットが大きくなったと感じました。
                </p>
                <TxtCap as="p">
                  ※お買い物マラソンとは、対象期間中にエントリーすることで期間中に楽天市場で1,000円（税込）以上のお買い物をすると、ポイント倍率が最大10倍になります。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/marathon/guide/">
                    詳細はこちら。
                  </LinkNormal>
                  <br />
                  ※楽天ペイはQRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkNormal href="https://pay.rakuten.co.jp/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="山梨県でもどんどんよくなる通信環境！"
              subTitle="半年でさらによくなりました "
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、携帯電話の電波状況に変化を感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  電波は、以前の携帯電話会社と変わりませんね。主に市街地で利用していますが、たまに山間部に行くときも安定してつながっています。
                </p>
                <p>
                  楽天モバイルに乗り換えた当初は、少し電波が届きにくいかなと思っていたところがありましたが、半年程度でしっかりとつながるようになりました。私が住んでいる地域で、楽天モバイルのサービスエリアが拡大しているのはありがたいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。楽天モバイルから基地局を設置した際のお知らせをご覧になったことはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。以前からよく電波改善のお知らせがSMSで届くので、どのあたりで電波がよくなったのかなとちょくちょくチェックしています。
                </p>
                <p>
                  結構な頻度でお知らせが来るので、楽天モバイルの通信品質向上の取り組みは日々行われているんだなぁと感じています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  どのようなタイミングで楽天モバイルの電波の改善を感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主にお買い物や、遊びに出かけるときですね。大型のショッピングモールでも、つながりやすくなったと実感しました。
                </p>
                <p>
                  今の段階ですでに以前の携帯電話会社と遜色がないのに、さらにプラチナバンドも導入されると聞いているので、楽しみにしています。
                </p>
                <p>
                  乗り換える前に調べたら、いい口コミも悪い口コミもあって気になっていましたが、悩むより思い切って乗り換えてみたら、思った以上に快適につながるので大満足です。
                </p>
                <p>
                  もしも楽天モバイルに乗り換えるか迷っている人がいるなら、乗り換えてしまう方がいいと思いますよ。
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
              別の携帯電話会社に乗り換えたら、スマホがつながりにくくなるかもしれないと不安になる方も少なくありません。
            </p>
            <p>
              しかし、楽天モバイルでは基地局やアンテナの設置を積極的に進め、天野さんがお住まいの山梨県南アルプス市でも、半年で実感するほど通信品質が向上しています。
            </p>
            <p>
              また、楽天モバイルや楽天カードなどの楽天グループサービスを利用すると、SPU※で効率的に楽天ポイントを獲得できます。貯まった楽天ポイントは、毎月の携帯電話料金のお支払いにも使えるため節約にもつながります。
            </p>
            <p>
              携帯電話会社の乗り換えに迷っているなら、天野さんのように楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※2023年12月1日の条件変更により、SPU
              の倍率が「Rakuten最強プラン」の契約で＋4倍、「Rakuten
              Turbo」または「楽天ひかり」の契約で＋2倍になりました。
              <br />
              ※獲得ポイントに上限あり。
              <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/ ">
                詳細はこちら。
              </LinkNormal>
              <br />
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年4月5日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
              <br />
              ※QRコードは株式会社デンソーウェーブの登録商標です。
            </TxtCap>
          </InterviewSummary>

          <ReportCardBnr
            className={Utils['Mt-32']}
            param={`?l-id=uservoice_67_ad_reportcard`}
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

export default Uservoice64
