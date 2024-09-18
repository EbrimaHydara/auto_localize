import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}

export const EntrySupportBnr = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover href={`/guide/application-support/?l-id=${lid}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/support/bnr-entry-support-375-192.png`}
            width="750"
            height="384"
          />
          <img
            src={`${assets}img/support/bnr-entry-support-1032-160.png`}
            alt="電話またはビデオ通話※で相談しながらお手続きできるお申し込みサポート　※製品購入のみは対象外 ※Zoomアプリをダウンロードする必要があります。"
            width="1032"
            height="160"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
