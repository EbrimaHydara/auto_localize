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

const Uservoice35: NextPage = () => {
  const pagetitle = 'ポイ活のために乗り換え'
  const pageHeading = '乗り換えでポイ活がより効率的に！スマホ代も大幅節約'
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

  const articleNum = '35'
  const userName = '川原'

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
        description="楽天モバイルに乗り換えた決め手はポイ活！楽天経済圏の利用で楽天ポイントがおトクに貯まる！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年10月7日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  普段のお買い物でおトクにポイントを貯めているという人は多いのではないでしょうか。
                </p>
                <p>
                  ただ、「普段のお買い物や毎月の支払いで、もっと効率良くポイントを獲得したい」と思いつつ、ポイントをたくさん貯めるにはどのサービスが良いのか迷ってしまうことも。
                </p>
                <p>
                  今回は、楽天モバイルを含めた楽天経済圏※を利用して、普段から夫婦で効率的にポイ活をしている川原さん（仮名）に、詳しくお話をお聞きしました。
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
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性・兵庫県）"
            periodOfUse="1年6カ月"
            dataUseage="3GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="楽天経済圏利用でおトクに楽天ポイントが貯まる！"
              subTitle="乗り換えた決め手はポイ活"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルを選んだ理由や、乗り換えを考えたきっかけはなんでしたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社を20年以上利用していたんですが、夫から「楽天モバイルにしてみようか」と提案があったのがきっかけです。
                </p>
                <p>
                  自宅に光回線がなく、インターネットの利用はスマホだけということもあって、データ容量が大きい料金プランを契約していました。夫婦2人で月々18,000円くらいかかっていて、利用料金が高いのがずっと気になっていたんです。
                </p>
                <p>
                  携帯電話会社を乗り換えようか検討していたときに、夫から楽天モバイルのことを聞いて、契約に踏み切りました。自宅の光回線も一緒に契約しようと思っていたので、楽天ひかりも同時に契約しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えたときに、解約金などはかかりましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前の携帯電話会社で契約していた料金プランに縛りがあったので、かなり高額な解約金がかかりました。※
                </p>
                <p>
                  「解約金は高いけど、
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えて安くなった差分ですぐに取り返せる！
                  </TxtMarker>
                  」と思って解約しました。
                </p>
                <p>
                  乗り換えた今は光回線を引いたこともあって、私はスマホをほぼ自宅でしか使わないので月額1,078円（税込）、夫も毎月20GBいかないくらいなので、月額2,178円（税込）、2人合わせて月々3,000円くらいになりました。
                </p>
                <TxtCap as="p">
                  ※総務省の「電気通信事業法の一部を改正する法律の趣旨に沿った公正な競争環境の確保に向けた取組についての要請」を受けて、2022年8月現在、すべての大手携帯電話会社が解約時の手数料と、定期契約のある料金プランを撤廃しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  それは劇的に変わりましたね。楽天モバイルを契約する前に、ほかの携帯電話会社と比較検討はされましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  乗り換える前から楽天経済圏でポイ活をしていたので、乗り換え先は楽天モバイルひとつに絞っていました。
                </p>
                <p>
                  普段から楽天カード、楽天銀行、楽天証券、楽天トラベルなどを利用していて楽天ポイントを貯めていたので、
                  <TxtMarker as="em">
                    楽天モバイルと楽天ひかりを契約してSPU※のポイント倍率が上がるのが魅力的
                  </TxtMarker>
                  だったんです。
                </p>
                <TxtCap as="p">
                  ※SPU（スーパーポイントアッププログラム）の
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。 <br />
                  ※獲得ポイントに条件・上限あり。詳しくは
                  <LinkNormal href="/campaign/spu/?l-id=uservoice_35_campaign_spu">
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  いろんなサービスを利用されているのですね。現在のSPUは何倍でしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  SPUは私が8倍、夫は楽天ひかりの契約をしているので9倍です。2人とも楽天会員ランクはダイヤモンド会員なので、楽天モバイルのキャンペーンでさらにポイント増加のボーナスが付いています。※
                </p>
                <p>
                  毎月0と5の日にエントリー※してお買い物すればさらに倍率が増えますし、お買い物マラソン※や、スーパーDEAL※も利用して、子どものおむつや、荷物がかさばるものを楽天市場で買っています。
                </p>
                <p>
                  毎月3,000～4,000ポイントくらいもらえる楽天ポイントは、楽天市場でのお買い物で使ったり、楽天ペイ※で支払うときに使ったりしています。
                </p>
                <TxtCap as="p">
                  ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※キャンペーンにエントリーし、0と5がつく日に楽天カードで楽天市場でのお買い物を決済いただくと、SPUが＋2倍になります。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/everyday/point/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※対象期間中にエントリーすることで、期間中に楽天市場で1,000円（税込）以上の買い物をするとポイント倍率が最大10倍になります。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/campaign/point-up/marathon/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br />
                  ※スーパーDEALとは対象商品の購入金額の一部をポイントで還元するサービスです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/superdeal/guide/"
                    target="_blank"
                  >
                    詳細はこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。<br /> ※
                  <LinkIconAfter
                    href="https://pay.rakuten.co.jp/"
                    target="_blank"
                  >
                    楽天ペイ
                    <IconNewTabLine />
                  </LinkIconAfter>
                  ：QRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="子どもの銀行口座を開設できました"
              subTitle="楽メールもさっそく利用！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルを始めとして、楽天グループのいろいろなサービスをご利用になっていますが、楽天モバイルで楽メール※というキャリアメールのサービスが利用できるようになったことはご存じですか。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル公式メールサービスです。楽天モバイルのドメイン（@rakumail.jp）でメールアドレスを設定いただくことで、メールサービスがご利用いただけます。
                  <LinkNormal href="/service/rakumail/?l-id=uservoice_35_service_rakumail">
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
                  はい、楽メールがサービス開始してすぐにメールアドレスを取得しました。
                </p>
                <p>
                  以前から子どもの銀行口座を開設したかったのですが、フリーのメールアドレスだと受け付けてもらえない銀行だったので、開設できなくて困っていたんです。でも
                  <TxtMarker as="em">
                    楽メールのサービスが開始したおかげで無事口座を作れました
                  </TxtMarker>
                  。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽メールのアカウントはすぐ作れましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても簡単でした。私はあまりスマホの操作に自信がないんですが、手順がわかりやすくて、希望のメールアドレスもすんなり取得できました。ドメインもシンプルで覚えやすいので、人に伝えるときも便利ですね。
                </p>
                <p>
                  銀行口座の開設など、なにかとキャリアメールが必要なことがあるので、これからも活用していきたいと思います。
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
              川原さんご夫婦のように、楽天経済圏でポイ活をしている方にとって、SPUの倍率が高くなる楽天モバイルはとても便利です。
            </p>
            <p>
              楽天市場のダイヤモンド会員なら、通常の1倍に加えて、さらに＋2倍のボーナスが付与されるので、よりたくさんの楽天ポイントが獲得できます。※
            </p>
            <p>
              毎日のお買い物で楽天ポイントをより効率的に貯めたい方は、ぜひ楽天モバイルに乗り換えて、楽天経済圏をご活用ください。
            </p>
            <TxtCap as="p">
              ※2022年11月1日の条件変更により、SPUの倍率が「楽天モバイル＋会員ランク特典で最大＋3倍」になりました。
              <LinkNormal href="/campaign/spu/?l-id=uservoice_35_campaign_spu">
                詳しくはこちら
              </LinkNormal>
              。
              <br />
              ※当ページの内容は2022年10月7日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'おトクに買えたiPhoneで、大人のスマホデビューをしました！',
                userInfo: '尾形さん（仮名・50代女性／神奈川県）',
                img: 'avator-34.png',
                description:
                  'ずっとガラケーを使っていたのですが、そろそろスマホ...',
                href: '/uservoice/34/?l-id=uservoice_35_uservoice_34',
              },
              {
                title:
                  '月々のデータ利用量が少なくても、乗り換えでおトクになった！',
                userInfo: '山田さん（仮名・50代女性／神奈川県）',
                img: 'avator-33.png',
                description:
                  '以前契約していた携帯電話会社の利用料金が高くて...',
                href: '/uservoice/33/?l-id=uservoice_35_uservoice_33',
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

export default Uservoice35
