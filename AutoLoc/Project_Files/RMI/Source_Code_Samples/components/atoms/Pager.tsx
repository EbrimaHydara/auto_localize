import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { IconChevronRight, IconChevronLeft } from '@components/icons'
import { fontRakutenSans } from '@styles/fonts'

const PagerArrow = styled.span`
  position: relative;
  display: inline-block;
  min-width: 32px;
  padding: 0 8px;
  border-radius: 3px;
  line-height: 32px;
  text-align: center;
  &:hover {
    background: ${props => props.theme.colors.monotone93};
  }
  &:active {
    background: ${props => props.theme.colors.monotone88};
  }
  &[aria-disabled='true'] {
    color: ${props => props.theme.colors.monotone88};
    background: transparent;
  }
`

const PagerNumber = styled.span`
  position: relative;
  display: inline-block;
  min-width: 32px;
  padding: 0 8px;
  border-radius: 3px;
  line-height: 32px;
  text-align: center;
  font-family: ${fontRakutenSans.style.fontFamily};
  font-weight: bold;
  &:hover {
    background: ${props => props.theme.colors.monotone93};
    cursor: pointer;
  }
  &:active,
  &[aria-current='true'] {
    color: ${props => props.theme.colors.white};
    border-radius: 0;
    background: ${props => props.theme.colors.pink100};
    border-radius: 3px;
    cursor: unset;
  }
`

const PagerWrapper = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${props => props.theme.colors.black};
  li {
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
    a {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      &.#{$nameSpace}_Arrow {
        color: ${props => props.theme.colors.monotone30};
      }
    }
  }
`

const PagerSeparate = styled.span`
  color: ${props => props.theme.colors.monotone88};
