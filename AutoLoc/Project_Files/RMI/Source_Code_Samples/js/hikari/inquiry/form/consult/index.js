(function() {

    $(function() {

        $('.js-confirm').on('click', function() {
            $('#js-error-first').html('');
            $('.c-Form_Txt-error').remove();
            $('input, textarea').attr('aria-invalid', 'false');
        
            var checked = validation_check();

            if( checked ) {
                var modalConfig = {
                    background: '#505050',
                    custom_class: 'c-Modal',
                    overlay_opacity: 0.8,
                    content_source: '#js-modal-confirm'
                };       
                $('#js-modal-confirm').modaal(modalConfig);
                $('#js-modal-confirm').modaal('open');

                $('.js-required').each(function() {
                    var $this = $(this);
                    var id = $this.attr('id');
                    var value = $this.val();
                    $('#js-' + id).text(value);
                });

                var html_any1 = '';
                var html_any2 = '';

                $('.js-any1').each(function() {
                    var $this = $(this);
                    if ( $this.is(':checked') ) {
                        var id = $this.attr('id');
                        html_any1 += '<span class="u-Adjust_Mr-16">' + id + '</span>';
                    }
                });
                $('.js-any2').each(function() {
                    var $this = $(this);
                    if ( $this.is(':checked') ) {
                        var id = $this.attr('id');
                        html_any2 += '<span class="u-Adjust_Mr-16">' + id + '</span>';
                    }
                });
                
                $('#js-any1').html(html_any1);
                $('#js-any2').html(html_any2);

            }

            $('.js-modal-confirm-close').on('click', function(){
                $('#js-modal-confirm').modaal('close');
            });

            $('.js-submit').on('click', function(){
                $('#toiawase_form').submit();
            });

        });

        



        function validation_check () {
            $('.js-required').each(function() {
                var $this = $(this);
                if ( $this.val() === '' ) {
                    $this.attr('aria-invalid', 'true');
                    $this.parent().prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16">必須項目です。</p>');
                }
            });
            $('.js-mail-check').each(function() {
                var $this = $(this);
                if ( $this.val() && !$this.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/) ) {
                    $this.attr('aria-invalid', 'true');
                    $this.parent().prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16">正しいメールアドレスの形式を入力して下さい</p>');
                }
            });
            $('.js-tel-check').each(function() {
                var $this = $(this);
                if ( $this.val() ){
                    var tel = $this.val().replace(/[━.*‐.*―.*－.*\-.*ー.*-]/gi,'');
                    if ( !tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/) ) {
                        $this.attr('aria-invalid', 'true');
                        $this.parent().prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16">正しい電話番号の形式を入力して下さい</p>');
                    }
                }
            });
            if ( $('.c-Form_Txt-error').length > 0 ) {
                $('html,body').animate({
                    scrollTop: $('.c-Form_Txt-error:first').offset().top - 16
                }, 200);
                $('#js-error-first').html('<p class="c-Form_Txt-error u-Adjust_Mt-16">正しく入力されていない箇所があります。 内容をご確認の上、再度送信ボタンを押してください。</p>');
                return false;
            } else {
                return true;
            }
        }

    });

})();
