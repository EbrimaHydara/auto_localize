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
import { LinkNormal } from '@components/atoms/Link'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`
const Uservoice03: NextPage = () => {
  const pagetitle = 'Webで昼休みに申し込んで、即日開通！'
  const pageHeading =
    '先輩にすすめられ、契約を即決。昼休みに申し込み、即日開通！'
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

  const articleNum = '03'
  const userName = '森田'

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
        description="オンラインでの本人確認とeSIMの利用で、その日のうちに開通しすぐに使えました。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2021年11月26日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  新しい携帯電話会社で契約したいと思っても、通常は店舗での順番待ちや手続きに時間がかかります。オンライン申し込みの場合も本人確認完了やSIMカードの到着までに数日かかるケースも少なくありません。
                </p>
                <p>
                  今回は、「AIかんたん本人確認（eKYC）×eSIM」で、楽天モバイルを契約し即日利用を開始された森田さん（仮名）に、開通時の体験と感想をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代男性／東京都）"
            periodOfUse="10カ月"
            dataUseage="平均20GB"
            beforeComapany="UQモバイル"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="オンラインでの本人確認はとても簡単だった"
              subTitle="思い立って即契約！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルを新規で契約されましたが、楽天モバイルを選んだ理由はどこにあったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  当時、プラン料金1年無料キャンペーン※をやっていたので、会社の先輩に「使ってみないか」とすすめられたのがきっかけです。
                </p>
                <TxtCap as="p">
                  ※Rakuten UN-LIMIT VIの1年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  お勤め先に既に楽天モバイルをご利用いただいている方がいらっしゃったんですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。昼休みに先輩からすすめられて、その場ですぐに手続きをしました。
                  <TxtMarker as="em">
                    おすすめされてから契約を決めるまで、10分もかからなかった
                  </TxtMarker>
                  ですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>即決即断ですね！</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイルのサービス内容にデメリットがなかったので、契約を悩む必要も理由もなかったです。
                </p>
                <p>
                  オンラインで契約ができるのも決定要素のひとつでした。いざ契約しようと思っても、店舗まで行く必要があると、どうしても時間に縛られてしまいます。でもオンラインなら、思い立ってすぐにできますから。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  忙しい方にとっては、オンラインですぐに契約できるのは大きなメリットですね！
                </p>
                <p>
                  AIを使用した本人確認サービス「AIかんたん本人確認（eKYC）※」を利用してのご登録ですが、オンラインの手続きはスムーズでしたか？
                </p>
                <TxtCap as="p">
                  ※AIかんたん本人確認（eKYC）はオンラインでの本人確認のことです。スマホの簡単な操作で本人確認書類とご本人の顔写真を登録。これら2つをオンラインで照合することで本人確認が完了します。
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とても簡単でした。eKYCですぐに本人確認が完了して、スムーズに契約から開通まで進みました。元々使っていたスマホは楽天回線対応製品だったので、新たに製品を購入することなく、回線（料金プラン）契約だけで済みましたし、さらにeSIM※を選択したので、アクティベーション（開通）用のQRコードがすぐに手元に届いて、
                  <TxtMarker as="em">その日のうちに開通手続きが完了</TxtMarker>
                  しました。
                </p>
                <TxtCap as="p">
                  ※eSIMはスマホ内のICチップにSIMの情報を書き込むことで、SIMカードを挿入しなくても携帯電話回線に接続できるSIMタイプです。ご利用には、楽天モバイル対応のeSIM対応製品が必要です。詳しくは
                  <LinkNormal href="/product/sim/esim/?l-id=uservoice_03_product_sim_esim">
                    eSIMとは
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  思い立って当日のうちに開通まで完了とは、まさにあっという間の契約でしたね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  あまりにも早くて、当時、感動した記憶があります。店舗に行く必要がなく、本人確認はeKYCですぐに完了する、SIMもeSIMを選べば届くのを待つ必要がないということで、
                  <TxtMarker as="em">
                    本当に驚くほど早く開通できました。
                  </TxtMarker>
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  店舗と比較して、オンライン契約のメリットと感じたところはどこにありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  店舗と比べて、オンライン契約は待ち時間ゼロなのが大きなメリットだと思います。とにかく速いし、拘束時間がないのはオンラインならではと感じます。実際、自分も昼休みにさっと契約を済ませられました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  時間に縛られないのは、さっと手軽にできるオンライン契約の強みですね。
                  <br />
                  今後、誰かに楽天モバイルをおすすめするとしたら、オンライン契約も一緒におすすめしますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>はい、実際に既に何人かに楽天モバイルを紹介しました。</p>
                <p>
                  一緒にゴルフへ行った友人の中に、携帯電話料金を毎月1～2万円支払っている人がいたので、簡単に契約できるから楽天モバイルにしてみたら？とおすすめしました。
                </p>
                <p>
                  ゴルフのプレイ中はさすがに契約できなかったので、その場で契約とはいきませんでしたが、友人も帰宅してすぐに契約していたようです。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="安定した通信環境で、スマホの利用も増えた"
              subTitle="通信速度も満足！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>契約の手軽さ以外の決め手はどこにありましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  <TxtMarker as="em">データ使い放題※が大きい要素</TxtMarker>
                  でした。契約した当時はメイン回線として格安スマホを契約していましたが、月3GB程度のデータ容量が小さいプランだったので、データ通信をあまり使えませんでした。
                  <br />
                  3GBだと、できるだけ節約しながら使っていても、月末になると使い切ってしまうこともあったんです。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルになってからは、月々のデータ通信量は変わりましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  今はデータ使い放題なので、毎月だいたい20GB程度と増えました。スマホからYouTubeの動画を視聴したり、いろいろとストリーミング配信を楽しんだりしています。
                  <br />
                  <TxtMarker as="em">
                    通信速度もWi-Fiと遜色ないくらい速い
                  </TxtMarker>
                  ※ので、家でもWi-Fiを使わないことがあるくらいです。
                  <br />
                  たまに外出先でテザリングを利用して、モバイルWi-Fiのように使用することもあります。外出先で仕事をするときにも、テザリングで接続できるのは便利ですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ぐっとデータ通信量が増えましたね！
                  <br />
                  通信速度は安定していますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>はい、格安スマホのときよりも速くなったと感じます。</p>
                <p>
                  契約当初、繋がりにくいというクチコミを見かけていたので、リスク分散を考えて格安スマホを残し、楽天モバイルは新規契約にしましたが、実際に使用してみたらクチコミのようなことはありませんでした。
                  <TxtMarker as="em">
                    地下鉄や地下でも、繋がりにくさは感じません。
                  </TxtMarker>
                </p>
                <p>
                  データ通信も安定していてとても高速なので、格安スマホは今後解約しようと考えています。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  楽天モバイルで十分問題なく安心ということですね！
                  <br />
                  もし楽天モバイルを今後おすすめするとしたら、どのようなポイントを推したいなと思いますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  大手携帯電話会社を利用されている方なら、なんといっても料金ですね。楽天モバイルの一番の特徴は「高速で繋がりやすい、高品質の回線なのに料金が安い」ところですし、迷っている方には是非おすすめしたいです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお声をお聞かせいただき、ありがとうございました！
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
              「データ使い放題にしたいが、面倒な手続きはしたくない！」という方は、オンラインですぐに契約できて、高速回線を使い放題の楽天モバイルに乗り換えてみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2021年11月26日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  'スマホ代が5分の1に！ストレスなくどこでもデータ通信を満喫',
                userInfo: '北原さん（仮名・30代男性／東京都）',
                img: 'avator-02.png',
                description: '家のWi-Fiよりも速く感じることも多く、...',
                href: `/uservoice/02/?l-id=uservoice_${articleNum}_uservoice_02`,
              },
              {
                title:
                  '通信速度に大満足！毎月の料金は楽天ポイントで支払えておトク！',
                userInfo: '鈴木さん（仮名・30代女性／東京都）',
                img: 'avator-01.png',
                description: '大満足ですね。なんといっても、通信速...',
                href: `/uservoice/01/?l-id=uservoice_${articleNum}_uservoice_01`,
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

export default Uservoice03
