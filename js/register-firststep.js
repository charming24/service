/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {

    $("#js-phonenumber").focus();
    $("#js-first-register").click(function () {
        checkNumberAndValidateCode();
    });

    $('#js-phonenumber').bind('input propertychange', function () {

        if ($(this).val().length > 0) {

        }

    });

    var validCode = true;
    $("#js-get-code").click(function () {
        var time = 60;
        var code = $(this);

        if (validCode) {
            //发送手机验证码


            validCode = false;
            code.attr("disabled", true);
            var t = setInterval(function () {
                time--;
                code.val("等待" + time + "秒");
                if (time == 0) {
                    clearInterval(t);
                    code.val("重新获取");
                    validCode = true;
                }
            }, 1000)
        }
    });
});

//检查 手机号码和验证码
function checkNumberAndValidateCode() {
    var phonenumber = $("#js-phonenumber");
    if (phonenumber.val().trim() == "") {

        phonenumber.animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        phonenumber.focus();
        return false;
    }

    if (!phonenumber.val().match(/^(((13[0-9]{1})|188|159|153)+\d{8})$/)) {
        phonenumber.animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        phonenumber.focus();
        return false;
    }

    var validateCode = $("#js-validate-code");
    if (validateCode.val().trim() == "") {

        validateCode.animate({marginleft: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        validateCode.focus();
        return false;
    }
    return true;
};

