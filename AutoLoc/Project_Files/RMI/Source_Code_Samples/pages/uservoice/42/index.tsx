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
import { IconNewTabLine } from '@components/icons'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice42: NextPage = () => {
  const pagetitle = '小学生のスマホデビューに'
  const pageHeading =
    '息子が小学5年生でスマホデビュー！ゲームや動画を楽しんでいます'
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

  const articleNum = '42'
  const userName = '立岡'
  const userName2 = '陸くん'

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
        description="子どものスマホデビューは、わかりやすい料金プランが魅力的な楽天モバイルで！データ利用量が変わっても安心だからゲームが思いっきり楽しめる！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年1月20日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  お子さまが初めてスマホを持つとき、携帯電話会社の利用料金やフィルタリング機能など、さまざまなサービス内容が気になるかと思います。
                </p>
                <p>
                  今回ご紹介する立岡さん（仮名）は、利用料金に魅力を感じて、息子陸くん（仮名）のスマホデビューを楽天モバイルに決めました。
                </p>
                <p>
                  楽天モバイルを選んだ背景や、陸くんのスマホご利用状況など、詳しくお話を伺いました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName="立岡さん親子（仮名）"
            userNameCustom={true}
            userBasicInfo="（40代女性・10代男性／愛媛県）"
            periodOfUse="1年3カ月"
            dataUseage="3GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="わかりやすい料金プランで子どものデータ利用量が変わっても安心"
              subTitle="親子で同じ携帯電話会社に乗り換え！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えを考えたきっかけや、理由はなんだったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  家族全員の携帯電話料金が、かなり生活費の負担になっていたので、料金プランを見直したいと考えていました。
                </p>
                <p>
                  以前契約していた携帯電話会社では、データ利用量に対する料金プランが見合っていないと感じていて、オプションも結局は利用しないまま契約内容を変更することも多かったので、無駄が多いと感じていたんです。
                </p>
                <p>
                  そこで、シンプルな料金プランの楽天モバイルを試してみようと考え、スマホの買い替えのタイミングでまずは私が乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。まず立岡さんが楽天モバイルをご契約されたのですね。その後、ご家族の方も乗り換えられたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。
                  <TxtMarker as="em">
                    私が楽天モバイルに乗り換えてから月々の携帯電話料金がすごく安くなったので、すでにスマホを利用していた長男も楽天モバイルに乗り換えました。
                  </TxtMarker>
                  同じタイミングで次男の陸も、新規契約しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね！陸くんは、楽天モバイル以外の携帯電話会社を利用されていたのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、陸のスマホデビューは楽天モバイルです。ほかの携帯電話会社は、利用料金やオプション料金がわかりづらいので、選択肢に入っていませんでした。
                </p>
                <p>
                  それに、子どものスマホに万が一のトラブルが起きたときに、私と同じ携帯電話会社なら店舗や問い合わせ窓口を探さなくて良いと思ったことも選んだ理由のひとつです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。スマホの利用料金や万が一のトラブルが起こったときの対策も大切ですね。お子さまたちは普段、どれくらいデータ容量をご利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  基本的に自宅のWi-Fiを使わせているので、子どもたち2人とも3GB未満です。今は少ないデータ容量で済んでいますが、子どもたちが中学生や高校生になって、外出先でもスマホを使うようになったら、データ利用量が変わるだろうなと思っています。
                </p>
                <p>
                  けれど、楽天モバイルなら子どもたちが進学してデータ利用量が増えても利用料金に上限があるので、請求金額を見てびっくりすることがないのも安心できます。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  たしかに、お子さまの進学でスマホの利用状況が変わる可能性を考えると、楽天モバイルなら安心ですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。万が一子どもたちがデータ容量をたくさん使っても、月々最大3,278円（税込）なので、驚くような利用料金にならないのはとても安心できます。
                </p>
                <p>
                  ほかにも、あんしんコントロール by
                  i-フィルター※があるのも良いですね。子どもたちのスマホのセキュリティ対策も気になっていたので助かります。
                </p>
                <TxtCap as="p">
                  ※「{' '}
                  <LinkNormal href="/service/i-filter/?l-id=uservoice_42_service_i-filter">
                    あんしんコントロール by i-フィルター
                  </LinkNormal>
                  」は月額330円で、ご家庭でも外出先でも、お子さまのスマホ・タブレット利用を見守る、あんしん・便利なフィルタリングサービスです。18歳未満のお客様が契約する際には原則契約が必須となります。18歳未満のお客様がフィルタリングサービスを利用せずにご利用いただくことになる場合には、保護者の方にフィルタリングサービスを利用しない旨の申出書（フィルタリング・サービス不要申出書）に利用されない理由をご記入のうえご提出いただくことになります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  立岡さんご自身の楽天モバイルをご利用になってみての使用感はいかがでしょうか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">
                    月々の携帯電話料金が安くなって、とても便利です。私の普段の生活範囲では、電波が入らなくて困ったということもありません。
                  </TxtMarker>
                  ※
                </p>
                <p>
                  それに、楽天経済圏※をかなり利用しているので、楽天ポイントがさらに貯まるようになったのもうれしいですね。
                </p>
                <TxtCap as="p">
                  ※データ高速無制限で使える日本全国の通信エリアは人口カバー率99.9%を突破しました。
                  <br />
                  ※2023年6月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアは{' '}
                  <LinkNormal href="/area/?l-id=uservoice_42_area">
                    サービスエリアマップ
                  </LinkNormal>
                  でご確認ください。
                  <br />
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。{' '}
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
              <KidsKeitaiBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                lazy={true}
              />
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <img
                  src={`${assets}img/uservoice/42/img-01.png`}
                  className="uservoice-Utility_Copyprotect"
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="ゲームを思い切り楽しんでいます"
              subTitle="誕生日プレゼントでスマホデビュー！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>陸くんがスマホデビューをしたきっかけはなんでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  陸の誕生日がきっかけです。長男が持っているスマホがうらやましかったみたいで、陸からスマホが欲しいとねだられていました。それが理由で、誕生日プレゼントにスマホを買ってあげることにしたんです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>陸くんは、どのスマホ製品を選びましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={userName2}
              >
                <p>iPhone SE（第3世代）です。</p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私や長男のスマホを見て、iPhoneが良いといっていたこともあり、陸本人の希望を尊重してiPhone
                  SE（第3世代）を選びました。
                </p>
                <p>
                  楽天モバイルはほかの携帯電話会社よりもiPhoneが安い※ですし、楽天ポイントもたくさんもらえるので、おトクに購入できました。
                </p>
                <TxtCap as="p">
                  ※2021年9月17日時点。NTTドコモ、au、ソフトバンクとのiPhone本体代金の比較（自社調べ）。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  陸くんは普段、スマホで何をしていますか？外でも友達と一緒に使ったりしていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={userName2}
              >
                <p>
                  スマホで動画を見たり、ゲームをしたりしています。特別なとき以外は家の中で使うルールがあるので、いつもは外で使っていません。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  陸は小学生なので、基本的にはスマホを家から持ち出さないようにルールを決めています。今後中学生になったら、またルールを見直す予定です。
                </p>
                <p>
                  <TxtMarker as="em">
                    子どもたちなりにスマホを楽しんでいるようで、楽天スーパーポイントスクリーン※などを楽しみながらポイ活をして、楽天ポイントを貯めているんです。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天スーパーポイントスクリーンについて、
                  <LinkIconAfter
                    href="https://screen.rakuten.co.jp/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>貯まった楽天ポイントはどんなことに使われていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={userName2}
              >
                <p>
                  <TxtMarker as="em">
                    今すごくハマっているスマホゲームのカードを買うときに※使っています。
                  </TxtMarker>
                  カードが欲しいから、楽天ポイントが貯まったらすぐ使っちゃうんです。
                </p>
                <TxtCap as="p">
                  ※楽天ポイントは楽天Edyにチャージが可能。楽天Edyはスマホゲームの課金にも使えます。
                  <LinkIconAfter
                    href="https://edy.rakuten.co.jp/howto/charge/"
                    target="_blank"
                  >
                    詳細はこちら。
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天ポイントがお小遣い代わりになっているんですね。スマホデビューをしたときに受け取った楽天ポイントはなにに使いましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={userName2}
              >
                <p>もらった楽天ポイントは全部スマホゲームに使いました。</p>
              </Interviewee>
              <Interviewer>
                <p>なるほど、スマホで思い切りゲームを楽しんでいるのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={userName2}
              >
                <p>
                  はい、すごく楽しいです。スマホが持ててうれしくて、これからも大切に使いたいです。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  子どもたちも満足してスマホを使えているし、家族の携帯電話料金も安くなって、楽天モバイルに乗り換えて本当に良かったと思います。
                </p>
                <p>
                  楽天市場のポイント倍率※も上がっておトク感もあり、もっと早く乗り換えればよかったと思うくらいです。
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。{' '}
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_42_campaign_spu">
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    SPU（スーパーポイントアッププログラム）
                    <IconNewTabLine />
                  </LinkIconAfter>
                  をご確認ください。
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
              保護者の方にとって、お子さまのスマホデビューは比較検討しなければならない内容が多く、悩みは尽きないものです。
            </p>
            <p>
              しかし、楽天モバイルなら、シンプルなワンプランでたくさんの料金プランから悩む必要がありません。お子さまが進学してデータ容量をたくさん使う※ようになっても、月々最大3,278円（税込）と利用料金に上限が決まっているので安心です。
            </p>
            <p>
              子どものスマホデビューは、シンプルでわかりやすく安心な楽天モバイルで始めてみませんか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2023年1月20日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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
                  'おトクな利用料金がとにかく魅力！楽天モバイルの大ファンです',
                userInfo: '杉山さん（仮名・30代男性／神奈川県）',
                img: 'avator-41.png',
                description:
                  '携帯電話料金や、自宅のホームルーターの利用料金などのインターネットに...',
                href: '/uservoice/41/?l-id=uservoice_42_uservoice_41',
              },
              {
                title: 'わかりやすい料金プランが魅力的！妻にもすすめています',
                userInfo: '小倉さんご夫婦（仮名・30代男性／女性／千葉県）',
                img: 'avator-40.png',
                description:
                  '楽天モバイルに乗り換えたのは僕だけなんです。妻にも楽天モバイルに乗り換えようと誘っているので、インタビューの...',
                href: '/uservoice/40/?l-id=uservoice_42_uservoice_40',
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

export default Uservoice42
