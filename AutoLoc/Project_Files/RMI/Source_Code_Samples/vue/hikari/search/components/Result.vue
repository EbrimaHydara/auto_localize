<template>
    <div class="u-Adjust_Mt-24" id="js-result-top">
        <h2 class="c-Heading_Lv2">検索結果　{{ itemTotal }}件</h2>
        <transition-group name="search-Vue_Animation" class="search-Result" tag="ul" mode="out-in">
          <li v-for="item of items" :key="item.id">
              <template v-if="item.ctg">
                  <span class="search-Result_Label" v-for="ctg of item.ctg" :key="ctg.id">
                      {{ ctg | displayCategory }}
                  </span>
              </template>
              <template v-else>
                  <span class="search-Result_Label">その他</span>
              </template>

              <span class="search-Result_Title">
                  <a :href="modifyUrl(path.sitedomain + item.url + urlParameter)" @click="beacon(item.id)" v-html="$options.filters.optimalTxt(item.title, searchWord, 100)"></a>
              </span>
              <p class="u-Adjust_Mt-8" v-html="$options.filters.optimalTxt(item.text, searchWord, 100)"></p>
          </li>
        </transition-group>
    </div>
  </template>

  <script>
  import Store from "../Store.js";
  export default {
      props: [
          'searchWord',
          'items',
          'itemTotal'
      ],
      data() {
          return {
              scroll: false,
              path: {
                  sitedomain : ''
              },
              urlParameter: '',
              fromSupport: false,
              state: Store.state,
          }
      },
      created() {
          this.isFromSupport();
          this.addLid();
      },
      updated() {
          if( !this.scroll ) {
              this.scroll = true;
          } else {
              const element = document.getElementById('js-result-top');
              const rect = element.getBoundingClientRect();
              const position = rect.top + window.pageYOffset;
              document.documentElement.scrollTop = position;
          }
          let itemId = [];
          for( let item of this.items ) {
              itemId.push(item.id);
          }

          console.log('検索ワード:' + this.searchWord);
          console.log('アイテムIDの配列:');
          console.log(itemId);
          this.addLid();

          as_beacon_search_default(this.searchWord, itemId);
      },
      methods: {
          addLid: function() {
              const currentParameter = location.search;
              const getCategory = (target) => {
                  const pre = 'opt_ctg=';
                  if (target.indexOf(pre) > -1) {
                      const catIndexStart = target.indexOf(pre);
                      const paramSliced = target.slice(catIndexStart + 8);
                      if (paramSliced.indexOf('&') > -1) {
                          const catIndexEnd = paramSliced.indexOf('&');
                          const catStr = paramSliced.substring(0, catIndexEnd);
                          return catStr;
                      } else {
                          return paramSliced;
                      }
                  }
              };
              const currentCategory = getCategory(currentParameter);
              if (currentCategory === 'faq') {
                  this.urlParameter = this.fromSupport ? '?l-id=' + 'support_top_search' : '?l-id=' + 'search_top_faq';
              } else if (currentCategory === '') {
                  this.urlParameter = '?l-id=' + 'search_top';
              }
          },
          modifyUrl: function(target) {
              const slashIndex = target.lastIndexOf('/');
              const query = target.substring(slashIndex);
              const regexp = /\?/g;
              const count = query.match(regexp) ? query.match(regexp).length : 0;
              if (count == 2) {
                  const paramIndex = target.lastIndexOf('?');
                  const pre = target.slice(0, paramIndex);
                  const post = target.slice(paramIndex + 1);
                  const replaced = '&';
                  return pre + replaced + post;
              } else {
                  return target;
              }
          },
          isFromSupport: function() {
              const l_id = 'support_top_search';
              const currentParameter = location.search;
              if (currentParameter.indexOf(`l-id=${ l_id }`) > -1) {
                  this.fromSupport = true;
              }
          }
      }
  };
  </script>
