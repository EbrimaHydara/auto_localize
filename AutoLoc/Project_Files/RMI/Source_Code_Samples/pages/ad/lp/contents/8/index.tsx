import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { Heading } from '@components/atoms/Heading'
import {
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  TxtMarkerAccent3,
} from '@components/atoms/Txt'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LabelEmpSingle } from '@components/atoms/Label'
import { Picture } from '@components/atoms/Picture'
import { RakutenInfo } from '@components/fragment/ad/lp/contents/RakutenInfo'

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 712px;
`
const Monotone97Box = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 16px;
  display: flex;
  column-gap: 4px;
`
const DefinitionList = styled.dl`
  dt {
    ${LabelEmpSingle} {
      font-size: 18px;
      padding: 8px 16px;
    }
  }
  dd {
    display: grid;
    row-gap: 16px;
    & + dd {
      margin-top: 40px;
    }
  }
`

const AdLpContents8: NextPage = () => {
  const pagetitle = 'ポイ活の新常識！ポイ活でスマホ代が0円になる！？'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '/ad/lp/contents/8/',
    },
  ]
  const imgPath = `${assets}img/ad/lp/contents/8/`
  const directory = '8'

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="スマホ代のポイ活には、おトクが盛りだくさんの楽天モバイルがおすすめ！おトクなワンプラン「Rakuten最強プラン」！家族割引適用でデータ無制限2,880円/月（税込3,168円）※通話料等別"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader
          lid={`ad_lp_contents_${directory}_fee_top`}
          isFixed={true}
        />
        <CustomSystemContainer>
          <Heading
            as="h1"
            level="2"
            className={Utils['Mt-40']}
            children={pagetitle}
          />
          <div className={Utils['Mt-24']}>
            <Picture
              src={`${imgPath}kv-pc.png`}
              width="680"
              height="300"
              spSrc={`${imgPath}kv-sp.png`}
              spWidth="680"
              spHeight="480"
              alt=""
              lazy={false}
            />
          </div>
          <p className={Utils['Mt-24']}>
            最近では、「ポイ活」という言葉も一般的になり、多くの方が貯まったポイントをコンビニやスーパー、飲食店、オンラインショッピングでの支払いに活用されています。
            <br />
            ポイ活の大きなメリットの1つは、
            <TxtMarkerAccent3>
              ポイントを利用することで生活費を節約できること
            </TxtMarkerAccent3>
            です。
            <br />
            では、普段の買い物のほかに、どんな場面でポイント支払いできるのか、賢いポイ活の方法を見てみましょう。
          </p>

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="月々のスマホ代もポイントで支払える？"
          />
          <p className={Utils['Mt-24']}>
            みなさん、スマホ代のポイント支払いはご存じですか？
            <br />
            ポイ活の達人の中には、
            <TxtEmp02>
              スマホ代のように、長期的に大きな節約効果が期待できる固定費にポイント支払いを取り入れている
            </TxtEmp02>
            方が多くいます！
            <br />
            スマホ代は毎月かかり、しかも家族全員分となると、かなりの金額になることがあります。
            <br />
            そんなときに、ポイントで支払えるとなれば、毎月の支出をカバーでき、経済的にも大きなメリットではないでしょうか？つまり、
            <TxtMarkerAccent3>
              スマホ代のポイント支払いは賢いポイ活の1つです！
            </TxtMarkerAccent3>
          </p>

          <Heading
            as="h2"
            level="4"
            className={Utils['Mt-64']}
            children="スマホ代のポイ活には楽天モバイルが気軽でおすすめ！"
          />
          <p className={Utils['Mt-24']}>
            いろんな場所で貯められる楽天ポイントですが、楽天モバイルなら、
            <TxtMarkerAccent3>
              毎月のスマホ代を楽天ポイントで支払うことができます！
            </TxtMarkerAccent3>
            <br />
            もっとたくさんポイントを貯めるにはどうすればいいのか、また、なぜ楽天モバイルがポイ活に適しているのか、一緒に見ていきましょう。
          </p>

          <DefinitionList className={Utils['Mt-56']}>
            <dt>
              <LabelEmpSingle>おすすめの理由</LabelEmpSingle>
            </dt>
            <dd className={Utils['Mt-32']}>
              <Monotone97Box>
                <TxtEmp01>1.</TxtEmp01>
                <TxtEmp01>ご契約者特典でポイントザクザク貯まる</TxtEmp01>
              </Monotone97Box>
              <div className={Utils['Align-center']}>
                <Picture
                  src={`${imgPath}img-01-pc.png`}
                  width="625"
                  height="179"
                  spSrc={`${imgPath}img-01-sp.png`}
                  spWidth="686"
                  spHeight="578"
                  alt="楽天モバイルをご契約すると、楽天市場でのお買い物ポイントが自動で5倍に"
                />
              </div>
              <p>
                楽天ポイントは、楽天市場でのお買い物時にももちろん貯まりますが、楽天市場にはポイントが
                <TxtEmp02>最大17倍にアップする</TxtEmp02>
                おトクな仕組みがあります！<TxtCap>※</TxtCap>
              </p>
              <p>
                それが、「SPU（スーパーポイントアッププログラム）」で、楽天のサービスを使うほど、一度のお買い物で貯まるポイントが増えていきます。
              </p>
              <p>
                特におトクなのが楽天モバイルで、ご契約後は自動で
                <TxtEmp02>毎日全員ポイント5倍にアップします！</TxtEmp02>
              </p>
              <TxtCap>
                ※達成条件、獲得ポイント上限あり。期間限定ポイントでの付与
              </TxtCap>
            </dd>
            <dd>
              <Monotone97Box>
                <TxtEmp01>2.</TxtEmp01>
                <TxtEmp01>ポイント支払いでもポイントが貯まる</TxtEmp01>
              </Monotone97Box>
              <div className={Utils['Align-center']}>
                <Picture
                  src={`${imgPath}img-02-pc.png`}
                  width="680"
                  height="134"
                  spSrc={`${imgPath}img-02-sp.png`}
                  spWidth="686"
                  spHeight="437"
                  alt="100円分（税別）ご利用につき1ポイント貯まる"
                />
              </div>
              <p>
                ポイ活をしていると、ポイント支払いだとご利用分のポイントはつかないイメージがありますよね。でも、楽天モバイルならポイント支払いでもポイントがまた貯まるんです！
              </p>
            </dd>
            <dd>
              <Monotone97Box>
                <TxtEmp01>3.</TxtEmp01>
                <TxtEmp01>
                  データ高速無制限でも圧倒的低価格だから、ポイント支払いでスマホ代0円に!?
                  <TxtCap>※2</TxtCap>
                </TxtEmp01>
              </Monotone97Box>
              <div className={Utils['Align-center']}>
                <Picture
                  src={`${imgPath}img-03-txt-pc.png`}
                  width="377"
                  height="38"
                  spSrc={`${imgPath}img-03-txt-sp.png`}
                  spWidth="182"
                  spHeight="46"
                  alt="家族割引適用後100円（税別）引きで"
                />
              </div>
              <div className={Utils['Align-center']}>
                <Picture
                  src={`${imgPath}img-03-pc.png`}
                  width="680"
                  height="225"
                  spSrc={`${imgPath}img-03-sp.png`}
                  spWidth="686"
                  spHeight="475"
                  alt="20GB超過後どれだけ使っても無制限※1 で2,880円/月(税込3,168円)、3GB超過後20GBまでは1,880 円/月(税込2,068円) 、3GBまでは880円/月(税込968円) 。毎月のデータ利用量に応じて最適な料金に！"
                />
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※1 公平なサービス提供または環境により速度低下する場合あり
                  ※通話料等別
                </TxtCap>
              </div>
              <p>
                楽天モバイルならデータ高速無制限<TxtCap>※1</TxtCap>
                でも、家族割引き適用で月額2,880円（税込3,168円）！ しかも、
                <TxtMarkerAccent3>
                  使わなければ勝手に安くなるワンプランです！
                </TxtMarkerAccent3>
              </p>
              <p>
                だから、
                <TxtEmp02>
                  貯まったポイントでプラン料金を全額支払えばお支払いを0円にすることも！
                </TxtEmp02>
              </p>
              <div className={Utils['Align-center']}>
                <Picture
                  className={Utils['Mt-pc-16']}
                  src={`${imgPath}img-04-pc.png`}
                  width="391"
                  height="163"
                  spSrc={`${imgPath}img-04-sp.png`}
                  spWidth="680"
                  spHeight="342"
                  alt="ポイント全額支払いで実際のお支払いが0円に"
                />
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※ 1ポイント1円として利用
                </TxtCap>
              </div>
              <p>
                ワンプランの楽天モバイルなら、複雑なプラン選びで悩む必要がないため、携帯電話会社を乗り換えたいけれど、プラン選びに迷っているという方にもおすすめです。
              </p>
              <div className={`${Utils['Align-center']} ${Utils['Mt-8']}`}>
                <ButtonSecondaryLarge
                  as="a"
                  href={`/fee/saikyo-plan/?l-id=ad_lp_contents_${directory}_saikyo-plan`}
                >
                  料金プランの詳細はこちら
                </ButtonSecondaryLarge>
              </div>
            </dd>
          </DefinitionList>

          <p className={Utils['Mt-64']}>
            この機会に楽天モバイルに乗り換えて、ポイ活でスマホ代をもっとおトクにしてみてはいかがでしょうか？
          </p>
          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <ButtonPrimaryLarge
              as="a"
              href={`/guide/application/?lid-r=ad_lp_contents_${directory}_guide_application`}
              className={Utils['Py-sp-8']}
            >
              新規／乗り換え（MNP）
              <br className={Utils['Show-oxx']} />
              お申し込み
            </ButtonPrimaryLarge>
          </div>

          <TxtCap as="ul" className={Utils['Mt-64']}>
            <li>
              ※1 公平なサービス提供または環境により速度低下する場合あり
              ※通話料等別
            </li>
            <li>
              ※2圧倒的低価格とは、全キャリアのデータ無制限プランで比較した場合、最も安いこと。2024年2月時点。自社調べ
            </li>
          </TxtCap>

          <RakutenInfo
            className={`${Utils['Mt-72']} ${Utils['Mt-pc-56']}`}
            directory={directory}
          />
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default AdLpContents8
