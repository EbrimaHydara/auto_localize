import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}

export const GuideProcedureBnr = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover href={`/guide/procedure/?l-id=${lid}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-guide-procedure-343-108-230922.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-guide-procedure-504-158-230922.png`}
            alt="はじめてでも安心！お申し込みガイド ご利用開始までかんたん4ステップでご案内します"
            width="504"
            height="158"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
