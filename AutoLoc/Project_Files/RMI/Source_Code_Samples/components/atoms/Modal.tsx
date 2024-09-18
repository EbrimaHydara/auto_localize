import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background: rgb(77, 77, 77, 0.5);
  transition: opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  &.is-show {
    opacity: 1;
    visibility: visible;
  }
`

const ModalWrapper = styled.div`
  display: table;
  position: relative;
  width: 100%;
  height: 100%;
  table-layout: fixed;
`

const ModalWrapperInner = styled.div`
  display: table-cell;
  width: 100%;
  height: 100%;
  position: relative;
  vertical-align: middle;
  text-align: center;
  padding: 80px 25px;
  padding-top: 60px;
  padding-bottom: 60px;
`

const ModalContents = styled.div<{ isVideo?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: auto;
  text-align: left;
  color: #000;
  ${props => (props.isVideo ? 'max-width: 900px;' : 'max-width: 720px;')}
  ${props =>
    props.isVideo &&
    `
    ${mixins.mq.MinCustom('901px')} {
      height: 100%;
    }
    > div {
      height: 100%;
    }
  `}
  border-radius: 0;
  background: #fff;
  -webkit-box-shadow: 0 4px 15px rgb(0 0 0 / 20%);
  box-shadow: 0 4px 15px rgb(0 0 0 / 20%);
  cursor: auto;
  border-radius: 4px;
`

const ModalContentsInner = styled.div<{ isVideo?: boolean }>`
  ${props => props.isVideo && 'height: 100%;}'}
  ${props => !props.isVideo && `padding: 24px 16px;`}
  @media screen and (min-width: ${props => props.theme.min.l}) {
    ${props => !props.isVideo && `padding: 24px;`}
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`

const ModalClose = styled.button`
  width: 32px;
  height: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  color: #4d4d4d;
  border: 1px solid #8f8f8f;
  background-color: #fff;
  font: 16.5px var(--rex-icon);
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
  opacity: 1;
  border-radius: 100%;
  transition: 0.2s ease-in-out;
  &::before {
    top: 4px;
    left: 4px;
    width: 16.5px;
    height: 16.5px;
    content: '${props => props.theme.icon.rex.x}';
    background-color: transparent;
    -webkit-transform: none;
    transform: none;
    font-size: 22px;
    color: #4d4d4d;
  }
  > span {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
  @media screen and (min-width: 769px) {
    position: absolute;
    right: -16px;
    top: -16px;
  }
`
export const Modal = (props: {
  flag: boolean
  switchFlag: any
  id?: string
  wrapperStyle?: React.CSSProperties
  wrapperId?: string
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  isVideo?: boolean
}) => {
  const onClickContents = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
  }
  return (
    <ModalArea
      className={props.flag ? 'is-show' : ''}
      onClick={() => props.switchFlag()}
      id={props.id}
    >
      <ModalWrapper style={props.wrapperStyle} id={props.wrapperId}>
        <ModalWrapperInner>
          <ModalContents onClick={onClickContents} isVideo={props.isVideo}>
            <div>
              <ModalContentsInner isVideo={props.isVideo}>
                {props.children}
              </ModalContentsInner>
            </div>
            <ModalClose onClick={() => props.switchFlag()} type="button">
              <span>Close</span>
            </ModalClose>
          </ModalContents>
        </ModalWrapperInner>
      </ModalWrapper>
    </ModalArea>
  )
}
