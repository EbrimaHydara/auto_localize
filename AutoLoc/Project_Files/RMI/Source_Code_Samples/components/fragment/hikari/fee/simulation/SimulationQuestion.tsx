import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ButtonRadio } from '@components/atoms/ButtonRadio'
import { Heading } from '@components/atoms/Heading'
import { TxtCap } from '@components/atoms/Txt'
import { mixins } from '@components/utils/Mixins'

const QList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -24px;
  li {
    margin-top: 24px;
    margin-left: 24px;
    width: 100%;
    label {
      width: 100%;
      div {
        width: 100%;
      }
    }
    ${mixins.mq.MinL} {
      ${mixins.col.ColWidth(2, '48px')}
    }
  }
`

const Q1List = styled(QList)`
  max-height: 100%;
  ${mixins.mq.MinL} {
    flex-direction: column;
    max-height: 342px;
  }
`

interface SimulationQuestionProps {
  q01: string
  q02: string
  setQ01: React.Dispatch<React.SetStateAction<string>>
  setQ02: React.Dispatch<React.SetStateAction<string>>
  setQ03: React.Dispatch<React.SetStateAction<string>>
}

export const SimulationQuestion = (props: SimulationQuestionProps) => {
  const { q01, q02, setQ01, setQ02, setQ03 } = props

  return (
    <form>
      <dl>
        <div>
          <Heading level="3" as="dt">
            1. 回線のご利用状況は？
          </Heading>
          <dd>
            <Q1List>
              <ButtonRadio
                onChangeCheck={e => e && setQ01(e)}
                as="li"
                select={[
                  {
                    disabled: false,
                    id: 'q01c01',
                    name: 'q01',
                    text: 'フレッツ光を利用している',
                    value: 'フレッツ光を利用している',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_01',
                  },
                  {
                    disabled: false,
                    id: 'q01c03',
                    name: 'q01',
                    text: (
                      <>
                        光コラボを利用している
                        <br />
                        <TxtCap as="p">
                          ドコモ光、SoftBank 光、OCN 光、ビッグローブ光、So-net
                          光 プラス、ぷらら光、＠nifty光、エキサイト光 等
                        </TxtCap>
                      </>
                    ),
                    value: '光コラボを利用している',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_03',
                  },
                  {
                    disabled: false,
                    id: 'q01c05',
                    name: 'q01',
                    text: (
                      <>
                        その他の光回線を利用している
                        <br />
                        <TxtCap as="p">
                          auひかり、NURO
                          光、J:COM光、eo光、コミュファ光、ケーブルテレビインターネット、電力系光回線
                          等
                        </TxtCap>
                      </>
                    ),
                    value: 'その他の光回線を利用している',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_03',
                  },
                  {
                    disabled: false,
                    id: 'q01c02',
                    name: 'q01',
                    text: 'ポケットWi-Fiやテザリングを利用している',
                    value: 'ポケットWi-Fiやテザリングを利用している',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_02',
                  },
                  {
                    disabled: false,
                    id: 'q01c04',
                    name: 'q01',
                    text: 'ADSL回線を利用している',
                    value: 'ADSL回線を利用している',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_03',
                  },
                  {
                    disabled: false,
                    id: 'q01c06',
                    name: 'q01',
                    text: 'インターネット回線を利用していない',
                    value: 'インターネット回線を利用していない',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_01_03',
                  },
                ]}
              />
            </Q1List>
          </dd>
        </div>
        <div className={Utils['Mt-24']}>
          <Heading level="3" as="dt">
            2. 回線を引きたいお住まいは？
          </Heading>
          <dd>
            <QList>
              <ButtonRadio
                onChangeCheck={e => e && setQ02(e)}
                as="li"
                select={[
                  {
                    disabled: !q01,
                    id: 'q02c01',
                    name: 'q02',
                    text: '集合住宅',
                    value: '集合住宅',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_02_01',
                  },
                  {
                    disabled: !q01,
                    id: 'q02c02',
                    name: 'q02',
                    text: '戸建',
                    value: '戸建',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_02_02',
                  },
                ]}
              />
            </QList>
          </dd>
        </div>
        <div className={Utils['Mt-24']}>
          <Heading level="3" as="dt">
            3. 楽天モバイルの契約は？
          </Heading>
          <dd>
            <QList>
              <ButtonRadio
                onChangeCheck={e => e && setQ03(e)}
                as="li"
                select={[
                  {
                    disabled: !q02,
                    id: 'q03c01',
                    name: 'q03',
                    text: 'ある',
                    value: 'ある',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_03_01',
                  },
                  {
                    disabled: !q02,
                    id: 'q03c02',
                    name: 'q03',
                    text: 'ない',
                    value: 'ない',
                    vertical: false,
                    autoComplete: 'off',
                    ratid: 'rhk_mno-dm_fee_sim_03_02',
                  },
                ]}
              />
            </QList>
          </dd>
        </div>
      </dl>
    </form>
  )
}
