'use strict';

window.RMTOOL = window.RMTOOL || {};

// APIステータス
RMTOOL.API_STATUS = {
  INIT: 0, // 初期値、処理前
  SUCCESS: 1, // 処理成功、データもある
  ERROR: 2, // Ajax通信失敗
  NULL: 3, // 処理は成功したがデータがnull
};

/**
 * Data retrieved from the API
 */
RMTOOL.api = {
  status: {
    scv_ccmp: RMTOOL.API_STATUS.INIT,
    scv: RMTOOL.API_STATUS.INIT,
    ccmp: RMTOOL.API_STATUS.INIT,
    campaign: {
      check: RMTOOL.API_STATUS.INIT,
      entry: RMTOOL.API_STATUS.INIT
    },
    code: null,
    message: null,
  },
  data: {
    scv: null,
    ccmp: null
  },
  datetime: {
    unix: null,
    jst: null
  }
};

/**
 * api
 * @constructor
 * @param {object} option
 */
RMTOOL.Api = function (option) {
  this.url = option.url;
  this.method = option.method;
  this.dataType = (typeof option.dataType !== 'undefined') ? option.dataType : 'json'; // データタイプ default=json
  this.enableCache = (typeof option.enableCache !== 'undefined') ? option.enableCache : false; // キャッシュを使うかどうか default=false
  this.withCredentials = (typeof option.withCredentials !== 'undefined') ? option.withCredentials : true; // Cookieを使うかどうか default=true
};

/**
 * Asynchronous processing
 */
RMTOOL.Api.prototype.fetch = function () {
    var $_self = this;
    var defer = new $.Deferred;
    var ajaxOption = {
      type: $_self.method,
      scriptCharset: 'utf-8',
      dataType: $_self.dataType,
      url: $_self.url,
      timeout: 2000,
      success: function(res, status, xhr) { defer.resolve(res, status, xhr); },
      error: function(err, status, xhr) { defer.reject(err, status, xhr); }
    };
    if(!$_self.enableCache){
      ajaxOption.cache = false;
    }
    if($_self.withCredentials){
      ajaxOption.xhrFields = {
        withCredentials: true
      }
    }
    $.ajax(ajaxOption);
    return defer.promise();
  }

