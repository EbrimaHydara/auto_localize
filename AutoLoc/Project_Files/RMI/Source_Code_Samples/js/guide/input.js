import validator from "validator";
import DOMPurify from "dompurify";
import "air-datepicker";
import "../library/datepicker.ja";

const confirmBtn = document.getElementById('js-inquiry_Confirm');
const $jsSpamTelNo = $("#js-spam-tel-no");
const $jsReportTelNo = $("#js-report-tel-no");
const $jsSpamMailAddress = $("#js-spam-mail-address");
const $jsReportMailAddress = $("#js-report-mail-address");
const $jsEmailTitle = $("#js-email-title");
const $jsInquiryForm = $("#js-inquiry_Form");
const $jsDispSpamMail = $("#js-disp-spam-mail-address");
const $jsDispReportMail = $("#js-disp-report-mail-address");
const $jsDispEmailTitle = $("#js-disp-email-title");
const $jsDispSpamTel = $("#js-disp-spam-tel-no");
const $jsDispReportTel = $("#js-disp-report-tel-no");
let reportType = "";

// datepicker
$(".js-Datepicker").datepicker({
    classes: "inquiry-Form_Datepicker",
    language: "ja",
    autoClose: true,
    navTitles: {
        days: "<i>yyyy</i>年 MM",
        months: "yyyy 年",
        years: "yyyy1 年 - yyyy2 年"
    },
    prevHtml: '<span class="c-Icon_Chevron-left"></span>',
    nextHtml: '<span class="c-Icon_Chevron-right"></span>',
    todayButton: new Date(),
    minDate: new Date('1970/01/02'),
    maxDate: new Date()
});
const dp = $(".js-Datepicker").data("datepicker");
dp.selectDate(new Date());
$(".js-Datepicker_Btn").on("click", () => {
    dp.show();
});

const reRegExp = /[/]/g,
    reHasRegExp = new RegExp(reRegExp.source);
const escapeRegExp = (string) => {
    return (string && reHasRegExp.test(string))
        ? string.replace(reRegExp, '\\$&')
        : string;
}

// submit form
document.getElementById("js-inquiry_Submit").addEventListener("click", e => {
    let url = '';
    let data = [];
    const contentVal = $elContent.val().replace(/\r?\n/g, "");
    const receiveDate = `${$datePicker.val()} ${$hours.val()}:${$minutes.val()}:00`;

    if (reportType === "迷惑メール") {
        const titleVal = $elEmailTitle.val().replace(/\r?\n/g, "");
        url = 'https://prod-28.japaneast.logic.azure.com:443/workflows/2723d8f4f99a431da98d65056357d059/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=GI1bHJ0eOodP7l_wLD6bCzI9ab1RWcM7htjNf26QXd4'; // 迷惑メール

        data = [{
            sending_method: "mail",
            spam_receive_date: receiveDate,
            spam_mail_address: $elSpamMailAddress.val(),
            report_mail_address: $elReportMailAddress.val(),
            title: escapeRegExp(titleVal),
            email_content: escapeRegExp(contentVal)
        }];
    }
    if (reportType === "迷惑SMS") {
        const reportTelVal = $elReportTelNo.val().replace(/\r?\n/g, "");
        url = 'https://prod-29.japaneast.logic.azure.com:443/workflows/47eba4a7f0574189974d5e3ae94a267b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8na6spNnALYAEIWqasCDWWQGZ4nhI01snVLZAdv5zyU'; // SMS
        data = [{
            sending_method: "sms",
            spam_receive_date: receiveDate,
            spam_tel_no: $elSpamTelNo.val(),
            report_tel_no: escapeRegExp(reportTelVal),
            sms_content: escapeRegExp(contentVal)
        }];
    }

    $.ajax({
        url: url,
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(data)
    }).done(function (data, response, status) {
        console.log("status = " + status, JSON.stringify(status));
        console.log("response", response);
        console.log("data", data);
        $("#modal-confirm").modaal("close");
        window.location.href = '/guide/anti-spam/thanks.html';
    }).fail(function () {
        console.log('error');
    });
});

