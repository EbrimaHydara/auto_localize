import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const TabItems = styled.ul`
  display: flex;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
`
export const TabItem = styled.li<{ isTabBgWhite?: boolean }>`
  width: 100%;
  min-height: 44px;
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
  line-height: 1.5;
  padding: 10px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isTabBgWhite
      ? props.theme.colors.white
      : props.theme.colors.monotone97};
  color: ${props => props.theme.colors.monotone30};
  border-radius: 4px 4px 0 0;
  border: 1px solid ${props => props.theme.colors.monotone88};
  border-bottom: 0;
  ${mixins.mq.MinL} {
    font-size: ${props => props.theme.fonts.base};
    min-height: 49px;
  }
  &[aria-selected='true'] {
    background: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  &[aria-selected='false'] {
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.monotone93};
    }
    &:active {
      background-color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }
  & + & {
    margin-left: ${props => props.theme.gap.s};
    ${props => mixins.mq.MinMaxCustom(props.theme.min.m, props.theme.max.m)} {
      margin-left: ${props => props.theme.gap.m};
    }
    ${mixins.mq.MinL} {
      margin-left: ${props => props.theme.gap.l};
    }
  }
  // タブの見た目だけ使って実はリンクの時のため
  > a {
    margin: -10px -8px;
    display: grid;
    place-items: center;
    width: calc(100% + 16px);
    height: calc(100% + 20px);
    &,
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
    }
    &:hover {
      background-color: ${props => props.theme.colors.monotone93};
    }
  }
`
const TabPanel = styled.div`
  &[aria-hidden='true'] {
    display: none;
  }
`

