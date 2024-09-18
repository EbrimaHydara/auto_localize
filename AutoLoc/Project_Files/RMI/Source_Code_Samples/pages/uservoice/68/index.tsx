import type { NextPage } from 'next'
import React, { useRef,useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
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
import { BannerHover } from '@components/atoms/Banner'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { articleData } from '@components/include/uservoice/uservoiceData'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice68: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle =
    'Rakuten Turboで茨城県取手市の自宅回線もサクサクつながります！'
  const pageHeading =
    'Rakuten Turboで茨城県取手市の自宅回線もサクサクつながります！'
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

  const articleNum = '68'
  const userName = '小澤'

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
        description="Rakuten Turboで茨城県取手市の自宅回線もサクサクつながります！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年4月12日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                賃貸や分譲マンション、アパートの悩みのひとつは、自宅のインターネット回線です。
                <br />
                建物そのものが光回線に対応していれば比較的スムーズに利用できますが、ご自身で開通させる場合は回線工事の手配・立ち合いや、その分の時間がかかるなど、さまざまな制約があります。
                </p>
                <p>
                このような問題から、最近は工事不要で端末をコンセントに繋ぐだけで簡単に高速インターネットを利用できるホームルーターも注目されてます。
                <br />
                そのため光回線にしようか、ホームルーターにしようか、迷っている方も多いのではないでしょうか。
                </p>
                <p>
                そこで今回は、楽天モバイルのホームルーター「Rakuten Turbo」 を自宅の回線として利用して、快適に在宅勤務やオンライン会議をしている小澤さん（仮名）に、Rakuten Turbo 乗り換え後の使用感などを詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30 代男性・茨城県）"
            periodOfUse="2023年8月ごろ"
            dataUseage="3GB未満（スマホのみ）"
            beforeComapany="旧楽天モバイル（NTTドコモ回線）"
            beforeRouter="SoftBank（SoftBank Air）"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="ずっと楽天モバイル！"
              subTitle="MVNOからMNOへのプラン移行を決めていました"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>楽天モバイルをいつごろから利用していたのでしょうか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2017年1月ごろに、当時まだ格安スマホだった楽天モバイルを契約しました。それからずっと楽天モバイルです。
                </p>
                <p>
                  利用している途中で楽天モバイルが自社回線（MNO）サービスを開始したことを知っていましたが、プラン移行するなら使用しているスマホが壊れたタイミングにしようと考えていたので、実際に乗り換えたのは2023年になってからです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  長期にわたって楽天モバイルを利用していただいてありがとうございます。プラン移行の際に、他社との比較検討はしましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ずっと楽天モバイル間でのプラン移行を決めていたので、他社の検討はしていませんでした。
                </p>
                <p>
                  私は外でスマホを利用する機会がほとんどないので、3GB以下だと1,078円／月（税込）に納まる楽天モバイルの料金プランはとても魅力的だったのです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>外でスマホを使うときはどのような目的が多いのでしょうか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ブラウザで簡単な調べものをしたり、経路確認のために地図アプリを見たり、少しSNSを確認するくらいですね。楽天モバイルの自社回線に乗り換えてからは、データ通信が高速になったので、地図アプリを使用するときもスムーズになりました。
                </p>
                <p>
                  少ししか使わないのであれば、利用料金を安くするために格安スマホの速度が遅い料金プランでもいいと考えるかも知れません。しかし、外出先でほんの少し使う程度にせよ、やはりデータ通信が遅いとストレスは大きくなります。
                </p>
                <p>
                  高速データ通信を少しだけ使いたい私のような人にとって、楽天モバイルの料金プランはとても魅力的で丁度いいと感じます。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="自宅回線はRakuten Turbo！"
              subTitle="回線速度にも大満足です"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルの自社回線にプラン移行するタイミングで、元々使用していた自宅回線から楽天ひかりやRakuten
                  Turboへの乗り換えは検討されましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天モバイルショップでプラン移行手続きをするときに、楽天ひかりとRakuten
                  Turboについて紹介を受けました。
                </p>
                <p>
                  Rakuten
                  Turboを契約すると楽天市場のポイント倍率が上がると説明されて、利用しているホームルーターの契約更新時期でもあったので、ちょうどいいかなと乗り換えました※。
                </p>
                <TxtCap as="p">
                  ※2023年12月1日の条件変更により、SPU
                  の倍率が「Rakuten最強プラン」の契約で＋4倍、「Rakuten
                  Turbo」または「楽天ひかり」の契約で＋2倍になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天ひかりとRakuten Turboがある中で、Rakuten
                  Turboを選んだ理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  元々ホームルーターを使用していましたし、光回線は工事が必要で手間や費用がかかるのが面倒というのが大きいですね。それに、光回線が必要なほどの高速データ通信を必要としていないのもあります。
                </p>
                <p>
                  ホームルーターなら持ち帰ってすぐに使用できますし、利用料金も手頃なのでRakuten
                  Turboを選びました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。実際にRakuten
                  Turboを使用してみて、回線の速度や安定感はどう感じましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  在宅で仕事をすることも増えていますが、Web会議もスムーズです。仕事の都合でファイルのアップロード、ダウンロードもそれなりにしますが、重くて困るようなことはありませんね。
                </p>
                <p>
                  在宅勤務ではある程度の回線速度があれば十分と考えていますし、重視していた通信の安定性に対しても、Rakuten
                  Turboの利用を始めてから不満を感じたことはありません。
                </p>
                <p>
                  動画の視聴も普通にできています。4Kの高画質動画を見ていても、ロードが途中で止まってしまうようなこともありません。今のところ、設置した場所でしっかり電波を拾っているので、安定した通信品質を得ています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。Rakuten
                  Turboを利用するにあたって楽天市場のポイント倍率のアップを理由のひとつに挙げていただきましたが、楽天市場を含む楽天経済圏をどれくらい活用されていますか※。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
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
                  楽天トラベルや楽天カードを利用しています。ほかにも楽天モバイルとRakuten
                  Turboでポイント倍率がアップしているので、楽天市場でもお買い物を楽しんでいます。
                </p>
                <p>
                  楽天カードもかなり使っていますね。日々の支払いなどは、すべてカードに集約しているほか、家族カードを親に持たせているのもあり、カードの利用に伴うポイント還元で毎月6～7,000ポイントくらい楽天ポイントを受け取っています。
                </p>
                <p>
                  楽天経済圏を活用するなら、楽天モバイルやRakuten
                  Turboは倍率が上がるのでおすすめです。
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
              楽天モバイルは使い方やライフスタイルにあわせて自動的に利用料金が変わる、シンプルな料金プランが魅力です。小澤さんのようにほとんどデータ通信を利用しない人でも、使わなければ自動的に安くなるため無駄なく最適な利用料金で高速データ通信が可能です。
            </p>
            <p>
              さらにホームルーターのRakuten
              Turboは、安定した高速データ通信を提供しているので、自宅でも思い切りインターネットが楽しめます。
            </p>
            <p>
              自宅とスマホの回線をまとめたいと思ったら、小澤さんのように楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年4月12日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <BannerHover
              href={
                '/ad/reportcard/?l-id=uservoice_68_ad_reportcard'
              }
            >
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-ad-reportcard-328-185-240315.png`}
                  width="656"
                  height="370"
                />
                <img
                  src={`${assets}img/bnr/bnr-ad-reportcard-1032-160-240315.png`}
                  alt="みんなに聞いた！楽天モバイル通信簿"
                  width="1032"
                  height="160"
                />
              </picture>
            </BannerHover>
          </div>

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

export default Uservoice68
