import React from 'react'
import styled, { css } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import { TxtSize, TxtEmp02 } from '@components/atoms/Txt'
import { fontRakutenSans } from '@styles/fonts'

const CpnConditionBase = css`
  display: grid;
  ${mixins.mq.MaxL} {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  ${mixins.mq.MaxM} {
    row-gap: 20px;
  }
`
const CpnCondition = styled.ul<{ itemNum?: number }>`
  ${CpnConditionBase}
  grid-template-columns: ${props => `
    repeat(${props.itemNum}, 1fr);
  `}
  ${props =>
    props.itemNum === 3 &&
    `
    column-gap: 21px;
  `}
  ${props =>
    props.itemNum === 4 &&
    `
    column-gap: 16px;
  `}
  ${props =>
    props.itemNum === 5 &&
    `
    column-gap: 8px;
  `}
`
const CpnConditionItemBase = css`
  border: 1px solid ${props => props.theme.colors.monotone75};
  width: 100%;
  position: relative;
  display: grid;
  ${mixins.mq.MinCustom('1065px')} {
    grid-row: 1/3;
    grid-template-rows: subgrid;
  }
  &::after {
    content: '';
    position: absolute;
    background: url(${assets}img/common/icon-cpn-plus-glay.svg) center
      top/contain no-repeat;
    width: 36px;
    height: 36px;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
    ${props => mixins.mq.MinMaxCustom(props.theme.min.l, props.theme.max.l)} {
      bottom: -27px; // border分 + 1
    }
    ${mixins.mq.MaxL} {
      left: 50%;
      right: auto;
      top: auto;
      transform: translateX(-50%);
    }
    ${mixins.mq.MaxM} {
      bottom: -29px; // border分 + 1
    }
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`
const CpnConditionItem = styled.li<{ itemNum?: number }>`
  ${CpnConditionItemBase}
  ${props =>
    props.itemNum === 3 &&
    `
    &::after {
      right: -29px; // border分 + 1、ただしgap21なので30も可
    }
  `}
  ${props =>
    props.itemNum === 4 &&
    `
    &::after {
      right: -27px;
    }
  `}
  ${props =>
    props.itemNum === 5 &&
    `
    &::after {
      right: -23px;
    }
  `}
`
const CpnConditionLabel = styled.div`
  margin-bottom: 8px;
  padding: 4px 8px;
  background-color: ${props => props.theme.colors.pink5};
  white-space: nowrap;
  ${mixins.mq.MinCustom('1065px')} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`
const CpnConditionTitleWithIconBase = css`
  padding: 24px 16px 24px 20px;
`
const CpnConditionTitleNoIcon = styled.div`
  ${CpnConditionTitleWithIconBase}
  text-align: center;
`
const CpnConditionTitleWithIcon = styled.div<{ itemNum?: number }>`
  ${CpnConditionTitleWithIconBase}
  display: flex;
  align-items: center;
  gap: 16px;
  ${props =>
    props.itemNum !== 3 &&
    `
    flex-direction: column;
  `}
  ${mixins.mq.MaxL} {
    ${props =>
      props.itemNum !== 3 &&
      `
      flex-direction: row;
    `}
  }
`
const CpnConditionTitleImg = styled.div`
  min-width: 47px;
  width: 47px;
`
const CpnConditionTitleText = styled.div<{ itemNum?: number }>`
  ${props =>
    props.itemNum !== 3
      ? `
    &:nth-of-type(2) {
    width: auto;
  }
  `
      : `
    width: calc(100% - 16px - 47px);
  `}
`
const CpnConditionTitleTextNoIcon = styled.div`
  width: auto;
`
const CpnConditionContents = styled.div`
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.monotone97};
`
export const CpnConditionTitleNoIconText = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
`
export const CpnConditionTitleNoIconTextWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2px;
  ${mixins.mq.MaxM} {
    flex-direction: row;
    align-items: end;
  }
`
export const CpnConditionTitleFlex = styled.span`
  display: flex;
  align-items: end;
`
export const CpnConditionTitleNoIconTextSub = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
`
export const CpnConditionTitleNoIconNum = styled.span`
  font-size: 46px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.1rem;
  color: ${props => props.theme.colors.primary};
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  .comma {
    font-size: 23px;
  }
`

interface IconProps {
  src: string
  width?: number
  height?: number
  alt?: string
  loading?: 'lazy' | 'eager' | undefined
}
interface ConditionsObjProps {
  id: string
  title: JSX.Element | string
  text: JSX.Element | string
  icon?: IconProps
  label?: boolean
}
interface ConditionsProps {
  args: ConditionsObjProps[]
}

export const Conditions = ({ args }: ConditionsProps) => {
  const itemNum = args.length
  if (itemNum) {
    return (
      <CpnCondition itemNum={itemNum} className={Utils['Mt-32']}>
        {args.map(item => {
          return (
            <CpnConditionItem itemNum={itemNum} key={item.id}>
              {item.icon ? (
                <CpnConditionTitleWithIcon itemNum={itemNum}>
                  <CpnConditionTitleImg>
                    <img
                      src={item.icon.src}
                      width={item.icon.width ? item.icon.width : 47}
                      height={item.icon.height ? item.icon.height : 47}
                      alt={item.icon.alt ? item.icon.alt : ''}
                      loading={item.icon.loading ? item.icon.loading : 'lazy'}
                    />
                  </CpnConditionTitleImg>
                  <CpnConditionTitleText itemNum={itemNum}>
                    <TxtSize size="m" className={Utils['Weight-bold']}>
                      {item.title}
                    </TxtSize>
                  </CpnConditionTitleText>
                </CpnConditionTitleWithIcon>
              ) : (
                <CpnConditionTitleNoIcon>
                  <CpnConditionTitleTextNoIcon>
                    {item.label && (
                      <CpnConditionLabel>
                        <TxtSize size="s">
                          <TxtEmp02>楽天モバイルWeb限定</TxtEmp02>
                        </TxtSize>
                      </CpnConditionLabel>
                    )}
                    <TxtSize size="m">{item.title}</TxtSize>
                  </CpnConditionTitleTextNoIcon>
                </CpnConditionTitleNoIcon>
              )}
              <CpnConditionContents>{item.text}</CpnConditionContents>
            </CpnConditionItem>
          )
        })}
      </CpnCondition>
    )
  } else {
    return null
  }
}
