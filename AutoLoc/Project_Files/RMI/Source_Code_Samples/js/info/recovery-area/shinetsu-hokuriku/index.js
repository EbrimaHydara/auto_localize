import Vue from 'vue';
import CheckboxWrapper from '../../../../vue/info/recovery-area/CheckboxWrapper.vue';
import {
  getApi,
  showToggleRecoveryArea,
  showToggleOtherAreaLinks,
  setUpdateTimeMapContainer,
  setUpdateTime,
  setAreaAnnotation,
  whenErrorGetApiDisplay,
} from '../index.js'
import axios from 'axios'

const fetchRecoveryAreaCsvData = async () => {
    let recoveryAreaList = [];
    try {
      const recoveryAreaResult = await axios({
        method: 'get',
        url: '/files/recovery-area-shinetsu-hokuriku.json',
      });
      return recoveryAreaList = recoveryAreaResult.data;
    } catch(err) {
      return Promise.reject(recoveryAreaList);
    }
}

const init = async () => {
  const recoveryAreaData = await getApi();
  if (!recoveryAreaData) {
    return whenErrorGetApiDisplay();
  }

  const area = 'shinetsu-hokuriku';
  const updateMapData = recoveryAreaData[`info_recovery-area_display_${area}`];
  const annotationTxt = recoveryAreaData[`info_recovery-area_display_${area}_text`];

  setUpdateTimeMapContainer(updateMapData);

  await import(`../../../module/info/recovery-area/${area}/_map.js`);

  const recoveryAreaList = await fetchRecoveryAreaCsvData();

  new Vue({
      render: h => h(CheckboxWrapper, {
          props: {
              recoveryAreaCsvData: recoveryAreaList
          }
      })
  }).$mount('#checkbox-wrapper');

  showToggleRecoveryArea(updateMapData);
  setUpdateTime(updateMapData);
  setAreaAnnotation(annotationTxt);
  showToggleOtherAreaLinks(recoveryAreaData, area);
}

window.addEventListener('DOMContentLoaded', init);
