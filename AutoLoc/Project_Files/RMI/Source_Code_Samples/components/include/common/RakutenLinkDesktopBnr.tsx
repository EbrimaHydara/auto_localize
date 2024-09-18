import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  scid?: string
  lazy?: boolean
}
export const RakutenLinkDesktopBnr = ({ className, scid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover
        href={`https://service.link.link/desktop/${scid && `?scid=${scid}`}`}
        target="_blank"
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-start-point-343-108-240221.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-start-point-1032-160-240221.png`}
            width="1032"
            height="160"
            alt="Rakuten Linkデスクトップ版が登場!"
            {...(lazy && { loading: 'lazy' })}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
