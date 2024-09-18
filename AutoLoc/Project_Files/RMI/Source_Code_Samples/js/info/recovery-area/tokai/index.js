import {
  getApi,
  showToggleRecoveryArea,
  showToggleOtherAreaLinks,
  setUpdateTimeMapContainer,
  setUpdateTime,
  setAreaAnnotation,
  whenErrorGetApiDisplay,
} from '../index.js'

const init = async () => {
  const recoveryAreaData = await getApi();
  if (!recoveryAreaData) {
    return whenErrorGetApiDisplay();
  }

  const area = 'tokai';
  const updateMapData = recoveryAreaData[`info_recovery-area_display_${area}`];
  const annotationTxt = recoveryAreaData[`info_recovery-area_display_${area}_text`];

  setUpdateTimeMapContainer(updateMapData);

  await import(`../../../module/info/recovery-area/${area}/_map.js`);

  showToggleRecoveryArea(updateMapData);
  setUpdateTime(updateMapData);
  setAreaAnnotation(annotationTxt);
  showToggleOtherAreaLinks(recoveryAreaData, area);
}

window.addEventListener('DOMContentLoaded', init);
