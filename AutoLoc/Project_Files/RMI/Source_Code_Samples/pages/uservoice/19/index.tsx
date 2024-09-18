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
import { ButtonRegular } from '@components/atoms/Buttons'
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice19: NextPage = () => {
  const pagetitle = '料金プランに満足！最新iPhoneもおトクに'
  const pageHeading =
    '分かりやすい料金プランが家族に好評！最新iPhoneもおトクに購入'
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

  const articleNum = '19'
  const userName = '村岡'

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
        description="楽天モバイルなら同じ料金プランでも使ったデータ量に応じて自動的に料金が変わるので、無駄がなくて良い（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年4月27日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「スマホに不慣れな家族のサポートもしやすいから、家族で同じ携帯電話会社を利用したい」とお考えの方もいるのではないでしょうか。
                  <br />
                  そんな時、それぞれ必要なデータ容量が違うため、各社のさまざまなプランの中から「個々に合うものを探す」ことが億劫になってしまうかもしれません。
                </p>
                <p>
                  今回は、スマホの使い方もデータ利用量も異なる家族全員が、使ったデータ量に応じて毎月の金額が決まる楽天モバイルのシンプルなワンプランで快適に過ごされているという村岡さん（仮名）に詳しいお話を聞きました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（30代男性／愛知県）"
            periodOfUse="5カ月"
            dataUseage="15～20GB未満"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="スマホの使い方が違う家族も、シンプルなワンプランに全員納得"
              subTitle="両親も一緒に乗り換え！"
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
                  料金プランの安さが一番大きな理由です。以前の携帯電話会社では毎月5千円程支払っていたのですが、契約更新のタイミングでスマホにかかる費用を見直そうと思ったのがきっかけです。
                </p>
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
                  はい、いつも両親は私と同じ携帯電話会社で契約しているので、両親の分も一緒に検討しました。
                </p>
                <p>
                  私は毎月約20GB程データ通信を使うのですが、60代の両親は私と比べるとあまり利用しません。
                  <br />
                  データ利用量が違う家族全員が納得できる料金プランを探したところ、
                  <TxtMarker as="em">
                    楽天モバイルなら同じ料金プランでも使ったデータ量に応じて自動的に料金が変わるので、無駄がなくて良い
                  </TxtMarker>
                  のではと乗り換えを決めました。
                </p>
                <p>私が先に乗り換え、1カ月程経ってから両親が乗り換えました。</p>
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
                  はい。私はiPhone 13 miniを購入し、両親は共にiPhone
                  13を購入しました。
                </p>
                <p>
                  iPhoneを購入できることも楽天モバイルを選んだ理由の一つです。私も両親もずっとiPhoneを使い続けているので、携帯電話会社を選ぶ上でiPhoneの取り扱いは大きな要素でした。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったんですね。ご契約とiPhoneのご購入はWebでされたのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、店舗です。最初、家電量販店で携帯電話会社やスマホの買い替えについて相談したところ、
                  <TxtMarker as="em">
                    iPhoneは楽天モバイルで購入すると一番安価
                  </TxtMarker>
                  ※だと教えてもらったんです。そこで近くの楽天モバイルの店舗で乗り換えと一緒にiPhoneを購入しました。
                </p>
                <p>
                  いつも2年ごとにiPhoneを買い替えているので、楽天モバイル買い替え超トクプログラム※の利用でiPhoneをおトクに入手できたのはうれしいですね。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_19_service_replacement-program_01">
                    詳細はこちら
                  </LinkNormal>
                  <br />
                  ※楽天カードによる支払いが必要。返却に際しては事務手数料3,300円がかかる。ご返却の製品が当社指定の状態基準を満たさない場合、故障費用22,000円（不課税）のお支払いが必要となる、または返却不可となる場合があり。機種変更が可能な製品は、本プログラム対象製品に限る。
                </TxtCap>
              </Interviewee>

              <IphoneUpgradeBnr
                className={Utils['Mt-32']}
                directory={articleNum}
                serialNumber="02"
                lazy={true}
              />

              <div ref={scrollTrigger} />
              <Interviewer>
                <p>店舗での契約を選ばれた理由は何かありますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  対面でスタッフさんに相談しながら契約できるところが良いと思い、店舗での契約を選びました。スマホの初期設定を手伝ってもらったり、手厚いサービスで安心して乗り換えできました。
                </p>
                <p>
                  両親も私が乗り換えてから1カ月後に店舗で契約をしたのですが、来店予約枠が結構埋まっていたので、楽天モバイルは今人気があるのだなと感じました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。不明な点をその場ですぐに解決できるのも店舗のメリットですね。
                </p>
              </Interviewer>
              <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                <ButtonRegular as="a" href="/shop/?l-id=uservoice_19_shop">
                  お近くのショップを探す
                </ButtonRegular>
              </div>
            </Interview>

            <Interview
              title="データ通信も安定していて、つながりやすい"
              subTitle="乗り換え前の不安はすぐになくなった！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルを利用する前に不安に感じていたことや、気になることはありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  正直にいうと、新しい携帯電話会社なので、以前利用していた携帯電話会社と比べるとデータ通信の品質がかなり下がるのではないかという懸念はありました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>実際に利用してみていかがでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても快適です。
                  <TxtMarker as="em">
                    データ通信に問題はなく満足している
                  </TxtMarker>
                  ので、使い始めて少し経った頃に両親に乗り換えをすすめました。
                </p>
              </Interviewee>
            </Interview>

            <Interview
              title="気付いたら楽天ポイントがたくさん貯まっていて驚きます"
              subTitle="楽天市場と楽天ペイをよく使うように！"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、今までの生活と変わったと感じる部分はありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天市場の利用が増えましたね。楽天モバイルの契約で楽天市場でのお買い物ポイントが+1倍※になったので、ほかのネット通販より楽天市場で購入するようになりました。仕事用の備品を購入することも多く、気が付いたら楽天ポイントがたくさん貯まっています。
                </p>
                <p>
                  両親もたまにネット通販を利用するので、ポイントが付くから楽天市場を利用した方が良いよとすすめたり、街中で買い物をする時は楽天ペイ※を使うようにするとおトクだよという話をします。
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
                  ※楽天ペイはQRコードを利用したスマホ決済や、オンライン決済が可能なアプリです。
                  <LinkIconAfter
                    href="https://pay.rakuten.co.jp/"
                    target="_blank"
                  >
                    詳しくはこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>村岡さんも楽天ペイをよく利用されますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  かなり利用しています。コンビニでの支払いなどに利用することが多いですね。貯まったポイントは、楽天ペイで支払う時に利用しています。
                  <br />
                  <TxtMarker as="em">
                    楽天モバイルを契約してから、楽天経済圏※の利用が増えました。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※楽天経済圏とは、生活のさまざまなシーンで楽天グループのサービスを活用することで、楽天ポイントを効率的に貯めたり、運用したりできるサイクルのことです。
                  <LinkIconAfter
                    href="https://event.rakuten.co.jp/family/story/article/2021/rakuten-economic-area/"
                    target="_blank"
                  >
                    詳しくはこちら
                    <IconNewTabLine />
                  </LinkIconAfter>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天経済圏の利用で何かメリットを感じることはありますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  最初はあまり意識していなかったのですが、思っていたよりもポイントが付きますね。
                  <br />
                  <TxtMarker as="em">
                    楽天モバイルに乗り換えたことで携帯電話料金だけでなく、毎日の生活全体がおトクになった
                  </TxtMarker>
                  と感じます。
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
              ライフスタイルやスマホの使い方が違うご家族でも、使ったデータ量で毎月の料金が決まる楽天モバイルのシンプルなワンプランなら、それぞれに合った料金プランを探す手間もなくスムーズに乗り換えいただけ安心です。
            </p>
            <p>
              「家族全員にぴったりの料金プランにしたい」と思ったら楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年4月27日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

          <TxtCap as="p" className={Utils['Mt-16']}>
            ※商標・登録商標について
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/trademark/"
              target="_blank"
            >
              詳しくはこちら
              <IconNewTabLine />
            </LinkIconAfter>
          </TxtCap>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '家のWi-Fiよりも速い！固定費の見直しで貯金もできて大満足',
                userInfo: '下村さん（仮名・20代女性／東京都）',
                img: 'avator-18.png',
                description: '仕事がリモート中心になり外出の機会が...',
                href: `/uservoice/18/?l-id=uservoice_${articleNum}_uservoice_18`,
              },
              {
                title:
                  '家族全員で楽天モバイルに乗り換え！家族割よりもおトクです',
                userInfo: '田丸さん親子（仮名・40代／10代男性／東京都）',
                img: 'avator-17.png',
                description: '以前ガラケーをスマホに変更したら、デ...',
                href: `/uservoice/17/?l-id=uservoice_${articleNum}_uservoice_17`,
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

export default Uservoice19
