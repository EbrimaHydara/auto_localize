import React, { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'

const Img = styled.img`
  &.none {
    max-height: 0;
  }
`

type PropType = {
  className?: string
  imgSrc: string
  spImg: string
  inView: boolean
  width: string
  height: string
  alt: string
}

export const LazyLoadPicture: React.FC<PropType> = props => {
  const { className, imgSrc, inView, width, height, alt, spImg } = props
  const theme = useContext(ThemeContext)
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
    <picture>
      <source
        media={`(max-width: ${theme.max.m})`}
        srcSet={inView ? spImg : ''}
        width={theme.max.num.m}
        data-src={spImg}
      />
      <Img
        className={classProp}
        onLoad={setLoaded}
        src={inView ? imgSrc : ''}
        width={width}
        height={height}
        alt={alt}
        data-src={imgSrc}
      />
    </picture>
  )
}
