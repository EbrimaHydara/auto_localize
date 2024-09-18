<template>
    <div class="u-Adjust_Mt-48" id="js-open-renewal-info-top">
        <Shoplist
        :shopResults="shopResults"
        :shopResultsNear="shopResultsNear"
        :shopResultsPlan="shopResultsPlan"
        :shopResultsPlanNear="shopResultsPlanNear"
        :is_shopResults="is_shopResults"
        :is_shopNearResults="is_shopNearResults"
        >
        </Shoplist>
    </div>
</template>

<script>
import Shoplist from "./Shoplist.vue";
export default {
    name: 'OpenRenewalInfo',
    components: {
        Shoplist
    },
    data () {
        return {
            is_shopResults: false,
            is_shopNearResults: -2,
            shopLists: [],
            shopResults: [],
            shopResultsNear: [],
            shopResultsPlan: [],
            shopResultsPlanNear: [],
            path: {
                shopUrl: 'https://network.mobile.rakuten.co.jp/shop-detail/'
            },
        }
    },
    created () {

      let optionObj = {
          "enableHighAccuracy": false,
          "timeout": 8000
        },
        count_time = 0,
        count_geo_time = 0,
        geo_here = null,
        is_here = false,
        is_geo = false;

    if(location.search.length > 0) {
    }

      if (navigator.geolocation) {
        setTimeout(function(){
            navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj);
        }, 0);
      } else {
        errorFunc();
      }

    let loadedGeo = setInterval(function() {
        if (is_geo) {
            clearInterval(loadedGeo);
        }
        count_geo_time += 100;
        if (count_geo_time > 8000) {
            is_geo = true;
        }
    }, 100);

      function successFunc(position) {
        let loadedMap = setInterval(function() {
            if (typeof google !== 'undefined') {
                geo_here = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                clearInterval(loadedMap);
                is_here = true;
                is_geo = true;
            }
            count_time += 100;
            if (count_time > 8000) {
                is_geo = true;
            }
        }, 100);
      }

        function errorFunc( error )
        {
            is_geo = true;
            // エラーコードのメッセージを定義
            let errorMessage = {
                0: "原因不明のエラーが発生しました。" ,
                1: "位置情報の取得が許可されませんでした。" ,
                2: "電波状況などで位置情報が取得できませんでした。" ,
                3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました。" ,
            } ;

        }

        let that = this;
        this.getData()
        .then ( data => {
            let nowDate = 0;

                $.ajax({
                    type: 'GET',
                    cache: false
                }).done(function(data, status, xhr) {
                    try {
                        // サーバーの時間を取得
                        let srvDate = new Date(xhr.getResponseHeader('Date'));
                        nowDate = srvDate.getTime();

                    } catch(e) {
                        // 取得できなかった場合はローカルの時間を取得
                        let srvDate = new Date();
                        nowDate = srvDate.getTime();
                    }
                }).fail(function() {
                    // 取得できなかった場合はローカルの時間を取得
                    let srvDate = new Date();
                     nowDate = srvDate.getTime();
                }).always(function() {
                    that.getData2()
                    .then ( data2 => {
                        for (let j =0, len2 = data2.length; j < len2; j++) {
                            for (let i =0, len = data.length; i < len; i++) {
                               if(data[i].shopID === data2[j].code) {
                                   data[i].所在地 = data2[j].location;
                               }
                            }
                        }

                        for (let i =0, len = data.length; i < len; i++) {
                                let srvDate = new Date(data[i].オープン日);
                                let openDate = srvDate.getTime();
                                let endDate = new Date(data[i].掲載終了日時);
                                let unPublishedDate = endDate.getTime();
                                let startDate = new Date(data[i].掲載開始日時);
                                let publishedDate =　startDate.getTime();

                                let openyear = (srvDate.getFullYear());
                                let openmonth = (srvDate.getMonth()+1);
                                let opendate = (srvDate.getDate());
                                let formatdate = (openyear + "年" + openmonth + "月" + opendate + "日");
                                data[i].フォーマットデート = formatdate;

                                if (typeof data[i].所在地 !== "undefined") {
                                    if (nowDate > publishedDate) {
                                        if (nowDate < unPublishedDate) {
                                            if (openDate < nowDate) {
                                                that.shopResults.push(data[i]);
                                                that.shopResultsNear.push(data[i]);
                                            }
                                            else {
                                                that.shopResultsPlan.push(data[i]);
                                                that.shopResultsPlanNear.push(data[i]);
                                            }
                                        }
                                    }
                                }
                            }

                        that.is_shopResults = true;
                        let loadedMap = setInterval(function(){
                             if (is_geo) {
                                if(is_here){
                                    for (let i =0, len = that.shopResultsNear.length; i < len; i++) {
                                        let geo_shop = new google.maps.LatLng(that.shopResultsNear[i].所在地.latitude, that.shopResultsNear[i].所在地.longitude);
                                        that.shopResultsNear[i].距離　= google.maps.geometry.spherical.computeDistanceBetween(geo_shop, geo_here) / 1000;
                                    }
                                    for (let i =0, len = that.shopResultsPlanNear.length; i < len; i++) {
                                        let geo_shop = new google.maps.LatLng(that.shopResultsPlanNear[i].所在地.latitude, that.shopResultsPlanNear[i].所在地.longitude);
                                        that.shopResultsPlanNear[i].距離　= google.maps.geometry.spherical.computeDistanceBetween(geo_shop, geo_here) / 1000;
                                    }
                                    that.is_shopNearResults = 1;
                                }
                                else {
                                    that.is_shopNearResults = -1;
                                }
                                clearInterval(loadedMap);
                            }
                        }, 100);

                    });
                });
        })
        .catch ( err => {
        });
    },
    methods: {
        getData: async function () {
            const res = await jQuery.ajax({
              url: '/assets/json/shop-open-renewal-info.json',
              success: function (data) {
                  return data;
              }
            });

            return res;
        },
        getData2: async function () {
            //本番
            const shopMasterEP = 'https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops';

            // 検証用
            // const shopMasterEP = '/assets/json/shop_dummy.json';
            // const shopMasterEP = '/assets/json/shop_dummy2.json';

            const res = await jQuery.ajax({
              url: shopMasterEP,
              success: function (data) {
                  return data;
              }
            });

            return res;
        },
        filterPublication (value) {
            let today = new Date();
            const publicationStartDatetime = value.announcement_info.publication_start_datetime.replace(/-/g, '/');
            const termStart = new Date(publicationStartDatetime);
            if (termStart <= today) {
                if (typeof value.announcement_info.publication_end_datetime !== 'undefined') {
                    const publicationEndDatetime = value.announcement_info.publication_end_datetime.replace(/-/g, '/');
                    const termEnd = new Date(publicationEndDatetime);
                    return today <= termEnd ? true : false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
    }
}





</script>


