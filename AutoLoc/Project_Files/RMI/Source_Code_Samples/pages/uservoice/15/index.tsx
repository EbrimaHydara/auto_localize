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
import { LinkNormal } from '@components/atoms/Link'
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice15: NextPage = () => {
  const pagetitle = '乗り換えによりスマホ代を夫婦で大幅に節約'
  const pageHeading =
    'もっと早く乗り換えればよかった！スマホ代を夫婦で大幅に節約'
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

  const articleNum = '15'
  const userName = '吉田'

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
        description="携帯電話料金が以前の8分の1に！楽天モバイルのおかげで家計の負担が一気に軽くなりました。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年3月25日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  家や車など、人生における大きな買い物を決めた時、「無理のない支払いのために、節約しよう」と家計の見直しを考える方は多いのではないでしょうか。
                </p>
                <p>
                  今回はマイホーム購入をきっかけに節約を強く意識し、月々のスマホ代を見直された吉田さん（仮名）に詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／石川県）"
            periodOfUse="3カ月"
            dataUseage="5～20GB未満"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="料金プランが安く、楽天ポイントがおトクに貯まる楽天モバイルが1番良かった！"
              subTitle="家計の見直しと節約を真剣に考えたら"
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
                  マイホーム購入で家計を見直したことがきっかけです。楽天ポイントがおトクに貯まることや料金プランの安さなどから、家計にやさしいサービスだなと感じたので楽天モバイルを選びました。
                </p>
                <p>
                  正直にお話しすると、はじめて利用する携帯電話会社だったので、自宅周辺できちんとつながるのか心配でした。
                  <br />
                  そこで、近所で楽天モバイルを利用している友人に電波状況や使い勝手などを聞いたところ、「なにも問題はないよ」と教えてもらえたことで不安が払拭され、安心して契約を決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。身近な方から実際の使用感を聞くと、より具体的なイメージができて心強いですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  まさにそれを体験しました。夫もつながるかどうかを心配し、口コミなどを調べていたのですが、私が先に乗り換えて、快適に使用しているところを目にして問題がないことが確認でき、安心して乗り換えたようです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前利用していた携帯電話会社と比較して、楽天モバイルの料金プランはいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前はスマホ製品代を除いて毎月8千円程度で、夫婦で約1万6千円の出費でした。
                </p>
                <p>
                  それが今は、私が2千円程度になり、夫はプラン料金3カ月無料キャンペーン※適用期間中なので、
                  <TxtMarker as="em">
                    携帯電話料金がなんと以前の8分の1に
                  </TxtMarker>
                  なりました。
                </p>
                <TxtCap as="p">
                  ※「Rakuten UN-LIMIT
                  VI」プラン料金3カ月無料キャンペーン」の新規受付は2022年2月8日に終了しました。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>びっくりするほど出費が減りましたね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。こんなに節約できるとは思いませんでした。夫の無料キャンペーン適用期間が終了しても、2人で毎月4千円程度と、以前より1万2千円も安くなります。楽天モバイルのおかげで
                  <TxtMarker as="em">
                    家計の負担が一気に軽くなりました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>それは家計簿にも大きな変化がありそうですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>はい、目に見えて節約効果を実感します。</p>
                <p>
                  ほかにも、日頃から楽天市場でたくさん買い物をするのですが、楽天モバイルの契約で楽天市場でのお買い物ポイントが+1倍※になるのもとてもうれしいです。
                  <br />
                  お買い物マラソンなどで必要なものをまとめ買いする時も、もらえるポイントが増えて、月々の携帯電話料金の節約以外でも経済的に大きなメリットを感じています。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限有り。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルのデータ通信は安定していますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても安定しています。
                  <TxtMarker as="em">
                    以前利用していた携帯電話会社と比較しても、まったく遜色なく、不満はありません。
                  </TxtMarker>
                </p>
                <p>
                  外出時はSNSの閲覧や調べ物に使っていますが、とてもスムーズにデータ通信ができています。最初は乗り換えを迷っていた夫もデータ通信を満喫しているようです。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイル買い替え超トクプログラムで大きな節約"
              subTitle="2年ごとに買い替えるスマホをおトクにしたい！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>現在スマホは何を使用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  iPhone 13
                  Proです。小さい子どもがいるので、たくさん写真を撮って残したいと思い、カメラ機能を重視して選びました。子どもの一瞬のしぐさを残すには、すぐ手に取れるスマホのカメラが便利ですね。
                  <br />
                  iPhone 13
                  Proの購入には、楽天モバイル買い替え超トクプログラム※を利用しています。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_15_service_replacement-program_01">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300
                  円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000
                  円（不課税）のお支払いが必要となる、または返却不可となる場合あり。機種変更が可能な製品は、本プログラム対象製品に限る。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイル買い替え超トクプログラムの利用を決めた理由を教えていただけますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前の携帯電話会社でもiPhoneを4年間の分割払いで購入したのですが、スマホは日常的に使うものなので、2年程で電池の持ちが悪くなり動作も重くなってしまいました。
                </p>
                <p>
                  不便さを感じるものに残り2年間も支払い続けるストレスを解消してくれるサービスが、楽天モバイル買い替え超トクプログラムだったんです。スマホの買い替え時の目安でもある2年ごとに利用中のiPhoneを返却することで、最大24回分の支払いが不要になるところに魅力を感じました。
                  <br />
                  <TxtMarker>これからも楽天モバイルを利用するつもり</TxtMarker>
                  なので、迷うことなくこのサービスの申し込みを決めました。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  2年ごとにおトクに新しいiPhoneへの機種変更ができるのは、とても魅力的ですよね。
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
                    スマホ製品代そのものを節約できるのはコストパフォーマンスがとても良く
                  </TxtMarker>
                  、本当にうれしいです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルを利用して、ほかに良かったなと感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  家計の管理を兼ねて日頃から楽天カードをメインのクレジットカードとして利用しているので、毎月の携帯電話料金の支払いでもポイントが貯まるところも良いなと感じています。
                </p>
                <p>
                  私の周りでは、家を買ったり子どもが生まれたりという人が増えて、家計の見直しをしている方も多いんです。もし
                  <TxtMarker as="em">
                    周りにおすすめする機会があれば、コストパフォーマンスがとても良いという点を推したい
                  </TxtMarker>
                  ですね。
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
              夫婦で楽天モバイルに乗り換え、iPhoneの購入をサポートする楽天モバイル買い替え超トクプログラムを利用することで、家計の負担を大幅に削減された吉田さんのように、家計を見直したい方は楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年3月25日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <IphoneUpgradeBnr
            className={Utils['Mt-32']}
            directory={articleNum}
            serialNumber="02"
            lazy={true}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'スマホの使い方が変わった！思いっきりインターネットが楽しめる',
                userInfo: '内海さん（仮名・20代女性／三重県）',
                img: 'avator-14.png',
                description: '楽天市場を普段から愛用していて、そこ...',
                href: `/uservoice/14/?l-id=uservoice_${articleNum}_uservoice_14`,
              },
              {
                title:
                  '乗り換えで毎月約1万5千円も節約！周りにもおすすめしています',
                userInfo: '河浦さん（仮名・40代女性／宮城県）',
                img: 'avator-13.png',
                description: '兄からデータ通信も安定しているし、使...',
                href: `/uservoice/13/?l-id=uservoice_${articleNum}_uservoice_13`,
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

export default Uservoice15
