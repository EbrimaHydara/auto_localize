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

const Uservoice70: NextPage = () => {
  const pagetitle = '通話に便利なRakuten Link'
  const pageHeading = '子育ての味方！Rakuten Linkの無料通話が便利です'
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

  const articleNum = '70'
  const userName = '鳥井'

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
        description="子育ての味方！Rakuten Linkの無料通話が便利です"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2024年4月26日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  子育てをしていると、保育園や幼稚園、役所や会社など、育児関係で電話をする先が増え、同時に通話料金も増えてしまったという悩みを抱えている保護者は少なくありません。
                </p>
                <p>
                  今回お話をうかがった鳥井さん（仮名）もそのひとり。増える通話料金に悩み、他社の通話し放題のオプションを利用したものの、そもそもオプション料金が高くて困っているところへ、旦那様から楽天モバイルを紹介されて乗り換えました。
                </p>
                <p>
                  楽天モバイルに乗り換えたことで、鳥井さんにどのような変化があったのか、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20 代女性・京都府）"
            periodOfUse="2023年12月ごろ"
            dataUseage="3GB未満"
            beforeComapany="povo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="紹介してもらった楽天モバイルで通話料金の悩みがすっきり解決！"
              subTitle="Rakuten Link のおかげで安心して連絡ができます"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけや経緯を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  きっかけは通話料金でした。子どもが生まれてからというもの、電話をする機会が増えたんです。
                </p>
                <p>
                  今9カ月の子がいるんですが、役所や保育園とのやり取りは基本電話なんですよ。折り返した電話でそのまま話し込んでしまうこともあり、気付けば長電話になっていることも一度や二度ではありませんでした。
                </p>
                <p>
                  そうなると気になるのが通話料金で、最初は他社の5分間通話無料オプションを付けていました。しかし5分程度だとすぐに超えてしまうので、無制限で通話かけ放題になるオプションに切り替えました。
                </p>
                <p>
                  すると、せっかく安価な料金プランの携帯電話会社を選んだのに、合計では毎月結構な金額になってしまったんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、確かに手続きや連絡事項だけでなく、相談や調べて欲しいことなどになると、電話が長くなってしまいますよね。特にお子さまのことだと、通話料金が気になるからと切り上げるわけにもいきませんよね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。携帯電話料金は下げたい、でも通話を減らすわけにはいかないという状態で悩んでいたときに教えてもらったのが、楽天モバイルでした。
                </p>
                <p>
                  オプションを含めると3,000円を軽く超える毎月の携帯電話料金に悩んでいるのを見かねた夫が「Rakuten
                  Link※を使えば、通話料金が無料になる」と教えてくれて、そんな便利なものがあるんだとびっくりしました。
                </p>
                <p>私の状況にはピッタリだったので、すぐに乗り換えたんです。</p>
                <TxtCap as="p">
                  ※Rakuten
                  Linkは無料で国内通話かけ放題をご利用いただける楽天モバイルのご契約者様専用アプリです。ただし、（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                  <LinkNormal href="/service/rakuten-link/">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  乗り換えてRakuten Linkを使ってみて、使用感はいかがですか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  すごく快適です。期待以上に音声もクリアで、しっかり通話がつながるし、途切れたりもしないので助かっています。音質には大満足ですね。
                </p>
                <p>
                  それにRakuten
                  Linkなら長時間話しても通話料金が気にならないので、たとえば折り返しの電話で、電話先で調べ物などが始まっても、イライラせずに大らかな気持ちでいられるのはとても嬉しいです。
                </p>
                <p>
                  友人や知り合い同士なら、メッセージアプリの通話などでもよかったのですが、子育てをしているととにかくおどろくほど電話をする機会が増えるので、本当に助かっています。
                </p>
                <p>
                  同じように子育て中で通話料金に悩んでいるお母さんに、子育てにこんなに便利なものがあるよ！と、楽天モバイルをどんどん紹介してあげたいですね。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天経済圏も便利！"
              subTitle="子育てをしている保護者の心強い味方です"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、通話料金以外の変化はありましたか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場のお買い物における
                  SPU※のポイント倍率が上がったので楽天経済圏※の利用が増えました。子どもが生まれてからは、子連れだと買いに行きにくい大きいものや重いものを、楽天市場のお買い物マラソン※やスーパーDEALで購入して、楽天ポイントを貰っています。
                </p>
                <p>
                  やはり小さい子どもがいると、お米やおむつは運びにくいので、楽天市場でのお買い物はとても助かっています。便利に買い物をしてたくさんポイントが貰える楽天経済圏はとてもいいですね。
                </p>
                <p>
                  お買い物マラソンでも、特にポイントが増える0と5の日を選ぶなどの工夫もしているので、大体毎月2,000ポイントくらいの楽天ポイントを受け取れています。
                </p>
                <TxtCap as="p">
                  ※2023年12月1日の条件変更により、SPUの倍率が「Rakuten
                  最強プラン」の契約で＋4倍、「Rakuten
                  Turbo」または「楽天ひかり」の契約で＋2倍になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳細はこちら。
                  </LinkNormal>
                  <br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら。
                  </LinkNormal>
                  <br />
                  ※お買い物マラソンとは、対象期間中にエントリーすることで期間中に楽天市場で
                  1,000円（税込）以上のお買い物をすると、ポイント倍率が最大10倍になります。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/marathon/guide/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  ありがとうございます。楽天市場や楽天モバイル以外に、楽天のサービスはご利用いただいていますか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  支払いに使うカードを楽天カードにしました。それから楽天モバイルを利用する前から楽天トラベルは便利に活用しています。
                </p>
                <p>
                  楽天ポイントは楽天モバイルの携帯電話料金に利用したり、楽天ペイ※でも使ったりしています。使い道が多く、期間限定ポイントを無駄なく使えるので、楽天ポイントはいいですね。
                </p>
                <p>
                  子育てをしている保護者にとって、楽天モバイルのRakuten
                  Linkや楽天経済圏は本当に助けになる心強い存在です。
                </p>
                <p>
                  同じような悩みや苦労を抱えている家族に、楽天モバイルにしたら楽になるよ、助かるよと紹介したいですね。
                </p>
                <TxtCap as="p">
                  ※楽天ペイは QR
                  コードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkNormal href="https://pay.rakuten.co.jp/">
                    詳細はこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              鳥井さんのように、子どもが生まれてから育児関係でたくさんの電話をやり取りすることが増え、通話料金に悩んでいるのなら、通話料金が発生しない
              Rakuten Link がおすすめです。
            </p>
            <p>
              育児関係の通話料金で悩んでいた鳥井さんが、旦那様からの紹介でお悩みを解消して、友人や同じような子育て世帯に紹介したいと思った楽天モバイルなら、きっと通話料金の悩みを解決できるはずです。
            </p>
            <p>
              料金プランだけでなく通話料金も見直して、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2024年4月26日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice70
