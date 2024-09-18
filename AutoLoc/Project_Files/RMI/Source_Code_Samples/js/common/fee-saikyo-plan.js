import { headerV2 } from "./header-v2";
import { modal } from "./component/modal";
import { table } from "./component/table";
import { scroll } from "./component/scroll";
import { tab } from "./component/tab";
import { attentionAll } from "./attention-all";

$(function () {
    headerV2();
    modal();
    table();
    scroll();
    tab();
    attentionAll();
});
