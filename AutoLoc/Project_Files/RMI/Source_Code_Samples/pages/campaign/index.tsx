import type { NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { TabItem, TabItems } from '@components/atoms/Tab'
import { TxtCap } from '@components/atoms/Txt'
import { CpnRecommendDataPreMember } from '@components/include/campaign/RecommendDataPreMember'
import { FilterPreMembers } from '@components/fragment/campaign/FilterPreMembers'
import { RecommendInfo } from '@components/include/campaign/RecommendInfo'

const Campaign: NextPage = () => {
  const pagetitle = 'キャンペーン・特典'
  const directories = [{ path: '/campaign/', label: '' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const filterPreMembersRef = useRef<HTMLDivElement>(null)
  const recommendRef = useRef<HTMLDivElement>(null)
  const [isConditionsTrigger, setIsConditionsTrigger] = useState<boolean>(false)
  const [isFilterFootTrigger, setIsFilterFootTrigger] = useState<boolean>(false)

  type options = {
    rootMargin?: string
  }
  const observer = useCallback(
    (
      ref: HTMLDivElement | null,
      options: options,
      fnc: (isIntersecting: boolean) => void,
    ) => {
      if (ref) {
        const observerTrigger = new IntersectionObserver(entries => {
          fnc(entries[0].isIntersecting)
        }, options)
        observerTrigger.observe(ref)
        return () => {
          observerTrigger.unobserve(ref)
        }
      }
    },
    [],
  )

  useEffect(() => {
    // 条件
    observer(
      filterPreMembersRef.current,
      { rootMargin: '-50%' },
      setIsConditionsTrigger,
    )
    // 結果全体
    observer(
      recommendRef.current,
      { rootMargin: '-30%' },
      setIsFilterFootTrigger,
    )
  }, [observer])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイル限定のキャンペーン・特典、割引価格や楽天ポイントプレゼントなどお得な情報をご案内します"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Mt-8']} ${Utils['Align-right']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            {pagetitle}
          </Heading>
          <p className={Utils['Mt-16']}>
            楽天モバイルに関するおトクなキャンペーンやお申し込み特典をご案内します。
          </p>
        </SystemContainer>

        <SystemContainer>
          <TabItems role="tablist" className={Utils['Mt-32']}>
            <TabItem aria-selected="true">新規お申し込みの方</TabItem>
            <TabItem role="tab">
              <a href="/campaign/member/?l-id=campaign_campaign-member">
                ご契約中の方
              </a>
            </TabItem>
          </TabItems>
          <FilterPreMembers
            className={Utils['Mt-24']}
            conditionsTriggerState={isConditionsTrigger}
            filterFootTriggerState={isFilterFootTrigger}
            ref={filterPreMembersRef}
          />
        </SystemContainer>

        <div ref={recommendRef}>
          <SystemContainer as="section" className={Utils['Mt-64']}>
            <Heading level="2">楽天グループおすすめ情報</Heading>
            <RecommendInfo
              data={CpnRecommendDataPreMember}
              className={`${Utils['Mt-24']} ${Utils['Pb-24']}`}
            />
          </SystemContainer>

          <GlobalFooter
            breadcrumbsItem={breadcrumbs}
            relatedItems={['plan', 'product', 'support']}
          />
        </div>
      </SystemWrapper>
    </>
  )
}

export default Campaign
