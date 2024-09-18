import type { NextPage } from 'next'
import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtCap } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'
import { CustomHead } from '@components/utils/CustomHead'

const ServiceRakutenlinkTerms: NextPage = () => {
  const pagetitle = '個人情報保護方針'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    { path: '/service/rakuten-link/', label: 'Rakuten Link' },
  ]
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        noindex={true}
      />
      <SystemWrapper>
        <SystemContainer>
          <Heading level="1" className={Utils['Mt-48']}>
            個人情報保護方針
          </Heading>
          <p className={Utils['Mt-32']}>
            お客様の個人情報を含む利用者情報の取扱いについて、以下規約に基づいてプライバシーポリシーを定めます。以下のリンクより詳細をご確認ください。
          </p>
          <div className={Utils['Mt-40']}>
            <LinkIconAfter
              href="https://privacy.rakuten.co.jp/"
              target="_blank"
            >
              楽天株式会社 個人情報保護方針
              <IconNewTabLine />
            </LinkIconAfter>
          </div>
          <div className={Utils['Mt-16']}>
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/privacy/"
              target="_blank"
            >
              楽天モバイル株式会社 個人情報保護方針
              <IconNewTabLine />
            </LinkIconAfter>
          </div>
          <div className={Utils['Mt-16']}>
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/privacy/rakuten-link-app/index.html"
              target="_blank"
            >
              「Rakuten Link」に関する個人情報の取扱いについて
              <IconNewTabLine />
            </LinkIconAfter>
          </div>
          <div className={Utils['Mt-16']}>
            <LinkIconAfter
              href="https://corp.mobile.rakuten.co.jp/guide/privacy/my-rakuten-mobile-app/index.html"
              target="_blank"
            >
              「my 楽天モバイル」に関する個人情報の取扱いについて
              <IconNewTabLine />
            </LinkIconAfter>
          </div>
          <TxtCap
            className={`${Utils['Align-center']} ${Utils['Mt-40']}`}
            as="p"
          >
            &copy; Rakuten, Inc.
          </TxtCap>
        </SystemContainer>
      </SystemWrapper>
    </>
  )
}

export default ServiceRakutenlinkTerms
