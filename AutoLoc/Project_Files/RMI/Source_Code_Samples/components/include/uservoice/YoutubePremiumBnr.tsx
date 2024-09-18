import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  directory: string
  lazy?: boolean
  serialNumber?: string
}
export const YoutubePremiumBnr = ({
  className,
  directory,
  lazy,
  serialNumber,
}: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover
        href={`/campaign/youtubepremium/?l-id=uservoice_${directory}_campaign_youtubepremium${
          serialNumber && '_' + serialNumber
        }`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/youtube-premium-328-185-230510.png`}
            width="656"
            height="370"
          />
          <img
            src={`${assets}img/bnr/youtube-premium-1032-160-230510.png`}
            width="1032"
            height="160"
            alt="YouTube Premium"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
