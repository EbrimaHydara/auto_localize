import type { NextPage } from 'next'
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  MouseEventHandler,
  useRef,
} from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/HikariCustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { HikariHeader } from '@components/molecules/HikariHeader'
import { HikariFooter } from '@components/molecules/HikariFooter'
import { HikariBreadcrumbsHead } from '@components/atoms/HikariBreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { Search } from '@components/atoms/Search'
import { ButtonLinkNormal } from '@components/atoms/ButtonLink'
import { TabCategory } from '@components/atoms/TabCategory'
import { HikariTabContent } from '@components/fragment/search/HikariTabContent'
import { ButtonRegular, ButtonRegularLarge } from '@components/atoms/Buttons'
import Store, { ApiResult } from '@components/utils/search/HikariStore'

const SearchCustom = styled(Search)`
  max-width: 680px;
  input {
    &:hover {
      background: #fffaf2;
    }
  }
`
const SuggestWrapper = styled.div`
  position: relative;
`
const SuggestList = styled.ul`
  position: absolute;
  top: -3px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  width: 100%;
  max-width: 680px;
  z-index: 1;
  li {
    padding: 8px 15px;
    &:hover {
      background: ${props => props.theme.colors.monotone97};
    }
  }
`
const RelatedWord = styled.dl`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
  dt {
    margin-right: 4px;
  }
  dd + dd {
    margin-left: 8px;
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    dd + dd {
      margin-left: 16px;
    }
  }
`

const apiResult: ApiResult = {
  query: '',
  current_category: '',
  related_words_count: 0,
  matching_result: 0,
  related_words: [],
  popular_words: [],
  recommended_items_categories: [],
  items_count: 0,
  contents_count: 0,
  items: [],
  contents: [],
  related_contents_categories: [],
  results: [],
  response_text: '',
}

export const getTabInfoByCategories = (categories: string[]) => {
  const tabInfoStore = [
    { label: 'よくあるご質問', category: 'faq', width: 144 },
    { label: 'お客様サポート', category: 'support', width: 144 },
    { label: '料金・オプション', category: 'fee', width: 144 },
    { label: 'キャンペーン・特典', category: 'campaign', width: 176 },
    { label: 'お知らせ', category: 'information', width: 144 },
    { label: 'その他', category: 'other', width: 100 },

    // { label: 'よくあるご質問', category: 'faq', width: 144 },
    // { label: '料金プラン', category: 'plan', width: 112 },
    // { label: '製品', category: 'product', width: 64 },
    // { label: '通信・エリア', category: 'area', width: 128 },
    // { label: '店舗', category: 'store', width: 64 },
    // { label: 'オプションサービス', category: 'service', width: 176 },
    // { label: 'キャンペーン・特典', category: 'campaign', width: 176 },
    // { label: 'お客様サポート', category: 'guide+support', width: 144 },
  ]

  return tabInfoStore.filter(el => {
    return categories.includes(el.category)
  })
}

export const setSearch = (query: string, lid?: string) => {
  let newSearch = window.location.search
  const encodedQuery = encodeURI(query)
  newSearch = `?q=${encodedQuery}`
  if (lid) newSearch += `&l-id=${lid}`
  window.location.search = newSearch
}

