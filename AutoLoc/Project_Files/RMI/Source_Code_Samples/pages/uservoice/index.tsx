import type { NextPage } from 'next'
import React, {
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import styled, { ThemeContext, keyframes } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { CardNormal } from '@components/atoms/Card'
import { TxtEmp02, TxtCap, TxtSize } from '@components/atoms/Txt'
import { LinkNormal, LinkIconBefore } from '@components/atoms/Link'
import { IconArrowDown } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Pager } from '@components/atoms/Pager'
import { scrollToElement } from '@components/utils/scrollToElement'
import {
  ArticleType,
  tagData as tags,
  articleData as articles,
} from '@components/include/uservoice/uservoiceData'
import { CtaBottomFixed } from '@components/include/uservoice/CtaBottomFixed'

import { useBrightcove, BrightcoveVideoProps } from '~/hooks/useBrightcove'

const fadeInAnime = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const GuideWrap = styled.div`
  padding: 0;
`
const HeroWrap = styled.div`
  background: url(${assets}img/uservoice/uservoice-index-hero-bg.png?yymmdd) 0 0
    repeat;
  background-size: cover;
  @media screen and (min-width: 1440px) {
    background-size: contain;
  }
  > .title {
    display: grid;
    place-content: center;
    ${mixins.mq.MinL} {
      height: 240px;
    }
    img {
      ${mixins.mq.MinL} {
        max-height: 198px;
      }
    }
  }
`
const AnchorLink = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 16px 24px;
  ${mixins.mq.MaxM} {
    margin-top: 40px;
  }
`
const Wrap = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 32px 0 48px;
  ${mixins.mq.MaxM} {
    padding: 24px 0 48px;
  }
`
const TagList = styled.dl`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  > dt {
    padding: 5px 0;
    background-color: #ededed;
    text-align: center;
    font-weight: 700;
  }
  > dd {
    display: flex;
    justify-content: center;
    padding: 8px 16px 6px;
    background-color: #ffffff;
  }
  .tagWrap {
    max-width: 644px;
  }
  .tagButton {
    padding: 6px 10px;
    border: 1px solid #c8c8c8;
    border-radius: 40px;
    background: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fonts.ss};
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 10px;
    &:first-child {
      font-weight: bold;
    }
    &:disabled {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      user-select: none;
      cursor: default;
    }
  }
`
const ContentsWrap = styled.div`
  user-select: none;
  img {
    pointer-events: none;
  }
`
const ArticleList = styled.ul`
  display: grid;
  row-gap: 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 24px;
  }
  &[aria-hidden='false'] {
    animation-name: ${fadeInAnime};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 1;
  }
  &[aria-hidden='true'] {
    opacity: 0;
  }

  > li {
    &[aria-hidden='true'] {
      display: none;
    }
  }

  .block {
    height: 100%;
  }

  .articleLink {
    display: block;
    color: ${props => props.theme.colors.monotone20};
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  .img {
    text-align: center;
    @media print {
      display: none;
    }
  }

  .date {
    margin-top: 16px;
    position: relative;
    text-align: right;
    .new {
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${props => props.theme.fonts.s};
    }
  }

  .title {
    margin-top: 8px;
  }

  .description {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${props => props.theme.colors.monotone75};
  }

  .tagList {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
  }
`
const MovieSection = styled.div`
  padding: 32px 16px;
  background-color: white;
  ${mixins.mq.MinL} {
    padding: 40px 24px;
  }
  .desc {
    font-size: 24px;
    line-height: 1.4;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    ${mixins.mq.MinL} {
      flex-direction: row;
      margin-top: 32px;
    }
  }
  .child {
    ${mixins.mq.MinL} {
      width: 50%;
    }
  }
  .movie {
    position: relative;
    margin-top: 8px;
    padding-top: 56.25%;
    ${mixins.mq.MinL} {
      margin-top: 16px;
    }
    .video-js {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`

