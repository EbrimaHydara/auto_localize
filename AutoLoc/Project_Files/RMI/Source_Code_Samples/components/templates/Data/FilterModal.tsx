import React from 'react'
import styled from 'styled-components/macro'
import { Heading } from '@components/atoms/Heading'
import Utils from '@styles/Utils.module.scss'
import { ButtonSecondary } from '@components/atoms/Buttons'
import { ButtonLinkIconBefore } from '@components/atoms/ButtonLink'
import { IconRefresh } from '@components/icons'
import { Modal } from '@components/atoms/Modal'
import { CheckboxBorder } from '@components/atoms/CheckboxBorder'

const FilterModalCheckboxWrapper = styled.div`
  display: flex;
  > label {
    width: calc((100% - 24px * 3) / 4);
    margin-top: 8px;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
    > div {
      width: 100%;
    }
  }
  @media (max-width: ${props => props.theme.max.m}) {
    flex-wrap: wrap;
    > label {
      margin-right: 8px;
      width: calc((100% - 8px) / 2);
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
`
const FilterModalCheckboxWrapperDouble = styled(FilterModalCheckboxWrapper)`
  > label {
    width: calc((100% - 24px) / 2);
  }
  @media (max-width: ${props => props.theme.max.m}) {
    > label {
      width: 100%;
      &:first-child {
        margin-right: 0;
      }
    }
  }
`
const FilterModalButtonWrapper = styled.div`
  margin-top: 32px;
  text-align: center;
  > button {
    &:last-child {
      margin-right: auto;
      margin-left: auto;
    }
  }
`

export interface FilterModalProps {
  switchFlag: Function
  flag: boolean
  filterCheckboxState1?: boolean
  filterCheckboxState2?: boolean
  filterCheckboxState3?: boolean
  filterCheckboxState4?: boolean
  filterCheckboxState5?: boolean
  filterCheckboxState6?: boolean
  updateFilterCheckboxState1?: Function
  updateFilterCheckboxState2?: Function
  updateFilterCheckboxState3?: Function
  updateFilterCheckboxState4?: Function
  updateFilterCheckboxState5?: Function
  updateFilterCheckboxState6?: Function
}
export const FilterModal = (props: FilterModalProps) => {
  const {
    switchFlag,
    flag,
    filterCheckboxState1,
    filterCheckboxState2,
    filterCheckboxState3,
    filterCheckboxState4,
    filterCheckboxState5,
    filterCheckboxState6,
    updateFilterCheckboxState1,
    updateFilterCheckboxState2,
    updateFilterCheckboxState3,
    updateFilterCheckboxState4,
    updateFilterCheckboxState5,
    updateFilterCheckboxState6,
  } = props
  return (
    <Modal switchFlag={switchFlag} flag={flag}>
      <Heading level="4"> title</Heading>
      <FilterModalCheckboxWrapper>
        <CheckboxBorder
          inputName={'filter-by'}
          id={'case'}
          value={'case'}
          text={'checkbox1'}
          disabled={false}
          checked={filterCheckboxState1}
          onChangeCheck={e => {
            if (updateFilterCheckboxState1) {
              updateFilterCheckboxState1(e)
            }
          }}
        />
        <CheckboxBorder
          inputName={'filter-by'}
          id={'battery'}
          value={'battery'}
          text={'checkbox2'}
          disabled={false}
          checked={filterCheckboxState2}
          onChangeCheck={e => {
            if (updateFilterCheckboxState2) {
              updateFilterCheckboxState2(e)
            }
          }}
        />
        <CheckboxBorder
          inputName={'filter-by'}
          id={'audio'}
          value={'audio'}
          text={'checkbox3'}
          disabled={false}
          checked={filterCheckboxState3}
          onChangeCheck={e => {
            if (updateFilterCheckboxState3) {
              updateFilterCheckboxState3(e)
            }
          }}
        />
        <CheckboxBorder
          inputName={'filter-by'}
          id={'other'}
          value={'other'}
          text={'checkbox4'}
          disabled={false}
          checked={filterCheckboxState4}
          onChangeCheck={e => {
            if (updateFilterCheckboxState4) {
              updateFilterCheckboxState4(e)
            }
          }}
        />
      </FilterModalCheckboxWrapper>
      <Heading level="4" className={Utils['Mt-24']}>
        その他タイトル
      </Heading>
      <FilterModalCheckboxWrapperDouble>
        <CheckboxBorder
          inputName={'filter-by'}
          id={'new'}
          value={'new'}
          text={'others1'}
          disabled={false}
          checked={filterCheckboxState5}
          onChangeCheck={e => {
            if (updateFilterCheckboxState5) {
              updateFilterCheckboxState5(e)
            }
          }}
        />
        <CheckboxBorder
          inputName={'filter-by'}
          id={'available'}
          value={'available'}
          text={'others2'}
          disabled={false}
          checked={filterCheckboxState6}
          onChangeCheck={e => {
            if (updateFilterCheckboxState6) {
              updateFilterCheckboxState6(e)
            }
          }}
        />
      </FilterModalCheckboxWrapperDouble>

      <FilterModalButtonWrapper>
        <ButtonSecondary onClick={() => switchFlag()}>
          フィルター適用
        </ButtonSecondary>
        <ButtonLinkIconBefore
          onClick={() => {
            if (updateFilterCheckboxState1) {
              updateFilterCheckboxState1(false)
            }
            if (updateFilterCheckboxState2) {
              updateFilterCheckboxState2(false)
            }
            if (updateFilterCheckboxState3) {
              updateFilterCheckboxState3(false)
            }
            if (updateFilterCheckboxState4) {
              updateFilterCheckboxState4(false)
            }
            if (updateFilterCheckboxState5) {
              updateFilterCheckboxState5(false)
            }
            if (updateFilterCheckboxState6) {
              updateFilterCheckboxState6(false)
            }
          }}
          className={Utils['Mt-16']}
        >
          <IconRefresh />
          <span>フィルタークリア</span>
        </ButtonLinkIconBefore>
      </FilterModalButtonWrapper>
    </Modal>
  )
}
