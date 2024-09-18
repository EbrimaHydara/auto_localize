import questions from './data.js';

const questionsElm = [...document.querySelectorAll('.js-list > div')];
const diagnosisBtn = document.getElementById('submit-diagnosis');

window.onpageshow = () => {
    $('input[type="radio"]').prop('checked', false);
};

if (questionsElm) {
    questionsElm.map((question, i) => {
        const radioBtn = question.querySelector('.js-radio-btn');
        radioBtn.addEventListener('change', (radioBtn) => {
            answer(radioBtn);
        });
    });
}

const answer = (radioBtn) => {
    const target = radioBtn.target;
    const targetName = radioBtn.target.name;

    switch (true) {
        case (/^q01/).test(targetName):
            (diagnosisBtn.ariaDisabled === 'false') && resetSubmitBtn();
            setNextQuestion(target);
            break;
        case (/^q02/).test(targetName):
            (diagnosisBtn.ariaDisabled === 'false') && resetSubmitBtn();
            setNextQuestion(target);
            break;
        case (/^q03/).test(targetName):
            (diagnosisBtn.ariaDisabled === 'false') && resetSubmitBtn();
            setNextQuestion(target);
            break;
        case (/^q04/).test(targetName):
            (diagnosisBtn.ariaDisabled === 'false') && resetSubmitBtn();
            setNextQuestion(target);
            break;
        case (/^q05/).test(targetName):
            (diagnosisBtn.ariaDisabled === 'false') && resetSubmitBtn();
            setNextQuestion(target);
            break;
        case (/^q06/).test(targetName):
            setNextQuestion(target);
            break;
        default:
            break; // do nothing
    }
};

const setNextQuestion = (target) => {
    const getInputs = (node) => {
        return [...node.querySelectorAll('input')];
    };

    for (const currentQ of questions) {
        if (currentQ.name === target.name) {
            const next = (target.value === 'yes') ? 'nextYes' : 'nextNo';

            for (const nextQ of questions) {
                if (nextQ.name === currentQ[next]) {
                    const setHelper = (order) => {
                        questionsElm[order - 1].children[0].textContent = `${order}. ${nextQ.text}`;
                        getInputs(questionsElm[order - 1].children[1]).map(input => input.setAttribute('name', nextQ.name));
                        showNextQuestion(order - 1);
                    };

                    switch (true) {
                        case (/^q02/).test(nextQ.name):
                            setHelper(2);
                            break;
                        case (/^q03/).test(nextQ.name):
                            setHelper(3);
                            break;
                        case (/^q04/).test(nextQ.name):
                            setHelper(4);
                            break;
                        case (/^q05/).test(nextQ.name):
                            setHelper(5);
                            break;
                        case (/^q06/).test(nextQ.name):
                            setHelper(6);
                            break;
                        default:
                            break; //do nothing
                    }
                    return;
                }
            }

            if ((/^q05/).test(currentQ.name)) {
                questionsElm[5].setAttribute('aria-hidden', 'true');
            }

            const result = (target.value === 'yes') ? 'resultYes' : 'resultNo';
            activeSubmitBtn(currentQ[result],);
        }
    }
};

const showNextQuestion = (targetIndex) => {
    questionsElm.map((question, i) => {
        const radioBtns = [...question.querySelectorAll('input')];

        if (targetIndex >= i) {
            question.setAttribute('aria-hidden', 'false');

            const radioNameRegex = new RegExp(`^q0${targetIndex + 1}`);
            radioBtns.map(btn => {
                if (radioNameRegex.test(btn.name)) {
                    btn.checked = false;
                }
            });
        } else {
            question.setAttribute('aria-hidden', 'true');
            radioBtns.map(btn => btn.checked = false);
        }
    });
};

const activeSubmitBtn = (url) => {
    diagnosisBtn.href = url + '?l-id=service_check_service_type';
    diagnosisBtn.setAttribute('aria-disabled', 'false');
};

const resetSubmitBtn = () => {
    diagnosisBtn.href = '';
    diagnosisBtn.setAttribute('aria-disabled', 'true');
};
