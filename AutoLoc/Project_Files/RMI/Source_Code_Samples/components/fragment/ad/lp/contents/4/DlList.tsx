import React from 'react'
import styled from 'styled-components'
import { TxtEmp01 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { assets } from '@components/utils/assets'

const DlWrap = styled.dl`
  > div {
    + div {
      margin-top: 16px;
    }
    > dt {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
    > dd {
      margin-top: 16px;
    }
  }
`

export interface btnData {
  link: string
  text: string | JSX.Element
  target?: string
}
export interface DlData {
  id: string
  dtText: string | JSX.Element
  ddText: string | JSX.Element
  btn?: btnData
}
export interface DlDataProps {
  className?: string
  directory: string
  DlData: DlData[]
}

export const DlList: React.FC<DlDataProps> = props => {
  return (
    <DlWrap className={props.className}>
      {props.DlData.map(v => (
        <div key={v.id}>
          <dt>
            <img
              src={`${assets}img/ad/lp/contents/${props.directory}/icon-${v.id}.png`}
              alt=""
              width="50"
              height="50"
              loading="lazy"
            />
            <TxtEmp01>{v.dtText}</TxtEmp01>
          </dt>
          <dd>
            {v.ddText}
            {v.btn?.link && (
              <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                <ButtonSecondaryLarge
                  as="a"
                  href={v.btn.link}
                  target={v.btn.target}
                >
                  {v.btn.text}
                </ButtonSecondaryLarge>
              </div>
            )}
          </dd>
        </div>
      ))}
    </DlWrap>
  )
}
