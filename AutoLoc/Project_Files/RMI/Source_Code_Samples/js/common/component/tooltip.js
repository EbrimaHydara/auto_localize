import tippy from 'tippy.js';

export const tooltip = () => {
    const classTooltipInline = '.js-Tooltip-inline';
    const classTooltipBottom = '.js-Tooltip-bottom';

    tippy(classTooltipInline, {
        animation: 'fade',
        arrow: true,
        duration: [200, 175]
    });
    tippy(classTooltipBottom, {
        animation: 'fade',
        arrow: true,
        duration: [200, 175],
        placement: 'bottom'
    });
};

export const tooltipContent = () => {
    const classTooltipInline = '.js-Tooltip-content';

    tippy(classTooltipInline, {
        animation: 'fade',
        arrow: true,
        duration: [200, 175],
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        allowHTML: true,
    });

};
