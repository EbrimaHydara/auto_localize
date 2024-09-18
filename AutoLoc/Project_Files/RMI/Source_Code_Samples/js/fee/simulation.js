// step1
const askDataFrequencyElms = document.querySelectorAll('.js-ask-data-frequency'); // 利用頻度タブで使われてる選択肢
const askDataSizeElm = document.querySelector('.js-ask-data-size'); // 利用量タブで使われてる選択肢
// step2
const askCarrierElm = document.querySelector('.js-ask-carrier');
const askCarrierWrapElm = document.querySelector('.js-ask-carrier-wrap');
// step3
const familyPlanElm = document.querySelector('.js-family-plan');
const familyPlanWrapElm = document.querySelector('.js-ask-family-wrap');

const simulationBtn = document.querySelector('.js-simulation-btn');

// radio buttonが選択されてるか調べる
const validateRadio = elm => {
  let isValidated = false;
  const inputElms = elm.querySelectorAll('input[type="radio"]');
  inputElms.forEach(elm => {
    if (elm.checked) {
      isValidated = true;
    }
  })
  return isValidated;
}

// 全部選択されてるかのチェック
const validateAll = activeTab => {
  let firstErrorFlag = true;
  let isAllValidated = true;

  // error切り替え
  const switchError = (elm, isValidated) => {
    const errorTxt = elm.querySelector('.js-error-txt');
    if (!isValidated) {
      errorTxt.style.display = 'block';
      isAllValidated = false;

      if (firstErrorFlag) {
        elm.scrollIntoView({behavior: 'smooth'});
        firstErrorFlag = false;
      }
    } else {
      errorTxt.style.display = 'none';
    }
  };

  const askElms = document.querySelectorAll('.js-ask');
  askElms.forEach((askElm, askElmIdx) => {
    const step = askElmIdx + 1;

    switch (step) {
      case 1: {
        switch (activeTab) {
          case 1: {
            const isValidated = !!askDataSizeElm.querySelector('select').value;
            switchError(askDataSizeElm, isValidated);
            break;
          }
          case 2: {
            askDataFrequencyElms.forEach(elm => {
              const isValidated = validateRadio(elm);
              switchError(elm, isValidated);
            });
            break;
          }
          default:
            break;
        }
        break;
      }
      case 2: {
        // step3が表示されていないときはスルー
        if (askCarrierWrapElm.style.display === 'none') {
          break;
        }
        const radioElm = askElm.querySelector('.js-ask-radio');
        const isValidated = validateRadio(radioElm);
        switchError(askElm, isValidated);
        break;
      }
      default:
        break;
    }
  });
  return isAllValidated;
};

// jsonから各キャリアのプランデータを取得
const fetchPlanData = async () => {
  const res = await fetch('/assets/json/simulation.json');
  const json = await res.json();
  return json;
};


// dataサイズを取得
const getDataSize = (activeTab) => {
  switch (activeTab) {
    case 1: {
      let size = askDataSizeElm.querySelector('select').value;
      return size
    }
    case 2: {
      let totalDataSizeByKB = 0;
      askDataFrequencyElms.forEach(askDataFrequencyElm => {
        totalDataSizeByKB += Number(askDataFrequencyElm.querySelector('input[type="radio"]:checked').value);
      })

      // KBで取得したデータ量をGBに変換して、少数第一位で切り上げ
      const totalDataSizeByGB = totalDataSizeByKB / 1024 / 1024;
      return Math.ceil(totalDataSizeByGB * 10) / 10;
    }
    default:
      return;
  }
};

