import { assets } from '@components/utils/assets'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp01, TxtSize } from '@components/atoms/Txt'
import { mixins } from '@components/utils/Mixins'

const Div = styled.div`
  user-select: none;
`

const TxtLeadTime = styled.p`
  font-weight: 700;
  font-size: 16px;
`

const LeadContainer = styled.div`
  > p {
    margin-top: 16px;
  }
`

const Profile = styled.div`
  display: flex;
  gap: 16px;

  > div {
    &:nth-of-type(1) {
      text-align: center;
      > p {
        margin-top: 8px;
        font-size: 12px;
      }
    }

    &:nth-of-type(2) {
      width: 100%;
      padding: 16px 24px;
      border: 1px solid ${props => props.theme.colors.monotone93};
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }
  }

  img {
    pointer-events: none;
    @media print {
      display: none;
    }
  }

  ${mixins.mq.MaxM} {
    flex-direction: column;
  }

  ${mixins.mq.MinL} {
    gap: 29px;

    > div {
      &:nth-of-type(2) {
        width: calc(100% - 138px);
      }
    }
  }
`

interface IntroductionProps {
  date: string
  readTime: string
  readTimeSec?: string
  title: string | JSX.Element
  leadTxt: JSX.Element
  imgDirectory: string
  imgParam?: string
  userName: string
  userNameCustom?: boolean
  userBasicInfo: string
  periodOfUse: string
  dataUseage: string
  beforeComapany: string
  beforeRouter?: string
}

export const Introduction = ({
  date,
  readTime,
  readTimeSec,
  title,
  leadTxt,
  imgDirectory,
  imgParam,
  userName,
  userNameCustom,
  userBasicInfo,
  periodOfUse,
  dataUseage,
  beforeComapany,
  beforeRouter,
}: IntroductionProps) => {
  return (
    <Div>
      <TxtCap className={`${Utils['Mt-8']} ${Utils['Align-right']}`} as="div">
        <TxtSize size="s" as="p">
          掲載日：{date}
        </TxtSize>
        <TxtLeadTime className={Utils['Mt-8']}>
          この記事は約{readTime}分{readTimeSec ? readTimeSec + '秒' : ''}
          で読めます
        </TxtLeadTime>
      </TxtCap>

      <LeadContainer className={Utils['Mt-16']}>
        <Heading level="1">{title}</Heading>
        {leadTxt}
      </LeadContainer>

      <Profile className={Utils['Mt-32']}>
        <div>
          <img
            src={`${assets}img/uservoice/${imgDirectory}/profile-avator.png${
              imgParam ? '?' + imgParam : ''
            }`}
            alt={userNameCustom ? userName : `${userName}さん（仮名）`}
            width="138"
            height="138"
          />
          <p>
            <TxtEmp01>
              {userNameCustom ? userName : `${userName}さん（仮名）`}
              <br />
              {userBasicInfo}
            </TxtEmp01>
          </p>
        </div>
        <div>
          <p>
            <TxtEmp01>楽天モバイル利用歴：</TxtEmp01>
            {periodOfUse}
          </p>
          <p>
            <TxtEmp01>毎月のデータ利用量：</TxtEmp01>
            {dataUseage}
          </p>
          <p>
            <TxtEmp01>乗り換え前のスマホブランド：</TxtEmp01>
            {beforeComapany}
          </p>
          {beforeRouter != null && (
            <p>
              <TxtEmp01>乗り換え前のホームルーター：</TxtEmp01>
              {beforeRouter}
            </p>
          )}
        </div>
      </Profile>
    </Div>
  )
}
