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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkNormal } from '@components/atoms/Link'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice12: NextPage = () => {
  const pagetitle = 'ワンプランで携帯料金が分かりやすく安心！'
  const pageHeading = '明確な料金プランで安心！ワンプランのわかりやすさが魅力'
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

  const articleNum = '12'
  const userName = '園部'

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
        description="アプリで現在の利用状況と料金を簡単に把握できるのが嬉しい（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年3月1日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホの料金プランはただでさえ複雑なのに、不明瞭なオプション・サービスが付帯されて余計に月々の料金がわかりにくい。」と思ったことはありませんか。
                </p>
                <p>
                  今回は、「従量制のシンプルなワンプラン」の楽天モバイルに乗り換えたことで、月々の携帯電話料金がわかりやすくなっただけでなく、大幅な節約もできたという園部さん（仮名）に、スマホ乗り換えの経緯や感想をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代女性／埼玉県）"
            periodOfUse="9カ月"
            dataUseage="20GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="2人合わせて毎月約1万5千円の節約に"
              subTitle="家計を見直し、夫婦2人で楽天モバイルに乗り換え"
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
                  退職をきっかけに家計を見直したら、毎月の携帯電話料金が高いことに気が付きました。色々と調べる中で、楽天モバイルをおすすめする記事が多かったので、乗り換えを考えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>以前の携帯電話料金はどれくらいでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  毎月1万円を超えていました。ギガがたくさん使えるプランでしたが、詳しい内容や料金をよく理解せずに、店舗でおすすめされるプランを契約して、そのまま使い続けていました。
                </p>
                <p>
                  楽天モバイルに乗り換えてからは、
                  <TxtMarker as="em">
                    データ使い放題※で以前と使えるデータ容量は変わらないまま、毎月7～8千円ほど安くなりました。
                  </TxtMarker>
                  <br />
                  夫婦同時に楽天モバイルに乗り換えたので、2人合わせて毎月1万5千円前後の節約ができています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  乗り換えで家計の大きな見直しができたのですね。
                  <br />
                  店舗で契約されたのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、スマホも同時に買い換えたのですが、スマホは安価な買い物ではないのでしっかりと手に取って検討するために店舗で契約手続きをしました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>スマホは何を購入されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私はiPhone SEです。最初はiPhone
                  12を検討していましたが、実際に手に取ってみると、私には少し大きくて重いかなと感じました。夫も店舗で確かめて、納得した上でiPhone
                  12 Proを購入しました。
                </p>
                <p>
                  重さや操作感は試してみないとわからないので、店舗に行って良かったですね。
                </p>
                <p>
                  乗り換えと一緒にスマホを購入すると楽天ポイントがたくさんもらえるのもスマホ買い替えの決め手のひとつでした。
                </p>
              </Interviewee>
              <Interviewer>
                <p>日頃から楽天ポイントを頻繁に利用されているのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、いつも楽天のさまざまなサービスを利用しています。楽天モバイルの契約で楽天市場でのお買い物ポイント倍率が上がる※のもメリットだと感じています。
                </p>
                <p>
                  前の携帯電話会社から乗り換えるときに、解約手数料※が2人で約2万円程かかったのですが、10年間使っていた携帯電話会社だったのもあって、最後に高額な請求を受けてがっかりしました。
                </p>
                <p>
                  ですが、楽天モバイルに乗り換えたときにもらえたポイントで結果プラスになったので良かったです。
                </p>
                <p>
                  店舗でもとても親切に対応してもらえて、楽天モバイルは解約手数料※もかからないと聞き、契約年数に関わらず、顧客として平等に大切にされていると感じられて嬉しかったです。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限有り。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                  <br />
                  ※2021年6月時点。現在大手キャリアは契約解除料を無料としております。詳しくは各社HPをご覧ください。
                  <br />
                  ※お客様の契約状況により異なる場合がございます。詳細は乗り換え元の携帯電話会社へお問い合わせください。
                  <br />
                  ※契約者が、お申し込み後1年以内に回線契約を解約し、かつ本サービスの利用実態がない場合、
                  当社は、契約者に対して、当社が解約事務手数料として定める金額の980円（税込1,078円）の支払いを請求することがあります。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="アプリで利用状況がすぐにわかるのが嬉しい"
              subTitle="わかりやすいワンプランで毎月の料金も安心"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、以前と大きく違うと感じる部分はどこですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月々の料金がわかりやすくなりました。以前はさまざまな加算や割引があり、料金プランのわかりにくさにストレスを感じていました。
                </p>
                <p>
                  それに比べて楽天モバイルは、
                  <TxtMarker as="em">
                    料金プランはひとつだけで、使ったデータ利用量によってその月の支払いが決まりますし、月々最大2,980円（税込3,278円）でとてもわかりやすい
                  </TxtMarker>
                  です。
                </p>
                <p>
                  オプション・サービスもわかりやすいですし、アプリで現在のデータ利用状況や毎月の料金をいつでも簡単に把握できるのが嬉しいですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  「
                  <LinkNormal
                    href={`/guide/my-rakuten-mobile/?l-id=uservoice_${articleNum}_guide_my-rakuten-mobile`}
                  >
                    my 楽天モバイル
                  </LinkNormal>
                  」アプリではどれくらいの頻度で現在のデータ利用量や月々の料金を確認されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月に2～3回程度です。その場で今月はもう少しデータ通信を控えめにしようと調整もできて便利ですね。
                </p>
                <p>
                  以前の携帯電話会社では、残りのデータ容量が確認しにくいなど、いろいろと不便を感じていました。
                </p>
                <p>
                  楽天モバイルでは、今月の料金がいくらになってしまうのだろうという不安もないですし、
                  <TxtMarker as="em">
                    利用状況をアプリで手軽に確認できるので、とても安心
                  </TxtMarker>
                  です。
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
            ratId={`uservoice_${articleNum}_scroll-03_close`}
            className={Utils['Mt-32']}
          >
            <p>
              楽天モバイルは従量制のシンプルなワンプランなので、園部さんのように月々の料金をしっかりと把握しておきたいという方も安心です。
            </p>
            <p>
              複雑なプランで携帯電話料金が高いと感じている方は、月々のプラン料金が最大2,980円（税込3,278円）の楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年3月1日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '子どものお昼寝中にオンラインで乗り換え完了！節約もできて満足',
                userInfo: '細田さん（仮名・30代女性／北海道）',
                img: 'avator-11.png',
                description: '夫が先に楽天モバイルに乗り換えていて...',
                href: `/uservoice/11/?l-id=uservoice_${articleNum}_uservoice_11`,
              },
              {
                title:
                  '家でも外でも楽天モバイルとずっと一緒。いつでも動画が楽しめる',
                userInfo: '梅田さん（仮名・20代女性／東京都）',
                img: 'avator-10.png',
                description: '私は楽天のダイヤモンド会員で楽天市場...',
                href: `/uservoice/10/?l-id=uservoice_${articleNum}_uservoice_10`,
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

export default Uservoice12
