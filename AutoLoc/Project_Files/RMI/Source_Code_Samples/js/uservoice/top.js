/**
 * variables
 */
const main = document.getElementById('js-main');
const mainPosition = window.pageYOffset + main.getBoundingClientRect().top;
const radioTags = document.getElementsByName('tag');
const tagItem = document.querySelectorAll('.js-tag-item');
const tagBtn = document.querySelectorAll('.js-tag-btn');
const title = document.getElementById('js-title');
const pagerWrap = document.getElementById('js-pager-wrap');
const maxPager = 5;
let filterItem = [];
let totalPager = 0;
let pageCnt = 0;

/**
 * get height of ABtest header
 */
const headers = document.querySelectorAll('header');
let position = mainPosition;

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if( mutation.type === 'attributes' ) {
            position = position + mutation.target.clientHeight;
            observer.disconnect();
        }
    });
});

headers.forEach(header => {
    observer.observe(header, {
        attributes: true,
        attributeFilter: ['style'],
    });
});

/**
 * pager
 */
const settingPager = () => {
    filterItem = [];
    pageCnt = 0;
    const displayItemNum = 9;
    const regExp = new RegExp(/pagelist-\S+/, 'g');

    tagItem.forEach(e => {
        const matched = e.className.match(regExp) || [];
        for( let i = 0; i < matched.length; i++ ) e.classList.remove(matched[i]);
        if( e.getAttribute('aria-hidden') === 'false' ) filterItem.push(e);
    });

    const totalPages = filterItem.length;
    if( Math.floor(totalPages % displayItemNum) === 0 ) {
        totalPager = Math.floor(totalPages / displayItemNum);
    } else {
        totalPager = Math.floor(totalPages / displayItemNum) + 1;
    }

    let pageCounter = 0;
    for (let i = 1; i <= totalPager; i++) {
        for (let j = 0; j < totalPages; j++) {
            if(j >= pageCounter  &&  j < displayItemNum * i  ) {
                filterItem[j].classList.add('pagelist-'+ i);
            }
        }
        pageCounter = pageCounter + displayItemNum;
    }
    createPager(1);
    viewPager(1);
};

const createPager = (current) => {
    let page = 0;
    ( totalPager >= maxPager ) ? page = maxPager : page = totalPager;

    let li = '';
    if (current === 1) {
        li += ' <li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-left"></span></span></li>';
    } else {
        li += ' <li><a href="" class="c-Pager_Arrow" id="js-page-prev" data-ratid="uservoice_pager_prev" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-left"></span></span></a>';
    }

    for (let i = 1; i <= page; i++) {
        if( totalPager >= i + pageCnt &&  0 <  i + pageCnt) {
            if( current === i + pageCnt) {
                li += `<li><a href="" class="c-Pager_Number" aria-current="true">${i + pageCnt}</a></li>`;
            } else {
                li += `<li><a href="" class="c-Pager_Number js-page-number" data-ratid="uservoice_pager_${zeroPadding(i + pageCnt, 2)}" data-ratevent="click" data-ratparam="all">${i + pageCnt}</a></li>`;
            }
        }
    }

    if( current < totalPager ) {
        li += '<li><a href="" class="c-Pager_Arrow" id="js-page-next" data-ratid="uservoice_pager_next" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-right"></span></a></li>';
    } else {
        li += '<li><span class="c-Pager_Arrow" aria-disabled="true"><span class="c-Icon_Chevron-right"></span></span></li>';
    }
    pagerWrap.innerHTML = li;
    updatePager(current);
};

const zeroPadding = (num, len) => {
	return ( Array(len).join('0') + num ).slice( -len );
}

const viewPager = (current) => {
    filterItem.forEach(e => {
        if(e.classList.contains(`pagelist-${current}`)) {
            e.setAttribute('aria-hidden', false);
        } else {
            e.setAttribute('aria-hidden', true);
        }
    });
};

const updatePager = (current) => {
    const pageNumber = document.querySelectorAll('.js-page-number');
    const pagePrev = document.getElementById('js-page-prev');
    const pageNext = document.getElementById('js-page-next');
    let currentNum = current;

    pageNumber.forEach(e => {
        e.addEventListener('click', event => {
            event.preventDefault();
            currentNum = Number(e.textContent);
            if( currentNum === maxPager + pageCnt ) {
                pageCnt += + 2;
            }
            if( currentNum === 1 + pageCnt && currentNum !== 1 ) {
                pageCnt += - 2;
            }
            createPager(currentNum);
            viewPager(currentNum);
            scrollTo(0, position);
        });
    });
    if( pageNext !== null ) {
        pageNext.addEventListener('click', event => {
            event.preventDefault();
            const nextPage = currentNum + 1;
            if( nextPage === maxPager + pageCnt ) {
                pageCnt += + 2;
            }
            scrollTo(0, position);
            createPager(nextPage);
            viewPager(nextPage);
        });
    }
    if( pagePrev !== null ) {
        pagePrev.addEventListener('click', event => {
            event.preventDefault();
            const prevPage = currentNum - 1;
            if( prevPage === 1 + pageCnt && pagePrev !== 1 ) {
                pageCnt += - 2;
            }
            scrollTo(0, position);
            createPager(prevPage);
            viewPager(prevPage);
        });
    }
};

/**
 * filter
 */
const viewFilterItems = (value) => {
    scrollTo(0, position);
    tagItem.forEach(e => {
        const tag = e.dataset.taglist.split(',');
        if ( value === '記事一覧' || tag.indexOf(value) !== -1 ) {
            e.setAttribute('aria-hidden', 'false');
        } else {
            e.setAttribute('aria-hidden', 'true');
        }
    });
    title.textContent = value;
    settingPager();
};

radioTags.forEach(e => {
    e.addEventListener('change', () => {
        console.log(position);
        if(e.checked) viewFilterItems(e.value);
        document.getElementById(`ratid-${e.id}`).click();
    });
});

tagBtn.forEach(e => {
    e.addEventListener('click', () => {
        const selectedTag = e.dataset.tag;
        viewFilterItems(selectedTag);
        radioTags.forEach(radio => {
            if (radio.value === selectedTag ) radio.checked = true;
        });
    });
});

settingPager();

/**
 * copy protection
 */
const protectedElms = document.querySelectorAll('.js-copy-protect');
protectedElms.forEach(elm => {
    elm.onselectstart =  () => false;
    elm.onmousedown =  () => false;
});
