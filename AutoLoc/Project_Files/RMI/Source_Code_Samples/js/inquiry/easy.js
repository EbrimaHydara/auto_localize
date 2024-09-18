import validator from 'validator';
import DOMPurify from 'dompurify';

const CLASS_NAMES = {
    DISPLAY: 'inquiry-easy-Map_Display',
    DISPLAY_INIT: 'inquiry-easy-Map_Display-init',
    SEARCH_INVALID: 'inquiry-easy-Map_Search-invalid',
}
const datepickerSet = {
  language: 'ja',
  autoClose: true,
  navTitles: {
    days: '<i>yyyy</i>年 MM',
    months: 'yyyy 年',
    years: 'yyyy1 年 - yyyy2 年'
  },
  prevHtml: '<span class="c-Icon_Chevron-left"></span>',
  nextHtml: '<span class="c-Icon_Chevron-right"></span>',
  todayButton: new Date(),
  maxDate: new Date()
};
$('.js-Datepicker').datepicker(datepickerSet);
$('.js-Datepicker').data('datepicker').selectDate(new Date());

let errors = [];

// 必須
const chkRequired = el => {
  let msgId = `err-required_${el.getAttribute('name')}`;
  let msg = document.getElementById(msgId);
  if (validator.isEmpty(el.value, { ignore_whitespace: true })) {
    el.setAttribute('aria-describedBy', msgId);
    msg.setAttribute('aria-hidden', false);
    return 1;
  } else {
    el.setAttribute('aria-describedBy', '');
    msg.setAttribute('aria-hidden', true);
    return 0;
  }
}

// 半角数字
const chkNumeric = el => {
  if ( el.value.length > 0 ) {
    let msgId = `err-numeric_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    if (validator.isNumeric(el.value, { no_symbols: true })) {
      el.setAttribute('aria-describedBy', '');
      msg.setAttribute('aria-hidden', true);
      return 0;
    } else {
      el.setAttribute('aria-describedBy', msgId);
      msg.setAttribute('aria-hidden', false);
      return 1;
    }
  } else {
    return 0;
  }
}

// 文字数
const chkLength = el => {
  if ( el.value.length > 0 ) {
    let msgId = `err-length_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    let setting = {
      min: isNaN(el.getAttribute('minlength')) ? 0 : parseInt(el.getAttribute('minlength'), 10),
      max: isNaN(el.getAttribute('maxlength')) ? 0 : parseInt(el.getAttribute('maxlength'), 10)
    };
    if (validator.isLength(el.value, setting) ) {
      el.setAttribute('aria-describedBy', '');
      msg.setAttribute('aria-hidden', true);
      return 0;
    } else {
      el.setAttribute('aria-describedBy', msgId);
      msg.setAttribute('aria-hidden', false);
      return 1;
    }
  } else {
    return 0;
  }
}

// radio
const chkRadio = el => {
  let msgId = `err-radio_${el.getAttribute('name')}`;
  let msg = document.getElementById(msgId);
  let radioId = el.getAttribute('name');
  let radioList = document.querySelectorAll(`input[name="${radioId}"]`);
  let radioFlag = false;
	for(let i = 0; i < radioList.length; i++) {
    if(radioList[i].checked) {
      radioFlag = true;
    }
	}
  if (radioFlag) {
    el.setAttribute('aria-describedBy', '');
    msg.setAttribute('aria-hidden', true);
    return 0;
  } else {
    el.setAttribute('aria-describedBy', msgId);
    msg.setAttribute('aria-hidden', false);
    return 1;
  }
}

// 必須checkbox
const chkCheckboxRequired = el => {
  let msgId = `err-checkboxRequired_${el.getAttribute('name')}`;
  let msg = document.getElementById(msgId);
  let checkboxId = el.getAttribute('name');
  let checkboxList = document.querySelectorAll(`input[name="${checkboxId}"]`);
  let checkboxFlag = false;
	for(let i = 0; i < checkboxList.length; i++) {
    if(checkboxList[i].checked) {
      checkboxFlag = true;
    }
	}
  if (checkboxFlag) {
    el.setAttribute('aria-describedBy', '');
    msg.setAttribute('aria-hidden', true);
    return 0;
  } else {
    el.setAttribute('aria-describedBy', msgId);
    msg.setAttribute('aria-hidden', false);
    return 1;
  }
}

