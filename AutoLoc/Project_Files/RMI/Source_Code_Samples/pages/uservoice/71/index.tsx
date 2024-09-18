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
import { LinkIconAfter } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { articleData } from '@components/include/uservoice/uservoiceData'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`
const Uservoice71: NextPage = () => {
  const pagetitle = '沖縄全土でつながる電波 評判・口コミ'
  const pageHeading = '沖縄全土でつながる！ドライブ中もずっと安心でした'
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

  const articleNum = '71'
  const userName = '須沢'

  type InterviewImg = {
    directory: string
    param: string
    subInterviewUser: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: 'yymmdd', // yymmdd,
    subInterviewUser: '2',
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)
  const articleNoNum = Number(articleNum)
  const readMoreInterviewsData = articleData.filter(
    v => v.id === `${articleNoNum - 1}` || v.id === `${articleNoNum - 2}`,
  )

  console.log(interviewImg.directory, 'interviewImg.directory')

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="沖縄全土でつながる！ドライブ中もずっと安心でした"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年5月2日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  月々の携帯電話料金を負担に感じ、そろそろ料金プランを見直そうと思っても、乗り換えたら通信環境が悪くなってしまうのではないかと思い、迷ってしまうことは珍しくありません。
                </p>
                <p>
                  エリアマップではカバーされていても、自分が暮らしている場所で本当につながるのかと不安になるのは仕方のないことです。
                </p>
                <p>
                  そこで今回は、以前から沖縄全土をドライブしているという須沢さん（仮名）に、楽天モバイルへの乗り換えによって携帯電話料金の負担が一気に軽くなった経験や、ドライブ中の電波状況について、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性・沖縄県）"
            periodOfUse="2023年10月ごろから"
            dataUseage="10GB程度"
            beforeComapany="KDDI（沖縄セルラー）"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えと同時に楽天経済圏の利用も始めました"
              subTitle="料金の見直しで半額以下に！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけや理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  一番の大きな理由は携帯電話料金です。スマホデビューをしてからずっと契約していた携帯電話会社の料金プランと比較して、月々のデータ利用料が半額以下になる圧倒的安価な料金プランに魅力を感じたのが決め手でした。
                </p>
                <p>
                  僕のデータ利用量は大体毎月10GB程度なのですが、当時契約していた料金プランだとデータ利用量の上限までかなり余裕があったんです。しかし、プラン変更しようと思ってもデータ利用量の上限が低い料金プランだとほんの数GB程度しか使えずちょうどいい料金プランがなかったんです。
                </p>
                <p>
                  かといって、使わずに余るほどのデータ利用量の契約を続けるのもどうかな……と考えていたところ、楽天モバイルと出会ったので乗り換えたというわけです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>他社との比較検討はされましたか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  もちろん乗り換える前に、ほかの携帯電話会社や格安スマホもいろいろと調べて比較し、検討を重ねました。
                </p>
                <p>
                  楽天モバイルショップにも足を運んで、直接R
                  CREWに質問したり料金プランや口コミなどの情報収集をしたりしたうえでじっくりと考えたのですが、やはり楽天モバイルがもっともコストパフォーマンスに優れると感じ、乗り換えようと決めたんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。徹底比較した結果だったようですね。楽天モバイルではどのような質問をされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  正直にいうと、通信品質やサービスエリアに不安がありました。僕はドライブが趣味で沖縄の全土を訪れているのですが、那覇市ではつながってもほかの場所はつながらないのでは困ってしまいます。
                </p>
                <p>
                  そこで楽天モバイルショップであれこれ質問したんですが、不安なことや疑問点に丁寧に答えてもらって安心できたし、懸念が解消したので乗り換えを決められたのもありますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。楽天モバイルのコストパフォーマンスに魅力を感じたうえで、通信品質も安心できたというのが決め手のようですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。それに、楽天モバイルに乗り換えを決めたもうひとつの理由は、楽天経済圏です※。
                </p>
                <p>
                  前々からポイ活に興味があったので、楽天モバイルに乗り換えるのを楽天経済圏利用のきっかけにしようと思ったんです。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                    rel="noopener"
                  >
                    詳細はこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天経済圏の利用を開始して、順調にポイ活ができていますか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、実際に始めてみるといろいろな楽天のサービスに関心が高まりました。楽天モバイルを中心にいろいろなサービスを利用していますが、特に楽天トラベルはよく使います。
                </p>
                <p>
                  ポイント還元率が高いプランや宿を選ぶことで大量の楽天ポイントが獲得できるので、旅行の予約では楽天トラベルを積極的に利用しています。毎月大体4,000～5,000ポイント程度の楽天ポイントを受け取っていますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天ポイントはお買い物時にご利用いただくほかに、ポイント運用をして増やしたり、楽天証券でポイント投資に利用したりできることはご存じですか※。
                </p>
                <TxtCap as="p">
                  ※運用しているポイントは、引き出して通常ポイントとして使えます。引き出す際に「ポイント数指定」を選択した場合、引き出せるポイントは運用ポイント数の90%までになります。
                  <br />
                  ※本サービスはポイントによる投資の疑似体験であり、本サービスの利用によってユーザーが金融商品を購入し、金融商品の受益権を有するものではありません。
                  <br />
                  ※ポイント投資は楽天証券が提供する金融商品です。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんですか！今まではお買い物や旅行にそのまま使っていました。今後は積み立てを含め、増やす方向で運用してみようと思います。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="沖縄全土のどこでもつながります"
              subTitle="趣味のドライブでも大活躍！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ドライブが趣味とおっしゃっていましたが、楽天モバイルに乗り換えてみて、ドライブや外出先での使用感に変化はありましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  運転中に音楽をかけているのですが、どこをドライブしていても途切れることもなく、以前と変わらない通信品質で満足しています。
                </p>
                <p>
                  那覇市から沖縄全土をドライブしていますが、どこでもつながるので、乗り換え時に感じていた不安や懸念は完全に払拭されました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>それはなによりです。ドライブが一層楽しめそうですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、しっかりつながってデータ通信も十分な速度が出ているし、安心して使えるのを実感しています。
                </p>
                <p>
                  実は4月からは東京で仕事に就く予定なのですが、すでに面接などで数度足を運んだときもしっかりつながっていたので、新生活も安心しています。沖縄でも東京でもつながるし、使い勝手がよくてとてもいいですね。
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
              大容量のデータが使える料金プランでは価格が高い。しかし、データ容量が少ない料金プランでは足りなくなってしまうといった悩みを抱えている人は珍しくありません。
            </p>
            <p>
              そんな悩みを持っている人も、須沢さんのように料金プランや携帯電話会社を見直してみると、驚くほど携帯電話料金が変わることがあります。
            </p>
            <p>
              楽天モバイルなら沖縄全土でもしっかりつながるだけでなく、東京などの首都圏でも安心してご利用いただけます。
            </p>
            <p>
              毎月の携帯電話料金を節約して、必要なデータ容量をおトクな利用料金で。今すぐ楽天モバイルの料金プランをチェックして、賢く節約しましょう！
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年5月2日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice71
