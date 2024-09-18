import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'

import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'
import { BannerHover } from '@components/atoms/Banner'
import { LabelList, LabelItem } from '@components/atoms/Label'

const CardCampaignItem = styled.li`
  display: grid;
  grid-template-rows: subgrid;
  padding: 24px 16px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
  grid-row: span 4;
  gap: 0;
  ${mixins.mq.MinL} {
    gap: 16px;
    padding: 24px 32px;
    grid-row: span 2;
    align-items: center;
    grid-template-columns: 54px auto 1fr;
  }
`

const CustomLabelList = styled(LabelList)`
  gap: 4px;
  height: max-content;
  ${mixins.mq.MaxL} {
    margin-top: 16px;
  }
  > li {
    margin: 0;
  }
`
const CardImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 16px;
  margin-bottom: 16px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 24px;
  }
`

const ImgLabel = styled.p`
  margin-bottom: 8px;
  width: max-content;
  padding: 2px 12px;
  border-radius: 5px;
  background: #d1f1ff;
  color: ${props => props.theme.colors.monotone40};
  font-weight: 700;
`

const CardCampaignFoot = styled.div<CardCampaignProps>`
  display: grid;
  margin-top: 16px;
  ${mixins.mq.MinL} {
    margin-top: 0;
    gap: 16px;
    grid-column: 1/5;
    ${({ cardItem }) =>
      cardItem?.imgs?.length === 1 && `grid-template-columns: 296px auto;`}
  }
`

type ImgItem = {
  path: string
  alt?: string
  ratid?: string
  label?: string
  labelColor?: string
  note?: string
}

type LinkItem = {
  url: string
  ratid?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

export type PandaShopCardItem = {
  id: string
  title: string | JSX.Element
  imgs: Array<ImgItem>
  link: LinkItem
  content: string | JSX.Element
  labels: Array<LabelItem>
  memo?: Array<string>
}

interface CardCampaignProps {
  cardItem: PandaShopCardItem
}

export const CardCampaign = ({ cardItem }: CardCampaignProps) => {
  const theme = useContext(ThemeContext)
  return (
    <CardCampaignItem>
      <div className={`${Utils['Align-center']}`}>
        <img
          src={`${assets}img/shop/panda-desgin-shop/card-item-num${cardItem.id}.png`}
          width="54"
          height="41"
          alt={`${cardItem.id}`}
        />
      </div>
      <Heading level="3" className={Utils['Align-center']}>
        {cardItem.title}
      </Heading>
      <CustomLabelList item={cardItem.labels} />
      <CardCampaignFoot cardItem={cardItem}>
        {cardItem.imgs.length > 1 && (
          <TxtEmp02
            as="p"
            className={`${Utils['Align-center']} ${Utils['Mb-16']}`}
          >
            いずれか1点をお選びください
          </TxtEmp02>
        )}
        <CardImgs>
          {cardItem.imgs.map(value => (
            <>
              {cardItem.link.url ? (
                <div>
                  {value.label && (
                    <ImgLabel style={{ background: value.labelColor }}>
                      {value.label}
                    </ImgLabel>
                  )}
                  <BannerHover
                    href={
                      value.ratid
                        ? `${cardItem.link.url}?l-id=${value.ratid}`
                        : cardItem.link.url
                    }
                    target={cardItem.link.target}
                  >
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/shop/panda-desgin-shop/${value.path}`}
                        width="622"
                        height="352"
                      />
                      <img
                        src={`${assets}img/shop/panda-desgin-shop/${value.path}`}
                        width="311"
                        height="176"
                        alt={`${value.alt}`}
                      />
                    </picture>
                  </BannerHover>
                  {value.note && (
                    <TxtCap as="p" className={`${Utils['Mt-8']}`}>
                      {value.note}
                    </TxtCap>
                  )}
                </div>
              ) : (
                <div>
                  {value.label && (
                    <ImgLabel style={{ background: value.labelColor }}>
                      {value.label}
                    </ImgLabel>
                  )}
                  <picture>
                    <source
                      media={`(max-width: ${theme.max.m})`}
                      srcSet={`${assets}img/shop/panda-desgin-shop/${value.path}`}
                      width="622"
                      height="352"
                    />
                    <img
                      src={`${assets}img/shop/panda-desgin-shop/${value.path}`}
                      width="311"
                      height="176"
                      alt={`${value.alt}`}
                    />
                  </picture>
                  {value.note && (
                    <TxtCap as="p" className={`${Utils['Mt-8']}`}>
                      {value.note}
                    </TxtCap>
                  )}
                </div>
              )}
            </>
          ))}
        </CardImgs>
        <div>
          <div>{cardItem.content}</div>
          <ul className={`${Utils['Mt-16']}`}>
            {cardItem.memo &&
              cardItem.memo.map(item => <TxtCap as="li">{item}</TxtCap>)}
          </ul>
          {cardItem.link.url && (
            <div className={`${Utils['Mt-16']} ${Utils['Align-ccl']}`}>
              <LinkIconAfter
                href={
                  cardItem.link.ratid
                    ? `${cardItem.link.url}?l-id=${cardItem.link.ratid}`
                    : cardItem.link.url
                }
                target={cardItem.link.target ? cardItem.link.target : undefined}
              >
                キャンペーンの詳細はこちら
                <IconChevronRight />
              </LinkIconAfter>
            </div>
          )}
        </div>
      </CardCampaignFoot>
    </CardCampaignItem>
  )
}
