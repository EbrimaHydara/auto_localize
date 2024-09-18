import { LinkList, LinkListBorder } from '@components/atoms/Link'
import { SmallCategoryWrap } from '@components/category/Support'
import { IconChevronRight, IconNewTabLine } from '@components/icons'
import { LinkListFaqItem } from '@components/include/support/supportData'
import Utils from '@styles/Utils.module.scss'
import { SupportSurveyBnr } from '@components/include/common/SupportSurveyBnr'
import { TroubleNavi } from '@components/fragment/support/area/data-trouble/troubleNavi'

type Props = {
  className?: string
  arr: LinkListFaqItem[]
  isMovie?: boolean
  pageTitle?: string
}

export const SmallCategoryFaq = ({
  className,
  arr,
  isMovie,
  pageTitle,
}: Props) => {
  const getHref = (item: LinkListFaqItem) => {
    if (item.l_id) {
      return item.path + item.l_id
    } else if (item.ratid) {
      return item.path
    } else {
      return item.path + '?l-id=support_category_guide'
    }
  }

  return (
    <SmallCategoryWrap className={isMovie ? `${className} isMovie` : className}>
      <ul>
        {arr.map((item: LinkListFaqItem, index) => (
          <LinkListBorder key={`info${index}`}>
            <LinkList
              href={getHref(item)}
              {...(item.ratid && {
                'data-ratid': item.ratid,
                'data-ratevent': 'click',
                'data-ratparam': 'all',
              })}
              {...(item.target && { target: item.target })}
            >
              {item.name}
              {item.isIconNewTabLine ? (
                <IconNewTabLine />
              ) : (
                <IconChevronRight />
              )}
            </LinkList>
          </LinkListBorder>
        ))}
      </ul>
      {pageTitle &&
        pageTitle === 'データ通信・通話の不具合に関するサポート' && (
          <TroubleNavi />
        )}
      {/* ▼ テンプレ全ページに出る、テンプレ内lid一緒、電球画像との兼ね合い でここに置く */}
      <SupportSurveyBnr
        className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
        lid="support_category_campaign_support-survey"
      />
    </SmallCategoryWrap>
  )
}
