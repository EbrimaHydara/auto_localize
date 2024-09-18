import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { IconChevronRight } from '@components/icons'
import { LinkNormal } from '@components/atoms/Link'
import { Readmore } from '@components/atoms/Readmore'
import { fontRakutenSans } from '@styles/fonts'

const NewsWrapper = styled.div`
  padding: 24px 16px 8px;
  border: 1px solid ${props => props.theme.colors.darkBlue20};
`

const NewsHead = styled.div`
  padding: 0 0 16px;
`

export const NewsFoot = styled.div`
  padding: 24px 0 16px;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
  text-align: center;
  > a {
    ${mixins.mq.MaxS} {
      width: 100%;
    }
  }
  &[aria-hidden='true'] {
    display: none;
  }
`

const NewsHeading = styled.h2`
  font-size: ${props => props.theme.fonts.base};
  font-weight: normal;
  > span {
    display: block;
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
`

const NewsHeadingJapanese = styled.h2`
  display: block;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 20px;
  font-weight: bold;
`

export const NewsListItem = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
  ${mixins.mq.MinL} {
    display: flex;
  }
  &[aria-hidden='true'] {
    display: none;
    animation: hide 0.5s ease-out 0s;
    border: none;
  }
  &[aria-hidden='false'] {
    display: block;
    animation: show 0.5s ease-out 0s;
  }
  > dt {
    margin-bottom: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.lightBlack};
    ${mixins.mq.MinL} {
      width: calc((100% - ${props => props.theme.gap.l} * (4 - 1)) / 4);
      margin-bottom: 0;
    }
  }
  > dd {
    ${mixins.mq.MinL} {
      width: calc(
        (100% - ${props => props.theme.gap.l} * 2) / 4 * 3 +
          ${props => props.theme.gap.l}
      );
    }
    a {
      color: ${props => props.theme.colors.linkBlue};
      text-decoration: underline;
      &:link {
        text-decoration: underline;
      }
      &:visited {
        text-decoration: underline;
      }
      &:hover {
        color: ${props => props.theme.colors.linkHover};
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }
      &:active {
        color: ${props => props.theme.colors.linkHover};
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }
    }
  }
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
`

export const NewsReadmore = styled.button`
  position: relative;
  padding: 0 0 0 24px;
  text-align: left;
  background-color: inherit;
  z-index: 1;
  color: ${props => props.theme.colors.link};
  text-decoration: underline;
  &:link {
    text-decoration: underline;
  }
  &:visited {
    text-decoration: underline;
  }
  &:hover {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:active {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`
export const NewsReadmoreArrow = styled(IconChevronRight)`
  margin-top: -5px;
  position: absolute;
  top: 50%;
  left: 0;
  color: ${props => props.theme.colors.primary};
  transform: rotate(90deg);
`

interface NewsItem {
  date: string
  content: string
  url: string
}
interface FooterItem {
  text: string
  url: string
}
export interface NewsProps {
  newsItems: NewsItem[]
  headingSimple: boolean
  footerItem?: FooterItem
  readMoreFrom?: number
}
export const News = (props: NewsProps) => {
  const { newsItems, headingSimple, footerItem, readMoreFrom } = props
  let slicedNewsItems1: NewsItem[] = []
  let slicedNewsItems2: NewsItem[] = []
  if (readMoreFrom) {
    slicedNewsItems1 = newsItems.slice(0, readMoreFrom - 1)
    slicedNewsItems2 = newsItems.slice(readMoreFrom - 1)
  }
  return (
    <NewsWrapper>
      <NewsHead>
        {headingSimple ? (
          <NewsHeadingJapanese>お知らせ</NewsHeadingJapanese>
        ) : (
          <NewsHeading>
            <span>NEWS</span>お知らせ
          </NewsHeading>
        )}
      </NewsHead>
      <div>
        <dl>
          {readMoreFrom ? (
            <>
              {slicedNewsItems1.map(elem => (
                <NewsListItem key={elem.url}>
                  <dt>{elem.date}</dt>
                  <dd>
                    <LinkNormal href={elem.url}>{elem.content}</LinkNormal>
                  </dd>
                </NewsListItem>
              ))}
              <Readmore isNews={true} newsItems={slicedNewsItems2} />
            </>
          ) : (
            <>
              {newsItems.map(elem => (
                <NewsListItem key={elem.url}>
                  <dt>{elem.date}</dt>
                  <dd>
                    <LinkNormal href="">{elem.content}</LinkNormal>
                  </dd>
                </NewsListItem>
              ))}
            </>
          )}
        </dl>
      </div>
      {footerItem && (
        <NewsFoot>
          <LinkNormal href={footerItem.url}>
            <span>{footerItem.text}</span>
          </LinkNormal>
        </NewsFoot>
      )}
    </NewsWrapper>
  )
}
