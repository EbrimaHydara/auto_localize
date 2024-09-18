import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

// mq(Media Query)
const MinS = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (min-width: ${themeContext.min.s})`
}
const MinM = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (min-width: ${themeContext.min.m})`
}
const MinL = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (min-width: ${themeContext.min.l})`
}
const MinCustom = (min: string) => `@media (min-width: ${min})`
const MaxS = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (max-width: ${themeContext.max.s})`
}
const MaxM = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (max-width: ${themeContext.max.m})`
}
const MaxL = () => {
  const themeContext = useContext(ThemeContext)
  return `@media (max-width: ${themeContext.max.l})`
}
const MaxCustom = (max: string) => `@media (max-width: ${max})`
const MinMaxCustom = (min: string, max: string) =>
  `@media (min-width: ${min}) and (max-width: ${max})`

/*
(例)
const LinkList = styled.ul`
  display: flex;
  ${mixins.mq.MinL} {
    display: block;
  }
`
*/

// グリッドに合わせた width の計算
const ColWidth = (col: number, gap: string) =>
  `width: calc((100% - ${gap} * (${col} - 1)) / ${col});`

/*
(例)
const Sample = styled.div`
  ${mixins.col.colWidth(2, '32px')}
`
↓↓↓↓↓
width: calc( ( 100% - 32px * (2 - 1) ) / 2 );
*/

export const mixins = {
  mq: {
    MinS,
    MinM,
    MinL,
    MinCustom,
    MaxS,
    MaxM,
    MaxL,
    MaxCustom,
    MinMaxCustom,
  },
  col: {
    ColWidth,
  },
}
