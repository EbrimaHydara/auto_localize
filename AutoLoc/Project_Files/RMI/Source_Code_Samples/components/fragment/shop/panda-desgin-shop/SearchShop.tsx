import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'

import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { TxtEmp01 } from '@components/atoms/Txt'

const SearchShopBox = styled.div<{ padding?: string }>`
  padding: ${props => (props.padding ? props.padding : '16')}px 0;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MaxM} {
    padding: 16px;
  }
`

interface SearchShopProps {
  padding?: string
  lid?: string
}

export const SearchShop = ({ padding, lid }: SearchShopProps) => {
  const theme = useContext(ThemeContext)
  return (
    <SearchShopBox padding={padding}>
      <div className={`${Utils['Align-center']}`}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/shop/panda-desgin-shop/search-shop-title-sp.png`}
            width="343"
            height="109"
          />
          <img
            src={`${assets}img/shop/panda-desgin-shop/search-shop-title-pc.png`}
            width="552"
            height="84"
            alt={`楽天モバイルショップなら 相談しながらかんたんお申し込み!`}
          />
        </picture>
      </div>
      <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
        <ButtonPrimaryLarge as="a" href={`/shop/?l-id=${lid}`}>
          お近くのショップを探す
        </ButtonPrimaryLarge>
      </div>
      <TxtEmp01 as="p" className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
        ご来店の際は事前の来店予約がおすすめです
      </TxtEmp01>
    </SearchShopBox>
  )
}
