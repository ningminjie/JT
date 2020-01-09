


Page( {
  data: {
    imageSrc:'http://image.juntu.com/uploadfile/2016/1010/20161010112223550.jpg ',
    menulist1: [
      {
        id:1,
        title: '全部',
         url: '/pages/scenic/all',
         active: true
      },
      {id:2,
        title: '人文古迹',
        url: '/pages/scenic/renwen',
         active: false
      },
      {id:3,
        title: '自然景观',
         url: '/pages/scenic/ziran',
         active: false
      },
      {id:4,
        title: '文化艺术',
         url: '/pages/scenic/wenhua',
         active: false
        
      },
      {id:5,
        title: '主题公园',
        url: '/pages/scenic/zhuti',
         active: false
        
      },
      {id:6,
        title: '亲自出游',
        url: '/pages/scenic/qinzi',
         active: false        
      } ],   
    all:[
        {
          url: '/pages/scenic/order',
          img: 'http://image.juntu.com/uploadfile/2015/0713/20150713010819620.jpg!list.dest',
          bigtitle:'大秦温泉养生苑',
          lowtitle:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',                
          oldprice: '￥300',
          price:'￥118'
        },
         {
          url: '/pages/scenic/order',
          img: 'http://image.juntu.com/uploadfile/2016/0818/20160818092150750.jpg!list.dest',
          bigtitle:'渭水汤苑温泉',
          lowtitle:'洗浴餐饮娱乐一体化 儿童水上乐园 享受特色温泉园林',                
          oldprice: '￥188',
          price:'￥25'
        },
        {
          url: 'result?title=大秦温泉养生苑',
          img: 'http://image.juntu.com/uploadfile/2016/0621/20160621052756855.jpg!list.dest',
          bigtitle:'大秦温泉养生苑',
          lowtitle:'西北五省规模最大的温泉之一  体验帝王温泉养生  感悟秦朝文化',                
          oldprice: '￥300',
          price:'￥118'
        }] 
  },
    Modal:function(){
    
    }, 
   tab: function( e ) {
       var menulist1 = this.data.menulist1;
        for(var i = 0;i < menulist1.length;i++ ) {
            if( e.currentTarget.id == menulist1[ i ].id ) {
                menulist1[ i ].active = true;
                menulist1[ i ].curr = false;
            } else {
                menulist1[ i ].active = false;
                menulist1[ i ].curr = true;
            }
        }
        this.setData( {
            menulist1: menulist1,
        })
    }  ,
    jumpToNavigateTo:function(){
   //显示模态弹窗【出师表图】
      //   wx.showModal({
      //   title: '提示',
      //   content: '确定进入【出师表】吗?',
      //   success: function(res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //          wx.navigateTo({
      //             url:'/pages/scenic/chushibiao'
      //           })
      //     }else{
      //          console.log('用户点击取消')
      //     }
      //   }       
      // })   
  //​显示操作菜单【出师表图】
        wx.showActionSheet({
              itemList: ['A', 'B', 'C'],
              success: function(res) {
                console.log(res.tapIndex)
              },
              fail: function(res) {
                console.log(res.errMsg)
              }
            })  
    }
})