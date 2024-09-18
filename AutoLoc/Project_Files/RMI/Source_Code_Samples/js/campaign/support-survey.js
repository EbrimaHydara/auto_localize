window.addEventListener('DOMContentLoaded', () => {
    const url = location.search;
    if (url.indexOf('?l-id=faq-Review_Btn-positive') !== -1) {
        $('input[id="a745364"]').prop('checked', true);
    } else if (url.indexOf('?l-id=faq-Review_Btn-negative') !== -1) {
        $('input[id="a745365"]').prop('checked', true);
    }
    let referrer = '';
    if (url.indexOf('?stepid=') !== -1) {
        const param = url.split('?stepid=')[1];
        const referrerUrl = 'https://network.mobile.rakuten.co.jp/guide/trouble-check/?stepid=';
        referrer = `${referrerUrl}${param}`;
    } else {
        referrer = document.referrer;
    }
    const inputReferrer = $('input[name="answers[39429_269269]"]');
    inputReferrer.val(referrer);
});

const btn = document.getElementById('confirmBtn');
btn.addEventListener('click', () => {
    checkForm();
})

function doTrim(el) {
    el.value = el.value.replace(/^\s+|\s+$/g, '');
}

function isInput(el) {
    return el.value.length != 0;
}

function isChecked(el) {
    if (el.length) {
        for (var i = 0; i < el.length; i++) {
            if (el[i].checked) {
                return true;
            }
        }
    } else {
        if (el.checked) {
            return true;
        }
    }
    return false;
}

function isLength(el, len) {
    if ("え".length == 2) {
      len *= 2;
    }
    return el.value.length <= len;
}

function zen2han(el) {
    el.value = el.value.replace(/[０]/g, "0");
    el.value = el.value.replace(/[１]/g, "1");
    el.value = el.value.replace(/[２]/g, "2");
    el.value = el.value.replace(/[３]/g, "3");
    el.value = el.value.replace(/[４]/g, "4");
    el.value = el.value.replace(/[５]/g, "5");
    el.value = el.value.replace(/[６]/g, "6");
    el.value = el.value.replace(/[７]/g, "7");
    el.value = el.value.replace(/[８]/g, "8");
    el.value = el.value.replace(/[９]/g, "9");
}

function checkForm() {
    var el;
    var obj = document.enenForm;

    el = obj.elements['answers[39429_269270]'];
    if (!isChecked(el)) {
        alert("「サポートページをご利用いただいた結果、お困りごとは解決できましたか？」を選択してください。");
        return false;
    }

    el = obj.elements['answers[39429_269271]'];
    doTrim(el);
    zen2han(el);
    if (!isInput(el)) {
        alert("「【お困りごとが解決できなかった方へ】今回はどのような情報を探していましたか？　※解決できた場合は「解決できた」と記載ください」を入力してください。");
        return false;
    }

    if (!isLength(el, 1000)) {
        alert("「【お困りごとが解決できなかった方へ】今回はどのような情報を探していましたか？　※解決できた場合は「解決できた」と記載ください」は1000文字以内で入力してください。");
        return false;
    }

    el = obj.elements['answers[39429_269272]'];
    if (!isChecked(el)) {
        alert("「あなたはデジタル製品（スマートフォン、パソコン、ゲーム機など）や通信関連のサービスで利用中に困ったことがあった場合、どのように解決を図りますか。最も当てはまるものをお選びください。」を選択してください。");
        return false;
    }

    el = obj.elements['answers[39429_269273]'];
    if (!isChecked(el)) {
        alert("「あなたが製品やサービス提供元の窓口へ問い合わせをするときに、最もよく使う問合せ手段はなんですか？」を選択してください。");
        return false;
    }

    el = obj.elements['answers[39429_269274]'];
    if (!isChecked(el)) {
        alert("「今回のキャンペーンで「よくあるご質問ページ」または「サポートページ」を閲覧いただきました。今後、もし楽天モバイル利用中に困ったことがあった場合に、「よくあるご質問ページ」または「サポートページ」を使うと思いますか。」を選択してください。");
        return false;
    }

    el = obj.elements['answers[39429_269275]'];
    doTrim(el);
    zen2han(el);
    if (!isInput(el)) {
        alert("「【質問5で「使わないと思う」と答えた方へ】 使わないと思う理由を具体的にお知らせください。※質問５で「使うと思う」と答えた方は、「使うと思う」と記載ください」を入力してください。");
        return false;
    }

    if (!isLength(el, 1000)) {
        alert("「【質問5で「使わないと思う」と答えた方へ】 使わないと思う理由を具体的にお知らせください。※質問５で「使うと思う」と答えた方は、「使うと思う」と記載ください」は1000文字以内で入力してください。");
        return false;
    }

    el = obj.elements['answers[39429_269276]'];
    if (!isChecked(el)) {
        alert("「あなたが閲覧した「よくあるご質問ページ」または「サポートページ」の満足度を教えてください。」を選択してください。");
        return false;
    }

    el = obj.elements['answers[39429_269277]'];
    doTrim(el);
    zen2han(el);
    if (!isInput(el)) {
        alert("「質問7の回答理由を具体的にお知らせください。※当社が不正回答であると合理的に判断した場合は特典対象外となります。 〈不正回答の例〉 ・質問に関係のない文字が羅列入力されている（例：「ああああ」、「aaaa」） ・具体的な回答が入力されていない（例：「特になし」、「なんとなく」）」を入力してください。");
        return false;
    }

    if (!isLength(el, 1000)) {
        alert("「質問7の回答理由を具体的にお知らせください。※当社が不正回答であると合理的に判断した場合は特典対象外となります。 〈不正回答の例〉 ・質問に関係のない文字が羅列入力されている（例：「ああああ」、「aaaa」） ・具体的な回答が入力されていない（例：「特になし」、「なんとなく」）」は1000文字以内で入力してください。");
        return false;
    }

    el = obj.elements['answers[39429_269278][]'];
    if (!isChecked(el)) {
        alert("「今回のキャンペーンに参加した理由を教えてください。」を選択してください。");
        return false;
    }

    confirmForm();
    confirmModal();
}

