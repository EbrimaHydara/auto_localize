import React from 'react'
import styled from 'styled-components'
import { IconFilterFill } from '@components/icons'

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomButton = styled.button`
  color: ${props => props.theme.colors.link};
  &:hover {
    transition: 0.4s;
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    &::before,
    &::after {
      transition: 0.4s;
    }
  }
  &:active {
    transition: 0.2s;
    color: ${props => props.theme.colors.linkActive};
    text-decoration: underline;
    &::before,
    &::after {
      transition: 0.2s;
    }
  }
  &:focus {
    color: ${props => props.theme.colors.linkFocus};
    text-decoration: underline;
  }
`

export interface FilterProps {
  handleClick?: () => void
  condition?: string
}

export const Filter = (props: FilterProps) => {
  const { handleClick, condition } = props
  return (
    <Line>
      <span>
        {''}：{condition}
      </span>
      <CustomButton onClick={handleClick}>
        <IconFilterFill style={{ paddingLeft: '8px' }} />
        {''}
      </CustomButton>
    </Line>
  )
}
