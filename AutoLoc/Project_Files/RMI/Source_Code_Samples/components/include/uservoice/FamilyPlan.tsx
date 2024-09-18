import React from 'react'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { mixins } from '@components/utils/Mixins'

const Container = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.monotone75};
  padding: 40px 24px;
  ${mixins.mq.MaxM} {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .img1 {
    margin: auto 0;
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    ${mixins.mq.MaxM} {
      display: none;
    }
  }
  .img2 {
    margin: auto 0;
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    ${mixins.mq.MaxM} {
      display: none;
    }
  }
  .img3 {
    margin: 0 auto;
    ${mixins.mq.MinL} {
      display: none;
    }
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  span {
    margin-top: 8px;
    br {
      ${mixins.mq.MinL} {
        display: none;
      }
    }
  }
`

interface FamilyPlanProps {
  className?: string
  lazy?: boolean
  directory: string
}
export const FamilyPlan: React.FC<FamilyPlanProps> = ({
  className,
  lazy,
  directory,
}) => {
  return (
    <Container className={className}>
      <Title>
        <img
          width="284"
          src={`${assets}img/fee/un-limit/img-saikyo-plan-logo.svg`}
          alt="Rakuten最強プラン"
          loading={lazy ? 'lazy' : 'eager'}
        />
        <br />
        <span>
          家族みんなで
          <br />
          おトクに使える
        </span>
      </Title>
      <img
        src={`${assets}img/fee/un-limit/img-unlimit-family-01-pc.png?211029`}
        alt=""
        className="img1"
        width="151"
        height="192"
        loading={lazy ? 'lazy' : 'eager'}
      />
      <img
        className="img2"
        src={`${assets}img/fee/un-limit/img-unlimit-family-02-pc.png?211029`}
        alt=""
        width="146"
        height="186"
        loading={lazy ? 'lazy' : 'eager'}
      />

      <img
        className="img3"
        width="517"
        height="372"
        src={`${assets}img/fee/un-limit/img-unlimit-family-01-sp.png?211029`}
        alt=""
        loading={lazy ? 'lazy' : 'eager'}
      />
      <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
        <ButtonRegularLarge
          as="a"
          href={`/fee/family/?l-id=uservoice_${directory}_fee_family`}
        >
          おトクな理由を見る
        </ButtonRegularLarge>
      </div>
    </Container>
  )
}
