import Utils from '@styles/Utils.module.scss'
import { RelatedCategory } from '@components/include/support/supportData'
import {
  SupportHeadingSmall,
  SupportOtherCategoryList,
  SupportOtherWrap,
} from '@components/category/Support'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { SystemContainer } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'
import { SupportFooter } from '@components/include/support/SupportFooter'

const CategoryList = styled(InfoboxBorder)`
  margin-top: 16px;
  border-radius: 8px;
  ${mixins.mq.MinL} {
    margin-top: 24px;
  }
`

type Props = {
  className?: string
  bigCategory?: string
  relatedCategory?: RelatedCategory[]
}
export const SupportOther = ({
  className,
  bigCategory,
  relatedCategory,
}: Props) => {
  return (
    <SupportOtherWrap
      className={className}
      isCategory={relatedCategory ? true : false}
    >
      <SystemContainer>
        {relatedCategory && (
          <div className="relatedCategory">
            <Heading level="2" className={Utils['Align-center']}>
              <SupportHeadingSmall>{bigCategory}の</SupportHeadingSmall>
              <br />
              他カテゴリーから探す
            </Heading>
            <CategoryList>
              <SupportOtherCategoryList>
                {relatedCategory?.map((item: RelatedCategory, index) => (
                  <li key={'category' + index}>
                    <LinkIconAfter
                      href={item.path + '?l-id=support_category_category'}
                    >
                      {item.name}
                      <IconChevronRight />
                    </LinkIconAfter>
                  </li>
                ))}
              </SupportOtherCategoryList>
            </CategoryList>
          </div>
        )}
        <SupportFooter className={!relatedCategory ? 'no-category' : ''} />
      </SystemContainer>
    </SupportOtherWrap>
  )
}
