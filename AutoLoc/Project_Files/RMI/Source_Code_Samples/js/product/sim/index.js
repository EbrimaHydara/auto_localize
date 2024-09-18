import { toggleStickeyBottom } from "../../common/helpers/util-scroll";

const trigger = document.getElementById('js-trigger');
const fixedBtn = document.getElementById('js-fixed-btn');

toggleStickeyBottom(fixedBtn, trigger);
