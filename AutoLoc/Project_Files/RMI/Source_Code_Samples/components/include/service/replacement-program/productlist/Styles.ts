import { Heading } from '@components/atoms/Heading'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const RecomendOption = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  ${mixins.mq.MinL} {
    padding: 24px;
    display: grid;
    grid-template-columns: 304px auto;
    grid-template-rows: repeat(4, minmax(0, auto));
    grid-template-areas:
      'icon title'
      'icon read'
      'icon btn'
      'case case';
    column-gap: 24px;
    align-items: center;
  }
  .title {
    ${mixins.mq.MinL} {
      grid-area: title;
    }
  }
  .icon {
    gap: 28px;
    display: flex;
    justify-content: center;
    ${mixins.mq.MinL} {
      grid-area: icon;
    }
  }
  .read {
    ${mixins.mq.MinL} {
      grid-area: read;
    }
  }
  .btn {
    ${mixins.mq.MinL} {
      grid-area: btn;
    }
  }
  .case {
    display: grid;
    row-gap: 18px;
    ${mixins.mq.MinCustom('625px')} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;
      grid-area: case;
    }
  }
  .case-item {
    padding: 16px;
    border: 1px solid ${props => props.theme.colors.monotone75};
  }
  .case-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
`
export const ProductItemWrap = styled.div`
  display: grid;
  gap: 16px;
  ${mixins.mq.MinM} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const ProductCard = styled.div`
  display: grid;
  grid-template-rows: subgrid; // 空要素があるとsubgridさんは扱いが難しい
  grid-row: span 2;
  gap: 0; // 親のgapを継承する？
  padding: 0 16px 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.monotone88};
  box-shadow: 0 4px ${props => props.theme.colors.monotone88};
`
export const ProductLabelList = styled.ul`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: ${props => props.theme.colors.primary};
  align-items: center;
  &.android {
    padding-top: 16px;
  }
  &:empty {
    height: 0;
  }
  .new,
  .preorder,
  .prerelease,
  .basic,
  .discount {
    margin-top: 8px;
    line-height: 1.5;
    border-radius: 4px;
    font-size: ${props => props.theme.fonts.s};
  }
  &.android {
    .new,
    .preorder,
    .prerelease,
    .basic {
      margin-top: 0;
    }
  }
  .new,
  .preorder,
  .prerelease {
    padding: 4px 16px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }

  .basic,
  .discount {
    padding: 4px 12px;
    background-color: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.alertText};
  }
`
export const ProductMain = styled.section`
  /* margin-top: auto; */
  position: static;
`
export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 85px auto;
  gap: 12px;
  align-items: center;
  min-height: 130px;
  .product-img {
    height: 130px;
  }
`
export const ProductInfoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ProductName = styled(Heading)`
  line-height: 1.16;
  .nametxt {
    font-size: ${props => props.theme.fonts.l};
    line-height: 1.16;
  }
`
export const ProductPriceBox = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .del {
    font-size: ${props => props.theme.fonts.base};
    text-decoration-line: line-through;
  }
  .size-26 {
    font-size: 26px;
  }
`
export const UpgradeProgram = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 8px;
  .fee {
    padding: 8px;
    display: grid;
    column-gap: 2px;
    grid-template-columns: auto auto;
    background-color: ${props => props.theme.colors.white};
    align-items: center;
  }
  .payment48 {
    display: flex;
    align-items: center;
    column-gap: 2px;
    &::before {
      display: block;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 14px 12px 14px;
      border-color: transparent transparent
        ${props => props.theme.colors.pink20} transparent;
      transform: rotate(90deg);
    }
  }
`
export const ProductPoint = styled.div`
  background-color: ${props => props.theme.colors.pink10};
  padding: 8px;
  text-align: center;
  position: relative;
  ${UpgradeProgram} + & {
    &::before {
      content: '＋';
      display: grid;
      place-content: center;
      position: absolute;
      top: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 28px;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.pink100};
      border-radius: 50%;
      font-size: ${props => props.theme.fonts.m};
      font-weight: bold;
    }
  }
  .points {
    padding: 8px;
    background-color: ${props => props.theme.colors.white};
  }
`
export const Btns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;
  > a {
    min-width: 100%;
  }
`
export const ProductCaption = styled.div`
  > p:not(:first-child) {
    margin-top: 4px;
  }
`
