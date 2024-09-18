import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  param?: string
}
export const ReportCardBnr = ({ className, param }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover href={`/ad/reportcard/${param}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-reportcard-343-108-240405.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-reportcard-1032-160-240405.png`}
            width="1032"
            height="160"
            alt="みんなに聞いた！楽天モバイル通信簿"
            loading="lazy"
          />
        </picture>
      </BannerHover>
    </div>
  )
}
