<template>
  <div class="u-Adjust_Mt-40">
    <div class="c-Accordion" v-for="(area, index) in code_area" :key="index">
      <button v-bind:id="['accordion-country-os-' + index ]" class="c-Accordion_Trigger js-Accordion_Trigger-guide" aria-expanded="false" v-bind:aria-controls="['accordion-content-country-os-' + index ]"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span><span class="c-Txt_Emp-01">{{ area }}</span></button>
      <div v-bind:id="['accordion-content-country-os-' + index ]" class="c-Accordion_Panel js-Accordion_Panel-guide u-Adjust_Pl-0 u-Adjust_Pr-0" role="region" v-bind:aria-labelledby="['accordion-country-os-' + index ]" aria-hidden="true">
        <div class="c-Table_Wrap-scroll u-Adjust_Pt-16">
          <table class="c-Table_Container u-Adjust_W-1400">
            <colgroup>
              <col style="width: 20%;">
              <col style="width: 20%;">
              <col style="width: 15%;">
              <col style="width: 15%;">
              <col style="width: 15%;">
              <col style="width: 15%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col" rowspan="2">お客様が滞在している国・地域</th>
                <th scope="col" rowspan="2">海外通信事業者</th>
                <th scope="col" colspan="3">発信（円／分）</th>
                <th scope="col" rowspan="2">着信（円／分）</th>
              </tr>
              <tr>
                <th scope="col">滞在先の電話番号</th>
                <th scope="col">日本の電話番号</th>
                <th scope="col">その他の国の電話番号</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(country, index) in code">
                <tr v-if="country['Region'] === area" :key="index">
                    <template v-if="country['滞在国'] !== '---'">
                      <td v-bind:rowspan="[code_country_num[country['滞在国']]]">{{ country['滞在国'] }}</td>
                    </template>
                    <template v-if="country['事業者名'] === 'ご利用できません'">
                      <td colspan="5">ご利用できません</td>
                    </template>
                    <template v-else>
                      <template v-if="country['(Native app) 現地の電話番号へかける（円/分）'] === '---'">
                        <td>
                          {{ removeNote(country['事業者名']) }}
                          <span v-if="area === '北米' && hasNote(country['事業者名'])" class="c-Txt_Cap">※</span>
                        </td>
                        <td colspan="4">ご利用できません</td>
                      </template>
                      <template v-else>
                        <td>
                          {{ removeNote(country['事業者名']) }}
                          <span v-if="area === '北米' && hasNote(country['事業者名']) || area === '中南米' && hasNote(country['事業者名'])" class="c-Txt_Cap">※</span>
                        </td>
                        <td>{{ country['(Native app) 現地の電話番号へかける（円/分）'] }}</td>
                        <td>{{ country['(Native app) 日本の電話番号へかける（円/分）'] }}</td>
                        <td>{{ country['(Native app) その他の国の電話番号へかける（円/分）'] }}</td>
                        <td>{{ country['(Native app) 着信する（円/分）'] }}</td>
                      </template>
                    </template>
                </tr>
              </template>
            </tbody>
          </table>
          <p v-if="area === 'ヨーロッパ'" class="c-Txt_Cap u-Adjust_Mt-16 u-Adjust_Mb-16">
            ※1 利用明細には通信先として「ポルトガル」と記載されます。<br>
            ※2 利用明細には通信先として「イギリス」と記載されます。<br>
            ※3 利用明細には通信先として「スペイン」と記載されます。<br>
            ※4 利用明細には通信先として「イタリア」と記載されます。
          </p>
          <p v-if="area === 'オセアニア'" class="c-Txt_Cap u-Adjust_Mt-16 u-Adjust_Mb-16">
            ※5 利用明細には通信先として「オーストラリア」と記載されます。
          </p>
          <p v-if="area === '北米'" class="c-Txt_Cap u-Adjust_Mt-16 u-Adjust_Mb-16">
            ※ T-Mobileのネットワーク通信事情により、2G及びVoLTEどちらも非対応の製品ををご利用の方は、OS標準の電話アプリによる国際通話をご利用いただけません。Rakuten Linkアプリをご利用ください。<br>
            ※6 利用明細には、国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）サービスの通話の着信の場合、通信先区分として「アメリカ・カナダ」と記載されます。
          </p>
          <p v-if="area === '中南米'" class="c-Txt_Cap u-Adjust_Mt-16 u-Adjust_Mb-16">
            ※ T-Mobileのネットワーク通信事情により、2G及びVoLTEどちらも非対応の製品ををご利用の方は、OS標準の電話アプリによる国際通話をご利用いただけません。Rakuten Linkアプリをご利用ください。<br>
            ※6 利用明細には、国際通話・国際SMS（海外でOS標準の電話アプリ・メッセージアプリ利用時）サービスの通話の着信の場合、通信先区分として「アメリカ・カナダ」と記載されます。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'core-js/modules/es.promise';

