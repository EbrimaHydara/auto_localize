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

const Uservoice36: NextPage = () => {
  const pagetitle = 'Rakuten Linkアプリの無料通話が便利'
  const pageHeading =
    'Rakuten Linkアプリの無料通話がとっても便利！毎日利用しています'
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

  const articleNum = '36'
  const userName = '島田'

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
        description="気になっていた通話料金が安くなった！Rakuten Linkアプリの無料通話が便利（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年10月14日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話会社の乗り換えを検討するときに、料金プランはもちろん、サービス内容も条件に検討している人は多いのではないでしょうか。
                </p>
                <p>
                  今回は、ご夫婦ともに「欲しかったサービスがある」ことが決め手になりお二人で楽天モバイルに乗り換えた島田さん（仮名）に、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性・千葉県）"
            periodOfUse="1年3カ月"
            dataUseage="1～3GB未満"
            beforeComapany="SoftBank"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="スマホやパソコンの操作が苦手でも簡単でした"
              subTitle="乗り換えの手続きがスムーズ！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだ理由をお聞かせください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルのプラン料金が安いことと、近くに店舗があることです。
                </p>
                <p>
                  プラン料金の安さも重要なのですが、私自身あまり機械の操作に強くないので、契約後にオンラインのサポートだけでは不安だったんです。スマホのことでわからないことがあるときに、すぐに聞きに行ける距離に店舗がある携帯電話会社を探していました。
                </p>
                <p>
                  調べたら、プラン料金が安い携帯電話会社は近くに店舗がほとんどなく、楽天モバイルならあったので、すぐに相談できると思って選びました。※
                </p>
                <TxtCap as="p">
                  ※詳細な
                  <LinkNormal href="/service/shop-support-for-device-operation/?l-id=uservoice_36_service_shop-support-for-device-operation">
                    スマホの使い方相談
                  </LinkNormal>
                  や
                  <LinkNormal href="/service/shop-support-for-oneshot-operation/?l-id=uservoice_36_service_shop-support-for-oneshot-operation">
                    データ移行サービス
                  </LinkNormal>
                  は有料オプションとなります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、近くに店舗があると安心ですよね。ほかの携帯電話会社はどちらを検討されていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と夫、2人とも以前契約していた携帯電話会社がSoftBankだったので、サブブランドのY!mobileを検討していました。
                </p>
                <p>
                  ただ、もともと楽天市場でよく買い物をしていますし、最近街のお店でも楽天ポイントを使えるところが増えたこともあり、楽天ポイントがもらえる※のが魅力で楽天モバイルに決めました。
                </p>
                <p>
                  ほかにも、スマホで電話をかけることが多いので
                  <TxtMarker as="em">
                    Rakuten
                    Linkアプリで通話が無料※になることや、事務手数料、解約手数料※がどちらも無料
                  </TxtMarker>
                  ※なのも決め手でした。
                </p>
                <TxtCap as="p">
                  ※定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_36_campaign">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                  <LinkNormal href="/faq/detail/00001887/?l-id=uservoice_36_faq_detail_00001887">
                    対象外番号一覧
                  </LinkNormal>
                  をご確認ください。アプリ未使用時30秒22円。
                  <br />
                  ※契約事務手数料は無料です。（なお、2020年11月4日午前8時59分までのご契約については3,000円（税込3,300円）をいただいておりました。）
                  <br />
                  ※契約者が、お申し込み後1年以内に回線契約を解約し、かつ本サービスの利用実態がない場合、
                  当社は、契約者に対して、当社が解約事務手数料として定める金額の980円（税込1,078円）の支払いを請求することがあります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。店舗がお近くにあるとのことですが、契約は店舗でされたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、小さい子どもがいるので自宅からWebサイトで手続きをしました。
                </p>
                <p>
                  コロナ禍で子どもを店舗に連れて行くことにも抵抗があったので、自宅で乗り換え手続きができたので本当に助かりました。
                </p>
                <p>
                  それに子どもを連れて店舗へ手続きに行くとなると、土日のどちらかを潰して、夫と交互に手続きをしながら子どもの面倒を見る必要があるので時間がかかります。そういった手間が省けるのがありがたいです。
                </p>
                <p>
                  夫とも、
                  <TxtMarker as="em">
                    「時間に縛られないし、子どもが寝ているときに手続きができて便利だね」
                  </TxtMarker>
                  と話していました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  確かに、小さなお子様がいると店舗で手続きをするのは大変ですよね。Webサイトで手続きをされたということは、AIかんたん本人確認（eKYC）※を利用して本人認証をされたり、eSIM※を選ばれたりしたのでしょうか？
                </p>
                <TxtCap as="p">
                  ※
                  <LinkNormal href="/guide/verify/ekyc/?l-id=uservoice_36_guide_verify_ekyc">
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                  <br />
                  ※eSIMについて、
                  <LinkNormal href="https://network.mobile.rakuten.co.jp/sumakatsu/contents/articles/2022/00058/?l-id=uservoice_36_contents_articles_2022_00058">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、機械の操作が苦手な私でもカメラでの本人認証で簡単に手続きできました。
                </p>
                <p>
                  説明を読みながらゆっくりとやって、写真の撮り直しをしながらでも、30分程度で終わりました。※
                </p>
                <p>
                  店舗だと以前契約していた携帯電話会社でMNP（携帯電話番号ポータビリティ）※予約番号をもらって、乗り換え先の携帯電話会社へ行って手続きしたり、いろいろ手間がかかるんだろうなと思っていたんです。
                </p>
                <p>
                  ですが、
                  <TxtMarker as="em">
                    Webサイトの手続きならスマホの画面の指示どおりに進めるだけなので、思っていたより簡単
                  </TxtMarker>
                  でした。すぐにスマホを使いたかったのでeSIMを選びましたが、こちらも画面の説明どおりに手続きを進めたらすぐに使えました。
                </p>
                <TxtCap as="p">
                  ※本人確認審査にお時間がかかる場合があります。
                  <br />
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal href="/guide/mnp/?l-id=uservoice_36_guide_mnp">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、以前と携帯電話料金やデータ利用量、スマホの使い方などに変化はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私は自宅にいることが多いので、毎月1～3GB未満でデータの使い方と月々の利用料金は以前とほとんど変わらないのですが、夫はかなり変化がありますね。
                </p>
                <p>
                  夫は以前契約していた携帯電話会社で毎月5～6千円くらいの料金プランを契約していたのですが、今は毎月3,278円（税込）になったので、
                  <TxtMarker as="em">月々の利用料金が半額くらい</TxtMarker>
                  になりました。通勤中に動画もよく見るようになって、毎月20GB以上使っているみたいです。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="Rakuten Linkアプリの無料通話が便利"
              subTitle="気になっていた通話料金が安くなった！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  通話をよく利用するとおっしゃっていましたが、乗り換えてから通話料金に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、かなり変わりました。楽天モバイルに乗り換えてからはRakuten
                  Linkがあるので、通話料金を節約できて助かっています。
                </p>
                <p>
                  以前契約していた携帯電話会社では無料通話オプションを契約していなかったので、短い電話でも通話料金が気になっていました。
                </p>
                <p>
                  子どもが保育園に入ったので、保護者同士の交流が増えたこともあり、その影響で通話料金が増えていたのがストレスだったのですが、
                  <TxtMarker as="em">
                    Rakuten
                    Linkのおかげで頻繁に電話をしてもストレスがなくなりました
                  </TxtMarker>
                  。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  Rakuten
                  Linkは通話時間の制限もなく無料※でご利用いただけますので、料金を気にせず通話ができるのは嬉しいですね。
                </p>
                <TxtCap as="p">
                  ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
                  <LinkNormal href="/faq/detail/00001887/?l-id=uservoice_36_faq_detail_00001887">
                    対象外番号一覧
                  </LinkNormal>
                  をご確認ください。アプリ未使用時30秒22円。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい！
                  <TxtMarker as="em">
                    Rakuten
                    Linkって思っていた以上に便利なので、これからもどんどん使います！
                  </TxtMarker>
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  ぜひご活用ください。本日は貴重なお話をお聞かせいただきありがとうございました。
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
              近隣に店舗があることや、Webサイトでの手続き、無料通話アプリなど、利用したいサービスがあることは、快適に利用するうえでとても大切です。
            </p>
            <p>
              おトクな料金プランを選ぶとサービスの内容が気になるという方は、便利なサービスがあり、さらにプラン料金もおトクな楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年10月14日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: '乗り換えでポイ活がより効率的に！スマホ代も大幅節約',
                userInfo: '川原さん（仮名・40代女性／兵庫県）',
                img: 'avator-35.png',
                description:
                  '以前契約していた携帯電話会社を20年以上利用していたんですが、夫から...',
                href: '/uservoice/35/?l-id=uservoice_36_uservoice_35',
              },
              {
                title:
                  'おトクに買えたiPhoneで、大人のスマホデビューをしました！',
                userInfo: '尾形さん（仮名・50代女性／神奈川県）',
                img: 'avator-34.png',
                description:
                  'ずっとガラケーを使っていたのですが、そろそろスマホ...',
                href: '/uservoice/34/?l-id=uservoice_36_uservoice_34',
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

export default Uservoice36
