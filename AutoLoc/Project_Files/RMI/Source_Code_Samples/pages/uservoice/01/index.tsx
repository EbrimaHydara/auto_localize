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

const Uservoice01: NextPage = () => {
  const pagetitle = '通信速度に大満足！楽天ポイントで支払い可'
  const pageHeading =
    '通信速度に大満足！毎月の料金は楽天ポイントで支払えておトク！'
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

  const articleNum = '01'
  const userName = '鈴木'

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
        description="格安スマホからの乗り換えで、同じ料金でも通信速度とデータ容量が劇的に増えました。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2021年11月26日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  生活に欠かせないスマホですが、「月々の通信料金を下げたい」と、乗り換えを検討している方は多いのではないでしょうか。
                  <br />
                  今回は、楽天モバイルを1年7カ月利用している鈴木さん（仮名）に、実際の使い勝手についてお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性／東京都）"
            periodOfUse="1年7カ月"
            dataUseage="平均5GB"
            beforeComapany="格安スマホ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="1年以上使った感想「通信速度が劇的に速いです！」"
              subTitle="楽天モバイルを選んでどうですか？"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  鈴木さんは、以前は格安スマホを利用されていたとのことですが、楽天モバイルに乗り換えてみていかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  大満足ですね。なんといっても、
                  <TxtMarker as="em">通信速度が速いです</TxtMarker>
                  。キャリアの回線になったという点が大きいと感じています。
                  <br />
                  ほかの携帯電話会社でも同様に繋がりにくい建物の地下や地下鉄のごく一部などの限られた場所を除けば、楽天モバイルはお昼や通勤中など回線が混雑する時間帯でも繋がりますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>料金は以前と比較してどうですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前の格安スマホでは6GBまでしか使えない低容量プランを契約していたので、料金的に大きな変化はないですが、
                  <TxtMarker as="em">
                    同じ料金でも、通信速度と使えるデータ容量が劇的に変わりました。
                  </TxtMarker>
                </p>
                <p>
                  以前は、月半ばでデータ容量の上限に達してしまって、あっという間に速度制限がかかったり、回線が混み合うお昼頃は、ネットの速度が低下したりして、ストレスでした。昼休みにみんなでゲームをしようかと話をしている時に、「今月はもう速度制限になっちゃって、できないんです」と謝ることが多かったんですよ。
                </p>
                <p>
                  でも今はデータ使い放題なので、速度制限※になることはまったくないですね。とても快適です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルは、データ高速無制限※で使えるのが強みですね。ちなみに月間20GBを超えたという経験はありますか？
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  先日、実家にしばらく滞在した時にはじめて超えました。
                  <br />
                  実家にはWi-Fiが入っているんですが、楽天モバイル回線のほうが速かったので、1週間ほどテザリングでパソコンをインターネットに繋いで、動画を観たり仕事をしたりしていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  急にデータ利用量が増えても、毎月使ったデータ分だけ支払うワンプランで高速データ通信が使えるのは便利ですね。
                  <br />
                  楽天モバイルを利用していて、特定の場所で繋がりにくい、繋がりにくかった、というところはありますか？
                </p>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/01/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  会社のオフィスが高層階にあるんですが、実は乗り換え直後は繋がりませんでした。
                </p>
                <p>
                  でも一度目の緊急事態宣言（2020年4月7日）でのリモートワークのあと、解除後（2020年5月25日）にオフィスに戻ったら繋がるようになっていたので、通信ネットワークの改善も早い実感があります。
                </p>
                <p>
                  サービス開始当初はところどころ繋がらない所がありましたが、
                  <TxtMarker as="em">
                    この1年で一気に繋がる場所が広がって、私の生活圏では気にならなくなりました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※環境によってつながりにくい場合がございます。詳しくは
                  <LinkNormal href={`/area/?l-id=uservoice_${articleNum}_area`}>
                    提供エリア
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
            </Interview>

            <Interview
              title="楽天ポイントでスマホ料金も支払い可能！"
              subTitle="楽天モバイル契約者なら、光回線も1年無料で使える"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>楽天モバイル以外にも楽天のサービスを使っていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場、楽天でんき、楽天ガス、楽天銀行、楽天カード、楽天証券とたくさん利用しています。
                </p>
                <p>
                  楽天モバイルと楽天ひかりを両方契約したので、どちらも1年間の利用料金が無料になるキャンペーン※を利用できました。おかげで、家では楽天ひかりで快適に通信ができて、外では楽天モバイルでデータ使い放題が利用でき、通信費が1年間無料で過ごせたので、とても節約になりました。
                </p>
                <p>
                  無料期間が終了したあとも、SPU（スーパーポイントアッププログラム）などを利用して楽天ポイントをおトクに貯められています。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルの1年間無料キャンペーンは終了しています。楽天ひかりの月額基本料1年無料キャンペーンは月額基本料が開通月から最大12ヶ月無料になるキャンペーンです。初期登録料、工事費等が別途発生します。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  貯まった楽天ポイントで通信費を支払える※のはおトク感がありますか？
                </p>
                <TxtCap as="p">
                  ※口座引き落としを設定している場合、ポイント支払いはご利用いただけません。
                </TxtCap>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/01/img-02.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    楽天モバイルの支払いには期間限定ポイントが使える
                  </TxtMarker>
                  ので、その点がとてもいいなと感じてます。
                </p>
                <p>
                  期間限定ポイントは使える期間が短く、期間内に使い切れずに失効してしまいやすいので、月々の支払いで使えるのが助かります。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルのおすすめポイント"
              subTitle="契約するか迷っている人に伝えたい、"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルにしようか迷っている人におすすめするとしたらどんなポイントがありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>通信速度が安定していることですね。</p>
                <p>
                  自分で使っていても感じますが、
                  <TxtMarker as="em">
                    通信速度と繋がりやすさは、楽天モバイルを選ぶ大きなメリット
                  </TxtMarker>
                  です。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  通信速度が遅かったり、速度制限を受けたりしてしまったら、いくら安くても意味がないですからね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんですよ。格安スマホだった頃は、例えば友人と出掛ける時に地図アプリを使ったら、速度制限を受けているために表示されないなんてことが起きていたんです。なので、通信速度が安定していて速いというのはすごく大事なことです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます。通信速度にご満足いただけているようでなによりです。ご友人におすすめされることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  会社のチャットツールで話題にしたら、みんな反応してましたね。上司から詳しく話が聞きたいとメッセージが来ました。実際に契約した人もいるみたいで、楽天モバイルユーザーが周囲に増えているのを実感します。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  いろいろな方にご紹介いただいて、本当に嬉しいです。本日な貴重なお声をお聞かせいただき、ありがとうございました。
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
              節約しておトクにスマホが使いたい、でも回線は安定した高速なものがいい！という方は、鈴木さんのように楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2021年11月26日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'スマホ代が5分の1に！ストレスなくどこでもデータ通信を満喫',
                userInfo: '北原さん（仮名・30代男性／東京都）',
                img: 'avator-02.png',
                description: '家のWi-Fiよりも速く感じることも多く、...',
                href: `/uservoice/02/?l-id=uservoice_${articleNum}_uservoice_02`,
              },
              {
                title:
                  '先輩にすすめられ、契約を即決。昼休みに申し込み、即日開通！',
                userInfo: '森田さん（仮名・20代男性／東京都）',
                img: 'avator-03.png',
                description: '昼休みに先輩からすすめられて、その場...',
                href: `/uservoice/03/?l-id=uservoice_${articleNum}_uservoice_03`,
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

export default Uservoice01
