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
import { FastconvertBnr } from '@components/include/uservoice/FastconvertBnr'
import { ReturnUserVoiceList } from '@components/include/uservoice/ReturnUserVoiceList'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice09: NextPage = () => {
  const pagetitle = 'スマホ代含め、楽天経済圏で年約30万円節約'
  const pageHeading =
    '家計の見直しでスマホを乗り換え。楽天経済圏で年30万円の節約'
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

  const articleNum = '09'
  const userName = '中川'

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
        description="初めてのオンラインでの契約も本人確認手続きも、つまずくことなく簡単だった（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年2月4日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「家計を見直したいけれど、どこから手を付ければいいか」と、家計簿を前に悩んだ経験はありませんか。
                </p>
                <p>
                  今回は、家計の見直しをきっかけに楽天経済圏の利用を始められたことで浪費グセの生活が一変し、倹約家になったという中川さん（仮名）に、その変化について詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／東京都）"
            periodOfUse="1年3カ月"
            dataUseage="3～20GB未満"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="その中にスマホ代を大きく抑えてくれる楽天モバイルがあった"
              subTitle="家計の見直しで選んだ楽天経済圏"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルはいつ頃ご契約されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前の携帯電話会社の2年契約縛りが終わった2020年10月頃です。
                  <br />
                  以前は、スマホの分割払いとプラン料金で毎月1万円前後支払っていて、それをどうにかしたいとずっと考えていました。
                  <br />
                  楽天モバイルのプラン料金1年無料キャンペーン※というのがまず魅力的だったので、乗り換えを決めました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  スマホ代を見直されたいということだったんですね。奥様も同時に乗り換えをされたのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  妻は私が使用しているのを見て、数カ月後に乗り換えました。理由はやはりスマホ代の見直しです。妻も毎月1万円前後かかっていたので、楽天モバイルへの乗り換えで夫婦合わせて月約2万円の節約になりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それは大きいですね。節約された分を何か別のことに使われていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  恥ずかしながら、それまで浪費が多かったので、新しく何かに使うというより、乗り換え自体が家計見直しの一環です。
                </p>
                <p>
                  楽天ひかりも通信費の見直しで契約しました。楽天モバイルと楽天ひかりを契約すると、楽天ひかりの月額基本料が1年無料※になるだけでなく、楽天市場でのお買い物がポイント+2倍※になるのも嬉しいですね。
                </p>
                <TxtCap as="p">
                  ※楽天ひかりの月額基本料1年無料キャンペーンは月額基本料が開通月から最大12ヶ月無料になるキャンペーンです。初期登録料、工事費等が別途発生します。
                  <br />
                  ※楽天モバイル契約で＋1倍。楽天ひかり契約で＋1倍。獲得ポイントに上限あり。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天ポイントの倍率を意識されていらっしゃいますが、楽天経済圏※を活用されているのですか？
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳しくはこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。2年前に結婚して将来のことを考えた時に、お金についても考えるようになり、以前からよく聞いていた楽天経済圏を利用し始めました。
                  <br />
                  楽天のさまざまなサービスを利用することで、出て行くお金を抑えられるだけでなく、色々とポイントが付くので、家計にとってかなりプラスになっています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天経済圏を利用することで、具体的にはどれくらい効果がありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  一番大きいのは
                  <TxtMarker as="em">
                    通信にかかる固定費が抑えられている
                  </TxtMarker>
                  部分です。ほかにも、買い物をするとポイントが貯まるので、それをコンビニでの支払いなどに利用しています。
                </p>
                <p>
                  結果として生活費の一部をポイントでまかなえているので、手元に残るお金が大分増えました。月に2～3万円程変わっているので、年間で約30万円の支出を抑える経済的な効果がありました。
                </p>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/09/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                />
              </div>
              <Interviewer>
                <p>それはとても大きな違いですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルへ乗り換える前は、乗り換えにかかる手間や新しい携帯電話会社に対する心配などを理由に、乗り換えを少しためらった時期もありましたが、実際に乗り換えてみると
                  <TxtMarker as="em">迷う時間はもったいなかった</TxtMarker>
                  と思います。
                </p>
                <p>
                  気になるサービスをまず試してみて、それから自分に適した物を選ぶ方が、効率的で経済的だと感じます。
                </p>
                <p>
                  妻も最初は乗り換えることに抵抗があったのかしばらく迷っていましたが、私のスマホの使い方が変わらないのに出費は大幅に減ったのを見て、触発されたようです。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="初めてのオンライン契約も本人確認もスムーズに完了"
              subTitle="楽天モバイルのアプリやWebサイトが使いやすい"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルへ乗り換えて、ほかに良かったと感じることはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  アプリやWebサイトの使いやすさも良いなと感じています。他社と比較しても分かりやすいと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  使いやすさは大切ですね。楽天モバイルの契約時もスムーズにお手続きしていただけましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、
                  <TxtMarker as="em">
                    初めてのオンラインでの契約手続きでしたが、スムーズにできて、30分程度で完了
                  </TxtMarker>
                  しました。
                  <br />
                  楽天というWebに強い会社が運営しているので、ユーザーインターフェースが優れていると感じました。
                </p>
                <p>
                  AIを利用した本人確認※もとても簡単で、つまずくこともありませんでした。
                </p>
                <TxtCap as="p">
                  <LinkNormal
                    href={`/guide/verify/ekyc/?l-id=uservoice_${articleNum}_guide_verify_ekyc`}
                  >
                    ※AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  スムーズに出来るオンライン契約なら安心ですね。
                  <br />
                  ところで、ご契約後はどのような使い方をされていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  主に動画配信サービスで展開されている講座の視聴など、学習のために利用しています。外に出ている時間はかなり動画を見ていますね。
                  <br />
                  スマホでスポーツ観戦もしています。こちらもかなりデータ通信を使っていると思いますし、データ使い放題※で以前よりデータ通信量が増えました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  経済的な効果も高く、以前よりも動画を快適に視聴できるようになったようで、本当に良かったです。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              「うちも家計を見直してムダな支出を減らしたい」と思った方は、中川さんのように楽天モバイルへの乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年2月4日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'モバイルWi-Fiルーターでデータ無制限！外出先の仕事に便利',
                userInfo: '向谷さん（仮名・30代女性／神奈川県）',
                img: 'avator-08.png',
                description: 'モバイルWi-Fiルーターの買い替えを考...',
                href: `/uservoice/08/?l-id=uservoice_${articleNum}_uservoice_08`,
              },
              {
                title:
                  'データ無制限をフル活用。自宅のデバイスもテザリングで接続！',
                userInfo: '後藤さん（仮名・30代男性／千葉県）',
                img: 'avator-07.png',
                description: '先輩に、楽天モバイルのプラン料金1年ら...',
                href: `/uservoice/07/?l-id=uservoice_${articleNum}_uservoice_07`,
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

export default Uservoice09
