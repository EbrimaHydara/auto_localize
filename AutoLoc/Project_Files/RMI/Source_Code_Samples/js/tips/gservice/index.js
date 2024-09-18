document.addEventListener("DOMContentLoaded", () => {
    const displayAppLinkByUA = () => {
        const ua = navigator.userAgent;
        const iosAppLinkList = document.querySelectorAll(".js-ios");
        const androidAppLinkList = document.querySelectorAll(".js-android");

        if (ua.match(/(iPhone|iPad|iPod)/)) {
            androidAppLinkList.forEach(androidAppLink =>
                androidAppLink.setAttribute("aria-hidden", "true")
            );
            return;
        }

        if (ua.match(/(Android)/)) {
            iosAppLinkList.forEach(iosAppLink =>
                iosAppLink.setAttribute("aria-hidden", "true")
            );
            return;
        }
    };

    const tabs = [
        "ichiba",
        "Rpay",
        "Rbooks",
        "Rfashion",
        "Rcard",
        "Rbank",
        "Rpay2",
        "Rsecurities",
        "Rwindow",
        "Rturbo",
        "Rtravel",
        "Rmagazin",
        "Rmusic",
        "Rtv",
        "Rnba"
    ];
    const navTrigger01 = document.getElementById("js-trigger-nav-01");
    const navTrigger02 = document.getElementById("js-trigger-nav-02");
    const navTrigger03 = document.getElementById("js-trigger-nav-03");
    const jsFloatList01 = document.getElementById("js-fixed-nav-01");
    const jsFloatList02 = document.getElementById("js-fixed-nav-02");
    const jsFloatList03 = document.getElementById("js-fixed-nav-03");
    const tabStartSection = document.getElementById("js-start-position");
    const floatLists = { jsFloatList01, jsFloatList02, jsFloatList03 };
    const floatListItems = document.querySelectorAll(".js-float-list li");
    let isActive = false;

    const tabElements = tabs
        .map(tab => [tab, document.getElementById(tab)])
        .filter(element => !!element[1]);

    const updateActiveBtns = () => {
        floatListItems.forEach((item) => {
            item.firstElementChild.addEventListener("click", (element) => {
                isActive = true;
                updateTabClass(element.target.parentElement);
            });
        });
    };

    const updateTabClass = activeTab => {
        floatListItems.forEach(element => {
            element.classList.remove(
                "tips-Description_Follow_List_Item-active"
            );
        });

        activeTab.classList.add("tips-Description_Follow_List_Item-active");
    };

    const updateTabs = () => {
        if (isActive) {
            isActive = false;
            return;
        }

        let topPositonByTabs = tabElements.map(([tab, tabElement]) => [
            tab,
            tabElement.offsetTop - 51
        ]);

        const shouldActiveTabPosition =
            topPositonByTabs
                .filter(
                    ([_, position]) =>
                        position > tabStartSection.offsetTop &&
                        window.scrollY > position
                )
                .slice(-1)
                .pop() || topPositonByTabs[0];
        const activeTab = getActiveTabSelector(shouldActiveTabPosition[0]);

        updateTabClass(activeTab);

        floatLists[activeTab.parentElement.id].scrollLeft =
            activeTab.offsetLeft;
    };

    const getActiveTabSelector = sectionName => {
        return document.querySelector(`.js-float-list-${sectionName}`);
    };

    const ctaTabBtn1 = document.getElementById("cta-tab-menu1");
    const ctaTabBtn2 = document.getElementById("cta-tab-menu2");
    const ctaTabBtn3 = document.getElementById("cta-tab-menu3");
    const tabBtn1 = document.getElementById("tab-menu1");
    const tabBtn2 = document.getElementById("tab-menu2");
    const tabBtn3 = document.getElementById("tab-menu3");
    const tabBtns = [
        [tabBtn1, ctaTabBtn1],
        [tabBtn2, ctaTabBtn2],
        [tabBtn3, ctaTabBtn3]
    ];
    const updateTabBtns = () => {
        tabBtns.forEach(([btn, ctaBtn]) => {
            btn.addEventListener("click", () => {
                updateBtnClass(false, ctaBtn);
            });
            ctaBtn.addEventListener("click", () => {
                updateBtnClass(btn, ctaBtn);
            });
        });
    };

    const updateBtnClass = (activeBtn, activeCtaBtn) => {
        tabBtns.forEach(([_, ctaTabBtn]) => {
            ctaTabBtn.classList.remove("tips-List_Cta_Item-active");
        });
        activeCtaBtn.classList.add("tips-List_Cta_Item-active");
        if (activeBtn) {
            activeBtn.click();
        }
    };

    const navTriggers = [
        [navTrigger01, jsFloatList01],
        [navTrigger02, jsFloatList02],
        [navTrigger03, jsFloatList03]
    ];

    let beforePageYOffset;
    const fixedBtn = (trigger, elm) => {
        let scrollY = window.pageYOffset;

        if (!elm || !trigger) return;

        const triggerRect = trigger.getBoundingClientRect();
        const triggerY = scrollY + triggerRect.top;

        if (scrollY > triggerY) {
            elm.setAttribute("aria-expanded", "true");
        } else {
            elm.setAttribute("aria-expanded", "false");
        }
    };

    const fixedBtnInit = () => {
        if (beforePageYOffset > window.pageYOffset - 1) {
            navTriggers.forEach(([navTrigger, floatList]) =>
                fixedBtn(navTrigger, floatList)
            );
            updateTabs();
        } else {
            navTriggers.forEach(([_, floatList]) =>
                floatList.setAttribute("aria-expanded", "false")
            );
        }
        beforePageYOffset = window.pageYOffset;
    };

    const throttleEvent = (recevier, ms) => {
        let friedAt = Date.now();
        return function () {
            if (friedAt + ms - Date.now() < 0 || window.scrollY === 0) {
                recevier();
                friedAt = Date.now();
            }
        };
    }
    window.addEventListener("scroll", throttleEvent(fixedBtnInit, 100));

    const init = () => {
        displayAppLinkByUA();
        updateTabBtns();
        updateActiveBtns();
    }
    init();
});
