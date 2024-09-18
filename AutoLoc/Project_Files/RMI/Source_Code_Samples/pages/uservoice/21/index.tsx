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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice21: NextPage = () => {
  const pagetitle = '子どもにも持たせたい楽天モバイル'
  const pageHeading =
    '大量のデータ通信も躊躇なし！子どもにも持たせたい楽天モバイル'
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

  const articleNum = '21'
  const userName = '松山'

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
        description="どれだけ使っても月最大2,980円（税込3,278円）で高額請求の心配もない。安心して子どもにスマホを持たせられる（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年5月13日"
            readTime="3"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「データ利用量を気にせず、データ通信を思いっきり楽しみたい」、「ギガを節約しながらスマホを使う生活はストレス」という方は少なくないでしょう。
                </p>
                <p>
                  今回は、楽天モバイルに乗り換えてデータ通信を好きなだけ使えるようになり、生活が大きく変わったという松山さんご夫婦（仮名）に、乗り換えたきっかけや感想を詳しくお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={`${userName}さんご夫婦（仮名）`}
            userNameCustom={true}
            userBasicInfo="（50代男性／女性／東京都）"
            periodOfUse="夫：1年11カ月／妻：1年8カ月"
            dataUseage="夫：40GB以上／妻：20GB以上"
            beforeComapany="夫：UQモバイル／妻：au、LINEモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="データ通信の節約が不要で、仕事や子育てにフル活用！"
              subTitle="CMを見て乗り換えた楽天モバイル"
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
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  2020年6月頃に楽天モバイルのCMを見て、新しく携帯電話会社ができたのを知りました。そのCMで紹介されていたプラン料金1年無料キャンペーン※がきっかけで契約することにしました。
                </p>
                <p>
                  サービス開始直後ということもあり、地方ではつながりにくいなどの評判も聞いたので、満足できない時に解約しやすいように、最初は以前の携帯電話会社の契約を残して、乗り換えではなく新規で契約をしました。
                </p>
                <p>
                  でも実際に1カ月程利用してみたら、
                  <TxtMarker as="em">
                    データ通信は安定していて※安心した
                  </TxtMarker>
                  ので、すぐに以前利用していた携帯電話会社を解約しました。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年無料キャンペーンは終了しています。
                  <br />
                  ※利用環境（建物の中・地下・トンネル等電波の届かないところ）により利用可能なサービスエリアが制限される場合があります。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
                imgNum="-w"
              >
                <p>
                  夫が楽天モバイルを利用し始めて3カ月程経った頃に感想を聞いてみたら、「データ通信は安定していて、特に問題はないよ」というので、私も乗り換えることにしました。私はMNP（携帯電話番号ポータビリティ）※を利用して、以前の携帯電話番号のまま乗り換えました。
                </p>
                <p>
                  先に使い始めた夫が満足していたこともそうですが、私自身がもともと楽天市場をよく利用していて、楽天のサービスにとても良い印象を持っていたので、乗り換えには最初から安心感がありました。
                </p>
                <TxtCap as="p">
                  ※他社から乗り換え（MNP・携帯電話番号ポータビリティ）について
                  <LinkNormal href="/guide/mnp/?l-id=uservoice_21_guide_mnp">
                    詳しくはこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  以前ご利用されていた携帯電話会社と比較して、料金やデータ通信の使い方に変化はありましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  以前は毎月5千円程の支払いで、それ以上にならないようにデータ通信をなるべくしないよう意識的に制限していました。
                </p>
                <p>
                  楽天モバイルに乗り換えて毎月の料金が安くなった上に、データ使い放題※なので、データ通信を気兼ねなくできるようになったのがとてもうれしいですね。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
                imgNum="-w"
              >
                <p>
                  私は以前、毎月の料金を気にして通話用とデータ通信用にそれぞれ契約した携帯電話を2台持ちしていました。通話用が毎月3千円程、データ通信用が500円程だったので、料金にあまり変化はありませんが、データ通信の使い方は大きく変わりました。
                </p>
                <p>
                  できるだけWi-Fiを利用して、なるべくデータ通信を使わないようにしていたんです。
                  <TxtMarker>
                    楽天モバイルに乗り換えてからは、データ利用量を節約するストレスから解放
                  </TxtMarker>
                  されて、自由にデータ通信を楽しめるようになりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  お二人とも乗り換えによって、データ通信の使い方が大きく変わったのですね。
                  <br />
                  ちなみに毎月のデータ利用量はどれくらいですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  タクシー運転手という仕事柄、スマホをカーナビ代わりに利用したり、休憩時間に動画を見たりするので、毎月40GB以上は利用しています。
                </p>
                <p>
                  以前の携帯電話会社では毎月20GBまでしか使えないプランでした。すぐにギガを使い切ってしまうため、動画は見ないようにしていたのですが、楽天モバイルに乗り換えてデータ利用量を節約する必要がなくなり、好きなだけ使えるようになったのでとても快適です。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
                imgNum="-w"
              >
                <p>
                  私は毎月20GB以上は使っています。私だけでなく、5歳と7歳の子どもが楽天モバイルのテザリングを利用してゲーム機をインターネットにつないだり、子ども用タブレットで動画を観たりするので、データ利用量はかなり多いですね。
                </p>
                <p>
                  以前はデータ利用量を気にして、子どもたちが動画を見たがっても、Wi-Fiがある場所でしか見せられなかったんです。それが今は、データ利用量を気にする必要がないので、
                  <TxtMarker as="em">
                    どこでも動画を見せてあげられることでも、乗り換えて本当によかったなと感じます。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  まさにそうで、子どもが動画を見たがるのを我慢させるのも、データ利用量を節約するのも限界があります。
                </p>
                <p>
                  データ容量を気にせず使えるようデータ使い放題のプランを選ぼうとすると、ほかの携帯電話会社だと驚くほど高かったんです。でも、楽天モバイルなら月最大2,980円（税込3,278円）でデータが無制限に使える※ので、とても魅力的です。
                </p>
                <p>
                  いろいろ検討しましたが、
                  <TxtMarker as="em">
                    私たちにとって楽天モバイルを超えるぴったりなサービスは見つかりませんでした。
                  </TxtMarker>
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <div ref={scrollTrigger} />
              <Interviewer>
                <p>お二人のご契約はWebと店舗、どちらでされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  私はWebから申し込みしました。手続きは簡単で、本人確認はSIMカード受け取り時に自宅で確認する方法※を選んだので、本人確認書類をアップロードする手間もなく、とても楽でした。
                </p>
                <TxtCap as="p">
                  ※ご自宅での本人確認について、詳しくは
                  <LinkNormal href="/guide/verify/home-kyc/?l-id=uservoice_21_guide_verify-home-kyc">
                    受け取り時に自宅で確認とは
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
                imgNum="-w"
              >
                <p>
                  私は近くの大型商業施設にある楽天モバイルの店舗で契約しました。乗り換えと同時にスマホを買い換えてRakuten
                  Mini※を購入したのですが、店舗でeSIM※の設定をサポートしてもらえてとても助かりました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルでのRakuten Miniの販売は終了いたしました。
                  <br />
                  ※eSIMはスマホ内のICチップにSIMの情報を書き込むことで、SIMカードを挿入しなくても携帯電話回線に接続できるSIMタイプです。ご利用には、楽天モバイル対応のeSIM対応製品が必要です。詳しくは
                  <LinkNormal href="/product/sim/esim/?l-id=uservoice_21_product_sim_esim">
                    eSIMとは
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
            </Interview>

            <Interview
              title="子どもの最初のスマホも楽天モバイルにする予定"
              subTitle="都内全域で安定してつながることを実感"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルをご利用いただいて2年近く経ちますが、データ通信の安定性はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  自宅でも安定していますし、タクシー運転手として東京都内23区を中心にさまざまな場所を運転していても、つながりにくさを感じる場所はほとんどありません。
                </p>
                <p>
                  仕事でたまに都外に出ることがありますが、契約当初は途切れると感じていた場所も、今はデータ通信が安定している※ので、
                  <TxtMarker as="em">
                    サービスエリアが広がっていることを実感
                  </TxtMarker>
                  します。
                </p>
                <TxtCap as="p">
                  ※実際のデータ速度は、環境等により異なります。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイルにして良かったなと感じることはありますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（妻）`}
                imgNum="-w"
              >
                <p>
                  夫の携帯電話料金がかなり安くなり、固定費の見直しができたことです。
                  <br />
                  夫も私もなるべく節約しながら使っていましたが、自宅の光回線と合算すると、通信費に1万円かかる月もありました。その時と比較すると、楽天モバイルに乗り換えたことで、ずいぶん家計の負担が軽くなったと感じます。
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  自宅でも楽天モバイルのテザリングで事足りているので、光回線はそのうち解約しようかなと考えています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうなのですね、光回線の費用が浮くとさらに固定費が抑えられそうですね！
                </p>
                <p>
                  最後に、楽天モバイルのオプションサービスで今後利用したいと思うものはありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん（夫）`}
                imgNum="-m"
              >
                <p>
                  「あんしんコントロール by
                  i-フィルター※」が気になっています。いずれ子どもにもスマホを持たせるつもりですが、初めてのスマホは楽天モバイルで契約しようと決めています。
                  <br />
                  親としては安全に初めてのスマホを楽しんでもらいたいので、こういったオプションサービスで環境を整えてあげることも大切だと思います。
                </p>
                <p>
                  加えて子どもたちはよく動画を見るので、データ利用量がつい多くなってしまうこともあると思います。楽天モバイルのようにどれだけ使っても月最大2,980円（税込3,278円）と上限金額が決まっている料金プランだと、
                  <TxtMarker as="em">
                    高額請求の心配もなく、安心して子どもにスマホを持たせられる
                  </TxtMarker>
                  のでうれしいです。
                </p>
                <TxtCap as="p">
                  ※お子さまに不適切なアプリを自動的に選別してフィルタリングが可能です。年齢にあったフィルタリングを、カテゴリを選択するだけで細やかに設定できます。18歳未満の方に楽天モバイルをご利用いただく場合、あんしんコントロール
                  by i-フィルターのご契約が必須となります。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <ButtonRegular
                  as="a"
                  href={`/service/i-filter/?l-id=uservoice_${articleNum}_service_i-filter`}
                >
                  あんしんコントロール by i-フィルターの詳細を見る
                </ButtonRegular>
              </div>
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
              松山さんご夫婦のようにデータ通信を思いっきり使ってスマホを楽しみたい方や、お子さんに安心してスマホを持たせたい方は、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年5月13日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <KidsKeitaiBnr
            className={Utils['Mt-32']}
            directory={articleNum}
            lazy={true}
          />

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
                  'データ利用量で料金が決まる！使う月も使わない月も無駄なく快適',
                userInfo: '重森さん（仮名・20代女性／東京都）',
                img: 'avator-20.png',
                description: '以前利用していた携帯電話会社の料金...',
                href: `/uservoice/20/?l-id=uservoice_${articleNum}_uservoice_20`,
              },
              {
                title:
                  '分かりやすい料金プランが家族に好評！最新iPhoneもおトクに購入',
                userInfo: '村岡さん（仮名・30代男性／愛知都）',
                img: 'avator-19.png',
                description: '料金プランの安さが一番大きな...',
                href: `/uservoice/19/?l-id=uservoice_${articleNum}_uservoice_19`,
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

export default Uservoice21
