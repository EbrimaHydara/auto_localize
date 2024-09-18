import { assets } from '@components/utils/assets'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CardNormal } from '@components/atoms/Card'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { mixins } from '@components/utils/Mixins'
import { useGenerateId } from '@components/utils/useGenerateId'

const CardList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
  user-select: none;

  ${mixins.mq.MinL} {
    gap: 24px;
    margin-top: 24px;
  }

  > li {
    width: 100%;
    ${mixins.mq.MinL} {
      ${mixins.col.ColWidth(2, '24px')}
    }
  }

  img {
    pointer-events: none;
    @media print {
      display: none;
    }
  }
`

const TxtSizeEmp = styled(TxtSize)`
  font-weight: 700;
`

const MediaIconCustom = styled.dt`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 16px;

  > div {
    &:first-child {
      flex: 1;
    }

    &:last-child {
      width: 82px;
    }
  }
`

type UservoiceItem = {
  title: string
  userInfo: string
  description: string
  img: string
  date?: string
  href: string
}

interface ReadMoreInterviewsProps {
  mt?: string
  uservoiceList: UservoiceItem[]
}

export const ReadMoreInterviews = ({
  mt = '64',
  uservoiceList,
}: ReadMoreInterviewsProps) => {
  const { generateId } = useGenerateId()

  return (
    <div className={Utils[`Mt-${mt}`]}>
      <Heading level="3" as="h2">
        ほかのインタビューを読む
      </Heading>

      <CardList as="ul">
        {uservoiceList.map(uservoiceItem => (
          <li key={generateId()}>
            <CardNormal href={uservoiceItem.href}>
              <dl>
                <MediaIconCustom>
                  <div>
                    <TxtSizeEmp size="m" as="p">
                      {uservoiceItem.title}
                    </TxtSizeEmp>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      {uservoiceItem.userInfo}
                    </TxtCap>
                  </div>
                  <div>
                    <img
                      src={`${assets}img/uservoice/${uservoiceItem.img}`}
                      alt=""
                    />
                  </div>
                </MediaIconCustom>
                <dd className={Utils['Mt-16']}>
                  <p>{uservoiceItem.description}</p>
                  {uservoiceItem.date && (
                    <p>
                      <TxtCap>
                        {uservoiceItem.date}
                        <TxtEmp02 className={Utils['Pl-8']}>NEW</TxtEmp02>
                      </TxtCap>
                    </p>
                  )}
                </dd>
              </dl>
            </CardNormal>
          </li>
        ))}
      </CardList>
    </div>
  )
}
