import axios from 'axios';

const mainContent = Object.freeze({
  mapBlock: document.querySelector('.js-disaster-map'),
  normalBlock: document.querySelector('.js-normal'),
});

const regDate = Object.freeze({
  year: /[0-9]{4}年/,
  month: /[0-9]{1,2}月/,
  day: /[0-9]{1,2}日/,
  time: /[0-9]{1,2}:[0-9]{2}/,
  full: /(^[0-9]{4}年[0-9]{1,2}月[0-9]{1,2}日\s?[0-9]{1,2}:[0-9]{2})(.*)$/,
});

const zeroPadding = (num, len = 2) => ( '00' + num ).slice( -len );



const getApi = async () => {
  const END_POINT = Object.freeze({
    prod: '/api/generic/',
    devStg: '/api/generic/',
    devLocal: '/assets/json/dummy-recovery-area.json',
  });

  try {
    /** ★★★リリース時、本番APIへの切り替え忘れに注意！！★★★ */
    const res = await axios(END_POINT.prod);
    if (res.status === 200) {
      const data = await res.data;
      if (data.code === 'SUCCESS') {
        return data.settings;
      }

      console.error(`%cAPI通信エラー[data.code]: ${data.code}`, 'color:white; background-color:tomato; padding:2px 4px;');
    } else {
      console.error(`%cAPI通信エラー[ステータスコード]: ${res.status}`, 'color:white; background-color:tomato; padding:2px 4px;');
    }
  } catch (error) {
    console.error(`%cAPI通信エラー[GET]: ${error}`, 'color:white; background-color:tomato; padding:2px 4px;');
  }
}

/**
 * API取得に失敗した場合、平常時の表示にする
 */
const whenErrorGetApiDisplay = () => {
  console.error('%cerror', 'color:white; background-color:tomato; padding:2px 4px;');

  mainContent.mapBlock.setAttribute('aria-hidden', 'true');
  mainContent.normalBlock.setAttribute('aria-hidden', 'false');
}

/**
 * 障害時に復旧エリアマップを表示させる（汎用APIより取得）
 * @param { '0' | 'yyyy年MM月dd日 HH:mm' } disasterStatus '0': 平常時、'yyyy年MM月dd日 HH:mm': 障害時
 */
const showToggleRecoveryArea = (disasterStatus) => {
  console.log(`%csuccess - showToggleRecoveryArea: ${disasterStatus}`, 'color:white; background-color: #28a745; padding:2px 4px;');

  if (disasterStatus === '0') {
    mainContent.mapBlock.setAttribute('aria-hidden', 'true');
    mainContent.normalBlock.setAttribute('aria-hidden', 'false');
  } else {
    mainContent.mapBlock.setAttribute('aria-hidden', 'false');
    mainContent.normalBlock.setAttribute('aria-hidden', 'true');
  }
}

/**
 * 復旧エリアマップのdata-updateを更新する（キャッシュ更新）（汎用APIより取得）
 * @param { '0' | 'yyyy年MM月dd日 HH:mm' } disasterStatus e.g.2023年5月31日 1:00更新
 */
const setUpdateTimeMapContainer = (disasterStatus) => {
  if (disasterStatus === '0') {
    return;
  }

  if (!regDate.full.test(disasterStatus)) {
    console.error('%cerror: 日付の形式が間違ってます e.g.2023年5月31日 1:00更新', 'color:white; background-color:tomato; padding:2px 4px;');

    const errorTxt = document.getElementById('js-error-txt');
    return errorTxt && errorTxt.setAttribute('aria-hidden', false);
  }

  const tmpDatetime = Object.freeze({
    year: disasterStatus.match(regDate.year)[0].replace(/.$/, ''),
    month: disasterStatus.match(regDate.month)[0].replace(/.$/, ''),
    day: disasterStatus.match(regDate.day)[0].replace(/.$/, ''),
    time: disasterStatus.match(regDate.time)[0].replace(/:/, ''),
  });

  const formatedDatetime = tmpDatetime.year + zeroPadding(tmpDatetime.month) + zeroPadding(tmpDatetime.day) + zeroPadding(tmpDatetime.time, 4)

  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    mapContainer.dataset.update = formatedDatetime;
  }
}

/**
 * 復旧エリアマップの更新日時をセットする（汎用APIより取得）
 * @param { string } updateTime e.g.2023年5月31日 1:00更新
 */
