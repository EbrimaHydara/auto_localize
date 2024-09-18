const ua = navigator.userAgent;
const guideIchibaLectureApple = $('.ichiba_lecture_apple');
const guideIchibaLectureAndroid = $('.ichiba_lecture_android');
const guideIchibaLecturePc = $('.ichiba_lecture_pc');
const guideIchibaLectureAppApple = $('.ichiba_lecture_app_apple');
const guideIchibaLectureAppAndroid = $('.ichiba_lecture_app_android');

if (ua.match(/(iPhone|iPad|iPod)/)) {
    guideIchibaLectureApple.css('display', 'flex');
    guideIchibaLectureAndroid.css('display', 'none');
    guideIchibaLecturePc.css('display', 'none');
    guideIchibaLectureAppApple.css('display', 'block');
    guideIchibaLectureAppAndroid.css('display', 'none');
} else if (ua.match(/(Android)/)){
    guideIchibaLectureApple.css('display', 'none');
    guideIchibaLectureAndroid.css('display', 'flex');
    guideIchibaLecturePc.css('display', 'none');
    guideIchibaLectureAppApple.css('display', 'none');
    guideIchibaLectureAppAndroid.css('display', 'block');
} else {
    guideIchibaLectureApple.css('display', 'none');
    guideIchibaLectureAndroid.css('display', 'none');
    guideIchibaLecturePc.css('display', 'flex');
}
