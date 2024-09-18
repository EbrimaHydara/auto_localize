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
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { FreeCallBnr } from '@components/include/uservoice/FreeCallBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice25: NextPage = () => {
  const pagetitle = '通話かけ放題が仕事で重宝'
  const pageHeading =
    '店舗で家族5人でもスピード乗り換え！かけ放題オプションも便利'
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

  const articleNum = '25'
  const userName = '佐々木'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220613', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="短い通話が多いので、通話かけ放題のオプションサービスがとても便利（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年6月13日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「通話する頻度やデータ利用量が家族それぞれ違うけど、みんなで同じ携帯電話会社にしたい」とお考えの方もいるのではないでしょうか。世代が異なれば普段のスマホの使い方もさまざまで、全員に適した料金プランを同じ携帯電話会社で見つけるのは、至難の業です。
                </p>
                <p>
                  今回は、通話頻度もデータ利用量もまったく異なる家族全員が楽天モバイルに乗り換えて、それぞれ快適に過ごされているという佐々木さん（仮名）に、詳しいお話を聞きました。
                </p>
                <TxtCap as="p">
                  ※かけ放題オプションは、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。一部対象外番号あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／千葉県）"
            periodOfUse="7カ月"
            dataUseage="15～20GB未満"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="家族全員で一緒に乗り換えました！"
              subTitle="乗り換え先は楽天モバイル以外、選択肢になかった"
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
                  シンプルな料金プランです。
                  <br />
                  乗り換えをする時、私と夫だけでなく、それぞれの親も一緒に乗り換えようと決めていました。私の父は60歳近く、夫の両親も60代とスマホに不慣れな世代で、何かわからないことがあると私に聞いてきます。料金プランやスマホが同じだと質問に答えやすいので、家族全員で一緒に乗り換えられる料金プランを探していました。
                  <br />
                  いざ乗り換え先を検討し始めると、どちらの親もあまりスマホを使わないので、データ利用量の多い夫や私と同じ料金プランを選ぶと、料金が無駄に高くなってしまうことがネックでした。
                  <br />
                  その点、
                  <TxtMarker as="em">
                    楽天モバイルは1つの料金プランの中でデータ利用量に応じて料金が決まります。毎月3GBも使わない親たちは千円程度と安く利用できる上に、データ利用量が多い私たちと同じ料金プランが利用できるので、乗り換えを決めました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えを決めるときに参考にしたものはありますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルを利用している友人がいたのでいろいろと話を聞いたり、口コミを見たりして、メリット・デメリットを踏まえて検討しました。その中でも友人が料金プランが安くて良いことや、問題なく利用できていると教えてくれたことが後押しとなり、楽天モバイルにしようと決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えはWebサイトで手続きをされましたか？店舗でしたか？</p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  家族全員、まとめて楽天モバイルの店舗で手続きをしました。5人でまとめて乗り換えだと、ほかの携帯電話会社では午前中に店舗に行っても時間がかかり、契約が完了して開通する頃には夕方ということもあったのですが、店舗では1時間程度でスムーズに手続きができました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  大人数の手続きでもスムーズに完了されたのですね。
                  <br />
                  乗り換え時にスマホの買い替えはされましたか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、以前利用していたスマホの本体代金の支払いが終わったタイミングだったので、全員がiPhoneを新しく購入しました。私と夫、夫の父がiPhone
                  13 Pro Maxで、私の父と夫の母がiPhone 13です。
                  <br />
                  使い方でわからないことがあったら私に聞きたいという親たちの希望があり、同じスマホで揃えました。
                </p>
                <p>
                  キャンペーンを利用して、おトクにiPhoneを購入できたこともよかったです。
                </p>
                <TxtCap as="p">
                  ※国内の携帯キャリアにおいて最安値の本体価格で販売しています。最新のiPhoneを購入するなら、楽天モバイルが一番おトクです（2022年3月18日時点）。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/product/iphone/?l-id=uservoice_25_product_iphone"
                >
                  iPhoneをおトクに購入できるキャンペーンについて詳しくはこちら
                </ButtonSecondaryLarge>
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="夫婦2人で毎月2万円以上も支払いが減って大きな節約に"
              subTitle="生活費にも大きな変化！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            ></Interview>
            <Interviewer>
              <p>
                楽天モバイルに乗り換えて、以前と比較して携帯電話料金に変化はありましたか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                以前の携帯電話料金は、私が毎月1万円程度、夫は1万8千円程度と、かなり高額でした。
              </p>
              <p>
                特に夫は車の運転をする仕事でスマホをカーナビ代わりに使うこともあり、データ利用量がかなり多く、データ容量が大きく、かなり高めの料金プランを契約していたんですが、それでも足りなくて、たびたび追加のギガを購入していたので、いつも携帯電話料金が高額になっていました。
              </p>
              <p>
                楽天モバイルに乗り換えて、夫は3千円程度に、私は10分（標準）通話かけ放題※のオプションを追加しても3千円程度と大幅に下がったので、
                <TxtMarker as="em">
                  合計で1カ月あたり2万円以上の節約になりました。
                </TxtMarker>
              </p>
              <TxtCap as="p">
                ※10分（標準）通話かけ放題は、2022年6月30日までのプランです。2022年7月1日に「15分（標準）通話かけ放題」へ自動移行されました。
                <br />
                ※15分（標準）通話かけ放題は、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                SMSは1日の送信上限数あり。
              </TxtCap>
            </Interviewee>
            <Interviewer>
              <p>それはとても大きな変化ですね。</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                はい。夫はデータ使い放題※になって、
                <TxtMarker as="em">
                  データ利用量を気にしたり、追加のギガを購入したりする必要がなくなってストレスフリー
                </TxtMarker>
                だと言っていました。私はデータ容量を使っても20GB未満なので、
                <TxtMarker as="em">
                  以前よりも携帯電話料金がずっと安くなったのを実感
                </TxtMarker>
                しています。
              </p>
              <TxtCap as="p">
                ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              </TxtCap>
            </Interviewee>

            <div className={Utils['Mt-64']} />
            <Interview
              title="車載ナビとスマホを接続して、ハンズフリー通話で便利に使っています"
              subTitle="10分（標準）通話かけ放題を仕事でも有効活用"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            ></Interview>

            <Interviewer>
              <p>
                かけ放題のオプションを利用されているとのことですが、スマホでの通話はどれくらい利用されていますか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                仕事柄、少なくとも数分程度の通話を毎日4～5回はしています。私は配送の仕事を手伝っているのですが、お客様からの電話を受けたり、連絡したりと頻繁に電話を利用するので、10分（標準）通話かけ放題※のオプションサービスを契約しました。
              </p>
              <p>
                自宅にいる時はもちろん、一番便利だなと感じるのは、車に乗っている時です。私は車載ナビとスマホを接続してハンズフリー通話でお客様と連絡をとっているので、信号待ちの時間などの短い通話が多いです。
                <br />
                ほんの数分でも、回数が増えれば通話料金も軽視できない金額になるので、
                <TxtMarker as="em">
                  10分※までは何度かけても月1,100円なのはおトクです。
                </TxtMarker>
              </p>
              <p>
                せっかく携帯電話料金が安い楽天モバイルに乗り換えたのに、通話料金が高くなってしまっては元も子もないので、電話をよく使う人は10分（標準）通話かけ放題のオプションを利用するのがおすすめですね。
              </p>
              <p>
                アプリで無料通話ができるRakuten
                Link※も便利ですが、私の車では車載ナビと接続する場合には利用できないので、その時の生活スタイルによって使い分けることも大切なのかなと思います。
              </p>
              <TxtCap as="p">
                ※10分（標準）通話かけ放題は、2022年6月30日までのプランです。2022年7月1日に「15分（標準）通話かけ放題」へ自動移行されました。
                <br />
                ※15分（標準）通話かけ放題は、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                SMSは1日の送信上限数あり。
                <br />
                ※Rakuten
                Linkアプリを使用した場合、国内通話は無料となります。一部対象外の電話番号があります。
              </TxtCap>
            </Interviewee>

            <FreeCallBnr
              className={Utils['Mt-32']}
              directory={articleNum}
              lazy={true}
            />

            <Interviewer>
              <p>本日は貴重なお話をお聞かせいただきありがとうございました。</p>
            </Interviewer>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              家族それぞれに合った料金プランが見つからないとお悩みの方は、スマホの使い方が異なる家族全員で楽天モバイルに乗り換えたことで、携帯電話料金が以前よりおトクになった佐々木さんのように楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年6月13日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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
                  '家族みんなで楽天モバイル！安定した回線で動画を楽しんでいます',
                userInfo: '本多さん（仮名・50代男性／千葉県）',
                img: 'avator-24.png',
                description: '月々の携帯電話料金が安価で、コストパ...',
                href: '/uservoice/24/?l-id=uservoice_25_uservoice_24',
              },
              {
                title:
                  '5G使い放題で動画をサクサク視聴！学生にもうれしい料金プラン',
                userInfo: '馬目さん（仮名・20代男性／埼玉県）',
                img: 'avator-23.png',
                description: '親に支払ってもらっていた携帯電話料金...',
                href: '/uservoice/23/?l-id=uservoice_25_uservoice_23',
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

export default Uservoice25
