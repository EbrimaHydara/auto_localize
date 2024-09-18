import React, { useEffect, useRef, useState, forwardRef } from 'react'
import { campaign_member } from '~/js/csv-data/campaign-member'
import styled, { css } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { InfoboxInfo, InfoboxLight } from '@components/atoms/Infobox'
import { AccordionList } from '@components/atoms/AccordionList'
import { SystemContainer } from '@components/layout/System'
import {
  CampaignList,
  CpnData,
} from '@components/include/campaign/CampaignList'
import { FilterInfo } from '@components/include/campaign/FilterInfo'
import { ButtonRadio, Radio, RadioInput } from '@components/atoms/ButtonRadio'
import {
  IconCurrencyLine,
  IconHomeLine,
  IconProductShopping,
  IconSmartphoneLine,
  IconProductSports,
  IconWorldLine,
} from '@components/icons'
import { useNavigationDetection } from '~/hooks/useNavigationDetection'

const ResetSystemContainer = styled.div`
  width: 100vw;
  margin: 0 calc(50% - 50vw);
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`
const FilterWrap = styled(InfoboxLight)`
  ${mixins.mq.MinL} {
    position: relative;
  }
  .group + .group {
    margin-top: 20px;
  }
`
const FilterTitle = styled.dt`
  font-size: 14px;
  font-weight: bold;
`
const FilterService = styled.dd`
  margin-top: 16px;
  display: grid;
  row-gap: 16px;
  ${mixins.mq.MinL} {
    margin-top: 10px;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 24px;
  }
`
const FilterBenefit = styled.dd`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-size: 13px;
  ${mixins.mq.MinL} {
    flex-direction: row;
    margin-top: 10px;
    column-gap: 40px;
    font-size: 14px;
  }
`
const ResetFilterBorder = css`
  ${Radio} {
    display: block;
    ${mixins.mq.MinL} {
      display: inline-block;
    }
    > span {
      display: block;
      ${mixins.mq.MinL} {
        display: inline-block;
        padding: 0 !important;
        border: none !important;
        background-color: transparent !important;
      }
    }
  }
`
const FilterRadio = styled(ButtonRadio)`
  ${ResetFilterBorder}
`
const FilterRadioIconBefore = styled(ButtonRadio)`
  ${Radio} {
    display: block;
  }
  ${RadioInput} {
    & + span {
      font-size: ${props => props.theme.fonts.s};
      ${mixins.mq.MinL} {
        padding: 8px;
      }
      &:hover {
        ${mixins.mq.MinL} {
          padding: 7px;
        }
      }
      > span:first-child {
        ${mixins.mq.MinL} {
          display: none;
        }
      }
      > span:last-child {
        ${mixins.mq.MinL} {
          padding-left: 0;
          display: flex;
          column-gap: 4px;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &:disabled + span {
      &:hover {
        ${mixins.mq.MinL} {
          padding: 8px;
        }
      }
    }
    &:checked + span {
      ${mixins.mq.MinL} {
        padding: 7px;
        background-color: ${props => props.theme.colors.pink5};
      }
      > span:last-child {
        ${mixins.mq.MinL} {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`
const FilterIcon = styled.span`
  font-size: ${props => props.theme.fonts.base};
  line-height: 1;
`
const ForceOpen = css`
  display: block;
  height: auto !important;
  overflow: initial !important;
  transform: none !important;
  transition: height none !important;
`
const AccordionListCustom = styled(AccordionList)`
  ${mixins.mq.MinL} {
    border: none;
  }
  &.open {
    .accordionlist-collapse,
    .accordionlist-collapse[aria-hidden='true'] {
      ${mixins.mq.MaxM} {
        ${ForceOpen}
      }
    }
  }
  > button {
    ${mixins.mq.MinL} {
      padding: 0;
      text-align: center;
      pointer-events: none;
      background-color: transparent !important;
    }
    span {
      ${mixins.mq.MinL} {
        font-size: ${props => props.theme.fonts.ll};
      }
      &:first-child {
        ${mixins.mq.MinL} {
          display: none;
        }
      }
    }
  }
  .accordionlist-collapse,
  .accordionlist-collapse[aria-hidden='true'] {
    ${mixins.mq.MinL} {
      ${ForceOpen}
    }
  }
  .accordionlist-collapse-content {
    ${mixins.mq.MinL} {
      padding: 0;
    }
  }
`

type Props = {
  className?: string
  conditionsTriggerState: boolean
  filterFootTriggerState: boolean
}

