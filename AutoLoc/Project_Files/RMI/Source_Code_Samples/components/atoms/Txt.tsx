import styled, { css } from 'styled-components'
import { fontRakutenSans } from '@styles/fonts'

export const TxtNormal = styled.span`
  font-size: ${props => props.theme.fonts.base};
  line-height: 1.5;
`
export const TxtWeightNormal = styled.span`
  font-weight: normal;
`
export const TxtWeightBold = styled.span`
  font-weight: bold;
`

export const TxtSize = styled(TxtNormal)<{ size: string }>`
  ${props =>
    props.size === 'xl' &&
    `
      font-size: ${props.theme.fonts.xl};
      line-height: 1.3;
  `}
  ${props =>
    props.size === 'll' &&
    `
      font-size: ${props.theme.fonts.ll};
      line-height: 1.4;
    `}
  ${props =>
    props.size === 'l' &&
    `
    font-size: ${props.theme.fonts.l};
    line-height: 1.4;
  `}
  ${props =>
    props.size === 'm' &&
    `
    font-size: ${props.theme.fonts.m};
    line-height: 1.4;
  `}
  ${props =>
    props.size === 's' &&
    `
    font-size: ${props.theme.fonts.s};
    line-height: 1.5;
  `}
  ${props =>
    props.size === 'ss' &&
    `
    font-size: ${props.theme.fonts.ss};
    line-height: 1.5;
  `}
`

export const TxtCap = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fonts.ss};
  line-height: 1.4;
`

export const TxtEmp01 = styled.span`
  color: ${props => props.theme.colors.textPrimary};
  font-weight: bold;
`

export const TxtEmp02 = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`

export const AlphanumericNormal = styled.span`
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  font-size: ${props => props.theme.fonts.m};
  line-height: 1.26;
`
export const AlphanumericSize = styled(AlphanumericNormal)<{ size: string }>`
  ${props =>
    props.size === 'm' &&
    `
    font-size: calc(${props.theme.fonts.base} * 1.625);
    line-height: 1.16;
  `}
  ${props =>
    props.size === 'l' &&
    `
    font-size: calc(${props.theme.fonts.base} * 2.625);
    line-height: 1.16;
  `}
  ${props =>
    props.size === 'xl' &&
    `
    font-size: calc(${props.theme.fonts.base} * 4);
    line-height: 1;
  `}
`

export const AlphanumericEmp = styled(AlphanumericNormal)<{ n: string }>`
  font-weight: bold;
  ${props =>
    props.n === '01'
      ? `
      color: ${props.theme.colors.textPrimary};
      `
      : `
      color: ${props.theme.colors.primary};
  `}
`

export const TxtError = styled.span`
  color: ${props => props.theme.colors.alertText};
  &[aria-hidden='true'] {
    display: none;
  }
`
const TxtMarkerBase = css`
  font-style: normal;
  font-weight: 700;
`
export const TxtMarker = styled.span`
  background: linear-gradient(
      transparent 80%,
      ${props => props.theme.colors.pink20} 0
    )
    rgba(0, 0, 0, 0);
  ${TxtMarkerBase}
`
export const TxtMarkerAccent3 = styled.span`
  background: linear-gradient(
      transparent 80%,
      ${props => props.theme.colors.accent3} 0
    )
    rgba(0, 0, 0, 0);
  ${TxtMarkerBase}
`
export const PriceNumberFree = styled.span`
  font-family: var(--noto-sans-jp), sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`

type PropsBanzai = {
  className?: string
  children: string | JSX.Element
  isPrimary?: boolean
  setColor?: string
  isBold?: boolean
  setGap?: string
}
const TxtBanzaiWrap = styled.span<{ setColor?: string; setGap?: string }>`
  display: inline-grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: ${props => (props.setGap ? `${props.setGap}px` : '0.15em')};
  &::before,
  &::after {
    content: '';
    width: 1em;
    height: 66.67%;
    background-color: ${props =>
      props.setColor ? props.setColor : props.theme.colors.black};
  }
  &::before {
    clip-path: polygon(0 0, 8% 0, 100% 100%, 92% 100%);
  }
  &.bold::before {
    clip-path: polygon(0 0, 16% 0, 100% 100%, 84% 100%);
  }
  &::after {
    clip-path: polygon(92% 0, 100% 0, 8% 100%, 0 100%);
  }
  &.bold::after {
    clip-path: polygon(84% 0, 100% 0, 16% 100%, 0 100%);
  }
  &.primary {
    &::before,
    &::after {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`
export const TxtBanzai: React.FC<PropsBanzai> = ({
  className,
  children,
  isPrimary,
  setColor,
  isBold,
  setGap,
}) => {
  let classNames = className
  classNames = isPrimary ? `${classNames} primary` : classNames
  classNames = isBold ? `${classNames} bold` : classNames
  return (
    <TxtBanzaiWrap className={classNames} setColor={setColor} setGap={setGap}>
      <span>{children}</span>
    </TxtBanzaiWrap>
  )
}
