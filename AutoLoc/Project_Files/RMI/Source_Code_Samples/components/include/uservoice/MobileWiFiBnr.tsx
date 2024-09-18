import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  directory: string
  lazy?: boolean
}
export const MobileWiFiBnr = ({ className, directory, lazy }: Props) => {
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
        href={`/campaign/rakuten-wifi-pocket-2b/index.html?l-id=uservoice_${directory}_campaign_rakuten-wifi-pocket-2b`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-220701-rakuten-wifi-pocket-2b-375-192.png`}
            width="750"
            height="348"
          />
          <img
            src={`${assets}img/bnr/bnr-220701-rakuten-wifi-pocket-2b-1032-120.png`}
            width="1032"
            height="120"
            alt="モバイルWi-Fi 実質0円キャンペーン"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
