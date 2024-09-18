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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice07: NextPage = () => {
  const pagetitle = 'テザリングでデータ無制限をフル活用'
  const pageHeading =
    'データ無制限をフル活用。自宅のデバイスもテザリングで接続！'
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

  const articleNum = '07'
  const userName = '後藤'

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
        description="光回線と遜色ない使用感でデータ通信も快適。料金にも使い勝手にもとても満足（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年1月21日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「携帯電話と光回線がセット割引でそれぞれの料金の見直しが難しい」とお悩みの方もいらっしゃるのではないでしょうか。
                </p>
                <p>
                  今回は、楽天モバイルのデータ使い放題※をフル活用して、ご自宅のインターネット環境をテザリングで整えているという後藤さん（仮名）に、実際の使用感などをお聞きしました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／千葉県）"
            periodOfUse="6カ月"
            dataUseage="30GB以上"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="プラン料金の安さとデータ使い放題なところ"
              subTitle="数日で乗り換えを決めた理由は"
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
                  先輩に、楽天モバイルのプラン料金1年無料キャンペーン※を教えてもらったのがきっかけです。
                </p>
                <p>
                  当時スマホ代が毎月7～8千円かかっていたこともあり、1年無料になるのは非常に魅力的で、2日後には申し込みをしましたね。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。直ぐにご契約を決められたようですが、他社との比較はされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、無駄な支払いをしたくないので、もちろん検討しました。
                </p>
                <p>
                  楽天モバイルは
                  <TxtMarker as="em">
                    シンプルなワンプランで20GB以上はどれだけ使っても無制限※というのがほかにはない特色
                  </TxtMarker>
                  だったので、乗り換えを決断しました。
                </p>
                <p>
                  実際に使用して通信速度や料金、使い勝手にとても満足しているので、1年の無料期間が終了しても、楽天モバイルを継続するつもりです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  1年無料キャンペーン期間が終了しても月々のプラン料金が最大2,980円（税込3,278円）なので、スマホ代が半額以下に抑えられるということですね。契約時に新しいスマホに買い替えされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、AQUOS sense3 plusを購入しましたが、近々iPhone 12かiPhone
                  13に買い替える予定です。
                </p>
                <p>
                  今のスマホも使い勝手は良いのですが、元々iPhoneを長く使っていたので操作感やスペック的な面でやはり自分はiPhoneが好きです。契約当時はまだ楽天モバイルでiPhoneの取り扱いがなかったので、楽天モバイルが最新のApple社製品を取り扱うようになったことはとても嬉しいですね。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="子どもの動画視聴もデータ無制限でデータ容量の心配なし"
              subTitle="家のインターネットも楽天モバイルのテザリングで接続！"
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
                  毎月30GB以上になります。子どもがスマホを使って、動画を見ることもあります。4歳でも大人顔負けに使いこなしています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  お子さんたちの理解力はすごいですよね。
                  楽天モバイルへの乗り換えで使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  子どもの動画視聴を制限しなくなりました。以前は月20GBまで利用できるプランを契約していたので何かと制限がありましたが、
                  <TxtMarker as="em">
                    データ使い放題でデータ容量を気にするストレスから解放されました。
                  </TxtMarker>
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  データ残量を気にしながらでは思い切り楽しめないですよね。ほかにもメリットを感じている点はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  どれだけ使っても追加で料金がかからず、データ使い放題なので、自宅ではパソコンやテレビ、それ以外のインターネット通信が必要な機器は全て楽天モバイルのテザリングで繋げています※。
                </p>
                <p>特に不便を感じないので、自宅の光回線は解約しました。</p>
                <p>
                  このオンラインインタビューも、楽天モバイルのテザリングを使用しています。
                </p>
                <TxtCap as="p">
                  ※テザリングはモバイル回線を共有で利用するため、同時利用する場合等速度低下する場合があります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  通信が安定していて音声もクリアに聞こえるので、ご自宅の光回線を利用されているのかと思っていました。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです、
                  <TxtMarker as="em">光回線と遜色ない使用感</TxtMarker>
                  です。仕事に関する重いファイルのやりとりはさすがに劣りますが、通常のデータ通信を楽しむのであれば通信も安定していますし、十分な速度が出ています※。
                </p>
                <p>
                  テザリングによる通信速度の安定感を実感でき、光回線を思い切って解約したことで、毎月4～5千円の節約になり、通信費の削減という面でもプラスになっています。1年無料もありスマホ代で約9万円、光回線代で約６万円、
                  <TxtMarker as="em">合計で年間約15万円の節約※</TxtMarker>
                  ができます。
                </p>
                <p>
                  今後、子どもが成長して環境に変化があれば光回線を改めて検討しますが、当分は楽天モバイルのテザリングで十分だと感じています。
                </p>
                <TxtCap as="p">
                  ※環境によってつながりにくい場合があります。詳しくは
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    提供エリア
                  </LinkNormal>
                  をご確認ください。
                  <br />
                  ※後藤さんが以前契約していたスマホ代、光回線の通信料から換算した金額です。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>年間約15万円の節約は大きいですね！</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですよね。
                  <br />
                  <TxtMarker as="em">
                    スマホのデータ通信を光回線のように使えるのは楽天モバイルならではの大きなメリット
                  </TxtMarker>
                  だと感じています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  テザリングによるデータ使い放題のフル活用術をお聞かせいただき、本日はありがとうございました。
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
              安定した高速回線が利用できる楽天モバイルなら、最大でも月2,980円（税込3,278円）でデータ容量を気にすることなく利用できます。
            </p>
            <p>
              ご自宅の光回線・インターネット回線の通信費にお悩みの方は是非、後藤さんのように楽天モバイルに乗り換えてテザリングを活用されてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年1月21日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '滋賀県内でもデータ通信が快適。夫婦で毎月約2万円の節約！',
                userInfo: '中野さん（仮名・20代男性／滋賀県）',
                img: 'avator-06.png',
                description: '使用しているiPhoneが古くなってき...',
                href: `/uservoice/06/?l-id=uservoice_${articleNum}_uservoice_06`,
              },
              {
                title:
                  '新社会人生活を楽天モバイルで。スマホ代を気にせず動画も見放題',
                userInfo: '高田さん（仮名・20代女性／埼玉県）',
                img: 'avator-05.png',
                description: '楽天モバイルを使っている兄にすすめら...',
                href: `/uservoice/05/?l-id=uservoice_${articleNum}_uservoice_05`,
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

export default Uservoice07
