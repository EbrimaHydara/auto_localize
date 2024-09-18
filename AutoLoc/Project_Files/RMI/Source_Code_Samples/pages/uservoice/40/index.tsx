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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice40: NextPage = () => {
  const pagetitle = 'シンプルな料金プラン'
  const pageHeading = 'わかりやすい料金プランが魅力的！妻にもすすめています'
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

  const articleNum = '40'
  const userName = '小倉'

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
        description="料金プランのわかりやすさとRakuten Linkが魅力！楽天ポイントもたくさん貯まっておトクです（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年11月18日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「携帯電話会社の乗り換えって、面倒くさそう」、「メリットあるの？でも乗り換えた人を見るとなんだか良さそう」と、迷って考え込んでいる方もいるのではないでしょうか。
                </p>
                <p>
                  携帯電話会社の乗り換えを検討するとき、誰もがすぐに決断できるとは限りません。今まで利用してきた携帯電話会社と比べてストレスなくデータ通信ができるのか、本当に利用料金が安くなるのかなど、検討し始めると気になることもいっぱいです。
                </p>
                <p>
                  今回は、先に乗り換えた旦那様が奥様にも楽天モバイルをすすめているという小倉さん夫婦（仮名）に、乗り換えの経緯や魅力などをお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName="小倉さんご夫婦（仮名）"
            userNameCustom={true}
            userBasicInfo="（30代男性／女性／千葉県）"
            periodOfUse="夫：1年7カ月／妻：検討中"
            dataUseage="夫：3～5GB程度／妻：20GB程度"
            beforeComapany="夫：LINEモバイル／妻：LINEモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="いろいろと検討した中で楽天モバイルを選びました"
              subTitle="料金プランのわかりやすさとRakuten Linkが魅力！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルには、ご夫婦2人で乗り換えられたのでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  楽天モバイルに乗り換えたのは僕だけなんです。妻にも楽天モバイルに乗り換えようと誘っているので、インタビューの中でさらに魅力が伝わると良いなと思っています。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
              >
                <p>
                  今の携帯電話会社で特に困っていないので、乗り換えなくて良いかな…と思っているんですが、夫がすすめるのでこれから検討はしようかなと考えています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうなのですね。旦那様は、どのような理由で楽天モバイルを選んだのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  利用料金の見直しと、データ通信速度がもっと速くなったら良いなと考えたのが理由です。
                </p>
                <p>
                  オンライン申し込み専用プランやサブブランドなど複数のサービスを検討する中で、
                  <TxtMarker as="em">
                    料金プランのわかりやすさや、Rakuten
                    Linkを利用すれば通話料が無料※になる点が魅力的
                  </TxtMarker>
                  で楽天モバイルを選びました。
                </p>
                <TxtCap as="p">
                  ※国内通話無料はRakuten
                  Linkアプリ利用時。一部対象外番号あり。未使用時は30秒22円。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換えの手続きはWebサイトと店舗、どちらでされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>店舗で手続きをしました。</p>
                <p>
                  最初は楽天モバイルのWebサイトで簡単に乗り換えの手続きができると見て、Webサイトで乗り換える予定だったんです。ですが、妻と一緒に買い物に行ったショッピングモールの中に、楽天モバイルの店舗があったので、買い物のついでに乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。楽天モバイルに乗り換えて、毎月の利用料金にはどのような変化がありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  月々の負担が少し軽くなりました。今は月々1,078円（税込）か、2,178円（税込）ですね。
                </p>
                <p>
                  もともとデータ容量を3～5GB程度しか使わないこともあり、3千円以下におさまっています。以前と比べると、千円～2千円くらい安くなったので大満足です。
                </p>
              </Interviewee>
              <Interviewer>
                <p>データ通信の速度はいかがでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  かなり速いですね。アプリを使ってデータ通信速度を調べたのですが、上りも下りも速くて快適です※。調べ物をするときにサクサク動いて欲しいという気持ちがあったので、こちらも満足しています。
                </p>
                <TxtCap as="p">※実際の通信速度は環境により異なります。</TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。データ利用量があまり多くないようですが、データ通信は頻繁には利用されないのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  僕はあらかじめ、Wi-Fiにつなげられる場所で動画をダウンロードしておくようにしているんです。なので、データ利用量はさほど多くありません。どちらかというと妻の方が多いですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>奥様はデータ容量をどれくらいご利用ですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
              >
                <p>
                  私は毎月20GBくらい使っています。外出先や移動中にスマホで動画を見ることが多いので、どうしてもデータ利用量が多くなりますね。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  妻は、以前に僕が契約していた携帯電話会社の料金プランなので、毎月4千円弱の利用料金を支払っているんです。
                </p>
                <p>
                  そんなにたくさんデータ容量を使うなら、データ容量無制限※で使える楽天モバイルの方が良いのになあ、とすすめているんですよ。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
              >
                <p>
                  うーん、乗り換えの手続きが面倒だなと思っていたんですが、Webサイトで簡単に手続きできそうだし、少し気になってきました。
                </p>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/40/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天ポイントもたくさん貯まっておトクです"
              subTitle="楽天モバイルの公式アプリも使いやすくRakuten Linkの通話も便利！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  Rakuten
                  Linkを利用すれば通話料が無料※になる点に魅力を感じていらっしゃるというお話でしたが、頻繁に通話をご利用されているのでしょうか？
                </p>
                <TxtCap as="p">
                  ※国内通話無料はRakuten
                  Linkアプリ利用時。一部対象外番号あり。未使用時は30秒22円。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  お店の予約や問い合わせなどで通話をするときは必ずRakuten
                  Linkを利用しています。
                </p>
                <p>
                  時々スマホの電話アプリを使うこともありますが、ほとんど通話はRakuten
                  Linkを使うようになりました。短い通話でも積み重なると気になっていた通話料金が、ほぼ0円になったので助かっています。
                </p>
                <p>
                  my 楽天モバイルも使いやすくて良いですね。
                  <TxtMarker as="em">
                    直感的に操作しやすくて、今のデータ利用量など、知りたい情報にすぐアクセスできるので、以前の携帯電話会社より便利だなと感じています。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それはなによりです。楽天モバイル以外で、楽天グループのサービスはなにかご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  楽天カードや楽天銀行など、いろいろ利用しており、楽天市場のSPU※も9倍でダイヤモンド会員※です。楽天モバイルに乗り換えたおかげで、楽天市場を利用するときのお買い物ポイントがかなり増えました。
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。{' '}
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_40_campaign_spu">
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
                  <br />
                  ※楽天ポイントの会員ランクについて、
                  <LinkIconAfter
                    href="https://point.rakuten.co.jp/guidance/rankkeep/"
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
                  楽天ポイントは、楽天モバイルの利用料金の支払いなどにも使われているのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
              >
                <p>
                  いえ、楽天ポイントは貯めて、高い買い物をするときに思い切って使っています。楽天経済圏※を利用していると、毎月数千ポイントずつ楽天ポイントがもらえるので、結構貯まるんですよ。
                </p>
                <p>
                  楽天ポイントも含めて、おトクな携帯電話会社だなと思います。というわけで、折に触れて妻に乗り換えをすすめているのですが、今回のインタビューで魅力が伝わっているとうれしいです。
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
                  。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgNum="2"
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
              >
                <p>
                  改めて聞いてみるといろいろと魅力的なので、次にiPhoneを買い替えるときに、乗り換えを検討してみようと思います。
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
              楽天モバイルなら、
              <TxtMarker as="em">
                データ通信速度も十分でサクサクつながり※
              </TxtMarker>
              、ストレスがありません。
            </p>
            <p>
              楽天市場でのお買い物で楽天ポイントも貯まりやすくなり、大きなお買い物をするときにも便利でおトクです。
            </p>
            <p>
              「迷っているより、乗り換えた方がおトク」と感じた小倉さん（夫）のように、乗り換えに迷っている人は楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年11月18日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '乗り換えで家計が助かった！楽天ポイントはお小遣い代わりに！',
                userInfo: '小松さん（仮名・20代男性／埼玉県）',
                img: 'avator-39.png',
                description:
                  '生活費を見直したところ、スマホ代が2人あわせて1万6千円以上と高額になっていたことに気付いたのがきっかけ...',
                href: '/uservoice/39/?l-id=uservoice_40_uservoice_39',
              },
              {
                title:
                  '2回線契約で合計160GB！スマホとモバイルWi-Fiで活用しています',
                userInfo: '野村さん（仮名・20代男性／兵庫県）',
                img: 'avator-38.png',
                description:
                  '利用料金の高さや、月々のデータ容量が足りないことに悩んでいたのが...',
                href: '/uservoice/38/?l-id=uservoice_40_uservoice_38',
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

export default Uservoice40