// validation - type
function chkRequired(el) {
    let msgId = `err-required_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    if (validator.isEmpty(el.value, { ignore_whitespace: true })) {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    } else {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    }
}
function chkNumeric(el) {
    let msgId = `err-numeric_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    if (validator.isNumeric(el.value, { no_symbols: true })) {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    } else {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    }
}
function chkLength(el) {
    let msgId = `err-length_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    let setting = {
        min: isNaN(el.getAttribute("minlength"))
            ? 0
            : parseInt(el.getAttribute("minlength"), 10),
        max: isNaN(el.getAttribute("maxlength"))
            ? 0
            : parseInt(el.getAttribute("maxlength"), 10)
    };
    if (validator.isLength(el.value, setting)) {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    } else {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    }
}
function chkEmail(el) {
    let msgId = `err-email_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    if (validator.isEmail(el.value)) {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    } else {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    }
}
function chkFHWidth(el) {
    let msgId = `err-fhwdth_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    if (!el.value.match(/[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf０-９ｧ-ﾝﾞﾟ]/)) {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    } else {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    }
}
function chkCellPhone(el) {
    let msgId = `err-cellphone_${el.getAttribute("name")}`;
    let msg = document.getElementById(msgId);
    if (el.value.match(/^0[0-9]/g)) {
        el.setAttribute("aria-describedBy", "");
        msg.setAttribute("aria-hidden", true);
        return 0;
    } else {
        el.setAttribute("aria-describedBy", msgId);
        msg.setAttribute("aria-hidden", false);
        return 1;
    }
}
function validateTarget(target, param) {
    let $target = $(target);
    let item = $target.data("validate");
    let nm = $target.attr("name");
    let $disp = $(`#disp-${nm}`);
    let idx = errors.indexOf(nm);
    let results = 0;

    if (item.indexOf("required") > -1) {
        results += chkRequired(target);
    }
    if (item.indexOf("numeric") > -1) {
        results += chkNumeric(target);
    }
    if (item.indexOf("length") > -1) {
        results += chkLength(target);
    }
    if (item.indexOf("email") > -1) {
        results += chkEmail(target);
    }
    if (item.indexOf("fhwdth") > -1) {
        results += chkFHWidth(target);
    }
    if (item.indexOf("cellphone") > -1) {
        results += chkCellPhone(target);
    }

    if (results > 0) {
        $target.attr("aria-invalid", true);
        if (param === "chkAll") {
            if (idx < 0) {
                errors.push(nm);
            }
        }
    } else {
        $target.attr('aria-invalid', false);
        if (param === 'chkAll') {
            if (idx > -1) {
                errors.splice(idx, 1);
            } else {
                $disp.text($target.val());
            }
        }
    }
}

let errors = [];

// validation - お問い合わせ種別
const $reportType = $('[name="report_type"]');
const $datePicker = $('[name="date-picker"]');
const $hours = $('[name="hours"]');
const $minutes = $('[name="minutes"]');
const $elSpamMailAddress = $('[name="spam-mail-address"]');
const $elReportMailAddress = $('[name="report-mail-address"]');
const $elEmailTitle = $('textarea[name="email-title"]');
const $elSpamTelNo = $('[name="spam-tel-no"]');
const $elReportTelNo = $('[name="report-tel-no"]');
const $elContent = $('textarea[name="content"]');
const $elAgree = $('[name="agree"]');
const $dispReportType = $("#disp-report_type");

if ($reportType) {
    $reportType.on('change', function (e) {
        location.hash = e.currentTarget.value === "迷惑メール" ? 'mail' : 'sms';
        reportType = e.currentTarget.value;
        $dispReportType.text(DOMPurify.sanitize(e.currentTarget.value, { ALLOWED_TAGS: [] }));
        chkInquiryType(e.currentTarget.value);
    });
}

// validation - 発生日時
if ($datePicker) {
    $datePicker.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}
if ($hours) {
    $hours.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}
