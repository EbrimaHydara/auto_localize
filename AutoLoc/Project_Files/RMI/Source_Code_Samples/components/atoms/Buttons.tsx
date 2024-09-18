import styled from 'styled-components'

export const ButtonBasic = styled.button<{ preIcon?: boolean }>`
  display: inline-block;
  width: 100%;
  position: relative;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.base};
  font-weight: bold;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 4px;
  line-height: 1.4;
  border-radius: 50px;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: ${props => props.theme.min.l}) {
    width: auto;
  }
  span {
    display: inline-block;
  }
  &[aria-disabled='true'] {
    background-color: ${props => props.theme.colors.monotone93};
    border-color: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.monotone75};
    box-shadow: none;
    pointer-events: none;
  }
  &[aria-disabled='false'] {
    cursor: pointer;
  }
  .icon-end {
    margin-left: 4px;
  }
  &::before {
    content: '';
    display: ${({ preIcon }) => (preIcon ? 'inline-block' : 'none')};
    width: 1.8em;
  }
  > .icon {
    position: absolute;
    text-indent: -1.2em;
    top: 50%;
    margin-top: -0.5em;
    font-size: ${props => props.theme.fonts.l};
    top: 50%;
  }
`

export const ButtonRegular = styled(ButtonBasic)`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone40};
  color: ${props => props.theme.colors.monotone30};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    border: 1px solid ${props => props.theme.colors.monotone40};
    color: ${props => props.theme.colors.monotone30};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    border: 1px solid ${props => props.theme.colors.monotone40};
    outline: 0;
    box-shadow: none;
  }
`
export const ButtonRegularLarge = styled(ButtonRegular)`
  font-size: 18px;
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  line-height: 1.4;
  span.text-sub {
    display: block;
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    width: 100%;
  }
`

export const ButtonPrimary = styled(ButtonBasic)`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pink_80};
    border: 1px solid ${props => props.theme.colors.pink_80};
    color: ${props => props.theme.colors.white};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.pink_60};
    border: 1px solid ${props => props.theme.colors.pink_60};
    color: ${props => props.theme.colors.white};
    outline: 0;
    box-shadow: none;
  }
  min-width: 160px;
`
export const ButtonPrimaryLarge = styled(ButtonPrimary)`
  font-size: 18px;
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  line-height: 1.4;
  span.text-sub {
    display: block;
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    width: 100%;
  }
`

export const ButtonSecondary = styled(ButtonBasic)`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pink20};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.pink40};
    outline: 0;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    box-shadow: none;
  }
`
export const ButtonSecondaryLarge = styled(ButtonSecondary)`
  font-size: 18px;
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  line-height: 1.4;
  span.text-sub {
    display: block;
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    width: 100%;
  }
`
