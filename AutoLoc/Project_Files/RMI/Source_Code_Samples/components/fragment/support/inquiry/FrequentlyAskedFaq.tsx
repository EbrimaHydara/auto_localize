import React, { useEffect } from 'react'
import { Heading } from '@components/atoms/Heading'
import { TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { ResolutionTime } from '@components/category/Support'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ButtonRadio } from '@components/atoms/ButtonRadio'
import { mixins } from '@components/utils/Mixins'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { FrequentlyAskedFaqList } from '@components/fragment/support/inquiry/FrequentlyAskedFaqList'

const FaqBlock = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 32px;
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

const FaqHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: baseline;
  }
`

const FilterRadio = styled(ButtonRadio)`
  label {
    > div {
      border: none !important;
      padding: 0 !important;
    }
  }
`

const FilterRadioWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  margin-bottom: 24px;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
  }
`

type Props = {
  className?: string
  status: string
  callbackAfterFramePaint: () => void
}

export type FaqItemResponse = {
  question: string
  link: string
  fixed_display: number
  pageview: number
}

const faqApiQueryList = [
  'attention_subs',
  'setting',
  'payment',
  'area',
  'link',
  'attention_pre',
  'plan_detail',
  'application',
  'initial_setting',
]
export type FaqApiQuery = (typeof faqApiQueryList)[number]

interface FaqItems {
  name: string
  text: string
  value: FaqApiQuery
  ratid: string
  defaultChecked?: boolean
}

export const FrequentlyAskedFaq = ({
  className,
  status,
  callbackAfterFramePaint,
}: Props) => {
  const memberItemList: FaqItems[] = [
    {
      name: 'inquiry-member',
      text: '注目のご質問',
      value: 'attention_subs',
      ratid: 'support_top_tab_member_inquiry_attention_subs',
      defaultChecked: true,
    },
    {
      name: 'inquiry-member',
      text: '請求・お支払い',
      value: 'payment',
      ratid: 'support_top_tab_member_inquiry_payment',
    },
    {
      name: 'inquiry-member',
      text: '操作・設定',
      value: 'setting',
      ratid: 'support_top_tab_member_inquiry_setting',
    },
    {
      name: 'inquiry-member',
      text: 'Rakuten Link',
      value: 'link',
      ratid: 'support_top_tab_member_inquiry_link',
    },
    {
      name: 'inquiry-member',
      text: 'エリア・データ通信・通話',
      value: 'area',
      ratid: 'support_top_tab_member_inquiry_area',
    },
  ]

  const notMemberItemList: FaqItems[] = [
    {
      name: 'inquiry-not-member',
      text: '注目のご質問',
      value: 'attention_pre',
      ratid: 'support_top_tab_pre-member_inquiry_attention_pre',
      defaultChecked: true,
    },
    {
      name: 'inquiry-not-member',
      text: 'プラン・サービス',
      value: 'plan_detail',
      ratid: 'support_top_tab_pre-member_inquiry_plan_detail',
    },
    {
      name: 'inquiry-not-member',
      text: '申し込みからお受け取りまで',
      value: 'application',
      ratid: 'support_top_tab_pre-member_inquiry_application',
    },
    {
      name: 'inquiry-not-member',
      text: 'ご利用開始までの設定',
      value: 'initial_setting',
      ratid: 'support_top_tab_pre-member_inquiry_initial_setting',
    },
  ]

  const listSelect = status === 'member' ? memberItemList : notMemberItemList

  const [faqItemList, setFaqItemList] = React.useState<
    { [K in FaqApiQuery]: FaqItemResponse[] } | {}
  >({})
  const initialStatus = status === 'member' ? 'attention_subs' : 'attention_pre'
  const [selectedQueryState, updateSelectedQueryState] =
    React.useState<FaqApiQuery>(initialStatus)

  useEffect(() => {
    const tempObjectFaqItemList: { [K in FaqApiQuery]: FaqItemResponse } = {}
    const createFaqItemList = async (query: string) => {
      let api

      if (window.location.href.startsWith('https://feature-')) {
        // stg確認用
        api = await fetch(
          `https://preprod-network.rmb-lab.jp/api/generic_search_faq/?q=inquiry_${query}`,
        )
      } else if (window.location.href.startsWith('http://localhost')) {
        api = await fetch('/json/dummy/generic-search-faq.json')
      } else {
        // stg以外用
        api = await fetch(
          `https://network.mobile.rakuten.co.jp/api/generic_search_faq/?q=inquiry_${query}`,
        )
      }

      const data = await api.json()

      let top5 = [] // 宣言と初期化
      top5 = data.list
        .sort(
          (a: { pageview: number }, b: { pageview: number }) =>
            b.pageview - a.pageview,
        )
        .slice(0, 5) // pageviewを降順にソートして上位5つの要素を取得

      tempObjectFaqItemList[query] = top5
    }
    ;(async () => {
      const promiseList = faqApiQueryList.map(list => createFaqItemList(list))
      await Promise.all(promiseList)
      setFaqItemList(tempObjectFaqItemList)
    })()
  }, [])

  return (
    <>
      <FaqBlock className={Utils['Mt-24']}>
        <FaqHead>
          <Heading level="3" className={Utils['Align-center']}>
            よく見られているご質問
          </Heading>
          <ResolutionTime>
            <TxtEmp02>解決の目安…約5分</TxtEmp02>
          </ResolutionTime>
        </FaqHead>
        <TxtSize size="s" as="p" className={Utils['Mt-24']}>
          <TxtEmp01>質問のカテゴリ</TxtEmp01>
        </TxtSize>
        <FilterRadioWrapper>
          <FilterRadio
            onChangeCheck={event => {
              if (event) {
                updateSelectedQueryState(event)
              }
            }}
            select={listSelect}
          />
        </FilterRadioWrapper>
        <ul>
          {selectedQueryState && !!Object.keys(faqItemList).length && (
            <FrequentlyAskedFaqList
              list={faqItemList}
              query={selectedQueryState}
              status={status}
              callbackAfterFramePaint={callbackAfterFramePaint}
            />
          )}
        </ul>
        <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
          <ButtonRegularLarge
            href="/support/?l-id=support_inquiry_member_support" //l-id memberとpre-memberで分ける必要ない？？
            as="a"
          >
            お客様サポートトップへ
          </ButtonRegularLarge>
        </div>
      </FaqBlock>
    </>
  )
}