const validateTarget = (target, param) => {
  let item = target.dataset.validate;
  let nm = target.getAttribute('name');
  let idx = errors.indexOf(nm);
  let results = 0;

  if (item.indexOf('required') > -1) results += chkRequired(target);
  if (item.indexOf('numeric') > -1) results += chkNumeric(target);
  if (item.indexOf('length') > -1) results += chkLength(target);
  if (item.indexOf('radio') > -1) results += chkRadio(target);
  if (item.indexOf('checkboxRequired') > -1) results += chkCheckboxRequired(target);

  if (results > 0) {
    // バリデーションにかかった時
    target.setAttribute('aria-invalid', true);
    if (param === 'chkAll') {
      if (idx < 0) errors.push(nm);
    }
  } else {
    // バリデーションを通過した時
    target.setAttribute('aria-invalid', false);
    if (param === 'chkAll') {
      if (idx > -1) errors.splice(idx, 1);
    }
  }

  if (param === 'chkAll' && target.getAttribute('type') === 'text' && target.value) {
    target.value = DOMPurify.sanitize(target.value, {ALLOWED_TAGS: []});
  }

  console.log(errors)
}

const validateInput = target => {
  // inputから離れた時
  target.addEventListener('blur', () => {
    target.value = target.value.replace(/\s+/g, '');
    validateTarget(target, 'chkAll');
  });
}

const displayNextElm = elm => {
  elm.style.display = null;
}

const formNames = {
  date: '00N2u000000P1ft',
  hour: '00N0I00000JyyIk',
  minute: '00N0I00000JyyIp',
  location: '00N0I00000JycJR',
  type: '00N2u000001T0kB',
  floor: '00N2u000000PkFH',
  address: '00N280000095Txj',
  postcode: '00N0I00000JycJH',
  lat: '00N2u000000wSyU',
  lng: '00N2u000000wSyZ',
  building: '00N2u000000PkFM',
  communication: '00N2u000000QAHn',
  situation: '00N2u000000wSye',
  situationOther: '00N2u000000wTZQ',
}

const formSubmitCloneBtnElm = document.getElementById('js-inquiry-easy-Modal_Submit-clone');
const confirmBtnElm = document.getElementById('js-confirm-btn');

const inqDateElm = document.querySelector(`[name="${formNames.date}"]`);
const inqHourElm = document.querySelector(`[name="${formNames.hour}"]`);
const inqMinuteElm = document.querySelector(`[name="${formNames.minute}"]`);

// 不具合発生場所
const inqLocations = document.querySelectorAll(`[name="${formNames.location}"]`);
const classificationElm = document.getElementById('js-disp-classification');
inqLocations.forEach(inqLocation => {
    inqLocation.addEventListener('click', () => {
        displayNextElm(classificationElm)
        classificationElm.scrollIntoView({behavior: 'smooth'});
    });
});

