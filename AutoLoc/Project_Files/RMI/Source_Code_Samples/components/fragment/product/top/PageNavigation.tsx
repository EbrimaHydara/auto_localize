import { anchorCallback } from '@components/utils/anchorCallback'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { IconArrowDown } from '@components/icons'

type LinkItem = {
  title: string | JSX.Element
  link: string
  img: string
  ratid?: string
}

const PageNav = styled.ul`
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    gap: 8px;
  }
  li {
    flex: 1;
  }
`

const PageNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 4px;
  padding: 12px 8px;
  color: ${props => props.theme.colors.monotone30};
  text-decoration: none;
  cursor: pointer;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 4px;
  }
  &:hover {
    color: ${props => props.theme.colors.monotone30};
  }
`

const PageNavItemEl = styled.span`
  ${mixins.mq.MaxM} {
    flex: 0 0 100%;
    text-align: center;
  }
`

const PageNavIcon = styled(PageNavItemEl)`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: 24px;
  line-height: 1;
`

const PageNavTitle = styled(PageNavItemEl)`
  ${mixins.mq.MaxM} {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
  }
`

interface PageNavData {
  pageNavData: Array<LinkItem>
}

interface PageNavProps {
  ratId?: string
  ratEvent?: 'click' | 'appear'
}

export const PageNavigation: React.FC<PageNavData & PageNavProps> = ({
  pageNavData,
  ratId,
  ratEvent,
}) => {
  const ratParam = ratId && 'all'
  return (
    <PageNav
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
    >
      {pageNavData.map((item, index) => (
        <li key={index}>
          <PageNavItem
            href={`#${item.link}`}
            onClick={e => anchorCallback(e, item.link)}
            data-ratid={item.ratid}
            data-ratevent="click"
            data-ratparam="all"
          >
            <PageNavIcon>
              <IconArrowDown />
            </PageNavIcon>
            <PageNavTitle>{item.title}</PageNavTitle>
            <PageNavItemEl>
              <picture>
                <img
                  src={`${assets}img/${item.img}`}
                  width="32"
                  height="32"
                  alt={`${item.title}`}
                />
              </picture>
            </PageNavItemEl>
          </PageNavItem>
        </li>
      ))}
    </PageNav>
  )
}
