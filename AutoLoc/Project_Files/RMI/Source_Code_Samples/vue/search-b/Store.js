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
    page: '',
    pageTotal: '',
    init: false
};

const apiConfig = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
        "Content-Type": "application/json"
    },
    contentType: "application/json",  
};
const apiData = {
    "count": 10,
    "natural_language_query": ''
};
const SERVER_URL = 'https://gateway-api.global.rakuten.com/bot/deepqa-mno-prod/v1/environments/mno/query';



let session_id = '';
const ua = window.navigator.userAgent;

if(document.cookie !== ''){
    let tmp_cookie = document.cookie.split('; ');
    for(let i = 0; i < tmp_cookie.length ; i++) {
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
        session_id = Math.floor(Math.random() * 10 ** 10) + '_' + new Date().getTime();
        localStorage.setItem('dqa_session', session_id);
    }
}

const apiAnalysisConfig = {
    headers: {
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuIn0.r0JR71LUxlRSccGINnLUc_XOt5tKxC3wdCaOy6mnFIg",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
        "Content-Type": "application/json"
    },
    contentType: "application/json",  
};

// const ANALYSIS_SERVER_URL = 'http://stg.gateway-api.intra.rakuten-it.com/bot/deepqa-data-collection-api-stg/mno/user_journey_test/send-data';
const ANALYSIS_SERVER_URL = 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno/user_journey/send-data';

const apiHighFrequencyConfig = {
    headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZWVwcWFfYW5hbHl0aWNzX2p3dF9wcm9kIn0.RH70hI4OYpE0gRsZU4BOYztUz1o_qYBiL_pYXkbTcc0",
        "Content-Type": "application/json"
    },
    contentType: "application/json",
};
//const HIGH_FREQUENCY_SERVER_URL = 'https://deepqa-analytics-stg-80-cai-general-stg.jpe2-caas1-dev1.caas.jpe2b.r-local.net/mno/high-frequency-queries'; // local用
const HIGH_FREQUENCY_SERVER_URL = 'https://gateway-api.global.rakuten.com/bot/deepqa-analytics/mno/high-frequency-queries';


const actions = {
    searchApi(searchWord, selectedCategory, currentPage, limit, init) {
        state.init = init;

        apiData.natural_language_query = searchWord;

        axios.post(SERVER_URL, apiData, apiConfig).then((res) => {

            const dataResult = res.data.results;
            const dataQuery = searchWord;

            for (let i = 0, len = dataResult.length; i < len; i ++) {
                dataResult[i].ctg = dataResult[i].URL.match(/network\.mobile\.rakuten\.co\.jp\/([a-z-]*)\//, "$1")[1];
            }
            state.searchWord = dataQuery;
            state.selectedCategory = '';
            state.items = dataResult;
            state.itemTotal = res.data.matching_result;
            state.relationWords = '';
            state.suggestions = '';
            state.relationContents = '';
            state.pageTotal = 1;
            state.text = res.data.response_text;
        });
    },

    suggestApi(searchWord) {
        axios.get('https://gateway-api.global.rakuten.com/bot/deepqa-smart-input-prod/search?q=' + searchWord + '&limit=5', apiConfig)
        .then((res) => {
            state.suggestItem = res.data;
        })
        .catch((error) => {
        });
    },

    sendAnalysisApi(name, data) {
        const apiAnalysisData = {
            "session_id": session_id,
            "timestamp": new Date().toISOString(),
            "user_device": ua,
            "event": name,
            "payload": data
        };

        axios.post(ANALYSIS_SERVER_URL, apiAnalysisData, apiAnalysisConfig).then((res) => {
        });
    },

    highFrequencyApi(isRegistered) {
        const scope = isRegistered ? 'registered_user' : 'non_registered_user';
        axios.get(`${HIGH_FREQUENCY_SERVER_URL}?scope=${scope}&count=3`, apiHighFrequencyConfig)
        .then(res => {
            if (isRegistered) {
                state.registeredUserHighFrequencyList = res.data;
            } else {
                state.nonregisteredUserHighFrequencyList = res.data;
            }
        })
        .catch(err => {
            console.log(err);
        });
    },
};

export default {
    state,
    actions
};
