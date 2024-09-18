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
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'
import { IconNewTabLine } from '@components/icons'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice32: NextPage = () => {
  const pagetitle = 'キッズ携帯としても最適'
  const pageHeading =
    '息子のキッズ携帯としても楽天モバイルが最適。家族全員が満足'
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

  const articleNum = '32'
  const userName = '高野'

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
        description="子どものスマホデビューにあわせて家族で乗り換え。データ使い放題で家族全員にとっておトクな選択だった！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年8月10日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「そろそろ子どもにスマホを持たせたいけど、固定費の負担が増えるのが心配」、「子どものスマホデビューに合わせて、携帯電話料金を見直したいけど、家族全員が満足できる料金プランはあるのだろうか」とお悩みの方もいるのではないでしょうか。
                </p>
                <p>
                  お子さまにスマホを持たせるには、契約者の名義や料金プラン、スマホの見守り機能やフィルター機能、スマホ製品の購入費用など、検討しなければいけないことがたくさんあります。
                </p>
                <p>
                  今回は、お子さまのスマホデビューに合わせて、ご夫婦で楽天モバイルに乗り換えた高野さん（仮名）に、楽天モバイルを選んだ経緯や現在の状況について詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代男性・広島県）"
            periodOfUse="1年7カ月"
            dataUseage="10～15GB程度"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="小学生の息子にもキッズ携帯代わりにスマホを持たせました"
              subTitle="家族全員で楽天モバイルに乗り換え！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えたきっかけを教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  息子にキッズ携帯の代わりとしてスマホを持たせようかと検討していたときに、楽天モバイルが1年間無料キャンペーン（※現在は終了しています）をしていると知ったのがきっかけです。
                </p>
                <p>
                  料金プランやオプションサービス、口コミも見て、検討してから家族全員で乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルを選んだ理由はどこにありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  契約前にほかの携帯電話会社も比較検討しましたが、料金プランが魅力的で、楽天モバイルにしようとすぐに決めました。
                </p>
                <p>
                  楽天モバイルの料金プランなら、データ利用量に応じて自動的に利用料金が変わり、もし息子がデータ通信を使いすぎても月最大2,980円（税込3,278円）※なのが安心だなと思いました。
                </p>
                <p>
                  今後、息子が成長してスマホの使い方が変わっても、都度料金プランを変更する必要がない点も魅力に感じました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ご契約されたとき、お子さまの年齢はおいくつでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  2021年1月に契約した時点で小学5年生でした。楽天モバイルは未成年でも子どもの名義で契約できる※ので、当時11歳の息子の名義で契約しました。
                </p>
                <p>
                  ほかの携帯電話会社では、12歳未満の場合だと保護者の名義で契約することになってしまうので、息子が大きくなってから名義変更すると手間がかかってしまいます。
                </p>
                <p>
                  ですが、
                  <TxtMarker as="em">
                    楽天モバイルなら最初から息子の名義で契約できるので、手間がかからないだけでなく、はじめてスマホを利用する息子本人に責任感や当事者意識を持たせることが、大きなメリット
                  </TxtMarker>
                  だと感じました。
                </p>
                <TxtCap as="p">
                  ※未成年（18歳未満）の方も、Webや楽天モバイルショップ（店舗）のいずれでもお申し込みいただけます。お申し込みの手順は「
                  <LinkNormal href="/flow/for-minors/?l-id=uservoice_32_flow_for-minors">
                    未成年のお客様がご利用になる場合のお申し込みの流れ
                  </LinkNormal>
                  」へ。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。ご契約はWebと店舗、どちらでされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と妻はWebで乗り換え、息子は未成年なので店舗で契約しました※。私は使っていたスマホが古くなっていたこともあって、乗り換えと同時にスマホを買い替えました。息子のスマホも新規契約と同時に楽天モバイルで購入しています。
                </p>
                <TxtCap as="p">
                  ※2021年6月27日まで18歳未満のユーザーは店舗での契約のみとさせていただいておりましたが、2021年6月28日から18歳未満のユーザーもオンラインで申し込みが可能になりました。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>どのスマホを購入されたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私はスマホの利用頻度が高いので、性能を重視してOPPO Reno3
                  A※を選びました。息子のスマホはコストを抑えたかったので、価格と性能のバランスを考えて、OPPO
                  A73を持たせています。
                </p>
                <p>
                  妻はまだ今のスマホが使えるということで、買い替えていません。
                </p>
                <TxtCap as="p">
                  ※OPPO Reno3
                  Aは販売を終了しています。楽天モバイルで販売中のOPPOシリーズは、
                  <LinkNormal href="/product/smartphone/?l-id=uservoice_32_product_smartphone">
                    Android（スマートフォン）一覧
                  </LinkNormal>
                  でご確認いただけます。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/32/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
              <Interviewer>
                <p>
                  以前ご利用されていた携帯電話会社と比較すると、月の携帯電話料金はどれくらい変わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前は、妻が4千円程度、私が3千円程度でした。私はデータ容量が3GBしかない料金プランを契約しており、あまりスマホを使わない生活でした。妻も大体、似たような状況だったと思います。
                </p>
                <p>
                  楽天モバイルに乗り換えてからは、私は音楽や動画を楽しむようになり、データ利用量は10～15GBに増えましたが、料金は2,178円／月（税込）に減りました。
                </p>
                <p>
                  妻と息子は、最近は自宅のWi-Fiを利用しており、外ではデータ通信をほぼ利用しないので、今のところ0円※です。結果的に、息子分が増えたのに5千円ほどの節約になりました。
                </p>
                <TxtCap as="p">
                  ※2023年6月1日から料金プランがRakuten最強プランになりました。
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <KidsKeitaiBnr
              className={Utils['Mt-32']}
              directory={articleNum}
              lazy={true}
            />

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="家族全員にとっておトクな選択だった楽天モバイル"
              subTitle="動画も楽しめるようになった！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、データ通信の使い方などには変化がありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>以前よりスマホを利用するようになりました。</p>
                <p>
                  乗り換える前はあまりスマホに触れる習慣がなかったのですが、乗り換えてからは、仕事の出張先や移動中に、動画や音楽のストリーミング配信をよく視聴しています。
                </p>
                <p>
                  いろいろと試す中でYouTube
                  Premium※も利用していましたが、今は主にAmazon Prime
                  Videoを利用しています。
                </p>
                <p>
                  <TxtMarker as="em">
                    データ使い放題※になったおかげで、外出先で気軽にインターネットが楽しめます。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※Rakuten最強プランをご利用の製品で「YouTube
                  Premium」にお申し込みいただくと、3カ月無料で利用できるキャンペーン実施中です。
                  <LinkNormal href="/campaign/youtubepremium/?l-id=uservoice_32_campaign_youtubepremium_02">
                    詳細はこちら
                  </LinkNormal>
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前と比較すると、データ利用量がとても増えたのですね。乗り換えたことで、生活に変化があったと感じる部分はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルを契約したことで楽天市場での楽天ポイントの倍率が増えた※ので、楽天市場を利用する機会が増えました。楽天ポイントがたくさん貯まるので、楽天スーパーセールやお買い物マラソンのタイミングに、大きな買い物をするようにしています。
                </p>
                <p>
                  また、家族全員がそれぞれの名義で契約したので、新規契約時の楽天ポイント※は家族一人ずつもらえました。各自好きな物を購入できてとても満足感がありましたし、息子も自分の楽天ポイントで買い物ができて喜んでいました。
                </p>
                <p>
                  2022年7月1日から楽天モバイルの料金プランが変わる※というニュースを聞きましたが、
                  <TxtMarker as="em">
                    料金プランはもちろん、楽天経済圏※を含めてほかにはない魅力があるので、今後も利用を続けていく
                  </TxtMarker>
                  つもりです。
                </p>
                <p>
                  楽天モバイルへの乗り換えは、家族全員にとって、ベストの選択だったと感じています。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_32_campaign_spu">
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                  <br />
                  ※定期的におトクなキャンペーンを実施しております。
                  <LinkNormal href="/campaign/?l-id=uservoice_32_campaign">
                    詳細はこちら
                  </LinkNormal>{' '}
                  。<br />
                  ※2022年7月1日から料金プランがRakuten UN-LIMIT
                  VIIになり、3GBまで1,078円／月（税込）になりました。
                  <br />
                  ※2023年6月1日から料金プランがRakuten最強プランになりました。
                  <br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
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
              高野さんのように、お子さまのスマホデビューで固定費の負担に悩んでいる方は、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <p>
              データ利用量に応じて最適な利用料金になる楽天モバイルなら3GBまで月980円（税込1,078円）、20GBを超えても月最大2,980円（税込3,278円）と、お子さまがスマホを使いすぎても安心です。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年5月10日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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
                  '乗り換えて良かった！データ使い放題とかけ放題でとっても快適',
                userInfo: '東野さん（仮名・30代女性／大阪府）',
                img: 'avator-31.png',
                description: '楽天モバイルの店舗の前を通ったときに...',
                href: '/uservoice/31/?l-id=uservoice_32_uservoice_31',
              },
              {
                title: 'ひと月で150GB使っても安心！テザリングで2拠点生活も快適',
                userInfo: '立川さん（仮名・40代男性／静岡県）',
                img: 'avator-30.png',
                description: '大単身赴任先でのインターネット回線とし...',
                href: '/uservoice/30/?l-id=uservoice_32_uservoice_30',
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

export default Uservoice32
