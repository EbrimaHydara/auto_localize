import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });

  // RAT-id setting
  const dir = location.href.split("/");
  const dirName = dir[dir.length -2];
  const $kvbuttonMno = $('.rank-ddt_cta_btn a');
  const $kvbutton = $('.d-block-md');
  const $kvbuttonSp = $('.d-block.btn-entry-anim');
  const $entryMno = $('#mno-entry');
  const $followButtonMno = $('.hikari-campaign-rank-Cta_Fixed a');
  const $followButton = $('.rank-ddt_following_button .rank-ddt_conversion_btn');
  const getTargetDir = [
    {
      name: 'd_mno',
      kv_entry: 'rhk_rank_d_mno_kv_olsu',
      kv_l_id: '&l-id=rhk_rank_d_mno_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_d_mno_modal_olsu',
      flow_l_id: '&l-id=rhk_rank_d_mno_flow_olsu'
    },
    {
      name: 'p_mno',
      kv_entry: 'rhk_rank_p_mno_kv_olsu',
      kv_l_id: '&l-id=rhk_rank_p_mno_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_p_mno_modal_olsu',
      flow_l_id: '&l-id=rhk_rank_p_mno_flow_olsu'
    },
    {
      name: 'g_mno',
      kv_entry: 'rhk_rank_g_mno_kv_olsu',
      kv_l_id: '&l-id=rhk_rank_g_mno_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_g_mno_modal_olsu',
      flow_l_id: '&l-id=rhk_rank_g_mno_flow_olsu'
    },
    {
      name: 'd',
      kv_entry: 'rhk_rank_d_kv_entry',
      kv_apply: 'rhk_rank_d_kv_olsu',
      follow_entry: 'rhk_rank_d_modal_entry',
      follow_apply: 'rhk_rank_d_modal_olsu',
      flow_hikari: '&l-id=rhk_rank_d_flow_olsu',
      kv_l_id: '&l-id=rhk_rank_d_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_d_modal_olsu'
    },
    {
      name: 'p',
      kv_entry: 'rhk_rank_p_kv_entry',
      kv_apply: 'rhk_rank_p_kv_olsu',
      follow_entry: 'rhk_rank_p_modal_entry',
      follow_apply: 'rhk_rank_p_modal_olsu',
      flow_hikari: '&l-id=rhk_rank_p_flow_olsu',
      kv_l_id: '&l-id=rhk_rank_p_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_p_modal_olsu'
    },
    {
      name: 'g',
      kv_entry: 'rhk_rank_g_kv_entry',
      kv_apply: 'rhk_rank_g_kv_olsu',
      follow_entry: 'rhk_rank_g_modal_entry',
      follow_apply: 'rhk_rank_g_modal_olsu',
      flow_hikari: '&l-id=rhk_rank_g_flow_olsu',
      kv_l_id: '&l-id=rhk_rank_g_kv_olsu',
      follow_l_id: '&l-id=rhk_rank_g_modal_olsu'
    },
  ];
  // Get gol domain link
  const applyUrl = $('#apply-url').attr('href');

  const currentDir = getTargetDir.find(element => element.name === dirName);

  // if(currentDir.name === 'd_mno' || currentDir.name === 'p_mno' || currentDir.name === 'g_mno') {
  //   // KV Customize
  //   $kvbuttonMno.attr('data-ratid', currentDir.kv_entry);
  //   $kvbuttonMno.attr('data-ratevent', 'click');
  //   $kvbuttonMno.attr('data-ratparam', 'all');
  //   $kvbuttonMno.attr('href', `${applyUrl}${currentDir.kv_l_id}`);
  //   $followButtonMno.attr('href', `${applyUrl}${currentDir.follow_l_id}`);
  //   $entryMno.attr('href', `${applyUrl}${currentDir.flow_l_id}`);
  // }

  if(currentDir.name === 'd' || currentDir.name === 'p' || currentDir.name === 'g') {
    // Entry Check
    const entryCheck = () => {
      if($('.rank-ddt_following_button .entry_completed').text() === 'エントリー済み') {
        $kvbutton.attr('data-ratid', currentDir.kv_apply);
        $kvbuttonSp.attr('data-ratid', currentDir.kv_apply);
        $('.rank-ddt_following_button').html(
          `<a href="${applyUrl}${currentDir.follow_l_id}" class="c-Btn_Primary-large" data-ratid="${currentDir.follow_apply}" data-ratevent="click" data-ratparam="all">楽天ひかりに申し込む</a>`
        );
        $('#anchor-rank-ddt_conversion_btn a').attr('href', `${applyUrl}${currentDir.kv_l_id}`);
      }
    };
    setTimeout(entryCheck, 1000);

    // KV Customize
    $kvbutton.attr('data-ratid', currentDir.kv_entry);
    $kvbuttonSp.attr('data-ratid', currentDir.kv_entry);
    $kvbutton.one('click', (event) => {
      $(event.currentTarget).attr('data-ratid', currentDir.kv_apply);
      $kvbuttonSp.attr('data-ratid', currentDir.kv_apply);
      const entryComplete = () => {
        $('.rank-ddt_following_button').html(
          `<a href="${applyUrl}${currentDir.follow_l_id}" class="c-Btn_Primary-large" data-ratid="${currentDir.follow_apply}" data-ratevent="click" data-ratparam="all">楽天ひかりに申し込む</a>`
        );
        $('#anchor-rank-ddt_conversion_btn a').attr('href', `${applyUrl}${currentDir.kv_l_id}`);
      };
      setTimeout(entryComplete, 3000);
    });

    // Followbutton Customize
    $followButton.attr('data-ratid', currentDir.follow_entry);
    $followButton.attr('data-ratevent', 'click');
    $followButton.attr('data-ratparam', 'all');
    $followButton.one('click', () => {
      const FollowComplete = () => {
        $('.rank-ddt_following_button').html(
          `<a href="${applyUrl}${currentDir.follow_l_id}" class="c-Btn_Primary-large" data-ratid="${currentDir.follow_apply}" data-ratevent="click" data-ratparam="all">楽天ひかりに申し込む</a>`
        );
        $('#anchor-rank-ddt_conversion_btn a').attr('href', `${applyUrl}${currentDir.kv_l_id}`);
      };
      setTimeout(FollowComplete, 1000);
    });

    // Flowbutton Customize
    $('#apply_hikari').attr('href', `${applyUrl}${currentDir.flow_hikari}`);
  }
});

