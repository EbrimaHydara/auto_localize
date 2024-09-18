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

const Uservoice50: NextPage = () => {
  const pagetitle = '大学生にうれしいプラン料金'
  const pageHeading =
    '複数回線から楽天モバイル 1 本へ！大学生にうれしい料金で大満足'
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

  const articleNum = '50'
  const userName = '清水'

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
        description="複数回線から楽天モバイル 1 本へ！大学生にうれしい料金で大満足（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年5月26日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホの利用料金を自分で払うことになったけど、データ容量は妥協したくない」とお悩みの大学生の方も多いのではないでしょうか。
                </p>
                <p>
                  今回お話をうかがった大学生の清水さん（仮名）は、サブ回線として契約していた楽天モバイルをメイン回線にすることで、データ通信量を気にせず使えるようになりました。現在は、携帯電話の月々のお支払いに全額楽天ポイントを使っておトクに利用されています。
                </p>
                <p>
                  楽天モバイルに乗り換えてから快適に利用されている清水さんに、大学生から見た楽天モバイルの良さについて詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／神奈川県）"
            periodOfUse="2年5カ月"
            dataUseage="40GB 程度"
            beforeComapany="ahamo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えを決めた理由はデータ容量"
              subTitle="サブ回線からメイン回線へ！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを契約した経緯を教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>過去に1年間無料キャンペーンをしていたことがきっかけです。</p>
                <p>
                  もともと、スマホを使い始めた当初は、家族全員でデータ容量を分け合う料金プランを利用していました。その後、家族全員が違う料金プランに乗り換えるタイミングで、オンラインブランドに乗り換えたんです。
                </p>
                <p>
                  ただ、乗り換えた後、楽天モバイルが1年間無料キャンペーン※をしているのを知り、「メイン回線をオンラインブランド、サブ回線を楽天モバイルにしてみよう」と思って、サブ回線として楽天モバイルのデータ通信を利用していました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT の 1 年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。その状態からメイン回線を楽天モバイルに乗り換えた理由はなんですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>一番大きな理由は、データ容量が不足していたことですね。</p>
                <p>
                  メイン回線は別の携帯電話会社の料金プランを契約し、20GBの制限の中で利用していました。しかし、データ容量の上限に限界を感じたので、MNP（携帯電話番号ポータビリティ）※でメイン回線を楽天モバイルに乗り換えたんです。
                </p>
                <TxtCap as="p">
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal
                    href={`/guide/mnp/?l-id=uservoice_${articleNum}_guide`}
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。1年間無料キャンペーンでお試しいただいて、楽天モバイルのデータ通信の品質はよくご存じだと思いますが、1年前と比較して変化は感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前から通信速度や電波は安定していますし、最近はもっとつながりやすくなったと感じます※。
                  <TxtMarker as="em">
                    以前利用していた携帯電話会社と比較しても、遜色ない通信速度と安定感があります。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。主にどんなアプリを利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Instagram や YouTube
                  が多いですね。楽天モバイルに乗り換えてから、電車移動中も動画を見る機会が増えました。ほかにも、動画や写真を
                  SNS にたくさんアップロードするようになりました。
                </p>
                <p>
                  以前は、なるべく
                  Wi-Fi®が使える場所でスマホを使うようにしていたのですが、今は場所を気にせずデータ通信を利用しています。
                  <TxtMarker as="em">
                    データ容量の制限がなくなった※ので、移動中も気にせず動画を楽しむようになり、ストレスがなくなったのを実感しています。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  場所を気にせず、インターネットを利用できるのはうれしいですね。データ容量以外で乗り換えのメリットを感じる部分はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ利用量に応じて、利用料金が変わることですね。バイトのシフトに入れる回数が増えたり減ったり、金銭的な面で波があるので、余裕がない月はあまりデータを使わないようにして利用料金を抑えられるのがうれしいです。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="毎月料金の支払いには楽天ポイントを使っています"
              subTitle="楽天ポイントを利用できて便利！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外に、楽天グループのサービスはご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天銀行や楽天カードを使っています。それから、楽天市場での買い物も多いですね。楽天経済圏※をかなり活用しています。
                </p>
                <p>
                  特に楽天市場では、多い月は
                  40,000～50,000円の買い物をすることがあるので、楽天モバイルを契約しているともらえる楽天ポイントが増える※のもうれしいです。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※2022年11月1日の条件変更により、SPU
                  の倍率が「楽天モバイル＋会員ランク特典で最大＋3
                  倍」になりました。
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
                <p>毎月どれくらい楽天ポイントを受け取っていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  期間限定ポイントを含めて、毎月4,000～5,000ポイントくらいですね。
                  <TxtMarker as="em">
                    楽天モバイルは利用料金の支払いに楽天ポイントを使えるので、全額楽天ポイントでまかなっています。
                  </TxtMarker>
                </p>
                <p>
                  期間限定ポイントも支払いに利用できるので、期限までに使い切れなくて余らせたり、失効したりすることもありません。楽天ポイントを支払いに充てられるのも、使えるお金に制約がある大学生にはありがたいですね。
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
              清水さんのように自分でスマホ代を支払うようになった大学生にとって、利用したデータ容量によって利用料金が変わる楽天モバイルの料金プランは、毎月の余裕にあわせて自分で料金を調節できるメリットがあります。
            </p>
            <p>
              また、楽天ポイントを月々の利用料金に補填できるので、高速なデータ通信回線をおトクに利用できます。
            </p>
            <p>
              たくさんデータ通信を利用したいけれど、利用料金やデータ容量の制限で我慢しているなら、楽天経済圏の利用と楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年5月26日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '携帯電話の月々のお支払いは全額楽天ポイント利用！自宅の回線として活用しています',
                userInfo: '関口さん（20代女性／大阪府）',
                img: 'avator-49.png',
                description:
                  'データ使い放題※なところですね。自宅のインターネット回線としてテザリング...',
                href: `/uservoice/49/?l-id=uservoice_${articleNum}_uservoice_49`,
              },
              {
                title:
                  '自宅の固定回線として活用！遊びに来た孫がYouTubeを見ても余裕です',
                userInfo: '加藤さん（60代男性／福岡県）',
                img: 'avator-48.png',
                description:
                  '生活費を節約するために選びました。以前は自宅の固定回線としてケーブルテレ...',
                href: `/uservoice/48/?l-id=uservoice_${articleNum}_uservoice_48`,
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

export default Uservoice50