// 発生場所種別: radioボタン
const inqTypes = document.querySelectorAll(`[name="${formNames.type}"]`);
const nextOneElms = document.querySelectorAll('.js-disp-next-1');
let isInqTypesSelected = false;
let checkedInqTypeValue = '';
inqTypes.forEach(inqType => {
  // 各radioボタンをクリックした際の挙動
  inqType.addEventListener('click', () => {
    if (!isInqTypesSelected) {
      nextOneElms.forEach(nextElm => displayNextElm(nextElm));
      isInqTypesSelected = true;
    }
    nextOneElms[0].scrollIntoView({behavior: 'smooth'});
  });
  // radioボタンの選択が変化した際の挙動
  inqType.addEventListener('change', () => {
    if (inqType.checked) {
      const selectValue = inqType.value;
      const isIndoor = indoorList.includes(selectValue);
      inqSelectFloor.innerHTML = '';
      if (isIndoor) {
        floorPosition.setAttribute('aria-hidden', false);
        floorPosition.style.display = null;
        inqSelectFloor.appendChild(floorMap.get(selectValue).cloneNode(true));
        inqSelectFloor.setAttribute('aria-required', true);
        inqSelectFloor.dataset.validate = 'required';
      } else {
        floorPosition.setAttribute('aria-hidden', true);
        floorPosition.style.display = 'none';
        floorPositionErrDisp.setAttribute('aria-hidden', true);
        inqSelectFloor.appendChild(defaultOptionEle);
        inqSelectFloor.setAttribute('aria-required', false);
        inqSelectFloor.removeAttribute('aria-describedBy');
        inqSelectFloor.removeAttribute('aria-invalid');
        inqSelectFloor.dataset.validate = '';

        const errIdx = errors.indexOf(formNames.floor);
        if (errIdx > -1) {
          errors.splice(errIdx, 1);
        }
      }
      checkedInqTypeValue = selectValue;
    }
  });
});

const floorPosition = document.getElementById('js-floor-position'); // 階層選択エリア
const floorPositionErrDisp = document.getElementById('err-required_00N2u000000PkFH');
const inqSelectFloor = document.getElementById(formNames.floor); // 階層選択（select要素）
const defaultOptionEle = inqSelectFloor.firstElementChild; // option要素: 選択してください
// 発生場所種別によるoption要素生成
const highFloorOptions = generateFloorOptionsFragment('{num}F', 21, 60, true);
const middleFloorOptions = generateFloorOptionsFragment('{num}F', 11, 20, false);
const lowFloorOptions = generateFloorOptionsFragment('{num}F', 1, 10, false);
const groundFloorOptions = generateFloorOptionsFragment('地下{num}F', -10, -1, false);
const floorMap = new Map([
  ['高層階（21F以上）', highFloorOptions],
  ['中層階（11～20F）', middleFloorOptions],
  ['低層階（1～10F）', lowFloorOptions],
  ['地下', groundFloorOptions],
]);
const indoorList = [...floorMap.keys()];
// 階層（select要素）に挿入するoption生成関数
function generateFloorOptionsFragment (template, start, end, isOver) {
  const loopCount = end - (start - 1);
  const optionsArr = Array.from(Array(loopCount)).map((_, idx) => {
    const optionEle = document.createElement('option');
    const floorVal = start + idx;
    optionEle.value = floorVal;
    optionEle.textContent = template.replace('{num}', Math.abs(floorVal));

    return optionEle;
  });

  if (start < 0) {
    optionsArr.reverse(); // 地下選択の際に階層表示順を変更
  }

  const fragment = document.createDocumentFragment();
  const noValueOptionEle = defaultOptionEle.cloneNode(true);
  fragment.appendChild(noValueOptionEle);
  optionsArr.forEach(opt => fragment.appendChild(opt));

  // 特定階層以降の表示についての処理: 〜以上を要素として追加
  if (isOver) {
    const optionEle = document.createElement('option');
    const floorVal = end + 1;
    optionEle.value = floorVal;
    optionEle.textContent = `${template.replace('{num}', Math.abs(floorVal))}以上`;
    fragment.appendChild(optionEle);
  }

  return fragment;
}

// 階層
//  - 選択時変更にバリデーションをかける
//  - focusが外れた時にバリデーションをかける
const addEvents = ['change', 'blur'];
addEvents.forEach(evtName => {
  inqSelectFloor.addEventListener(evtName, () => {
    validateTarget(inqSelectFloor);
  });
});


// 建物名・施設名
const inqBuildingElm = document.querySelector(`[name="${formNames.building}"]`);
if (inqBuildingElm) {
  validateInput(inqBuildingElm);
}

