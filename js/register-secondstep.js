/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {

    $("#js-username").focus();
    $(".js-register-finish").click(function () {
        checkUsernamAndPasswd();
    });
});

//检查 手机号码和验证码
function checkUsernamAndPasswd() {
    var username = $("#js-username");
    if (username.val().trim() == "") {
        username.animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        username.addClass("red-border");
        username.focus();
        return false;
    }

    if (!username.val().length>8) {
        username.animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        username.addClass("red-border");
        username.focus();
        return false;
    }

    var passwd = $(".js-passwd");
    if (passwd.val().trim() == "") {

        passwd.animate({marginleft: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "-10px"}, 100).animate({left: "10px"}, 100).animate({left: "-10px"}, 100).animate({left: "10px"}, 100)
            .animate({left: "0px"}, 100);
        passwd.addClass("red-border");
        passwd.focus();
        return false;
    }

    var passwd_confirm = $(".js-passwd-confirm");
    if (!(passwd.val() == passwd_confirm.val())){

        alert("密码确认不一致");
    }


};

