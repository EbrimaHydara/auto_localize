import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  param?: string
}
export const NbaBnr = ({ className, param }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover href={`/campaign/nba/${param}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-nba-375-192-231122.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-nba-1032-300-231122.png`}
            width="1032"
            height="160"
            alt="Rakuten Mobile Rakuten最強プランご利用でNBA全試合無料"
            loading="lazy"
          />
        </picture>
      </BannerHover>
    </div>
  )
}
