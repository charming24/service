new Vue({
    el: '#main-wrapper',
    data: function () {
        return {
            title: "hasad",
            activeColor: "red",
            host_categories: [{"id": 1, "category": "图形设计"}, {"id": 2, "category": "漫画设计"},
                {"id": 3, "category": "翻译与文案"}, {"id": 4, "category": "推广与营销"},
                {"id": 5, "category": "淘宝服务"}, {"id": 6, "category": "编程及技术"},
                {"id": 7, "category": "视频制作"}, {"id": 8, "category": "商业服务"},
                {"id": 9, "category": "体验服务"}, {"id": 10, "category": "音乐与音频"},
                {"id": 11, "category": "其他服务"}],
            url: 'http://www.baidu.com',
            items: [{"subcategoriy": "Logo设计"}, {"subcategoriy": "名片设计"}, {"subcategoriy": "传单海报设计"}, {"subcategoriy": "PPT设计"}, {"subcategoriy": "UI设计"},
                {"subcategoriy": "图片精修"}, {"subcategoriy": "文化衫设计"}, {"subcategoriy": "产品外观设计"}, {"subcategoriy": "宣传册设计"}, {"subcategoriy": "横幅广告设计"}
                , {"subcategoriy": "3D&2D模型"}, {"subcategoriy": "服装纸样"}, {"subcategoriy": "园林设计"}, {"subcategoriy": "机械制图"}, {"subcategoriy": "包装设计"}, {"subcategoriy": "其他"}],
            current_hostcategory: "图形与设计",
            current_subcategory: "请选择子类目",
            current_step: 1,
            description: "hahahahfffffffffffffffff",
            tags: ["aggag", "aegg", "Aegeag"],
            tagInput: "",
            deliverTime: ["1 天完成", "2 天完成", "3 天完成", "4 天完成", "5 天完成", "6 天完成", "7 天完成", "8 天完成", "9 天完成", "10 天完成", "11 天完成"
                , "12 天完成", "13 天完成", "14 天完成", "15 天完成", "16 天完成", "17 天完成", "18 天完成", "19 天完成", "20 天完成", "21 天完成", "22 天完成", "23 天完成"
                , "24 天完成", "25 天完成", "26 天完成", "27 天完成", "28 天完成", "29 天完成", "30 天完成"],
            currentPackageTitle_1: "",
            currentPackageTitle_2: "",
            currentPackageTitle_3: "",
            currentPackageDesc_1: "",
            currentPackageDesc_2: "",
            currentPackageDesc_3: "",
            currentPackageDeliverTime_1: "1 天完成",
            currentPackageDeliverTime_2: "1 天完成",
            currentPackageDeliverTime_3: "1 天完成",
            currentPackagePrice_1: "",
            currentPackagePrice_2: "",
            currentPackagePrice_3: "",
            isMultiPackages: false,
            isExtraPrice: false,
            extraPrices: [{"extraCheckboxId": "extra1", "titleInput": "extra1", "descInput": "test", "priceInput": ""},
                {"extraCheckboxId": "extra2", "titleInput": "extra2", "descInput": "test", "priceInput": ""}],

            uploadImages: [
                {"fileInputId":"imagl","hasImage": true, "imageName": "", "status": "uploaded", "imgUrl": ""},
                {"fileInputId":"imag2","hasImage": false, "imageName": "", "status": "current", "imgUrl": ""},
                {"fileInputId":"imag3","hasImage": false, "imageName": "", "status": "unupload","imgUrl": ""},
                {"fileInputId":"imag4","hasImage": false, "imageName": "", "status": "unupload","imgUrl": ""},
                {"fileInputId":"imag5","hasImage": false, "imageName": "", "status": "unupload","imgUrl": ""},
                {"fileInputId":"imag6","hasImage": false, "imageName": "", "status": "unupload","imgUrl": ""}
            ],
            uploadVideo:{"fileInputId":"video","hasVideo": true, "videoName": "", "status": "current", "videoUrl": ""},

            currentFaqQuestion:"",
            currentFaqAnswer:"",
            faqs:[{"question":"xxxx", "answer":"xxx","answerOpen":true,"isEditOrSave":"save"},{"question":"xxxx", "answer":"xxx","answerOpen":true,"isEditOrSave":"save"}],
            isOpenFaq:false,
            faqQuestionBorder:"1px #b2b2b2 solid",
            faqAnswerBorder:"1px #b2b2b2 solid"
        };
    },
    computed: {


        titleInput: function () {
            if (this.title.length == 5) {
                this.activeColor = "green";
                return "厉害了word大神!!!"
            } else if (this.title.length < 5) {
                this.activeColor = "red";
                return "标题至少五个字!!"
            } else if (this.title.length > 5) {
                this.activeColor = "green";
                return "满足五个字啦!!"
            }
        },
        descInput: function () {
            return this.description.length + "/1200 字";
        }
    },
    methods: {

        firstStep: function () {
            this.current_step = 1;
        },
        secondStep: function () {
            var vm = this;
            if (vm.current_step > 2)
                vm.current_step = 2;
            else return;
        },
        thirdStep: function () {
            var vm = this;
            if (vm.current_step > 2)
                vm.current_step = 3;
        },
        choose_hostcategory: function (hostcategory) {
            this.current_hostcategory = hostcategory;
        },

        choose_subcategory: function (subcategory) {
            this.current_subcategory = subcategory;
        },
        hot_suggestion_1: function () {
            this.current_hostcategory = "图形设计";
            this.current_subcategory = "LOGO设计";

        },
        hot_suggestion_2: function () {
            this.current_hostcategory = "漫画设计";
            this.current_subcategory = "照片绘漫画";

        },
        hot_suggestion_3: function () {
            this.current_hostcategory = "图形设计";
            this.current_subcategory = "插画";
        },
        deleteTag: function (index, tag) {
            this.tags.splice(index, 1);
        },
        deleteLastTag: function () {
            this.tags.splice(this.tags.length - 1, 1);
        },
        enterToConfirm: function (tagInput) {
            // if(this.tags.has(tagInput)) return;
            for (var ele in this.tags) {
                if (tagInput == this.tags[ele]) {
                    return false;
                }
            }
            this.tags.push(tagInput);
            this.tagInput = "";

        },

        chooseDeleverTime: function (index, time) {
            switch (index) {
                case 1:
                    this.currentPackageDeliverTime_1 = time;
                    break;
                case 2:
                    this.currentPackageDeliverTime_2 = time;
                    break;
                case 3:
                    this.currentPackageDeliverTime_3 = time;
                    break;
            }
        },

        toggleStartPackages: function () {
            this.isMultiPackages = !this.isMultiPackages;
        },
        toggleExtraPrice: function () {
            this.isExtraPrice = !this.isExtraPrice;
        },
        deleteExtraPrice: function (index) {
            event.preventDefault();
            var length = this.extraPrices.length;
            if (length == 1) {
                alert("最后一个了");
                return false;
            }
            this.extraPrices.splice(index, 1);
        },
        addExtraPrice: function () {
            var extra = this.extraPrices[this.extraPrices.length - 1].extraCheckboxId;
            this.extraPrices.push({
                "extraCheckboxId": "extra",
                "titleInput": "",
                "descInput": "",
                "priceInput": ""
            });
        },
        isNotNumber: function (value) {
            var pattern = /^\d+$/g;
            var result = value.match(pattern);
            if (result == null) {
                return true;
            } else {
                return false;
            }
        },
        isPriceCorrect: function (value) {
            if (value.trim().length == 0) return false;
            var pattern = /^\d+$/g;
            var result = value.match(pattern);
            if (result == null) {
                return false;
            } else {
                if (value.trim() < 2 || value.trim() > 2000) {
                    return false;
                } else {
                    return true;
                }
                return true;
            }
        },
        uploadImage: function (index) {
            var evt = (evt) ? evt : ((window.event) ? window.event : null);
            var evt = evt || window.event; // firefox下window.event为null, IE下event为null

            var files = evt.target.files || evt.dataTransfer.files;
            var filepath = files[0].name;
            var extStart = filepath.lastIndexOf(".");
            var ext = filepath.substring(extStart, filepath.length).toUpperCase();
            if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                alert("图片限于bmp,png,gif,jpeg,jpg格式");
                return;
            }
            var objUrl = getObjectURL(files[0]); //获取图片的路径，该路径不是图片在本地的路径
            this.uploadImages[index].imgUrl = objUrl;
            this.uploadImages[index].hasImage = true;
            this.uploadImages[index].status = "uploaded";

            if (index!=5){
                this.uploadImages[index+1].status="current";
            }
        },
        deleteUploadImage: function (index,imageItem) {
            var hasCurrentStatus = false;
            var images = this.uploadImages;
            var deleteId = imageItem.fileInputId;
            for (var ele in images) {
                if ( "current" == images[ele].status) {
                    hasCurrentStatus = true;
                }
            }
            if (!hasCurrentStatus){
                images.splice(index, 1);

                images.push({
                    "fileInputId": deleteId,
                    "hasImage": false,
                    "imageName": "",
                    "status": "unupload",
                    "imgUrl": ""
                });
                images[5].status="current";
            }else {
                images.splice(index, 1);
                images.push({
                    "fileInputId": deleteId,
                    "hasImage": false,
                    "imageName": "",
                    "status": "unupload",
                    "imgUrl": ""
                });
            }
        },
        uploadVideo1:function () {
            var evt = (evt) ? evt : ((window.event) ? window.event : null);
            var evt = evt || window.event; // firefox下window.event为null, IE下event为null

            var files = evt.target.files || evt.dataTransfer.files;
            var filepath = files[0].name;
            var extStart = filepath.lastIndexOf(".");
            var ext = filepath.substring(extStart, filepath.length).toUpperCase();
            if (ext != ".MP4" && ext != ".AVI") {
                        alert("视频限于MP4，avi格式");
                        return;
                    }
            var objUrl = getObjectURL(files[0]); //获取图片的路径，该路径不是图片在本地的路径
            this.uploadVideo.videoUrl = objUrl;
            this.uploadVideo.hasVideo = true;
            this.uploadVideo.status = "uploaded";
        },
        deleteUploadVideo: function () {
            this.uploadVideo.videoUrl = "";
            this.uploadVideo.hasVideo = false;
            this.uploadVideo.status = "current";
        },
        toggleFaq:function () {
          this.isOpenFaq = !this.isOpenFaq;
        },
        preventDefault:function (event) {

            event.stopPropagation();
            return true;
        },
        addFaq:function (index) {
            var event = (event) ? event : ((window.event) ? window.event : null);
            var event = event || window.event; // firefox下window.event为null, IE下event为null
            event.preventDefault();

            var vm = this;

            if(vm.currentFaqQuestion.trim().length==0){
                vm.faqQuestionBorder="1px solid red";
                return;
            }else {
                vm.faqQuestionBorder="1px #b2b2b2 solid";
            }
            if(vm.currentFaqAnswer.trim().length==0){
                vm.faqAnswerBorder="1px solid red";
                return;
            }else {
                vm.faqAnswerBorder="1px #b2b2b2 solid";
            }

            this.faqs.push({"question":vm.currentFaqQuestion, "answer":vm.currentFaqAnswer,"answerOpen":true,"isEditOrSave":"save"});
            vm.currentFaqQuestion="";
            vm.currentFaqAnswer="";
        },
        editFaq:function (index) {
            var event = (event) ? event : ((window.event) ? window.event : null);
            var event = event || window.event; // firefox下window.event为null, IE下event为null
            event.stopPropagation();
            this.faqs[index].isEditOrSave = "edit";
        },
        saveFaq:function (index,faq) {
            var event = (event) ? event : ((window.event) ? window.event : null);
            var event = event || window.event; // firefox下window.event为null, IE下event为null
            event.stopPropagation();
            var question = faq.question;
            var answer = faq.answer;
            this.faqs[index].question =faq.question;
            this.faqs[index].answer =faq.answer;
            this.faqs[index].isEditOrSave = "save";
        },
        deleteFaq:function (index) {
            var event = (event) ? event : ((window.event) ? window.event : null);
            var event = event || window.event; // firefox下window.event为null, IE下event为null
            event.stopPropagation();
            this.faqs.splice(index,1);
        },
        answerOpenToggle:function (index) {
            this.faqs[index].answerOpen = !this.faqs[index].answerOpen;
        },
        save_upload: function () {
            switch (this.current_step) {
                case 1:
                    //验证
                    if (this.title.length < 5 || this.description.length < 12 || this.tags.length < 3) {
                        return;
                    }
                    //上传
                    this.current_step = 2;
                    break;
                case 2:
                    //上传
                    this.current_step = 3;
                    break;
                case 3:
                    //上传
                    this.current_step = 1;
                    break;
            }
        },
        getObjectURL: function () {
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
    },
    created: function () {
        var vm = this;
        vm.$http.get(this.url).then(function (resp) {

        }, function (resp) {
//                    this.title = "";
        })

    },
    mounted: function () {
    },
});