import React, { FormEvent, useEffect, useRef, useState } from 'react'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderDropdown,
  HeaderDropdownIcon,
  HeaderSubContainer,
  HeaderSubContainerWide,
  HeaderLogo,
  HeaderNav,
  HeaderNavSubContainer,
  HeaderNavList,
  HeaderEcare,
  HeaderEcareIcon,
  HeaderEcareText,
  HeaderHikariNavLink,
  HeaderLinkButtonText,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderSearchText,
  GlobalLinkContainer,
  GlobalLink,
  ApplyWrapper02,
  ApplyButton,
  NavSubUl,
  DrawerWrapFixed,
  DrawerIconFixed,
  DrawerText,
  DrawerMenu,
  DrawerMain,
  DrawerList,
  DrawerContainer,
  LinkWrapper,
  HeaderLinkButton1,
  HeaderLinkButton2,
  DrawerSub,
  DrawerLayer,
  DrawerLayerBack,
  DrawerListLayer,
  DrawerLayerContent,
  HeaderDrawer,
  HeaderDrawerClose,
  HeaderSearchPopularWords,
  HeaderOverlay,
  HeaderLogoWrapper,
  HeaderContainerNewOther,
  HeaderContainerNewLogo,
  HeaderContainerInner,
  HeaderContent,
  HeaderNewItem,
  HeaderSearchClose,
  HeaderSearchWrap,
  HeaderSearchContents,
  HeaderSearchBnrWrapper,
  HeaderSearchBnrWrapper01,
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
  DrawerNavInner,
  IconArrowRightCustom3,
} from '@components/atoms/HikariHeader'
import { assets } from '@components/utils/assets'
import {
  IconMenu,
  IconX,
  IconChevronRight,
  IconChevronLeft,
  IconSearch,
} from '@components/icons'
import Utils from '@styles/Utils.module.scss'
import Store, { ApiResult } from '@components/utils/search/HikariStore'
import { Heading } from '@components/atoms/Heading'
import { ButtonLinkNormal } from '@components/atoms/ButtonLink'
import { ReadmoreTrigger, ReadmoreArrow } from '@components/atoms/Readmore'

