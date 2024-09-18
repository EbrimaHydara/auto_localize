export const headerV2 = () => {
    /**
     * DropDownMenu
     * Used only in MNO headerV2
     */

    const dropDownMenu = () => {
        const useState = (defaultValue) => {
            let value = defaultValue;
            const getValue = () => value;
            const setValue = newValue => value = newValue;
            return [getValue, setValue];
        }
        const dropdownV2 = document.getElementById('js-dropdown-v2-parent');
        const dropdownV2Parents = [...document.querySelectorAll('.js-dropdown-v2')];
        const dropdownV2children = [...document.querySelectorAll('.js-dropdown-v2-child')];
        const [isDisplay, setIsDisplay] = useState(false);
        const judgeEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

        if(dropdownV2) {
            const dropDownLists =  [...dropdownV2.children];
            const toggleDropDown = e => {
                const target = e.type === 'touchstart' ? e.target.parentNode : e.target;
                const targetParent = target.querySelector('.js-dropdown-v2');
                const targetChild = target.querySelector('.js-dropdown-v2-child');
                const displayClass = 'g-HeaderV2_Js-display';

                const clearAll = () => {
                    dropdownV2children.forEach(el => el.classList.remove(displayClass));
                    dropdownV2Parents.forEach(el => {
                        el.setAttribute('aria-current', 'false');
                        el.setAttribute('aria-expanded', 'false');
                    });
                }

                switch(e.type) {
                    case 'mouseenter':
                        if(!targetParent) return;
                        targetParent.setAttribute('aria-current', 'true');
                        targetParent.setAttribute('aria-expanded', 'true');
                        targetChild.classList.add(displayClass);
                        break;
                    case 'mouseleave':
                        if(!targetParent) return;
                        targetParent.setAttribute('aria-current', 'false');
                        targetParent.setAttribute('aria-expanded', 'false');
                        targetChild.classList.remove(displayClass);
                        break;
                    case 'touchstart':
                        if (targetChild.classList.contains(displayClass)) {
                            targetParent.setAttribute('aria-current', 'false');
                            targetParent.setAttribute('aria-expanded', 'false');
                            targetChild.classList.remove(displayClass);
                            setIsDisplay(false);
                        } else {
                            clearAll();
                            targetParent.setAttribute('aria-current', 'true');
                            targetParent.setAttribute('aria-expanded', 'true');
                            targetChild.classList.add(displayClass);
                            setIsDisplay(true);
                        }
                        break;
                    default:
                        break; // do nothing
                }

                document.addEventListener('click', e => {
                    if(isDisplay()) {
                        if(!e.target.closest('#js-dropdown-v2-parent')) {
                            clearAll();
                            setIsDisplay(false);
                        }
                    }
                });
            }

            dropDownLists.forEach(dropDownList => {
                dropDownList.addEventListener('mouseenter', toggleDropDown);
                dropDownList.addEventListener('mouseleave', toggleDropDown);
                if (judgeEvent === 'touchstart') {
                   dropDownList.addEventListener('touchstart', toggleDropDown);
                }
            });
        }
    }
    dropDownMenu();

    /**
     * DrawerMenu
     * Also used in Hikari and Turbo
     */

    const drawerMenu = () => {
        const navs = document.querySelectorAll('.js-nav');
        const overlay = document.querySelector('.js-overlay');
        const body = document.body;
        const drawerSearch = document.getElementById('js-search');
        const drawerMenuV1 = document.getElementById('js-drawer');
        const drawerMenuV2 = document.getElementById('js-drawer-v2');
        const drawerClose = document.getElementById('js-drawer-close');
        const drawerLayers = document.querySelectorAll('.js-drawer-v2-layer');
        const layerExpands = document.querySelectorAll('.js-layer-expand');
        const layerFolds = document.querySelectorAll('.js-layer-fold');

        const drawer = controls => {
            const target = document.getElementById(`${controls}`);
            const expanded = target.getAttribute('aria-expanded');

            if( expanded === 'true' ) {
                const top = body.style.top;
                target.setAttribute('aria-expanded', 'false');
                overlay.setAttribute('aria-hidden', 'true');
                body.style.position = 'relative';
                body.style.top = '';
                window.scrollTo(0, Number(top.replace(/-(.+)px/, "$1")));
            } else {
                target.setAttribute('aria-expanded', 'true');
                body.style.top = `-${window.pageYOffset}px`;
                if(target.classList.contains(controls)) {
                    overlay.setAttribute('aria-hidden', 'false');
                    body.style.position = 'fixed';
                }
            }
            if(drawerClose !== null) {
                drawerClose.addEventListener('click', e => {
                    e.preventDefault();
                    drawerLayers.forEach(drawerLayer => {
                        drawerLayer.setAttribute('aria-expanded', 'false');
                    });
                });
            }
        }

        const layerMenu = controls => {
            const target = document.getElementById(`${controls}`);
            target.setAttribute('aria-expanded', 'true');
            target.scrollTop = 0;
            layerFolds.forEach(layerFold => {
                layerFold.addEventListener('click', e => {
                    e.preventDefault();
                    layerFold.parentNode.setAttribute('aria-expanded', 'false');
                });
            });
        }

        if(overlay !== null) {
            overlay.addEventListener('click', e => {
                e.preventDefault();
                overlay.setAttribute('aria-hidden', 'true');
                if(drawerMenuV1 !== null) drawerMenuV1.setAttribute('aria-expanded', false);
                if(drawerMenuV2 !== null) drawerMenuV2.setAttribute('aria-expanded', false);
                if(drawerSearch !== null) drawerSearch.setAttribute('aria-expanded', false);
                const top = body.style.top;
                body.style.position = 'relative';
                body.style.top = '';
                const checkPathName = location.pathname;
                if(!checkPathName.match('/hikari/')) {
                    window.scrollTo(0, Number(top.replace(/-(.+)px/, "$1")));
                }
                drawerLayers.forEach(drawerLayer => {
                    if(drawerLayer !== null) drawerLayer.setAttribute('aria-expanded', false);
                });
            });
        }

        navs.forEach(nav => {
            nav.addEventListener('click', e => {
                e.preventDefault();
                const controls = nav.getAttribute('aria-controls');
                drawer(controls);
            });
        });

        layerExpands.forEach(layerExpand => {
            layerExpand.addEventListener('click', e => {
                e.preventDefault();
                const controls = layerExpand.getAttribute('aria-controls');
                layerMenu(controls);
            });
        });
    }
    drawerMenu();
};