// data絞り込み
const getData = (dataList, size) => {
  let data = {};
  if (isNaN(Number(size))) {
    // dropdownからサイズを選択した時(over_X, under_X, unknown)
    if (size.match(/^over_(\d+(\.\d+)?)+$/)) {
      const _size = Number(size.replace('over_', '')) + 0.1; // minの値より大きくするため+0.1
      data = dataList.find(_data => (Number(_data['data_min']) < _size));
    } else if (size.match(/^under_(\d+(\.\d+)?)+$/)) {
      const _size = Number(size.replace('under_', ''));
      data = dataList.findLast(_data => (_size <= Number(_data['data_max'])));
    } else if (size !== 'unknown') {
      // step3を全部非活性にしてボタンを押せるように
    }
  } else {
    data = dataList.find(_data => (Number(_data['data_min']) < size) && (size <= Number(_data['data_max'])));
  }

  return data;
}


// 現在開いているtabを特定
const getActiveTab = () => {
  let activeTab = 1;
  const tabPanelElms = document.querySelectorAll('.js-main-tab-panel');
  tabPanelElms.forEach((elm, idx) => {
    if (elm.getAttribute('aria-hidden') === 'false') {
      activeTab = idx + 1;
    }
  });
  return activeTab;
};

// 次の選択肢にscroll
const askElms = document.querySelectorAll('.js-ask');
askElms.forEach((askElm, askElmIdx) => {
  const step = askElmIdx + 1;

  switch (step) {
    case 1: {
      const subAskElms = askElm.querySelectorAll('.js-sub-ask');
      subAskElms.forEach((subAskElm, subAskElmIdx) => {
        const radioElms = subAskElm.querySelectorAll('input');
        radioElms.forEach(radioElm => {
          radioElm.addEventListener('click', () => {
            if (subAskElmIdx < subAskElms.length - 1) {
              subAskElms[subAskElmIdx + 1].scrollIntoView({behavior: 'smooth'});
            }
            if (subAskElmIdx === subAskElms.length - 1) {
              askElms[askElmIdx + 1].scrollIntoView({behavior: 'smooth'});
            }
          });
        });
      });
      break;
    }
    case 2: {
      const radioElms = askElm.querySelectorAll('input');
      radioElms.forEach(radioElm => {
        radioElm.addEventListener('click', () => {
          if (askElmIdx < askElms.length - 1) {
            familyPlanElm.scrollIntoView({behavior: 'smooth'});
          }
        });
      });
      break;
    }
    case 3: {
      const radioElms = askElm.querySelectorAll('input');
      radioElms.forEach(radioElm => {
        radioElm.addEventListener('click', () => {
          simulationBtn.scrollIntoView({behavior: 'smooth', block: 'center'});
        });
      });
      break;
    }

    default:
      break;
  }
});

// 各選択肢の選択状態を初期化
const resetAll = () => {
  const inputElms = document.querySelectorAll('input[type="radio"]:checked');
  inputElms.forEach(elm => {
    elm.checked = false;
  })
  askDataSizeElm.querySelector('select').firstElementChild.selected = true;
  familyPlanElm.querySelector('input[type="radio"][id="familyPlanNone"]').checked = true;
};

// step2のキャリア選択ボタンの出しわけ
const activateCarrierBtn = (data) => {
  const elms = askCarrierElm.querySelectorAll('input[name="carrier"]');
  elms.forEach(elm => {
    if (data[`${elm.value}_plan`] || elm.value === 'other') {
      elm.removeAttribute('disabled');
    } else {
      elm.setAttribute('disabled', true);
    }

    elm.addEventListener('click', () => {
      const familyPlanElm = document.querySelector('.js-family-plan');
      const familyNonePlanElm = familyPlanElm.querySelector('input[value=""]');
      const family2PlanElm = familyPlanElm.querySelector('input[value="family_2"]');
      const family3OverPlanElm = familyPlanElm.querySelector('input[value="family_3_over"]');

      familyNonePlanElm.removeAttribute('disabled');
      familyNonePlanElm.checked = true;

      // 家族割ボタン出しわけ
      if (data[`${elm.value}_plan_family_2`]) {
        family2PlanElm.removeAttribute('disabled');
      } else {
        family2PlanElm.setAttribute('disabled', true);
      }
      if (data[`${elm.value}_plan_family_3_over`]) {
        family3OverPlanElm.removeAttribute('disabled');
      } else {
        family3OverPlanElm.setAttribute('disabled', true);
      }
    })
  })
};

