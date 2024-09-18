import React from 'react'
import styled from 'styled-components'

import { IconChevronRight } from '@components/icons'

const Breadcrumbs = styled.div`
  margin-top: 56px;
  ul {
    padding: 0 0 24px;
    font-size: 0;
    li {
      display: inline-block;
      font-size: ${props => props.theme.fonts.s};
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      &[aria-current='true'] {
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
      }
    }
    a {
      text-decoration: underline;
      font-weight: 400;
      margin-right: 0.5em;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.pink80};
        text-decoration: none;
      }
      &:active {
        color: ${props => props.theme.colors.pink_80};
        text-decoration: none;
      }
    }
    span {
      font-weight: 700;
      color: ${props => props.theme.colors.link};
    }
  }
`

export interface BreadcrumbsItem {
  url: string
  text: string
}

export interface BreadcrumbsProps {
  item: BreadcrumbsItem[]
}

export const BreadcrumbsFoot = (props: BreadcrumbsProps) => {
  const { item } = props
  return (
    <Breadcrumbs>
      <ul>
        {item.map((value, index, arr) =>
          arr.length - 1 === index ? (
            <li key={index} aria-current="true">
              {value.text}
            </li>
          ) : (
            <li key={index}>
              {value.url ? (
                <a href={value.url}>{value.text}</a>
              ) : (
                <span>{value.text}</span>
              )}
              <IconChevronRight />
            </li>
          ),
        )}
      </ul>
    </Breadcrumbs>
  )
}