export const HikariHeader = () => {
  const ecarepath = 'https://ms.fusioncom.co.jp/rbb/members/login'
  const [currentState1, updateCurrentState1] = useState<boolean>(false)
  const [currentState2, updateCurrentState2] = useState<boolean>(false)
  const [currentState3, updateCurrentState3] = useState<boolean>(false)
  const [searchExpandedState, updatesSearchExpandedState] =
    useState<boolean>(false)
  const [drawerExpandedState, updateDrawerExpandedState] =
    useState<boolean>(false)
  const [drawerLayerState1, updateDrawerLayerState1] = useState<boolean>(false)
  const [drawerLayerState2, updateDrawerLayerState2] = useState<boolean>(false)
  const [drawerLayerState3, updateDrawerLayerState3] = useState<boolean>(false)
  const [overlayHiddenState, updateOverlayHiddenState] = useState<boolean>(true)
  const stateSets: {
    [key: string]: React.Dispatch<React.SetStateAction<boolean>>
  } = {
    updateCurrentState1: updateCurrentState1,
    updateCurrentState2: updateCurrentState2,
    updateCurrentState3: updateCurrentState3,
    updateDrawerLayerState1: updateDrawerLayerState1,
    updateDrawerLayerState2: updateDrawerLayerState2,
    updateDrawerLayerState3: updateDrawerLayerState3,
  }

  const toggleMenuNav = (index: number, isOpen: boolean = false) => {
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
    updateOverlayHiddenState(true)
  }
  const [itemsState, updateItemsState] = useState<SuggestProduct[]>([])

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
  interface SuggestItem {
    img: string
    description: string
    url: string
    title: string
    categories: string[]
  }
  interface SuggestProduct {
    url: string
    img: string
    title: string
    description: string
  }
  interface SuggestBnr {
    url: string
    img: string
    title: string
  }
  interface PopularWords {
    input_text: string
  }
  interface RelatedWords {
    keyword: string
  }
  const [searchWord, setSearchWord] = useState<string | null>(null)
  const [relatedWords, updateRelatedWords] = useState<RelatedWords[]>([])
  const [popularWords, setPopularWords] = useState<PopularWords[]>([])
  const [historyWords, setHistoryWords] = useState<string[]>([])
  const [suggestItem, setSuggestItem] = useState<SuggestItem[]>([])
  const [suggestProduct, setSuggestProduct] = useState<SuggestProduct[]>([])
  const [suggestBnr, setSuggestBnr] = useState<SuggestBnr[]>([])
  // <<<Search Related States

  // Search related functions>>>
  const openSearch = () => {
    Store.actions.storageCheck(setHistoryWords)
    Store.actions.recommendItemApi('', (data: ApiResult) => {
      setSuggestBnr(data.contents || [])
    })
    Store.actions.highFrequencyApi(
      'whole_site',
      (data: ApiResult['popular_words']) => {
        setPopularWords(data)
      },
    )
    updatesSearchExpandedState(true)
    updateOverlayHiddenState(false)
  }

  const submitSearch = (
    event: MouseEvent | FormEvent,
    lid: string = 'rhk_support_search',
  ) => {
    event.preventDefault()
    if (!searchWord) return
    const encodeWord = encodeURI(searchWord)
    Store.actions.setDeepqaAnalysisItem(sessionStorageRef.current, {
      input_text: searchWord,
      sent_from_deepqa: true,
    })
    window.location.href = `/hikari/search/?q=${encodeWord}&l-id=${lid}`
  }
  const relationSearch = (word: string, lid?: string) => {
    const encodeWord = encodeURI(word)
    const lidParam = lid ? `&l-id=${lid}` : ''
    window.location.href = `/hikari/search/?q=${encodeWord}${lidParam}`
  }
  const suggestItemClickHandler = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    searchWord: string,
    item: { is_smart_input?: boolean; is_smart_ad?: boolean },
  ) => {
    e.preventDefault()
    const elm = e.currentTarget as HTMLAnchorElement
    // left/middle click
    if (e.button <= 1) {
      if (sessionIdRef.current) {
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
      }
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

  useEffect(() => {
    if (searchWord !== null) {
      if (searchWord.length > 1) {
        Store.actions.relatedWordsApi(searchWord, (data: ApiResult) => {
          updateRelatedWords(data.related_words)
          setSuggestItem(data.quick_links || [])
        })
        Store.actions.recommendItemApi(searchWord, (data: ApiResult) => {
          setSuggestProduct(data.items || [])
          setSuggestBnr(data.contents || [])
        })
      } else {
        Store.actions.recommendItemApi('', (data: ApiResult) => {
          setSuggestBnr(data.contents || [])
        })
      }
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
    HIGH_FREQUENCY: 'rhk_snavi_frequency_',
    HISTORY: 'rhk_snavi_history_',
    SUGGEST_ITEM: 'rhk_support_search',
    RELATED_WORD: 'rhk_snavi_related_word_',
  }
  // <<<Search related functions

  useEffect(() => {
    sessionIdRef.current = Store.actions.manageSessionId(document, localStorage)
    sessionStorageRef.current = sessionStorage
  }, [])
  interface SearchContentSectionProps {
    searchWord: string
    relatedWords: RelatedWords[]
    historyWords: string[]
    popularWords: PopularWords[]
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
          {suggestBnr.length > 0 && (
            <div className={Utils['Mt-24']}>
              <HeaderSearchBnrWrapper01>
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
              </HeaderSearchBnrWrapper01>
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
          {suggestItem?.length > 0 && (
            <HeaderSearchSuggestList>
              <li>
                <Heading level="4">検索結果</Heading>
              </li>
              {suggestItem.slice(0, 3).map((elem, i) => (
                <li key={i}>
                  <p>
                    {elem.categories.map((elemI, j) => (
                      <HeaderSearchLabel key={j}>
                        {displayCategory(elemI)}
                      </HeaderSearchLabel>
                    ))}
                    <a
                      href={`${
                        elem.url.includes('?') ? elem.url + '&' : elem.url + '?'
                      }l-id=${LID.SUGGEST_ITEM}`}
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
          {suggestProduct?.length > 0 && (
            <HeaderSearchContainer>
              {/* <Heading level="4">関連のおすすめ情報</Heading> */}
              <HeaderSearchSuggestProduct>
                {(itemsState.length > 0
                  ? itemsState
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
                suggestProduct.length - itemsState.length > 0 && (
                  <ReadmoreTrigger>
                    <button
                      onClick={() => {
                        const itemsLength = (itemsState || []).length
                          ? (itemsState || []).length
                          : 3
                        updateItemsState(
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
          {suggestBnr.length > 0 && (
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
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <HeaderWrapper id="pageTop">
        <HeaderLogoWrapper>
          <HeaderContainerNewOther>
            <HeaderContainerNewLogo
              href="/?l-id=rhk_header_hikari_01"
              data-ratid="rhk_header_hikari_01"
              data-ratevent="click"
              data-ratparam="all"
            >
              <img
                src={`${assets}img/hikari/common-v2/header-logo-pink.svg`}
                alt="Rakuten Mobile"
              />
            </HeaderContainerNewLogo>
            <GlobalLinkContainer>
              <GlobalLink
                href="/?l-id=rhk_header_hikari_02"
                data-ratid="rhk_header_hikari_02"
                data-ratevent="click"
                data-ratparam="all"
              >
                楽天モバイル
              </GlobalLink>
              <span>|</span>
              <GlobalLink
                href="/internet/turbo/?l-id=rhk_header_hikari_internet_turbo_01"
                data-ratid="rhk_header_hikari_internet_turbo_01"
                data-ratevent="click"
                data-ratparam="all"
              >
                Rakuten Turbo
              </GlobalLink>
            </GlobalLinkContainer>
          </HeaderContainerNewOther>
        </HeaderLogoWrapper>
        <HeaderContainer>
          <HeaderNavSubContainer>
            <HeaderContainerInner>
              <HeaderContent>
                <HeaderLogo
                  href="/hikari/?l-id=rhk_gheader_top_01"
                  data-lid_parts="header"
                  data-ratid="rhk_gheader_top_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <img
                    src={`${assets}img/hikari/common-v2/header-logo-white.svg`}
                    alt="Rakuten ひかり"
                    width="145"
                    height="36"
                  />
                </HeaderLogo>

                <HeaderNewItem>
                  <ApplyWrapper02>
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
                      <a
                        href={`${ecarepath}?campaign=web-rakuten&l-id=rhk_gheader_ecare&_ebx=g1rjgkpzt4.1693291119.7s1i0ki`}
                        className="js-btn-ecare"
                        aria-hidden="true"
                        data-ratid="rhk_gheader_ecare"
                        data-ratevent="click"
                        data-ratparam="all"
                      >
                        <HeaderEcareIcon />
                        <HeaderEcareText>会員ページ</HeaderEcareText>
                      </a>
                    </HeaderEcare>
                    <ApplyButton>
                      <a
                        href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=offoffer2303d6&l-id=rhk_header_onb"
                        data-lid_parts="header"
                        data-ratid="rhk_header_onb"
                        data-ratevent="click"
                        data-ratparam="all"
                      >
                        お申し込み
                      </a>
                    </ApplyButton>

                    <DrawerWrapFixed>
                      <DrawerIconFixed
                        aria-controls="js-drawer"
                        data-ratid="rhk_header_hamburger"
                        data-ratevent="click"
                        data-ratparam="all"
                        onClick={openDrawerMenu}
                      >
                        <IconMenu />
                        <DrawerText>メニュー</DrawerText>
                      </DrawerIconFixed>
                    </DrawerWrapFixed>
                  </ApplyWrapper02>
                </HeaderNewItem>
              </HeaderContent>
              <HeaderNav>
                <NavSubUl>
                  <li>
                    <a
                      href="/hikari/fee/pricelist/?l-id=rhk_gheader_fee_pricelist_01"
                      aria-current="false"
                      data-lid_parts="gheader"
                      data-ratid="rhk_gheader_fee_pricelist_01"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      料金
                    </a>
                  </li>
                  <li>
                    <HeaderDropdown
                      aria-current={currentState1}
                      aria-expanded={currentState1}
                      aria-controls="header-campaign"
                      onMouseEnter={() => toggleMenuNav(1, true)}
                      onMouseLeave={() => toggleMenuNav(1)}
                    >
                      キャンペーン
                      <HeaderDropdownIcon />
                    </HeaderDropdown>

                    <HeaderSubContainerWide
                      isOpen={currentState1}
                      onMouseEnter={() => toggleMenuNav(1, true)}
                      onMouseLeave={() => toggleMenuNav(1)}
                    >
                      <div id="header-campaign">
                        <HeaderNavList>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/campaign/six-month-free/?l-id=rhk_gheader_campaign_six-month-free_01"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_campaign_six-month-free_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              月額基本料6カ月0円キャンペーン
                            </HeaderHikariNavLink>
                          </li>
                          <li>
                            <HeaderHikariNavLink
                              href="/internet/turbo/campaign/spu/?l-id=rhk_gheader_hikari_internet_turbo_campaign_spu_01"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_campaign_spu_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              SPU（スーパーポイントアッププログラム）
                            </HeaderHikariNavLink>
                          </li>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/campaign/archive/?l-id=rhk_gheader_campaign_archive_01"
                              data-lid_parts="gheader"
                              data-lid_no="01"
                              data-ratid="rhk_gheader_campaign_archive_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              過去のキャンペーンルール
                            </HeaderHikariNavLink>
                          </li>
                        </HeaderNavList>
                      </div>
                    </HeaderSubContainerWide>
                  </li>
                  <li>
                    <HeaderDropdown
                      aria-current={currentState2}
                      aria-expanded={currentState2}
                      aria-controls="header-appeal"
                      onMouseEnter={() => toggleMenuNav(2, true)}
                      onMouseLeave={() => toggleMenuNav(2)}
                    >
                      ご検討中の方へ
                      <HeaderDropdownIcon />
                    </HeaderDropdown>

                    <HeaderSubContainer
                      isOpen={currentState2}
                      onMouseEnter={() => toggleMenuNav(2, true)}
                      onMouseLeave={() => toggleMenuNav(2)}
                    >
                      <div id="header-appeal">
                        <HeaderNavList>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/flow/?l-id=rhk_gheader_flow_01"
                              aria-current="false"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_flow_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              ご利用開始までの流れ
                            </HeaderHikariNavLink>
                          </li>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/internet/?l-id=rhk_gheader_internet_01"
                              aria-current="false"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_internet_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              速さと安定のIPv6通信
                            </HeaderHikariNavLink>
                          </li>
                        </HeaderNavList>
                      </div>
                    </HeaderSubContainer>
                  </li>
                  <li>
                    <HeaderDropdown
                      aria-current={currentState3}
                      aria-expanded={currentState3}
                      aria-controls="header-support"
                      onMouseEnter={() => toggleMenuNav(3, true)}
                      onMouseLeave={() => toggleMenuNav(3)}
                    >
                      お知らせ・サポート
                      <HeaderDropdownIcon />
                    </HeaderDropdown>

                    <HeaderSubContainer
                      isOpen={currentState3}
                      onMouseEnter={() => toggleMenuNav(3, true)}
                      onMouseLeave={() => toggleMenuNav(3)}
                    >
                      <div id="header-support">
                        <HeaderNavList>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/information/?l-id=rhk_gheader_information_01"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_information_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              お知らせ
                            </HeaderHikariNavLink>
                          </li>
                          <li>
                            <HeaderHikariNavLink
                              href="/hikari/support/?l-id=rhk_gheader_support_01"
                              aria-current="false"
                              data-lid_parts="gheader"
                              data-ratid="rhk_gheader_support_01"
                              data-ratevent="click"
                              data-ratparam="all"
                            >
                              お客様サポート
                            </HeaderHikariNavLink>
                          </li>
                        </HeaderNavList>
                      </div>
                    </HeaderSubContainer>
                  </li>
                </NavSubUl>
              </HeaderNav>
            </HeaderContainerInner>
          </HeaderNavSubContainer>
        </HeaderContainer>

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
                      updateItemsState([])
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

        <HeaderDrawer id="js-drawer" isOpen={drawerExpandedState}>
          <HeaderDrawerClose
            className="js-nav"
            aria-controls="js-drawer"
            aria-expanded={drawerExpandedState}
            onClick={closeOverlay}
          >
            <IconX />
          </HeaderDrawerClose>
          <DrawerNavInner>
            <DrawerContainer>
              <LinkWrapper>
                <HeaderLinkButton1
                  href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=6mfree2401f9&l-id=rhk_gmenu_onb"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_onb"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <HeaderLinkButtonText>お申し込み</HeaderLinkButtonText>
                </HeaderLinkButton1>
              </LinkWrapper>
              <LinkWrapper>
                <HeaderLinkButton2
                  href="https://ms.fusioncom.co.jp/rbb/members/login?campaign=web-rakuten&l-id=rhk_gmenu_ecare&_ebx=g1rjgkpzt4.1693291119.7s1i0k"
                  rel="noopener"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_ecare"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <HeaderLinkButtonText>会員ページ</HeaderLinkButtonText>
                </HeaderLinkButton2>
              </LinkWrapper>
            </DrawerContainer>
            <DrawerMain>
              <DrawerList>
                <li>
                  <a
                    href="/hikari/fee/pricelist/?l-id=rhk_gmenu_fee_pricelist_01"
                    aria-current="false"
                    data-lid_parts="gmenu"
                    data-ratid="rhk_gmenu_fee_01"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    料金
                  </a>
                </li>
                <DrawerMenu
                  aria-controls="js-layer-campaign"
                  aria-expanded={drawerLayerState1}
                  onClick={() => toggleDrawerLayerMenu(1, true)}
                >
                  <div>
                    キャンペーン
                    <IconChevronRight />
                  </div>
                </DrawerMenu>
                <DrawerMenu
                  aria-controls="js-layer-appeal"
                  aria-expanded={drawerLayerState2}
                  onClick={() => toggleDrawerLayerMenu(2, true)}
                >
                  <div>
                    ご検討中の方へ
                    <IconChevronRight />
                  </div>
                </DrawerMenu>
                <DrawerMenu
                  aria-controls="js-layer-support"
                  aria-expanded={drawerLayerState3}
                  onClick={() => toggleDrawerLayerMenu(3, true)}
                >
                  <div>
                    お知らせ・サポート
                    <IconChevronRight />
                  </div>
                </DrawerMenu>
              </DrawerList>
            </DrawerMain>
            <DrawerSub>
              <li>
                <a
                  href="/internet/turbo/?l-id=rhk_gmenu_hikari_internet_turbo_01"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_header_hikari_internet_turbo_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  Rakuten Turboを見る
                  <IconArrowRightCustom3 />
                </a>
              </li>
              <li>
                <a
                  href="/?l-id=rhk_gmenu_hikari_03"
                  data-lid_parts="gmenu"
                  data-lid_no="03"
                  data-ratid="rhk_gmenu_hikari_03"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  楽天モバイルを見る
                  <IconArrowRightCustom3 />
                </a>
              </li>
            </DrawerSub>
          </DrawerNavInner>
        </HeaderDrawer>

        <DrawerLayer
          id="js-layer-campaign"
          isOpen={drawerLayerState1}
          aria-expanded={drawerLayerState1}
        >
          <DrawerLayerBack onClick={() => toggleDrawerLayerMenu(1)}>
            <IconChevronLeft />
            キャンペーン
          </DrawerLayerBack>
          <DrawerLayerContent>
            <DrawerListLayer>
              <li>
                <a
                  href="/hikari/campaign/six-month-free/?l-id=rhk_gmenu_campaign_six-month-free_01"
                  data-lid_parts="gmenu"
                  aria-current="false"
                  data-ratid="rhk_gmenu_campaign_six-month-free_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  月額基本料6カ月0円キャンペーン
                </a>
              </li>
              <li>
                <a
                  href="/internet/turbo/campaign/spu/?l-id=rhk_gmenu_hikari_internet_turbo_campaign_spu_01"
                  data-lid_parts="gmenu"
                  aria-current="false"
                  data-ratid="rhk_gmenu_campaign_spu_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  SPU（スーパーポイントアッププログラム）
                </a>
              </li>
              <li>
                <a
                  href="/hikari/campaign/archive/?l-id=rhk_gmenu_campaign_archive_01"
                  data-lid_parts="gmenu"
                  aria-current="false"
                  data-lid_no="01"
                  data-ratid="rhk_gmenu_campaign_archive_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  過去のキャンペーンルール
                </a>
              </li>
            </DrawerListLayer>
          </DrawerLayerContent>
        </DrawerLayer>
        <DrawerLayer
          id="js-layer-appeal"
          isOpen={drawerLayerState2}
          aria-expanded={drawerLayerState2}
        >
          <DrawerLayerBack onClick={() => toggleDrawerLayerMenu(2)}>
            <IconChevronLeft />
            ご検討中の方へ
          </DrawerLayerBack>
          <DrawerLayerContent>
            <DrawerListLayer>
              <li>
                <a
                  href="/hikari/flow/?l-id=rhk_gmenu_flow_01"
                  aria-current="false"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_flow_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  ご利用開始までの流れ
                </a>
              </li>
              <li>
                <a
                  href="/hikari/internet/?l-id=rhk_gmenu_internet_01"
                  aria-current="false"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_internet_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  速さと安定のIPv6通信
                </a>
              </li>
            </DrawerListLayer>
          </DrawerLayerContent>
        </DrawerLayer>
        <DrawerLayer
          id="js-layer-support"
          isOpen={drawerLayerState3}
          aria-expanded={drawerLayerState3}
        >
          <DrawerLayerBack onClick={() => toggleDrawerLayerMenu(3)}>
            <IconChevronLeft />
            お知らせ・サポート
          </DrawerLayerBack>
          <DrawerLayerContent>
            <DrawerListLayer>
              <li>
                <a
                  href="/hikari/information/?l-id=rhk_gmenu_information_01"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_information_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  お知らせ
                </a>
              </li>
              <li>
                <a
                  href="/hikari/support/?l-id=rhk_gmenu_support_01"
                  aria-current="false"
                  data-lid_parts="gmenu"
                  data-ratid="rhk_gmenu_support_01"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  お客様サポート
                </a>
              </li>
            </DrawerListLayer>
          </DrawerLayerContent>
        </DrawerLayer>
        <HeaderOverlay
          aria-hidden={overlayHiddenState}
          onClick={closeOverlay}
        ></HeaderOverlay>
      </HeaderWrapper>
    </>
  )
}
