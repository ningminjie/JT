// pages/login/login.js
Page({
  data:{
    userval:null,
    pswval:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  userbind:function(event){
    // console.log(event)
    this.setData({
      userval:event.detail.value
    })
  },
  pswbind:function(event){
    // console.log(event)
    this.setData({
      pswval:event.detail.value
    })
  },
  loginbind:function(){
    //服务器查询user、psw为true
   app.data.userinfo={
     username:this.data.userval,
     pswname:this.data.pswval,
     
   }
  }
})