// Page/Club/CreateList/createlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isblock:false
  },

  toastFun: function (title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 1600
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    let that = this;
    wx.request({
      url: getApp().globalData.domain + '/api/shop/getStoreInfo',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        u_id:'0',
      },
    //  返回 res.data.code=1,说明已经创建
      success: function (res) {
        let status = res.data.code;
        if (status == '1') {
          that.setData({
            isblock: true
          });
        } else {
          that.setData({
            isblock: false
          });
          that.toastFun('您还没有创建俱乐部,正在转向俱乐部'); //这步好像没执行
          wx.navigateTo({
            url: '/Page/Club/CreateClub/createClub'
          });
        }
      }
    });
      


    


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