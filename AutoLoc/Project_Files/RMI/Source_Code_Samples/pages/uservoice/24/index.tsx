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
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice24: NextPage = () => {
  const pagetitle = '家族で乗り換えて動画を満喫'
  const pageHeading =
    '家族みんなで楽天モバイル！安定した回線で動画を楽しんでいます'
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

  const articleNum = '24'
  const userName = '本多'

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: '20220606', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルに乗り換えて、今では通勤時もスマホで動画を楽しんでいます（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年6月6日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「携帯電話料金は安く抑えたいけど、データ通信速度が遅くなると困る」とお悩みの方もいるのではないでしょうか。月々の携帯電話料金やデータ通信速度を考えると、納得のいく料金プランを探すのは難しいものです。
                </p>
                <p>
                  今回は、楽天モバイルに乗り換えて、高速データ通信の速度制限や超過料金を気にすることなく思いっきり利用できるようになり、動画視聴を楽しんでいるという本多さん（仮名）に詳しくお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（50代男性／千葉県）"
            periodOfUse="2年"
            dataUseage="20GB未満"
            beforeComapany="UQモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="安定した高速データ通信で動画が楽しめるようになりました"
              subTitle="データ通信速度が遅かったほかの携帯電話会社から乗り換え"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルを選んだ理由はどこにありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月々の携帯電話料金が安価で、コストパフォーマンスが良いところです。以前利用していた携帯電話会社では、低速回線が使い放題の料金プランを契約していたんですが、あまりにもデータ通信速度が遅くて、ストレスを感じていました。
                </p>
                <p>
                  動画の読み込みが遅くてたびたび再生が止まったり、ちょっとした検索でも表示されるまで時間がかかったりと、とにかく不便でしたが、楽天モバイルに乗り換えてからは動画もサクサク視聴できるし、検索する時もスムーズに表示されるので快適です。※
                </p>
                <TxtCap as="p">
                  ※通信速度はベストエフォート（規格上の最大速度）であり、実効速度は通信環境・状況により変動します。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルに乗り換えたきっかけは、何でしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  知り合いから「楽天モバイルがかなり良いよ」と聞いて、まずは試してみようと乗り換えたのがきっかけです。乗り換えの手続きをする時に、プラン料金1年無料キャンペーン※が利用できたので、かなりおトクに感じましたね。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換えてみて、実際の使用感はどうですか？</p>
              </Interviewer>

              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    以前利用していた格安スマホと変わらない携帯電話料金で、驚くほどデータ通信速度が速くなりました。
                  </TxtMarker>
                  比べ物にならない速度でとても満足しています。※
                  <br />
                  使っていたスマホが古くなっていたので、乗り換えと同時に新しくOPPO
                  Reno
                  A※を購入しました。スマホの性能が上がって、よりスムーズに動画を視聴できるようになったのも嬉しいですね。
                </p>
                <TxtCap as="p">
                  ※通信速度はベストエフォート（規格上の最大速度）であり、実効速度は通信環境・状況により変動します。
                  <br />
                  ※「OPPO Reno A」の販売は終了いたしました。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonRegularLarge
                  as="a"
                  href="/product/?l-id=uservoice_24_product"
                >
                  楽天モバイルの製品一覧を見る
                </ButtonRegularLarge>
              </div>
            </Interview>
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <img
                src={`${assets}img/uservoice/24/img-01.png`}
                alt=""
                width="415"
                height="300"
                loading="lazy"
              />
            </div>
            <Interviewer>
              <p>動画は主にどのサービスで視聴していますか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                YouTubeやNetflixです。Netflixはコロナ禍で自宅にいることが多かった時期に契約して、今も頻繁に利用しています。
              </p>
              <p>
                楽天モバイルに乗り換える前のローディングが続いてまともに視聴できない状態や、読み込みエラーでアプリが落ちるといった煩わしさが、今は当たり前のようになくなって、通勤の時でもスマホで動画を楽しめています。
              </p>
            </Interviewee>
            <Interviewer>
              <p>毎月のデータ利用量はどれくらいですか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                毎月20GBにぎりぎり届かないくらいですね。動画のほかにも、SNSやニュースアプリをよく利用しています。
              </p>
              <p>
                <TxtMarker as="em">
                  データ通信が速くて安定している※ので、以前と比べてスマホの使い方が変わり、ストレスなくいろんなことを楽しめていますね。
                </TxtMarker>
              </p>
              <TxtCap as="p">
                ※実際のデータ速度は、環境等により異なります。
              </TxtCap>
            </Interviewee>
            <Interviewer>
              <p>楽天モバイルにして良かったなと感じることはありますか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                データ通信速度やコストパフォーマンスが良くなったところですね。私の周りでは、楽天モバイルを紹介してくれた人以外にも、同僚や友人に楽天モバイルの利用者が数人いますが、みんな快適に使えているようです。
              </p>
            </Interviewee>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天市場での買い物もおトクになった"
              subTitle="妻はiPhoneの取り扱い開始がきっかけで乗り換え"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>ご家族に楽天モバイルをご利用中の方はいらっしゃいますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、妻と息子も含め、家族全員楽天モバイルですね。私が契約してから1カ月後に、高校生の息子も乗り換えました。妻は、私の1年後に乗り換えたので、もうすぐ1年くらいになります。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。奥様だけ乗り換えのタイミングが異なったのには、何か理由がありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  妻は以前からiPhoneユーザーで、楽天モバイルがiPhoneの取り扱いを始めたタイミングで乗り換えました。楽天モバイルでiPhone
                  SE（第2世代）※を安く購入できたのも、乗り換えの決め手だったようです。
                </p>
                <p>
                  妻はもともと毎月のデータ利用量が3GB程度と少なかったのですが、乗り換えたことで
                  <TxtMarker as="em">
                    以前利用していた格安スマホよりも携帯電話料金が安くなったと、とても喜んでいます。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天モバイルでの「iPhone
                  SE（第2世代）」の販売は終了いたしました。
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、普段の生活に何か変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルに乗り換えてから楽天市場の利用が増えました。家電を購入したり、楽天ふるさと納税※も利用したりしています。
                </p>
                <p>
                  以前は別の通販サイトを利用する機会が多かったのですが、楽天モバイルの契約で楽天市場のポイント倍率が＋1倍※になって、ポイントが効率良く貯まるので、楽天市場での買い物が増えました。
                </p>
                <p>
                  楽天モバイルは毎月のプラン料金が安くて、データ通信速度も速く、楽天市場のお買い物もおトクになるので、トータルでのコストパフォーマンスの良さを感じています。
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
                </TxtCap>
                <TxtCap as="p">
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。併せて楽天市場でのお買い物で貰えるポイントがSPUにプラスしてさらにポイントアップする「
                  <LinkNormal href="/fee/un-limit/#benefits">
                    スタートキャンペーン
                  </LinkNormal>
                  」を開催しております。
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
              毎月の携帯電話料金の安さもデータ通信速度もどちらも妥協したくないという方は、楽天モバイルに乗り換えて動画をサクサク楽しめるようになった本多さんのように、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年6月6日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <FamilyPlan
            className={Utils['Mt-40']}
            directory={articleNum}
            lazy={true}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '5G使い放題で動画をサクサク視聴！学生にもうれしい料金プラン',
                userInfo: '馬目さん（仮名・20代男性／埼玉県）',
                img: 'avator-23.png',
                description: '親に支払ってもらっていた携帯電話料金...',
                href: '/uservoice/23/?l-id=uservoice_24_uservoice_23',
              },
              {
                title: '学生起業家として、コスパの高い楽天モバイルを選びました',
                userInfo: '仁科さん（仮名・20代男性／埼玉県）',
                img: 'avator-22.png',
                description: '何よりコストパフォーマンスの高さです...',
                href: '/uservoice/22/?l-id=uservoice_24_uservoice_22',
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

export default Uservoice24
