$(function() {

  const $checkAgree = $('.js-check-agree');
  const $btnActive = $('.support-notes-Form_Btn');
  const $btnLink = $('.support-notes-Form_Link');
  $btnActive.css('pointer-events','none');
  $btnLink.css({'width':'auto','margin':'0 auto'});
  $checkAgree.change(function(){
    if ( $(this).is(':checked') ){
      $checkAgree.prop('checked','checked');
      $btnActive.attr('aria-disabled','false').prop('disabled',false).css({'pointer-events':'auto','cursor':'pointer'});
    } else {
      $checkAgree.prop('checked','');
      $btnActive.attr('aria-disabled','true').prop('disabled',true).css('pointer-events','none');
    }
  });

});


