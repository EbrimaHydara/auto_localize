import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Utils from '@styles/Utils.module.scss'
import { InfoboxLight } from '@components/atoms/Infobox'
import { LinkNormal } from '@components/atoms/Link'
import {
  IconChevronRight,
  IconSignWarningLine,
  IconSignInfoLine,
} from '@components/icons'
import { Collapse, CollapseCallbackArgs } from 'react-collapse'

const CollapseTrigger = styled.button`
  position: relative;
  width: 100%;
  text-align: center;
  background-color: inherit;
  z-index: 1;
  font-weight: bold;
  &[aria-expanded='true'] {
    padding-bottom: 16px;
    border-bottom: 1px solid ${props => props.theme.colors.divider};
  }
`
const CollapseIcon = styled.span`
  position: absolute;
  top: 2px;
  left: auto;
  transform: translate(-30px, 0);
  width: 22px;
  height: 22px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  > span {
    display: block;
    width: 22px;
    height: 22px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    transition: transform 0.1s ease-in-out;
    position: absolute;
    &.isOpen {
      top: 0;
      transform: rotate(270deg);
    }
    &.isClose {
      top: 1;
      transform: rotate(90deg);
    }
  }
`
const CollapseWrapper = styled.div`
  .important-notices {
    transition: height 600ms;
  }
  .important-notices-content {
    overflow: hidden;
  }
`
const Notice = styled.div`
  display: flex;
`
const NoticeIcon = styled.span`
  margin-right: 4px;
  font-size: 18px;
  > span {
    top: -2px;
  }
`
const NoticeIconAlert = styled(NoticeIcon)`
  color: ${props => props.theme.colors.alertText};
`
const NoticeIconInfo = styled(NoticeIcon)`
  color: ${props => props.theme.colors.infoText};
`
const NoticeBody = styled.p`
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
const theme = {
  collapse: 'important-notices',
  content: 'important-notices-content',
}

interface NoticeItem {
  type: string
  text: string
  url?: string
}

export interface ImportantNoticesProps {
  notices: NoticeItem[]
  isOpened: boolean
  onRest?: (args: CollapseCallbackArgs) => void
  onWork?: (args: CollapseCallbackArgs) => void
}

export const ImportantNotices = (props: ImportantNoticesProps) => {
  const [open, setOpen] = useState(props.isOpened)

  return (
    <InfoboxLight>
      <CollapseTrigger
        aria-expanded={open ? 'true' : 'false'}
        onClick={() => setOpen(v => !v)}
      >
        <CollapseIcon>
          <IconChevronRight className={open ? 'isOpen' : 'isClose'} />
        </CollapseIcon>
        重要なお知らせ
      </CollapseTrigger>
      <CollapseWrapper>
        <Collapse isOpened={open} theme={theme}>
          {props.notices?.map((notice, index) => {
            return (
              <Notice
                key={index}
                className={index > 0 ? Utils['Mt-8'] : Utils['Mt-16']}
              >
                {notice.type === 'alert' && (
                  <NoticeIconAlert>
                    <IconSignWarningLine />
                  </NoticeIconAlert>
                )}
                {notice.type === 'info' && (
                  <NoticeIconInfo>
                    <IconSignInfoLine />
                  </NoticeIconInfo>
                )}
                {notice.url ? (
                  <NoticeBody>
                    <LinkNormal href={notice.url} target="_blank">
                      {notice.text}
                    </LinkNormal>
                  </NoticeBody>
                ) : (
                  <NoticeBody>{notice.text}</NoticeBody>
                )}
              </Notice>
            )
          })}
        </Collapse>
      </CollapseWrapper>
    </InfoboxLight>
  )
}
