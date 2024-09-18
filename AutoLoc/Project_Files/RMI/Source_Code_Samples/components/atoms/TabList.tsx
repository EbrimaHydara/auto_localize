import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Items = styled.ul`
  display: flex;
  max-width: 1064px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`
const Item = styled.li`
  display: inline-block;
  min-height: 44px;
  font-size: ${props => props.theme.fonts.base};
  line-height: 1.5;
  padding: 12px 16px;
  color: ${props => props.theme.colors.monotone30};
  @media screen and (min-width: ${props => props.theme.min.l}) {
    font-size: ${props => props.theme.fonts.base};
    min-height: 49px;
  }
  &[aria-selected='true'] {
    font-weight: 700;
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  &[aria-selected='false'] {
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.white};
    }
    &:active {
      background-color: none;
      border-color: transparent;
      color: ${props => props.theme.colors.monotone20};
    }
  }
`
const Panel = styled.div`
  &[aria-hidden='true'] {
    display: none;
  }
`

export interface TabProps {
  heading1: string
  heading2?: string
  heading3?: string
  heading4?: string
  heading5?: string
  heading6?: string
  heading7?: string
  heading8?: string
  heading9?: string
  heading10?: string
  content1: JSX.Element
  content2?: JSX.Element
  content3?: JSX.Element
  content4?: JSX.Element
  content5?: JSX.Element
  content6?: JSX.Element
  content7?: JSX.Element
  content8?: JSX.Element
  content9?: JSX.Element
  content10?: JSX.Element
  className?: string
  id1?: string
  id2?: string
  id3?: string
  id4?: string
  id5?: string
  id6?: string
  id7?: string
  id8?: string
  id9?: string
  id10?: string
  current?: Number
}
export const TabList = (props: TabProps) => {
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    heading7,
    heading8,
    heading9,
    heading10,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
    content8,
    content9,
    content10,
    className,
    id1,
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
    id10,
    current,
  } = props
  const [selectedState, updateSelectedState] = useState([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  useEffect(() => {
    const hash = window.location.hash
    const possibleHashArray = [
      id1,
      id2,
      id3,
      id4,
      id5,
      id6,
      id7,
      id8,
      id9,
      id10,
    ]
    if (possibleHashArray.indexOf(hash.substring(1)) > -1) {
      const index = possibleHashArray.indexOf(hash.substring(1))
      let tempArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      if (index === 0) {
        tempArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      } else if (index === 1) {
        tempArray = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
      } else if (index === 2) {
        tempArray = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
      } else if (index === 3) {
        tempArray = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
      } else if (index === 4) {
        tempArray = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
      } else if (index === 5) {
        tempArray = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      } else if (index === 6) {
        tempArray = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
      } else if (index === 7) {
        tempArray = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
      } else if (index === 8) {
        tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
      } else {
        tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      }
      updateSelectedState(tempArray)
    } else if (current) {
      let currentArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      if (current === 1) {
        currentArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      } else if (current === 2) {
        currentArray = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
      } else if (current === 3) {
        currentArray = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
      } else if (current === 4) {
        currentArray = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
      } else if (current === 5) {
        currentArray = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
      } else if (current === 6) {
        currentArray = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      } else if (current === 7) {
        currentArray = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
      } else if (current === 8) {
        currentArray = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
      } else if (current === 9) {
        currentArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
      } else if (current === 10) {
        currentArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      }
      updateSelectedState(currentArray)
    }
  }, [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, current])

  return (
    <div className={className}>
      <Items role="tablist">
        <Item
          role="tab"
          aria-controls="tab1"
          aria-selected={selectedState[0] ? true : false}
          onClick={() => updateSelectedState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
          id={id1}
        >
          {heading1}
        </Item>
        {heading2 && (
          <Item
            role="tab"
            aria-controls="tab2"
            aria-selected={selectedState[1] ? true : false}
            onClick={() => updateSelectedState([0, 1, 0, 0, 0, 0, 0, 0, 0, 0])}
            id={id2}
          >
            {heading2}
          </Item>
        )}
        {heading3 && (
          <Item
            role="tab"
            aria-controls="tab3"
            aria-selected={selectedState[2] ? true : false}
            onClick={() => updateSelectedState([0, 0, 1, 0, 0, 0, 0, 0, 0, 0])}
            id={id3}
          >
            {heading3}
          </Item>
        )}
        {heading4 && (
          <Item
            role="tab"
            aria-controls="tab4"
            aria-selected={selectedState[3] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 1, 0, 0, 0, 0, 0, 0])}
            id={id4}
          >
            {heading4}
          </Item>
        )}
        {heading5 && (
          <Item
            role="tab"
            aria-controls="tab5"
            aria-selected={selectedState[4] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 1, 0, 0, 0, 0, 0])}
            id={id5}
          >
            {heading5}
          </Item>
        )}
        {heading6 && (
          <Item
            role="tab"
            aria-controls="tab6"
            aria-selected={selectedState[5] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 0, 1, 0, 0, 0, 0])}
            id={id6}
          >
            {heading6}
          </Item>
        )}
        {heading7 && (
          <Item
            role="tab"
            aria-controls="tab7"
            aria-selected={selectedState[6] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 0, 0, 1, 0, 0, 0])}
            id={id7}
          >
            {heading7}
          </Item>
        )}
        {heading8 && (
          <Item
            role="tab"
            aria-controls="tab8"
            aria-selected={selectedState[7] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 0, 0, 0, 1, 0, 0])}
            id={id8}
          >
            {heading8}
          </Item>
        )}
        {heading9 && (
          <Item
            role="tab"
            aria-controls="tab9"
            aria-selected={selectedState[8] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 0, 0, 0, 0, 1, 0])}
            id={id9}
          >
            {heading9}
          </Item>
        )}
        {heading10 && (
          <Item
            role="tab"
            aria-controls="tab10"
            aria-selected={selectedState[9] ? true : false}
            onClick={() => updateSelectedState([0, 0, 0, 0, 0, 0, 0, 0, 0, 1])}
            id={id10}
          >
            {heading10}
          </Item>
        )}
      </Items>
      <Panel
        role="tabpanel"
        id="tab1"
        aria-hidden={!selectedState[0] ? true : false}
      >
        {content1}
      </Panel>
      {content2 && (
        <Panel
          role="tabpanel"
          id="tab2"
          aria-hidden={!selectedState[1] ? true : false}
        >
          {content2}
        </Panel>
      )}
      {content3 && (
        <Panel
          role="tabpanel"
          id="tab3"
          aria-hidden={!selectedState[2] ? true : false}
        >
          {content3}
        </Panel>
      )}
      {content4 && (
        <Panel
          role="tabpanel"
          id="tab4"
          aria-hidden={!selectedState[3] ? true : false}
        >
          {content4}
        </Panel>
      )}
      {content5 && (
        <Panel
          role="tabpanel"
          id="tab5"
          aria-hidden={!selectedState[4] ? true : false}
        >
          {content5}
        </Panel>
      )}
      {content6 && (
        <Panel
          role="tabpanel"
          id="tab6"
          aria-hidden={!selectedState[5] ? true : false}
        >
          {content6}
        </Panel>
      )}
      {content7 && (
        <Panel
          role="tabpanel"
          id="tab7"
          aria-hidden={!selectedState[6] ? true : false}
        >
          {content7}
        </Panel>
      )}
      {content8 && (
        <Panel
          role="tabpanel"
          id="tab8"
          aria-hidden={!selectedState[7] ? true : false}
        >
          {content8}
        </Panel>
      )}
      {content9 && (
        <Panel
          role="tabpanel"
          id="tab9"
          aria-hidden={!selectedState[8] ? true : false}
        >
          {content9}
        </Panel>
      )}
      {content10 && (
        <Panel
          role="tabpanel"
          id="tab10"
          aria-hidden={!selectedState[9] ? true : false}
        >
          {content10}
        </Panel>
      )}
    </div>
  )
}
