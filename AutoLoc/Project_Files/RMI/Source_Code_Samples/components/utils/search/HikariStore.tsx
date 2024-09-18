import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
export interface ApiResult {
  query?: string
  current_category: string
  related_words_count?: number
  matching_result?: number
  related_words: {
    keyword: string
  }[]
  quick_links?: {
    title: string
    url: string
    description: string
    img: string
    categories: string[]
  }[]
  popular_words: {
    input_text: string
  }[]
  recommended_items_categories: string[]
  recommend_contents?: {
    img: string
    title: string
  }[]
  items_count?: number
  contents_count?: number
  items?: {
    category: string
    rank: number
    title: string
    url: string
    description: string
    img: string
  }[]
  contents?: {
    title: string
    url: string
    img: string
  }[]
  related_contents_categories?: string[]
  results: {
    title: string
    url: string
    description: string
    categories: string[]
  }[]
  response_text: string
}

const SEARCH_SERVER_URL =
  //  'https://gateway-api.global.rakuten.com/bot/deepqa-v2-stg-for-integration/v2/mno-hikari/query' //hikari STG
  'https://gateway-api.global.rakuten.com/bot/deepqa-knowledge-discovery/v2/mno-hikari/query' //hikari PROD
const RELATED_WORDS_URL =
  //  'https://deepqa-smart-input-stg-8080-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno-hikari/smart-input' //hikari STG
  'https://gateway-api.global.rakuten.com/bot/deepqa-smart-input-prod/mno-hikari/smart-input' //hikari PROD
const ANALYSIS_SERVER_URL =
  'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno_hikari/user_journey/send-data' //hikari STG PRD共通
const HIGH_FREQUENCY_SERVER_URL =
  //  'https://deepqa-analytics-stg-8000-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno-hikari/high-frequency-queries' //hikari STG
  'https://gateway-api.global.rakuten.com/bot/deepqa-analytics/mno-hikari/high-frequency-queries' //hikari PROD
const RECOMMEND_ITEM_URL =
   'https://gateway-api.global.rakuten.com/bot/deepqa-smart-ad/mno-hikari/smart-ads' //hikari PROD
  // 'https://deepqa-smart-ad-stg-8000-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno-hikari/smart-ads' //hikari STG
const SMART_INPUT_URL =
  'https://gateway-api.global.rakuten.com/bot/deepqa-smart-input-prod/search'
const apiRelatedWordsConfig = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4',
    'Content-Type': 'application/json',
  },
}
const apiAnalysisConfig = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4',
    'Content-Type': 'application/json',
  },
  contentType: 'application/json',
}
const apiHighFrequencyConfig = {
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZWVwcWFfYW5hbHl0aWNzX2p3dF9wcm9kIn0.RH70hI4OYpE0gRsZU4BOYztUz1o_qYBiL_pYXkbTcc0',
    'Content-Type': 'application/json',
  },
}
const apiSmartInputConfig = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4',
    'Content-Type': 'application/json',
  },
}

