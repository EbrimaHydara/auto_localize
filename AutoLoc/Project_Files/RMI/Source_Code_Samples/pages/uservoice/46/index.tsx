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
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice46: NextPage = () => {
  const pagetitle = '最新のiPhoneをおトクに購入！'
  const pageHeading = 'iPhone 14がおトクに購入できました！楽天経済圏も便利です'
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

  const articleNum = '46'
  const userName = '小野田'

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
        description="将来のスマホ買い替え時も見据え、 iPhoneアップグレードプログラムを利用して購入！自分の使い方にあわせて柔軟に使えるのが楽天モバイルならではの魅力！"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年2月17日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話会社の乗り換えを検討するときに、ポイントがたくさん貯まることや、キャンペーン、おトクなサービスなどを比較している人は多いのではないでしょうか。
                </p>
                <p>
                  楽天モバイルをご利用中、楽天市場のお買い物でもらえる楽天ポイントが以前の+1倍から、最大＋3倍※に変更されました。
                </p>
                <p>
                  今回お話を聞く小野田さん（仮名）は、この楽天モバイルのSPU倍率※が変更になったことが決め手となり、乗り換えたそうです。現在の小野田さんのSPU倍率は、合計で＋10倍前後になり、楽天経済圏※でたくさん楽天ポイントを貯めて活用されています。
                </p>
                <p>
                  ほかにも、楽天モバイル買い替え超トクプログラム※を契約して、将来のスマホ買い替え時も見据えている小野田さんに、詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <br />
                  ※SPU（スーパーポイントアッププログラム）の
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  <br />
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
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_46_service_replacement-program_01">
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000円（不課税）のお支払いが必要となる、または返却不可となる場合があり。機種変更が可能な製品は、本プログラム対象製品に限る。
                  <br />
                  ・本プログラムは、Rakuten最強プランのお申し込みがなくてもご利用いただけます。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性／岐阜県）"
            periodOfUse="6カ月"
            dataUseage="3GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ容量や料金プランも自分に合っていて使いやすい"
              subTitle="よりおトクに楽天経済圏を利用するために選んだ楽天モバイル"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>乗り換えを考えたきっかけについて教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と主人2人分の携帯電話料金と、光回線の利用料金の合計が月3万円以上と高額になっていたので、通信費の見直しを考えたのがきっかけです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  かなり高額になっていたのですね。大手キャリアのサブブランドや格安スマホという選択肢もある中で、楽天モバイルを選んだ決め手は何でしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルの料金プランの安さと、楽天市場で買い物するときの「楽天ポイント」の倍率アップですね。
                </p>
                <p>
                  私は楽天経済圏を利用していて、楽天市場で頻繁に買い物をするんですが、楽天モバイルの広告が表示されていたので、気になって調べてみました。
                </p>
                <p>
                  楽天モバイルのホームページに、データ利用量に応じて変わる料金プランで、月3GBまで1,078円（税込）と書いてあったんです。それを見たとき、月に3GB弱しか使わない私にぴったりだと思いました。
                </p>
                <p>
                  ほかにも、SPUの倍率もアップしますし、
                  <TxtMarker as="em">
                    楽天カードを持っていると楽天モバイル買い替え超トクプログラムが利用できると知り、即決しました
                  </TxtMarker>
                  。
                </p>
              </Interviewee>
              <IphoneUpgradeBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                serialNumber="02"
              />
              <Interviewer>
                <p>
                  そうだったのですね。楽天モバイルはオンラインですぐに手続きができることも特徴の1つですが、乗り換える際の手続きは、Webサイトと店舗、どちらでされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  Webサイトから手続きをしました。AIかんたん本人確認（eKYC）※もすぐに認証され、とても簡単でした。
                </p>
                <p>
                  購入したスマホの設定もeSIM※を選んだので、QRコードを読み込むだけであっという間に開通手続きが終わりました。
                </p>
                <TxtCap as="p">
                  ※
                  <LinkNormal href="/guide/verify/ekyc/?l-id=uservoice_46_guide_verify_ekyc">
                    AIかんたん本人確認（eKYC）
                  </LinkNormal>
                  はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                  <br />
                  ※eSIMについて、
                  <LinkNormal href="/product/sim/esim/?l-id=uservoice_46_product_sim_esim">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それは良かったです。先ほど楽天経済圏をご利用いただいているとお聞きしましたが、楽天グループのサービスは、どのようなものを利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場、楽天モバイル、楽天ひかり、楽天銀行、楽天カード、楽天証券、ほかに楽天ブックスや楽天トラベルも利用しています。楽天ひかりは、楽天モバイルに乗り換えたときに一緒に契約しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天グループのサービスをたくさん使っていただいて、ありがとうございます！現在のSPUの倍率は、何倍になっているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天ブックスと楽天トラベルの2つは毎月利用状況が変わるので、ポイント倍率が変動しますが、いつも大体＋10倍前後になっています。
                </p>
                <p>
                  楽天ポイントが貯まりやすくなったので、お買い物マラソン※や楽天スーパーSALE※が以前よりもっと楽しみになりました。最近は
                  <TxtMarker as="em">
                    近隣で楽天ペイを利用できる場所が増えたので、外出先での買い物に楽天ポイント利用しています
                  </TxtMarker>
                  。
                </p>
                <TxtCap as="p">
                  ※対象期間中にエントリーすることで、期間中に楽天市場で1,000円（税込）以上の買い物をするとポイント倍率が最大10倍になります。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/marathon/guide/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  <br />
                  ※楽天スーパーSALEは、楽天市場最大のセールです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/supersale/guide/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルはiPhoneをおトクに購入できてとっても満足です"
              subTitle="買い替え超トクプログラムを利用してiPhoneを購入しました！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えた際にスマホの買い替えはされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。息子を動画で撮影するときにきれいに撮りたかったので、動画撮影の性能が話題になっていたiPhone
                  14にしました。もともとはAndroidのスマホを使っていたのですが、iPhoneも試してみようと思って買い替えました。
                </p>
                <p>
                  スマホの買い替えと同時に、楽天モバイル買い替え超トクプログラムも契約しています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイル買い替え超トクプログラムを契約された理由はなんでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  スマホのOSや製品にはそこまでこだわっていないので、今回はiPhoneでしたが、未来の自分がどう考えているのかわからないじゃないですか。
                </p>
                <p>
                  楽天モバイル買い替え超トクプログラムを契約しておけば、2年後に新しいiPhoneに買い替えても良いですし、そのまま継続して使うという選択もできます。残債を一括で支払った後、iPhoneを下取りに出して※Androidに買い替えることもできるといったように、たくさんの選択肢から選べるようにしておきたいんです。
                </p>
                <p>
                  データ利用量に応じて支払い金額が変わる料金プランや、楽天モバイル買い替え超トクプログラムも、
                  <TxtMarker as="em">
                    自分の使い方にあわせて柔軟に使えるのが楽天モバイルならではの魅力
                  </TxtMarker>
                  だと思います。
                </p>
                <TxtCap as="p">
                  ※スマホ下取りサービスについて、
                  <LinkNormal href="/service/tradein/?l-id=uservoice_46_service_tradein">
                    詳細はこちら
                  </LinkNormal>
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
              ポイントのおトクさも、将来のスマホ利用を考えた購入、無駄のない料金プランも楽天モバイルの魅力です。
            </p>
            <p>
              データ容量や、スマホを買い替えるタイミングにあわせて、柔軟性のある選択ができる楽天モバイルは、小野田さんのように自分のスタイルでスマホを使っていきたい方に、是非おすすめです。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年2月17日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title: 'Webサイトで簡単に乗り換え！15分で開通が完了しました',
                userInfo: '山崎さん（仮名・30代男性／高知県）',
                img: 'avator-45.png',
                description:
                  '料金プランのデータ容量が余って、もったいないと思っていたのが理由...',
                href: `/uservoice/45/?l-id=uservoice_${articleNum}_uservoice_45`,
              },
              {
                title:
                  'Z世代のスマホ利用にぴったり！動画や写真共有も楽々で大満足',
                userInfo: '金田さん（仮名・20代女性／東京都）',
                img: 'avator-44.png',
                description:
                  '以前契約していた携帯電話会社のデータ容量が足りなかったことです...',
                href: `/uservoice/44/?l-id=uservoice_${articleNum}_uservoice_44`,
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

export default Uservoice46
