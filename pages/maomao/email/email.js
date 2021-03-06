// pages/maomao/email/email.js
Page({
  
  formSubmit(e) {
    var content = e.detail.value.content;
    var email = e.detail.value.email;
    if (email == '' || email==null) {
      wx.showModal({
        title: '提示',
        content: '邮箱地址不能为空',
      })
      return false;
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.request({
      url: 'https://www.qjlei.cn/PersonalMessage/email/sendEmail', 
      data: {
        content:content,
        email: email,
        sendType:'sendNow'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.retCode ===0){
          wx.showModal({
            title: '提示',
            content: '发送成功',
            cancelText:'再写一封',
            confirmText:'返回主页',
            success(res){
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/maomao/maomao',　　// 注册页面
                })
                console.log('用户点击确定')
              } else if (res.cancel) {
                wx.navigateTo({
                  url: '/pages/maomao/jiwangweilai/weilai',　　// 注册页面
                })
                console.log('用户点击取消')
              }
            }
          })
        
        }else{
          wx.showModal({
            title: '提示',
            content: '发送失败',
          })
        }
      }
    })
  }, 
  onLoad: function (options) {
    this.setData({
      content: options.content,
    })
  },
})