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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice20: NextPage = () => {
  const pagetitle = '使う月も使わない月も無駄なく快適'
  const pageHeading =
    'データ利用量で料金が決まる！使う月も使わない月も無駄なく快適'
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

  const articleNum = '20'
  const userName = '重森'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220510', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="使った分だけ支払えば良くて、データ利用量が少ない月も無駄がないのがとても魅力的（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年5月10日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「毎月のデータ利用量が違うから、多い月と少ない月、どちらに照準を合わせるほうが得をするのか悩む」、「データ利用量が多い月に合わせて料金プランを選ぶと安心だけど、使わない月はもったいない気がする」など、料金プランの選択や変更でお困りの方も多いのではないでしょうか。
                </p>
                <p>
                  今回は楽天モバイルに乗り換えたことで、毎月のデータ利用量や料金を気にするストレスから解放されたという重森さん（仮名）に詳しいお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／東京都）"
            periodOfUse="11カ月"
            dataUseage="10～20GB"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ利用量に応じて料金が変わるので無駄がない！"
              subTitle="データ高速無制限でデータ残量を気にしなくて良くなったのがうれしい"
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
                  以前利用していた携帯電話会社の料金プランが高く、携帯電話料金を見直したいと思ったのがきっかけでした。ほかにも、毎月20GBを超過すると通信制限がかかるプランだったので、いつもデータ残量が気になっていました。
                </p>
                <p>
                  そんな時に、先に楽天モバイルに乗り換えた姉から「
                  <TxtMarker as="em">
                    楽天モバイル良いよ。データ使い放題※だから、20GBを超えても通信制限かからないよ
                  </TxtMarker>
                  」と教えてもらいました。
                </p>
                <p>
                  データ利用量を気にせずに思いっきり使えて、その上以前よりも毎月の料金が安くなるところに魅力を感じて、姉のすすめる楽天モバイルへの乗り換えを決めました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換え手続きはWebと店舗のどちらでされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  姉はWebで契約したのですが、「すごく簡単だったよ」と教えてもらったので、私もWebから申し込みしました。
                </p>
                <p>
                  「AIかんたん本人確認（eKYC）※」を利用したので、その場ですぐに本人確認も済ませられて、契約手続きはすぐに終わりました。教えてもらったとおりとても簡単で、わざわざ店舗に行かなくても良いのが便利だなと感じました。
                </p>
                <TxtCap as="p">
                  ※AIかんたん本人確認（eKYC）はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイル以外にも、ほかの携帯電話会社の料金プランを検討されましたか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。最初はWi-Fiと併用してデータ容量が少ない安価な料金プランを選ぶつもりでした。ですが、色々と比較しても楽天モバイルの方が安かったり、やはりデータ容量を使い切ったあとの通信制限が気になることから、データ無制限※の楽天モバイルが良いなと思ったんです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  データ利用量や通信制限が気になるとのことですが、普段からデータ通信を頻繁に利用されているのでしょうか？
                </p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  常に頻繁に利用するというより、データ利用量が多い月と少ない月の差が大きいんです。
                  <br />
                  特にコロナ禍で、自宅にいることが多い時期は自宅のWi-Fiを使うのであまりモバイルデータ通信は使わないですが、外出の機会が戻ってくるとデータ利用量も増えます。
                </p>
                <p>
                  いつも2～3カ月に一度は20GBぎりぎりまで使ってしまうのですが、月末にデータ容量を節約して使わなければいけない状況にとてもストレスを感じていました。データ利用量が多い月もあるので、多い月に合わせて料金プランを選択していましたが、あまり使わない月は無駄に払っているようでもったいないという気持ちになり、使わない月も別のストレスを感じていました。
                </p>
                <p>
                  楽天モバイルならデータ利用量に合わせて自動的に最適な料金になり、
                  <TxtMarker as="em">
                    使った分だけ支払えば良いので、データ利用量が少ない月も無駄がない
                  </TxtMarker>
                  のがとても魅力的です。
                </p>
              </Interviewee>
              <div ref={scrollTrigger} className={Utils['Mt-64']} />
              <Interviewer>
                <p>主にどんなアプリや用途でデータ通信を利用されていますか？</p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  InstagramやYouTubeなどです。動画をよく見るので、外出が多い月はデータ利用量が増えますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  普段、楽天モバイルを利用していて、データ通信は安定していると感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。外出先や自宅はもちろん、青森県の実家でも安定していて※、以前利用していた携帯電話会社と変わらない速度でつながるので、満足しています。
                </p>
                <p>
                  実は契約当初、口コミで地方はつながりにくいと聞いたので「もしかしたら実家でつながらないかもしれない...」という不安がありました。でも、
                  <TxtMarker as="em">
                    実際に帰省してみたら安定してつながる
                  </TxtMarker>
                  ので、とても安心しました。
                </p>
                <TxtCap as="p">
                  ※実際のデータ速度は、環境等により異なります。
                </TxtCap>
              </Interviewee>

              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/20/img-03.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <Interview
              title="楽天ポイントがたくさん貯まっておトク"
              subTitle="楽天モバイルの契約で楽天市場の利用が増えた"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            ></Interview>
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
                はい、旅行が好きなので楽天トラベルも利用していますし、楽天市場では少なくとも月2回は買い物をしていて、楽天ふるさと納税※も利用しています。
              </p>
              <p>
                普段から楽天経済圏※を頻繁に利用しているので、ダイヤモンド会員※になりました。
                <br />
                楽天モバイルを契約してから、楽天市場でのお買い物ポイントが＋1倍※になったので、これまでドラッグストアで購入していたものも楽天市場で購入するようになり、楽天市場の利用が増えましたね。ほかにも街中での買い物に楽天Edyや楽天ペイ※を利用しています。
              </p>
              <TxtCap as="p">
                ※
                <LinkIconAfter
                  href="https://event.rakuten.co.jp/furusato/"
                  target="_blank"
                >
                  楽天ふるさと納税
                  <IconNewTabLine />
                </LinkIconAfter>
                ：楽天市場や楽天トラベルを通じてふるさと納税をご利用いただけるサービスです。楽天グループ限定の返礼品も多数取り揃えております。
                <br />※
                <LinkIconAfter
                  href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                  target="_blank"
                >
                  楽天経済圏
                  <IconNewTabLine />
                </LinkIconAfter>
                ：生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                <br />
                ※楽天ポイントの会員ランクについて
                <LinkIconAfter
                  href="https://point.rakuten.co.jp/guidance/rankkeep/"
                  target="_blank"
                >
                  詳しくはこちら
                  <IconNewTabLine />
                </LinkIconAfter>
                をご確認ください。
                <br />※
                <LinkIconAfter
                  href="https://pay.rakuten.co.jp/"
                  target="_blank"
                >
                  楽天ペイ
                  <IconNewTabLine />
                </LinkIconAfter>
                ：QRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                <br />
                ※獲得ポイントに上限有り。詳しくは
                <LinkNormal
                  href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                >
                  SPU（スーパーポイントアッププログラム）
                </LinkNormal>
                をご確認ください。
              </TxtCap>
            </Interviewee>
            <Interviewer>
              <p>かなり楽天のサービスをご利用いただいているのですね！</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                そうですね、楽天ポイントがたくさん貯まるので、おトクに買い物ができてとてもうれしいです。
                <br />
                <TxtMarker as="em">
                  貯まったポイントは日常的な支払いのほか、毎月の携帯電話料金の支払いにも使っています。
                </TxtMarker>
              </p>
            </Interviewee>
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <img
                src={`${assets}img/uservoice/20/img-01.png`}
                alt=""
                width="415"
                height="300"
                loading="lazy"
              />
            </div>

            <Interviewer>
              <p>本日は貴重なお話をお聞かせいただきありがとうございました。</p>
            </Interviewer>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-03_close`}
            className={Utils['Mt-32']}
          >
            <p>
              重森さんのように、データ利用量が多い月と少ない月の差が大きいことで料金プラン選びにお悩みの方は、毎月のデータ利用量に合わせて最適な料金になる楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年5月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <TxtCap as="p" className={Utils['Mt-16']}>
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
                  '分かりやすい料金プランが家族に好評！最新iPhoneもおトクに購入',
                userInfo: '村岡さん（仮名・30代男性／愛知県）',
                img: 'avator-19.png',
                description: '料金プランの安さが一番大きな理由で...',
                href: '/uservoice/19/?l-id=uservoice_20_uservoice_19',
              },
              {
                title:
                  '家のWi-Fiよりも速い！固定費の見直しで貯金もできて大満足',
                userInfo: '下村さん（仮名・20代女性／東京都）',
                img: 'avator-18.png',
                description: '仕事がリモート中心になり外出の機会が...',
                href: '/uservoice/18/?l-id=uservoice_20_uservoice_18',
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

export default Uservoice20