const setUpdateTime = (updateTime) => {
  console.log(`%csuccess - setUpdateTime: ${updateTime}`, 'color:white; background-color: #28a745; padding:2px 4px;');

  if (updateTime === '0') {
    return;
  }

  const dateTxt = document.getElementById('js-update-time');

  if (!regDate.full.test(updateTime)) {
    dateTxt.textContent = updateTime;
    return;
  }

  const tmpDatetime = Object.freeze({
    year: updateTime.match(regDate.year)[0].replace(/.$/, ''),
    month: updateTime.match(regDate.month)[0].replace(/.$/, ''),
    day: updateTime.match(regDate.day)[0].replace(/.$/, ''),
    time: updateTime.match(regDate.time)[0],
  });
  const formatedDatetime = `${tmpDatetime.year}-${zeroPadding(tmpDatetime.month)}-${zeroPadding(tmpDatetime.day)}T${zeroPadding(tmpDatetime.time, 5)}`;

  dateTxt.setAttribute('datetime', formatedDatetime);
  dateTxt.textContent = updateTime.replace(regDate.full, '$1');
  dateTxt.insertAdjacentHTML('afterend', updateTime.replace(regDate.full, '$2'));
}

/**
 * 復旧エリアの詳細エリア説明を表示（汎用APIより取得）
 * @param { string } displayTxt 表示するテキスト
 */
const setAreaAnnotation = (displayTxt) => {
  if (displayTxt === '0') {
    return;
  }

  const annotationTxt = document.getElementById('js-disaster-annotation');
  if (annotationTxt) {
    annotationTxt.textContent = displayTxt;
    annotationTxt.setAttribute('aria-hidden', false);
  }
}

/**
 * 障害が発生している別エリアへのリンクの表示非表示
 * @param { object } generalApiData 汎用API
 * @param { 'hokkaido' | 'tohoku' | 'kanto' | 'shinetsu-hokuriku' | 'tokai' | 'kansai' | 'chugoku' | 'shikoku' | 'kyushu' | 'okinawa' } currentArea ユーザーがアクセスしているエリア
 */
const showToggleOtherAreaLinks = (generalApiData, currentArea) => {
  const areaLinks = document.querySelectorAll('#js-area-links > li');
  const isShowAreasData = {}
  const areaMap = {
    'info_recovery-area_display_hokkaido': 'hokkaido',
    'info_recovery-area_display_tohoku': 'tohoku',
    'info_recovery-area_display_kanto': 'kanto',
    'info_recovery-area_display_shinetsu-hokuriku': 'shinetsu-hokuriku',
    'info_recovery-area_display_tokai': 'tokai',
    'info_recovery-area_display_kansai': 'kansai',
    'info_recovery-area_display_chugoku': 'chugoku',
    'info_recovery-area_display_shikoku': 'shikoku',
    'info_recovery-area_display_kyushu': 'kyushu',
    'info_recovery-area_display_okinawa': 'okinawa',
  };

  for (const key in areaMap) {
    if (areaMap[key] === currentArea) {
      continue;
    }
    isShowAreasData[areaMap[key]] = generalApiData[key] !== '0';
  }

  /** 他のエリアで障害が発生していない場合、リンクエリア自体を非表示にする */
  const isFailuredArea = Object.values(isShowAreasData)
                              .includes(true);
  if (!isFailuredArea) {
    const areaLinksContainer = document.getElementById('js-area-links-container');
    areaLinksContainer.setAttribute('aria-hidden', true);
    return;
  }

  for (const areaLink of areaLinks) {
    const splitHref = areaLink.firstElementChild.href.split('/');
    const area = splitHref[splitHref.length - 2];
    const isShow = isShowAreasData[area];

    areaLink.setAttribute('aria-hidden', !isShow);
  }
}

/**
 * 平常時にmapだけのページにアクセスした場合、indexページにreplaceさせる
 * @param { '0' | 'yyyy年MM月dd日 HH:mm' } disasterStatus '0': 平常時、'yyyy年MM月dd日 HH:mm': 障害時
 */
const replaceToIndexPage = (area) => {
  location.replace(`/info/recovery-area/${area}/`);
}

const resizeMap = () => {
  const map = document.getElementById('map');
  const mapLegend = document.getElementById('mapLegend');
  const exitBtn = document.getElementById('exit');

  if (
    map
    && mapLegend
    && exitBtn
  ) {
    const calcMapsize = () => {
    const legendHeight = mapLegend.clientHeight;
    const BOTTOM_GAP = 32;

    map.style.bottom = legendHeight + 'px';
    exitBtn.style.bottom = (legendHeight + BOTTOM_GAP) + 'px';
    };

    calcMapsize();
    window.addEventListener('resize', calcMapsize);
  }
}

export {
  getApi,
  showToggleRecoveryArea,
  showToggleOtherAreaLinks,
  setUpdateTimeMapContainer,
  setUpdateTime,
  setAreaAnnotation,
  whenErrorGetApiDisplay,
  replaceToIndexPage,
  resizeMap,
}
