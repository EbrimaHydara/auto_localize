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
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { IconNewTabLine } from '@components/icons'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice14: NextPage = () => {
  const pagetitle = 'データ無制限で思いっきり動画視聴できる'
  const pageHeading =
    'スマホの使い方が変わった！思いっきりインターネットが楽しめる'
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

  const articleNum = '14'
  const userName = '内海'

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
        description="データ使い放題でデータ通信の利用にためらいがなくなり、以前のような生活はもう考えられません。（楽天モバイルの口コミ）"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date="2022年3月11日"
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  月々の携帯電話料金の安さを優先してデータ容量が少ない料金プランを選んだら、「ギガを節約するためにスマホの使い方に制限が増えた」という方も多いのではないでしょうか。
                </p>
                <p>
                  今回は、データ容量が少ない料金プランから楽天モバイルに乗り換えた結果、ライフスタイルが大きく変化したという内海さん（仮名）に詳しくお話をお聞きしました。
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo="（20代女性／三重県）"
            periodOfUse="11カ月"
            dataUseage="15～20GB未満"
            beforeComapany="NTTドコモ"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title="思いっきり動画視聴を楽しんでも以前よりも安い"
              subTitle="ギガを気にして節約しなくても良い！"
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
                  楽天市場を普段から愛用していて、そこでよく楽天モバイルのバナー広告を目にしていたのがきっかけです。
                </p>
              </Interviewee>
              <Interviewer>
                <p>乗り換えてみていかがでしたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  私の生活圏では問題なく快適につながっているので、不満は何もありません。
                  <br />
                  楽天経済圏を活用しているので、楽天モバイルの契約で楽天市場でのお買い物ポイント倍率が上がった※のもうれしいです。
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
                  楽天経済圏※を活用されているとのことですが、楽天のどのようなサービスを利用されていますか？
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
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  楽天モバイル、楽天市場のほかに楽天ひかり、楽天トラベル、楽天証券、楽天カード、楽天銀行などを利用しています。
                </p>
                <p>
                  楽天モバイルへの乗り換えと同時に自宅のインターネット回線を楽天ひかりにしたので、楽天ひかりの月額基本料1年無料キャンペーン※を利用できました。結果的に通信費全体がとても安くなりましたね。
                </p>
                <p>
                  SPU（スーパーポイントアッププログラム）で楽天のサービスを使えば使うほどポイントが貯まるので、月々の携帯電話料金の支払いは、すべてポイントを利用しています。月々の支払いにポイントが利用できるのはうれしいです。
                </p>
                <p>
                  楽天モバイルは私のような
                  <TxtMarker as="em">
                    楽天経済圏の利用者にとって特に利便性が高い
                  </TxtMarker>
                  サービスだと感じています。
                </p>
                <TxtCap as="p">
                  ※楽天ひかりの月額基本料1年無料キャンペーンは月額基本料が開通月から最大12カ月無料になるキャンペーンです。初期登録料、工事費等が別途発生します。契約解除料あり。
                </TxtCap>
              </Interviewee>
              <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                <img
                  src={`${assets}img/uservoice/14/img-01.png`}
                  alt=""
                  width="415"
                  height="300"
                />
              </div>
              <Interviewer>
                <p>楽天モバイルに乗り換えてみてどのあたりが変わりましたか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  データ通信の使い方が大きく変わりました。
                  <br />
                  以前は、月々3千円程度で1GBまでしか使えない契約プランだったので、インターネットが思う存分使えない状態でした。
                </p>
                <p>
                  なので、スマホでは動画は絶対に見ないし、どうしても必要な時以外はモバイルデータ通信の設定をオフにして、メール受信などの小さなデータ通信量も徹底して節約していました。
                </p>
              </Interviewee>
              <Interviewer>
                <p>スマホの使い方をかなり制限されていたのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。それが今では
                  <TxtMarker as="em">
                    スマホで動画視聴も調べ物も思いっきり満喫
                  </TxtMarker>
                  しています。
                </p>
                <p>
                  楽天モバイルは1GBまでなら月額0円※なので、乗り換える前は以前と同じようにデータ通信の節約を徹底して1GB以内におさめようと思っていました。
                  <br />
                  でも、もともとのプラン料金が安いのと支払いに楽天ポイントが使えるので、今は躊躇せずデータ通信を利用しています。
                </p>
                <TxtCap as="p">
                  ※1GBまで0円は2022年6月30日で提供終了したRakuten UN-LIMIT
                  VIの場合。現在は3GBまで980円（税込1,078円）
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>毎月のデータ通信量はどれくらいですか？</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  自宅では楽天ひかりを利用しているので、スマホ自体のデータ通信量はたくさん使っても毎月15～20GB程度です。なので月々のプラン料金は1,980円（税込2,178円）におさまっています。
                </p>
              </Interviewee>
            </Interview>

            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title="楽天モバイルに乗り換えてライフスタイルにも大きな変化が"
              subTitle="シンプルな料金プランとポイントの貯まりやすさが魅力！"
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  楽天市場で広告をご覧になり、楽天モバイルをご存じだったとのことですが、乗り換えは迷われましたか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい、以前の携帯電話会社の契約期間の縛りがあり、解約手数料※が大きくかかるとのことで乗り換えを思い切れませんでした。
                </p>
                <p>
                  契約満了月を待ちながら、ほかにも格安スマホや大手携帯電話会社が運営するサブブランドの情報を集めて、乗り換えのための比較検討をしていました。
                </p>
                <TxtCap as="p">
                  ※2021年4月時点。現在大手キャリアは契約解除料を無料としております。詳しくは各社HPをご覧ください。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  さまざまな携帯電話会社の料金プランを比較検討されたようですが、その中でも楽天モバイルを選んだ決め手はなんだったのでしょうか？
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  ポイントが貯まりやすいのと、データ利用量で料金が決まり、どれだけ使っても最大月額2,980円（税込3,278円）のシンプルな料金プランが魅力的でした。
                  <br />
                  以前の契約と同じ1GBまでなら、楽天モバイルは月額0円※という価格にもとても惹かれました。
                </p>
                <p>
                  また、コンパクトなスマホが欲しいと思っていたので、楽天モバイルでiPhone
                  SEの取り扱いが始まったことも決め手のひとつになりました。
                </p>
                <TxtCap as="p">
                  ※1GBまで0円は2022年6月30日で提供終了したRakuten UN-LIMIT
                  VIの場合。現在は3GBまで980円（税込1,078円）
                </TxtCap>
              </Interviewee>

              <Interviewer>
                <p>なるほど。いろいろな要素を加味した結果だったのですね。</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  はい。乗り換え前は、以前と同じようにデータ通信を節約して使うつもりでしたが、実際は外でもスマホをたくさん使って、以前とはまったく異なる生活になっています。
                </p>
                <p>
                  YouTubeを長時間視聴したり、音楽配信サービスでBGMを流したりと、データ使い放題※で
                  <TxtMarker as="em">
                    データ通信の利用にためらいがなくなりました。以前のような生活はもう考えられません
                  </TxtMarker>
                  。
                </p>
                <p>
                  自分にとっては劇的な変化だったので、機会があれば周りに楽天モバイルの良さを紹介しています。
                </p>
                <TxtCap as="p">
                  ※公平なサービス提供のため、速度制限の場合あり。環境により速度低下する場合あり。
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  本日は貴重なお声をお聞かせいただき、ありがとうございました。
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
              データ容量を気にしてスマホの使い方に制限をかけている方は、乗り換えによってライフスタイルが大きく変化した内海さんのように、楽天モバイルを契約してみてはいかがでしょうか。
            </p>
            <TxtCap as="p">
              ※当ページの内容は2022年3月11日時点の情報です。掲載されている情報は予告なく変更となる場合がございます。
            </TxtCap>
          </InterviewSummary>

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
            <ButtonRegular
              as="a"
              href={`/product/iphone/?l-id=uservoice_${articleNum}_product_iphone`}
            >
              楽天モバイルのiPhone一覧を見る
            </ButtonRegular>
          </div>

          <ReadMoreInterviews
            uservoiceList={[
              {
                title:
                  '乗り換えで毎月約1万5千円も節約！周りにもおすすめしています',
                userInfo: '河浦さん（仮名・40代女性／宮城県）',
                img: 'avator-13.png',
                description: '兄からデータ通信も安定しているし、使...',
                href: `/uservoice/13/?l-id=uservoice_${articleNum}_uservoice_13`,
              },
              {
                title: '明確な料金プランで安心！ワンプランのわかりやすさが魅力',
                userInfo: '園部さん（仮名・30代女性／埼玉県）',
                img: 'avator-12.png',
                description: '退職をきっかけに家計を見直したら、毎...',
                href: `/uservoice/12/?l-id=uservoice_${articleNum}_uservoice_12`,
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

export default Uservoice14
