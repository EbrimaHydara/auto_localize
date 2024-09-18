import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'
interface ServiceCheckBnrProps {
  l_id?: string
}
export const ServiceCheckBnr = (props: ServiceCheckBnrProps) => {
  const theme = useContext(ThemeContext)
  const { l_id } = props
  return (
    <BannerHover href={`/service/check/${l_id ? '?l-id=' + l_id : ''}`}>
      <picture>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet="/img/bnr/bnr-service-check-328-185.png"
        />
        <img
          src="/img/bnr/bnr-service-check-1032-160.png"
          width="1032"
          alt="スマホ生活をより快適に! オプションサービス診断"
        />
      </picture>
    </BannerHover>
  )
}
