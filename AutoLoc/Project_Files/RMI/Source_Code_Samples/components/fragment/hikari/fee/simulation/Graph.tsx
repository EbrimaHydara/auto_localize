import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'

interface GraphProps {
  mt: number
  imgNum: string
}

export const Graph = (props: GraphProps) => {
  const theme = useContext(ThemeContext)
  const { mt, imgNum } = props
  const imgPath = '/img/hikari/fee/simulation/'

  return (
    <div className={Utils[`Mt-${mt}`]}>
      <picture>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${imgPath}img-simulation-${imgNum}_sp.png`}
        />
        <img src={`${imgPath}img-simulation-${imgNum}_pc.png`} alt="" />
      </picture>
    </div>
  )
}
