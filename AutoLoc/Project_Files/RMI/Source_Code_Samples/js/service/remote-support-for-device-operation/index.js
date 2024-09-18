const openAccordionWhenLanding =() => {
    const hash = location.hash

    const targetHash1 = '#accordion-1'
    const targetHash2 = '#accordion-2'
    if(hash.search(targetHash1) != -1) {
        const accordionTrigger = document.querySelector(targetHash1)
        const accordionPanel = document.querySelector('#accordion-content-1')

        accordionTrigger.setAttribute('aria-expanded', true)
        accordionPanel.setAttribute('aria-hidden', false);
    }
    if(hash.search(targetHash2) != -1) {
        const accordionTrigger = document.querySelector(targetHash2)
        const accordionPanel = document.querySelector('#accordion-content-2')

        accordionTrigger.setAttribute('aria-expanded', true)
        accordionPanel.setAttribute('aria-hidden', false);
    }
}

openAccordionWhenLanding()