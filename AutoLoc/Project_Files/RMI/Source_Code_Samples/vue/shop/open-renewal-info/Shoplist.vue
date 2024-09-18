<template>
    <div>

    <h2 class="c-Heading_Lv2" id="anc_Open">新規オープン・リニューアル一覧</h2>
    <p class="c-Txt_Cap u-Adjust_Mt-16" v-if="sortedItemsByOpenDate.length !== 0 && is_shopResults">※工事の状況等により、オープン・リニューアルオープン日は変更の可能性がございます。</p>


    <div class="c-Tab js-Tab u-Adjust_Mt-32" id="tab1" v-if="sortedItemsByOpenDate.length !== 0 && is_shopResults" >
        <ul class="c-Tab_Items" role="tablist">
            <li class="c-Tab_Item" id="tab-menu1" role="tab" aria-selected="true" aria-controls="tab-content1">最新オープン日順</li>
            <li class="c-Tab_Item" id="tab-menu2" role="tab" aria-selected="false" aria-controls="tab-content2">現地点から近い順</li>
        </ul>

        <div class="c-Tab_Panel" id="tab-content1" role="tabpanel" aria-hidden="false" aria-labelledby="tab-menu1">
            <transition-group id="list1" name="open-renewal-info-Search_Animation" class="open-renewal-info-Search_Shoplist" tag="ul" mode="out-in">
            <li class="list-item" v-for="shopResult in sortedItemsByOpenDate" :key="shopResult.shopID">
            <template v-if="shopResult.フラグ === 'リニューアル'">
            <span class="open-renewal-info-Search_Flag is-renewal">リニューアル</span>
            </template>
            <template v-else>
            <span class="open-renewal-info-Search_Flag is-open">オープン</span>
            </template>

            <span class="open-renewal-info-Search_OpenDate">{{ shopResult.フォーマットデート }}</span>
            <a class="open-renewal-info-Search_Link c-Link_Txt" :href="`${ path.shopUrl }${ shopResult.shopID }/`">{{ shopResult.ショップ名 }}</a>
            <span class="open-renewal-info-Search_Address">{{ shopResult.所在地.prefecture }}{{shopResult.所在地.city}}{{shopResult.所在地.address}}{{shopResult.所在地.building_name}}</span>
            </li>
            </transition-group>
            <button v-if="(shopResults.length - count1) > 0" class="c-News_Readmore u-Adjust_Mt-16" type="button" @click="isMore1">
            <span class="c-Icon_Chevron-right c-News_Readmore-arrow"></span>さらに見る
            </button>
        </div>
        <div class="c-Tab_Panel" id="tab-content2" role="tabpanel" aria-hidden="true" aria-labelledby="tab-menu2">
            <div v-if="is_shopNearResults === 1">
            <transition-group name="open-renewal-info-Search_Animation" class="open-renewal-info-Search_Shoplist" tag="ul" mode="out-in">
            <li class="list-item" v-for="shopResult in sortedItemsByOpenDateNear" :key="shopResult.shopID">
            <template v-if="shopResult.フラグ === 'リニューアル'">
            <span class="open-renewal-info-Search_Flag is-renewal">リニューアル</span>
            </template>
            <template v-else>
            <span class="open-renewal-info-Search_Flag is-open">オープン</span>
            </template>
            <span class="open-renewal-info-Search_OpenDate">{{ shopResult.フォーマットデート }}</span>
            <a class="open-renewal-info-Search_Link c-Link_Txt" :href="`${ path.shopUrl }${ shopResult.shopID }/`">{{ shopResult.ショップ名 }}</a>
            <span class="open-renewal-info-Search_Address">{{ shopResult.所在地.prefecture }}{{shopResult.所在地.city}}{{shopResult.所在地.address}}{{shopResult.所在地.building_name}}</span>
            </li>
            </transition-group>
            <button v-if="(shopResultsNear.length - count2) > 0" class="c-News_Readmore u-Adjust_Mt-16" type="button" @click="isMore2">
            <span class="c-Icon_Chevron-right c-News_Readmore-arrow"></span>さらに見る
            </button>
            </div>
            <div v-else-if="is_shopNearResults === -2">
                <div class="open-renewal-info-Search_Loader"></div>
            </div>
            <div v-else>
                <p class="u-Adjust_Mt-32">位置情報をオンにして、再度ページの読み込みをしてください。</p>
            </div>
        </div>
    </div>
    <div v-else-if = "is_shopResults" class="u-Adjust_Mt-16">
        <p>
        ただいま、お知らせする情報がございません。<br>
        オープン・リニューアルしましたショップがありましたら、こちらでお知らせいたします。
        </p>
    </div>
    <div v-else>
        <div class="open-renewal-info-Search_Loader"></div>
    </div>


    <div class="u-Adjust_Mt-64">
    <h2 class="c-Heading_Lv2" id="anc_Plan">近日オープン・リニューアル予定一覧</h2>
    <p class="c-Txt_Cap u-Adjust_Mt-16" v-if="sortedItemsByOpenDatePlan.length !== 0 && is_shopResults">※工事の状況等により、オープン・リニューアルオープン日は変更の可能性がございます。</p>

        <div class="c-Tab js-Tab u-Adjust_Mt-32" id="tab2" v-if="sortedItemsByOpenDatePlan.length !== 0 && is_shopResults" >
        <ul class="c-Tab_Items" role="tablist">
            <li class="c-Tab_Item" id="tab-menu3" role="tab" aria-selected="true" aria-controls="tab-content3">オープン予定日順</li>
            <li class="c-Tab_Item" id="tab-menu4" role="tab" aria-selected="false" aria-controls="tab-content4">現地点から近い順</li>
        </ul>
        <div class="c-Tab_Panel" id="tab-content3" role="tabpanel" aria-hidden="false" aria-labelledby="tab-menu3">
            <transition-group id="list2" name="open-renewal-info-Search_Animation" class="open-renewal-info-Search_Shoplist" tag="ul" mode="out-in">
            <li class="list-item" v-for="shopResult in sortedItemsByOpenDatePlan" :key="shopResult.shopID">
            <template v-if="shopResult.フラグ === 'リニューアル'">
            <span class="open-renewal-info-Search_Flag is-renewal">リニューアル</span>
            </template>
            <template v-else>
            <span class="open-renewal-info-Search_Flag is-open">オープン</span>
            </template>
            <span class="open-renewal-info-Search_OpenDate">{{ shopResult.フォーマットデート }}</span>
            <a class="open-renewal-info-Search_Link c-Link_Txt" :href="`${ path.shopUrl }${ shopResult.shopID }/`">{{ shopResult.ショップ名 }}</a>
            <span class="open-renewal-info-Search_Address">{{ shopResult.所在地.prefecture }}{{shopResult.所在地.city}}{{shopResult.所在地.address}}{{shopResult.所在地.building_name}}</span>
            </li>
            </transition-group>
            <button v-if="(shopResultsPlan.length - count3) > 0" class="c-News_Readmore u-Adjust_Mt-16" type="button" @click="isMore3">
            <span class="c-Icon_Chevron-right c-News_Readmore-arrow"></span>さらに見る
            </button>
        </div>
        <div class="c-Tab_Panel" id="tab-content4" role="tabpanel" aria-hidden="true" aria-labelledby="tab-menu4">
            <div v-if="is_shopNearResults === 1">
             <transition-group name="open-renewal-info-Search_Animation" class="open-renewal-info-Search_Shoplist" tag="ul" mode="out-in">
            <li class="list-item" v-for="shopResult in sortedItemsByOpenDatePlanNear" :key="shopResult.shopID">
            <template v-if="shopResult.フラグ === 'リニューアル'">
            <span class="open-renewal-info-Search_Flag is-renewal">リニューアル</span>
            </template>
            <template v-else>
            <span class="open-renewal-info-Search_Flag is-open">オープン</span>
            </template>
            <span class="open-renewal-info-Search_OpenDate">{{ shopResult.フォーマットデート }}</span>
            <a class="open-renewal-info-Search_Link c-Link_Txt" :href="`${ path.shopUrl }${ shopResult.shopID }/`">{{ shopResult.ショップ名 }}</a>
            <span class="open-renewal-info-Search_Address">{{ shopResult.所在地.prefecture }}{{shopResult.所在地.city}}{{shopResult.所在地.address}}{{shopResult.所在地.building_name}}</span>
            </li>
            </transition-group>
            <button v-if="(shopResultsPlanNear.length - count4) > 0" class="c-News_Readmore u-Adjust_Mt-16" type="button" @click="isMore4">
            <span class="c-Icon_Chevron-right c-News_Readmore-arrow"></span>さらに見る
            </button>
            </div>
            <div v-else-if="is_shopNearResults == -2">
                <div class="open-renewal-info-Search_Loader"></div>
            </div>
            <div v-else>
                <p class="u-Adjust_Mt-32">位置情報をオンにして、再度ページの読み込みをしてください。</p>
            </div>
        </div>
    </div>
        <div v-else-if = "is_shopResults" class="u-Adjust_Mt-16">
        <p>
        ただいま、お知らせする情報がございません。<br>
        近日オープン・リニューアル予定のショップがありましたら、こちらでお知らせいたします。
        </p>
    </div>
    <div v-else>
        <div class="open-renewal-info-Search_Loader"></div>
    </div>
    </div>
    </div>
