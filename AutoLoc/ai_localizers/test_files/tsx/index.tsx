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
import { SmartphoneDebutBnr } from '@components/include/uservoice/SmartphoneDebutBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`
const Uservoice65: NextPage = () => {
  const pagetitle =
    '中学生から大人までワンプランで大丈夫！家族全員で楽天モバイル'
  const pageHeading =
    '中学生から大人までワンプランで大丈夫！家族全員で楽天モバイル'
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

  const articleNum = '65'
  const userName = '山吹'
  const userName2 = '鈴音'

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
        description="中学生から大人までワンプランで大丈夫！家族全員で楽天モバイル"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年11月2日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  家族が使っている携帯電話会社がバラバラで、生活費の管理が面倒だと感じていませんか？家族の年齢や生活のスタイルによってスマホの使い方が大きく異なるため、お子さまの携帯電話会社や料金プランの選び方に悩んでいる保護者の方も少なくありません。
                </p>

                <p>
                  また、家族全員で同じ携帯電話会社でも料金プランが異なると、家族割などの割引を利用したとしても携帯電話料金の負担は大きくなってしまいます。さらに家族割は年齢や制限が複雑で、縛りを考慮しながら契約するのも大変です。
                </p>
                <p>
                  今回お話をうかがった山吹さん（仮名）は、お子さまの鈴音さん（仮名）のスマホデビューにあわせて家族全員で楽天モバイルに乗り換えました。その結果、利用料金の総額が今までの約半分になり料金プランもシンプルになりました。
                </p>
                <p>
                  乗り換えに大成功した山吹さん（仮名）は、中学生から大学生まで 3
                  人のお子さまとご夫婦で楽天モバイルに乗り換え、どのように生活が変わったのでしょうか。詳しくお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40 代男性・静岡県）"
            periodOfUse="2023年4月ごろから"
            dataUseage="山吹さんご夫婦：10～20GB程度／鈴音さん：3GB程度／ほかの兄弟：20GB以上"
            beforeComapany="楽天モバイル（スーパーホーダイ・組み合わせプラン）"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="スマホデビューは11歳！"
              subTitle="家族で使い方が異なってもワンプランで大丈夫"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  ご家族全員で楽天モバイルをご利用いただき、ありがとうございます。まずはお子さん（鈴音さん）のスマホデビューについてお話を聞かせてください。鈴音さんがスマホデビューをしたのはいつごろでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  大体3年前ですね。たしか11歳、小学6年生のころでした。家族で楽天モバイルに乗り換えたときに、鈴音のスマホを新しく契約しました。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  中学生になると塾や部活で帰りの時間が遅くなるだろうなと思ったので、連絡手段として契約してもらいました。それに、周りの友だちもスマホを持っている子が増えたので、私もそろそろ欲しいなと思って両親に頼んだんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  スマホデビューをするときに、スマホを使うときのルールは決めましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、特に決めていません。鈴音のほかに高校生と大学生の兄弟が2人いますが、その子たちも含めて、ほかの人に迷惑をかけなければ自由に使って構わないといっています。
                </p>
                <p>
                  <TxtMarker as="em">
                    楽天モバイルなら20GBを超えても月額最大3,278円（税込）でデータ使い放題
                  </TxtMarker>
                  ※なので、携帯電話料金を心配する必要もありませんし、基本的に使い方は子どもたちに任せています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため速度制限の場合あり環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうなんですね。鈴音さんを含め、お子さまはデータ容量をどれくらい利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  私は、基本的に自宅のWi-Fi®※につないでスマホを利用しているので、あまりデータ利用量が増えることはないですね。
                </p>
                <TxtCap as="p">※Wi-Fiは、Wi-Fi Allianceの登録商標です。</TxtCap>
                <p>
                  学校以外で出かけることが少ないですし、外出してもLINEや簡単な調べ物、地図アプリを使うくらいです。兄たちは、私よりスマホを使っているみたいです。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  鈴音はあまり使わないようですが、上の兄弟2人はかなりスマホを使っているみたいですね。外出先で動画を見たり音楽を聴いたり、自由に楽しんでいるようです。
                </p>
                <p>
                  子どもの年齢や生活スタイル、趣味や性格で使い方もまったく異なるのですが、
                  <TxtMarker as="em">
                    楽天モバイルのシンプルなワンプランなら全員同じ料金プランでいいのでとても便利
                  </TxtMarker>
                  です。
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="月々の携帯電話料金が約半分に！"
              subTitle="国内でも海外でも自分のペースで使えるのが魅力"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換える前は、どちらの携帯電話会社を利用していたのか教えていただけますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  格安スマホ時代の楽天モバイルを契約していました。ただ、すでにスマホデビューしていた兄弟と私たち夫婦の使い方がバラバラで、月々の利用料金に悩んでいたんです。
                </p>
                <p>
                  そこで、キャリアとしてサービスを開始した楽天モバイルが、データ利用量に応じて利用料金が自動的に変わる料金プランを発表したのを見て、乗り換えてみようという話になりました。
                </p>
                <p>
                  上の兄弟は毎月20GBを超えていますし、私たち夫婦は10～20GBくらいと幅があります。同じ携帯電話会社でそれぞれに合う料金プランを探すにしても難しいと感じていたので、シンプルなワンプランでとてもいいなと思いました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  確かに家族でスマホの使い方が異なると、料金プラン選びも難しいですよね。乗り換えてみて、変化を感じる部分はどこですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  利用料金が使い方にあわせて自動的に変わるので無駄がなくなり、
                  <TxtMarker as="em">
                    月の支払いが約半額になりました。
                  </TxtMarker>
                  それに、楽天経済圏※をかなり利用しているので、獲得する楽天ポイントも増えましたね。
                </p>
                <p>
                  毎月楽天ポイントを数千ポイント受け取っているので、買い物や楽天モバイルの利用料金の支払いに使っています。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  私も今はデータ利用量はそこまで多くないですが、高校生になってスマホの使い方が変わっても、乗り換えや料金プランの見直しをしなくていいのがうれしいです。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。楽天モバイルを活用していただいているようですが、海外ローミング※は利用されたことはありますか？
                </p>
                <TxtCap as="p">
                  ※海外ローミング（データ通信）について、
                  <LinkNormal href="/service/global/overseas/">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  最近ハワイへ旅行に行った妻と母が利用していました。
                  <TxtMarker as="em">
                    海外ローミングを2GBまで無料※で使えるのがとても便利
                  </TxtMarker>
                  だといっていました。いつも使っているスマホを旅行先に持って行っても、追加設定することなく現地ですぐに繋がったそうです。
                </p>
                <p>
                  ハワイに1週間滞在していましたが、2GBで十分足りたそうです。スマホで調べ物をしたり地図アプリを使ったりしても、余裕を持って使えたと満足していました。ハワイに家族で旅行に行く事があっても安心ですね。
                </p>
                <TxtCap as="p">
                  ※プランのデータ利用量に加算。2GB 超過後は最大
                  128kbps。データ通信（海外ローミング）の注意事項の
                  <LinkNormal href="/uservoice/47/?l-id=search_top#note1">
                    詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  今回私はお留守番だったので、次回はハワイでスマホを使うのが楽しみです。
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
              毎月のデータ利用量にあわせてお支払い金額が自動的に変わる楽天モバイルなら、月々の利用料金の管理が楽になるため、年齢や使い方が異なる家族でも安心です。
            </p>
            <p>
              山吹さんのご家族のように、中学生から高校生、大学生、社会人まで、家族みんなで乗り換えをするなら楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※本コンテンツは、ユーザー一個人の実体験に基づくものです。ほかのユーザーの見解とは必ずしも一致しない場合があります。
              <br />
              ※当ページの内容は2023年11月2日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <SmartphoneDebutBnr
            className={Utils['Mt-32']}
            param={`?l-id=uservoice_65_guide_kids-ke-tai`}
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

export default Uservoice65
