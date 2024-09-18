const formAction = document.getElementById('js-questionare-form');
const code = document.getElementById('corporateCode');
const staff = document.getElementById('staffNumber');
const stuff = document.getElementById('stuffName');
const consult = document.getElementById('consultContent');
const submitButton = document.getElementById('submitButton');
const radioLabel = document.getElementsByClassName("js-radio-label");
const radioItem = document.getElementsByClassName("js-radio-area");
const checkBoxLabel = document.getElementsByClassName('js-checkbox-label');
const checkBoxItem = document.getElementsByClassName('js-checkbox-area');
const error = document.getElementsByClassName('js-questionare-error')[0];
//  初期化
let corporateCode = "";
let staffNumber ="";
let joinAnswer = "";
let consultName = "";
let stuffName = "";
let consultContent = "";
// プロパティを入れる箱
let joinPropArr = [];
let consultPropArr = [];

// 参加希望項目の選択肢を格納
let joinAnswerArr = {
    "shutoken2":["766026", "766027", "766028"],
    "shutoken3":["766038", "766039", "766040"],
    "shutoken4":["766046", "766047", "766048"],
    "shutoken5":["766054", "766055", "766056"],
    "shutoken6":["766062", "766063", "766064"],
    "shutoken7":["766070", "766071", "766072"],
    "shutoken8":["766078", "766079", "766080"],
    "shutoken9":["766086", "766087", "766088"],
    "shutoken10":["766094", "766095", "766096"],
    "hokkaido2":["767306", "767307", "767308"],
    "hokkaido3":["767314", "767315", "767316"],
    "hokkaido4":["767322", "767323", "767324"],
    "hokkaido5":["767330", "767331", "767332"],
    "tohoku2":["767338", "767339", "767340"],
    "tohoku3":["767346", "767347", "767348"],
    "tohoku4":["767368", "767369", "767370"],
    "tohoku5":["767376", "767377", "767378"],
    "ktkantkoshin2":["767384", "767385", "767386"],
    "ktkantkoshin3":["767392", "767393", "767394"],
    "ktkantkoshin4":["767400", "767401", "767402"],
    "ktkantkoshin5":["767408", "767409", "767410"],
    "tokai2":["767416", "767417", "767418"],
    "tokai3":["767424", "767425", "767426"],
    "tokai4":["767432", "767433", "767434"],
    "tokai5":["767440", "767441", "767442"],
    "kansai2":["767448", "767449", "767450"],
    "kansai3":["767456", "767457", "767458"],
    "kansai4":["767464", "767465", "767466"],
    "kansai5":["767472", "767473", "767474"],
    "kansai6":["767480", "767481", "767482"],
    "kansai7":["767488", "767489", "767490"],
    "chugoku2":["767496", "767497", "767498"],
    "chugoku3":["767504", "767505", "767506"],
    "chugoku4":["767512", "767513", "767514"],
    "chugoku5":["767520", "767521", "767522"],
    "shikoku2":["767528", "767529", "767530"],
    "shikoku3":["767536", "767537", "767538"],
    "shikoku4":["767544", "767545", "767546"],
    "shikoku5":["767552", "767553", "767554"],
    "kyushu2":["767560", "767561", "767562"],
    "kyushu3":["767568", "767569", "767570"],
    "kyushu4":["767576", "767577", "767578"],
    "kyushu5":["767584", "767585", "767586"],
    "okinawa2":["767592", "767593", "767594"],
    "okinawa3":["767600", "767601", "767602"],
    "okinawa4":["767608", "767609", "767610"],
    "okinawa5":["767616", "767617", "767618"],
    "corporate2":["767624", "767625", "767626"],
    "corporate3":["767632", "767633", "767634"],
    "corporate4":["767640", "767641", "767642"],
    "corporate5":["767648", "767649", "767650"],
    "corporate6":["767656", "767657", "767658"],
    "corporate7":["767664", "767665", "767666"],
    "corporate8":["767672", "767673", "767674"],
    "corporate9":["767680", "767681", "767682"],
    "corporate10":["767688", "767689", "767690"],
    "other1":["767703", "767704", "767705"],
    "other2":["767711", "767712", "767713"],
    "other3":["767719", "767720", "767721"],
    "other4":["767727", "767728", "767729"],
    "other5":["767735", "767736", "767737"],
    "other6":["767743", "767744", "767745"],
    "other7":["767751", "767752", "767753"],
    "other8":["767759", "767760", "767761"],
    "other9":["767767", "767768", "767769"],
    "other10":["767775", "767776", "767777"],
}

