import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { useMediaQuery } from '~/hooks/useMediaQuery'
import { BannerHover } from '@components/atoms/Banner'

const RecommendList = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  ${mixins.mq.MinM} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`
type RecommendInfoData = {
  url: string
  spUrl?: string
  img: string
  alt: string
}
type Props = {
  className?: string
  data: RecommendInfoData[]
}

export const RecommendInfo: React.FC<Props> = ({ className, data }) => {
  const theme = useContext(ThemeContext)
  const isPc = useMediaQuery(`(min-width: ${theme.min.l})`)
  return (
    <RecommendList className={className}>
      {data.map(item => (
        <li key={item.img}>
          <BannerHover href={item.spUrl && !isPc ? item.spUrl : item.url}>
            <img
              src={`${assets}img/bnr/${item.img}`}
              alt={item.alt}
              width="240"
              height="135"
              loading="lazy"
            />
          </BannerHover>
        </li>
      ))}
    </RecommendList>
  )
}
