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
import { TxtCap, TxtMarker, TxtSize } from '@components/atoms/Txt'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { ReadMoreInterviews } from '@components/include/uservoice/ReadMoreInterviews'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CtaBottomFixed } from '@components/include/uservoice/CtaBottomFixed'
import { Interview } from '@components/include/uservoice/Interview'
import { Interviewer } from '@components/include/uservoice/Interviewer'
import { Interviewee } from '@components/include/uservoice/Interviewee'
import { SmakatsuBnr } from '@components/include/uservoice/SmakatsuBnr'
import { ReturnUserVoiceList } from '@components/include/uservoice/ReturnUserVoiceList'
import { LinkNormal, LinkIconAfter } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { IconNewTabLine } from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import { Link as Anchor } from 'react-scroll'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice47: NextPage = () => {
  const pagetitle = '2GBまで無料の海外ローミング'
  const pageHeading =
    'アイルランドやL.A.でもつながる！2GB無料の海外ローミングで快適'
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

  const articleNum = '47'
  const userName = '柴崎'

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
        description="毎月2GBまで無料の海外ローミングが魅力的！Rakuten Linkで海外との通話やSMSがおトクになりました（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2023年2月24日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  お仕事で1年の3分の1を海外で過ごしている柴崎さん（仮名）。日本の携帯電話料金とは別で発生する海外用SIMの利用料金や、国際通話の通話料金など、渡航時の出費に悩んでいました。
                </p>
                <p>
                  しかし、楽天モバイルに乗り換えて、毎月2GBまで無料で利用できる海外ローミング※と、おトクに国際通話や国際SMSが利用できるRakuten
                  Link※のおかげで、悩みが一気に解決したそうです。
                </p>
                <p>
                  今回は、柴崎さんに海外ローミング利用の実体験や、おすすめポイントについて詳しくお話をお聞きしました。
                </p>
                <TxtCap as="p">
                  ※海外ローミング（データ通信）について、
                  <LinkNormal
                    href={`/service/global/overseas/?l-id=uservoice_${articleNum}_service_global_overseas`}
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                  <br />
                  ※プランのデータ利用量に加算。2GB超過後は最大128kbps。データ通信（海外ローミング）の
                  <Anchor href="#note1" to="note1" smooth={true} duration={100}>
                    <LinkNormal as="span">注意事項の詳細はこちら</LinkNormal>
                  </Anchor>
                  。
                  <br />
                  ※国際通話の
                  <Anchor href="#note2" to="note2" smooth={true} duration={100}>
                    <LinkNormal as="span">注意事項の詳細はこちら</LinkNormal>
                  </Anchor>
                  。<br />
                  ※国際SMSの
                  <Anchor href="#note3" to="note3" smooth={true} duration={100}>
                    <LinkNormal as="span">注意事項の詳細はこちら</LinkNormal>
                  </Anchor>
                  。<br />
                  ※出国前に
                  <LinkNormal
                    href={`/service/rakuten-link/?l-id=uservoice_${articleNum}_service_rakuten-link`}
                  >
                    Rakuten Linkアプリ
                  </LinkNormal>
                  の
                  <LinkIconAfter
                    href="https://service.link.link/guide/"
                    target="_blank"
                    rel="noopener"
                  >
                    初期設定
                    <IconNewTabLine />
                  </LinkIconAfter>
                  を完了してください。
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／愛知県）"
            periodOfUse="1年"
            dataUseage="3GB未満／渡航時：2GB未満"
            beforeComapany="LINEMO"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="海外ローミング毎月2GB無料のおかげで、海外滞在時も追加通信費なしが魅力です！"
              subTitle="1年の3分の1以上は海外に滞在"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>普段から楽天モバイルをどのように利用されていますか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>海外ローミングとRakuten Linkを中心に活用しています。</p>
                <p>
                  私は仕事柄、何度も海外に渡航するので、1年の3分の1以上は海外にいることが多いんです。そのため、海外に滞在している間、日本で契約している携帯電話会社の利用料と、現地の海外SIMの利用料で、二重払いになっていました。
                </p>
                <p>
                  それに、日本にいるときも海外の仕事相手と頻繁に連絡をとるので、国際通話や国際SMSの利用料がかさんで困っていたんです。
                </p>
                <p>
                  楽天モバイルに乗り換えてからは、日本でも海外でも快適に使えるので、とても助かっています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  そうだったのですね。海外ローミングの設定は簡単にできましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  my 楽天モバイルから簡単に設定できました。
                  <TxtMarker as="em">
                    海外ローミング※を渡航前に設定しておけば、海外SIMを購入する手間もなく、到着したらすぐにスマホが使える
                  </TxtMarker>
                  のでとても便利ですね。
                </p>
                <p>
                  海外SIMを挿入するときにSIMを紛失しないために、乗り換え時にeSIM※を選んでいたのでSIMカードトレイをわざわざ開ける必要もありません。
                </p>
                <TxtCap as="p">
                  ※海外ローミングの利用方法について、
                  <LinkNormal
                    href={`/guide/international-roaming/?l-id=uservoice_${articleNum}_guide_international-roaming`}
                  >
                    詳細こちら
                  </LinkNormal>
                  。<br />
                  ※eSIMについて、
                  <LinkNormal
                    href={`/product/sim/esim/?l-id=uservoice_${articleNum}_product_sim_esim`}
                  >
                    詳細こちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  なるほど、空港に到着してすぐインターネットが利用できるのは安心ですね。主にどちらの国で利用されているのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  アイルランドです。海外ローミングを使えば、電波がしっかりつながります。アメリカのロサンゼルスへ渡航したときも、安定してつながりました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  それは良かったです。海外ではデータ容量はどれくらい利用されていますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  海外に滞在しているときは、基本的にスマホでデータ通信を利用しないので、2GB未満ですね。
                </p>
                <p>
                  どうしてもデータ容量が不足する場合や、大きなデータのやり取りをする場合は、滞在先の会社や学校などのセキュリティが高いWi-Fiを借りているので、今のところ海外ローミングのデータ容量を追加したことはありません。
                </p>
                <p>
                  <TxtMarker as="em">
                    楽天モバイルの海外ローミングは2GBまで無料※
                  </TxtMarker>
                  なので、とても助かっています。それにデータ容量を使い切った後は、手動で自分で追加しなければデータ利用量が増えることもないので、使いすぎないのも安心です。
                </p>
                <TxtCap as="p">
                  ※海外ローミングのデータ通信利用量は、プランのデータ利用量に加算し、2GB超過後は最大128kbpsとなります。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="通話もSMSもおトクになりました"
              subTitle="海外とのやり取りにRakuten Linkアプリが便利！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  以前の携帯電話会社では、国際通話や国際SMSの利用料金に悩んでいたとおっしゃっていましたが、Rakuten
                  Linkでお悩みは解消したのでしょうか。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、仕事で通話をするときはRakuten
                  Linkを利用しています。おかげで悩みはすっかり解消しました。
                  <br />
                  日本にいるときに海外にいる人への通話をすることもありますし、海外に滞在しているときにも日本にいる人と通話をすることもあるので、以前の携帯電話会社では国際通話や国際SMSの利用料金だけで毎月3千円前後になっていました。
                </p>
                <p>
                  でも
                  <TxtMarker as="em">
                    Rakuten Linkならとてもおトクに国際通話や国際SMSが使える
                  </TxtMarker>
                  んです。海外から日本にSMSを送るときは無料ですし、日本から海外に送るときも、対象になっている国なら無料でSMSを送信できます。※
                  <br />
                  通話も海外から日本にかけるときは無料ですし、着信料金もかからなくて本当におトクになりました。
                </p>
                <TxtCap as="p">
                  ※日本から海外の電話番号へSMS送信する場合、
                  <LinkNormal
                    href={`/fee/un-limit/?l-id=uservoice_${articleNum}_fee_un-limit#country`}
                  >
                    海外指定の国と地域
                  </LinkNormal>
                  は無料となります。
                  <LinkNormal
                    href={`/service/international-sms/?l-id=uservoice_${articleNum}_service_international-sms`}
                  >
                    詳細はこちら
                  </LinkNormal>
                  。<br />
                  ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
                  Linkを利用していない場合、iOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。
                  <LinkNormal
                    href={`/fee/un-limit/detail/?l-id=uservoice_${articleNum}_fee_un-limit_detail#tel-ios`}
                  >
                    詳細はこちら
                  </LinkNormal>
                  。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  特にお仕事などで海外とのやり取りが多い方にとっては、とても便利ですね。ほかにも楽天モバイルを利用して海外と連絡を取っている方はいるのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  周りにも数人いますね。日本の携帯電話会社と海外SIMの利用料金で悩んでいる仕事仲間に、「国際電話や国際SMSを使うなら、楽天モバイルが良いよ」とおすすめしています。
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
              楽天モバイルなら、海外ローミングが2GBまで無料※で利用できるだけでなく、Rakuten
              Linkでおトクに国際電話や国際SMSが使えます。
            </p>
            <p>
              海外出張や海外旅行で、スマホの利用料金に悩んでいる方は、海外ローミングやRakuten
              Linkをおトクに使いこなしている柴崎さんのように、楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※海外ローミングのデータ通信利用量は、プランのデータ利用量に加算し、2GB超過後は最大128kbpsとなります。
              <br />
              ※当ページの内容は2023年2月24日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <section className={Utils['Mt-64']}>
            <Heading level="3" as="h2">
              注意事項
            </Heading>
            <Heading level="3" className={Utils['Mt-16']} id="note1">
              <TxtSize size="normal">
                ■データ通信（海外ローミング）について
              </TxtSize>
            </Heading>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※海外への渡航の前に、国内でRakuten
              Linkを認証してください。海外ローミングエリアによっては認証できない場合がございます。
              <br />
              ※海外ローミングで使用するデータは海外ローミングエリアの高速データ容量から消費されます。
              <br />
              ※現地事業者の事情により、接続ができない場合があります。
              <br />
              ※データ消費が「データ利用量」としてカウントされます。
              <LinkNormal
                href={`/fee/un-limit/?l-id=uservoice_${articleNum}_fee_un-limit#anc01`}
              >
                詳しくはデータ利用量のカウント方法
              </LinkNormal>
              をご確認ください
              <br />※
              <LinkNormal
                href={`/service/global/overseas/?l-id=uservoice_${articleNum}_service_global_overseas#accordion-1`}
              >
                海外の対象国と地域
              </LinkNormal>
              にて、
              海外ローミングエリアの高速データ容量を使い切った場合、海外ローミングエリアでの通信速度が最大128kbpsに制限されます。
              <br />
              ※通信速度はベストエフォートであり、実効速度は通信環境・状況により変動します。
              <br />
              ※海外の対象国と地域以外は、Wi-Fi接続時のみ利用可能です。
              <br />
              ※データ通信（海外ローミング）のサービスエリア・提供条件は予告なく変更になる場合があります。
              <LinkNormal
                href={`/guide/international-roaming/?l-id=uservoice_${articleNum}_guide_international-roaming#area`}
              >
                対象エリア
              </LinkNormal>
              をご確認ください。
            </TxtCap>
            <Heading level="3" className={Utils['Mt-16']} id="note2">
              <TxtSize size="normal">■国際通話について</TxtSize>
            </Heading>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
              Linkを利用していない場合、iOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。
              <br />
              ※（0570）などから始まる他社接続サービス、一部特番（188）への通話については、無料通話の対象外となります。
              <LinkNormal href="/faq/detail/00001887/">
                対象外番号一覧
              </LinkNormal>
              をご確認ください。
              <br />※ Rakuten Linkアプリを利用した場合、
              <LinkNormal
                href={`/service/global/overseas/?l-id=uservoice_${articleNum}_service_global_overseas#accordion-1`}
              >
                海外の対象国と地域
              </LinkNormal>
              からのみ発着信可能となります。その他の地域に関してはWi-Fi接続中の場合のみ発着信可能となります。
              <br />
              ※国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。
              <br />
              ※通話先の相手国・地域によっては、現地事業者の設備などの都合により接続できない場合があります。
            </TxtCap>
            <Heading level="3" className={Utils['Mt-16']} id="note3">
              <TxtSize size="normal">■国際SMSについて</TxtSize>
            </Heading>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※Rakuten LinkアプリiOS版をご利用のお客様は、相手がRakuten
              Linkを利用していない場合、Rakuten
              Linkで国際SMSを送受信することができません。ご利用の際はiOS標準のメッセージアプリをご利用ください。
              <br />
              ※Rakuten Linkアプリを利用した場合、
              <LinkNormal
                href={`/service/global/overseas/?l-id=uservoice_${articleNum}_service_global_overseas#accordion-1`}
              >
                海外の対象国と地域
              </LinkNormal>
              からのみ送受信可能となります。
              <br />
              ※国際通話・国際SMSのサービスエリア・提供条件は予告なく変更になる場合があります。
              <br />
              ※ご利用の機種や、海外ローミング先のネットワーク、または通信先の相手国のネットワークの通信事情により、一覧にある事業者でサービスをご利用いただけない場合があっても当社は一切の責任を負いません。
            </TxtCap>
            <ServiceGlobalBnr
              className={Utils['Mt-32']}
              lid={`uservoice_${articleNum}`}
              lazy={true}
            />
          </section>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'iPhone 14がおトクに購入できました！楽天経済圏も便利です',
                userInfo: '小野田さん（仮名・40代女性／岐阜県）',
                img: 'avator-46.png',
                description:
                  '私と主人2人分の携帯電話料金と、光回線の利用料金の合計が月3万円以上...',
                href: `/uservoice/46/?l-id=uservoice_${articleNum}_uservoice_46`,
              },
              {
                title: 'Webサイトで簡単に乗り換え！15分で開通が完了しました',
                userInfo: '山崎さん（仮名・30代男性／高知県）',
                img: 'avator-45.png',
                description:
                  '料金プランのデータ容量が余って、もったいないと思っていたのが理由...',
                href: `/uservoice/45/?l-id=uservoice_${articleNum}_uservoice_45`,
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

export default Uservoice47