// 懸念事項の選択肢を格納(フォームの個数分必要)
let consultNameArr = {
    "shutoken2":["766029","766030", "766031", "766032", "766033"],
    "shutoken3":["766041","766042", "766043", "766044", "766045"],
    "shutoken4":["766049","766050", "766051", "766052", "766053"],
    "shutoken5":["766057", "766058", "766059", "766060", "766061"],
    "shutoken6":["766065", "766066", "766067", "766068", "766069"],
    "shutoken7":["766073", "766074", "766075", "766076", "766077"],
    "shutoken8":["766081", "766082", "766083", "766084", "766085"],
    "shutoken9":["766089", "766090", "766091", "766092", "766093"],
    "shutoken10":["766097", "766098", "766099","766100", "766101"],
    "hokkaido2":["767309", "767310", "767311","767312", "767313"],
    "hokkaido3":["767317", "767318", "767319","767320", "767321"],
    "hokkaido4":["767325", "767326", "767327","767328", "767329"],
    "hokkaido5":["767333", "767334", "767335","767336", "767337"],
    "tohoku2":["767341", "767342", "767343","767344", "767345"],
    "tohoku3":["767349", "767350", "767351","767352", "767353"],
    "tohoku4":["767371", "767372", "767373","767374", "767375"],
    "tohoku5":["767379", "767380", "767381","767382", "767383"],
    "ktkantkoshin2":["767387", "767388", "767389","767390", "767391"],
    "ktkantkoshin3":["767395", "767396", "767397","767398", "767399"],
    "ktkantkoshin4":["767403", "767404", "767405","767406", "767407"],
    "ktkantkoshin5":["767411", "767412", "767413","767414", "767415"],
    "tokai2":["767419", "767420", "767421","767422", "767423"],
    "tokai3":["767427", "767428", "767429","767430", "767431"],
    "tokai4":["767435", "767436", "767437","767438", "767439"],
    "tokai5":["767443", "767444", "767445","767446", "767447"],
    "kansai2":["767451", "767452", "767453","767454", "767455"],
    "kansai3":["767459", "767460", "767461","767462", "767463"],
    "kansai4":["767467", "767468", "767469","767470", "767471"],
    "kansai5":["767475", "767476", "767477","767478", "767479"],
    "kansai6":["767483", "767484", "767485","767486", "767487"],
    "kansai7":["767491", "767492", "767493","767494", "767495"],
    "chugoku2":["767499", "767500", "767501","767502", "767503"],
    "chugoku3":["767507", "767508", "767509","767510", "767511"],
    "chugoku4":["767515", "767516", "767517","767518", "767519"],
    "chugoku5":["767523", "767524", "767525","767526", "767527"],
    "shikoku2":["767531", "767532", "767533","767534", "767535"],
    "shikoku3":["767539", "767540", "767541","767542", "767543"],
    "shikoku4":["767547", "767548", "767549","767550", "767551"],
    "shikoku5":["767555", "767556", "767557","767558", "767559"],
    "kyushu2":["767563", "767564", "767565","767566", "767567"],
    "kyushu3":["767571", "767572", "767573","767574", "767575"],
    "kyushu4":["767579", "767580", "767581","767582", "767583"],
    "kyushu5":["767587", "767588", "767589","767590", "767591"],
    "okinawa2":["767595", "767596", "767597","767598", "767599"],
    "okinawa3":["767603", "767604", "767605","767606", "767607"],
    "okinawa4":["767611", "767612", "767613","767614", "767615"],
    "okinawa5":["767619", "767620", "767621","767622", "767623"],
    "corporate2":["767627", "767628", "767629","767630", "767631"],
    "corporate3":["767635", "767636", "767637","767638", "767639"],
    "corporate4":["767643", "767644", "767645","767646", "767647"],
    "corporate5":["767651", "767652", "767653","767654", "767655"],
    "corporate6":["767659", "767660", "767661","767662", "767663"],
    "corporate7":["767667", "767668", "767669","767670", "767671"],
    "corporate8":["767675", "767676", "767677","767678", "767679"],
    "corporate9":["767683", "767684", "767685","767686", "767687"],
    "corporate10":["767691", "767692", "767693","767694", "767695"],
    "other1":["767706", "767707", "767708","767709", "767710"],
    "other2":["767714", "767715", "767716","767717", "767718"],
    "other3":["767722", "767723", "767724","767725", "767726"],
    "other4":["767730", "767731", "767732","767733", "767734"],
    "other5":["767738", "767739", "767740","767741", "767742"],
    "other6":["767746", "767747", "767748","767749", "767750"],
    "other7":["767754", "767755", "767756","767757", "767758"],
    "other8":["767762", "767763", "767764","767765", "767766"],
    "other9":["767770", "767771", "767772","767773", "767774"],
    "other10":["767778", "767779", "767780","767781", "767782"],
};

// パラメータ痛出
let urlText =  window.location.href;
let url = new URL(urlText);
let param = url.searchParams.get("section");

// 1の項目が2文字以上入力されたらボタンをactiveにする
const completeForm = () => {
    if (code.value.length <= 1) submitButton.setAttribute("aria-disabled", "true");
    else submitButton.removeAttribute("aria-disabled");
}

