import { useContext } from 'react'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'
import { ThemeContext } from 'styled-components'

type Props = {
  className?: string
  directory: string
  lazy?: boolean
}
export const FreeCallBnr = ({ className, directory, lazy }: Props) => {
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
        href={`/service/standard-free-call/?l-id=uservoice_${directory}_service_standard-free-call`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/15min-standard-free-call-375-192.png`}
            width="750"
            height="384"
          />
          <img
            src={`${assets}img/bnr/15min-standard-free-call-1032-160.png`}
            width="1032"
            height="160"
            alt="OS標準アプリでの1回15分以内の国内通話がかけ放題、国内SMSの送受信が使い放題になるサービスが、3カ月無料で使える！"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
