(function($) {
    const refineTrigger = $('.js-service-Refine_Trigger');
    const refineSearchbox = $('.js-service-Refine_Searchbox');
    const refineTargets = $('.js-service-Refine_Target');
    const refineResultNone = $('.js-service-Refine_Result-none');
    const refineList = $('.js-service-Refine_List');
    const hideClass = 'service-top-List_Hide';

    function search_filter() {
        refineTargets.removeClass(hideClass);
        refineResultNone.css('display', 'none');

        for ( let i = 0; i < refineSearchbox.length; i++ ) {
            const name = refineSearchbox.eq(i).find('input').attr('name');

            const searchData = selected_items(name);

            if( searchData.length === 0 || searchData[0] === '' ) {
                continue;
            }

            for (let j = 0; j < refineTargets.length; j++) {
                // 各アイテムのcategoryのvalue
                const itemData = refineTargets.eq(j).data(name);
                // "対象機種を選択する"ですべて"以外"が選択された場合
                if( !searchData.includes(itemData) && !searchData.some((val) => val === 'data_type' || val === 'no_data_type')) {

                    if( itemData.indexOf(',') !== -1 ) {
                        const items = itemData.split(',');
                        let flag = 0;
                        for (let k = 0; k < items.length; k++) {
                            const str = String(items[k]);
                            if (searchData.includes(str)) {
                                if ( refineTargets.eq(j).data('device').indexOf(str) !== -1 ) {
                                    flag = 1;
                                }
                            }
                        }
                        if( flag === 0 ) {
                            refineTargets.eq(j).addClass(hideClass);
                        }
                    } else {
                        refineTargets.eq(j).addClass(hideClass);
                    }
                }

                // データプラン対象対象外
                if(searchData.includes('data_type')){
                    if(refineTargets.eq(j).attr('data-is-data-type') === 'false'){
                        refineTargets.eq(j).addClass(hideClass);
                    }
                }else if(searchData.includes('no_data_type')){
                    if(refineTargets.eq(j).attr('data-is-data-type') === 'true'){
                        refineTargets.eq(j).addClass(hideClass);
                    }
                }else{
                    console.log("ALL")
                }
            }
        }
        showContents();
    }

    function selected_items(name) {
        let searchData = [];
        $('input[name=' + name + ']:checked').each(function() {
            searchData.push($(this).val());
        });
        return searchData;
    }

    function showContents() {
        const targetsLength = refineTargets.length;
        const allHideLength = $('.service-top-List_Hide').length;
        if ( targetsLength === allHideLength ) {
            console.log('zero');
            refineResultNone.css('display', 'block');
        }
        refineList.each(function(){
            let $this = $(this);
            const hideLength = $this.find('.service-top-List_Hide').length;
            const listLength = $this.find('li').length;
            if( hideLength === listLength ) {
                $this.prev('h3').css('display', 'none');
            } else {
                $this.prev('h3').css('display', 'block');
            }
        });
    }

    $(function() {
        refineTrigger.on('click', search_filter);
    });

})(jQuery);
