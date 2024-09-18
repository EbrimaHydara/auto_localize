const formAction = document.getElementById('js-questionare-form');
const LeadText = document.getElementById('js-questionare-lead');
const employeeName = document.getElementById("employeeName");
const company = document.getElementById("company");
const companyAdress = document.getElementById("companyAdress");
const AffiliatedCompany = document.getElementById("AffiliatedCompany");
const AffiliatedCompanyAdress = document.getElementById("AffiliatedCompanyAdress");
const submitButton = document.getElementById("submitButton");
const error = document.getElementsByClassName('js-questionare-error')[0];

// パラメータ痛出
let urlText = window.location.search;
let url = new URLSearchParams(urlText);
let param = url.get('cp');
let campaignText;

if (param === 'byod') {
    campaignText = `Rakuten最強プランのお申し込みで、20,000ポイントプレゼントキャンペーン`;
} else if (param === 'pointback') {
    campaignText = `楽天モバイルご契約者様なら毎月500ポイントバックキャンペーン`;
} else if (param === 'referral') {
    campaignText = `Rakuten最強プランご紹介で、合計20,000ポイントプレゼント`;
} else {
    campaignText = '';
}

document.getElementById('campaignText').innerText = campaignText;


// リード文だしわけ
switch(param){
    case 'pointback':
        LeadText.innerText = "エントリー期間内に本アンケートページでご回答いただけない場合は特典適用対象外となりますので必ずご回答をお願いいたします。";
        break;
    default:
        LeadText.innerText = "エントリー期間内且つお申し込み前に本アンケートページでご回答いただけない場合は特典適用対象外となりますので必ずご回答をお願いいたします。";
}

// 1の項目が2文字以上入力されたらボタンをactiveにする
function completeForm() {
    if (employeeName.value.length <= 1) {
        submitButton.setAttribute("aria-disabled", "true");
    } else {
        submitButton.removeAttribute("aria-disabled");
    }
}

// 属性名付与の関数
const giveAttributeFunction = (target, name, change) => {
    target.setAttribute(name, change);
}

// パラメータがないまたはパラメータが間違っている場合エラー文言を表示する関数
const showError = () =>{
    formAction.classList.add("areaQuestionare-Util_Hidden");
    error.classList.remove("areaQuestionare-Util_Hidden");
}

// ボタンを有効にするイベント
employeeName.addEventListener("input",completeForm);

//  初期化
let employeeNameCode = "";
let companyCode ="";
let companyAdressCode = "";
let AffiliatedCompanyCode = "";
let AffiliatedCompanyAdressCode = "";

// パラメータによって内容を変更する(caseはフォームの個数分記載)
if (param) {
    switch(param) {
        case "byod":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40852";
            employeeNameCode = "answers[40852_277463]";
            companyCode = "answers[40852_277464]";
            companyAdressCode = "answers[40852_277465]";
            AffiliatedCompanyCode = "answers[40852_277466]";
            AffiliatedCompanyAdressCode = "answers[40852_277467]";
            break;
        case "pointback":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40853";
            employeeNameCode = "answers[40853_277468]";
            companyCode = "answers[40853_277469]";
            companyAdressCode = "answers[40853_277470]";
            AffiliatedCompanyCode = "answers[40853_277471]";
            AffiliatedCompanyAdressCode = "answers[40853_277472]";
            break;
        case "referral":
            formAction.action = "https://form.rakuten.co.jp/ans/apply/40854";
            employeeNameCode = "answers[40854_277473]";
            companyCode = "answers[40854_277474]";
            companyAdressCode = "answers[40854_277475]";
            AffiliatedCompanyCode = "answers[40854_277476]";
            AffiliatedCompanyAdressCode = "answers[40854_277477]";
            break;
        default:
            // パラメータがどのケースにも当てはまらない場合
            showError();
    }
    // 一項目に一つのコンテンツしかないものへの属性付与
    giveAttributeFunction(employeeName,"name", employeeNameCode);
    giveAttributeFunction(company,"name", companyCode);
    giveAttributeFunction(companyAdress,"name", companyAdressCode);
    giveAttributeFunction(AffiliatedCompany,"name",AffiliatedCompanyCode);
    giveAttributeFunction(AffiliatedCompanyAdress,"name",AffiliatedCompanyAdressCode);
} else {
    showError();
}
