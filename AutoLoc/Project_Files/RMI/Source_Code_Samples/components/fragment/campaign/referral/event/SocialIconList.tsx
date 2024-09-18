import React from 'react'
import styled from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

const EventWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 352px;
  margin: auto;
  > li {
    padding: 13px 7px;
  }
`

export interface SocialIconData {
  link: string
  img: string
  alt: string
}
export interface SocialIconProps {
  className?: string
  iconData: SocialIconData[]
}

export const SocialIconList: React.FC<SocialIconProps> = props => {
  return (
    <EventWrap className={props.className}>
      {props.iconData.map(v => (
        <li key={v.img}>
          <BannerHover href={v.link} target="_blank">
            <img
              src={v.img}
              alt={v.alt}
              width="50"
              height="50"
              loading="lazy"
            />
          </BannerHover>
        </li>
      ))}
    </EventWrap>
  )
}
