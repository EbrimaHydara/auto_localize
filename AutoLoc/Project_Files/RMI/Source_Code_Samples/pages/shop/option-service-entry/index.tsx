import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { SystemContainer, SystemWrapper } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'
import { TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import React from 'react'
import { FormListRequired } from '@components/atoms/Formtemplate'
import { ButtonRadioNoborder } from '@components/atoms/ButtonRadioNoborder'
import { CampaignRule2092 } from '@components/include/campaign/rules/2023/CampaignRule2092'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'

const NotesWrap = styled.div`
  margin: 32px calc(50% - 50vw) 0;
  padding: 16px calc(50vw - 50%) 24px;
  width: 100vw;
  background: #d9d9d9;
`
const ShopOptionserviceentry: NextPage = () => {
  const pagetitle =
    '【ショップ限定】オプションサービスまとめて申し込みキャンペーン（エントリー）'
  const description = ''

  return (
    <>
      <CustomHead
        directories={[{ path: '/shop/', label: 'ショップ（店舗）' }]}
        description={description}
        pagetitle={pagetitle}
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader />
        <SystemContainer>
          <Heading
            level="1"
            className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
          >
            【ショップ限定】
            <br />
            オプションサービスまとめて申し込みキャンペーン（エントリー）
          </Heading>
          <TxtEmp02
            as="p"
            className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
          >
            本キャンペーンは2024年2月29日23時59分をもちまして終了いたしました。
            <br />
            このページに掲載されている情報は、キャンペーン終了時点のものです。
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-24']}>
            1つ選んでエントリーする<FormListRequired>【必須】</FormListRequired>
          </TxtEmp01>

          <div className={Utils['Mt-16']}>
            <ButtonRadioNoborder
              select={[
                {
                  inputName: 'option_service',
                  name: 'option_service',
                  text: 'ライトパック：「故障紛失保証 with AppleCare Services & iCloud+」または「スマホ交換保証プラス」または「持ち込みスマホあんしん保証」と「ノートン™ モバイル セキュリティ」',
                  value: '755442',
                  disabled: true,
                },
                {
                  inputName: 'option_service',
                  name: 'option_service',
                  text: 'スタンダードパック（A）：「ノートン™ モバイル セキュリティ」と「15分（標準）通話かけ放題」',
                  value: '755440',
                  className: `${Utils['Mt-16']}`,
                  disabled: true,
                },
                {
                  inputName: 'option_service',
                  name: 'option_service',
                  text: 'スタンダードパック（B）：「故障紛失保証 with AppleCare Services & iCloud+」または「スマホ交換保証プラス」または「持ち込みスマホあんしん保証」と「ノートン™ モバイル セキュリティ」と「15分（標準）通話かけ放題」',
                  value: '755443',
                  className: `${Utils['Mt-16']}`,
                  disabled: true,
                },
              ]}
            />
          </div>

          <NotesWrap>
            <Heading level="4" as="h2" className={Utils['Align-center']}>
              注意事項
            </Heading>
            <TxtSize as="ul" size="s" className={Utils['Mt-16']}>
              <li>
                ・選択いただくセットとお申し込みいただくセットが同一でないとキャンペーンの対象になりません。必ず正しいセット内容を店舗スタッフにお伝えください
              </li>
              <li>
                ・再エントリーをすることはできません。必ず選択いただくセットに間違いがないことをご確認の上、エントリーをお願いいたします
              </li>
              <li>
                ・エントリー前にいずれかのパックに該当するオプションサービスをお申し込み＆利用開始いただいている場合は対象外です
                <br />
                （お申し込み前にエントリーが無かった場合は対象外です）
              </li>
              <li>
                ・オプションをお申し込みいただく楽天IDと本エントリーで利用する楽天IDが同一でない場合は対象外です
              </li>
              <li>
                ・ポイント付与期間は、エントリーいただいた月を1カ月目として10カ月目までです。ただし条件達成が確認出来なかった月に関しては付与の対象外です。条件の詳細はルールをご確認ください
              </li>
              <li>
                ・オプションサービスを解約された場合は対象外となります。ただし、再契約された場合は再度対象になります
              </li>
              <li>
                ・毎月月末日時点でエントリーいただいたパックに含まれるオプションサービスを全てご契約中の方に、ポイント付与をさせていただきます（エントリーいただいた月を1カ月目として10カ月目まで毎月のご契約状況に応じてポイント付与をさせていただきます）
              </li>
            </TxtSize>
          </NotesWrap>

          <div className={Utils['My-64']}>
            <Heading level="2" id="campaign-rule2067">
              【ショップ限定】オプションサービスまとめて申し込みキャンペーン
            </Heading>
            <TxtEmp02
              as="p"
              className={`${Utils['Align-center']} ${Utils['Mt-16']}`}
            >
              本キャンペーンは2024年2月29日23時59分をもちまして終了いたしました。
              <br />
              このページに掲載されている情報は、キャンペーン終了時点のものです。
            </TxtEmp02>
            <CampaignRule2092 className={Utils['Mt-32']} />
          </div>
        </SystemContainer>
      </SystemWrapper>

      <GlobalFooter copyrightSimple={true} />
    </>
  )
}

export default ShopOptionserviceentry
