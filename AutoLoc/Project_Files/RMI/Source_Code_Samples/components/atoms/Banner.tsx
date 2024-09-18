import styled from 'styled-components'
export const BannerHover = styled.a<{ bgColor?: string; opacity?: string }>`
  display: inline-block;
  ${props =>
    props.bgColor &&
    `
    @media (hover: hover) {
      background-color: ${props.bgColor};
    }
  `}
  img,
  picture {
    @media (hover: hover) {
      &:hover {
        ${props =>
          props.opacity
            ? `
          opacity: ${props.opacity};
        `
            : `
          opacity: 0.7;
        `}
      }
    }
  }
`