/**
 * Call Campaign Apply API
 * @param {string} campaignCode スラッシュで始まる文字列
 * @param {string} specifiedURL
 * @returns
 */
  export const callCampaignApply = function ({campaignCode, specifiedURL, isLocal = false, ekey}) {
    console.log('campaignCode: ', campaignCode);
    console.log('ekey: ', ekey);
    var defer = new $.Deferred;
    if(typeof specifiedURL === 'undefined'){
      specifiedURL = false;
    }
    if(typeof campaignCode === 'undefined' || !campaignCode){
      return defer.reject('Please specify the campaign code.');
    }
    if(typeof ekey === 'undefined' || ekey === null){
      ekey = '';
    } else {
      ekey = `&ekey=${ekey}`;
    }
    console.log('結合後のekey：', ekey)
    var option = {
      url: 'https://api.oubo.rakuten.co.jp/2.0/entry/apply?code=' + campaignCode + ekey,
      method: 'GET',
      enableCache: true,
      withCredentials: true
    };
    // localhostの場合
    if(isLocal){
      option.url = '/assets/json/dummy/dummy_oubo_apply.json';
      option.withCredentials = false;
    }
    // 指定のURLがある場合はそっちを採用
    if(specifiedURL){
      option.url = specifiedURL;
    }
    var ptcApi = new RMTOOL.Api(option);
    console.log(ptcApi)
    ptcApi.fetch()
      .then(function(data, status, xhr) {
        if (data.message !== 'ok'){
          return defer.reject('The message is not "ok".（' + data.message + '）');
        }
        if (!data.results.length){
          return defer.reject('The result is empty.');
        }
        var response = data.results[0];
        // 意図したデータの形式ではない
        if(
          typeof response.campaign === 'undefined'
          || typeof response.campaign.status === 'undefined'
          || typeof response.success === 'undefined'
        ){
          return defer.reject('Data is corrupted.');
        }
        // キャンペーンが開催中以外のステータス（見つからない、開催前、終了後）
        if (response.campaign.status !== 'ongoing') {
          return defer.reject('The campaign status is not "ongoing".（' + response.campaign.status + '）');
        }
        // エントリー失敗
        if(!response.success){
          return defer.reject('Failed to enter the campaign.');
        }
        window.RMTOOL.api.status.campaign.entry = RMTOOL.API_STATUS.SUCCESS;
        defer.resolve(data);
      })
      .fail(function(error, status, xhr) {
        window.RMTOOL.api.status.campaign.entry = RMTOOL.API_STATUS.ERROR;
        window.RMTOOL.api.status.code = error.status;
        window.RMTOOL.api.status.message = xhr;
        defer.reject(error);
      });

    return defer.promise();
  }

  /**
 * Call Campaign Entry Check API
 * Check campaign apply
 * @param {array} campaignCode スラッシュで始まる文字列
 * @param {string} specifiedURL
 * @returns
 */
  export const checkCampaignApply = function ({campaignCode, specifiedURL, isLocal = false}) {
    console.log('campaignCode: ', campaignCode)
    var defer = new $.Deferred;
    if(typeof specifiedURL === 'undefined'){
      specifiedURL = false;
    }
    if(typeof campaignCode === 'undefined' || !(campaignCode instanceof Array) || !campaignCode.length){
      return defer.reject('Please specify the campaign code.');
    }
    var option = {
      url: 'https://api.oubo.rakuten.co.jp/2.0/entry/check?code=' + campaignCode.join(','),
      method: 'GET',
      enableCache: true,
      withCredentials: true
    };
    // localhostの場合
    if(isLocal){
        option.url = '/assets/json/dummy/dummy_oubo.json';
        option.withCredentials = false;
    }
    // 指定のURLがある場合はそっちを採用
    if(specifiedURL){
      option.url = specifiedURL;
    }
    var ptcApi = new RMTOOL.Api(option);
    console.log(ptcApi)
    ptcApi.fetch()
      .then(function(data, status, xhr) {
        console.log('custom fetch OK!!!')
        if (data.message !== 'ok'){
          return defer.reject('The message is not "ok".（' + data.message + '）');
        }
        if (!data.results.length){
          return defer.reject('The result is empty.');
        }

        var result = {};
        data.results.forEach(function(res, idx){
          // 意図したデータの形式ではない
          if(
            typeof res.campaign === 'undefined'
            || typeof res.campaign.status === 'undefined'
            || typeof res.applied === 'undefined'
          ){
            return defer.reject('Data is corrupted.');
          }

          var code = res.campaign.code;
          result[code] = {
            data: res.campaign,
            status: {
              campaign: res.campaign.status,
              applied: res.applied
            }
          };
        });
        window.RMTOOL.api.status.campaign.check = RMTOOL.API_STATUS.SUCCESS;
        console.log(window.RMTOOL.api.status.campaign.check)
        console.log(RMTOOL.API_STATUS.SUCCESS)
        defer.resolve(result);
      })
      .fail(function(error, status, xhr) {
        window.RMTOOL.api.status.campaign.check = RMTOOL.API_STATUS.ERROR;
        window.RMTOOL.api.status.code = error.status;
        window.RMTOOL.api.status.message = xhr;
        defer.reject(error);
      });

    return defer.promise();
  }

/**
 * Get Datetime
 */
export const getDatetime = function () {
    var defer = new $.Deferred;
    if(window.RMTOOL.api.datetime.jst !== null){
      defer.resolve(window.RMTOOL.api.datetime.unix);
      return defer.promise();
    }
    var option = {
      url: '/assets/json/blank.json',
      method: 'GET',
      withCredentials: false,
    };
    var ptcApi = new RMTOOL.Api(option);
    ptcApi.fetch()
      .always(function(data, status, xhr) {
        if (xhr.readyState !== 4 || typeof xhr.getResponseHeader !== 'function') { // xhrリクエストが正常に取れなくなった場合（通信に問題が発生など）
            defer.resolve('');
          } else {
            var date = new Date(xhr.getResponseHeader('Date'));
            if(Number.isNaN(date.getTime())){
              defer.reject('Invalid date');
            }
            window.RMTOOL.api.datetime.jst = date;
            window.RMTOOL.api.datetime.unix = date.getTime();
            defer.resolve(window.RMTOOL.api.datetime.unix);
          }
      });

    return defer.promise();
  }
