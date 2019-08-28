// Page/Setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    funArr : [
      { text: '实名认证', url: '/Page/Setting/RealName/realname'},
      { text: '修改个人信息', url: '/Page/Setting/ModifyMes/modifymes'},
      { text: '找回密码', url: '/Page/Setting/RetrievePsword/retrievepsword'},
      { text: '联系我们', url: '/Page/Setting/ContactUs/contactus'}
    ]
  },

  outLogin : function() {
    wx.request({
      url: 'https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456',
      header : {
        'content-type' : 'application/json'
      },
      success : function(e) {
        if(e.data.code){
          wx.navigateTo({
            url: '/Page/Nav/Navtion/navtion?isLogin=false'
          })
        }
      },
      fail : function() {

      }
    })
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