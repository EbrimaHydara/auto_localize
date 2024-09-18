import React, { FormEvent, useEffect, useRef, useState } from 'react'
import {
  HeaderWrapper,
  HeaderCustomerHeading,
  HeaderMainContainer,
  HeaderLogoWrapper,
  HeaderLogoHeading,
  HeaderLogoDiv,
  HeaderLogoFiveMillionSub,
  HeaderNav,
  HeaderDropdown,
  HeaderDropdownIcon,
  HeaderSubContainer,
  HeaderNavSub,
  HeaderNavSubGrid,
  HeaderNavSubGridWrap,
  HeaderNavCategory,
  HeaderNavCategoryName,
  HeaderNavLists,
  HeaderNavList,
  HeaderNavListSub,
  HeaderIconWorldHikari,
  HeaderEcare,
  HeaderEcareIcon,
  HeaderEcareText,
  HeaderApply,
  HeaderApplyButton,
  HeaderDrawerIcon,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderSearchText,
  HeaderDrawer,
  HeaderDrawerClose,
  HeaderSearchPopularWords,
  HeaderDrawerContainer,
  HeaderDrawerBtns,
  HeaderDrawerList,
  HeaderDrawerSub,
  HeaderDrawerMenu,
  HeaderDrawerBtnPrimary,
  HeaderDrawerBtnSecondary,
  HeaderDrawerLayer,
  HeaderDrawerLayerBack,
  HeaderDrawerLayerContent,
  HeaderDrawerListLayer,
  HeaderOverlay,
  HeaderDrawerText,
  HeaderSearchClose,
  HeaderSearchWrap,
  HeaderSearchContents,
  HeaderSearchBnrWrapper,
  HeaderSearchBox,
  HeaderSearchBtn,
  HeaderSearchBtnIcon,
  HeaderSearchBtnSubmit,
  HeaderSearchContainer,
  HeaderSearchInput,
  HeaderSearchLabel,
  HeaderSearchRelatedWords,
  HeaderSearchSuggestList,
  HeaderSearchSuggestProduct,
} from '@components/atoms/GlobalHeader'
import { assets } from '@components/utils/assets'
import { SystemContainer } from '@components/layout/System'
import {
  IconBuildingLine,
  IconChevronLeft,
  IconChevronRight,
  IconCommentLine,
  IconMenu,
  IconNewTabLine,
  IconPriceLine,
  IconRakutenAccountLine,
  IconSearch,
  IconShopLine,
  IconSignHelpLine,
  IconSignInfoLine,
  IconSmartphoneLine,
  IconWorldLine,
  IconX,
} from '@components/icons'
import { LinkIconAfter } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'
import Store, { ApiResult } from '@components/utils/search/store'
import { Heading } from '@components/atoms/Heading'
import { ButtonLinkNormal } from '@components/atoms/ButtonLink'
import { ReadmoreTrigger, ReadmoreArrow } from '@components/atoms/Readmore'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import styled from 'styled-components'
import { MediaImageV2 } from '@components/layout/MediaV2'
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`

interface GlobalHeaderProps {
  page?: string
  applyHide?: boolean
}
export const GlobalHeader = (props: GlobalHeaderProps) => {
  const { page, applyHide } = props
  const eCarePath = 'https://portal.mobile.rakuten.co.jp/'
  const [currentState1, updateCurrentState1] = useState<boolean>(false)
  const [currentState2, updateCurrentState2] = useState<boolean>(false)
  const [currentState3, updateCurrentState3] = useState<boolean>(false)
  const [currentState4, updateCurrentState4] = useState<boolean>(false)
  const [searchExpandedState, updatesSearchExpandedState] =
    useState<boolean>(false)
  const [drawerExpandedState, updateDrawerExpandedState] =
    useState<boolean>(false)
  const [drawerLayerState1, updateDrawerLayerState1] = useState<boolean>(false)
  const [drawerLayerState2, updateDrawerLayerState2] = useState<boolean>(false)
  const [drawerLayerState3, updateDrawerLayerState3] = useState<boolean>(false)
  const [drawerLayerState4, updateDrawerLayerState4] = useState<boolean>(false)
  const [drawerLayerState5, updateDrawerLayerState5] = useState<boolean>(false)
  const [drawerLayerState6, updateDrawerLayerState6] = useState<boolean>(false)
  const [drawerLayerState7, updateDrawerLayerState7] = useState<boolean>(false)
  const [drawerLayerState8, updateDrawerLayerState8] = useState<boolean>(false)
  const [drawerLayerState9, updateDrawerLayerState9] = useState<boolean>(false)
  const [drawerLayerState10, updateDrawerLayerState10] =
    useState<boolean>(false)
  const [overlayHiddenState, updateOverlayHiddenState] = useState<boolean>(true)
  const stateSets: {
    [key: string]: React.Dispatch<React.SetStateAction<boolean>>
  } = {
    updateCurrentState1: updateCurrentState1,
    updateCurrentState2: updateCurrentState2,
    updateCurrentState3: updateCurrentState3,
    updateCurrentState4: updateCurrentState4,
    updateDrawerLayerState1: updateDrawerLayerState1,
    updateDrawerLayerState2: updateDrawerLayerState2,
    updateDrawerLayerState3: updateDrawerLayerState3,
    updateDrawerLayerState4: updateDrawerLayerState4,
    updateDrawerLayerState5: updateDrawerLayerState5,
    updateDrawerLayerState6: updateDrawerLayerState6,
    updateDrawerLayerState7: updateDrawerLayerState7,
    updateDrawerLayerState8: updateDrawerLayerState8,
    updateDrawerLayerState9: updateDrawerLayerState9,
    updateDrawerLayerState10: updateDrawerLayerState10,
  }
  const toggleMenu = (index: number, isOpen: boolean = false) => {
    stateSets[`updateCurrentState${index}`](isOpen)
  }
  const openDrawerMenu = () => {
    updateDrawerExpandedState(true)
    updateOverlayHiddenState(false)
  }
  const toggleDrawerLayerMenu = (index: number, isOpen: boolean = false) => {
    stateSets[`updateDrawerLayerState${index}`](isOpen)
  }
  const closeOverlay = () => {
    updateDrawerExpandedState(false)
    updatesSearchExpandedState(false)
    updateDrawerLayerState1(false)
    updateDrawerLayerState2(false)
    updateDrawerLayerState3(false)
    updateDrawerLayerState4(false)
    updateDrawerLayerState5(false)
    updateDrawerLayerState6(false)
    updateDrawerLayerState7(false)
    updateDrawerLayerState8(false)
    updateDrawerLayerState9(false)
    updateDrawerLayerState10(false)
    updateOverlayHiddenState(true)
  }

  useEffect(() => {
    if (!overlayHiddenState) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
    }
  }, [overlayHiddenState])

  // Search Related Variables>>>
  const SCOPE = 'mno_whole_site'
  const DEEPQA_ANALYSIS = 'deepqa_analysis'
  // <<<Search Related Variables

  // Search Related Refs>>>
  const sessionIdRef = useRef<string>('')
  const sessionStorageRef = useRef<Storage | null>(null)
  // <<<Search Related Refs

  // Search Related States>>>
  const [searchWord, setSearchWord] = useState<string | null>(null)
  const [relatedWords, updateRelatedWords] = useState<
    ApiResult['related_words']
  >([])
  const [popularWords, setPopularWords] = useState<ApiResult['popular_words']>(
    [],
  )
  const [historyWords, setHistoryWords] = useState<string[]>([])
  const [suggestItem, setSuggestItem] = useState<ApiResult['quick_links']>([])
  const [suggestProduct, setSuggestProduct] = useState<ApiResult['items']>([])
  const [suggestProductMore, setSuggestProductMore] = useState<
    ApiResult['items']
  >([])
  const [suggestBnr, setSuggestBnr] = useState<ApiResult['contents']>([])
  const [hasBeenOpened, setHasBeenOpened] = useState<boolean>(false)
  // <<<Search Related States

  // Search related functions>>>
  const openSearch = () => {
    Store.actions.storageCheck(setHistoryWords)
    updatesSearchExpandedState(true)
    updateOverlayHiddenState(false)
    // 初回のみリクエスト
    if (hasBeenOpened) return
    setHasBeenOpened(true)
    Store.actions.recommendItemApi('', (data: ApiResult) => {
      setSuggestBnr(data.contents || [])
      Store.actions.sendAnalysisApi({
        name: 'impression',
        data: {
          input_text: '',
          smart_input_items: [],
          campaign_items: data.contents || [],
          product_items: [],
          scope: SCOPE,
        },
        session_id: sessionIdRef.current,
        ua: window.navigator.userAgent,
      })
    })
    Store.actions.highFrequencyApi(
      'whole_site',
      (data: ApiResult['popular_words']) => {
        setPopularWords(data)
      },
    )
  }

  const submitSearch = (
    event: MouseEvent | FormEvent,
    lid: string = 'support_top2_search',
  ) => {
    event.preventDefault()
    if (!searchWord) return
    const encodeWord = encodeURI(searchWord)
    Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, {
      input_text: searchWord,
      sent_from_deepqa: true,
    })
    window.location.href = `/search/?q=${encodeWord}&l-id=${lid}`
  }
  const relationSearch = (word: string, lid?: string) => {
    const encodeWord = encodeURI(word)
    const lidParam = lid ? `&l-id=${lid}` : ''
    window.location.href = `/search/?q=${encodeWord}${lidParam}`
  }
  const suggestItemClickHandler = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    searchWord: string,
    item: { is_smart_input?: boolean; is_smart_ad?: boolean },
  ) => {
    e.preventDefault()
    const elm = e.currentTarget as HTMLAnchorElement
    // left/middle click
    if (!sessionIdRef.current || e.button > 1) return
    await Store.actions
      .sendAnalysisApi({
        name: 'click_url',
        data: {
          input_text: searchWord,
          is_smart_input: item.is_smart_input || false,
          is_smart_ad: item.is_smart_ad || false,
          from_related_word: false,
          from_suggestion: false,
          sent_from_deepqa: true,
          scope: SCOPE,
          url: elm.href,
        },
        session_id: sessionIdRef.current,
        ua: window.navigator.userAgent,
      })
      .catch(err => console.log(err))
    const _item = JSON.parse(
      sessionStorageRef.current?.getItem(DEEPQA_ANALYSIS) || '{}',
    )
    const requiredData = {
      referrer: window.location.href,
      scope: SCOPE,
      sent_from_deepqa: true,
    }
    let payload = { ..._item, ...requiredData }
    Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, payload)
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

  useEffect(() => {
    if (searchWord === null) return
    if (searchWord.length > 1) {
      ;(async () => {
        const apiData = await Promise.all([
          Store.actions.relatedWordsApi(searchWord, (data: ApiResult) => {
            updateRelatedWords(data.related_words)
            setSuggestItem(data.quick_links || [])
          }),
          Store.actions.recommendItemApi(searchWord, (data: ApiResult) => {
            setSuggestProduct(data.items || [])
            setSuggestBnr((data.contents || []).slice(0, 1))
          }),
        ])
        const _suggestItem = apiData[0].quick_links
        const _suggestBnr = apiData[1].contents.slice(0, 1)
        const _suggestProduct = apiData[1].items
        if (!sessionIdRef.current) return
        Store.actions.sendAnalysisApi({
          name: 'impression',
          data: {
            input_text: searchWord,
            smart_input_items: _suggestItem,
            campaign_items: _suggestBnr,
            product_items: _suggestProduct,
            scope: SCOPE,
          },
          session_id: sessionIdRef.current,
          ua: window.navigator.userAgent,
        })
      })()
    } else if (searchWord.length === 0) {
      ;(async () => {
        const apiData = await Store.actions.recommendItemApi(
          '',
          (data: ApiResult) => {
            setSuggestBnr(data.contents || [])
          },
        )
        const _suggestBnr = apiData.contents
        if (!sessionIdRef.current) return
        Store.actions.sendAnalysisApi({
          name: 'impression',
          data: {
            input_text: '',
            smart_input_items: [],
            campaign_items: _suggestBnr,
            product_items: [],
            scope: SCOPE,
          },
          session_id: sessionIdRef.current,
          ua: window.navigator.userAgent,
        })
      })()
    }
  }, [searchWord])

  const displayCategory = (directoryName: string) => {
    interface Table {
      [key: string]: string
    }
    const table: Table = {
      plan: '料金プラン',
      product: '製品',
      area: '通信・エリア',
      store: '店舗',
      service: 'オプションサービス',
      campaign: 'キャンペーン・特典',
      'guide+support': 'お客様サポート',
      faq: 'よくあるご質問',
      other: 'その他',
    }
    const keys = Object.keys(table)
    let categoryName: string = 'その他'
    if (keys.indexOf(directoryName) > -1) {
      categoryName = table[directoryName]
    }
    return categoryName
  }

  const LID = {
    HIGH_FREQUENCY: 'snavi_mno_frequency_',
    HISTORY: 'snavi_mno_history_',
    SUGGEST_ITEM: 'support_top2_search',
    RELATED_WORD: 'snavi_mno_related_word_',
  }
  // <<<Search related functions

  useEffect(() => {
    sessionIdRef.current = Store.actions.manageSessionId(document, localStorage)
    sessionStorageRef.current = sessionStorage
  }, [])

  interface SearchContentSectionProps {
    searchWord: string
    relatedWords: ApiResult['related_words']
    historyWords: string[]
    popularWords: ApiResult['popular_words']
  }
  const SearchContentSection = (props: SearchContentSectionProps) => {
    const { searchWord, relatedWords, historyWords, popularWords } = props
    if (searchWord.length === 0) {
      return (
        <div>
          <div>
            {popularWords.length > 0 && (
              <div className={Utils['Mt-24']}>
                <Heading level="4" as="h2">
                  よく検索されるワード
                </Heading>
                <HeaderSearchPopularWords>
                  {popularWords.map((elem, i) => (
                    <p key={`popularWords-${i}`}>
                      <ButtonLinkNormal
                        className={Utils['Align-left']}
                        onClick={() =>
                          relationSearch(
                            elem.input_text,
                            `${LID.HIGH_FREQUENCY}${++i}`,
                          )
                        }
                      >
                        {elem.input_text}
                      </ButtonLinkNormal>
                    </p>
                  ))}
                </HeaderSearchPopularWords>
              </div>
            )}
          </div>
          {historyWords.length > 0 && (
            <HeaderSearchContainer>
              <Heading level="4" as="h2">
                検索履歴
              </Heading>
              {historyWords.map((elem, i) => (
                <p className={Utils['Mt-16']} key={`historyWords-${i}`}>
                  <ButtonLinkNormal
                    className={Utils['Align-left']}
                    onClick={() => relationSearch(elem, `${LID.HISTORY}${++i}`)}
                  >
                    {elem}
                  </ButtonLinkNormal>
                </p>
              ))}
            </HeaderSearchContainer>
          )}
          {suggestBnr && suggestBnr.length > 0 && (
            <div className={Utils['Mt-24']}>
              <HeaderSearchBnrWrapper>
                {suggestBnr.slice(0, 3).map((elem, i) => (
                  <a
                    href={elem.url}
                    key={i}
                    onMouseDown={e => {
                      suggestItemClickHandler(e, searchWord, {
                        is_smart_ad: true,
                      })
                    }}
                  >
                    <img src={elem.img} alt={elem.title} />
                  </a>
                ))}
              </HeaderSearchBnrWrapper>
            </div>
          )}
        </div>
      )
    } else if (searchWord.length > 1) {
      return (
        <div>
          {relatedWords.length > 0 && (
            <>
              <div className={Utils['Mt-24']}>
                <span className={Utils['Mr-8']}>関連ワード：</span>
                {relatedWords.map((el, i) => (
                  <HeaderSearchRelatedWords
                    key={`relatedWords-${i}`}
                    className={Utils['Mr-16']}
                  >
                    <ButtonLinkNormal
                      className={Utils['Align-left']}
                      onClick={e => {
                        e.preventDefault()
                        Store.actions.setDeepqaAnalysisItem(
                          sessionStorageRef.current,
                          {
                            input_text: el.keyword,
                            from_related_word: true,
                          },
                        )
                        relationSearch(el.keyword, `${LID.RELATED_WORD}${++i}`)
                      }}
                    >
                      {el.keyword}
                    </ButtonLinkNormal>
                  </HeaderSearchRelatedWords>
                ))}
              </div>
            </>
          )}
          {suggestBnr && suggestBnr.length > 0 && (
            <>
              <HeaderSearchBnrWrapper className={Utils['Mt-24']}>
                <a
                  href={suggestBnr[0].url}
                  onMouseDown={e => {
                    suggestItemClickHandler(e, searchWord, {
                      is_smart_ad: true,
                    })
                  }}
                >
                  <img src={suggestBnr[0].img} alt={suggestBnr[0].title} />
                </a>
              </HeaderSearchBnrWrapper>
            </>
          )}
          {suggestItem && suggestItem.length > 0 && (
            <HeaderSearchSuggestList>
              <li>
                <Heading level="4">検索結果</Heading>
              </li>
              {suggestItem.slice(0, 3).map((elem, i) => (
                <li key={i}>
                  <p>
                    {elem.categories.map((elemI, i) => (
                      <HeaderSearchLabel key={i}>
                        {displayCategory(elemI)}
                      </HeaderSearchLabel>
                    ))}
                    <a
                      href={`${elem.url}?l-id=${LID.SUGGEST_ITEM}`}
                      onMouseDown={e =>
                        suggestItemClickHandler(e, searchWord, {
                          is_smart_input: true,
                        })
                      }
                    >
                      {elem.title}
                    </a>
                  </p>
                  <p>{elem.description}</p>
                </li>
              ))}
            </HeaderSearchSuggestList>
          )}
          {suggestProduct && suggestProduct.length > 0 && (
            <HeaderSearchContainer>
              <Heading level="4">関連のおすすめ情報</Heading>
              <HeaderSearchSuggestProduct>
                {(suggestProductMore && suggestProductMore.length > 0
                  ? suggestProductMore
                  : suggestProduct.slice(0, 3)
                ).map((elem, i) => (
                  <li key={i}>
                    <div>
                      <a
                        href={elem.url}
                        onMouseDown={e => {
                          suggestItemClickHandler(e, searchWord, {
                            is_smart_ad: true,
                          })
                        }}
                      >
                        <img src={elem.img} width="300" alt="" />
                      </a>
                    </div>
                    <div>
                      <p>
                        <a
                          href={elem.url}
                          onMouseDown={e => {
                            suggestItemClickHandler(e, searchWord, {
                              is_smart_ad: true,
                            })
                          }}
                        >
                          {elem.title}
                        </a>
                      </p>
                      <p>{elem.description}</p>
                    </div>
                  </li>
                ))}
              </HeaderSearchSuggestProduct>
              {suggestProduct.length > 3 &&
                suggestProduct.length - (suggestProductMore || []).length >
                  0 && (
                  <ReadmoreTrigger>
                    <button
                      onClick={() => {
                        const itemsLength = (suggestProductMore || []).length
                          ? (suggestProductMore || []).length
                          : 3
                        setSuggestProductMore(
                          suggestProduct.slice(0, itemsLength + 3),
                        )
                      }}
                    >
                      次の3件を表示
                      <ReadmoreArrow />
                    </button>
                  </ReadmoreTrigger>
                )}
            </HeaderSearchContainer>
          )}
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <HeaderWrapper>
      <HeaderCustomerHeading>
        <SystemContainer>
          <ul>
            <li>
              <IconRakutenAccountLine aria-current="true" />
              個人のお客様
            </li>
            <li>
              <a
                href="https://business.mobile.rakuten.co.jp/?scid=wi_rmb_pers_header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBuildingLine />
                <span>法人のお客様</span>
              </a>
            </li>
            <li>
              <a href="/fee/saikyo-plan/en/?l-id=gnavi_fee_saikyo-plan-en">
                <span>Price plan in English</span>
              </a>
            </li>
          </ul>
        </SystemContainer>
      </HeaderCustomerHeading>
      <HeaderMainContainer>
        <HeaderLogoWrapper>
          {page && page === 'top' ? (
            <HeaderLogoHeading>
              <a href="/?l-id=gnavi_logo">Rakuten Mobile</a>
            </HeaderLogoHeading>
          ) : (
            <HeaderLogoDiv>
              <a href="/?l-id=gnavi_logo">Rakuten Mobile</a>
            </HeaderLogoDiv>
          )}
          <HeaderLogoFiveMillionSub>
            <a href="/feature/why-rakuten-mobile/?l-id=gnavi_500-banner_why-rakuten-mobile">
              おかげさまで650万回線
            </a>
          </HeaderLogoFiveMillionSub>
        </HeaderLogoWrapper>
        <HeaderNav>
          <ul>
            <li>
              <HeaderDropdown
                aria-current={currentState1}
                aria-expanded={currentState1}
                aria-controls="dropdownV2-content-1"
                onMouseEnter={() => toggleMenu(1, true)}
                onMouseLeave={() => toggleMenu(1)}
              >
                プラン・製品
                <HeaderDropdownIcon />
              </HeaderDropdown>
              <HeaderSubContainer
                isOpen={currentState1}
                onMouseEnter={() => toggleMenu(1, true)}
                onMouseLeave={() => toggleMenu(1)}
              >
                <div>
                  <HeaderNavSubGrid id="dropdownV2-content-1">
                    <HeaderNavSubGridWrap>
                      <HeaderNavCategory>
                        <HeaderNavCategoryName>
                          スマートフォン
                        </HeaderNavCategoryName>
                        <HeaderNavLists>
                          <HeaderNavList>
                            <li>
                              <a href="/fee/saikyo-plan/?l-id=gnavi_fee_saikyo-plan">
                                <IconPriceLine />
                                Rakuten最強プラン
                              </a>
                              <HeaderNavListSub>
                                <li>
                                  <a href="/fee/saikyo-plan/data-type/?l-id=gnavi_fee_saikyo-plan_data-type">
                                    <TxtEmp01>データタイプ</TxtEmp01>
                                  </a>
                                </li>
                                <li>
                                  <a href="/fee/family/?l-id=gnavi_fee_family">
                                    <TxtEmp01>最強家族プログラム</TxtEmp01>
                                    <p>家族でトクしたい方に</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="/fee/youth/?l-id=gnavi_fee_youth">
                                    <TxtEmp01>最強青春プログラム</TxtEmp01>
                                    <p>22歳までずーっとおトク</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="/fee/kids/?l-id=gnavi_fee_kids">
                                    <TxtEmp01>最強こどもプログラム</TxtEmp01>
                                    <p>12歳までとーってもおトク</p>
                                  </a>
                                </li>
                              </HeaderNavListSub>
                            </li>
                            <li>
                              <a href="/fee/simulation/?l-id=gnavi_fee_un-limit_simulation">
                                <img
                                  src={`${assets}img/common/icon-fee-simulation.svg`}
                                  width="20"
                                  height="20"
                                  alt=""
                                />
                                料金シミュレーション
                              </a>
                            </li>
                          </HeaderNavList>
                          <HeaderNavList width="220px">
                            <li>
                              <a href="/product/?l-id=gnavi_product">
                                <IconSmartphoneLine />
                                製品
                              </a>
                              <HeaderNavListSub>
                                <li>
                                  <a href="/product/iphone/?l-id=gnavi_product_iphone">
                                    iPhone
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/apple-watch/?l-id=gnavi_product_apple-watch">
                                    Apple Watch
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/smartphone/?l-id=gnavi_product_smartphone">
                                    Android/Rakutenオリジナル
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/internet/?l-id=gnavi_product_internet">
                                    Wi-Fiルーター
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/accessory/?l-id=gnavi_product_accessory">
                                    アクセサリ
                                  </a>
                                </li>
                              </HeaderNavListSub>
                            </li>
                            <li>
                              <a href="/service/?l-id=gnavi_service">
                                <img
                                  src={`${assets}img/common/icon-service.svg`}
                                  width="20"
                                  height="21"
                                  alt=""
                                />
                                オプションサービス
                              </a>
                            </li>
                          </HeaderNavList>
                          <HeaderNavList>
                            <li>
                              <a href="/product/sim/?l-id=gnavi_product_sim">
                                <img
                                  src={`${assets}img/common/icon-sim.svg`}
                                  width="20"
                                  height="20"
                                  alt=""
                                />
                                SIM
                              </a>
                              <HeaderNavListSub>
                                <li>
                                  <a href="/product/sim/esim/?l-id=gnavi_product_sim_esim">
                                    eSIM
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/sim/dual-sim/?l-id=gnavi_product_sim_dual-sim">
                                    デュアルSIM
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/byod/?l-id=gnavi_product_byod">
                                    ご利用製品の対応確認
                                  </a>
                                </li>
                              </HeaderNavListSub>
                            </li>
                          </HeaderNavList>
                        </HeaderNavLists>
                      </HeaderNavCategory>
                    </HeaderNavSubGridWrap>
                    <HeaderNavSubGridWrap>
                      <HeaderNavCategory>
                        <HeaderNavCategoryName>
                          ホームインターネット
                        </HeaderNavCategoryName>
                        <HeaderNavList>
                          <li>
                            <a href="/internet/turbo/?l-id=gnavi_internet_turbo">
                              <IconWorldLine />
                              Rakuten Turbo
                            </a>
                            <HeaderNavListSub>
                              <li>
                                <a href="/internet/turbo/fee/?l-id=gnavi_internet_turbo_fee">
                                  料金プラン
                                </a>
                              </li>
                              <li>
                                <a href="/internet/turbo/product/?l-id=gnavi_internet_turbo_product">
                                  製品
                                </a>
                              </li>
                            </HeaderNavListSub>
                          </li>
                        </HeaderNavList>
                        <HeaderNavList>
                          <li>
                            <a href="/hikari/?l-id=gnavi_hikari">
                              <HeaderIconWorldHikari />
                              楽天ひかり
                            </a>
                            <HeaderNavListSub>
                              <li>
                                <a href="/hikari/fee/pricelist/?l-id=gnavi_hikari_fee">
                                  料金プラン
                                </a>
                              </li>
                            </HeaderNavListSub>
                          </li>
                        </HeaderNavList>
                        <HeaderNavList>
                          <li>
                            <a href="/internet/?l-id=gnavi_internet#diagnose">
                              <img
                                src={`${assets}img/common/icon-internet.svg`}
                                width="20"
                                height="20"
                                alt=""
                              />
                              インターネット診断
                            </a>
                          </li>
                        </HeaderNavList>
                      </HeaderNavCategory>
                    </HeaderNavSubGridWrap>
                    <HeaderNavSubGridWrap>
                      <HeaderNavCategory>
                        <HeaderNavCategoryName>
                          スマホとセットでおトク
                        </HeaderNavCategoryName>
                        <HeaderNavList>
                          <li>
                            <a href="/internet/turbo/campaign/six-month-free/?l-id=gnavi_internet_turbo_campaign_set">
                              <img
                                src={`${assets}img/common/spset.svg`}
                                width="20"
                                height="20"
                                alt=""
                              />
                              スマホ+Rakuten Turbo
                              <p>20,000ポイント還元</p>
                            </a>
                          </li>
                          <li>
                            <a href="/hikari/campaign/six-month-free/?l-id=gnavi_hikari_campaign_six-month-free_set">
                              <img
                                src={`${assets}img/common/icon-sp-hikari.svg`}
                                width="20"
                                height="20"
                                alt=""
                              />
                              スマホ+楽天ひかり
                              <p>
                                初めて申し込みなら、ひかりの月額基本料6カ月0円
                              </p>
                            </a>
                          </li>
                        </HeaderNavList>
                      </HeaderNavCategory>
                    </HeaderNavSubGridWrap>
                  </HeaderNavSubGrid>
                </div>
              </HeaderSubContainer>
            </li>
            <li>
              <HeaderDropdown
                aria-current={currentState2}
                aria-expanded={currentState2}
                aria-controls="dropdownV2-content-2"
                onMouseEnter={() => toggleMenu(2, true)}
                onMouseLeave={() => toggleMenu(2)}
              >
                通信エリア・店舗
                <HeaderDropdownIcon />
              </HeaderDropdown>
              <HeaderSubContainer
                isOpen={currentState2}
                onMouseEnter={() => toggleMenu(2, true)}
                onMouseLeave={() => toggleMenu(2)}
              >
                <div>
                  <HeaderNavSub id="dropdownV2-content-2">
                    <HeaderNavCategory width="245px">
                      <HeaderNavCategoryName>通信エリア</HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/area/?l-id=gnavi_area">
                            <IconSmartphoneLine />
                            スマートフォン
                          </a>
                        </li>
                        <li>
                          <a href="/internet/turbo/area/?l-id=gnavi_internet_turbo_area">
                            <IconWorldLine />
                            Rakuten Turbo
                          </a>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                    <HeaderNavCategory width="245px">
                      <HeaderNavCategoryName>
                        ご来店のお客様へ
                      </HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/shop/?l-id=gnavi_shop">
                            <IconShopLine />
                            ショップ（店舗）
                          </a>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                  </HeaderNavSub>
                </div>
              </HeaderSubContainer>
            </li>
            <li>
              <HeaderDropdown
                aria-current={currentState3}
                aria-expanded={currentState3}
                aria-controls="dropdownV2-content-3"
                onMouseEnter={() => toggleMenu(3, true)}
                onMouseLeave={() => toggleMenu(3)}
              >
                キャンペーン
                <HeaderDropdownIcon />
              </HeaderDropdown>
              <HeaderSubContainer
                isOpen={currentState3}
                onMouseEnter={() => toggleMenu(3, true)}
                onMouseLeave={() => toggleMenu(3)}
              >
                <div>
                  <HeaderNavSub id="dropdownV2-content-3">
                    <HeaderNavCategory width="245px">
                      <HeaderNavCategoryName>
                        キャンペーン
                      </HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/campaign/?l-id=gnavi_campaign">
                            <IconSmartphoneLine />
                            スマートフォン
                          </a>
                        </li>
                        <li>
                          <a href="/internet/turbo/campaign/six-month-free/?l-id=gnavi_internet_turbo_campaign">
                            <IconWorldLine />
                            Rakuten Turbo
                          </a>
                        </li>
                        <li>
                          <a href="/hikari/campaign/six-month-free/?l-id=gnavi_hikari_campaign_six-month-free">
                            <HeaderIconWorldHikari />
                            楽天ひかり
                          </a>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                  </HeaderNavSub>
                </div>
              </HeaderSubContainer>
            </li>
            <li>
              <HeaderDropdown
                aria-current={currentState4}
                aria-expanded={currentState4}
                aria-controls="dropdownV2-content-4"
                onMouseEnter={() => toggleMenu(4, true)}
                onMouseLeave={() => toggleMenu(4)}
              >
                お知らせ・サポート
                <HeaderDropdownIcon />
              </HeaderDropdown>
              <HeaderSubContainer
                isOpen={currentState4}
                onMouseEnter={() => toggleMenu(4, true)}
                onMouseLeave={() => toggleMenu(4)}
              >
                <div>
                  <HeaderNavSub id="dropdownV2-content-4">
                    <HeaderNavCategory width="295px">
                      <HeaderNavCategoryName>
                        お知らせ・その他
                      </HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/information/?l-id=gnavi_info">
                            <IconSignInfoLine />
                            お知らせ
                          </a>
                          <HeaderNavListSub>
                            <li>
                              <a href="https://mobile.rakuten.co.jp/mvno/?l-id=gnavi_mvno">
                                スーパーホーダイ／組み合わせプランを
                                <br />
                                ご利用中の方
                              </a>
                            </li>
                          </HeaderNavListSub>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                    <HeaderNavCategory>
                      <HeaderNavCategoryName>
                        ご検討中の方へ
                      </HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/guide/procedure/?l-id=gnavi_guide_procedure">
                            <img
                              src={`${assets}img/common/icon-new-user.svg`}
                              alt=""
                            />
                            お申し込みガイド
                          </a>
                        </li>
                        <li>
                          <a href="/feature/why-rakuten-mobile/?l-id=gnavi_feature_why-rakuten-mobile">
                            <IconSignHelpLine />
                            なぜ今楽天モバイルなのか
                          </a>
                        </li>
                        <li>
                          <a href="/uservoice/?l-id=gnavi_uservoice">
                            <IconCommentLine />
                            お客様の声
                          </a>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                    <HeaderNavCategory>
                      <HeaderNavCategoryName>
                        お客様サポート
                      </HeaderNavCategoryName>
                      <HeaderNavList>
                        <li>
                          <a href="/support/?l-id=gnavi_support">
                            <IconSmartphoneLine />
                            楽天モバイル
                          </a>
                        </li>
                        <li>
                          <a href="/internet/turbo/support/?l-id=gnavi_internet_turbo_support">
                            <IconWorldLine />
                            Rakuten Turbo
                          </a>
                        </li>
                        <li>
                          <a href="/hikari/support/?l-id=gnavi_hikari_support">
                            <HeaderIconWorldHikari />
                            楽天ひかり
                          </a>
                        </li>
                      </HeaderNavList>
                    </HeaderNavCategory>
                  </HeaderNavSub>
                </div>
              </HeaderSubContainer>
            </li>
          </ul>
          <HeaderSearchIcon
            aria-controls="js-search"
            data-ratid="gnavi-search"
            data-ratevent="click"
            data-ratparam="all"
            onClick={openSearch}
          >
            <IconSearch />
            <HeaderSearchText>検索</HeaderSearchText>
          </HeaderSearchIcon>
          <HeaderEcare>
            <a href={`${eCarePath}my-rakuten-mobile?l-id=network_gnavi_ecare`}>
              <HeaderEcareIcon />
              <HeaderEcareText>my 楽天モバイル</HeaderEcareText>
            </a>
          </HeaderEcare>
          {!applyHide && (
            <HeaderApply>
              <HeaderApplyButton href="/guide/application/?ref=header&lid-r=gnavi_onboarding">
                お申し込み
              </HeaderApplyButton>
            </HeaderApply>
          )}
          <HeaderDrawerIcon
            aria-controls="js-drawer-v2"
            data-ratid="gnavi-menu"
            data-ratevent="click"
            data-ratparam="all"
            onClick={openDrawerMenu}
          >
            <IconMenu />
            <HeaderDrawerText>メニュー</HeaderDrawerText>
          </HeaderDrawerIcon>
        </HeaderNav>
      </HeaderMainContainer>

      <HeaderSearch id="js-search" isOpen={searchExpandedState}>
        <HeaderSearchWrap>
          <HeaderSearchClose
            aria-controls="js-search"
            aria-expanded={searchExpandedState}
            onClick={closeOverlay}
          >
            <IconX />
          </HeaderSearchClose>
          <HeaderSearchContents>
            <form onSubmit={submitSearch}>
              <HeaderSearchBox>
                <HeaderSearchInput
                  type="text"
                  placeholder="キーワードを入力"
                  autoComplete="off"
                  value={searchWord || ''}
                  aria-label="検索ボックス"
                  onChange={e => {
                    setSearchWord(e.target.value)
                    setSuggestProductMore([])
                  }}
                />
                <HeaderSearchBtn onClick={submitSearch}>
                  <HeaderSearchBtnIcon />
                  <HeaderSearchBtnSubmit type="submit" value="" />
                </HeaderSearchBtn>
              </HeaderSearchBox>
            </form>
            <SearchContentSection
              searchWord={searchWord || ''}
              relatedWords={relatedWords}
              historyWords={historyWords}
              popularWords={popularWords}
            />
          </HeaderSearchContents>
        </HeaderSearchWrap>
      </HeaderSearch>

      <HeaderDrawer id="js-drawer-v2" isOpen={drawerExpandedState}>
        <HeaderDrawerClose
          aria-controls="js-drawer-v2"
          aria-expanded={drawerExpandedState}
          onClick={closeOverlay}
        >
          <IconX />
        </HeaderDrawerClose>
        <HeaderDrawerContainer>
          <HeaderDrawerBtns>
            {!applyHide && (
              <HeaderDrawerBtnPrimary
                href="/guide/application/?ref=header&lid-r=burger_onboarding"
                as="a"
              >
                <span>お申し込み</span>
              </HeaderDrawerBtnPrimary>
            )}
            <HeaderDrawerBtnSecondary
              href={`${eCarePath}my-rakuten-mobile?l-id=network_burger_ecare`}
              aria-hidden="false"
              as="a"
            >
              <span>my 楽天モバイル</span>
            </HeaderDrawerBtnSecondary>
          </HeaderDrawerBtns>
          <HeaderDrawerList>
            <HeaderDrawerMenu
              aria-controls="js-layer-appeal"
              aria-expanded={drawerLayerState7}
              onClick={() => toggleDrawerLayerMenu(7, true)}
            >
              <div>
                ご検討中の方へ
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu
              aria-controls="js-layer-plan"
              aria-expanded={drawerLayerState1}
              onClick={() => toggleDrawerLayerMenu(1, true)}
            >
              <div
                data-ratid="gnavi-menu_plan"
                data-ratevent="click"
                data-ratparam="all"
              >
                料金プラン・製品
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu
              aria-controls="js-layer-area"
              aria-expanded={drawerLayerState6}
              onClick={() => toggleDrawerLayerMenu(6, true)}
            >
              <div>
                通信エリア
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu>
              <a href="/shop/?l-id=burger_shop">ショップ（店舗）</a>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu
              aria-controls="js-layer-campaign"
              aria-expanded={drawerLayerState9}
              onClick={() => toggleDrawerLayerMenu(9, true)}
            >
              <div
                data-ratid="gnavi-menu_campaign"
                data-ratevent="click"
                data-ratparam="all"
              >
                キャンペーン
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>

            <HeaderDrawerMenu>
              <a href="/information/?l-id=burger_info">お知らせ</a>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu
              aria-controls="js-layer-support"
              aria-expanded={drawerLayerState8}
              onClick={() => toggleDrawerLayerMenu(8, true)}
            >
              <div>
                お客様サポート
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
          </HeaderDrawerList>
          <HeaderDrawerSub>
            <p>
              <LinkIconAfter href="https://mobile.rakuten.co.jp/mvno/?l-id=burger_mvno">
                スーパーホーダイ／組み合わせプランをご利用中の方
                <IconChevronRight />
              </LinkIconAfter>
            </p>
            <p className={Utils['Mt-16']}>
              <LinkIconAfter href="/fee/saikyo-plan/en/?l-id=burger_fee_saikyo-plan-en">
                Price plan in English
                <IconChevronRight />
              </LinkIconAfter>
            </p>
            <p className={Utils['Mt-16']}>
              <LinkIconAfter
                href="https://business.mobile.rakuten.co.jp/?scid=wi_rmb_pers_burger"
                target="_blank"
                rel="noopener"
              >
                法人のお客様
                <IconNewTabLine />
              </LinkIconAfter>
            </p>
          </HeaderDrawerSub>
        </HeaderDrawerContainer>
      </HeaderDrawer>

      <HeaderDrawerLayer id="js-layer-plan" isOpen={drawerLayerState1}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(1)}>
          <IconChevronLeft />
          料金プラン・製品
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderNavCategoryName className={Utils['Mt-32']}>
            スマートフォン
          </HeaderNavCategoryName>
          <HeaderDrawerListLayer>
            <HeaderDrawerMenu onClick={() => toggleDrawerLayerMenu(10, true)}>
              <div
                aria-controls="js-layer-price-plan"
                aria-expanded={drawerLayerState10}
                data-ratid="gnavi-menu_price"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconPriceLine />
                料金プラン
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <li>
              <a href="/fee/simulation/?l-id=burger_fee_un-limit_simulation">
                <img
                  src={`${assets}img/common/icon-fee-simulation.svg`}
                  width="20"
                  height="20"
                  alt=""
                />
                料金シミュレーション
              </a>
            </li>
            <li>
              <a href="/service/?l-id=burger_service">
                <img
                  src={`${assets}img/common/icon-service.svg`}
                  width="20"
                  height="21"
                  alt=""
                />
                オプションサービス
              </a>
            </li>
            <HeaderDrawerMenu onClick={() => toggleDrawerLayerMenu(2, true)}>
              <div
                aria-controls="js-layer-plan-product"
                aria-expanded={drawerLayerState2}
                data-ratid="gnavi-menu_product"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconSmartphoneLine />
                製品
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu onClick={() => toggleDrawerLayerMenu(3, true)}>
              <div
                aria-controls="js-layer-plan-sim"
                aria-expanded={drawerLayerState3}
              >
                <img
                  src={`${assets}img/common/icon-sim.svg`}
                  width="20"
                  height="20"
                  alt=""
                />
                SIM
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
          </HeaderDrawerListLayer>

          <TxtEmp02 as="p" className={Utils['Mt-24']}>
            おトクな割引・還元プログラムも必見
          </TxtEmp02>
          <MediaImageV2 className={Utils['Mt-8']}>
            <a href="/fee/family/?l-id=burger_banner_fee-family">
              <img
                src={`${assets}img/common/img-family-240510.png`}
                width="574"
                height="128"
                alt="最強家族プログラム"
                loading="lazy"
              />
            </a>
          </MediaImageV2>
          <BtnWrapper>
            <MediaImageV2>
              <a href="/fee/youth/?l-id=burger_banner_fee-youth">
                <img
                  src={`${assets}img/common/img-youth-240510.png`}
                  width="270"
                  height="128"
                  alt="最強青春プログラム"
                  loading="lazy"
                />
              </a>
            </MediaImageV2>
            <MediaImageV2>
              <a href="/fee/kids/?l-id=burger_banner_fee-kids">
                <img
                  src={`${assets}img/common/img-kids-240510.png`}
                  width="270"
                  height="128"
                  alt="最強こどもプログラム"
                  loading="lazy"
                />
              </a>
            </MediaImageV2>
          </BtnWrapper>

          <HeaderNavCategoryName className={Utils['Mt-24']}>
            ホームインターネット
          </HeaderNavCategoryName>
          <HeaderDrawerListLayer>
            <HeaderDrawerMenu onClick={() => toggleDrawerLayerMenu(4, true)}>
              <div
                aria-controls="js-layer-plan-turbo"
                aria-expanded={drawerLayerState4}
                data-ratid="gnavi-menu_turbo"
                data-ratevent="click"
                data-ratparam="all"
              >
                <IconWorldLine />
                Rakuten Turbo
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <HeaderDrawerMenu onClick={() => toggleDrawerLayerMenu(5, true)}>
              <div
                aria-controls="js-layer-plan-hikari"
                aria-expanded={drawerLayerState5}
                data-ratid="gnavi-menu_hikari"
                data-ratevent="click"
                data-ratparam="all"
              >
                <HeaderIconWorldHikari />
                楽天ひかり
                <IconChevronRight />
              </div>
            </HeaderDrawerMenu>
            <li>
              <a href="/internet/?l-id=burger_internet#diagnose">
                <img
                  src={`${assets}img/common/icon-internet.svg`}
                  width="20"
                  height="20"
                  alt=""
                />
                インターネット診断
              </a>
            </li>
          </HeaderDrawerListLayer>

          <HeaderNavCategoryName className={Utils['Mt-24']}>
            スマホとセットでおトク
          </HeaderNavCategoryName>
          <HeaderDrawerListLayer>
            <li>
              <a href="/internet/turbo/campaign/six-month-free/?l-id=burger_internet_turbo_campaign_set">
                <img
                  src={`${assets}img/common/spset.svg`}
                  width="20"
                  height="20"
                  alt=""
                />
                スマホ+Rakuten Turbo
                <TxtCap as="p" className={Utils['Ml-24']}>
                  20,000ポイント還元
                </TxtCap>
              </a>
            </li>
            <li>
              <a href="/hikari/campaign/six-month-free/?l-id=burger_hikari_campaign_six-month-free_set">
                <img
                  src={`${assets}img/common/icon-sp-hikari.svg`}
                  width="20"
                  height="20"
                  alt=""
                />
                スマホ+楽天ひかり
                <TxtCap as="p" className={Utils['Ml-24']}>
                  初めて申し込みなら、ひかりの月額基本料6カ月0円
                </TxtCap>
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-price-plan" isOpen={drawerLayerState10}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(10)}>
          <IconPriceLine />
          <IconChevronLeft />
          料金プラン
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/fee/saikyo-plan/?l-id=burger_fee_saikyo-plan">
                Rakuten最強プラン
                <TxtCap as="p">シンプルで使いやすいワンプラン</TxtCap>
              </a>
            </li>
            <li>
              <a href="/fee/saikyo-plan/data-type/?l-id=burger_fee_saikyo-plan_data-type">
                Rakuten最強プラン{' '}
                <span className="Drawer-list-small">データタイプ</span>
                <TxtCap as="p">データ通信のみ必要な方に</TxtCap>
              </a>
            </li>
            <li>
              <a href="/fee/family/?l-id=burger_fee_family">
                最強家族プログラム
                <TxtCap as="p">家族でトクしたい方に</TxtCap>
              </a>
            </li>
            <li>
              <a href="/fee/youth/?l-id=burger_fee_youth">
                最強青春プログラム
                <TxtCap as="p">22歳までずーっとおトク</TxtCap>
              </a>
            </li>
            <li>
              <a href="/fee/kids/?l-id=burger_fee_kids">
                最強こどもプログラム
                <TxtCap as="p">12歳までとーってもおトク</TxtCap>
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-plan-product" isOpen={drawerLayerState2}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(2)}>
          <IconSmartphoneLine />
          <IconChevronLeft />
          製品
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/product/?l-id=burger_product">製品トップ</a>
            </li>
            <li>
              <a href="/product/iphone/?l-id=burger_product_iphone">iPhone</a>
            </li>
            <li>
              <a href="/product/apple-watch/?l-id=burger_product_apple-watch">
                Apple Watch
              </a>
            </li>
            <li>
              <a href="/product/smartphone/?l-id=burger_product_smartphone">
                Android/Rakutenオリジナル
              </a>
            </li>
            <li>
              <a href="/product/internet/?l-id=burger_product_internet">
                Wi-Fiルーター
              </a>
            </li>
            <li>
              <a href="/product/accessory/?l-id=burger_product_accessory">
                アクセサリ
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-plan-sim" isOpen={drawerLayerState3}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(3)}>
          <img
            src={`${assets}img/common/icon-sim.svg`}
            width="20"
            height="20"
            alt=""
          />
          <IconChevronLeft />
          SIM
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/product/sim/?l-id=burger_product_sim">SIM</a>
            </li>
            <li>
              <a href="/product/sim/esim/?l-id=burger_product_sim_esim">eSIM</a>
            </li>
            <li>
              <a href="/product/sim/dual-sim/?l-id=burger_product_sim_dual-sim">
                デュアルSIM
              </a>
            </li>
            <li>
              <a href="/product/byod/?l-id=burger_product_byod">
                ご利用製品の対応確認
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-plan-turbo" isOpen={drawerLayerState4}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(4)}>
          <IconWorldLine />
          <IconChevronLeft />
          Rakuten Turbo
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/internet/turbo/?l-id=burger_internet_turbo">トップ</a>
            </li>
            <li>
              <a href="/internet/turbo/fee/?l-id=burger_internet_turbo_fee">
                料金プラン
              </a>
            </li>
            <li>
              <a href="/internet/turbo/product/?l-id=burger_internet_turbo_product">
                製品
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-plan-hikari" isOpen={drawerLayerState5}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(5)}>
          <HeaderIconWorldHikari />
          <IconChevronLeft />
          楽天ひかり
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/hikari/?l-id=burger_hikari">トップ</a>
            </li>
            <li>
              <a href="/hikari/fee/pricelist/?l-id=burger_hikari_fee">
                料金プラン
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-area" isOpen={drawerLayerState6}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(6)}>
          <IconChevronLeft />
          通信エリア
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/area/?l-id=burger_area">スマートフォン</a>
            </li>
            <li>
              <a href="/internet/turbo/area/?l-id=burger_internet_turbo_area">
                Rakuten Turbo
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-campaign" isOpen={drawerLayerState9}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(9)}>
          <IconChevronLeft />
          キャンペーン
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/campaign/?l-id=burger_campaign">スマートフォン</a>
            </li>
            <li>
              <a href="/internet/turbo/campaign/six-month-free/?l-id=burger_internet_turbo_campaign">
                Rakuten Turbo
              </a>
            </li>
            <li>
              <a href="/hikari/campaign/six-month-free/?l-id=burger_hikari_campaign_six-month-free">
                楽天ひかり
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-appeal" isOpen={drawerLayerState7}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(7)}>
          <IconChevronLeft />
          ご検討中の方へ
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/guide/procedure/?l-id=burger_guide_procedure">
                お申し込みガイド
              </a>
            </li>
            <li>
              <a href="/feature/why-rakuten-mobile/?l-id=burger_feature_why-rakuten-mobile">
                なぜ今楽天モバイルなのか
              </a>
            </li>
            <li>
              <a href="/uservoice/?l-id=burger_uservoice">お客様の声</a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderDrawerLayer id="js-layer-support" isOpen={drawerLayerState8}>
        <HeaderDrawerLayerBack onClick={() => toggleDrawerLayerMenu(8)}>
          <IconChevronLeft />
          お客様サポート
        </HeaderDrawerLayerBack>
        <HeaderDrawerLayerContent>
          <HeaderDrawerListLayer>
            <li>
              <a href="/support/?l-id=burger_support">楽天モバイル</a>
            </li>
            <li>
              <a href="/internet/turbo/support/?l-id=burger_internet_turbo_support">
                Rakuten Turbo
              </a>
            </li>
            <li>
              <a href="/hikari/support/?l-id=burger_hikari_support">
                楽天ひかり
              </a>
            </li>
          </HeaderDrawerListLayer>
        </HeaderDrawerLayerContent>
      </HeaderDrawerLayer>

      <HeaderOverlay
        aria-hidden={overlayHiddenState}
        onClick={closeOverlay}
      ></HeaderOverlay>
    </HeaderWrapper>
  )
}