// 発生場所
const inqAddressElm = document.querySelector(`[name="${formNames.address}"]`);
const inqPostcodeElm = document.querySelector(`[name="${formNames.postcode}"]`);
const inqLatElm = document.querySelector(`[name="${formNames.lat}"]`);
const inqLngElm = document.querySelector(`[name="${formNames.lng}"]`);
const inqAddressDisplayElm = document.getElementById('js-Map-address');
const inqAddressAttentionTextElm = document.querySelector('.js-address-attention-text')
const modalInqAddressDisplayElm = document.getElementById('js-Modal-Map-address');
const mapInput = document.getElementById('js-inquiry-easy_Map-input');
const initAddressDisplay = mutationList => {
    for(const mutation of mutationList) {
        if(mutation.type === 'attributes') {
            if (inqAddressElm.value) {
                document.getElementById(`err-required_${formNames.address}`).setAttribute('aria-hidden', 'true');
                mapInput.classList.remove(CLASS_NAMES.SEARCH_INVALID);
                inqAddressAttentionTextElm.style.display = 'block';
            }
            [inqAddressDisplayElm, modalInqAddressDisplayElm].forEach(elm => elm.classList.replace(CLASS_NAMES.DISPLAY, CLASS_NAMES.DISPLAY_INIT));
            setTimeout(() => [inqAddressDisplayElm, modalInqAddressDisplayElm].forEach(elm => elm.classList.replace(CLASS_NAMES.DISPLAY_INIT, CLASS_NAMES.DISPLAY), 300));
        }
    }
}
const mutationObserver = new MutationObserver(initAddressDisplay);
mutationObserver.observe(inqAddressElm, {attributes: true});
const setInqAddress = (address, postcode, lat, lng) => {
  inqAddressDisplayElm.textContent = address;
  modalInqAddressDisplayElm.textContent = address;
  inqAddressElm.value = address;
  inqPostcodeElm.value = postcode;
  inqLatElm.value = lat;
  inqLngElm.value = lng;
};
mapInput.addEventListener('focus', e => {
    if (e.currentTarget.classList.contains(CLASS_NAMES.SEARCH_INVALID)) {
        e.currentTarget.classList.remove(CLASS_NAMES.SEARCH_INVALID);
    }
});
mapInput.addEventListener('blur', e => {
    if (errors.includes(formNames.address) && !inqAddressElm.value) {
        e.currentTarget.classList.add(CLASS_NAMES.SEARCH_INVALID);
    } else {
        e.currentTarget.classList.remove(CLASS_NAMES.SEARCH_INVALID);
    }
});

// 対象の通信
const inqCommunicationElms = document.querySelectorAll(`[name="${formNames.communication}"]`);
let dispNextFlag2 = true;
inqCommunicationElms.forEach(inqCommunicationElm => {
  inqCommunicationElm.addEventListener('click', () => {
    if (dispNextFlag2) {
      const nextElms = document.querySelectorAll('.js-disp-next-2');
      nextElms.forEach(nextElm => {
        displayNextElm(nextElm);
      });
      nextElms[0].scrollIntoView({behavior: 'smooth'});
      dispNextFlag2 = false;
    }
  });
});

// 詳しい状況
const otherText = 'その他';
const inqSituationElms = document.querySelectorAll(`[name="${formNames.situation}"]`);
const inqSituationCommonElms = Array.from(inqSituationElms).filter(elm => elm.value !== otherText);
const inqSituationOtherElm = Array.from(inqSituationElms).filter(elm => elm.value === otherText)[0];
const inqSituationOtherInputElm = document.querySelector(`[name="${formNames.situationOther}"]`);

inqSituationElms.forEach(inqSituationElm => {
  inqSituationElm.addEventListener('change', e => {
    // 押されたのが「その他」の時
    if (e.target.value === otherText) {
      if (inqSituationOtherElm.checked) {
        inqSituationOtherInputElm.style.display = null;
        formSubmitCloneBtnElm.setAttribute('aria-disabled', true);
        confirmBtnElm.setAttribute('aria-disabled', true);
      } else {
        inqSituationOtherInputElm.style.display = 'none';
        inqSituationOtherInputElm.value = '';
      }
    }

    // 「その他」が選択されている時は他のcheckboxの値を無視
    if (inqSituationOtherElm.checked) {
      return;
    }

    let flag = false;
    inqSituationCommonElms.forEach(elm => {
      if (elm.checked) {
        flag = true;
      }
    });
    if (flag) {
      formSubmitCloneBtnElm.setAttribute('aria-disabled', false);
      confirmBtnElm.setAttribute('aria-disabled', false);
    } else {
      formSubmitCloneBtnElm.setAttribute('aria-disabled', true);
      confirmBtnElm.setAttribute('aria-disabled', true);
    }
  });
});

