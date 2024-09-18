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
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice38: NextPage = () => {
  const pagetitle = 'スマホとモバイルWi-Fi 2回線活用'
  const pageHeading =
    '2回線契約で合計160GB！スマホとモバイルWi-Fiで活用しています'
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

  const articleNum = '38'
  const userName = '野村'

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
        description="スマホとモバイルWi-Fi 2回線活用！データ無制限でヘビーユーザーでも容量を気にせず思い切り使える！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年11月2日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「データ使い放題の料金プランを検討してみたけど、月々の利用料金が高い」、「自宅に光回線を引けないから、データ使い放題の料金プランを契約して自宅のインターネット回線として使いたい」と検討している方は多いのではないでしょうか。
                </p>
                <p>
                  「データ容量が大きい料金プランを契約してもギガを使い切ってしまうから、無制限じゃないと困る」というヘビーユーザーの方にとって、データ使い放題と利用料金の安さを両立させる料金プランを探すのは大変です。
                </p>
                <p>
                  そこで今回は、データ使い放題※の楽天モバイルを2回線契約して毎月160GBも利用している野村さん（仮名）に、データヘビーユーザーならではのお話を詳しくお聞きしました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性・兵庫県）"
            periodOfUse="2年1カ月"
            dataUseage="2回線合計160GB以上"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="楽天モバイルに乗り換えてデータ利用量が3倍に増えました"
              subTitle="データ容量50GBでも足りなかったヘビーユーザー！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
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
                  利用料金の高さや、月々のデータ容量が足りないことに悩んでいたのが理由です。
                </p>
                <p>
                  以前の携帯電話会社では、データ容量を50GBまで利用できる料金プランを契約していたのですが、月末にはいつもデータ容量が足りなくなっていました。
                </p>
                <p>
                  そこで、携帯電話会社を乗り換えようと考えて、いくつか他社のデータ使い放題の料金プランを比較したんです。その中でも楽天モバイルが圧倒的な安さだったので、乗り換えを決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。今はどれくらいデータ容量を消費されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  今は70～80GBくらい使っています。時々それ以上になることもありますね。
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えてからは、データ容量を気にせず使える※ので、以前よりも動画を楽しんだり、音楽を聞いたりするようになりました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  かなりデータ容量を使っていらっしゃるのですね。ご自宅ではWi-Fiに接続しているのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、自宅には光回線を引いていないんです。寮に住んでいるので、光回線を引くための条件がややこしく、長く暮らす予定もないので、光回線を契約しませんでした。
                </p>
                <p>
                  その代わり、自宅用のインターネット回線として楽天モバイルをもう1回線契約して、モバイルWi-Fiルーターを使っています。
                </p>
                <p>
                  自宅用の回線も毎月70～80GBくらい利用しているので、
                  <TxtMarker as="em">
                    2回線合計で160GB以上になるときもありますね。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社と比較すると、データ利用量がかなり増えましたね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、大体3倍以上は使っています。2回線契約しているので、毎月合計6,556円（税込）かかりますが、光回線やほかのデータ使い放題の料金プランを契約するよりも、トータルでは安くなっていると思います。
                </p>
              </Interviewee>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <img
                  src={`${assets}img/uservoice/38/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="貯めて増やして、現在8万ポイントに！"
              subTitle="楽天モバイルを選んだもうひとつの理由はポイ活！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  データ通信をたくさん使えておトクになることが乗り換えの大きな理由であるとのことでしたが、ほかに決め手になった要素はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルを利用する前から楽天経済圏※を活用していたので、SPU※の倍率が増えるのが魅力でした。
                </p>
                <p>
                  普段から楽天市場や、楽天銀行、楽天カード、楽天証券などを利用しているので、楽天モバイルを契約してSPUの倍率が増えたら、さらに効率良く楽天ポイントが貯まるだろうなと思ったんです。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    SPU（スーパーポイントアッププログラム）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>現在SPUの倍率は何倍になっていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  今、通常のSPU倍率は
                  6.5倍になっています。月によっては楽天ビューティや楽天ブックス、楽天トラベルなども利用するので、さらにSPU倍率が加算されますね。
                </p>
                <p>
                  <TxtMarker as="em">
                    ダイヤモンド会員※なので、毎月18日には楽天市場での買い物で楽天ポイントが4倍になります。楽天モバイルを利用していると、さらにポイント倍率が加算されるので、かなりおトクです。※
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天ポイントの会員ランクについて、
                  <LinkIconAfter
                    href="https://point.rakuten.co.jp/guidance/rankkeep/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※2022年11月1日(火)から、楽天モバイルのSPUが最大＋3倍でさらにおトクになりました。
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_38_campaign_spu">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  楽天のサービスをたくさんご利用いただいているのですね。毎月どれくらいの楽天ポイントを受け取っていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  通常ポイントと期間限定ポイントをあわせて、毎月1万～2万ポイントくらいもらっています。
                </p>
                <p>
                  その内、通常ポイントはすべてポイント運用※に回して、こつこつと増やしているんです。短期的に増減することはありますが、長期的に見るとゆるやかに増えていて、
                  <TxtMarker as="em">
                    今は8万ポイントほど貯まっています。
                  </TxtMarker>
                </p>
                <p>
                  期間限定ポイントは、さまざまな支払いに使っていて、楽天モバイルの利用料金の支払いにも使っています。実際にかかっている利用料金は月々6,556円（税込）よりも安くなっています。
                </p>
                <TxtCap as="p">
                  ※ポイント運用について、
                  <LinkIconAfter
                    href="https://point.rakuten.co.jp/invest/introduction/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  8万ポイントを貯めるのはすごいですね。楽天モバイルの契約は、楽天経済圏のポイント増加に効果的だったと感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天モバイルに乗り換えたおかげで、ポイ活が加速しています。
                  <TxtMarker as="em">
                    楽天ポイントも含めたおトク感は、ほかの携帯電話会社にはない魅力
                  </TxtMarker>
                  ですね。
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
              データ容量をたくさん使うヘビーユーザーにとって、データ残量不足は悩みの種です。その点、楽天モバイルならデータ使い放題※なので、思い切り使っても制限がありません。
            </p>
            <p>
              データ使い放題になるだけでなく、楽天モバイルを契約していると楽天市場のお買い物で楽天ポイントが最大＋3倍※のボーナスが付き、たくさんもらえる楽天ポイントを利用料金のお支払いにも活用できます。
            </p>
            <p>
              ポイント運用でおトクにデータ使い放題を楽しんでいる野村さんのように、あわせて使うほどおトクな楽天グループのサービスと楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※ポイント上限あり。期間限定ポイントでの付与となります。
              <br />
              ※当ページの内容は2022年11月2日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'SNSの動画を見放題！データ無制限でギガ不足から解放されました',
                userInfo: '矢部さん（仮名・20代女性／神奈川県）',
                img: 'avator-37.png',
                description:
                  '社会人になると同時に、自分で携帯電話料金の支払いをすることになった...',
                href: '/uservoice/37/?l-id=uservoice_38_uservoice_37',
              },
              {
                title:
                  'Rakuten Linkの無料通話がとっても便利！毎日利用しています',
                userInfo: '島田さん（仮名・40代女性／千葉県）',
                img: 'avator-36.png',
                description:
                  '楽天モバイルのプラン料金が安いことと、近くに店舗があることです...',
                href: '/uservoice/36/?l-id=uservoice_38_uservoice_36',
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

export default Uservoice38
