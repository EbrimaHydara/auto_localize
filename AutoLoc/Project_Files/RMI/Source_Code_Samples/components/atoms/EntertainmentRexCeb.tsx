import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { SystemContainer } from '@components/layout/System'
import { TxtCap, TxtSize } from './Txt'
import { ButtonPrimaryLarge } from './Buttons'
import { ReactElement } from 'react'

const PinkBg = styled.div`
  margin-top: 32px;
  padding: 24px 0;
  background: ${props => props.theme.colors.pink5};
`
const OverWriteRexCeb = styled.div`
  .campaign-Rexoverwrite > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    .Below {
      order: 1;
      margin-top: 16px;
    }
    .Alert {
      order: 2;
      margin-top: 16px;
    }
    .CampaignButton {
      order: 3;
      margin-top: 16px;
      width: 100%;
    }
    .InfoText {
      order: 4;
      margin-top: 16px;
    }
  }
  .campaign-Rexoverwrite .Below {
    .agreement-label {
      color: #333333;
    }
    .agreement-checkbox:checked + .agreement-checkbox-icon {
      background-color: ${props => props.theme.colors.primary};
    }
  }
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-enabled
    a.rex-button.RexButton {
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    min-width: 160px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
    font-weight: 700;
    max-width: 310px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    &[aria-disabled='true']:hover {
      cursor: default;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${props => props.theme.colors.pink_80};
      border: 1px solid ${props => props.theme.colors.pink_80};
      color: ${props => props.theme.colors.white};
    }
    &:focus {
      outline: 2px ${props => props.theme.colors.linkBlue} solid;
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props => props.theme.colors.pink_60};
      border: 1px solid ${props => props.theme.colors.pink_60};
      color: ${props => props.theme.colors.white};
      outline: 0;
      box-shadow: none;
    }
    ${mixins.mq.MinL} {
      max-width: 500px !important;
    }
  }
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-enabled
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-disabled
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-success
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-applied
    a.rex-button.RexButton,
  .campaign-Rexoverwrite
    .CampaignButton.CampaignButton-already_applied_text
    a.rex-button.RexButton {
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    width: 500px;
    max-width: 500px;
    min-width: 160px;
    ${mixins.mq.MaxM} {
      width: 100%;
      padding: 14px;
    }
  }
`

type EntertainmentRexCebType = {
  CEB_ID: string
  serviceText: string | ReactElement
  serviceUrl: string
  ratid?: string
}
export const EntertainmentRexCeb = (props: EntertainmentRexCebType) => {
  const { CEB_ID, serviceText, serviceUrl, ratid } = props
  const ratparam = {
    'data-ratid': ratid,
    'data-ratevent': 'click',
    'data-ratparam': 'all',
  }
  return (
    <PinkBg>
      <SystemContainer>
        <OverWriteRexCeb className={`${Utils['Align-center']}`}>
          <TxtCap as="p" className={Utils['Align-llc']}>
            <TxtSize size="s">
              本キャンペーンの運営に関連して楽天モバイル株式会社は楽天グループ株式会社より応募者のメールアドレスを取得することがあります。
              <br className={Utils['Show-xxo']} />
              取得したメールアドレスは楽天モバイル株式会社において応募条件を満たしていることの確認およびポイント付与を目的としてのみ利用し、
              <br className={Utils['Show-xxo']} />
              また、同一目的のためにサービス提供会社各社（6社）に提供します。
            </TxtSize>
          </TxtCap>
          <div id={CEB_ID} className="campaign-Rexoverwrite"></div>
        </OverWriteRexCeb>
        <div className={Utils['Align-center']}>
          <ButtonPrimaryLarge
            as="a"
            href={serviceUrl}
            className={Utils['Mt-16']}
            target="_blank"
            {...ratparam}
          >
            {serviceText}
          </ButtonPrimaryLarge>
        </div>
      </SystemContainer>
    </PinkBg>
  )
}
