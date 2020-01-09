//index.js
//获取应用实例
var app = getApp();

Page( {  
     onShareAppMessage: function () {
            return {
            title: '骏途旅游网',
            desc: '分享描述',
            path: '/pages/index'
            }
    },

    data: {
        indicatorDots: true,
        autoplay: true,
        current:0,        
        interval: 2500,
        duration: 500,
        swiperData: [ {
                img: 'http://image.juntu.com/uploadfile/2016/0908/20160908045357816.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/0919/20160919044632819.jpg',
                url: '/pages/result/focus2'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/1010/20161010113822930.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/0902/20160902062253388.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/0922/20160922113410916.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/1011/20161011111119728.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/1014/20161014020337762.jpg',
                url: '/pages/result/focus1'
            }, {
                img: 'http://image.juntu.com/uploadfile/2016/1014/20161014023332335.jpg',
                url: '/pages/result/focus1'
        }],
        navlist: [{
                url: '/pages/scenic/scenic',
                icon: 'http://image.juntu.com/uploadfile/2016/1009/20161009114212869.png',
                text: '景区门票'
            }, {
                url: '/pages/routeForeign/routeForeign',
                icon: 'http://image.juntu.com/uploadfile/2016/1009/20161009114227324.png',
                text: '出境游'
            }, {
                url: '/pages/routeInland/routeInland',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008090614889.png',
                text: '国内游'
            }, {
                url: '/pages/seckillList/seckillList',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008090630720.png',
                text: '低价疯抢'
            }, {
                url: '/pages/around/around',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008090646731.png',
                text: '西安周边游'
            }, {
                url: '/pages/hotel/hotel',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008090700856.png',
                text: '度假酒店'
            }, {
                url: '/pages/parentChild/parentChild',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008090714118.png',
                text: '亲子游'
            }, {
                url: '/pages/selfdriving/selfdriving',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008060210162.png',
                text: '自驾游'
        }],
        recommend_navs: [ {
                url: '/pages/login/login?title="初秋约泡"',
                icon: 'http://image.juntu.com/uploadfile/2016/1017/20161017120522681.jpg'
            }, {
                url: '/pages/result/result?title=醉爱红叶',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008114033241.jpg'
            }, {
                url: '/pages/result/result?title=出境错峰游',
                icon: 'http://image.juntu.com/uploadfile/2016/0930/20160930095842827.jpg'
            }, {
                url: '/pages/result/result?title=自驾周边',
                icon: 'http://image.juntu.com/uploadfile/2016/0930/20160930101728570.jpg'
            }, {
                url: '/pages/result/result?title=骏途直通车',
                icon: 'http://image.juntu.com/uploadfile/2016/0929/20160929120500513.png'
            }, {
                url: '/pages/result/result?title=骏途包车',
                icon: 'http://image.juntu.com/uploadfile/2016/1008/20161008105955700.jpg'
        }],
        tabs: [{
                        id: 1,
                        navTab: '周末high翻天',
                        active: true
                    }, {
                        id: 2,
                        navTab: '长假去哪玩',
                        active: false
        }],
        list1: [{
                url: 'result?title=大秦温泉养生苑',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0114/20160114032236989.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '大秦温泉养生苑',
                title:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',
                price:'￥118'
            },{
                url: 'result?title=渭水汤苑温泉',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0129/20160129052348385.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '渭水汤苑温泉',
                title:'西北首家慢生活减压体验中心 享受传统山水式温泉园林',
                price:'￥108'
            },{
                url: 'result?title=乐华欢乐世界（乐华城）',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0330/20160330101222861.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '乐华欢乐世界（乐华城）',
                title:'可随时入园，免去等待集合入园时间，亚洲超大过山车主题乐园，勇敢者的冒险乐园',
                price:'￥189'
            },{
                url: 'result?title=少华山国家森林公园',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0913/20160913021241184.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '少华山国家森林公园',
                title:'陕西东部黄金旅游线上以生态旅游，10月15日起每天早10点29元开抢',
                price:'￥55'
            },{
                url: 'result?title=秦龙温泉水上乐园',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0506/20160506094748342.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '秦龙温泉水上乐园',
                title:'西安周边唯一一个四季都可以玩的温泉水上乐园',
                price:'￥99'
            },{
                url: 'result?title=西安浐灞国家湿地公园',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0608/20160608094538956.jpg',
                iconFont1:'门票',
                iconFont2:'陕西',                
                text: '西安浐灞国家湿地公园',
                title:'春季踏青赏花 夏季观荷采莲 秋季采摘百果',
                price:'￥30'
            },{
                url: 'result?title=少华山赏红叶',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/1012/20161012115153219.jpg',
                iconFont1:'线路',
                iconFont2:'渭南',                
                text: '【直通车】<少华山赏红叶·玻璃栈道纯玩1日游>',
                title:'骏途直通车、您家门口的直通车、带您畅游三秦大地，体验不一样的周末',
                price:'￥79'
            },{
                url: 'result?title=秦岭红河谷',
                icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                img: 'http://image.juntu.com/uploadfile/2016/0512/20160512115334949.jpg',
                iconFont1:'景+酒',
                iconFont2:'陕西',                
                text: '【观太白八景·咥西府美食】<秦岭红河谷2日红叶之旅>',
                title:'温泉水中富含多种对人体有益的矿物质和微量元素，有促进血液循环，改善免疫系统',
                price:'￥420'
        }],
        list2: [{
                            url: 'result?title=巴厘岛-新加坡',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/1009/20161009115940963.jpg',
                            iconFont1:'线路',
                            iconFont2:'海岛',                
                            text: '<巴厘岛-新加坡经典特惠6晚7日游>',
                            title:'乘虎航白天航班，巴厘岛全程5晚市区精品花园酒店+新加坡精选1晚三星住宿',
                            price:'￥5450'
                        },{
                            url: 'result?title=稻城-亚丁-香格里拉',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0831/20160831020956559.jpg',
                            iconFont1:'线路',
                            iconFont2:'四川',                
                            text: '【当季热卖】<稻城-亚丁-香格里拉双卧10日游>',
                            title:'骏途直通车、您家门口的直通车、带您畅游三秦大地，体验不一样的周末',
                            price:'￥1880'
                        },{
                            url: 'result?title=马尔代夫萨芙莉',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/1009/20161009120322662.jpg',
                            iconFont1:'线路',
                            iconFont2:'海岛',                 
                            text: '<马尔代夫萨芙莉5晚7日自由行>水飞上岛+中文服务+免费wifi+含早晚餐',
                            title:'萨芙莉岛设备较新，海很干净，浮浅环境很棒，是性价比较高的岛，房间都是竹子和茅草的建筑，有那种马代淳朴风，特别亲切',
                            price:'￥10099'
                        },{
                            url: 'result?title=日本双温泉',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0824/20160824051435631.jpg',
                            iconFont1:'线路',
                            iconFont2:'日韩',                
                            text: '<日本双温泉深度览胜7日游>海航西安直飞',
                            title:'氤氲日式温泉尽情享受泡汤乐趣，御殿场奥特莱斯、大阪心斋桥、东京银座、台场充足时间自由购物，尽情淘宝到手软',
                            price:'￥8580'
                        },{
                            url: 'result?title=曼谷-芭提雅',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0824/20160824050751262.jpg',
                            iconFont1:'线路',
                            iconFont2:'东南亚',                
                            text: '【古城寻踪】<曼谷-芭提雅-古都大城5晚7日游>',
                            title:'精选奥凯航空西安直飞曼谷，三站购物店且无自费',
                            price:'￥3780'
                        },{
                            url: 'result?title=九寨沟-黄龙',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0419/20160419031554123.jpg',
                            iconFont1:'线路',
                            iconFont2:'四川',                
                            text: '<寻梦山水涧-九寨沟-黄龙双飞4日游>',
                            title:'含咸阳机场接送机、赠送价值160元的景区德勒达格--观马术表演',
                            price:'￥2980'
                        },{
                            url: 'result?title=舞动贵州',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0801/20160801091518104.jpg',
                            iconFont1:'线路',
                            iconFont2:'贵州',                
                            text: '<舞动贵州精华纯玩双飞5日游>',
                            title:'全程纯玩无购物、含西安机场接送机、西江千户苗寨体验1晚苗式风情客栈',
                            price:'￥2550'
                        },{
                            url: 'result?title=新天鹅堡+卢浮宫+壁画村',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0419/20160419095604466.jpg',
                            iconFont1:'线路',
                            iconFont2:'欧洲',                
                            text: '【盈尚】<德法意瑞4国12日游>新天鹅堡+卢浮宫+壁画村',
                            title:'下单立减300元，★亲临如仙境般的童话城堡【新天鹅堡】 ★瑞士精选最著名度假胜地【琉森】 ★艺术圣殿【卢浮宫】，品鉴著名的爱神维纳斯、胜利女神、蒙娜丽莎，您将惊叹于人类的艺术智慧',                            
                            price:'￥8600'
                        },{
                            url: 'result?title=阿联酋迪拜-阿布扎比',
                            icon: 'http://static.juntu.com/mv2.0/images/index-flag_a4cff9f.png',
                            img: 'http://image.juntu.com/uploadfile/2016/0824/20160824051100559.jpg',
                            iconFont1:'线路',
                            iconFont2:'中东非',                
                            text: '<阿联酋迪拜-阿布扎比惊喜5晚7日游>西安起止，四星+五星住宿标准',
                            title:'西安起止，南方航空，语言沟通顺畅，省时省事省钱，入住3晚迪拜国际四星级酒店+1晚阿布扎比国际五星级酒店+1晚阿之曼海滨酒店',
                            price:'￥5899'
        }],  
    },
    scroll:function(){
        //显示消息提示框
        wx.showToast({
                        title: '加载中',
                        icon: 'loading',
                        duration: 10000
        }),
        setTimeout(function(){
            wx.hideToast()
        },2000)
    },
      tab: function( e ) {            
        var tabs = this.data.tabs;
        var current = 0;
        for(var i = 0;i < tabs.length;i++ ) {
            if( e.currentTarget.id == tabs[ i ].id ) {
                tabs[ i ].active = true;
                current = i;
            } else {
                tabs[ i ].active = false;
            }
        }
        this.setData( {
            tabs: tabs,
            current: current
        })
    }
})
