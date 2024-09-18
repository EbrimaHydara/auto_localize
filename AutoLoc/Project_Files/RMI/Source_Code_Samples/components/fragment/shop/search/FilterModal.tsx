import React, { useState } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ButtonSecondary } from '@components/atoms/Buttons'
import { Modal } from '@components/atoms/Modal'
import { CheckboxBorder } from '@components/atoms/CheckboxBorder'
import { scroller } from 'react-scroll'
import { ShopData } from '@components/utils/shop/search/datatype'

const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  > li {
    margin-top: 16px;
    margin-left: 16px;
    &[aria-hidden='true'] {
      display: none;
    }
  }
`

export interface FilterModalProps {
  switchFlag: () => void
  flag: boolean
  filterState?: number[]
  updateFilterState?: React.Dispatch<React.SetStateAction<number[]>>
  filterNameState?: string[]
  updateFilterDispState?: React.Dispatch<React.SetStateAction<string[]>>
  updateCurrentPageState?: React.Dispatch<React.SetStateAction<number>>
  setPagesImm?: (pageTotal: number, currentPage: number) => void
  getFiltered?: (immArr?: string[]) => ShopData | null
  perPage?: number
  updatePageTotalState?: React.Dispatch<React.SetStateAction<number>>
}
export const FilterModal = (props: FilterModalProps) => {
  const {
    switchFlag,
    flag,
    filterState,
    updateFilterState,
    filterNameState,
    updateFilterDispState,
    updateCurrentPageState,
    setPagesImm,
    getFiltered,
    perPage,
    updatePageTotalState,
  } = props
  const [filterDispPreState, updateFilterDispPreState] = useState<string[]>([])
  const scrollToElement = (element: string) => {
    scroller.scrollTo(element, {
      smooth: false,
    })
  }
  return (
    <Modal switchFlag={switchFlag} flag={flag}>
      <ServiceList>
        {filterNameState && filterState ? (
          <>
            {filterNameState.map((elem, i) => {
              return (
                <li>
                  <CheckboxBorder
                    inputName="filter-by"
                    id={elem}
                    value={elem}
                    text={elem}
                    disabled={false}
                    checked={filterState[i] === 1 ? true : false}
                    onChangeCheck={e => {
                      if (updateFilterState) {
                        const tempArr = [...filterState]
                        const ref = filterState[i]
                        tempArr.splice(i, 1, ref ? 0 : 1)
                        console.log(tempArr)
                        updateFilterState(tempArr)
                      }
                      if (updateFilterDispState) {
                        const tempArr = [...filterDispPreState]
                        const ref = filterState[i]
                        if (e /*true*/) {
                          if (ref) {
                            //do nothing
                          } else {
                            tempArr.push(filterNameState[i])
                          }
                        } else {
                          // false
                          if (ref) {
                            console.log('除去')
                            const index = tempArr.indexOf(filterNameState[i])
                            console.log(index)
                            tempArr.splice(index, 1)
                            console.log(tempArr)
                          } else {
                            //do nothing
                          }
                        }
                        console.log(tempArr)
                        updateFilterDispPreState(tempArr)
                      }
                    }}
                  />
                </li>
              )
            })}
          </>
        ) : (
          ''
        )}
      </ServiceList>
      <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
        <ButtonSecondary
          onClick={() => {
            switchFlag()
            if (getFiltered) {
              console.log(filterDispPreState)
              const filtered = getFiltered(filterDispPreState)
              let len = 0
              if (filtered !== null && filtered.length > 0) {
                const pageCnt = perPage ? perPage : 10
                len = Math.ceil(filtered.length / pageCnt)
              }
              console.log(len)
              if (updatePageTotalState) {
                updatePageTotalState(len)
              }
              if (setPagesImm) {
                setPagesImm(len, 1)
              }
              if (updateCurrentPageState) {
                updateCurrentPageState(1)
              }
              scrollToElement('js-result-top')
              if (updateFilterDispState) {
                updateFilterDispState(filterDispPreState)
              }
            }
          }}
        >
          検索する
        </ButtonSecondary>
      </div>
    </Modal>
  )
}
