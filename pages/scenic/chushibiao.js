Page({
  data:{
    imagesrc:"http://image.juntu.com/uploadfile/2016/0728/20160728105556709.jpg",
    imagesrc1:"http://image.juntu.com/uploadfile/2016/0728/20160728092234318.jpg",
    imagesrc2:"http://image.juntu.com/uploadfile/2016/0728/20160728110159579.jpg",
    imagesrc3:"http://image.juntu.com/uploadfile/2016/0728/20160728105618180.jpg",
    imagesrc4:"http://image.juntu.com/uploadfile/2016/0728/20160728092411255.jpg"
  },
 
   Modal:function(){
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