export default {
    name: 'InternationalCall',
    data () {
        return {
            code: [],
            code_area: [],
            code_country_num: []
        }
    },
    created () {
        this.getData()
            .then(data => {
              const area = ['北米', 'アジア', 'ヨーロッパ', 'オセアニア', '中南米', '中東', 'アフリカ'];
              let country = [];
              let country_num = [];
              let country_temp = '';

              for (let i = 0, len = data.length; i < len; i ++) {
                  country_temp = data[i]['滞在国'];

                  if (Number(data[i]["(Native app) 現地の電話番号へかける（円/分）"]) >= 0) {
                    data[i]["(Native app) 現地の電話番号へかける（円/分）"] += "円";
                  }
                  if (Number(data[i]["(Native app) 日本の電話番号へかける（円/分）"]) >= 0) {
                    data[i]["(Native app) 日本の電話番号へかける（円/分）"] += "円";
                  }
                  if (Number(data[i]["(Native app) その他の国の電話番号へかける（円/分）"]) >= 0) {
                    data[i]["(Native app) その他の国の電話番号へかける（円/分）"] += "円";
                  }
                  if (Number(data[i]["(Native app) 着信する（円/分）"]) >= 0) {
                    data[i]["(Native app) 着信する（円/分）"] += "円";
                  }
                  if (typeof country_num[country_temp] === 'undefined') {
                    country_num[country_temp] = 1;
                  }
                  else {
                    country_num[country_temp]++;
                    data[i]['滞在国'] = '---';
                  }

                  country.push(data[i]);
              }

              this.code = country;
              this.code_area = area;
              this.code_country_num = country_num;
            })
            .catch(err => {
              // TODO: error handling.
              console.log(err);
            });
    },
    updated  () {
      const $triggers = $('.js-Accordion_Trigger-guide');

      $triggers.each(function() {
          let $self = $(this);
          let $panel = $('#' + $self.attr('aria-controls'));
          let opt = {
              duration: 0,
              queue: false
          };
          let effect = $self.data('effect');

          if ($panel[0]) {
              if ($self.attr('aria-expanded') === 'false') {
                  $panel.hide();
              }

              $self.on('click', function() {

                  if (effect === false) {
                      opt.duration = 0;
                  }
                  else {
                      opt.duration = 200;
                  }

                  if ($self.attr('aria-expanded') === 'true') {
                      $self.attr('aria-expanded', 'false');
                      $panel.attr('aria-hidden', 'true');
                      $panel.stop().slideUp(opt);
                  } else {
                      $self.attr('aria-expanded', 'true');
                      $panel.attr('aria-hidden', 'false');
                      $panel.stop().slideDown(opt);
                  }
              });
          }
      });
    },
    methods: {
        getData: async function () {
            const res = await jQuery.ajax({
              url: '/assets/json/guide-international.json',
              success: function (data) {
                  return data;
              }
            });

            return res;
        }
    },
    computed: {
      hasNote() {
        return (businessName) => {
          return /※/.test(businessName)
        }
      },
      removeNote() {
        return (businessName) => {
          return businessName.replace('※', '')
        }
      },
    }
}
</script>
