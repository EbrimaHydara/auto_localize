import React, { MouseEventHandler, useCallback } from 'react'
import styled from 'styled-components'
import { IconChevronDown } from '@components/icons'

const Items = styled.ul`
  display: flex;
  justify-content: start;
  align-items: end;
`

const Item = styled.button`
  white-space: nowrap;
  font-size: ${props => props.theme.fonts.base};
  line-height: 1.5;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.monotone30};
  &[aria-selected='true'] {
    padding-bottom: 7px;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  &[aria-selected='false'] {
    &:hover,
    &:focus,
    &:active {
      padding-bottom: 7px;
      font-weight: 700;
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
    }
  }
  & + & {
    margin-left: ${props => props.theme.gap.s};
    @media screen and (min-width: ${props =>
        props.theme.min.m}) and (max-width: ${props => props.theme.max.m}) {
      margin-left: ${props => props.theme.gap.m};
    }
    @media screen and (min-width: ${props => props.theme.min.l}) {
      margin-left: ${props => props.theme.gap.l};
    }
  }
`

const OtherList = styled.li`
  margin-left: auto;
  position: relative;
  &:hover {
    > div {
      display: flex;
      flex-direction: column;
      > button {
        padding: ${props => props.theme.gap.s};
      }
    }
  }
`

const OtherHoverList = styled.div`
  display: none;
  position: absolute;
  top: calc(1em + 16px);
  right: 0;
  z-index: 1;
  white-space: nowrap;
  border: 1px solid ${props => props.theme.colors.primary};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px;
  background: ${props => props.theme.colors.white};
  > button {
    text-align: left;
    &:hover,
    &:focus,
    &:active {
      font-weight: 700;
      color: ${props => props.theme.colors.primary};
    }
  }
`

const Border = styled.div`
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  overflow: hidden;
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
`

const IconChevronDownCustom = styled(IconChevronDown)`
  color: ${props => props.theme.colors.primary};
  margin-left: 4px;
`
interface tabInfo {
  label: string
  category: string
  width: number
}
export interface TabCategoryProps {
  tabInfos: tabInfo[]
  collapse?: tabInfo[]
  content: (category: string) => JSX.Element
  id: string
  className?: string
  currentCategory: string
  myOnClick?: MouseEventHandler
}
export const TabCategory = (props: TabCategoryProps) => {
  const {
    tabInfos,
    collapse,
    content,
    className,
    id,
    currentCategory,
    myOnClick,
  } = props
  const collapseSet = new Set<tabInfo>()
  collapse && collapse.forEach(el => collapseSet.add(el))
  const collapseList = Array.from(collapseSet)
  const useMyCallback = useCallback<MouseEventHandler>(
    e => {
      myOnClick && myOnClick(e)
    },
    [myOnClick],
  )

  return (
    <div className={className}>
      {tabInfos.length > 0 && (
        <>
          <Items role="tablist">
            {tabInfos.map((tabInfo, i) =>
              tabInfo.category === 'other' ? (
                <OtherList key={`heading-${i}`}>
                  <Item
                    type="button"
                    role="tab"
                    aria-controls={`${id}-${tabInfo.category}`}
                    aria-selected={
                      tabInfo.category.includes(currentCategory) ? true : false
                    }
                    data-category={tabInfo.category}
                    onClick={useMyCallback}
                  >
                    {tabInfo.label}
                    {collapseList.length > 0 && (
                      <IconChevronDownCustom
                        aria-controls={`${id}-${tabInfo.category}`}
                        aria-selected={
                          tabInfo.category.includes(currentCategory)
                            ? true
                            : false
                        }
                        data-category={tabInfo.category}
                        onClick={useMyCallback}
                      />
                    )}
                  </Item>
                  {collapseList.length > 0 && (
                    <OtherHoverList>
                      {collapseList.map((el, i) => (
                        <button
                          key={i}
                          role="tab"
                          aria-controls={`${id}-${el.category}`}
                          aria-selected={
                            el.category.includes(currentCategory) ? true : false
                          }
                          data-category={el.category}
                          onClick={useMyCallback}
                        >
                          {el.label}
                        </button>
                      ))}
                    </OtherHoverList>
                  )}
                </OtherList>
              ) : (
                <li key={`heading-${i}`}>
                  <Item
                    type="button"
                    role="tab"
                    aria-controls={`${id}-${tabInfo.category}`}
                    aria-selected={
                      tabInfo.category.includes(currentCategory) ? true : false
                    }
                    data-category={tabInfo.category}
                    onClick={useMyCallback}
                  >
                    {tabInfo.label}
                  </Item>
                </li>
              ),
            )}
          </Items>
          <Border />
        </>
      )}
      {tabInfos.length > 0 ? (
        tabInfos.map((tabInfo, i) => (
          <div
            role="tabpanel"
            key={`content-${i}`}
            aria-hidden={
              !tabInfo.category.includes(currentCategory) ? true : false
            }
            id={`${id}-${tabInfo.category}`}
          >
            {content(tabInfo.category)}
          </div>
        ))
      ) : (
        <>{content(currentCategory)}</>
      )}
      {collapseList.map((tabInfo, i) => (
        <div
          role="tabpanel"
          key={`content-${i}`}
          aria-hidden={
            !tabInfo.category.includes(currentCategory) ? true : false
          }
          id={`${id}-${tabInfo.category}`}
        >
          {content(tabInfo.category)}
        </div>
      ))}
    </div>
  )
}
