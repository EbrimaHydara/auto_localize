import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { LinkIconAfter } from '@components/atoms/Link'
import { TxtSize } from '@components/atoms/Txt'
import { IconChevronRight } from '@components/icons'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'

const UserVoiceWrap = styled.div`
  :nth-of-type(n + 2) {
    margin-top: 16px;
  }
  padding: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 110px auto;
  ${mixins.mq.MinL} {
    grid-template-columns: 140px auto;
  }
  border: 1px solid ${props => props.theme.colors.monotone75};
  ${mixins.mq.MinL} {
    padding: 16px 24px;
    gap: 24px;
  }
  .profile {
    text-align: center;
  }
  .contents {
    align-self: center;
  }
`

export interface UserVoiceData {
  id: string
  profile: string
  text: JSX.Element
}
export interface UserVoiceProps {
  className?: string
  directory: string
  userVoiceData: UserVoiceData[]
}

export const UserVoiceSection: React.FC<UserVoiceProps> = props => {
  const theme = useContext(ThemeContext)
  return (
    <div className={props.className}>
      {props.userVoiceData.map(v => (
        <UserVoiceWrap key={v.id}>
          <div className="profile">
            <picture>
              <source
                media={`(max-width:${theme.max.m})`}
                srcSet={`${assets}img/uservoice/avator-${v.id}.png`}
                width="92"
                height="92"
              />
              <img
                src={`${assets}img/uservoice/avator-${v.id}.png`}
                width="108"
                height="108"
                alt=""
              />
            </picture>
            <TxtSize as="p" size="ss" className={Utils['Mt-8']}>
              {v.profile}
            </TxtSize>
          </div>
          <div className="contents">
            {v.text}
            <p className={`${Utils['Mt-8']} ${Utils['Align-rrl']}`}>
              <LinkIconAfter
                href={`/uservoice/${v.id}/?l-id=ad_lp_contents_${props.directory}_uservoice_${v.id}`}
              >
                続きを読む
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </div>
        </UserVoiceWrap>
      ))}
    </div>
  )
}
