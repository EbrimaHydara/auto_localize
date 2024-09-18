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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice44: NextPage = () => {
  const pagetitle = 'Z世代のスマホ利用にぴったり'
  const pageHeading =
    'Z世代のスマホ利用にぴったり！動画や写真共有も楽々で大満足'
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

  const articleNum = '44'
  const userName = '金田'

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
        description="スマホの使い方に応じてプラン料金が変わるのがメリット！データ通信速度も気にせず自分のペースで使えるのが魅力的（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年2月3日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  データ容量を使い切ったときの通信速度の遅さに、イライラした経験はありませんか？かといって節約しても、微妙に余ってしまいもったいないと結局ストレスの原因になることも。
                </p>
                <p>
                  金田さん（仮名）も、データ残量が気になっていましたが、データ無制限※の楽天モバイルに乗り換えたことで動画視聴はもちろん、SNSの閲覧や旅行先での写真共有など、さまざまなことにスマホを利用されています。
                </p>
                <p>
                  今回は、金田さんにZ世代ならではのスマホ利用や、楽天モバイルのメリットについて詳しくお聞きしました。
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
            periodOfUse="7カ月"
            dataUseage="3～40GB程度"
            beforeComapany="ahamo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えたら使い方が自由になって気持ちがとっても楽に"
              subTitle="20GBの壁がストレスだった！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  金田さんが楽天モバイルに乗り換えようと思った理由やきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社のデータ容量が足りなかったことです。
                </p>
                <p>
                  データ容量の上限が月20GBの料金プランを契約していたのですが、Instagramのリールを良く見るので、毎月データ容量が足りなくなり、データ通信速度が遅くなってストレスを感じていました。
                </p>
                <p>
                  そんな状況だったので、月末にデータ利用量が20GBを超えないように、計画的にデータ容量を使わなければと節約していました。でも結局末日にデータ容量が余ると、それはそれでもったいなくて、どうにかしたいと思っていたんです。
                </p>
                <p>
                  以前の携帯電話会社は、20GBで2,970円（税込）の料金プランしかない※のも、仕方ないのかなと思っていました。そんなとき、
                  <TxtMarker as="em">
                    Instagramで節約情報を紹介している方がおすすめしていて、こんなサービスがあったんだ！と楽天モバイルを見つけた
                  </TxtMarker>
                  のがきっかけでした。
                </p>
                <TxtCap as="p">※データ量追加のオプションあり。</TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  SNSを通じて、楽天モバイルを知っていただいたのですね。情報を知って、すぐに乗り換えられたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社の利用料金の締め日が月末だったので、月末までに料金プランや手続き方法など、楽天モバイルについて調べてから乗り換えました。
                </p>
                <p>
                  楽天モバイルに乗り換えるときは、Webサイトから手続きをしたのでとてもスムーズで簡単でしたね。※
                </p>
                <TxtCap as="p">
                  ※楽天モバイル対応のeSIM対応製品でアプリからeKYCで申し込んだ場合。SIMフリーの製品でない場合、SIMロック解除が必要です。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、以前の携帯電話会社で感じていたストレスは解消されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えてからしばらくは、データ利用量の上限がなくなった※ことに大喜びして、Instagramのリールをたくさん見たり、動画を見たり、思い切り楽しみました。
                </p>
                <p>
                  一応20GBを超えないようにしようかな…とデータ利用量を気にしていたのですが、一度超えてしまってからは、もう良いか！と思って、大胆に使っていましたね。多い月は40GBくらい使っていました。
                </p>
                <p>
                  さすがに40GBは使いすぎかなと思い、今月は3GB未満になるように節約しています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルは、以前の携帯電話会社と比較してどこが良いと感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  利用料金はもちろん、使い方の自由度が高いところが魅力だと思います。20GBを超えてもデータ通信が遅くならないことや、データ利用量が余ってしまってはもったいないと気にしなくて良いのがうれしいですね。
                </p>
                <p>
                  20GBを超えても月額最大3,278円（税込）ですし、節約して3GB未満にすれば1,078円（税込）と、
                  <TxtMarker as="em">
                    自分のスマホの使い方に応じてプラン料金が変わるのが、一番強く感じたメリット
                  </TxtMarker>
                  です。※
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="自分のペースで使えるのが魅力的"
              subTitle="友達と旅行の写真を送り合っても安心！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  スマホの使い方の自由度や、データ容量無制限に魅力を感じていただいていますが、それを一番実感したエピソードをお聞かせください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  自分が楽天モバイルの利用を始めておすすめしたことで、同じく乗り換えた友人と一緒に、乗り換えキャンペーン※でもらった楽天ポイントを使って山奥に旅行に行ったんです。
                </p>
                <p>
                  山の中でも結構電波が入る※ので不便は感じませんでしたし、なにより
                  <TxtMarker as="em">
                    データ容量を気にしなくて良い※ので写真や動画をすぐにシェアできた
                  </TxtMarker>
                  のがとてもうれしかったですね。
                </p>
                <p>
                  以前契約していた携帯電話会社では、写真や動画を送ろうとするときにデータ容量の残りが20GBぎりぎりだと「帰ってから送るね！」と友人に言わなければならなかったんです。
                </p>
                <TxtCap as="p">
                  ※ 定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_44_campaign">
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在の
                  <LinkNormal href="/area/?l-id=uservoice_44_area">
                    サービスエリア
                  </LinkNormal>
                  はサービスエリアマップでご確認ください。
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。ご旅行となると、楽天トラベルは頻繁に利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天トラベルのほかにも、楽天経済圏※を利用しているので、サービスを使うほどポイント倍率が上がる※楽天モバイルはとっても便利です。
                </p>
                <p>
                  ネット通販は基本的に楽天市場を利用して、貯まった楽天ポイントは楽天トラベルで予約するときに使って、友人と旅行に行っています。
                </p>
                <p>
                  普段の生活でも、旅行先でも、楽天モバイルのおかげで思い切り楽しめるようになって本当に良かったです。
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
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_44_campaign_spu">
                    詳細はこちら
                  </LinkNormal>
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
              楽天モバイルなら、データ容量を思い切り使いたい※ときも、節約したいときも、データ利用量に応じてプラン料金が決まるため、自分のライフスタイルに合わせたサービスを利用したいＺ世代のスマホ利用にもぴったりです。
            </p>
            <p>
              ストレスから解放された金田さんのように、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年2月3日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '家族全員で乗り換え！シンプルなワンプランでスマホ代も安心',
                userInfo: '小林さん親子（仮名・40代女性／10代男性／三重県）',
                img: 'avator-43.png',
                description:
                  '高齢の両親が契約していた料金プランには元々割引がついていたのですが...',
                href: '/uservoice/43/?l-id=uservoice_44_uservoice_43',
              },
              {
                title:
                  '息子が小学5年生でスマホデビュー！ゲームや動画を楽しんでいます',
                userInfo: '立岡さん親子（仮名・40代女性／10代男性／愛媛県）',
                img: 'avator-42.png',
                description:
                  '家族全員の携帯電話料金が、かなり生活費の負担になっていたので、料金...',
                href: '/uservoice/42/?l-id=uservoice_44_uservoice_42',
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

export default Uservoice44
