import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { LabelNormalSingle } from '@components/atoms/Label'
import { mixins } from '@components/utils/Mixins'

const ResultTable = styled.dl`
  > div {
    border: 1px solid ${props => props.theme.colors.monotone75};

    + div {
      margin-top: 16px;
    }
    ${mixins.mq.MinL} {
      display: flex;

      dd {
        br {
          display: none;
        }
      }
    }
    ${mixins.mq.MaxM} {
      dd {
        text-align: right;
      }
    }
  }
`

const ResultTitle = styled.dt`
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  padding: 16px;
  font-weight: 700;
  background: ${props => props.theme.colors.monotone93};
  ${mixins.mq.MinL} {
    ${props => mixins.col.ColWidth(3, props.theme.gap.l)}
    border-bottom: 0;
    border-right: 1px solid ${props => props.theme.colors.monotone75};
    text-align: left;
  }
`

const ResultData = styled.dd`
  ${mixins.mq.MinL} {
    width: 100%;
  }
  dl {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 16px;
      ${mixins.mq.MinL} {
        justify-content: flex-start;
        padding: 16px;
      }
      + div {
        border-top: 1px solid ${props => props.theme.colors.monotone75};
      }
      dd {
        ${mixins.mq.MinL} {
          margin-left: 32px;
        }
      }
    }
  }
`

const LabelBase = styled(LabelNormalSingle)`
  width: 104px;
  text-align: center;
  display: inline-block;
`

const LabelPrimary = styled(LabelBase)`
  background-color: #f59600;
  color: ${props => props.theme.colors.white};
`

const LabelSecondary = styled(LabelBase)`
  background-color: #ffdeaa;
`

const LabelRegular = styled(LabelBase)`
  background-color: ${props => props.theme.colors.monotone56};
  color: ${props => props.theme.colors.white};
`

interface SimulationResultProps {
  mt: number
  constructionCost: JSX.Element | string
  constructionCost2y: JSX.Element | string
  basicFee: JSX.Element | string
  basicFee2y: JSX.Element | string
  initialFee: JSX.Element | string
}

export const SimulationResult = (props: SimulationResultProps) => {
  const {
    mt,
    constructionCost,
    constructionCost2y,
    basicFee,
    basicFee2y,
    initialFee,
  } = props

  return (
    <div className={Utils[`Mt-${mt}`]}>
      <Heading level="2" className={Utils['Align-center']}>
        シミュレーション結果
      </Heading>
      <div className={Utils['Mt-16']}>
        <ResultTable>
          <div>
            <ResultTitle>1年目</ResultTitle>
            <ResultData>
              <dl>
                <div>
                  <dt>
                    <LabelPrimary>月額基本料</LabelPrimary>
                  </dt>
                  <dd>{basicFee}</dd>
                </div>
                <div>
                  <dt>
                    <LabelSecondary>標準工事費※2</LabelSecondary>
                  </dt>
                  <dd>{constructionCost}</dd>
                </div>
                <div>
                  <dt>
                    <LabelRegular>初期登録費</LabelRegular>
                  </dt>
                  <dd>{initialFee}円／開通翌月のみ</dd>
                </div>
              </dl>
            </ResultData>
          </div>

          <div>
            <ResultTitle>2年目以降</ResultTitle>
            <ResultData>
              <dl>
                <div>
                  <dt>
                    <LabelPrimary>月額基本料</LabelPrimary>
                  </dt>
                  <dd>{basicFee2y}</dd>
                </div>
                <div>
                  <dt>
                    <LabelSecondary>標準工事費※2</LabelSecondary>
                  </dt>
                  <dd>{constructionCost2y}</dd>
                </div>
              </dl>
            </ResultData>
          </div>
        </ResultTable>
      </div>
    </div>
  )
}
