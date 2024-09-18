<template>
  <div class="u-Adjust_Mt-40">
    <div class="c-Accordion" v-for="(area, index) in code_area">
      <button v-bind:id="['accordion-' + index + code_accordion ]" v-bind:class="['c-Accordion_Trigger js-Accordion_Trigger' + code_accordion]" aria-expanded="false" v-bind:aria-controls="['accordion-content-' + index + code_accordion ]"><span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>{{ area }}</button>
      <div v-bind:id="['accordion-content-' + index + code_accordion ]" v-bind:class="['c-Accordion_Panel js-Accordion_Panel' + code_accordion + 'u-Adjust_Pl-0 u-Adjust_Pr-0']" role="region" v-bind:aria-labelledby="['accordion-' + index + code_accordion ]" aria-hidden="true">
        <div class="c-Table_Wrap u-Adjust_Pt-16">
          <table class="c-Table_Container" style="max-width: 600px;">
            <colgroup>
              <col style="width: 50%;">
              <col style="width: 50%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">国・地域</th>
                <th scope="col">通信料金</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="country in code" v-if="country['エリア'] === area">
                    <td>{{ country['国・地域'] }}</td>
                    <td>{{ country['通信料金'] }}</td>
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
            code_area: [],
            code_accordion: '-guide'
        }
    },
    created () {
        this.getData()
            .then(data => {
              const del_area = ['', 'ー', '衛星通信'];
              const del_country = ['アラスカ', 'サンマリノ', 'プエルトリコ', 'マイヨット島', '米領バージン諸島', 'バチカン', '仏領サン・マルタン'];
              const unfree_country = [];
              let area = [];
              let country = [];
              let temp_area = '';
              let is_free_plan = false;
              let is_loop_break = false;

              if (this.$el.parentNode.getAttribute('data-plan') === "free100gb") {
                  is_free_plan = true;
                  this.code_accordion = '-free100gb';
              }

              for (let i = 0, len = data.length; i < len; i ++) {

                  for (let j = 0, del_len = del_area.length; j < del_len; j ++) {
                      if (data[i]["エリア"] === del_area[j]) {
                          is_loop_break = true;
                          break;
                      }
                  }

                  if (is_loop_break) {
                      is_loop_break = false;

                      continue;
                  }

                  if (is_free_plan) {
                      for (let j = 0, del_len = del_country.length; j < del_len; j ++) {
                          if (data[i]["国・地域"] === del_country[j]) {
                              is_loop_break = true;
                              break;
                          }
                      }

                      if (is_loop_break) {
                          is_loop_break = false;
                          continue;
                      }

                      for (let j = 0, unfree_len = unfree_country.length; j < unfree_len; j ++) {
                          if (data[i]["国・地域"] === unfree_country[j]) {
                              if (data[i]["国・地域"] === unfree_country[j]) {
                                  data[i]["通信料金"] = "ご利用できません";
                                  break;
                              }
                          }
                      }

                      if (data[i]["通信料金"] !== "データ容量から消費") {
                          data[i]["通信料金"] = "ご利用できません";
                      }
                  }

                  if (data[i]["エリア"] !== temp_area) {
                      temp_area = data[i]["エリア"];
                      area.push(temp_area);
                  }

                  if (Number(data[i]["通話料／30秒"]) > 0) {
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
      const $triggers = $('.js-Accordion_Trigger' + this.code_accordion);

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
              url: '/assets/json/guide-international-roaming.json',
              success: function (data) {
                  return data;
              }
            });

            return res;
        }
    }
}
</script>
