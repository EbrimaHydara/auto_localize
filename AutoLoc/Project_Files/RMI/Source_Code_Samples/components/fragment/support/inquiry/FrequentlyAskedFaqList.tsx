import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { FaqItemResponse } from '@components/fragment/support/inquiry/FrequentlyAskedFaq'
import { FaqApiQuery } from '@components/fragment/support/inquiry/FrequentlyAskedFaq'
import {
  SolvedNum,
  SupportLinkList,
  SupportLinkListBorder,
  SupportLinkListIconChevronRight,
} from '@components/category/Support'
import { useMarkFramePaint } from '@components/utils/useMarkFramePaint'

const FilterLinkList = styled(SupportLinkList)`
  ${mixins.mq.MaxM} {
    padding: 1em 2em 1em 0;
  }
`

type FrequentlyAskedFaqProps = {
  list: { [K in FaqApiQuery]: FaqItemResponse[] }
  query: FaqApiQuery
  status: string
  callbackAfterFramePaint: () => void
}
export const FrequentlyAskedFaqList = (props: FrequentlyAskedFaqProps) => {
  const { list, query, status, callbackAfterFramePaint } = props
  const linkFaq =
    status === 'member'
      ? '?l-id=support_top_member_faq'
      : '?l-id=support_top_pre-member_faq'

  useMarkFramePaint({
    /**
     * 検証時はmarkNameを渡す
     */
    // markName: 'ItemListRendered',
    /**
     * リストで描画するpropsの長さをenabledの基準にする
     */
    enabled: !!Object.keys(list).length,
    customCallback: callbackAfterFramePaint,
  })

  return (
    <>
      {list[query].map((element: FaqItemResponse) => {
        const { question, link, pageview } = element
        if (Object.keys(list).length === 0) {
          console.log('Report: One or more questions were not returned') // 不具合時のDir確認用
          return false
        } else {
          return (
            <SupportLinkListBorder key={link}>
              <FilterLinkList href={link + linkFaq}>
                {question}
                {pageview > 0 && (
                  <SolvedNum>
                    {pageview.toLocaleString()}人以上の方が解決
                  </SolvedNum>
                )}
                <SupportLinkListIconChevronRight />
              </FilterLinkList>
            </SupportLinkListBorder>
          )
        }
      })}
    </>
  )
}
