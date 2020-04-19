// pages/login/register/register.js
var coord = 0;
Page({


  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    imageVerify:'',
    emailVerify:'',
    x: 0,
    area_width: 80,   //可滑动区域的宽，单位是百分比，设置好后自动居中
    box_width: 100,   //滑块的宽,单位是 rpx
    maxNum: 0         //验证成功时的坐标，不需要设置，代码自动计算；
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
      url: 'https://www.qjlei.cn/PersonalMessage/user/register', 
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
      url: 'https://www.qjlei.cn/PersonalMessage/email/sendEmail', 
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
  drag(e) {
    var that = this;
    coord = e.detail.x;
  },
  dragOver(e) {
    var that = this;
    if (coord >= that.data.maxNum) {
      wx.showToast({
        title: '验证成功',
        icon: 'success',
        duration: 2000
      })
      //验证成功之后的代码
    } else {
      that.setData({
        x: 0,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth);
        var n = Math.floor(res.windowWidth * that.data.area_width / 100 - that.data.box_width / 2)
        that.setData({
          maxNum: n,
        })
      }
    }),
    wx.login({
      success(res) {
        console.log(res);
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://www.qjlei.cn/PersonalMessage/wx/getOpenId',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res.data)
             
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
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