new Vue({
    el: '#main-content',
    data: function () {
        return {
            url: 'http://www.baidu.com',
            title: "record a Breaking News VIDEO Commercial Special Off",
            commentCount: "(1662)",
            currentThumbIndex: 0,
            gradient_packages: [
                {
                    "isExpanded": false,
                    "level": "基础",
                    "price": "5",
                    "title": "aaa",
                    "description": "ahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhaha",
                    "deliverTime": "10 天",
                    "relate": [
                        {"relate_name":"源文件","relate_type":"0","relate_value":"0"},
                        {"relate_name":"1080P","relate_type":"0","relate_value":"1"},
                        {"relate_name":"双面","relate_type":"0","relate_value":"1"}
                    ]
                },
                {
                    "isExpanded": true,
                    "level": "标准",
                    "price": "10",
                    "title": "haha",
                    "description": "ahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhaha",
                    "deliverTime": "5 天",
                    "relate": [
                        {"relate_name":"源文件","relate_type":"0","relate_value":"0"},
                        {"relate_name":"1080P","relate_type":"0","relate_value":"1"},
                        {"relate_name":"双面","relate_type":"0","relate_value":"1"}
                    ]
                },
                {
                    "isExpanded": false,
                    "level": "高级",
                    "price": "30",
                    "title": "ahah",
                    "description": "ahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhahaahadsgsdgsdgsdgsdgsdhaha",
                    "deliverTime": "3 天",
                    "relate": [
                        {"relate_name":"源文件","relate_type":"0","relate_value":"1"},
                        {"relate_name":"1080P","relate_type":"0","relate_value":"1"},
                        {"relate_name":"双面","relate_type":"0","relate_value":"1"}
                    ]
                }
            ],
            thumbs: [
                {
                    "thumbUrl": "https://cldn0.fiverrcdn.com/fiverr/t_main2_video/v1482203333/vzrthumb/3309200/image",
                    "isVideo": false,
                    "isShowing": true
                },
                {
                    "thumbUrl": "https://cldn0.fiverrcdn.com/fiverr/t_thumbnail3_3/gigs/2977007/original/Fiverr_gig_pic.jpg",
                    "isVideo": false,
                    "isShowing": false
                },
                {
                    "thumbUrl": "https://cldn0.fiverrcdn.com/fiverr/t_main2_video/v1482203333/vzrthumb/3309200/image",
                    "isVideo": false,
                    "isShowing": false
                },
                {
                    "thumbUrl": "https://cldn0.fiverrcdn.com/fiverr/t_thumbnail3_3/gigs/2977007/original/Fiverr_gig_pic.jpg",
                    "isVideo": true,
                    "isShowing": false
                }
            ],
            currentTab:"detail",
            reviews:[
                {"userNickname":"鸡仔","userImageUrl":"鸡仔","reviewDate":"10/13/15","starCounts":"4","reviewComment":"aaaaaaaaaaaa","replyComment":"谢谢"},
                {"userNickname":"鸭在","userImageUrl":"鸡仔","reviewDate":"10/13/15","starCounts":"5","reviewComment":"bbbbbbbbbbbb","replyComment":"谢谢"},
                {"userNickname":"鱼仔","userImageUrl":"鸡仔","reviewDate":"10/13/15","starCounts":"5","reviewComment":"cccccccccccc","replyComment":""},
                {"userNickname":"鹅仔","userImageUrl":"鸡仔","reviewDate":"10/13/15","starCounts":"5","reviewComment":"dddddddddddd","replyComment":"谢谢"}
            ],
            faqs:[
                {"question":"xxxx", "answer":"xxx","answerOpen":true},
                {"question":"xxxx", "answer":"xxx","answerOpen":true},
                {"question":"xxxx", "answer":"xxx","answerOpen":true}],
            reviewChosenColor:"#1c639f",
            currentReview:"all",
            isMultiPackages:true,
        };
    },
    computed: {

        relateFilter:function () {

            var arrs = [];
            for (var i =0;i<this.gradient_packages.length;i++){
                var arr =[];
                for (var ele in this.gradient_packages){
                    arr.push(this.gradient_packages[ele].relate[i]);
                }
                arrs.push(arr);
            }
            console.log(arrs);
            return arrs;
        }


    },
    methods: {
        collect: function () {
            //点击收藏
        },
        expander_package: function (index) {
            for (var ele in this.gradient_packages) {
                this.gradient_packages[ele].isExpanded = false;
            }
            this.gradient_packages[index].isExpanded = !this.gradient_packages[index].isExpanded;
        },
        chooseThumb: function (index) {
            for (var ele in this.thumbs) {
                this.thumbs[ele].isShowing = false;
            }
            this.thumbs[index].isShowing = true;
            this.currentThumbIndex = index;


            console.log(this.currentThumbIndex);
        },
        nextThumb:function () {
            this.currentThumbIndex ++;
            chooseThumb(this.currentThumbIndex);
        },
        preThumb:function () {
            this.currentThumbIndex --;
            chooseThumb(this.currentThumbIndex);
        },
        chooseReview:function (info) {
            if(info == "all"){
                this.currentReview = "all";
            }else if(info == "positive"){
                this.currentReview = "positive";
            }else if(info == "negative"){
                this.currentReview = "negative";
            }
        },
        previewTabs:function (info) {


            if(info == "detail"){
                this.currentTab = "detail";
            }else if(info == "review"){
                this.currentTab = "review";
            }else if(info == "faq"){
                this.currentTab = "faq";
            }
        },
        answerOpenToggle:function (index) {
            this.faqs[index].answerOpen = !this.faqs[index].answerOpen;
        }

    },
    created: function () {
        var vm = this;
        vm.$http.get(this.url).then(function (resp) {

        }, function (resp) {

        })

    },

});