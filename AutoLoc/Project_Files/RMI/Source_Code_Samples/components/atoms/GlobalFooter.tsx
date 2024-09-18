import styled from 'styled-components'
import { assets } from '@components/utils/assets'

export const GlobalFooterAside = styled.div`
  margin-top: 56px;
  background-color: ${props => props.theme.colors.white};
`

export const GlobalFooterRelated = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  background: ${props => props.theme.colors.white};
  h2 {
    color: ${props => props.theme.colors.black};
  }
  ul {
    margin-top: 24px;
    justify-content: space-between;
    li {
      margin-top: 20px;
      position: relative;
      width: 100%;
      display: flex;
      &:first-child {
        margin-top: 0;
        margin-left: 0;
      }
      @media screen and (min-width: ${props =>
          props.theme.min.m}) and (max-width: ${props => props.theme.max.m}) {
        width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
        margin-top: ${props => props.theme.gap.l};
        margin-left: ${props => props.theme.gap.l};
        &:nth-child(2) {
          margin-top: 0;
        }
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
      }
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
        margin-top: 0;
      }

      a {
        display: block;
        width: 100%;
        position: relative;
        background-color: ${props => props.theme.colors.white};
        border-radius: 4px;
        padding: 16px 16px 20px;
        overflow: hidden;
        border: 1px solid ${props => props.theme.colors.monotone88};
        box-shadow: 0 4px ${props => props.theme.colors.monotone88};
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
          background-color: ${props => props.theme.colors.primary};
        }
        &:hover {
          background-color: ${props => props.theme.colors.monotone97};
        }
        &:active {
          background-color: ${props => props.theme.colors.monotone88};
        }
        > span {
          display: block;
        }
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 16px;
        left: 16px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        z-index: 1;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;
      }
    }
  }
`

export const IconShop = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-shop.png);
  }
`

export const IconProduct = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-product.png);
  }
`

export const IconAccessory = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-accessory.png);
  }
`

export const IconProgram = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-program.png);
  }
`

export const IconPayment = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-payment.png);
  }
`

export const IconPlan = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-plan.png);
  }
`

export const IconArea = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-area.png);
  }
`

export const IconSupport = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-support.png);
  }
`

export const IconService = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-service.png);
  }
`

export const IconQuestionnaire = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-questionnaire.png);
  }
`

export const IconShopguide = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-shopguide.png);
  }
`

export const IconShopV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-shop.png);
  }
`

export const IconProductV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-product.png);
  }
`

export const IconAccessoryV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-accessory.png);
  }
`

export const IconProgramV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-program.png);
  }
`

export const IconPaymentV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-payment.png);
  }
`
export const IconPlanV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-plan.png);
  }
`
export const IconAreaV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-area.png);
  }
`
export const IconSupportV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-support.png);
  }
`
export const IconServiceV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-service.png);
  }
`
export const IconQuestionnaireV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-questionnaire.png);
  }
`
export const IconShopguideV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-shopguide.png);
  }
`
export const IconUsedPurchaseV2 = styled.li`
  &::before {
    background-image: url(${assets}img/common/icon-related-v2-usedpurchase.png);
  }
`

export const GlobalFooterRelatedHeading = styled.span`
  margin-top: 14px;
  padding-left: 72px;
  font-size: ${props => props.theme.fonts.m};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  line-height: 1.4;
`

export const GlobalFooterRelatedText = styled.span`
  margin-top: 32px;
  color: ${props => props.theme.colors.black};
`

export const GlobalFooterNav = styled.div<{ isSimple?: boolean }>`
  padding: ${props => (props.isSimple ? '24px 0' : '16px 16px 32px')};
  background-color: ${props => props.theme.colors.monotone97};
  line-height: 1;
  color: ${props => props.theme.colors.black};
  text-align: center;
`

export const GlobalFooterNavMain = styled.ul`
  max-width: ${props => props.theme.max.l};
  margin: 0 auto;
  padding: 0 ${props => props.theme.garter};
  font-size: 0;
  @media screen and (max-width: ${props => props.theme.max.s}) {
    padding: 0;
    text-align: left;
  }
  li {
    font-size: ${props => props.theme.fonts.ss};
    margin: 16px 32px 0 0;
    display: inline-block;
    @media screen and (max-width: ${props => props.theme.max.s}) {
      margin-right: 24px;
    }
    a {
      color: inherit;
      border-bottom: 1px solid ${props => props.theme.colors.black};
      &:hover {
        border-bottom-width: 2px;
      }
      &:active {
        border-bottom-width: 0;
      }
      + span {
        margin-left: 4px;
        font-size: 16px;
        vertical-align: text-bottom;
      }
    }
  }
`

export const GlobalFooterRGroup = styled.div`
  padding: 8px 0 24px;
  background-color: ${props => props.theme.colors.white};
  line-height: 1;
  text-align: center;
`

export const GlobalFooterRGroupLink = styled.ul`
  font-size: 0;
  li {
    display: inline-block;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fonts.ss};
    margin: 16px 0 0 32px;
    @media screen and (max-width: ${props => props.theme.max.s}) {
      margin-left: 16px;
    }
    a {
      color: ${props => props.theme.colors.textSecondary};
      border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
      &:hover {
        border-bottom-width: 2px;
      }
      &:active {
        border-bottom-width: 0;
      }
      + span {
        margin-left: 4px;
        font-size: 16px;
        vertical-align: text-bottom;
      }
    }
    &:first-child {
      margin-left: 0;
      font-weight: bold;
      color: ${props => props.theme.colors.black};
    }
    @media screen and (max-width: ${props => props.theme.max.m}) {
      &:first-child {
        display: block;
      }
      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
`

export const GlobalFooterRGroupBanner = styled.div`
  max-width: ${props => props.theme.max.l};
  margin: 24px auto 0;
  padding-bottom: 24px;
`

export const GlobalFooterCopyright = styled.small`
  max-width: ${props => props.theme.max.l};
  margin: 32px auto 0;
  display: block;
  color: ${props => props.theme.colors.lightBlack};
  font-size: ${props => props.theme.fonts.ss};
  @media screen and (max-width: ${props => props.theme.max.s}) {
    text-align: left;
  }
`

export const GlobalFooterCopyrightSimple = styled(GlobalFooterCopyright)`
  margin: 0 auto;
  text-align: center;
`
