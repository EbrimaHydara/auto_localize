import React from 'react'
import styled from 'styled-components'
import { IconRankingLine } from '@components/icons'

const RankLable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-weight: bold;
  border-radius: 4px 0 4px 0;
  background: ${props => props.theme.colors.monotone88};
  > span {
    font-size: 20px;
    padding-left: 2px;
  }

  &.ranking-Lard_Rank-1 {
    color: ${props => props.theme.colors.white};
    background: #ccbb1d;
  }
  &.ranking-Lard_Rank-2 {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.monotone75};
  }
  &.ranking-Lard_Rank-3 {
    color: ${props => props.theme.colors.white};
    background: #ca8a37;
  }
  &.ranking-Lard_Rank-other {
    ${IconRankingLine} {
      display: none;
    }
  }
`

export interface rankLabelProps {
  ranking: any
}
export const RankLabel: React.FC<rankLabelProps> = ({ ranking, ...rest }) => {
  const rankLableClass = () => {
    const rankingNum = /^[1-3]$/.test(ranking) ? ranking : 'other'
    return 'ranking-Lard_Rank-' + rankingNum
  }
  return (
    <>
      <RankLable className={rankLableClass()}>
        <IconRankingLine />
        <span>{ranking}</span>位
      </RankLable>
    </>
  )
}
