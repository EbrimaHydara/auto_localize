import { useContext } from 'react'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { BannerHover } from '@components/atoms/Banner'
import { ThemeContext } from 'styled-components'

type Props = {
  className?: string
  url: string
  lazy?: boolean
}
export const TurboOneYear1980Bnr = ({ className, url, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
    <Heading level="3" className={`${Utils['Align-center']} ${Utils['Mb-16']}`}>
    高速＆安定な光回線を
    <br />
    お探しの方へおすすめ
    </Heading>
      <BannerHover href={url}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-turbo-960-360-240124.png`}
            width="960"
            height="360"
          />
          <img
            src={`${assets}img/bnr/bnr-turbo-1900-200-240124.png`}
            alt="楽天ひかり初めてお申し込み＆楽天モバイルご利用で楽天ひかりの月額基本料6カ月0円 ※契約解除料、その他条件あり"
            width="1032"
            height="108"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
