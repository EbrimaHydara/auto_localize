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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice33: NextPage = () => {
  const pagetitle = '約3GB利用でも乗り換えでおトクに'
  const pageHeading =
    '月々のデータ利用量が少なくても、乗り換えでおトクになった！'
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

  const articleNum = '33'
  const userName = '山田'

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
        description="データ利用量に差がある月があってもおトク。自動的に最適な利用料金になるから安心！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年9月20日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「普段はデータ通信をほとんどしないけど、たまにデータ利用量が増えるので料金プランに悩む」と、料金プランにお困りの方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、普段はご自宅のWi-Fiを利用しているのでモバイルデータ通信はほとんどしない山田さん（仮名）に、楽天モバイルに乗り換えたことでデータ利用量が少なくてもおトクになったお話を伺いました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（50代女性・神奈川県）"
            periodOfUse="11カ月"
            dataUseage="1～3GB"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ通信の利用量に月ごとの差があってもおトク"
              subTitle="乗り換えで毎月最大7,000円も安くなりました！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思った理由やきっかけはなんですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社の利用料金が高くて、もっと月々の負担を減らしたいと思ったのがきっかけです。
                </p>
                <p>
                  データ容量が3GBの料金プランを利用していましたが、主に自宅で仕事をしていてWi-Fiが使えるので、1カ月で1GBも使わないですし、月々3,500円程度ということもあって、それで十分でした。
                </p>
                <p>
                  でも、
                  <TxtMarker as="em">
                    仕事柄Wi-Fi環境がまったくない場所へ行かなければならないことがあり、外出が重なるとデータ容量が不足しがち
                  </TxtMarker>
                  だったんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  データ容量が不足したときは、どのように対応していたのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  外出先ではできるだけスマホを使わないようにデータ通信を控えていましたが、どうしても足りない時はデータ容量をチャージしていました。
                </p>
                <p>
                  詳細な金額は覚えていませんが、追加するときは大体3,000円くらいから、多いときは基本料金と合計して月額8,000円を超える月もありました。
                </p>
                <p>
                  データ利用量が多い月にあわせて料金プランを変更することも検討したのですが、外出が少ない月は1GBを超えないので、データ容量が大きい料金プランでは持て余してしまうかもしれないと悩んでいました。
                </p>
                <p>
                  そこで、先に長男のスマホデビューで契約した楽天モバイルの使い勝手が良さそうなので、乗り換えることにしたんです。
                </p>
                <p>
                  乗り換える前は
                  <TxtMarker as="em">
                    3,500～8,000円ほど支払っていた携帯電話料金が、実際に乗り換えた後はほとんどの月で1,078円／月（税込）※になって、とてもおトク
                  </TxtMarker>
                  になりました。
                </p>
                <TxtCap as="p">※通話料等別</TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  お子様が先に楽天モバイルを利用されていたのですね。良さそうと感じたのはどこですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  しっかり電波もつながるし、シンプルなワンプランで、とてもわかりやすいところです。
                </p>
                <p>
                  1GB以下の月もあれば、3GBを超えてしまう月がある状態でも、
                  <TxtMarker as="em">
                    自動的に最適な利用料金になりますし、毎月の利用料金の支払いに楽天ポイントを利用できるのも便利
                  </TxtMarker>
                  で良いですね。
                </p>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/33/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="店舗で乗り換えて不安も解消されました"
              subTitle="乗り換えの決め手はCM！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  お子様が先に楽天モバイルでスマホデビューをしたというお話でしたが、楽天モバイルを選んだ理由はなにかありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  テレビでCMを見たのがきっかけです。2020年の5月ごろ、中学生になった長男のスマホデビューのために携帯電話会社を探していたとき、楽天モバイルのCMを見かけました。
                </p>
                <p>
                  有名なタレントさんがCMに出ているのを見て、楽天モバイルのシェアが広がっているんだなと思ったのを覚えています。よく知っている人が出ていると親近感がありますし、しっかりとした携帯電話会社だろうと、安心感も持てました。
                </p>
                <p>
                  他社の家族割なども少し気になっていたのですが、
                  <TxtMarker as="em">
                    ママ友に「無理に家族割を使わなくても安くなるよ」と教えてもらって
                  </TxtMarker>
                  、楽天モバイルにしました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。契約はWebサイトと店舗、どちらで手続きされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  長男も私も、契約するときに聞きたいことがあったので店舗で契約しました。
                  <TxtMarker as="em">
                    次男も中学生になったので、2022年3月に楽天モバイルの店舗で契約してスマホデビュー
                  </TxtMarker>
                  しています。
                </p>
                <p>
                  とてもスムーズで、手続きを始めてから30分程度で開通が終わり、聞きたかったこともすべて聞けたので安心しました。
                </p>
                <p>
                  新規契約やiPhoneを購入したときにもらった楽天ポイントは、月々の利用料金の支払いに充てました。息子たちがもらった楽天ポイントは、好きな物を買うのに使ったようです。
                </p>
                <TxtCap as="p">
                  ※定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_33_campaign">
                    詳しくはこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  楽天ポイントでいろいろとお買い物を楽しまれたようでなによりです。楽天モバイルには、楽天ポイントの倍率アップ以外にもさまざまなキャンペーンがありますので、ぜひご活用ください。
                </p>
                <p>
                  ところで、山田様やお子様は、2022年7月から始まった「楽メール※」というキャリアメールサービスはご存じですか？
                </p>
                <TxtCap as="p">
                  ※楽天モバイル公式メールサービスです。
                  <LinkNormal href="/service/rakumail/?l-id=uservoice_33_service_rakumail">
                    詳しくはこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はじめて知りました。楽天モバイルもキャリアメールが使えるようになったんですね。実は楽天モバイルを契約したとき、ひとつだけ不便を感じていたのがメールアドレスだったんです。
                </p>
                <p>
                  Gmailのようなフリーメールは、銀行口座の開設や保険の契約など、受け付けてくれないサービスがあって困っていました。でもキャリアメールなら受け付けてもらえるので、すぐにでも利用したいです。この後すぐ、メールアドレスを取得してみます。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  「楽メール」はRakuten
                  Linkアプリからご利用いただけるので、ぜひお試しください。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              山田さんのように普段はデータ容量をあまり使わないけれど、たまにデータ容量をたくさん使う月があるから料金プランに悩んでいるという方は、楽天モバイルがおトクです。
            </p>
            <p>
              楽天モバイルなら3GBまで
              980円／月（税込1,078円）、20GBまで1,980円／月（税込
              2,178円）、20GB超過後はどれだけ使っても最大2,980円／月（税込3,278円）※なので、お子さまが使いすぎてしまった月でも安心してご利用いただけます。
            </p>
            <p>
              毎月のデータ利用量が安定せず、月末にデータ通信速度に制限がかかったり、月々の利用料金のお支払いが高額になりがちで、料金プランにお悩みの方は、ぜひ楽天モバイルをご検討ください。
            </p>
            <TxtCap as="p">
              ※通話料等別。
              <br />
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年9月20日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '息子のキッズ携帯としても楽天モバイルが最適。家族全員が満足',
                userInfo: '高野さん（仮名・40代男性／広島県）',
                img: 'avator-32.png',
                description: '息子にキッズ携帯の代わりとしてスマホ...',
                href: '/uservoice/32/?l-id=uservoice_33_uservoice_32',
              },
              {
                title:
                  '乗り換えて良かった！データ使い放題とかけ放題でとっても快適',
                userInfo: '東野さん（仮名・30代女性／大阪府）',
                img: 'avator-31.png',
                description: '大満足ですね。なんといっても、通信速...',
                href: '/uservoice/31/?l-id=uservoice_33_uservoice_31',
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

export default Uservoice33
