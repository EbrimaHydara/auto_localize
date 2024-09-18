// Simulation
(() => {
    const headerContainer = document.querySelector('.turbo-Header_Container');
    const tabItems = document.querySelectorAll('.js-Tab_Item');
    const simulationContainer = document.getElementById('js-simulation-container');
    const simulationBtn = document.getElementById('js-simulation-btn');
    let simulationPanelFlag = false;
    const simulationPanel = document.querySelector('.js-Tab_Panel');

    // タブ押下後の処理
    tabItems.forEach(elm => {
        elm.addEventListener('click', () => {
            if(simulationPanelFlag) {
                const scrollY = window.pageYOffset + simulationContainer.getBoundingClientRect().bottom - headerContainer.clientHeight;
                return scrollTo({ top: scrollY, left: 0, behavior: 'smooth' });
            }
            simulationBtn.setAttribute('aria-disabled', false);
        });
    });

    // 「月々のお支払いを確認する」ボタンの処理
    simulationBtn.addEventListener('click', () => {
        if(!simulationPanelFlag) {
            simulationPanelFlag = true;
        }
        simulationPanel.style.display = 'block';
        const scrollY = window.pageYOffset + simulationContainer.getBoundingClientRect().bottom - headerContainer.clientHeight;
        scrollTo({ top: scrollY, left: 0, behavior: 'smooth' });
    });
})();
