import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

const TableContainer = styled.div<{ pcWidth: string; spWidth: string }>`
  table {
    width: ${({ pcWidth }) => (pcWidth ? pcWidth : '100%')};
    ${mixins.mq.MaxM} {
      width: ${({ spWidth }) => (spWidth ? spWidth : '100%')};
    }
    border-collapse: collapse;
    th,
    td {
      vertical-align: top;
      padding: 16px;
      border: 1px solid ${props => props.theme.colors.monotone75};
      color: ${props => props.theme.colors.black};
      text-align: left;
    }
    th {
      background: ${props => props.theme.colors.monotone93};
    }
    td {
      background: ${props => props.theme.colors.white};
    }
  }
`
export interface TableProps {
  children?: JSX.Element | JSX.Element[]
  pcWidth?: string
  spWidth?: string
  className?: string
}

export const Table = (props: TableProps) => {
  const { pcWidth, spWidth, className } = props
  return (
    <TableContainer
      pcWidth={pcWidth ? pcWidth : ''}
      spWidth={spWidth ? spWidth : ''}
      className={className}
    >
      {props.children}
    </TableContainer>
  )
}
