export const header = () => {

    const nav = document.querySelectorAll('.js-nav');
    const overlay = document.querySelector('.js-overlay');
    const layout = document.querySelector('.l-System');
    const dropDownParents = document.querySelectorAll('.js-dropdown');
    const dropDownChildren = [...document.querySelectorAll('.js-dropdown-child')];
    const drawerAccordions = [...document.querySelectorAll('.js-drawer-accordion')];
    const drawerMenu = document.querySelector('#js-drawer');
    const drawerSearch = document.querySelector('#js-search');
    const judgeEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    const pathname = window.location.pathname;
    const rootPath ='/';
    const sitePath ='/';
    let controls = '';

    nav.forEach( (nav) => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            controls = nav.getAttribute('aria-controls');
            toggleMenu(controls);
        });
    });

    if (pathname !== rootPath) {
        let query = (rootPath === sitePath) ? '.g-Header_Nav > ul > li > a[href^="' + rootPath + pathname.split('/')[1] + '"]' : '.g-Header_Nav > ul > li > a[href^="' + rootPath + sitePath + '/' + pathname.split('/')[2] + '"]';
        document.querySelectorAll(query)
                .forEach((item) => {
                    item.setAttribute('aria-current', 'page');
                });
    }

    if (overlay != null) {
        overlay.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.setAttribute('aria-hidden', 'true');
            if (drawerMenu != null) {
                drawerMenu.setAttribute('aria-expanded', false);
            }
            if (drawerSearch != null) {
                drawerSearch.setAttribute('aria-expanded', false);
            }
            layout.style.position = 'relative';
            const top = layout.style.top;
            layout.style.top = '';
            const evg_Fixed_Popup = document.getElementById("evg_Fixed_Popup");
            if(evg_Fixed_Popup) {
                evg_Fixed_Popup.style.display = "block";
            }
            window.scrollTo(0, Number(top.replace(/-(.+)px/, "$1")));
        });
    }

    function toggleMenu(controls) {

        const target = document.querySelector(`#${controls}`);
        const expanded = target.getAttribute('aria-expanded');
        const evg_Fixed_Popup = document.getElementById("evg_Fixed_Popup");
        const body = document.getElementsByTagName('body');

        if( expanded === 'true' ) {

            const top = layout.style.top;
            layout.style.top = '';

            target.setAttribute('aria-expanded', 'false');
            overlay.setAttribute('aria-hidden', 'true');
            layout.style.position = 'relative';
            if(evg_Fixed_Popup) {
                evg_Fixed_Popup.style.display = "block";
            }
            window.scrollTo(0, Number(top.replace(/-(.+)px/, "$1")));
        } else {
            target.setAttribute('aria-expanded', 'true');

            layout.style.top = `-${window.pageYOffset}px`;

            if(target.classList.contains(controls)) {
                overlay.setAttribute('aria-hidden', 'false');
                layout.style.position = 'fixed';
            }
            if(evg_Fixed_Popup) {
                alert('else open');
                evg_Fixed_Popup.style.display = "none";
            }
        }
    }

    const toggleAttribute = (elm, isCheckedString, attr = 'aria-hidden') => {
        elm.setAttribute(attr, isCheckedString);
    };

    const adjustDropDown = (target, menu) => {
        const menuRight = menu.getBoundingClientRect().right;

        if (target.getBoundingClientRect().right > document.body.clientWidth) {
            const gapRight = document.body.clientWidth - menuRight;
            console.log('sasa', gapRight);
            target.style.right = `-${gapRight}px`;
            target.style.left = 'unset';
        }
        if (target.getBoundingClientRect().left < 0) {
            target.style.left = '-16px';
        }
    };

    const adjustDropDownOff = (target) => {
        target.removeAttribute('style');
    };

    const toggleDropDown = (e) => {
        const doInDropDownElm = (elm) => {
            elm.addEventListener('mouseenter', () => {
                toggleAttribute(elm, 'false');
                toggleAttribute(e.target, 'true', 'aria-current');
                adjustDropDown(elm, e.target);
            });
            elm.addEventListener('mouseleave', () => {
                toggleAttribute(elm, 'true');
                toggleAttribute(e.target, 'false', 'aria-current');
                adjustDropDownOff(elm);
            });
        };

        const doInMenu = (elm) => {
            switch(e.type) {
                case 'mouseenter':
                    toggleAttribute(elm, 'false');
                    toggleAttribute(e.currentTarget, 'true', 'aria-current');
                    adjustDropDown(elm, e.currentTarget);
                    break;
                case 'mouseleave':
                    toggleAttribute(elm, 'true');
                    toggleAttribute(e.currentTarget, 'false', 'aria-current');
                    adjustDropDownOff(elm);
                    break;
                case 'touchstart':
                    if (elm.getAttribute('aria-hidden') === 'true') {
                        toggleAttribute(elm, 'false');
                        toggleAttribute(e.currentTarget, 'true', 'aria-current');
                    } else {
                        toggleAttribute(elm, 'true');
                        toggleAttribute(e.currentTarget, 'false', 'aria-current');
                    }
                    break;
                case 'click':
                    e.currentTarget.blur();
                    break;
                default:
                    // do nothing
                    break;
            }
        };

        dropDownChildren.filter(dropDownChild => dropDownChild.id === e.currentTarget.getAttribute('aria-controls'))
            .map(dropDownElm => {
                doInDropDownElm(dropDownElm);
                doInMenu(dropDownElm);
            });
    };

    dropDownParents.forEach(dropDownParent => {
        dropDownParent.addEventListener('mouseenter', toggleDropDown);
        dropDownParent.addEventListener('mouseleave', toggleDropDown);
        switch(judgeEvent) {
            case 'touchstart':
                dropDownParent.addEventListener('touchstart', toggleDropDown);
                break;
            case 'click':
                dropDownParent.addEventListener('click', toggleDropDown);
                break;
            default:
                // do nothing
                break;
        }
    });

    const removeActiveDrawerAccordion = (e) => {
        if (e.currentTarget.getAttribute('aria-current') === 'true') {
            toggleAttribute(e.currentTarget, 'false', 'aria-current');
        } else {
            toggleAttribute(e.currentTarget, 'true', 'aria-current');
        }
    };
    drawerAccordions.map(accordion => accordion.addEventListener('touchstart', removeActiveDrawerAccordion));

};
