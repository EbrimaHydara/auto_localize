import { assets } from '@components/utils/assets'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react'
import { useSearchParams } from 'next/navigation'
import styled, { ThemeContext, css } from 'styled-components'
import { Theme } from '~/styles/theme/themes'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import axios from 'axios'
import { AlphanumericEmp, TxtCap } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'

const Gadget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border: 3px solid;
  border-radius: 16px;
  width: 100%;
  padding: 16px;
  position: relative;
  ${mixins.mq.MinL} {
    min-height: 52px;
  }
  ${mixins.mq.MaxM} {
    margin: 0 auto;
    padding: 8px;
  }
`

const GadgetWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`

const GadgetHeading = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
    max-width: 343px;
    justify-content: center;
    margin: 0 auto;
  }
`

const GadgetBody = styled.div<{ bg?: keyof Theme['colors'] }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  border-radius: 12px;
  ${({ bg, theme }) => css`
    ${bg !== undefined &&
    css`
      background-color: ${theme.colors[bg]};
    `}
  `};
  ${mixins.mq.MaxM} {
    margin-top: 20px;
  }
`

const GadgetBtn = styled.div`
  width: 288px;
  ${mixins.mq.MaxM} {
    max-width: 311px;
    width: 100%;
  }

  a {
    display: block;
    width: 100%;
    padding: 12px 20px;
    color: ${props => props.theme.colors.pink100};
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    background-color: #fff2f9;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  }
`

const GadgetName = styled.div<{ rank?: number }>`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  ${mixins.mq.MaxM} {
    padding-bottom: 0;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
  a {
    color: $color_black;
    color: ${props => props.theme.colors.black};
    ${mixins.mq.MaxM} {
      text-decoration: none;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 18.5px;
    height: 24px;
    margin: -9px 8px -2px 0;
    background-size: 18.5px 24px;

    ${({ rank }) => css`
      ${rank === 1 &&
      css`
        display: none;
      `}
      ${rank === 2 &&
      css`
        background-image: url(${assets}img/top/ico-silver.png);
      `}
      ${rank === 3 &&
      css`
        background-image: url(${assets}img/top/ico-gold.png);
      `}
      ${rank === 4 &&
      css`
        background-image: url(${assets}img/top/ico-platinum.png);
      `}
      ${rank === 5 &&
      css`
        background-image: url(${assets}img/top/ico-diamond.png);
      `}
    `}
  }
`

const GadgetTotalPoint = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.pink100};
  vertical-align: text-bottom;
  span {
    color: inherit;
    font-size: 42px;
    font-weight: 600;
  }
`

const GadgetPointCondition = styled.p`
  margin-top: -17px;
  padding: 3px 24px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background-color: white;
  border-radius: 50px;
  ${mixins.mq.MaxM} {
    margin-top: -14px;
    padding: 0 13px 2px;
    font-size: 17px;
  }
