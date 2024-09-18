import React, { useEffect, useRef, useState, forwardRef } from 'react'
import { campaign_index } from '~/js/csv-data/campaign-index'
import styled, { css } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { TxtCap, TxtEmp01 } from '@components/atoms/Txt'
import { InfoboxInfo, InfoboxLight } from '@components/atoms/Infobox'
import { AccordionList } from '@components/atoms/AccordionList'
import { ButtonRegular } from '@components/atoms/Buttons'
import { CheckboxBorder } from '@components/atoms/CheckboxBorder'
import { SystemContainer } from '@components/layout/System'
import {
  CampaignList,
  CpnData,
} from '@components/include/campaign/CampaignList'
import { FilterInfo } from '@components/include/campaign/FilterInfo'
import { ButtonRadio } from '@components/atoms/ButtonRadio'
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
const FilterItems = styled.dd`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-size: 14px;
  ${mixins.mq.MinL} {
    flex-direction: row;
    margin-top: 10px;
    column-gap: 40px;
  }
`
const ResetFilterBorder = css`
  label {
    display: block;
    ${mixins.mq.MinL} {
      display: inline-block;
    }
    > span {
      display: block;
      font-size: 13px;
      ${mixins.mq.MinL} {
        display: inline-block;
        padding: 0 !important;
        border: none !important;
        background-color: transparent !important;
        font-size: 14px;
      }
    }
  }
`
const FilterRadio = styled(ButtonRadio)`
  ${ResetFilterBorder}
`
const FilterCheckBox = styled.div`
  ${ResetFilterBorder}
`
const ClearBtn = styled(ButtonRegular)`
  width: fit-content;
  font-size: 12px;
  font-weight: normal;
  padding: 8px 16px;
  ${mixins.mq.MinL} {
    position: absolute;
    top: 24px;
    right: 24px;
  }
  &[aria-disabled='true'] {
    background-color: ${props => props.theme.colors.monotone93} !important;
    border-color: ${props => props.theme.colors.monotone93} !important;
    color: ${props => props.theme.colors.monotone75} !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }
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
    padding-right: 0;
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

export const FilterPreMembers = forwardRef<HTMLDivElement, Props>(
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

    const rawData = campaign_index
    const totalDataCount = rawData.length
    const [filteredData, setFilteredData] = useState<CpnData[]>(rawData)

    // ラジオ
    const [selectedRadio, setSelectedRadio] = useState<string>('')
    // 各種チェックボックス
    const [isIphoneCk, setIsIphoneCk] = useState<boolean | undefined>(false)
    const [isAndroidCk, setIsAndroidCk] = useState<boolean | undefined>(false)
    const [isWifiCk, setIsWifiCk] = useState<boolean | undefined>(false)
    const [isPlanOnlyCk, setIsPlanOnlyCk] = useState<boolean | undefined>(false)
    // チェックしているリスト
    const [selectChecks, setSelectChecks] = useState<string>('')
    // 絞り込み結果数
    const [filteredDataCount, setFilteredDataCount] = useState<number>(0)
    // 絞り込み結果（ラジオ/チェック）内容
    const [currentFilters, setCurrentFilters] = useState<string>('')
    // 絞り込み解除ボタン見た目
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
    const radioValues = {
      firstline: 'はじめて',
      secondline: '2回線目以降',
    }
    // チェックボックス用データ
    type checkBoxItem = {
      label: string
      value: string
      id: string
      checked: boolean | undefined
      fnc: (e: boolean | undefined) => void
    }
    const checkBoxValues = {
      iPhone: 'iPhone',
      Android: 'Android',
      Wifi: 'モバイルWifi',
      SIM: 'SIMのみ',
    }
    const checkBoxList = [
      {
        label: 'iPhone',
        value: checkBoxValues.iPhone,
        id: 'iphone',
        checked: isIphoneCk,
        fnc: setIsIphoneCk,
      },
      {
        label: 'Android',
        value: checkBoxValues.Android,
        id: 'android',
        checked: isAndroidCk,
        fnc: setIsAndroidCk,
      },
      {
        label: 'Wi-Fiルーター',
        value: checkBoxValues.Wifi,
        id: 'wifi',
        checked: isWifiCk,
        fnc: setIsWifiCk,
      },
      {
        label: 'プラン（SIM）のみで申し込む',
        value: checkBoxValues.SIM,
        id: 'sim',
        checked: isPlanOnlyCk,
        fnc: setIsPlanOnlyCk,
      },
    ]

    const clearSession = () => {
      sessionStorage.removeItem('cpn-top-Application')
      sessionStorage.removeItem('cpn-top-Product')
      sessionStorage.removeItem('cpn-top-scrolly')
    }

    const clearFilters = () => {
      setSelectedRadio('')
      setIsIphoneCk(false)
      setIsAndroidCk(false)
      setIsWifiCk(false)
      setIsPlanOnlyCk(false)
      setSelectChecks('')
      setCurrentFilters('')
      clearSession()
      setIsHistory(false)
    }

    const checkDisplayPriceText = (dataArray: CpnData[]): boolean => {
      return dataArray.some(data => data.display_price_text === '1')
    }

    const handleRadioChange = (value: string | undefined) => {
      if (!value) return
      setSelectedRadio(value)
    }

    useNavigationDetection(
      {
        onBackForward: () => {
          if (sessionStorage.getItem('cpn-top-scrolly') !== null) {
            setIsAccordionState(true)
            const filters = []
            // ラジオボタンの履歴
            if (sessionStorage.getItem('cpn-top-Application') !== null) {
              const getStorageAndtype = sessionStorage.getItem(
                'cpn-top-Application',
              )
              if (getStorageAndtype) setSelectedRadio(getStorageAndtype)
              if (getStorageAndtype) filters.push(getStorageAndtype)
            }
            // チェックボックスの履歴
            if (sessionStorage.getItem('cpn-top-Product') !== null) {
              const getStorageOetype = sessionStorage.getItem('cpn-top-Product')
              if (getStorageOetype) {
                setSelectChecks(getStorageOetype)
                const arr = getStorageOetype.split(', ')
                setIsIphoneCk(arr.includes(checkBoxValues.iPhone))
                setIsAndroidCk(arr.includes(checkBoxValues.Android))
                setIsWifiCk(arr.includes(checkBoxValues.Wifi))
                setIsPlanOnlyCk(arr.includes(checkBoxValues.SIM))
              }
            }
            setIsHistory(true)
          } else {
            clearSession()
          }
        },
      },
      [
        checkBoxValues.iPhone,
        checkBoxValues.Android,
        checkBoxValues.Wifi,
        checkBoxValues.SIM,
      ],
    )

    useEffect(() => {
      const initialCheck = checkDisplayPriceText(rawData)
      setDisplayPriceFlag(initialCheck)

      //フィルタリング
      const newFilteredData = rawData.filter(data => {
        const matchesRadio = selectedRadio
          ? data.tag.includes(selectedRadio)
          : true
        let matchesCheckboxes =
          !isIphoneCk && !isAndroidCk && !isWifiCk && !isPlanOnlyCk

        if (isIphoneCk)
          matchesCheckboxes =
            matchesCheckboxes || data.tag.includes(checkBoxValues.iPhone)
        if (isAndroidCk)
          matchesCheckboxes =
            matchesCheckboxes || data.tag.includes(checkBoxValues.Android)
        if (isWifiCk)
          matchesCheckboxes =
            matchesCheckboxes || data.tag.includes(checkBoxValues.Wifi)
        if (isPlanOnlyCk)
          matchesCheckboxes =
            matchesCheckboxes || data.tag.includes(checkBoxValues.SIM)

        return matchesRadio && matchesCheckboxes
      })
      setFilteredData(newFilteredData)
      setFilteredDataCount(newFilteredData.length)

      const hasDisplayPriceText = checkDisplayPriceText(newFilteredData)
      setDisplayPriceFlag(hasDisplayPriceText)

      let radioFilter = ''
      if (selectedRadio !== '') {
        radioFilter = selectedRadio
        setSelectedRadio(radioFilter)
      }
      const checkFilter = []
      if (isIphoneCk) checkFilter.push(checkBoxValues.iPhone)
      if (isAndroidCk) checkFilter.push(checkBoxValues.Android)
      if (isWifiCk) checkFilter.push(checkBoxValues.Wifi)
      if (isPlanOnlyCk) checkFilter.push(checkBoxValues.SIM)
      if (isIphoneCk || isAndroidCk || isWifiCk || isPlanOnlyCk) {
        setSelectChecks(checkFilter.join(', '))
      }

      const filters = [radioFilter, ...checkFilter]
      setCurrentFilters(filters.join(' / '))

      const isAnyFilterActive =
        selectedRadio || isIphoneCk || isAndroidCk || isWifiCk || isPlanOnlyCk
      setIsHideClearFilter(!isAnyFilterActive)
      setIsHistory(isAnyFilterActive ? true : false)
    }, [
      selectedRadio,
      isIphoneCk,
      isAndroidCk,
      isWifiCk,
      isPlanOnlyCk,
      rawData,
      checkBoxValues.iPhone,
      checkBoxValues.Android,
      checkBoxValues.Wifi,
      checkBoxValues.SIM,
      isHistory,
    ])

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
          if (sessionStorage.getItem('cpn-top-scrolly') !== null && isHistory) {
            // cpn-top-Application、cpn-top-Product、cpn-top-scrollyの記録は<CampaignList>内でキャンペーンリンクを押した時に記録される
            const getScrollY = Number(sessionStorage.getItem('cpn-top-scrolly'))
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
            text={<TxtEmp01>自分にぴったりなキャンペーンを絞り込む</TxtEmp01>}
            isOpened={false}
            updateOpenState={setIsAccordionState}
            openState={isAccordionState}
            useCallback={true}
            ratid="campaign_accordion_filter-function"
            className={isAccordionState ? 'open' : undefined}
          >
            <FilterWrap className={Utils['Mt-16']} ref={changeScrollRef}>
              <dl>
                <div className="group">
                  <FilterTitle>楽天モバイルお申し込み状況</FilterTitle>
                  <FilterItems>
                    <FilterRadio
                      onChangeCheck={e => {
                        handleRadioChange(e)
                      }}
                      select={[
                        {
                          name: 'application',
                          text: radioValues.firstline,
                          value: radioValues.firstline,
                          checked: selectedRadio === radioValues.firstline,
                          ratid:
                            'campaign_accordion_filter-condition-firstline',
                        },
                        {
                          name: 'application',
                          text: radioValues.secondline,
                          value: radioValues.secondline,
                          checked: selectedRadio === radioValues.secondline,
                          ratid:
                            'campaign_accordion_filter-condition-secondline',
                        },
                      ]}
                    />
                  </FilterItems>
                </div>
                <div className="group">
                  <FilterTitle>楽天モバイルでの、ご購入予定の製品</FilterTitle>
                  <FilterItems>
                    {checkBoxList.map((item: checkBoxItem) => (
                      <FilterCheckBox key={item.id}>
                        <CheckboxBorder
                          id={item.id}
                          inputName="product"
                          checked={item.checked}
                          onChangeCheck={e => {
                            item.fnc(e)
                          }}
                          text={item.label}
                          value={item.value}
                          disabled={false}
                          ratid={`campaign_accordion_filter-condition-${item.id}`}
                        />
                      </FilterCheckBox>
                    ))}
                  </FilterItems>
                </div>
              </dl>
              <div
                className={`${Utils['Mt-24']} ${Utils['Mt-pc-0']} ${Utils['Align-rrl']}`}
              >
                <ClearBtn
                  data-ratid="campaign_accordion_filter-deselection"
                  data-ratevent="click"
                  data-ratparam="all"
                  aria-disabled={isHideClearFilter}
                  onClick={() => {
                    clearFilters()
                  }}
                >
                  絞り込みを解除
                </ClearBtn>
              </div>
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
                pageType="cpn-top-"
                firstLine={selectedRadio}
                secondLine={selectChecks}
              />
            </SystemContainer>
          </BgGray>
        </ResetSystemContainer>

        <FilterInfo
          isHideClearFilter={isHideClearFilter}
          currentFilters={currentFilters}
          filteredDataCount={filteredDataCount}
          totalDataCount={totalDataCount}
          filterFootTriggerState={filterFootTriggerState}
          conditionsTriggerState={conditionsTriggerState}
          onChangeTerms={handleChangeTerms}
        />
      </>
    )
  },
)
