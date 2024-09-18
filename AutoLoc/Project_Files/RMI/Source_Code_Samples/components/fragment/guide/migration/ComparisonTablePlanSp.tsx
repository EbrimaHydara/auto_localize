import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'

import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { Heading } from '@components/atoms/Heading'
import { UlOnly } from '@components/atoms/List'
import { Tooltip } from '@components/atoms/Tooltip'
import { fontRakutenSans } from '@styles/fonts'

const Wrapper = styled.div`
  > table {
    margin-top: 16px;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${props => props.theme.colors.darkBlue20};
    position: relative;
    th {
      color: ${props => props.theme.colors.lightBlack};
      background-color: ${props => props.theme.colors.pink10};
      vertical-align: middle;
      &:first-child {
        background-color: ${props => props.theme.colors.monotone93};
      }
    }
    td {
      vertical-align: top;
      background-color: ${props => props.theme.colors.pink10};
      &:first-child {
        background-color: ${props => props.theme.colors.white};
      }
    }
    th,
    td {
      width: 50%;
      padding: 16px;
      text-align: center;
      border: 1px solid #bfbfbf;
      > div {
        margin-top: 8px;
        &:first-child {
          margin-top: 0;
        }
      }
      p {
        display: inline;
      }
      b {
        font-weight: bold;
        font-size: 20px;
        > b {
          font-size: 45px;
          font-family: ${fontRakutenSans.style.fontFamily};
          font-weight: bold;
        }
      }
      span {
        font-size: 13px;
      }
      small {
        font-size: 12px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 52px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      background: url(/img/guide/migration/icon-arrow.png) 0 0 no-repeat;
      background-size: 18px;
    }
  }
`
const Price = styled.div`
  ul {
    display: flex;
    align-items: center;
    width: 414px;
    height: 80px;
    &:not(:last-child) {
      border-bottom: 1px dotted #676767;
    }
    ${mixins.mq.MaxM} {
      width: auto;
      height: auto;
      flex-flow: column;
    }
    li {
      &:first-child {
        width: 94px;
        font-size: 17px;
        color: #676767;
        span {
          font-size: 12px;
        }
      }
      &:not(:first-child) {
        margin-left: 24px;
      }
      ${mixins.mq.MaxM} {
        font-size: 12px;
        &:first-child {
          width: 100%;
        }
        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }
  }
`
const PricePacket = styled.ul`
  display: flex;
  width: 60%;
  margin: 0 auto;
  ${mixins.mq.MaxM} {
    width: 100%;
  }
  li {
    font-size: 20px;
    font-weight: bold;
    color: #676767;
    &:first-child {
      width: 94px;
    }
    p {
      font-weight: normal;
    }
    small {
      font-weight: normal;
      color: #333;
    }
    ${mixins.mq.MaxM} {
      font-size: 16px;
    }
  }
`
const HeadingCustom1 = styled.div`
  margin-top: 8px;
  display: inline-block;
  border-radius: 50px;
  padding: 4px 20px;
  background-color: ${props => props.theme.colors.white};
  line-height: 1.2;
  font-weight: bold;
  font-size: 13px;
  button {
    vertical-align: baseline;
    margin: 0;
  }
  > span > span {
    vertical-align: baseline;
  }
`
const HeadingCustom2 = styled(HeadingCustom1)`
  background-color: ${props => props.theme.colors.monotone93};
`

