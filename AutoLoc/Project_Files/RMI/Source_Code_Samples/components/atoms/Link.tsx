import React from 'react'
import styled from 'styled-components'
import {
  IconChevronRight,
  IconArrowDown,
  IconArrowUp,
  IconNewTabLine,
  IconPdf,
  IconZoomLine,
  IconChevronLeft,
} from '@components/icons'
import Utils from '@styles/Utils.module.scss'

export const LinkButton = styled.button`
  color: ${props => props.theme.colors.link};
  > span {
    padding-left: 8px;
  }
  &:hover {
    transition: 0.4s;
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.colors.linkFocus};
    text-decoration: underline;
  }
  &:active {
    transition: 0.2s;
    color: ${props => props.theme.colors.linkActive};
    text-decoration: underline;
  }
`

export const LinkNormal = styled.a`
  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:active {
    text-decoration: none;
  }
`

export const LinkNormalWhite = styled(LinkNormal)`
  color: ${props => props.theme.colors.white};
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};
  }
`

export const LinkIconBefore = styled(LinkNormal)`
  display: table;
  > span {
    display: table-cell;
    color: ${props => props.theme.colors.primary};
    padding-right: 4px;
    vertical-align: text-top;
    &::before {
      display: inline-block;
    }
    &${IconChevronLeft}, &${IconArrowDown} {
      font-weight: bold;
    }
  }
`

export const LinkIconAfter = styled(LinkNormal)`
  &:active {
    text-decoration: none;
  }
  > span {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    margin-right: 5px;
    &::before {
      display: inline-block;
    }
    padding-left: 4px;
    &${IconChevronRight} {
      font-weight: bold;
    }
  }
`

export const LinkIconAfterWhite = styled(LinkNormalWhite)`
  > span {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    margin-right: 5px;
    padding-left: 4px;
    &::before {
      display: inline-block;
      font-size: 16px;
    }
    &${IconChevronRight} {
      font-weight: bold;
    }
  }
`

export const LinkListBorder = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  &:first-child {
    border-top: 1px solid ${props => props.theme.colors.monotone75};
  }
`
export const LinkList = styled.a`
  display: block;
  padding: 1em 2em 1em 1em;
  position: relative;
  color: ${props => props.theme.colors.link};
  text-decoration: none;
  > span {
    color: ${props => props.theme.colors.primary};
    position: absolute;
    top: 50%;
    right: 16px;
    margin-top: -0.5em;
    margin-left: 4px;
    vertical-align: middle;
    &${IconChevronRight} {
      font-weight: bold;
    }
  }
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: none;
    background-color: ${props => props.theme.colors.monotone97};
  }
  @media screen and (min-width: 769px) {
    > span {
      position: static;
      vertical-align: -0.02em;
    }
  }
`
export const LinkListAccordion = styled(LinkList)`
  background-color: ${props => props.theme.colors.monotone97};
  &:active {
    color: ${props => props.theme.colors.linkActive};
    text-decoration: none;
    background-color: ${props => props.theme.colors.monotone93};
  }
  &:focus {
    color: ${props => props.theme.colors.linkFocus};
    text-decoration: none;
    background-color: ${props => props.theme.colors.monotone93};
  }
`

export const LinkHorizontal = styled(LinkNormal)`
  &::after {
    content: '';
    margin-right: 1em;
    padding-right: 1em;
    border-right: 1px solid ${props => props.theme.colors.monotone88};
  }
