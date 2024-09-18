import styled from 'styled-components'

export const ButtonLinkNormal = styled.button`
  color: ${props => props.theme.colors.link};
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:focus {
    color: ${props => props.theme.colors.linkFocus};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:active {
    color: ${props => props.theme.colors.linkActive};
    text-decoration: none;
  }
`

export const ButtonLinkNormalWhite = styled(ButtonLinkNormal)`
  color: ${props => props.theme.colors.white};
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};
  }
`

export const ButtonLinkIconAfter = styled(ButtonLinkNormal)`
  &:active {
    text-decoration: none;
  }
  > span {
    color: ${props => props.theme.colors.primary};
    margin-right: 5px;
    padding-left: 4px;
    transform: translateY(10%);
    &::before {
      display: inline-block;
      font-size: 16px;
    }
  }
`

export const ButtonLinkIconAfterWhite = styled(ButtonLinkIconAfter)`
  color: ${props => props.theme.colors.white};
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};
  }
  > span {
    color: ${props => props.theme.colors.white};
  }
`

export const ButtonLinkIconBefore = styled(ButtonLinkNormal)`
  display: table;
  > span {
    display: table-cell;
    &:first-child {
      color: ${props => props.theme.colors.primary};
      padding-right: 4px;
      &::before {
        display: inline-block;
      }
    }
  }
`
export const ButtonLinkList = styled.ul`
  > li {
    border-bottom: 1px solid ${props => props.theme.colors.monotone75};
    &:first-child {
      border-top: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
`

export const ButtonLinkListItem = styled.button`
  width: 100%;
  padding: 1em 2em 1em 1em;
  position: relative;
  color: ${props => props.theme.colors.link};
  text-align: left;
  text-decoration: none;
  > span {
    color: ${props => props.theme.colors.primary};
    position: absolute;
    top: 50%;
    right: 16px;
    margin-top: -0.5em;
    margin-left: 4px;
    vertical-align: middle;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: none;
    background-color: ${props => props.theme.colors.monotone97};
  }
  @media screen and (min-width: 769px) {
    > span {
      position: static;
      vertical-align: -0.02em;
    }
  }
`

export const ButtonLinkHorizontal = styled.ul`
  margin-top: -8px;
  > li {
    display: inline-block;
    margin-top: 8px;
  }
`

export const ButtonLinkHorizontalItem = styled(ButtonLinkNormal)`
  &::after {
    content: '';
    margin-right: 1em;
    padding-right: 1em;
    border-right: 1px solid ${props => props.theme.colors.monotone88};
  }
`
