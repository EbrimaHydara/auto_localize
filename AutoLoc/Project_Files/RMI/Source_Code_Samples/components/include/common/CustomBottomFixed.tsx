import React, { useEffect, useRef, useState } from 'react'
import { useCtaBottom } from '~/hooks/useCtaBottom'
import { SystemContainer } from '@components/layout/System'
import { CtaButtomFixedWrap } from '@components/atoms/CtaButtomFixed'
import styled from 'styled-components'

const CustomCtaButtomFixedWrap = styled(CtaButtomFixedWrap)<{
  wrapperHeight: number
}>`
  &[aria-expanded='false'] {
    visibility: hidden; // 初回計算時にちらつくので要素を見えなくしておく
    bottom: ${props =>
      props.wrapperHeight ? `-${props.wrapperHeight}px` : '-200vh'};
  }
  &[aria-expanded='true'] {
    bottom: -1px; // 計算すると下に1px余白でてしまう場合があるようなので
  }
`

type CustomBottomFixedProps = {
  scrollTrigger: React.RefObject<HTMLDivElement>
  children: JSX.Element
  isExternalContent?: boolean
}

export const CustomBottomFixed = ({
  scrollTrigger,
  children,
  isExternalContent,
}: CustomBottomFixedProps) => {
  const { isExpanded } = useCtaBottom(scrollTrigger)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const wrapperElem = useRef<HTMLDivElement>(null)

  const adjustPadding = (newWrapperHeight: number, target: HTMLElement) => {
    if (newWrapperHeight !== 0) {
      target.style.paddingBottom = `${newWrapperHeight}px`
      setWrapperHeight(newWrapperHeight)
    }
  }

  useEffect(() => {
    const footerElem = document.getElementById('g-footer')
    if (footerElem && wrapperElem.current) {
      let wrapperHeight = 120
      const currentElement = wrapperElem.current

      // 外部コンテンツ用のMutationObserverの設定
      if (isExternalContent) {
        // MutationObserverの設定
        const mutationConfig = { childList: true, subtree: true }
        const mutationCallback = () => {
          const newHeight = currentElement.clientHeight
          adjustPadding(newHeight, footerElem)
        }
        const mutationObserver = new MutationObserver(mutationCallback)
        mutationObserver.observe(currentElement, mutationConfig)

        // ResizeObserverの設定
        const resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
            const newHeight = entry.target.clientHeight
            adjustPadding(newHeight, footerElem)
          }
        })
        resizeObserver.observe(currentElement)

        // コンポーネントのアンマウント時にオブザーバーを切断
        return () => {
          mutationObserver.disconnect()
          resizeObserver.unobserve(currentElement)
        }
      } else {
        // 外部コンテンツでない場合の初期設定
        setTimeout(() => {
          const e = wrapperElem.current
          wrapperHeight = e?.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        }, 500)

        // ウィンドウのリサイズイベントに反応して高さを調整
        const resizeListener = () => {
          const e = wrapperElem.current
          wrapperHeight = e?.clientHeight ? e.clientHeight : wrapperHeight
          adjustPadding(wrapperHeight, footerElem)
        }
        window.addEventListener('resize', resizeListener)

        // コンポーネントのアンマウント時にイベントリスナーを削除
        return () => {
          window.removeEventListener('resize', resizeListener)
        }
      }
    }
  }, [isExternalContent])

  return isExternalContent ? (
    <CustomCtaButtomFixedWrap
      aria-expanded={isExpanded}
      ref={wrapperElem}
      wrapperHeight={wrapperHeight}
    >
      <SystemContainer>{children}</SystemContainer>
    </CustomCtaButtomFixedWrap>
  ) : (
    <CtaButtomFixedWrap aria-expanded={isExpanded} ref={wrapperElem}>
      <SystemContainer>{children}</SystemContainer>
    </CtaButtomFixedWrap>
  )
}
