$(function() {

  const $checkAgree = $('.js-check-agree');
  const $btnActive = $('.plan-program-Form_Btn');
  $checkAgree.change(function(){
    if ( $(this).is(':checked') ){
      $checkAgree.prop('checked','checked');
      $btnActive.attr('aria-disabled','false').prop('disabled','');
    } else {
      $checkAgree.prop('checked','');
      $btnActive.attr('aria-disabled','true').prop('disabled','disabled');
    }
  });


  function doTrim(el) {
    el.value = el.value.replace(/^\s+|\s+$/g, '');
  }

  // function isInput(el) {
  //   return el.value.length != 0;
  // }

  function isChecked(el) {
    if (el.length) {
      for (var i = 0; i < el.length; i++) {
        if (el[i].checked) {
          return true;
        }
      }
    } else {
      if (el.checked) {
        return true;
      }
    }
    return false;
  }

  function isSelected(el) {
    return el.selectedIndex != 0;
  }

  function isLength(el, len) {
    if ("え".length == 2) {
      len *= 2;
    }
    return el.value.length <= len;
  }

  function zen2han(el) {
    el.value = el.value.replace(/[０]/g, "0");
    el.value = el.value.replace(/[１]/g, "1");
    el.value = el.value.replace(/[２]/g, "2");
    el.value = el.value.replace(/[３]/g, "3");
    el.value = el.value.replace(/[４]/g, "4");
    el.value = el.value.replace(/[５]/g, "5");
    el.value = el.value.replace(/[６]/g, "6");
    el.value = el.value.replace(/[７]/g, "7");
    el.value = el.value.replace(/[８]/g, "8");
    el.value = el.value.replace(/[９]/g, "9");
  }


  $('#form-program').on('submit',function(){
    var el;
    var obj = document.enenForm;
    var targetY = $('.js-form-top').offset().top;

    $('.js-form-error').attr('aria-hidden','true');
    $('input, select').attr('aria-invalid','false');

    el = obj.elements['answers[33212_227349]'];
    if (!isSelected(el)) {
      $('#error02-01').attr('aria-hidden','false');
      $('select[name="answers[33212_227349]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

    el = obj.elements['answers[33212_227350]'];
    if (!isSelected(el)) {
      $('#error03-01').attr('aria-hidden','false');
      $('select[name="answers[33212_227350]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

    el = obj.elements['answers[33212_227351]'];
    if (!isSelected(el)) {
      $('#error03-02').attr('aria-hidden','false');
      $('select[name="answers[33212_227351]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

    el = obj.elements['answers[33212_227352]'];
    if (!isSelected(el)) {
      $('#error04-01').attr('aria-hidden','false');
      $('select[name="answers[33212_227352]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

    el = obj.elements['answers[33212_227353]'];
    if (!isSelected(el)) {
      $('#error05-01').attr('aria-hidden','false');
      $('select[name="answers[33212_227353]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

    el = obj.elements['answers[33212_227354]'];
    doTrim(el);
    zen2han(el);
    if (!isLength(el, 15)) {
      $('#error07-01').attr('aria-hidden','false');
      $('input[name="answers[33212_227354]"]').attr('aria-invalid','true');
      $('body,html').animate({scrollTop: targetY}, 400, 'swing');
      return false;
    }

  });

});


