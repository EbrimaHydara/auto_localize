import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  param?: string
}
export const TurboBnr = ({ className, param }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover href={`/internet/turbo/campaign/six-month-free/${param}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-turbo-343-108-240221.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-turbo-1032-160-240221.png`}
            width="1032"
            height="160"
            alt="Rakuten Turbo 工事不要！すぐに使えるおうちのWi-Fi プラン料金：6カ月0円 さらに、スマホとセットで使うと20,000ポイント還元！※製品代金 別途41,580円 ※プラン料金7カ月目以降4,840円 ※その他条件あり"
            loading="lazy"
          />
        </picture>
      </BannerHover>
    </div>
  )
}