`

export interface LinkProps {
  /**
   * target url
   */
  href?: string
  /**
   * is open in new tab
   */
  isOpenInNewTab?: boolean
  className?: string
}

export const Link = (props: React.PropsWithChildren<LinkProps>) => {
  const { href, isOpenInNewTab } = props
  return (
    <div>
      <div>
        <LinkNormal
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          {props.children}
        </LinkNormal>
      </div>

      <div className={Utils['Mt-24']}>
        <p>
          詳細は
          <LinkNormal
            className={props.className}
            href={href}
            target={isOpenInNewTab ? '_blank' : undefined}
          >
            {props.children}
          </LinkNormal>
          を御覧ください。
        </p>
      </div>

      <div
        style={{ background: '#FF008C', padding: '16px', marginTop: '24px' }}
      >
        <LinkNormalWhite
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          {props.children}
        </LinkNormalWhite>
      </div>

      <div className={Utils['Mt-24']}>
        <p>
          詳細は
          <LinkIconAfter
            className={props.className}
            href={href}
            target={isOpenInNewTab ? '_blank' : undefined}
          >
            {props.children}
            <IconNewTabLine />
          </LinkIconAfter>
          を御覧ください。
        </p>
      </div>

      <div className={Utils['Mt-24']}>
        <p>
          詳細は
          <LinkIconAfter
            className={props.className}
            href={href}
            target={isOpenInNewTab ? '_blank' : undefined}
          >
            {props.children}
            <IconPdf />
          </LinkIconAfter>
          を御覧ください。
        </p>
      </div>

      <div
        style={{ background: '#FF008C', padding: '16px', marginTop: '24px' }}
      >
        <p style={{ color: '#FFF' }}>
          詳細は
          <LinkIconAfterWhite
            className={props.className}
            href={href}
            target={isOpenInNewTab ? '_blank' : undefined}
          >
            {props.children}
            <IconPdf />
          </LinkIconAfterWhite>
          を御覧ください。
        </p>
      </div>

      <div className={Utils['Mt-24']}>
        <LinkIconAfter
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          {props.children}
          <IconChevronRight />
        </LinkIconAfter>
      </div>

      <div className={Utils['Mt-24']}>
        <LinkIconBefore
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          <IconArrowDown />
          {props.children}
        </LinkIconBefore>
      </div>

      <div className={Utils['Mt-24']}>
        <LinkIconBefore
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          <IconArrowUp />
          {props.children}
        </LinkIconBefore>
      </div>

      <div className={Utils['Mt-24']}>
        <LinkIconBefore
          className={props.className}
          href={href}
          target={isOpenInNewTab ? '_blank' : undefined}
        >
          <IconZoomLine />
          {props.children}
        </LinkIconBefore>
      </div>

      <div className={Utils['Mt-24']}>
        <ul>
          <LinkListBorder>
            <LinkList
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              <IconChevronRight />
            </LinkList>
          </LinkListBorder>
          <LinkListBorder>
            <LinkList
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              <IconChevronRight />
            </LinkList>
          </LinkListBorder>
          <LinkListBorder>
            <LinkList
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              <IconNewTabLine />
            </LinkList>
          </LinkListBorder>
        </ul>
      </div>

      <div className={Utils['Mt-24']}>
        <p>以下はアコーディオン内部用</p>
        <ul className={Utils['Mt-16']}>
          <li
            style={{
              borderTop: '1px solid #bfbfbf',
              borderBottom: '1px solid #bfbfbf',
            }}
          >
            <LinkListAccordion
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              <IconChevronRight />
            </LinkListAccordion>
          </li>
          <li style={{ borderBottom: '1px solid #bfbfbf' }}>
            <LinkListAccordion
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              {props.children}
              <IconChevronRight />
            </LinkListAccordion>
          </li>
          <li style={{ borderBottom: '1px solid #bfbfbf' }}>
            <LinkListAccordion
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
              <IconNewTabLine />
            </LinkListAccordion>
          </li>
        </ul>
      </div>

      <div className={Utils['Mt-24']}>
        <ul>
          <li style={{ display: 'inline-block' }}>
            <LinkHorizontal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkHorizontal>
          </li>
          <li style={{ display: 'inline-block' }}>
            <LinkHorizontal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkHorizontal>
          </li>
          <li style={{ display: 'inline-block' }}>
            <LinkHorizontal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkHorizontal>
          </li>
        </ul>
      </div>

      <div className={Utils['Mt-24']}>
        <ul>
          <li style={{ float: 'left', margin: '0 24px 16px 0' }}>
            <LinkNormal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkNormal>
          </li>
          <li style={{ float: 'left', margin: '0 24px 16px 0' }}>
            <LinkNormal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkNormal>
          </li>
          <li style={{ float: 'left', margin: '0 24px 16px 0' }}>
            <LinkNormal
              className={props.className}
              href={href}
              target={isOpenInNewTab ? '_blank' : undefined}
            >
              {props.children}
            </LinkNormal>
          </li>
        </ul>
      </div>
    </div>
  )
}