// 入力中にsubmit btnを制御
inqSituationOtherInputElm.addEventListener('keyup', () => {
  if (inqSituationOtherInputElm.value === '') {
    formSubmitCloneBtnElm.setAttribute('aria-disabled', true);
    confirmBtnElm.setAttribute('aria-disabled', true);
  } else {
    formSubmitCloneBtnElm.setAttribute('aria-disabled', false);
    confirmBtnElm.setAttribute('aria-disabled', false);
  }
});

const form = document.getElementById('js-inquiry-easy_Form');
const submitBtn = document.getElementById('js-inquiry-easy_Form-submit');
submitBtn.addEventListener('click', e => {
  e.preventDefault();

  validateTarget(inqDateElm, 'chkAll');
  validateTarget(inqHourElm, 'chkAll');
  validateTarget(inqMinuteElm, 'chkAll');
  validateTarget(inqTypes[0], 'chkAll');
  if (indoorList.includes(checkedInqTypeValue)) {
    validateTarget(inqSelectFloor, 'chkAll');
  }
  validateTarget(inqBuildingElm, 'chkAll');
  validateTarget(inqAddressElm, 'chkAll');
  validateTarget(inqCommunicationElms[0], 'chkAll');
  validateTarget(inqSituationElms[0], 'chkAll');
  validateTarget(inqSituationOtherElm, 'chkAll');

  if (errors.length > 0) {
    const errorCode = document.querySelector(`[name="${errors[0]}"]`).getAttribute('aria-describedby');
    const firstErrorElm = document.getElementById(errorCode);
    if (errors.includes(formNames.address)) {
        mapInput.classList.add(CLASS_NAMES.SEARCH_INVALID);
    }
    if (firstErrorElm) {
      firstErrorElm.scrollIntoView({behavior: 'smooth'});
    }
    return;
  }

  form.submit();
});

