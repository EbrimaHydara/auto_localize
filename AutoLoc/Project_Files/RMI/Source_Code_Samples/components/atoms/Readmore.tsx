import { useState, ReactNode } from 'react'
import styled from 'styled-components'
import { IconChevronRight } from '@components/icons'
import {
  NewsFoot,
  NewsReadmore,
  NewsReadmoreArrow,
  NewsListItem,
} from '@components/atoms/News'
import { LinkNormal } from '@components/atoms/Link'

export const ReadmoreArrow = styled(IconChevronRight)`
  margin-top: -5px;
  position: absolute;
  top: 50%;
  left: 0;
  color: ${props => props.theme.colors.primary};
  transform: rotate(90deg);
  text-decoration: none;
  font-weight: bold;
`
export const ReadmoreTrigger = styled.div`
  text-align: center;
  button {
    position: relative;
    padding: 16px 0 16px 20px;
    text-align: left;
    background-color: inherit;
    z-index: 1;
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
    &:active {
      color: ${props => props.theme.colors.linkActive};
      text-decoration: none;
    }
    &:focus {
      color: ${props => props.theme.colors.linkFocus};
      text-decoration: none;
    }
    &[aria-hidden='true'] {
      display: none;
    }
  }
`

const ReadmoreContent = styled.div`
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  &[aria-hidden='true'] {
    display: none;
    animation: hide 0.5s ease-out 0s;
    border: none;
  }
  &[aria-hidden='false'] {
    padding-bottom: 16px;
    display: block;
    animation: show 0.5s ease-out 0s;
  }
`

interface NewsItem {
  date: string
  content: string
  url: string
}
export interface ReadmoreProps {
  triggerText?: string
  triggerBorder?: boolean
  isNews?: boolean
  newsItems?: NewsItem[]
  children?: ReactNode
}
export const Readmore: React.FC<ReadmoreProps> = ({
  triggerText,
  isNews,
  newsItems,
  children,
}) => {
  const [contentHiddenState, updateContentHiddenState] = useState<boolean>(true)
  const [triggerHiddenState, updateTriggerHiddenState] =
    useState<boolean>(false)
  return (
    <>
      <ReadmoreContent aria-hidden={contentHiddenState}>
        {children}
      </ReadmoreContent>
      {!isNews ? (
        <>
          <ReadmoreContent aria-hidden={contentHiddenState}>
            {children}
          </ReadmoreContent>
          <ReadmoreTrigger
            onClick={() => {
              updateContentHiddenState(false)
              updateTriggerHiddenState(true)
            }}
          >
            <button aria-hidden={triggerHiddenState}>
              <ReadmoreArrow />
              {triggerText ? triggerText : 'もっと見る'}
            </button>
          </ReadmoreTrigger>
        </>
      ) : (
        <>
          {newsItems &&
            newsItems.map(elem => (
              <NewsListItem aria-hidden={contentHiddenState}>
                <dt>{elem.date}</dt>
                <dd>
                  <LinkNormal href={elem.url}>{elem.content}</LinkNormal>
                </dd>
              </NewsListItem>
            ))}
          <NewsFoot
            onClick={() => {
              updateContentHiddenState(false)
              updateTriggerHiddenState(true)
            }}
            aria-hidden={triggerHiddenState}
          >
            <NewsReadmore>
              <NewsReadmoreArrow />
              {triggerText ? triggerText : 'もっと見る'}
            </NewsReadmore>
          </NewsFoot>
        </>
      )}
    </>
  )
}
