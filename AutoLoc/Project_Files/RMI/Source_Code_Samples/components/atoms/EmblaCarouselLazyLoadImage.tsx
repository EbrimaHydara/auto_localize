import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  &.none {
    max-height: 0;
  }
`

type PropType = {
  className?: string
  imgSrc: string
  inView: boolean
  width: string
  height: string
  alt: string
}

export const LazyLoadImage: React.FC<PropType> = props => {
  const { className, imgSrc, inView, width, height, alt } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  let classProp: string = ''

  if (!hasLoaded) {
    classProp = 'none'
  }
  if (className) {
    classProp = className
  }
  if (!hasLoaded && className) {
    classProp = `${className} none`
  }

  return (
    <Img
      className={classProp}
      onLoad={setLoaded}
      src={inView ? imgSrc : ''}
      width={width}
      height={height}
      alt={alt}
      data-src={imgSrc}
    />
  )
}
