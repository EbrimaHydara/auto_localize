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
import { IphoneUpgradeBnr } from '@components/include/uservoice/IphoneUpgradeBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice34: NextPage = () => {
  const pagetitle = 'iPhoneで大人のスマホデビュー'
  const pageHeading = 'おトクに買えたiPhoneで、大人のスマホデビューをしました！'
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

  const articleNum = '34'
  const userName = '尾形'

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
        description="おトクに買えたiPhoneで、大人のスマホデビュー！シンプルなワンプランで利用料金も安心！（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年9月30日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  「長年愛用したガラケーからスマホに買い替えたいけど、携帯電話会社や料金プラン、割引の条件もたくさんあって、結局どれが良いのかわからない」と途方に暮れてしまいがちなのが、大人のスマホデビューです。
                </p>
                <p>
                  ガラケーと比較するとスマホは選択肢が多く、自分にとって最適な料金プランを探すのは大変です。
                  <br />
                  今回は、楽天モバイルで大人のスマホデビューをした尾形さん（仮名）に詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（50代女性・神奈川県）"
            periodOfUse="11カ月"
            dataUseage="3GB未満"
            beforeComapany="au"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="はじめてのスマホはiPhone 13 miniを選びました"
              subTitle="スマホデビューと一緒に乗り換え！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>楽天モバイルに乗り換えようと思ったきっかけはなんですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ずっとガラケーを使っていたのですが、そろそろスマホにしようかなと夫と相談していたのがきっかけです。
                </p>
                <p>
                  以前契約していた携帯電話会社では、一番安い料金プランを利用していました。でもガラケーの料金プランは、おトクな割引やサービスがスマホに比べて少なく、データ通信もほとんどできないので、メリットを感じなかったんです。
                </p>
                <p>
                  それに、2022年の3月に今使っているガラケーの電波が使えなくなると聞いて、せっかくならスマホにしてしまおうかなと。
                </p>
                <p>
                  そんなときに、テレビで流れていた楽天モバイルのCMを見たんです。
                  <TxtMarker as="em">
                    料金プランや使えるデータ容量も、私たちにぴったり
                  </TxtMarker>
                  だと感じて、楽天モバイルにしようと決めました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>楽天モバイル以外の携帯電話会社も検討されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  テレビCMで知りたい情報が全部わかりやすく整理されていたので、まったく検討していません。
                </p>
                <p>
                  CMを見た後、楽天モバイルのことを調べたのですが、事務手数料がかからない※ことや、契約期間の縛りがないことを知り、
                  <TxtMarker as="em">
                    メリットが多くてほかの携帯電話会社は考えにありませんでした
                  </TxtMarker>
                  。
                </p>
                <TxtCap as="p">
                  ※2020年11月4日午前9時以降、契約事務手数料は無料となっています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>乗り換えの手続きはWebサイトと店舗、どちらでされましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  事前に楽天モバイルのホームページで確認してから、近くの店舗で手続きをしました。
                </p>
                <p>
                  店舗だと契約の手続き中に聞きたいことがあればスタッフさんにすぐ聞けますし、実際に楽天モバイルを使っている人の話が聞いてみたかったので、店舗のスタッフさんにもいろいろと質問させてもらいました。
                </p>
                <p>
                  申し込みの手続きもスムーズで、
                  <TxtMarker as="em">
                    身近な場所に頼れる店舗があるのは安心
                  </TxtMarker>
                  できますね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>なるほど。店舗でスマホ製品も購入されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私と夫、2人ともiPhone 13
                  miniを購入しました。以前からガラケーと一緒にiPod
                  touchを使っていたので、スマホ製品を買うならiPhoneにしようと決めていたんです。
                </p>
                <p>
                  iPhoneを検討していることを店舗のスタッフさんに伝えたら、
                  <TxtMarker as="em">
                    楽天モバイルならiPhoneが携帯電話会社の中で一番安く買える
                  </TxtMarker>
                  ※と聞いたのも後押しになりました。
                </p>
                <p>
                  夫は以前、外でもiPod
                  touchを使うためにモバイルWi-Fiルーターを契約していたのですが、楽天モバイルでiPhone
                  13
                  miniを購入した後は、スマホひとつでデータ通信ができるようになったので解約しました。
                </p>
                <TxtCap as="p">
                  ※
                  2021年9月17日時点。NTTドコモ、au、ソフトバンクとのiPhone本体代金の比較(自社調べ)
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>以前と利用料金はどう変わりましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前契約していた携帯電話会社では、1人あたり月々2千円程度の料金プランだったので、私と夫2人合わせて月々4千円くらい支払っていました。
                </p>
                <p>
                  楽天モバイルに乗り換えてからは、夫婦2人とも
                  月1,078円（税込）なので、月々の携帯電話料金が2人あわせて2千円程度下がりましたね。夫の使っていたモバイルWi-Fiルーターも含めると、5千円程度は安くなりました。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="わかりやすいシンプルなワンプランが魅力"
              subTitle="友人にもおすすめしやすい！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天モバイルに乗り換えて、良かったなと感じることはなにかありますか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイル買い替え超トクプログラム※です。購入したiPhoneを2年後に買い替えても良いですし、そのまま使い続けて自分のものにするのも良いですし、選択肢が増えるのはとても便利だなと感じています。
                </p>
                <TxtCap as="p">
                  ※楽天モバイル買い替え超トクプログラム：48回払いのうち、24回分のお支払いが完了した時点で、お使いになった製品製品を返却することで、残債を支払う必要なく、新しい製品へ機種変更ができます。
                  <LinkNormal href="/service/replacement-program/?l-id=uservoice_34_service_replacement-program_01">
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
                serialNumber="02"
                lazy={true}
              />

              <Interviewer>
                <p>料金プランについてはいかがでしょうか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  とにかくシンプルでわかりやすい料金プランが良いですね。
                  <TxtMarker as="em">
                    データ利用量にあわせて決まる料金プランのおかげで、あれこれ考えなくて良い
                  </TxtMarker>
                  のが本当に助かります。
                </p>
                <p>
                  以前の携帯電話会社もそうだったのですが、料金プランにさまざまな割引が加わり、さらにオプションまで考えるとややこしく、私に最適な料金プランがわからなかったんです。
                </p>
                <p>
                  でも楽天モバイルの料金プランは、とてもわかりやすくて人にも説明しやすいので、友人に話したときにも、興味を持ってもらえるのでとても話が盛り上がります。
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
              楽天モバイルは、シンプルなワンプランで料金プランがわかりやすく、スマホ製品もおトクにご購入いただけるキャンペーン※を実施しています。
            </p>
            <p>
              尾形さんのように、大人のスマホデビューを検討している人は、ぜひ楽天モバイルを検討してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※定期的におトクなキャンペーンを実施しております。
              <LinkNormal href="https://network.mobile.rakuten.co.jp/campaign/?l-id=uservoice_34_campaign">
                詳細はこちら。
              </LinkNormal>
              <br />
              ※当ページの内容は2022年9月30日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '月々のデータ利用量が少なくても、乗り換えでおトクになった！',
                userInfo: '山田さん（仮名・50代女性／神奈川県）',
                img: 'avator-33.png',
                description: '以前契約していた携帯電話会社の利用料...',
                href: '/uservoice/33/?l-id=uservoice_34_uservoice_33',
              },
              {
                title:
                  '息子のキッズ携帯としても楽天モバイルが最適。家族全員が満足',
                userInfo: '高野さん（仮名・40代男性／広島県）',
                img: 'avator-32.png',
                description: '息子にキッズ携帯の代わりとしてスマホ...',
                href: '/uservoice/32/?l-id=uservoice_34_uservoice_32',
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

export default Uservoice34
