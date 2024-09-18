import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtNormal } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { ButtonRegular } from '@components/atoms/Buttons'
import { LinkNormal } from '@components/atoms/Link'
import { mixins } from '@components/utils/Mixins'
import { FormList } from '@components/atoms/Formtemplate'

const CustomSystemContainer = styled(SystemContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 160px;
`
const CustomButtonRegular = styled(ButtonRegular)`
  width: 296px;
`
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: fit-content;
  margin-top: 32px;
  ${mixins.mq.MaxS} {
    width: 100%;
  }
  ${mixins.mq.MinL} {
    margin-top: 24px;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  ${ButtonRegular} {
    min-width: 224px;
    margin-left: 24px;
    ${mixins.mq.MaxM} {
      margin-top: 24px;
      margin-left: auto;
    }
  }
`
const GuideSimulationsmsoptout: NextPage = () => {
  const pagetitle =
    '「料金シミュレーションご回答者様へのSMS配信」の停止について'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="「料金シミュレーションご回答者様向けSMS」の配信停止の設定方法をご案内します。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <CustomSystemContainer>
          <Heading level="1" className={Utils['Mt-24']}>
            「料金シミュレーションご回答者様へのSMS配信」の停止について
          </Heading>
          <p className={Utils['Mt-32']}>
            料金シミュレーションをご回答いただいたお客様にSMSでおトクな情報をお送りしています。
            <br />
            配信停止をご希望の場合は、以下よりお手続きください。
          </p>
          <TxtCap as="ul" className={Utils['Mt-16']}>
            ※一度、配信停止をすると再開はできません
          </TxtCap>
          <FormList className={`${Utils['Mt-pc-16']} ${Utils['Mt-40']}`}>
            <div>
              <dt>SMS配信停止設定</dt>
              <dd>
                <TxtNormal>
                  料金シミュレーションに関するSMSの配信停止を希望しますか
                </TxtNormal>

                <FlexDiv>
                  <Form
                    action="https://form.rakuten.co.jp/ans/apply/40779"
                    name="enenForm"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="answers[40779_277024]"
                      value="768828"
                    />
                    <CustomButtonRegular type="submit">
                      配信を停止する
                    </CustomButtonRegular>
                  </Form>

                  <TxtCap as="ul">※ログイン画面に遷移します</TxtCap>
                </FlexDiv>
              </dd>
            </div>
          </FormList>
          <LinkNormal
            className={Utils['Mt-24']}
            href="https://network.mobile.rakuten.co.jp/?l-id=guide_simulation-sms-optout_top"
          >
            楽天モバイルトップ　＞
          </LinkNormal>
        </CustomSystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}

export default GuideSimulationsmsoptout
