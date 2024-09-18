import React from 'react'
import { assets } from '@components/utils/assets'

export interface StoreButtonProps {
  url?: string
  alt?: string
  className?: string
}

export const StoreButtonGooglePlay = (props: StoreButtonProps) => {
  const { url, alt, className } = props
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img
        src={`${assets}img/common/btn-googleplay.png`}
        width="149"
        alt={alt}
      />
    </a>
  )
}

export const StoreButtonAppStore = (props: StoreButtonProps) => {
  const { url, alt, className } = props
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img src={`${assets}img/common/btn-appstore.png`} width="149" alt={alt} />
    </a>
  )
}