// following-button
function fixedBottomBtn() {
  let scrollY = window.pageYOffset;
  const trigger = document.getElementById('js-trigger');
  const fixedBtn = document.getElementById('js-fixed-btn');

  if( !fixedBtn || !trigger ) return;

  const triggerRect = trigger.getBoundingClientRect();
  const triggerY = scrollY + triggerRect.top;

  if ( scrollY > triggerY ) {
      fixedBtn.setAttribute('aria-expanded', 'true');
  } else {
      fixedBtn.setAttribute('aria-expanded', 'false');
  }
}

window.addEventListener('scroll', fixedBottomBtn);

/**
 * 注意事項への相互リンク
 */
(() => {
  const links = document.querySelectorAll('.js-link-notes');
  const backLink = document.getElementById('js-back');

  const setLinkInBackLink = (event) => {
      const targetId = event.target.getAttribute('id');
      backLink && backLink.setAttribute('href', `#${targetId}-top`);
  };

  if (links) {
      for (const link of links) {
          link.addEventListener('click', setLinkInBackLink);
      }
  }
})();

/**
 * ページ内リンクと同時にアコーディオンを開く
 */
(() => {
  const triggers = document.querySelectorAll('.js-accordion-opener');

  const openAccordion = (id) => {
      const target = document.getElementById(id);
      target && target.click();
  };

  if (triggers) {
      for (const trigger of triggers) {
          const id = trigger.getAttribute('href').slice(1);
          trigger.addEventListener('click', () => openAccordion(id));
      }
  }
})();
