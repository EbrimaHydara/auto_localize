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
import { LinkNormal } from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice27: NextPage = () => {
  const pagetitle = 'データ通信を思い切り利用'
  const pageHeading =
    'データ通信を思い切り利用！スマホで動画をとことん楽しんでます'
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

  const articleNum = '27'
  const userName = '中山'

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
        description="快適なデータ通信で、スマホで動画を見る時間がとても増えました（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年6月24日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「移動中にスマホで動画を見たいけど、データ容量を使いすぎてしまうから我慢している」という方もいるのではないでしょうか。
                  <br />
                  データ容量が小さい料金プランでは、料金が安価になる反面、すぐに速度制限がかかってしまうため、空き時間に動画を見たいと思っても節約しなければいけません。
                </p>
                <p>
                  今回は、楽天モバイルに乗り換えて、データ容量を気にせずスマホで動画視聴をとことん楽しんでいる中山さん（仮名）に、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性・東京都）"
            periodOfUse="8カ月"
            dataUseage="40～50GB以上"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="毎日スマホでガンガン動画を見てます"
              subTitle="携帯電話料金が毎月7千円も安くなったのにデータ使い放題"
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
                  以前契約していた携帯電話会社に満足できず、乗り換えを検討していた時に、楽天モバイルのCMを見たのがきっかけです。印象的なCMだったので、「こういう携帯電話会社があるのか」と思ったことを覚えています。
                </p>
                <p>
                  特に、YouTubeを視聴することが増えてデータ容量が大きい料金プランにしたいと思っていたので、
                  <TxtMarker as="em">
                    データ使い放題※なところにとても魅力を感じました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>CMをきっかけに、すぐにご契約されたのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、契約の前に直接話を聞いてみようと思い、楽天モバイルの店舗に行きました。あまりスマホの料金プランに詳しくないので、本当にデータ使い放題※なのか不安だったんです。
                  <br />
                  でも、店舗のスタッフさんが親切で、料金プランやオプションサービスについて納得の行くまで教えてくれたので、契約前の心配事はすぐに解消しました。
                </p>
                <p>
                  スタッフさんの対応の良さも決め手となって、その場で契約したのですが、手続きは相談を含めて1時間くらいでスムーズに乗り換えできました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>具体的に店舗スタッフの対応の何が良かったと感じましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  サービス内容を一つ一つ丁寧に説明してくれたことや、オプションサービスの説明を聞いた後も無理に契約を勧められなかったことです。
                </p>
                <p>
                  以前の携帯電話会社では、サービス内容について十分に説明してもらえないまま契約を勧誘されることがありました。そのような対応に不満を覚えたことが乗り換えようと思った理由のひとつだったので、楽天モバイルの対応にはとても安心しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。ちなみに乗り換えのタイミングで、スマホの買い替えはされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。AQUOS sense4
                  plus※を購入しました。動画をよく見るので、画面が大きくて映像もきれいなスマホがよかったので、選びました。きれいな風景を壁紙にするのが好きなので、高画質な壁紙をいつも楽しめるのもうれしいです。
                </p>
                <TxtCap as="p">
                  ※AQUOS sense4
                  plusは販売を終了しています。楽天モバイルで販売中のAQUOSシリーズは{' '}
                  <LinkNormal
                    href={`/product/smartphone/?l-id=uservoice_${articleNum}_product_smartphone`}
                  >
                    Android（スマートフォン）一覧
                  </LinkNormal>
                  でご確認いただけます。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/27/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
              <Interviewer>
                <p>
                  YouTubeをたくさん視聴されているとのことですが、毎月のデータ利用量はどれくらいですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  時間があれば動画を見ているので、毎月のデータ利用量は40～50GB、多い時はそれ以上になることもあります。
                </p>
                <p>
                  乗り換え前はデータ通信の品質が心配でしたが、実際に使ってみるととても快適に楽しめるので、スマホで動画視聴する時間がかなり増えました。今ではスマホがないと退屈になってしまうほどです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社と比較して、楽天モバイルの料金プランはいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前よりも毎月7千円ぐらい安くなりました。その上、データ使い放題※でデータ容量を気にせずデータ通信できるようになったので大満足です。
                </p>
                <p>
                  また、Rakuten
                  Link※で無料通話ができるおかげで、通話料金を気にしなくて良いのもうれしいです。
                  <br />
                  電話をかける機会が多いので、以前の携帯電話会社では通話かけ放題のオプションを付けていました。
                  <br />
                  楽天モバイルの通話かけ放題オプション※も便利そうとは思ったのですが、私の場合は特に通話アプリにこだわりはないので、Rakuten
                  Linkでオプション料金の節約もできて助かっています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※Rakuten
                  Linkとは、楽天グループのさまざまなサービスと会員情報がまとまった、ダイヤル機能付きスーパーコミュニケーションアプリです。
                  <br />
                  ※一部対象外番号あり。Rakuten Linkアプリ未使用時30秒22円
                  <br />
                  ※通話かけ放題オプション（
                  <LinkNormal
                    href={`/service/standard-free-call/?l-id=uservoice_${articleNum}_service_standard-free-call`}
                  >
                    15分（標準）通話かけ放題
                  </LinkNormal>
                  ）は、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。一部対象外番号あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
              <ButtonRegularLarge
                as="a"
                href="/service/rakuten-link/?l-id=uservoice_27_service_rakuten-link"
              >
                Rakuten Linkの詳細を見る
              </ButtonRegularLarge>
            </div>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="毎月楽天ポイントがたくさん貯まってとってもおトクです"
              subTitle="楽天モバイルへの乗り換えをきっかけに楽天経済圏の利用を始めました！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外に、楽天グループのサービスをご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えてから、楽天カードを使い始めました。楽天モバイルと楽天カードの契約で楽天市場でのお買い物ポイント倍率が上がったので、楽天市場の利用も増えました。
                </p>
                <p>
                  普段の買い物でポイントがたくさん貯まるので、ちょっとした貯金気分でおトクを味わっています。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>貯まった楽天ポイントはどんなことにご利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主に楽天市場での買い物に使っていますが、楽天モバイルの利用料金の支払いにも使うこともあります。
                </p>
                <p>
                  楽天モバイルに乗り換えてから、
                  <TxtMarker as="em">
                    データ容量を気にせずどこでも動画を楽しめて、楽天カードと併せてポイントがたくさん貯まって、良いこと尽くしです！
                  </TxtMarker>
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
              楽天モバイルなら、最大でも月2,980円（税込3,278円）でデータ容量を気にせず※動画を楽しめます。
              <br />
              スマホで動画を視聴するとデータ容量の消費が気になるとお悩みの方は、快適に動画を楽しめるようになった中山さんのように、楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年6月24日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'おトクな料金が魅力！子どものスマホデビューにもぴったりでした',
                userInfo: '井口さん（仮名・40代男性／兵庫県）',
                img: 'avator-26.png',
                description: '料金プランの安さです。大手携帯電話会...',
                href: '/uservoice/26/?l-id=uservoice_27_uservoice_26',
              },
              {
                title:
                  '店舗で家族5人でもスピード乗り換え！かけ放題オプションも便利',
                userInfo: '佐々木さん（仮名・20代女性／千葉県）',
                img: 'avator-25.png',
                description: 'シンプルな料金プランです。乗り換えを....',
                href: '/uservoice/25/?l-id=uservoice_27_uservoice_25',
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

export default Uservoice27
