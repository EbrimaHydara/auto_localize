import SmoothScroll from "smooth-scroll";

export const scroll = () => {
    new SmoothScroll('.js-scroll', {
        speed: 100,
        header: '[data-fixed-header]',
    });

    const targets = document.querySelectorAll('.js-target-highlight');

    if (targets.length > 0) {
        const triggerClickHandler = (event) => {
            const targetId = event.target.getAttribute('href').slice(1);

            for (const target of targets) {
                const targetData = target.getAttribute('data-target-highlight');
                if (targetData === targetId) {
                    target.style.color = '#ff008c';
                } else {
                    target.style.color = null;
                }
            }
        };

        const triggers = document.querySelectorAll('.js-scroll');

        if (triggers.length > 0) {
            for (const trigger of triggers) {
                trigger.addEventListener('click', triggerClickHandler);
            }
        }
    }
};
