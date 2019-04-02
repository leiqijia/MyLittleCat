// pages/login/login.js
var util = require('../../utils/md5.js')  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    }

  },
  btLogin: function(data) {
    var userNeme = data.detail.value.userName;
    var password = data.detail.value.password;
    console.log(data.detail);
    if (password === "" || password === null || userNeme === "" || userNeme === null) {
      wx.showModal({
        title: '提示',
        content: '用户名或密码不能为空',
        confirmColor: '#118EDE',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            //console.log('用户点击确定')  
          }
        }
      });
      return false;
    } else {
      password = util.hexMD5(password);
      console.log(password);
      wx.navigateTo({
        url: '/pages/maomao/maomao',　　// 主页
      })

    }  

  },
  bdForgetPwd: function () {
    wx.navigateTo({
      url: '/pages/login/forget/forget',　　// 忘记密码页面 
    })

  },
  bdRegister: function () {
    wx.navigateTo({
      url: '/pages/login/register/register',　　// 注册页面
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
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