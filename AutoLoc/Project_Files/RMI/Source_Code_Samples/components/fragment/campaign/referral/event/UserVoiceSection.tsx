import React from 'react'
import styled from 'styled-components'
import { LinkIconAfter } from '@components/atoms/Link'
import { TxtEmp02, TxtEmp01 } from '@components/atoms/Txt'
import { IconChevronRight } from '@components/icons'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'

const UserVoiceWrap = styled.div`
  border: 1px solid ${props => props.theme.colors.monotone88};
  box-shadow: 0 4px ${props => props.theme.colors.monotone88};
  background: ${props => props.theme.colors.white};
  display: flex;
  gap: 20px 24px;
  align-items: center;
  padding: 28px 32px;
  ${TxtEmp02} {
    font-size: 18px;
  }
  ${mixins.mq.MaxM} {
    flex-flow: column;
    padding: 24px;
    ${TxtEmp02} {
      text-align: center;
    }
  }
`
const UserVoiceName = styled.p`
  font-size: 14px;
  font-feature-settings: 'palt' on;
`

interface UserVoiceProps {
  img: string
  name: string
  text: string
  link: string
  className: string
}

export const UserVoiceSection: React.FC<UserVoiceProps> = props => {
  return (
    <UserVoiceWrap className={props.className}>
      <div>
        <img src={props.img} width="134" height="133" alt="" loading="lazy" />
      </div>
      <div>
        <TxtEmp02 as="p">お客様の声 </TxtEmp02>
        <UserVoiceName className={Utils['Mt-24']}>{props.name}</UserVoiceName>
        <TxtEmp01 as="p" className={Utils['Mt-8']}>
          {props.text}
        </TxtEmp01>
        <div className={`${Utils['Mt-24']} ${Utils['Align-ccl']}`}>
          <LinkIconAfter href={props.link}>
            続きを読む
            <IconChevronRight />
          </LinkIconAfter>
        </div>
      </div>
    </UserVoiceWrap>
  )
}
