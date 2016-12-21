/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {
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

