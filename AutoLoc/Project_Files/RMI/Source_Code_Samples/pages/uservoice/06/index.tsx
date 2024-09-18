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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkNormal } from '@components/atoms/Link'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice06: NextPage = () => {
  const pagetitle = 'データ通信が快適。毎月約2万円の節約'
  const pageHeading = '滋賀県内でもデータ通信が快適。夫婦で毎月約2万円の節約！'
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

  const articleNum = '06'
  const userName = '中野'

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
        description="楽天モバイルへの乗り換えで料金は下がり、データ使い放題のおかげで自由度が上がった（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年1月14日"
            readTime="1"
            readTimeSec="30"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「Wi-Fiなしで動画を視聴したり、写真をクラウドストレージに保存するのはデータ容量の消費が心配」とお悩みの方もいらっしゃるのではないでしょうか。
                </p>
                <p>
                  今回はご夫婦で楽天モバイルに乗り換えられた滋賀県にお住いの中野さん（仮名）に、データ使い放題ならではの使いこなし術をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／滋賀県）"
            periodOfUse="6カ月"
            dataUseage="30GB前後"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="通信費が大幅に下がり、家計は大助かり"
              subTitle="スマホも光回線も楽天に乗り換え"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだきっかけを教えて下さい。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  使用しているiPhoneが古くなってきたので、新しいiPhoneに買い替えるのと同時に、スマホ代も見直そうと思ったのがきっかけです。
                </p>
                <p>
                  他社も検討しましたが、その時点では同じような内容で月額最大2,980円（税込3,278円）という料金はなかったので、楽天モバイルを選びました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社で契約していた料金プランはどのようなものでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  毎月50GB程度使えるプランを利用していました。
                  <br />
                  以前住んでいた家には構造上Wi-Fiが入りにくい部屋があり、頻繁にWi-Fiを切ってモバイルデータ通信を利用しなければならなかったため、データ容量が大きいプランにしていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社と比較して、スマホ代はどのように変化しましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前は夫婦それぞれで毎月1万円前後払っていました。現在は1年無料キャンペーン※を利用しているので、合計すると
                  <TxtMarker as="em">
                    差額が毎月約2万円もあり、変化がとても大きい
                  </TxtMarker>
                  です。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  毎月約2万円の節約は大きいですね。ほかにも楽天のサービスは何か利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホの乗り換えと同時に、自宅の光回線も楽天ひかりに乗り換えました。
                  <br />
                  光回線でもプラン料金1年無料キャンペーン※を利用できたので、家計の通信費は大幅に下がって助かっています。
                </p>
                <p>
                  以前の携帯電話会社では、スマホと同時に光回線を契約して割引を受けていましたが、スマホを解約してしまうとセット割引がなくなり、光回線の料金は高くなってしまうようでした。
                  <br />
                  このタイミングで光回線も楽天ひかりにおトクに乗り換えられて良かったです。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル会員であることが条件。楽天ひかりの1年間無料キャンペーン詳細は
                  <LinkNormal
                    href={`/hikari/campaign/one-year-free/new.html?l-id=uservoice_${articleNum}_hikari_campaign_one-year-free_new`}
                  >
                    こちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/06/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="写真アップロードやオンラインレッスン、音楽のストリーミング再生も使い放題で安心"
              subTitle="毎月のデータ通信量は30GB以上"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>毎月のデータ通信量はどれくらいですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  毎月30GB以上になります。動画の視聴が多いのですが、昨年子どもが生まれたので、最近は写真をたくさん撮ってGoogleフォトにアップロードするのに使っていますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  撮った写真をクラウドストレージにすぐにアップロードできるのは便利ですね。奥様もデータ通信の利用は多めですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね、妻はSNSに写真を投稿するのに使っているようです。頻繁に投稿するので、データ使い放題※を活用しています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  中野さん自身は写真のアップロードのほかには普段どのようなことに利用していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  オンラインで英会話を学んでいるのですが、外出先ではスマホでレッスンを受講しています。1クラス40分程度で、講師とのビデオ通話のため、かなりのデータ通信を利用していると思います。
                </p>
                <p>
                  ほかにも、家族でよくキャンプや旅行に行くのですが、私のスマホをカーナビの代わりにして、妻のスマホでは音楽のストリーミングサービスや動画配信サービスを利用して移動を楽しんでいます。これもデータ使い放題ならではだと思います。
                </p>
                <p>
                  子どもが大きくなって行けば、子どもに動画を見せる機会も増えると思うので、データ通信の利用はますます頻繁になりそうですね。
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="生活圏がしっかりカバーされているので安心"
              subTitle="仕事で琵琶湖を一周しても楽天モバイルは安定している"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  滋賀県にお住まいですが、楽天モバイルのデータ通信は安定していると感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、仕事で時々東京へ行くのですが、滋賀県も東京都心と遜色ありません。
                  仕事柄、琵琶湖をぐるっと一周することもあり、滋賀県内を広範囲に移動していますが、
                  <TxtMarker as="em">
                    つながらないと感じたことはほとんどありません。
                  </TxtMarker>
                  契約当初は若干つながりにくかったエリアも、今では解消されています。
                </p>
                <TxtCap as="p">
                  ※環境によってつながりにくい場合があります。詳しくは
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    提供エリア
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  中野さんの生活圏はしっかりカバーされている状態なのですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね、普段の暮らしでつながらないと思うことはないです。
                </p>
                <p>
                  <TxtMarker as="em">
                    料金は下がり、データ使い放題のおかげで自由度が上がった
                  </TxtMarker>
                  のは、楽天モバイルに乗り換えた大きなメリットですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルを使いこなしていらっしゃいますね。データ使い放題の楽天モバイルならではの活用術を詳しくお聞かせいただき、ありがとうございました。
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
              データ容量を気にせずスマホを使いたい！今よりもスマホ代を下げたいという方は、シンプルなワンプランでどれだけ使っても月額最大2,980円（税込3,278円）の楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年1月14日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '新社会人生活を楽天モバイルで。スマホ代を気にせず動画も見放題',
                userInfo: '高田さん（仮名・20代女性／埼玉県）',
                img: 'avator-05.png',
                description: '楽天モバイルを使っている兄にすすめら...',
                href: `/uservoice/05/?l-id=uservoice_${articleNum}_uservoice_05`,
              },
              {
                title:
                  '3世代家族みんなで楽天モバイル。使い放題で家族全員が楽しめる',
                userInfo: '藤木さん（仮名・40代女性／大阪府）',
                img: 'avator-04.png',
                description: '両親が高齢なこともあり、わかりやす...',
                href: `/uservoice/04/?l-id=uservoice_${articleNum}_uservoice_04`,
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

export default Uservoice06
