Page({
   data:{
      imageSrc:'http://image.juntu.com/uploadfile/2016/1019/20161019050035259.jpg',
      bannertitle:"乐华城欢乐世界（乐华城）" ,
      bannernum:"5",
      detaillocation:" 陕西省西咸新区泾河新城沣泾大道 ",
       list: [
            {
                id: 'menpiao',
                title: '门票',
                open: false,
                listpages: [{text:'【夜场】乐华欢乐世界万圣节 成人票',tips:'可在 20:00 前预订今日票',pricejt:'￥88',pricemt:'￥150'},
                 {text:'【夜场】乐华欢乐世界万圣节 成人票',tips:'可在 16:00 前预订今日票',pricejt:'￥138',pricemt:'￥300'},
                 {text:'【夜场】乐华欢乐世界万圣节 成人票',tips:'需要以前一天取票',pricejt:'￥189',pricemt:'￥250'}]
            }
        ]
   } ,
   widgetsToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open;
            } else {
                list[i].open = false;
            }
        }
        this.setData({
            list: list
        });
    }
})