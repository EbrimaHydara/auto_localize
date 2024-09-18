$(function() {	
	var errflg;
	var imn;
	var imt;
	var ims;
	var defurl;
	$("#cssend_frm").submit(function() {
		errflg = valchk();
		if(errflg == 1){
			//$("p.form_error").text("必須項目を入力してください。");
			$('<p id="err_block" class="form_error">必須項目を入力してください。</p>').insertBefore('#cssend_frm');
			if(imn == 1){$("#im_name").addClass("error_area");}else{$("#im_name").removeClass("error_area");}
			if(imt == 1){$("#im_tel").addClass("error_area");}else{$("#im_tel").removeClass("error_area");}
			if(ims == 1){$("#im_subject").addClass("error_area");}else{$("#im_subject").removeClass("error_area");}
			return false;
		}else{
			//URLsetting
			defurl = "https://www.connectstorm.jp/IM/endpoint/client/9/RBB_Chat/843b88e56d104352a00037d1b60c7730e650f39b93403fd7ecfb74502da1158d";
			window.location.href = defurl + "?im_name=" + $('#im_name').val() + "&im_subject=" + $('#im_subject').val() + "&tel=" + $('#im_tel').val();
		}
	});
	function valchk() {
			errflg = 0;
			imn=0;imt=0;ims=0;
			$("#err_block").remove();
			//validation
			if($('#im_name').val() == ""){errflg=1;imn=1;}
			if($('#im_tel').val() == ""){ errflg=1;imt=1;}
			if($('#im_subject').val() == ""){errflg=1;ims=1;}
		return errflg;
	}
});
