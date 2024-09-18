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
import { NbaBnr } from '@components/include/uservoice/NbaBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice64: NextPage = () => {
  const pagetitle =
    '楽天経済圏強化のために乗り換えました！ NBAの視聴も楽しみです'
  const pageHeading =
    '楽天経済圏強化のために乗り換えました！ NBAの視聴も楽しみです'
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

  const articleNum = '64'
  const userName = '藤田'

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
        description="楽天経済圏強化のために乗り換えました！ NBAの視聴も楽しみです"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年10月27日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話会社を選ぶときに、利用料金だけでなく、ポイント還元も含めて検討している人も多いのではないでしょうか
                </p>
                <p>
                  今回お話をうかがった藤田さん（仮名）もその一人。スマホ利用料金の見直しに加えて、SPU（スーパーポイントアッププログラム）のポイント倍率アップなど他の楽天グループサービスをよりおトクに利用するため、楽天モバイルに乗り換えられました。現在はご夫婦で楽天経済圏※を利用し、普段のお買い物で楽天ポイントをよく使っているそうです。
                </p>
                <p>
                  そこで今回は、藤田さん（仮名）に、乗り換え前後のお話や楽天モバイルのご利用状況について詳しくお聞きしました。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/?scid=wi_rmb_ichi_family_story_article_2021_rakuten">
                    詳細はこちら
                  </LinkNormal>
                  <br />
                  ※2022年11月1日の条件変更により、SPU
                  の倍率が「楽天モバイル＋会員ランク特典で最大＋3
                  倍」になりました。※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/?scid=wi_emb_ich_campaign_point-up_everyday_point">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30 代男性・福島県）"
            periodOfUse="2021年1月ごろから"
            dataUseage="10GB程度"
            beforeComapany="mineo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えの理由は楽天経済圏！"
              subTitle="楽天ポイントは日常の買い物に活用しています"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えた理由やきっかけを教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホの通話料金と、毎月の利用料金を安くしたいと思ったのがきっかけです。
                </p>
                <p>
                  私自身どうしても細々した通話をすることが多いので、通話料金が気になっていました。それに加えて、以前の携帯電話会社では、月3,000円ほどの利用料金で5GBしか使えなかったので、月末が近くなるとデータ容量が足りなくなっていたんです。
                </p>
                <p>
                  追加でデータ容量を購入することもたびたびあり、格安スマホを利用しているのに、結局利用料金が高くなっていました。
                </p>
                <p>
                  そこで、以前から楽天のサービスを利用していたので、楽天モバイルに乗り換えようと決めたんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天でよく利用されるサービスはどちらですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場や楽天カードなど、色々なサービスを利用しています。特に楽天市場でよく買い物をしていますね。楽天モバイルに乗り換えた理由として、楽天のさまざまなサービスがよりおトクに利用できるようになればいいと思っていたので、
                  <TxtMarker as="em">
                    乗り換え後は楽天ポイントがザクザク貯まるようになり満足しています。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルはSPUが最大＋3倍とポイントアップ率が大きいので、楽天経済圏を利用している方にとって最適ですね。貯まった楽天ポイントは、どんなことに利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天ペイ※を使って、ドラッグストアなどで買い物する際に楽天ポイントを使っています。ドラッグストアによっては、ドラッグストア独自のポイントと楽天ポイントを二重取りできるんですよ。少しの工夫でポイントが増えるので、生活費の節約になって助かっています。
                </p>

                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳しくはSPU
                  </LinkNormal>
                  （スーパーポイントアッププログラム）をご確認ください。
                  <br />
                  ※楽天ペイはQRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkNormal href="https://pay.rakuten.co.jp/">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。ご家族など周りに楽天モバイルを利用している方はいらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私の少し後に、妻も楽天モバイルに乗り換えました。乗り換える前は家族割などがなくなることを気にしていたんですが、
                  <TxtMarker as="em">
                    実際に乗り換えてみると割引がなくなっても楽天モバイルのほうが安いと喜んでいます。
                  </TxtMarker>
                </p>
                <p>
                  それに、楽天経済圏をかなり利用していて、インターネットで買い物をするときは基本的に楽天市場から購入するんです。夫婦で乗り換えてさらに効率よく楽天ポイントが貯まるようになりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ご夫婦で楽天のサービスを利用いただき、ありがとうございます。ご自宅のインターネット回線は光回線を利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>いえ、自宅で使っているのはホームルーターですね。</p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。現在Rakuten
                  Turbo（ラクテンターボ）※という、楽天モバイルのホームルーターサービスを提供していることはご存じでしょうか？Rakuten
                  Turboまたは楽天ひかりをご契約いただくと、楽天市場でのお買い物ポイントが＋1倍になります。
                </p>
                <TxtCap as="p">
                  ※「Rakuten Turbo」について、
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/internet/turbo/?l-id=uservoice_64_internet_turbo">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、知りませんでした！楽天ポイントの倍率が増えるのは嬉しいですね。自宅に楽天モバイルの電波が入るので、乗り換えを検討してみます。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="スポーツ観戦が好き！"
              subTitle="NBA LEAGUE PASS for 楽天モバイルが楽しみです"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ほかにも、楽天モバイルに乗り換えてよかったと感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  NBAの試合が無料で観られるようになったことですね。私はスポーツ観戦が好きで、よくバスケットボールや野球のチャンネルを観ているんです。
                </p>
                <p>
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えて「NBA LEAGUE PASS for
                    楽天モバイル」※が無料
                  </TxtMarker>
                  で利用できるようになったので、今シーズンから思い切り楽しみたいですね。
                </p>
                <TxtCap as="p">
                  ※「NBA LEAGUE PASS for 楽天モバイル」について、
                  <LinkNormal href="/campaign/nba/?l-id=uservoice_64_campaign_nba">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>なるほど、それは楽しみですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。気になっている選手がいるので、今シーズンは特に楽しみです。普段は自宅の大きいテレビ画面で試合を観ているのですが、楽天モバイルはデータ容量を気にしなくてもいいので、外でもスマホで快適※に観られるのがうれしいですね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
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
              楽天モバイルの魅力は、シンプルな料金プランだけではありません。
            </p>
            <p>
              楽天モバイルに乗り換えると、楽天市場でのお買い物ポイントがアップ。貯まった楽天ポイントは普段のお買い物だけでなく、携帯電話料金の支払いにも使えるため、生活費の節約にぴったりです。
            </p>
            <p>
              さらに楽天モバイルでは、「NBA LEAGUE PASS for
              楽天モバイル」や「Rakuten パ・リーグSpecial for
              楽天モバイル」のようなエンタメコンテンツが楽しめます。スマホを賢く利用するなら、ぜひ楽天モバイルに乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2023年10月27日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <NbaBnr
            className={Utils['Mt-32']}
            param={`?l-id=uservoice_64_campaign_nba`}
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
