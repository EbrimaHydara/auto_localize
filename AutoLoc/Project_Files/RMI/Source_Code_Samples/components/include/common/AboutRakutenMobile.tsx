import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { SystemContainer } from '@components/layout/System'
import { Heading, HeadingLevel } from '@components/atoms/Heading'
import { TxtEmp01 } from '@components/atoms/Txt'
import { CardNormal } from '@components/atoms/Card'
import { assets } from '@components/utils/assets'

const Wrap = styled.div<{ isBgGray?: boolean }>`
  ${props =>
    props.isBgGray &&
    `
    background-color: ${props.theme.colors.monotone97};
    padding-top: 16px;
    padding-bottom: 24px;
    `}
  ${mixins.mq.MinL} {
    ${props =>
      props.isBgGray &&
      `
      padding-top: 24px;
      padding-bottom: 32px;
    `}
  }
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 8px;
  margin-top: 20px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 24px;
    margin-top: 24px;
  }
`
const CustomCard = styled(CardNormal)`
  display: grid;
  row-gap: 16px;
  justify-content: center;
  text-align: center;
  height: 100%;
`
const CardTxt = styled.span`
  font-size: ${props => props.theme.fonts.m};
  font-weight: bold;
  line-height: 1.4;
`

type Props = {
  className?: string
  as?: React.ElementType
  lid?: string
  titleLevel?: HeadingLevel
  isBgGray?: boolean
  lazy?: boolean
}
type CardType = {
  id: string
  label: string | JSX.Element
  img: string
  link: string
}

export const AboutRakutenMobile = (props: Props) => {
  const {
    className,
    as: Section = 'section',
    lid,
    titleLevel = '2',
    isBgGray,
    lazy = true,
  } = props

  const imgPath = `${assets}img/inc/about-rakuten-mobile/`
  const Cards: CardType[] = [
    {
      id: 'fee_saikyo-plan',
      label: '料金プラン',
      img: `${imgPath}img-saikyo-plan.png`,
      link: '/fee/saikyo-plan/',
    },
    {
      id: 'fee_zero',
      label: (
        <>
          お申し込み
          <br className={Utils['Show-oxx']} />
          手数料
        </>
      ),
      img: `${imgPath}img-zero.png`,
      link: '/fee/zero/',
    },
    {
      id: 'area',
      label: (
        <>
          サービス
          <br className={Utils['Show-oxx']} />
          エリア
        </>
      ),
      img: `${imgPath}img-area.png`,
      link: '/area/',
    },
    {
      id: 'product',
      label: '製品',
      img: `${imgPath}img-product.png`,
      link: '/product/',
    },
    {
      id: 'product_byod',
      label: (
        <>
          ご利用製品の
          <br className={Utils['Show-oxx']} />
          対応確認
        </>
      ),
      img: `${imgPath}img-byod.png`,
      link: '/product/byod/',
    },
    {
      id: 'service',
      label: (
        <>
          オプション
          <br className={Utils['Show-oxx']} />
          サービス
        </>
      ),
      img: `${imgPath}img-service.png`,
      link: '/service/',
    },
    {
      id: 'guide_point',
      label: (
        <>
          おトクな
          <br className={Utils['Show-oxx']} />
          楽天ポイント
        </>
      ),
      img: `${imgPath}img-point.png`,
      link: '/guide/point/',
    },
    {
      id: 'service_rakuten-link',
      label: (
        <>
          Rakuten Link
          <br className={Utils['Show-oxx']} />
          アプリ
        </>
      ),
      img: `${imgPath}img-rakuten-link.png`,
      link: '/service/rakuten-link/',
    },
    {
      id: 'campaign',
      label: (
        <>
          キャンペーン
          <br className={Utils['Show-oxx']} />
          一覧
        </>
      ),
      img: `${imgPath}img-campaign.png`,
      link: '/campaign/',
    },
    {
      id: 'product_sim',
      label: 'SIMの使い方',
      img: `${imgPath}img-sim.png`,
      link: '/product/sim/',
    },
  ]
  return (
    <Wrap className={className} isBgGray={isBgGray}>
      <SystemContainer>
        <Section>
          <Heading level={titleLevel} className={Utils['Align-center']}>
            楽天モバイルについて
          </Heading>
          <TxtEmp01
            as="p"
            className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
          >
            詳細は以下の各リンク先にてご確認ください
          </TxtEmp01>
          <CardWrapper>
            {Cards.map(Card => (
              <CustomCard
                key={Card.id}
                href={`${Card.link}${
                  lid && `?l-id=${lid}_conaboutmobile_${Card.id}`
                }`}
              >
                <img
                  src={Card.img}
                  width="208"
                  height="104"
                  alt=""
                  loading={lazy ? 'lazy' : undefined}
                />
                <CardTxt>{Card.label}</CardTxt>
              </CustomCard>
            ))}
          </CardWrapper>
        </Section>
      </SystemContainer>
    </Wrap>
  )
}
