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

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice28: NextPage = () => {
  const pagetitle = 'データ無制限でテザリングを活用'
  const pageHeading =
    'データ無制限でテザリングをフル活用！料金の安さにも大満足！'
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

  const articleNum = '28'
  const userName = '鳥光'

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
        description="光回線なしでも楽天モバイルのテザリングでパソコンもタブレットも快適にインターネットに繋げられる（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年7月1日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「引っ越しの度に光回線を撤去したり、開通工事するのはお金も時間ももったいない」「パソコンやタブレットも、全部まとめてテザリングでインターネットにつなぎたい」とお考えの方もいるのではないでしょうか。
                </p>
                <p>
                  今回は急な引っ越しの際、楽天モバイルのテザリングを利用することで、新たに光回線を契約することなく、引越した当日からパソコンでも快適なネットサーフィンができたという鳥光さん（仮名）に、当時のご利用状況や楽天モバイルを選んだ経緯について、詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性・大阪府）"
            periodOfUse="1年6カ月"
            dataUseage="3GB以下（現在）、50GB以上（2021年12月頃まで）"
            beforeComapany="UQモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ使い放題の楽天モバイルで、パソコンとタブレットもテザリングで利用"
              subTitle="インターネット環境を最小限にまとめたい！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えようと思った理由を教えてください。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  料金プランの安さと、テザリングのオプションが無料※で使えることです。
                </p>
                <p>
                  少し前まで一人暮らしをしていたのですが、光回線やスマホなど、契約が増えると管理が煩雑になるので、インターネット周りは最小限にまとめたかったんです。
                </p>
                <p>
                  そこで、光回線なしでもスマホのテザリングでノートパソコンやタブレットなどを不自由なく使えるように、スマホの契約はデータ使い放題※の料金プランにしようと考え、楽天モバイルを選びました。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                  <br />
                  ※楽天モバイルではテザリングのオプションを無料でご利用いただけます。
                  <LinkNormal
                    href={`/service/tethering/?l-id=uservoice_${articleNum}_service_tethering`}
                  >
                    詳しくはこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>ほかの携帯電話会社と比較検討はされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。楽天モバイルを利用している知り合いに話を聞いたり、インターネット上の口コミを見て検討しました。
                  <br />
                  <TxtMarker as="em">
                    データ使い放題※とテザリングを無料で使えることが条件だったのですが、一番ぴったりなのが楽天モバイル
                  </TxtMarker>
                  でしたね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。毎月のデータ利用量はどれくらいですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  一人暮らしでテザリング利用が多かった時期は、毎月50GB以上使っていました。ノートパソコンやタブレットで動画を観たり、Zoomでオンライン会議もよくしていたので、データ利用量は結構多かったですね。
                </p>
                <p>
                  <TxtMarker as="em">
                    動画はサクサク再生されるし、オンライン会議で音声や映像が遅延することもなかったので、データ通信の品質はとても高い
                  </TxtMarker>
                  と思います。
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えのタイミングでスマホの買い替えもされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  乗り換えた当時はまだ楽天モバイルでiPhoneの取り扱いがなかった※ので、Apple
                  StoreでiPhone SE（第2世代）を購入してから乗り換えました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルでは2021年4月30日からiPhoneの取り扱いを開始しています。楽天モバイルで販売中のiPhoneは
                  <LinkNormal href="/product/iphone/?l-id=uservoice_28_product_iphone">
                    iPhone一覧
                  </LinkNormal>
                  でご確認いただけます。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  iPhoneがお好きなんですね。ところで、楽天モバイルが大手携帯電話会社の中で最も安くiPhoneを購入できることはご存知でしたか？※
                </p>
                <TxtCap as="p">
                  ※2022年5月23日時点。NTTドコモ、au、ソフトバンクとのiPhone本体代金の比較。
                  <LinkNormal
                    href={`/product/iphone/fee/?l-id=uservoice_${articleNum}_product_iphone_fee`}
                  >
                    詳しくはこちら
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
                  そうだったんですね、知らなかったです！次の買い替えのときは楽天モバイルでの購入を検討します！
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="使い方が変わっても料金プランの見直しをしなくて良いのが便利"
              subTitle="コスパも利便性も抜群！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  以前は一人暮らしをされていたとのことですが、ライフスタイルが変わられたことで、スマホの使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、変わりましたね。2021年12月頃に実家に引っ越しました。実家には光回線が引かれているので、今はほとんどテザリングを使っていません。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、お引っ越しでスマホの使い方もデータ利用量も大きく変わったのですね。
                  <br />
                  そのタイミングでほかの携帯電話会社への乗り換えは検討されましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、楽天モバイルから乗り換えたいとは考えていなかったですね。データ通信を50GB以上使っていたときも、ほとんど使わなくなった今も、毎月のデータ利用量に応じて最適な料金になるので、とても安く使えて満足しています。
                </p>
                <p>
                  <TxtMarker as="em">
                    ライフスタイルが大きく変わっても、料金プランの見直しや乗り換えを考えなくて良い
                  </TxtMarker>
                  のが助かります。楽天モバイルならではのメリットだと思いますね。
                </p>
              </Interviewee>

              <Interviewer>
                <p>
                  以前の携帯電話会社と比較して、楽天モバイルの料金プランや使い心地はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた格安スマホは、低速のデータ通信は使い放題でしたが、高速データ通信は数ギガしか使えないという、安いけれど使いにくさを感じるものでした。
                </p>
                <p>
                  その点、楽天モバイルは使ったデータ量に応じて料金が決まるので、あまり使わない月は安く抑えられるし、どれだけ使っても月最大2,980円（税込3,278円）なのでコスパが良いと感じてます！
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="貯まった楽天ポイントを利用して毎月の携帯電話料金がさらにおトク"
              subTitle="普段のお買い物の支払いに楽天カードと楽天ペイを利用"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイル以外に楽天グループのサービスをご利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天銀行と楽天証券、楽天カード、楽天ペイを利用しています。特に楽天カードや楽天ペイは、普段の買い物の支払いに使っているので楽天ポイントがたくさん貯まります。
                </p>
                <p>
                  貯まったポイントは毎月の携帯電話料金の支払いにも使えるので、とても重宝しています。そういったところも含めて、
                  <TxtMarker as="em">
                    楽天モバイルはコスパがとても高く、乗り換えて良かった
                  </TxtMarker>
                  なと感じています。
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
            ratId={`uservoice_${articleNum}_scroll-04_close`}
            className={Utils['Mt-32']}
          >
            <p>
              急な引っ越しなどでライフスタイルが変わっても、データ利用量に応じて最適な料金になる楽天モバイルなら、料金プランを見直す必要がありません。
            </p>
            <p>
              スマホだけでなく最適なインターネット環境の整え方でお悩みの場合も、テザリングでパソコンやタブレットをインターネットにつなぎ、動画視聴やオンライン会議を快適に行われていた鳥光さんのように、楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2022年7月1日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'データ通信を思い切り利用！スマホで動画をとことん楽しんでます',
                userInfo: '中山さん（仮名・40代女性／東京都）',
                img: 'avator-27.png',
                description: '以前契約していた携帯電話会社に満足で...',
                href: '/uservoice/27/?l-id=uservoice_28_uservoice_27',
              },
              {
                title:
                  'おトクな料金が魅力！子どものスマホデビューにもぴったりでした',
                userInfo: '井口さん（仮名・40代男性／兵庫県）',
                img: 'avator-26.png',
                description: '料金プランの安さです。大手携帯電話会...',
                href: '/uservoice/26/?l-id=uservoice_28_uservoice_26',
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

export default Uservoice28
