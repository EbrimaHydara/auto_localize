import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { LinkListBorder, LinkList } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'

const RelatedMediaTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 1.4;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`
interface ListContents {
  title: string
  link: string
}

interface RelatedMediaProps {
  list: ListContents[]
}

export const RelatedMedia = (props: RelatedMediaProps) => {
  const { list } = props
  return (
    <>
      <RelatedMediaTitle>関連記事：わかる！スマホ活用術</RelatedMediaTitle>
      <ul className={`${Utils['Mt-24']} ${Utils['Mb-56']}`}>
        {list.map((value, index) => (
          <LinkListBorder key={index}>
            <LinkList href={`${value.link}`} target="_blank">
              {value.title}
              <IconChevronRight />
            </LinkList>
          </LinkListBorder>
        ))}
      </ul>
    </>
  )
}
