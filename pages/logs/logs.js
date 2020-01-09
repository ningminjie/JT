
var app = getApp();

// var order = ['one', 'two', 'three', 'four', 'one']
// Page({
//   data: {
//     toView: "one"
//   },
 
//     lttap: function(e) {
//     for (var i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1],
//           scrollLeft: (i + 1) * 375
//         })
//         break
//       }
//     }
//   },
//   rttap:function(){
//     for (var i = order.length-1; i < order.length; --i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i - 1],
//           scrollRight: (i + 1) *375
//         })
//         break
//       }
//     }
//   }

// })
var order = ['one', 'two', 'three', 'four', 'one']
Page( {
  data: {
    toView: "one",
    menulist1: [
      {
        id:1,
        title: '相册',
         url: '/pages/subject/routeForeign',
         active: true
      },
      {id:2,
        title: '收藏',
        url: '/pages/subject/seckillList',
         active: false
      },
      {id:3,
        title: '卡包',
        // url: '/pages/layout/result?title=navigate1',
         active: false
      },
      {id:4,
        title: '相册',
        // url: '/pages/layout/result?title=navigate1',
         active: false
        
      },
      {id:5,
        title: '收藏',
        // url: '/pages/layout/result?title=navigate1',
         active: false
        
      },
      {id:6,
        title: '卡包',
        // url: '/pages/layout/result?title=navigate1',
         active: false
        
      }
    ],
    all:[
        {
          url: 'result?title=大秦温泉养生苑',
          img: 'http://image.juntu.com/uploadfile/2016/0621/20160621052756855.jpg!list.dest',
          bigtitle:'大秦温泉养生苑',
          lowtitle:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',                
          oldprice: '￥300',
          price:'￥118'
        },
        {
          url: 'result?title=大秦温泉养生苑',
          img: 'http://image.juntu.com/uploadfile/2016/0621/20160621052756855.jpg!list.dest',
          bigtitle:'大秦温泉养生苑',
          lowtitle:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',                
          oldprice: '￥300',
          price:'￥118'
        }
    ]
   
  }, 
  // huadong 
  tab: function( e ) {
       var menulist1 = this.data.menulist1;
        for(var i = 0;i < menulist1.length;i++ ) {
            if( e.currentTarget.id == menulist1[ i ].id ) {
                menulist1[ i ].active = true;
            } else {
                menulist1[ i ].active = false;
            }
        }
        this.setData( {
            menulist1: menulist1,
        })
    },
     lttap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollLeft: (i + 1) * 375
        })
        break
      }
    }
  },
  rttap:function(){
    for (var i = order.length-1; i < order.length; --i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i - 1],
          scrollRight: (i + 1) *375
        })
        break
      }
    }
  }

  
})