// main.js
var app = getApp();

Page( {
    data: {
        duration: 500,
        current: 0,
        tabs: [ {
            id: 1,
            name: '全部',
            active: true
        }, {
	        id: 2,
	        name: '旅游',
	        active: false
	    }],
        list1: [
           {
                url: 'result?title=大秦温泉养生苑',
                img: 'http://image.juntu.com/uploadfile/2016/0114/20160114032236989.jpg',
                text: '大秦温泉养生苑',
                title:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',
               
           } 
        ],
        list2: [
            {
                url: 'result?title=渭水汤苑温泉',
                img: 'http://image.juntu.com/uploadfile/2016/0129/20160129052348385.jpg',
                text: '渭水汤苑温泉',
                title:'西北首家慢生活减压体验中心 享受传统山水式温泉园林'
            }
        ]
    },
    // onLoad: function() {
    //     this.setData( {
    //         list1: app.getData(3),
    //         list2: app.getData(3)
    //     });
    // },
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
    },
    // tabchange: function( e ) {
    //     var tabs = this.data.tabs;
    //     for(var j = 0;j < tabs.length;j++ ) {
    //         tabs[ j ].active = e.detail.current == j;
    //     }
    //     this.setData( {
    //         tabs: tabs
    //     })
    //      }
    //,
    // lower: function(e) {
    //     //下拉到底加载新数据
    //     var list = this.data.list2;
    //     var tmp = app.getData(3);
    //     for(var i = 0;i < tmp.length;i++){
    //         tmp[i].id = tmp[i].id+i+1;
    //         list.push(tmp[i]);
    //     }
    //     this.setData( {
    //         list2: list
    //     });
    // },
    // scroll: function(e) {
    //     //console.log('scrollTop:'+e.detail.scrollTop);
    // },
    // onPullDownRefresh: function() {
    //     console.log( 'onPullDownRefresh', new Date() )
    // },
    // stopPullDownRefresh: function() {
    //     wx.stopPullDownRefresh( {
    //         complete: function( res ) {
    //             console.log( res, new Date() )
    //         }
    //     })
    // }
})