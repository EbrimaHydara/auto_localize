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
import { articleData } from '@components/include/uservoice/uservoiceData'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice: NextPage = () => {
  const pagetitle = '月をまたぐ海外旅行で4GB無料'
  const pageHeading =
    '海外で月をまたぐと4GBも無料でつかえる！手軽で便利な海外ローミング'
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

  const articleNum = '57'
  const userName = '藤原'

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
        description="データ通信が思い切り使えて便利！楽天経済圏も活用しています（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年8月4日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「海外旅行でスマホを使うときに海外Wi-Fi®や海外SIM、海外ローミングなど、色々あるけど、どれがいいのだろう」とお悩みではありませんか？
                </p>
                <p>
                  海外ローミングは、利用料金が高額になってしまうというイメージがある人も少なくありません。しかし、楽天モバイルの海外ローミング※を使えば、海外でスマホを賢く利用できます。
                </p>
                <p>
                  そこで今回は、楽天モバイルの海外ローミングを上手に使って海外旅行を楽しまれた藤原さん（仮名）に、海外ローミングの使い方のコツについて詳しくお聞きしました。
                </p>
                <TxtCap as="p">
                  ※海外ローミング（データ通信）について、
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／愛知県）"
            periodOfUse="9カ月"
            dataUseage="100GB以上"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="バンコク周辺はどこも安定していました"
              subTitle="2度のタイ旅行で海外ローミングをフル活用！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  まずは、楽天モバイルの海外ローミングを利用された経験について、お聞かせください。どちらの国で海外ローミングを利用されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  タイのバンコクです。年末年始とゴールデンウィークに、それぞれ1週間ずつ滞在したときに使いました。海外Wi-Fiルーターを持ち歩くのが不便なので、レンタルしたくなかったんです。それが理由で、楽天モバイルの海外ローミングを利用しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。現地のデータ通信速度や、電波の状況はいかがでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  快適に使えましたよ。
                  <TxtMarker>
                    バンコク周辺や、車で1時間ぐらい離れた観光地でも安定して電波が入るので、とても便利でした。
                  </TxtMarker>
                  現地のフリーWi-Fiと海外ローミングを使い分けながら、日本にいるときとほとんど変わらない感覚でスマホを使えましたね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>それはなによりです。海外ローミングの設定は簡単でしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  年末年始にバンコクへ行って、はじめて海外ローミングを使ったときは、設定するのに少し時間がかかりました。でも、ゴールデンウィークにもう一度バンコクに行ったときは、前回の設定方法を覚えていたのでスムーズに利用できました。
                </p>
                <p>
                  my
                  楽天モバイルの海外ローミングの設定と、スマホのデータローミングをオンにするだけの2ステップなので、簡単に設定できて便利ですね※。
                </p>
                <TxtCap as="p">
                  ※海外ローミングの利用方法について、
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>渡航中は日本へのSMSや通話を利用されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。年末年始は1人でタイへ行ったので、Rakuten
                  Link※で日本にいるパートナーと通話しました。
                  国際通話は通話料金が高いものと思っていましたが、
                  <TxtMarker>
                    Rakuten
                    Linkなら海外にいても日本にいる人と無料※で通話できるのがいいですね。
                  </TxtMarker>
                  時間を気にせずゆっくり話ができるので、とても快適でした。
                </p>
                <TxtCap as="p">
                  ※出国前に Rakuten Link アプリの初期設定を完了してください。
                  <LinkNormal href="https://service.link.link/guide/">
                    詳細はこちら
                  </LinkNormal>
                  。 <br />
                  ※Rakuten Link
                  アプリを利用した場合、海外の対象国と地域からのみ発信可能となります。その他の地域に関しては
                  Wi-Fi 接続中の場合のみ発信可能となります。
                  <br />
                  ※iOS
                  標準の電話アプリを利用した場合、海外の対象国と地域でのみ発着信可能となります。
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/fee/saikyo-plan/detail/#tel-ios">
                    詳細はこちら
                  </LinkNormal>
                  。 <br />
                  ※国際通話の注意事項の
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  Rakuten
                  Linkをご活用いただき、ありがとうございます。滞在中は海外ローミングのデータ容量を追加されましたか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、追加していません。楽天モバイルならでは使い方なのですが、
                  <TxtMarker>
                    海外滞在中に月をまたぐと、海外ローミングで使える無料のデータ容量2GB※を2カ月分、合計4GB使えるんです。
                  </TxtMarker>
                </p>
                <p>
                  1週間の旅行でしたが、無料で使えるデータ容量と、現地のフリーWi-Fiを併用したのでデータをチャージせずに過ごせました。
                </p>
                <TxtCap as="p">
                  ※プランのデータ利用量に加算。2GB超過後は最大128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  そうだったのですね。海外ローミングを利用された感想はいかがですか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても便利ですね。年末年始に1人でタイに行ったときや、ゴールデンウィークにパートナーと一緒に行ったときも、思い切り楽しめました。パートナーも楽天モバイルユーザーなので、2
                  人とも海外ローミングを使えて快適でした。
                </p>
                <p>
                  タイ以外にも、東南アジアのほかの国を旅行したいので、また楽天モバイルの海外ローミングを活用したいと思っています。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="データ容量を気にせず月100GB以上使えてストレスフリーです"
              subTitle="父とパートナーからのおすすめで乗り換え！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  次は国内でのご利用状況について教えてください。楽天モバイルに乗り換えたのは、何がきっかけでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  僕の父とパートナーの2人から、楽天モバイルをおすすめされたのがきっかけです。利用料金が安いことと、データ無制限※で使えるという2つの条件で携帯電話会社を調べていたら、楽天モバイルを紹介してくれたんです。
                </p>
                <p>
                  2人から話を聞いてみたら、安定してつながるし、今暮らしている場所もサービスエリア内※だといっていたので、じゃあ楽天モバイルにしようかなと思って乗り換えました。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限エリアの人口カバー率は2023年6月時点で99.9%を突破しました。
                  <br />
                  ※データ高速無制限エリアであっても、地下、屋内、大きな商業ビルの屋内等の場所、電波の状況等によって通信速度が変化する場合あり。
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/area/">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  身近な方からの紹介だったのですね。以前の携帯電話会社では、どのようなご利用状況だったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換える前は、データ容量3GBの料金プランとモバイルWi-Fiルーターも併用していて、合計で毎月8,000円ほどかかっていました。
                </p>
                <p>
                  モバイルWi-Fiルーターはデータ容量を一気に使うとデータ通信速度に制限がかかるので、不便でしたね。
                  データ容量をたくさん使うためにモバイルWi-Fiルーターを使っていたのに、通信速度に制限がかかってしまい、
                  映画やドラマを楽しめなくて、ストレスを感じていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、データ通信速度に制限がかかる状況は、スマホを活用できる機会が少なくなりますね。
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。さすがに毎月の利用料金が高すぎるし、不便に感じていたので、乗り換えを決意しました。今では楽天モバイルで毎月100GB以上使っていますし、データ容量を気にせず※使っています。
                  <TxtMarker>
                    動画も音楽も思い切り楽しめますし、ストレスフリーになりました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはよかったです。楽天モバイル乗り換えたときに、スマホも買い替えられたのでしょうか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。iPhoneの調子が悪かったので、楽天モバイル買い替え超トクプログラム※を利用して、iPhone
                  SE
                  （第3世代）に買い替えました。買い替えたときにもらった楽天ポイントは、買い物で使いました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_57_service_replacement-program_01">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000円（不課税）のお支払いが必要となる、または返却不可となる場合があり。機種変更が可能な製品は、本プログラム対象製品に限る。
                  <br />
                  ※本プログラムは、楽天回線（Rakuten最強プラン）のお申し込みがなくてもご利用いただけます。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルに乗り換えてから変化はありますか？</p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  普段から楽天経済圏※を利用しているので、SPUの倍率※が上がってとても助かっています。楽天ポイントは、楽天モバイルの利用料金に充てているので、以前の携帯電話会社と比べてかなりコスパがよくなったと感じます。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※2022年11月1日の条件変更により、SPU
                  の倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/">
                    詳細はこちら
                  </LinkNormal>
                  。
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
              海外でスマホを使うときに、海外Wi-Fiルーターのレンタルや現地の海外SIM購入、海外ローミングなど、さまざまな選択肢の中から選ぶのは難しいものです。
            </p>
            <p>
              しかし、楽天モバイルの海外ローミングなら、スマホからの簡単な設定で利用することができ、複雑な手続きは必要ありません。高速データ通信が毎月2GBまで無料で利用できるうえに、Rakuten
              Linkを使えば海外から日本の電話番号へ無料で通話※できます。
            </p>
            <p>
              Rakuten
              Linkアプリを利用した場合、海外の対象国と地域からのみ発着信可能となります※。その他の地域に関してはWi-Fi接続中の場合のみ発着信可能となります。
            </p>
            <p>
              さらに、楽天モバイルは国内の利用もリーズナブル。データ無制限※やSPUの倍率アップなど、魅力的な特典が盛りだくさんです。
            </p>
            <p>
              海外旅行や国内の利用も、ストレスフリーでスマホを楽しみたいなら、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービスのため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年8月4日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <ServiceGlobalBnr
            className={Utils['Mt-32']}
            lid={`uservoice_${articleNum}`}
            lazy={true}
          />

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

export default Uservoice
