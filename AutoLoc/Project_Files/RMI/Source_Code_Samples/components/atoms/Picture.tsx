import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

type Props = {
  className?: string
  src: string
  width: string
  height: string
  spSrc: string
  spWidth: string
  spHeight: string
  tabSrc?: string
  tabWidth?: string
  tabHeight?: string
  alt: string | ''
  lazy?: boolean
}

export const Picture: React.FC<Props> = ({
  src,
  width,
  height,
  className,
  spSrc,
  spWidth,
  spHeight,
  tabSrc,
  tabWidth,
  tabHeight,
  alt,
  lazy = true,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <picture className={className}>
      {tabSrc ? (
        <>
          <source
            media={`(max-width: ${theme.max.s})`}
            srcSet={spSrc}
            width={spWidth}
            height={spHeight}
          />
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={tabSrc}
            width={tabWidth}
            height={tabHeight}
          />
        </>
      ) : (
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={spSrc}
          width={spWidth}
          height={spHeight}
        />
      )}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
      />
    </picture>
  )
}
