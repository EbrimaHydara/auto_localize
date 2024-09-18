jQuery(function($){
    $(function () {
        const $box = $('.js-drilldown-q, .js-drilldown-a');
        const $common = $('.js-drilldown-common');
        const $switchContents = [...document.querySelectorAll('.js-drilldown-switch')];
        const $radio = $('input[type="radio"]');
        const $body = $('html,body');
        const $checkbox = $('input[type="checkbox"]');
        const hash = location.hash;
        const ADJ_TOP = 64;

        // init - Show the first question
        $box.filter('[data-level="0"]').show();

        // select question
        $radio.on('change', function () {
            const $this = $(this);
            const myNumber = $this.val();
            const myLevel = Number($this.attr('data-level'));
            const isAnswer = $this.attr('data-is-answer');
            let myTop = 0;

            // slidedown animation & show the next content
            $box.each(function () {
                const $this = $(this);

                if ($this.attr('data-number') === myNumber) {
                    $this.slideDown();
                    myTop = $this.offset().top;

                    // If you choose to '複数枚のSIMカードを利用中'
                    if (Number($this.attr('data-number')) === 103) {
                        $common.show();
                        $switchContents.map(($switchContent) => {
                            switch ($switchContent.getAttribute('data-content')) {
                                case 'common':
                                    $switchContent.style.display = 'none';
                                    break;
                                case 'another':
                                    $switchContent.style.display = 'block';
                                    break;
                                case 'commonTitle':
                                    $switchContent.style.display = 'none';
                                    break;
                                case 'anotherTitle':
                                    $switchContent.style.display = 'flex';
                                    break;
                                case 'list':
                                    $switchContent.classList.add('js-noarrow');
                                    break;
                                case 'adjMt':
                                    $switchContent.style.marginTop = '24px';
                                    break;
                                default:
                                    break; // do nothing
                            }
                        });
                        return;
                    }

                    // If you answer the second question
                    if (Number($this.attr('data-level')) === 99) {
                        $common.show();
                        $switchContents.map($switchContent => {
                            switch ($switchContent.getAttribute('data-content')) {
                                case 'common':
                                    $switchContent.style.display = 'block';
                                    break;
                                case 'another':
                                    $switchContent.style.display = 'none';
                                    break;
                                case 'commonTitle':
                                    $switchContent.style.display = 'flex';
                                    break;
                                case 'anotherTitle':
                                    $switchContent.style.display = 'none';
                                    break;
                                case 'list':
                                    $switchContent.classList.remove('js-noarrow');
                                    break;
                                case 'adjMt':
                                    $switchContent.style.marginTop = '8px';
                                    break;
                                default:
                                    break; // do nothing
                            }
                        });
                        return;
                    }

                    //  If you answer the first question
                    if (Number($this.attr('data-level')) === 1) {
                        $common.hide();
                        return;
                    }

                } else if (Number($this.attr('data-level')) >= myLevel) {
                    $this.hide().find('input').prop('checked', false);
                }
            });

            if (isAnswer) {
                $body.animate({ scrollTop: (myTop - ADJ_TOP) });
            }

            $checkbox.prop('checked', false).triggerHandler('change');
        });

        // Show answer when landing
        if (hash.length > 0) {
            const hashData = hash.replace('#', '');
            const targetAnswers = $(`.js-drilldown-a[data-number="${hashData}"]`);
            const DELAY_TIME = 500;
            let isHash = false;

            // Check if there is an answer result 
            if (targetAnswers.length > 0) {
                isHash = true;
            }

            if (isHash) {
                const arrHash = hashData.split('_');
                const lenHash = arrHash.length;
                let i = 0;

                for (i = 0; i < lenHash; i++) {
                    if (i > 0) {
                        arrHash[i] = `${arrHash[i - 1]}_${arrHash[i]}`;
                    }
    
                    setTimeout(function (i) {
                        $(`input[value="${arrHash[i]}"]`).click();
                    }, DELAY_TIME * i, i);
                }
    
                setTimeout(function (i) {
                    const $targetHash = $(`[data-number="${arrHash[lenHash - 1]}"]`);
    
                    if ($targetHash.length > 0) {
                        $body.animate({ scrollTop: $targetHash.offset().top - ADJ_TOP });
                    }
                }, DELAY_TIME * (i + 1));
            }
        }
    });  
});
