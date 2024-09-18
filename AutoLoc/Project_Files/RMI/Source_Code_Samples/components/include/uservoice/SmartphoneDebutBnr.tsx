import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  param?: string
}
export const SmartphoneDebutBnr = ({ className, param }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover href={`/guide/kids-ke-tai/${param}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-debut-504-158-231102.png`}
            width="504"
            height="158"
          />
          <img
            src={`${assets}img/bnr/bnr-debut-1032-160-231102.png`}
            width="1032"
            height="160"
            alt="楽天モバイルならキッズ・学生のスマホデビューにもおトクであんしん！"
            loading="lazy"
          />
        </picture>
      </BannerHover>
    </div>
  )
}
