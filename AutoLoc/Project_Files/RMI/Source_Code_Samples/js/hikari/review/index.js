const radioBtn = document.querySelectorAll('.js-radio');
const tag = document.querySelectorAll('.js-tag');
const item = document.querySelectorAll('.js-item');

function resultShow(value) {
    console.log(value);
    if( value === 'すべて表示') {
        item.forEach( (item) => {
            item.setAttribute('aria-hidden','false');
        });
    } else {
        item.forEach( (item) => {
            item.setAttribute('aria-hidden','true');
        });
        tag.forEach( (tag) => {
            if(value === tag.textContent) {
                tag.closest('.js-item').setAttribute('aria-hidden','false');
            }
        });
    }
}

radioBtn.forEach(
    r => r.addEventListener("change" ,
        e => resultShow(e.target.value)
    )
);
