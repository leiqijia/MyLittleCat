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
      url: 'https://www.qjlei.cn/PersonalMessage/sendEmail', //仅为示例，并非真实的接口地址
      data: {
        content:content,
        email: email
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data ==='发送邮件:true'){
          wx.showModal({
            title: '提示',
            content: '发送成功',
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