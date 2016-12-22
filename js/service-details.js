/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {

    var start;
    var end;
    var duration = 0;
    start = new Date();
    $(window).bind('beforeunload', function(e) {
        end = new Date();//用户退出时间
        duration = end.getTime() - start.getTime();
        duration = duration/1000;//取的是秒
        $.ajax({
            type: 'POST',
            async: false,
            url: 'url',
            data: {a:1,b:duration}
        });
    });


    $("#previewTab li").click(function () {
        $("#previewTab").children("li").removeClass("active");
        $(this).addClass("active");

        $(".tab-content > div").addClass("hidden");
        $(".tab-content > div").eq($(this).index()).removeClass("hidden");

    });

    $(".js-reviews li").click(function () {
        $(this).siblings("li").find("div").css("border-color", "transparent");
        $(this).find("div").css("border-color", "#1c639f");
    })
});