// Searchコンポーネントと名前が重複しているため他ページと命名ルールが違う
const SearchTop: NextPage = () => {
  const pagetitle = '楽天ひかり検索結果'
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/hikari/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const SCOPE = 'mno_whole_site'
  const DEEPQA_ANALYSIS = 'deepqa_analysis'
  const [pageHeadingState, updatePageHeadingState] = useState('')
  const [apiResultState, updateApiResultState] = useState(apiResult)
  const [inputValueState, updateInputValueState] = useState('')
  const [suggestListState, updateSuggestListState] = useState<
    { text: string }[]
  >([])
  const [searchApiState, updateSearchApiState] = useState<
    { categories: string[] }[]
  >([])
  const [relatedWordsApiState, updateRelatedWordsApiState] = useState<
    { keyword: string }[]
  >([])
  const [categoryState, updateCategoryState] = useState('')
  const [tabInfoState, updateTabInfoState] = useState<typeof tabInfo>([])
  const [othersState, updateOthersState] = useState<typeof tabInfo>([])
  const [focusState, updateFocusState] = useState<boolean>(false)
  const [inheritingLidState, updateInhritingLidState] = useState('')
  const sessionIdRef = useRef<string>('')
  const sessionStorageRef = useRef<Storage | null>(null)
  const [itemsState, updateItemsState] = useState<ApiResult['items']>([])
  const searchWord = apiResultState.query
  const onInput = (e: string) => {
    updateInputValueState(e)
    Store.actions.relatedWordsApi(e, updateSuggestListState, {
      use_input_suggestions: true,
      limit: 5,
      categories: [],
    })
  }
  const callApiFuncs = (
    inputValue: string,
    sessionId: string = '',
    isBrowserBack = false,
  ) => {
    Store.actions.searchApi(inputValue, [], (data: ApiResult) => {
      const category =
        data.results.length === 0 ? 'none' : data.results[0].categories[0]
      updateSearchApiState(data.results)
      updateCategoryState(category)
      updateApiResultState(prevState => ({
        ...prevState,
        query: inputValue,
        results: data.results,
        current_category: category,
        response_text: data.response_text,
        matching_result: data.matching_result,
      }))
    })
    Store.actions.relatedWordsApi(
      inputValue,
      (data: { related_words: { keyword: string }[] }) => {
        updateRelatedWordsApiState(data.related_words)
        updateApiResultState(prevState => ({
          ...prevState,
          related_words: data.related_words,
        }))
      },
    )
    Store.actions.recommendItemApi(inputValue, (data: ApiResult) => {
      updateApiResultState(prevState => ({
        ...prevState,
        items_count: data.items_count,
        contents_count: data.contents_count,
        items: data.items,
        contents: data.contents,
      }))
    })
    Store.actions.setStorage(inputValue)
    const stringItem = sessionStorage.getItem(DEEPQA_ANALYSIS) || '{}'
    const item = JSON.parse(stringItem)
    if (!(isBrowserBack || item.isBrowserBack)) {
      if (sessionId) {
        Store.actions.sendAnalysisApi({
          name: 'inquiry_input',
          data: {
            inquiry_to_deepqa: item.inquiry_to_deepqa || inputValue,
            inquiry_to_suggestion: item.inquiry_to_suggestion || '',
            selected_suggestion_item: Number.isFinite(
              item.selected_suggestion_item,
            )
              ? item.selected_suggestion_item
              : null,
            suggestion_items: item.suggestion_items || [],
            scope: SCOPE,
            from_related_word: item.from_related_word || false,
            from_suggestion: item.from_suggestion || false,
          },
          session_id: sessionId,
          ua: window.navigator.userAgent,
        })
      }
    }
  }
  const updateCategory: MouseEventHandler = e => {
    const target = e.target as HTMLElement
    const category = target.dataset.category
    updateCategoryState(category as string)
  }
  const searchResultClickHandler: MouseEventHandler = async e => {
    e.preventDefault()
    console.log(e)
    const elm = e.currentTarget as HTMLAnchorElement
    const stringItem = sessionStorage.getItem(DEEPQA_ANALYSIS) || '{}'
    const item = JSON.parse(stringItem)
    // left/middle click
    if (e.button <= 1) {
      if (sessionIdRef.current) {
        await Store.actions
          .sendAnalysisApi({
            name: 'click_url',
            data: {
              input_text: searchWord || '',
              is_smart_input: item.is_smart_input || false,
              is_smart_ad: item.is_smart_ad || false,
              from_related_word: item.from_related_word || false,
              from_suggestion: item.from_suggestion || false,
              sent_from_deepqa: true,
              scope: SCOPE,
              url: elm.href,
            },
            session_id: sessionIdRef.current,
            ua: window.navigator.userAgent,
          })
          .catch(err => console.log(err))
      }
      Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, {
        from_related_word: item.from_related_word || false,
        from_suggestion: item.from_suggestion || false,
        referrer: window.location.href,
        scope: SCOPE,
        sent_from_deepqa: true,
      })
    }
    const isOpenTargetByKeyboard = () => {
      let isTarget = false
      if (/Macintosh/.test(window.navigator.userAgent) && e.metaKey)
        isTarget = true
      if (/Windows/.test(window.navigator.userAgent) && e.ctrlKey)
        isTarget = true
      return isTarget
    }
    if (e.button === 0 && !isOpenTargetByKeyboard())
      window.location.href = elm.href
  }
  // This function dose not work on Safari which will be force a reload.
  const isBrowserBack = (window: Window) => {
    let flag = false
    const ua = window.navigator.userAgent
    const isSafari = !ua.includes('Chrome') && ua.includes('Safari')
    if (
      !isSafari &&
      (
        performance.getEntriesByType(
          'navigation',
        )[0] as PerformanceNavigationTiming
      ).type === 'back_forward'
    ) {
      flag = true
    }
    if (!window._hasPageShowEvent && isSafari) {
      window._hasPageShowEvent = true
      window.addEventListener('pageshow', e => {
        if (e.persisted) {
          const item = JSON.parse(
            sessionStorage.getItem(DEEPQA_ANALYSIS) || '{}',
          )
          item.isBrowserBack = true
          sessionStorage.setItem(DEEPQA_ANALYSIS, JSON.stringify(item))
          window.location.reload()
        }
      })
    }
    return flag
  }
  const onSubmit = useCallback(() => {
    Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, {})
    callApiFuncs(inputValueState)
    setSearch(inputValueState)
  }, [inputValueState])
  const useSearchQueryByRelatedWords = useCallback<MouseEventHandler>(e => {
    e.preventDefault()
    const target = e.target as HTMLElement
    const query = target.innerText
    const dd = target.parentElement as HTMLElement
    updateInputValueState(query)
    callApiFuncs(query)
    setSearch(
      query,
      `snavi_mno_related_word_${
        Array.from(
          (dd.parentElement as HTMLElement).querySelectorAll('dd'),
        ).indexOf(dd) + 1
      }`,
    )
    Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, {
      input_text: query,
      from_related_word: true,
    })
  }, [])
  const tabInfo = useMemo(() => {
    return getTabInfoByCategories(
      searchApiState.reduce(
        (prev: string[], cur) => prev.concat(cur.categories),
        [],
      ),
    )
  }, [searchApiState])
  const filteredResults: ApiResult['results'] = useMemo(() => {
    const categoryMap = new Map()
    return apiResultState.results.filter(el => {
      if (categoryMap.has(el.categories[0])) {
        categoryMap.set(el.categories[0], categoryMap.get(el.categories[0]) + 1)
      } else {
        categoryMap.set(el.categories[0], 1)
      }
      return categoryMap.get(el.categories[0]) <= 10
    })
  }, [apiResultState.results])

  useEffect(() => {
    searchWord && updatePageHeadingState(`「${searchWord}」の検索結果`)
  }, [searchWord])

  const HIGH_FREQUENCY_LID = 'rhk_support_search'
  const SMART_INPUT_LID = 'rhk_support_search_smart'
  useEffect(() => {
    updateInhritingLidState(
      [HIGH_FREQUENCY_LID, SMART_INPUT_LID].find(v =>
        window.location.search.endsWith(v),
      ) || '',
    )

    sessionIdRef.current = Store.actions.manageSessionId(document, localStorage)
    sessionStorageRef.current = sessionStorage
    if (window.location.search && window.location.search.startsWith('?q=')) {
      const regex = /[?&]q=([^&]+)/
      const match = window.location.search.match(regex)
      const searchWord = match ? decodeURI(match[1]) : ''
      updateInputValueState(searchWord)
      callApiFuncs(searchWord, sessionIdRef.current, isBrowserBack(window))
    }
  }, [])

  useEffect(() => {
    Store.actions.highFrequencyApi(
      'whole_site',
      (data: ApiResult['popular_words']) => {
        updateApiResultState &&
          updateApiResultState((prevState: ApiResult) => ({
            ...prevState,
            popular_words: data,
          }))
      },
    )
  }, [updateApiResultState])

  useEffect(() => {
    const tabCategory = document.querySelector('ul[role="tablist"]')
    const showCategorySet = new Set<string>()
    showCategorySet.add('other')
    filteredResults.forEach(el => showCategorySet.add(el.categories[0]))
    const showCategories: string[] = Array.from(showCategorySet)
    const observer = new ResizeObserver(entries => {
      const tabInfoClone: typeof tabInfo = []
      let othersTarget: typeof tabInfo = []
      for (let entry of entries) {
        if (
          entry.contentBoxSize[0].inlineSize <
          tabInfo.reduce((prev, cur) => (prev += cur.width), 0)
        ) {
          if (!tabInfo.some(v => v.category === 'other'))
            tabInfoClone.push({
              label: 'その他',
              category: 'other',
              width: 100,
            })
          for (let i = 0; i < showCategories.length; i++) {
            const targetTabInfo = tabInfo.find(
              v => v.category === showCategories[i],
            )
            targetTabInfo && tabInfoClone.push(targetTabInfo)
            const itemWidth = (tabInfoClone || []).reduce(
              (prev, cur) => (prev += cur.width),
              0,
            )
            if (itemWidth > entry.contentBoxSize[0].inlineSize) {
              tabInfoClone.pop()
              othersTarget = tabInfo.filter(
                v => !tabInfoClone.some(_v => _v.category === v.category),
              )
              const sortedTabInfo = tabInfo.filter(v =>
                tabInfoClone.some(_v => _v.category === v.category),
              )
              const other = sortedTabInfo.splice(
                sortedTabInfo.findIndex(v => v.category === 'other'),
                1,
              )[0]
              sortedTabInfo.push(other)
              updateTabInfoState(sortedTabInfo)
              updateOthersState(othersTarget)
              break
            }
          }
        } else {
          updateTabInfoState([...tabInfoClone])
          updateOthersState([...othersTarget])
        }
      }
    })

    tabCategory && observer.observe(tabCategory)

    if (sessionIdRef.current && searchWord) {
      const stringItem = sessionStorage.getItem(DEEPQA_ANALYSIS) || '{}'
      const item = JSON.parse(stringItem)
      Store.actions.sendAnalysisApi({
        name: 'search',
        data: {
          input_text: searchWord,
          answer_items: filteredResults.map(v => ({
            title: v.title,
            categories: v.categories,
            url: v.url,
          })),
          scope: SCOPE,
          from_related_word: item.from_related_word || false,
          from_suggestion: item.from_suggestion || false,
        },
        session_id: sessionIdRef.current,
        ua: window.navigator.userAgent,
      })
    }
  }, [tabInfo, filteredResults])

  return (
    <>
      <CustomHead pagetitle={pagetitle} description="" />
      <SystemWrapper>
        <HikariHeader />
        <HikariBreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Heading level="1" className={Utils['Mt-32']}>
            {pageHeadingState}
          </Heading>
          <SearchCustom
            className={Utils['Mt-24']}
            placeholder="検索"
            inputValue={inputValueState}
            submitValue={inputValueState}
            onInputChange={onInput}
            onSubmitHandler={() => {
              if (inputValueState) onSubmit()
            }}
            onFocusHandler={() => updateFocusState(true)}
            onBlurHandler={() => setTimeout(() => updateFocusState(false), 200)}
          />
          {focusState && suggestListState.length > 0 && (
            <SuggestWrapper>
              <SuggestList>
                {suggestListState.map((v, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      updateInputValueState(v.text)
                      Store.actions.setDeepqaAnalysisItem(
                        sessionStorageRef.current,
                        {
                          inquiry_to_suggestion: inputValueState,
                          inquiry_to_deepqa: v.text,
                          selected_suggestion_item: i,
                          suggestion_items: suggestListState,
                          from_suggestion: true,
                        },
                      )
                      callApiFuncs(v.text)
                      setSearch(v.text, SMART_INPUT_LID)
                    }}
                  >
                    {v.text}
                  </li>
                ))}
              </SuggestList>
            </SuggestWrapper>
          )}
          {relatedWordsApiState.length > 0 && (
            <>
              <RelatedWord>
                <dt>関連ワード：</dt>
                {relatedWordsApiState.map((e, i) => (
                  <dd key={i}>
                    <ButtonLinkNormal onClick={useSearchQueryByRelatedWords}>
                      {e.keyword}
                    </ButtonLinkNormal>
                  </dd>
                ))}
              </RelatedWord>
            </>
          )}
          <TabCategory
            content={(category: string) =>
              HikariTabContent(
                apiResultState,
                filteredResults,
                category,
                inheritingLidState,
                searchResultClickHandler,
                itemsState,
                updateItemsState,
              )
            }
            collapse={othersState}
            tabInfos={tabInfoState.length > 0 ? tabInfoState : tabInfo}
            currentCategory={categoryState}
            myOnClick={e => {
              updateCategory(e)
              updateItemsState([])
            }}
            id="search"
            className={Utils['Mt-56']}
          />

          {apiResultState.matching_result ? (
            <div
              className={`${Utils['Mt-64']} ${Utils['Mb-64']} ${Utils['Align-center']}`}
            >
              <ButtonRegularLarge
                as="a"
                href="/hikari/support/?l-id=snavi_hikari_support"
              >
                お客様サポートトップへ
              </ButtonRegularLarge>
            </div>
          ) : (
            <div className={`${Utils['Mt-64']} ${Utils['Mb-64']}`}>
              <ButtonRegular
                as="a"
                href="/hikari/support/?l-id=snavi_hikari_support"
              >
                お客様サポートトップへ
              </ButtonRegular>
            </div>
          )}
        </SystemContainer>

        <HikariFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default SearchTop
