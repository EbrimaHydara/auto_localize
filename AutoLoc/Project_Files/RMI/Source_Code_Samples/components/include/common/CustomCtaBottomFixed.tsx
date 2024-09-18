import React, { useEffect, useRef } from 'react'
import { useCtaBottom } from '~/hooks/useCtaBottom'
import { SystemContainer } from '@components/layout/System'
import {
  CtaButtomFixedWrap,
  CtaButtomFixedInner,
} from '@components/atoms/CtaButtomFixed'

type CtaBottomFixedProps = {
  scrollTrigger: React.RefObject<HTMLDivElement>
  children: JSX.Element
  item?: Number
}

export const CustomCtaBottomFixed = ({
  scrollTrigger,
  children,
  item,
}: CtaBottomFixedProps) => {
  const { isExpanded } = useCtaBottom(scrollTrigger)

  const wrapperElem = useRef<HTMLDivElement>(null)

  const adjustPadding = (wrapperHeight: number, target: HTMLElement) => {
    target.style.paddingBottom = `${wrapperHeight}px`
  }
  useEffect(() => {
    const footerElem = document.getElementById('g-footer')
    if (footerElem && wrapperElem.current) {
      const e = wrapperElem.current
      let wrapperHeight = 120
      setTimeout(() => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem)
      }, 500)
      window.addEventListener('resize', () => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem)
      })
    }
  }, [])

  return (
    <CtaButtomFixedWrap aria-expanded={isExpanded} ref={wrapperElem}>
      <SystemContainer>
        <CtaButtomFixedInner className={item === 2 ? 'multiple' : undefined}>
          {children}
        </CtaButtomFixedInner>
      </SystemContainer>
    </CtaButtomFixedWrap>
  )
}
