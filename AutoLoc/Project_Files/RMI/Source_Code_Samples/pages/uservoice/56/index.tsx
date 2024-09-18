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
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { articleData } from '@components/include/uservoice/uservoiceData'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice56: NextPage = () => {
  const pagetitle = '福井県でしっかりつながる！'
  const pageHeading =
    '福井県でしっかりつながる！通信速度や安定性を気にして避けていたらもったいない'
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

  const articleNum = '56'
  const userName = '上地'

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
        description="福井県でしっかりつながる！通信速度や安定性を気にして避けていたらもったいない（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年7月28日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「人口カバー率※が高いといっても、地方ではつながらないのでは？」、「サービスエリアマップではカバーされているけれど、本当に安定してつながるのか」などの不安な思いから乗り換えをためらっていませんか？
                </p>
                <p>
                  確かにデータ通信速度が制限されたり、電波が入りにくかったりすると、スマホを使うときに支障が出てしまいます。
                </p>
                <p>
                  そこで楽天モバイルは、つながりやすさをより改善するために、サービスエリアの拡大や地下駅や地下街のようなつながりにくい場所でも、スマホを快適に利用していただけるよう「Rakuten最強プランプロジェクト」を実施中です。
                </p>
                <p>
                  今回は楽天モバイルに乗り換えたら以前の携帯電話会社より快適になり、家族や友人にもおすすめしているという上地さん（仮名）に、乗り換えの経緯や実際の使い心地について、詳しくお話を伺いました。
                </p>
                <TxtCap as="p">
                  ※人口カバー率は 2023年6月時点で99.9%を突破しました。
                  <br />
                  ※人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアに関して、
                  <LinkNormal href="/area/">詳細はこちら</LinkNormal>。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性／福井県）"
            periodOfUse="8カ月"
            dataUseage="20GB程度"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ使い放題とRakuten Linkで快適になりました"
              subTitle="安すぎる利用料金の不安はすぐに払拭！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えを決めた理由を聞かせてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ使い放題※なのに、利用料金が安いのが乗り換えの決め手でした。シンプルな料金プランで、色々な料金プランを比較する必要がなくて、とてもいいですね。
                </p>
                <p>
                  実はMNP（携帯電話番号ポータビリティ）※の手続きをする前に「本当にこんなに安いの？」と不安になったんです。オプションをたくさん契約したり、家族で契約したり、色々な条件があるのではないかと疑っていました。
                </p>
                <p>
                  Webサイトや口コミを調べて、実際に店舗に行ってスタッフさんに聞いてみたら、「料金プランはひとつだけですし、便利なオプションはあるけど、必要なものだけ契約すればいいですよ」といわれて、とても安心しました。
                </p>
                <p>
                  私は仕事柄、お客様に電話をすることが多いんです。電話は短いときには数分程度で終わりますが、長いときは30分以上になることもあるので、以前は通話かけ放題のオプションを契約していました。
                </p>
                <p>
                  <TxtMarker>
                    今は国内通話が無料になるRakuten
                    Linkアプリで十分足りているので、通話料金の不安もありません。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal href="/guide/mnp/">詳細はこちら</LinkNormal>。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  Rakuten
                  Linkで通話料金を気にせず使えるのは安心ですね。楽天モバイルに乗り換えた後、スマホの使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  運転中や空いた時間に音楽を聞くことが増えました。以前利用していた携帯電話会社と比べて、とても快適にストリーミング配信を楽しんでいます。
                </p>
                <p>
                  以前は、データ容量を節約するためにWi-Fi®がある環境で事前に音楽をダウンロードして聞いていたんです。ダウンロードを忘れていたときには、自宅のWi-FiやフリーWi-Fiを接続できる場所に行くまで我慢していたのでストレスを感じていました。
                </p>
                <p>
                  ほかにも、外出先で仕事用のデータを開くときも便利になりましたね。以前は、事前にデータをダウンロードしておかないといけなかったのですが、今は楽天モバイルのテザリング接続によりクラウドストレージから直接開けるようになって仕事の効率が上がりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それは素晴らしいですね。普段の生活だけでなく、お仕事にも役立っているのですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。それに、自宅の光回線が1カ月ほど不調でつながらなくなったときも、楽天モバイルを契約しているので
                  <TxtMarker>データ容量を気にせず</TxtMarker>
                  、快適に過ごせました。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="しっかりつながる楽天モバイルを家族や友人におすすめしています"
              subTitle="地方はつながらないと避けていたら損しているかも"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご家族やご友人で、楽天モバイルを利用している方はいらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と一緒に娘も楽天モバイルに乗り換えました。親子共に楽天経済圏※を利用しているので、SPUの倍率が増える※のは本当にありがたいです。買い物でもらえる楽天ポイントの一部は、楽天モバイルの利用料金に充てたり、買い物に使ったりしています。
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
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
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
                  そうだったのですね。楽天モバイルを利用して、使い心地はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  今住んでいる場所では、問題なく電波がつながっています。むしろ以前の携帯電話会社よりもよくなったくらいですね。
                  <TxtMarker>
                    つながらない場所もなく、安定しています※。
                  </TxtMarker>
                </p>
                <p>
                  <TxtMarker>
                    以前利用していた携帯電話会社では電波が入りにくいと感じていた場所も、楽天モバイルなら安定してしっかりつながっていますね。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※実際の通信速度は環境により異なります。公平なサービスのため通信制限する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  快適にご利用いただいてなによりです。ご家族以外でも楽天モバイルを利用している方はいらっしゃいますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  地元の友人で使っている人はいないのですが、県外の友人や知人は楽天モバイルを利用している人が増えていますね。
                </p>
                <p>
                  友人たちは、楽天モバイルに先入観がある様子で「新しい携帯電話会社ってつながらないんじゃない？」とか、「田舎だから電波が入りにくいんじゃないの」と思い込んでいることが多いんです。
                </p>
                <p>
                  その思い込みを払拭するために「楽天モバイルは、ちゃんと電波が入るし安定しているよ」と話しています。
                </p>
                <p>
                  楽天モバイルの利用料金が安いことと、安定して電波がつながることはもっと広まってほしいですね。せっかく料金プランが安い楽天モバイルがあるのに、電波が安定してつながらないと思い込んでいるともったいないと思います。
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
              楽天モバイルはシンプルなワンプランで、毎月のデータ容量を気にする必要がありません。
            </p>
            <p>
              大都市圏だけでなく、地方でも電波が安定してつながるという声を多数いただいており、サービスエリアが広がり続けています。
            </p>
            <p>
              「自分の地域ではつながらないかもしれない」と不安になっている方は、サービスエリアマップをチェックして、楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※楽天モバイルのエリアについて、
              <LinkNormal href="/area/">詳細はこちら</LinkNormal>
              。<br />
              ※本コンテンツは、ユーザー個人の実体験にもとづくものです。ほかのユーザーとの見解について必ずしも一致しない場合もあります。
              <br />
              ※当ページの内容は
              2023年7月28日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

export default Uservoice56
