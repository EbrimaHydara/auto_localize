import axios from 'axios';

const state = {
    searchWord : '',
    selectedCategory: [],
    currentPage: '',
    itemTotoal: '',
    productTotal: '',
    relationWords: [],
    suggestions: [],
    items: [],
    products: [],
    relationContents: [],
    popularWords: [],
    suggestItem: [],
    suggestProduct: [],
    suggestBnr: [],
    historyWords: [],
    registeredUserHighFrequencyList: [],
    nonregisteredUserHighFrequencyList: [],
    relatedWords: [],
    recommendItems: [],
    recommendContents: [],
    page: '',
    pageTotal: '',
    init: false
};

const apiSuggestConfig = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
        "Content-Type": "application/json"
    },
    contentType: "application/json",
};
const apiRelatedWordsConfig = {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
      "Content-Type": "application/json",
    },
};
const apiAnalysisConfig = {
  headers: {
    // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuIn0.r0JR71LUxlRSccGINnLUc_XOt5tKxC3wdCaOy6mnFIg",
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4',
    'Content-Type': 'application/json',
  },
  contentType: 'application/json',
};
const apiHighFrequencyConfig = {
    headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZWVwcWFfYW5hbHl0aWNzX2p3dF9wcm9kIn0.RH70hI4OYpE0gRsZU4BOYztUz1o_qYBiL_pYXkbTcc0",
        "Content-Type": "application/json"
    },
    contentType: "application/json",
};
const RELATED_WORDS_URL =
    // 'https://deepqa-smart-input-stg-8080-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno/smart-input';
    'https://gateway-api.global.rakuten.com/bot/deepqa-smart-input-prod/mno/smart-input';
const ANALYSIS_SERVER_URL =
    // 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno_test/user_journey/send-data';
    'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno/user_journey/send-data';
const HIGH_FREQUENCY_SERVER_URL =
    'https://gateway-api.global.rakuten.com/bot/deepqa-analytics/mno/high-frequency-queries';
const RECOMMEND_ITEM_URL =
    // 'https://deepqa-smart-ad-stg-8000-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno/smart-ads';
    'https://gateway-api.global.rakuten.com/bot/deepqa-smart-ad/mno/smart-ads';

const actions = {
    suggestApi(searchWord) {
        axios.get('https://gateway-api.global.rakuten.com/bot/deepqa-smart-input-prod/search?q=' + searchWord + '&limit=5', apiSuggestConfig)
        .then((res) => {
            state.suggestItem = res.data;
        })
        .catch((error) => {
        });
    },

    storageCheck() {
        const storage = localStorage.getItem('history-search-word');
        let storageData = [];

        if( storage !== null ) {
            const comma = storage.indexOf(',');
            if ( comma !== -1 ) {
                storageData = storage.split(',');
            } else {
                storageData.push(storage);
            }
        } else {
            storageData = null;
        }
        state.historyWords = storageData;
        return storageData;
    },

    highFrequencyApi(scope) {
        const scopeParam = {
            registered_user: 'registeredUserHighFrequencyList',
            non_registered_user: 'nonregisteredUserHighFrequencyList',
            whole_site: 'popularWords',
        }

        axios.get(`${HIGH_FREQUENCY_SERVER_URL}?scope=${scope}&count=3`, apiHighFrequencyConfig)
        .then(res => {
            state[scopeParam[scope]] = res.data;
        })
        .catch(err => {
            console.log(err);
        });
    },

    relatedWordsApi(query) {
        const params = {};
        params.scope = 'mno_whole_site';
        params.related_words_count = 3;
        params.quick_links_count = 3;
        params.query = query;
        return axios
            .post(`${RELATED_WORDS_URL}`, params, apiRelatedWordsConfig)
            .then(res => {
              state.relatedWords = res.data.related_words;
              state.suggestItem = res.data.quick_links;
              return res.data;
            })
            .catch(err => {
              console.log(err);
            });
    },

    recommendItemApi(query) {
        const params = {};
        params.query = query;
        params.recommended_items_categories = [];
        params.recommended_items_count = 100;
        params.related_contents_categories = [];
        params.related_contents_count = 3;
        return axios
            .post(`${RECOMMEND_ITEM_URL}`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    Origin: 'https://network.mobile.rakuten.co.jp',
                },
            })
            .then(res => {
                state.recommendItems = res.data.items;
                state.recommendContents = res.data.contents;
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    },

    setStorage(searchWord) {
        if( searchWord === '' ) return false;
        let storageArr = this.storageCheck();

        if ( storageArr !== null ) {
            storageArr.unshift(searchWord);
            const historyArr = storageArr.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            if ( historyArr.length > 5 ) {
                historyArr.pop();
            }
            const historyStorage = historyArr.toString();
            localStorage.setItem('history-search-word', historyStorage);
        } else {
            localStorage.setItem('history-search-word', searchWord);
        }
    },

    setDeepqaAnalysisItem(obj) {
      if (sessionStorage) {
        const txt = JSON.stringify(obj);
        sessionStorage.setItem('deepqa_analysis', txt);
      }
    },

    manageSessionId() {
      let session_id = ''

      if (document.cookie !== '') {
        let tmp_cookie = document.cookie.split('; ');
        for (let i = 0; i < tmp_cookie.length; i++) {
          let temp_data = tmp_cookie[i].split('=');
          if (temp_data[0] === 'Rz') {
            session_id = temp_data[1];
            break;
          }
        }
      }

      if (session_id === '') {
        session_id = localStorage.getItem('dqa_session');
        if (session_id === null) {
          session_id =
            Math.floor(Math.random() * 10 ** 10) + '_' + new Date().getTime();
          localStorage.setItem('dqa_session', session_id);
        }
      }

      return session_id;
    },

    /**
     * @param props name: event name, data: payload, session_id: session id, ua: user agent
     */
    sendAnalysisApi(props) {
      const { name, data, session_id, ua } = props;
      const apiAnalysisData = {
        session_id: session_id,
        timestamp: new Date().toISOString(),
        user_device: ua,
        event: name,
        payload: data,
      };

      return axios.post(ANALYSIS_SERVER_URL, apiAnalysisData, apiAnalysisConfig);
    },
};

export default {
    state,
    actions
};