export const ComparisonTablePlanSp1 = () => {
  return (
    <>
      <Wrapper className={Utils['Disp-tb-sp']}>
        <Heading level="4" className={Utils['Mt-32']}>
          プラン料金
        </Heading>
        <table>
          <tr>
            <th>
              スーパーホーダイ
              <br />
              プラン
            </th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?220701"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>
                プランS
                <br />
                <b>2,980円</b>
                <br />
                （税込3,278円）<small>※5</small>
              </div>
              <div className={Utils['Mt-24']}>
                プランM
                <br />
                <b>3,980円</b>
                <br />
                （税込4,378円）<small>※5</small>
              </div>
              <div className={Utils['Mt-24']}>
                プランL
                <br />
                <b>5,980円</b>
                <br />
                （税込6,578円）<small>※5</small>
              </div>
              <div className={Utils['Mt-24']}>
                プランLL
                <br />
                <b>6,980円</b>
                <br />
                （税込7,678円）<small>※5</small>
              </div>
            </td>
            <td>
              <Price>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>0GB超過後</span>～3GB
                  </li>
                  <li className={Utils['Mb-8']}>
                    <TxtEmp02 as="b">980円</TxtEmp02>（税込1,078円）
                    <small>※5</small>
                  </li>
                </ul>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>3GB超過後</span>～20GB
                  </li>
                  <li className={Utils['Mb-8']}>
                    <TxtEmp02 as="b">1,980円</TxtEmp02>（税込2,178円）
                    <small>※5</small>
                  </li>
                </ul>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>20GB超過後～</span>
                    <TxtEmp02 as="b">無制限</TxtEmp02>
                    <small>※2</small>
                  </li>
                  <li>
                    <b>2,980円</b>（税込3,278円）<small>※5</small>
                  </li>
                  <li className={Utils['Mt-8']}>
                    楽天回線エリア外は最大1Mbpsで使い放題
                  </li>
                </ul>
              </Price>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          高速データ容量/月
        </Heading>
        <table>
          <tr>
            <th>
              スーパーホーダイ
              <br />
              プラン
            </th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?220701"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <PricePacket className={Utils['Mt-32']}>
                <li className={Utils['Align-left']}>プランS</li>
                <li>
                  <p>2GB</p>
                </li>
              </PricePacket>
              <PricePacket>
                <li className={Utils['Align-left']}>プランM</li>
                <li>
                  <p>6GB</p>
                </li>
              </PricePacket>
              <PricePacket>
                <li className={Utils['Align-left']}>プランL</li>
                <li>
                  <p>14GB</p>
                </li>
              </PricePacket>
              <PricePacket>
                <li className={Utils['Align-left']}>プランLL</li>
                <li>
                  <p>24GB</p>
                </li>
              </PricePacket>
              <ul className={Utils['Mt-24']}>
                <li>
                  ギガ使い切っても
                  <br />
                  1Mbpsで使い放題<small>※6</small>
                </li>
              </ul>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>
                楽天回線エリア{' '}
                <Tooltip id="楽天回線エリア">
                  楽天モバイル自社回線に接続するエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <b className="c-Txt_Emp-02">
                  高速通信で
                  <br />
                  無制限
                </b>
                <small>※2</small>
              </div>
              <HeadingCustom1>
                パートナー回線エリア{' '}
                <Tooltip id="パートナー回線エリア">
                  パートナー（au）回線にてご利用可能なエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <TxtEmp01 as="b">高速通信で5GB</TxtEmp01>
              </div>
              <div>
                5GB超過後は最大1Mbpsで使い放題<small>※6,7</small>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div>利用不可</div>
            </td>
            <td>
              <div>海外</div>
              <HeadingCustom1>
                パートナー回線エリア{' '}
                <Tooltip id="パートナー回線エリア">
                  パートナー（au）回線にてご利用可能なエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <TxtEmp01 as="b">高速通信で2GB</TxtEmp01>
              </div>
              <div>
                2GB超過後は最大128kbpsで使い放題<small>※8</small>
              </div>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          通話
        </Heading>
        <table>
          <tr>
            <th>
              スーパーホーダイ
              <br />
              プラン
            </th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?210401"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <HeadingCustom2>楽天でんわアプリ利用</HeadingCustom2>
              <div>
                <b>10分かけ放題</b>
                <small>※9</small>
              </div>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="b">かけ放題</TxtEmp02>
                <small>※1</small>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div className={Utils['Mt-48']}>
                国・地域別従量課金<small>※13</small>
              </div>
            </td>
            <td>
              <div>海外</div>
              <div>
                <small>海外※10 → 国内</small>
              </div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="p">かけ放題</TxtEmp02>
                <small>※3,11</small>
              </div>
              <div>
                <small>国内/海外 → 海外※10</small>
              </div>
              <div className={Utils['Mt-0']}>
                かけ放題980円/月<small>(不課税)※11,12</small>
              </div>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          SMS
        </Heading>
        <table>
          <tr>
            <th>
              スーパーホーダイ
              <br />
              プラン
            </th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?210401"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <div>
                <TxtEmp01 as="p">3円（税込3.3円）/70文字（全角）〜</TxtEmp01>
              </div>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="b">使い放題</TxtEmp02>
                <small>※4</small>
              </div>
              <UlOnly className={`${Utils['Mt-8']} ${Utils['Align-left']}`}>
                <li>Androidの場合：Rakuten Linkアプリ利用 使い放題</li>
                <li className={Utils['Mt-0']}>
                  iOSの場合：3円（税込3.3円）／70文字（全角）
                </li>
              </UlOnly>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div>海外 → 国内</div>
              <div>
                50円（不課税）/
                <br />
                70文字(全角) 〜 <small>※13</small>
              </div>
              <div className={Utils['Mt-32']}>海外 → 海外/国内</div>
              <div>
                100円（不課税）/通<small>※13</small>
              </div>
            </td>
            <td>
              <div>海外</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                海外<small>※10</small> → 国内
              </div>
              <div>
                <TxtEmp02 as="b">使い放題</TxtEmp02>
                <small>※11,14</small>
              </div>
              <div>
                <TxtCap as="p">
                  ※海外の対象国と地域以外：100円（不課税）／70文字（全角）。OS標準アプリ利用時、100円（不課税）／70文字（全角）。海外でご利用になる場合は、海外の対象国と地域からのみ利用可能
                </TxtCap>
              </div>
            </td>
          </tr>
        </table>
      </Wrapper>
    </>
  )
}

