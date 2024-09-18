import styled from 'styled-components'
import { Heading } from '@components/atoms/Heading'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconChevronRight } from '@components/icons'

import Utils from '@styles/Utils.module.scss'

const SupportContainer = styled.div`
  padding: 24px 0;
`

const SupportLists = styled.ul`
  margin-top: 24px;
`

const SupportListItem = styled.li`
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`

const SupportListItemTitle = styled.p`
  padding-left: 16px;
  text-indent: -16px;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    margin-top: -4px;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    border-radius: 50%;
    background-color: #8f8f8f;
  }
`

const lid: string = 'include_support_guide'
const lid2: string = 'include_support_product'

export const ProductSupport = () => {
  return (
    <>
      <SupportContainer>
        <Heading level="3">製品購入についてのサポート情報</Heading>
        <SupportLists>
          <SupportListItem>
            <SupportListItemTitle>
              機種変更方法、データ移行やバックアップ手順をご案内
            </SupportListItemTitle>
            <p className={Utils['Mt-8']}>
              <LinkIconAfter
                href={`/guide/product/device-upgrade/?l-id=${lid}_device-upgrade`}
              >
                楽天モバイルでの機種変更方法
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </SupportListItem>
          <SupportListItem>
            <SupportListItemTitle>
              製品を安全にご使用いただくためのご案内
            </SupportListItemTitle>
            <p className={Utils['Mt-8']}>
              <LinkIconAfter
                href={`/guide/product-safety/?l-id=${lid}_product-safety`}
              >
                スマートフォン、周辺機器などの使用に関するご注意
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </SupportListItem>
          <SupportListItem>
            <SupportListItemTitle>
              他社から乗り換えの場合に現在お使いの電話番号をそのままお使いいただける方法をご案内
            </SupportListItemTitle>
            <p className={Utils['Mt-8']}>
              <LinkIconAfter href={`/guide/mnp/?l-id=${lid}_mnp`}>
                他社から乗り換え（MNP）
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </SupportListItem>
          <SupportListItem>
            <SupportListItemTitle>
              楽天モバイルで取り扱っている製品の他社回線での対応状況をご案内
            </SupportListItemTitle>
            <p className={Utils['Mt-8']}>
              <LinkIconAfter
                href={`/product/compatible-band/?l-id=${lid2}_compatible-band`}
              >
                取り扱い製品の他社回線対応状況一覧
                <IconChevronRight />
              </LinkIconAfter>
            </p>
          </SupportListItem>
        </SupportLists>
      </SupportContainer>
    </>
  )
}

export default ProductSupport
