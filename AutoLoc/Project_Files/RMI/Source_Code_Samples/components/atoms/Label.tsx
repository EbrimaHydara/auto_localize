import React from 'react'
import styled from 'styled-components'

export const LabelUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const LabelNormal = styled.li<{ isBold?: boolean }>`
  margin: 0 8px 8px 0;
  padding: 4px 8px;
  font-size: 13px;
  background-color: ${props => props.theme.colors.monotone93};
  ${({ isBold }) =>
    isBold &&
    `
      font-weight: bold;
    `}
`
const LabelEmp = styled.li`
  margin: 0 8px 8px 0;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.pink10};
`
export const LabelNormalSingle = styled.span`
  padding: 4px 8px;
  font-size: 13px;
  background-color: ${props => props.theme.colors.monotone93};
`
export const LabelEmpSingle = styled(LabelNormalSingle)`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.pink10};
`

export interface LabelItem {
  text: string
  isEmp: boolean
  isBold?: boolean
}

export interface LabelListProps {
  item: LabelItem[]
  className?: string
}

export const LabelList = (props: LabelListProps) => {
  const { item, className } = props
  return (
    <LabelUl className={className}>
      {item.map((value, index) =>
        value.isEmp ? (
          <LabelEmp key={index}>{value.text}</LabelEmp>
        ) : (
          <LabelNormal key={index} isBold={value.isBold}>
            {value.text}
          </LabelNormal>
        ),
      )}
    </LabelUl>
  )
}
