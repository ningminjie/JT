//location.js
//获取应用实例

Page({
  onLoad: function () {
    console.log('地图定位！')
    var that = this
    wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
            var latitude = res.latitude; 
            var longitude = res.longitude; 
            wx.openLocation({
              latitude:latitude,
              longitude:longitude,
              scale:1,
              name:"钟楼",
              address:"陕西省西咸新区泾河新城沣泾大道"
            })
        }
    });


   

  }
})