import type { NextPage } from 'next'
import React, {
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtNormal, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter } from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { Checkbox } from '@components/atoms/Checkbox'
import { IconArrowDown, IconNewTabLine } from '@components/icons'
import { ButtonLinkNormal } from '@components/atoms/ButtonLink'

const CheckListWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 1032px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-block: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
  }
`
const Kv = styled(Heading)`
  ${mixins.mq.MinL} {
    padding-block: 20px;
    text-align: center;
  }
`
const KvRead = styled.p`
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: center;
  background-color: #fff200;
`
const EntryButton = styled.div`
  margin-inline: auto;
  background-color: ${props => props.theme.colors.pink5};
  padding: 24px;
  max-width: 1032px;
  width: 90%;
  text-align: center;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`
const Btn = styled(ButtonSecondaryLarge)`
  padding: 16px 0;
  border-width: 2px;
  font-size: ${props => props.theme.fonts.m};
  color: ${props => props.theme.colors.black};
  &:hover,
  &:active,
  &:focus {
    opacity: 0.6;
    border-width: 2px;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    outline: none;
    box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
  }
`
const Arw = styled.span`
  margin-right: 22px;
  margin-bottom: 1px;
  position: relative;
  display: inline-block;
  &::before,
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    height: 15px;
  }
  &::before {
    left: 0;
    width: 15px;
    border: 3px solid ${props => props.theme.colors.primary};
    border-left: 0;
    border-bottom: 0;
    transform: rotate(135deg);
  }
  &::after {
    left: 6px;
    width: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`
const EntryInfo = styled(InfoboxBorder)`
  margin-top: 16px;
  padding: 10px 20px;
  height: 270px;
  overflow: auto;
`
const ButtonBox = styled.div`
  margin-top: 24px;
  ${mixins.mq.MaxM} {
    margin-top: 16px;
  }
`

const ServiceReplacementprogramIchibaentryiphone: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイル買い替え超トクプログラムで購入する（iPhone）'
  const directories = [{ path: '/service/', label: '' }]

  const [isValidated, setIsValidated] = useState(false)
  const checkTerms = useCallback((checked?: boolean | undefined) => {
    if (checked) {
      setIsValidated(true)
    } else {
      setIsValidated(false)
    }
  }, [])

  const historyBtnRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const referrer = document.referrer
    if (historyBtnRef.current) {
      if (referrer.match('https://item.rakuten.co.jp/')) {
        historyBtnRef.current.onclick = function (e) {
          e.preventDefault()
          window.history.back()
        }
      } else {
        historyBtnRef.current.href =
          'https://www.rakuten.ne.jp/gold/rakutenmobile-store/'
      }
    }
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイル買い替え超トクプログラムでiPhoneを購入すると、本体代が最大半額分支払い不要に。さらに、対象iPhone購入＋楽天モバイル初めて申し込み＆他社から電話番号そのまま乗り換えで最大12,000ポイント還元！※機種変更には事務手数料3,300円がかかるほか条件あり。楽天モバイル買い替え超トクプログラムは、楽天モバイル公式サイトでのご購入時にご利用いただけます。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader />
        <Kv level="1">
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/service/replacement-program/ichiba-entry-iphone/kv-sp-240401.png`}
              width={theme.max.m}
            />
            <img
              src={`${assets}img/service/replacement-program/ichiba-entry-iphone/kv-pc-231222.png`}
              width="697"
              height="248"
              alt="プランの申し込みがなくてもOK 楽天モバイル買い替え超トクプログラム 最新スマホ本体代最大半額分支払い不要※1"
            />
          </picture>
        </Kv>
        <KvRead className={Utils['Disp-pc']}>
          <img
            src={`${assets}img/service/replacement-program/ichiba-entry-iphone/kv-pc-catch-240401.png`}
            width="838"
            height="112"
            alt="さらに、対象iPhone購入＋楽天モバイル初めて申し込み＆他社から電話番号そのまま乗り換えで最大12,000ポイント還元!※2"
          />
        </KvRead>
        <SystemContainer className={Utils['Mt-16']}>
          <TxtCap as="p">
            ※1
            ご利用のiPhoneを返却することで、最大24回分のお支払いが不要です。楽天カードのみ。返却に関しては、事務手数料3,300円がかかります。
            <br />
            ※2
            「Rakuten最強プラン（データタイプ）」は対象外。キャンペーンによってポイントの付与時期・有効期間が異なり、分割して付与されるポイントもございます。また、ポイントは期間限定ポイントとして付与いたします。必ずキャンペーンルールをご確認ください。
          </TxtCap>
        </SystemContainer>
        <EntryButton className={Utils['Mt-24']}>
          <Btn
            as="a"
            href="#application"
            onClick={e => anchorCallback(e, 'application')}
            data-ratid="replacement-program_ichiba-entry-iphone_anchor_application-01"
            data-ratevent="click"
            data-ratparam="all"
          >
            <Arw />
            <span>今すぐお申し込み</span>
          </Btn>
        </EntryButton>
        <SystemContainer className={Utils['Mt-64']}>
          <Heading
            level="2"
            ratId="replacement-program_ichiba-entry-iphone_scroll-01_iphone_upgrade-program"
            ratEvent="appear"
            className={Utils['Align-center']}
          >
            楽天モバイル買い替え
            <br className={Utils['Disp-sp']} />
            超トクプログラムとは
          </Heading>
          <p className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
            iPhoneを本プログラム（48回払い）で購入し、25カ月目以降に当社が回収すると残りのお支払いが不要となり、
            <br className={Utils['Show-xxo']} />
            おトクに最新の製品に乗り換えできるサービスです。
          </p>
          <TxtCap
            as="p"
            className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
          >
            ※「iPhoneアップグレードプログラム」は、2023年8月31日をもって「楽天モバイル買い替え超トクプログラム」に名称が変更になりました。サービス内容に変更はございません。
          </TxtCap>
        </SystemContainer>

        <SystemContainer>
          <Heading
            level="2"
            className={`${Utils['Mt-40']} ${Utils['Mt-pc-64']} ${Utils['Align-center']}`}
          >
            <TxtNormal className={Utils['Weight-normal']}>
              乗り換えの方も機種変更の方も申し込める
            </TxtNormal>
            <br />
            <span
              data-ratid="replacement-program_ichiba-entry-iphone_scroll-02_feature-01"
              data-ratevent="appear"
              data-ratparam="all"
            >
              毎月の負担を少なく、
            </span>
            <br className={Utils['Disp-sp']} />
            おトクに最新の製品へ
          </Heading>
          <div className={Utils['Mt-32']}>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/service/replacement-program/point-img-sp-230831.png`}
                width={theme.max.m}
              />
              <img
                src={`${assets}img/service/replacement-program/point-img-pc-230831.png`}
                width="1032"
                height="477"
                alt="乗り換えの方も機種変更の方も申し込める毎月の負担を少なく、おトクに最新の製品へ"
                loading="lazy"
              />
            </picture>
          </div>
          <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
            <LinkIconAfter
              href="#application"
              onClick={e => anchorCallback(e, 'application')}
              data-ratid="replacement-program_ichiba-entry-iphone_anchor_application-02"
              data-ratevent="click"
              data-ratparam="all"
            >
              お申し込みに進む
              <IconArrowDown />
            </LinkIconAfter>
          </div>
        </SystemContainer>

        <SystemContainer>
          <Heading
            level="2"
            className={`${Utils['Mt-64']} ${Utils['Align-center']}`}
          >
            お支払いイメージ
          </Heading>
          <TxtEmp01
            as="p"
            className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
            data-ratid="replacement-program_ichiba-entry-iphone_scroll-03_feature-02"
            data-ratevent="appear"
            data-ratparam="all"
          >
            たとえば、iPhone 15 128GBを
            <TxtEmp02>買い替え超トクプログラム</TxtEmp02>
            で購入した場合
          </TxtEmp01>
          <TxtCap
            as="p"
            className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
          >
            月々の支払分は2,745円。25カ月目に製品を当社が回収することで、65,920円分のお支払いが不要で、最新の製品に機種変更ができます。
          </TxtCap>
          <div className={Utils['Mt-24']}>
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/service/replacement-program/pay-img-sp-240221.png`}
                width={theme.max.m}
              />
              <img
                src={`${assets}img/service/replacement-program/pay-img-pc-240221.png`}
                width="1032"
                height="407"
                alt="お支払いイメージ たとえば、iPhone 15 128GBを買い替え超トクプログラムで購入した場合"
                loading="lazy"
              />
            </picture>
          </div>
          <TxtCap as="p" className={Utils['Mt-16']}>
            ※ 上記の参考例はiPhone 15
            128GBの場合：現金販売価格および割賦販売価格（総額）131,800円、頭金0円、支払回数48回、支払期間48カ月、実質年率0％。本プログラム対象製品への機種変更かつ、本プログラムで購入した製品を当社が回収した場合です。2024年2月21日時点の価格です。
            <br />
            ※
            お使いいただいた製品を当社が回収する際は、事務手数料3,300円がかかります。
            <br />
            ※
            ご返却後、楽天モバイルにて製品の状態確認を行います。故障や破損などがある場合、故障費用22,000円（不課税）のお支払いが必要です。
            <br />
            ※
            製品をご返却いただけない場合、または、ご返却いただいた製品に問題がある場合、残債の全額お支払いが必要になる場合があります。
            <br />※
            機種変更の可能期間は、25カ月目以降、47カ月目までです。機種変更が可能な製品は、本プログラム対象製品に限ります。
          </TxtCap>
        </SystemContainer>

        <SystemContainer>
          <Heading
            id="application"
            level="2"
            className={`${Utils['Mt-64']} ${Utils['Align-center']}`}
            ratId="replacement-program_ichiba-entry-iphone_scroll-04_application"
            ratEvent="appear"
          >
            お申し込み
          </Heading>

          <p className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
            楽天モバイル買い替え超トクプログラムは、楽天モバイル公式サイトからのご購入の場合にご利用いただけます。
            <br />
            サービス内容をご確認の上、楽天モバイル公式サイトからご購入・お申し込みください。
          </p>
        </SystemContainer>

        <SystemContainer>
          <CheckListWrapper
            className={`${Utils['Mt-16']} ${Utils['Mt-pc-24']}`}
          >
            <TxtEmp01 as="p" className={Utils['Align-center']}>
              下記項目に同意・チェックをお願いします。
            </TxtEmp01>
            <TxtCap as="p" className={Utils['Align-center']}>
              <TxtEmp02>
                ※チェックをいただきますと、遷移ボタンが有効になります。
              </TxtEmp02>
            </TxtCap>
            <EntryInfo>
              <p>
                楽天モバイル公式サイトでのご購入分については、楽天市場での特典は適用されません。以下をご了承の上、楽天モバイル公式サイトでのご購入をご検討ください。
                <br />
                <TxtEmp02>
                  ・楽天市場で開催されるキャンペーン（お買い物マラソン、ショップ買い回り等）は適用されません。
                  <br />
                  ・楽天市場でのお買い物によるポイント付与（SPU等）はございません。{' '}
                  <br />
                  ・楽天市場のクーポンはご利用いただけません。 <br />
                  ・楽天市場の購入履歴には掲載されません。
                  <br />
                  ・楽天モバイル公式
                  楽天市場店のキャンペーンは適用されません。楽天モバイル公式サイトでのキャンペーン（ポイントバック、値引き等）が適用になります。
                </TxtEmp02>
              </p>
              <p className={Utils['Mt-16']}>
                お客様の購買情報（過去の購買情報を含みます）は、楽天モバイル株式会社に提供され、以下のプライバシーポリシーに則り、キャンペーン適用、不正行為防止等の目的で利用されます。
                <br />
                <LinkIconAfter
                  href="https://corp.mobile.rakuten.co.jp/guide/privacy/policy/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  楽天モバイル個人情報保護方針を見る
                  <IconNewTabLine />
                </LinkIconAfter>
              </p>
              <p className={Utils['Mt-16']}>
                本ページの「製品選択に進む」ボタンから遷移いただきますと、自動的に以下のキャンペーンエントリー扱いとなり、キャンペーンエントリー履歴にも掲載されます。
                <br />
                キャンペーン名：【楽天モバイル】買い替え超トクプログラムのご利用案内
                <br />
                ※楽天会員ログインが必要です。
              </p>
            </EntryInfo>
          </CheckListWrapper>
        </SystemContainer>

        <SystemContainer>
          <div className={Utils['Align-center']}>
            <Checkbox
              text="上記内容を理解し、同意しました。"
              id="chk1"
              value="terms"
              onChangeCheck={checked => checkTerms(checked)}
            />
          </div>
          <ButtonBox className={Utils['Align-center']}>
            <p>楽天モバイル公式サイト お申し込み画面に移動します。</p>
            <div className={Utils['Mt-16']}>
              <ButtonPrimaryLarge
                as="a"
                id="entryBtn"
                href="https://oubo.rakuten.co.jp/apply/rmobile/ichibaupgradeprogram202210"
                aria-disabled={isValidated ? false : true}
                data-ratid="replacement-program_ichiba-entry-iphone_application"
                data-ratevent="click"
                data-ratparam="all"
              >
                製品選択に進む
              </ButtonPrimaryLarge>
            </div>
          </ButtonBox>
          <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
            <ButtonLinkNormal as="a" ref={historyBtnRef}>
              戻る（楽天モバイル公式 楽天市場店のページに戻ります）
            </ButtonLinkNormal>
          </div>
        </SystemContainer>
        <GlobalFooter
          copyrightSimple
          breadcrumbsItem={[]}
          className={`${Utils['Mt-32']} ${Utils['Mt-pc-64']}`}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceReplacementprogramIchibaentryiphone
