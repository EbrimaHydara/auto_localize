import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const SliderWrapper = styled.div`
  .slick-list {
    height: 30vw;
    max-height: 300px;
    @media screen and (max-width: 769px) {
      height: 52vw;
      max-height: 384px;
    }
  }
  .slick-slide img {
    display: block;
    width: 1032px;
    opacity: 0.5;
    @media screen and (min-width: 769px) and (max-width: 1032px) {
      width: 100vw;
    }
    @media screen and (max-width: 769px) {
      width: 100vw;
    }
  }
  .slick-current img {
    opacity: 1;
    &:hover {
      opacity: 0.7;
    }
  }
  .slick-prev,
  .slick-next {
    width: 42px;
    height: 42px;
    cursor: pointer;
    border: none;
    outline: none;
    position: absolute;
    font-size: 0;
    &:before,
    &:after {
      content: '';
      position: absolute;
    }
    &:before {
      top: 6px;
      left: 6px;
      font-size: 21px;
      z-index: 2;
    }
    &:after {
      width: 42px;
      height: 42px;
      top: 0;
      left: -5px;
      z-index: 1;
      border-radius: 100%;
      background-color: ${props => props.theme.colors.white};
    }
    &:hover {
      &:after {
        background-color: ${props => props.theme.colors.monotone93};
      }
    }
    &:active {
      &:after {
        background-color: ${props => props.theme.colors.monotone88};
      }
    }
  }
  .slick-prev {
    top: 45%;
    transform: translateY(-50%);
    left: calc((100% - 1032px) / 2 + 24px);
    z-index: 1;
    @media screen and (min-width: 769px) and (max-width: 1032px) {
      left: 24px;
    }
    @media screen and (max-width: 480px) {
      display: none !important;
    }
    &:before {
      content: url('/img/carousel-arrow-left.svg');
    }
  }
  .slick-next {
    top: 45%;
    transform: translateY(-50%);
    right: calc((100% - 1032px) / 2 + 24px);
    @media screen and (min-width: 769px) and (max-width: 1032px) {
      right: 24px;
    }
    @media screen and (max-width: 480px) {
      display: none !important;
    }
    &:before {
      content: url('/img/carousel-arrow-right.svg');
    }
  }
  .slick-dots {
    position: static;
    li {
      button {
        height: 8px;
        width: 8px;
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          content: '';
          text-align: center;
          opacity: 1;
          border: 1px solid ${props => props.theme.colors.monotone56};
          border-radius: 50%;
        }
        &:hover:before {
          background-color: ${props => props.theme.colors.monotone75};
          border-color: ${props => props.theme.colors.monotone75};
          opacity: 1;
        }
        &:active:before {
          background-color: ${props => props.theme.colors.primary};
          border-color: ${props => props.theme.colors.primary};
          opacity: 1;
        }
      }
    }
    li.slick-active button:before {
      background-color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      opacity: 1;
    }
  }
`

export interface CarouselImage {
  pc: string
  sp: string
  href: string
  newTab: boolean
  alt: string
}

export interface CarouselProps {
  images: CarouselImage[]
  setting: Object
}

export const Carousel = (props: CarouselProps) => {
  const { images, setting } = props
  const [mq, setMq] = useState({
    isPc: false,
    isSp: false,
  })
  // let timeoutID: any = 0
  // let delay: any = 500
  useEffect(() => {
    const mediaQuery: any = window.matchMedia('screen and (min-width: 769px)')
    const onResize = (mediaQuery: any) => {
      if (mediaQuery.matches) {
        setMq({
          isPc: true,
          isSp: false,
        })
      } else {
        setMq({
          isPc: false,
          isSp: true,
        })
      }
    }
    onResize(mediaQuery)
    mediaQuery.addListener(onResize)
  }, [])
  return (
    <SliderWrapper>
      <Slider {...setting}>
        {images.map((value, index) => (
          <div key={index}>
            {value.href !== '' && (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                href={value.href}
                target={value.newTab ? '_blank' : undefined}
                rel={value.newTab ? 'noopener noreferrer' : undefined}
              >
                {mq.isPc && <img src={value.pc} alt={value.alt} />}
                {mq.isSp && <img src={value.sp} alt={value.alt} />}
              </a>
            )}
            {value.href === '' && mq.isPc && (
              <img src={value.pc} alt={value.alt} />
            )}
            {value.href === '' && mq.isSp && (
              <img src={value.sp} alt={value.alt} />
            )}
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}
