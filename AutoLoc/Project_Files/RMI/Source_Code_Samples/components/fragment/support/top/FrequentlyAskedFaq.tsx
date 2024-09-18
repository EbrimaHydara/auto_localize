import React, { useEffect, useCallback, useState, useMemo } from 'react'
import axios from 'axios'
import { Heading } from '@components/atoms/Heading'
import { TxtEmp02 } from '@components/atoms/Txt'
import { ResolutionTime } from '@components/category/Support'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { SolvedListType } from '@components/include/support/supportData'
import {
  SolvedNum,
  SupportLinkList,
  SupportLinkListBorder,
  SupportLinkListIconChevronRight,
} from '@components/category/Support'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

const FaqBlock = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 16px 16px 24px;
`

type Props = {
  className?: string
  status: string
}

export const FrequentlyAskedFaq = ({ className, status }: Props) => {
  type FaqList = {
    link: string
    question: string
  }
  const endPoint = useMemo(() => {
    return status === 'member'
      ? {
          local: `${assets}json/dummy_top_faq.json`,
          prod: '/api/top_faq/',
        }
      : {
          local: `${assets}json/dummy_top_faq_before.json`,
          prod: '/api/top_faq_before/',
        }
  }, [])
  const endPointSolved = useMemo(() => {
    return {
      local: `${assets}json/dummy-support-faq-solved.json`,
      prod: '/api/faq_solved/',
    }
  }, [])
  const [linkListFaq, setLinkListFaq] = useState<FaqList[]>([])
  const [solvedList, setSolvedList] = useState<SolvedListType[]>([])

  const getFaqId = useCallback((path: any) => {
    const regex = /\/(\d+)\//
    const result: RegExpExecArray | null = regex.exec(path)!
    return result[1]
  }, [])

  const solvedValue = useCallback(
    (arr: SolvedListType[], path: string | undefined) => {
      const find = arr.find(elm => elm.name === path)
      return find ? find.solved : 0
    },
    [],
  )

  useEffect(() => {
    axios
      .get(endPoint.prod)
      .then(res => {
        const items: FaqList[] = []
        res.data.list.forEach((item: FaqList) => {
          const itemObj: FaqList = {
            link: item.link,
            question: item.question,
          }
          items.push(itemObj)
        })
        setLinkListFaq(items)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(endPointSolved.prod)
      .then(res => {
        const list = res.data.list.map((item: SolvedListType) => {
          return { name: item.name, solved: item.solved }
        })
        setSolvedList(list)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className={className}>
      <Heading level="2" className={Utils['Align-center']}>
        よく見られているご質問
      </Heading>
      <p className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
        よく見られているご質問をご案内します。
        <br />
        お困りごとが解決しない場合は、各ページからチャットやお電話でお問い合わせいただけます。
      </p>
      <ResolutionTime className={Utils['Mt-16']}>
        <TxtEmp02>解決の目安…約5分</TxtEmp02>
      </ResolutionTime>
      <FaqBlock className={Utils['Mt-24']}>
        <ul>
          {linkListFaq.map((item, index) => (
            <SupportLinkListBorder key={`faq${index}`}>
              <SupportLinkList href={item.link}>
                {item.question}
                {solvedValue(solvedList, getFaqId(item.link)) > 0 && (
                  <SolvedNum>
                    {solvedValue(solvedList, getFaqId(item.link))}
                    人以上の方が解決
                  </SolvedNum>
                )}
                <SupportLinkListIconChevronRight />
              </SupportLinkList>
            </SupportLinkListBorder>
          ))}
        </ul>
        <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
          <LinkIconAfter href="/support/faq/?l-id=support_pre-member_support_faq">
            最近よくあるご質問リンク集を見る
            <IconNewTabLine />
          </LinkIconAfter>
        </div>
      </FaqBlock>
    </div>
  )
}
