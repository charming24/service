new Vue({
    el: '#requirement-content',
    data: function () {
        return {
            url: 'http://www.baidu.com',
            title: "hasad",
            hostCategories: [{"id": 1, "category": "图形设计"}, {"id": 2, "category": "漫画设计"},
                {"id": 3, "category": "翻译与文案"}, {"id": 4, "category": "推广与营销"},
                {"id": 5, "category": "淘宝服务"}, {"id": 6, "category": "编程及技术"},
                {"id": 7, "category": "视频制作"}, {"id": 8, "category": "商业服务"},
                {"id": 9, "category": "体验服务"}, {"id": 10, "category": "音乐与音频"},
                {"id": 11, "category": "其他服务"}],
            subCategories: [{"subcategoriy": "Logo设计"}, {"subcategoriy": "名片设计"}, {"subcategoriy": "传单海报设计"}, {"subcategoriy": "PPT设计"}, {"subcategoriy": "UI设计"},
                {"subcategoriy": "图片精修"}, {"subcategoriy": "文化衫设计"}, {"subcategoriy": "产品外观设计"}, {"subcategoriy": "宣传册设计"}, {"subcategoriy": "横幅广告设计"}
                , {"subcategoriy": "3D&2D模型"}, {"subcategoriy": "服装纸样"}, {"subcategoriy": "园林设计"}, {"subcategoriy": "机械制图"}, {"subcategoriy": "包装设计"}, {"subcategoriy": "其他"}],
            description: "hahahahfffffffffffffffff",
            deliverTime: "",
            price:"",
            current_hostcategory: "图形与设计",
        };
    },

    methods: {},
    created: function () {
        var vm = this;
        vm.$http.get(this.url).then(function (resp) {

        }, function (resp) {

        })

    },

});