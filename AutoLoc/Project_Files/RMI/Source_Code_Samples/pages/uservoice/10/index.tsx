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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice10: NextPage = () => {
  const pagetitle = '乗り換えでライフスタイルが激変'
  const pageHeading =
    '家でも外でも楽天モバイルとずっと一緒。いつでも動画が楽しめる'
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

  const articleNum = '10'
  const userName = '梅田'

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
        description="楽天モバイルのデータ使い放題でライフスタイルが大きく変わった（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年2月14日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「好きな動画や音楽を楽しみたいけれど、ストリーミングはデータ容量の消費が心配」というお悩みはありませんか。
                </p>
                <p>
                  今回は、楽天モバイルのデータ使い放題※でライフスタイルが大きく変わったという梅田さん（仮名）にお話を伺いました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／東京都）"
            periodOfUse="1年4カ月"
            dataUseage="40GB以上"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="いつでも安心して動画や音楽を楽しめる"
              subTitle="楽天モバイルへの乗り換えでライフスタイルが大きく変化"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場に掲載されていた楽天モバイルのバナーがきっかけです。
                </p>
                <p>
                  私は楽天のダイヤモンド会員で楽天市場を利用する頻度が高く、よく目にしていたので気になっていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ダイヤモンド会員ということは、かなり楽天のサービスをご利用いただいていますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天モバイルを契約すると、
                  <TxtMarker as="em">
                    楽天市場でのお買い物が+1倍にポイントアップ※
                  </TxtMarker>
                  するのが、乗り換えの一番の決め手でした。
                  <br />
                  特に楽天市場を頻繁に使っているので、+1倍はかなりの影響があります。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限有り。詳しくは
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
                  ポイント以外だと、乗り換え前と比べてどのような違いを感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">データ使い放題※がとても魅力的</TxtMarker>
                  です。
                  <br />
                  以前は月5GB程度までのデータ容量が少ないプランを契約していたので、スマホではあまりデータ通信ができませんでした。追加でモバイルルーターを契約して、スマホを接続し、足りない容量は補っていました。
                </p>
                <p>
                  楽天モバイルに乗り換えてからは、モバイルルーターの使用頻度は大分下がっています。以前は便利でしたが、荷物が多くなりますし、料金も余計にかかるので今は少しもったいなく感じています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルに乗り換えたのはいつ頃でしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  一昨年の6月頃ですね。プラン料金1年無料キャンペーン※の適用期間が終了した後も、
                  <TxtMarker as="em">
                    ライフスタイルが変わるほど楽天モバイルのデータ使い放題に魅力を感じている
                  </TxtMarker>
                  ので、継続して利用しています。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  データ使い放題にご満足いただいているようで良かったです。データ通信は普段どのようなことに利用していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  動画配信サービスで、映画やドラマを見ています。休日にはドラマを100話連続で見ることもあります。平日は好きな動画配信者のライブ配信をよく見ていますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  「ライフスタイルが変わるほど」とおっしゃっていましたが、どんな変化がありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前はデータ容量を気にして、動画や音楽の視聴を控えていましたが、データ使い放題になったことで、有料の配信サービスも契約したりして、思い切り楽しめるようになりました。
                </p>
                <p>
                  インターネットラジオもスマホで聞いているので、以前と比較すると常に音に包まれた生活をしています。
                  <TxtMarker as="em">
                    以前の契約プランではできなかったこと
                  </TxtMarker>
                  ですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>制限なくエンタメを楽しめているようですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  残りのデータ容量を気にするストレスから解放され、家でも外でもスマホを頻繁に使うようになりました。
                </p>
                <p>
                  以前はわずかなデータ容量の消費さえ気になって、地図アプリを見ることすら躊躇していましたが、今は遠慮なく使っています。
                  <br />
                  軽井沢の高原や富士五湖へ行った時も、私が率先して地図を見たり観光情報を調べたり重宝しました。
                </p>
                <p>
                  通勤時にもスマホをよく使います。
                  <br />
                  <TxtMarker as="em">
                    楽天モバイルをフル活用して、スマホが手放せない
                  </TxtMarker>
                  という感じですね。モバイルルーターに繋ぐ手間もなくなりました。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルのテザリングを使えば、もっとおトクになる"
              subTitle="モバイルルーターの代わりに"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  モバイルルーターの使用頻度が下がっているとのことですが、今後も併用していく予定ですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  パソコンを使う時にたまにインターネットに繋ぐので、まだしばらくは残すつもりです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  パソコンをインターネットに接続する際に、楽天モバイルのテザリングを利用するのはいかがでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>テザリングは申し込みをしなくても使えますか？</p>
              </Interviewee>

              <Interviewer>
                <p>
                  はい、楽天モバイルのテザリングはお申し込みも手続きも、追加料金も不要で、すぐにご利用いただけます。
                </p>
                <TxtCap as="p">
                  ※テザリングのご利用方法について
                  <LinkNormal
                    href={`/guide/tethering/?l-id=uservoice_${articleNum}_guide_tethering`}
                  >
                    詳しくはこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  え！ということは、家や外でもパソコンをインターネットに接続する際は、
                  <TxtMarker as="em">
                    楽天モバイルのテザリングを使えば、モバイルルーターは不要
                  </TxtMarker>
                  ですね…。
                </p>
                <p>
                  てっきりテザリングは申し込まないと使うことができないサービスなのかと思っていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルにデータ通信を集約すれば、モバイルルーターを持ち歩かなくて済みますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  荷物が軽くなりますし、モバイルルーターを解約すれば今よりももっと節約できるので、いいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  是非テザリング利用もご検討ください。本日は貴重なお声をお聞かせいただき、ありがとうございました。
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
              楽天モバイルではテザリングはお申し込み不要、無料でご利用いただけます。
            </p>
            <p>
              スマホもパソコンもインターネットにおトクに接続したいと考えている方は、モバイルルーターの代わりとしても利用できる楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年2月14日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '家計の見直しでスマホを乗り換え。楽天経済圏で年30万円の節約',
                userInfo: '中川さん（仮名・30代男性／東京都）',
                img: 'avator-09.png',
                description:
                  'モバイルWi-以前の携帯電話会社の2年契約縛りが終...',
                href: `/uservoice/09/?l-id=uservoice_${articleNum}_uservoice_09`,
              },
              {
                title:
                  'モバイルWi-Fiルーターでデータ無制限！外出先の仕事に便利',
                userInfo: '向谷さん（仮名・30代女性／神奈川県）',
                img: 'avator-08.png',
                description: 'モバイルWi-Fiルーターの買い替えを考...',
                href: `/uservoice/08/?l-id=uservoice_${articleNum}_uservoice_08`,
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

export default Uservoice10
