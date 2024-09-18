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
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice30: NextPage = () => {
  const pagetitle = 'テザリングで2拠点生活も快適'
  const pageHeading = 'ひと月で150GB使っても安心！テザリングで2拠点生活も快適'
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

  const articleNum = '30'
  const userName = '立川'

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
        description="単身赴任先でも移動の電車でもテザリングをフル活用して、2拠点生活を快適に過ごしました。 （楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年7月22日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「自宅と単身赴任先、どちらでも光回線を契約すると固定費の負担が大きい」「単身赴任中のインターネットはスマホのテザリングでなんとかできないか」とお悩みの方もいるのではないでしょうか。
                </p>
                <p>
                  今回は、単身赴任先でのフルリモートワークに楽天モバイルのテザリングを活用し、ご自宅がある静岡県と単身赴任先の神奈川県の2拠点生活を便利に過ごした立川さん（仮名）に、楽天モバイルを選んだきっかけや経緯について詳しくお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代男性・静岡県）"
            periodOfUse="2年1カ月"
            dataUseage="20GB前後（現在）、150GB（2021年6月頃まで）"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="毎月150GB以上のデータ通信を利用していました"
              subTitle="フルリモートワークでテザリングを活用"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけや、楽天モバイルを選んだ理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  単身赴任先でのインターネット回線として、スマホのテザリングを利用しようと考えたのがきっかけです。
                  <br />
                  赴任先でも固定電話や光回線を引くのは費用がかかり負担が増えるので、以前契約していた携帯電話会社のテザリングを試してみたんです。毎月50GBまで使える料金プランだったのですが、あっという間にデータ容量を使い切ってしまいました。
                </p>
                <p>
                  すぐに通信制限がかかってしまっては仕事に支障が出るので、データ使い放題※の楽天モバイルに乗り換えました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※楽天モバイルではテザリングのオプションを無料でご利用いただけます。
                  <LinkNormal
                    href={`/service/tethering/?l-id=uservoice_${articleNum}_service_tethering`}
                  >
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ほかの携帯電話会社と比較検討したり、参考にした口コミはありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルのサービスが始まったばかりで参考になる口コミがほとんどなかったので、ほかの携帯電話会社の料金プランと比較して決めました。
                  <br />
                  他社の料金プランと比較してみて、
                  <TxtMarker as="em">
                    楽天モバイルのデータ使い放題※で月最大2,980円（税込3,278円）という料金は破格の安さだと気付いた
                  </TxtMarker>
                  んです。
                </p>
                <p>
                  ただ本当にデータ使い放題なのか不安だったので、店舗で直接説明を聞いてから契約しました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換え後の毎月のデータ利用量はどれくらいでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  単身赴任をした当初、ちょうどコロナ禍でリモートワークに移行したので、毎月150GB以上利用していました。頻繁にオンライン会議にも参加していたので、データ利用量はかなり多かったです。
                </p>
                <p>
                  自宅がある静岡県と赴任先の神奈川県を往復する電車の中でも仕事をしていたので、テザリングはかなり活用しましたね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>オンライン会議の通信状況はいかがでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  通信速度は快適で、映像の乱れや音飛びすることなく会議ができました。大容量のデータのやりとりも問題なく、とても満足しています。
                  <TxtMarker as="em">
                    プライベートでも仕事でも、十分実用的だと感じました。
                  </TxtMarker>
                </p>
                <p>
                  それでいて、以前は高速データ容量を追加したりして毎月1万8千円程かかっていた携帯電話料金が、楽天モバイルに乗り換えて3千円程と大幅に下がり、生活費の負担がなり軽くなりました。
                  <br />
                  携帯電話料金は安くなったのに、データは使い放題※になり、コストパフォーマンスの高さを感じます。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="契約の見直しが不要でとっても便利でした"
              subTitle="2拠点生活が終わって使い方が大きく変わっても安心のワンプラン！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>現在も2拠点生活をされているのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いいえ、1年程前に転職して現在は静岡県の自宅に戻っています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>そうだったんですね。では、ご利用状況も変わりましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。自宅は楽天ひかりを引いているので、家の中ではテザリングをほとんど使わなくなりました。テザリングを使うのは通勤時くらいで、iPadを接続して利用しています。
                </p>
                <p>
                  毎月150GB以上使っていたときと比較すると、データ利用量が大きく減って、現在は20GB未満で、まれに20GB超える程度になりました。なので、携帯電話料金はさらに安くなって2千円程に抑えられる月が多いです。
                </p>
              </Interviewee>

              <Interviewer>
                <p>毎月150GB使われていたときから考えると変化が大きいですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。楽天モバイルは生活スタイルが大きく変わっても、データ利用量に合わせて自動的に今の自分に見合った利用料金になるので、
                  <TxtMarker as="em">
                    料金プランを変更する手間がかからなかったのがとても良かったです。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルのほかに何か楽天のサービスをご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えたことを機に、楽天カードや楽天ペイ※など、楽天経済圏※の利用もはじめました。転職して自宅に戻ってからは、楽天ひかりも契約しています。
                </p>
                <p>
                  普段の買い物の支払いに楽天カードと楽天ペイを使っているので、ポイントがたくさん貯まりますし、貯めたポイントを毎月の携帯電話料金の支払いに使えるのも、楽天モバイルの魅力のひとつですね。
                </p>
                <TxtCap as="p">
                  ※楽天ペイはQRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkIconAfter
                    href="https://pay.rakuten.co.jp/"
                    target="_blank"
                  >
                    詳しくはこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                  <br />
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
              単身赴任先と自宅の2拠点生活の中で、テザリングを活用してフルリモートワークをしていた立川さんのように、たくさんデータを使いたいという人は楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <p>
              楽天モバイルなら、生活や使い方に大きな変化があっても、シンプルなワンプランなので料金プランを変更するストレスがありません。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年7月22日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'かけ放題オプションが就活に便利！学生にオススメの料金プラン',
                userInfo: '原田さん（仮名・20代男性／東京都）',
                img: 'avator-29.png',
                description: '以前契約していた携帯電話会社での、デ...',
                href: '/uservoice/29/?l-id=uservoice_30_uservoice_29',
              },
              {
                title:
                  'データ無制限でテザリングをフル活用！料金の安さにも大満足！',
                userInfo: '鳥光さん（仮名・20代男性／大阪府）',
                img: 'avator-28.png',
                description: '大満足ですね。なんといっても、通信速...',
                href: '/uservoice/28/?l-id=uservoice_30_uservoice_28',
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

export default Uservoice30