if ($minutes) {
    $minutes.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - 受信したメールアドレス
if ($elSpamMailAddress) {
    $elSpamMailAddress.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - 送信元のメールアドレス
if ($elReportMailAddress) {
    $elReportMailAddress.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - メールの件名
if ($elEmailTitle) {
    $elEmailTitle.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - 受信電話番号
if ($elSpamTelNo) {
    $elSpamTelNo.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - 送信元の電話番号
if ($elReportTelNo) {
    $elReportTelNo.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

// validation - 本文
if ($elContent) {
    $elContent.on("change blur", function (e, param) {
        validateTarget(this, param);
    });
}

function chkSmsAll() {
    if ($datePicker) {
        $datePicker.trigger("change", ["chkAll"]);
    }
    if ($hours) {
        $hours.trigger("change", ["chkAll"]);
    }
    if ($minutes) {
        $minutes.trigger("change", ["chkAll"]);
    }
    if ($elSpamTelNo) {
        $elSpamTelNo.trigger("change", ["chkAll"]);
    }
    if ($elReportTelNo) {
        $elReportTelNo.trigger("change", ["chkAll"]);
    }
    if ($elContent) {
        $elContent.trigger("change", ["chkAll"]);
    }
    if ($elAgree.prop('checked') === true) {
        confirmBtn.setAttribute('aria-disabled', false);
        confirmBtn.disabled = false;
    } else {
        confirmBtn.setAttribute('aria-disabled', true);
        confirmBtn.disabled = true;
    }

    return errors;
}

function chkEmailAll() {
    if ($datePicker) {
        $datePicker.trigger("change", ["chkAll"]);
    }
    if ($hours) {
        $hours.trigger("change", ["chkAll"]);
    }
    if ($minutes) {
        $minutes.trigger("change", ["chkAll"]);
    }
    if ($elSpamMailAddress) {
        $elSpamMailAddress.trigger("change", ["chkAll"]);
    }
    if ($elReportMailAddress) {
        $elReportMailAddress.trigger("change", ["chkAll"]);
    }
    if ($elEmailTitle) {
        $elEmailTitle.trigger("change", ["chkAll"]);
    }
    if ($elContent) {
        $elContent.trigger("change", ["chkAll"]);
    }
    if ($elAgree.prop('checked') === true) {
        confirmBtn.setAttribute('aria-disabled', false);
        confirmBtn.disabled = false;
    } else {
        confirmBtn.setAttribute('aria-disabled', true);
        confirmBtn.disabled = true;
    }

    return errors;
}

function chkInquiryType(value) {
    if (value === "迷惑メール") {
        $jsInquiryForm.show();
        $jsSpamMailAddress.show();
        $jsReportMailAddress.show();
        $jsEmailTitle.show();
        $jsDispSpamMail.show();
        $jsDispReportMail.show();
        $jsDispEmailTitle.show();
        $jsSpamTelNo.hide();
        $jsReportTelNo.hide();
        $jsDispSpamTel.hide();
        $jsDispReportTel.hide();
    }
    if (value === "迷惑SMS") {
        $jsInquiryForm.show();
        $jsSpamTelNo.show();
        $jsReportTelNo.show();
        $jsDispSpamTel.show();
        $jsDispReportTel.show();
        $jsSpamMailAddress.hide();
        $jsReportMailAddress.hide();
        $jsEmailTitle.hide();
        $jsDispSpamMail.hide();
        $jsDispReportMail.hide();
        $jsDispEmailTitle.hide();
    }
}

if ($elAgree) {
    $elAgree.on('change blur', () => {
        if ($elAgree.prop('checked') === true) {
            confirmBtn.setAttribute('aria-disabled', false);
            confirmBtn.disabled = false;
        } else {
            confirmBtn.setAttribute('aria-disabled', true);
            confirmBtn.disabled = true;
        }
    });
}

// modal
const modalConfig = {
    background: "#000033",
    custom_class: "c-Modal",
    overlay_opacity: 0.64,
    content_source: "#modal-confirm"
};
$("#modal-confirm").modaal(modalConfig);

confirmBtn.addEventListener("click", () => {
    if (reportType === "迷惑メール" && chkEmailAll().length === 0) {
        $("#modal-confirm").modaal("open");
    } else if (reportType === "迷惑SMS" && chkSmsAll().length === 0) {
        $("#modal-confirm").modaal("open");
    } else {
        $("body,html").animate(
            { scrollTop: $("#js-inquiry_Form-top").offset().top },
            400,
            "swing"
        );
    }
});

document.getElementById("js-inquiry_Confirm-close").addEventListener("click", () => {
    $("#modal-confirm").modaal("close");
});

const checkLocationHash = () => {
    const hash = location.hash
    const mail = '迷惑メール';
    const sms = '迷惑SMS';

    if (hash.search('#mail') != -1) {
        $reportType[0].checked = true;
        chkInquiryType(mail);
        $dispReportType.text(mail);
        reportType = mail;
    }
    if (hash.search('#sms') != -1) {
        $reportType[1].checked = true;
        chkInquiryType(sms);
        $dispReportType.text(sms);
        reportType = sms;
    }
}
checkLocationHash();