export const ComparisonTablePlanSp2 = () => {
  return (
    <>
      <Wrapper className={Utils['Disp-tb-sp']}>
        <Heading level="4" className={Utils['Mt-32']}>
          プラン料金
        </Heading>
        <table>
          <tr>
            <th>組み合わせプラン</th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?220701"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>
                3.1GBプラン
                <br />
                <b>1,600円</b>
                <br />
                （税込1,760円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                5GBプラン
                <br />
                <b>2,150円</b>
                <br />
                （税込2,365円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                10GBプラン
                <br />
                <b>2,960円</b>
                <br />
                （税込3,256円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                20GBプラン
                <br />
                <b>4,750円</b>
                <br />
                （税込5,225円）<small>※5,15</small>
              </div>
            </td>
            <td>
              <Price>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>0GB超過後</span>～3GB
                  </li>
                  <li className={Utils['Mb-8']}>
                    <TxtEmp02 as="b">980円</TxtEmp02>（税込1,078円）
                    <small>※5</small>
                  </li>
                </ul>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>3GB超過後</span>～20GB
                  </li>
                  <li className={Utils['Mb-8']}>
                    <TxtEmp02 as="b">1,980円</TxtEmp02>（税込2,178円）
                    <small>※5</small>
                  </li>
                </ul>
                <ul className={Utils['Mt-8']}>
                  <li>
                    <span>20GB超過後～</span>
                    <TxtEmp02 as="b">無制限</TxtEmp02>
                    <small>※2</small>
                  </li>
                  <li>
                    <b>2,980円</b>（税込3,278円）<small>※5</small>
                  </li>
                  <li className={Utils['Mt-8']}>
                    楽天回線エリア外は最大1Mbpsで使い放題
                  </li>
                </ul>
              </Price>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          高速データ容量/月
        </Heading>
        <table>
          <tr>
            <th>組み合わせプラン</th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?220701"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <div className={Utils['Mt-8']}>
                ※プラン名が1カ月あたりの高速データ容量です。
              </div>
              <div>
                <b>3.1GBプラン</b>
                <br />
                1,600円/月
                <br />
                （税込1,760円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                <b>5GBプラン</b>
                <br />
                2,150円
                <br />
                （税込2,365円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                <b>10GBプラン</b>
                <br />
                2,960円
                <br />
                （税込3,256円）<small>※5,15</small>
              </div>
              <div className={Utils['Mt-24']}>
                <b>20GBプラン</b>
                <br />
                4,750円
                <br />
                （税込5,225円）<small>※5,15</small>
              </div>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>
                楽天回線エリア{' '}
                <Tooltip id="楽天回線エリア">
                  楽天モバイル自社回線に接続するエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <TxtEmp02 as="b">
                  高速通信で
                  <br />
                  無制限
                </TxtEmp02>
                <small>※2</small>
              </div>
              <HeadingCustom1>
                パートナー回線エリア{' '}
                <Tooltip id="パートナー回線エリア">
                  パートナー（au）回線にてご利用可能なエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <TxtEmp01 as="b">高速通信で5GB</TxtEmp01>
              </div>
              <div>
                5GB超過後は最大1Mbpsで使い放題<small>※6,7</small>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div>利用不可</div>
            </td>
            <td>
              <div>海外</div>
              <HeadingCustom1>
                パートナー回線エリア{' '}
                <Tooltip id="パートナー回線エリア">
                  パートナー（au）回線にてご利用可能なエリアです
                </Tooltip>
              </HeadingCustom1>
              <div>
                <TxtEmp01 as="b">高速通信で2GB</TxtEmp01>
              </div>
              <div>
                2GB超過後は最大128kbpsで使い放題<small>※8</small>
              </div>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          通話
        </Heading>
        <table>
          <tr>
            <th>組み合わせプラン</th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?210401"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <HeadingCustom2>楽天でんわアプリ利用</HeadingCustom2>
              <div>
                <b>10分かけ放題</b>
                <small>※9,16</small>
              </div>
              <div>
                <b>850円/月</b>
              </div>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="b">かけ放題</TxtEmp02>
                <small>※1</small>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div className={Utils['Mt-48']}>
                国別従量課金<small>※13</small>
              </div>
            </td>
            <td>
              <div>海外</div>
              <div>
                <small>海外※10 → 国内</small>
              </div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="p">かけ放題</TxtEmp02>
                <small>※3,11</small>
              </div>
              <div>
                <small>国内/海外 → 海外※10</small>
              </div>
              <div className={Utils['Mt-0']}>
                (不課税)かけ放題980円/月<small>※11,12</small>
              </div>
            </td>
          </tr>
        </table>

        <Heading level="4" className={Utils['Mt-32']}>
          SMS
        </Heading>
        <table>
          <tr>
            <th>組み合わせプラン</th>
            <th>
              <img
                src="/img/guide/migration/logo-unlimit-sp.png?210401"
                alt=""
              />
            </th>
          </tr>
          <tr>
            <td>
              <div>国内</div>
              <div>
                <TxtEmp01 as="p">3円（税込3.3円）/70文字（全角）〜</TxtEmp01>
              </div>
            </td>
            <td>
              <div>国内</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                <TxtEmp02 as="b">使い放題</TxtEmp02>
                <small>※4</small>
              </div>
              <UlOnly className={`${Utils['Mt-8']} ${Utils['Align-left']}`}>
                <li>Androidの場合：Rakuten Linkアプリ利用 使い放題</li>
                <li className={Utils['Mt-0']}>
                  iOSの場合：3円（税込3.3円）／70文字（全角）
                </li>
              </UlOnly>
            </td>
          </tr>
          <tr>
            <td>
              <div>海外</div>
              <div>海外 → 国内</div>
              <div>
                ドコモ回線
                <br />
                50円（不課税） /70文字(全角) 〜 <small>※13</small>
                <br />
                au回線 100円（不課税） /通(全角) 〜 <small>※17</small>
              </div>
              <div className={Utils['Mt-32']}>海外 → 海外/国内</div>
              <div>
                100円（不課税）/通<small>※13</small>
              </div>
            </td>
            <td>
              <div>海外</div>
              <HeadingCustom1>Rakuten Linkアプリ利用</HeadingCustom1>
              <div>
                海外<small>※10</small> → 国内
              </div>
              <div>
                <TxtEmp02 as="b">使い放題</TxtEmp02>
                <small>※11,14</small>
              </div>
              <div>
                <TxtCap as="p">
                  ※海外の対象国と地域以外：100円（不課税）／70文字（全角）。OS標準アプリ利用時、100円（不課税）／70文字（全角）。海外でご利用になる場合は、海外の対象国と地域からのみ利用可能
                </TxtCap>
              </div>
            </td>
          </tr>
        </table>
      </Wrapper>
    </>
  )
}
