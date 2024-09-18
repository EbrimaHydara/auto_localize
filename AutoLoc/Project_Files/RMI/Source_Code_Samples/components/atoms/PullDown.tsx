import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Data = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`

const DataSort = styled.div`
  position: relative;
`

const DataSortBtn = styled.button`
  span:last-child {
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
      text-decoration-thickness: 2px;
    }
    &:focus {
      color: ${props => props.theme.colors.linkFocus};
      text-decoration-thickness: 2px;
    }
    &:active {
      color: ${props => props.theme.colors.linkActive};
      text-decoration: none;
    }
  }
  &[aria-expanded='true'] {
    + ul {
      display: block;
    }
  }
`

const DataIcon = styled.span`
  margin-right: 8px;
  color: ${props => props.theme.colors.primary};
`

const DataSortList = styled.ul`
  position: absolute;
  right: 0;
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

interface ArrayItem {
  id: string
  value: string
}

interface SortProps {
  type: string
  array: ArrayItem[]
  activeValue: string
  setActiveValue: React.Dispatch<React.SetStateAction<string>>
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const PullDown = ({
  type,
  array,
  activeValue,
  setActiveValue,
  onClick,
}: SortProps) => {
  // プルダウンメニュー表示の有無を扱う
  const [isShowOption, setIsShowOption] = useState<boolean>(false)
  // keydown時に選択されている（activeな）要素のindex番号を扱う
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const inputRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setListWidth()
  }, [])

  useEffect(() => {
    if (inputRef.current && isShowOption) {
      inputRef.current.focus()
    }
  }, [isShowOption])

  const toggleShowOption = () => {
    setIsShowOption(prev => !prev)
  }

  const setListWidth = () => {
    if (inputRef.current) {
      const longestItem = Number(
        array.reduce((a, b) => (a.value.length > b.value.length ? a : b)),
      )
      inputRef.current.style.width = longestItem * 16 + 32 + 2 + 'px'
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        if (activeIndex === array.length - 1) {
          return
        }
        setActiveIndex(prev => prev + 1)
        break
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        if (activeIndex === 0) {
          return
        }
        setActiveIndex(prev => prev - 1)
        break
      case 'Enter':
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        setActiveValue(array[activeIndex].value)
        if (inputRef.current) {
          const activeItem = inputRef.current.querySelector<HTMLElement>(
            '[aria-selected="true"]',
          )
          activeItem && activeItem.click()
        }
        break
    }
  }

  return (
    <Data>
      <DataSort>
        <DataSortBtn
          id={type}
          aria-haspopup="listbox"
          aria-labelledby={type}
          aria-expanded={isShowOption}
          onClick={toggleShowOption}
        >
          <DataIcon />
          <span>
            {/* 並び替えの2初期表示移行の表示名は未定なので暫定的に以下のように実装 */}
            {type === 'product-filter'
              ? activeValue === 'all'
                ? 'ブランドで絞り込む'
                : activeValue
              : '並び替え'}
          </span>
        </DataSortBtn>
        <DataSortList
          id={`${type}-list`}
          role="listbox"
          tabIndex={-1}
          ref={inputRef}
          aria-activedescendant="all"
          onClick={toggleShowOption}
          onKeyDown={handleKeyDown}
        >
          {array.map(item => {
            return (
              <li
                id={item.id}
                role="option"
                aria-selected={
                  item.id === array[activeIndex].id ? 'true' : 'false'
                }
                key={item.id}
                onClick={onClick}
              >
                {item.value}
              </li>
            )
          })}
        </DataSortList>
      </DataSort>
    </Data>
  )
}