const initMap = (isModal = false) => {
  const mapContainer = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map`);
  const mapDefaultCenter = {
    lat: Number('35.6104689'),
    lng: Number('139.6301295')
  };

  if (mapContainer) {
    if (navigator.geolocation) {
      // 位置情報を取得できるとき
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (isModal) buildMap(pos, true, false, true);
        else buildMap(pos, true);
      },
      // 位置情報を取得できないとき
      () => buildMap(mapDefaultCenter, false, true, isModal));
    }
  }
}

let commonPos = null;
const buildMap = (pos, isGeolocationEnabled, isDefault = false, isModal = false) => {
  const mapContainer = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map`);
  const mapLocation = document.getElementById('js-inquiry-easy_Map-location');
  const mapLoading = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map-loading`);
  const mapDefaultZoom = 17;
  const mapOption = {
    center: pos,
    zoom: mapDefaultZoom,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };

  let map = new google.maps.Map(mapContainer, mapOption);
  let service = new google.maps.places.PlacesService(map);
  const markerIcon = {
    url: '/assets/img/common/icon-location-pink.png',
    scaledSize: new google.maps.Size(28, 36),
  };
  let marker = new google.maps.Marker({
    position: pos,
    map,
    icon: markerIcon,
  });
  let geocoder = new google.maps.Geocoder();

  const formatAddress = data => {
    const address_components = data.address_components;
    // 取得した住所から、国名と郵便番号を除去
    const address = address_components.filter(addr => (!addr.types.includes('country') && !addr.types.includes('postal_code') && !addr.types.includes('subpremise')));
    const postcode = address_components.filter(addr => addr.types.includes('postal_code'))[0]?.long_name || '';

    address.reverse();
    let addressList = [];
    address.forEach(addr => {
      // 番地や建物名の前に空白を追加
      if (addr.types.includes('premise')) {
        addressList.push(' ');
      }
      addressList.push(addr.long_name);
    })

    // 国名&郵便番号 = [0], ビル名 = [2]~
    let formattedAddress = data.formatted_address.split(' ')?.[1]
    if (!formattedAddress || formattedAddress.includes('〒')) {
      formattedAddress = addressList.join('');
    }

    return {
      address: formattedAddress,
      postcode,
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng(),
    }
  }

  const setAddressByMap = (pos, _isDefault = isDefault) => {
    geocoder.geocode(
      {latLng: pos},
      (result, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          const addressData = formatAddress(result[0])
          if(!_isDefault && !isModal) {
            setInqAddress(addressData.address, addressData.postcode, addressData.lat, addressData.lng);
          }
        }
      }
    );
  }
  setAddressByMap(pos);

  const setMarker = pos => {
    marker.setMap(null);
    marker = null;
    marker = new google.maps.Marker({
      position: pos,
      map,
      icon: markerIcon,
    });
    map.panTo(pos);
  }

  let inputFormValue = document.getElementById('js-inquiry-easy_Map-input');

  if (!isModal) {
    if (mapInput) {
      let autocomplete = new google.maps.places.Autocomplete(mapInput);
      autocomplete.bindTo('bounds', map);
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name', 'formatted_address']);

      // 検索から地図更新
      const setMapByInput = place => {
        if (!place.geometry) {
          let request = {
            query: mapInput.value,
            fields: ['name', 'geometry'],
          };
          service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              const location = results[0].geometry.location;
              map.setCenter(location);
              map.setZoom(mapDefaultZoom);
              setMarker(location);
              setAddressByMap(location, false);
              commonPos = location;
            }
          });
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(mapDefaultZoom);
        }
        setMarker(place.geometry.location);
        const addressData = formatAddress(place)
        setInqAddress(addressData.address, addressData.postcode, addressData.lat, addressData.lng);
        commonPos = place.geometry.location;
      };

      // autocompleteから検索
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setMapByInput(place);
      });

      // searchボタンから検索
      const searchBtn = document.getElementById('js-inquiry-easy_Map-search-btn');
      searchBtn.addEventListener('click', () => {
        setMapByInput(inputFormValue.value);
      });
    }

    // 現在地を取得できる時
    if (mapLocation && isGeolocationEnabled) {
      mapLocation.style.display = 'block';
      mapLocation.addEventListener('click', () => {
        map.setCenter(pos);
        setMarker(pos);
        setAddressByMap(pos, false);
        inputFormValue.value = '';
      });
    } else {
      mapLocation.style.display = 'none';
    }

    map.addListener('click', e => {
      commonPos = e.latLng;
      setMarker(e.latLng);
      setAddressByMap(e.latLng, false);
      inputFormValue.value = '';
    });
  }

  mapLoading.setAttribute('aria-hidden', true);
}

// モーダル
document.querySelector('.js-Modal').addEventListener('click', () => {
    if (!commonPos) initMap(true);
    else buildMap(commonPos, false, false, true);
    const buildingDisplay = inqBuildingElm && inqBuildingElm.value ? 'block' : 'none';
    document.getElementById('js-building-name').textContent = inqBuildingElm.value;
    document.getElementById('js-building-contents').style.display = buildingDisplay;
});
formSubmitCloneBtnElm.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('js-inquiry-easy_Form-submit').click();
    }, 300);
})

window.initMap = initMap;

const googmapApiKey = 'AIzaSyBmiYC8QLzg9uN_RVQ2jkWNR5YRf1z7dfo';
const loadGooglemap = (src, callback) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
}
loadGooglemap(`https://maps.googleapis.com/maps/api/js?key=${googmapApiKey}&libraries=places,geometry&callback=initMap`, initMap);
