/**
 * Created by Administrator on 2016/12/12.
 */
$(document).ready(function () {

    $(".upload-steps li a").click(function () {

        if ($(this).attr("disabled") == "disabled" || !$(this).hasClass("valid")) {
            return;
        }

        switch ($(this).parent().index()) {
            case 0:
                $(".js-edit-general").removeClass("hidden");
                $(".js-edit-pricing").addClass("hidden");
                $(".js-upload").addClass("hidden");


                $(".js-save").val("保存并继续");
                currentStep = 0;
                break;
            case 1:
                $(".js-edit-general").addClass("hidden");
                $(".js-edit-pricing").removeClass("hidden");
                $(".js-upload").addClass("hidden");


                $(".js-save").val("保存并继续");
                currentStep = 1;
                break;
            case 2:
                $(".js-edit-general").addClass("hidden");
                $(".js-edit-pricing").addClass("hidden");
                $(".js-upload").removeClass("hidden");
                $(".js-save").val("发布");
                currentStep = 2;
                break;
        }

        //当前
        // switch (currentStep){
        //     case 0:
        //         break;
        //     case 1:
        //         break;
        //     case 2:
        //         break;
        // }
        //选中
        // $(".upload-steps li:eq(1) a").removeClass("current").addClass("valid");
        // $(".upload-steps li:eq(1) a").removeAttr("disabled");
        // $(".upload-steps li:eq(2) a").addClass("current");


    });


    var titleText = $(".show-title-text");
    var charCount = $(".char-count");
    var charCountDesc = $(".char-count-desc");

    charCount.html("<em>" + titleText.val().length + "</em> / 30 字");
    if (titleText.val().trim().length >= 5)   charCountDesc.css("color", "green");

    titleText.scroll(function () {
        var scrolltop = titleText.scrollTop();
        $(".show-before-title").css("top", -scrolltop + 8);
    });
    titleText.bind('input propertychange ', function () {
        if (titleText.val().trim().length >= 5) {
            charCountDesc.css("color", "green");
            charCountDesc.html("厉害了word的大神!!");
        } else {
            charCountDesc.css("color", "red");
            charCountDesc.html("至少输入五个字!!");
        }

        if (titleText.val().length > 30) {
            return;
        }
        charCount.html("<em>" + titleText.val().length + "</em> / 30 字")
    });


    //类目
    var categoriy =
        [
            {
                "name": "图形与设计",
                "id": "0",
                "items": [{"subcategoriy": "Logo设计"}, {"subcategoriy": "名片设计"}, {"subcategoriy": "传单海报设计"}, {"subcategoriy": "PPT设计"}, {"subcategoriy": "UI设计"},
                    {"subcategoriy": "图片精修"}, {"subcategoriy": "文化衫设计"}, {"subcategoriy": "产品外观设计"}, {"subcategoriy": "宣传册设计"}, {"subcategoriy": "横幅广告设计"}
                    , {"subcategoriy": "3D&2D模型"}, {"subcategoriy": "服装纸样"}, {"subcategoriy": "园林设计"}, {"subcategoriy": "机械制图"}, {"subcategoriy": "包装设计"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "1",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "翻译与文案",
                "id": "2",
                "items": [{"subcategoriy": "英语翻译"}, {"subcategoriy": "日语翻译"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "3",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "4",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "5",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "6",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "7",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "8",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "9",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            },
            {
                "name": "漫画设计",
                "id": "10",
                "items": [{"subcategoriy": "照片绘漫画"}, {"subcategoriy": "四格漫画"}, {"subcategoriy": "绘画创作"}, {"subcategoriy": "漫画创作"}, {"subcategoriy": "插画创作"},
                    {"subcategoriy": "3D&2D卡通形象"}, {"subcategoriy": "漫画表情包"}, {"subcategoriy": "其他"}]
            }
        ];


    $("#host-dropdown-menu > li").click(function () {
        $("#hots-category-id").val($(this).index());
        $("#host-dropdown-toggle").html($(this).find(".text-inner").text());
    });

    // var dropdown = $("#host-dropdown-toggle");
    // var dropdownMenu = $("#host-dropdown-menu");
    // var subDropdown = $("#sub-dropdown-toggle");
    // var subDropdownMenu = $("#sub-dropdown-menu");
    // var msg = "";
    // $.each(categoriy, function (index, indexItems) {
    //
    //     if (0 == indexItems["id"]) {
    //
    //
    //         $.each(indexItems["items"], function (index, indexItemss) {
    //             msg += "<li><a><span class='text-inner'>" + indexItemss["subcategoriy"] + "</span></a></li>";
    //         });
    //     }
    // });
    // subDropdownMenu.append(msg);
    //
    // dropdown.click(function () {
    //     dropdownMenu.css("display", "block");
    //
    // });
    //
    // subDropdown.click(function () {
    //     subDropdownMenu.css("display", "block");
    // });
    //
    // $("#host-dropdown-menu > li").click(function () {
    //     dropdownMenu.css("display", "none");
    //     dropdown.html($(this).find(".text-inner").text());
    //
    //     subDropdownMenu.empty();
    //     var clickIndex = $(this).index();
    //     msg = "";
    //     var firstSubCategoriy = "";
    //     $.each(categoriy, function (index, indexItems) {
    //
    //         if (clickIndex == indexItems["id"]) {
    //             $.each(indexItems["items"], function (index, indexItemss) {
    //                 msg += "<li><a><span class='text-inner'>" + indexItemss["subcategoriy"] + "</span></a></li>";
    //             });
    //         }
    //     });
    //     subDropdownMenu.append(msg);
    //     $("#sub-dropdown-menu > li").click(function () {
    //         subDropdownMenu.css("display", "none");
    //         subDropdown.html($(this).find(".text-inner").text());
    //         dropdownMenu.css("display", "none");
    //     });
    //     subDropdownMenu.css("display", "block");
    //
    // });
    //
    // $("#sub-dropdown-menu > li").click(function () {
    //     subDropdownMenu.css("display", "none");
    //     subDropdown.html($(this).find(".text-inner").text());
    // });


    $("#show-description").bind('input propertychange', function () {

        var input = $(this).val();
        $(this).html("<br>" + input);

        // alert($(this).val());
    });


    $(".show-edit-area").click(function (e) {
        //alert($(e.target).getElement());
        // alert(event.srcElement.tagName  );
        if (event.srcElement.tagName == "B") {
            $(".bold").addClass("toolbar-btn-checked")
        } else {
            $(".bold").removeClass("toolbar-btn-checked")
        }
    })


    $(".bold").click(function () {

        $(".show-edit-area").append("#65279");
        document.execCommand("bold", false, "");
    });
    $(".ul").click(function () {
        document.execCommand("insertUnorderedList", false, "");
    });

    $(".ol").click(function () {
        document.execCommand("insertOrderedList", false, "");
    });

    $(".strong").click(function () {
        if ($(this).hasClass("toolbar-btn-checked")) {
            $(this).removeClass("toolbar-btn-checked");
            document.execCommand("backColor", false, "white");

        } else {
            $(this).addClass("toolbar-btn-checked");
            document.execCommand("backColor", false, "red");
        }
    });


    $('.tag-input').bind('input propertychange', function () {
        if ($(this).val().indexOf(",") != -1) {
            var inputMsg = $(this).val().substr(0, $(this).val().length - 1);
            var msg = "<span class='production-tag' id='rNdrL_1'><span>" + inputMsg + "</span><a class='tm-tag-remove'id='rNdrL_Remover_1'tagidtoremove='1'>x</a></span>";

            if ($("#js-show-tags").find(".production-tag").size() == 0) {
                $("#js-show-tags").find("textarea").after(msg);
            } else {

                $("#js-show-tags").find(".production-tag:last").after(msg);
            }
            $(".tag-input").val("");


            if ($("#js-show-tags").find(".production-tag").size() >= 5) {
                $('.tag-input').css("display", "none");
            } else {
                $('.tag-input').css("display", "inline-block");
            }
        }
    });

    var tagList = $("#show_tag_list").val();


    //删除tag
    function deleteTagList(tagValue) {

        console.log(tagValue);

        var list = tagList.split(",");
        for (var i = 0; i < list.length; i++) {

            if (tagValue.trim() == list[i].trim()) {
                list.splice(i, 1);
            }
        }
        tagList = "";
        for (var i = 0; i < list.length; i++) {
            if (i == list.length - 1) {
                tagList += list[i];
            } else {
                tagList += list[i] + ",";
            }
        }
        console.log(tagList);
        $("#show_tag_list").html(tagList);
    }

    $('.tag-input').bind('keydown', function (event) {

        if (event.keyCode == 13) {
            return;
        }

        if ($(this).val() == "" && event.keyCode == 8) {
            deleteTagList($("#js-show-tags").find(".production-tag:last span").html());
            $("#js-show-tags").find(".production-tag:last").remove();
        }
    });
    $("#gig-create-general").submit(function (e) {


        return false;
    });

    $(".tag-input").keypress(function (event) {

        if (event.keyCode == 13) {
            var inputMsg = $(this).val().substr(0, $(this).val().length);
            var msg = "<span class='production-tag' id='rNdrL_1'><span>" + inputMsg + "</span><a class='tm-tag-remove'id='rNdrL_Remover_1'tagidtoremove='1'>x</a></span>";
            $.each(tagList.split(","), function (index, value) {
                if (inputMsg == value.trim()) {
                    flag = true;
                    throw "相同tag";
                }
                if (inputMsg.trim() == "") {
                    flag = true;
                    throw "null";
                }
            });

            if ($("#js-show-tags").find(".production-tag").size() == 0) {
                $("#js-show-tags").find("textarea").after(msg);
            } else {
                $("#js-show-tags").find(".production-tag:last").after(msg);
            }
            tagList += "," + inputMsg;//添加到textarea
            $("#show_tag_list").html(tagList);


            $(".tag-input").val("");//清空tag输入
            if ($("#js-show-tags").find(".production-tag").size() >= 5) {
                $('.tag-input').css("display", "none");
            } else {
                $('.tag-input').css("display", "inline-block");
            }

            return false;
        }
    });

    $("#js-show-tags").on("click", ".tm-tag-remove", function () {

        deleteTagList($(this).prev().html());
        $(this).parent().remove();

        $('.tag-input').css("display", "inline-block");
        $('.tag-input').focus();
    });


    $(".js-save").click(function () {

        //上传数据
        switch (currentStep) {
            case 0:
                setTimeout("saveOverride()", 500);

                break;
            case 1:
                setTimeout("savePrice()", 500);

                break;
            case 2:
                setTimeout("saveUpload()", 500);

                break;
        }

    })


    $(".js-btn-toggle-multi-packages").click(function (event) {
        event.preventDefault();
        var isChecked = $(this).find("input").is(':checked');

        if (isChecked) {
            $(this).find("input").prop("checked", false);
            $(".try-now").removeClass("hidden");
            isMultiPackages = false;
        } else {
            $(this).find("input").prop("checked", true);
            $(".try-now").addClass("hidden");
            isMultiPackages = true;
        }
    });
    $(".js-start-packages").click(function () {
        $(".try-now").addClass("hidden");
        $(".js-btn-toggle-multi-packages").find("input").prop("checked", true);
        isMultiPackages = true;
        return false;
    });

    $(".js-packages-expected-duration .dropdown-menu li").click(function () {
        $(this).siblings("li").find("a").removeClass("selected");
        $(this).find("a").addClass("selected");
        var index = $(this).index();
        var choose = $(this).find(".text-inner").text();
        ($($(this).parent()).next().val(index));
        ($($(this).parent()).prev().html(choose));
    });


    $(".js-packages-title").find("textarea").blur(function () {
        $(".js-show-packages-title").each(function (index, domEle) {
            var package_title_error = $(".js-show-and-packages .js-title-error");
            if (isMultiPackages) {
                if ($(domEle).val().trim() == "") {
                    package_title_error.css("display", "block");
                    return false;
                } else {
                    package_title_error.css("display", "none");
                }
            } else {
                if (index == 0) {
                    if ($(domEle).val().trim() == "") {
                        package_title_error.css("display", "block");
                        return false;
                    } else {
                        package_title_error.css("display", "none");
                    }
                }
            }
        });
    });

    $(".js-packages-description").find("textarea").blur(function () {

        $(".js-show-packages-description").each(function (index, domEle) {
            var package_desc_error = $(".js-show-and-packages .js-desc-error");
            if (isMultiPackages) {
                if ($(domEle).val().trim() == "") {
                    package_desc_error.css("display", "block");
                    return false;
                } else {
                    package_desc_error.css("display", "none");
                }
            } else {
                if (index == 0) {
                    if ($(domEle).val().trim() == "") {
                        package_desc_error.css("display", "block");
                        return false;
                    } else {
                        package_desc_error.css("display", "none");
                    }
                }
            }
        });
    });

    var packages_price = $(".js-packages-price").find("input");
    packages_price.keydown(function () {
        var e = $(this).event || window.event;
        var code = parseInt(e.keyCode);
        if ((code >= 96 && code <= 105) || (code >= 48 && code <= 57) || code == 8 || (code >= 37 && code <= 40)) {
            return true;
        } else {
            return false;
        }
    });
    var package_money_error = $(".js-show-and-packages .js-money-error");
    $("#show_packages_price_1,#show_packages_price_2,#show_packages_price_3").blur(function () {
        if ($(this).val() < 2 || $(this).val() > 2000) {
            package_money_error.css("display", "block");
        } else {

            $(".js-show-packages-price").each(function (index, domEle) {

                if (isMultiPackages) {
                    if ($(domEle).val().trim() == "") {
                        package_money_error.css("display", "block");
                        return false;
                    } else {
                        package_money_error.css("display", "none");
                    }
                } else {
                    if (index == 0) {
                        if ($(domEle).val().trim() == "") {
                            package_money_error.css("display", "block");
                            return false;
                        } else {
                            package_money_error.css("display", "none");
                        }
                    }
                }
            });

        }
    });


    var isExtraPrice = false;
    $(".js-btn-toggle-extra-service").click(function (event) {
        event.preventDefault();
        var isChecked = $(this).find("input").is(':checked');

        if (isChecked) {
            $(this).find("input").prop("checked", false);
            $(".js-extra-service-wrapper").addClass("hidden");
            isExtraPrice = false;
        } else {
            $(this).find("input").prop("checked", true);
            $(".js-extra-service-wrapper").removeClass("hidden");
            isExtraPrice = true;
        }
    });


    $(".js-extra-service-wrapper").on("blur", ".js-extra-title", function () {
        if (isExtraPrice) {
            if ($(this).val().trim() == "") {
                $(this).parents(".js-gig-extra").find(".js-title-error").css("display", "block");
            } else {
                $(this).parents(".js-gig-extra").find(".js-title-error").css("display", "none");
            }
        }
    });
    $(".js-extra-service-wrapper").on("blur", ".js-extra-description", function () {
        if (isExtraPrice) {
            if ($(this).val().trim() == "") {
                $(this).parents(".js-gig-extra").find(".js-desc-error").css("display", "block");
            } else {
                $(this).parents(".js-gig-extra").find(".js-desc-error").css("display", "none");
            }
        }
    });
    $(".js-extra-service-wrapper").on("blur", ".js-extra-money", function () {
        if (isExtraPrice) {
            if ($(this).val().trim() < 2 || $(this).val().trim() > 2000) {
                $(this).parents(".js-gig-extra").find(".js-money-error").css("display", "block");
            } else if ($(this).val().trim() == "") {
                $(this).parents(".js-gig-extra").find(".js-money-error").css("display", "block");
            } else {
                $(this).parents(".js-gig-extra").find(".js-money-error").css("display", "none");
            }
        }
    });


    $(".js-add-show-extra").click(function () {

        var length = $('.js-gig-extra').length;

        if (length > 0 && length < 4) {
            var extra_num = Number($('.js-gig-extra:last').attr("extras-num"));
            var new_extra = $('.js-gig-extra:last').clone();
            new_extra.attr("extras-num", extra_num + 1);
            new_extra.find("#show_items_extra_" + extra_num).attr("id", "show_items_extra_" + (extra_num + 1));
            new_extra.find("label").attr("for", "show_items_extra_" + (extra_num + 1));
            new_extra.find(".js-extra-title").attr("name", "show_items_extra_" + (extra_num + 1));
            new_extra.find(".js-extra-title").val("");
            new_extra.find(".js-extra-description").attr("name", "show_extra_description_" + (extra_num + 1));
            new_extra.find(".js-extra-description").val("");

            new_extra.find("#show_extra_price_" + extra_num).prop("name", "show_items_extra_" + (extra_num + 1));
            new_extra.find("#show_extra_price_" + extra_num).val("");
            new_extra.find("#show_extra_price_" + extra_num).attr("id", "show_items_extra_" + (extra_num + 1));


            new_extra.find(".js-title-error").css("display", "none");
            new_extra.find(".js-desc-error").css("display", "none");
            new_extra.find(".js-money-error").css("display", "none");

            $(".js-extra-service-wrapper").find(".js-gig-extra:last").after(new_extra);
            if ($('.js-gig-extra').length == 4) {
                $(".add-gig-extra").addClass("hidden");
            }
        }
    });
    $("body").on("click", ".js-checkbox-label", function () {
        event.preventDefault();
        var length = $('.js-gig-extra').length;
        if (length == 1) {
            alert("最后一个了");
            return false;
        } else {
            $(".add-gig-extra").removeClass("hidden");
        }

        var isChecked = $(this).find("input").is(':checked');

        if (isChecked) {
            $(this).find("input").prop("checked", false);
            $(this).parents(".js-gig-extra").remove();
        }
    });

    /**
     * 图片上传
     */
    var imageID = 1;
    var imageCount = $(".js-image .has-image").length;
    $(".js-image .js-counter").text("(" + imageCount + "/6)");

    $(".js-image").on("change", ".js-file-upload", function () {
        var dropzone = $(this).parents(".dropzone");
        var dropzoneNext = $(this).parents(".dropzone").next();
        var imgObjPreview = dropzone.find("img");

        var filepath = this.files[0].name;
        var extStart = filepath.lastIndexOf(".");
        var ext = filepath.substring(extStart, filepath.length).toUpperCase();
        if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
            alert("图片限于bmp,png,gif,jpeg,jpg格式");
            return;
        }

        var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径

        if (objUrl) {

            dropzone.find(".wrapper").removeClass("hidden");
            dropzone.addClass("has-image").removeClass("empty-state");
            dropzone.removeClass("blank");
            dropzoneNext.removeClass("blank");

            //上传服务器完成
            imgObjPreview.attr("src", objUrl);
            dropzone.find(".wrapper").addClass("hidden");
            imageCount++;
            $(".js-image .js-counter").text("(" + imageCount + "/6)");
        }
    });

    $(".js-image").on("click", ".js-delete-file", function () {
        imageID++;
        var dropzone = $(this).parents(".dropzone");

        var dropzoneLast = $(this).parents(".js-gallery-item").find(".dropzone:last");

        if (dropzone.index() == dropzoneLast.index() || imageCount == 6) {
            // dropzone.addClass("empty-state").removeClass("has-image");
            // dropzone.find("img").attr("src","");

            var msg = "<div class='dropzone empty-state  js-dropzone' data-type='portfolio'><div class='wrapper hidden'> <div class='load-bar'><div class='load-bar-inner'> <div><i class='percent'>100%</i></div></div></div></div><div class= 'empty-state-box'><label for=" +
                "uploadimage" + imageID + "><img src='../images/plus.png'></label><input type='file' id=" +
                "uploadimage" + imageID + " class='gallery-file-field js-file-upload' name='image_file' multiple></div> <div class='done-box js-done-box'><img></div><nav class='controls'><i class='fa fa-trash js-delete-file'></i></nav><div class='primary'>展示页</div></div>";
            dropzoneLast.after(msg);
            dropzone.remove();
        } else {
            dropzone.remove();
            var msg = "<div class='dropzone empty-state blank js-dropzone' data-type='portfolio'><div class='wrapper hidden'> <div class='load-bar'><div class='load-bar-inner'> <div><i class='percent'>100%</i></div></div></div></div><div class= 'empty-state-box'><label for=" +
                "uploadimage" + imageID + "><img src='../images/plus.png'></label><input type='file' id=" +
                "uploadimage" + imageID + " class='gallery-file-field js-file-upload' name='image_file' multiple></div> <div class='done-box js-done-box'><img></div><nav class='controls'><i class='fa fa-trash js-delete-file'></i></nav><div class='primary'>展示页</div></div>";
            dropzoneLast.after(msg);
        }
        imageCount--;
        console.log("imageID--" + imageID);
        $(".js-image .js-counter").text("(" + imageCount + "/6)");
    })


    /**
     * 视频上传
     */
    var videoID = 1;
    var videoCount = $(".js-video .has-image").length;
    $(".js-video .js-counter").text("(" + videoCount + "/1)");

    $(".js-video").on("change", ".js-file-upload", function () {
        var dropzone = $(this).parents(".dropzone");
        var dropzoneNext = $(this).parents(".dropzone").next();
        var imgObjPreview = dropzone.find("img");

        var filepath = this.files[0].name;
        var extStart = filepath.lastIndexOf(".");
        var ext = filepath.substring(extStart, filepath.length).toUpperCase();
        if (ext != ".MP4" && ext != ".AVI") {
            alert("视频限于MP4，avi格式");
            return;
        }

        var objUrl = getObjectURL(this.files[0]); //获取视频的路径

        if (objUrl) {
            imgObjPreview.attr("src", objUrl); //将视频路径存入src中
            dropzone.addClass("has-image").removeClass("empty-state");

            videoCount++;
            $(".js-video .js-counter").text("(" + videoCount + "/1)");
        }
    });

    $(".js-video").on("click", ".js-delete-file", function () {
        videoID++;
        var dropzone = $(this).parents(".dropzone");

        var dropzoneLast = $(this).parents(".js-gallery-item").find(".dropzone:last");

        var msg = "<div class='dropzone empty-state  js-dropzone' data-type='video'><div class= 'empty-state-box'> <span class='icon video-icon'></span><br>Drag a Video or <label for=" +
            videoID + ">browse</label><input type='file' id=" +
            videoID + " class='gallery-file-field js-file-upload' name='video_file' ></div> <div class='done-box js-done-box'><img></div><nav class='controls'><i class='fa fa-trash js-delete-file'></i><i class='fa fa-pencil-square-o js-open-video-thumbnail-popup'></i></nav><div class='primary'>展示页</div></div>";

        dropzoneLast.after(msg);
        dropzone.remove();

        videoCount--;
        $(".js-video .js-counter").text("(" + videoCount + "/1)");
    })

    var isFaq = false;
    $(".js-btn-toggle-faq").click(function (event) {
        event.preventDefault();
        var isChecked = $(this).find("input").is(':checked');
        if (isChecked) {
            $(".faq-wrapper").addClass("hidden");
            $(this).find("input").prop("checked", false);
            isFaq = false;
        } else {
            $(".faq-wrapper").removeClass("hidden");
            $(this).find("input").prop("checked", true);
            isFaq = true;
        }
    });

    $(".js-add-faq").click(function () {
        var question = $(".js-faq-question");
        var answer = $(".js-faq-answer");
        if (question.val() == "" || answer.val() == "") {
            question.css("border-color", "red");
            answer.css("border-color", "red");
            return;
        }

        question.css("border-color", "#b2b2b2");
        answer.css("border-color", "#b2b2b2");

        var msg = "<li class=''><header>" + question.val() + "<a>删除</a></header> <div class='panel'>" + answer.val() + "</div></li>"
        // $(".js-component-accordion").animate({ "left": 500 }, 2000).animate({ "left": 0 }, 2000);
        $(".js-component-accordion").append(msg);
        $(".js-component-accordion li:last").css("display", "none");
        $(".js-component-accordion li:last").animate({"left": -500}, 100, function () {
            $(this).css("display", "block")
        }).animate({"left": 20}, 500).animate({"left": -10}, 500).animate({"left": 0}, 500);
    })

    $("body").on("click", ".js-component-accordion li", function () {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened")
        } else {
            $(this).addClass("opened")
        }
    })
    $("body").on("click", ".js-component-accordion li a", function (e) {
        e.stopPropagation();
        // alert($(this).parents("li").index());
        $(this).parents("li").animate({"left": 20}, 300).animate({"left": -800}, 800, function () {
            $(this).remove();
        })
    })
});


//建立一個可存取到該file的url
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

var currentStep = 0;
function saveOverride() {
    var titleCorrect = checkTitle();
    // var categoryCorrect = checkCategory();
    var describeCorrect = checkDesc();
    var tagCorrect = checkTag();
    // if (!(titleCorrect && categoryCorrect && describeCorrect && tagCorrect)) {
    //     $(window).scrollTop(0);
    //     return false;
    // }
    if (!(titleCorrect && describeCorrect && tagCorrect)) {
        $(window).scrollTop(0);
        return false;
    }
    $(".js-section-overlay").removeClass("hidden");
    $(".js-edit-general").addClass("hidden");
    $(".js-edit-pricing").removeClass("hidden");
    $(".js-section-overlay").addClass("hidden");
    $(".upload-steps li:eq(0) a").removeClass("current").addClass("valid");
    $(".upload-steps li:eq(1) a").addClass("current");
    $(window).scrollTop(0);
    currentStep = 1;
}

function savePrice() {
    $(".js-section-overlay").removeClass("hidden");
    $(".js-edit-pricing").addClass("hidden");
    $(".js-upload").removeClass("hidden");
    $(".js-section-overlay").addClass("hidden");

    $(".upload-steps li:eq(1) a").removeClass("current").addClass("valid");
    $(".upload-steps li:eq(1) a").removeAttr("disabled");
    $(".upload-steps li:eq(2) a").addClass("current");
    $(window).scrollTop(0);
    $(".js-save").val("发布");
    currentStep = 2;
}

function saveUpload() {
    currentStep = 0;
}

function checkTitle() {
    if ($("#show_title").val().length < 5) {
        return false;
    } else {
        return true;
    }
}
function checkCategory() {
    if ($("#host-category-id").val() !== "" && $("#sub-category-id").val() !== "") {
        return true;
    } else {
        $(".show-edit-category-wrap .js-category-error").css("display", "block");
        return false;
    }
}
function checkDesc() {

    if ($("#show-description").val().length < 12) {
        $("#js-show-desc-wrap .js-desc-error").css("display", "block");
        return false;
    } else {
        return true;
    }
}
function checkTag() {
    if ($("#hidden-tag-input").val().split(",").length < 3) {
        $(".show-edit-tags-input-wrap .js-tag-error").css("display", "block");
        return false;
    } else {
        return true;
    }
}

var isMultiPackages = false;
function checkPackageTitle() {

}




