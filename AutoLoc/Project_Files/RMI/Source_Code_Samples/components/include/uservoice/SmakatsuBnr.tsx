import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  directory: string
}
export const SmakatsuBnr = ({ className, directory }: Props) => {
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
        href={`https://network.mobile.rakuten.co.jp/sumakatsu/?l-id=uservoice_${directory}_media_gnavi`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/media-mobile-328-185.png`}
            width="656"
            height="371"
          />
          <img
            src={`${assets}img/bnr/media-mobile-1032-160.png`}
            width="1032"
            height="160"
            alt="スマ活 わかる！スマホ活用術"
            loading="lazy"
          />
        </picture>
      </BannerHover>
    </div>
  )
}
