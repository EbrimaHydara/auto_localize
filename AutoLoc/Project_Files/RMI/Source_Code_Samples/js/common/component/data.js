export const dataSort = () => {
    const sorter = document.querySelectorAll('.js-Data_Sort');

    sorter.forEach((el) => {
        const trigger = el.getElementsByTagName('button')[0];
        const list = el.getElementsByTagName('ul')[0];
        const items = list.getElementsByTagName('li');
        const label = trigger.querySelector('.js-Data_Sort-btnlabel');
        let lenChoice = [];
        trigger.addEventListener('click', () => {
            trigger.setAttribute('aria-expanded', true);
            list.focus();
        });
        trigger.addEventListener('blur', (e) => {
            if (e.relatedTarget !== list) {
                trigger.setAttribute('aria-expanded', false);
            }
        });

        list.addEventListener('keydown', (e) => {
            let selected = null;
            let dest = null;
            switch (event.key) {
                case "Down": // IE/Edge specific value
                case "ArrowDown":
                    selected = list.querySelector('[aria-selected="true"]');
                    dest = selected.nextElementSibling;
                    if (dest !== null) {
                        dest.setAttribute('aria-selected', true);
                        selected.setAttribute('aria-selected', false);
                    }
                    break;
                case "Up": // IE/Edge specific value
                case "ArrowUp":
                    selected = list.querySelector('[aria-selected="true"]');
                    dest = selected.previousElementSibling;
                    if (dest !== null) {
                        dest.setAttribute('aria-selected', true);
                        selected.setAttribute('aria-selected', false);
                    }
                    break;
                case "Enter":
                case "Esc": // IE/Edge specific value
                case "Escape":
                    selected = list.querySelector('[aria-selected="true"]');
                    list.setAttribute('aria-activedescendant', selected.id);
                    label.textContent = selected.textContent;
                    trigger.setAttribute('aria-expanded', false);
                    break;
            }
        });

        items.forEach((el) => {
            lenChoice.push(el.textContent.length);
            el.addEventListener('click', () => {
                items.forEach((el) => {
                    el.setAttribute('aria-selected', false);
                });
                el.setAttribute('aria-selected', true);
                list.setAttribute('aria-activedescendant', el.id);
                label.textContent = el.textContent;
                trigger.setAttribute('aria-expanded', false);
            });
        });

        list.style.width = (Math.max(...lenChoice) *16 + 32 + 2) + 'px';
    });
};
