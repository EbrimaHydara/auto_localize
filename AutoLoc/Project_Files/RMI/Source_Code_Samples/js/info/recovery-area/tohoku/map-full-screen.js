import Vue from 'vue';
import Modal from '../../../../vue/info/recovery-area/Modal.vue';
import {
  getApi,
  replaceToIndexPage,
  setUpdateTimeMapContainer,
  resizeMap
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
  const area = 'tohoku';

  const recoveryAreaData = await getApi();
  if (!recoveryAreaData || recoveryAreaData[`info_recovery-area_display_${area}`] === '0') {
    replaceToIndexPage(area);
    return;
  }

  const checkboxContent = document.getElementById('checkbox-content');
  const legendsList = JSON.parse(checkboxContent.dataset.legends);
  const legends = {
      activeArea: legendsList.activeArea,
      partnerArea: legendsList.partnerArea,
      inactiveArea: legendsList.inactiveArea,
      inactivePartnerArea: legendsList.inactivePartnerArea,
  }
  const recoveryAreaList = await fetchRecoveryAreaCsvData();

  new Vue({
      render: h => h(Modal, {
          props: {
              recoveryAreaCsvData: recoveryAreaList,
              legends,
          }
      })
  }).$mount('#checkbox-content');

  const updateMapData = recoveryAreaData[`info_recovery-area_display_${area}`];
  setUpdateTimeMapContainer(updateMapData);

  await import(`../../../module/info/recovery-area/${area}/_map-full-screen.js`);

  resizeMap();
}

window.addEventListener('DOMContentLoaded', init);
