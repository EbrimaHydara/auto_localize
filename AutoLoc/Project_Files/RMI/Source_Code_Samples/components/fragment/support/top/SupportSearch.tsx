import { Heading } from '@components/atoms/Heading'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Input } from '@components/atoms/Input'
import { IconSearch } from '@components/icons'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01 } from '@components/atoms/Txt'
import Store, { ApiResult } from '@components/utils/search/store'
const Block = styled.div`
  margin-top: 16px;
  padding: 24px 16px;
  box-shadow: 0 2px 2px #f2eee8;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  background-color: #fff;
  ${mixins.mq.MinL} {
    margin-top: 24px;
    padding: 40px 16px;
  }
`
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  ${mixins.mq.MinL} {
    column-gap: 40px;
    row-gap: 0;
    flex-direction: row;
  }

  &::before {
    ${mixins.mq.MinL} {
      display: block;
      content: '';
      width: 171px;
      height: 155px;
      background-image: url(${assets}img/support/search.png);
      background-size: contain;
    }
  }

  .search {
    ${mixins.mq.MinL} {
      flex: 1;
    }
  }

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 164px;
    background-image: url(${assets}img/support/solution.png);
    background-position: center top;
    background-size: 180px 164px;
    ${mixins.mq.MinL} {
      width: 171px;
      height: 155px;
      background-size: contain;
    }
  }
`
const InputWrap = styled.div`
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    font-size: 24px;
    border: none;
  }
`
const CustomInput = styled(Input)`
  position: relative;
  background-color: transparent;
  border-radius: 25px;
  border-width: 1px;
  padding: 12px 56px 12px 16px;
  border-color: ${props => props.theme.colors.monotone75};
  height: auto;
  z-index: 2;
  &:hover,
  &:focus {
    border-width: 1px;
    padding: 12px 56px 12px 16px;
  }
  &::placeholder {
    color: ${props => props.theme.colors.monotone75};
  }
  &.suggest {
    border-radius: 25px 25px 0 0;
  }
`
const SuggestBlock = styled.div`
  position: relative;
  z-index: 1;
  &[aria-hidden='true'] {
    display: none;
  }

  .list {
    position: absolute;
    width: 100%;
    border: solid 1px ${props => props.theme.colors.monotone75};
    border-top: none;
    border-radius: 0 0 25px 25px;
    margin-top: -1px;
  }

  .item {
    &:last-child {
      border-radius: 0 0 24px 24px;
      overflow: hidden;
    }
  }

  .link {
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px 15px;
    color: ${props => props.theme.colors.monotone20};
    background: #fff;
    text-decoration: none;
    &:hover {
      background: ${props => props.theme.colors.monotone97};
    }
  }
`
const HighFrequencyList = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  .item {
    display: inline-block;
    vertical-align: middle;
    &:not(:first-child) {
      margin-right: 16px;
      padding-left: 0;
      &::before {
        margin: -3px 16px 0 15px;
        display: inline-block;
        content: '';
        width: 1px;
        height: 16px;
        background-color: ${props => props.theme.colors.monotone75};
      }
    }
  }
`

type Props = {
  className?: string
  ratId?: string
  status: string
}

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

export const SupportSearch = ({ className, ratId, status }: Props) => {
  type highFrequency = {
    input_text: string
  }
  const sessionStorageRef = useRef<Storage | null>(null)
  const [isSuggest, setIsSuggest] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState<string>('')
  const [suggestItem, setSuggestItem] = useState<{ text: string }[]>([])
  const [highFrequencyList, setHighFrequencyList] = useState(apiResult)

  const suggestList = (e: React.FormEvent<HTMLInputElement>) => {
    Store.actions.relatedWordsApi(e.currentTarget.value, setSuggestItem, {
      use_input_suggestions: true,
      limit: 5,
      categories: ['faq', 'guide+support'],
    })
    setInputSearch(e.currentTarget.value)
    if (suggestItem.length > 0) setIsSuggest(true)
  }

  const hideSuggestList = () => {
    setTimeout(() => {
      setSuggestItem([])
      setIsSuggest(false)
    }, 200)
  }

  const formSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputSearch.length > 0) {
      window.location.href = `/search-b/?q=${encodeURI(
        inputSearch,
      )}&l-id=support_top2_search`
    }
  }

  useEffect(() => {
    sessionStorageRef.current = sessionStorage
  }, [])

  useEffect(() => {
    const scope =
      status === 'member' ? 'registered_user' : 'non_registered_user'
    Store.actions.highFrequencyApi(
      scope,
      (data: ApiResult['popular_words']) => {
        setHighFrequencyList &&
          setHighFrequencyList((prevState: ApiResult) => ({
            ...prevState,
            popular_words: data,
          }))
      },
    )
  }, [status])

  return (
    <div
      className={className}
      {...(ratId && {
        'data-ratid': ratId,
        'data-ratevent': 'appear',
        'data-ratparam': 'all',
      })}
    >
      <Heading level="2" className={Utils['Align-center']}>
        お困りごとは何ですか
      </Heading>
      <Block>
        <Grid>
          <div className="search">
            <form className="search" onSubmit={formSearch}>
              <InputWrap>
                <CustomInput
                  type="text"
                  placeholder="例：アイフォンを利用したい"
                  onChange={suggestList}
                  onBlur={hideSuggestList}
                  aria-label="検索ボックス"
                  autoComplete="off"
                  className={
                    isSuggest && suggestItem.length > 0 ? 'suggest' : ''
                  }
                />
                <IconSearch as="button" type="submit" className="icon" />
              </InputWrap>
              <SuggestBlock aria-hidden={!isSuggest}>
                {isSuggest && suggestItem.length > 0 && (
                  <ul className="list">
                    {suggestItem.map((item, index) => {
                      return (
                        <li
                          key={`${item.text}${index}`}
                          className="item"
                          onClick={() => {
                            Store.actions.setDeepqaAnalysisItem(
                              sessionStorageRef.current,
                              {
                                inquiry_to_suggestion: inputSearch,
                                inquiry_to_deepqa: item.text,
                                selected_suggestion_item: index,
                                suggestion_items: suggestItem,
                                from_suggestion: true,
                              },
                            )
                          }}
                        >
                          <LinkNormal
                            href={`/search-b/?q=${encodeURI(
                              item.text,
                            )}&l-id=support_top2_search_smart`}
                            className="link"
                            onClick={e => console.log(e.currentTarget)}
                          >
                            {item.text}
                          </LinkNormal>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </SuggestBlock>
            </form>
            <TxtEmp01
              as="div"
              className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              よくあるお困りごと
            </TxtEmp01>
            <HighFrequencyList className={Utils['Mt-8']}>
              {highFrequencyList.popular_words.map(
                (item: highFrequency, index) => {
                  return (
                    <li key={index} className="item">
                      <LinkNormal
                        href={`/search-b/?q=${encodeURI(
                          item.input_text,
                        )}&l-id=support_top2_search`}
                        className="link"
                      >
                        {item.input_text}
                      </LinkNormal>
                    </li>
                  )
                },
              )}
            </HighFrequencyList>
          </div>
        </Grid>
      </Block>
    </div>
  )
}
