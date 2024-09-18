import DOMPurify from 'dompurify';

// const ep = '/hikari/internet/speed/'; // development
const ep = 'https://pubdat.fusioncom.co.jp/dlspeed/'; // production

const dataTokyo = 'tokyo_speedtest.csv';
// const dataSendai = 'sapporo_speedtest.csv';
const dataHiroshima = 'hiroshima_speedtest.csv';

(function($) {

    //Tokyo
    $.ajax({
        cache: false,
        url: ep + dataTokyo
    }).done(function(data) {
        let res = data.split(/\r\n|\n/);
        res.shift();
        res.reverse();
        setData('Tokyo', res);

    }).fail(function(jqXHR, textStatus, errorThrown){
        handleErr('Tokyo');
    });

    //Sendai
    // $.ajax({
    //     cache: false,
    //     url: ep + dataSendai
    // }).done(function(data) {
    //     let res = data.split(/\r\n|\n/);
    //     res.shift();
    //     res.reverse();
    //     setData('Sendai', res);

    // }).fail(function(jqXHR, textStatus, errorThrown){
    //     handleErr('Sendai');
    // });

    //Hiroshima
    $.ajax({
        cache: false,
        url: ep + dataHiroshima
    }).done(function(data) {
        let res = data.split(/\r\n|\n/);
        res.shift();
        res.reverse();
        setData('Hiroshima', res);

    }).fail(function(jqXHR, textStatus, errorThrown){
        handleErr('Hiroshima');
    });

    function setData(city, res) {
        const $res = $(`#js-res-${city}`);
        const $avg = $(`#js-avg-${city}`);

        if ($res[0] && $avg[0]) {
            let rows = '';
            let rowsCount = 0;
            let avg = 0;

            for (const element of res) {
                let cols = element.split(',');
                let speed = Math.round(parseInt(DOMPurify.sanitize(cols[6]), 10) * 8 / 1000000 * 100) / 100;
                if (cols[0].length > 0 && cols[1].replace(/\s/g, '').length > 0 && cols.length > 1) {
                    rows += `<tr><td>${ DOMPurify.sanitize(cols[0]).replace(/-/g, '/') }</td>`;
                    rows += `<td>${ speed }Mbps</td></tr>`;
                    avg += speed;
                    rowsCount++;
                }
                if (rowsCount == 10) {
                    break;
                }
            }

            $res.html(rows);
            $avg.text(`${ Math.round(avg / rowsCount *100) / 100 }Mbps`);
        }

    }

    function handleErr(city) {
        const $table = $(`#js-res-${city}-table`);
        const $msg = $(`#js-res-${city}-msg`);

        $table.hide();
        $msg.text('現在測定中です。しばらく経ってから再度ご確認ください。');
    }
})(jQuery);
