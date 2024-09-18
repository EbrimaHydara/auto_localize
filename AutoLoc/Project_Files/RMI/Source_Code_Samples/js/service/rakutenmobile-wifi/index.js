const openAccordionWhenLanding =() => {
    const hash = location.hash

    const targetHash = '#accordion-1'
    if(hash.search(targetHash) != -1) {
        const accordionTrigger = document.querySelector(targetHash)
        const accordionPanel = document.querySelector('#accordion-content-1')

        accordionTrigger.setAttribute('aria-expanded', true)
        accordionPanel.style.display = ''
    }
}

openAccordionWhenLanding()