const Uservoice: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = '楽天モバイルの評判・口コミをご紹介'
  const directories = [{ path: '/uservoice/', label: '' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'お客様の声：楽天モバイルの評判をご紹介',
      url: '',
    },
  ]

  const PERPAGE: number = 9
  const RESETPAGE: number = 1
  const MAXPAGERANGE: number = 5
  const INITIALMEDIAN = useMemo(
    () => Math.floor(MAXPAGERANGE / 2),
    [MAXPAGERANGE],
  )

  const scrollTrigger = useRef<HTMLDivElement>(null)
  const [selectTag, setSelectTag] = useState<string>('記事一覧')
  const [filterCards, setFilterCards] = useState<Array<ArticleType>>([
    ...articles,
  ])
  const [displayCards, setDisplayCards] = useState<Array<ArticleType>>([
    ...articles,
  ])
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
  const [isHideCards, setIsHideCards] = useState<boolean>(true)
  const [pageNum, setPageNum] = useState<number>(RESETPAGE)
  const [pagerRange, setPagerRange] = useState<Array<number>>([])

  const getRatId = useCallback((id: string) => {
    let ratid = ''
    switch (id) {
      case '記事一覧':
        ratid = 'all'
        break
      case '#スマホデビュー':
        ratid = 'sp_debut'
        break
      case '#オンライン契約':
        ratid = 'app_online'
        break
      case '#店舗で契約':
        ratid = 'app_shop'
        break
      case '#通話':
        ratid = 'call'
        break
      case '#料金プラン':
        ratid = 'un-limit'
        break
      case '#通信速度・安定性':
        ratid = 'Communication_speed_stability'
        break
      case '#リモートワーク':
        ratid = 'remote_work'
        break
      case '#楽天ポイント':
        ratid = 'rakuten_point'
        break
      case '#海外ローミング':
        ratid = 'international_roaming'
        break
      case '#通信エリア':
        ratid = 'communication_area'
        break
      default:
        ratid = 'all'
        break
    }
    return ratid
  }, [])

  type Session = {
    tag: string | null
    currentPageNum: string | number | null
  }

  const getPageSession = (): Session => {
    return {
      tag: sessionStorage.getItem('selectedTag'),
      currentPageNum: sessionStorage.getItem('currentPageNum'),
    }
  }
  const updateSessionTag = (tagText: string) =>
    sessionStorage.setItem('selectedTag', tagText ? tagText : '')
  const updateSessionPageNum = (currentPageNum: string | number) =>
    sessionStorage.setItem(
      'currentPageNum',
      currentPageNum ? (currentPageNum as string) : '1',
    )
  const getArticleList = (tagText: string): Array<ArticleType> =>
    articles.filter(
      article =>
        article.tags.join('').indexOf(tagText) !== -1 || tagText === '記事一覧',
    )
  const storeHistory = (tag: string, num: string | number) =>
    window.history.pushState({ num: num as string, tag: tag as string }, '')

  const calcTotalPages = useCallback(
    (start: number, length: number) => {
      const range = Math.ceil(length / PERPAGE)
      let newArr: Array<number> = []
      if (range <= MAXPAGERANGE) {
        // rangeがページャー最大表示数以下ならその分しかpushしない
        for (let i = 1; i <= range; i++) {
          newArr.push(i)
        }
      } else {
        if (start <= INITIALMEDIAN) {
          // カレントが中央にならない（左寄り）
          for (let i = 1; i <= MAXPAGERANGE; i++) {
            newArr.push(i)
          }
        } else if (start > range - INITIALMEDIAN && start <= range) {
          // カレントが中央にならない（右寄り）
          for (let i = range - (MAXPAGERANGE - 1); i <= range; i++) {
            newArr.push(i)
          }
        } else {
          // カレントが中央
          for (let i = start - INITIALMEDIAN; i <= start + INITIALMEDIAN; i++) {
            newArr.push(i)
          }
        }
      }
      setPagerRange(newArr)
    },
    [INITIALMEDIAN],
  )

  const createDisplayCards = useCallback(
    (article: Array<ArticleType>, arg: number) => {
      setIsFirstLoad(false)
      const newArr: Array<ArticleType> = []
      for (
        let i = (arg - 1) * PERPAGE;
        i <= (arg - 1) * PERPAGE + (PERPAGE - 1);
        i++
      ) {
        if (article[i]) {
          newArr.push(article[i])
        }
      }
      setDisplayCards(newArr)
    },
    [],
  )

  const changeTag = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const tagText = e.currentTarget.textContent as string
      const newArr: Array<ArticleType> = getArticleList(tagText)
      setIsHideCards(true)
      setSelectTag(tagText)
      updateSessionTag(tagText)
      updateSessionPageNum(pageNum)
      calcTotalPages(1, newArr.length)
      setPageNum(RESETPAGE)
      setFilterCards(newArr)
      createDisplayCards(newArr, RESETPAGE)
      scrollToElement('js-result-top')
      storeHistory(tagText, RESETPAGE)
    },
    [calcTotalPages, createDisplayCards, pageNum],
  )

  useEffect(() => {
    calcTotalPages(1, articles.length)
    setIsHideCards(false)
  }, [calcTotalPages])
  useEffect(() => {
    setIsHideCards(false)
  }, [selectTag, pageNum])
  useEffect(() => {
    const $newElementsToTrack = RAT.$Selector('.dynamic-rat-wrapper').find(
      '[data-ratId]',
    )
    // バインドの重複を防ぐため一旦リセットする
    $newElementsToTrack.off('click')
    // 要素の検知。最新ページャーの要素を取得する。※RAT飛ばすのにも必要
    RAT.bindClick($newElementsToTrack)
  }, [pageNum, pagerRange])

  useEffect(() => {
    const storedInfo = getPageSession()
    let initTag = storedInfo.tag ? storedInfo.tag : selectTag
    let initPageNum = storedInfo.currentPageNum
      ? storedInfo.currentPageNum
      : '1'
    const newFilteredArr = getArticleList(initTag)

    setDisplayCards(newFilteredArr)
    setIsHideCards(false)
    setSelectTag(initTag)
    setPageNum(Number(initPageNum))
    setFilterCards(newFilteredArr)
    calcTotalPages(1, newFilteredArr.length)
    createDisplayCards(newFilteredArr, initPageNum as number)
    storedInfo.tag && scrollToElement('js-result-top')

    window.addEventListener('popstate', () => {
      setSelectTag(
        tag =>
          (tag = window.history.state.tag
            ? window.history.state.tag
            : '記事一覧'),
      )
      setPageNum(
        pageNum =>
          (pageNum = window.history.state.num ? window.history.state.num : '1'),
      )
      let histag = window.history.state.tag
        ? window.history.state.tag
        : '記事一覧'
      let hisnum = window.history.state.num ? window.history.state.num : 1
      let newArr: Array<ArticleType> = []

      setIsHideCards(false)
      newArr =
        histag === '記事一覧' || histag === undefined
          ? [...articles]
          : articles.filter(article => article.tags.includes(histag))
      calcTotalPages(hisnum, newArr.length)
      setFilterCards(newArr)
      createDisplayCards(newArr, hisnum)
      scrollToElement('js-result-top')
    })
  }, []) // eslint warning not resolved "React Hook useEffect has missing dependencies: 'calcTotalPages', 'createDisplayCards', 'getPageSession', and 'selectTag'. Either include them or remove the dependency array"

  const brightcoveVideos: BrightcoveVideoProps[] = useMemo(
    () => [
      {
        className: 'video-js',
        playerId: 'ahYJfhujM',
        videoId: '6350541793112',
        dataRatMediaId: 'movie_simulation',
      },
      {
        className: 'video-js',
        playerId: 'ahYJfhujM',
        videoId: '6350543468112',
        dataRatMediaId: 'movie_application',
      },
    ],
    [],
  )

  const [urls, BrightcoveIframe] = useBrightcove(brightcoveVideos, [
    pageNum,
    selectTag,
  ])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの評判・口コミをご紹介！携帯電話会社選びの決め手や楽天モバイルを実際に使った感想など、お客様に直接お聞きしました。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <GuideWrap>
          <HeroWrap>
            <h1 className="title">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/uservoice/uservoice-index-hero-sp.png?yymmdd`}
                  width="750"
                  height="480"
                />
                <img
                  src={`${assets}img/uservoice/uservoice-index-hero-pc.png?yymmdd`}
                  alt="実際に使った感想をお聞きしました。楽天モバイルの評判をご紹介（口コミ）"
                  width="800"
                  height="198"
                />
              </picture>
            </h1>
          </HeroWrap>
          <div id="js-result-top" className="scroll" />
          <Wrap>
            <SystemContainer>
              <TxtSize
                as="p"
                size="l"
                className={`${Utils['Align-center']} ${Utils['Weight-bold']}`}
              >
                楽天モバイルをご利用中のお客様から様々な声が届いています
              </TxtSize>
              <nav className={Utils['Mb-32']}>
                <AnchorLink>
                  <li>
                    <LinkIconBefore
                      href="#articleList"
                      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                        anchorCallback(e, 'articleList')
                      }
                    >
                      <IconArrowDown />
                      記事一覧
                    </LinkIconBefore>
                  </li>
                  <li>
                    <LinkIconBefore
                      href="#movie"
                      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                        anchorCallback(e, 'movie')
                      }
                    >
                      <IconArrowDown />
                      座談会動画
                    </LinkIconBefore>
                  </li>
                </AnchorLink>
              </nav>
              {tags && (
                <TagList>
                  <dt>タグ絞り込み</dt>
                  <dd>
                    <div className="tagWrap">
                      {tags.map(tag => {
                        return (
                          <button
                            key={tag.ratid}
                            type="button"
                            className="tagButton"
                            onClick={changeTag}
                            data-ratid={`uservoice_tag_${tag.ratid}`}
                            data-ratevent="click"
                            data-ratparam="all"
                            disabled={tag.tag === selectTag ? true : false}
                          >
                            {tag.tag}
                          </button>
                        )
                      })}
                    </div>
                  </dd>
                </TagList>
              )}
              <ContentsWrap
                className={`${Utils['Mt-40']} ${Utils['Mt-pc-32']}`}
                ref={scrollTrigger}
              >
                <Heading id="articleList" level="4" as="h2">
                  {selectTag}
                </Heading>
                <div
                  data-ratid="uservoice_scroll-01_title"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <ArticleList
                    className={Utils['Mt-24']}
                    aria-hidden={isHideCards}
                  >
                    {displayCards.map((article, index) => {
                      const isFirst: boolean = isFirstLoad && index >= PERPAGE
                      return (
                        <li
                          key={article.id}
                          {...(isFirst && { 'aria-hidden': 'true' })}
                        >
                          <CardNormal as="div" className="block">
                            <LinkNormal
                              href={`/uservoice/${article.id}/?l-id=uservoice_uservoice_${article.id}`}
                              className="articleLink"
                            >
                              {!isFirst && (
                                <div className="img">
                                  <img
                                    src={`${assets}img/uservoice/avator-${article.id}.png?${article.update}`}
                                    alt=""
                                    width="118"
                                    height="118"
                                  />
                                </div>
                              )}
                              <TxtCap as="div" className="date">
                                {article.new && (
                                  <TxtEmp02 className="new">NEW</TxtEmp02>
                                )}
                                <time datatype={article.datetime}>
                                  {article.date}
                                </time>
                              </TxtCap>
                              <Heading level="4" as="h3" className="title">
                                {article.title}
                              </Heading>
                              <TxtCap as="p" className={Utils['Mt-8']}>
                                {article.profile}
                              </TxtCap>
                              <p className="description">
                                {article.description}
                              </p>
                            </LinkNormal>
                            <TxtCap as="div" className="tagList">
                              {article.tags.map((tag, index) => {
                                return (
                                  <button
                                    key={article.id + index}
                                    type="button"
                                    className="tagButton"
                                    onClick={changeTag}
                                    data-ratid={`uservoice_card_tag_${getRatId(
                                      tag,
                                    )}`}
                                    data-ratevent="click"
                                    data-ratparam="all"
                                    disabled={tag === selectTag ? true : false}
                                  >
                                    {tag}
                                  </button>
                                )
                              })}
                            </TxtCap>
                          </CardNormal>
                        </li>
                      )
                    })}
                  </ArticleList>
                </div>
                <div
                  className={Utils['Mt-48']}
                  data-ratid="uservoice_scroll-02_pager"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <Pager
                    className="dynamic-rat-wrapper"
                    currentManage={true}
                    currentStateEx={pageNum}
                    updateCurrentStateEx={setPageNum}
                    range={pagerRange}
                    ratid="uservoice"
                    sideEffect={(arg: number) => {
                      setIsHideCards(true)
                      setPageNum(arg)
                      createDisplayCards(filterCards, arg)
                      scrollToElement('js-result-top')
                      calcTotalPages(arg, filterCards.length)
                      updateSessionPageNum(arg)
                      storeHistory(selectTag, arg)
                    }}
                  />
                </div>
                <div className={Utils['Mt-64']}>
                  <MovieSection id="movie" className={Utils['Align-center']}>
                    <p className={`desc ${Utils['Weight-bold']}`}>
                      実際にサービスを
                      <br className={Utils['Show-oox']} />
                      体験いただきました
                    </p>
                    <div className="column">
                      <div className="child">
                        <TxtEmp02 as="p">＼ こんなにおトクに！／</TxtEmp02>
                        <Heading level="4" as="h2">
                          料金シミュレーション
                        </Heading>
                        <div className="movie">
                          <BrightcoveIframe url={urls[0]} />
                        </div>
                      </div>
                      <div className="child">
                        <TxtEmp02 as="p">＼ 早くて簡単 ／</TxtEmp02>
                        <Heading level="4" as="h2">
                          Web申し込み
                        </Heading>
                        <div className="movie">
                          <BrightcoveIframe url={urls[1]} />
                        </div>
                      </div>
                    </div>
                  </MovieSection>
                </div>
              </ContentsWrap>
            </SystemContainer>
          </Wrap>
        </GuideWrap>
        <CtaBottomFixed scrollTrigger={scrollTrigger} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default Uservoice
