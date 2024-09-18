import { useContext } from 'react'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'
import { ThemeContext } from 'styled-components'

type Props = {
  className?: string
  url: string
  lazy?: boolean
}
export const StartPointBnr = ({ className, url, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover href={url}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-start-point-504-158-231211.png`}
            width="1008"
            height="316"
          />
          <img
            src={`${assets}img/bnr/bnr-start-point-1032-160-231211.png`}
            alt="スマホトク得乗り換えキャンペーン！最大12,000円相当分おトク！"
            width="1032"
            height="160"
            loading={lazy ? 'lazy' : undefined}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
