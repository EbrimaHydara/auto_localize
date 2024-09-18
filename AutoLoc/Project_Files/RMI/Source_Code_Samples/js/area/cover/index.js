const getData = function () {
    const area4gLte = '/assets/json/area-4g-lte.json';
    const rawData = $.getJSON(area4gLte);
    return rawData;
};

let prefectures;
const allPrefectures = [];
const areaLte = document.getElementById('area-lte');
let target;

getData().then(data => {
    console.log(data);
    data.reverse().forEach(function(element){
        target = document.querySelector(`[data-pref=${element.prefName}]`);
        target.insertAdjacentHTML('afterbegin', `<li>${element.cityName}${element.cityName_DesignatedCity}</li>`);
    });


    /* DOMレンダリング用
    data.forEach(function(element){
        allPrefectures.push(element.prefName);
    });
    prefectures = Array.from(new Set(allPrefectures));
    for( let i = 0; i < prefectures.length; i++ ) {
        console.log(prefectures[i]);
        areaLte.insertAdjacentHTML('beforeend', `
            <div class="c-Accordion"><button id="accordion-${i}" class="c-Accordion_Trigger js-Accordion_Trigger" aria-expanded="false" aria-controls="accordion-content-${i}"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>${prefectures[i]}</button>
                <div id="accordion-content-${i}" class="c-Accordion_Panel js-Accordion_Panel" role="region" aria-labelledby="accordion-${i}" aria-hidden="true" style="display: none;">
                <ul id="accordion-items-${i}" class="c-List_Text-disc area-Detail_List-horizontal" data-pref="${prefectures[i]}">

                </ul>
                </div>
            </div>
        `);
    }
    */


  })
  .catch(err => {
    // TODO: error handling.
    console.log(err);
  });
