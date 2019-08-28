// Page/Club/CreateClub/createClub.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

  },
=======
    titleVal : '',
    descriptVal : ''
  },

  /**
   * bindSave 保存  
   * getTitle 俱乐部名称
   * getDescript 俱乐部介绍内容
  */
  getTitle: function(res) {
    this.setData({
      titleVal : res.detail.value
    })
  },
  getDescript: function(res) {
    this.setData({
      descriptVal: res.detail.value
    })
  },
  bindSave: function(res) {
    wx.request({
      url: getApp().globalData.domain +'/api/shop/getStoreInfo',
      data : {
        titleVal : this.data.titleVal,
        descriptVal: this.data.descriptVal
      },
      success : () => {
        this.showLoadingFun('创建成功');
        this.hideLoadingFun();
      },
      fail : () => {
        this.showLoadingFun('创建失败');
        this.hideLoadingFun();
      }
    })
  },
  showLoadingFun: function (tit) {
    wx.showLoading({
      title: tit
    })
  },
  hideLoadingFun: function () {
    setTimeout(function () {
      wx.hideLoading();
    }, 900)
  },

>>>>>>> 赛事小程序

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
=======
  onLoad: function (res) {
>>>>>>> 赛事小程序

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