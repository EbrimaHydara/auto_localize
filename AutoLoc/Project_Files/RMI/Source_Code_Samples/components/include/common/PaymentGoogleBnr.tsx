import React, { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}

export const PaymentGoogleBnr = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <BannerHover href={`/campaign/payment-google/?l-id=${lid}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-payment-google-343-108-240201.png`}
            width={theme.max.num.m}
          />
          <img
            src={`${assets}img/bnr/bnr-payment-google-1032-160-240201.png`}
            alt="Android™でのアプリ購入やアプリ内課金が楽天モバイルキャリア決済利用で最大2%ポイント還元"
            width="1032"
            height="160"
            {...(lazy && { loading: 'lazy' })}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
