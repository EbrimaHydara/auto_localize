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
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice26: NextPage = () => {
  const pagetitle = '子どものスマホデビューに最適'
  const pageHeading =
    'おトクな料金が魅力！子どものスマホデビューにもぴったりでした'
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

  const articleNum = '26'
  const userName = '井口'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220620', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルなら1つの料金プランの中でデータ利用量に応じて料金が決まるので、子どもの成長に合わせて料金プランを見直す必要がないのも便利（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年6月20日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  お子さまに初めて持たせるスマホをどの携帯電話会社で契約するか、お悩みの方も多いのではないでしょうか。
                  <br />
                  「データ通信しすぎて高額な請求がきたらどうしよう」「しっかり親が管理できるオプションがないと心配」「なるべく家計の負担を増やしたくない」など、お子さまのスマホデビューには悩みがつきません。
                </p>
                <p>
                  今回は、ご夫婦で楽天モバイルに乗り換えて、息子さんのスマホデビューにも楽天モバイルを選んだ井口さん（仮名）に、詳しくお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代男性／兵庫県）"
            periodOfUse="1年"
            dataUseage="20GB前後"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="成長に合わせて見直す必要がないシンプルな料金プラン"
              subTitle="子どものスマホデビューに楽天モバイルを選んだ理由"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだ理由はどこにありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  料金プランの安さです。大手携帯電話会社からサブブランドに乗り換えて2～3カ月使ったのですが、楽天モバイルの方が安かったので、節約のために妻と一緒に楽天モバイルに乗り換えることにしました。
                </p>
                <p>
                  また、毎月の支払いに楽天ポイントが利用できると知り、もっと節約できそうだと思い、ポイントを貯めるために楽天市場や楽天カードなどの楽天経済圏※の利用もはじめました。
                  <br />
                  <TxtMarker as="em">
                    普段の生活でたくさん貯まるポイントを携帯電話料金の支払いに充てることで、毎月の固定費が抑えられてとても満足しています。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳しくはこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>以前と比較して、携帯電話料金はどれくらい変わりましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても変わりました。ほかの大手携帯電話会社を利用していた時は、私と妻の分を合わせて毎月1万8千円くらいかかっていて、かなりの負担でした。
                </p>
                <p>
                  今は料金が下がっただけでなく、貯まった楽天ポイントを使って毎月の携帯電話料金すべてを支払っているので、その分も節約できています。息子もスマホデビューしたので家計の負担が増えると思っていたのですが、
                  <TxtMarker as="em">
                    家族3人で利用しても十分ポイントでまかなえていますね。
                  </TxtMarker>
                </p>
                <p>
                  乗り換える前に同僚たちから「家族で楽天モバイルに乗り換えたら、携帯電話料金がすごく安くなった！」と聞いていたのですが、まさにそれを実感しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それは大きな変化ですね。
                  <br />
                  スマホの使い方は変わりましたか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  特に変わっていないです。もともと毎月のデータ利用量が20GB前後で、以前は余裕を見て50GB程度の料金プランを契約していたんです。でもデータ容量が大きい料金プランは高額なので、家計への負担が大きいことが気になっていました。
                </p>
                <p>
                  でも
                  <TxtMarker as="em">
                    楽天モバイルはデータ使い放題※でも安いですし、あまり使わない月は自動的にさらに安くなるので、データ利用量を気にせず使えてありがたい
                  </TxtMarker>
                  です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご家族3人で楽天モバイルをご利用されているとのことですが、息子さんも井口さんや奥様と同じタイミングで楽天モバイルをご契約されたのでしょうか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、息子は2022年1月からなので、私たちよりも後ですね。中学生になったので、スマホを初めて持たせることにしたんです※。
                </p>
                <TxtCap as="p">
                  ※18歳未満のお客様がお申し込みになる際は、保護者様の同意書をご用意のうえ、Webからお申し込みいただくか、保護者様ご同伴のうえ、楽天モバイルショップ（店舗）でお申し込みください。
                  <LinkNormal href="/flow/for-minors/?l-id=uservoice_26_flow_for-minors">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。息子さんのスマホデビューを楽天モバイルにした理由は何ですか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私たちと同じで料金プランが決め手でした。息子にはスマホを使うのは家の中で私たちが見ている時のみと約束して使わせています。あまりデータ通信もしないので、楽天モバイルのデータ利用量に応じて安くなるプラン料金が、息子にもぴったりでした。
                </p>
                <p>
                  iPhoneのパスコードなども私たちが管理していて、勝手にインストールや課金ができない親の監視下にあるので、今はあんしんコントロール
                  by i-フィルター※を外しています。
                  <br />
                  今後、息子が成長して外でもスマホを使うようになったら、改めてオプションを契約するつもりです。
                </p>
                <TxtCap as="p">
                  ※「
                  <LinkNormal href="/service/i-filter/?l-id=uservoice_26_service_i-filter">
                    あんしんコントロール by i-フィルター
                  </LinkNormal>
                  」はご家庭でも外出先でも、お子さまのスマホ・タブレット利用を見守る、あんしん・便利なフィルタリングサービスです。18歳未満のお客様がフィルタリングサービスを利用せずにご利用いただくことになる場合には、保護者の方にフィルタリングサービスを利用しない旨の申出書（フィルタリング・サービス不要申出書）に利用されない理由をご記入のうえご提出いただくことになります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  息子さんのスマホデビューに際して、ほかの携帯電話会社も比較検討されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、私たちが楽天モバイルを利用していることやプラン料金の面からも、最初から楽天モバイルにしようと決めていました。
                </p>
                <p>
                  息子がいずれ外で使うようになってデータ利用量が増える場合も、楽天モバイルなら1つの料金プランの中でデータ利用量に応じて料金が決まり、どれだけ使っても月最大2,980円（税込3,278円）なので、
                  <TxtMarker as="em">
                    成長に合わせて料金プランを見直して再契約する必要がないのも便利
                  </TxtMarker>
                  だなと感じています。
                </p>
              </Interviewee>

              <KidsKeitaiBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                lazy={true}
              />
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="ポイントがたくさん貯まってとてもおトク"
              subTitle="乗り換えと同時に楽天経済圏をはじめました"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            ></Interview>
            <Interviewer>
              <p>
                楽天モバイルに乗り換えたのをきっかけに、楽天経済圏の利用をはじめられたということですが、具体的にどんなサービスを利用されていますか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                乗り換えと同時に、自宅の光回線を楽天ひかりにしました。楽天市場もとても多く利用していて、楽天ふるさと納税※や楽天スーパーSALE※でもポイントを貯めています。
              </p>
              <p>
                ほかにもいろいろと楽天のサービスを利用していて、楽天市場でのポイント倍率は現在6倍※になっていますね。買い物や公共料金の支払いのすべてに楽天カードを利用しているので、毎月6,000～9,000ポイントくらい貯まります。
              </p>
              <TxtCap as="p">
                ※
                <LinkIconAfter
                  href="https://event.rakuten.co.jp/furusato/"
                  target="_blank"
                >
                  楽天ふるさと納税
                  <IconNewTabLine />
                </LinkIconAfter>
                ：楽天市場や楽天トラベルを通じてふるさと納税をご利用いただけるサービスです。楽天グループ限定の返礼品も多数取り揃えております。
                <br />
                ※楽天スーパーSALEは、楽天市場最大のセールです。
                <br />
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
              <p>楽天モバイルに乗り換えて良かったと感じる点はありますか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                楽天モバイルの契約でも楽天市場のお買い物ポイント倍率が上がり、とにかくポイントがたくさん貯まります。
                <TxtMarker as="em">
                  貯まったポイントを携帯電話料金の支払いや日々の買い物に利用することで生活費の節約になる
                </TxtMarker>
                のが良いですね。
              </p>
              <p>
                おトクな面はもちろん、サービスエリアの拡大にも満足しています。特に最近、自宅の近くで楽天モバイルのアンテナ工事をよく見かけるので、サービスエリアが広がっているんだなと実感しています。
              </p>
            </Interviewee>
            <Interviewer>
              <p>本日は貴重なお話をお聞かせいただきありがとうございました。</p>
            </Interviewer>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-03_close`}
            className={Utils['Mt-32']}
          >
            <p>
              ご夫婦で楽天モバイルに乗り換えたことで毎月の携帯電話料金を節約され、息子さんの初めてのスマホにも楽天モバイルを選ばれた井口さんのように、月々の携帯電話料金やお子さまのスマホデビューに関してお悩みの方は楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年6月20日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <FamilyPlan
            className={Utils['Mt-40']}
            directory={articleNum}
            lazy={true}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '店舗で家族5人でもスピード乗り換え！かけ放題オプションも便利',
                userInfo: '佐々木さん（仮名・20代女性／千葉県）',
                img: 'avator-25.png',
                description: 'シンプルな料金プランです。乗り換えを....',
                href: '/uservoice/25/?l-id=uservoice_26_uservoice_25',
              },
              {
                title:
                  '家族みんなで楽天モバイル！安定した回線で動画を楽しんでいます',
                userInfo: '本多さん（仮名・50代男性／千葉県）',
                img: 'avator-24.png',
                description: '月々の携帯電話料金が安価で、コストパ...',
                href: '/uservoice/24/?l-id=uservoice_26_uservoice_24',
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

export default Uservoice26
