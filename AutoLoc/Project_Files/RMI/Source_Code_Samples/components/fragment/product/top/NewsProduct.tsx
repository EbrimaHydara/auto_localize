import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { Heading } from '@components/atoms/Heading'
import { LinkIconAfter } from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { IconNewTabLine } from '@components/icons'
import { NewsListItem } from '@components/atoms/News'

const NewsWrapper = styled.div`
  padding: 24px;
  background-color: ${props => props.theme.colors.white};
`

const NewsProductHead = styled.div`
  padding: 0 0 16px;
`

const NewsProductFoot = styled.div`
  padding-top: 24px;
  padding-bottom: 4px;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
  > a {
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  &[aria-hidden='true'] {
    display: none;
  }
`

type NewsProductItem = {
  published_date: string
  title: string
  link: string
}

interface NewsProductProps {
  newsItems: NewsProductItem[]
  title?: string
  link?: string
}

export const NewsProduct = ({ newsItems, title, link }: NewsProductProps) => {
  return (
    <NewsWrapper>
      <NewsProductHead>
        <Heading level="4">{title}</Heading>
      </NewsProductHead>
      <div>
        <dl>
          {newsItems.map(item => (
            <NewsListItem key={item.link}>
              <dt>{item.published_date}</dt>
              <dd>
                <LinkIconAfter href={item.link}>
                  {item.title}
                  <IconNewTabLine />
                </LinkIconAfter>
              </dd>
            </NewsListItem>
          ))}
        </dl>
      </div>
      {link && (
        <NewsProductFoot>
          <ButtonRegular as="a" href={link}>
            {title}一覧を見る
          </ButtonRegular>
        </NewsProductFoot>
      )}
    </NewsWrapper>
  )
}