function confirmForm() {

    // answer1
    const selectedAnswer1 = $('input[name="answers[39429_269270]"]:checked').parent().text() || '';

    // answer2
    const selectedAnswer2 = $('textarea[name="answers[39429_269271]"]').val() || '';

    // answer3
    const selectedAnswer3 = $('input[name="answers[39429_269272]"]:checked').parent().text() || '';

    // answer4
    const selectedAnswer4 = $('input[name="answers[39429_269273]"]:checked').parent().text() || '';

    // answer5
    const selectedAnswer5 = $('input[name="answers[39429_269274]"]:checked').parent().text() || '';

    // answer6
    const selectedAnswer6 = $('textarea[name="answers[39429_269275]"]').val() || '';

    // answer7
    const selectedAnswer7 = $('input[name="answers[39429_269276]"]:checked').parent().text() || '';

    // answer8
    const selectedAnswer8 = $('textarea[name="answers[39429_269277]"]').val() || '';

    // answer9
    let selectedAnswer9 = '';
    const checkedAnswer9 = document.querySelectorAll("input[name='answers[39429_269278][]']");
    checkedAnswer9.forEach(input => {
        if (input.checked) {
            const selectedItem = input.parentNode.textContent;
            selectedAnswer9 += `<p class="c-Txt_Normal u-Adjust_Mt-16">${selectedItem}</p>`;
        }
    });

    let answer1 = document.getElementById('answers1');
    answer1.textContent = selectedAnswer1;

    let answer2 = document.getElementById('answers2');
    answer2.textContent = selectedAnswer2;

    let answer3 = document.getElementById('answers3');
    answer3.textContent = selectedAnswer3;

    let answer4 = document.getElementById('answers4');
    answer4.textContent = selectedAnswer4;

    let answer5 = document.getElementById('answers5');
    answer5.innerHTML = selectedAnswer5;

    let answer6 = document.getElementById('answers6');
    answer6.innerHTML = selectedAnswer6;

    let answer7 = document.getElementById('answers7');
    answer7.textContent = selectedAnswer7;

    let answer8 = document.getElementById('answers8');
    answer8.innerHTML = selectedAnswer8;

    let answer9 = document.getElementById('answers9');
    answer9.innerHTML = selectedAnswer9;

}


function confirmModal() {

    var close = $('.confirmBtnClose'),
    container = $('#support-survey-form-Modal');

    $(document).on('click', '#confirmBtn', function(){
        container.addClass('is-active');
        return false;
    });

    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){
        container.removeClass('is-active');
    });

    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
        if(!$(e.target).closest('.support-survey-form-Modal_body').length) {
            container.removeClass('is-active');
        }
    });
}
