import type { NextPage } from 'next'
import { assets } from '@components/utils/assets'
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
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { LinkNormal } from '@components/atoms/Link'
import { KidsKeitaiBnr } from '@components/include/uservoice/KidsKeitaiBnr'
import { FamilyPlan } from '@components/include/uservoice/FamilyPlan'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice04: NextPage = () => {
  const pagetitle = '3世代家族みんなで乗り換えてお得！'
  const pageHeading =
    '3世代家族みんなで楽天モバイル。使い放題で家族全員が楽しめる'
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

  const articleNum = '04'
  const userName = '藤木'

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
        description="どの世代にも合うシンプルな料金プラン。０円〜使い放題は家族全員にとってベストな使い勝手（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2021年12月17日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  携帯電話料金を安くしたいけれど、「乗り換えの手続きが面倒」「データが足りなくなるのは困る」と、携帯電話料金の見直しと乗り換えで悩んでいる方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、家族全員で楽天モバイルに乗り換えた藤木さん（仮名）に、その経緯や家族ならではの便利な使い方をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（40代女性／大阪府）"
            periodOfUse="7カ月"
            dataUseage="3GB前後"
            beforeComapany="格安スマホ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="外出中にオリンピック中継を満喫できた！"
              subTitle="両親がガラケーから乗り換えを検討したのがきっかけ！"
              ratId={`uservoice_${articleNum}_scroll-01_title`}
            >
              <Interviewer>
                <p>
                  ご家族全員で楽天モバイルに乗り換えをされていますが、楽天モバイルを選んだきっかけを教えて下さい。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  両親のスマホへの買い替えがきっかけです。
                  <br />
                  ガラケーを使っていた70代の両親がスマホに買い替えたいというので、せっかくなら携帯電話会社も乗り換えようと家電量販店へ行きました。
                </p>
                <p>
                  <TxtMarker as="em">
                    両親が高齢なこともあり、わかりやすくシンプルな料金プランや安さに注目して携帯電話会社を検討
                  </TxtMarker>
                  している中で、楽天モバイルが良さそうだと思い、今年の2月頃にまずは両親が乗り換えました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  家電量販店内の店舗でご検討いただいたようですが、その場で契約されたのですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  いえ、一旦帰宅してからオンラインで契約をしました。両親の契約を私がサポートしたんですが、
                  <TxtMarker as="em">
                    手続きがあまりにも簡単だったので感動
                  </TxtMarker>
                  しました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  ご両親は楽天モバイルでスマホデビューされたのですね。どのように使っておられますか？
                </p>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/04/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                />
              </div>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天エリアはデータ使い放題※なので、父はスマホにアプリを入れて、外出先の公園などでオリンピックの中継を観ていました。
                </p>
                <p>
                  楽天モバイルでなければ、データ通信量を気にして、急いで帰宅してから観戦していたと思います。データ使い放題ならではですよね。乗り換えて本当に良かったと思います。
                </p>
                <p>
                  特に父はスマホをいろいろと使いこなしているので、もっと早く契約していればよかったなと感じています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="テザリングも気にせず使えて、旅行中に子どもたちがインターネットを楽しめる"
              subTitle="息子と一緒に楽天モバイルに乗り換え"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  ご両親が契約されたあと、他のご家族も乗り換えをされたそうですね。
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  そうです。楽天モバイルの良さを間近で見て、中学生の息子※と私も乗り換えました。夫もいくつか契約している携帯電話回線の１つを楽天モバイルに乗り換えました。
                </p>
                <p>
                  私は今まで、スマホが古くなって調子が悪くなってから、携帯電話会社の乗り換えボーナスを使って新しいスマホを購入していました。
                </p>
                <p>
                  使用中のスマホに不具合はなかったのですが、プラン料金1年無料※のキャンペーンにあわせておトクに乗り換えできて、スマホも新しくしました。
                </p>
                <TxtCap as="p">
                  ※楽天モバイルは未成年でもオンラインで契約できます。
                  <br />
                  ※Rakuten UN-LIMIT VIの1年間無料キャンペーンは終了しています。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>スマホは何を購入されましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  OPPO Reno3
                  Aです。選んだ理由は、以前使用していたスマホと同じメーカーだから使い慣れていたのと、コストパフォーマンスがよくて、値段の割に性能が良いので選びました。息子も同じスマホを使っています。
                </p>
              </Interviewee>

              <Interviewer>
                <p>通信速度やデータ通信の安定感はどうですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  大阪で暮らしていますが、職場から自宅にかけて、私が日頃使っている範囲では問題ないです。
                  <TxtMarker as="em">つながらないと感じたことはない</TxtMarker>
                  ですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>他のご家族はいかがですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  中学生の息子は学校にはスマホを持っていけないので、基本的には家で使用し、塾に行く時に持っていく程度ですね。
                  <br />
                  あまり使い放題を体感するほど使用していませんが、データを使った分の料金だけ支払えばいいので助かっています。
                </p>
                <p>
                  ただ、高校生になってスマホを携帯するようになり、通学中にもっと使うようになったら、データ通信量が増えるかもしれないですね。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  もし使い方が変わっても、段階制の料金プランであれば使い方に応じて料金が決まり、20GB以上データ容量を消費しても月々2,980円（税込3,278円）で使い放題なのは安心ですね。
                </p>
                <p>
                  料金の安さに注目して携帯電話会社を検討していたようですが、楽天モバイルに乗り換えて、実際どう感じましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  以前はデータ容量が1GB～3GB程度の低容量プランだったので、月々の料金は息子と私の分を合わせて3千円程度でした。楽天モバイルになったことで、スマホ代が大きく増減したということはありませんが、
                  <TxtMarker as="em">
                    データ使い放題なので、実質おトク
                  </TxtMarker>
                  になっています。
                </p>
                <p>
                  以前だと息子はデータ通信量を節約しながらWi-Fiにつないで、なにかとデータ容量の残りを気にしながら使用していましたが、今は気にせずつないでいるようです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  3GBから20GB以上だと大きな変化ですね。藤木さん自身はいかがですか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私自身はあまりアプリを使わないので、以前とデータ利用量は変わりませんが、テザリングを使用するようになったことが大きな変化です。
                </p>
                <p>
                  もう1人小学生の息子がいるのですが、彼には私の古いスマホをWi-Fiに接続して使わせていて、旅行へ行く時などに車の中で
                  <TxtMarker as="em">
                    楽天モバイルのテザリングを利用してネット接続できるので、とても便利
                  </TxtMarker>
                  です。データ容量を気にしなくて良いところがとても気に入っています。
                </p>
                <p>
                  小学生の息子も、中学生になったらスマホを持たせるつもりですが、楽天モバイルで契約すると思います。
                </p>
              </Interviewee>
            </Interview>

            <KidsKeitaiBnr
              className={Utils['Mt-32']}
              directory={articleNum}
              lazy={true}
            />

            <Interview
              title="携帯電話料金も安く、家計にもやさしい"
              subTitle="楽天市場でポイントアップ！"
              ratId={`uservoice_${articleNum}_scroll-03_title`}
              className={Utils['Mt-64']}
            >
              <Interviewer>
                <p>
                  楽天モバイルを契約して、他に良かったと感じる部分はありますか？
                </p>
              </Interviewer>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/04/img-02.png`}
                  alt=""
                  width="415"
                  height="300"
                  loading="lazy"
                />
              </div>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  日頃から洗剤やシャンプーのような重いものを中心に、楽天市場で頻繁に買い物をしているので、楽天ポイントが+1倍※になるのはありがたいです。
                </p>
                <p>
                  楽天モバイルにしたおかげでポイントが多く貰えるようになり、節約にも繋がっているので、契約して本当に良かったと実感しています。
                </p>
                <p>
                  また、使い放題で月2,980円（税込3,278円）と、格安スマホと比較しても携帯電話料金が安く、家計にやさしい点も魅力だと感じています。
                </p>
                <p>
                  使った量で料金が決まるので、子どもたちの使い方が変わっても料金プランの変更を検討したり、データの使用量を気にしたりしなくて良いので、
                  <TxtMarker as="em">無料期間が終わっても使い続ける</TxtMarker>
                  つもりです。
                </p>
                <TxtCap as="p">
                  ※獲得ポイントに上限有り。詳しくは
                  <LinkNormal
                    href={`/campaign/spu/?l-id=uservoice_${articleNum}_campaign_spu`}
                  >
                    SPU（スーパーポイントアッププログラム）
                  </LinkNormal>
                  をご確認ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  お子様の使い方が変わっても料金プランを変えなくても良いということは、たしかに便利ですね。本日は貴重なお話しをありがとうございました。
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
              最大でも月2,980円（税込3,278円）で安定した高速回線が使い放題※の楽天モバイル。楽天経済圏のユーザーにとってはSPUの倍率も上がり、日用品の購入時にも自然と節約できるので、家計にもやさしいのが特徴です。
            </p>
            <TxtCap as="p">
              ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
              <br />
              ※当ページの内容は2021年12月17日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
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

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '先輩にすすめられ、契約を即決。昼休みに申し込み、即日開通！',
                userInfo: '森田さん（仮名・20代男性／東京都）',
                img: 'avator-03.png',
                description: '昼休みに先輩からすすめられて、その場...',
                href: `/uservoice/03/?l-id=uservoice_${articleNum}_uservoice_03`,
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

export default Uservoice04
