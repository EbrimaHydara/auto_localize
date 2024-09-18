import { displayAttention } from "../common/attention-info";

// Get ModelName
const model = window.location.pathname.split("/")[3];

const $dispInfo = $('#emergency-info');

if ($dispInfo) {
    $.ajax({
        url: '/web-api/attention-product/' + model + '/',
        dataType: 'json'
    })
    .then(data => {
        const html = displayAttention(data)
        $dispInfo.append(html)
    })
    .catch(err => {
        console.log(err);
    });
}

const $dispUpdate = $('#update-software');

if ($dispUpdate) {
    $.ajax({
        url: '/web-api/software/' + model + '/',
        dataType: 'json'
    })
    .then(data => {
        $dispUpdate.append(data.published_date)
    })
    .catch(err => {
        console.log(err);
    });
}
