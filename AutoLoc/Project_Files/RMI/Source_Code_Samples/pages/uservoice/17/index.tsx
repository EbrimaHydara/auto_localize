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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { YoutubePremiumBnr } from '@components/include/uservoice/YoutubePremiumBnr'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice17: NextPage = () => {
  const pagetitle = '家族割よりもおトクに乗り換え'
  const pageHeading = '家族全員で楽天モバイルに乗り換え！家族割よりもおトクです'
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

  const articleNum = '17'
  const userName = '田丸'

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
        description="家族割を加味しても楽天モバイルの方が安く、総合的に見て楽天モバイルが一番良いと考えました。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年4月8日"
            readTime="3"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話会社を選ぶ時、「子どものスマホの契約はどうしよう」「家族全員がおトクに利用できる料金プランはどれだろう」と悩むこともあるのではないでしょうか。
                </p>
                <p>
                  今回は、家族全員が楽天モバイルに乗り換えた田丸さん（仮名）と高校生の息子さんに、楽天モバイルを選んだ理由を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName="田丸さん親子（仮名）"
            userNameCustom={true}
            userBasicInfo="（40代／10代男性／東京都）"
            periodOfUse="父：1年1カ月／長男：2カ月"
            dataUseage="父：5～10GB未満／長男：5GB程度"
            beforeComapany="父：au／長男：格安スマホ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="家族割よりも家族全員が楽天モバイルを利用する方がおトクだった"
              subTitle="スマホの買い替えに合わせて乗り換え"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選ばれた経緯をお聞かせください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前ガラケーをスマホに変更したら、データ通信が月に1GBまでしか使えない契約になってしまいました。1GBだとすぐに使い切ってしまい、メール確認くらいしかできなくなるので困っていた時に、テレビCMで楽天モバイルのプラン料金1年無料キャンペーン※を知りました。楽天モバイルならデータ使い放題※でデータ容量不足の悩みも解決できますし、自宅近くに店舗があるので、困ったときに相談できることも後押しになり、乗り換えました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  自分は格安スマホを利用していたんですが、使っていたスマホの調子が悪くなったタイミングで、家族みんなが使っている楽天モバイルに乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  お二人以外のご家族も楽天モバイルを利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、
                  <TxtMarker as="em">
                    家族全員が楽天モバイルを使っています。
                  </TxtMarker>
                  私が最初に乗り換えて、次に中学生の次男がスマホの買い替えと同時に格安スマホから、続いてスマホの調子が悪くなった妻がauから乗り換えました。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  最後に自分が乗り換えました。契約は自分の名義※で行い、スマホも楽天モバイルで買い替えました。選んだスマホはOPPO
                  A73です。サイズが大きくて画面が見やすく、性能に対してコスパも良いし、これに決めました。
                </p>
                <TxtCap as="p">
                  ※18歳未満のお客様がお申し込みになる際は、保護者様の同意書をご用意のうえ、Webからお申し込みいただくか、保護者様ご同伴のうえ、楽天モバイルショップ（店舗）でお申し込みください。
                  <LinkNormal href="/flow/for-minors/?l-id=uservoice_17_flow_for-minors">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご家族の皆様は、お父様がおすすめされて楽天モバイルを選ばれたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうです。
                  <TxtMarker as="em">
                    私が楽天モバイルに乗り換えてからデータ通信が快適になって良いという話を家族にした
                  </TxtMarker>
                  ところ、次々に乗り換えることになりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ご家族4人で楽天モバイルをご利用いただているとのことですが、ほかの携帯電話会社の家族割は検討されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、検討しました。でも、子どもたちは格安スマホを使っていて、元々家族割を利用していなかったので強いこだわりはなかったですし、何より
                  <TxtMarker as="em">
                    家族割を加味しても楽天モバイルの方が安かった
                  </TxtMarker>
                  です。総合的に見て楽天モバイルが一番良いと考えました。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  まだ3カ月※や1年無料キャンペーン適用期間中の家族がほとんどなので、携帯電話料金は4人で毎月千円程度です。キャンペーン適用期間が終わっても、たぶん家族割の利用よりおトクだと思います！
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの3カ月無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ほかの携帯電話会社の家族割もご検討された上で楽天モバイルを選んでいただいたのですね。
                  <br />
                  データ通信の速度や安定性はどうでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  以前契約していた格安スマホと比較すると、
                  <TxtMarker as="em">
                    とても安定していて速いです。データ無制限でデータ利用量も気にしなくて良いので、安心して使えます。
                  </TxtMarker>
                  ※
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  新しい携帯電話会社だったので、契約する前は不安がありましたが、実際に使ってみるとデータ通信は安定していて、普段使う場所では問題ありません。※
                  <br />
                  田舎にある実家では、以前はデータ通信が不安定だったのですが、今はスムーズにつながるようになり、基地局が増えているのを感じます。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルなら月最大2,980円（税込3,278円）だからたくさん使っても大丈夫"
              subTitle="使いすぎによる高額請求の心配もなし！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  お子さまにスマホを持たせるにあたって心配はありますか？
                  <br />
                  また、息子さんのスマホデビューはいつ頃でしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  自分のスマホデビューは15歳の受験前でした。受験に合格するか、懸垂を20回できたら買って貰う約束をしていました（笑）。懸垂に成功して買って貰いましたが、受験もしっかり集中して志望校にも合格できました！
                </p>
              </Interviewee>
              <Interviewer>
                <p>どちらもおめでとうございます！（笑）</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホの使い方については、基本的には子どもの自主性を尊重しています。
                </p>
                <p>
                  子どもたちはWi-Fiに繋いで動画を見たりすることが多いので、スマホのデータ通信はあまり使わないようです。
                  <br />
                  とはいえ、使いすぎによる高額請求の心配はありました。
                  <br />
                  でも楽天モバイルなら、毎月の料金は使ったデータ量で決まり、
                  <TxtMarker as="em">
                    もし使いすぎてしまったとしても月最大2,980円（税込3,278円）なので、子どもに持たせても安心
                  </TxtMarker>
                  だなと思っています。
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="YouTubeをもっと楽しめるキャンペーン利用を検討します！"
              subTitle="動画や音楽を楽しむ生活"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  データ通信の利用状況についてお聞きしたいのですが、普段どのようなアプリをよく使われますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  自分はSpotifyやYouTube、LINEを結構使っていますね。母はLINEが中心で、弟は自分と同じように音楽アプリやYouTubeをよく使っていますね。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>私も妻と同じく主にLINEですね。</p>
              </Interviewee>
              <Interviewer>
                <p>
                  息子さんお二人はYouTubeや音楽アプリをよく利用されるということですが、楽天モバイルの「
                  <LinkNormal href="/campaign/youtubepremium/?l-id=uservoice_17_campaign_youtubepremium_01">
                    YouTube Premium 3カ月無料キャンペーン
                  </LinkNormal>
                  ※」はご存じでしょうか？
                  <br />
                  YouTubeを「広告なし」「バックグラウンド再生」「オフライン再生」でより快適にお楽しみいただけます。
                </p>
                <TxtCap as="p">
                  ※Rakuten最強プランをご利用の製品で「YouTube
                  Premium」にお申し込みいただくと、3カ月無料で利用できるキャンペーンです。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そんなキャンペーンがあるんですね！息子たちがかなり動画を見ているので、早速調べて検討してみます。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name="長男"
                imgNum="2"
              >
                <p>
                  <TxtMarker as="em">
                    YouTubeをよく使うのでうれしいキャンペーンですね。
                  </TxtMarker>
                  より色々と楽しめそうです！
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ぜひご検討ください。
                  <br />
                  本日は貴重なお話をお聞かせいただきありがとうございました。
                </p>
              </Interviewer>
            </Interview>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              ご家族全員で楽天モバイルを利用することで、家族割の利用よりもおトクになった田丸さんご一家のように、家族みんなで楽天モバイルをはじめてみるのはいかがでしょうか。シンプルなワンプランなので、お子さまの携帯電話料金も管理しやすく安心です。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2023年5月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <FamilyPlan
            className={Utils['Mt-40']}
            directory={articleNum}
            lazy={true}
          />

          <YoutubePremiumBnr
            className={Utils['Mt-32']}
            directory={articleNum}
            serialNumber="02"
            lazy={true}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※i-フィルターはデジタルアーツ株式会社の登録商標です。
            <br />
            ※au、家族割はKDDI株式会社の登録商標です。
            <br />
            ※LINEは、LINE株式会社の登録商標です。
            <br />
            ※OPPOは、Guangdong OPPO Mobile Telecommunications Corp.,
            Ltd.の商標または登録商標です。
            <br />
            ※Spotifyは、Spotify ABの登録商標です。
            <br />
            ※商標・登録商標について
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/trademark/"
              target="_blank"
            >
              詳しくはこちら
              <IconNewTabLine />
            </LinkIconAfter>
          </TxtCap>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'スマホデビューを楽天モバイルで！ネットゲームを楽しんでいます',
                userInfo: '末広さん（仮名・10代男性／福岡県）',
                img: 'avator-16.png',
                description: '楽天モバイルを契約するまで、スマホも...',
                href: `/uservoice/16/?l-id=uservoice_${articleNum}_uservoice_16`,
              },
              {
                title:
                  'もっと早く乗り換えればよかった！スマホ代を夫婦で大幅に節約',
                userInfo: '吉田さん（仮名・20代女性／石川県）',
                img: 'avator-15.png',
                description: 'マイホーム購入で家計を見直したことが...',
                href: `/uservoice/15/?l-id=uservoice_${articleNum}_uservoice_15`,
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

export default Uservoice17
