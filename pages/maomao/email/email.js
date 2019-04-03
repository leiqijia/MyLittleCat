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
           
          })
          wx.navigateTo({
            url: '/pages/login/register/register',　　// 注册页面
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