// 属性名付与の関数
const giveAttributeFunction = (target, name, change) => {
    target.setAttribute(name, change);
}

// 配列の中のpropをパラメータごとにpushする関数
const getPropFunction = (prop_1, prop_2) =>{
    joinPropArr.push(prop_1);
    consultPropArr.push(prop_2);
}

// 入力のname,value,forに代入するプロパティを一つずつ表示させる関数
const getAttributeNameFunction = (arr) => {
    for(let value in arr) {
        return arr[value];
    }
}

//for文でid, value,name,labelタグのforを代入する関数
const getAttributeName = (arr, label, name,obj) => {
    for (let i = 0; i < obj.length; i++) {
        giveAttributeFunction(arr[i], "id", `a${obj[i]}`);
        giveAttributeFunction(arr[i], "value", obj[i]);
        giveAttributeFunction(arr[i],"name", name);
        giveAttributeFunction(label[i], "for", `a${obj[i]}`);
    }
}

// パラメータがないまたはパラメータが間違っている場合エラー文言を表示する関数
const showError = () =>{
    formAction.classList.add("areaQuestionare-Util_Hidden");
    error.classList.remove("areaQuestionare-Util_Hidden");
}

// ボタンを有効にするイベント
code.addEventListener("input",completeForm);

// パラメータによって内容を変更する(caseはフォームの個数分記載)
if (param) {
    switch(param) {
        case "shutoken-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40579";
            corporateCode = "answers[40579_275846]";
            staffNumber = "answers[40579_275847]";
            joinAnswer = "answers[40579_275848]";
            consultName = "answers[40579_275849][]";
            stuffName = "answers[40579_275850]";
            consultContent = "answers[40579_275851]";
            getPropFunction(joinAnswerArr.shutoken2, consultNameArr.shutoken2);
            break;
        case "shutoken-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40581";
            corporateCode = "answers[40581_275855]";
            staffNumber = "answers[40581_275856]";
            joinAnswer = "answers[40581_275857]";
            consultName = "answers[40581_275858][]";
            stuffName = "answers[40581_275859]";
            consultContent = "answers[40581_275860]";
            getPropFunction(joinAnswerArr.shutoken3, consultNameArr.shutoken3);
            break;
        case "shutoken-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40582";
            corporateCode = "answers[40582_275861]";
            staffNumber = "answers[40582_275862]";
            joinAnswer = "answers[40582_275863]";
            consultName = "answers[40582_275864][]";
            stuffName = "answers[40582_275865]";
            consultContent = "answers[40582_275866]";
            getPropFunction(joinAnswerArr.shutoken4, consultNameArr.shutoken4);
            break;
        case "shutoken-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40583";
            corporateCode = "answers[40583_275867]";
            staffNumber = "answers[40583_275868]";
            joinAnswer = "answers[40583_275869]";
            consultName = "answers[40583_275870][]";
            stuffName = "answers[40583_275871]";
            consultContent = "answers[40583_275872]";
            getPropFunction(joinAnswerArr.shutoken5, consultNameArr.shutoken5);
            break;
        case "shutoken-6":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40584";
            corporateCode = "answers[40584_275873]";
            staffNumber = "answers[40584_275874]";
            joinAnswer = "answers[40584_275875]";
            consultName = "answers[40584_275876][]";
            stuffName = "answers[40584_275877]";
            consultContent = "answers[40584_275878]";
            getPropFunction(joinAnswerArr.shutoken6, consultNameArr.shutoken6);
            break;
        case "shutoken-7":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40585";
            corporateCode = "answers[40585_275879]";
            staffNumber = "answers[40585_275880]";
            joinAnswer = "answers[40585_275881]";
            consultName = "answers[40585_275882][]";
            stuffName = "answers[40585_275883]";
            consultContent = "answers[40585_275884]";
            getPropFunction(joinAnswerArr.shutoken7, consultNameArr.shutoken7);
            break;
        case "shutoken-8":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40586";
            corporateCode = "answers[40586_275885]";
            staffNumber = "answers[40586_275886]";
            joinAnswer = "answers[40586_275887]";
            consultName = "answers[40586_275888][]";
            stuffName = "answers[40586_275889]";
            consultContent = "answers[40586_275890]";
            getPropFunction(joinAnswerArr.shutoken8, consultNameArr.shutoken8);
            break;
        case "shutoken-9":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40587";
            corporateCode = "answers[40587_275891]";
            staffNumber = "answers[40587_275892]";
            joinAnswer = "answers[40587_275893]";
            consultName = "answers[40587_275894][]";
            stuffName = "answers[40587_275895]";
            consultContent = "answers[40587_275896]";
            getPropFunction(joinAnswerArr.shutoken9, consultNameArr.shutoken9);
            break;
        case "shutoken-10":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40588";
            corporateCode = "answers[40588_275897]";
            staffNumber = "answers[40588_275898]";
            joinAnswer = "answers[40588_275899]";
            consultName = "answers[40588_275900][]";
            stuffName = "answers[40588_275901]";
            consultContent = "answers[40588_275902]";
            getPropFunction(joinAnswerArr.shutoken10, consultNameArr.shutoken10);
            break;
        case "hokkaido-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40636";
            corporateCode = "answers[40636_276242]";
            staffNumber = "answers[40636_276243]";
            joinAnswer = "answers[40636_276244]";
            consultName = "answers[40636_276245][]";
            stuffName = "answers[40636_276246]";
            consultContent = "answers[40636_276247]";
            getPropFunction(joinAnswerArr.hokkaido2, consultNameArr.hokkaido2);
            break;
        case "hokkaido-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40637";
            corporateCode = "answers[40637_276248]";
            staffNumber = "answers[40637_276249]";
            joinAnswer = "answers[40637_276250]";
            consultName = "answers[40637_276251][]";
            stuffName = "answers[40637_276252]";
            consultContent = "answers[40637_276253]";
            getPropFunction(joinAnswerArr.hokkaido3, consultNameArr.hokkaido3);
            break;
        case "hokkaido-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40638";
            corporateCode = "answers[40638_276254]";
            staffNumber = "answers[40638_276255]";
            joinAnswer = "answers[40638_276256]";
            consultName = "answers[40638_276257][]";
            stuffName = "answers[40638_276258]";
            consultContent = "answers[40638_276259]";
            getPropFunction(joinAnswerArr.hokkaido4, consultNameArr.hokkaido4);
            break;
        case "hokkaido-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40639";
            corporateCode = "answers[40639_276260]";
            staffNumber = "answers[40639_276261]";
            joinAnswer = "answers[40639_276262]";
            consultName = "answers[40639_276263][]";
            stuffName = "answers[40639_276264]";
            consultContent = "answers[40639_276265]";
            getPropFunction(joinAnswerArr.hokkaido5, consultNameArr.hokkaido5);
            break;
        case "tohoku-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40640";
            corporateCode = "answers[40640_276266]";
            staffNumber = "answers[40640_276267]";
            joinAnswer = "answers[40640_276268]";
            consultName = "answers[40640_276269][]";
            stuffName = "answers[40640_276270]";
            consultContent = "answers[40640_276271]";
            getPropFunction(joinAnswerArr.tohoku2, consultNameArr.tohoku2);
            break;
        case "tohoku-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40641";
            corporateCode = "answers[40641_276272]";
            staffNumber = "answers[40641_276273]";
            joinAnswer = "answers[40641_276274]";
            consultName = "answers[40641_276275][]";
            stuffName = "answers[40641_276276]";
            consultContent = "answers[40641_276277]";
            getPropFunction(joinAnswerArr.tohoku3, consultNameArr.tohoku3);
            break;
        case "tohoku-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40643";
            corporateCode = "answers[40643_276285]";
            staffNumber = "answers[40643_276286]";
            joinAnswer = "answers[40643_276287]";
            consultName = "answers[40643_276288][]";
            stuffName = "answers[40643_276289]";
            consultContent = "answers[40643_276290]";
            getPropFunction(joinAnswerArr.tohoku4, consultNameArr.tohoku4);
            break;
        case "tohoku-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40644";
            corporateCode = "answers[40644_276291]";
            staffNumber = "answers[40644_276292]";
            joinAnswer = "answers[40644_276293]";
            consultName = "answers[40644_276294][]";
            stuffName = "answers[40644_276295]";
            consultContent = "answers[40644_276296]";
            getPropFunction(joinAnswerArr.tohoku5, consultNameArr.tohoku5);
            break;
        case "ktkantkoshin-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40645";
            corporateCode = "answers[40645_276297]";
            staffNumber = "answers[40645_276298]";
            joinAnswer = "answers[40645_276299]";
            consultName = "answers[40645_276300][]";
            stuffName = "answers[40645_276301]";
            consultContent = "answers[40645_276302]";
            getPropFunction(joinAnswerArr.ktkantkoshin2, consultNameArr.ktkantkoshin2);
            break;
        case "ktkantkoshin-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40646";
            corporateCode = "answers[40646_276303]";
            staffNumber = "answers[40646_276304]";
            joinAnswer = "answers[40646_276305]";
            consultName = "answers[40646_276306][]";
            stuffName = "answers[40646_276307]";
            consultContent = "answers[40646_276308]";
            getPropFunction(joinAnswerArr.ktkantkoshin3, consultNameArr.ktkantkoshin3);
            break;
        case "ktkantkoshin-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40647";
            corporateCode = "answers[40647_276309]";
            staffNumber = "answers[40647_276310]";
            joinAnswer = "answers[40647_276311]";
            consultName = "answers[40647_276312][]";
            stuffName = "answers[40647_276313]";
            consultContent = "answers[40647_276314]";
            getPropFunction(joinAnswerArr.ktkantkoshin4, consultNameArr.ktkantkoshin4);
            break;
        case "ktkantkoshin-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40648";
            corporateCode = "answers[40648_276315]";
            staffNumber = "answers[40648_276316]";
            joinAnswer = "answers[40648_276317]";
            consultName = "answers[40648_276318][]";
            stuffName = "answers[40648_276319]";
            consultContent = "answers[40648_276320]";
            getPropFunction(joinAnswerArr.ktkantkoshin5, consultNameArr.ktkantkoshin5);
            break;
        case "tokai-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40649";
            corporateCode = "answers[40649_276321]";
            staffNumber = "answers[40649_276322]";
            joinAnswer = "answers[40649_276323]";
            consultName = "answers[40649_276324][]";
            stuffName = "answers[40649_276325]";
            consultContent = "answers[40649_276326]";
            getPropFunction(joinAnswerArr.tokai2, consultNameArr.tokai2);
            break;
        case "tokai-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40650";
            corporateCode = "answers[40650_276327]";
            staffNumber = "answers[40650_276328]";
            joinAnswer = "answers[40650_276329]";
            consultName = "answers[40650_276330][]";
            stuffName = "answers[40650_276331]";
            consultContent = "answers[40650_276332]";
            getPropFunction(joinAnswerArr.tokai3, consultNameArr.tokai3);
            break;
        case "tokai-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40651";
            corporateCode = "answers[40651_276333]";
            staffNumber = "answers[40651_276334]";
            joinAnswer = "answers[40651_276335]";
            consultName = "answers[40651_276336][]";
            stuffName = "answers[40651_276337]";
            consultContent = "answers[40651_276338]";
            getPropFunction(joinAnswerArr.tokai4, consultNameArr.tokai4);
            break;
        case "tokai-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40652";
            corporateCode = "answers[40652_276339]";
            staffNumber = "answers[40652_276340]";
            joinAnswer = "answers[40652_276341]";
            consultName = "answers[40652_276342][]";
            stuffName = "answers[40652_276343]";
            consultContent = "answers[40652_276344]";
            getPropFunction(joinAnswerArr.tokai5, consultNameArr.tokai5);
            break;
        case "kansai-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40653";
            corporateCode = "answers[40653_276345]";
            staffNumber = "answers[40653_276346]";
            joinAnswer = "answers[40653_276347]";
            consultName = "answers[40653_276348][]";
            stuffName = "answers[40653_276349]";
            consultContent = "answers[40653_276350]";
            getPropFunction(joinAnswerArr.kansai2, consultNameArr.kansai2);
            break;
        case "kansai-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40654";
            corporateCode = "answers[40654_276351]";
            staffNumber = "answers[40654_276352]";
            joinAnswer = "answers[40654_276353]";
            consultName = "answers[40654_276354][]";
            stuffName = "answers[40654_276355]";
            consultContent = "answers[40654_276356]";
            getPropFunction(joinAnswerArr.kansai3, consultNameArr.kansai3);
            break;
        case "kansai-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40655";
            corporateCode = "answers[40655_276357]";
            staffNumber = "answers[40655_276358]";
            joinAnswer = "answers[40655_276359]";
            consultName = "answers[40655_276360][]";
            stuffName = "answers[40655_276361]";
            consultContent = "answers[40655_276362]";
            getPropFunction(joinAnswerArr.kansai4, consultNameArr.kansai4);
            break;
        case "kansai-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40656";
            corporateCode = "answers[40656_276363]";
            staffNumber = "answers[40656_276364]";
            joinAnswer = "answers[40656_276365]";
            consultName = "answers[40656_276366][]";
            stuffName = "answers[40656_276367]";
            consultContent = "answers[40656_276368]";
            getPropFunction(joinAnswerArr.kansai5, consultNameArr.kansai5);
            break;
        case "kansai-6":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40657";
            corporateCode = "answers[40657_276369]";
            staffNumber = "answers[40657_276370]";
            joinAnswer = "answers[40657_276371]";
            consultName = "answers[40657_276372][]";
            stuffName = "answers[40657_276373]";
            consultContent = "answers[40657_276374]";
            getPropFunction(joinAnswerArr.kansai6, consultNameArr.kansai6);
            break;
        case "kansai-7":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40658";
            corporateCode = "answers[40658_276375]";
            staffNumber = "answers[40658_276376]";
            joinAnswer = "answers[40658_276377]";
            consultName = "answers[40658_276378][]";
            stuffName = "answers[40658_276379]";
            consultContent = "answers[40658_276380]";
            getPropFunction(joinAnswerArr.kansai7, consultNameArr.kansai7);
            break;
        case "chugoku-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40659";
            corporateCode = "answers[40659_276381]";
            staffNumber = "answers[40659_276382]";
            joinAnswer = "answers[40659_276383]";
            consultName = "answers[40659_276384][]";
            stuffName = "answers[40659_276385]";
            consultContent = "answers[40659_276386]";
            getPropFunction(joinAnswerArr.chugoku2, consultNameArr.chugoku2);
            break;
        case "chugoku-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40660";
            corporateCode = "answers[40660_276387]";
            staffNumber = "answers[40660_276388]";
            joinAnswer = "answers[40660_276389]";
            consultName = "answers[40660_276390][]";
            stuffName = "answers[40660_276391]";
            consultContent = "answers[40660_276392]";
            getPropFunction(joinAnswerArr.chugoku3, consultNameArr.chugoku3);
            break;
        case "chugoku-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40661";
            corporateCode = "answers[40661_276393]";
            staffNumber = "answers[40661_276394]";
            joinAnswer = "answers[40661_276395]";
            consultName = "answers[40661_276396][]";
            stuffName = "answers[40661_276397]";
            consultContent = "answers[40661_276398]";
            getPropFunction(joinAnswerArr.chugoku4, consultNameArr.chugoku4);
            break;
        case "chugoku-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40662";
            corporateCode = "answers[40662_276399]";
            staffNumber = "answers[40662_276400]";
            joinAnswer = "answers[40662_276401]";
            consultName = "answers[40662_276402][]";
            stuffName = "answers[40662_276403]";
            consultContent = "answers[40662_276404]";
            getPropFunction(joinAnswerArr.chugoku5, consultNameArr.chugoku5);
            break;
        case "shikoku-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40663";
            corporateCode = "answers[40663_276405]";
            staffNumber = "answers[40663_276406]";
            joinAnswer = "answers[40663_276407]";
            consultName = "answers[40663_276408][]";
            stuffName = "answers[40663_276409]";
            consultContent = "answers[40663_276410]";
            getPropFunction(joinAnswerArr.shikoku2, consultNameArr.shikoku2);
            break;
        case "shikoku-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40664";
            corporateCode = "answers[40664_276411]";
            staffNumber = "answers[40664_276412]";
            joinAnswer = "answers[40664_276413]";
            consultName = "answers[40664_276414][]";
            stuffName = "answers[40664_276415]";
            consultContent = "answers[40664_276416]";
            getPropFunction(joinAnswerArr.shikoku3, consultNameArr.shikoku3);
            break;
        case "shikoku-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40665";
            corporateCode = "answers[40665_276417]";
            staffNumber = "answers[40665_276418]";
            joinAnswer = "answers[40665_276419]";
            consultName = "answers[40665_276420][]";
            stuffName = "answers[40665_276421]";
            consultContent = "answers[40665_276422]";
            getPropFunction(joinAnswerArr.shikoku4, consultNameArr.shikoku4);
            break;
        case "shikoku-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40666";
            corporateCode = "answers[40666_276423]";
            staffNumber = "answers[40666_276424]";
            joinAnswer = "answers[40666_276425]";
            consultName = "answers[40666_276426][]";
            stuffName = "answers[40666_276427]";
            consultContent = "answers[40666_276428]";
            getPropFunction(joinAnswerArr.shikoku5, consultNameArr.shikoku5);
            break;
        case "kyushu-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40667";
            corporateCode = "answers[40667_276429]";
            staffNumber = "answers[40667_276430]";
            joinAnswer = "answers[40667_276431]";
            consultName = "answers[40667_276432][]";
            stuffName = "answers[40667_276433]";
            consultContent = "answers[40667_276434]";
            getPropFunction(joinAnswerArr.kyushu2, consultNameArr.kyushu2);
            break;
        case "kyushu-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40668";
            corporateCode = "answers[40668_276435]";
            staffNumber = "answers[40668_276436]";
            joinAnswer = "answers[40668_276437]";
            consultName = "answers[40668_276438][]";
            stuffName = "answers[40668_276439]";
            consultContent = "answers[40668_276440]";
            getPropFunction(joinAnswerArr.kyushu3, consultNameArr.kyushu3);
            break;
        case "kyushu-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40669";
            corporateCode = "answers[40669_276441]";
            staffNumber = "answers[40669_276442]";
            joinAnswer = "answers[40669_276443]";
            consultName = "answers[40669_276444][]";
            stuffName = "answers[40669_276445]";
            consultContent = "answers[40669_276446]";
            getPropFunction(joinAnswerArr.kyushu4, consultNameArr.kyushu4);
            break;
        case "kyushu-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40670";
            corporateCode = "answers[40670_276447]";
            staffNumber = "answers[40670_276448]";
            joinAnswer = "answers[40670_276449]";
            consultName = "answers[40670_276450][]";
            stuffName = "answers[40670_276451]";
            consultContent = "answers[40670_276452]";
            getPropFunction(joinAnswerArr.kyushu5, consultNameArr.kyushu5);
            break;
        case "okinawa-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40671";
            corporateCode = "answers[40671_276453]";
            staffNumber = "answers[40671_276454]";
            joinAnswer = "answers[40671_276455]";
            consultName = "answers[40671_276456][]";
            stuffName = "answers[40671_276457]";
            consultContent = "answers[40671_276458]";
            getPropFunction(joinAnswerArr.okinawa2, consultNameArr.okinawa2);
            break;
        case "okinawa-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40672";
            corporateCode = "answers[40672_276459]";
            staffNumber = "answers[40672_276460]";
            joinAnswer = "answers[40672_276461]";
            consultName = "answers[40672_276462][]";
            stuffName = "answers[40672_276463]";
            consultContent = "answers[40672_276464]";
            getPropFunction(joinAnswerArr.okinawa3, consultNameArr.okinawa3);
            break;
        case "okinawa-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40673";
            corporateCode = "answers[40673_276465]";
            staffNumber = "answers[40673_276466]";
            joinAnswer = "answers[40673_276467]";
            consultName = "answers[40673_276468][]";
            stuffName = "answers[40673_276469]";
            consultContent = "answers[40673_276470]";
            getPropFunction(joinAnswerArr.okinawa4, consultNameArr.okinawa4);
            break;
        case "okinawa-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40674";
            corporateCode = "answers[40674_276471]";
            staffNumber = "answers[40674_276472]";
            joinAnswer = "answers[40674_276473]";
            consultName = "answers[40674_276474][]";
            stuffName = "answers[40674_276475]";
            consultContent = "answers[40674_276476]";
            getPropFunction(joinAnswerArr.okinawa5, consultNameArr.okinawa5);
            break;
        case "corporate-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40675";
            corporateCode = "answers[40675_276477]";
            staffNumber = "answers[40675_276478]";
            joinAnswer = "answers[40675_276479]";
            consultName = "answers[40675_276480][]";
            stuffName = "answers[40675_276481]";
            consultContent = "answers[40675_276482]";
            getPropFunction(joinAnswerArr.corporate2, consultNameArr.corporate2);
            break;
        case "corporate-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40676";
            corporateCode = "answers[40676_276483]";
            staffNumber = "answers[40676_276484]";
            joinAnswer = "answers[40676_276485]";
            consultName = "answers[40676_276486][]";
            stuffName = "answers[40676_276487]";
            consultContent = "answers[40676_276488]";
            getPropFunction(joinAnswerArr.corporate3, consultNameArr.corporate3);
            break;
        case "corporate-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40677";
            corporateCode = "answers[40677_276489]";
            staffNumber = "answers[40677_276490]";
            joinAnswer = "answers[40677_276491]";
            consultName = "answers[40677_276492][]";
            stuffName = "answers[40677_276493]";
            consultContent = "answers[40677_276494]";
            getPropFunction(joinAnswerArr.corporate4, consultNameArr.corporate4);
            break;
        case "corporate-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40678";
            corporateCode = "answers[40678_276495]";
            staffNumber = "answers[40678_276496]";
            joinAnswer = "answers[40678_276497]";
            consultName = "answers[40678_276498][]";
            stuffName = "answers[40678_276499]";
            consultContent = "answers[40678_276500]";
            getPropFunction(joinAnswerArr.corporate5, consultNameArr.corporate5);
            break;
        case "corporate-6":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40679";
            corporateCode = "answers[40679_276501]";
            staffNumber = "answers[40679_276502]";
            joinAnswer = "answers[40679_276503]";
            consultName = "answers[40679_276504][]";
            stuffName = "answers[40679_276505]";
            consultContent = "answers[40679_276506]";
            getPropFunction(joinAnswerArr.corporate6, consultNameArr.corporate6);
            break;
        case "corporate-7":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40680";
            corporateCode = "answers[40680_276507]";
            staffNumber = "answers[40680_276508]";
            joinAnswer = "answers[40680_276509]";
            consultName = "answers[40680_276510][]";
            stuffName = "answers[40680_276511]";
            consultContent = "answers[40680_276512]";
            getPropFunction(joinAnswerArr.corporate7, consultNameArr.corporate7);
            break;
        case "corporate-8":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40681";
            corporateCode = "answers[40681_276513]";
            staffNumber = "answers[40681_276514]";
            joinAnswer = "answers[40681_276515]";
            consultName = "answers[40681_276516][]";
            stuffName = "answers[40681_276517]";
            consultContent = "answers[40681_276518]";
            getPropFunction(joinAnswerArr.corporate8, consultNameArr.corporate8);
            break;
        case "corporate-9":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40682";
            corporateCode = "answers[40682_276519]";
            staffNumber = "answers[40682_276520]";
            joinAnswer = "answers[40682_276521]";
            consultName = "answers[40682_276522][]";
            stuffName = "answers[40682_276523]";
            consultContent = "answers[40682_276524]";
            getPropFunction(joinAnswerArr.corporate9, consultNameArr.corporate9);
            break;
        case "corporate-10":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40683";
            corporateCode = "answers[40683_276525]";
            staffNumber = "answers[40683_276526]";
            joinAnswer = "answers[40683_276527]";
            consultName = "answers[40683_276528][]";
            stuffName = "answers[40683_276529]";
            consultContent = "answers[40683_276530]";
            getPropFunction(joinAnswerArr.corporate10, consultNameArr.corporate10);
            break;
        case "other-1":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40685";
            corporateCode = "answers[40685_276537]";
            staffNumber = "answers[40685_276538]";
            joinAnswer = "answers[40685_276539]";
            consultName = "answers[40685_276540][]";
            stuffName = "answers[40685_276541]";
            consultContent = "answers[40685_276542]";
            getPropFunction(joinAnswerArr.other1, consultNameArr.other1);
            break;
        case "other-2":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40686";
            corporateCode = "answers[40686_276543]";
            staffNumber = "answers[40686_276544]";
            joinAnswer = "answers[40686_276545]";
            consultName = "answers[40686_276546][]";
            stuffName = "answers[40686_276547]";
            consultContent = "answers[40686_276548]";
            getPropFunction(joinAnswerArr.other2, consultNameArr.other2);
            break;
        case "other-3":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40687";
            corporateCode = "answers[40687_276549]";
            staffNumber = "answers[40687_276550]";
            joinAnswer = "answers[40687_276551]";
            consultName = "answers[40687_276552][]";
            stuffName = "answers[40687_276553]";
            consultContent = "answers[40687_276554]";
            getPropFunction(joinAnswerArr.other3, consultNameArr.other3);
            break;
        case "other-4":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40688";
            corporateCode = "answers[40688_276555]";
            staffNumber = "answers[40688_276556]";
            joinAnswer = "answers[40688_276557]";
            consultName = "answers[40688_276558][]";
            stuffName = "answers[40688_276559]";
            consultContent = "answers[40688_276560]";
            getPropFunction(joinAnswerArr.other4, consultNameArr.other4);
            break;
        case "other-5":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40689";
            corporateCode = "answers[40689_276561]";
            staffNumber = "answers[40689_276562]";
            joinAnswer = "answers[40689_276563]";
            consultName = "answers[40689_276564][]";
            stuffName = "answers[40689_276565]";
            consultContent = "answers[40689_276566]";
            getPropFunction(joinAnswerArr.other5, consultNameArr.other5);
            break;
        case "other-6":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40690";
            corporateCode = "answers[40690_276567]";
            staffNumber = "answers[40690_276568]";
            joinAnswer = "answers[40690_276569]";
            consultName = "answers[40690_276570][]";
            stuffName = "answers[40690_276571]";
            consultContent = "answers[40690_276572]";
            getPropFunction(joinAnswerArr.other6, consultNameArr.other6);
            break;
        case "other-7":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40691";
            corporateCode = "answers[40691_276573]";
            staffNumber = "answers[40691_276574]";
            joinAnswer = "answers[40691_276575]";
            consultName = "answers[40691_276576][]";
            stuffName = "answers[40691_276577]";
            consultContent = "answers[40691_276578]";
            getPropFunction(joinAnswerArr.other7, consultNameArr.other7);
            break;
        case "other-8":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40692";
            corporateCode = "answers[40692_276579]";
            staffNumber = "answers[40692_276580]";
            joinAnswer = "answers[40692_276581]";
            consultName = "answers[40692_276582][]";
            stuffName = "answers[40692_276583]";
            consultContent = "answers[40692_276584]";
            getPropFunction(joinAnswerArr.other8, consultNameArr.other8);
            break;
        case "other-9":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40693";
            corporateCode = "answers[40693_276585]";
            staffNumber = "answers[40693_276586]";
            joinAnswer = "answers[40693_276587]";
            consultName = "answers[40693_276588][]";
            stuffName = "answers[40693_276589]";
            consultContent = "answers[40693_276590]";
            getPropFunction(joinAnswerArr.other9, consultNameArr.other9);
            break;
        case "other-10":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40694";
            corporateCode = "answers[40694_276591]";
            staffNumber = "answers[40694_276592]";
            joinAnswer = "answers[40694_276593]";
            consultName = "answers[40694_276594][]";
            stuffName = "answers[40694_276595]";
            consultContent = "answers[40694_276596]";
            getPropFunction(joinAnswerArr.other10, consultNameArr.other10);
            break;
        default:
            // パラメータがどのケースにも当てはまらない場合
            showError();
    }

    // 一項目に複数選択肢があるものへの属性付与
    getAttributeName(radioItem, radioLabel, joinAnswer, getAttributeNameFunction(joinPropArr));
    getAttributeName(checkBoxItem, checkBoxLabel, consultName, getAttributeNameFunction(consultPropArr));
    // 一項目に一つのコンテンツしかないものへの属性付与
    giveAttributeFunction(code,"name", corporateCode);
    giveAttributeFunction(staff,"name", staffNumber);
    giveAttributeFunction(stuff,"name", stuffName);
    giveAttributeFunction(consult,"name",consultContent);
} else {
    showError();
}
