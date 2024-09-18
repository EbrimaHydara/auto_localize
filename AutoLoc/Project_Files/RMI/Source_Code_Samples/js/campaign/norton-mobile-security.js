if (!window.phx_user_attributes) {
    let _phx_user_attributes = '';
    Object.defineProperty(window, 'phx_user_attributes', {
        get() {
            return _phx_user_attributes;
        },
        set(value) {
        const isHolder = value === 'mno_holder';
        if (isHolder) {
            _phx_user_attributes = value;
            const selectedTab = 'tab-menu2';
            const selectedPanel = 'tab-content2';
            changeDefaultTab(selectedTab, selectedPanel);
        }
        }
    });
}

function changeDefaultTab(selectedTab, selectedPanel) {
    const flowTabs = document.querySelectorAll('.c-Tab_Item');
    const flowTabsPanels = document.querySelectorAll('.c-Tab_Panel');
    changeSelectedTab(flowTabs, selectedTab);
    changeSelectedPanel(flowTabsPanels, selectedPanel);
}

function changeSelectedTab(tabs, target) {
    tabs.forEach((item) => item.setAttribute('aria-selected', (item.id === target) ? true : false));
}

function changeSelectedPanel(panels, target) {
    panels.forEach((item) => item.setAttribute('aria-hidden', (item.id === target) ? false : true));
}
