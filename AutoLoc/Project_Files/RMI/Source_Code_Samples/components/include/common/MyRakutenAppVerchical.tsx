import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import { ButtonRegular } from '@components/atoms/Buttons'
import { IconChevronRight } from '@components/icons'
import { TxtEmp01, TxtSize } from '@components/atoms/Txt'

const Wrap = styled.div`
  .store {
    display: flex;
    justify-content: center;
    column-gap: 8px;
    ${mixins.mq.MinL} {
      margin-top: 8px;
    }
  }
`
const IconRmbApp = styled.img`
  aspect-ratio: 1/1;
`

type Props = {
  className?: string
  lazy?: boolean
  btnLid: string
  appRat: string[]
  webRmRat: string
  subTxt?: string
  iconSize?: string
}

export const MyRakutenAppVerchical = ({
  className,
  lazy,
  btnLid,
  appRat,
  webRmRat,
  subTxt,
  iconSize,
}: Props) => {
  return (
    <Wrap className={Utils['Align-center']}>
      <div>
        <IconRmbApp
          src={`${assets}img//common/icon-rmb-app.png`}
          width={iconSize ? iconSize : '64'}
          height={iconSize ? iconSize : '64'}
          alt=""
          loading={lazy ? 'lazy' : 'eager'}
        />
      </div>
      <Heading level="4" as="h3" className={Utils['Mt-16']}>
        my 楽天モバイル
      </Heading>
      {subTxt && (
        <TxtEmp01 as="div">
          <TxtSize size="s">{subTxt}</TxtSize>
        </TxtEmp01>
      )}
      <p className={Utils['Mt-8']}>
        各種お手続き、料金やデータ容量など、手軽に確認できる公式アプリです。
      </p>
      <div className={`store ${Utils['Mt-16']}`}>
        <div>
          <LinkNormal
            href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.ecare"
            data-ratid={appRat[0]}
            data-ratevent="click"
            data-ratparam="all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${assets}img/common/btn-googleplay.png`}
              width="149"
              height="44"
              alt="Google Play"
              loading={lazy ? 'lazy' : 'eager'}
            />
          </LinkNormal>
        </div>
        <div>
          <LinkNormal
            href="https://apps.apple.com/jp/app/myrakutenmobile/id1473535769"
            data-ratid={appRat[1]}
            data-ratevent="click"
            data-ratparam="all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${assets}img/common/btn-appstore.png`}
              width="149"
              height="44"
              alt="Apple Store"
              loading={lazy ? 'lazy' : 'eager'}
            />
          </LinkNormal>
        </div>
      </div>
      <div className={Utils['Mt-24']}>
        <ButtonRegular href={`/guide/my-rakuten-mobile/?l-id=${btnLid}`} as="a">
          my 楽天モバイルとは
        </ButtonRegular>
      </div>
      <div className={Utils['Mt-24']}>
        <LinkIconAfter
          href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile"
          data-ratid={webRmRat}
          data-ratevent="click"
          data-ratparam="all"
        >
          Webで「my 楽天モバイル」を使う
          <IconChevronRight />
        </LinkIconAfter>
      </div>
    </Wrap>
  )
}
