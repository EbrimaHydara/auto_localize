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
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice43: NextPage = () => {
  const pagetitle = '高校生のスマホデビューに'
  const pageHeading = '家族全員で乗り換え！シンプルなワンプランでスマホ代も安心'
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

  const articleNum = '43'
  const userName = '小林'
  const userName2 = '息子'

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
        description="家族みんなで楽天モバイルに乗り換え！シンプルなワンプランでスマホ代がおトクになった（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年1月27日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  一定期間おトクに利用できる割引プランを契約しても、割引期間が終了して結局高額になってしまったことはありませんか？そんなとき、高額な月額利用料のまま使い続けるよりも、携帯電話会社を乗り換えたほうが安心で、ずっとおトクに使えることも。
                </p>
                <p>
                  スマホの通信料が高いとお悩みだった小林さん（仮名）も思い切って家族全員で楽天モバイルに乗り換え、高校生の息子さんも楽天モバイルで初めてのスマホを契約しました。今ではおトクで安心に。
                </p>
                <p>
                  今回は小林さんと、スマホデビューした息子さんに、料金プランの魅力やご家族で乗り換えるメリットについて、詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName="小林さん親子（仮名）"
            userNameCustom={true}
            userBasicInfo="（40代女性・10代男性／三重県）"
            periodOfUse="2年"
            dataUseage="小林さん：3GB未満／息子さん：3GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="家族4人で月々4,312円（税込）に！"
              subTitle="家族で一緒に乗り換え"
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
                  高齢の両親が契約していた料金プランには元々割引がついていたのですが、割引期間が終わって、月々の利用料金が割引適用時の2倍になったのがきっかけでした。
                </p>
                <p>
                  利用明細を見てどうしようかと悩んでいたところ、楽天の三木谷社長が楽天モバイルの料金プランについて話しているのを見る機会があったんです。
                  <TxtMarker as="em">
                    シンプルなワンプランや利用料金の安さが魅力的で、「これだ！」と思って乗り換えを決めました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、割引などのキャンペーンが終わると、利用料金が思わぬ金額になってしまうことがありますよね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。両親に加えて、私自身もスマホの利用料金を見直したいと思っていたタイミングだったこともあり、両親と一緒に楽天モバイルに乗り換えました。
                </p>
                <p>
                  それと、息子は通学時間が長いので、遅い時間に帰ってくる日は最寄り駅まで迎えに行かなければなりません。ちょうど連絡が取れるようにスマホを持たせたいと考えていたのもあって、私たちの乗り換えと一緒に、息子も楽天モバイルでスマホデビューしました。
                </p>
                <p>
                  <TxtMarker as="em">
                    楽天証券を始めとして、楽天経済圏※で楽天ポイントを活用しているので、楽天市場のポイント倍率が上がる※のも魅力的
                  </TxtMarker>
                  で迷うことなく楽天モバイルに決定でしたね。
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_43_campaign_spu">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※獲得ポイントに上限あり。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    詳しくはSPU（スーパーポイントアッププログラム）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、ご家族の乗り換えのタイミングで、息子さんも一緒にスマホデビューもされたのですね。ご家族全員分の乗り換えや新規契約の手続きは、店舗とWebサイト、どちらでお手続きをされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  店舗へ行きました。家族全員で一度に手続きをしたかったので、店舗のスタッフさんに直接ご相談した方が早いだろうと思ったんです。
                </p>
                <p>
                  それに両親と私、息子も含めた全員が新しいスマホを買う予定だったので、実際に触れてみたかったのも理由のひとつです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>どちらのスマホを購入されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  両親はシニア向けの簡単操作のスマホから、Rakuten
                  Hand※に買い替えました。息子も同じくRakuten
                  Hand※です。私はAQUOS sense4 plus※にしました。
                </p>
                <p>
                  両親は息子と同じスマホを使っているので、操作でわからないことがあると息子に聞いているようです。最近はキャッシュレス決済を使いこなすようになって、スマホを持っていろんなところへ出かけるようになりました。
                </p>
                <p>
                  家族全員で同じ携帯電話会社なら、わからないことがあってもすぐに答えてあげられるし、スマホ教室に行かなくても使い方も教えられるので安心ですね。
                </p>
                <TxtCap as="p">
                  ※Rakuten Handは終売しております。現在は後継モデルのRakuten
                  Hand 5Gがお求めいただけます。
                  <LinkNormal href="/product/smartphone/rakuten-hand-5g/?l-id=uservoice_43_product_smartphone_rakuten-hand-5g">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※5Gは一部エリアのみ。順次拡大予定。5Gのご利用には、対象エリアと対応製品が必要です。
                  <br />
                  ※AQUOS sense4
                  plusは販売を終了しています。楽天モバイルで販売中のAQUOSシリーズは、
                  <LinkNormal href="/product/smartphone/?l-id=uservoice_43_product_smartphone">
                    Android（スマートフォン）一覧
                  </LinkNormal>
                  でご確認いただけます。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。教えてあげられると心強いですよね。気にされていた利用料金は、どのような変化がありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても安くなりました。
                  <TxtMarker as="em">
                    新たに契約したので1人分増えましたが、家族4人分の利用料金を合わせても、以前の携帯電話会社の3人分よりおトク
                  </TxtMarker>
                  です。
                </p>
                <p>
                  家族全員データ利用量が月3GB未満なので、利用料金は1人あたり月1,078円（税込）なんです。家族4人分の利用料金を合わせると、月々4,312円（税込）になります。オプション料金を加えても、家族4人分で6,182円（税込）ですね。
                </p>
                <p>
                  スマホを使った分で利用料金が変わる料金プランは、楽天モバイルの魅力だと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ありがとうございます！オプションはなにを利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と息子はノートン™ モバイル
                  セキュリティ※とスマホ交換保証プラス※を契約しています。
                </p>
                <p>
                  それぞれ220円（税込）と715円（税込）のオプション料金が追加されますが、スマホは安いものではないので、落としたりなくしたりすると困りますし、このご時世ですから安全にスマホを使うためにセキュリティを強くしておきたいなと思って利用しています。
                </p>
                <TxtCap as="p">
                  ※ノートン™ モバイル セキュリティについて、
                  <LinkNormal href="/service/norton-mobile-security/?l-id=uservoice_43_service_norton-mobile-security">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※スマホ交換保証プラスについて、
                  <LinkNormal href="/service/replacement-warranty-plus/?l-id=uservoice_43_service_replacement-warranty-plus">
                    詳細はこちら
                  </LinkNormal>
                  。
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
              title="友人や家族との連絡、学校の課題提出に使っています"
              subTitle="楽天モバイルでスマホデビュー！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  息子さんは、以前から自分のスマホがほしいと考えていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  スマホに興味があったので、機会があれば欲しいなと思っていました。僕の通学時間が長いことや、母の乗り換えのタイミングが重なり、スムーズに買ってもらえてよかったと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>スマホは主にどんなことに利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  僕はパソコンをメインに使っているので、スマホでは動画の視聴やゲームはしていません。
                  <TxtMarker as="em">
                    スマホは友人や家族と連絡を取ったり、学校の課題を作成して通学中に提出するのに使っています。
                  </TxtMarker>
                </p>
                <p>
                  通学時間がとても長いので、電車の中でスマホを使って課題ができるのは便利だなと思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  現在Rakuten
                  Handを利用されているとのことですが、使い心地はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  とても小さくて持ちやすいのが良いですね。片手で操作できますし、軽いので長時間使っても持つのがつらくないのがうれしいです。それに、制服のポケットにすっぽり入るので、落とす心配がないのも良いなと思います。
                </p>
                <p>
                  祖父母にスマホの使い方を教えているときにも、使いやすいスマホだといっていました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それは良かったです！データ容量は毎月どれくらい利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  毎月、3GBギリギリにおさまるようにしています。先月は2.9GB、その前は2.7GBでした。データ容量が3GBを超えたら、プラン料金の差額をお小遣いから引かれてしまうので、できるだけWi-Fiを利用しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。3GB超過後～20GB未満のプラン料金との差額、1,100円（税込）が、お小遣いから引かれると辛いですね。3GBを超えないように、my
                  楽天モバイルからリアルタイムのデータ利用量を確認したいですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  そうなんです。お小遣いが減ると困るので、毎月データ利用量を節約しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルを利用してみて、便利だなと思いますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
              >
                <p>
                  データ通信が速い※ですし、プラン料金も安くて良いなと思います。
                  <TxtMarker as="em">
                    大学生になっても、このまま楽天モバイルを使い続けたい
                  </TxtMarker>
                  です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
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
              小林さんは、ご家族4人で楽天モバイルに乗り換えたことで、ご家族全体の携帯電話料金が以前よりぐっと安くなりました。
            </p>
            <p>
              さらに、高齢のご両親やスマホデビューをした息子さんもスマホを使いこなすようになり、異なる世代が4人ともおトクに利用されています。
            </p>
            <p>
              楽天モバイルなら、シンプルなワンプラン。もしデータ容量をたくさん使う家族がいて、20GB超過後はどれだけデータ容量を使っても※3,278円（税込）なので家計の通信費も安心です。
            </p>
            <p>
              携帯電話料金でお悩みなら、ぜひ楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年1月27日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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
                  '息子が小学5年生でスマホデビュー！ゲームや動画を楽しんでいます',
                userInfo: '立岡さん親子（仮名・40代女性／10代男性／愛媛県）',
                img: 'avator-42.png',
                description:
                  '家族全員の携帯電話料金が、かなり生活費の負担になっていたので、料金...',
                href: '/uservoice/42/?l-id=uservoice_43_uservoice_42',
              },
              {
                title:
                  'おトクな利用料金がとにかく魅力！楽天モバイルの大ファンです',
                userInfo: '杉山さん（仮名・30代男性／神奈川県）',
                img: 'avator-41.png',
                description:
                  '携帯電話料金や、自宅のホームルーターの利用料金などのインターネットに...',
                href: '/uservoice/41/?l-id=uservoice_43_uservoice_41',
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

export default Uservoice43
