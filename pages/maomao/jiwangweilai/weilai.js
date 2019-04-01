// pages/maomao/jiwangweilai/weilai.js
Page({

  bind_send: function (data) {
    console.log(data);
    var content = data.detail.value.content;
    setTimeout(() => { 
    if (content == null || content == "") {
      console.log("不能为空")
      this.setData(
        { popErrorMsg: "内容不能为空" }
      );
      this.ohShitfadeOut();
      return;
    }else{
      console.log("sdfs"+content);
      wx.navigateTo({
        url: '/pages/maomao/email/email?content='+content　　// 页面 A
      })
    }},100)
  }, ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  }, 

})