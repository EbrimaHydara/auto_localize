import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  directory: string
  lazy?: boolean
}
export const KidsKeitaiBnr = ({ className, directory, lazy }: Props) => {
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
        href={`/guide/kids-ke-tai/?l-id=uservoice_${directory}_guide_kids-ke-tai`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/guide-kids-ke-tai-343-185.png`}
            width="686"
            height="370"
          />
          <img
            src={`${assets}img/bnr/guide-kids-ke-tai-1032-160.png`}
            width="1032"
            height="160"
            alt="楽天モバイルならキッズ携帯や学生のスマホデビューにもおトクであんしん！ キッズ携帯におすすめな理由を見る"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
