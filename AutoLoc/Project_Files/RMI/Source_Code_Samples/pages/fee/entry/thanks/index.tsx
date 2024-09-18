import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { CommonNavFamilyYouthKodomo } from '@components/include/common/NavFamilyYouthKodomo'

const imgPath = `${assets}img/fee/entry/thanks/`

const KvArea = styled.div`
  background-color: #fffef1;
  padding: 16px 0;
  text-align: center;
  ${mixins.mq.MinL} {
    padding: 24px;
    img {
      width: 550px;
      height: 188px;
    }
  }
`

const CustomHeading = styled(Heading)`
  font-size: 23px;
  ${mixins.mq.MinL} {
    font-size: 28px;
  }
`

const CustomHeadingMini = styled(Heading)`
  font-size: 20px;
  ${mixins.mq.MinL} {
    font-size: 24px;
  }
`

const Cta2col = styled.div`
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`

const FeeEntryThanks: NextPage = () => {
  const pagetitle = '最強青春プログラム・最強こどもプログラムエントリー完了'
  const directories = [{ path: '/fee/entry/', label: '' }]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="最強青春プログラム・最強こどもプログラムエントリー完了"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader />
        <KvArea>
          <SystemContainer>
            <CustomHeading level="2">
              最強青春プログラム・
              <br className={Utils['Show-oxx']} />
              最強こどもプログラムエントリー完了
            </CustomHeading>
            <div
              className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              <img src={`${imgPath}kv.png`} width="343" height="127" alt="" />
            </div>
            <p
              className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              楽天モバイルのお申し込みがお済みでない方は、お手続きをお願いいたします。
            </p>
          </SystemContainer>
        </KvArea>
        <SystemContainer className={Utils['Pb-80']}>
          <CustomHeadingMini
            className={`${Utils['Pt-pc-48']} ${Utils['Pt-24']} ${Utils['Align-center']}`}
            level="3"
          >
            お申し込みはこちら
          </CustomHeadingMini>
          <Cta2col
            className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']} ${Utils['Align-center']}`}
          >
            <ButtonPrimaryLarge
              as="a"
              href="/guide/application?lid-r=fee_entry_thanks_guide_application"
            >
              乗り換え（MNP）お申し込み
            </ButtonPrimaryLarge>
            <ButtonSecondaryLarge
              as="a"
              href="/shop/?l-id=fee_entry_thanks_shop"
            >
              お近くのショップを探す・来店予約
            </ButtonSecondaryLarge>
          </Cta2col>
          <CommonNavFamilyYouthKodomo
            showElements={{ second: ['youth', 'kodomo'] }}
            youthParam="fee_entry_thanks_fee_youth"
            kidsParam="fee_entry_thanks_fee_kids"
            className={Utils['Mt-40']}
          />
          <div
            className={`${Utils['Pt-pc-40']} ${Utils['Pt-24']} ${Utils['Align-center']}`}
          >
            <LinkIconAfter
              href="https://oubo.rakuten.co.jp/list/"
              target="_blank"
            >
              キャンペーンエントリー履歴はこちら
              <IconNewTabLine />
            </LinkIconAfter>
          </div>
        </SystemContainer>
      </SystemWrapper>
    </>
  )
}

export default FeeEntryThanks
