import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { CardNormal } from '@components/atoms/Card'

const ProductsList = styled.div`
  margin-top: 24px;
`

const ProductsListGroup = styled.div`
  margin-top: 32px;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
  }
  &:nth-of-type(1) {
    margin-top: 0;
  }
`

const ProductItemList = styled.ul<{ cols?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  li {
    display: flex;
    flex: ${props =>
      props.cols
        ? `0 0 calc(calc(100% / ${props.cols}) - calc(24px / ${props.cols}))`
        : '1'};
    ${mixins.mq.MaxM} {
      flex: 0 0 100%;
    }
  }
`

const ProductItemListCol3 = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  background-color: ${props => props.theme.colors.monotone93};
  ${mixins.mq.MaxM} {
    gap: 8px;
  }
  li {
    display: flex;
    flex-basis: calc(calc(100% / 3) - calc(32px / 3));
    ${mixins.mq.MaxM} {
      gap: 8px;
      flex-basis: calc(calc(100% / 3) - calc(16px / 3));
    }
  }
`

const ProductCard = styled(CardNormal)<{
  position?: string
  noshadow?: boolean
}>`
  display: flex;
  ${props =>
    props.position &&
    `
    justify-content: ${props.position};
  `}
  ${props =>
    props.noshadow &&
    `
    box-shadow: none;
  `}
  cursor: pointer;
  ${mixins.mq.MaxM} {
    padding: 8px;
  }
`

const ProductItem = styled.div<{ fixed?: boolean; gap?: string }>`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: ${props => (props.gap ? props.gap : '40')}px;
  ${props =>
    props.fixed &&
    `
    width: 518px;
    padding: 16px 0;
  `}

  ${mixins.mq.MaxM} {
    width: 100%;
    padding: 8px;
    gap: 16px;
  }
  img {
    ${mixins.mq.MaxM} {
      width: 120px;
    }
  }
`

const ProductItemCol3 = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 8px;
  ${mixins.mq.MaxM} {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: start;
    padding: 0;
    gap: 0;
    img {
      width: 60px;
      height: 60px;
    }
  }
`

const ProductItemImage = styled.div`
  ${mixins.mq.MaxM} {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const ProductItemTitle = styled.span`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.16;
  ${mixins.mq.MaxM} {
    font-size: 20px;
  }
`

const ProductItemTitleSmall = styled.span`
  font-weight: 700;
  font-size: 20px;
  font-family: var(--noto-sans-jp), sans-serif;
  line-height: 1.4;
  ${mixins.mq.MaxM} {
    display: flex;
    min-height: 40px;
    align-items: center;
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
  }
`

type LinkItem = {
  title: string | JSX.Element
  link: string
  img: string
}

interface productsData {
  productsDataAndroid: Array<LinkItem>
  accessaryData: Array<LinkItem>
  suffix?: string
}

export const ProductsLists = ({
  productsDataAndroid,
  accessaryData,
  suffix,
}: productsData) => {
  const theme = useContext(ThemeContext)

  return (
    <ProductsList>
      <ProductsListGroup>
        <ProductItemList cols="2">
          <li>
            <ProductCard
              href={`/product/iphone/?l-id=product_product_iphone${
                suffix || ''
              }`}
            >
              <ProductItem gap="24">
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/top/thumb-iphone-120-120-sp.png`}
                      width="120"
                      height="120"
                    />
                    <img
                      src={`${assets}img/product/top/thumb-iphone-240-160-pc.png`}
                      width="240"
                      height="160"
                      alt="iPhone"
                    />
                  </picture>
                </div>
                <ProductItemTitle>iPhone</ProductItemTitle>
              </ProductItem>
            </ProductCard>
          </li>
          <li>
            <ProductCard
              href={`/product/apple-watch/?l-id=product_product_apple-watch${
                suffix || ''
              }`}
            >
              <ProductItem gap="24">
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/top/thumb-apple-watch-120-120-sp.png`}
                      width="120"
                      height="120"
                    />
                    <img
                      src={`${assets}img/product/top/thumb-apple-watch-240-160-pc.png`}
                      width="240"
                      height="160"
                      alt="Apple Watch"
                    />
                  </picture>
                </div>
                <ProductItemTitle>Apple Watch</ProductItemTitle>
              </ProductItem>
            </ProductCard>
          </li>
        </ProductItemList>
      </ProductsListGroup>

      <ProductsListGroup>
        <ProductItemList>
          <li>
            <ProductCard
              position="center"
              noshadow={true}
              href={`/product/smartphone/?l-id=product_product_smartphone${
                suffix || ''
              }`}
            >
              <ProductItem fixed={true}>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/top/thumb-android-120-120-sp-240417.png`}
                      width="120"
                      height="120"
                    />
                    <img
                      src={`${assets}img/product/top/thumb-android-240-160-pc-240417.png`}
                      width="240"
                      height="160"
                      alt="Android/Rakutenオリジナル"
                    />
                  </picture>
                </div>
                <ProductItemTitle>
                  Android/
                  <br />
                  Rakutenオリジナル
                </ProductItemTitle>
              </ProductItem>
            </ProductCard>
          </li>
        </ProductItemList>
        <ProductItemListCol3>
          {productsDataAndroid.map(item => (
            <li key={item.link}>
              <ProductCard href={`${item.link}#payment-advertisement`}>
                <ProductItemCol3>
                  <ProductItemImage>
                    <picture>
                      <img
                        src={`${assets}img/product/top/${item.img}`}
                        width="80"
                        height="80"
                        alt={`${item.title}`}
                      />
                    </picture>
                  </ProductItemImage>
                  <ProductItemTitleSmall>{item.title}</ProductItemTitleSmall>
                </ProductItemCol3>
              </ProductCard>
            </li>
          ))}
        </ProductItemListCol3>
      </ProductsListGroup>

      <ProductsListGroup
        data-ratid={`product_scroll-04_related-product${suffix || ''}`}
        data-ratevent="appear"
        data-ratparam="all"
      >
        <ul>
          <li>
            <ProductCard
              position="center"
              href={`/product/internet/?l-id=product_product_internet${
                suffix || ''
              }`}
            >
              <ProductItem fixed={true}>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/top/thumb-wifi-120-120-sp.png`}
                      width="120"
                      height="120"
                    />
                    <img
                      src={`${assets}img/product/top/thumb-wifi-240-160-pc.png`}
                      width="240"
                      height="160"
                      alt="Wi-Fiルーター／ 周辺機器一覧"
                    />
                  </picture>
                </div>
                <ProductItemTitle>
                  Wi-Fiルーター／ <br />
                  周辺機器一覧
                </ProductItemTitle>
              </ProductItem>
            </ProductCard>
          </li>
        </ul>
      </ProductsListGroup>

      <ProductsListGroup>
        <ProductItemList>
          <li>
            <ProductCard
              position="center"
              href={`/product/accessory/?l-id=product_product_accessory${
                suffix || ''
              }`}
            >
              <ProductItem fixed={true}>
                <div>
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/product/top/thumb-accessary-120-120-sp-231124.png`}
                      width="120"
                      height="120"
                    />
                    <img
                      src={`${assets}img/product/top/thumb-accessary-240-160-pc-231124.png`}
                      width="240"
                      height="160"
                      alt="アクセサリ一覧"
                    />
                  </picture>
                </div>
                <ProductItemTitle>アクセサリ一覧</ProductItemTitle>
              </ProductItem>
            </ProductCard>
          </li>
        </ProductItemList>
        <ProductItemListCol3>
          {accessaryData.map(item => (
            <li key={item.link}>
              <ProductCard href={item.link}>
                <ProductItemCol3>
                  <ProductItemImage>
                    <picture>
                      <img
                        src={`${assets}img/product/top/${item.img}`}
                        width="80"
                        height="80"
                        alt={`${item.title}`}
                      />
                    </picture>
                  </ProductItemImage>
                  <ProductItemTitleSmall>{item.title}</ProductItemTitleSmall>
                </ProductItemCol3>
              </ProductCard>
            </li>
          ))}
        </ProductItemListCol3>
      </ProductsListGroup>
    </ProductsList>
  )
}
