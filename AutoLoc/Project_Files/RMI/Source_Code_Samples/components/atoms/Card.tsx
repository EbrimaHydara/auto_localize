import styled from 'styled-components'

export const CardNormal = styled.a`
  display: block;
  position: relative;
  width: 100%;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.monotone88};
  box-sizing: border-box;
  box-shadow: 0 4px ${props => props.theme.colors.monotone88};
  text-decoration: none;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: transparent ${props => props.theme.colors.pink100}
      ${props => props.theme.colors.pink100} transparent;
    content: '';
  }
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.colors.black};
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone97};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone93};
  }
`

export const CardEmphasis1 = styled(CardNormal)`
  border-color: #eddbe5;
  box-shadow: 0 4px #eddbe5;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pink5};
  }
  &:active {
    background-color: ${props => props.theme.colors.pink10};
  }
`

export const CardEmphasis2 = styled(CardNormal)`
  border-color: #edebc9;
  box-shadow: 0 4px #edebc9;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.yellow};
  }
  &:active {
    background-color: #fcfacf;
  }
`

export const CardDarkBg = styled(CardNormal)`
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.uiBlue10};
  }
  &:active {
    background-color: ${props => props.theme.colors.uiBlue20};
  }
`
