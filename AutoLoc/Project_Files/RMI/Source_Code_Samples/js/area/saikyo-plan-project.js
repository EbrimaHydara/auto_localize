const axios = require('axios');
const prefectures = {
    "北海道": "hokkaido", "青森県" : "aomori", "岩手県" : "iwate", "宮城県" : "miyagi", "秋田県" : "akita", "山形県" : "yamagata", "福島県" : "fukushima", "茨城県" : "ibaraki", "栃木県" : "tochigi", "群馬県" : "gunma",
    "埼玉県" : "saitama", "千葉県" : "chiba", "東京都" : "tokyo", "神奈川県" : "kanagawa", "新潟県" : "niigata", "富山県" : "toyama", "石川県" : "ishikawa", "福井県" : "fukui", "山梨県" : "yamanashi", "長野県" : "nagano",
    "岐阜県" : 'gifu',  "静岡県" : 'shizuoka',  "愛知県" : 'aichi',  "三重県" : 'mie',  "滋賀県" : 'shiga',  "京都府" : 'kyoto', "大阪府" : 'osaka', "兵庫県" : "hyogo", "奈良県" : "nara", "和歌山県" : "wakayama",
    "鳥取県" : "tottori","島根県" : "shimane","岡山県" : "okayama", "広島県" : "hiroshima", "山口県" : "yamaguchi", "徳島県" : "tokushima", "香川県" : "kagawa", "愛媛県" : "ehime", "高知県" : "kochi", "福岡県" : "fukuoka",
    "佐賀県" : "saga", "長崎県" : "nagasaki", "熊本県" : "kumamoto", "大分県" : "oita", "宮崎県" : "miyazaki", "鹿児島県" : "kagoshima", "沖縄県" : "okinawa"
};
const areaCurrentDataUrl = '/assets/json/area-project-240416-240430.json';
const areaPastDataUrl = '/assets/json/area-project-240401-240415.json';

const getAreaData = async (url) => {
  const areaData = await axios({
    method: 'get',
    url: url,
    responseType: 'json'
  });

  return areaData.data;
};

const showTable = (data, targetOption, targetTable) => {
  const dataList = {};
  const prefectureList = {};

  data.forEach(item => {
    if (!dataList[item.Prefecture]) {
        dataList[item.Prefecture] = [];
    }
    dataList[item.Prefecture].push({ type: item.Type,  city: item.City,  date: item.Date });
  });

  Object.keys(dataList).forEach(key => {
    const value = dataList[key];
    const uniqueData = {};

    value.forEach(item => {
      if (!uniqueData[item.city]) {
        uniqueData[item.city] = {
          type: item.type,
          city: item.city,
          date: item.date,
        };
      }
    });

    prefectureList[key] = Object.values(uniqueData);
  });

  Object.keys(prefectures).forEach(prefecture => {
    if (!(prefecture in prefectureList)) {
      const element = document.getElementById(`${targetOption}-${prefectures[prefecture]}`);
      if (element) {
        element.parentNode.removeChild(element);
      }
      const table = document.getElementById(`${targetTable}-${prefectures[prefecture]}`);
      if (table) {
        table.parentNode.removeChild(table);
      }
    } else {
      let html = "";
      prefectureList[prefecture].forEach(item => {
        html += "<tr><td>" + item.city + "</td><td>" + item.date;
        html += "</td></tr>";
      });

      const table = document.getElementById(`${targetTable}-${prefectures[prefecture]}`);
      if (table) {
        const tbody = table.getElementsByTagName("tbody")[0];
        if (tbody) {
            tbody.innerHTML  = html;
        }
      }
    }
  });

  const tableElements = document.getElementsByClassName(targetTable);
  const optionElement = document.getElementById(targetOption);

  optionElement.addEventListener("change", function() {
    changeTable(this.value);
  });

  const changeTable = function (value) {
    const selectedTableElement = document.getElementById(`${targetTable}-${value}`);
    if (selectedTableElement) {
      for (let i = 0; i < tableElements.length; i++) {
        tableElements[i].style.display = "none";
      }
      selectedTableElement.style.display = "block";
    } else {
      for (let i = 0; i < tableElements.length; i++) {
        tableElements[i].style.display = "block";
      }
    }
  }

  const selectedValue = decodeURIComponent(location.hash.substring(1));

  if (selectedValue) {
    if (selectedValue === "hyougo") {
        selectedValue === "hyogo";
    }

    optionElement.value = selectedValue;
    changeTable(selectedValue);
  }

  const setElement = document.getElementById("dataSet");
  if (setElement) {
    setElement.style.display = "block";
  }

  const loadElement = document.getElementById("dataLoad");
  if (loadElement) {
    loadElement.style.display = "none";
  }
}

getAreaData(areaCurrentDataUrl)
  .then((data) => {
    showTable(data, 'js-option', 'js-table');
    return getAreaData(areaPastDataUrl);
  })
  .then((data) => {
    showTable(data, 'js-option-past', 'js-table-past');
  })
  .catch(err => {
    console.log(err);
  });