`

export interface PagerProps {
  range: number[]
  skipped?: boolean
  current?: number
  sideEffect?: (arg: number) => void
  className?: string
  currentManage?: boolean
  currentStateEx?: number
  updateCurrentStateEx?: React.Dispatch<React.SetStateAction<number>>
  ratid?: string
}
export const Pager = (props: PagerProps) => {
  const {
    range,
    skipped,
    current,
    sideEffect,
    className,
    currentManage,
    currentStateEx,
    updateCurrentStateEx,
    ratid,
  } = props
  const rangeSliced = range.slice(1, range.length - 1)
  const zeroPad = useCallback((num: number) => {
    return num.toString().padStart(2, '0')
  }, [])

  const [currentState, updateCurrentState] = useState<number>(
    current ? current : 1,
  )
  const callback = (page: number, sideEffect?: Function) => {
    updateCurrentState(page)
    if (sideEffect) {
      sideEffect(page)
    }
  }
  const callbackEx = (page: number, sideEffect?: Function) => {
    if (updateCurrentStateEx) {
      updateCurrentStateEx(page)
    }
    if (sideEffect) {
      sideEffect(page)
    }
  }
  if (!currentManage) {
    return (
      <PagerWrapper className={className}>
        {skipped ? (
          <>
            <li>
              <PagerArrow
                as={currentState !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[0]) {
                      callback(
                        range[range.indexOf(currentState) - 1],
                        sideEffect,
                      )
                    }
                  })()
                }
                aria-disabled={currentState === range[0] ? true : false}
              >
                <IconChevronLeft />
              </PagerArrow>
            </li>
            <li>
              <PagerNumber
                as={currentState !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[0]) {
                      callback(1, sideEffect)
                    }
                  })()
                }
                aria-current={currentState === range[0] ? true : false}
              >
                {range[0]}
              </PagerNumber>
            </li>
            <li>
              <PagerSeparate>...</PagerSeparate>
            </li>
            <li>
              <PagerNumber
                as={currentState !== range[1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[1]) {
                      callback(range[1], sideEffect)
                    }
                  })()
                }
                aria-current={currentState === range[1] ? true : false}
              >
                {range[1]}
              </PagerNumber>
            </li>
            <li>
              <PagerSeparate>...</PagerSeparate>
            </li>
            <li>
              <PagerNumber
                as={currentState !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[range.length - 1]) {
                      callback(range[range.length - 1], sideEffect)
                    }
                  })()
                }
                aria-current={
                  currentState === range[range.length - 1] ? true : false
                }
              >
                {range[range.length - 1]}
              </PagerNumber>
            </li>
            <li>
              <PagerArrow
                as={currentState !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[range.length - 1]) {
                      callback(
                        range[range.indexOf(currentState) + 1],
                        sideEffect,
                      )
                    }
                  })()
                }
                aria-disabled={
                  currentState === range[range.length - 1] ? true : false
                }
              >
                <IconChevronRight />
              </PagerArrow>
            </li>
          </>
        ) : (
          <>
            <li>
              <PagerArrow
                as={currentState !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[0]) {
                      callback(currentState - 1, sideEffect)
                    }
                  })()
                }
                aria-disabled={currentState === range[0] ? true : false}
              >
                <IconChevronLeft />
              </PagerArrow>
            </li>
            {range.length !== 1 && (
              <li>
                <PagerNumber
                  as={currentState !== range[0] ? 'button' : ''}
                  onClick={() =>
                    (() => {
                      if (currentState !== range[0]) {
                        callback(1, sideEffect)
                      }
                    })()
                  }
                  aria-current={currentState === range[0] ? true : false}
                >
                  {range[0]}
                </PagerNumber>
              </li>
            )}
            {rangeSliced.map((elem, index) => {
              return (
                <li key={elem}>
                  <PagerNumber
                    as={currentState !== range[index + 1] ? 'button' : ''}
                    onClick={() =>
                      (() => {
                        if (currentState !== range[index + 1]) {
                          callback(elem, sideEffect)
                        }
                      })()
                    }
                    aria-current={
                      currentState === range[index + 1] ? true : false
                    }
                  >
                    {elem}
                  </PagerNumber>
                </li>
              )
            })}
            <li>
              <PagerNumber
                as={currentState !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[range.length - 1]) {
                      callback(range[range.length - 1], sideEffect)
                    }
                  })()
                }
                aria-current={
                  currentState === range[range.length - 1] ? true : false
                }
              >
                {range[range.length - 1]}
              </PagerNumber>
            </li>
            <li>
              <PagerArrow
                as={currentState !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentState !== range[range.length - 1]) {
                      callback(currentState + 1, sideEffect)
                    }
                  })()
                }
                aria-disabled={
                  currentState === range[range.length - 1] ? true : false
                }
              >
                <IconChevronRight />
              </PagerArrow>
            </li>
          </>
        )}
      </PagerWrapper>
    )
  } else if (currentStateEx) {
    return (
      <PagerWrapper className={className}>
        {skipped ? (
          <>
            <li>
              <PagerArrow
                as={currentStateEx !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[0]) {
                      callbackEx(
                        range[range.indexOf(currentStateEx) - 1],
                        sideEffect,
                      )
                    }
                  })()
                }
                aria-disabled={currentStateEx === range[0] ? true : false}
              >
                <IconChevronLeft />
              </PagerArrow>
            </li>
            <li>
              <PagerNumber
                as={currentStateEx !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[0]) {
                      callbackEx(1, sideEffect)
                    }
                  })()
                }
                aria-current={currentStateEx === range[0] ? true : false}
              >
                {range[0]}
              </PagerNumber>
            </li>
            <li>
              <PagerSeparate>...</PagerSeparate>
            </li>
            <li>
              <PagerNumber
                as={currentStateEx !== range[1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[1]) {
                      callbackEx(range[1], sideEffect)
                    }
                  })()
                }
                aria-current={currentStateEx === range[1] ? true : false}
              >
                {range[1]}
              </PagerNumber>
            </li>
            <li>
              <PagerSeparate>...</PagerSeparate>
            </li>
            <li>
              <PagerNumber
                as={currentStateEx !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[range.length - 1]) {
                      callbackEx(range[range.length - 1], sideEffect)
                    }
                  })()
                }
                aria-current={
                  currentStateEx === range[range.length - 1] ? true : false
                }
              >
                {range[range.length - 1]}
              </PagerNumber>
            </li>
            <li>
              <PagerArrow
                as={currentStateEx !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[range.length - 1]) {
                      callbackEx(
                        range[range.indexOf(currentStateEx) + 1],
                        sideEffect,
                      )
                    }
                  })()
                }
                aria-disabled={
                  currentStateEx === range[range.length - 1] ? true : false
                }
              >
                <IconChevronRight />
              </PagerArrow>
            </li>
          </>
        ) : (
          <>
            <li>
              <PagerArrow
                as={currentStateEx !== range[0] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[0]) {
                      callbackEx(currentStateEx - 1, sideEffect)
                    }
                  })()
                }
                aria-disabled={currentStateEx === range[0] ? true : false}
                {...(ratid &&
                  currentStateEx !== range[0] && {
                    'data-ratid': `${ratid}_pager_prev`,
                    'data-ratevent': 'click',
                    'data-ratparam': 'all',
                  })}
              >
                <IconChevronLeft />
              </PagerArrow>
            </li>
            {range.length !== 1 && (
              <li>
                <PagerNumber
                  as={currentStateEx !== range[0] ? 'button' : ''}
                  onClick={() =>
                    (() => {
                      if (currentStateEx !== range[0]) {
                        callbackEx(range[0], sideEffect)
                      }
                    })()
                  }
                  aria-current={currentStateEx === range[0] ? true : false}
                  {...(ratid &&
                    currentStateEx !== range[0] &&
                    range[0] && {
                      'data-ratid': `${ratid}_pager_${zeroPad(range[0])}`,
                      'data-ratevent': 'click',
                      'data-ratparam': 'all',
                    })}
                >
                  {range[0]}
                </PagerNumber>
              </li>
            )}
            {rangeSliced.map((elem, index) => {
              return (
                <li key={elem}>
                  <PagerNumber
                    as={currentStateEx !== range[index + 1] ? 'button' : ''}
                    onClick={() =>
                      (() => {
                        if (currentStateEx !== range[index + 1]) {
                          callbackEx(elem, sideEffect)
                        }
                      })()
                    }
                    aria-current={
                      currentStateEx === range[index + 1] ? true : false
                    }
                    {...(ratid &&
                      currentStateEx !== range[index + 1] &&
                      range[index + 1] && {
                        'data-ratid': `${ratid}_pager_${zeroPad(elem)}`,
                        'data-ratevent': 'click',
                        'data-ratparam': 'all',
                      })}
                  >
                    {elem}
                  </PagerNumber>
                </li>
              )
            })}
            <li>
              <PagerNumber
                as={currentStateEx !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[range.length - 1]) {
                      callbackEx(range[range.length - 1], sideEffect)
                    }
                  })()
                }
                aria-current={
                  currentStateEx === range[range.length - 1] ? true : false
                }
                {...(ratid &&
                  currentStateEx !== range[range.length - 1] &&
                  range[range.length - 1] && {
                    'data-ratid': `${ratid}_pager_${zeroPad(
                      range[range.length - 1],
                    )}`,
                    'data-ratevent': 'click',
                    'data-ratparam': 'all',
                  })}
              >
                {range[range.length - 1]}
              </PagerNumber>
            </li>
            <li>
              <PagerArrow
                as={currentStateEx !== range[range.length - 1] ? 'button' : ''}
                onClick={() =>
                  (() => {
                    if (currentStateEx !== range[range.length - 1]) {
                      callbackEx(currentStateEx + 1, sideEffect)
                    }
                  })()
                }
                aria-disabled={
                  currentStateEx === range[range.length - 1] ? true : false
                }
                {...(ratid &&
                  currentStateEx !== range[range.length - 1] && {
                    'data-ratid': `${ratid}_pager_next`,
                    'data-ratevent': 'click',
                    'data-ratparam': 'all',
                  })}
              >
                <IconChevronRight />
              </PagerArrow>
            </li>
          </>
        )}
      </PagerWrapper>
    )
  } else {
    return null
  }
}
