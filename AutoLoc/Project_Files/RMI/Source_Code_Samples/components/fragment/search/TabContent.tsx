import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { LabelNormalSingle } from '@components/atoms/Label'
import { Heading } from '@components/atoms/Heading'
import { LinkNormal } from '@components/atoms/Link'
import { ListDisc } from '@components/atoms/List'
import { IconChevronRight } from '@components/icons'
import { ApiResult, FaqSolved } from '@components/utils/search/store'
import { ReadmoreTrigger, ReadmoreArrow } from '@components/atoms/Readmore'
import { TxtEmp01 } from '@components/atoms/Txt'

const RelatedItems = styled.div`
  margin-top: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
`
const RelatedItemList = styled.div`
  display: flex;
  img {
    width: 80px;
    height: 80px;
  }
`
const LinkIconAfter = styled.button`
  color: ${props => props.theme.colors.link};
  text-decoration: underline;
  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:active {
    text-decoration: none;
  }
  > span {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    margin-right: 5px;
    padding-left: 4px;
    &::before {
      display: inline-block;
    }
  }
`
const HeadingCustom = styled(Heading)`
  border-top: 1px solid ${props => props.theme.colors.monotone75};
`
export const setSearch = (query: string, lid?: string) => {
  let newSearch = window.location.search
  const encodedQuery = encodeURI(query)
  newSearch = `?q=${encodedQuery}`
  if (lid) newSearch += `&l-id=${lid}`
  window.location.search = newSearch
}
export const getTabInfoByCategories = (categories: string[]) => {
  const tabInfoStore = [
    { label: 'プラン', category: 'plan', width: 80 },
    { label: 'オプションサービス', category: 'service', width: 176 },
    { label: '製品', category: 'product', width: 64 },
    { label: '通信エリア', category: 'area', width: 112 },
    { label: '店舗', category: 'store', width: 64 },
    { label: 'キャンペーン', category: 'campaign', width: 128 },
    { label: 'お客様サポート', category: 'guide+support', width: 144 },
    { label: 'よくあるご質問', category: 'faq', width: 144 },
    { label: 'その他', category: 'other', width: 100 },
  ]

  return tabInfoStore.filter(el => {
    return categories.includes(el.category)
  })
}
export const TabContent = (
  apiResult: ApiResult,
  filteredResults: ApiResult['results'],
  currentCategory: string,
  lid: string = '',
  searchResultClickHandler: MouseEventHandler = () => {},
  faqSolvedState?: FaqSolved,
  itemsState: ApiResult['items'] = [],
  updateItemsState?: Dispatch<SetStateAction<ApiResult['items']>>,
) => {
  const isEmpty: boolean = apiResult.matching_result === 0
  const appendLid = lid ? `?l-id=${lid}` : ''
  const targetRelatedProducts =
    (apiResult.items || []).filter(
      v => v.category === 'all' || v.category === currentCategory,
    ) || []
  const relatedProductsClickHandler: MouseEventHandler = e => {
    sessionStorage.setItem(
      'deepqa_analysis',
      JSON.stringify({ is_smart_ad: true }),
    )
    searchResultClickHandler(e)
  }
  const contentList = filteredResults
    .map((el, i) => {
      const solvedVal =
        (faqSolvedState &&
          faqSolvedState.find(v => el.url.includes(v.name))?.solved) ||
        null
      return (
        <li
          className={Utils['Mt-32']}
          key={`quickLinkList-${i}`}
          data-category={el.categories}
        >
          <LabelNormalSingle className={Utils['Mr-16']}>
            {getTabInfoByCategories([currentCategory])[0].label}
          </LabelNormalSingle>
          <LinkNormal
            href={`${el.url}${appendLid}`}
            onMouseDown={searchResultClickHandler}
          >
            {el.title}
          </LinkNormal>
          {currentCategory === 'faq' && solvedVal && (
            <LabelNormalSingle className={`${Utils['Ml-16']}`}>
              <TxtEmp01>{`${solvedVal}人以上の方が解決`}</TxtEmp01>
            </LabelNormalSingle>
          )}
          <p className={Utils['Mt-8']}>{el.description}</p>
        </li>
      )
    })
    .filter(el => {
      return currentCategory.includes(el.props['data-category'][0])
    })
  return isEmpty ? (
    <>
      <p className={Utils['Mt-32']}>{apiResult.response_text}</p>
      <Heading className={Utils['Mt-48']} level="4">
        検索のヒント
      </Heading>
      <ListDisc
        className={Utils['Mt-24']}
        text={[
          { text: '質問に誤字・脱字がないか確認してください。' },
          { text: '別の質問を試してみてください。' },
          { text: 'より一般的な言葉を使ってみてください。' },
        ]}
      />
      <HeadingCustom
        className={`${Utils['Mt-64']} ${Utils['Pt-64']}`}
        level="4"
      >
        よく検索されるワード
      </HeadingCustom>
      <ul className={Utils['Mt-24']}>
        {apiResult.popular_words.map((el, i) => {
          return (
            <li className={Utils['Mt-16']} key={`popularWards-${i}`}>
              <LinkIconAfter
                onClick={e => setSearch(e.currentTarget.innerText)}
              >
                {el.input_text}
                <IconChevronRight />
              </LinkIconAfter>
            </li>
          )
        })}
      </ul>
    </>
  ) : (
    <>
      <p className={Utils['Mt-32']}>{apiResult.response_text}</p>
      {targetRelatedProducts.length > 0 && (
        <RelatedItems>
          <Heading className={Utils['Mt-24']} level="4">
            {`検索ワード関連製品 ${targetRelatedProducts.length}件`}
          </Heading>
          {(itemsState.length > 0
            ? itemsState
            : targetRelatedProducts.slice(0, 3)
          ).map((el, i) => {
            return (
              <RelatedItemList
                className={Utils['Mt-24']}
                key={`relatedItemList-${i}`}
              >
                <img className={Utils['Mr-16']} src={el.img} alt="" />
                <div>
                  <LinkNormal
                    href={el.url}
                    onMouseDown={relatedProductsClickHandler}
                  >
                    {el.title}
                  </LinkNormal>
                  <p className={Utils['Mt-8']}>{el.description}</p>
                </div>
              </RelatedItemList>
            )
          })}
          {targetRelatedProducts.length > 3 &&
            targetRelatedProducts.length - itemsState.length > 0 && (
              <ReadmoreTrigger>
                <button
                  onClick={() => {
                    const itemsLength = itemsState.length
                      ? itemsState.length
                      : 3
                    updateItemsState &&
                      updateItemsState(
                        targetRelatedProducts.slice(0, itemsLength + 3),
                      )
                  }}
                >
                  次の3件を表示
                  <ReadmoreArrow />
                </button>
              </ReadmoreTrigger>
            )}
        </RelatedItems>
      )}
      <Heading className={Utils['Mt-48']} level="4">
        {`検索結果 ${contentList.length}件`}
      </Heading>
      <ul key="searchResultList">{contentList}</ul>
    </>
  )
}