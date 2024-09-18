import {table} from "../common/component/table";

const maintenanceShort = '#js-maintenance-short';
const maintenanceLong = '#js-maintenance-long';
const $maintenanceShort = $(maintenanceShort);
const $maintenanceLong = $(maintenanceLong);

//MEMO: ローカル、STG、本番にて検証する際 読み込みパス変更
const REQUESTS_SHORT_DATA_PATH= '/files/short-maintenance.csv' //'/assets/csv/master_short_test_3.csv'
const REQUESTS_LONG_DATA_PATH= '/files/long-maintenance.csv' //'/assets/csv/master_long_test_3.csv'

const csvConvertJson = (csvArray) =>{
    let jsonArray = [];
    // MEMO: 入稿時含め、改行コード等があるとundefined or 都道府県に余計な文字列が入り表示されない
    let RowArray = csvArray.split('\n').filter(item => !!item).map(item => item.replace("\r",""));
    let items = RowArray[0].split(',');

    for(let i = 1; i < RowArray.length; i++){
        let cellArray = RowArray[i].split(',');
        let line = new Object();
        for(let j = 0; j < items.length; j++){
            line[items[j]] = cellArray[j];
        }
        jsonArray.push(line);
    }
    return jsonArray;
}

if($maintenanceShort) {
    $.ajax({
        url: REQUESTS_SHORT_DATA_PATH,
        dataType: 'text'
    })
    .then(data => {
        let resultData = csvConvertJson(data);
        // console.log(resultData, 'short')
        let prefecture_list = [];
        const $update = $('#js-maintenance-short-update');
        const $updateWrap = $('#js-maintenance-short-update-wrap');
        const $noticeWrap = $('#js-maintenance-short-notice-wrap');
        const $title = $('#js-maintenance-short-title');
        const $select = $('#js-maintenance-short-select');
        const NOT_RESULT_NUM = 0;
        let select_html = '';

        // MEMO: 仕様にてCSVの[テーブルのデフォルト表示]項目で表示切り替え and データに不備があった時用のflag
        let notResultData = resultData.filter(item => item.テーブルのデフォルト表示 !== '');
        let resultDataFlag = resultData.filter(item => item.テーブルのデフォルト表示 === 'TRUE');

        resultData.forEach(data => {
            if (prefecture_list.indexOf(data.都道府県) === -1) {
                prefecture_list.push(data.都道府県);
            }
        });
        prefecture_list.forEach(data => {
            select_html += '<option value="' + data + '">' + data + '</option>';
        });
        $select.append(select_html);
        $update.text(resultData[1].短期メンテナンス工事.replace(/(\d+)\/(\d+)\/(\d+)/, "$1年$2月$3日"));

        if(resultDataFlag.length === NOT_RESULT_NUM && resultData.length !== NOT_RESULT_NUM && notResultData.length === NOT_RESULT_NUM){
            $select.hide();
            $updateWrap.show();
            $noticeWrap.html('<p class="u-Adjust_Mt-24">現在実施中または予定されている短期メンテナンス工事はございません。</p>');
            $title.hide();
            $select.next().hide();
            return;
        }

        $select.on('change', function(){
            const this_val = $(this).val();
            let table_html = '<div class="c-Table_Wrap-scroll u-Adjust_Mt-16"><div class="js-Scrollable"><table class="c-Table_Container info-construction-Table info-construction-Table_Short"><thead><th class="info-construction-Table_Short-startdate">作業開始時間</th><th class="info-construction-Table_Short-enddate">作業終了時間</th><th class="info-construction-Table_Short-area">対象地域</th><th class="info-construction-Table_Short-content">お客様への影響</th></thead><tbody>';
            if (this_val === '') {
                console.log(this_val)
                resultData.forEach(data => {
                    if (data.都道府県 !== '') {
                        table_html += '<tr><td>' + data.作業開始時間 + '</td><td>' + data.作業終了時間 + '</td><td>' + data.対象地域 + '</td><td>' + data.お客様への影響 + '</td></tr>';
                    }
                });
            }

            // if (this_val === '') {
            //     $updateWrap.hide();
            //     $maintenanceShort.hide();
            // }
            else {
                resultData.forEach(data => {
                    if (this_val === '' || data.都道府県 === this_val) {
                        table_html += '<tr><td>' + data.作業開始時間 + '</td><td>' + data.作業終了時間 + '</td><td>' + data.対象地域 + '</td><td>' + data.お客様への影響 + '</td></tr>';
                    }
                });
            }

            table_html += '</tbody></table></div></div>';
            $maintenanceShort.html(table_html).show();
            $updateWrap.show();
            table(maintenanceShort);
            $maintenanceShort.find('table').css("display","table");
        });
        $select.change();
        if(resultDataFlag.length === NOT_RESULT_NUM){
            $maintenanceShort[0].style.display = 'none';
        }
    })
    .catch(err => {
        console.log(err);
    });
}