export interface TabProps {
  heading1: string | JSX.Element
  heading2?: string | JSX.Element
  heading3?: string | JSX.Element
  heading4?: string | JSX.Element
  content1: JSX.Element
  content2?: JSX.Element
  content3?: JSX.Element
  content4?: JSX.Element
  className?: string
  pitari?: number[]
  history?: string
  id1?: string
  id2?: string
  id3?: string
  id4?: string
  current?: Number
  ratId1?: string
  ratId2?: string
  ratId3?: string
  ratId4?: string
  isTabBgWhite?: boolean
  tabListParameters?: string[]
}
export const Tab = (props: TabProps) => {
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    content1,
    content2,
    content3,
    content4,
    className,
    pitari,
    history,
    id1,
    id2,
    id3,
    id4,
    current,
    ratId1,
    ratId2,
    ratId3,
    ratId4,
    isTabBgWhite,
    tabListParameters,
  } = props
  const [selectedState, setSelectedState] = useState([1, 0, 0])

  const setHistory = useCallback(
    (arr: number[]) => {
      const arrString = JSON.stringify(arr)
      localStorage.setItem(history as string, arrString)
    },
    [history],
  )

  const updateSelectedState = useCallback(
    (arr: number[]) => {
      setSelectedState(arr)
      if (history) {
        setHistory(arr)
      }
    },
    [history, setHistory],
  )

  useEffect(() => {
    const hash = window.location.hash
    const possibleHashArray = [id1, id2, id3]
    const urlParameter = window.location.search
    const urlParameterToSearch = new URLSearchParams(urlParameter)
    const isTabListParameter = urlParameterToSearch.has('tab-list')
    if (isTabListParameter && tabListParameters) {
      // change tab by url parameter
      const tabListValue = urlParameterToSearch.get('tab-list')
      if (tabListValue) {
        const targetIndex = tabListParameters.indexOf(tabListValue)
        const tempArrayTabList = [0, 0, 0, 0]
        targetIndex === -1
          ? (tempArrayTabList[0] = 1)
          : (tempArrayTabList[targetIndex] = 1)
        setSelectedState(tempArrayTabList)
      }
    } else if (possibleHashArray.indexOf(hash.substring(1)) > -1) {
      const index = possibleHashArray.indexOf(hash.substring(1))
      let tempArray = [1, 0, 0, 0]
      if (index === 0) {
        tempArray = [1, 0, 0, 0]
      } else if (index === 1) {
        tempArray = [0, 1, 0, 0]
      } else if (index === 2) {
        tempArray = [0, 0, 1, 0]
      } else {
        tempArray = [0, 0, 0, 1]
      }
      setSelectedState(tempArray)
    } else if (pitari?.length) {
      setSelectedState(pitari)
    } else if (history) {
      const storage = localStorage.getItem(history)
      if (storage) {
        const storageArray = JSON.parse(storage)
        setSelectedState(storageArray)
      }
    } else if (current) {
      let currentArray = [1, 0, 0, 0]
      if (current === 1) {
        currentArray = [1, 0, 0, 0]
      } else if (current === 2) {
        currentArray = [0, 1, 0, 0]
      } else if (current === 3) {
        currentArray = [0, 0, 1, 0]
      } else {
        currentArray = [0, 0, 0, 1]
      }
      setSelectedState(currentArray)
    }
  }, [id1, id2, id3, current, pitari, history, tabListParameters])

  return (
    <div className={className}>
      <TabItems role="tablist">
        <TabItem
          role="tab"
          aria-controls="tab1"
          aria-selected={selectedState[0] ? true : false}
          onClick={() => {
            updateSelectedState([1, 0, 0])
          }}
          id={id1}
          {...(ratId1 && {
            'data-ratid': ratId1,
            'data-ratevent': 'click',
            'data-ratparam': 'all',
          })}
          isTabBgWhite={isTabBgWhite}
        >
          {heading1}
        </TabItem>
        {heading2 && (
          <TabItem
            role="tab"
            aria-controls="tab2"
            aria-selected={selectedState[1] ? true : false}
            onClick={() => {
              updateSelectedState([0, 1, 0])
            }}
            id={id2}
            {...(ratId2 && {
              'data-ratid': ratId2,
              'data-ratevent': 'click',
              'data-ratparam': 'all',
            })}
            isTabBgWhite={isTabBgWhite}
          >
            {heading2}
          </TabItem>
        )}
        {heading3 && (
          <TabItem
            role="tab"
            aria-controls="tab3"
            aria-selected={selectedState[2] ? true : false}
            onClick={() => {
              updateSelectedState([0, 0, 1])
            }}
            id={id3}
            {...(ratId3 && {
              'data-ratid': ratId3,
              'data-ratevent': 'click',
              'data-ratparam': 'all',
            })}
            isTabBgWhite={isTabBgWhite}
          >
            {heading3}
          </TabItem>
        )}
        {heading4 && (
          <TabItem
            role="tab"
            aria-controls="tab4"
            aria-selected={selectedState[3] ? true : false}
            onClick={() => {
              updateSelectedState([0, 0, 0, 1])
            }}
            id={id4}
            {...(ratId4 && {
              'data-ratid': ratId4,
              'data-ratevent': 'click',
              'data-ratparam': 'all',
            })}
            isTabBgWhite={isTabBgWhite}
          >
            {heading4}
          </TabItem>
        )}
      </TabItems>
      <TabPanel
        role="tabpanel"
        id="tab1"
        aria-hidden={!selectedState[0] ? true : false}
      >
        {content1}
      </TabPanel>
      {content2 && (
        <TabPanel
          role="tabpanel"
          id="tab2"
          aria-hidden={!selectedState[1] ? true : false}
        >
          {content2}
        </TabPanel>
      )}
      {content3 && (
        <TabPanel
          role="tabpanel"
          id="tab3"
          aria-hidden={!selectedState[2] ? true : false}
        >
          {content3}
        </TabPanel>
      )}
      {content4 && (
        <TabPanel
          role="tabpanel"
          id="tab4"
          aria-hidden={!selectedState[3] ? true : false}
        >
          {content4}
        </TabPanel>
      )}
    </div>
  )
}
