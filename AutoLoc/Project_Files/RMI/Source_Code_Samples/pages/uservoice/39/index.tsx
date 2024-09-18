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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice39: NextPage = () => {
  const pagetitle = '乗り換えでさらに貯まる楽天ポイント'
  const pageHeading =
    '乗り換えで家計が助かった！楽天ポイントはお小遣い代わりに！'
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

  const articleNum = '39'
  const userName = '小松'

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
        description="乗り換えで家計が助かった！楽天経済圏を活用したポイ活でおトクに楽天ポイントが貯まる！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年11月11日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「子どもが生まれたら子育てにかかる費用が増えるから、生活費を前もってしっかり見直そう」と考えているご家庭は多いのではないでしょうか。
                </p>
                <p>
                  一方で、「家計を見直しつつも自分のお小遣いも確保したい」と悩むことも。
                </p>
                <p>
                  そんなとき、携帯電話料金などの固定費の見直しや、普段利用しているサービスを特定の経済圏にまとめて、ポイントを効率的に貯めたりするのは、家計の見直しに有効な方法のひとつです。
                </p>
                <p>
                  今回は楽天モバイルに乗り換え、楽天経済圏※を活用したポイ活でおトクに楽天ポイントを貯めている小松さん（仮名）に、詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※
                  楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。{' '}
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性・埼玉県）"
            periodOfUse="1年2カ月"
            dataUseage="30～40GB程度"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="乗り換えて経済的な負担が軽くなりました"
              subTitle="とにかく安さとデータ使い放題が魅力！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけはなんでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  生活費を見直したところ、スマホ代が夫婦あわせて1万6千円以上と高額になっていたことに気付いたのがきっかけです。2人目の子どもが産まれるので、このままではいけないと、スマホの利用料金を見直そうと考えました。
                </p>
                <p>
                  そんなときに楽天モバイルのテレビCMで、思い切りデータ容量を使っても月々3,278円（税込）と言っているのを見かけたんです。
                </p>
                <p>
                  <TxtMarker as="em">
                    シンプルな料金プランでわかりやすくて良い
                  </TxtMarker>
                  なと思って、楽天モバイルに乗り換えようと決断しました。
                </p>
                <p>
                  私自身が楽天経済圏をかなり利用していることもあって、楽天モバイルを契約したら楽天市場を利用したときの楽天ポイントの倍率が上がる※のも決め手のひとつでしたね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。{' '}
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_39_campaign_spu">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。乗り換えの際に、以前契約されていた携帯電話会社で解約手数料※などはかかりましたか？
                </p>
                <TxtCap as="p">
                  ※総務省の「電気通信事業法の一部を改正する法律の趣旨に沿った公正な競争環境の確保に向けた取組についての要請」を受けて、2022年8月時点、すべての大手携帯電話会社が解約時の手数料と、定期契約のある料金プランを撤廃しています。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私も妻も、それぞれ3千円程度かかったので、あわせて合計6千円ほどかかりました。私はこのほかにもモバイルWi-Fiルーターを契約していたので、そちらの契約解除料は1万円くらいかかっています。
                </p>
                <p>
                  でも、以前契約していた携帯電話会社の1カ月分の利用料金と大差ないので、無料で解約できる月まで待つよりも、今すぐ乗り換えたほうがよりメリットが大きいと判断して解約しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど。家計への効果をトータルで判断して選ばれたのですね。モバイルWi-Fiルーターも利用されていたとのことですが、以前契約されていた携帯電話会社と比べて、データ通信の利用量に変化はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と妻も、かなりデータ容量を使うようになりました。私は毎月30～40GBくらいか、ときどきそれ以上になる月もありますね。妻もスマホで動画を見て楽しんでいるので、毎月40～60GB程度利用しているようです。
                </p>
                <p>
                  そもそも、以前契約していた携帯電話会社では、20GBまで利用できる料金プランだったんですが、データ容量が全然足りなかったんです。
                </p>
                <p>
                  それが理由で、料金プランを5GBまでのものに変更して、別途契約したモバイルWi-Fiルーターを使っていました。データ利用量はあわせて30～40GBくらいだったと思います。
                </p>
                <p>
                  今は以前の携帯電話会社とモバイルWi-Fiルーターも解約して、楽天モバイルだけ使っていますが、データ容量を気にせず使える※ので快適です。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ご自宅ではWi-Fiにつながれているのですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、自宅には光回線を引いていないので、インターネットを使うときはスマホに頼っています。なので、楽天モバイルのデータ高速無制限※の料金プランを利用できて、本当に助かっています。
                </p>
                <p>
                  特にモバイルWi-Fiルーターは、短期間でデータ容量を使いすぎると通信制限がかかってストレスを感じることがあったんですが、楽天モバイルに乗り換えてからは通信制限にかかったことがありません。※
                </p>
                <p>
                  <TxtMarker as="em">
                    データ利用量を気にせず動画を視聴したり、契約している動画配信サービスを増やしたりしています。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天ポイントも増えるのでポイ活が捗ります"
              subTitle="シンプルな料金プランがうれしい！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えてみて、特に魅力を感じる部分はどこでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ高速無制限※とおトクな利用料金はもちろんですが、なによりシンプルなワンプランで料金プランをどれにするか迷わないのが良いですね。
                </p>
                <p>
                  私も妻もあまりスマホの料金プランに詳しくないので、複雑な料金プランだと本当におトクなのか、実際に支払う利用料金がいくらなのか、わからなくなってしまうんです。
                </p>
                <p>
                  それに比べて、
                  <TxtMarker as="em">
                    楽天モバイルは料金プランがひとつでわかりやすいですし、私たち夫婦はいつも20GB以上使うので月々3,278円（税込）と、利用料金がいくらになるか都度確かめる必要がない
                  </TxtMarker>
                  ので、とてもありがたいです。
                </p>
                <p>
                  それと、乗り換えたときにiPhoneを購入したのですが、子どもがスマホを手に取って落としてしまう恐れがあるので、万が一に備えて故障紛失保証
                  with AppleCare Services & iCloud+※に契約しました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※故障紛失保証 with AppleCare Services & iCloud+について、{' '}
                  <LinkNormal href="/service/iphone/applecare-icloud/?l-id=uservoice_39_service_iphone_applecare-icloud">
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  確かに小さなお子さまがいらっしゃると、スマホの故障などの思わぬトラブルが起きてしまう可能性もありますよね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうなんです。特に1人目の子どもは好奇心が旺盛な年頃なので、備えあれば憂いなしということで契約しました。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  先ほど楽天経済圏を利用して、ポイ活もされているということでしたが、楽天モバイルに乗り換えてから楽天ポイントがより貯まりやすくなったと感じますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。普段のSPU7倍に加えて、私はダイヤモンド会員※なので、楽天モバイルを契約したことで+3倍のボーナス※が付いています。乗り換えの狙いどおり、かなり楽天ポイントが貯まりやすくなったと感じます。
                </p>
                <p>
                  さらに、普段の生活費をすべて楽天カードで支払っていて、通勤の合間に楽天スーパーポイントスクリーン※も利用してポイ活をしているので、楽天市場の買い物以外でも楽天ポイントが貯まります。
                </p>
                <p>
                  楽天市場で買い物して貯まる分と合計すると、大体毎月数千ポイントから1万ポイントくらい楽天ポイントをもらっていますね。
                </p>
                <TxtCap as="p">
                  ※楽天ポイントの会員ランクについて、
                  <LinkIconAfter
                    href="https://point.rakuten.co.jp/guidance/rankkeep/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  ご契約中のプラン・会員ランク特典に応じてポイント倍率が異なります。毎月の獲得上限ポイント数は会員ランクに応じて5,000～7,000ポイント、期間限定ポイントでの付与。{' '}
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_39_campaign_spu_2">
                    詳細
                  </LinkNormal>
                  をご確認ください。 ※ポイント未利用時の倍率です。
                  <br />
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
                <p>
                  たくさん楽天ポイントを貯められているのですね。楽天ポイントは主にどんなことに利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルの利用料金を楽天ポイントでまかなったり、楽天市場で個人的な買い物をするときに、自分のお小遣いとして楽天ポイントを使ったりしています。
                </p>
                <p>
                  妻にこの商品を買って良いかと交渉をするときに、「楽天ポイントがいっぱいあるから！」と言えるのは、かなり有効な手段ですね。
                </p>
                <p>
                  ポイ活をしている人なら、
                  <TxtMarker as="em">
                    楽天モバイルの料金プランの安さだけでなく、楽天経済圏を利用してたくさん貯まる楽天ポイントで自分のお小遣いもまかなえるので、便利
                  </TxtMarker>
                  だと思います。
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
              子どもの将来のために生活費を見直したいけれど、自分のお小遣いも確保したいと考えている方にとって、ポイ活でたくさん貯まる楽天ポイントが経済的な助けになるのではないでしょうか。
            </p>
            <p>
              楽天モバイルに乗り換えて、おトクな利用料金で家計が助かっているだけでなく、たくさん貯まる楽天ポイントでやりくりをしている小松さんのように、ぜひ楽天モバイルと楽天経済圏の活用をご検討ください。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年11月11日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '2回線契約で合計160GB！スマホとモバイルWi-Fiで活用しています',
                userInfo: '野村さん（仮名・20代男性／兵庫県）',
                img: 'avator-38.png',
                description:
                  '利用料金の高さや、月々のデータ容量が足りないことに悩んでいたのが...',
                href: '/uservoice/38/?l-id=uservoice_39_uservoice_38',
              },
              {
                title:
                  'SNSの動画を見放題！データ無制限でギガ不足から解放されました',
                userInfo: '矢部さん（仮名・20代女性／神奈川県）',
                img: 'avator-37.png',
                description:
                  '社会人になると同時に、自分で携帯電話料金の支払いをすることになった...',
                href: '/uservoice/37/?l-id=uservoice_39_uservoice_37',
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

export default Uservoice39
