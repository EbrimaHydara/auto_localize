import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { ButtonSecondary } from '@components/atoms/Buttons'

const ChangeBtnSecondary = styled(ButtonSecondary)`
  width: fit-content;
  font-size: ${props => props.theme.fonts.ss};
  font-weight: bold;
  padding: 8px 16px;
`
const FilterFoot = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 8px 16px 12px;
  z-index: 10;
  font-size: ${props => props.theme.fonts.ss};
  filter: drop-shadow(0 -2px 6px rgba(51, 51, 51, 0.15));
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
  &[aria-hidden='true'] {
    display: none;
  }
  &[aria-hidden='false'] {
    display: block;
  }
`
const FilterConditions = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  &[aria-hidden='true'] {
    display: none;
  }
  span {
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 4px;
    padding: 0 6px;
    margin-right: 8px;
    font-weight: bold;
    height: fit-content;
  }
`
const FilterResult = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &[aria-hidden='true'] {
    opacity: 0;
  }

  .num {
    font-size: 14px;
  }
  .title {
    font-weight: bold;
    &::after {
      content: '・・・';
      ${mixins.mq.MinS} {
        font-size: ${props => props.theme.fonts.ss};
        color: ${props => props.theme.colors.monotone75};
      }
      ${mixins.mq.MinL} {
        content: '・・・・・・・・・';
      }
    }
  }
  .filter {
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
  .total {
    font-size: ${props => props.theme.fonts.s};
  }
`

type Props = {
  isHideClearFilter: boolean
  currentFilters: string
  filteredDataCount: number
  totalDataCount: number
  filterFootTriggerState: boolean
  conditionsTriggerState: boolean
  onChangeTerms: () => void
}

export const FilterInfo: React.FC<Props> = ({
  isHideClearFilter,
  currentFilters,
  filteredDataCount,
  totalDataCount,
  filterFootTriggerState,
  conditionsTriggerState,
  onChangeTerms,
}) => {
  return (
    <FilterFoot
      className={!isHideClearFilter ? 'visible' : undefined}
      aria-hidden={filterFootTriggerState}
    >
      <FilterConditions aria-hidden={conditionsTriggerState}>
        <span>条件</span>
        {currentFilters}
      </FilterConditions>
      <FilterResult>
        <div className="num">
          <span className="title">絞り込み結果</span>
          <span className="filter">{filteredDataCount}件</span>/
          <span className="total">{totalDataCount}件</span>
        </div>
        <div>
          <ChangeBtnSecondary
            data-ratid="campaign_filter-condition_change"
            data-ratevent="click"
            data-ratparam="all"
            aria-disabled={isHideClearFilter}
            onClick={() => onChangeTerms()}
          >
            絞り込み条件を変更
          </ChangeBtnSecondary>
        </div>
      </FilterResult>
    </FilterFoot>
  )
}
