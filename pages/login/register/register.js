// pages/login/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    imageVerify:'',
    emailVerify:''
  },
  username:function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  imageverify:function(e){
    this.setData({
      imageVerify: e.detail.value
    })
  },
  btRegister: function(data){
    var user_name = data.detail.value.userName;
    var image_verify = data.detail.value.image_verify;
    var emali_verify = data.detail.value.emali_verify;
    if (user_name == null || user_name === "") {
      wx.showModal({
        title: '提示',
        content: '邮箱不能为空'
      })
      return false;
    }
    if ( image_verify === "" || image_verify === "" ) {
      wx.showModal({
        title: '提示',
        content: '图形验证码不能为空'
      })
      return false;
    }
    if (  emali_verify === "" || emali_verify === "") {
      wx.showModal({
        title: '提示',
        content: '邮箱验证码不能为空'
      })
      return false;
    }
    wx.request({
      url: 'https://www.qjlei.cn/PersonalMessage/register', //仅为示例，并非真实的接口地址
      data: {
        content: imageverify,
        email: user_name,
        imageVerify: image_verify,
        emailVerify: emali_verify
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.retCode === '0') {
          wx.navigateTo({
            url: '/pages/maomao/maomao',　　// 主页
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '注册失败',
          })
        }
      }
    })
  },
  btEmaliVerify: function (data) {
    var username = data.currentTarget.dataset.username
    var imageverify = data.currentTarget.dataset.imageverify
    if (username == null || username === "" ){
      wx.showModal({
        title: '提示',
        content: '邮箱不能为空'
      })
      return false;
    } else if (imageverify == null || imageverify === "" ){
      wx.showModal({
        title: '提示',
        content: '图形验证码不能为空'
      })
      return false;
    }
    wx.request({
      url: 'https://www.qjlei.cn/PersonalMessage/sendEmail', //仅为示例，并非真实的接口地址
      data: {
        content: imageverify,
        email: username
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data === '发送邮件:true') {
          wx.showModal({
            title: '提示',
            content: '发送成功',
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '发送失败',
          })
        }
      }
    })
    console.log(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})