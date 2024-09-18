import Vue from 'vue';
import AccessoryList from '../../../../vue/product/accessory/apple/AccessoryList.vue';
import * as Filters from '../../../../vue/common/filters.js';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(AccessoryList)
}).$mount('#accessorylist');



const item = [
{"apple-rm213005": "<p><span class='c-Txt_Alphanumeric-m'>4,180</span>〜<span class='c-Txt_Alphanumeric-m'>5,181</span>円</p>"},
];
setTimeout(function(){
$('.accessory-apple-top-Card').find('a').each(function(){
    var target = $(this).attr("href").split("/")[3];
    for (var i = 0; i < item.length; i++) {
        if(typeof item[i][target] === "string"){
            $(this).closest(".c-Card_Normal").find(".accessory-apple-top-Card_Price").html("<p>" + item[i][target] + "</p>");
        }
    }
});
},1000);