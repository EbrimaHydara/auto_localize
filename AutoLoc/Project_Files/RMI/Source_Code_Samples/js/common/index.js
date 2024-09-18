// import tippy from 'tippy.js';
import {headerV2} from "./header-v2";
import {customerTablet} from "./customer-tablet";
import {modal} from "./component/modal";
import {carousel} from "./component/carousel";
import {banner} from "./component/banner";
import {accordion} from "./component/accordion";
import {tab} from "./component/tab";
import {table} from "./component/table";
import {tooltip, tooltipContent} from "./component/tooltip";
import {readmore} from "./component/readmore";
import {scroll} from "./component/scroll";
import {lazyload} from "./component/lazyload";
// import {webfont} from "./component/webfont";
import { dataSort } from "./component/data";
import { form } from "./component/form";
import { attentionAll } from "./attention-all";


$(function(){
    // Lightbox
    // $('.c-Lightbox').modaal({
    //     type: 'image'
    // });
    // $('.c-Lightbox_Thumbnails').each(function() {
    //     let $self = $(this);
    //     $self.slick({
    //         appendArrows: $self.next('.c-Lightbox_Thumbnails-Nav'),
    //         arrows: true,
    //         dots: true,
    //         slidesToShow: 10
    //     });
    // });

    headerV2();
    customerTablet();
    modal();
    carousel();
    banner();
    accordion();
    tab();
    table();
    tooltip();
    tooltipContent();
    readmore();
    scroll();
    // webfont();
    lazyload();
    dataSort();
    form();
    attentionAll();
});
