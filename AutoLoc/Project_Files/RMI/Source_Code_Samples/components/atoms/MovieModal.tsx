import React, { useEffect, useRef, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const MovieModalWrap = styled.div`
  display: grid;
  place-items: center;
  padding: 48px;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 100svw;
  max-height: 100svh;
  overflow: auto;
  background: rgb(77, 77, 77, 0.5);
  transition: opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  ${mixins.mq.MaxM} {
    padding: 48px 16px;
  }
  &.is-show {
    opacity: 1;
    visibility: visible;
  }
`
const MovieModalContents = styled.div<{ maxWidth?: string }>`
  position: relative;
  width: 100%;
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '720px')};
  box-shadow: 0 4px 15px rgb(0 0 0 / 20%);
`
const MovieModalInner = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 9;
  div:has(video) {
    width: 100% !important;
    height: auto;
    overflow: auto;
  }
  iframe,
  video {
    position: static !important;
    border: none;
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`
const MovieModalClose = styled.button`
  width: 32px;
  aspect-ratio: 1;
  display: inline-block;
  border: 1px solid #8f8f8f;
  background-color: #fff;
  font: 16.5px var(--rex-icon);
  position: absolute;
  top: -32px;
  right: -32px;
  cursor: pointer;
  border-radius: 100%;
  ${mixins.mq.MaxM} {
    top: -40px;
    right: 0;
  }
  &::before {
    aspect-ratio: 1;
    content: '${props => props.theme.icon.rex.x}';
    background-color: transparent;
    font-size: 22px;
    color: #4d4d4d;
  }
  > span {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }
`

type Props = {
  flag: boolean
  switchFlag: Dispatch<SetStateAction<boolean>>
  id?: string
  children: React.ReactNode
  maxWidth?: string
}

export const MovieModal: React.FC<Props> = ({
  id,
  flag,
  children,
  switchFlag,
  maxWidth,
}) => {
  // 要素内の video と iframe を取得用の要素
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // モーダルが閉じる時にメディアを停止
    if (!flag) {
      const video = modalRef.current?.getElementsByTagName('video')
      const iframe = modalRef.current?.getElementsByTagName('iframe')

      // video 要素の再生を停止
      if (video) {
        Array.from(video).forEach(video => {
          video.pause()
          video.currentTime = 0 // 再生位置をリセット
        })
      }

      // iframe 要素の再生を停止
      if (iframe) {
        Array.from(iframe).forEach(iframe => {
          const src = iframe.src
          // srcが空でない場合リセット
          if (src) {
            iframe.src = src // src をリセット
          }
        })
      }
    }
  }, [flag])

  return (
    <MovieModalWrap
      className={flag ? 'is-show' : ''}
      onClick={() => switchFlag(false)}
      id={id}
      ref={modalRef}
    >
      <MovieModalContents
        maxWidth={maxWidth}
        onClick={e => e.stopPropagation()}
      >
        <MovieModalInner>{children}</MovieModalInner>
        <MovieModalClose onClick={() => switchFlag(false)} type="button">
          <span>Close</span>
        </MovieModalClose>
      </MovieModalContents>
    </MovieModalWrap>
  )
}
