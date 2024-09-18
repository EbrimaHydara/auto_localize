// news
const newsBoxes = document.querySelectorAll('.js-Info_Readmore');

newsBoxes.forEach(newsBox => {
    const conts = newsBox.querySelectorAll('.js-Info_Readmore-target');
    const trigger = newsBox.querySelector('.js-Info_Readmore-trigger');
    const showNum = Number(newsBox.getAttribute('data-readmore-show'));
    let i = 0;
    let myNum = showNum;

    if (trigger) {
        if (conts.length <= showNum) {
            trigger.parentNode.removeChild(trigger);
        }
        conts.forEach(el => {
            if (i >= showNum) {
                el.setAttribute('aria-hidden', true);
            }
            i++;
        });

        trigger.addEventListener('click', event => {
            myNum += showNum;
            i = 0;

            if (conts.length <= myNum) {
                trigger.parentNode.removeChild(trigger);
            }
            conts.forEach(el => {
                if (i < myNum) {
                    el.setAttribute('aria-hidden', false);
                }
                i++;
            });
        });
    }
});