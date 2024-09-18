import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}

export const EntrySupportBnrHelf = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover href={`/guide/application-support/?l-id=${lid}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-entry-support-343-108-230922.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-entry-support-504-158-230922.png`}
            alt="電話またはビデオ通話※で相談しながらお手続きできるお申し込みサポート　※製品購入のみは対象外 ※Zoomアプリをダウンロードする必要があります。"
            width="504"
            height="158"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
