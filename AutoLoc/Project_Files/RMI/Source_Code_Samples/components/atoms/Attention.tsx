import styled from 'styled-components'
import { IconSignWarningLine, IconSignInfoLine } from '@components/icons'

export const AttentionContainer = styled.div`
  margin: 0 auto;
  max-width: 1032px;
  display: flex;
`

export const AttentionAlert = styled.div`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.alertLightBg};
  & + & {
    padding-top: 0;
  }
`
export const AttentionIconAlert = styled(IconSignWarningLine)`
  margin-right: 4px;
  padding-top: 1px;
  font-size: 18px;
  color: ${props => props.theme.colors.alertText};
`

export const AttentionIconInfo = styled(IconSignInfoLine)`
  margin-right: 4px;
  padding-top: 1px;
  font-size: 18px;
  color: ${props => props.theme.colors.infoText};
`

export const AttentionInfo = styled.div`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.infoBg};
  & + & {
    padding-top: 0;
  }
`

export const AttentionBody = styled.p`
  font-size: 14px;
  a {
    &:hover,
    &:active {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
`
