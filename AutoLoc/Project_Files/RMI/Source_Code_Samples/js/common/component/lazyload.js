require('intersection-observer');
import lozad from 'lozad';

export const lazyload = () => {
    const lazys = document.querySelectorAll('.js-lazy');
    const observer = lozad(lazys);
    observer.observe();
};
