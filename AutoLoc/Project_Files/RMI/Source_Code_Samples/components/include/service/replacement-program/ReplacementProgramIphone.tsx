import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { ButtonRegular, ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { LinkNormal } from '@components/atoms/Link'
import { BannerHover } from '@components/atoms/Banner'
import { IphoneList } from '@components/include/service/replacement-program/productlist/IphoneList'
import { RecomendOption } from '@components/include/service/replacement-program/productlist/Styles'

type Props = {
  className?: string
}

export const ReplacementProgramIphone: React.FC<Props> = ({ className }) => {
  const theme = useContext(ThemeContext)
  return (
    <section className={`${Utils['Mt-24']} ${Utils['Mt-pc-32']}`}>
      <Heading level="3" className={Utils['Align-center']}>
        <TxtEmp01>
          iPhoneの本体代が
          <span className={`${Utils['Color-primary']}`}>
            全通信キャリアで最安！
          </span>
        </TxtEmp01>
      </Heading>
      <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Align-center']}`}>
        ※2024年3月27日時点。公式オンラインのiPhone本体代金の比較。
      </TxtCap>

      <IphoneList className={Utils['Mt-48']} />

      <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
        <ButtonSecondaryLarge
          as="a"
          href="/product/iphone/?l-id=service_replacement-program_product_iphone"
        >
          iPhone一覧を見る
        </ButtonSecondaryLarge>
      </div>
      <TxtCap as="p" className={`${Utils['Mt-24']}`}>
        ※1
        楽天カードのみ。機種変更時に製品のご返却と事務手数料3,300円のお支払いが必要です。製品の状態によって故障費用がかかります。現金販売価格と割賦販売価格（総額）は支払い総額と同額。
        <br />
        ※2 キャンペーンのポイントの詳細は
        <LinkNormal href="/campaign/iphone-point/#detail">こちら</LinkNormal>。
      </TxtCap>

      <section className={Utils['Mt-40']}>
        <Heading level="4" className={Utils['Align-center']}>
          おトクなキャンペーン実施中！
        </Heading>
        <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
          <BannerHover
            href="/campaign/iphone-point/?l-id=service_replacement-program_campaign_iphone-point"
            bgColor={theme.colors.white}
          >
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/bnr/bnr-iphone-point-343-108-240517.png`}
                width="686"
                height="216"
              />
              <img
                src={`${assets}img/bnr/bnr-iphone-point-1032-160-240517.png`}
                width="1032"
                height="160"
                alt="対象iPhoneを一括または24回払いで購入＆楽天モバイルへ初めて申し込み＆他社から電話番号そのまま乗り換えで最大32,000円相当おトク！"
                loading="lazy"
              />
            </picture>
          </BannerHover>
        </div>
      </section>

      <RecomendOption as="section" className={Utils['Mt-40']}>
        <Heading level="4" className={`${Utils['Align-ccl']} title`}>
          iPhoneをご購入の方におすすめの
          <br className={Utils['Disp-sp']} />
          オプション
        </Heading>
        <div
          className={`${Utils['Mt-16']} ${Utils['Mt-pc-0']} ${Utils['Align-ccl']} icon`}
        >
          <div>
            <img
              src={`${assets}img/product/img-service-applecare.png`}
              width="138"
              height="138"
              alt="故障紛失保証 with AppleCare Services"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={`${assets}img/product/icon-i-cloud.png`}
              width="138"
              height="138"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <p className={`${Utils['Mt-24']} ${Utils['Mt-pc-16']} read`}>
          「故障紛失保証 with AppleCare Services &
          iCloud+」に加入していれば、万が一故障費用が発生する場合も、負担を抑えられる場合があります。
          <br />
          加入できるのはiPhone購入時のみです。製品をカートに追加する際に、同時にお申し込みください。
        </p>
        <div className={`${Utils['Mt-16']} btn`}>
          <ButtonRegular
            as="a"
            href="/service/iphone/applecare-icloud/?l-id=service_replacement-program_service_iphone_applecare-icloud_item"
          >
            保証サービスの詳細を見る
          </ButtonRegular>
        </div>
        <div className={`${Utils['Mt-24']} case`}>
          <div className="case-item">
            <div className="case-title">画面が割れてしまっても...</div>
            <div className={`${Utils['Mt-16']} case-img`}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/service/replacement-program/img-iphone-case1-sp.png`}
                  width={theme.max.m}
                />
                <img
                  src={`${assets}img/service/replacement-program/img-iphone-case1-pc.png`}
                  width="449"
                  height="95"
                  alt="加入時の自己負担金"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          <div className="case-item">
            <div className="case-title">スマホを紛失してしまった...</div>
            <div className={`${Utils['Mt-16']} case-img`}>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/service/replacement-program/img-iphone-case2-sp.png`}
                  width={theme.max.m}
                />
                <img
                  src={`${assets}img/service/replacement-program/img-iphone-case2-pc.png`}
                  width="449"
                  height="95"
                  alt="加入時の自己負担金"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </RecomendOption>
    </section>
  )
}
