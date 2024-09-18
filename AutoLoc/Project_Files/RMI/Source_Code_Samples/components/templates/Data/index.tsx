import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { ButtonLinkIconBefore } from '@components/atoms/ButtonLink'
import { IconSlidersLine, IconChangeOrder } from '@components/icons'
import Utils from '@styles/Utils.module.scss'
import { FilterModal } from '@components/templates/Data/FilterModal'

const FilterWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`
const Sorter = styled.div`
  position: relative;
`
const SortList = styled.ul`
  position: absolute;
  left: 0;
  padding: 8px 0;
  margin-top: 8px;
  max-width: calc(100vw - 16px * 2);
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 4px;
  outline: 0;
  z-index: 1;
  display: none;
  cursor: default;
  [aria-expanded='true'] + & {
    display: block;
  }
  > li {
    padding: 8px 16px;
    &:hover {
      background-color: ${props => props.theme.colors.monotone97};
      cursor: pointer;
    }
    &:active {
      font-weight: bold;
    }
    &[aria-selected='true'] {
      font-weight: bold;
      background-color: ${props => props.theme.colors.monotone97};
    }
  }
`
const ButtonLinkIconBeforePr8 = styled(ButtonLinkIconBefore)`
  > span {
    &:first-child {
      padding-right: 8px;
    }
  }
`

export const Data = () => {
  const [filterModalFlag, setFilterModalFlag] = useState(false)
  const handleFilterModal = () => setFilterModalFlag(!filterModalFlag)
  const [filterCheckboxState1, updateFilterCheckboxState1] = useState<
    boolean | undefined
  >(false)
  const [filterCheckboxState2, updateFilterCheckboxState2] = useState<
    boolean | undefined
  >(false)
  const [filterCheckboxState3, updateFilterCheckboxState3] = useState<
    boolean | undefined
  >(false)
  const [filterCheckboxState4, updateFilterCheckboxState4] = useState<
    boolean | undefined
  >(false)
  const [filterCheckboxState5, updateFilterCheckboxState5] = useState<
    boolean | undefined
  >(false)
  const [filterCheckboxState6, updateFilterCheckboxState6] = useState<
    boolean | undefined
  >(false)
  const sortChoices = [
    'filter item1',
    'filter item2',
    'filter item3',
    'filter item4',
    'filter item5',
  ]
  const sortListWidth =
    Math.max(...sortChoices.map(t => t.length)) * 16 + 32 + 2
  const sortlist = useRef<HTMLUListElement | null>(null)
  const [isSortExpanded, setIsSortExpanded] = useState<boolean | undefined>(
    false,
  )
  const [sortIndex, setSortIndex] = useState<number>(0)
  const handleSort = () => {
    setIsSortExpanded(true)
    sortlist.current && sortlist.current.focus()
  }
  const manipulateSortList = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const choicesLen = sortChoices.length
    switch (e.code) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        if (sortIndex + 1 < choicesLen) {
          setSortIndex(sortIndex + 1)
        }
        break
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        if (sortIndex - 1 > -1) {
          setSortIndex(sortIndex - 1)
        }
        break
      case 'Enter':
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        setIsSortExpanded(false)
        break
    }
  }
  return (
    <>
      <FilterWrapper>
        <ButtonLinkIconBeforePr8 onClick={() => handleFilterModal()}>
          <IconSlidersLine />
          <span>filter modal</span>
        </ButtonLinkIconBeforePr8>
        <Sorter className={Utils['Ml-8']}>
          <ButtonLinkIconBeforePr8
            aria-haspopup="listbox"
            aria-expanded={isSortExpanded}
            onClick={() => handleSort()}
          >
            <IconChangeOrder />
            <span>{sortChoices[sortIndex]}</span>
          </ButtonLinkIconBeforePr8>
          <SortList
            tabIndex={-1}
            role="listbox"
            aria-activedescendant={`choice_${sortIndex}`}
            ref={sortlist}
            onKeyDown={e => manipulateSortList(e)}
            style={{ width: sortListWidth + 'px' }}
          >
            {sortChoices.map((choice, index) => (
              <li
                key={index}
                id={`choice_${index}`}
                role="option"
                aria-selected={sortIndex === index ? true : false}
                onClick={() => {
                  setSortIndex(index)
                  setIsSortExpanded(false)
                }}
              >
                {choice}
              </li>
            ))}
          </SortList>
        </Sorter>
      </FilterWrapper>
      <FilterModal
        switchFlag={handleFilterModal}
        flag={filterModalFlag}
        filterCheckboxState1={filterCheckboxState1}
        filterCheckboxState2={filterCheckboxState2}
        filterCheckboxState3={filterCheckboxState3}
        filterCheckboxState4={filterCheckboxState4}
        filterCheckboxState5={filterCheckboxState5}
        filterCheckboxState6={filterCheckboxState6}
        updateFilterCheckboxState1={updateFilterCheckboxState1}
        updateFilterCheckboxState2={updateFilterCheckboxState2}
        updateFilterCheckboxState3={updateFilterCheckboxState3}
        updateFilterCheckboxState4={updateFilterCheckboxState4}
        updateFilterCheckboxState5={updateFilterCheckboxState5}
        updateFilterCheckboxState6={updateFilterCheckboxState6}
      />
    </>
  )
}
