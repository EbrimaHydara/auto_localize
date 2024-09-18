import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconArrowLeft, IconArrowRight } from '@components/icons'

const ScrollhintWrap = styled.div`
  position: relative;
`

const ScrollhintContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  pointer-events: none;
`

const ScrollhintIcon = styled.div<{ intersected?: boolean }>`
  position: absolute;
  top: calc(30% - 40px);
  left: calc(50% - 40px);
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  transition: opacity 0.3s;
  opacity: ${({ intersected }) => (intersected ? '.86' : '0')};
  background-color: ${props => props.theme.colors.monotone56};
  text-align: center;
  padding: 40px 10px 10px 10px;
`

const ScrollhintIconArrowL = styled(IconArrowLeft)`
  content: '';
  display: block;
  position: absolute;
  top: 14px;
  left: 15px;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`
const ScrollhintIconArrowR = styled(IconArrowRight)`
  content: '';
  display: block;
  position: absolute;
  top: 14px;
  right: 15px;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`

const ScrollhintTxt = styled.div`
  font-size: ${props => props.theme.fonts.ss};
  line-height: 1.1;
  color: ${props => props.theme.colors.white};
`

const ScrollhintOverflow = styled.div`
  overflow: auto;
`

const useIntersection = (ref: React.MutableRefObject<HTMLDivElement>) => {
  const [intersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )
    const refObject = ref.current
    observer.observe(refObject)
    return () => {
      observer.unobserve(refObject)
    }
  })
  return intersecting
}

export interface ScrollhintProps {
  text?: string
  children?: React.ReactNode
  className?: string
}

export const Scrollhint = (props: ScrollhintProps) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>

  const intersection = useIntersection(ref)
  const [intersected, setIntersected] = useState(false)
  const [iconShowState, updateIconShowState] = useState(true)
  useEffect(() => {
    setIntersected(intersection)

    const getContentWidth = () => {
      return ref.current.offsetWidth
    }
    const getTableWidth = () => {
      const wrapperElement = wrapRef.current
      if (wrapperElement) {
        const tableElement = wrapperElement.getElementsByTagName('table')
        if (tableElement && tableElement.length) {
          return tableElement[0].offsetWidth
        } else {
          return 0
        }
      } else {
        return 0
      }
    }
    const handleResize = () => {
      if (getTableWidth() && getTableWidth() <= getContentWidth()) {
        updateIconShowState(false)
      } else {
        updateIconShowState(true)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [intersection])

  const [scrollState, updateScrollState] = useState<number>(0)
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft !== scrollState) {
      setIntersected(false)
      updateScrollState(e.currentTarget.scrollLeft)
    }
  }

  return (
    <ScrollhintWrap ref={wrapRef} className={props.className}>
      <ScrollhintContents ref={ref}>
        {iconShowState && (
          <ScrollhintIcon intersected={intersected}>
            <ScrollhintIconArrowL />
            <ScrollhintIconArrowR />
            <ScrollhintTxt>{props.text}</ScrollhintTxt>
          </ScrollhintIcon>
        )}
      </ScrollhintContents>
      <ScrollhintOverflow onScroll={onScroll}>
        {props.children}
      </ScrollhintOverflow>
    </ScrollhintWrap>
  )
}
