var a
var b
Page({
    data:{
        result:''
    },
    plus:function(){
        // 转int，不然成了字符串拼接
        var c = parseInt(a) + parseInt(b)
        this.setData({
            result : c
        });
    },
    // 监听input值改变事件
    getA: function(e) {
        a = e.detail.value
    },
    getB: function(e) {
        b = e.detail.value
    }
})