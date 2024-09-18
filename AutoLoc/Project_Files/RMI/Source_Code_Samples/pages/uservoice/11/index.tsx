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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkNormal } from '@components/atoms/Link'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice11: NextPage = () => {
  const pagetitle = '育児中にWebでカンタン乗り換えで節約！'
  const pageHeading =
    '子どものお昼寝中にオンラインで乗り換え完了！節約もできて満足'
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

  const articleNum = '11'
  const userName = '細田'

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
        description="小さい子どもがいると長時間の外出が難しいので、オンラインで乗り換え手続きが完結するのはとても助かった。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年2月18日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話料金を節約するためにスマホの乗り換えをしたいと思っても、小さなお子さんがいると、気軽に店舗へ足を運ぶのは難しいものです。
                </p>
                <p>
                  今回は、忙しい子育ての合間にオンラインで楽天モバイルに乗り換えをして、家計を節約されたという細田さん（仮名）に、スマホ乗り換えの体験と感想をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性／北海道）"
            periodOfUse="9カ月"
            dataUseage="10GB以上"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="札幌でも快適に使えて満足"
              subTitle="先に楽天モバイルに乗り換えた夫にすすめられて契約"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけを教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  夫が先に楽天モバイルに乗り換えていて、データ通信速度が快適で、使いやすいとおすすめされたのがきっかけです。乗り換えを検討していたところ、ちょうどプラン料金1年無料キャンペーン※中だったので、家計の節約にもなると思いました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ご主人様はいつ頃ご契約されたのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  夫は2020年6月頃です。当時契約していた格安スマホと比較してデータ通信速度が速い点や、楽天ポイントが貯まりやすくなる点などが乗り換えの決め手になったと言っていました。
                </p>
                <p>
                  従量制のシンプルなワンプランで、データ利用量が少なかった月は自動的に料金が抑えられていることにも満足しているようです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ご主人様からの紹介で乗り換えを検討する際、心配や不安な点はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  夫が快適にデータ通信を使っていたので、不安はありませんでした。札幌市内でも快適につながりますし※、iPhoneにも対応している※ので、契約に対して心配は特になかったです。
                </p>
                <p>
                  以前は携帯電話料金に毎月7～8千円くらいかかっていて、家計の見直しを考えていた時期だったので、乗り換えて良かったと感じています。
                </p>

                <TxtCap as="p">
                  ※地下や大きな商業施設の中など、環境によってつながりにくい場所があります。
                  <br />
                  ※楽天モバイルに対応しているiPhoneシリーズについては
                  <LinkNormal href="/information/news/product/655/">
                    こちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルは月々のプラン料金が最大2,980円（税込3,278円）なので、以前と比較するとかなりおトクになっていますね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。子どもが生まれたばかりでこれから育児にお金がかかってきますし、とても助かっています。
                  <TxtMarker as="em">経済的な効果が大きい</TxtMarker>
                  ので、プラン料金1年無料の適用期間が終了しても継続したいと思っています。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="子どものお昼寝時間に自宅で簡単に開通できた"
              subTitle="オンライン契約とeSIMを利用して"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  小さいお子さんがいらっしゃると、乗り換えの手続きが大変ではなかったですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  子どものお昼寝中にさっとオンラインで手続きができたので問題ありませんでした。
                  <TxtMarker as="em">
                    「AIかんたん本人確認（eKYC） ※」も5～10分程度で完了
                  </TxtMarker>
                  したので、スムーズでしたね。
                </p>
                <p>
                  立って歩き始めたので目が話せない時期で、長時間の外出が必要な店舗での手続きが難しい私にとって、オンラインで手続きが完結するのはとても助かりました。
                </p>
                <TxtCap as="p">
                  ※
                  <LinkNormal
                    href={`/guide/verify/ekyc/?l-id=uservoice_${articleNum}_guide_verify_ekyc`}
                  >
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  ご自宅での手続きでしたら、家事や育児の合間に出来るので安心ですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。eSIM※を選んだので、すぐに開通してデータ通信も使えるようになりました。子どもが寝ている間に簡単に乗り換えができましたね。
                </p>
                <TxtCap as="p">
                  ※eSIMはスマホ内のICチップにSIMの情報を書き込むことで、SIMカードを挿入しなくても携帯電話回線に接続できるSIMタイプです。ご利用には、楽天モバイル対応のeSIM対応製品が必要です。詳しくは
                  <LinkNormal
                    href={`/product/sim/esim/?l-id=uservoice_${articleNum}_product_sim_esim`}
                  >
                    eSIMとは
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
            </Interview>

            <Interview
              title="ポイントも増えておトクな楽天モバイル"
              subTitle="ポイ活している方にもおすすめしたい"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  ほかにはどのような点に楽天モバイルの良さを感じていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>楽天ポイントが貯まりやすくなった点です。</p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルご契約で楽天市場でのお買い物が＋1倍にポイントアップ※する
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  ですね。
                </p>
                <TxtCap as="p">※獲得ポイントに上限有り</TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>はい。楽天市場をよく使う方ほどおトクだと思います。</p>
                <p>
                  子どもを連れての買い物や、雪の時期の大きな買い物は大変なので、日頃から楽天市場を利用しています。
                  <br />
                  楽天スーパーセールやお買い物マラソンの時期に日用品をまとめ買いするなど、できるだけポイントが貯まるように工夫もしているので、楽天モバイルの契約でポイント倍率が上がるのは嬉しいですね。
                </p>
                <p>
                  普通にスーパーで買うと損をしている気すらします。楽天モバイルは、ポイ活されている方にこそおすすめしたいです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお声をお聞かせいただき、ありがとうございました。
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
              楽天モバイルは乗り換えがオンラインで簡単に完結します。細田さんのように小さなお子さんがいらっしゃってなかなか外出ができないという方も、ご自宅で手続きいただける楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年2月18日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '家でも外でも楽天モバイルとずっと一緒。いつでも動画が楽しめる',
                userInfo: '梅田さん（仮名・20代女性／東京都）',
                img: 'avator-10.png',
                description: '私は楽天のダイヤモンド会員で楽天市場...',
                href: `/uservoice/10/?l-id=uservoice_${articleNum}_uservoice_10`,
              },
              {
                title:
                  '家計の見直しでスマホを乗り換え。楽天経済圏で年30万円の節約',
                userInfo: '中川さん（仮名・30代男性／東京都）',
                img: 'avator-09.png',
                description: '以前の携帯電話会社の2年契約縛りが終...',
                href: `/uservoice/09/?l-id=uservoice_${articleNum}_uservoice_09`,
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

export default Uservoice11