export const FilterMembers = forwardRef<HTMLDivElement, Props>(
  (
    { className, conditionsTriggerState, filterFootTriggerState },
    intersectionObserverRef,
  ) => {
    /*
    📍ブラウザバックの仕様
    BFCacheできない人用の処理 ※例えば同じChromeだとしても人によって違う
    BFCacheしてる人は何もしないでも実現する

    【やりたいこと】
    フィルタリングした結果のリストに表示されたキャンペーンページへ同窓で遷移する
    そこからブラウザバックで戻って来た場合に同じ結果を復元して同じ条件の結果でページ間の行ったり戻ったりを実現する

    【やってること】
    フィルタリングをした状態で結果のキャンペーンリンクを押した場合にフィルタ内容とスクロール復元の値を保存
    それを利用して元に戻す
    リロード時や関係ないページから来た時のために値は使用したあとで削除する

    当時決めた仕様
    https://jira.rakuten-it.com/jira/browse/RMFE-419
    */

    const rawData = campaign_member
    const totalDataCount = rawData.length
    const [filteredData, setFilteredData] = useState<CpnData[]>(rawData)
    const [filteredDataService, setFilteredDataService] =
      useState<CpnData[]>(rawData)

    // サービス
    const [selectedService, setSelectedService] =
      useState<string>('すべてのサービス')
    // 特典
    const [selectedBenefit, setSelectedBenefit] =
      useState<string>('すべての特典')

    // 絞り込み結果内容
    const [currentFilters, setCurrentFilters] = useState<string>('')
    // 絞り込み結果表示領域
    const [isHideClearFilter, setIsHideClearFilter] = useState<boolean>(true)
    // 絞り込みによって表示非表示するInfoBox
    const [displayPriceFlag, setDisplayPriceFlag] = useState<boolean>(true)
    // なにか選択状態
    const [isHistory, setIsHistory] = useState<boolean>(false)
    // 条件によって読み込み時のアコーディオン開閉用（SPの時に必要なのです）
    const [isAccordionState, setIsAccordionState] = useState<boolean>(false)
    // 条件変更時のフラグ（副作用変更検知用）
    const [isChangeTermsState, setIsChangeTermsState] = useState<
      boolean | undefined
    >()

    // 絞り込み条件変更ボタンイベント時に戻ってくるための場所（ボタンがある<FilterInfo>に渡してる）
    const changeScrollRef = useRef<HTMLDivElement>(null)

    // ラジオ用データ
    type ServiceValue = {
      ratid: string
      text: string
      icon: JSX.Element
    }
    const serviceValues: ServiceValue[] = [
      {
        ratid: 'all-service',
        text: 'すべてのサービス',
        icon: <IconWorldLine />,
      },
      {
        ratid: 'mobile',
        text: '楽天モバイル',
        icon: <IconSmartphoneLine />,
      },
      {
        ratid: 'shopping',
        text: 'お買い物',
        icon: <IconProductShopping />,
      },
      {
        ratid: 'finance',
        text: 'マネー・ファイナンス',
        icon: <IconCurrencyLine />,
      },
      {
        ratid: 'living',
        text: '暮らし・生活',
        icon: <IconHomeLine />,
      },
      {
        ratid: 'sports',
        text: 'スポーツ・エンタメ',
        icon: <IconProductSports />,
      },
    ]
    type BenefitValue = {
      ratid: string
      text: string
    }
    const benefitValues: BenefitValue[] = [
      { ratid: 'all-benefits', text: 'すべての特典' },
      { ratid: 'point', text: 'ポイント' },
      { ratid: 'free-trial', text: '無料おためし' },
      { ratid: 'discount', text: '料金割引・クーポン' },
      { ratid: 'gift', text: '景品・その他' },
      { ratid: 'coupon', text: 'クーポン' },
    ]

    const clearSession = () => {
      sessionStorage.removeItem('cpn-member-service')
      sessionStorage.removeItem('cpn-member-benefit')
      sessionStorage.removeItem('cpn-member-scrolly')
    }

    const checkDisplayPriceText = (dataArray: CpnData[]): boolean => {
      return dataArray.some(data => data.display_price_text === '1')
    }

    const handleServiceChange = (value: string | undefined) => {
      if (!value) return
      setSelectedService(value)
      setIsHistory(true)
      setIsHideClearFilter(false)
      handleBenefitChange('すべての特典')
    }

    const handleBenefitChange = (value: string | undefined) => {
      if (!value) return
      setSelectedBenefit(value)
      setIsHistory(true)
      setIsHideClearFilter(false)
    }

    const calculateServiceResults = (option: string) => {
      return !campaign_member.some(campaign => campaign.service === option)
    }

    const calculateBenefitResults = (option: string) => {
      return !filteredDataService.some(campaign => campaign.benefit === option)
    }

    useNavigationDetection({
      onBackForward: () => {
        if (sessionStorage.getItem('cpn-member-scrolly') !== null) {
          setIsAccordionState(true)
          setIsHideClearFilter(false)
          // 履歴
          if (sessionStorage.getItem('cpn-member-service') !== null) {
            const getStorageService =
              sessionStorage.getItem('cpn-member-service')
            getStorageService && setSelectedService(getStorageService)
          }
          if (sessionStorage.getItem('cpn-member-benefit') !== null) {
            const getStorageBenefit =
              sessionStorage.getItem('cpn-member-benefit')
            getStorageBenefit && setSelectedBenefit(getStorageBenefit)
          }
          setIsHistory(true)
        } else {
          clearSession()
        }
      },
    })

    useEffect(() => {
      const serviceFilter = selectedService !== 'すべてのサービス'
      const benefitFilter = selectedBenefit !== 'すべての特典'

      const resultService = rawData.filter(campaign => {
        const serviceMatch = serviceFilter
          ? campaign.service.includes(selectedService)
          : true
        return serviceMatch
      })
      const resultBenefit = resultService.filter(campaign => {
        const benefitMatch = benefitFilter
          ? campaign.benefit.includes(selectedBenefit)
          : true

        return benefitMatch
      })

      setFilteredDataService(resultService)
      setFilteredData(resultBenefit)

      const hasDisplayPriceText = checkDisplayPriceText(resultBenefit)
      setDisplayPriceFlag(hasDisplayPriceText)

      const filters = [selectedService, selectedBenefit]
      setCurrentFilters(filters.join(' / '))
    }, [selectedService, selectedBenefit, rawData, isHistory])

    const handleChangeTerms = () => {
      setIsAccordionState(true)
      setIsChangeTermsState(!isChangeTermsState)
    }

    useEffect(() => {
      isChangeTermsState !== undefined &&
        changeScrollRef.current?.scrollIntoView()
    }, [isChangeTermsState])

    useNavigationDetection(
      {
        onBackForward: () => {
          if (
            sessionStorage.getItem('cpn-member-scrolly') !== null &&
            isHistory
          ) {
            // cpn-top-Application、cpn-top-Product、cpn-top-scrollyの記録は<CampaignList>内でキャンペーンリンクを押した時に記録される
            const getScrollY = Number(
              sessionStorage.getItem('cpn-member-scrolly'),
            )
            window.scrollTo(0, getScrollY)
            // sessionは全部消す
            clearSession()
          }
        },
      },
      [isHistory],
    )

    return (
      <>
        <div className={className}>
          <AccordionListCustom
            text={<TxtEmp01>カテゴリーでキャンペーンを絞り込む</TxtEmp01>}
            isOpened={false}
            updateOpenState={setIsAccordionState}
            openState={isAccordionState}
            useCallback={true}
            ratid="campaign-member_accordion_filter-function"
            className={isAccordionState ? 'open' : undefined}
          >
            <FilterWrap className={Utils['Mt-16']} ref={changeScrollRef}>
              <dl>
                <div className="group">
                  <FilterTitle>サービスで絞り込む</FilterTitle>
                  <FilterService>
                    <FilterRadioIconBefore
                      onChangeCheck={e => {
                        handleServiceChange(e)
                      }}
                      select={serviceValues.map((service: ServiceValue) => ({
                        name: 'service',
                        text: (
                          <>
                            <FilterIcon className={Utils['Disp-pc']}>
                              {service.icon}
                            </FilterIcon>
                            {service.text}
                          </>
                        ),
                        value: service.text,
                        checked: selectedService === service.text,
                        ratid: `campaign-member_filter-condition-${service.ratid}`,
                        disabled:
                          service.text !== 'すべてのサービス' &&
                          calculateServiceResults(service.text),
                      }))}
                    />
                  </FilterService>
                </div>
                <div className="group">
                  <FilterTitle>特典で絞り込む</FilterTitle>
                  <FilterBenefit>
                    <FilterRadio
                      onChangeCheck={e => {
                        handleBenefitChange(e)
                      }}
                      select={benefitValues.map((benefit: BenefitValue) => ({
                        name: 'benefit',
                        text: benefit.text,
                        value: benefit.text,
                        checked: selectedBenefit === benefit.text,
                        ratid: `campaign-member_filter-condition-${benefit.ratid}`,
                        disabled:
                          benefit.text !== 'すべての特典' &&
                          calculateBenefitResults(benefit.text),
                      }))}
                    />
                  </FilterBenefit>
                </div>
              </dl>
            </FilterWrap>
          </AccordionListCustom>
        </div>

        {displayPriceFlag && (
          <InfoboxInfo className={`${Utils['Mt-24']} ${Utils['Py-16']}`}>
            <TxtCap as="p" className={Utils['Color-black']}>
              「実質価格」とは、キャンペーンの条件達成（楽天モバイル初めて申込、対象製品購入、Rakuten
              Link利用など）により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。詳しくは各キャンペーンルールをご確認ください。
            </TxtCap>
          </InfoboxInfo>
        )}

        <ResetSystemContainer className={Utils['Mt-24']}>
          <BgGray className={`${Utils['Pt-32']} ${Utils['Pb-64']}`}>
            <SystemContainer ref={intersectionObserverRef}>
              <CampaignList
                data={filteredData}
                btnUrl="/campaign/close/2024/"
                isHistory={isHistory}
                pageType="cpn-member-"
                firstLine={selectedService}
                secondLine={selectedBenefit}
              />
            </SystemContainer>
          </BgGray>
        </ResetSystemContainer>

        <FilterInfo
          isHideClearFilter={isHideClearFilter}
          currentFilters={currentFilters}
          filteredDataCount={filteredData.length}
          totalDataCount={totalDataCount}
          filterFootTriggerState={filterFootTriggerState}
          conditionsTriggerState={conditionsTriggerState}
          onChangeTerms={handleChangeTerms}
        />
      </>
    )
  },
)
