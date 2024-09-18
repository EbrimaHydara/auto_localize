export const readmore = () => {
    const readmores = document.querySelectorAll('.js-Readmore');

    readmores.forEach((el) => {
        const triggers = el.querySelectorAll('.js-Readmore_Trigger');
        const contents = el.querySelectorAll('[aria-hidden="true"]');

        triggers.forEach((el) => {
            el.addEventListener('click', (e) => {
                contents.forEach((el) => {
                    el.setAttribute('aria-hidden', false);
                });
                e.currentTarget.style.display = 'none';
            });
        });
    });
};