</template>



<script>
import { tab } from "../../../js/common/component/tab";

export default {
    name: 'Shoplist',
    props: [
        'shopResults',
        'shopResultsNear',
        'shopResultsPlan',
        'shopResultsPlanNear',
        'is_shopResults',
        'is_shopNearResults',
    ],
    data () {
        return {
            count1: 10,
            count2: 10,
            count3: 10,
            count4: 10,
            path: {
                shopUrl : 'https://network.mobile.rakuten.co.jp/shop-detail/'
            }
        }
    },
    methods: {
    isMore1() {
      this.count1 += 10
    },
    isMore2() {
      this.count2 += 10
    },
    isMore3() {
      this.count3 += 10
    },
    isMore4() {
      this.count4 += 10
    }
  },
  computed: {

    sortedItemsByOpenDate(){
        return this.shopResults.sort((b, a) => {
        let date_a = new Date(a.オープン日).getTime();
        let date_b = new Date(b.オープン日).getTime();
        return (date_a < date_b) ? -1 : (date_a > date_b) ? 1 : 0;
        }).slice(0, this.count1) ;

    },
    sortedItemsByOpenDateNear(){
        return this.shopResultsNear.sort((a, b) => {
        return (a.距離 < b.距離) ? -1 : (a.距離 > b.距離) ? 1 : 0;
        }).slice(0, this.count2);
    },
    sortedItemsByOpenDatePlan(){
        return this.shopResultsPlan.sort((a, b) => {
        let date_a = new Date(a.オープン日).getTime();
        let date_b = new Date(b.オープン日).getTime();
        return (date_a < date_b) ? -1 : (date_a > date_b) ? 1 : 0;
        }).slice(0, this.count3);
    },
    sortedItemsByOpenDatePlanNear(){
        return this.shopResultsPlanNear.sort((a, b) => {
        return (a.距離 < b.距離) ? -1 : (a.距離 > b.距離) ? 1 : 0;
        }).slice(0, this.count4);
    }
  },

  updated : function(){
        tab($('#js-result-top'));
  }
}
</script>
