/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {

    $(".js-phonenumber").focus();
    $(".js-login").click(function () {
        var isNumberCorrect = checkNumber();
        var isPasswdCorrect = checkPasswd();
        var isCorrect = isNumberCorrect && isPasswdCorrect;
        return isCorrect;

    });

});

function checkNumber(){
    var username = $(".js-phonenumber");
    if (!username.val().match(/^(((13[0-9]{1})|188|159|153)+\d{8})$/)) {
        username.parents(".input-wrap").find(".error-container").css("display","block");
        return false;
    }else {
        username.parents(".input-wrap").find(".error-container").css("display","none");
        return true;
    }
}
function checkPasswd(){
    var passwd = $(".js-passwd");
    if (passwd.val().trim() == "") {
        passwd.parents(".input-wrap").find(".error-container").css("display","block");
        return false;
    }else {
        passwd.parents(".input-wrap").find(".error-container").css("display","none");
        return true;
    }
}

//检查 手机号码和密码
function checkNumberAndPasswd() {
    var phonenumber = $(".js-phonenumber");
    if (!phonenumber.val().match(/^(((13[0-9]{1})|188|159|153)+\d{8})$/)) {
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

    var passwd = $(".js-passwd");
    if (passwd.val().trim() == ""){
        passwd.animate({marginleft: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        passwd.focus();
        return false;
    }

    //验证密码是否正确
    return true;
};

