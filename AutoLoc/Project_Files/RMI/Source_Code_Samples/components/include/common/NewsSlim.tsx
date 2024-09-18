import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

import { IconNewTabLine } from '@components/icons'
import { TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { LinkIconBefore, LinkNormal } from '@components/atoms/Link'

const Wrap = styled(TxtSize)`
  display: grid;
  ${mixins.mq.MinL} {
    grid-template-columns: 84px auto;
  }
`
const Title = styled.div`
  font-weight: 700;
  display: none;
  ${mixins.mq.MinL} {
    display: block;
    border-right: solid 1px ${props => props.theme.colors.darkBlue20};
  }
`
const Items = styled.dl`
  ${mixins.mq.MinL} {
    margin-left: 32px;
  }
`
const Item = styled.div`
  display: grid;
  color: ${props => props.theme.colors.lightBlack};
  ${mixins.mq.MinL} {
    grid-template-columns: 142px auto;
  }
  &:not(:first-child) {
    margin-top: 8px;
  }
`

type Data = {
  date: string
  new?: boolean
  text: string | JSX.Element
  link?: string
  blank?: boolean
  ratid?: string
}
type Props = {
  className?: string
  title: string
  data: Data[]
}

// ページ内で使う場合
// 幅いっぱいのグレーの領域の中にあるとかであれば
// グレー背景はページ側でグレー背景を用意してその中で
// SystemContainerなどを使ってセンターにする
//<Gray> ←なんか適当にページ側で用意
//  <SystemContainer> ←既存コンポーネント
//    <NewsSlim /> ← このコンポ（必要データ渡す）
//  </SystemContainer>
//</Gray>
export const NewsSlim: React.FC<Props> = ({ className, title, data }) => {
  return (
    <Wrap size="s" as="div">
      <Title>{title}</Title>
      <Items>
        {data.map((item, index) => (
          <Item key={index}>
            <dt>
              {item.date}
              {item.new && <TxtEmp02> NEW</TxtEmp02>}
            </dt>
            <dd>
              {item.link ? (
                <>
                  {item.blank ? (
                    <LinkIconBefore
                      href={item.link}
                      target="blank"
                      {...(item.ratid && {
                        'data-ratid': item.ratid,
                        'data-ratevent': 'click',
                        'data-ratparam': 'all',
                      })}
                    >
                      {item.text}
                      <IconNewTabLine />
                    </LinkIconBefore>
                  ) : (
                    <LinkNormal
                      href={item.link}
                      {...(item.ratid && {
                        'data-ratid': item.ratid,
                        'data-ratevent': 'click',
                        'data-ratparam': 'all',
                      })}
                    >
                      {item.text}
                    </LinkNormal>
                  )}
                </>
              ) : (
                <>{item.text}</>
              )}
            </dd>
          </Item>
        ))}
      </Items>
    </Wrap>
  )
}
