import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
// import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import {
  FaqBigCategoryList,
  FaqList,
  FaqSmallCategoryList,
  LinkListFaqItem,
  SolvedListType,
} from '@components/include/support/supportData'
import { Heading } from '@components/atoms/Heading'
import {
  SolvedNum,
  SupportLinkList,
  SupportLinkListBorder,
  SupportLinkListIconChevronRight,
  SupportMovieWrap,
  SupportReadmore,
  SupportReadmoreArrow,
} from '@components/category/Support'

const Wrap = styled.div`
  margin-top: 64px;
  ${mixins.mq.MinL} {
    margin-top: 48px;
  }

  ${SupportMovieWrap} + & {
    ${mixins.mq.MinL} {
      margin-top: 64px;
    }
  }
`

type Props = {
  className?: string
  bigCategory: string
  smallCategory: string
}

export const FrequentlyAskedFaq = ({
  className,
  bigCategory,
  smallCategory,
}: Props) => {
  const countCategoryReadmore = 5
  const [linkListFaq, setLinkListFaq] = useState<LinkListFaqItem[]>([])

  const [countCategoryState, updateCountCategoryState] = useState<number>(0)
  const [countCategoryVisibleState, updateCountCategoryVisibleState] =
    useState<number>(0)
  const [solvedList, setSolvedList] = useState<SolvedListType[]>([])

  const clickCategoryReadMore = useCallback(() => {
    if (countCategoryVisibleState < 35) {
      updateCountCategoryVisibleState(
        Math.min(countCategoryVisibleState + 10, countCategoryState),
      )
    } else {
      updateCountCategoryVisibleState(countCategoryState)
    }
  }, [countCategoryVisibleState, countCategoryState])

  const getFaqId = useCallback((path: string) => {
    const faqid: string | undefined = path?.replace(/\/+$/, '').split('/').pop()
    return faqid
  }, [])

  const solvedValue = useCallback(
    (arr: SolvedListType[], path: string | undefined) => {
      const find = arr.find(elm => elm.name === path) as SolvedListType
      // メモ：dummy-support-faq-solved.json側に一致する番号が無いとエラーになる jsonがローカル設定でエラーの時はそっち確認
      if (find?.solved) {
        return find.solved
      }
      return 0
    },
    [],
  )

  useEffect(() => {
    // axios
    // ダミー
    // .get(`${assets}json/dummy-support-faq.json`)
    // 本番
    axios
      .get('/api/faq/')
      .then(res => {
        // console.log(res.data.category_big)
        res.data.category_big.forEach((item_big: FaqBigCategoryList) => {
          if (item_big.name === bigCategory) {
            item_big.category_small.forEach(
              (item_small: FaqSmallCategoryList) => {
                if (item_small.name === smallCategory) {
                  let items: LinkListFaqItem[] = []
                  item_small.list.forEach((item: FaqList) => {
                    let itemObj: LinkListFaqItem = {
                      path: item.link,
                      name: item.question,
                    }
                    items.push(itemObj)
                  })
                  let count = item_small.list.length
                  updateCountCategoryState(count)
                  if (count > countCategoryReadmore) {
                    count = countCategoryReadmore
                  }
                  updateCountCategoryVisibleState(count)
                  setLinkListFaq(items)
                }
              },
            )
          }
        })
      })
      .catch(err => {
        console.log(err)
      })

    // axios
    // ダミー
    // .get(`${assets}json/dummy-support-faq-solved.json`)
    // 本番
    axios
      .get('/api/faq_solved/')
      .then(res => {
        // console.log(res.data.list)
        const list = res.data.list.map((item: SolvedListType) => {
          return { name: item.name, solved: item.solved }
        })
        setSolvedList(list)
      })
      .catch(err => {
        console.log(err)
      })
  }, [bigCategory, smallCategory])

  return (
    <>
      {linkListFaq.length !== 0 && (
        <Wrap className={className}>
          <Heading level="2" className={Utils['Align-center']}>
            よく見られているご質問
          </Heading>
          <p className={Utils['Mt-16']}>
            よく見られているご質問をご案内します。
            お困りごとが解決しない場合は、各ページからチャットやお電話でお問い合わせいただけます。
          </p>
          <div className={Utils['Mt-24']}>
            <ul>
              {linkListFaq.map((item, index) => (
                <SupportLinkListBorder
                  aria-hidden={
                    countCategoryVisibleState <= index ? 'true' : 'false'
                  }
                  key={`faq${index}`}
                >
                  <SupportLinkList
                    href={item.path + '?l-id=support_category_faq'}
                  >
                    {item.name.replace(/(<([^>]+)>)/gi, '')}
                    {solvedValue(solvedList, getFaqId(item.path)) > 0 && (
                      <SolvedNum>
                        {solvedValue(solvedList, getFaqId(item.path))}
                        人以上の方が解決
                      </SolvedNum>
                    )}
                    <SupportLinkListIconChevronRight />
                  </SupportLinkList>
                </SupportLinkListBorder>
              ))}
            </ul>
            <SupportReadmore
              aria-hidden={
                countCategoryVisibleState === countCategoryState
                  ? 'true'
                  : 'false'
              }
              onClick={clickCategoryReadMore}
            >
              もっと見る
              <SupportReadmoreArrow />
            </SupportReadmore>
          </div>
        </Wrap>
      )}
    </>
  )
}
