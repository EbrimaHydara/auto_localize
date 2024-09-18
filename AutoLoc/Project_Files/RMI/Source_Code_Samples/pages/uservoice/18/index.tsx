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
import { FastconvertBnr } from '@components/include/uservoice/FastconvertBnr'
import { ReturnUserVoiceList } from '@components/include/uservoice/ReturnUserVoiceList'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice18: NextPage = () => {
  const pagetitle = '家のWi-Fiよりも速い！固定費の見直しで貯金'
  const pageHeading = '家のWi-Fiよりも速い！固定費の見直しで貯金もできて大満足'
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

  const articleNum = '18'
  const userName = '下村'

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
        description="携帯電話料金が安くて、楽天回線エリアならデータ容量を気にする必要もない楽天モバイルに大満足！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年4月15日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「料金プランの安い携帯電話会社に乗り換えたら、データ通信速度が遅くなりそうで心配」という方もいるのではないでしょうか。
                </p>
                <p>
                  今回は楽天モバイルに乗り換えたらデータ通信がご自宅のWi-Fiよりも速くなり※、さらに固定費を削減できたという下村さん（仮名）に、楽天モバイルを選んだ理由と実際利用してみた感想をお聞きしました。
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
            periodOfUse="1年7カ月"
            dataUseage="60GB以上"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えを決めてすぐにeKYCで簡単に契約できました"
              subTitle="きっかけはリモートワークになって貯金に目覚めたから"
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
                  仕事がリモート中心になり外出の機会が減ったことで、貯金に目覚めたのがきっかけです。以前は、服を買ったり外出したりするのが好きだったのですが、おうち時間が増えたことで出費も減り、せっかくなら生活費を見直そう！と思い、まずは携帯電話料金を見直すことにしました。
                </p>
                <p>
                  会社の先輩たちが「楽天モバイル良いよ」という話をしていたのを思い出して、色々と調べたんです。
                  <br />
                  携帯電話会社は店舗に行かないと乗り換えられないというイメージがあって面倒だと思っていましたが、
                  <TxtMarker as="em">
                    楽天モバイルはすべてWeb上で手続きができることを知って、とても魅力的
                  </TxtMarker>
                  に感じました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  調べはじめてからどれくらいの期間で契約を決めたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  数日後には契約を決めました。ほかの携帯電話会社も検討したのですが、最終的な決め手はプラン料金の安さでした。以前の携帯電話会社では毎月5千円以上払っていたので、節約に目覚めた自分にとっては一番大きなポイントでした。
                  <br />
                  ただ、「安定してつながるのかな？」という不安が少しあったので、当時プラン料金1年無料キャンペーン※をやっていたこともあり、以前の携帯電話会社の契約を残したまま新規で契約しました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ご契約手続きは店舗ではなくWebでされたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、iPhoneを使ってWebから申し込みました。
                  <TxtMarker as="em">
                    本人確認も「AIかんたん本人確認（eKYC）※」ですぐに完了したので、契約にかかった時間は15分程
                  </TxtMarker>
                  だったと思います。びっくりするくらい簡単でしたね。
                </p>
                <p>
                  実際に楽天モバイルを利用してみると、とても安定してつながるので以前利用していた携帯電話会社はすぐに解約しました。
                </p>
                <TxtCap as="p">
                  ※
                  <LinkNormal
                    href={`/guide/verify/ekyc/?l-id=uservoice_${articleNum}_guide_verify_ekyc`}
                  >
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="動画視聴もビデオ会議もモバイルデータ通信で快適です"
              subTitle="家のWi-Fiよりも速いデータ通信に大満足！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルのデータ通信の安定性にご満足いただいているとのことですが、データ通信の速度はいかがでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても速いと思います。
                  <TxtMarker as="em">家のWi-Fiより速いことも多い</TxtMarker>
                  です。※
                  <br />
                  動画を見ていて「何だか遅いな…」と感じる時は、家のWi-Fiにつながっているので、すぐに楽天モバイルの回線に切り替えて、続きを楽しんでいます。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>動画はかなり視聴されるのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、YouTubeの動画や動画配信サービスで映画をよく見ています。お風呂に入っている時や、寝る前にリラックスしながら楽しむことが多いです。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  なるほど。リラックスして動画を楽しむには、安定したデータ通信や通信速度が大事ですよね。
                </p>
                <p>
                  ご自宅のWi-Fiより速いことも多いとのことですが、楽天モバイルのテザリングを利用されることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、仕事で時々利用しています。
                  <TxtMarker as="em">
                    ビデオ会議も多いので、データ利用量はかなり多い
                  </TxtMarker>
                  と思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>毎月のデータ利用量はどれくらいですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  先ほど確認したら、
                  <TxtMarker as="em">先月は60GBを超えていました。</TxtMarker>
                  どれだけ使っても月最大2,980円（税込3,278円）なので、安心して使うことができます。
                  <br />
                  友人や知り合いと節約のことが話題になる時は、楽天モバイルをおすすめしています。
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="貯まった楽天ポイントの利用で毎月の携帯電話料金がさらにおトクになっています！"
              subTitle="日常的に楽天Edyや楽天市場を利用するから"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外に楽天グループのサービスをご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Edy機能付きの楽天カードを使っていて、日常的な買い物はほとんど楽天カードや楽天Edyで支払っています。
                  <TxtMarker as="em">
                    楽天ポイントがたくさん貯まりますし、貯まったポイントを毎月の携帯電話料金の支払いに利用できるのでとってもおトク
                  </TxtMarker>
                  ですね。
                  <br />
                  楽天モバイルの契約で楽天市場でのお買い物ポイントが＋1倍※になったので、楽天市場でアクセサリーや服、家具など、割と大きな金額の買い物をすることもあります。
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
                <p>
                  普段の生活の中で効率的にポイントを貯めて活用されているのですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。今も3,000ポイント程貯まっているので、ポイント利用で今月も携帯電話料金がおトクになりそうです。
                </p>
                <p>
                  プラン料金の安さやポイントの貯まりやすさ、日本全国の通信エリアでデータ容量を気にする必要がないところ※など、楽天モバイルに大満足なので、家族にもすすめるつもりです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ぜひよろしくお願いします。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              楽天モバイルなら月最大2,980円（税込3,278円）で安定した高速回線が無制限※でご利用いただけます。
            </p>
            <p>
              安定したデータ通信の利用も固定費の削減もどちらも譲れないとお悩みの方は、楽天モバイルに乗り換えたことで、ご自宅のWi-Fiよりも速いデータ通信を利用できるようになり、さらに毎月の携帯電話料金が安くなってしっかりと貯金を増やされた下村さんのように、楽天モバイルをはじめてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年4月15日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <TxtCap as="p" className={Utils['Mt-16']}>
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
                  '家族全員で楽天モバイルに乗り換え！家族割よりもおトクです',
                userInfo: '田丸さん親子（仮名・40代／10代男性／東京都）',
                img: 'avator-17.png',
                description: '以前ガラケーをスマホに変更したら、デ...',
                href: `/uservoice/17/?l-id=uservoice_${articleNum}_uservoice_17`,
              },
              {
                title:
                  'スマホデビューを楽天モバイルで！ネットゲームを楽しんでいます',
                userInfo: '末広さん（仮名・10代男性／福岡県）',
                img: 'avator-16.png',
                description: '楽天モバイルを契約するまで、スマホも...',
                href: `/uservoice/16/?l-id=uservoice_${articleNum}_uservoice_16`,
              },
            ]}
          />

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ReturnUserVoiceList directory={articleNum} />
          </div>

          <FastconvertBnr className={Utils['Mt-32']} directory={articleNum} />

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

export default Uservoice18
