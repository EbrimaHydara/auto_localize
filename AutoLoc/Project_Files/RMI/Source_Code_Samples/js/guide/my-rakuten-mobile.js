const categoryItem = document.getElementsByClassName('js-category-item');
const categoryItemArray = [...categoryItem];
const trgFilter = document.getElementById('js-trg-filter');
const myRakutenMobileSearchListItem = document.getElementsByClassName('my-rakuten-mobile-Search_List-item');
const myRakutenMobileSearchListItemArray = [...myRakutenMobileSearchListItem];
const myRakutenMobileSearchListItemCard = document.getElementsByClassName('my-rakuten-mobile-Search_List-item-card');
const myRakutenMobileSearchListItemCardArray = [...myRakutenMobileSearchListItemCard];
const openModal = document.getElementById('js-open-modal');
const closeModal = document.getElementById('modaal-close');
const modaalInnerWrapper = document.getElementsByClassName('modaal-inner-wrapper')[0];
const modal = document.getElementById('modal1');
const inquiryFlow = document.getElementById('inquiry-flow');

let chkList = [];
let showList = [];
let showBefore = false;
let showAfter = false;

trgFilter.onclick = function() {
  showBefore = false;
  showAfter = false;
  chkList = [];
  categoryItemArray.forEach(function(element) {
    if( element.checked ) {
      chkList.push(element.dataset.filterCat);
      if( element.dataset.filterUsing == 'before' ) {
        showBefore = true;
      }
      if( element.dataset.filterUsing == 'after' ) {
        showAfter = true;
      }
    }
  });
  myRakutenMobileSearchListItemArray.forEach(function(element) {
    element.setAttribute('aria-hidden', 'true');
  })
  myRakutenMobileSearchListItemCardArray.forEach(function(element) {
    element.setAttribute('aria-hidden', 'true');
  })
  chkList.forEach(function(element) {
    showList = document.querySelector(`[data-filter-cat=${element}]`);
    showList.setAttribute('aria-hidden', 'false');
  })
  if(showBefore) {
    myRakutenMobileSearchListItemCardArray.forEach(function(element) {
      if(element.classList.contains('js-start-before')) {
        element.setAttribute('aria-hidden', 'false');
      }
    })
  }
  if(showAfter) {
    myRakutenMobileSearchListItemCardArray.forEach(function(element) {
      if(element.classList.contains('js-start-after')) {
        element.setAttribute('aria-hidden', 'false');
      }
    })
  }
  if(chkList.length === 0) {
    myRakutenMobileSearchListItemArray.forEach(function(element) {
      element.setAttribute('aria-hidden', 'false');
    })
    myRakutenMobileSearchListItemCardArray.forEach(function(element) {
      element.setAttribute('aria-hidden', 'false');
    })
  }
}

function showInquiryFlow() {
  inquiryFlow.style.zIndex = '1000';
}
function hideInquiryFlow() {
  inquiryFlow.style.zIndex = '0';
}

openModal.onclick = function() {
  hideInquiryFlow();
}

closeModal.onclick = function() {
  showInquiryFlow();
}

modaalInnerWrapper.onclick = function() {
  showInquiryFlow();
}
