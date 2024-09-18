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
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice37: NextPage = () => {
  const pagetitle = 'データ無制限でギガ不足から解放'
  const pageHeading =
    'SNSの動画を見放題！データ無制限でギガ不足から解放されました'
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

  const articleNum = '37'
  const userName = '矢部'

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
        description="データ無制限で動画を見放題！乗り換えとiPhoneの購入でもらった楽天ポイントで旅行に行きました（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年10月21日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  家族で長年同じ携帯電話会社を利用していると、「なんとなく同じ携帯電話会社を使い続けているけど、このままで良いのかな」と料金プランや契約内容に疑問を持つことはありませんか？
                </p>
                <p>
                  家族全員で同じ携帯電話会社の家族割を利用していると、乗り換えにくかったり、料金プランの変更が面倒だったりと、携帯電話料金の見直しを後回しにしがちです。
                </p>
                <p>
                  今回は、家族割の利用をやめて家族全員で楽天モバイルに乗り換えた矢部さん（仮名）に、乗り換えの経緯や現在の状況を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性・神奈川県）"
            periodOfUse="10カ月"
            dataUseage="30～40GB以上"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="Instagramでリール視聴を思い切り楽しんでいます"
              subTitle="家族で5GBシェアからデータ使い放題に！"
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
                  社会人になると同時に、自分で携帯電話料金の支払いをすることになったので、利用料金を見直そうと思ったのがきっかけです。
                </p>
                <p>
                  乗り換え先をいろいろと調べてくれていた父が「楽天モバイルが良いんじゃないか？」とすすめてくれて、ちょうどCMでも見かけて、データ使い放題なのに安くて良いなと思って決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。以前契約されていた携帯電話会社では、どのような料金プランをご利用になっていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  家族で5GBのデータ容量をシェアする料金プランを利用していました。私と両親の3人で5GBのデータ容量を分け合っていたので、データ通信を良く使うようになった私が4GB、両親がそれぞれ500MBしか使えず、かなりストレスが多かったですね。
                </p>
                <p>
                  データ容量が足りなくなったときにデータ容量をチャージしていたのですが、1GBチャージするのに1,100円（税込）もかかるので、金銭面でも結構な負担になっていました。
                </p>
                <p>
                  それに、無料通話が付いていない料金プランだったので、短い通話をするだけでも通話料金が気になってしまって早めに電話を切っていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、それはとてもストレスが多かったですね。楽天モバイルに乗り換えてから、スマホの使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。Instagramが好きなので、通勤の往復でリールをよく見るようになりました。短い動画なので、ついつい見てしまって、気づいたら長時間見ていたということも少なくありません。
                </p>
                <p>
                  以前契約していた携帯電話会社ではデータ容量を使いすぎないように、外出先でInstagramを見るのを我慢していたんです。でも
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えてからはデータ利用量を気にしなくても良くなったので通勤中に好きなだけリールを楽しんでいます！
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※
                  公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>毎月どれくらいデータ通信を利用していますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私一人で30GBから40GBくらいですね。それ以上になる月もあります。リールは動画ですから、たくさん見るとギガもたくさん使うみたいです。これだけ使っても毎月3,278円（税込）なのはとても助かります。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、確かにショート動画といっても、たくさん視聴するとデータ利用量が多くなりますよね。矢部さんが乗り換えた今、ご家族は以前の携帯電話会社を利用し続けているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>両親も最近、楽天モバイルに乗り換えました。</p>
                <p>
                  両親は以前契約していた携帯電話会社を20年ぐらい使い続けていたんですが、私がスマホをおトクに使っているのを見て、楽天モバイルに乗り換えようと思ったみたいです。
                  <TxtMarker as="em">
                    両親は3GBくらいしか使わないので、毎月千円くらいになったと喜んでいます。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社は通話料金が気になるとおっしゃっていましたが、そちらはいかがでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Rakuten Linkアプリを使い始めてから、
                  <TxtMarker as="em">
                    ついつい話し込んで長電話をしても通話料金の心配がなくて安心です※。
                  </TxtMarker>
                  ストレスが全部解消されて、乗り換えて本当に良かったなって思います。
                </p>
                <TxtCap as="p">
                  ※
                  （0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                  <LinkNormal href="/faq/detail/00001887/?l-id=uservoice_37_faq_detail_00001887">
                    対象外番号一覧
                  </LinkNormal>
                  をご確認ください。アプリ未使用時30秒22円。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/37/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="乗り換えでもらえたポイントを使って旅行もできました"
              subTitle="古いiPhoneを下取りして新しいiPhoneに買い替え！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えた際に、スマホの買い替えはされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。iPhone
                  13を購入しました。父が乗り換え先を探してくれているときに、「
                  <TxtMarker as="em">
                    iPhoneは楽天モバイルが一番安価だ
                  </TxtMarker>
                  」※と教えてくれたので、乗り換えと同時に買い替えました。
                </p>
                <TxtCap as="p">
                  ※
                  2021年12月13日時点。NTTドコモ、au、ソフトバンクとのiPhone本体代金の比較(弊社調べ)
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。楽天モバイル買い替え超トクプログラム※などはご利用になられましたか？
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_37_service_replacement-program_01">
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000円（不課税）のお支払いが必要となる、または返却不可となる場合があり。機種変更が可能な製品は、本プログラム対象製品に限る。
                </TxtCap>
              </Interviewer>

              <IphoneUpgradeBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                serialNumber="02"
                lazy={true}
              />

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、利用していません。いつもiPhoneを4年くらい使って、フリマアプリで売ってから新しいiPhoneを購入していたので、返却が必要な「楽天モバイル買い替え超トクプログラム」は契約しませんでした。
                </p>
                <p>
                  ただ、乗り換えるときに楽天モバイルの下取りサービス※があると知って、フリマアプリを使わず、楽天モバイルに下取りしてもらいました。
                </p>
                <p>
                  <TxtMarker as="em">
                    乗り換えとiPhoneの購入で楽天ポイントももらえた※ので、楽天トラベルで楽天ポイントを使って旅行に行きました。
                  </TxtMarker>
                  余った楽天ポイントは楽天モバイルの利用料金に充てたので、乗り換えるだけでかなりおトク感がありましたね。
                </p>
                <p>
                  次にスマホを買い替えるときも、iPhoneを下取りしてもらって楽天キャッシュにして、旅行をしたりおトクにiPhoneを買い替えたりしたいです。
                </p>
                <TxtCap as="p">
                  ※ スマホ下取りサービスについて、
                  <LinkNormal href="/service/tradein/?l-id=uservoice_37_service_tradein">
                    詳細はこちら
                  </LinkNormal>
                  。<br />※ 定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_37_campaign">
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
              携帯電話会社を長く利用していると、料金プランを見直さないまま、いつの間にか割高になっていたということも珍しくありません。
            </p>
            <p>
              乗り換えでデータ容量を気にせずSNSを楽しめるようになった矢部さんのように、データ容量を節約している方や、SNSの動画を見ないように我慢しているという方は、ぜひ楽天モバイルへの乗り換えをご検討ください。
            </p>
            <TxtCap as="p">
              ※
              公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
              <br />※
              当ページの内容は2022年10月21日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '先Rakuten Linkの無料通話がとっても便利！毎日利用しています',
                userInfo: '島田さん（仮名・40代女性／千葉県）',
                img: 'avator-36.png',
                description:
                  '楽天モバイルのプラン料金が安いことと、近くに店舗があることです...',
                href: '/uservoice/36/?l-id=uservoice_37_uservoice_36',
              },
              {
                title: '乗り換えでポイ活がより効率的に！スマホ代も大幅節約',
                userInfo: '川原さん（仮名・40代女性／兵庫県）',
                img: 'avator-35.png',
                description:
                  '以前契約していた携帯電話会社を20年以上利用していたんですが、夫から...',
                href: '/uservoice/35/?l-id=uservoice_37_uservoice_35',
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

export default Uservoice37
