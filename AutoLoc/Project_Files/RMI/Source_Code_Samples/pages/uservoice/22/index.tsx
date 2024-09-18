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
import { ButtonRegular } from '@components/atoms/Buttons'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice22: NextPage = () => {
  const pagetitle = '学生起業家に高コスパで嬉しい'
  const pageHeading = '学生起業家として、コスパの高い楽天モバイルを選びました'
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

  const articleNum = '22'
  const userName = '仁科'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220520', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="安定したデータ通信、上限のないデータ容量、料金プランの安さなど、求める条件をすべて満たしているのが楽天モバイルだった（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年05月20日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホのテザリングを利用してパソコン作業したいけど、モバイルデータ通信は仕事でも安心して使える品質なのかな」など、乗り換えの際に付帯機能の充実を気にする方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、楽天モバイルのデータ通信を仕事にもフル活用している大学生で起業家でもある仁科さん（仮名）に、楽天モバイルの使用感について詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／埼玉県）"
            periodOfUse="1年9カ月"
            dataUseage="50GB以上"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="僕の希望と楽天モバイルのプランがすべて一致しました"
              subTitle="安定したデータ通信、上限がないデータ容量、おトクな料金プラン"
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
                <p>何よりコストパフォーマンスの高さです。</p>
                <p>
                  僕は現在大学生ですが、学生起業家として活動していることもあり毎月のデータ利用量はかなり多いので、携帯電話会社を選ぶ時はデータ通信が安定していて、データ容量が多いことが必須条件でした。
                  <br />
                  また、乗り換えのタイミングで親が支払ってくれていた僕の携帯電話料金を自分で支払うと決めたこともあり、費用面もしっかり検討しました。
                </p>
                <p>
                  さまざまな携帯電話会社の料金プランを比較検討したところ、データ通信が安定している上にどれだけ使っても※月最大2,980円（税込3,278円）という料金プランの安さなど、
                  <TxtMarker as="em">
                    求める条件をすべて満たしているのが楽天モバイルだった
                  </TxtMarker>
                  んです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルに乗り換えたのはいつ頃でしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2020年の夏頃です。すでに楽天モバイルを利用している友人たちから感想も聞き、2カ月程考えて乗り換えを決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルが乗り換えに求める条件を満たしていたということですが、実際にご利用いただいていかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>とても満足しています。</p>
                <p>
                  以前利用していた携帯電話会社ではデータ容量が大きいプランを契約していたので、親からは毎月8千円以上かかっていたと聞いています。
                  <br />
                  それでも、データ容量上限ぎりぎりまで使ってしまい、困ることが度々ありました。
                </p>
                <p>
                  毎月50GB以上使う僕にとって、楽天モバイルのデータ使い放題※はとても魅力的で、
                  <TxtMarker as="em">
                    コストパフォーマンスの高さという点では特に、今はほかの携帯電話会社は考えられないですね。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>

              <div ref={scrollTrigger} />
              <Interviewer>
                <p>
                  すでに1年9カ月程楽天モバイルをご利用いただいていますが、データ通信の安定性はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  契約当初は、ところどころつながりにくいと感じる場所がありましたが、今は場所によっては以前利用していた携帯電話会社よりも安定してつながる※こともあり、快適にデータ通信ができています。
                </p>
                <p>
                  また、以前はパートナー回線エリア※だった場所が、楽天回線エリアになっているのを見ると、サービスエリアの広がりを感じますし、データ使い放題のエリアが増えていくのはうれしいですね。
                </p>
                <TxtCap as="p">
                  ※実際のデータ速度は、環境等により異なります。
                  <br />
                  ※通信エリアについて
                  <LinkNormal href="/area/?l-id=uservoice_22_area">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>データ通信は主にどのようなことに利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  仕事柄、主にクライアントから受注しているSNS関係の更新ですね。InstagramやTikTokを中心に画像や動画を投稿することが多いので、どうしてもたくさんのデータ容量を使ってしまいます。
                </p>
                <p>
                  iPadやパソコンで作業することも多いのですが、カフェなどのフリーWi-Fiだと通信速度が遅くて作業が進まないことがあるので、スマホ利用している楽天モバイルのテザリングでいつもつないでいます。春や秋のような天気が良く暖かい日は公園で作業することもありますね。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  公園での作業は気持ち良さそうですね！テザリングで場所を問わずに仕事ができるのは便利ですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、どこでも快適に仕事ができます。フリーWi-Fiのように通信速度に不満を感じることもなく、
                  <TxtMarker as="em">
                    場所に縛られることもなく仕事ができるのは楽天モバイルのおかげ
                  </TxtMarker>
                  です。
                </p>
                <p>
                  サービスエリアの広がりでより快適になっているので、
                  <TxtMarker as="em">
                    楽天モバイルはビジネスユースとしてもおすすめしたい
                  </TxtMarker>
                  です。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換える前にモバイルWi-Fiの利用は検討されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、モバイルWi-Fiを使っている友人たちが「通信速度が思ったより遅い」といっていたので、検討していません。
                  今も楽天モバイルのテザリングで満足の行く十分な速度が出ている※ので併用する予定はないです。
                </p>
                <TxtCap as="p">
                  ※実際のデータ速度は、環境等により異なります。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/22/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <Interview
              title="古いスマホは下取りで楽天キャッシュに"
              subTitle="貯まった楽天ポイントはつみたてNISAへ"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>現在どのスマホをご利用されていますか？</p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイル限定モデルのOPPO Reno A
                  128GB※です。以前利用していたスマホは、
                  買い替えのタイミングで楽天モバイルの「スマホ下取りサービス」で下取りしてもらいました。
                </p>
                <p>
                  楽天モバイルに乗り換えた時にキャンペーン※でたくさんもらった楽天ポイントと、楽天キャッシュで受け取ったスマホの下取り金額の一部を製品代金に充てたので、実質負担することなく新しいスマホを購入できて、とてもおトクでした。
                </p>
                <TxtCap as="p">
                  ※「OPPO Reno A 128GB」は販売を終了しています。
                  <br />
                  ※定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_22_campaign">
                    詳しくはこちら。
                  </LinkNormal>
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonRegular
                  as="a"
                  href="/service/tradein/?l-id=uservoice_22_service_tradein"
                >
                  スマホ下取りサービス詳細を見る
                </ButtonRegular>
              </div>
              <Interviewer>
                <p>ほかに楽天ポイントはどのようなことに利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天証券でつみたてNISA※に利用しています。貯まった楽天ポイントを使って積立※ができるので便利です。
                </p>
                <TxtCap as="p">
                  ※楽天証券のつみたてNISAについて
                  <LinkIconAfter
                    href="https://www.rakuten-sec.co.jp/web/lp/beginners_guide/"
                    target="_blank"
                  >
                    詳しくはこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                  <br />
                  ※楽天証券のポイント投資（投資信託）について
                  <LinkIconAfter
                    href="https://www.rakuten-sec.co.jp/web/service/point/investment/fund.html"
                    target="_blank"
                  >
                    詳しくはこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>それは効率的な運用方法ですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうですね。なるべく自分のビジネスに時間を割きたいので、貯まった楽天ポイントを使って毎月自動的に投資ができるのは有難いと感じています。
                </p>
                <p>
                  個人と法人で楽天銀行を利用したり、楽天トラベルでたまに宿を取ったり、楽天グループのサービスを利用する時は楽天カードで支払ったりなど、ポイントを貯めて、貯まったポイントはつみたてNISAで運用するサイクルを回しています。
                </p>
                <p>
                  楽天モバイル単体でもコストパフォーマンスが高いですが、楽天経済圏※の利用でさらに大きなメリットを感じます。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏について
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
              テザリングを使ってビジネス利用されたい方や、大容量のデータを扱ってもしっかり毎月の料金を抑えたいというコスパの高さを重視する方は、仁科さんのように楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年5月20日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>
          <TxtCap as="p">
            ※商標・登録商標について
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/trademark/"
              target="_blank"
            >
              詳しくはこちら
              <IconNewTabLine />
            </LinkIconAfter>
          </TxtCap>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '大量のデータ通信も躊躇なし！子どもにも持たせたい楽天モバイル',
                userInfo: '松山さんご夫婦（仮名・50代男性／女性／東京都）',
                img: 'avator-21.png',
                description: '2020年6月頃に楽天モバイルのCMを...',
                href: '/uservoice/21/?l-id=uservoice_22_uservoice_21',
              },
              {
                title:
                  'データ利用量で料金が決まる！使う月も使わない月も無駄なく快適',
                userInfo: '重森さん（仮名・20代女性／東京都）',
                img: 'avator-20.png',
                description: '以前利用していた携帯電話会社の料金...',
                href: '/uservoice/20/?l-id=uservoice_22_uservoice_20',
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

export default Uservoice22
