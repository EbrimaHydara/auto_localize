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
import { FreeCallBnr } from '@components/include/uservoice/FreeCallBnr'
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice29: NextPage = () => {
  const pagetitle = 'かけ放題オプションが便利'
  const pageHeading =
    'かけ放題オプションが就活に便利！学生にオススメの料金プラン'
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

  const articleNum = '29'
  const userName = '原田'

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
        description="かけ放題オプションのおかげで頻繫に電話しても通話料金を気にしなくて良い（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年7月8日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「短い通話でも積み重ねで通話料金がかさむ」と、通話料金を気にされる方は多いのではないでしょうか。数分程度の通話も、頻繁に使えば月々の携帯電話料金が高くなってしまいます。
                </p>
                <p>
                  今回は、乗り換えと同時に楽天モバイルのオプションサービス「15分（標準）通話かけ放題」を契約して、毎月の通話料金もプラン料金もおトクになった原田さん（仮名）に詳しくお話を聞きました。
                </p>
                <TxtCap as="p">
                  ※かけ放題オプションは、税込1,100円／月でOS標準電話アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスです。一部対象外番号あり。SMSは一日の送信上限あり。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性・東京都）"
            periodOfUse="10カ月"
            dataUseage="20～30GB"
            beforeComapany="Y!mobile"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="学生にうれしい料金プラン"
              subTitle="コストパフォーマンス抜群！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えようと思ったきっかけや、楽天モバイルを選んだ理由を教えてください。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社での、データ増量オプション無料キャンペーンの適用期間が終了したこともあり、もっと月額料金が安い携帯電話会社に乗り換えたいと思ったのがきっかけです。
                </p>
                <p>
                  当時は、高速データ容量が月9GBまで使える料金プランにデータ増量オプションを付けた毎月12GB程使える契約でした。それでもデータ容量が不足してギガを追加する月もあり、携帯電話料金に毎月5～6千円程かかることにコスパが良くないと感じていたので、楽天モバイルへの乗り換えを決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えの手続きはWebサイトと店舗、どちらでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  店舗です。事前に口コミで調べたメリットやデメリットについて、スタッフさんにも話を聞いてから契約しました。
                  <TxtMarker as="em">
                    何かわからないことがあっても、その場ですぐに確認できたので安心しました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、スマホの使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、ずいぶん変わりました。通学時や暇な時間にYouTubeやNetflixの動画を観ているので、今では毎月20～30GB程使っています。
                </p>
                <p>
                  通学に片道30分程かかるので、往復する時間でよく映画を楽しんでいます。ほかにも、移動中にオンライン授業を受講することも増えました。
                </p>
                <p>
                  <TxtMarker as="em">
                    楽天モバイルのデータ使い放題※のおかげで、データ容量の上限を気にせず使えるようになったのがありがたいです。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="「15分（標準）通話かけ放題」が就職活動で大活躍！"
              subTitle="頻繁な通話も安心"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えた際に、何かオプションサービスは加入されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  10分（標準）通話かけ放題※オプションに加入しました。就職活動で折り返しの電話をかけたり、電話でレストランの予約をするなど、短時間の通話が多いんです。
                </p>
                <p>
                  楽天モバイルの良いところは、データ利用量に合わせて自動的に最適な料金になる分かりやすい料金プランと、月最大2,980円（税込3,278円）でデータが無制限※に使えるところだと思っています。
                  <br />
                  通話料金も定額にすれば負担が軽くなるだろうと思い、かけ放題オプションを付けることにしました。
                </p>
                <TxtCap as="p">
                  ※10分（標準）通話かけ放題は、2022年7月1日に料金そのままで「15分（標準）通話かけ放題」へ自動移行されました。
                  <br />
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>

              <FreeCallBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                lazy={true}
              />

              <Interviewer>
                <p>毎月どれくらい通話されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  月によって異なるので正確には分からないですが、通話料金が30秒で22円と考えると、少なくとも毎月のオプション料金1,100円を超えるくらい通話しているのは間違いありません。
                </p>
                <p>
                  僕の場合、友人との通話はLINEなどのアプリで問題ないですが、やはり就活活動の問い合わせや折り返しの電話は、スマホに標準搭載されている電話機能でないと不便です。
                  <br />
                  ほんの数分でも頻繁にすればあっという間に通話料金が大きな金額になってしまいますが、
                  <TxtMarker as="em">
                    かけ放題オプションのおかげで通話料金を気にしなくて良いので助かっています。
                  </TxtMarker>
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="楽天モバイル買い替え超トクプログラムで買い替えを検討します！"
              subTitle="いつも使うスマホだからこそ最新のものを選びたい"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>乗り換えのタイミングでスマホの買い替えもされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、スマホの買い替えはしていません。日常使いのスマホを買い替えるときはいつも最新型を選んでいることもあり、乗り換え当時もまだ良いかなと思っていました。
                </p>
                <p>
                  現在はiPhone 12
                  Proを利用しているのですが、比較的早いサイクルで新しいiPhoneが出ていますし、乗り換えてしばらく経った今こそ買い替え時どきかなと考えています。
                  <br />
                  今までは不要になったiPhoneをApple
                  Storeで下取りしてもらって新しいiPhoneを購入していました。
                </p>
                <p>
                  楽天モバイルは、
                  <TxtMarker as="em">
                    <LinkNormal href="/service/tradein/?l-id=uservoice_29_service_tradein">
                      下取りサービス
                    </LinkNormal>
                    や
                    <LinkNormal href="/service/replacement-program/?l-id=uservoice_29_service_replacement-program_01">
                      楽天モバイル買い替え超トクプログラム
                    </LinkNormal>
                    ※があると聞いたので、次に買い替えるときは楽天モバイルでの購入も検討
                  </TxtMarker>
                  します。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_29_service_replacement-program_02">
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000円（不課税）のお支払いが必要となる、または返却不可となる場合があり。機種変更が可能な製品は、本プログラム対象製品に限る。
                </TxtCap>
              </Interviewee>

              <IphoneUpgradeBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                serialNumber="03"
                lazy={true}
              />

              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、良かったなと感じる部分はどこにありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  やはりなんといっても料金プランの安さですね。楽天モバイルを契約したことで、
                  <TxtMarker as="em">
                    楽天市場での普段の買い物もさらに効率良くポイントを貯められる※ようになったこと含めて、コスパが良いサービス
                  </TxtMarker>
                  だと感じますし、これからも応援しています。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限あり。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
            </Interview>
            <Interviewer>
              <p>本日は貴重なお話をお聞かせいただきありがとうございました。</p>
            </Interviewer>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              15分（標準）通話かけ放題は、OS標準の電話アプリをよく利用される方にぴったりのサービスです。
            </p>
            <p>
              通話料金を含む毎月の携帯電話料金を抑えたい方は、原田さんのようにオプションサービスも充実する楽天モバイルに乗り換えを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年7月8日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'データ無制限でテザリングをフル活用！料金の安さにも大満足！',
                userInfo: '鳥光さん（仮名・20代男性／大阪府）',
                img: 'avator-28.png',
                description: '料金プランの安さと、テザリングのオプ...',
                href: '/uservoice/28/?l-id=uservoice_29_uservoice_28',
              },
              {
                title:
                  'データ通信を思い切り利用！スマホで動画をとことん楽しんでます',
                userInfo: '中山さん（仮名・40代女性／東京都）',
                img: 'avator-27.png',
                description: '以前契約していた携帯電話会社に満足で...',
                href: '/uservoice/27/?l-id=uservoice_29_uservoice_27',
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

export default Uservoice29
