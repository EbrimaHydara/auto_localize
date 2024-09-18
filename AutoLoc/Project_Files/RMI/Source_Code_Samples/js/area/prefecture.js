import { prefecture_gadget } from "../csv-data/prefecture-gadget";

const pref_list = document.getElementById('area-prefecture');
const pref_select = document.getElementById('js-shop-Search_Select-pref');
const pref_lists = document.getElementsByClassName('pref-list');

let pref_html = '';
let pref_tmp_name = '';
let pref_tmp_id = '';
let pref_id = [];

for (const entry of prefecture_gadget) {
    if (entry.area2 === '') {
        pref_id[entry.area1] = entry.id;
    }
    else if (pref_tmp_name !== entry.area1) {
        if (entry.area1 === '北海道') {
            pref_html += '<ul>';
        }
        else {
            pref_html += '</dl></li>';
        }
        if (entry.area1 === '香川県') {
            pref_html += '<li class="pref-list" id="tokushima"><dl><dt class="u-Adjust_Mb-0"><a href="/area/tokushima/?l-id=area_prefecture_area_tokushima">徳島県</a></dt></dl></li>';
        }
        pref_tmp_id = pref_id[entry.area1];
        pref_html += '<li class="pref-list" id="' + pref_tmp_id + '"><dl><dt><a href="/area/' + pref_tmp_id + '/?l-id=area_prefecture_area_' + pref_tmp_id + '">' + entry.area1 + '</a></dt><dd><a href="/area/' + pref_tmp_id + '/' + entry.id + '/?l-id=area_prefecture_area_' + pref_tmp_id + '_' + entry.id + '">' + entry.area2 + '</a></dd>';
    }
    else {
        pref_html += '<dd><a href="/area/' + pref_tmp_id + '/' + entry.id + '/?l-id=area_prefecture_area_' + pref_tmp_id + '_' + entry.id + '">' + entry.area2 + '</a></dd>';
    }
    pref_tmp_name = entry.area1;
}

pref_html += '</li></ul>';
pref_list.innerHTML = pref_html;

pref_select.addEventListener('change', function() {
    const selectedOption = pref_select.options[pref_select.selectedIndex];
    const selectedValue = selectedOption.value;

    if (selectedValue === '') {
        for (let i = 0; i < pref_lists.length; i++) {
            pref_lists[i].style.display = 'block';
        }
    }
    else {
        for (let i = 0; i < pref_lists.length; i++) {
            pref_lists[i].style.display = 'none';
        }
        document.getElementById(selectedValue).style.display = 'block';
    }
});

function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn) return;

    const triggerY = 100;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn);
