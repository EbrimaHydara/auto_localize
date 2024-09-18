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
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice45: NextPage = () => {
  const pagetitle = 'eKYC15分で乗り換え'
  const pageHeading = 'Webサイトで簡単に乗り換え！15分で開通が完了しました'
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

  const articleNum = '45'
  const userName = '山崎'

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
        description="Webサイトからの乗り換えがわかりやすくてスムーズ！AIかんたん本人確認（eKYC）のコツは撮影方法！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年2月10日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  料金プランのデータ容量が使い切れないのがもったいなくて、ほかのプランを検討をしたことはありませんか。良いかもと思える料金プランが見つかって「いざ携帯電話会社を乗り換えよう」という時に、事前に予約した店舗に出かけて手続きをするのは、想像以上に手間や時間がかかるものです。
                </p>
                <p>
                  今回お話をうかがった山崎さん（仮名）は、楽天モバイルのWebサイトで手続きを開始。たった15分で乗り換えられました。
                </p>
                <p>
                  乗り換えの手順で感じたことや、AIかんたん本人確認（eKYC）※のコツをお聞きしました。
                </p>
                <TxtCap as="p">
                  ※
                  <LinkNormal href="/guide/verify/ekyc/?l-id=uservoice_45_guide_verify_ekyc">
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／高知県）"
            periodOfUse="6カ月"
            dataUseage="10～15GB程度"
            beforeComapany="ahamo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="手続き開始から15分で開通が完了しました"
              subTitle="Webサイトからの乗り換えがわかりやすくてスムーズ！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  山崎さんが、楽天モバイルに乗り換えようと思った理由はなんでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  料金プランのデータ容量が余って、もったいないと思っていたのが理由です。
                </p>
                <p>
                  私のデータ利用量は、毎月だいたい10GB〜15GBといった具合だったので、データ容量を持て余していました。使い切れないデータ容量を翌月に繰り越せるわけでもないので、使い切れなくてもったいないなと。
                </p>
                <p>
                  とはいえ、ほかの携帯電話会社も3GBとか20GBとかデータ容量が固定の料金プランが多く、自分のスマホの使い方には合っていなかったので、変更を検討しつつも、ずっと同じ携帯電話会社を利用していたんです。
                </p>
                <p>
                  そろそろ携帯電話を買い替えようと思い、調べていたときにちょうど楽天モバイルを知ったんです。
                </p>
                <p>
                  毎月のデータ利用量に応じて支払う料金プランが変わり、
                  <TxtMarker as="em">
                    私の普段のデータ利用量10GB〜15GB程度なら、月額2,178円（税込）と、今よりも安くなることに魅力を感じて、乗り換えを決めました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。山崎さんのスマホの使い方にぴったりだったことが乗り換えの決め手だったのですね。口コミは参考にされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。乗り換える前に念のためインターネットで評判を調べました。それと、以前から楽天モバイルを利用している友人にも聞いてみました。
                </p>
                <p>
                  インターネットの口コミでは賛否両論ありましたが、友人が「楽天モバイルはなかなかいいよ」と言っていたのが乗り換えの後押しになりましたね。よく知っている人の言葉なら信頼できるなと。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  すでにご利用中のご友人からの太鼓判は心強いですね。Webサイトと店舗、どちらで乗り換えましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  仕事柄機械に強くスマホの操作にも自信があるので、店舗よりもすぐに手続きができるWebサイトを選びました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。Webサイトからの手続きはスムーズでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。手続きの仕方や説明が丁寧で、とても簡単に乗り換えができました。手続き開始から開通まで15分程度※で終わったと思います。
                </p>
                <p>
                  特に難しい手続きはなく、画面の指示に従って順番に進めれば良いので、スマホの操作に不慣れな人でも安心だと感じました。
                </p>
                <p>
                  <TxtMarker as="em">
                    乗り換え手順が不安で店舗を選んでいる人も、ぜひやってみて欲しい
                  </TxtMarker>
                  ですね。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル対応のeSIM対応製品でアプリからeKYCで申し込んだ場合。SIMフリーの製品でない場合、SIMロック解除が必要です。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それは良かったです！楽天モバイルに乗り換えてから、実際に利用されてみていかがでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私が利用しているエリア※では、データ通信速度が安定していて快適ですね。乗り換えてから楽天経済圏※の利用も増えたので、利用料金の端数の支払いには、楽天ポイントを充てています。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアは
                  <LinkNormal href="/guide/verify/ekyc/?l-id=uservoice_45_guide_verify_ekyc">
                    サービスエリアマップ
                  </LinkNormal>
                  でご確認ください。
                  <br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="自分の顔や本人確認書類の撮影に注意するとうまくいきました"
              subTitle="AIかんたん本人確認（eKYC）のコツは撮影方法！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換え手続きをされる際は、AIかんたん本人確認（eKYC）を利用されたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。実は最初、本人確認に失敗してしまったんです。自分の顔や本人確認書類が上手く撮影できていなかったようなので、何度か撮り直したらすぐに上手くいきました。ちょっとしたコツがあるみたいです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>本人確認をするコツというのは、どのようなものでしょうか。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  自分の顔を撮るときは、周囲の明るさやカメラの角度に注意すると良いようです。自分の顔が下からや上からにならないよう、正面から撮れているとスムーズに感じました。
                </p>
                <p>
                  本人確認書類も、部屋の照明が反射しないように、撮影時に置く場所を調整するのがおすすめです。こういったことを意識して撮り直したら、スムーズに認証されました。
                </p>
                <p>
                  <TxtMarker as="em">
                    本人確認ができれば、すぐに乗り換え手続きが終わる便利な機能
                  </TxtMarker>
                  なので、参考にしてもらえたらうれしいです。
                </p>
              </Interviewee>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonSecondaryLarge
                  as="a"
                  href="/guide/verify/ekyc/?l-id=uservoice_45_guide_verify_ekyc_02"
                >
                  AIかんたん本人確認（eKYC）の
                  <br className={Utils['Disp-tb-sp']} />
                  詳細はこちら
                </ButtonSecondaryLarge>
              </div>
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
              楽天モバイルなら、Webサイトから画面の指示に従って簡単に乗り換えができます。オンライン本人確認（eKYC）を使えば、お申し込み完了後、最短3分で開通が完了※し、すぐにご利用いただけます。
            </p>
            <p>
              携帯電話会社を乗り換えたいと思っていても、店舗が近くにない方や、なかなか行くタイミングが作れないという方も、山崎さんのように簡単に乗り換えができる楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※楽天モバイル対応のeSIM対応製品でアプリからeKYCで申し込んだ場合。SIMフリーの製品でない場合、SIMロック解除が必要です。
              <br />
              ※当ページの内容は2023年2月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'Z世代のスマホ利用にぴったり！動画や写真共有も楽々で大満足',
                userInfo: '金田さん（仮名・20代女性／東京都）',
                img: 'avator-44.png',
                description:
                  '以前契約していた携帯電話会社のデータ容量が足りなかったことです...',
                href: '/uservoice/44/?l-id=uservoice_45_uservoice_44',
              },
              {
                title:
                  '家族全員で乗り換え！シンプルなワンプランでスマホ代も安心',
                userInfo: '小林さん親子（仮名・40代女性／10代男性／三重県）',
                img: 'avator-43.png',
                description:
                  '高齢の両親が契約していた料金プランには元々割引がついていたのですが...',
                href: '/uservoice/43/?l-id=uservoice_45_uservoice_43',
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

export default Uservoice45
