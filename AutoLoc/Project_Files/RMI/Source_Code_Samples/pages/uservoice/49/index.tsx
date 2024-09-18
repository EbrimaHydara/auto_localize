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

const Uservoice49: NextPage = () => {
  const pagetitle = '通信費を楽天ポイントで支払い'
  const pageHeading =
    '携帯電話の月々のお支払いは全額楽天ポイント利用！自宅の回線として活用しています'
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

  const articleNum = '49'
  const userName = '関口'

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
        description="携帯電話の利用料金は全額楽天ポイント利用！自宅の回線として活用しています（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年5月19日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「自宅のインターネット回線としてテザリングを使ってみたいけど、快適に使えるのかな？」と疑問に思う方もいるのではないでしょうか。
                </p>
                <p>
                  今回お話をうかがった関口さん（仮名）は、インターネット回線付き物件にお引っ越ししたものの、通信速度が遅くてストレスを感じていました。
                </p>
                <p>
                  そこで、ご自宅のインターネット回線を楽天モバイルのテザリング※にして、月々100GB以上データ通信を利用しながら快適にインターネットを楽しんでいます。さらに楽天経済圏※を活用して、利用料金に楽天ポイントを使うことで、生活費の節約にもつなげています。
                </p>
                <p>
                  そんな関口さんに、自宅のインターネット回線をテザリングにした詳しい経緯や、実際の通信環境について、お話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルではテザリングのオプションを無料でご利用いただけます。
                  <LinkNormal href="/service/tethering/">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                    rel="noopener"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／大阪府）"
            periodOfUse="9カ月"
            dataUseage="100～150GB 程度"
            beforeComapany="NTT ドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="テザリングをフル活用しています"
              subTitle="楽天モバイルを選んだ理由はデータ容量！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
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
                  データ使い放題※なところですね。自宅のインターネット回線としてテザリングを使っているのですが、以前利用していた携帯電話会社の60GBの料金プランではデータ容量が足りなかったんです。それが理由でデータ使い放題の楽天モバイルに乗り換えました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前から、スマホのテザリングをご自宅の固定回線として利用されていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、以前はマンションに備えつけられている無料で利用できるインターネット回線を使っていました。でも、マンション全体の共有回線であるせいか、通信速度が遅すぎて、ブラウザで
                  Webサイトを見るのもままならないくらいだったんです。
                </p>
                <p>
                  不便な状態だったので、仕方なく夫と私のスマホでテザリングを使っていたんですが、2
                  人分のデータ容量を合わせてもデータ容量が足りないと感じていました。そんなときに
                  CMで楽天モバイルを知ったんです。
                </p>
                <p>
                  CMを見た後、楽天モバイルについて調べてみました。
                  <TxtMarker as="em">
                    利用料金が安いですし、なによりデータ容量が無制限で使えることが決め手になりましたね。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。関口さんの周りには、楽天モバイルをご利用の方はどれくらいいらっしゃるのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルをおすすめしてくれた知り合いや、仕事でお客様と話題になることもあるので、周りで使っている人は結構いますね。楽天モバイルを利用している知り合いも「私が住んでいるあたりならしっかり電波が入るから大丈夫」※と後押しをしてくれたのも、乗り換えようと決めた理由のひとつです。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアに関して、
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  実際に楽天モバイルに乗り換えてから、使用感はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても快適です。
                  <TxtMarker as="em">
                    電波が安定していますし、通信速度も速くなった※ので、家のネット環境が一気に改善しました。
                  </TxtMarker>
                </p>
                <p>
                  夫のスマホやNintendo
                  Switch™をテザリングで接続しても、問題なくつながっています。たまにパソコンをつなぐこともありますが、通信速度が遅くなることもありません。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前と比べて、データ利用量はどのように変化したのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  毎月100GBを超えて、150GBくらいはデータ通信を利用するようになりました。
                </p>
                <p>
                  以前は
                  Wi-Fi®がある場所で見たい動画をまとめてダウンロードしてから視聴していましたが、今はデータ利用量を気にせずストリーミング配信の動画を見たり、スマホアプリでテレビ番組を見たりしています。
                </p>
                <p>
                  場所やデータ利用量に縛られない※ので、ストレスがなくなりました。夫にも、私のスマホにつなぐのではなく、楽天モバイルに乗り換えたらどうかとおすすめしているくらい快適です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="利用料金の支払いに楽天ポイントが使えてとても便利です"
              subTitle="楽天経済圏の活用と携帯電話料金の見直しでおトクに！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えて、経済的な効果はありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。以前利用していた携帯電話会社の利用料金が月5,000～6,000円程度だったので、今は毎月2,000円以上おトクになりました。子どもが産まれたこともあり、生活費の見直しも兼ねての乗り換えだったので、大成功だなと感じています。
                </p>
                <p>
                  それに、直接的な利用料金の節約だけでなく、SPU
                  の倍率アップ※の効果も大きいですね。私は楽天経済圏をかなり利用しているので、SPU
                  の倍率アップは効果的です。
                </p>
                <p>
                  特に楽天市場でおむつや水などのかさばるものや重いものをたくさん購入するので、
                  <TxtMarker as="em">
                    楽天ポイントがたくさん貯まって助かっています。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天ポイントはどんなことに利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    楽天モバイルの月額利用料金の支払いに使っています。
                  </TxtMarker>
                  楽天モバイルに乗り換える前は、期間限定ポイントを使い切れなくて有効期限が切れてしまうことがあったんです。でも今は楽天モバイルの利用料金に充てて、楽天ポイントですべてまかなえています。
                </p>
                <p>
                  月々の利用料金に楽天ポイントを使えて、本当に生活費が軽くなったと感じます。楽天経済圏を活用しているなら、楽天モバイルはとてもいい選択ですね。
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
              関口さんのように自宅のインターネット回線としてテザリングを思い切り活用しても、楽天モバイルならデータ使い放題※で月々最大
              3,278円（税込）なので安心です。
            </p>
            <p>
              さらに
              SPUの倍率アップで楽天市場でのお買い物ポイントも貯まりやすく、貯まった楽天ポイントを楽天モバイルの支払いに使えます。
            </p>
            <p>
              自宅のインターネット回線を見直すなら、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年5月19日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '自宅の固定回線として活用！遊びに来た孫がYouTubeを見ても余裕です',
                userInfo: '加藤さん（60代男性／福岡県）',
                img: 'avator-48.png',
                description:
                  '生活費を節約するために選びました。以前は自宅の固定回線としてケーブルテレ...',
                href: `/uservoice/48/?l-id=uservoice_${articleNum}_uservoice_48`,
              },
              {
                title:
                  'アイルランドやL.A.でもつながる！2GB無料の海外ローミングで快適',
                userInfo: '柴崎さん（仮名・20代女性／愛知県）',
                img: 'avator-47.png',
                description:
                  '私は仕事柄、何度も海外に渡航するので、1年の3分の1以上は海外にいる...',
                href: `/uservoice/47/?l-id=uservoice_${articleNum}_uservoice_47`,
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

export default Uservoice49