type Setter = (data: ApiResult) => void
export type SendAnalysisProps = {
  name: string
  data: {
    input_text?: string
    is_smart_input?: boolean
    answer_items?: { title: string; url: string; categories: string[] }[]
    inquiry_to_deepqa?: string
    inquiry_to_suggestion?: string
    selected_suggestion_item?: number | null
    suggestion_items?: { text: string }[]
    scope?: 'mno_cs' | 'mno_whole_site' | 'whole_site'
    from_related_word?: boolean
    from_suggestion?: boolean
    sent_from_deepqa?: boolean
    is_smart_ad?: boolean
    url?: string
    type?: 'solved' | 'unsolved'
    referrer?: string
  }
  session_id: string
  ua: string
}
type SmartInputOption = {
  use_input_suggestions?: boolean
  limit?: number
  categories?: string[]
}
const actions = {
  searchApi(query: string, categories: string[], setter: Setter) {
    const params: { [key: string]: number | string | string[] } = {}
    params.count = 400
    params.natural_language_query = query
    params.categories = categories
    axios
      .post(`${SEARCH_SERVER_URL}`, params, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => {
        setter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  relatedWordsApi(
    query: string,
    setter: Setter | Dispatch<SetStateAction<{ text: string }[]>>,
    option?: SmartInputOption,
  ) {
    let params: { [key: string]: number | string | string[] | boolean } = {}
    params.scope = 'mno_whole_site'
    params.related_words_count = 3
    params.quick_links_count = 3
    params.query = query
    if (option) params = { ...params, ...option }
    axios
      .post(`${RELATED_WORDS_URL}`, params, apiRelatedWordsConfig)
      .then(res => {
        setter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  recommendItemApi(query: string, setter: Setter) {
    const params: { [key: string]: number | string | string[] } = {}
    params.query = query
    params.recommended_items_categories = []
    params.recommended_items_count = 100
    params.related_contents_categories = []
    params.related_contents_count = 3
    axios
      .post(`${RECOMMEND_ITEM_URL}`, params, {
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://network.mobile.rakuten.co.jp',
        },
      })
      .then(res => {
        setter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  setDeepqaAnalysisItem(
    sessionStorage: Storage | null,
    obj: SendAnalysisProps['data'],
  ) {
    if (sessionStorage) {
      const txt = JSON.stringify(obj)
      sessionStorage.setItem('deepqa_analysis', txt)
    }
  },

  manageSessionId(document: Document, localStorage: Storage) {
    let session_id: string | null = ''

    if (document.cookie !== '') {
      let tmp_cookie = document.cookie.split('; ')
      for (let i = 0; i < tmp_cookie.length; i++) {
        let temp_data = tmp_cookie[i].split('=')
        if (temp_data[0] === 'Rz') {
          session_id = temp_data[1]
          break
        }
      }
    }

    if (session_id === '') {
      session_id = localStorage.getItem('dqa_session')
      if (session_id === null) {
        session_id =
          Math.floor(Math.random() * 10 ** 10) + '_' + new Date().getTime()
        localStorage.setItem('dqa_session', session_id)
      }
    }

    return session_id
  },

  /**
   * @param props name: event name, data: payload, session_id: session id, ua: user agent
   */
  sendAnalysisApi(props: SendAnalysisProps) {
    const { name, data, session_id, ua } = props
    const apiAnalysisData = {
      session_id: session_id,
      timestamp: new Date().toISOString(),
      user_device: ua,
      event: name,
      payload: data,
    }

    return axios.post(ANALYSIS_SERVER_URL, apiAnalysisData, apiAnalysisConfig)
  },

  highFrequencyApi(
    scope: string,
    setter: (data: ApiResult['popular_words']) => void,
  ) {
    axios
      .get(
        `${HIGH_FREQUENCY_SERVER_URL}?scope=${scope}&count=3`,
        apiHighFrequencyConfig,
      )
      .then(res => {
        setter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  smartInputApi(
    query: string,
    setter: Dispatch<SetStateAction<{ content: string }[]>>,
  ) {
    axios
      .get(`${SMART_INPUT_URL}?q=${query}&limit=5`, apiSmartInputConfig)
      .then(res => {
        setter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  // TODO: StorageをHistory以外にも使うので名前を変えたい
  storageCheck(setHistoryWords?: Dispatch<SetStateAction<string[]>>) {
    const storage = localStorage.getItem('history-search-word')
    let storageData: string[] | null = []

    if (storage !== null) {
      const comma = storage.indexOf(',')
      if (comma !== -1) {
        storageData = storage.split(',')
      } else {
        storageData.push(storage)
      }
    } else {
      storageData = []
    }
    if (setHistoryWords) setHistoryWords(storageData)
    return storageData
  },

  // TODO: StorageをHistory以外にも使うので名前を変えたい
  setStorage(searchWord: string) {
    if (searchWord === '') return false
    let storageArr = this.storageCheck()

    if (storageArr.length > 0) {
      storageArr.unshift(searchWord)
      const historyArr = storageArr.filter(function (x, i, self) {
        return self.indexOf(x) === i
      })
      if (historyArr.length > 5) {
        historyArr.pop()
      }
      const historyStorage = historyArr.toString()
      localStorage.setItem('history-search-word', historyStorage)
    } else {
      localStorage.setItem('history-search-word', searchWord)
    }
  },
}

const exportedObject = {
  actions,
}
export default exportedObject
