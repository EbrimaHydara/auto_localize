import type { NextPage } from 'next'
import { assets } from '@components/utils/assets'
import { useState, useEffect } from 'react'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { TxtNormal } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import styled from 'styled-components'
import { CustomHead } from '@components/utils/CustomHead'

const CustomGlobalFooter = styled(GlobalFooter)`
  position: fixed;
  width: 100%;
  bottom: 0;
`
const BlockNotificationList = styled.dl`
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  > dt {
    margin-right: 8px;
    white-space: nowrap;
  }
`

const ServiceBlockNotfication: NextPage = () => {
  const pagetitle = 'アクセスを制限しました'
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [txtUrl, setTxtUrl] = useState('')
  const [txtCategory, setTxtCategory] = useState('')

  useEffect(() => {
    const search = window.location.search.split('&')
    const len = search.length

    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const urlArr = search[i].split('url=')
        const categoryArr = search[i].split('category=')

        if (urlArr.length > 1) {
          let txtUrl = decodeURIComponent(urlArr[1])
          if (txtUrl.length > 80) {
            txtUrl = txtUrl.slice(0, 79) + '…'
          }
          setTxtUrl(txtUrl)
        }

        if (categoryArr.length > 1) {
          const txtCategory = decodeURIComponent(categoryArr[1])
          setTxtCategory(txtCategory)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (txtUrl.length > 1) {
      setUrl(txtUrl)
    }
  }, [txtUrl])

  useEffect(() => {
    if (txtCategory.length > 1) {
      setCategory(txtCategory)
    }
  }, [txtCategory])

  return (
    <>
      <CustomHead pagetitle={pagetitle} noindex={true} />
      <SystemWrapper>
        <GlobalSimpleHeader isNoLink={true} />
        <SystemContainer
          className={Utils['Align-center']}
          style={{ maxWidth: '486px', margin: 'auto' }}
        >
          <Heading
            level="4"
            className={`${Utils['Align-center']} ${Utils['Pt-32']} ${Utils['Pb-16']}`}
            as="h1"
          >
            アクセスを制限しました
          </Heading>
          <TxtNormal as="p" className={`${Utils['Align-center']}`}>
            このサイトにアクセスするには
            <br />
            保護者に相談して許可をもらってください
          </TxtNormal>
          <div className={`${Utils['Align-left']} ${Utils['Mt-24']}`}>
            {url && (
              <BlockNotificationList id="urlWrap">
                <dt>制限されたURL:</dt>
                <dd id="url">{url}</dd>
              </BlockNotificationList>
            )}
            {category && (
              <BlockNotificationList
                id="categoryWrap"
                className={Utils['Mt-8']}
              >
                <dt>カテゴリ:</dt>
                <dd id="category">{category}</dd>
              </BlockNotificationList>
            )}
          </div>
          <div className={Utils['Mt-24']}>
            <img
              src={`${assets}img/service/anshin-control/block-notification/img-02.png`}
              width="160px"
              alt=""
            />
          </div>
        </SystemContainer>
      </SystemWrapper>

      <CustomGlobalFooter breadcrumbsItem={[]} copyrightSimple />
    </>
  )
}

export default ServiceBlockNotfication
