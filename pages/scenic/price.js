Page({
//   onLoad: function () {
//  wx.setNavigationBarTitle({
//       title: '当前页面'
//      })

//   },
  
   tap1: function () { 
     wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
        }) 
  },
     tap2: function () { 
     wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
        }),
        setTimeout(function(){
         wx.hideToast()
        },2000)
  },
     tap3: function () { 
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success: function(res) {
                if (res.confirm) {
                     console.log('用户点击确定')
                     wx.redirectTo({
                      url: '/pages/scenic/price'
                     })
                    // wx.navigateTo({
                    // url: '/pages/scenic/price'
                    // })
                    //会保留页面
               }else{
                 wx.navigateBack({
                  delta:2
                })   
               }
            },
        })
  },
     tap4: function () { 
        wx.showActionSheet({
                itemList: ['A', 'B', 'C'],
                success: function(res) {
                    if (!res.cancel) {
                    console.log(res.tapIndex)
                    }
                }
        })
     }

  
})