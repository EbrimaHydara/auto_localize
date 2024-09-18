import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import axios from 'axios'
export const PoikakuLpBnr = () => {
  const theme = useContext(ThemeContext)

  const [isLoginState, updateIsLoginState] = useState<boolean>(false)
  const [useApiSate] = useState<boolean>(true) // for prod turn true
  const getMemberInfo = async () => {
    try {
      // 本番用エンドポイント
      const userDataUrl =
        'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519'
      const userData = await axios({
        method: 'get',
        url: userDataUrl,
        withCredentials: true,
      })
      return userData.data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (!useApiSate) {
        const param = window.location.search
        if (param.indexOf('login') > -1) {
          console.log(param.indexOf('login') > -1, 'urlにloginの文字列あり')
          updateIsLoginState(true)
        }
      } else {
        const data = await getMemberInfo()
        if (data) {
          updateIsLoginState(true)
        }
      }
    })()
  }, [useApiSate])

  return (
    <div>
      {isLoginState ? (
        <div className="i-Poikaku-lp-bnr">
          <a href="/tips/point/?l-id=pointgadget_include_tips_point">
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/bnr/bnr-poikaku-343-108-230704.png`}
                width="686"
              />
              <img
                src={`${assets}img/bnr/bnr-poikaku-1032-160-230704.png`}
                width="2064"
                height="320"
                alt="楽天モバイルを使うだけで...楽天ポイントどのくらい貯まる!?いますぐ確認する"
              />
            </picture>
          </a>
        </div>
      ) : (
        <div className="i-Poikaku-lp-bnr-nonlogin">
          <a href="https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Ftips%2Fpoint%2F%3Fl-id%3Dpointgadget-none_include_tips_point&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005">
            <picture>
              <source
                media={`(max-width: ${theme.max.m})`}
                srcSet={`${assets}img/bnr/bnr-poikaku-nonlogin-343-108-230704.png`}
                width="686"
              />
              <img
                src={`${assets}img/bnr/bnr-poikaku-nonlogin-1032-160-230704.png`}
                width="2064"
                height="320"
                alt="楽天モバイルを使うだけで...楽天ポイントどのくらい貯まる!?ログインして確認する"
              />
            </picture>
          </a>
        </div>
      )}
    </div>
  )
}