// step2のキャリア選択ボタンをリセット
const resetCarrierBtn = () => {
  const elms = askCarrierElm.querySelectorAll('input[name="carrier"]');
  elms.forEach(elm => {
    elm.checked = false;
    elm.setAttribute('disabled', true);
    resetFamilyPlanBtn();
  })
};

// step3の家族割選択ボタンをリセット
const resetFamilyPlanBtn = () => {
  const familyPlanElm = document.querySelector('.js-family-plan');
  const familyNonePlanElm = familyPlanElm.querySelector('input[value=""]');
  const family2PlanElm = familyPlanElm.querySelector('input[value="family_2"]');
  const family3OverPlanElm = familyPlanElm.querySelector('input[value="family_3_over"]');

  familyNonePlanElm.removeAttribute('disabled');
  familyNonePlanElm.checked = true;
  family2PlanElm.setAttribute('disabled', true);
  family3OverPlanElm.setAttribute('disabled', true);
};

// step1のみのvalidation
const validateStep2 = (activeTab) => {
  let isValidated = true;
  switch (activeTab) {
    case 1: {
      isValidated = !!askDataSizeElm.querySelector('select').value;
      break;
    }
    case 2: {
      askDataFrequencyElms.forEach(elm => {
        if (!validateRadio(elm)) {
          isValidated = false;
        }
      });
      break;
    }
    default:
      isValidated = false;
      break;
  }
  return isValidated;
};


(async () => {
  let data = {};
  let size = 0;
  let activeTab = 1;

  // データ量にあったプラン一覧を取得
  const dataList = await fetchPlanData();

  // step1の選択肢が変更された時の処理
  const changeDataSize = (activeTab) => {
    resetCarrierBtn();
    if (activeTab === 2) {
      askCarrierWrapElm.style.display = 'block';
    }

    if (validateStep2(activeTab)) {
      size = getDataSize(activeTab)
      data = getData(dataList, size)

      if (activeTab === 1 && size === 'unknown') {
        askCarrierWrapElm.style.display = 'none';
        familyPlanWrapElm.style.display = 'none';
      } else {
        askCarrierWrapElm.style.display = 'block';
        familyPlanWrapElm.style.display = 'block';
        activateCarrierBtn(data);
      }
    }
  }

  askDataFrequencyElms.forEach(askDataFrequencyElm => {
    askDataFrequencyElm.addEventListener('click', () => {
      activeTab = getActiveTab();
      changeDataSize(activeTab);
    })
  });

  askDataSizeElm.addEventListener('change', () => {
    activeTab = getActiveTab();
    changeDataSize(activeTab);

    askCarrierElm.scrollIntoView({behavior: 'smooth'});
  });

  const dataTabElms = document.querySelectorAll('.js-data-tab-trigger');
  dataTabElms.forEach((dataTabElm, idx) => {
    dataTabElm.addEventListener('click', () => {
      changeDataSize(idx + 1);
    });
  });

  // シミュレーションボタン選択時
  simulationBtn.addEventListener('click', e => {
    e.preventDefault();
    const activeTab = getActiveTab();

    // 選択されてない箇所があれば遷移させない
    if (!validateAll(activeTab)) {
      return;
    }

    let paramPrefix = '?';
    // クエリに既に「?」があるとき
    if (simulationBtn.href.match(/\?/)) {
      paramPrefix = '&';
    }

    const size = getDataSize(activeTab);
    const carrier = askCarrierElm.querySelector('input:checked')?.value;
    const familyPlan = familyPlanElm.querySelector('input:checked')?.value;

    simulationBtn.href += `${paramPrefix}data=${size}`;
    if (carrier) {
      simulationBtn.href += `&carrier=${carrier}`;
    }
    if (familyPlan) {
      simulationBtn.href += `&family=${familyPlan}`;
    }
    location.href = simulationBtn.href;
  });

  window.addEventListener('pageshow', () => {
    resetAll();
  });
})();

