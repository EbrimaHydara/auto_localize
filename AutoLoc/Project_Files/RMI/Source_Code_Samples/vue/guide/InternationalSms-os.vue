<template>
  <div class="u-Adjust_Mt-40">
    <div class="c-Accordion" v-for="(area, index) in code_area" :key="index">
      <button v-bind:id="['accordion-country-os' + index ]" class="c-Accordion_Trigger js-Accordion_Trigger-guide-os" aria-expanded="false" v-bind:aria-controls="['accordion-content-country-os' + index ]"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span><span class="c-Txt_Emp-01">{{ area }}</span></button>
      <div v-bind:id="['accordion-content-country-os' + index ]" class="c-Accordion_Panel js-Accordion_Panel-guide u-Adjust_Pl-0 u-Adjust_Pr-0" role="region" v-bind:aria-labelledby="['accordion-country-os' + index ]" aria-hidden="true">
        <div class="c-Table_Wrap-scroll u-Adjust_Pt-16">
          <table class="c-Table_Container u-Adjust_W-920">
            <colgroup>
              <col style="width: 30%;">
              <col style="width: 30%;">
              <col style="width: 20%;">
              <col style="width: 20%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">お客様が滞在している国・地域</th>
                <th scope="col">海外通信事業者</th>
                <th scope="col">送信料金<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">円（不課税）／全角70文字・半角160字</span></th>
                <th scope="col">受信料金<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">円（不課税）／全角70文字・半角160字</span></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(country, index) in code">
                <tr v-if="country['Region'] === area" :key="index">
                    <template v-if="country['滞在国'] !== '---'">
                      <td v-bind:rowspan="[code_country_num[country['滞在国']]]">{{ country['滞在国'] }}</td>
                    </template>
                    <template v-if="country['事業者名'] === 'ご利用できません'">
                      <td colspan="3">ご利用できません</td>
                    </template>
                    <template v-else>
                      <td>{{ country['事業者名'] }}</td>
                      <td>{{ country['(Native app) 送信料金（円 / 70文字)'] }}</td>
                      <td>{{ country['(Native app)受信料金（円 / 70文字）'] }}</td>
                    </template>
                </tr>
              </template>
            </tbody>
          </table>
          <p v-if="area === 'ヨーロッパ'" class="c-Txt_Cap u-Adjust_Mt-16">
            ※1 利用明細には通信先として「ポルトガル」と記載されます。<br>
            ※2 利用明細には通信先として「イギリス」と記載されます。<br>
            ※3 利用明細には通信先として「スペイン」と記載されます。<br>
            ※4 利用明細には通信先として「イタリア」と記載されます。
          </p>
          <p v-if="area === 'オセアニア'" class="c-Txt_Cap u-Adjust_Mt-16">
            ※5 利用明細には通信先として「オーストラリア」と記載されます。
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

                  if (Number(data[i]["(Native app) 送信料金（円 / 70文字)"]) >= 0) {
                    data[i]["(Native app) 送信料金（円 / 70文字)"] += "円/通";
                  }
                  else {
                    data[i]["(Native app) 送信料金（円 / 70文字)"] = "ご利用できません";
                  }
                  if (Number(data[i]["(Native app)受信料金（円 / 70文字）"]) >= 0) {
                    data[i]["(Native app)受信料金（円 / 70文字）"] += "円/通";
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
      const $triggers = $('.js-Accordion_Trigger-guide-os');

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
              url: '/assets/json/guide-international2.json',
              success: function (data) {
                  return data;
              }
            });

            return res;
        }
    }
}
</script>
