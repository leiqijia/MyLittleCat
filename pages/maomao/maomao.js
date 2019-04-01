Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1: "我是你的小矮人",
    id2: "爱在西元前",
    id3: "你是我的白雪公主",
    id4: "快乐！",
    maomao: "美好的世界"
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  clickButton:function(event){
    console.log(event.target.id)
  
    this.setData({ maomao: event.target.id});
  },
  bindtap1: function () {
    wx.navigateTo({
      url: '/pages/maomao/suiyiji/suiyiji'　　// 页面 A
    })
  },
  bindtap2: function () {
    wx.navigateTo({
      url: '/pages/maomao/jiwangweilai/weilai'　　// 页面 A
    })
  },
  bindtap3: function () {
    wx.navigateTo({
      url: '/pages/maomao/liuzhuguowang/guowang'　　// 页面 A
    })
  }
})