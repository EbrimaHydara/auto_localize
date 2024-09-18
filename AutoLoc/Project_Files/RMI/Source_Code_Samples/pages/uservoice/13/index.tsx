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
import { ButtonRegular } from '@components/atoms/Buttons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice13: NextPage = () => {
  const pagetitle = '乗り換えで毎月約1万5千円も節約！'
  const pageHeading =
    '乗り換えで毎月約1万5千円も節約！周りにもおすすめしています'
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

  const articleNum = '13'
  const userName = '河浦'

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
        description="楽天モバイルは料金も安くて、データ通信も安定していて、店舗スタッフの対応も親切（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年3月4日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  初めて契約した携帯電話会社の料金プランを「高いけど乗り換えてもどこも同じ」と使い続けている方は、意外と多いのではないでしょうか。
                </p>
                <p>
                  今回は、20年間使い続けた携帯電話会社から楽天モバイルに乗り換え、モバイルルーターも手放したことで通信費を大幅に節約された河浦さん（仮名）に、楽天モバイルのおすすめポイントをお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性／宮城県）"
            periodOfUse="1年6カ月"
            dataUseage="20GB未満"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えて気づいた過去の無駄な支出"
              subTitle="20年間使い続けた携帯電話会社"
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
                  兄からデータ通信も安定しているし、使いやすいとおすすめされたのがきっかけです。以前使っていた携帯電話会社の契約プランと比べると、
                  <TxtMarker as="em">
                    月々のデータ容量は増えるのに、料金は圧倒的に安くなる
                  </TxtMarker>
                  ところに魅力を感じました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>いつ頃乗り換えされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2020年8月頃です。プラン料金1年無料キャンペーン※を利用して満足したので、キャンペーン適用期間終了後も継続して使っています。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前の携帯電話会社はどれくらいの期間利用されていましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  20年程使っていて、ケータイを持ち始めた時からずっと同じ携帯電話会社でした。なんとなく使い続け、料金プランを検討したこともなかったので、月1万2千円程かかることを当たり前だと思って払い続けていました。
                </p>
                <p>
                  さらに、外での仕事用にモバイルルーターを月5～6千円程で契約していたので、
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えるまでは、通信費に毎月1万8千円前後かかっていました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>今もモバイルルーターはお使いですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えて、外での仕事には楽天モバイルのテザリングを使うようになったので、モバイルルーターは解約しました。荷物が減り、通信速度も安定している※のでとても快適です。
                </p>
                <p>
                  無駄な支出も減り、利便性も上がって、過去の自分が乗り換えに迷っていたことすら不思議に思えてしまいます。
                </p>
                <TxtCap as="p">
                  ※実際のデータ速度は、環境等により異なります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換えて不便や不満はなかったということですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。毎月約1万5千円前後と大幅に通信費が下がり、データ通信は不安なく利用できて、満足しています。
                  <br />
                  仕事でお客様と頻繁にビデオ通話をするのですが、途中で
                  <TxtMarker as="em">
                    途切れるなどの問題が起きたこともありません。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、ほかに良かったと感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前は契約しているプラン内容も月々のデータ利用量もよく把握していませんでした。
                </p>
                <p>
                  いつもデータ容量を使い切っては追加でデータ容量の購入を繰り返して、結果的に月々の料金が高くなっていました。
                  <br />
                  楽天モバイルは、毎月のデータ利用量で料金が決まり、データ使い放題※で最大でも月々2,980円（税込3,278円）とわかりやすく、安心して使えるようになりました。
                </p>
                <p>
                  また、「my
                  楽天モバイル」※アプリで現在の利用状況を簡単に確認できるので、自分が毎月どれくらいデータ通信を使っているのかを把握できるようになったことも良かったです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※my
                  楽天モバイルは各種お手続き、料金やデータ容量など、手軽に確認できる公式アプリです。
                  <LinkNormal
                    href={`/guide/my-rakuten-mobile/?l-id=uservoice_${articleNum}_guide_my-rakuten-mobile`}
                  >
                    詳しくはこちら
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="親切な対応で、スマホに不慣れな人でも安心"
              subTitle="心配なことも店舗で解消！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご契約はオンラインと店舗（楽天モバイルショップ）、どちらでされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  近くの店舗でしました。
                  <TxtMarker as="em">
                    いろいろと親身になって相談に乗ってもらえた
                  </TxtMarker>
                  ので、契約に際して感じていた心配事も解消されました。契約後も、気になることは店舗で相談しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>例えばどのようなご相談をされているのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  機械に疎いので、主に操作面の悩みです。
                  <br />
                  乗り換え時に購入したOPPO A5
                  2020※からiPhoneへの機種変更を検討しているのですが、異なるOS同士でも必要なデータをきちんと移行できるのかなどの不安がありました。
                </p>
                <p>
                  そういった不安も丁寧に聞いてもらえて、実際にiPhoneを触りながら解決できるので、
                  <TxtMarker as="em">店舗があって良かった</TxtMarker>
                  なと感じます。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルでのOPPO A5 2020の販売は終了いたしました。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  店舗スタッフが直接対応するので、わからないこともすぐに解決しますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天モバイルのWebサイトの案内はわかりやすいですが、スマホの操作に不安がある人にとって、「自分でできるだろうか」と不安になったことを聞いてすぐに解決できる店舗はとても心強い存在です。
                </p>
                <p>
                  周りの人にも、楽天モバイルは料金も安くて、データ通信も安定していて、店舗スタッフの対応も親切とおすすめしています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルをおすすめいただき、ありがとうございます！ちなみにどのような方におすすめされていますか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私のように初めて契約した携帯電話会社をなんとなく使い続けている方や、積極的に生活費を見直したいと考えている方ですね。
                </p>
                <p>
                  実は私はフィナンシャルプランナーの資格があり、お金のことで相談されることがしばしばあります。そこで、自分の経験を元にして通信費の見直しを提案する中で、効果的な携帯電話会社として楽天モバイルを紹介しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお声をお聞かせいただき、ありがとうございました。
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
              楽天モバイルは店舗数も多いので、河浦さんのようにスマホの使い方やオンラインでの契約に不安があるという方も安心してご相談いただけます。※
            </p>
            <p>
              今の携帯電話料金を見直したいけれど、乗り換えやスマホの機種変更の方法がわからない方は、ぜひ一度、楽天モバイルの店舗に足を運んでみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※詳細なスマホの使い方相談やデータ移行サービスは有料オプションとなります。
              <br />
              ※当ページの内容は2022年3月4日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegular
              as="a"
              href={`/shop/?l-id=uservoice_${articleNum}_shop`}
            >
              お近くのショップを探す
            </ButtonRegular>
          </div>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: '明確な料金プランで安心！ワンプランのわかりやすさが魅力',
                userInfo: '園部さん（仮名・30代女性／埼玉県）',
                img: 'avator-12.png',
                description: '退職をきっかけに家計を見直したら、毎...',
                href: `/uservoice/12/?l-id=uservoice_${articleNum}_uservoice_12`,
              },
              {
                title:
                  '子どものお昼寝中にオンラインで乗り換え完了！節約もできて満足',
                userInfo: '細田さん（仮名・30代女性／北海道）',
                img: 'avator-11.png',
                description: '夫が先に楽天モバイルに乗り換えていて...',
                href: `/uservoice/11/?l-id=uservoice_${articleNum}_uservoice_11`,
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

export default Uservoice13
