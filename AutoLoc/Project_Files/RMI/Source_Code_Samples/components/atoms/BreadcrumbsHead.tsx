import React from 'react'
import styled from 'styled-components'

import { IconChevronRight } from '@components/icons'

const Breadcrumbs = styled.div`
  background: ${props => props.theme.colors.monotone97};
  ul {
    width: 100%;
    max-width: 1064px;
    margin: 0 auto;
    padding: 11px 16px;
    font-size: 0;
    li {
      display: inline-block;
      font-size: ${props => props.theme.fonts.s};
      margin-right: 0.5em;
      color: ${props => props.theme.colors.monotone20};
      &[aria-current='true'] {
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
      }
    }
    a {
      text-decoration: underline;
      font-weight: 400;
      color: ${props => props.theme.colors.monotone20};
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
      color: ${props => props.theme.colors.monotone20};
    }
    @media screen and (max-width: ${props => props.theme.max.m}) {
      display: none;
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

export const BreadcrumbsHead = (props: BreadcrumbsProps) => {
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
