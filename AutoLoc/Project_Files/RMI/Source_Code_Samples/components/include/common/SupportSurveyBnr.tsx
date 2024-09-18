import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}

export const SupportSurveyBnr = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover href={`/campaign/support-survey/?l-id=${lid}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-support-survey-328-185.png`}
            width="636"
            height="370"
          />
          <img
            src={`${assets}img/bnr/bnr-support-survey-1032-160.png`}
            alt="楽天モバイルをご利用中の方限定 お客様サポートページのご意見聞かせて！キャンペーン 抽選で100名様にアンケートに答えると1,500ポイントプレゼント！"
            width="1032"
            height="160"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
