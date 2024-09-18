import React from 'react'
import styled, { css } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CardNormal } from '@components/atoms/Card'
import { Heading } from '@components/atoms/Heading'
import { ButtonLinkIconAfter } from '@components/atoms/ButtonLink'
import { IconChevronRight } from '@components/icons'

const SubGrid = css`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
`
const CardList = styled.ul`
  display: grid;
  row-gap: 24px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }
  > li {
    ${mixins.mq.MinL} {
      ${SubGrid}
      gap: 0;
    }
  }
`
const Card = styled(CardNormal)`
  position: static;
  border-radius: 0;
  padding: 24px;
  height: 100%;
  ${mixins.mq.MinL} {
    padding: 25px 32px;
    ${SubGrid}
  }
  &::after {
    display: none;
  }
  &:hover {
    ${ButtonLinkIconAfter} {
      color: ${props => props.theme.colors.linkHover};
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
`
const Block = styled.section`
  ${mixins.mq.MinL} {
    ${SubGrid}
    grid-template-columns: 124px auto;
    grid-template-areas:
      'thumb title'
      'thumb text'
      'thumb readmore';
    column-gap: 22px;
  }
`
const Thumb = styled.div`
  grid-area: thumb;
`
const Title = styled(Heading)`
  font-size: 18px;
  grid-area: title;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
  }
`
const Comments = styled.p`
  grid-area: text;
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 8px;
  }
`
const ReadMore = styled.div`
  grid-area: readmore;
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 20px;
  }
`

type Data = {
  user: string
  title: string | JSX.Element
  text: string | JSX.Element
}
type Props = {
  className?: string
  data: Data[]
  level?: '1' | '2' | '3' | '4'
  lazy?: boolean
  lid?: string
}

export const UsersVoiceLinks: React.FC<Props> = ({
  className,
  data,
  lazy = true,
  level = '3',
  lid,
}) => {
  return (
    <>
      <CardList className={className}>
        {data.map(item => (
          <li key={`user${item.user}`}>
            <Card
              href={`/uservoice/${item.user}/${
                lid ? `?l-id=${lid}_uservoice_${item.user}` : ''
              }`}
            >
              <Block>
                <Thumb className={Utils['Align-ccl']}>
                  <img
                    src={`${assets}img/uservoice/avator-${item.user}.png`}
                    width="124"
                    height="124"
                    alt=""
                    loading={lazy ? 'lazy' : undefined}
                  />
                </Thumb>
                <Title level={level}>{item.title}</Title>
                <Comments>{item.text}</Comments>
                <ReadMore className={Utils['Align-ccl']}>
                  <ButtonLinkIconAfter as="span">
                    続きを読む
                    <IconChevronRight />
                  </ButtonLinkIconAfter>
                </ReadMore>
              </Block>
            </Card>
          </li>
        ))}
      </CardList>
    </>
  )
}
