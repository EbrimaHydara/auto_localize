<template>
  <div class="u-Adjust_Mt-40">
    <div class="c-Accordion" v-for="(area, index) in code_area">
      <button v-bind:id="['accordion-country-link' + index ]" class="c-Accordion_Trigger js-Accordion_Trigger-guide-link" aria-expanded="false" v-bind:aria-controls="['accordion-content-country-link' + index ]"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span><span class="c-Txt_Emp-01">{{ area }}</span></button>
      <div v-bind:id="['accordion-content-country-link' + index ]" class="c-Accordion_Panel js-Accordion_Panel-guide u-Adjust_Pl-0 u-Adjust_Pr-0" role="region" v-bind:aria-labelledby="['accordion-country-link' + index ]" aria-hidden="true">
        <div class="c-Table_Wrap-scroll u-Adjust_Pt-16">
          <table class="c-Table_Container u-Adjust_W-720">
            <colgroup>
              <col style="width: 40%;">
              <col style="width: 15%;">
              <col style="width: 45%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">相手の電話番号の国・地域</th>
                <th scope="col">国番号</th>
                <th scope="col">Rakuten Linkアプリを利用した場合<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">円（不課税）／70文字（全角半角問わず）</span></th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="country in code" v-if="country['エリア'] === area">
                    <td>{{ country['国名'] }}</td>
                    <td>{{ country['国番号'] }}</td>
                    <td>{{ country['Rakuten Link使用時料金'] }}</td>
                </tr>
            </tbody>
          </table>
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
            code_area: []
        }
    },
    created () {
        this.getData()
            .then(data => {
              let area = [];
              let country = [];
              let temp_area = '';

              for (let i = 0, len = data.length; i < len; i ++) {
                  if (data[i]["エリア"] === '' || data[i]["エリア"] === 'ー' || data[i]["エリア"] === '衛星通信') {
                      continue;
                  }

                  if (data[i]["エリア"] !== temp_area) {
                      temp_area = data[i]["エリア"];
                      area.push(temp_area);
                  }

                  if (Number(data[i]["通話料／30秒"]) >= 0) {
                    data[i]["通話料／30秒"] += "円";
                  }

                  country.push(data[i]);
              }

              this.code = country;
              this.code_area = area;
            })
            .catch(err => {
              // TODO: error handling.
              console.log(err);
            });
    },
    updated  () {
      const $triggers = $('.js-Accordion_Trigger-guide-link');

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
              url: '/assets/json/guide-international-sms.json',
              success: function (data) {
                  return data;
              }
            });

            return res;
        }
    }
}
</script>
