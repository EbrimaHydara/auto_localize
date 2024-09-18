import React, { useCallback } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { AccordionList } from '@components/atoms/AccordionList'
import { ListDisc } from '@components/atoms/List'
import { TradeinItemModal } from '@components/include/service/tradein/TradeinItemModal'
import { LinkNormal } from '@components/atoms/Link'
import { anchorCallback } from '@components/utils/anchorCallback'

const ImgUl = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${mixins.mq.MaxM} {
    margin-top: 24px;
    grid-template-columns: repeat(1, 1fr);
  }
`

type Props = {
  className?: string
}

export const TradeinGuide: React.FC<Props> = ({ className }) => {
  const imgpath = `${assets}img/service/tradein/`

  type modals = {
    id?: string
    title: string
    img: string
  }

  const modalItems1 = [
    {
      title: '例：打痕（軽度）',
      img: `${imgpath}img_asmt_01-230414.png`,
    },
    {
      title: '例：製品本体の傷（軽度）',
      img: `${imgpath}img_asmt_02-230414.png`,
    },
    {
      title: '例：画面の傷（軽度）',
      img: `${imgpath}img_asmt_03-230414.png`,
    },
    {
      title: '例：へこみ（軽度）',
      img: `${imgpath}img_asmt_04-230414.png`,
    },
    {
      title: '例：ケーブル差込口付近の傷',
      img: `${imgpath}img_asmt_05-230414.png`,
    },
  ]
  const modalItems2 = [
    {
      title: '例：画面の割れ',
      img: `${imgpath}img_asmt_06.png`,
      id: 'crack',
    },
    {
      title: '例：画面の傷（深さがある）',
      img: `${imgpath}img_asmt_07.png`,
    },
    {
      title: '例：画面の傷（複数）',
      img: `${imgpath}img_asmt_08.png`,
    },
    {
      title: '例：緑に変色（焼け）',
      img: `${imgpath}img_asmt_09.png`,
    },
    {
      title: '例：画面上の変色（焼け）',
      img: `${imgpath}img_asmt_10.png`,
    },
    {
      title: '例：液晶に線',
      img: `${imgpath}img_asmt_11.png`,
    },
    {
      title: '例：ドット抜け',
      img: `${imgpath}img_asmt_12.png`,
    },
    {
      title: '例：液漏れ',
      img: `${imgpath}img_asmt_2_8-240229.png`,
    },
  ]
  const modalItems3 = [
    {
      title: '例：外装の傷（重度）',
      img: `${imgpath}img_asmt_13.png`,
    },
    {
      title: '例：打痕（重度）',
      img: `${imgpath}img_asmt_14.png`,
    },
    {
      title: '例：背面ガラスの割れ',
      img: `${imgpath}img_asmt_15.png`,
    },
    {
      title: '例：反り',
      img: `${imgpath}img_asmt_16.png`,
    },
    {
      title: '例：膨張による歪み',
      img: `${imgpath}img_asmt_17.png`,
    },
    {
      title: '例：カメラレンズの傷、割れ',
      img: `${imgpath}img_asmt_18.png`,
    },
  ]

  const ImgsList = useCallback((list: modals[]) => {
    return (
      <ImgUl>
        {list.map((item: modals, index) => {
          return (
            <TradeinItemModal
              title={item.title}
              img={item.img}
              key={index}
              id={item.id}
            />
          )
        })}
      </ImgUl>
    )
  }, [])
  return (
    <div className={className}>
      <AccordionList text={'良品'} isOpened={false}>
        <p>使用感が少なく、傷や打痕が軽度であるもの。</p>
        <TxtCap as="p" className={Utils['Mt-8']}>
          <TxtEmp02>
            ※軽度な傷であっても複数ある場合には、画面損傷品または外装損傷・機能不具合品になることがあります。
          </TxtEmp02>
        </TxtCap>
        {ImgsList(modalItems1)}
      </AccordionList>
      <AccordionList text={'画面損傷品'} isOpened={false}>
        <p>画面割れ・画面の焼け・画面の劣化・ドット抜け・液漏れがあるもの。</p>
        {ImgsList(modalItems2)}

        <Heading level="4" className={Utils['Mt-40']}>
          査定基準の詳細
        </Heading>
        <ListDisc
          className={Utils['Mt-8']}
          text={[
            {
              text: (
                <span>
                  画面に割れ、ヒビがある
                  <br />
                  <TxtCap>
                    ※
                    <LinkNormal
                      href="#crack"
                      onClick={e => anchorCallback(e, 'crack')}
                    >
                      画像例（画面の割れ）
                    </LinkNormal>
                    より目立たない状態でも、「割れ」の場合は画面損傷となる
                  </TxtCap>
                </span>
              ),
            },
            {
              text: (
                <span>
                  画面に良品の範囲を超える状態の傷がある
                  <br />
                  <TxtCap>
                    ※爪で引っかかる程度の深さの傷の場合は画面損傷となる
                    <br />
                    ※小さい傷でも複数箇所、広範囲の場合は画面損傷となる
                  </TxtCap>
                </span>
              ),
            },
            {
              text: '縦線、焼き付き、明らかな変色、ドット抜け、液漏れがある',
            },
            {
              text: 'タッチパネルが正常に機能しない',
            },
          ]}
        />
        <Heading level="4" className={Utils['Mt-40']}>
          ドット抜けを発見するポイント
        </Heading>
        <ListDisc
          className={Utils['Mt-8']}
          text={[
            {
              text: '画面の明るさを最大に設定し、真っ白な背景画面で確認',
            },
            {
              text: '蛍光灯や背景が画面に映り込むのを防ぎながら確認',
            },
            {
              text: '本体を左右上下に傾けたり、画面を上下にスライドし、同じ箇所に変わらず白い点がないかを確認',
            },
          ]}
        />
      </AccordionList>
      <AccordionList text={'外装損傷・機能不具合品'} isOpened={false}>
        <p>
          良品の範囲を超える傷・打痕・変色、カメラ等に機能不具合があるもの。
        </p>
        {ImgsList(modalItems3)}

        <Heading level="4" className={Utils['Mt-40']}>
          査定基準の詳細
        </Heading>
        <ListDisc
          className={Utils['Mt-8']}
          text={[
            {
              text: '良品範囲を超える傷や打痕がある',
            },
            {
              text: '外装に歪曲、割れ、欠け、ヒビ、変色がある',
            },
            {
              text: 'カバー跡、ホールドリング跡、シール跡、刻印などがある',
            },
            {
              text: 'カメラ（Face IDを含む）、ボタン、バイブレーション、通信系統（Wi-Fi、Bluetooth、音声通話）が正常に機能しない',
            },
            {
              text: 'カメラレンズに傷、損傷がある',
            },
            {
              text: '画面に浮きがある、または本体から外れている',
            },
            {
              text: 'SIMトレイなどの付属品が欠損している',
            },
          ]}
        />
      </AccordionList>
      <AccordionList text={'下取り不可製品'} isOpened={false}>
        <p>
          下記に該当する製品は下取り不可となるため、査定価格は0円、下取り不成立とし、ご送付いただいた製品は返送いたします。
        </p>
        <ListDisc
          className={Utils['Mt-24']}
          text={[
            {
              text: '下取り対象外の製品',
            },
            {
              text: '製品の電源をオンにし、電源を入れたままの状態にできない製品',
            },
            {
              text: '各種ロック（スクリーン、 アクティベーション、おサイフケータイを含む）の解除が行われていない製品',
            },
            {
              text: '製品を探す機能が有効化されたままの製品',
            },
            {
              text: '改造品、盗難紛失品、およびネットワーク利用制限該当品など',
            },
          ]}
        />
      </AccordionList>
    </div>
  )
}
