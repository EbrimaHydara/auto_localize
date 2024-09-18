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
import { LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice51: NextPage = () => {
  const pagetitle = '娘の進学を機に乗り換え！楽天ポイントで生活費の負担も軽減'
  const pageHeading = '娘の進学を機に乗り換え！楽天ポイントで生活費の負担も軽減'
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

  const articleNum = '51'
  const userName = '内村'

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
        description="娘の進学を機に乗り換え！楽天ポイントで生活費の負担も軽減（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年6月2日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「子どもが進学してデータ利用量が増えたけど、料金プランを変えるべきか悩む」と考えている保護者の方は多いのではないでしょうか。
                </p>
                <p>
                  しかし、データ容量が多いプランは利用料金が高くなってしまうことが多く、やむを得ずデータ容量が少ない安価なプランを選んで、子どもを我慢させることになるご家庭も珍しくないでしょう。
                </p>
                <p>
                  今回お話をうかがった内村さん（仮名）は、中学生のお子さまのデータ利用量が増えてきたのを機に、親子で楽天モバイルへ乗り換えました。
                </p>
                <p>
                  そして、同時に自宅の回線も楽天モバイルのモバイル
                  Wi-Fi®ルーターに乗り換えた内村さんに、詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性／千葉県）"
            periodOfUse="1年7カ月"
            dataUseage="母：30～40GB／娘：30～40GB／モバイル Wi-Fi ルーター：30～40GB"
            beforeComapany="LINEモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="子どもの成長にあわせてたくさんデータ通信ができる楽天モバイルに乗り換え"
              subTitle="スマホを思い切り使っても安心！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            />
            <Interviewer>
              <p>楽天モバイルに乗り換えようと思った理由を教えてください。</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                以前契約していた携帯電話会社の料金プランでは、データ容量が足りないと感じていたのがきっかけです。娘も中学生になってからデータ利用量が増えていたので、親子
                2人で乗り換えを決めました。
              </p>
              <p>
                主にストリーミングで音楽を聞いたり、動画を見たりしているので、月々のデータ容量が20GBの料金プランでは足りなかったんです。
              </p>
              <TxtMarker as="em">
                月末が近づくにつれて、データ容量が減ってきて我慢するのもストレスだったし、娘にも同じようなストレスを感じさせたくないと思ったので、データ使い放題※の楽天モバイルを選びました。
              </TxtMarker>
              <TxtCap as="p">
                ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり
              </TxtCap>
            </Interviewee>
            <Interviewer>
              <p>月々、データ利用量をどれくらい利用されていますか？</p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                私も娘も、毎月30～40GB
                くらい利用しています。それと、自宅の回線として楽天モバイルのモバイルWi-Fiルーターを利用しています。こちらは主に私がパソコンをつないだり、娘もスマホをルーターにつないだりしているので、月々30～40GBほどですね。
              </p>
            </Interviewee>
            <Interviewer>
              <p>
                合計すると3回線で毎月90～120GBぐらいデータ通信を利用しているのですね。お子さまもかなりデータ利用量が多いそうですが、いつごろからスマホデビューされたのでしょうか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                小学5年生のときにスマホデビューしました。習い事などで帰りが夜遅くなることが増えたので、思い切ってスマホを持たせたんです。周りの子たちも5年生ぐらいでスマホデビューしていましたから、ちょうどいいタイミングだったかなと思っています。
              </p>
            </Interviewee>
            <Interviewer>
              <p>
                そうだったのですね。お子さまがスマホを使うときのルールは決めていらっしゃるのでしょうか？
              </p>
            </Interviewer>
            <Interviewee
              imgDirectory={interviewImg.directory}
              imgParam={interviewImg.param}
              name={`${userName}さん`}
            >
              <p>
                スマホデビューしたときから、基本的には自宅で使うなど、スマホを使うルールを守らせています。自分で利用料金を支払えるようになる年齢までは、楽天モバイルを使い続ける予定ですね。
              </p>

              <TxtCap as="p">
                ※楽天モバイルなら学生やお子さまも安心・おトクにスマホデビュー！お子さまのスマホデビューについて、
                <LinkNormal
                  href="https://network.mobile.rakuten.co.jp/guide/kids-ke-tai/"
                  rel="noopener"
                  target="_blank"
                >
                  詳細はこちら
                </LinkNormal>
                。
              </TxtCap>
            </Interviewee>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天ポイントが増えていろいろと使い道が広がりました"
              subTitle="乗り換えて楽天市場のポイント倍率もアップ！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外で、楽天グループのサービスは利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天経済圏※をフル活用しています。基本的に楽天で使えるサービスは、楽天最優先で利用して、楽天ポイントをたくさん貯めています。
                  <TxtMarker as="em">
                    楽天モバイルにしたことで、楽天市場でお買い物するときのポイント倍率※が上がった
                  </TxtMarker>
                  のもうれしいですね。
                </p>
                <p>
                  楽天市場ではスーパーDEAL※を利用したり、お買い物マラソン※のタイミングで、消耗品や高い買い物をしたりするようにしています。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※2022年11月1日の条件変更により、SPU
                  の倍率が「楽天モバイル＋会員ランク特典で最大＋3
                  倍」になりました。
                  <br />
                  ※獲得ポイントに上限あり。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※スーパーDEAL
                  とは対象商品の購入金額の一部をポイントで還元するサービスです。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/superdeal/guide/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※お買い物マラソンとは対象期間中にエントリーすることで、期間中に楽天市場で
                  1,000円（税込）以上の買い物をするとポイント倍率が最大10
                  倍になります。
                  <LinkNormal
                    href="https://event.rakuten.co.jp/campaign/point-up/marathon/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>貯めた楽天ポイントは、どんなことに利用していますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天ポイントが使えるお店で、普段の買い物の一部に使ったり、外出先で食事するときに使ったりしています。ほかにも、楽天モバイルの利用料金の支払いに、楽天ポイントを使っていますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p></p>
                <p>
                  楽天ポイントを有効に活用されているのですね。お支払いのときに楽天ペイアプリ※から楽天ポイントを使うと、お支払い総額に対して楽天ポイントが付与されることはご存じでしたか？
                </p>
                <TxtCap as="p">
                  ※楽天ペイ：QR
                  コードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkNormal
                    href="https://pay.rakuten.co.jp/"
                    rel="noopener"
                    target="_blank"
                  >
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※楽天カード・楽天ポイント・楽天キャッシュでのお支払いに限り楽天ポイントが付与されます。
                  <LinkNormal
                    href="https://checkout.rakuten.co.jp/faq/"
                    rel="noopener"
                    target="_blank"
                  >
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
                  え、知りませんでした！楽天ポイントがさらに貯まりやすくなるのはいいですね。普段から楽天ポイントを使う機会が多いので、楽天ペイアプリも使ってみます。
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
              楽天モバイルなら20GB超過後はどれだけ使っても3,278
              円／月（税込）なので、子どもの成長にあわせてデータ利用量が増えても、データ通信の利用を我慢させる必要がありません。
            </p>
            <p>
              さらに楽天市場で獲得できる楽天ポイントの倍率が増えるので、楽天経済圏を利用しているご家庭の生活費もやさしくなります。
            </p>
            <p>
              お子さまが進学するにつれて、外出先でスマホを使うようになることを考えている方は、データ通信を我慢せず思い切りスマホを使える楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。
              <br />
              環境により速度低下する場合あり※当ページの内容は2023年6月2日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '複数回線から楽天モバイル1本へ！大学生にうれしい料金で大満足',
                userInfo: '清水さん（仮名・20代男性／神奈川））',
                img: 'avator-50.png',
                description:
                  '過去に1年間無料キャンペーンをしていたことがきっかけです。.....',
                href: `/uservoice/49/?l-id=uservoice_${articleNum}_uservoice_50`,
              },
              {
                title:
                  '携帯電話の月々のお支払いは全額楽天ポイント利用！自宅の回線として活用しています',
                userInfo: '関口さん（仮名・20代女性／大阪府）',
                img: 'avator-49.png',
                description:
                  'データ使い放題※なところですね。自宅のインターネット回線としてテザリング',
                href: `/uservoice/48/?l-id=uservoice_${articleNum}_uservoice_49`,
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

export default Uservoice51