`

const GadgetPointArea = styled.p`
  position: relative;
  margin-top: 14px;
  padding: 2px 8px 3px;
  font-size: 16px;
  background-color: white;
  border-radius: 4px;
  ${mixins.mq.MaxM} {
    margin-top: 9px;
    padding: 4px 8px;
    font-size: 13px;
  }
  &::after {
    position: absolute;
    top: 100%;
    left: calc(50% - 4px);
    content: '';
    display: block;
    background-color: inherit;
    width: 8px;
    height: 6px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`

const GadgetPlusPoint = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 16px;
  }
  ${AlphanumericEmp} {
    font-size: 26px;
    line-height: 1;
  }
`

const GadgetMessage = styled.div`
  margin-top: 14px;
  ${mixins.mq.MaxM} {
    margin-top: 8px;
  }
`

const GadgetMessageCap = styled(TxtCap)`
  margin-top: 4px;
  padding-bottom: 14px;
  ${mixins.mq.MaxM} {
    padding-bottom: 8px;
  }
`

export type LoginGadget = {
  className?: string
  loginStatus?: string
}

type UserDataType = {
  username: string
  fixedPoint: number
  limitedPoint: number
  rank: number
  cash: number
}

const isLocal = false

const statusList = {
  nonLogin: 'non_login',
  login: 'login',
  mnoHolder: 'mno_holder',
  nonMnoHolder: 'login_non_mno_holder',
} as const

export const ZerotokuLoginGadget = ({
  className,
  loginStatus = statusList.nonLogin, // デフォルトは未ログイン
}: LoginGadget) => {
  const theme = useContext(ThemeContext)

  const [status, setStatus] = useState<string>(loginStatus)
  const [userData, setUserData] = useState<UserDataType | undefined>()

  const searchParams = useSearchParams()

  const getMemberInfo = useCallback(async () => {
    const apiUrl = isLocal
      ? `${assets}json/dummy-member-information.json`
      : 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519'
    const data = await axios({
      method: 'get',
      url: apiUrl,
      withCredentials: true,
    })
    return data.data
  }, [])

  useEffect(() => {
    console.log('status', status)

    if (typeof RAT === 'undefined') {
      return
    }
    let ratElms
    switch (status) {
      case statusList.nonLogin:
        ratElms = RAT.$Selector('#non-login').find('[data-ratid]')
        break
      case statusList.login:
        ratElms = RAT.$Selector('#login').find('[data-ratid]')
        break
      case statusList.mnoHolder:
        ratElms = RAT.$Selector('#pitari-mno-holder').find('[data-ratid]')
        break
      case statusList.nonMnoHolder:
        ratElms = RAT.$Selector('#pitari-non-mno-holder').find('[data-ratid]')
        break
      default:
        break
    }
    if (ratElms?.length > 0) {
      RAT.bind(ratElms)
    }
  }, [status])

  const checkPattern = useMemo(() => {
    if (!userData) {
      return
    }

    const point = userData.fixedPoint + userData.cash
    const limitedPoint = userData.limitedPoint

    if (point >= 12936) {
      if (point <= 26235) {
        return {
          id: 6,
          point_area: false,
          img_type: 'point-type-04',
          alt: '支払いにポイント利用でデータ3GBまで(1,078円/月)1年ずーッと0円!',
          pcWidth: '409',
          pcHeight: '68',
          spWidth: '236',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_12936-26235_fee_saikyo-plan',
          anotation: 'default',
          appearRatId: 'zerotoku-logingadget-6_12936-26235',
        }
      } else if (point >= 26236 && point <= 39335) {
        return {
          id: 7,
          point_area: false,
          img_type: 'point-type-05',
          alt: '支払いにポイント利用でデータ20GBまで(2,178円/月)1年ずーッと0円!',
          pcWidth: '432',
          pcHeight: '68',
          spWidth: '236',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_2178-3277_fee_saikyo-plan',
          anotation: 'default',
          appearRatId: 'zerotoku-logingadget-7_26236-39335',
        }
      } else {
        return {
          id: 8,
          point_area: false,
          img_type: 'point-type-06',
          alt: '支払いにポイント利用で データ無制限(3,278円/月)1年ずーッと0円!',
          pcWidth: '402',
          pcHeight: '68',
          spWidth: '236',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_39336_fee_saikyo-plan',
          anotation: 'unlimited',
          appearRatId: 'zerotoku-logingadget-8_39336',
        }
      }
    } else {
      const pointWithLimited = point + limitedPoint
      if (pointWithLimited <= 1077) {
        return {
          id: 2,
          point_area: true,
          img_type: 'point-type-01',
          alt: '支払いにポイント利用でデータ3GBまで(1,078円/月)が1カ月0円!',
          pcWidth: '363',
          pcHeight: '68',
          spWidth: '204',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_0-1077_fee_saikyo-plan',
          anotation: 'default',
          appearRatId: 'zerotoku-logingadget-2_0-1077',
        }
      } else if (pointWithLimited >= 1078 && pointWithLimited <= 2177) {
        return {
          id: 3,
          point_area: false,
          img_type: 'point-type-01',
          alt: '支払いにポイント利用でデータ3GBまで(1,078円/月)が1カ月0円!',
          pcWidth: '363',
          pcHeight: '68',
          spWidth: '204',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_1078-2177_fee_saikyo-plan',
          anotation: 'default',
          appearRatId: 'zerotoku-logingadget-3_1078-2177',
        }
      } else if (pointWithLimited >= 2178 && pointWithLimited <= 3277) {
        return {
          id: 4,
          point_area: false,
          img_type: 'point-type-02',
          alt: '支払いにポイント利用でデータ20GBまで(2,178円/月)が1カ月0円!',
          pcWidth: '386',
          pcHeight: '68',
          spWidth: '229',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_2178-3277_fee_saikyo-plan',
          anotation: 'default',
          appearRatId: 'zerotoku-logingadget-4_2178-3277',
        }
      } else {
        return {
          id: 5,
          point_area: false,
          img_type: 'point-type-03',
          alt: '支払いにポイント利用で データ無制限(3,278円/月)1カ月0円!',
          pcWidth: '351',
          pcHeight: '69',
          spWidth: '192',
          spHeight: '112',
          link: '/fee/saikyo-plan/?l-id=zerotoku_login_3278-12935_fee_saikyo-plan',
          anotation: 'unlimited',
          appearRatId: 'zerotoku-logingadget-5_3278-12935',
        }
      }
    }
  }, [userData])

  const numPoint = useMemo(() => {
    if (!userData) {
      return
    }
    const num = userData.fixedPoint + userData.limitedPoint + userData.cash
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  }, [userData])

  const plusPoint = useMemo(() => {
    if (!userData) {
      return
    }
    const targetPoint = 1078
    const num = userData.fixedPoint + userData.limitedPoint + userData.cash
    return String(targetPoint - num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  }, [userData])

  useEffect(() => {
    ;(async () => {
      const data: UserDataType = await getMemberInfo().catch(err => {
        console.error(err)
        setStatus(statusList.nonLogin)
      })
      console.log('data', data)
      if (isLocal) {
        const dummyUsername = searchParams.get('username')
        const dummyRank = searchParams.get('rank')
        const dummyFixedPoint = searchParams.get('fixedPoint')
        const dummyLimitedPoint = searchParams.get('limitedPoint')
        const dummyCash = searchParams.get('cash')
        setUserData({
          username: dummyUsername || data.username,
          rank: dummyRank ? Number(dummyRank) : data.rank,
          fixedPoint: dummyFixedPoint
            ? Number(dummyFixedPoint)
            : data.fixedPoint,
          limitedPoint: dummyLimitedPoint
            ? Number(dummyLimitedPoint)
            : data.limitedPoint,
          cash: dummyCash ? Number(dummyCash) : data.cash,
        })

        // local, stgでは searchParams.get('status') でログイン状態をチェックしている
        return
      }
      if (data?.rank !== undefined && data.rank > 0) {
        setUserData({
          username: data.username,
          rank: data.rank,
          fixedPoint: data.fixedPoint,
          limitedPoint: data.limitedPoint,
          cash: data.cash,
        })

        // 本番サイトでデータが返ってくる==ログイン状態
        setStatus(statusList.login)
      } else {
        // 本番サイトでデータが返ってきていない==未ログイン状態
        setStatus(statusList.nonLogin)
      }
    })()
  }, [getMemberInfo, searchParams])

  useEffect(() => {
    if (isLocal) {
      const dummyStatus = searchParams.get('status') || ''
      if ((Object.values(statusList) as string[]).includes(dummyStatus)) {
        setStatus(dummyStatus)
      }
    }
  }, [searchParams])

  useEffect(() => {
    console.log('ch', checkPattern)
  }, [checkPattern])

  const generateLoginElementId = (status: string): string => {
    if (status === statusList.login) {
      return 'login'
    } else if (status === statusList.nonMnoHolder) {
      return 'pitari-non-mno-holder'
    } else {
      return 'pitari-mno-holder'
    }
  }
  interface LoginGadgetElementProp {
    id: string
  }
  const LoginGadgetElement = ({ id }: LoginGadgetElementProp) => {
    return (
      <GadgetWrapper id={id}>
        <Gadget
          data-ratid={checkPattern?.appearRatId}
          data-ratevent="appear"
          data-ratparam="all"
        >
          <GadgetHeading>
            <GadgetName id="js-sp-name" rank={userData?.rank}>
              <a href="https://my.rakuten.co.jp/">
                <span>{userData?.username}</span>
              </a>
              さん
            </GadgetName>
            <GadgetTotalPoint>
              <AlphanumericEmp n="02">{numPoint}</AlphanumericEmp>
              ポイント
            </GadgetTotalPoint>
          </GadgetHeading>
          <GadgetBody bg="pink10">
            <GadgetPointCondition>ポイント全額払いの場合</GadgetPointCondition>
            {checkPattern?.point_area && (
              <GadgetPointArea>
                あと
                <GadgetPlusPoint>
                  <AlphanumericEmp n="02">{plusPoint}</AlphanumericEmp>
                  ポイント
                </GadgetPlusPoint>
                獲得で
              </GadgetPointArea>
            )}
            <GadgetMessage>
              {checkPattern?.img_type ? (
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/common/login/${checkPattern?.img_type}-sp-20240216.png`}
                    width={checkPattern?.spWidth}
                    height={checkPattern?.spHeight}
                  />
                  <img
                    src={`${assets}img/common/login/${checkPattern?.img_type}-pc-20240216.png`}
                    width={checkPattern?.pcWidth}
                    height={checkPattern?.pcHeight}
                    alt={checkPattern?.alt}
                    loading="lazy"
                  />
                </picture>
              ) : (
                ''
              )}
            </GadgetMessage>
            <GadgetMessageCap as="p">
              {checkPattern?.anotation === 'unlimited' &&
                '※ 公平なサービス提供または環境により速度低下する場合あり　※1ポイント1円としてご利用'}
              {checkPattern?.anotation === 'default' &&
                '※1ポイント1円としてご利用'}
            </GadgetMessageCap>
          </GadgetBody>
        </Gadget>
      </GadgetWrapper>
    )
  }
  const NoLoginGadgetElement = () => {
    return (
      <GadgetWrapper id="non-login">
        <Gadget
          data-ratid="zerotoku-logingadget-1_not-logged"
          data-ratevent="appear"
          data-ratparam="all"
        >
          <GadgetHeading>
            <GadgetBtn className={Utils['Mt-8']}>
              <a
                href="https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Ftips%2Fzerotoku%2F&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005"
                data-ratid="zerotoku-logingadget-1_pointcheck"
                data-ratevent="click"
                data-ratparam="all"
              >
                ログインしてポイントを確認する
              </a>
            </GadgetBtn>
          </GadgetHeading>
          <GadgetBody
            className={`${Utils['Mt-16']} ${Utils['Mb-8']} ${Utils['Align-center']}`}
          >
            <LinkNormal
              href="https://grp01.id.rakuten.co.jp/rms/nid/registfwd?service_id=rm005"
              data-ratid="zerotoku-logingadget-1_sign-up"
              data-ratevent="click"
              data-ratparam="all"
            >
              楽天会員登録をする
            </LinkNormal>
          </GadgetBody>
        </Gadget>
      </GadgetWrapper>
    )
  }

  return (
    <div className={className}>
      {status === statusList.nonLogin ? (
        <NoLoginGadgetElement />
      ) : (
        <LoginGadgetElement id={generateLoginElementId(status)} />
      )}
    </div>
  )
}