if($maintenanceLong) {
    $.ajax({
        url: REQUESTS_LONG_DATA_PATH,
        dataType:'text',
    })
    .then(data => {
        let resultData = csvConvertJson(data);
        // console.log(resultData, 'long')
        let prefecture_list = [];
        const $update = $('#js-maintenance-long-update');
        const $updateWrap = $('#js-maintenance-long-update-wrap');
        const $noticeWrap = $('#js-maintenance-long-notice-wrap');
        const $title = $('#js-maintenance-long-title');
        const $select = $('#js-maintenance-long-select');
        const NOT_RESULT_NUM = 0;
        let select_html = '';

        // MEMO: 仕様にてCSVの[テーブルのデフォルト表示]項目で表示切り替え and データに不備があった時用のflag
        let notResultData = resultData.filter(item => item.テーブルのデフォルト表示 !== '');
        let resultDataFlag = resultData.filter(item => item.テーブルのデフォルト表示 === 'TRUE');

        resultData.forEach(data => {
            if (prefecture_list.indexOf(data.都道府県) === -1) {
                prefecture_list.push(data.都道府県);
            }
        });
        $update.text(resultData[1].長期メンテナンス工事.replace(/(\d+)\/(\d+)\/(\d+)/, "$1年$2月$3日"));

        if(resultDataFlag.length === NOT_RESULT_NUM && resultData.length !== NOT_RESULT_NUM && notResultData.length === NOT_RESULT_NUM){
            $select.hide();
            $select.next().hide();
            $updateWrap.show();
            $noticeWrap.html('<p class="u-Adjust_Mt-24">現在実施中または予定されている長期メンテナンス工事はございません。</p>');
            $title.hide();
            return;
        }

        prefecture_list.forEach(data => {
            select_html += '<option value="' + data + '">' + data + '</option>';
        });
        $select.append(select_html);
        $select.on('change', function(){
            const this_val = $(this).val();
            let table_html = '<div class="u-Adjust_Mt-16"><div><table class="c-Table_Container info-construction-Table info-construction-Table_Long"><thead><th class="info-construction-Table_Long-date">作業終了予定日</th><th class="info-construction-Table_Long-area">対象地域</th><th class="info-construction-Table_Long-content">お客様への影響</th></thead><tbody>';

            resultData.forEach(data => {
                if (this_val === '' || data.都道府県 === this_val) {
                    table_html += '<tr><td>' + data.作業終了時期 + '</td><td>' + data.対象地域 + '</td><td>' + data.お客様への影響 + '</td></tr>';
                }
            });

            table_html += '</tbody></table></div></div>';
            $maintenanceLong.html(table_html).show();
            $updateWrap.show();
            table(maintenanceLong);
        });
        $select.change();
        if(resultDataFlag.length === NOT_RESULT_NUM){
            $maintenanceLong[0].style.display = 'none';
        }
    })
    .catch(err => {
        console.log(err);
    });
}
