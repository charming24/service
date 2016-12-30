var title = $(".js-br-description");
var titleCount = $(".title-count");
var subCategory = $(".sub-dropdown-menu");
var budget = $(".js-budget");
var describe = $(".request-description");
var describeCount = $(".js-describe-count");
var requiredDays = $(".js-required-days");
var user_defined_required_days = $(".js-user-defined-required-days");
$(document).ready(function () {

    title.bind("input propertychange", function () {
        if (title.val().trim().length >= 5) {

        } else {

        }
        titleCount.html("<em>" + title.val().length + "</em> / 20 字")
    });

    describe.bind("input propertychange", function () {
        console.log( describe.val().length);
        describeCount.html( describe.val().length +" / 300 字")

    });


    $("#host-dropdown-menu > li").click(function () {
        var hostCategoryId = $(this).index() + 1;
        $("#hots-category-id").val($(this).index());
        $("#host-dropdown-toggle").html($(this).find(".text-inner").text());


        $.ajax({
            type: "GET",
            url: "http://www.baidu.com",
            data: {CategoryId: hostCategoryId},
            dataType: "json",
            success: function (data) {
                subCategory.empty();
                var html = '';
                $.each(data, function (index, comment) {
                    html += "<li><a data-val='" + d + "' ><span class='text-inner'>" + comment['subcategory'] + "</span> </a> </li>"
                });
                subCategory.html(html);
            }
        });
    });




    requiredDays.click(function () {
        $(this).siblings("a").removeClass("sel");
        $(this).addClass("sel");
        $(".post-request-required-days .error-container").addClass("hidden");
        user_defined_required_days.val("");

    });
    user_defined_required_days.bind("input propertychange", function () {
        if ($(this).val().trim().length > 0) {
            requiredDays.removeClass("sel");
        }
    });
    user_defined_required_days.focus(function () {
        $(this).removeClass("red-border");
    })
    user_defined_required_days.blur(function () {
        var reg = /^[0-9]*$/;
        if (reg.test($(this).val().trim())   ) {
               checkDeliveryTime();
        }else {
            $(this).addClass("red-border");

        }
    });

    budget.keydown(function () {
        var value = budget.val();
        var e = $(this).event || window.event;
        var code = parseInt(e.keyCode);
        if (code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8 && value>0 && value <100) {
            return true;
        } else {
            return false;
        }
    });

    var postSummit = $(".js-post-form-submit");
    postSummit.click(function () {

        var titleCorrect = checkTitle();
        var categoryCorrect = checkCategory();
         var deliveryTimeCorrect = checkDeliveryTime();
        var describeCorrect = checkDescribe();
        var budgetCorrect = checkBudget();
        if(titleCorrect && categoryCorrect && deliveryTimeCorrect&& describeCorrect && budgetCorrect){

            $(this).attr("disabled",true);
            $(this).addClass("disabled");
            //访问请求
        }else {
            return false;
        }
    })
});

function checkTitle() {
    if (title.val().trim().length < 3) {
        $(".post-request-title .error-container").removeClass("hidden");
        return false;
    }else {
        $(".post-request-title .error-container").addClass("hidden");
        return true;
    }
}
function checkDescribe() {
    if (describe.val().length<10) {
        $(".post-request-describe .error-container").removeClass("hidden");
        return false;
    }else {
        $(".post-request-describe .error-container").addClass("hidden");
        return true;
    }
}
function checkCategory() {
    if ($("#sub-category-id").val() == 0) {
        $(".post-request-category .error-container").removeClass("hidden");
        return false;
    }else {
        $(".post-request-category .error-container").addClass("hidden");
        return true;
    }
}
function checkDeliveryTime() {
    if (requiredDays.hasClass("sel") || (user_defined_required_days.val()>0 &&user_defined_required_days.val()<30 )){

        $(".post-request-required-days .error-container").addClass("hidden");
        return false;
    }else {
        $(".post-request-required-days .error-container").removeClass("hidden");
        return true;
    }
}

function checkBudget() {

    if(budget.val()<2  || budget.val()>6000){
        $(".post-request-budget .error-container").removeClass("hidden");
        return false;
    }else {
        $(".post-request-budget .error-container").addClass("hidden");
        return true;
    }
}