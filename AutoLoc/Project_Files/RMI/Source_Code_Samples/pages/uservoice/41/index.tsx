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
import { LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice41: NextPage = () => {
  const pagetitle = 'おトクで魅力的な利用料金'
  const pageHeading =
    'おトクな利用料金がとにかく魅力！楽天モバイルの大ファンです'
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

  const articleNum = '41'
  const userName = '杉山'

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
        description="データ使い放題がおトクで魅力的！乗り換えもWebサイトでの手続きが簡単でスムーズ！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年11月25日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「月々の携帯電話料金をもっと安くしたいけど、使えるデータ容量は減らしたくない…」とお悩みの方は多いのではないでしょうか。
                </p>
                <p>
                  利用料金の安さばかりを重視して乗り換えると、使えるデータ容量が減ってしまったり、データ利用量の上限を気にして結局節約しなければならないという落とし穴が待っていることも。
                </p>
                <p>
                  今回は、楽天モバイルに乗り換えて、毎月のデータ利用量を減らすことなく、利用料金がおトクになった杉山さん（仮名）に、乗り換えの経緯や使用感について詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性・神奈川県）"
            periodOfUse="2年1カ月"
            dataUseage="20～40GB程度"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="手続き開始からたった15分で開通しました"
              subTitle="Webサイトでの手続きが簡単でスムーズ！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと考えたきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  携帯電話料金や、自宅のホームルーターの利用料金などのインターネットにかかる費用を、もっと安くしたいと思ったのがきっかけです。
                </p>
                <p>
                  以前契約していた携帯電話会社では、一部の動画サービスやSNSがデータ高速無制限になる料金プランに、通話定額オプションを追加して契約していました。
                </p>
                <p>
                  加えて、自宅のインターネット回線としてホームルーターも契約していたので、携帯電話料金とスマホ本体の購入代金、ホームルーターの利用料金を合計すると、毎月2万円くらいの出費になっていたんです。
                </p>
                <p>
                  細かい内訳は覚えていませんが、さすがに高すぎると思い、月々の利用料金を見直そうと決めて、データ使い放題※の楽天モバイルを選びました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ほかの携帯電話会社の料金プランも候補にありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  携帯電話会社を選ぶときに重要視しているのが「データ無制限※」なので、楽天モバイル以外の選択肢はありませんでした。
                </p>
                <p>
                  先に契約していた友人が「楽天モバイルは結構良いよ」と言っていたこともあって、ほかの携帯電話会社は検討すらしていません。
                </p>
                <p>
                  僕が乗り換えた時期は、楽天モバイルのサービス開始から半年ほど経ったころでした。
                  <TxtMarker as="em">
                    通信エリアを調べたところ、住んでいる場所の電波状況※は良好で、勤務地も東京なので、大都市圏なら電波状態も特に問題ない
                  </TxtMarker>
                  だろうとほぼ即決しました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアは
                  <LinkNormal href="/area/?l-id=uservoice_41_area">
                    サービスエリアマップ
                  </LinkNormal>
                  でご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはとても良かったです。乗り換えを決めたとき、違約金や解約手数料などはかかりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ちょうど契約更新のタイミングで解約したので、解約手数料※はかかりませんでした。ただ、分割で支払っていたスマホ製品の購入代金と、ホームルーターの本体代金は残額があったので、解約のときに支払いましたね。
                </p>
                <p>
                  残額は結構高かったのですが、すべて精算しても、月々の利用料金が安くなった分でカバーできると考えていたので、思い切って支払いました。
                </p>
                <TxtCap as="p">
                  ※総務省の「電気通信事業法の一部を改正する法律の趣旨に沿った公正な競争環境の確保に向けた取組についての要請」を受けて、2022年8月時点、すべての大手携帯電話会社が解約時の手数料と、定期契約のある料金プランを撤廃しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。乗り換えはWebサイトと店舗、どちらで手続きされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Webサイトです。そもそも、以前契約していた携帯電話会社にMNP（携帯電話番号ポータビリティ）※予約番号を発行してもらおうと店舗へ行ってみたら、ちょうどコロナが流行し始めた頃だったので、来店予約必須になっていたんです。
                </p>
                <p>
                  しばらく先まで予約が取れそうになかったので、電話でMNP（携帯電話番号ポータビリティ）予約番号をもらって、楽天モバイルのWebサイトで手続きしました。
                </p>
                <p>
                  <TxtMarker as="em">
                    乗り換えはとても簡単で、MNP（携帯電話番号ポータビリティ）予約番号の発行手続きを始めてから、楽天モバイルが開通するまで、大体15分くらいで終わった記憶があります。
                  </TxtMarker>
                </p>
                <p>
                  申し込みの手順に沿って情報を入力するだけでしたし、本人確認は、eKYC※を利用したので、とてもスムーズでしたね。
                </p>
                <p>
                  Webサイトでの契約は、店舗が開いていない時間にも手続きできるし、人に会わなくて良いのがとても魅力的です。コロナ禍のニュースタンダードだと感じました。
                </p>
                <TxtCap as="p">
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal href="/guide/mnp/?l-id=uservoice_41_guide_mnp">
                    詳細はこちら
                  </LinkNormal>
                  。<br />※{' '}
                  <LinkNormal href="/guide/verify/ekyc/?l-id=uservoice_41_guide_verify_ekyc">
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  乗り換えてから、月々の携帯電話料金はどれくらい変わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社と比較すると1万5千円ほど安くなりました。
                </p>
                <p>
                  僕は毎月データ容量を20GBから40GBくらい使っているので、携帯電話料金は月々2,980円（税込3,278円）ですし、引っ越し先で楽天ひかりも契約してホームルーターも手放したので、月々の負担がとても軽くなりました。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="サービスが充実していくのを感じています"
              subTitle="楽天モバイルのこれからにわくわく！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  契約してから現時点で2年ほどご利用いただいていますが、契約当初と比較してどのようなところに変化を感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  率直にいうと、2年前の契約した当時は、通勤中の車内や都内で「ここは少し電波が入りにくいな」と感じる場所もありました。特にビルの間や地下では、時々電波が途切れていた記憶があります。
                </p>
                <p>
                  でも、あれから2年経った今では、
                  <TxtMarker as="em">
                    電波が入りにくいと感じていた場所がしっかりつながるようになっていた
                  </TxtMarker>
                  り、電波が途切れて動画の読み込みが止まっていた場所でもスムーズに読み込むようになっていて、電波が入りにくいと感じる場所が格段に少なくなりました。
                </p>
                <p>
                  毎日少しずつの変化なので、劇的にここが変わったという大きな印象ではないですが、通信エリア※が広がっているんだなと感じています。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアは
                  <LinkNormal href="/area/?l-id=uservoice_41_area_2">
                    サービスエリアマップ
                  </LinkNormal>
                  でご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  長く利用してくださっている方ならではのご意見をありがとうございます。これからの楽天モバイルに期待していることなどはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。
                  <TxtMarker as="em">
                    コストパフォーマンスがとても良い携帯電話会社だと感じています
                  </TxtMarker>
                  し、サービス内容や、サービス開始直後にはなかったオプションの充実など、ユーザーのために企業努力しているところにとても好感を抱いています。
                </p>
                <p>
                  僕は実業家としての三木谷会長の考えや、ビジネスへの挑戦的な投資と姿勢にとても共感しているので、楽天モバイルが楽天グループの中でどんな展開をしていくのか、とても楽しみにしています。
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
              楽天モバイルなら、Webサイトから24時間お申し込みを受け付けています。自分の好きなタイミングで、自宅などから簡単に契約できるため、店舗に足を運ぶ必要はありません。
            </p>
            <p>
              月々の利用料金にお悩みの方は、利用料金を抑えながらデータ使い放題※で快適になった杉山さんのように、楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年11月25日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: 'わかりやすい料金プランが魅力的！妻にもすすめています',
                userInfo: '小倉さんご夫婦（仮名・30代男性／女性／千葉県）',
                img: 'avator-40.png',
                description:
                  '楽天モバイルに乗り換えたのは僕だけなんです。妻にも楽天モバイルに乗り換えようと誘っているので、インタビューの...',
                href: '/uservoice/40/?l-id=uservoice_41_uservoice_40',
              },
              {
                title:
                  '乗り換えで家計が助かった！楽天ポイントはお小遣い代わりに！',
                userInfo: '杉山さん（仮名・20代男性／埼玉県）',
                img: 'avator-39.png',
                description:
                  '生活費を見直したところ、スマホ代が2人あわせて1万6千円以上と高額になっていたことに気付いたのがきっかけ...',
                href: '/uservoice/39/?l-id=uservoice_41_uservoice_39',
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

export default Uservoice41
